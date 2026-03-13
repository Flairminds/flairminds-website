import PdfAnalyzer from './pdf-analyzer/PdfAnalyzer';
import AIContest from './ai-productivity-challenge/AIContest';
import WebScrapingBlog from './ai-powered-web-scraping-and-reporting/WebScrapingBlog';
import ShadowLightBlog from './shadowlight/ShadowLightBlog';
import AzureSandboxBlog from './azure-sandbox/AzureSandboxBlog';
import StrapiBlog from './strapi-blog/StrapiBlog';

export const blogs = [{
    id: 1,
    file: 'pdf-analyzer',
    title: 'Financial Analyzer: From PDFs to Interactive Insights',
    excerpt: 'Turn messy financial PDFs into analyzable, interactive insights. Upload a PDF, extract structured metrics via LLM Model, visualize trends, preview the exact PDF page for each data point, and ask contextual questions with a RAG-backed chat.',
    date: 'October 28, 2025',
    author: '',
    tags: ['Financial Analysis', 'AI Chatbot', 'PDF Processing'],
    component: PdfAnalyzer,
}, {
    id: 2,
    file: 'ai-productivity-challenge',
    title: 'AI Productivity Challenge: Empowering Innovation',
    excerpt: 'Celebrating our team\'s journey in harnessing AI for enhanced productivity. Discover innovative solutions from our winners - from AI Decision Memory Systems to intelligent workflow automation - and how our team is building an AI-integrated future.',
    date: 'January 19, 2026',
    author: '',
    tags: ['AI', 'Productivity', 'Innovation', 'Team Learning'],
    component: AIContest,
}, {
    id: 3,
    file: 'ai-powered-web-scraping-and-reporting',
    title: 'Building an AI-Powered Web Scraping & Report Generation System',
    excerpt: 'A comprehensive technical deep dive into combining async web crawling, document parsing, and LLM integration. Learn how to solve engineering challenges like async-sync context handling, model fallbacks, and smart content extraction in a Streamlit application.',
    date: 'February 2, 2026',
    author: '',
    tags: ['Web Scraping', 'AI', 'LLM', 'Python', 'Streamlit'],
    component: WebScrapingBlog,
}, {
    id: 4,
    file: 'shadowlight',
    title: 'ShadowLight: AI-Powered Accessibility in Record Time',
    excerpt: 'How our intern team leveraged AI to build a production-ready Chrome extension in just 2 weeks. Discover the technical architecture, AI-accelerated development workflow achieving 50% faster build time, and the four powerful features built by our talented intern team.',
    date: 'February 16, 2026',
    author: 'FlairMinds Intern Team',
    tags: ['AI', 'Chrome Extension', 'Accessibility', 'React', 'TypeScript', 'Intern Project'],
    component: ShadowLightBlog,
}, {
    id: 5,
    file: 'azure-sandbox',
    title: 'Inside Azure App Service Sandboxing: How Microsoft Secures Multi-Tenant Cloud Applications',
    excerpt: 'A deep-dive into the sandboxing mechanism that makes Azure App Service secure and reliable for multi-tenant workloads. Discover how Microsoft enforces isolation, governs shared resources, and eliminates the noisy-neighbor problem at cloud scale.',
    date: 'March 2, 2026',
    author: 'FlairMinds',
    tags: ['Azure', 'App Service', 'Cloud Security', 'Multi-Tenant', 'PaaS', 'DevOps'],
    component: AzureSandboxBlog,
}, {
    id: 6,
    file: 'strapi-blog',
    title: 'Decoupling Content from Code: Strapi-Powered CMS Architecture',
    excerpt: 'How we implemented Strapi as a headless CMS to decouple content management from frontend code — enabling faster content publishing, zero-deployment updates, and scalable content workflows for the entire team.',
    date: 'March 13, 2026',
    author: 'FlairMinds',
    tags: ['Strapi', 'CMS', 'Headless CMS', 'API', 'Content Architecture', 'GraphQL'],
    component: StrapiBlog,
}];
