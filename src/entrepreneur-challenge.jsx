import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, RadialBarChart, RadialBar, PieChart, Pie } from "recharts";

const BOOK = { title: "The Wealth Action Playbook", author: "Dana Mercer" };

const PHASES = [
  {
    id: 1, title: "FOUNDATION", subtitle: "Days 1–7",
    color: "#B45309", light: "#FEF3C7", border: "#FDE68A",
    accent: "#92400E", icon: "🧱", tagline: "Build your mental model",
    moodMessage: "Every expert was once a beginner. You are exactly where you need to be right now. 🌱",
    challenges: [
      {
        day: 1, title: "The Idea Audit", type: "Reflect",
        task: "Write 10 business ideas in 10 minutes. No filtering. Then circle the one that scares you most — that's your signal.",
        deliverable: "A list + 1 circled idea",
        stretch: "Interview 1 person about a problem they hate dealing with",
        emotion: "Feeling overwhelmed? Good. That means you're stepping outside your comfort zone. There's no wrong idea today — just write.",
        bookRef: {
          concept: "Your Cash Machine",
          insight: "Dana's entire playbook is built on one idea: you already have skills people will pay for right now. Your Cash Machine is simply packaging what you already know into a service or product. You don't need to invent something new — you need to monetize what's already in your head.",
          action: "List your top 3 skills or things people regularly ask you for help with. That list is your starting Cash Machine.",
        },
        miniSteps: [
          "Set a 10-minute timer on your phone",
          "Open a blank notebook or Google Doc",
          "Write numbers 1–10 down the page before you start",
          "Don't stop writing — even bad ideas count (e.g. 'rent out my car', 'tutoring', 'tiffin service')",
          "When the timer ends, read all 10 aloud to yourself",
          "Circle the one that gives you a little knot in your stomach",
          "Write 2 sentences about WHY that idea excites and scares you",
        ],
        practical: [
          "Use Google Keep or a physical diary — doesn't matter which",
          "No idea is too small: ₹500/month side hustles count",
          "Ideas to spark you: food delivery, reselling, home services, coaching, digital products",
        ],
      },
      {
        day: 2, title: "Study a Real Small Business", type: "Research",
        task: "Visit a local small business (café, laundry, repair shop). Ask the owner: 'What's the hardest part of running this?' Take notes.",
        deliverable: "3 key pain points you learned",
        stretch: "Ask: 'Would you ever consider selling this business?'",
        emotion: "Talking to a stranger feels awkward — every first-time entrepreneur feels this. Do it anyway. One conversation can teach you more than 10 books.",
        bookRef: {
          concept: "Ask Before You Assume",
          insight: "Dana teaches that most people build businesses based on what they think people want — not what they actually need. She insists on direct conversations with real potential customers before investing a single rupee. She calls this 'market research done the real way.'",
          action: "Go into your visit with a specific question: 'If you could hire someone to do one thing in your business tomorrow, what would it be?' The answer is your opportunity.",
        },
        miniSteps: [
          "Choose a small business within walking distance of your home",
          "Visit during off-peak hours (not during lunch rush)",
          "Introduce yourself honestly: 'I'm learning about business, can I ask you 3 questions?'",
          "Ask: 'What does a typical day look like for you?'",
          "Ask: 'What's the hardest part of running this?'",
          "Ask: 'What do you wish you knew before starting?'",
          "Write notes immediately after leaving — don't trust your memory",
        ],
        practical: [
          "Target: chai stall, pharmacy, stationery shop, or auto garage",
          "Be respectful of their time — 10 minutes max",
          "Offer to come back and share what you learn — start building the relationship",
        ],
      },
      {
        day: 3, title: "The Business Model Canvas", type: "Learn",
        task: "Google 'Business Model Canvas'. Fill out a blank one for ANY business you know — even McDonald's. Understand all 9 boxes.",
        deliverable: "A completed canvas (photo or digital)",
        stretch: "Fill a second canvas for your Day 1 idea",
        emotion: "It might look complicated at first — but once you do it once, you'll see every business differently forever. Trust the process.",
        bookRef: {
          concept: "The Fast Cash Formula",
          insight: "Dana simplifies business down to three questions she calls the Fast Cash Formula: What do you sell? Who do you sell it to? How do you get paid? The Business Model Canvas is the expanded version of this. If you can't answer her 3 questions in 30 seconds, your model isn't clear yet.",
          action: "After filling the canvas, test Dana's shortcut: answer her 3 questions in one breath. If you can't, keep simplifying.",
        },
        miniSteps: [
          "Search 'Business Model Canvas template PDF' and download a blank one",
          "Watch one 5-minute YouTube video explaining the 9 boxes",
          "Pick a business you know really well (Zomato, a local dhaba, your family shop)",
          "Fill in 'Customer Segments' first — who buys from them?",
          "Then 'Value Proposition' — what problem do they solve?",
          "Fill the remaining 7 boxes slowly, one at a time",
          "Take a photo or screenshot of your completed canvas",
        ],
        practical: [
          "Use Canva (free) for a clean digital version",
          "Recommended: search 'Business Model Canvas explained in 5 minutes' on YouTube",
          "Don't worry if some boxes feel uncertain — write your best guess",
        ],
      },
      {
        day: 4, title: "Money Fundamentals", type: "Learn",
        task: "Learn the difference between Revenue, Profit, and Cash Flow. Then find a real business's P&L statement online and read it for 20 minutes.",
        deliverable: "Write a 5-sentence summary of what you learned",
        stretch: "Calculate break-even for a hypothetical coffee shop",
        emotion: "Money topics can feel intimidating if you didn't study commerce. That's okay. Think of it like learning cricket rules — confusing at first, obvious once you play.",
        bookRef: {
          concept: "Plug the Cash Leaks",
          insight: "Dana dedicates a full chapter to 'cash leaks' — the small, unnoticed expenses that silently drain a business dry. She says most struggling businesses don't have a revenue problem; they have a cash-leak problem. Knowing your P&L is how you find and seal those leaks before they sink you.",
          action: "While reading any P&L today, circle every expense and ask: 'Is this making money or costing money?' Dana's rule — every rupee spent must have a job.",
        },
        miniSteps: [
          "Write these 3 definitions in your own words: Revenue, Profit, Cash Flow",
          "Search 'simple P&L statement example India' — open any result",
          "Identify the 'Total Revenue' line — highlight it",
          "Find the 'Net Profit' line — note how different it is from revenue",
          "Understand which 'expenses' are eating the most profit",
          "Write a 5-sentence summary: what surprised you most?",
          "Bonus: search 'what is break even point simple example'",
        ],
        practical: [
          "Revenue = total sales; Profit = what's left after costs; Cash Flow = actual money in your bank",
          "Real P&L to study: search 'Zomato annual report P&L 2023'",
          "Rule of thumb: a healthy small business keeps 15–30% as net profit",
        ],
      },
      {
        day: 5, title: "The Customer Obsession", type: "Create",
        task: "Pick a target customer for your idea. Write a 1-page 'customer persona' — their age, job, fears, goals, and what a perfect Tuesday looks like for them.",
        deliverable: "1-page persona document",
        stretch: "Find 3 real people online who match your persona",
        emotion: "This is where most beginners skip ahead — don't. Understanding your customer is the single most powerful business skill. Every minute here pays off 10x later.",
        bookRef: {
          concept: "Know Your Buyer, Know Your Cash",
          insight: "Dana stresses that the fastest path to cash is targeting people who already have the money and already have the pain. She calls this identifying your 'ready buyer' — someone actively looking for a solution and with means to pay. A persona built around a ready buyer generates cash faster than any marketing campaign.",
          action: "Add one question to your persona: 'How much would this person pay RIGHT NOW to solve this problem?' That number is your starting price point.",
        },
        miniSteps: [
          "Give your persona a real name (e.g., 'Priya, 34, Pune')",
          "Write their job, income range, and family situation",
          "List their TOP 3 daily frustrations",
          "List their TOP 3 goals for the next year",
          "Describe their perfect Tuesday morning in 3 sentences",
          "Write: 'They would pay for _______ because _______'",
          "Ask yourself: 'Do I know someone like this? Can I talk to them?'",
        ],
        practical: [
          "Free tool: HubSpot's Make My Persona Generator (search it)",
          "Think about who already has the problem your idea solves",
          "The more specific the persona, the more useful — 'everyone' is never your customer",
        ],
      },
      {
        day: 6, title: "Competitor Deep Dive", type: "Research",
        task: "Find 3 competitors to your idea (or a business you'd want to acquire). Analyze their Google reviews. What do customers love? Hate?",
        deliverable: "A comparison table of strengths & weaknesses",
        stretch: "Identify a gap none of them are filling",
        emotion: "Finding competitors can feel discouraging — 'it's already been done!' But remember: competition means there's a proven market. Your edge is YOU.",
        bookRef: {
          concept: "Find the Gap, Fill the Gap",
          insight: "Dana teaches that complaints in the marketplace are cash opportunities. Every 1-star review your competitor receives is a customer telling you exactly what service they'd pay more for. She calls this 'gap mining' — the richest niches are found not by inventing demand but by listening to unmet demand already screaming in the market.",
          action: "Take the top 3 complaints you find in competitor reviews. Write a one-line service promise that directly addresses each one. That's your differentiation.",
        },
        miniSteps: [
          "Search your idea + city on Google (e.g., 'home cleaning service Vadodara')",
          "Pick the top 3 results",
          "Open each business's Google Maps listing",
          "Read their 5-star reviews — what do customers rave about?",
          "Read their 1–2 star reviews — what do customers complain about?",
          "Create a table: Competitor | Strengths | Weaknesses | Price",
          "Write 1 sentence: 'My business would be different because ______'",
        ],
        practical: [
          "Also search on IndiaMART and Justdial for local competitors",
          "Look at their social media — how do they communicate with customers?",
          "The complaints in reviews = your product roadmap",
        ],
      },
      {
        day: 7, title: "Week 1 Reflection", type: "Reflect",
        task: "Write a 1-page 'Week 1 Letter to Yourself'. What surprised you? What scared you? What excited you? What's one myth you've already busted?",
        deliverable: "Honest written reflection",
        stretch: "Share it with one trusted person and get their reaction",
        emotion: "You made it through Week 1. That alone puts you ahead of 90% of people who say 'someday I'll start a business.' Be proud. Seriously.",
        bookRef: {
          concept: "The Millionaire Mindset Shift",
          insight: "Dana opens her playbook by drawing a sharp line between people who think about money and people who make money. She says the number one thing holding most beginners back isn't knowledge or capital — it's the belief that building a business is for 'other people.' Week 1 was about proving to yourself that you're not 'other people.'",
          action: "In your reflection, write this sentence and complete it honestly: 'I used to believe that starting a business required ______, but now I know ______.'",
        },
        miniSteps: [
          "Find a quiet 20 minutes — no phone distractions",
          "Start with: 'Dear [Your Name], here's what I learned this week...'",
          "Write about the moment that surprised you most",
          "Write about the moment you felt most scared",
          "Write about what genuinely excited you",
          "Write: 'One thing I believed about business that isn't true: _____'",
          "End with: 'Next week, I will ______'",
        ],
        practical: [
          "Keep this letter — you'll read it in 30 days and be amazed at your growth",
          "Voice memos work too if writing feels slow",
          "No judgment, no editing — this is private and honest",
        ],
      },
    ],
  },
  {
    id: 2, title: "PLANNING", subtitle: "Days 8–16",
    color: "#065F46", light: "#ECFDF5", border: "#A7F3D0",
    accent: "#047857", icon: "📐", tagline: "Design before you build",
    moodMessage: "Planning isn't procrastination — it's the difference between building on sand and building on rock. You're doing the real work. 🏗️",
    challenges: [
      {
        day: 8, title: "The One-Page Business Plan", type: "Create",
        task: "Write a ONE-page business plan for your idea. Sections: Problem, Solution, Customers, Revenue Model, Key Costs, How You'll Get Customers. No fluff.",
        deliverable: "1-page business plan",
        stretch: "Get brutally honest feedback from a skeptical friend",
        emotion: "A business plan doesn't need to be 50 pages. In fact, the simpler it is, the clearer your thinking. If you can't say it simply, you don't understand it yet — and that's okay.",
        bookRef: {
          concept: "The Simple Business Blueprint",
          insight: "Dana is famously against long, complicated business plans. She says a real plan fits on one page because complexity is the enemy of execution. Her blueprint has just three zones: Revenue In, Costs Out, and Profit Remaining. Everything else is decoration until you have customers.",
          action: "After writing your plan, apply Dana's cash test: underline every line that directly creates revenue. If less than half is underlined, rewrite the plan with more focus on income activities.",
        },
        miniSteps: [
          "Create a Google Doc with 6 headings: Problem / Solution / Customers / Revenue / Costs / Marketing",
          "Under 'Problem': write 2–3 sentences describing the pain you solve",
          "Under 'Solution': describe your business in plain language a 10-year-old could understand",
          "Under 'Customers': paste your Day 5 persona summary",
          "Under 'Revenue': how exactly will you make money? (Per sale? Subscription? Commission?)",
          "Under 'Costs': list your top 5 expenses to start",
          "Under 'Marketing': how will your first 10 customers find you?",
        ],
        practical: [
          "Target: finish this in 90 minutes, not 90 days",
          "Search 'lean canvas one-pager' for a clean visual template",
          "This document will evolve — Version 1 just needs to exist",
        ],
      },
      {
        day: 9, title: "Pricing Psychology", type: "Learn",
        task: "Research 3 pricing strategies: Cost-Plus, Value-Based, and Competitive Pricing. Then decide how YOUR idea would be priced and why.",
        deliverable: "Pricing decision with a written rationale",
        stretch: "Test your price on 5 strangers — would they pay it?",
        emotion: "Pricing is where many beginners undercharge and burn out. You are not a charity. Your time and work have real value. Charge accordingly.",
        bookRef: {
          concept: "Package Your Value, Not Your Time",
          insight: "Dana dedicates a chapter to why people who charge by the hour stay poor. She insists you must package your skills into outcomes and charge for results. 'Stop selling hours. Start selling transformations.' A client doesn't pay for 3 hours of your time — they pay for the result those 3 hours produce.",
          action: "Reframe your price as a transformation: instead of 'I charge ₹500/hour,' say 'I charge ₹3,000 to deliver [specific outcome] within [timeframe].' Write both versions and notice which one feels more powerful.",
        },
        miniSteps: [
          "Search and read about: Cost-Plus Pricing (cost + markup percentage)",
          "Read about: Value-Based Pricing (price by customer's benefit, not your cost)",
          "Read about: Competitive Pricing (price relative to what rivals charge)",
          "Calculate your Cost-Plus price: what does it cost you + 30% margin?",
          "Calculate your Value-Based price: what is the outcome worth to your customer?",
          "Look up competitor prices from your Day 6 research",
          "Make a final decision: what will you charge and why? Write it down.",
        ],
        practical: [
          "Rule: never be the cheapest — compete on value, not price",
          "Indian market insight: ₹999 feels very different from ₹1,000 psychologically",
          "For services: charge per outcome, not per hour",
        ],
      },
      {
        day: 10, title: "Legal & Structure Basics", type: "Learn",
        task: "Research: Sole Proprietorship vs. LLC vs. Partnership. Understand GST registration in India, a business PAN, and what a basic contract looks like.",
        deliverable: "A summary of which structure fits you and why",
        stretch: "Find a local CA (Chartered Accountant) and ask for a free 15-min call",
        emotion: "Legal stuff sounds scary but you don't need to know everything — just enough to not make expensive mistakes. This one day of learning protects you for years.",
        bookRef: {
          concept: "Build the Container Before You Fill It",
          insight: "Dana uses the metaphor of a 'container' — your legal and financial structure — as the vessel that holds your wealth. She warns that many entrepreneurs start generating cash but lose it because they never set up the right structure. Cash earned without a proper container leaks away in taxes, liabilities, and avoidable costs.",
          action: "Dana's first legal action for any new entrepreneur: open a dedicated business bank account, even before you're officially registered. Separate your personal and business money from Day 1.",
        },
        miniSteps: [
          "Search 'Sole Proprietorship vs Private Limited India 2024' — read one article",
          "Note: Sole Prop = simplest, cheapest to start; Pvt Ltd = more credibility, more paperwork",
          "Search 'GST registration threshold India' — note the ₹20–40 lakh turnover triggers",
          "Search 'business PAN card India how to get' — read the process",
          "Search 'simple service contract template India' — download one and read it",
          "Decide: which structure makes sense for your idea RIGHT NOW?",
          "Write a 1-paragraph summary of your decision and why",
        ],
        practical: [
          "For most beginners: start as Sole Proprietorship, upgrade to Pvt Ltd later",
          "CA consultation costs ₹500–₹2,000 for one session — worth every rupee",
          "Free resource: IndiaFilings.com has plain-English guides for all structures",
        ],
      },
      {
        day: 11, title: "Your First Financial Model", type: "Create",
        task: "Build a simple 12-month projection in Excel/Google Sheets. Estimate monthly revenue, costs, and profit. Use realistic — not dream — numbers.",
        deliverable: "A spreadsheet with 12-month projections",
        stretch: "Run a 'worst case' scenario where sales are 50% of expected",
        emotion: "Your numbers will feel scary at first — that's normal. The goal isn't perfection, it's clarity. A rough honest number beats a perfect optimistic lie every time.",
        bookRef: {
          concept: "Weekly Cash Targets",
          insight: "Dana doesn't think in months or years — she thinks in weeks. Her system starts with a simple question: 'What is your weekly cash target?' She breaks annual income goals into weekly revenue numbers because weeks feel real and urgent. A ₹12 lakh annual goal is abstract; a ₹23,000/week target is something you can wake up and chase every Monday.",
          action: "Take your 12-month revenue projection and divide it by 52. That's your weekly cash target. Write it on a sticky note and put it where you'll see it every morning.",
        },
        miniSteps: [
          "Open Google Sheets — create columns: Month | Revenue | Fixed Costs | Variable Costs | Net Profit",
          "List your fixed costs (rent, salary, subscriptions) — these don't change month to month",
          "List your variable costs (materials, delivery, commissions) — these scale with sales",
          "Month 1: estimate conservatively — maybe 5 customers?",
          "Grow month-by-month realistically (not 10x per month)",
          "Add a 'Total' row at the bottom",
          "Highlight any month where profit goes negative — those months need a plan",
        ],
        practical: [
          "Search 'simple 12 month P&L projection Google Sheets template' for a starting point",
          "Fixed costs = rent, salary, subscriptions; Variable = per-unit costs that change with volume",
          "Rule: if you can't survive 6 months of losses, you need a leaner model",
        ],
      },
      {
        day: 12, title: "Acquisition 101", type: "Learn",
        task: "Research how to buy an existing small business in India. Look up: business brokers, IndiaMART listings, valuation multiples (what is 'seller's discretionary earnings'?).",
        deliverable: "Written summary of the acquisition process",
        stretch: "Find one actual small business listed for sale and analyze it",
        emotion: "Buying a business feels like it's only for 'rich people' — but many small businesses sell for 1–3x annual profit. It might be closer to reach than you think. Don't dismiss this path yet.",
        bookRef: {
          concept: "Buy the Machine, Don't Build It",
          insight: "Dana talks about the strategic shortcut of acquiring an existing cash-flowing business rather than starting one cold. A business with existing customers, an established brand, and proven revenue is a cash machine you can step into immediately — versus spending 12–18 months building from scratch. 'Buy cash flow. Don't just dream about it.'",
          action: "Search for one business listing today with at least 2 years of operating history. An established business is Dana's preferred path to fast, reliable cash flow for first-time buyers.",
        },
        miniSteps: [
          "Search 'buy small business India' and 'business for sale India broker'",
          "Note these platforms: Businessesforsale.com, BizBuySell India, IndiaMART",
          "Learn the term 'SDE' (Seller's Discretionary Earnings) — this is your key valuation metric",
          "Typical valuation: 1–3x annual SDE for small businesses",
          "Search for one real listing in any sector that interests you",
          "Note: asking price, annual revenue, what's included in the sale",
          "Write a 1-page summary of what the full acquisition process looks like step by step",
        ],
        practical: [
          "Also look at Quikr Business and OLX Business Listings for local deals",
          "Red flag: seller won't share financials = walk away immediately",
          "Green flag: seller wants to retire and has loyal customers = real opportunity",
        ],
      },
      {
        day: 13, title: "Due Diligence Crash Course", type: "Learn",
        task: "Learn what 'due diligence' means when buying a business. Research the 5 key areas: Financial, Legal, Operational, Customer, and Employee due diligence.",
        deliverable: "A due diligence checklist of 20+ items",
        stretch: "Apply your checklist to the business you found on Day 12",
        emotion: "Due diligence is how you protect yourself. It's not distrust — it's professionalism. Every successful acquisition starts with asking uncomfortable questions. Be the person who asks them.",
        bookRef: {
          concept: "Your Team Does the Deep Work",
          insight: "Dana emphasizes that no entrepreneur should do due diligence alone. She insists that a CA, a lawyer, and an experienced operator must each review different parts of any acquisition. Trying to do it yourself to 'save money' is, in her words, 'the most expensive mistake a buyer makes.' Your team's fees are your insurance policy.",
          action: "Build your due diligence team before you need it: identify one CA, one lawyer, and one person who has operated a similar business. These three people are non-negotiable on any real deal.",
        },
        miniSteps: [
          "Financial DD: request last 3 years of P&L, bank statements, and GST returns",
          "Legal DD: check for pending court cases, trademark issues, and lease agreements",
          "Operational DD: shadow the business for one day if possible — see how it really runs",
          "Customer DD: talk to 3–5 actual customers without the owner present",
          "Employee DD: understand who the key people are and if they'll stay post-sale",
          "Build a checklist table: Area | Question | Status | Red Flag?",
          "Aim for 20+ checklist items across all 5 areas",
        ],
        practical: [
          "Free template: search 'small business due diligence checklist PDF'",
          "Always hire a CA to verify financial statements independently — don't skip this",
          "Key question to always ask the seller: 'Why are you selling this business?'",
        ],
      },
      {
        day: 14, title: "Funding Options in India", type: "Research",
        task: "Research 5 ways to fund a small business in India: Bootstrapping, MSME loans (Mudra Yojana), Angel investors, Friends & Family, and Seller Financing.",
        deliverable: "A funding comparison table with pros/cons",
        stretch: "Check your eligibility for a Mudra loan",
        emotion: "'I don't have money to start' is the most common excuse — and the least valid. India has more funding schemes for first-time entrepreneurs than almost any country. Let's find yours.",
        bookRef: {
          concept: "OPM — Other People's Money",
          insight: "One of Dana's most quoted concepts is OPM: Other People's Money. She argues that using only your own savings is the slowest and riskiest way to build a business. Instead, she teaches how to structure deals using loans, investor capital, seller financing, and partnerships so your own cash stays protected. 'The wealthy don't use their own money. They use their own strategy.'",
          action: "For each funding option you research today, ask Dana's OPM question: 'Under what conditions would someone else fund this for me?' Write your answer for at least 2 of the 5 options.",
        },
        miniSteps: [
          "Search 'Pradhan Mantri Mudra Yojana eligibility 2024' — read about Shishu/Kishore/Tarun tiers",
          "Search 'SIDBI small business loan India' — understand their startup lending",
          "Search 'angel investors India seed stage' — look at Indian Angel Network",
          "Understand seller financing: the seller lends you their own business price over time",
          "Create a table: Funding Type | Amount Available | Interest/Cost | Pros | Cons | Who It's For",
          "Circle the 1–2 options most relevant to YOUR situation right now",
          "Write: 'My most realistic funding path is _____ because _____'",
        ],
        practical: [
          "Mudra: Shishu = up to ₹50,000 | Kishore = ₹50K–₹5L | Tarun = ₹5L–₹10L",
          "For acquisition: seller financing reduces upfront cash needed dramatically",
          "Friends & family: always put agreements in writing — this protects relationships, not just money",
        ],
      },
      {
        day: 15, title: "Build Your Advisory Circle", type: "Action",
        task: "Identify 3 people you want in your corner: 1 experienced entrepreneur, 1 domain expert, 1 financial/legal advisor. Reach out to all 3 this week.",
        deliverable: "3 messages sent (screenshot proof!)",
        stretch: "Join one entrepreneurship WhatsApp group or local business network",
        emotion: "Asking for help feels vulnerable. But every mentor you've ever admired was once helped by someone too. People genuinely want to help — you just have to ask. The worst answer is no.",
        bookRef: {
          concept: "Your Team Makes You Rich",
          insight: "Dana devotes an entire section to what she calls your 'Wealth Team' — a circle of advisors that every serious entrepreneur must build before they need it. She is direct: solo entrepreneurs stay small. Entrepreneurs with teams scale fast. Her Wealth Team includes a financial advisor, a tax strategist, a legal expert, and a mentor who has already done what you want to do.",
          action: "Dana's exact instruction: 'Find one person who is living the life you want and ask them one question: What's the single most important thing I should do right now?' Then do exactly that thing.",
        },
        miniSteps: [
          "List 3 names: one entrepreneur you admire (even slightly), one expert in your field, one CA or lawyer",
          "They don't need to be famous — a neighbor who runs a business counts",
          "Draft a short message: 'I'm starting a business in [area] and would love 15 min of your wisdom. Can we connect?'",
          "Send on WhatsApp, LinkedIn, or email — wherever they're reachable",
          "Don't wait for replies before sending all 3",
          "Screenshot all 3 sent messages as your deliverable",
          "Follow up once after 3 days if no response — one follow-up is never pushy",
        ],
        practical: [
          "LinkedIn is powerful — most people reply to genuine, short messages",
          "CII Young Indians (Yi) and TiE chapters are great local networks in India",
          "Be specific: 'I'm building a home cleaning service in Vadodara' beats 'I want to start a business'",
        ],
      },
      {
        day: 16, title: "Mid-Challenge Audit", type: "Reflect",
        task: "Score yourself 1–10 on: Clarity of idea, Financial understanding, Legal knowledge, Network strength. Write 1 action for each score below 7.",
        deliverable: "Scored audit + action plan",
        stretch: "Revisit your Week 1 letter — what's changed?",
        emotion: "Halfway through. You've done more in 16 days than most people do in 16 months. Be honest with yourself — that's not criticism, it's the fuel for the second half.",
        bookRef: {
          concept: "Weekly Cash Review",
          insight: "Dana holds what she calls a 'weekly cash review' — a structured personal audit of income, expenses, leads, and next actions. She considers this the single most important habit of a growing entrepreneur. Most people review their finances monthly (too late) or never. Dana reviews them every Monday morning, creating a constant feedback loop between action and results.",
          action: "Add a recurring Monday reminder to your calendar: '15-min cash review.' This week, use it for your audit. Going forward, use it to track your weekly cash target from Day 11.",
        },
        miniSteps: [
          "Open your journal and score yourself honestly across 4 areas (1–10 each)",
          "Score 1: Clarity of Idea — can you describe your business in 1 sentence?",
          "Score 2: Financial Understanding — do you know your break-even and monthly costs?",
          "Score 3: Legal Knowledge — do you know what structure you'd use and why?",
          "Score 4: Network Strength — do you have at least 1 advisor or mentor contact?",
          "For each score below 7: write ONE specific action to improve it this week",
          "Read back through your Day 8 business plan — does it need updating?",
        ],
        practical: [
          "No score below 7 is a failure — it's a direction, not a judgment",
          "Share your audit with your advisory circle from Day 15",
          "At this point you already know more than 80% of people who say they want to start a business",
        ],
      },
    ],
  },
  {
    id: 3, title: "LAUNCH", subtitle: "Days 17–30",
    color: "#4C1D95", light: "#F5F3FF", border: "#DDD6FE",
    accent: "#6D28D9", icon: "🚀", tagline: "Real action, real feedback",
    moodMessage: "This is the phase where most people freeze. You won't. Action is the antidote to fear. One small step today beats a perfect plan forever. 🔥",
    challenges: [
      {
        day: 17, title: "Your MVP in 1 Day", type: "Create",
        task: "Build the most basic version of your idea that you could show someone TODAY. No code needed — a WhatsApp message, a flyer, a Google Form, a physical prototype.",
        deliverable: "Something tangible to show",
        stretch: "Show it to 5 people and record their raw reactions",
        emotion: "It won't be perfect. Do it anyway. Done and imperfect is infinitely more valuable than perfect and imaginary. Your MVP is not your final product — it's your first conversation.",
        bookRef: {
          concept: "Start With What You Have",
          insight: "Dana opens her launch chapters with a challenge: 'What can you sell in the next 48 hours using only what you already have?' She argues that waiting until you're 'ready' is fear in disguise. Her 'Ready, Fire, Aim' approach: you learn faster from a flawed product in front of real people than from a perfect product that lives only in your head.",
          action: "Dana's 48-hour cash challenge: take your MVP and ask 10 people if they'd pay for it today. Not 'would you be interested' — specifically: 'Would you pay ₹[X] for this right now?' Count the yeses.",
        },
        miniSteps: [
          "Decide: what's the SMALLEST version of your idea that someone could understand?",
          "Option A: Write a WhatsApp message describing your service and send to 5 contacts",
          "Option B: Make a Canva flyer in 30 minutes with your offer, price, and contact info",
          "Option C: Create a Google Form as a mock 'sign-up' for your service",
          "Option D: Draw your product on paper and photograph it",
          "Show it to at least 3 real people today",
          "Note their first reaction — that single word is your most honest data",
        ],
        practical: [
          "Canva (free) is perfect for quick flyers and service mockups",
          "A WhatsApp Business account takes 5 minutes to set up and looks professional",
          "MVP rule: if you're not a little embarrassed by it, you waited too long to launch",
        ],
      },
      {
        day: 18, title: "First Sale Attempt", type: "Action",
        task: "Try to get your first sale, signup, or commitment — even for ₹1. The goal is a real YES from a real human who isn't your parent.",
        deliverable: "Document the attempt — win or lose",
        stretch: "Get 3 people to say they would pay",
        emotion: "Rejection is not failure. Every no brings you one step closer to your yes. The entrepreneurs who succeed are not the ones who never got rejected — they're the ones who kept going anyway.",
        bookRef: {
          concept: "The Sales Conversation Script",
          insight: "Dana provides a simple 4-part sales conversation script: (1) Ask about their problem, (2) Show you understand the cost of that problem, (3) Present your solution, (4) Make a specific ask with a price. She calls this the 'cash conversation' and says most people lose sales not because their product is bad — but because they never make a clear, confident ask.",
          action: "Use Dana's script today: 'I noticed you struggle with [problem]. That probably costs you [time/money/stress]. I've built something that solves that — it's ₹[price]. Would you like to start this week?' Say it out loud 5 times before your first call.",
        },
        miniSteps: [
          "Identify your 3 most likely first customers — people who ALREADY have the problem you solve",
          "Call or message the first one personally — not a broadcast to a group",
          "Say: 'I'm starting [business]. Would you be willing to try it for ₹[price]?'",
          "If they say yes: confirm the order and agree on specific next steps",
          "If they say no: ask 'What would make this interesting for you?'",
          "Contact all 3 today, not just one",
          "Write down exactly what happened — the words, their reaction, and what you felt",
        ],
        practical: [
          "Your first customer is usually someone who already knows and trusts you",
          "Price low enough to get your first yes — you can raise prices after delivering value",
          "A 'pre-order' counts as a sale — take the commitment even before you deliver",
        ],
      },
      {
        day: 19, title: "Negotiation Basics", type: "Learn",
        task: "Study 3 negotiation principles for buying a business or closing deals: BATNA, anchoring, and the power of silence. Practice one in a low-stakes real situation.",
        deliverable: "Written reflection on your practice negotiation",
        stretch: "Negotiate a discount at any store today",
        emotion: "Negotiation isn't about winning or losing — it's about finding what's fair for both sides. You deserve fair deals. Learning to ask confidently is a life skill, not just a business skill.",
        bookRef: {
          concept: "Ask for More Than You Need",
          insight: "Dana's negotiation philosophy is straightforward: always ask for more than you expect to receive, because you can always come down but never go up. She also emphasizes that the person most willing to walk away from a deal holds the most power. She calls this 'negotiating from abundance, not desperation.'",
          action: "Before any negotiation today, write down your walk-away number. Dana's rule: if you don't know what you'll walk away from, you'll always accept less than you deserve.",
        },
        miniSteps: [
          "Learn BATNA: 'Best Alternative to a Negotiated Agreement' — know your walk-away point before any deal",
          "Learn Anchoring: always give the first number — it sets the reference point for everything that follows",
          "Learn Silence: after making an offer, stop talking — the next person to speak often concedes",
          "Find a low-stakes situation to practice today: buy vegetables, negotiate a vendor price",
          "Use anchoring: quote slightly more than what you actually want",
          "After your ask — stay silent for 5 full seconds (it will feel very long)",
          "Write what happened and how it felt in your journal",
        ],
        practical: [
          "Book recommendation: 'Never Split the Difference' by Chris Voss — read just Chapter 1",
          "In India: negotiation is expected in many contexts — not negotiating is leaving money on the table",
          "Practice in small markets first — it builds the muscle memory needed for big deals",
        ],
      },
      {
        day: 20, title: "Write Your Pitch", type: "Create",
        task: "Write a 60-second pitch for your business or acquisition target. It must answer: What is it? Who is it for? Why you? Why now? Record yourself delivering it.",
        deliverable: "Video of your pitch (even just phone camera)",
        stretch: "Deliver it live to a stranger or mentor and get feedback",
        emotion: "Hearing your own voice on video is uncomfortable for almost everyone. Do it 3 times and it gets easier. Your ability to articulate your vision clearly IS your business skill.",
        bookRef: {
          concept: "The 30-Second Commercial",
          insight: "Dana calls your pitch your '30-second commercial' and considers it one of the most important tools in your business toolkit. She says most entrepreneurs can't clearly explain what they do in under 60 seconds — and this costs them deals, partnerships, and customers every day. Her formula: Problem → Solution → Who You Serve → What You Want From This Person.",
          action: "Dana's commercial test: deliver your pitch to someone at a social gathering (or family dinner) and measure whether they immediately ask a follow-up question. If they change the subject, your pitch needs work. If they lean in, it's working.",
        },
        miniSteps: [
          "Write the pitch script: max 150 words",
          "Structure: Hook (1 line) → Problem (2 lines) → Solution (2 lines) → Why you (1 line) → Ask (1 line)",
          "Example hook: 'Every day in Vadodara, 500 families spend 2 hours searching for reliable home repair. I'm fixing that.'",
          "Read the script aloud 3 times — edit anything that sounds unnatural or stiff",
          "Record a video on your phone front camera — just one take to start",
          "Watch it back once — don't cringe, just observe what to improve",
          "Record a second take with improvements — use that one as your deliverable",
        ],
        practical: [
          "Use your phone front camera in good natural lighting — that's completely enough",
          "Speak to one imaginary person, not a crowd — it sounds more natural on camera",
          "If you feel nervous: slow down by 30%, you'll automatically sound more confident",
        ],
      },
      {
        day: 21, title: "The Acquisition Offer", type: "Create",
        task: "For the business you researched on Day 12 — write a mock Letter of Intent (LOI). Cover: Offer price, payment terms, due diligence period, and conditions.",
        deliverable: "Draft LOI document",
        stretch: "Research what a real LOI looks like legally",
        emotion: "Writing an offer for a real business makes it feel real — because it IS real. Even if this LOI is practice, the thinking you do today will shape the actual deal you make tomorrow.",
        bookRef: {
          concept: "Structure Deals So You Win Before You Sign",
          insight: "Dana is emphatic that deal structure matters more than deal size. A poorly structured ₹50 lakh deal can ruin you. A well-structured ₹10 lakh deal can make you. She teaches entrepreneurs to always build in protective conditions — due diligence periods, contingency clauses, performance guarantees — so you're never trapped in a bad deal.",
          action: "In your LOI, add Dana's non-negotiable condition: a 30-day due diligence clause with a full refund of any deposit if conditions are not met. This single clause has saved more money than any other deal term.",
        },
        miniSteps: [
          "Search 'Letter of Intent to purchase small business template India'",
          "Section 1: Parties — your name and the business name/owner",
          "Section 2: Offer Price — state a specific number based on 1.5–2x annual SDE",
          "Section 3: Payment Terms — how much upfront, how much financed or deferred",
          "Section 4: Due Diligence Period — request 30 days to review all records",
          "Section 5: Conditions — what must be true for you to close (e.g., 'current staff agree to stay')",
          "Section 6: Expiry — give the offer a 7-day response window to create urgency",
        ],
        practical: [
          "LOI is non-binding — it's an invitation to negotiate, not a final contract",
          "Keep it to 1–2 pages maximum; longer LOIs feel aggressive and slow deals down",
          "Have a CA or lawyer review any real LOI before you actually send it",
        ],
      },
      {
        day: 22, title: "Marketing on ₹0", type: "Action",
        task: "Create one piece of content about your business for free: a LinkedIn post, an Instagram reel, a WhatsApp status, or a cold email. Publish it.",
        deliverable: "Screenshot of published content",
        stretch: "Get 10 genuine reactions or replies",
        emotion: "Putting yourself out there is scary. But silence is the biggest business killer. One honest post about your journey will attract more customers than any paid ad. Be real.",
        bookRef: {
          concept: "Word-of-Mouth Is Your First Sales Team",
          insight: "Dana says the fastest, cheapest, and most powerful form of marketing for any new business is a simple, personal conversation — not ads, not funnels. She calls it 'lead by conversation' and challenges every reader to have 5 intentional business conversations every day. Each conversation plants a seed that grows without any ad spend.",
          action: "Dana's ₹0 marketing challenge: send 5 personal messages today to people in your network who might know someone who needs your service. Not a broadcast — 5 individual messages that say 'I'm building X, do you know anyone who might benefit?'",
        },
        miniSteps: [
          "Choose your platform: LinkedIn (professional), Instagram (visual), WhatsApp Status (warm network)",
          "Write about your journey: 'I just started learning to build a business and here's what surprised me...'",
          "Or write about the problem you solve: 'Did you know X costs Y in [city]? I'm building a solution...'",
          "Add a simple visual — Canva or even a selfie photo works perfectly",
          "Write a clear call to action: 'Comment YES if you want to know more'",
          "Post it — don't overthink the wording. Done beats perfect.",
          "Reply personally to every single comment in the first hour",
        ],
        practical: [
          "Authenticity beats polish on social media — every single time",
          "Best posting time: 8–9am or 7–8pm on weekdays for Indian audiences",
          "WhatsApp Status reaches your warmest network first — start there if LinkedIn feels scary",
        ],
      },
      {
        day: 23, title: "Operations Blueprint", type: "Create",
        task: "Draw a simple flowchart of how your business would operate day-to-day. From customer inquiry → delivery → payment → repeat. Keep it on 1 page.",
        deliverable: "Operations flowchart",
        stretch: "Identify the 1 step most likely to break and plan a fix",
        emotion: "Operations seem boring until they break. One day of mapping your process saves weeks of chaos later. This is where good intentions become repeatable excellence.",
        bookRef: {
          concept: "Systems Create Freedom",
          insight: "Dana distinguishes sharply between entrepreneurs who work IN their business and those who work ON it. Without systems, you are the business — and a business that only works when you're there is not an asset, it's a job. Documenting your operations is the first step toward a business that runs without you, which is what ultimately creates wealth.",
          action: "Dana's systems test: go through your flowchart and mark every step with either 'Only I can do this' or 'Someone else could do this.' Anything marked 'someone else' is your first delegation list and your path to scaling.",
        },
        miniSteps: [
          "Open a blank paper or use Draw.io (free, no signup needed)",
          "Start with 'Customer Contacts You' as Box 1",
          "Map every step until 'Customer Pays and You Deliver'",
          "For each step: note who does it (you, employee, or supplier?)",
          "Add time estimates for each step: how long does each one take?",
          "Identify where handoffs happen between different people",
          "Circle the 1 step where you think most problems will occur — and plan a fix",
        ],
        practical: [
          "Free tools: Miro, Whimsical, or Draw.io for clean digital flowcharts",
          "Keep it under 10 steps — if it's more, break it into 2 separate processes",
          "Add 'What if?' notes: what if a customer cancels? What if a supplier is late?",
        ],
      },
      {
        day: 24, title: "The Risk Register", type: "Create",
        task: "List the 10 biggest risks to your business. For each: rate likelihood (1–5) and impact (1–5). Write a mitigation plan for the top 3 risks.",
        deliverable: "Risk register spreadsheet or table",
        stretch: "Share with your advisory circle for their top risks",
        emotion: "Identifying risks isn't pessimism — it's confidence. The founders who fail aren't the ones who saw the risks coming. They're the ones who pretended risks didn't exist.",
        bookRef: {
          concept: "Protect Your Cash Before You Grow It",
          insight: "Dana has a saying: 'You can't grow money you've already lost.' She writes that most entrepreneurs are so focused on making money that they forget to protect it. Her framework puts risk management and asset protection before growth strategies — because getting wiped out once costs more than years of slow growth.",
          action: "Dana's asset protection checklist for every business: separate bank account ✓, signed contracts with all clients ✓, basic liability insurance ✓, documented business structure ✓. Check off which ones you have. Set a deadline for any you're missing.",
        },
        miniSteps: [
          "Create a table: Risk | Likelihood (1–5) | Impact (1–5) | Score (L×I) | Mitigation Plan",
          "Brainstorm 10 risks across different areas: financial, legal, operational, competitive, personal",
          "Example risks: 'No customers in Month 1', 'Supplier cancels', 'Competitor undercuts price'",
          "Multiply Likelihood × Impact to get a priority score — sort from highest to lowest",
          "For the top 3 risks: write a specific action plan if that risk actually happens",
          "Ask yourself: 'If this happened, would it kill the business or just hurt it?'",
          "Any risk that could kill the business needs a prevention plan, not just a response plan",
        ],
        practical: [
          "Risk registers are a standard tool used by professional investors and acquirers",
          "Personal risks matter too: what if you get sick? What if you lose your current job?",
          "Revisit this register every 90 days — risks change as the business grows",
        ],
      },
      {
        day: 25, title: "Failure Study", type: "Research",
        task: "Find 2 case studies of small businesses that FAILED. Understand exactly why. Write a 1-page analysis: What would you have done differently?",
        deliverable: "1-page failure analysis",
        stretch: "Find a founder who failed — cold message them for a 15-min chat",
        emotion: "Failure stories are the most valuable education in business. Every person who failed took a risk, learned something irreplaceable, and often succeeded the next time. Study them with respect.",
        bookRef: {
          concept: "Fail Fast, Learn Faster",
          insight: "Dana acknowledges her own business failures openly and uses them as teaching moments throughout the playbook. Her take on failure is practical rather than motivational: she calculates the cost of each failure and what it bought her in knowledge. 'Every failure is an invoice. Make sure you actually receive what you paid for.'",
          action: "For each failure case you study, apply Dana's invoice method: write 'This business paid ₹[cost of failure] and received [lesson learned] in return.' If the lesson was worth the cost, they didn't truly fail — they paid tuition.",
        },
        miniSteps: [
          "Search 'small business failure case study India' or 'startup failure post-mortem'",
          "Find one Indian business that failed and one you can deeply relate to personally",
          "For each: identify the single #1 reason they failed",
          "Common failure causes: ran out of cash, bad co-founder relationship, no market demand, poor pricing",
          "Write: 'I could have prevented this by ______'",
          "Write: 'This failure pattern could affect MY business if ______'",
          "End with: 'My protection against this specific failure is ______'",
        ],
        practical: [
          "Search 'PepperTap', 'AskMe', 'LocalOye' for well-documented Indian startup failures",
          "Also search 'r/entrepreneur failure stories' for raw and honest accounts",
          "Failed founders are often the most generous with advice — they want their story to help others",
        ],
      },
      {
        day: 26, title: "The 90-Day Execution Plan", type: "Create",
        task: "If you were starting/acquiring tomorrow, what would you do in the first 90 days? Create a week-by-week plan with specific milestones and owners.",
        deliverable: "90-day roadmap",
        stretch: "Add measurable KPIs for each month",
        emotion: "A plan without a timeline is just a wish. You've been doing the thinking — now commit to the timing. 90 days is enough to prove whether your idea works. That's 13 weeks of courage.",
        bookRef: {
          concept: "The 90-Day Cash Sprint",
          insight: "Dana structures nearly every business launch around a 90-day sprint with clear weekly cash targets. She says 90 days is long enough to see real results and short enough to maintain urgency. Month 1 = get your first paying customers. Month 2 = systemize delivery. Month 3 = grow without adding proportional effort. She calls this the 'compounding model.'",
          action: "Apply Dana's 90-day cash targets: Month 1: cover your costs. Month 2: cover costs + one month of savings. Month 3: profit. Write these three numbers at the top of your roadmap.",
        },
        miniSteps: [
          "Create a table: Week | Key Milestones | Actions Required | Who's Responsible | Done By Date",
          "Month 1 (Weeks 1–4): Focus on setup — legal registration, branding, first paying customers",
          "Month 2 (Weeks 5–8): Focus on operations — consistent delivery, customer feedback, refine the offer",
          "Month 3 (Weeks 9–13): Focus on growth — referrals, content marketing, possible second revenue stream",
          "Add specific numbers to each milestone: '5 customers by Week 4', '₹50,000 revenue by Month 3'",
          "Mark the single most important milestone in each month — if only one thing happens, this must be it",
          "Review the plan: are these goals realistic but uncomfortable? If yes, that's exactly right.",
        ],
        practical: [
          "Notion or Google Sheets both work well for this roadmap format",
          "Share the plan with someone who will hold you accountable to the dates",
          "Plan in ink, execute in pencil — adjust as reality hits, but don't abandon the structure",
        ],
      },
      {
        day: 27, title: "Build in Public", type: "Action",
        task: "Post a public update on LinkedIn or any social platform about what you've learned in this challenge. Be specific, be honest, be vulnerable.",
        deliverable: "Published post with link",
        stretch: "Tag one person who inspired you in the journey",
        emotion: "Vulnerability is not weakness — it's magnetism. When you share your real journey, you attract customers, collaborators, and mentors you didn't know existed. Your story matters.",
        bookRef: {
          concept: "Own Your Story Publicly",
          insight: "Dana is bold about public accountability — she shares her financial goals and business moves openly, and she encourages her readers to do the same. She says most people are ashamed to talk about money and business ambition publicly, and that shame keeps them small. 'When you own your story out loud, you give others permission to take you seriously — including yourself.'",
          action: "Dana's public declaration exercise: in your post today, state one specific financial or business goal with a deadline. Not vague aspiration — a number and a date. 'I will have my first paying client by [date].' Public commitment activates accountability.",
        },
        miniSteps: [
          "Recall the single most surprising thing you've learned across these 27 days",
          "Write an honest post: '27 days ago I knew nothing about business. Here's what I now know...'",
          "List 3–5 specific and concrete lessons — be real, not polished",
          "Include one moment where you felt like quitting — and why you didn't",
          "End with: 'Here's what I'm doing next...' — give people a window into your plan",
          "Add a photo of something from your journey (your notes, canvas, or Day 20 pitch video)",
          "Post and actively engage with every reply for the next 24 hours",
        ],
        practical: [
          "LinkedIn posts with personal stories consistently get 3–10x the reach of business posts",
          "Use short line breaks — long paragraphs kill engagement on every social platform",
          "Don't wait to be 'successful' to share your story — the journey itself is the content",
        ],
      },
      {
        day: 28, title: "Mentor Presentation", type: "Action",
        task: "Present your business/acquisition idea to your advisory circle (or just one trusted mentor). Ask for the hardest questions they can throw at you.",
        deliverable: "List of hard questions asked + your answers",
        stretch: "Revise your plan based on feedback the same day",
        emotion: "Real feedback feels uncomfortable because it cares. If your mentor is too gentle, ask them to be harder. You want to hear the hard questions from a mentor — not from the market after you've invested everything.",
        bookRef: {
          concept: "The Mentor ROI",
          insight: "Dana calculates mentorship as a financial investment with measurable returns. She argues that paying for good mentorship — in time, money, or equity — is the highest-ROI activity available to any entrepreneur. Every mentor she hired returned 10x their cost in saved mistakes and accelerated revenue. 'A mentor who has already made the mistake you're about to make is worth more than any MBA.'",
          action: "After your presentation, ask your mentor directly: 'If you were me, what would you do in the next 30 days?' Write their exact answer word-for-word. The specific answer to this question from someone who has succeeded in your field is worth more than any course.",
        },
        miniSteps: [
          "Prepare a 10-minute presentation: problem, solution, business model, financials, 90-day plan",
          "You can use your existing documents — no need to make new slides",
          "Ask your mentor: 'What's the biggest hole in this plan?'",
          "Ask: 'What's the one thing I'm clearly not seeing?'",
          "Ask: 'Would you personally buy this / invest in this? Why or why not?'",
          "Write down every single question they ask — even if it's uncomfortable to hear",
          "Do not defend yourself — just listen and take notes. Defensiveness closes the feedback loop.",
        ],
        practical: [
          "A WhatsApp voice call counts — this doesn't need to be a formal meeting",
          "If you have no mentor yet: present to a smart, skeptical friend who won't just agree with you",
          "Revising the plan on the same day as feedback builds a habit of iteration over ego",
        ],
      },
      {
        day: 29, title: "The Decision Gate", type: "Reflect",
        task: "Write a structured Go/No-Go decision for your idea. For GO: list 5 things that must be true. For NO-GO: list 3 dealbreakers. Be honest — which is it?",
        deliverable: "Go/No-Go decision document",
        stretch: "Sleep on it and revisit with fresh eyes the next morning",
        emotion: "A no-go today is not failure — it's wisdom. Maybe the timing is wrong, or the idea needs a pivot. Knowing when to pause is just as valuable as knowing when to charge ahead. Trust your honest assessment.",
        bookRef: {
          concept: "Decide With Data, Not Emotion",
          insight: "Dana writes about the danger of 'emotional business decisions' — committing to or abandoning ideas based on how they feel rather than what the numbers say. Her decision framework is ruthlessly practical: if the business can generate enough cash to cover its costs within 90 days and grow from there, it's a GO. If the numbers don't support that, it needs restructuring first.",
          action: "Apply Dana's 90-day cash test to your GO criteria: 'Can this business cover all its costs within 90 days?' If your honest answer is yes, you have a GO. If no, write what needs to change to make it a yes — that's your revised plan.",
        },
        miniSteps: [
          "Create two columns: GO Criteria (5 items) | NO-GO Criteria (3 items)",
          "GO examples: 'At least 3 people confirmed they'll pay', 'I have 6 months of savings', 'I know my first 10 customers'",
          "NO-GO examples: 'No way to fund Month 1', 'No one wants to pay for this', 'I'm not willing to work on this for 2 years'",
          "Be honest: how many GO criteria are actually true TODAY?",
          "Write clearly: 'My decision is GO / NO-GO because _______'",
          "If NO-GO: write what specifically would need to change to make it a GO in 90 days",
          "If GO: write your exact start date right now",
        ],
        practical: [
          "No-Go doesn't mean never — it means not yet, or not this version of the idea",
          "A partial GO is completely valid: 'I'll test for 30 more days before fully committing'",
          "The best entrepreneurs are decisive — make the call and fully own it",
        ],
      },
      {
        day: 30, title: "The Founder Letter", type: "Reflect",
        task: "Write a letter from your future self — 2 years from now — looking back at this challenge. What did you do next? What are you proud of? What did you learn the hard way?",
        deliverable: "Your Founder Letter — seal it and don't open for 6 months",
        stretch: "Schedule a calendar reminder for 6 months from today to re-read it",
        emotion: "You did it. 30 days. Most people never even start. You researched, created, reflected, reached out, planned, and showed up every single day. Whatever happens next — that foundation is yours forever. Be genuinely proud of yourself. 🏆",
        bookRef: {
          concept: "Live Rich — Build the Life First",
          insight: "Dana ends her playbook with the concept of 'Live Rich' — the idea that wealth is not a destination but a practice you begin today. She challenges readers to write a specific vision of their 'rich life': not just a financial number, but what daily freedom looks like, what their mornings feel like, who they spend time with.",
          action: "Include Dana's 'Live Rich' vision in your Founder Letter: describe your rich life in 3 paragraphs. What does your Tuesday morning look like when the business is thriving? What does freedom feel like to you specifically? This is your north star for every hard decision ahead.",
        },
        miniSteps: [
          "Find 30 quiet minutes — this is the most important thing you'll write in this challenge",
          "Start with: 'Dear [Your Name], it's [date 2 years from now]...'",
          "Describe what your business and life look like in that future — be specific and vivid",
          "Write: 'The thing I'm most proud of is ______'",
          "Write: 'The hardest moment was ______ and I got through it by ______'",
          "Write: 'What I wish I'd known on Day 1 was ______'",
          "End with one sentence of advice from your future self to your present self today",
          "Seal it — email to yourself via FutureMe.org or seal in a physical envelope",
        ],
        practical: [
          "Use FutureMe.org to email this letter to yourself on a specific future date",
          "Or write on paper, seal an envelope, and write 'Open [6 months from today]' on the front",
          "This is the most powerful habit shared by successful founders — writing to their future selves",
        ],
      },
    ],
  },
];


