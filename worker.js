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

    // Hardcoded Contracts
    const hardcodedContracts = {
      "referral-agreement-1": {
        id: "referral-agreement-1",
        title: "Independent Referral & Revenue-Share Agreement",
        createdAt: 1730000000000,
        content: `
<h2>INDEPENDENT REFERRAL & REVENUE-SHARE AGREEMENT</h2>
<p>This Agreement is entered into on this <input type="date" class="inline-input" style="width: 150px;"> by and between:</p>
<p><strong>THE D-TECH ECOSYSTEM (Pty) Ltd</strong> (trading as D-TECH or D-TECH Services), a private company registered in South Africa, Registration Number: 2026/697427/07, Email: info@dtech-services.co.za (hereinafter referred to as the "Company" or "Licensor"),</p>
<p>and</p>
<p><input type="text" placeholder="Full Name" class="inline-input" style="width: 300px;">, ID Number: <input type="text" placeholder="ID Number" class="inline-input" style="width: 200px;"> (hereinafter referred to as the "Referral Partner" or "Marketer").</p>

<h3>1. APPOINTMENT & ENGAGEMENT</h3>
<p><strong>1.1</strong> The Company hereby appoints the Referral Partner on a non-exclusive, independent contractor basis to market, introduce, and refer prospective paying clients to the Company’s proprietary software platforms:</p>
<ul>
    <li>D-TECH RES (Residence Management System); and</li>
    <li>D-TECH Business Portal (Business CRM & Invoicing Platform).</li>
</ul>
<p><strong>1.2 Independent Status:</strong> Nothing in this Agreement creates an employment, partnership, joint venture, or agency relationship. The Referral Partner has no authority to bind the Company to any contract or legal liability.</p>

<h3>2. REVENUE-SHARE & COMMISSION STRUCTURE</h3>
<p><strong>2.1 Commission Rates:</strong> For each prospective client introduced by the Referral Partner who successfully subscribes to and pays for an active monthly software subscription (Note: "net monthly subscription fees" means the gross subscription fee less any applicable VAT, payment gateway transaction fees, refunds, and discounts):</p>
<ul>
    <li><strong>D-TECH Business Portal:</strong> The Referral Partner shall earn 50% (fifty percent) of the net monthly subscription fees received by the Company from that referred client.</li>
    <li><strong>D-TECH RES (Residence Management):</strong> The Referral Partner shall earn 40% (forty percent) of the net monthly subscription fees received by the Company from that referred client.</li>
</ul>
<p><strong>2.2 Duration of Revenue Share:</strong> The commission shall apply to each qualifying client for a maximum initial period of twelve (12) consecutive billing cycles (1 year) from the date of the client’s first cleared subscription payment.</p>
<p><strong>2.3 Year-Two Renegotiation:</strong> Prior to the conclusion of the initial twelve (12) month period, both parties shall negotiate in good faith regarding an ongoing account maintenance rate or renewed percentage based on business metrics and portfolio performance. If no new agreement is reached, an ongoing account maintenance commission rate of 15% (fifteen percent) shall apply automatically.</p>
<p><strong>2.4 Payment Condition (Cash Inflow):</strong> Commission is strictly earned upon the actual receipt and clearance of subscription funds into the Company's business bank account. No commission is payable on free trials, pilots, non-payments, chargebacks, or refunds.</p>
<p><strong>2.5 Disbursement:</strong> The Company agrees to disburse all accrued monthly commission payments to the Referral Partner's designated South African bank account within 5 (five) business days following the end of each billing calendar month.</p>
<p><strong>2.6 Earnings Tracking:</strong> The Company will provide the Referral Partner with access to a digital dashboard linked to the software platforms, which will display real-time earnings, the number of active clients, estimated revenue, and current subscription plans. For the duration of this current year, as the sole active marketer, all newly registered clients will be automatically attributed to the Referral Partner unless otherwise specified.</p>

<h3>3. INTELLECTUAL PROPERTY & PROPRIETARY RIGHTS</h3>
<p><strong>3.1</strong> The Referral Partner expressly acknowledges that all software, source code, UI designs, brand marks, 3D/2D engines, documentation, databases, and trade secrets related to D-TECH, D-TECH RES, and D-TECH Business Portal remain the exclusive intellectual property of the Company.</p>
<p><strong>3.2</strong> The Referral Partner is granted a limited, revocable, non-exclusive license to use the Company’s approved marketing collateral, brochures, and platform demo links solely for introducing potential clients.</p>

<h3>4. CLIENT OWNERSHIP & ACCOUNT ONBOARDING</h3>
<p><strong>4.1</strong> All clients, student residences, and registered businesses remain the sole operational and contractual customers of the Company.</p>
<p><strong>4.2</strong> The Referral Partner's role is strictly limited to lead generation and introductory communication. The Company remains entirely responsible for technical onboarding, software uptime, bug fixes, and hosting.</p>

<h3>5. CONFIDENTIALITY & NON-CIRCUMVENTION</h3>
<p><strong>5.1</strong> Both parties agree to keep strictly confidential any non-public business information, source code details, pricing strategies, customer lists, and financial figures disclosed during this collaboration.</p>
<p><strong>5.2 Non-Circumvention:</strong> The Referral Partner agrees not to bypass, copy, or replicate the Company’s platform architecture or attempt to direct referred clients to competing platforms during the term of this Agreement and for a period of 12 (twelve) months following its termination.</p>
<p><strong>5.3 POPIA Compliance (Data Protection):</strong> Both parties shall strictly comply with the Protection of Personal Information Act (POPIA). The Referral Partner will ensure that prospective clients have consented to their contact information being shared with the Company for the purpose of software demonstration and onboarding.</p>

<h3>6. TERM & TERMINATION</h3>
<p><strong>6.1</strong> This Agreement takes effect upon signing and continues on a month-to-month basis or until terminated.</p>
<p><strong>6.2 Termination for Convenience:</strong> Either party may terminate this Agreement by providing thirty (30) days written notice (including via confirmed email or WhatsApp communication) to the other party.</p>
<p><strong>6.3 Vesting of Earned Commissions:</strong> In the event of standard termination, any active paying clients already successfully introduced by the Referral Partner prior to the notice date shall continue to earn their respective 40% or 50% revenue share for the remainder of their original 12-month billing period, provided the client remains active and paying.</p>
<p><strong>6.4 Immediate Termination:</strong> The Company reserves the right to terminate this Agreement immediately if the Referral Partner engages in fraudulent activity, misrepresents platform features, or disparages the brand. Irrespective of the cause of termination, any commissions already earned and accrued up to the date of termination shall remain payable to the Referral Partner.</p>

<h3>7. GOVERNING LAW</h3>
<p>This Agreement is governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising shall fall under the jurisdiction of the courts of South Africa.</p>

<h3>SIGNATURES & ACCEPTANCE</h3>
<div style="display: flex; justify-content: space-between; margin-top: 40px; gap: 40px;">
    <div style="flex: 1;">
        <p><strong>For THE D-TECH ECOSYSTEM (Pty) Ltd:</strong></p>
        <p>Signature: <input type="text" class="signature-input" placeholder="Sign here..."></p>
        <p>Name: <input type="text" class="inline-input" value="Founder / Director" readonly></p>
        <p>Capacity: Founder / Director</p>
        <p>Date: <input type="date" class="inline-input"></p>
    </div>
    <div style="flex: 1;">
        <p><strong>For the Referral Partner:</strong></p>
        <p>Signature: <input type="text" class="signature-input" placeholder="Sign here..."></p>
        <p>Full Name: <input type="text" class="inline-input" placeholder="Type name here..."></p>
        <p>ID Number: <input type="text" class="inline-input" placeholder="Type ID here..."></p>
        <p>Banking Details (Bank, Acc No, Branch): <textarea class="inline-input" placeholder="Type banking details here..." style="width: 100%; height: 50px;"></textarea></p>
        <p>Date: <input type="date" class="inline-input"></p>
    </div>
</div>
        `
      }
    };

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

        // Add hardcoded contracts
        for (const key in hardcodedContracts) {
            contracts.push({ id: key, title: hardcodedContracts[key].title, createdAt: hardcodedContracts[key].createdAt });
        }

        if (env.CONTRACT_KV) {
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

        if (env.CONTRACT_KV) {
             await env.CONTRACT_KV.put(id, JSON.stringify(contract));
        } else {
             return new Response(JSON.stringify({ error: "KV not configured" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }});
        }

        return new Response(JSON.stringify({ id, ...contract }), { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" }});
      }

      // Admin API: Delete contract
      if (request.method === 'DELETE' && path.startsWith('/api/contracts/')) {
        if (!authenticate(request)) return requireAuth();

        const id = path.split('/').pop();
        if (hardcodedContracts[id]) {
            return new Response(JSON.stringify({ error: "Cannot delete hardcoded contracts" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" }});
        }

        if (env.CONTRACT_KV) {
            await env.CONTRACT_KV.delete(id);
        }
        return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" }});
      }

      // Public API: Get single contract
      if (request.method === 'GET' && path.startsWith('/api/contracts/')) {
        const id = path.split('/').pop();

        if (hardcodedContracts[id]) {
            return new Response(JSON.stringify(hardcodedContracts[id]), { headers: { ...corsHeaders, "Content-Type": "application/json" }});
        }

        let contractStr = null;
        if (env.CONTRACT_KV) {
            contractStr = await env.CONTRACT_KV.get(id);
        }

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
