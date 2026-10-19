export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // Helper for Admin Auth
    const authenticate = (request) => {
      const authHeader = request.headers.get('Authorization');
      if (!authHeader) return false;

      const match = authHeader.match(/^Basic\s+(.*)$/);
      if (!match) return false;

      try {
        const decoded = atob(match[1]);
        const [username, password] = decoded.split(':');
        return password === env.DTECH_PASS;
      } catch (err) {
        return false;
      }
    };

    const requireAuth = () => {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });
    };

    try {
      // Admin API: List contracts
      if (request.method === 'GET' && path === '/api/contracts') {
        if (!authenticate(request)) return requireAuth();

        let contracts = [];
        const list = await env.CONTRACT_KV.list();
        for (const key of list.keys) {
          const contractStr = await env.CONTRACT_KV.get(key.name);
          if (contractStr) {
            try {
              const contract = JSON.parse(contractStr);
              contracts.push({ id: key.name, title: contract.title, createdAt: contract.createdAt });
            } catch(e) {}
          }
        }
        contracts.sort((a, b) => b.createdAt - a.createdAt);
        return new Response(JSON.stringify(contracts), { headers: { ...corsHeaders, "Content-Type": "application/json" }});
      }

      // Admin API: Create contract
      if (request.method === 'POST' && path === '/api/contracts') {
        if (!authenticate(request)) return requireAuth();

        const body = await request.json();
        if (!body.title || !body.content) {
            return new Response(JSON.stringify({ error: "Missing title or content" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" }});
        }

        const id = crypto.randomUUID();
        const contract = {
          title: body.title,
          content: body.content,
          createdAt: Date.now()
        };

        await env.CONTRACT_KV.put(id, JSON.stringify(contract));
        return new Response(JSON.stringify({ id, ...contract }), { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" }});
      }

      // Admin API: Delete contract
      if (request.method === 'DELETE' && path.startsWith('/api/contracts/')) {
        if (!authenticate(request)) return requireAuth();

        const id = path.split('/').pop();
        await env.CONTRACT_KV.delete(id);
        return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" }});
      }

      // Public API: Get single contract
      if (request.method === 'GET' && path.startsWith('/api/contracts/')) {
        const id = path.split('/').pop();
        const contractStr = await env.CONTRACT_KV.get(id);

        if (!contractStr) {
          return new Response(JSON.stringify({ error: "Contract not found" }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" }});
        }
        return new Response(contractStr, { headers: { ...corsHeaders, "Content-Type": "application/json" }});
      }

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }});
    }

    return new Response(JSON.stringify({ error: "Not Found" }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
};