const YEAR_PLAN = [
  {
    month: 1, label: "Jan", title: "The 30-Day Challenge",
    theme: "Foundation & Planning & Launch",
    color: "#4F6EF7", bg: "#EEF2FF",
    focus: "Complete all 3 phases of the challenge. Validate your idea with real conversations.",
    emotion: "Every journey starts with a single uncomfortable step. You're not behind — you're exactly at the beginning. Trust the process.",
    milestones: ["Complete 30-day challenge", "Fill Business Model Canvas", "Write 1-page business plan", "Get 3 people to say they'd pay", "Identify your advisory circle"],
    subtasks: [
      "Open a fresh notebook or Notion doc titled 'My Business Journey'",
      "Complete Days 1–7: Foundation phase — idea audit, real business study, BMC",
      "Complete Days 8–16: Planning phase — business plan, pricing, legal basics",
      "Complete Days 17–30: Launch phase — MVP, first sale, pitch, 90-day plan",
      "Have 5 real conversations with potential customers — no pitching, just listening",
      "Write your one-sentence business description and test it on 3 people",
      "Set up a shared WhatsApp/Notion space with your advisory circle",
      "Schedule a weekly 30-min review every Sunday evening",
    ],
    kpi: "₹0 → First Commitment",
    category: "Learn",
    calTitle: "Month 1: 30-Day Business Challenge",
    calDesc: "Complete all 3 phases of The Wealth Action Playbook challenge. Goal: validate your business idea and get your first commitment from a potential customer.",
  },
  {
    month: 2, label: "Feb", title: "Validate & Test",
    theme: "Your First Real Customer",
    color: "#10B981", bg: "#ECFDF5",
    focus: "Execute your MVP. Collect real money from real customers. Learn what actually works.",
    emotion: "Your first rejection is a gift — it tells you exactly what to fix. Every 'no' is data. Collect it and keep going.",
    milestones: ["Close your first paid customer", "Deliver your service/product 3 times", "Collect written testimonial", "Refine pricing based on feedback", "Register your business legally"],
    subtasks: [
      "Send your MVP offer to 10 specific people by the end of Week 1",
      "Follow up with every non-reply after 3 days — one follow-up, every time",
      "Deliver your product/service and ask immediately: 'What would make this 10x better?'",
      "Create a simple Google Form feedback survey and send after every delivery",
      "Write down the exact words customers use to describe the problem — use their language in your pitch",
      "Adjust your pricing once based on what you learn from real conversations",
      "Visit IndiaFilings.com and complete Sole Proprietorship or Pvt Ltd registration",
      "Open your dedicated business bank account (keep personal and business money separate)",
    ],
    kpi: "₹5,000 – ₹20,000 Revenue",
    category: "Action",
    calTitle: "Month 2: Validate & Get First Customer",
    calDesc: "Execute your MVP. Close your first paid customer. Deliver 3 times. Register your business legally. Target: ₹5,000–₹20,000 revenue.",
  },
  {
    month: 3, label: "Mar", title: "Official Launch",
    theme: "Go Live & Get Known",
    color: "#F59E0B", bg: "#FFFBEB",
    focus: "Set up all systems. Build your online presence. Hit 10 paying customers.",
    emotion: "Going public feels terrifying. Do it anyway. The market will tell you more in one week of being visible than 6 months of planning in private.",
    milestones: ["Open business bank account", "Create Google Business profile", "Launch WhatsApp Business + website", "Get 10 paying customers", "Build referral process"],
    subtasks: [
      "Create a Google Business Profile — name, address, category, and first 3 photos",
      "Set up WhatsApp Business with a catalog of your services and automated greeting message",
      "Build a simple website using Carrd, Wix, or Webflow — 3 pages: Home, Services, Contact",
      "Post your launch announcement on LinkedIn and Instagram with a personal story",
      "Ask your first 5 customers to refer 1 person — give them a ₹500 referral incentive",
      "Create a standard onboarding message/kit for new customers",
      "Set up a simple bookkeeping system using Wave or Zoho Books (both free tiers available)",
      "Track weekly: leads contacted → calls held → customers closed → revenue",
    ],
    kpi: "₹20,000 – ₹50,000 Revenue",
    category: "Launch",
    calTitle: "Month 3: Official Business Launch",
    calDesc: "Go live publicly. Build online presence. Hit 10 paying customers. Target: ₹20,000–₹50,000 revenue.",
  },
  {
    month: 4, label: "Apr", title: "Revenue Focus",
    theme: "Hit ₹1 Lakh/Month",
    color: "#EF4444", bg: "#FEF2F2",
    focus: "Aggressively pursue revenue. Weekly cash reviews. Plug all cash leaks identified.",
    emotion: "Revenue is not vanity — it's oxygen. You can refine your product later. Right now the only metric that matters is: did money come in this week?",
    milestones: ["Implement weekly cash review habit", "Upsell 3 existing customers", "Add a second service/product tier", "Cut 2 unnecessary expenses", "Reach ₹1L monthly revenue"],
    subtasks: [
      "Every Monday 9am: 15-minute cash review — last week revenue, this week target, gap plan",
      "Contact every existing customer with a premium upgrade offer — 'Would you like [X] added for ₹Y more?'",
      "Design and price your second service tier — must deliver 2x value at 1.5x price",
      "List all monthly expenses and cut any that haven't generated a direct return in 30 days",
      "Set a daily revenue target (₹1L/month = ₹3,333/day) — track it on a whiteboard",
      "Build a 'pipeline tracker' in Google Sheets: Lead → Contacted → Quoted → Closed",
      "Ask your 3 happiest customers for a 5-star Google review this week",
      "Calculate your break-even point and make sure you crossed it this month",
    ],
    kpi: "₹75,000 – ₹1,00,000 Revenue",
    category: "Revenue",
    calTitle: "Month 4: Hit ₹1 Lakh Revenue",
    calDesc: "Weekly cash reviews, upsells, and aggressive revenue focus. Target: ₹75,000–₹1,00,000 monthly revenue.",
  },
  {
    month: 5, label: "May", title: "Systemise",
    theme: "Build the Machine",
    color: "#8B5CF6", bg: "#F5F3FF",
    focus: "Document every process. Hire your first support person or freelancer. Remove yourself from daily ops.",
    emotion: "If your business can only run when you're there, you don't own a business — you own a job. Systems are what turn a hustle into an asset.",
    milestones: ["Write SOPs for top 3 processes", "Hire first part-time resource", "Automate invoicing & follow-ups", "Implement customer onboarding checklist", "Reduce your hours by 30%"],
    subtasks: [
      "List every task you do in a week — mark each: 'Only I can do' vs 'Someone else could do'",
      "Write a step-by-step SOP for your top 3 most-repeated tasks (video + written format)",
      "Post on Internshala or LinkedIn for a part-time assistant (₹5,000–₹10,000/month)",
      "Set up Razorpay or Instamojo for automated invoice generation and payment reminders",
      "Create a customer onboarding checklist — welcome message, expectations, delivery timeline, feedback ask",
      "Identify your 3 biggest time-wasters and eliminate or delegate them",
      "Spend 1 day training your new hire on your SOPs — document what's unclear",
      "By end of month: measure if your personal work hours dropped by 30% while revenue held",
    ],
    kpi: "Same revenue, -30% your time",
    category: "Systems",
    calTitle: "Month 5: Systemise & Hire",
    calDesc: "Document SOPs, hire first resource, automate billing. Goal: same revenue with 30% less of your personal time.",
  },
  {
    month: 6, label: "Jun", title: "Half-Year Audit",
    theme: "Review, Refine, Recharge",
    color: "#0891B2", bg: "#ECFEFF",
    focus: "Full 6-month financial review. Identify top 3 growth levers. Plan H2 strategy.",
    emotion: "Reviewing your own numbers can feel like looking in a mirror after a rough month. Do it anyway. The truth always serves you better than comfortable ignorance.",
    milestones: ["Complete 6-month P&L review", "Identify top customer segments", "Kill your 2 lowest-ROI activities", "Set H2 revenue targets", "Reward yourself for reaching 6 months"],
    subtasks: [
      "Pull all 5 months of revenue and expense data — calculate total net profit",
      "Identify your top 3 customer types by revenue contribution — double down on them in H2",
      "List every activity you did in H1 and calculate approximate ROI for each",
      "Kill the 2 lowest-ROI activities immediately — redirect that time to top performers",
      "Write your H2 plan: 3 clear goals with monthly revenue targets for Jul–Dec",
      "Book a review meeting with your CA — understand your tax position and GST status",
      "Read your Day 7 reflection letter and your Day 30 Founder Letter — compare to reality",
      "Do something to celebrate — dinner, trip, gift — you built something real in 6 months",
    ],
    kpi: "Clear H2 plan in writing",
    category: "Review",
    calTitle: "Month 6: Half-Year Business Audit",
    calDesc: "Full P&L review, identify top customers and growth levers. Write your H2 plan. Celebrate 6 months.",
  },
  {
    month: 7, label: "Jul", title: "Expand Revenue",
    theme: "Second Stream or Scale",
    color: "#059669", bg: "#ECFDF5",
    focus: "Add a second revenue stream — could be a premium tier, a new service, or an acquisition target.",
    emotion: "One revenue stream is fragile. Two is stable. Three is an empire. This month you start building your second pillar — and the confidence it brings is permanent.",
    milestones: ["Identify acquisition targets or new product", "Launch premium pricing tier", "Build email/WhatsApp subscriber list", "Run first paid marketing test", "Reach ₹2L monthly revenue"],
    subtasks: [
      "Brainstorm 5 potential second revenue streams — pick the one requiring least new investment",
      "Design your premium tier: what does 2x the value look like for existing customers?",
      "Build a WhatsApp broadcast list of 100+ warm contacts who've shown interest before",
      "Send your premium offer to top 20 customers first — warm audience converts 5x better",
      "Set up Google Ads or Meta Ads with ₹5,000 test budget — track cost per lead",
      "Research 3 businesses in your sector that could be acquisition targets (Day 12 framework)",
      "Create a simple lead magnet (checklist, template, or short guide) for your mailing list",
      "Track: new revenue stream contributions as % of total — target 20%+ by month end",
    ],
    kpi: "₹1.5L – ₹2L Revenue",
    category: "Scale",
    calTitle: "Month 7: Launch Second Revenue Stream",
    calDesc: "Add a premium tier or new service. Test paid marketing. Target: ₹1.5L–₹2L monthly revenue.",
  },
  {
    month: 8, label: "Aug", title: "Acquisition Scout",
    theme: "Buy vs Build Decision",
    color: "#D97706", bg: "#FFFBEB",
    focus: "Seriously evaluate buying an existing business. Apply your Day 12–14 due diligence skills to real targets.",
    emotion: "Buying a business sounds intimidating until you realize most business owners are just waiting for someone to ask the right question. Be that person.",
    milestones: ["Identify 3 real acquisition targets", "Complete due diligence checklist for 1", "Secure funding or seller financing proof", "Submit Letter of Intent (LOI)", "Engage CA and lawyer for deal review"],
    subtasks: [
      "Search Businessesforsale.com, Quikr Business, and IndiaMART for active listings in your city",
      "Visit 3 candidate businesses as a 'customer' first — observe operations before revealing intent",
      "Request financials from your top candidate: last 3 years P&L, GST returns, bank statements",
      "Apply your full due diligence checklist from Day 13 — complete all 5 areas",
      "Talk to 3 of the business's actual customers without the owner present",
      "Meet with your CA to review the financials and identify any red flags or hidden liabilities",
      "Prepare your LOI using the template from Day 21 — price at 1.5–2x annual SDE",
      "Engage a business lawyer to review the LOI before submitting",
    ],
    kpi: "LOI Submitted or Ruled Out",
    category: "Acquire",
    calTitle: "Month 8: Business Acquisition Scout",
    calDesc: "Research and evaluate real acquisition targets. Submit LOI or make clear go/no-go decision. Apply Day 12–14 due diligence framework.",
  },
  {
    month: 9, label: "Sep", title: "Close or Double Down",
    theme: "Commit to Your Path",
    color: "#7C3AED", bg: "#F5F3FF",
    focus: "Close the acquisition or invest in scaling your original business with full conviction.",
    emotion: "Indecision is the most expensive business cost. By this month, you know enough to commit. Choose your path and pour everything into it.",
    milestones: ["Close deal or sign growth commitment", "Onboard new revenue stream", "Hire second team member if needed", "Implement customer retention system", "Set Q4 cash targets"],
    subtasks: [
      "If acquiring: close the deal — sign agreements, pay deposit, arrange transition timeline",
      "If scaling: write a 90-day growth sprint plan with weekly milestones and named owners",
      "Build a customer retention checklist: follow-up cadence, loyalty discount, anniversary reward",
      "Track monthly churn rate — aim to keep it below 5%",
      "Hire your second team member if workload requires — delegate a full function, not just tasks",
      "Set Q4 cash targets: Oct, Nov, Dec monthly revenue numbers written and shared with your team",
      "Review your business structure — should you upgrade from Sole Prop to Pvt Ltd now?",
      "Calculate net worth as a business owner for the first time — asset value minus liabilities",
    ],
    kpi: "₹2L – ₹3L Monthly Revenue",
    category: "Growth",
    calTitle: "Month 9: Close Deal or Commit to Scale",
    calDesc: "Make the big commitment — close acquisition or launch growth sprint. Hire second team member. Target: ₹2L–₹3L monthly revenue.",
  },
  {
    month: 10, label: "Oct", title: "Optimise",
    theme: "Ruthless Efficiency",
    color: "#BE185D", bg: "#FDF2F8",
    focus: "Cut what doesn't work. Double down on what does. Every cost must justify itself.",
    emotion: "Growing businesses attract waste like magnets. This month isn't about adding — it's about cutting with precision. The most profitable companies are ruthlessly efficient.",
    milestones: ["Audit all expenses vs ROI", "Cancel 3 low-value subscriptions/costs", "Improve top-performing service/product", "Build customer feedback loop", "Negotiate better supplier terms"],
    subtasks: [
      "Print every expense from the last 3 months — physically cross out anything with no clear ROI",
      "Negotiate with your top 2 suppliers for better rates — ask directly for 10–15% off",
      "Interview your top 5 customers: 'What do you love? What would you change?'",
      "Improve your best-performing service based on direct feedback — ship the improvement this month",
      "Set up a monthly NPS (Net Promoter Score) survey — single question: 'Would you recommend us?'",
      "Create a dashboard showing: revenue, costs, profit margin, customer count — review weekly",
      "Calculate your 'revenue per hour worked' — this is your true hourly rate as a business owner",
      "Identify 1 product/service that accounts for 80% of profit — protect and grow it",
    ],
    kpi: "Higher margin, not just revenue",
    category: "Optimise",
    calTitle: "Month 10: Optimise for Higher Margins",
    calDesc: "Audit every cost. Cut low-ROI activities. Improve top product. Negotiate better terms. Goal: higher profit margin, not just revenue.",
  },
  {
    month: 11, label: "Nov", title: "Diversify Income",
    theme: "Multiple Cash Machines",
    color: "#0E7490", bg: "#ECFEFF",
    focus: "Layer a third revenue stream. Could be passive income, a digital product, or a licensing deal.",
    emotion: "Three income streams is the difference between a business and a wealth machine. This month you build the third pillar — and it could outlast everything else.",
    milestones: ["Launch digital product or workshop", "Build affiliate or referral income", "Explore licensing your process/system", "Create an evergreen lead magnet", "Reach ₹3L+ monthly revenue"],
    subtasks: [
      "Package your core expertise into a digital product: e-book, template, mini-course, or workshop",
      "List the product on Instamojo, Gumroad, or your own website — price between ₹500–₹2,000",
      "Set up a simple affiliate program: ₹X commission for every customer referred by a partner",
      "Identify 2 businesses that could benefit from licensing your system or process",
      "Create an evergreen lead magnet (a free resource) that builds your audience automatically",
      "Schedule a LinkedIn post every week this month sharing business lessons — build authority",
      "Track passive income separately — measure as % of total monthly revenue",
      "Set your Year 2 income target: write the number, the date, and your commitment to reaching it",
    ],
    kpi: "3+ Revenue Streams Active",
    category: "Diversify",
    calTitle: "Month 11: Build Third Revenue Stream",
    calDesc: "Launch digital product or workshop. Build affiliate income. Target: 3+ active revenue streams, ₹3L+ monthly revenue.",
  },
  {
    month: 12, label: "Dec", title: "Year-End Review",
    theme: "Measure, Celebrate, Plan Year 2",
    color: "#1A1208", bg: "#FEF9EE",
    focus: "Complete annual audit. Write your Year 2 plan. Celebrate how far you've come. Read your Day 30 Founder Letter.",
    emotion: "12 months ago you started a challenge. Today you have a real business, real customers, real revenue, and a real future you built yourself. That deserves genuine celebration.",
    milestones: ["Complete full year P&L", "Read your Day 30 Founder Letter", "Write Year 2 business plan", "Set 3 non-negotiable Year 2 goals", "Celebrate with your advisory circle"],
    subtasks: [
      "Compile complete Year 1 P&L — total revenue, total costs, net profit, tax owed",
      "Open your Day 30 Founder Letter — read it aloud to yourself",
      "Compare reality to your Day 26 90-day execution plan — what happened, what changed, what you learned",
      "Write your Year 2 business plan: 3 strategic objectives, monthly revenue targets, team plan",
      "Choose 3 non-negotiable goals for Year 2 — write them with specific numbers and dates",
      "Share your Year 1 results publicly on LinkedIn — inspire someone else to start",
      "Book a year-end dinner with your advisory circle — thank them for being in your corner",
      "Set up a new Founder Letter for Year 2 — what does success look like in December next year?",
    ],
    kpi: "₹24L+ Annual Revenue Target",
    category: "Reflect",
    calTitle: "Month 12: Year-End Business Review",
    calDesc: "Full Year 1 audit. Read your Founder Letter. Write Year 2 plan. Celebrate everything you built. Target: ₹24L+ annual revenue.",
  },
];


