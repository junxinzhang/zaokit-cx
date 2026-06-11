/* ── i18n: Internationalization Module ── */
const I18N = (() => {
  const translations = {
    'zh-CN': {
      'meta.title': 'Zaokit AI Services — 企业级 AI 基础设施与合规接入服务',
      'meta.description': 'Zaokit 为企业提供一站式 AI 基础设施服务：Token Hub 算力统管平台、Claude API 合规接入、OpenAI / Codex API 服务。支持私有化部署、可开具增值税发票，让企业安心用 AI。',
      'a11y.skip': '跳到正文',
      'nav.home': '首页',
      'nav.products': '产品矩阵',
      'nav.why': '为什么选我们',
      'nav.contact': '联系我们',
      'hero.eyebrow': '⚡ 企业级 AI 基础设施 · 一站式服务',
      'hero.title': '让企业用 AI，<br><span>像用水电一样简单。</span>',
      'hero.desc': 'Zaokit 提供从算力统管、API 合规接入到私有化部署的完整 AI 基础设施。不管你是要给全员接 AI、还是要在生产环境跑大模型，我们都有成熟方案——可开票、可审计、可落地。',
      'hero.cta_primary': '探索产品',
      'hero.cta_secondary': '联系咨询',
      'hero.meta1': '支持私有化部署',
      'hero.meta2': '可开票 · ToB 合规',
      'hero.diagram.team': '🏢 你的企业',
      'hero.diagram.hub': '🔌 Zaokit AI<br><small>统一接入 · 统一管控 · 统一计费</small>',
      'hero.diagram.tokenhub': 'Token Hub<br><small>算力统管</small>',
      'hero.diagram.claude': 'Claude API<br><small>合规接入</small>',
      'hero.diagram.openai': 'OpenAI API<br><small>Codex 加速</small>',
      'stats.products': '覆盖完整 AI 基础设施',
      'stats.uptime': '高可用保障',
      'stats.compliance': '合规可开票',
      'stats.delivery': '最快交付上线',
      'products.tag': '产品矩阵',
      'products.title': '三大产品，覆盖企业 AI 落地全场景',
      'products.desc': '无论你是要管好 AI 算力、接入 Claude、还是用上 OpenAI 全系列模型，Zaokit 都有对应产品。点击了解详情。',
      'products.tokenhub.badge': '旗舰产品',
      'products.tokenhub.tagline': '企业 AI 算力的总闸与电表',
      'products.tokenhub.desc': '把 AI 算力当水电一样统一计量、统一分配、统一管控。Token Hub 是你公司 AI 算力的第一块总闸——所有人经过它来用 AI，成本清清楚楚，权限安安全全。',
      'products.tokenhub.f1': '支持私有化部署，数据不出门',
      'products.tokenhub.f2': '号池优先 + API 兜底，双保障',
      'products.tokenhub.f3': '接入 AWS Bedrock / Google Vertex / Azure',
      'products.tokenhub.f4': 'FDE 陪跑，最快 1 天交付',
      'products.tokenhub.link': '了解 Token Hub →',
      'products.cc.tagline': '企业级 Claude 合规接入',
      'products.cc.desc': '高性能、高可用的 Claude API 代理服务。100% 兼容 Anthropic 官方接口协议，支持 Claude 4.7 Opus / Sonnet / Haiku 全系列模型。',
      'products.cc.f1': '支持 Claude 4.7 全系列模型',
      'products.cc.f2': '多账号池负载均衡，突破 Tier 限制',
      'products.cc.f3': '对公结算，可开增值税专票/普票',
      'products.cc.f4': '只需修改 Base URL 即可切换',
      'products.cc.link': '了解 Claude API →',
      'products.cx.tagline': '企业级 OpenAI 合规接入',
      'products.cx.desc': '正规商业渠道的 OpenAI / Codex API 接入与加速服务。支持 GPT-5.5 / GPT-4o / o3 / o1 全系列模型，解决企业合规与报销痛点。',
      'products.cx.f1': 'GPT-5.5 / GPT-4o / o3 / o1 全系列',
      'products.cx.f2': '优化专线直连，首字 280ms 响应',
      'products.cx.f3': '对公结算，可开增值税专票/普票',
      'products.cx.f4': '支持 LangChain / LlamaIndex 无缝集成',
      'products.cx.link': '了解 Codex API →',
      'why.tag': '为什么选我们',
      'why.title': '我们和卖 API Key 的不一样',
      'why.desc': 'Zaokit 不是中间商，是你企业 AI 基础设施的施工队。我们做的事，是让 AI 在你公司里真正「通电」。',
      'why.card1.title': '天生 ToB，合规到底',
      'why.card1.desc': '合同、发票、对公结算、审计留痕——从第一天起就是产品的一部分，不是事后补丁。支持开具 6% 增值税专用发票。',
      'why.card2.title': '私有化交付',
      'why.card2.desc': 'Token Hub 可以直接私有化部署在你的环境，数据不出门。连「从我这儿过」都不放心？直接给你私有化。',
      'why.card3.title': 'FDE 陪跑落地',
      'why.card3.desc': '我们不是卖完就走。FDE 带着方案下场，陪你把系统真正跑起来。需求摸底、部署上线、接入调试到持续运营。',
      'why.card4.title': '极速稳定的网络层',
      'why.card4.desc': '优化的全球加速专线直连模型厂商节点。多账号池负载均衡，有效避免并发限制导致的请求失败。',
      'why.card5.title': '数据安全与隐私',
      'why.card5.desc': '坚守不记录、不缓存任何 prompt 及生成内容的底线。所有数据直达模型厂商或在你内网处理。',
      'why.card6.title': '多云多模型支持',
      'why.card6.desc': 'OpenAI、Anthropic、Google Gemini 全覆盖。可通过 AWS Bedrock、Google Vertex AI、Azure 网关接入。',
      'why.banner.title': '我们自己先走过这条路',
      'why.banner.desc': '我们自己就是从「各买各的 Pro」一路走过来的。踩过的坑、算过的账、调过的参数都是一手的。<a href="https://tokenhub.zaokit.ai" target="_blank" rel="noopener" style="color:var(--primary-strong)">tokenhub.zaokit.ai</a>、<a href="https://cc.zaokit.com" target="_blank" rel="noopener" style="color:var(--primary-strong)">cc.zaokit.com</a>、<a href="https://cx.zaokit.com" target="_blank" rel="noopener" style="color:var(--primary-strong)">cx.zaokit.com</a> 这些 ToB 服务底座上已经在真实跑着的东西。',
      'why.banner.badge': '实战出品',
      'faq.title': '常见问题解答',
      'faq.q1.q': 'Token Hub 和 API 代理服务有什么区别？',
      'faq.q1.a': 'API 代理服务（CC / CX）解决的是「怎么接上」的问题——让你的系统能合规、稳定地调用 Claude 或 OpenAI 的模型。Token Hub 解决的是「怎么管好」的问题——把公司所有人的 AI 算力统一计量、统一分配、统一管控。前者是水管，后者是水表和总闸。',
      'faq.q2.q': '可以只用其中一个产品吗？',
      'faq.q2.a': '当然可以。三个产品完全独立，按需选用。只需要 Claude API 代理？用 CC。只要 OpenAI？用 CX。想要统管全公司 AI 算力？上 Token Hub。也可以组合使用，Token Hub 作为统一入口对接 CC 和 CX。',
      'faq.q3.q': '能开发票吗？支持什么类型？',
      'faq.q3.a': '所有产品都支持。我们从第一天起就是 ToB 的，支持开具 6% 增值税专用发票（一般纳税人可抵扣）和增值税普通发票。对公结算、正规合同，扫除企业财务合规风险。',
      'faq.q4.q': '私有化部署需要什么条件？',
      'faq.q4.a': 'Token Hub 支持完全私有化部署。你只需要提供基本的服务器环境，我们的 FDE 团队会全程陪跑完成部署。最快 1 天即可上线。不需要额外的技术团队，我们负责搭建、调试、上线全过程。',
      'faq.q5.q': '数据安全怎么保障？',
      'faq.q5.a': 'API 代理层不记录、不缓存任何 prompt 和对话内容。私有化部署的 Token Hub 所有数据在你自己的环境里跑，不经过任何第三方。调用日志和用量数据完全在你的管控下。',
      'faq.q6.q': '支持哪些模型？',
      'faq.q6.a': '覆盖主流大模型：OpenAI 全系列（GPT-5.5 / GPT-4o / o3 / o1）、Anthropic Claude 全系列（Claude 4.7 Opus / Sonnet / Haiku）、Google Gemini 等。通过云网关还可接入 AWS Bedrock、Google Vertex AI、Azure OpenAI 上的所有可用模型。',
      'cta.title': '准备好为你的企业引入 AI 基础设施了吗？',
      'cta.desc': '告别各买各的 Pro、散落的发票和说不清的成本。立即联系我们，获取适配你公司的 AI 落地方案。',
      'cta.email': '发送邮件咨询',
      'cta.wechat': '添加微信沟通',
      'modal.title': '📬 联系我们',
      'modal.desc': '选择您方便的联系方式，我们会在 24 小时内回复。',
      'modal.email_label': '邮箱',
      'modal.copy_send': '复制并发送',
      'modal.copied': '✓ 已复制',
      'modal.wechat_label': '微信号（请备注：Zaokit 咨询）',
      'modal.copy_wechat': '复制微信号',
      'modal.hours': '工作时间：9:00 ~ 23:00',
      'footer.note': '企业级 AI 基础设施一站式服务商。算力统管、API 合规接入、私有化部署，让企业安心用 AI。',
      'footer.products': '产品',
      'footer.tokenhub': 'AI Token Hub · 算力统管',
      'footer.contact_title': '联系我们',
      'footer.wechat': '微信：winnielove2020',
      'footer.hours': '工作时间：9:00~23:00',
    },

    en: {
      'meta.title': 'Zaokit AI Services — Enterprise AI Infrastructure & Compliant API Access',
      'meta.description': 'Zaokit provides one-stop enterprise AI infrastructure: Token Hub for compute management, Claude API access, OpenAI / Codex API services. Private deployment supported with full invoicing compliance.',
      'a11y.skip': 'Skip to content',
      'nav.home': 'Home',
      'nav.products': 'Products',
      'nav.why': 'Why Us',
      'nav.contact': 'Contact',
      'hero.eyebrow': '⚡ Enterprise AI Infrastructure · One-Stop Service',
      'hero.title': 'Enterprise AI,<br><span>as simple as utilities.</span>',
      'hero.desc': 'Zaokit delivers complete AI infrastructure — from centralized compute management and compliant API access to private deployment. Whether you\'re rolling out AI company-wide or running models in production, we have a proven, audit-ready solution.',
      'hero.cta_primary': 'Explore Products',
      'hero.cta_secondary': 'Contact Us',
      'hero.meta1': 'Private deployment ready',
      'hero.meta2': 'Invoicing · B2B compliant',
      'hero.diagram.team': '🏢 Your Enterprise',
      'hero.diagram.hub': '🔌 Zaokit AI<br><small>Unified Access · Control · Billing</small>',
      'hero.diagram.tokenhub': 'Token Hub<br><small>Compute Mgmt</small>',
      'hero.diagram.claude': 'Claude API<br><small>Compliant Access</small>',
      'hero.diagram.openai': 'OpenAI API<br><small>Codex Accelerated</small>',
      'stats.products': 'Full AI infrastructure coverage',
      'stats.uptime': 'High availability SLA',
      'stats.compliance': 'Fully compliant & invoiceable',
      'stats.delivery': 'Fastest deployment',
      'products.tag': 'Products',
      'products.title': 'Three products covering every enterprise AI scenario',
      'products.desc': 'Whether you need to manage AI compute, access Claude, or use the full range of OpenAI models — Zaokit has the right product. Click to learn more.',
      'products.tokenhub.badge': 'Flagship',
      'products.tokenhub.tagline': 'The master switch & meter for enterprise AI compute',
      'products.tokenhub.desc': 'Manage AI compute like a utility — centralized metering, allocation, and governance. Token Hub is your company\'s single control plane for all AI usage: costs crystal clear, permissions locked down.',
      'products.tokenhub.f1': 'Private deployment — data stays in your network',
      'products.tokenhub.f2': 'Account pool primary + API fallback, dual guarantee',
      'products.tokenhub.f3': 'Connects to AWS Bedrock / Google Vertex / Azure',
      'products.tokenhub.f4': 'FDE on-site support, deploy in as fast as 1 day',
      'products.tokenhub.link': 'Learn about Token Hub →',
      'products.cc.tagline': 'Enterprise-grade Claude compliant access',
      'products.cc.desc': 'High-performance, highly available Claude API proxy service. 100% compatible with Anthropic\'s official protocol, supporting Claude 4.7 Opus / Sonnet / Haiku full lineup.',
      'products.cc.f1': 'Full Claude 4.7 model lineup support',
      'products.cc.f2': 'Multi-account pool load balancing, bypass Tier limits',
      'products.cc.f3': 'B2B settlement with official VAT invoices',
      'products.cc.f4': 'Just change Base URL to switch over',
      'products.cc.link': 'Learn about Claude API →',
      'products.cx.tagline': 'Enterprise-grade OpenAI compliant access',
      'products.cx.desc': 'Legitimate commercial channel for OpenAI / Codex API access and acceleration. Supports GPT-5.5 / GPT-4o / o3 / o1 full lineup, solving enterprise compliance and reimbursement pain points.',
      'products.cx.f1': 'GPT-5.5 / GPT-4o / o3 / o1 full lineup',
      'products.cx.f2': 'Optimized direct connection, 280ms first-token response',
      'products.cx.f3': 'B2B settlement with official VAT invoices',
      'products.cx.f4': 'Seamless LangChain / LlamaIndex integration',
      'products.cx.link': 'Learn about Codex API →',
      'why.tag': 'Why Us',
      'why.title': 'We\'re not just another API key reseller',
      'why.desc': 'Zaokit isn\'t a middleman — we\'re your enterprise AI infrastructure builder. We don\'t just sell access; we make AI truly "run" in your organization.',
      'why.card1.title': 'Built for B2B, compliant by design',
      'why.card1.desc': 'Contracts, invoices, B2B settlement, audit trails — these have been part of the product from day one, not afterthoughts. We issue 6% VAT special invoices.',
      'why.card2.title': 'Private deployment',
      'why.card2.desc': 'Token Hub can be deployed entirely in your own environment — your data never leaves. Don\'t trust even routing through us? We\'ll go fully private.',
      'why.card3.title': 'FDE on-site delivery',
      'why.card3.desc': 'We don\'t sell and walk away. Our FDE team comes with a plan and stays until your system is actually running — from needs assessment to continuous operations.',
      'why.card4.title': 'Ultra-fast stable network layer',
      'why.card4.desc': 'Optimized global acceleration directly to model provider nodes. Multi-account pool load balancing effectively prevents request failures from rate limits.',
      'why.card5.title': 'Data security & privacy',
      'why.card5.desc': 'We never log or cache any prompts or generated content. All data goes directly to model providers or stays within your private network.',
      'why.card6.title': 'Multi-cloud, multi-model support',
      'why.card6.desc': 'Full coverage: OpenAI, Anthropic, Google Gemini. Connect via AWS Bedrock, Google Vertex AI, or Azure gateway.',
      'why.banner.title': 'We\'ve walked this road ourselves first',
      'why.banner.desc': 'We went through the "everyone buys their own Pro" phase ourselves. The pitfalls, the cost analysis, the config tuning — all first-hand experience. <a href="https://tokenhub.zaokit.ai" target="_blank" rel="noopener" style="color:var(--primary-strong)">tokenhub.zaokit.ai</a>, <a href="https://cc.zaokit.com" target="_blank" rel="noopener" style="color:var(--primary-strong)">cc.zaokit.com</a>, <a href="https://cx.zaokit.com" target="_blank" rel="noopener" style="color:var(--primary-strong)">cx.zaokit.com</a> — these are live B2B services running real workloads right now.',
      'why.banner.badge': 'Battle-tested',
      'faq.title': 'Frequently Asked Questions',
      'faq.q1.q': 'What\'s the difference between Token Hub and the API proxy services?',
      'faq.q1.a': 'API proxy services (CC / CX) solve the "how to connect" problem — enabling your systems to call Claude or OpenAI models compliantly and reliably. Token Hub solves the "how to manage" problem — centralizing all AI compute metering, allocation, and governance for your entire company. The former is the pipe; the latter is the meter and master switch.',
      'faq.q2.q': 'Can I use just one product?',
      'faq.q2.a': 'Absolutely. All three products are fully independent — use what you need. Just need Claude API proxy? Use CC. Just OpenAI? Use CX. Want to manage company-wide AI compute? Deploy Token Hub. You can also combine them, with Token Hub as the unified gateway connecting CC and CX.',
      'faq.q3.q': 'Do you issue invoices? What types?',
      'faq.q3.a': 'All products support invoicing. We\'ve been B2B from day one. We issue 6% VAT special invoices (deductible for general taxpayers) and regular VAT invoices. B2B settlement with proper contracts, eliminating financial compliance risks.',
      'faq.q4.q': 'What are the requirements for private deployment?',
      'faq.q4.a': 'Token Hub supports full private deployment. You just need to provide a basic server environment, and our FDE team handles the entire process. Deployment can be completed in as fast as 1 day. No additional technical team needed — we handle setup, testing, and go-live.',
      'faq.q5.q': 'How do you ensure data security?',
      'faq.q5.a': 'The API proxy layer never logs or caches any prompts or conversation content. With private deployment, all Token Hub data runs in your own environment without passing through any third party. Call logs and usage data are entirely under your control.',
      'faq.q6.q': 'Which models are supported?',
      'faq.q6.a': 'All major LLMs: OpenAI full lineup (GPT-5.5 / GPT-4o / o3 / o1), Anthropic Claude full lineup (Claude 4.7 Opus / Sonnet / Haiku), Google Gemini, and more. Through cloud gateways, you can also access all available models on AWS Bedrock, Google Vertex AI, and Azure OpenAI.',
      'cta.title': 'Ready to bring AI infrastructure to your enterprise?',
      'cta.desc': 'Say goodbye to scattered Pro subscriptions, loose invoices, and opaque costs. Contact us now for an AI deployment plan tailored to your company.',
      'cta.email': 'Email Us',
      'cta.wechat': 'WeChat',
      'modal.title': '📬 Contact Us',
      'modal.desc': 'Choose your preferred contact method. We\'ll respond within 24 hours.',
      'modal.email_label': 'Email',
      'modal.copy_send': 'Copy & Send',
      'modal.copied': '✓ Copied',
      'modal.wechat_label': 'WeChat ID (Note: Zaokit inquiry)',
      'modal.copy_wechat': 'Copy WeChat ID',
      'modal.hours': 'Business hours: 9:00 AM – 11:00 PM (UTC+8)',
      'footer.note': 'One-stop enterprise AI infrastructure provider. Centralized compute management, compliant API access, and private deployment — so your business can use AI with confidence.',
      'footer.products': 'Products',
      'footer.tokenhub': 'AI Token Hub · Compute Management',
      'footer.contact_title': 'Contact',
      'footer.wechat': 'WeChat: winnielove2020',
      'footer.hours': 'Hours: 9:00 AM – 11:00 PM (UTC+8)',
    },
  };

  const STORAGE_KEY = 'zaokit-lang';

  /** Detect the best language: stored pref > browser lang > 'zh-CN' */
  function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;

    const browserLang = navigator.language || navigator.userLanguage || '';
    if (browserLang.startsWith('zh')) return 'zh-CN';
    return 'en';
  }

  let currentLang = detectLang();

  /** Apply translations to all [data-i18n] elements */
  function applyTranslations(lang) {
    currentLang = lang;
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang === 'zh-CN' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (!value) return;

      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value);
        return;
      }

      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    // Update counter suffixes for language-specific ones
    const suffixKey = lang === 'zh-CN' ? 'zh' : 'en';
    document.querySelectorAll('[data-count-suffix-' + suffixKey + ']').forEach((el) => {
      const suffix = el.getAttribute('data-count-suffix-' + suffixKey);
      if (suffix) el.setAttribute('data-count-suffix', suffix);
    });

    // Update lang toggle button labels
    document.querySelectorAll('.lang-label').forEach((label) => {
      const labelLang = label.getAttribute('data-lang');
      label.style.display = labelLang === lang ? '' : 'none';
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /** Toggle between zh-CN and en */
  function toggleLang() {
    const next = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    applyTranslations(next);

    // Update counter displays with new suffixes
    document.querySelectorAll('[data-count-to]').forEach((el) => {
      const target = parseFloat(el.dataset.countTo);
      const suffix = el.dataset.countSuffix || '';
      const decimal = el.dataset.countDecimal ? parseInt(el.dataset.countDecimal, 10) : 0;
      el.textContent = (decimal > 0 ? target.toFixed(decimal) : Math.round(target).toLocaleString()) + suffix;
    });
  }

  function getLang() {
    return currentLang;
  }

  return { detectLang, applyTranslations, toggleLang, getLang };
})();

// Apply translations immediately on script load (before main.js)
I18N.applyTranslations(I18N.getLang());
