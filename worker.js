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
      "referral-c": {
        id: "referral-c",
        title: "Independent Referral & Revenue-Share Agreement",
        createdAt: 1730000000000,
        content: `
<div class="header">
                <h1>INDEPENDENT REFERRAL & REVENUE-SHARE AGREEMENT</h1>
            </div>

            <p>This Agreement is entered into on this <input type="date" class="inline-input" style="width: 150px;"> by and between:</p>
            <p><strong>THE D-TECH ECOSYSTEM (Pty) Ltd</strong> (trading as D-TECH Services), a private company registered in South Africa, Registration Number: 2026/697427/07, Email: info@dtech-services.co.za (hereinafter referred to as the "Company" or "Licensor"),</p>
            <p>and</p>
            <p><input type="text" placeholder="Full Name" class="inline-input" style="width: 300px;">, ID Number: <input type="text" placeholder="ID Number" class="inline-input" style="width: 200px;"> (hereinafter referred to as the "Referral Partner" or "Marketer").</p>

            <h3>1. APPOINTMENT & ENGAGEMENT</h3>
            <p><strong>1.1</strong> The Company hereby appoints the Referral Partner on a non-exclusive, independent contractor basis to market, introduce, and refer prospective paying clients to the Company’s proprietary software platforms:</p>
            <ul>
                <li>D-TECH RES (Residence Management System); and</li>
                <li>D-TECH Business Portal (Business CRM & Invoicing Platform).</li>
            </ul>
            <p><strong>1.2 Independent Status:</strong> Nothing in this Agreement creates an employment, partnership, joint venture, or agency relationship. The Referral Partner has no authority to bind the Company to any contract or legal liability. The Referral Partner is solely responsible for declaring and paying all applicable taxes (including to SARS) arising from commissions earned under this Agreement.</p>

            <h3>2. REVENUE-SHARE & COMMISSION STRUCTURE</h3>
            <p><strong>2.1 Commission Rates:</strong> For each prospective client introduced by the Referral Partner who successfully subscribes to and pays for an active monthly software subscription (Note: "net monthly subscription fees" means the gross subscription fee less any applicable VAT, payment gateway transaction fees, refunds, and discounts):</p>
            <ul>
                <li><strong>D-TECH Business Portal:</strong> The Referral Partner shall earn 50% (fifty percent) of the net monthly subscription fees received by the Company from that referred client.</li>
                <li><strong>D-TECH RES (Residence Management):</strong> The Referral Partner shall earn 40% (forty percent) of the net monthly subscription fees received by the Company from that referred client.</li>
            </ul>
            <p><strong>2.2 Duration of Revenue Share:</strong> The commission shall apply to each qualifying client for a maximum initial period of twelve (12) consecutive billing cycles (1 year) from the date of the client’s first cleared subscription payment.</p>
            <p><strong>2.3 Year-Two Renegotiation:</strong> Prior to the conclusion of the initial twelve (12) month period, both parties shall negotiate in good faith regarding an ongoing account maintenance rate or renewed percentage based on business metrics and portfolio performance. If no new agreement is reached, an ongoing account maintenance commission rate of 15% (fifteen percent) shall apply automatically, strictly limited to the initial portfolio of clients acquired by the Referral Partner during the first twelve (12) month period.</p>
            <p><strong>2.4 Payment Condition (Cash Inflow):</strong> Commission is strictly earned upon the actual receipt and clearance of subscription funds into the Company's business bank account. No commission is payable on free trials, pilots, non-payments, chargebacks, or refunds.</p>
            <p><strong>2.5 Disbursement:</strong> The Company agrees to disburse all accrued monthly commission payments to the Referral Partner's designated South African bank account within 5 (five) business days following the end of each billing calendar month.</p>
            <p><strong>2.6 Earnings Tracking:</strong> The Company will provide the Referral Partner with access to a digital dashboard linked to the software platforms, which will display real-time earnings, the number of active clients, estimated revenue, and current subscription plans. To ensure proper attribution, the Referral Partner must log all leads using a designated referral link, referral code, or an approved lead log prior to the client subscribing.</p>
            <p><strong>2.7 Clawbacks:</strong> If a commission has already been disbursed and the associated client subsequently reverses their payment or initiates a chargeback, the Company reserves the right to deduct the corresponding commission amount from the Referral Partner's future payouts.</p>

            <h3>3. INTELLECTUAL PROPERTY & PROPRIETARY RIGHTS</h3>
            <p><strong>3.1</strong> The Referral Partner expressly acknowledges that all software, source code, UI designs, brand marks, 3D/2D engines, documentation, databases, and trade secrets related to D-TECH, D-TECH RES, and D-TECH Business Portal remain the exclusive intellectual property of the Company.</p>
            <p><strong>3.2</strong> The Referral Partner is granted a limited, revocable, non-exclusive license to use the Company’s approved marketing collateral, brochures, and platform demo links solely for introducing potential clients.</p>

            <h3>4. CLIENT OWNERSHIP & ACCOUNT ONBOARDING</h3>
            <p><strong>4.1</strong> All clients, student residences, and registered businesses remain the sole operational and contractual customers of the Company.</p>
            <p><strong>4.2</strong> The Referral Partner's role is strictly limited to lead generation and introductory communication. The Company remains entirely responsible for technical onboarding, software uptime, bug fixes, and hosting.</p>
            <p><strong>4.3 No Unauthorized Commitments:</strong> The Referral Partner shall not offer unauthorized custom discounts, promise unreleased software features, or make any binding commitments on behalf of the Company.</p>

            <h3>5. CONFIDENTIALITY & NON-CIRCUMVENTION</h3>
            <p><strong>5.1</strong> Both parties agree to keep strictly confidential any non-public business information, source code details, pricing strategies, customer lists, and financial figures disclosed during this collaboration.</p>
            <p><strong>5.2 Non-Circumvention:</strong> The Referral Partner agrees not to bypass, copy, or replicate the Company’s platform architecture or attempt to direct referred clients to competing platforms during the term of this Agreement and for a period of 12 (twelve) months following its termination.</p>
            <p><strong>5.3 POPIA Compliance (Data Protection):</strong> Both parties shall strictly comply with the Protection of Personal Information Act (POPIA). The Referral Partner will ensure that prospective clients have consented to their contact information being shared with the Company for the purpose of software demonstration and onboarding.</p>

            <h3>6. TERM & TERMINATION</h3>
            <p><strong>6.1</strong> This Agreement takes effect upon signing and continues on a month-to-month basis or until terminated.</p>
            <p><strong>6.2 Termination for Convenience:</strong> Either party may terminate this Agreement by providing thirty (30) days written notice (including via confirmed email or WhatsApp communication) to the other party.</p>
            <p><strong>6.3 Vesting of Earned Commissions:</strong> In the event of standard termination, any active paying clients already successfully introduced by the Referral Partner prior to the notice date shall continue to earn their respective 40% or 50% revenue share for the remainder of their original 12-month billing period, provided the client remains active and paying.</p>
            <p><strong>6.4 Immediate Termination:</strong> The Company reserves the right to terminate this Agreement immediately if the Referral Partner engages in fraudulent activity, misrepresents platform features, or disparages the brand. In the event of an amicable termination, accrued commissions shall remain payable. However, in the event of termination for cause under this section (e.g., fraud, misrepresentation, data theft, or brand disparagement), the Referral Partner shall immediately forfeit any unpaid or accrued commissions.</p>

            <h3>7. GOVERNING LAW</h3>
            <p>This Agreement is governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising shall fall under the jurisdiction of the courts of South Africa.</p>

            <div class="signature-section">
                <div class="signature-block">
                    <strong>For THE D-TECH ECOSYSTEM (Pty) Ltd:</strong>
                    <p>Signature: <input type="text" class="signature-input" value="Mr SJ Mochebane" readonly style="width: 100%; color: #000; border-color: #000;"></p>
                    <p>Name: <input type="text" class="inline-input" value="Seakwa jonas mochebane" readonly style="width: 100%; color: #000; border-color: #000;"></p>
                    <p>Capacity: <span style="font-family: inherit; font-size: 12pt;">Director</span></p>
                    <p>Date: <input type="text" class="inline-input" value="09 Oct 2026" readonly style="width: 100%; color: #000; border-color: #000;"></p>
                </div>
                <div class="signature-block">
                    <strong>For the Referral Partner:</strong>
                    <p>Signature: <input type="text" class="signature-input" placeholder="Sign here..." style="width: 100%;"></p>
                    <p>Full Name: <input type="text" class="inline-input" placeholder="Type name here..." style="width: 100%;"></p>
                    <p>ID Number: <input type="text" class="inline-input" placeholder="Type ID here..." style="width: 100%;"></p>
                    <p style="margin-bottom: 5px; font-weight: bold;">Banking Details:</p>
                    <p>Bank Name: <input type="text" class="inline-input" placeholder="Type bank name here..." style="width: 100%;"></p>
                    <p>Account Number: <input type="text" class="inline-input" placeholder="Type account number here..." style="width: 100%;"></p>
                    <p>Branch Code: <input type="text" class="inline-input" placeholder="Type branch code here..." style="width: 100%;"></p>
                    <p>Date: <input type="date" class="inline-input" style="width: 100%;"></p>
                </div>
            </div>
        `
      },
      "referral-f": {
        id: "referral-f",
        title: "Growth Partner & Referral Agreement",
        createdAt: 1730000000000,
        content: `
<div class="header">
                <h1>GROWTH PARTNER & REFERRAL AGREEMENT</h1>
            </div>

            <p>Let's make this simple! This Agreement kicks off on <input type="date" class="inline-input" style="width: 150px;"> between:</p>
            <p><strong>THE D-TECH ECOSYSTEM (Pty) Ltd</strong> (trading as D-TECH Services), a private company registered in South Africa (Registration Number: 2026/697427/07, Email: info@dtech-services.co.za) (that's us!),</p>
            <p>and</p>
            <p><input type="text" placeholder="Full Name" class="inline-input" style="width: 300px;">, ID Number: <input type="text" placeholder="ID Number" class="inline-input" style="width: 200px;"> (that's you, our "Growth Partner").</p>

            <h3>1. WHAT WE'RE DOING TOGETHER</h3>
            <p>You're teaming up with us as an independent partner to spread the word and refer paying clients to our software platforms:</p>
            <ul>
                <li>D-TECH RES (Residence Management System); and</li>
                <li>D-TECH Business Portal (Business CRM & Invoicing Platform).</li>
            </ul>
            <p><strong>Just to be clear:</strong> This isn't an employment contract. You are an independent contractor. Because you are your own boss, you are solely responsible for declaring and paying any personal taxes (like to SARS) on the commissions you earn from us.</p>

            <h3>2. HOW YOU GET PAID (THE GOOD STUFF)</h3>
            <p><strong>2.1 Commission Rates:</strong> When you refer someone and they subscribe and pay for our software, here is your cut of the net monthly subscription fees (that’s the fee after VAT, payment fees, refunds, and discounts):</p>
            <ul>
                <li><strong>D-TECH Business Portal:</strong> You earn 50% of the net monthly fees!</li>
                <li><strong>D-TECH RES (Residence Management):</strong> You earn 40% of the net monthly fees!</li>
            </ul>
            <p><strong>2.2 The First Year:</strong> You keep earning that sweet percentage for up to 12 consecutive months for every client you bring in, starting from their first cleared payment.</p>
            <p><strong>2.3 Year Two & Beyond:</strong> After those first 12 months, your commission for that initial batch of clients drops to a 15% ongoing maintenance rate. (Or, if things are going incredibly well, we can chat about employment or new terms!).</p>
            <p><strong>2.4 When We Pay:</strong> You only get paid when we get paid. Commissions are earned once the cash hits our bank account. No commission on free trials, non-payments, or refunds.</p>
            <p><strong>2.5 Payout Days:</strong> We deposit your earnings straight into your South African bank account within 5 business days after the end of each month.</p>
            <p><strong>2.6 Tracking Leads:</strong> To make sure you get credit for your hard work, you must track your leads using your assigned referral link or code before the client signs up.</p>
            <p><strong>2.7 Chargebacks:</strong> If a client reverses their payment or does a chargeback after we’ve already paid you, we will simply deduct that commission amount from your next payout.</p>

            <h3>3. A FEW IMPORTANT RULES</h3>
            <p><strong>3.1 Stick to the Script:</strong> We love your hustle, but please use our official pricing. You cannot invent custom discounts, promise features we haven't built, or make legally binding commitments on our behalf.</p>
            <p><strong>3.2 Who Owns What:</strong> The software, code, logos, and everything related to D-TECH remains 100% our property. You get to use our approved marketing materials to help you make sales.</p>
            <p><strong>3.3 Taking Care of the Client:</strong> The people you refer become our clients. We handle the tech setup, bugs, and hosting. Your job is just to make the introduction!</p>

            <h3>4. KEEPING THINGS FAIR & CONFIDENTIAL</h3>
            <p><strong>4.1 Shhh!:</strong> Keep our business info, pricing, and customer lists confidential.</p>
            <p><strong>4.2 Don't Copy Us:</strong> Don't try to copy our software or direct the clients you bring us to a competitor while we work together (and for 12 months after we part ways).</p>
            <p><strong>4.3 Respect Privacy (POPIA):</strong> Make sure the people you refer are okay with you sharing their contact info with us.</p>

            <h3>5. ENDING THE AGREEMENT</h3>
            <p><strong>5.1 Walking Away:</strong> Either of us can end this agreement by giving 30 days written notice (an email or WhatsApp works!).</p>
            <p><strong>5.2 Your Earned Cash:</strong> If we part on good terms, you’ll still get paid your 40% or 50% for the remainder of the 12-month period for the active clients you already brought in.</p>
            <p><strong>5.3 Playing by the Rules:</strong> If you get caught doing something shady (like fraud, stealing data, or trash-talking the brand), we will end this agreement immediately, and you will forfeit any unpaid commissions.</p>

            <h3>6. THE LEGAL BITS</h3>
            <p>This Agreement is governed by the laws of South Africa.</p>

            <div class="signature-section">
                <div class="signature-block">
                    <strong>For D-TECH Services:</strong>
                    <p>Signature: <input type="text" class="signature-input" value="Mr SJ Mochebane" readonly style="width: 100%; color: #000; border-color: #000;"></p>
                    <p>Name: <input type="text" class="inline-input" value="Seakwa jonas mochebane" readonly style="width: 100%; color: #000; border-color: #000;"></p>
                    <p>Capacity: <span style="font-family: inherit; font-size: 12pt;">Director</span></p>
                    <p>Date: <input type="text" class="inline-input" value="09 Oct 2026" readonly style="width: 100%; color: #000; border-color: #000;"></p>
                </div>
                <div class="signature-block">
                    <strong>For the Referral Partner:</strong>
                    <p>Signature: <input type="text" class="signature-input" placeholder="Sign here..." style="width: 100%;"></p>
                    <p>Full Name: <input type="text" class="inline-input" placeholder="Type name here..." style="width: 100%;"></p>
                    <p>ID Number: <input type="text" class="inline-input" placeholder="Type ID here..." style="width: 100%;"></p>
                    <p style="margin-bottom: 5px; font-weight: bold;">Banking Details:</p>
                    <p>Bank Name: <input type="text" class="inline-input" placeholder="Type bank name here..." style="width: 100%;"></p>
                    <p>Account Number: <input type="text" class="inline-input" placeholder="Type account number here..." style="width: 100%;"></p>
                    <p>Branch Code: <input type="text" class="inline-input" placeholder="Type branch code here..." style="width: 100%;"></p>
                    <p>Date: <input type="date" class="inline-input" style="width: 100%;"></p>
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