const CAT_COLOR = {
  Learn: "#4F6EF7", Action: "#10B981", Launch: "#F59E0B",
  Revenue: "#EF4444", Systems: "#8B5CF6", Review: "#0891B2",
  Scale: "#059669", Acquire: "#D97706", Growth: "#7C3AED",
  Optimise: "#BE185D", Diversify: "#0E7490", Reflect: "#1A1208",
};

// Week buckets for calendar (30 days in 5 weeks)
const WEEK_BUCKETS = [
  { week: 1, days: [1,2,3,4,5,6,7],   phase: 0, label: "Week 1 · Foundation" },
  { week: 2, days: [8,9,10,11,12,13,14], phase: 1, label: "Week 2 · Planning" },
  { week: 3, days: [15,16,17,18,19,20,21], phase: 1, label: "Week 3 · Planning → Launch" },
  { week: 4, days: [22,23,24,25,26,27,28], phase: 2, label: "Week 4 · Launch" },
  { week: 5, days: [29,30],            phase: 2, label: "Week 5 · Launch Finale" },
];

const DAY_LABELS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// Flatten all challenges for lookup
const ALL_CHALLENGES = {};
PHASES.forEach(p => {
  p.challenges.forEach(c => { ALL_CHALLENGES[c.day] = { ...c, phase: p }; });
});

