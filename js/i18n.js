/**
 * Zaokit CX (Codex API) — i18n (zh-CN / en)
 * Auto-detects browser language, defaults to zh.
 * Usage: add data-i18n="key" for text, data-i18n-html="key" for innerHTML.
 */

const I18N = {
  zh: {
    _lang: 'zh-CN',
    _title: 'Zaokit Codex API 服务 - 企业级、可开票的 OpenAI 合规接入方案',
    _description: 'Zaokit 提供正规商业渠道的 OpenAI / Codex API 整合优化服务。支持 GPT-5.5 / GPT-4o / o3 / o1 等全系列模型，提供企业级高并发与高可用专线，支持开具正规增值税发票。',

    // Nav
    nav_home: '首页',
    nav_advantages: '核心优势',
    nav_pricing: '计费方案',
    nav_features: '功能特性',
    nav_process: '接入流程',
    nav_faq: '常见问题',

    // Hero
    hero_eyebrow: '正规商务渠道 · 企业级合规接入',
    hero_title: '解锁 OpenAI 的强大能力，<span>解决合规与报销痛点。</span>',
    hero_desc: 'Zaokit 为企业级用户与全球化团队提供高性能、高可用的 OpenAI / Codex API 接入与加速服务。100% 兼容官方接口协议，支持全系列模型。最重要的是：我们提供对公结算并开具正规增值税发票。',
    hero_cta_primary: '联系客户经理',
    hero_cta_secondary: '查看计费方案',
    hero_meta_1: '支持开具增值税专票/普票',
    hero_meta_2: '包含 GPT-5.5 / GPT-4o / o3 / o1',

    // Hero Card
    hero_card_title: '为什么企业选择我们',
    hero_card_1_title: '合规无忧的财务流程',
    hero_card_1_desc: '告别个人代付与非合规渠道，签订正规商务合同，公对公转账，提供合规发票，让财务审计不再头疼。',
    hero_card_2_title: '原生级别的开发体验',
    hero_card_2_desc: 'API 请求结构与 OpenAI 官方完全一致，只需修改 Base URL 和 API Key 即可无缝切换，无需重写现有代码。',
    hero_card_3_title: '企业级的稳定保障',
    hero_card_3_desc: '多重路由、并发隔离池与故障转移机制，保障高频调用场景下的极速响应与可用性。',

    // Stats
    stat_1_label: 'SLA 承诺可用性',
    stat_2_label: '首字响应延迟',
    stat_3_label: 'API 兼容性',
    stat_4_label: '技术支持响应',

    // Advantages
    adv_tag: '核心优势',
    adv_title: '专为 B2B 场景打造的接入体验',
    adv_1_title: '阳光财务与合规',
    adv_1_desc: '全流程透明合法。支持先签订采购合同后对公打款，根据实际开票抬头开具增值税专用/普通发票，扫清企业在技术采购与合规记账上的财务阻碍。',
    adv_2_title: '极速稳定的网络层',
    adv_2_desc: '通过优化的全球加速专线直连官方 API 节点。自动化的多账号池负载均衡，有效避免单一账号触发并发限制（Rate Limits）导致的请求失败。',
    adv_3_title: '数据安全与隐私',
    adv_3_desc: '作为透明中转加速层，我们坚守不记录、不缓存任何 prompt 及生成内容的底线。您的所有对话数据安全传输至官方模型接口，满足企业级隐私合规要求。',

    // Pricing
    price_tag: '计费方案',
    price_title: '透明、灵活的充值模式',
    price_desc: '按 Token 消耗实时计费，无隐形费用，无月租。汇率透明，充值金额永不过期。',
    price_1_name: '基础起步',
    price_1_price: '¥1,000',
    price_1_unit: ' /次',
    price_1_note: '适合小型团队与测试验证',
    price_1_f1: '按实际 Token 消耗扣费',
    price_1_f2: '提供增值税普通发票',
    price_1_f3: '基础并发配额',
    price_1_f4: '工作日邮件支持',
    price_1_btn: '选择方案',
    price_1_price_html: '¥1,000<span class="price-unit"> /次</span>',
    price_badge: '最受欢迎',
    price_2_name: '企业标准',
    price_2_price: '¥5,000',
    price_2_unit: ' /次',
    price_2_note: '适合规模化生产环境部署',
    price_2_f1: '按实际 Token 消耗扣费',
    price_2_f2: '提供增值税专用/普通发票',
    price_2_f3: '专属高并发独立通道',
    price_2_f4: '优先技术支持响应',
    price_2_f5: '专属客户经理跟进',
    price_2_btn: '联系采购',
    price_2_price_html: '¥5,000<span class="price-unit"> /次</span>',
    price_3_name: '定制大客户',
    price_3_price: '¥20,000+',
    price_3_price_html: '¥20,000+',
    price_3_note: '超大并发与特殊业务需求',
    price_3_f1: '阶梯优惠折扣费率',
    price_3_f2: '签订年度框架协议',
    price_3_f3: '私有化独占节点配置',
    price_3_f4: '7x24 小时紧急响应',
    price_3_f5: '技术专家驻场支持可选',
    price_3_btn: '定制方案',

    // Process
    proc_tag: '接入流程',
    proc_title: '4 步完成合规接入',
    proc_1_title: '1. 需求确认与测试',
    proc_1_desc: '联系我们提供基本业务场景，获取少量免费测试额度和接口文档，验证兼容性与速度。',
    proc_2_title: '2. 商务合同签署',
    proc_2_desc: '确认采购方案后，双方签署服务采购合同。明确服务等级与合规开票细节。',
    proc_3_title: '3. 对公打款与开票',
    proc_3_desc: '企业对公账户转账，款项确认后我们即刻开具对应的增值税发票并邮寄/发送电子版。',
    proc_4_title: '4. 获取 Key 并上线',
    proc_4_desc: '发放正式生产环境的 API Key 和专属 Endpoint，您的系统即可稳定调用大模型能力。',
    invoice_title: '关于开票的重要说明',
    invoice_desc: 'Zaokit 开具的是正规且合法的服务类目发票。无论是技术服务费还是软件咨询费，均支持开具 6% 的增值税专用发票（一般纳税人可抵扣）或增值税普通发票。扫除由于"非正规渠道支付"和"个人转账"带来的企业财务与税务风险隐患。',
    invoice_badge: '合规抵扣',

    // Features
    feat_tag: '功能特性',
    feat_title: '专为开发者与工程团队准备',
    feat_1: '支持 GPT-5.5 / GPT-4o / o3 / o1 全系列模型',
    feat_2: '完美支持 Server-Sent Events (SSE) 流式输出响应',
    feat_3: '支持 Function Calling (工具调用) 与 Vision 多模态输入',
    feat_4: '通过统一计费面板实时监控 Token 消耗及账单情况',
    feat_5: '支持 LangChain / LlamaIndex 等主流开发框架无缝集成',
    feat_6: '接口级防重放攻击与基础 CC 防护',
    feat_code_title: '极简的代码集成',
    feat_code_desc: '如果您已经在使用官方 SDK（如 Python 或 Node.js），只需修改 Base URL 和 API Key 即可：',
    feat_code_note: '无任何学习成本，即插即用。',

    // FAQ
    faq_title: '常见问题解答',
    faq_1_q: 'Q1：你们的计费标准和官方一样吗？',
    faq_1_a: '我们按照模型官方公开的 Token 定价进行计算，由于我们需要承担专线网络成本、发票税费以及账号池维护成本，综合费率会有一定的溢价。具体报价请联系客户经理获取最新的阶梯价格表。',
    faq_2_q: 'Q2：支持 Anthropic Claude 接口吗？',
    faq_2_a: '支持。我们同样提供 Anthropic Claude 全系列模型（如 Claude 3.5 Sonnet / Claude 3 Opus / Haiku 等）的合规接入服务，且共用同一套额度和计费系统，让您的多模型混用策略更易管理。',
    faq_3_q: 'Q3：调用会有并发（RPM/TPM）限制吗？',
    faq_3_a: '基础方案会有软性的并发限流机制以保障整体稳定性。如果是企业级客户，我们会分配专属的账号池资源，可以突破官方默认的 Tier 限制，满足高并发生产环境需求。',
    faq_4_q: 'Q4：如果中途遇到官方账号不可抗力异常，我的余额与使用会受影响吗？',
    faq_4_a: '这是我们作为企业服务商提供的核心价值之一：我们负责屏蔽与维护底层的接入稳定性。任何接口层面的账号及网络异常均由我们通过多集群路由和冗余资源自动处理，对您的调用透明且无感，您的余额永远安全有效。',

    // CTA
    cta_title: '准备好为您的企业引入顶级 AI 能力了吗？',
    cta_desc: '告别繁琐的账号注册与支付障碍，建立合规透明的财务通道。立即联系我们获取测试额度及专属采购方案。',
    cta_email: '发送邮件咨询',
    cta_wechat: '添加微信沟通',

    // Products banner
    products_title: '探索 Zaokit 更多产品',
    products_desc: '除了 OpenAI / Codex API，我们还提供 Claude API 合规接入和企业 AI 算力统管平台。',
    products_tokenhub_title: 'AI Token Hub',
    products_tokenhub_desc: '企业 AI 算力的总闸与电表，统一计量、分配、管控。',
    products_tokenhub_link: '了解 Token Hub →',
    products_cc_title: 'Zaokit CC · Claude API',
    products_cc_desc: '企业级 Claude 合规接入，100% 兼容官方协议。',
    products_cc_link: '了解 Claude API →',

    // Footer
    footer_note: '专注为企业提供安全、稳定、可开票的全球顶尖 AI 大模型 API 接入与网络优化方案。',
    footer_nav_title: '快速导航',
    footer_nav_1: '核心优势',
    footer_nav_2: '计费方案',
    footer_nav_3: '功能特性',
    footer_nav_4: '常见问题',
    footer_contact_title: '联系我们',
    footer_hours: '工作时间：9:00~23:00',
    footer_products_title: '相关产品',
    footer_product_1: 'AI Token Hub · 企业算力总闸',
    footer_product_2: 'Zaokit CC · Claude API 服务',
    footer_product_3: 'Zaokit · AI 创作入口',

    lang_toggle: 'EN',
  },

  en: {
    _lang: 'en',
    _title: 'Zaokit Codex API — Enterprise-Grade, Invoice-Ready OpenAI Access',
    _description: 'Zaokit provides legitimate commercial OpenAI / Codex API access and acceleration. Supporting GPT-5.5, GPT-4o, o3, o1 and more. Enterprise-grade with official VAT invoicing.',

    nav_home: 'Home',
    nav_advantages: 'Advantages',
    nav_pricing: 'Pricing',
    nav_features: 'Features',
    nav_process: 'Get Started',
    nav_faq: 'FAQ',

    hero_eyebrow: 'Legitimate Channel · Enterprise Compliant',
    hero_title: 'Unlock the power of OpenAI,<span>solve compliance & invoicing pain.</span>',
    hero_desc: 'Zaokit provides high-performance, highly available OpenAI / Codex API access and acceleration for enterprise teams worldwide. 100% compatible with official protocols, supporting all models. Most importantly: we offer B2B settlement with official VAT invoices.',
    hero_cta_primary: 'Contact Sales',
    hero_cta_secondary: 'View Pricing',
    hero_meta_1: 'VAT invoices (special & general)',
    hero_meta_2: 'GPT-5.5 / GPT-4o / o3 / o1',

    hero_card_title: 'Why enterprises choose us',
    hero_card_1_title: 'Hassle-free compliant finances',
    hero_card_1_desc: 'Say goodbye to personal payments and grey channels. Sign proper contracts, B2B wire transfers, compliant invoices — no more audit headaches.',
    hero_card_2_title: 'Native-level developer experience',
    hero_card_2_desc: 'API structure is 100% identical to OpenAI official. Just change Base URL and API Key — zero code rewrite needed.',
    hero_card_3_title: 'Enterprise-grade reliability',
    hero_card_3_desc: 'Multi-routing, isolated concurrency pools, and automatic failover — ensuring ultra-fast response and uptime under heavy usage.',

    stat_1_label: 'SLA Uptime',
    stat_2_label: 'First-token Latency',
    stat_3_label: 'API Compatibility',
    stat_4_label: 'Support Response',

    adv_tag: 'Advantages',
    adv_title: 'Purpose-built for B2B integration',
    adv_1_title: 'Transparent finances & compliance',
    adv_1_desc: 'Fully transparent and legal. Sign procurement contracts first, then wire transfer. We issue VAT special/general invoices based on your entity — clearing all financial hurdles in tech procurement.',
    adv_2_title: 'Ultra-fast stable network',
    adv_2_desc: 'Optimized global acceleration directly to official API nodes. Multi-account pool load balancing effectively prevents rate limit failures from single-account overload.',
    adv_3_title: 'Data security & privacy',
    adv_3_desc: 'As a transparent acceleration layer, we never log or cache any prompts or generated content. All your data transmits securely to official model endpoints, meeting enterprise privacy requirements.',

    price_tag: 'Pricing',
    price_title: 'Transparent, flexible top-up model',
    price_desc: 'Pay-per-token billing in real time. No hidden fees, no monthly subscription. Transparent exchange rates, credits never expire.',
    price_1_name: 'Starter',
    price_1_price: '¥1,000',
    price_1_unit: ' /top-up',
    price_1_note: 'For small teams & testing',
    price_1_f1: 'Pay by actual token usage',
    price_1_f2: 'VAT general invoice',
    price_1_f3: 'Standard concurrency quota',
    price_1_f4: 'Business-day email support',
    price_1_btn: 'Choose Plan',
    price_1_price_html: '¥1,000<span class="price-unit"> /top-up</span>',
    price_badge: 'Most Popular',
    price_2_name: 'Enterprise Standard',
    price_2_price: '¥5,000',
    price_2_unit: ' /top-up',
    price_2_note: 'For production-scale deployments',
    price_2_f1: 'Pay by actual token usage',
    price_2_f2: 'VAT special/general invoices',
    price_2_f3: 'Dedicated high-concurrency channel',
    price_2_f4: 'Priority technical support',
    price_2_f5: 'Dedicated account manager',
    price_2_btn: 'Contact Sales',
    price_2_price_html: '¥5,000<span class="price-unit"> /top-up</span>',
    price_3_name: 'Custom Enterprise',
    price_3_price: '¥20,000+',
    price_3_price_html: '¥20,000+',
    price_3_note: 'High concurrency & custom needs',
    price_3_f1: 'Tiered volume discounts',
    price_3_f2: 'Annual framework agreement',
    price_3_f3: 'Private dedicated nodes',
    price_3_f4: '7×24 emergency response',
    price_3_f5: 'On-site expert support (optional)',
    price_3_btn: 'Custom Plan',

    proc_tag: 'Get Started',
    proc_title: '4 steps to compliant access',
    proc_1_title: '1. Requirements & Testing',
    proc_1_desc: 'Contact us with your use case. Get free test credits and API docs to verify compatibility and speed.',
    proc_2_title: '2. Contract Signing',
    proc_2_desc: 'After confirming a plan, both parties sign a service procurement contract with clear SLAs and invoicing terms.',
    proc_3_title: '3. Payment & Invoicing',
    proc_3_desc: 'Wire transfer from your corporate account. Upon confirmation, we immediately issue the corresponding VAT invoice.',
    proc_4_title: '4. Get Keys & Go Live',
    proc_4_desc: 'Receive your production API Key and dedicated endpoint. Your system can now reliably call LLM capabilities.',
    invoice_title: 'Important note on invoicing',
    invoice_desc: 'Zaokit issues legitimate service-category invoices. Whether for "technical services" or "software consulting", we support 6% VAT special invoices (deductible for general taxpayers) or VAT general invoices — eliminating tax risks from informal payment channels.',
    invoice_badge: 'Tax Compliant',

    feat_tag: 'Features',
    feat_title: 'Built for developers & engineering teams',
    feat_1: 'Supports GPT-5.5 / GPT-4o / o3 / o1 full model lineup',
    feat_2: 'Full Server-Sent Events (SSE) streaming support',
    feat_3: 'Function Calling (tool use) & Vision multimodal input',
    feat_4: 'Real-time token usage & billing dashboard',
    feat_5: 'Seamless LangChain / LlamaIndex framework integration',
    feat_6: 'API-level replay protection & basic DDoS defense',
    feat_code_title: 'Dead-simple code integration',
    feat_code_desc: 'If you\'re already using the official SDK (Python or Node.js), just change the Base URL and API Key:',
    feat_code_note: 'Zero learning curve. Plug and play.',

    faq_title: 'Frequently Asked Questions',
    faq_1_q: 'Q1: Is your pricing the same as OpenAI official?',
    faq_1_a: 'We follow official token pricing. Due to dedicated network costs, invoice taxes, and account pool maintenance, there is a modest premium. Contact your account manager for the latest tiered pricing sheet.',
    faq_2_q: 'Q2: Do you support Anthropic Claude APIs?',
    faq_2_a: 'Yes. We also provide compliant access to the full Anthropic Claude lineup (Claude 3.5 Sonnet / Claude 3 Opus / Haiku, etc.), sharing the same credits and billing system for easier multi-model management.',
    faq_3_q: 'Q3: Are there concurrency (RPM/TPM) limits?',
    faq_3_a: 'The Starter plan has soft rate limiting for system stability. Enterprise clients get dedicated account pool resources that can exceed official Tier limits, meeting high-concurrency production needs.',
    faq_4_q: 'Q4: What if upstream accounts hit force-majeure issues? Will my credits be affected?',
    faq_4_a: 'This is a core value we provide as an enterprise service: we absorb and handle all upstream instability. Any account or network issues are automatically resolved through multi-cluster routing and redundant resources — transparent and seamless to your calls. Your credits are always safe.',

    cta_title: 'Ready to bring top-tier AI to your enterprise?',
    cta_desc: 'Ditch the hassle of foreign account sign-ups and payment barriers. Build a compliant, transparent financial channel. Contact us for test credits and a tailored procurement plan.',
    cta_email: 'Email Us',
    cta_wechat: 'Add on WeChat',

    products_title: 'Explore more Zaokit products',
    products_desc: 'Beyond OpenAI / Codex API, we also offer Claude API compliant access and enterprise AI compute management.',
    products_tokenhub_title: 'AI Token Hub',
    products_tokenhub_desc: 'The master switch & meter for enterprise AI compute — unified metering, allocation, governance.',
    products_tokenhub_link: 'Learn about Token Hub →',
    products_cc_title: 'Zaokit CC · Claude API',
    products_cc_desc: 'Enterprise-grade Claude compliant access, 100% Anthropic protocol compatible.',
    products_cc_link: 'Learn about Claude API →',

    footer_note: 'Providing secure, stable, invoice-ready access to the world\'s leading AI model APIs for enterprises.',
    footer_nav_title: 'Quick Links',
    footer_nav_1: 'Advantages',
    footer_nav_2: 'Pricing',
    footer_nav_3: 'Features',
    footer_nav_4: 'FAQ',
    footer_contact_title: 'Contact',
    footer_hours: 'Hours: 9:00 AM – 11:00 PM (UTC+8)',
    footer_products_title: 'Products',
    footer_product_1: 'AI Token Hub · Compute Management',
    footer_product_2: 'Zaokit CC · Claude API Service',
    footer_product_3: 'Zaokit · AI Creation',

    lang_toggle: '中文',
  },
};