const TYPE_COLOR = {
  Reflect:  "#F59E0B", Research: "#3B82F6", Learn: "#8B5CF6",
  Create:   "#10B981", Action:   "#EF4444",
};
const TYPE_BG = {
  Reflect:  "#FFFBEB", Research: "#EFF6FF", Learn: "#F5F3FF",
  Create:   "#F0FDF4", Action:   "#FEF2F2",
};


// ── CUSTOM TOOLTIP FOR CHARTS ──
const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 8, padding: "8px 12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", fontSize: 12 }}>
      <div style={{ fontWeight: 700, color: "#111827", marginBottom: 3 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color || "#4F6EF7" }}>{p.name}: <strong>{p.value}{p.unit || ""}</strong></div>
      ))}
    </div>
  );
};

// ── RADIAL PROGRESS ──
const RadialProgress = ({ pct, size = 80, stroke = 8, color = "#4F6EF7", label }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * (pct / 100);
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#F3F4F6" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.6s ease" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: size > 70 ? 16 : 12, fontWeight: 900, color: "#111827", lineHeight: 1 }}>{pct}%</span>
        {label && <span style={{ fontSize: 9, color: "#9CA3AF", marginTop: 2, letterSpacing: 0.5 }}>{label}</span>}
      </div>
    </div>
  );
};

// ── STAT CARD ──
const StatCard = ({ icon, label, value, sub, color = "#4F6EF7", bg = "#EEF2FF" }) => (
  <div style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontSize: 11, color: "#6B7280", letterSpacing: 0.5, textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 26, fontWeight: 900, color: "#111827", lineHeight: 1, fontFamily: "Georgia, serif" }}>{value}</div>
        {sub && <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 4 }}>{sub}</div>}
      </div>
      <div style={{ width: 38, height: 38, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{icon}</div>
    </div>
  </div>
);


// ═══════════════════════════════════════════════════════
//  AUTH UTILITIES  (storage-backed, per-user progress)
// ═══════════════════════════════════════════════════════
const _salt = "wap_2025_";
const _hash = (p) => btoa(unescape(encodeURIComponent(_salt + p)));

const USERS_KEY  = "wap_users_v1";
const SESS_KEY   = "wap_sess_v1";
const progKey    = (uid) => `wap_prog_${uid}`;

const dbGet = async (k) => { try { const r = await window.storage.get(k); return r ? JSON.parse(r.value) : null; } catch { return null; } };
const dbSet = async (k, v) => { try { await window.storage.set(k, JSON.stringify(v)); } catch {} };
const dbDel = async (k)    => { try { await window.storage.delete(k); } catch {} };

// ── Login / Register screen ──────────────────────────────
function AuthScreen({ onLogin }) {
  const [mode, setMode]       = useState("login");
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [pass, setPass]       = useState("");
  const [conf, setConf]       = useState("");
  const [showP, setShowP]     = useState(false);
  const [err, setErr]         = useState("");
  const [ok, setOk]           = useState("");
  const [busy, setBusy]       = useState(false);

  const reset = (m) => { setMode(m); setErr(""); setOk(""); setPass(""); setConf(""); };

  const validate = () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address.";
    if (mode !== "forgot") {
      if (!pass)          return "Password is required.";
      if (pass.length < 6) return "Password must be at least 6 characters.";
    }
    if (mode === "register") {
      if (!name.trim())    return "Full name is required.";
      if (pass !== conf)   return "Passwords do not match.";
    }
    return null;
  };

  const submit = async () => {
    setErr(""); setOk("");
    const e = validate(); if (e) { setErr(e); return; }
    setBusy(true);
    await new Promise(r => setTimeout(r, 500));
    const users = (await dbGet(USERS_KEY)) || {};
    const uid   = email.toLowerCase().trim();

    if (mode === "login") {
      if (!users[uid])                           { setErr("No account with this email."); setBusy(false); return; }
      if (users[uid].pw !== _hash(pass))         { setErr("Wrong password."); setBusy(false); return; }
      const sess = { uid, name: users[uid].name, email: uid };
      await dbSet(SESS_KEY, sess);
      onLogin(sess);

    } else if (mode === "register") {
      if (users[uid])                            { setErr("Email already registered — please sign in."); setBusy(false); return; }
      users[uid] = { name: name.trim(), pw: _hash(pass), createdAt: Date.now() };
      await dbSet(USERS_KEY, users);
      const sess = { uid, name: name.trim(), email: uid };
      await dbSet(SESS_KEY, sess);
      onLogin(sess);

    } else {
      if (!users[uid]) { setErr("No account with this email."); setBusy(false); return; }
      setOk("If this email exists, a reset link would be sent. (Demo: use the account you registered with.)");
    }
    setBusy(false);
  };

  const field = (label, val, set, ph, type = "text", extra = null) => (
    <div>
      <div style={{ fontSize: 10, fontWeight: 700, color: "#374151", letterSpacing: 1, textTransform: "uppercase", marginBottom: 5 }}>{label}</div>
      <div style={{ position: "relative" }}>
        <input value={val} onChange={e => set(e.target.value)} placeholder={ph}
          type={type === "password" ? (showP ? "text" : "password") : type}
          onKeyDown={e => e.key === "Enter" && submit()}
          style={{ width: "100%", padding: "11px 14px", paddingRight: type === "password" ? 40 : 14, borderRadius: 9, border: "1.5px solid #E5E7EB", fontSize: 14, color: "#111827", outline: "none", background: "#F9FAFB", boxSizing: "border-box", fontFamily: "Georgia, serif", transition: "border 0.15s" }}
          onFocus={e => (e.target.style.borderColor = "#4F6EF7", e.target.style.background = "#fff")}
          onBlur={e => (e.target.style.borderColor = "#E5E7EB", e.target.style.background = "#F9FAFB")} />
        {type === "password" && (
          <button onClick={() => setShowP(s => !s)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 15, color: "#9CA3AF" }}>{showP ? "🙈" : "👁️"}</button>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#EEF2FF 0%,#F0FDF4 55%,#FFFBEB 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "Georgia, serif" }}>
      <div style={{ width: "100%", maxWidth: 420 }}>

        {/* Brand */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 60, height: 60, background: "#111827", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 14px", boxShadow: "0 8px 28px rgba(17,24,39,.18)" }}>📗</div>
          <div style={{ fontSize: 21, fontWeight: 900, color: "#111827", letterSpacing: -0.5, marginBottom: 3 }}>Wealth Action Playbook</div>
          <div style={{ fontSize: 12, color: "#6B7280" }}>Your 30-Day + 1-Year Entrepreneur Dashboard</div>
        </div>

        {/* Card */}
        <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 8px 40px rgba(17,24,39,.1)", overflow: "hidden" }}>

          {/* Mode tabs */}
          {mode !== "forgot" && (
            <div style={{ display: "flex", borderBottom: "1px solid #F3F4F6" }}>
              {[["login","Sign In"],["register","Create Account"]].map(([m, l]) => (
                <button key={m} onClick={() => reset(m)} style={{ flex: 1, padding: "14px", border: "none", background: mode === m ? "#fff" : "#F9FAFB", color: mode === m ? "#111827" : "#9CA3AF", fontSize: 13, fontWeight: mode === m ? 800 : 500, cursor: "pointer", borderBottom: mode === m ? "2px solid #4F6EF7" : "2px solid transparent", fontFamily: "Georgia, serif" }}>{l}</button>
              ))}
            </div>
          )}

          <div style={{ padding: "26px 28px 22px" }}>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#111827", marginBottom: 4 }}>
                {mode === "login" ? "Welcome back 👋" : mode === "register" ? "Start your journey 🚀" : "Reset Password 🔑"}
              </div>
              <div style={{ fontSize: 12, color: "#6B7280" }}>
                {mode === "login" ? "Sign in to continue your progress." : mode === "register" ? "Create your free account to begin." : "Enter your email to receive reset instructions."}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {mode === "register" && field("Full Name", name, setName, "e.g. Yashu Jambuwala")}
              {field("Email Address", email, setEmail, "you@example.com", "email")}
              {mode !== "forgot" && field("Password", pass, setPass, "Minimum 6 characters", "password")}
              {mode === "register" && field("Confirm Password", conf, setConf, "Re-enter your password", "password")}
            </div>

            {err && <div style={{ marginTop: 14, padding: "10px 14px", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, fontSize: 12, color: "#DC2626", display: "flex", gap: 8 }}><span>⚠️</span>{err}</div>}
            {ok  && <div style={{ marginTop: 14, padding: "10px 14px", background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8, fontSize: 12, color: "#166534", display: "flex", gap: 8 }}><span>✅</span>{ok}</div>}

            <button onClick={submit} disabled={busy}
              style={{ width: "100%", marginTop: 18, padding: "13px", borderRadius: 10, border: "none", background: busy ? "#9CA3AF" : "#111827", color: "#fff", fontSize: 14, fontWeight: 800, cursor: busy ? "not-allowed" : "pointer", fontFamily: "Georgia, serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              {busy
                ? <><span style={{ display:"inline-block",width:14,height:14,border:"2px solid #fff4",borderTop:"2px solid #fff",borderRadius:"50%",animation:"spin .7s linear infinite" }} />Processing...</>
                : mode === "login" ? "Sign In →" : mode === "register" ? "Create Account →" : "Send Reset Link →"}
            </button>

            <div style={{ display: "flex", justifyContent: "center", marginTop: 12, gap: 4 }}>
              {mode === "login" && <button onClick={() => reset("forgot")} style={{ background: "none", border: "none", color: "#4F6EF7", fontSize: 12, cursor: "pointer", fontFamily: "Georgia, serif" }}>Forgot password?</button>}
              {mode === "forgot" && <button onClick={() => reset("login")} style={{ background: "none", border: "none", color: "#6B7280", fontSize: 12, cursor: "pointer", fontFamily: "Georgia, serif" }}>← Back to Sign In</button>}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: 11, color: "#9CA3AF", marginTop: 18 }}>🔒 Your progress saves automatically per account</div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

// ── Profile / Change Password Modal ─────────────────────
function ProfileModal({ session, onClose, onLogout }) {
  const [tab, setTab]     = useState("profile");
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [conPw, setConPw] = useState("");
  const [showP, setShowP] = useState(false);
  const [msg, setMsg]     = useState({ t: "", s: "" });
  const [busy, setBusy]   = useState(false);

  const changePw = async () => {
    setMsg({ t: "", s: "" });
    if (!oldPw || !newPw || !conPw) { setMsg({ t: "e", s: "All fields are required." }); return; }
    if (newPw.length < 6)           { setMsg({ t: "e", s: "New password must be at least 6 chars." }); return; }
    if (newPw !== conPw)            { setMsg({ t: "e", s: "Passwords do not match." }); return; }
    setBusy(true);
    await new Promise(r => setTimeout(r, 400));
    const users = (await dbGet(USERS_KEY)) || {};
    if (!users[session.uid] || users[session.uid].pw !== _hash(oldPw)) {
      setMsg({ t: "e", s: "Current password is incorrect." }); setBusy(false); return;
    }
    users[session.uid].pw = _hash(newPw);
    await dbSet(USERS_KEY, users);
    setMsg({ t: "s", s: "Password updated successfully! ✓" });
    setOldPw(""); setNewPw(""); setConPw("");
    setBusy(false);
  };

  const inp = (val, set, ph) => (
    <div style={{ position: "relative" }}>
      <input value={val} onChange={e => set(e.target.value)} placeholder={ph}
        type={showP ? "text" : "password"} onKeyDown={e => e.key === "Enter" && changePw()}
        style={{ width: "100%", padding: "10px 38px 10px 12px", borderRadius: 8, border: "1.5px solid #E5E7EB", fontSize: 13, color: "#111827", outline: "none", background: "#F9FAFB", boxSizing: "border-box", fontFamily: "Georgia, serif" }}
        onFocus={e => e.target.style.borderColor = "#4F6EF7"} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
      <button onClick={() => setShowP(s => !s)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#9CA3AF" }}>{showP ? "🙈" : "👁️"}</button>
    </div>
  );

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(17,24,39,.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 400, boxShadow: "0 20px 60px rgba(0,0,0,.22)", overflow: "hidden", fontFamily: "Georgia, serif" }}>

        {/* Dark header */}
        <div style={{ background: "#111827", padding: "22px 22px 18px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ width: 46, height: 46, background: "#4F6EF7", borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 10 }}>
              {session.name?.charAt(0).toUpperCase()}
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB" }}>{session.name}</div>
            <div style={{ fontSize: 11, color: "#6B7280", marginTop: 2 }}>{session.email}</div>
          </div>
          <button onClick={onClose} style={{ background: "#1F2937", border: "none", color: "#9CA3AF", cursor: "pointer", borderRadius: 8, width: 32, height: 32, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #F3F4F6" }}>
          {[["profile","👤 Profile"],["password","🔐 Password"]].map(([t, l]) => (
            <button key={t} onClick={() => { setTab(t); setMsg({ t: "", s: "" }); }} style={{ flex: 1, padding: "11px", border: "none", background: "#fff", color: tab === t ? "#111827" : "#9CA3AF", fontSize: 12, fontWeight: tab === t ? 800 : 400, cursor: "pointer", borderBottom: tab === t ? "2px solid #4F6EF7" : "2px solid transparent", fontFamily: "Georgia, serif" }}>{l}</button>
          ))}
        </div>

        <div style={{ padding: "20px 22px 22px" }}>
          {tab === "profile" && (
            <div>
              {[["Full Name", session.name], ["Email", session.email]].map(([l, v]) => (
                <div key={l} style={{ background: "#F9FAFB", borderRadius: 8, padding: "10px 14px", marginBottom: 8 }}>
                  <div style={{ fontSize: 9, color: "#9CA3AF", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 2 }}>{l}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{v}</div>
                </div>
              ))}
              <div style={{ marginTop: 6, padding: "9px 14px", background: "#EEF2FF", borderRadius: 8, fontSize: 12, color: "#4F6EF7", fontWeight: 600, marginBottom: 16 }}>
                💾 Your progress is automatically saved to this account.
              </div>
              <button onClick={onLogout} style={{ width: "100%", padding: "11px", borderRadius: 9, border: "1.5px solid #FECACA", background: "#FEF2F2", color: "#DC2626", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                🚪 Sign Out
              </button>
            </div>
          )}

          {tab === "password" && (
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
                {[["Current Password", oldPw, setOldPw, "Enter current password"],["New Password", newPw, setNewPw, "Min. 6 characters"],["Confirm New Password", conPw, setConPw, "Re-enter new password"]].map(([l, v, s, p]) => (
                  <div key={l}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#374151", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{l}</div>
                    {inp(v, s, p)}
                  </div>
                ))}
              </div>
              {msg.s && <div style={{ marginBottom: 12, padding: "9px 12px", background: msg.t === "e" ? "#FEF2F2" : "#F0FDF4", border: `1px solid ${msg.t === "e" ? "#FECACA" : "#BBF7D0"}`, borderRadius: 7, fontSize: 12, color: msg.t === "e" ? "#DC2626" : "#166534" }}>{msg.s}</div>}
              <button onClick={changePw} disabled={busy} style={{ width: "100%", padding: "11px", borderRadius: 9, border: "none", background: busy ? "#9CA3AF" : "#4F6EF7", color: "#fff", fontSize: 13, fontWeight: 700, cursor: busy ? "not-allowed" : "pointer", fontFamily: "Georgia, serif" }}>
                {busy ? "Updating..." : "Update Password"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════
// AUTH WRAPPER — only auth state here, no other hooks
// ═══════════════════════════════════════════════════════
export default function Dashboard() {
  const [session, setAuthSession] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    (async () => {
      const sess = await dbGet(SESS_KEY);
      if (sess) setAuthSession(sess);
      setAuthReady(true);
    })();
  }, []);

  const handleLogin = (sess) => setAuthSession(sess);

  const handleLogout = async () => {
    await dbDel(SESS_KEY);
    setAuthSession(null);
  };

  if (!authReady) return (
    <div style={{ minHeight: "100vh", background: "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>📗</div>
        <div style={{ fontSize: 14, color: "#6B7280" }}>Loading your dashboard…</div>
      </div>
    </div>
  );

  if (!session) return <AuthScreen onLogin={handleLogin} />;

  return <AppContent session={session} onLogout={handleLogout} />;
}

// ═══════════════════════════════════════════════════════
// APP CONTENT — all app state + views (mounted only when authed)
// All hooks here run unconditionally — no early returns before useMemo
// ═══════════════════════════════════════════════════════
function AppContent({ session, onLogout }) {
  const [showProfile, setShowProfile] = useState(false);
  const [nav, setNav]                 = useState("dashboard");
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek]   = useState(0);
  const [completed, setCompleted]     = useState({});
  const [stretched, setStretched]     = useState({});
  const [expandedDay, setExpandedDay] = useState(null);
  const [activeTab, setActiveTab]     = useState({});
  const [miniDone, setMiniDone]       = useState({});
  const [expandedMonth, setExpandedMonth] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [yearMiniDone, setYearMiniDone] = useState({});
  const [yearSubTab, setYearSubTab]     = useState({});
  const [startDate, setStartDate]       = useState(() => {
    const d = new Date(); d.setDate(1); return d.toISOString().split("T")[0];
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Load saved progress for this user on mount
  useEffect(() => {
    (async () => {
      const prog = await dbGet(progKey(session.uid));
      if (prog) {
        if (prog.completed) setCompleted(prog.completed);
        if (prog.stretched) setStretched(prog.stretched);
        if (prog.miniDone)  setMiniDone(prog.miniDone);
      }
    })();
  }, [session.uid]);

  // Debounced auto-save
  const saveTimer = useRef(null);
  useEffect(() => {
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      dbSet(progKey(session.uid), { completed, stretched, miniDone });
    }, 800);
  }, [completed, stretched, miniDone, session.uid]);

  const handleLogout = async () => {
    await onLogout();
    // state resets automatically since AppContent unmounts
  };

  // ── COMPUTED STATS ──
  const totalDays      = PHASES.flatMap(p => p.challenges).length;
  const completedCount = Object.values(completed).filter(Boolean).length;
  const stretchCount   = Object.values(stretched).filter(Boolean).length;
  const progress       = Math.round((completedCount / totalDays) * 100);

  const phaseStats = PHASES.map(p => ({
    name: p.title, shortName: p.title.substring(0,6),
    total: p.challenges.length,
    done: p.challenges.filter(c => completed[`${p.id}-${c.day}`]).length,
    pct: Math.round((p.challenges.filter(c => completed[`${p.id}-${c.day}`]).length / p.challenges.length) * 100),
    color: p.id === 1 ? "#F59E0B" : p.id === 2 ? "#10B981" : "#8B5CF6",
  }));

  const typeStats = useMemo(() => {
    const counts = {};
    PHASES.forEach(p => p.challenges.forEach(c => {
      counts[c.type] = (counts[c.type] || 0) + 1;
      if (completed[`${p.id}-${c.day}`]) {
        counts[`${c.type}_done`] = (counts[`${c.type}_done`] || 0) + 1;
      }
    }));
    return Object.entries(TYPE_COLOR).map(([type, color]) => ({
      type, color, total: counts[type] || 0,
      done: counts[`${type}_done`] || 0,
      pct: counts[type] ? Math.round(((counts[`${type}_done`] || 0) / counts[type]) * 100) : 0,
    }));
  }, [completed]);

  const weekStats = WEEK_BUCKETS.map(wb => ({
    label: `W${wb.week}`,
    total: wb.days.length,
    done: wb.days.filter(d => {
      const phase = PHASES.find(p => p.challenges.some(c => c.day === d));
      return phase && completed[`${phase.id}-${d}`];
    }).length,
    get pct() { return Math.round((this.done / this.total) * 100); }
  }));

  const miniTotal = Object.values(miniDone).filter(Boolean).length;

  const toggleKey = (setter, key) => setter(p => ({ ...p, [key]: !p[key] }));
  const getTab    = key => activeTab[key] || "steps";
  const setTab    = (key, tab) => setActiveTab(p => ({ ...p, [key]: tab }));

  // ── SIDEBAR ──
  const NAV_ITEMS = [
    { id: "dashboard", icon: "📊", label: "Dashboard" },
    { id: "weekly",    icon: "📅", label: "Weekly Calendar" },
    { id: "challenge", icon: "🎯", label: "30-Day Challenge" },
    { id: "yearplan",  icon: "📈", label: "1-Year Plan" },
  ];

  const Sidebar = () => (
    <div style={{ width: sidebarOpen ? 220 : 60, minHeight: "100vh", background: "#111827", transition: "width 0.25s", flexShrink: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Logo */}
      <div style={{ padding: "20px 16px", borderBottom: "1px solid #1F2937" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "#4F6EF7", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>📗</div>
          {sidebarOpen && (
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#F9FAFB", letterSpacing: 0.3, lineHeight: 1.2, fontFamily: "Georgia, serif" }}>Wealth Action</div>
              <div style={{ fontSize: 9, color: "#6B7280", letterSpacing: 1 }}>PLAYBOOK</div>
            </div>
          )}
        </div>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, padding: "12px 8px" }}>
        {NAV_ITEMS.map(item => (
          <button key={item.id} onClick={() => setNav(item.id)} style={{
            width: "100%", display: "flex", alignItems: "center", gap: 10,
            padding: "10px 10px", borderRadius: 8, border: "none", cursor: "pointer",
            background: nav === item.id ? "#1F2937" : "transparent",
            color: nav === item.id ? "#F9FAFB" : "#6B7280",
            marginBottom: 2, transition: "all 0.15s", textAlign: "left", fontFamily: "Georgia, serif",
            borderLeft: nav === item.id ? "3px solid #4F6EF7" : "3px solid transparent",
          }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
            {sidebarOpen && <span style={{ fontSize: 13, fontWeight: nav === item.id ? 700 : 400 }}>{item.label}</span>}
          </button>
        ))}
      </div>

      {/* Progress mini */}
      {sidebarOpen && (
        <div style={{ padding: "12px 14px", borderTop: "1px solid #1F2937", margin: "0 8px 12px" }}>
          <div style={{ fontSize: 10, color: "#6B7280", marginBottom: 6, letterSpacing: 0.5 }}>Overall Progress</div>
          <div style={{ height: 4, background: "#374151", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#4F6EF7", borderRadius: 99, transition: "width 0.5s" }} />
          </div>
          <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 4 }}>{completedCount}/{totalDays} days</div>
        </div>
      )}

      {/* User profile */}
      <div style={{ margin: "0 8px 8px", borderTop: "1px solid #1F2937", paddingTop: 10 }}>
        <button onClick={() => setShowProfile(true)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 9, padding: "9px 10px", borderRadius: 9, border: "none", background: "transparent", cursor: "pointer", textAlign: "left", transition: "background 0.15s" }}
          onMouseEnter={e => e.currentTarget.style.background = "#1F2937"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "#4F6EF7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: "#fff", flexShrink: 0 }}>
            {session?.name?.charAt(0).toUpperCase()}
          </div>
          {sidebarOpen && (
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#F9FAFB", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{session?.name}</div>
              <div style={{ fontSize: 9, color: "#6B7280" }}>View profile</div>
            </div>
          )}
          {sidebarOpen && <span style={{ fontSize: 11, color: "#6B7280" }}>⚙️</span>}
        </button>
      </div>

      {/* Toggle */}
      <button onClick={() => setSidebarOpen(o => !o)} style={{ margin: "0 8px 12px", padding: "8px", borderRadius: 8, border: "1px solid #1F2937", background: "transparent", color: "#6B7280", cursor: "pointer", fontSize: 12, fontFamily: "Georgia, serif" }}>
        {sidebarOpen ? "◀ Collapse" : "▶"}
      </button>
    </div>
  );

  // ══ DASHBOARD VIEW ══
  const DashboardView = () => (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 900, color: "#111827", margin: "0 0 4px", fontFamily: "Georgia, serif" }}>
          Your Entrepreneur Dashboard
        </h1>
        <p style={{ color: "#6B7280", fontSize: 13, margin: 0 }}>
          Guided by <em>The Wealth Action Playbook</em> — Dana Mercer
        </p>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 14, marginBottom: 28 }}>
        <StatCard icon="✅" label="Days Complete" value={completedCount} sub={`of ${totalDays} total`} color="#10B981" bg="#ECFDF5" />
        <StatCard icon="⚡" label="Stretch Goals" value={stretchCount} sub="bonus challenges" color="#8B5CF6" bg="#F5F3FF" />
        <StatCard icon="🪜" label="Mini Steps" value={miniTotal} sub="tasks ticked" color="#F59E0B" bg="#FFFBEB" />
        <StatCard icon="📊" label="Completion" value={`${progress}%`} sub="challenge progress" color="#4F6EF7" bg="#EEF2FF" />
        <StatCard icon="📅" label="Days Left" value={totalDays - completedCount} sub="to go" color="#EF4444" bg="#FEF2F2" />
      </div>

      {/* Charts row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>

        {/* Overall radial + phase rings */}
        <div style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 14, padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Overall Completion</div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <RadialProgress pct={progress} size={100} stroke={10} color="#4F6EF7" label="done" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {phaseStats.map(ps => (
              <div key={ps.name}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 3 }}>
                  <span style={{ color: "#374151", fontWeight: 600 }}>{ps.name}</span>
                  <span style={{ color: ps.color, fontWeight: 800 }}>{ps.pct}%</span>
                </div>
                <div style={{ height: 5, background: "#F3F4F6", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${ps.pct}%`, background: ps.color, borderRadius: 99, transition: "width 0.5s" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase bar chart */}
        <div style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 14, padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Phase Progress</div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={phaseStats} barSize={32}>
              <XAxis dataKey="shortName" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 9, fill: "#9CA3AF" }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <Tooltip content={<ChartTooltip />} formatter={(v) => [`${v}%`, "Complete"]} />
              <Bar dataKey="pct" radius={[6, 6, 0, 0]} name="Complete">
                {phaseStats.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", gap: 10, marginTop: 8, justifyContent: "center" }}>
            {phaseStats.map(ps => (
              <div key={ps.name} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: ps.color }} />
                <span style={{ fontSize: 9, color: "#9CA3AF" }}>{ps.done}/{ps.total}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly completion bar chart */}
        <div style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 14, padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Weekly Completion</div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={weekStats} barSize={26}>
              <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 9, fill: "#9CA3AF" }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <Tooltip content={<ChartTooltip />} formatter={(v) => [`${v}%`, "Done"]} />
              <Bar dataKey="pct" radius={[6, 6, 0, 0]} name="Done">
                {weekStats.map((entry, i) => (
                  <Cell key={i} fill={entry.pct === 100 ? "#10B981" : entry.pct > 0 ? "#4F6EF7" : "#E5E7EB"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Task type distribution */}
      <div style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 14, padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 24 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Task Type Breakdown</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
          {typeStats.map(ts => (
            <div key={ts.type} style={{ textAlign: "center" }}>
              <RadialProgress pct={ts.pct} size={64} stroke={7} color={ts.color} />
              <div style={{ fontSize: 10, fontWeight: 700, color: "#374151", marginTop: 6 }}>{ts.type}</div>
              <div style={{ fontSize: 9, color: "#9CA3AF" }}>{ts.done}/{ts.total}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick phase summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {PHASES.map((p, i) => {
          const ps = phaseStats[i];
          return (
            <div key={p.id} style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 14, padding: "18px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `4px solid ${ps.color}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{ fontSize: 22 }}>{p.icon}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: ps.color, fontFamily: "Georgia, serif" }}>{ps.pct}%</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 2, fontFamily: "Georgia, serif" }}>{p.title}</div>
              <div style={{ fontSize: 11, color: "#6B7280", marginBottom: 10 }}>{p.subtitle} · {p.tagline}</div>
              <div style={{ height: 4, background: "#F3F4F6", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${ps.pct}%`, background: ps.color, borderRadius: 99, transition: "width 0.5s" }} />
              </div>
              <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 6 }}>{ps.done} of {ps.total} days complete</div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // ══ WEEKLY CALENDAR VIEW ══
  const WeeklyCalendarView = () => {
    const wb = WEEK_BUCKETS[activeWeek];
    const phaseForDay = (day) => PHASES.find(p => p.challenges.some(c => c.day === day));
    const challengeForDay = (day) => ALL_CHALLENGES[day];

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#111827", margin: "0 0 4px", fontFamily: "Georgia, serif" }}>Weekly Calendar</h2>
            <p style={{ color: "#6B7280", fontSize: 12, margin: 0 }}>Your 30-day challenge, week by week</p>
          </div>
          {/* Week selector */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {WEEK_BUCKETS.map((wb, i) => (
              <button key={i} onClick={() => setActiveWeek(i)} style={{
                padding: "7px 14px", borderRadius: 8, border: "1px solid #E5E7EB",
                background: activeWeek === i ? "#111827" : "#fff",
                color: activeWeek === i ? "#F9FAFB" : "#374151",
                fontSize: 11, cursor: "pointer", fontWeight: 600, fontFamily: "Georgia, serif",
              }}>
                Week {i+1}
              </button>
            ))}
          </div>
        </div>

        {/* Week header */}
        <div style={{ background: "#111827", borderRadius: 12, padding: "14px 20px", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 9, color: "#6B7280", letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>Week {wb.week}</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB", fontFamily: "Georgia, serif" }}>{wb.label}</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {(() => {
              const wdone = wb.days.filter(d => {
                const ph = phaseForDay(d);
                return ph && completed[`${ph.id}-${d}`];
              }).length;
              return (
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#4F6EF7", fontFamily: "Georgia, serif" }}>{wdone}/{wb.days.length}</div>
                  <div style={{ fontSize: 9, color: "#6B7280" }}>complete</div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Day columns grid */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(wb.days.length, 7)}, 1fr)`, gap: 8, marginBottom: 20 }}>
          {DAY_LABELS.slice(0, wb.days.length).map((dl, di) => {
            const day = wb.days[di];
            if (!day) return <div key={di} />;
            const ch  = challengeForDay(day);
            const ph  = phaseForDay(day);
            if (!ch || !ph) return <div key={di} />;
            const key       = `${ph.id}-${day}`;
            const isComplete = !!completed[key];
            const tc        = TYPE_COLOR[ch.type];
            const tbg       = TYPE_BG[ch.type];

            return (
              <div key={di} onClick={() => { setNav("challenge"); setActivePhase(PHASES.indexOf(ph)); setExpandedDay(key); }}
                style={{ background: isComplete ? "#F0FDF4" : "#fff", border: `1.5px solid ${isComplete ? "#A7F3D0" : "#E5E7EB"}`, borderTop: `4px solid ${tc}`, borderRadius: 10, padding: "12px 10px", cursor: "pointer", transition: "all 0.15s", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: 9, color: "#9CA3AF", marginBottom: 2, fontWeight: 600, letterSpacing: 1 }}>{dl}</div>
                <div style={{ fontSize: 17, fontWeight: 900, color: "#111827", marginBottom: 4, fontFamily: "Georgia, serif", lineHeight: 1 }}>{day}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#374151", marginBottom: 6, lineHeight: 1.3 }}>{ch.title}</div>
                <div style={{ display: "inline-block", fontSize: 8, padding: "2px 6px", borderRadius: 3, background: tbg, color: tc, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>{ch.type}</div>
                {isComplete && (
                  <div style={{ marginTop: 6, fontSize: 11, color: "#16A34A", fontWeight: 700 }}>✓ Done</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Day detail cards for this week */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Days in Detail</div>
          {wb.days.map(day => {
            const ch = challengeForDay(day);
            const ph = phaseForDay(day);
            if (!ch || !ph) return null;
            const key = `${ph.id}-${day}`;
            const isComplete = !!completed[key];
            const isStretched = !!stretched[key];
            const tc = TYPE_COLOR[ch.type];

            return (
              <div key={day} style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 10, padding: "14px 18px", display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: isComplete ? "#ECFDF5" : "#F9FAFB", border: `2px solid ${isComplete ? "#10B981" : "#E5E7EB"}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {isComplete
                    ? <span style={{ color: "#10B981", fontSize: 18 }}>✓</span>
                    : <><span style={{ fontSize: 7, color: "#9CA3AF" }}>DAY</span><span style={{ fontSize: 16, fontWeight: 900, color: "#111827", fontFamily: "Georgia, serif" }}>{day}</span></>
                  }
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: 14, color: "#111827", marginBottom: 4, fontFamily: "Georgia, serif" }}>{ch.title}</div>
                  <p style={{ margin: "0 0 8px", fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>{ch.task}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 3, background: TYPE_BG[ch.type], color: tc, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>{ch.type}</span>
                    <span style={{ fontSize: 10, color: "#9CA3AF" }}>📎 {ch.deliverable}</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, flexShrink: 0 }}>
                  <button onClick={() => toggleKey(setCompleted, key)} style={{ padding: "5px 12px", borderRadius: 6, border: "none", background: isComplete ? "#ECFDF5" : "#111827", color: isComplete ? "#16A34A" : "#fff", fontSize: 10, cursor: "pointer", fontWeight: 700, fontFamily: "Georgia, serif" }}>
                    {isComplete ? "✓ Done" : "Mark Done"}
                  </button>
                  <button onClick={() => toggleKey(setStretched, key)} style={{ padding: "5px 12px", borderRadius: 6, border: `1px solid ${isStretched ? "#A78BFA" : "#E5E7EB"}`, background: isStretched ? "#F5F3FF" : "transparent", color: isStretched ? "#7C3AED" : "#9CA3AF", fontSize: 10, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                    ⚡ {isStretched ? "Stretched!" : "Stretch"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ══ CHALLENGE VIEW ══
  const ChallengeView = () => {
    const phase = PHASES[activePhase];
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#111827", margin: "0 0 4px", fontFamily: "Georgia, serif" }}>30-Day Challenge</h2>
          <p style={{ color: "#6B7280", fontSize: 12, margin: 0 }}>{BOOK.title} · {BOOK.author}</p>
        </div>

        {/* Phase tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {PHASES.map((p, i) => {
            const ps = phaseStats[i];
            return (
              <button key={p.id} onClick={() => setActivePhase(i)} style={{
                padding: "8px 16px", borderRadius: 8, border: `1.5px solid ${activePhase === i ? ps.color : "#E5E7EB"}`,
                background: activePhase === i ? ps.color : "#fff",
                color: activePhase === i ? "#fff" : "#374151",
                fontSize: 12, cursor: "pointer", fontWeight: 700, fontFamily: "Georgia, serif",
                display: "flex", alignItems: "center", gap: 7,
              }}>
                <span>{p.icon}</span>
                <span>{p.title}</span>
                <span style={{ background: activePhase === i ? "rgba(255,255,255,0.25)" : "#F3F4F6", borderRadius: 99, padding: "1px 6px", fontSize: 10, color: activePhase === i ? "#fff" : "#6B7280" }}>
                  {ps.done}/{ps.total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Phase banner */}
        <div style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 12, padding: "16px 20px", marginBottom: 16, borderLeft: `5px solid ${phaseStats[activePhase].color}`, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", fontFamily: "Georgia, serif" }}>{phase.title} — {phase.tagline}</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 3, fontStyle: "italic" }}>{phase.moodMessage}</div>
            </div>
            <RadialProgress pct={phaseStats[activePhase].pct} size={60} stroke={6} color={phaseStats[activePhase].color} />
          </div>
        </div>

        {/* Day cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {phase.challenges.map(challenge => {
            const key = `${phase.id}-${challenge.day}`;
            const isComplete  = !!completed[key];
            const isStretched = !!stretched[key];
            const isExpanded  = expandedDay === key;
            const tc  = TYPE_COLOR[challenge.type];
            const tbg = TYPE_BG[challenge.type];
            const tab = getTab(key);
            const mkKeys = challenge.miniSteps.map((_, i) => `${key}-m${i}`);
            const doneCount = mkKeys.filter(k => miniDone[k]).length;
            const total     = challenge.miniSteps.length;
            const pct       = total > 0 ? doneCount / total : 0;

            return (
              <div key={key} style={{ background: isComplete ? "#F0FDF4" : "#fff", border: `1px solid ${isComplete ? "#A7F3D0" : "#F3F4F6"}`, borderLeft: `4px solid ${isComplete ? "#10B981" : tc}`, borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", transition: "box-shadow 0.15s" }}>

                <div onClick={() => setExpandedDay(isExpanded ? null : key)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", cursor: "pointer" }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: isComplete ? "#ECFDF5" : "#F9FAFB", border: `2px solid ${isComplete ? "#10B981" : "#E5E7EB"}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {isComplete ? <span style={{ color: "#10B981", fontSize: 14, fontWeight: 900 }}>✓</span>
                      : <><span style={{ fontSize: 7, color: "#9CA3AF", lineHeight: 1 }}>DAY</span><span style={{ fontSize: 13, fontWeight: 900, color: "#111827", lineHeight: 1, fontFamily: "Georgia, serif" }}>{challenge.day}</span></>}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: isComplete ? "#6B7280" : "#111827", marginBottom: 4, textDecoration: isComplete ? "line-through" : "none", fontFamily: "Georgia, serif" }}>{challenge.title}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 3, background: tbg, color: tc, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>{challenge.type}</span>
                      {doneCount > 0 && <span style={{ fontSize: 10, color: "#9CA3AF" }}>{doneCount}/{total} steps</span>}
                      {isStretched && <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 3, background: "#F5F3FF", color: "#7C3AED", fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>⚡ Stretched</span>}
                    </div>
                  </div>
                  {doneCount > 0 && <svg width="28" height="28" style={{ flexShrink: 0, transform: "rotate(-90deg)" }}>
                    <circle cx="14" cy="14" r="10" fill="none" stroke="#F3F4F6" strokeWidth="3" />
                    <circle cx="14" cy="14" r="10" fill="none" stroke={tc} strokeWidth="3"
                      strokeDasharray={`${2*Math.PI*10}`} strokeDashoffset={`${2*Math.PI*10*(1-pct)}`}
                      strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.3s" }} />
                  </svg>}
                  <span style={{ color: "#D1D5DB", fontSize: 10, fontWeight: 700 }}>{isExpanded ? "▲" : "▼"}</span>
                </div>

                {isExpanded && (
                  <div style={{ borderTop: "1px solid #F3F4F6" }}>
                    {/* Emotion */}
                    <div style={{ background: "#FFFBEB", borderBottom: "1px solid #FEF3C7", padding: "10px 16px", display: "flex", gap: 10 }}>
                      <span style={{ fontSize: 16, flexShrink: 0 }}>🫶</span>
                      <p style={{ margin: 0, fontSize: 12, color: "#92400E", lineHeight: 1.7, fontStyle: "italic" }}>{challenge.emotion}</p>
                    </div>
                    {/* Book ref */}
                    <div style={{ background: "#F0FDF4", borderBottom: "1px solid #BBF7D0", padding: "13px 16px" }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 4, alignSelf: "stretch", background: "#065F46", borderRadius: 2, flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 9, letterSpacing: 2, color: "#065F46", textTransform: "uppercase", fontWeight: 800, marginBottom: 2 }}>📗 {BOOK.title}</div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: "#065F46", marginBottom: 6, fontStyle: "italic" }}>"{challenge.bookRef.concept}"</div>
                          <p style={{ margin: "0 0 8px", fontSize: 12, color: "#374151", lineHeight: 1.7 }}>{challenge.bookRef.insight}</p>
                          <div style={{ background: "#fff", border: "1px solid #BBF7D0", borderLeft: "4px solid #065F46", borderRadius: 6, padding: "8px 12px", fontSize: 12, color: "#166534", lineHeight: 1.65 }}>
                            <strong>→ Action:</strong> {challenge.bookRef.action}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tabs */}
                    <div style={{ display: "flex", background: "#F9FAFB", borderBottom: "1px solid #F3F4F6" }}>
                      {[["steps","📋 Steps"],["tools","🔧 Tips"],["info","📖 Overview"]].map(([t, label]) => (
                        <button key={t} onClick={e => { e.stopPropagation(); setTab(key, t); }} style={{ flex: 1, background: tab===t ? "#fff" : "none", border: "none", borderBottom: tab===t ? `2px solid ${tc}` : "2px solid transparent", padding: "9px 6px", fontSize: 11, color: tab===t ? "#111827" : "#9CA3AF", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: tab===t ? 700 : 400 }}>
                          {label}
                        </button>
                      ))}
                    </div>
                    <div style={{ padding: "14px 16px 16px", background: "#fff" }}>
                      {tab === "steps" && (
                        <div>
                          {challenge.miniSteps.map((step, i) => {
                            const mk = `${key}-m${i}`;
                            const done = !!miniDone[mk];
                            return (
                              <div key={mk} onClick={e => { e.stopPropagation(); toggleKey(setMiniDone, mk); }}
                                style={{ display: "flex", gap: 10, padding: "9px 10px", marginBottom: 4, borderRadius: 7, background: done ? "#F0FDF4" : "#F9FAFB", border: `1px solid ${done ? "#BBF7D0" : "#F3F4F6"}`, cursor: "pointer" }}>
                                <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${done ? "#10B981" : "#E5E7EB"}`, background: done ? "#10B981" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                                  {done && <span style={{ color: "#fff", fontSize: 9, fontWeight: 900 }}>✓</span>}
                                </div>
                                <span style={{ fontSize: 12, color: done ? "#9CA3AF" : "#374151", lineHeight: 1.55, textDecoration: done ? "line-through" : "none" }}>
                                  <span style={{ color: tc, fontWeight: 800, marginRight: 4, fontSize: 10 }}>{String(i+1).padStart(2,"0")}.</span>{step}
                                </span>
                              </div>
                            );
                          })}
                          {doneCount > 0 && <div style={{ height: 4, background: "#F3F4F6", borderRadius: 99, overflow: "hidden", marginTop: 10 }}>
                            <div style={{ height: "100%", width: `${pct*100}%`, background: tc, borderRadius: 99, transition: "width 0.3s" }} />
                          </div>}
                        </div>
                      )}
                      {tab === "tools" && (
                        <div>
                          {challenge.practical.map((tip, i) => (
                            <div key={i} style={{ display: "flex", gap: 10, padding: "9px 12px", marginBottom: 6, borderRadius: 7, background: "#F9FAFB", border: "1px solid #F3F4F6" }}>
                              <span style={{ fontSize: 14, flexShrink: 0 }}>{["💡","🔗","📌"][i]}</span>
                              <span style={{ fontSize: 12, color: "#374151", lineHeight: 1.6 }}>{tip}</span>
                            </div>
                          ))}
                          <div style={{ marginTop: 12, background: "#FFFBEB", border: "1px solid #FDE68A", borderLeft: "4px solid #F59E0B", borderRadius: 6, padding: "9px 12px", marginBottom: 8 }}>
                            <div style={{ fontSize: 9, color: "#92400E", letterSpacing: 2, textTransform: "uppercase", fontWeight: 800, marginBottom: 3 }}>📎 Deliverable</div>
                            <div style={{ fontSize: 12, color: "#111827" }}>{challenge.deliverable}</div>
                          </div>
                          <div style={{ background: "#F5F3FF", border: "1px solid #DDD6FE", borderLeft: "4px solid #7C3AED", borderRadius: 6, padding: "9px 12px" }}>
                            <div style={{ fontSize: 9, color: "#4C1D95", letterSpacing: 2, textTransform: "uppercase", fontWeight: 800, marginBottom: 3 }}>⚡ Stretch</div>
                            <div style={{ fontSize: 12, color: "#111827" }}>{challenge.stretch}</div>
                          </div>
                        </div>
                      )}
                      {tab === "info" && (
                        <div>
                          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: "0 0 14px", fontStyle: "italic" }}>{challenge.task}</p>
                          <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderLeft: "4px solid #F59E0B", borderRadius: 6, padding: "9px 12px", marginBottom: 8 }}>
                            <div style={{ fontSize: 9, color: "#92400E", letterSpacing: 2, textTransform: "uppercase", fontWeight: 800, marginBottom: 3 }}>📎 Deliverable</div>
                            <div style={{ fontSize: 12, color: "#111827" }}>{challenge.deliverable}</div>
                          </div>
                          <div style={{ background: "#F5F3FF", border: "1px solid #DDD6FE", borderLeft: "4px solid #7C3AED", borderRadius: 6, padding: "9px 12px" }}>
                            <div style={{ fontSize: 9, color: "#4C1D95", letterSpacing: 2, textTransform: "uppercase", fontWeight: 800, marginBottom: 3 }}>⚡ Stretch</div>
                            <div style={{ fontSize: 12, color: "#111827" }}>{challenge.stretch}</div>
                          </div>
                        </div>
                      )}
                      <div style={{ display: "flex", gap: 8, marginTop: 14, paddingTop: 12, borderTop: "1px solid #F3F4F6" }}>
                        <button onClick={e => { e.stopPropagation(); toggleKey(setCompleted, key); }} style={{ padding: "8px 18px", borderRadius: 7, border: "none", background: isComplete ? "#ECFDF5" : "#111827", color: isComplete ? "#16A34A" : "#fff", fontSize: 11, cursor: "pointer", fontWeight: 700, fontFamily: "Georgia, serif" }}>
                          {isComplete ? "✓ Complete" : "Mark Complete"}
                        </button>
                        <button onClick={e => { e.stopPropagation(); toggleKey(setStretched, key); }} style={{ padding: "8px 18px", borderRadius: 7, border: `1px solid ${isStretched ? "#A78BFA" : "#E5E7EB"}`, background: isStretched ? "#F5F3FF" : "transparent", color: isStretched ? "#7C3AED" : "#9CA3AF", fontSize: 11, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                          ⚡ {isStretched ? "Stretched!" : "Did the Stretch?"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ══ YEAR PLAN VIEW ══
  const YearPlanView = () => {
    // all state lives in Dashboard above — no hooks here

    // Google Calendar URL builder
    const makeGCalURL = (month, title, desc, daysFromStart = 0) => {
      const base = new Date(startDate);
      base.setMonth(base.getMonth() + month - 1);
      base.setDate(1 + daysFromStart);
      const end = new Date(base); end.setDate(end.getDate() + 1);
      const fmt = d => d.toISOString().replace(/[-:]/g,"").split(".")[0] + "Z";
      const params = new URLSearchParams({
        action: "TEMPLATE",
        text: title,
        dates: `${fmt(base)}/${fmt(end)}`,
        details: desc,
        sf: "true",
        output: "xml",
      });
      return `https://calendar.google.com/calendar/render?${params}`;
    };

    const makeReminderURL = (month, title, desc) => makeGCalURL(month, `🔔 Reminder: ${title}`, `Monthly check-in reminder.\n\n${desc}`, 0);

    const getYearTab = key => yearSubTab[key] || "steps";
    const setYearTab = (key, t) => setYearSubTab(p => ({ ...p, [key]: t }));
    const toggleYM   = key => setYearMiniDone(p => ({ ...p, [key]: !p[key] }));

    const yearProgress = YEAR_PLAN.map(m => {
      const done = m.subtasks.filter((_, i) => yearMiniDone[`m${m.month}-s${i}`]).length;
      return { month: m.month, done, total: m.subtasks.length, pct: Math.round((done / m.subtasks.length) * 100) };
    });
    const totalYearTasks  = YEAR_PLAN.reduce((s, m) => s + m.subtasks.length, 0);
    const totalYearDone   = YEAR_PLAN.reduce((s, m) => s + m.subtasks.filter((_, i) => yearMiniDone[`m${m.month}-s${i}`]).length, 0);
    const overallYearPct  = Math.round((totalYearDone / totalYearTasks) * 100);

    const quarterData = [
      { q: "Q1", label: "Jan–Mar", theme: "Validate", desc: "Challenge → First customers → Official launch", months: [1,2,3], color: "#4F6EF7" },
      { q: "Q2", label: "Apr–Jun", theme: "Revenue",  desc: "₹1L/month → Systemise → Half-year audit",    months: [4,5,6], color: "#10B981" },
      { q: "Q3", label: "Jul–Sep", theme: "Scale",    desc: "Expand → Acquisition scout → Close deal",    months: [7,8,9], color: "#F59E0B" },
      { q: "Q4", label: "Oct–Dec", theme: "Optimise", desc: "Efficiency → Diversify → Year-end review",   months: [10,11,12], color: "#EF4444" },
    ];

    return (
      <div>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#111827", margin: "0 0 4px", fontFamily: "Georgia, serif" }}>1-Year Business Roadmap</h2>
            <p style={{ color: "#6B7280", fontSize: 12, margin: 0 }}>Building on your 30-day foundation — month by month to ₹24L+ annual revenue</p>
          </div>
          {/* Start date picker */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #E5E7EB", borderRadius: 10, padding: "8px 14px" }}>
            <span style={{ fontSize: 16 }}>📅</span>
            <div>
              <div style={{ fontSize: 9, color: "#9CA3AF", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Your Year 1 Start Date</div>
              <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)}
                style={{ border: "none", outline: "none", fontSize: 13, fontWeight: 700, color: "#111827", background: "transparent", fontFamily: "Georgia, serif", cursor: "pointer" }} />
            </div>
            <span style={{ fontSize: 11, color: "#4F6EF7", fontWeight: 700 }}>→ auto-dates all calendar events</span>
          </div>
        </div>

        {/* KPI row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #F3F4F6", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", borderTop: "3px solid #4F6EF7" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#4F6EF7", fontFamily: "Georgia, serif" }}>{overallYearPct}%</div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>Year Plan Progress</div>
            <div style={{ height: 4, background: "#F3F4F6", borderRadius: 99, overflow: "hidden", marginTop: 8 }}>
              <div style={{ height: "100%", width: `${overallYearPct}%`, background: "#4F6EF7", borderRadius: 99, transition: "width 0.5s" }} />
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #F3F4F6", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", borderTop: "3px solid #10B981" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#10B981", fontFamily: "Georgia, serif" }}>{totalYearDone}</div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>Tasks Completed</div>
            <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 4 }}>of {totalYearTasks} total subtasks</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #F3F4F6", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", borderTop: "3px solid #F59E0B" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#F59E0B", fontFamily: "Georgia, serif" }}>{yearProgress.filter(y => y.pct === 100).length}</div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>Months Completed</div>
            <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 4 }}>of 12 months</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #F3F4F6", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", borderTop: "3px solid #EF4444" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#EF4444", fontFamily: "Georgia, serif" }}>₹24L+</div>
            <div style={{ fontSize: 11, color: "#6B7280" }}>Year Target</div>
            <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 4 }}>annual revenue goal</div>
          </div>
        </div>

        {/* Quarter overview */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
          {quarterData.map(q => {
            const qMonths = YEAR_PLAN.filter(m => q.months.includes(m.month));
            const qDone = qMonths.reduce((s, m) => s + m.subtasks.filter((_, i) => yearMiniDone[`m${m.month}-s${i}`]).length, 0);
            const qTotal = qMonths.reduce((s, m) => s + m.subtasks.length, 0);
            const qPct = Math.round((qDone / qTotal) * 100);
            return (
              <div key={q.q} style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 12, padding: "16px", borderTop: `4px solid ${q.color}`, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <div style={{ fontSize: 11, fontWeight: 900, color: q.color, letterSpacing: 2, textTransform: "uppercase" }}>{q.q} · {q.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: q.color }}>{qPct}%</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 4, fontFamily: "Georgia, serif" }}>{q.theme}</div>
                <div style={{ fontSize: 10, color: "#6B7280", lineHeight: 1.5, marginBottom: 8 }}>{q.desc}</div>
                <div style={{ height: 4, background: "#F3F4F6", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${qPct}%`, background: q.color, borderRadius: 99, transition: "width 0.5s" }} />
                </div>
                <div style={{ fontSize: 9, color: "#9CA3AF", marginTop: 4 }}>{qDone}/{qTotal} tasks</div>
              </div>
            );
          })}
        </div>

        {/* Monthly bar chart strip */}
        <div style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 14, padding: "20px", marginBottom: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>Monthly Progress at a Glance</div>
            <div style={{ fontSize: 11, color: "#9CA3AF" }}>{totalYearDone}/{totalYearTasks} subtasks done</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 6 }}>
            {YEAR_PLAN.map((m, idx) => {
              const yp = yearProgress[idx];
              return (
                <div key={m.month} style={{ textAlign: "center", cursor: "pointer" }} onClick={() => setExpandedMonth(expandedMonth === m.month ? null : m.month)}>
                  <div style={{ height: 64, background: "#F9FAFB", border: `1.5px solid ${m.color}40`, borderRadius: 8, display: "flex", flexDirection: "column", justifyContent: "flex-end", marginBottom: 4, overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", top: 4, left: 0, right: 0, textAlign: "center", fontSize: 13 }}>
                      {["📗","💰","🚀","📈","⚙️","🔍","📊","🏢","🤝","✂️","🌿","🏆"][m.month-1]}
                    </div>
                    <div style={{ height: `${yp.pct}%`, background: `${m.color}`, borderRadius: "0 0 6px 6px", minHeight: yp.pct > 0 ? 3 : 0, transition: "height 0.4s ease" }} />
                  </div>
                  <div style={{ fontSize: 8, color: "#9CA3AF", fontWeight: 700 }}>{m.label}</div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: m.color }}>{yp.pct}%</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#9CA3AF", borderTop: "1px solid #F3F4F6", paddingTop: 10, marginTop: 10 }}>
            <span>← Month 1: Challenge</span>
            <span style={{ color: "#10B981", fontWeight: 700 }}>Target: ₹24L+ Annual Revenue →</span>
          </div>
        </div>

        {/* Monthly cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {YEAR_PLAN.map((m, idx) => {
            const isExpanded = expandedMonth === m.month;
            const yp         = yearProgress[idx];
            const ytab       = getYearTab(`m${m.month}`);
            const doneCount  = yp.done;
            const totalCount = yp.total;
            const pct        = totalCount > 0 ? doneCount / totalCount : 0;

            return (
              <div key={m.month} style={{ background: yp.pct === 100 ? "#F0FDF4" : "#fff", border: `1px solid ${yp.pct === 100 ? "#A7F3D0" : "#F3F4F6"}`, borderLeft: `4px solid ${yp.pct === 100 ? "#10B981" : m.color}`, borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", transition: "box-shadow 0.15s" }}>

                {/* Card row */}
                <div onClick={() => setExpandedMonth(isExpanded ? null : m.month)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", cursor: "pointer" }}>
                  <div style={{ width: 46, height: 46, borderRadius: 10, background: yp.pct === 100 ? "#ECFDF5" : m.bg, border: `2px solid ${yp.pct === 100 ? "#10B981" : m.color}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {yp.pct === 100
                      ? <span style={{ fontSize: 20, color: "#10B981" }}>✓</span>
                      : <><span style={{ fontSize: 7, color: m.color, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", lineHeight: 1 }}>Month</span>
                        <span style={{ fontSize: 18, fontWeight: 900, color: m.color, lineHeight: 1, fontFamily: "Georgia, serif" }}>{m.month}</span></>
                    }
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: "#111827", fontFamily: "Georgia, serif" }}>{m.title}</span>
                      <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 3, background: m.bg, color: m.color, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>{m.category}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 5 }}>{m.theme}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ flex: 1, maxWidth: 160, height: 4, background: "#F3F4F6", borderRadius: 99, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${pct*100}%`, background: m.color, borderRadius: 99, transition: "width 0.4s" }} />
                      </div>
                      <span style={{ fontSize: 10, color: "#9CA3AF" }}>{doneCount}/{totalCount} tasks</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: m.color, background: m.bg, padding: "4px 10px", borderRadius: 6 }}>{m.kpi}</div>
                    {/* Ring */}
                    <svg width="32" height="32" style={{ transform: "rotate(-90deg)" }}>
                      <circle cx="16" cy="16" r="12" fill="none" stroke="#F3F4F6" strokeWidth="3.5" />
                      <circle cx="16" cy="16" r="12" fill="none" stroke={m.color} strokeWidth="3.5"
                        strokeDasharray={`${2*Math.PI*12}`} strokeDashoffset={`${2*Math.PI*12*(1-pct)}`}
                        strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.4s" }} />
                    </svg>
                  </div>
                  <span style={{ color: "#D1D5DB", fontSize: 10, fontWeight: 700, marginLeft: -6 }}>{isExpanded ? "▲" : "▼"}</span>
                </div>

                {/* ── EXPANDED PANEL ── */}
                {isExpanded && (
                  <div style={{ borderTop: "1px solid #F3F4F6" }}>

                    {/* Emotion banner */}
                    <div style={{ background: "#FFFBEB", borderBottom: "1px solid #FEF3C7", padding: "10px 18px", display: "flex", gap: 10 }}>
                      <span style={{ fontSize: 16, flexShrink: 0 }}>🫶</span>
                      <p style={{ margin: 0, fontSize: 12, color: "#92400E", lineHeight: 1.7, fontStyle: "italic" }}>{m.emotion}</p>
                    </div>

                    {/* Google Calendar banner */}
                    <div style={{ background: "#F0F9FF", borderBottom: "1px solid #BAE6FD", padding: "10px 18px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{ fontSize: 15 }}>📅</span>
                      <span style={{ fontSize: 12, color: "#0369A1", fontWeight: 600, flex: 1 }}>Add this month to Google Calendar</span>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        <a href={makeGCalURL(m.month, m.calTitle, m.calDesc)} target="_blank" rel="noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 6, background: "#0EA5E9", color: "#fff", fontSize: 11, fontWeight: 700, textDecoration: "none", fontFamily: "Georgia, serif" }}>
                          📅 Add to Calendar
                        </a>
                        <a href={makeReminderURL(m.month, m.title, m.calDesc)} target="_blank" rel="noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 6, background: "#7C3AED", color: "#fff", fontSize: 11, fontWeight: 700, textDecoration: "none", fontFamily: "Georgia, serif" }}>
                          🔔 Set Reminder
                        </a>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div style={{ display: "flex", background: "#F9FAFB", borderBottom: "1px solid #F3F4F6" }}>
                      {[["steps","📋 Subtasks"],["milestones","🎯 Milestones"],["focus","📖 Focus"]].map(([t, label]) => (
                        <button key={t} onClick={e => { e.stopPropagation(); setYearTab(`m${m.month}`, t); }} style={{
                          flex: 1, background: ytab===t ? "#fff" : "none", border: "none",
                          borderBottom: ytab===t ? `2px solid ${m.color}` : "2px solid transparent",
                          padding: "9px 6px", fontSize: 11, color: ytab===t ? "#111827" : "#9CA3AF",
                          cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: ytab===t ? 700 : 400,
                          transition: "all 0.15s",
                        }}>
                          {label}
                        </button>
                      ))}
                    </div>

                    <div style={{ padding: "16px 18px 18px", background: "#fff" }}>

                      {/* SUBTASKS TAB */}
                      {ytab === "steps" && (
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                            <span style={{ fontSize: 10, color: "#9CA3AF", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}>Tick each task as you complete it</span>
                            <span style={{ fontSize: 11, fontWeight: 700, color: m.color }}>{doneCount}/{totalCount}</span>
                          </div>
                          {m.subtasks.map((task, i) => {
                            const mk   = `m${m.month}-s${i}`;
                            const done = !!yearMiniDone[mk];
                            return (
                              <div key={mk} onClick={e => { e.stopPropagation(); toggleYM(mk); }}
                                style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 12px", marginBottom: 4, borderRadius: 8, background: done ? "#F0FDF4" : "#F9FAFB", border: `1px solid ${done ? "#A7F3D0" : "#F3F4F6"}`, cursor: "pointer", transition: "all 0.15s" }}>
                                <div style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${done ? "#10B981" : m.color + "80"}`, background: done ? "#10B981" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, transition: "all 0.15s" }}>
                                  {done && <span style={{ color: "#fff", fontSize: 10, fontWeight: 900 }}>✓</span>}
                                </div>
                                <div style={{ flex: 1 }}>
                                  <span style={{ fontSize: 10, fontWeight: 800, color: done ? "#9CA3AF" : m.color, marginRight: 6 }}>{String(i+1).padStart(2,"0")}.</span>
                                  <span style={{ fontSize: 13, color: done ? "#9CA3AF" : "#374151", lineHeight: 1.6, textDecoration: done ? "line-through" : "none" }}>{task}</span>
                                </div>
                                {/* Per-task gcal button */}
                                <a href={makeGCalURL(m.month, `✅ ${task}`, `Month ${m.month}: ${m.title}\n\n${task}`, i * 2)} target="_blank" rel="noreferrer"
                                  onClick={e => e.stopPropagation()}
                                  style={{ fontSize: 10, color: "#0EA5E9", textDecoration: "none", padding: "3px 7px", border: "1px solid #BAE6FD", borderRadius: 4, background: "#F0F9FF", flexShrink: 0, whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>
                                  📅 Cal
                                </a>
                              </div>
                            );
                          })}
                          {doneCount > 0 && (
                            <div style={{ marginTop: 12 }}>
                              <div style={{ height: 5, background: "#F3F4F6", borderRadius: 99, overflow: "hidden" }}>
                                <div style={{ height: "100%", width: `${pct*100}%`, background: m.color, borderRadius: 99, transition: "width 0.4s" }} />
                              </div>
                              {doneCount === totalCount && (
                                <div style={{ marginTop: 10, textAlign: "center", fontSize: 12, color: "#065F46", fontWeight: 700, background: "#D1FAE5", borderRadius: 7, padding: "8px" }}>
                                  🎉 All tasks done — Month {m.month} complete!
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* MILESTONES TAB */}
                      {ytab === "milestones" && (
                        <div>
                          <div style={{ fontSize: 10, color: "#9CA3AF", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Key milestones this month</div>
                          {m.milestones.map((ms, i) => (
                            <div key={i} style={{ display: "flex", gap: 12, padding: "10px 14px", marginBottom: 6, background: "#F9FAFB", border: "1px solid #F3F4F6", borderRadius: 8, alignItems: "flex-start" }}>
                              <div style={{ width: 24, height: 24, borderRadius: "50%", background: m.bg, border: `2px solid ${m.color}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 10, fontWeight: 900, color: m.color }}>{i+1}</div>
                              <div style={{ flex: 1 }}>
                                <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.55 }}>{ms}</span>
                              </div>
                              <a href={makeGCalURL(m.month, `🎯 ${ms}`, `Month ${m.month} Milestone: ${ms}\n\nPart of: ${m.title} — ${m.theme}`, i * 5)} target="_blank" rel="noreferrer"
                                style={{ fontSize: 10, color: "#0EA5E9", textDecoration: "none", padding: "3px 7px", border: "1px solid #BAE6FD", borderRadius: 4, background: "#F0F9FF", flexShrink: 0, whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>
                                📅 Schedule
                              </a>
                            </div>
                          ))}
                          <div style={{ marginTop: 14, background: m.bg, border: `1px solid ${m.color}40`, borderRadius: 8, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: 11, color: m.color, fontWeight: 700 }}>🎯 Monthly Target KPI</span>
                            <span style={{ fontSize: 15, fontWeight: 900, color: m.color, fontFamily: "Georgia, serif" }}>{m.kpi}</span>
                          </div>
                        </div>
                      )}

                      {/* FOCUS TAB */}
                      {ytab === "focus" && (
                        <div>
                          <div style={{ borderLeft: `4px solid ${m.color}`, paddingLeft: 14, marginBottom: 16 }}>
                            <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.8, fontStyle: "italic" }}>{m.focus}</p>
                          </div>
                          <div style={{ background: m.bg, border: `1px solid ${m.color}40`, borderRadius: 8, padding: "12px 14px", marginBottom: 12 }}>
                            <div style={{ fontSize: 9, color: m.color, letterSpacing: 2, textTransform: "uppercase", fontWeight: 800, marginBottom: 4 }}>🎯 KPI Target</div>
                            <div style={{ fontSize: 18, fontWeight: 900, color: m.color, fontFamily: "Georgia, serif" }}>{m.kpi}</div>
                          </div>
                          <div style={{ background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: 8, padding: "12px 14px" }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: "#0369A1", marginBottom: 10 }}>📅 Add entire month to Google Calendar</div>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                              <a href={makeGCalURL(m.month, m.calTitle, m.calDesc)} target="_blank" rel="noreferrer"
                                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 7, background: "#0EA5E9", color: "#fff", fontSize: 12, fontWeight: 700, textDecoration: "none", fontFamily: "Georgia, serif" }}>
                                📅 Add Month {m.month} Start Event
                              </a>
                              <a href={makeReminderURL(m.month, m.title, m.calDesc)} target="_blank" rel="noreferrer"
                                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 7, background: "#7C3AED", color: "#fff", fontSize: 12, fontWeight: 700, textDecoration: "none", fontFamily: "Georgia, serif" }}>
                                🔔 Set Monthly Reminder
                              </a>
                            </div>
                            <p style={{ margin: "10px 0 0", fontSize: 10, color: "#6B7280" }}>Events are created based on your Year 1 Start Date above. Each milestone gets its own calendar entry spread across the month.</p>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ══ ROOT RENDER ══
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F3F4F6", fontFamily: "Georgia, 'Times New Roman', serif" }}>
      {showProfile && session && <ProfileModal session={session} onClose={() => setShowProfile(false)} onLogout={handleLogout} />}
      {Sidebar()}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {/* Top bar */}
        <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11, color: "#9CA3AF" }}>Guided by</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#374151", fontStyle: "italic" }}>{BOOK.title}</span>
            <span style={{ fontSize: 11, color: "#9CA3AF" }}>— {BOOK.author}</span>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ height: 6, width: 100, background: "#F3F4F6", borderRadius: 99, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progress}%`, background: "#4F6EF7", borderRadius: 99 }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#4F6EF7" }}>{progress}%</span>
            <button onClick={() => setShowProfile(true)} style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 10px", borderRadius: 8, border: "1px solid #E5E7EB", background: "#F9FAFB", cursor: "pointer", fontFamily: "Georgia, serif" }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: "#4F6EF7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: "#fff" }}>{session?.name?.charAt(0).toUpperCase()}</div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>{session?.name?.split(" ")[0]}</span>
            </button>
          </div>
        </div>

        {/* Page content */}
        <div style={{ flex: 1, padding: "28px 28px 64px", overflowY: "auto" }}>
          {nav === "dashboard" && DashboardView()}
          {nav === "weekly"    && WeeklyCalendarView()}
          {nav === "challenge" && ChallengeView()}
          {nav === "yearplan"  && YearPlanView()}
        </div>
      </div>
    </div>
  );
}