/* ── i18n Engine ── */
let currentLang = 'zh';

function detectLanguage() {
  const saved = localStorage.getItem('zaokit-cx-lang');
  if (saved && I18N[saved]) return saved;
  const browserLang = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';
  return 'en';
}

function applyLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('zaokit-cx-lang', lang);

  const dict = I18N[lang];

  document.documentElement.lang = dict._lang;
  document.title = dict._title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict._description);

  // Apply text translations
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Apply HTML translations
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Update stat suffixes
  document.querySelectorAll('[data-i18n-suffix]').forEach((el) => {
    const key = el.getAttribute('data-i18n-suffix');
    if (dict[key] !== undefined) el.dataset.countSuffix = dict[key];
  });

  // Update language toggle button
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.textContent = dict.lang_toggle;
}

function toggleLanguage() {
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  applyLanguage(newLang);
  // Update counter displays with new suffixes
  document.querySelectorAll('[data-count-to]').forEach((el) => {
    const target = parseFloat(el.dataset.countTo);
    const suffix = el.dataset.countSuffix || '';
    const decimal = el.dataset.countDecimal ? parseInt(el.dataset.countDecimal, 10) : 0;
    el.textContent = (decimal > 0 ? target.toFixed(decimal) : Math.round(target).toLocaleString()) + suffix;
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectLanguage();
  applyLanguage(currentLang);
});
