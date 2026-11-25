/**
 * Portfolio Application Scripts
 * Kenith Mangyao Labonite | C# ASP.NET Core Web API Developer
 */

'use strict';

/* ==========================================================================
   1. Data Stores
   ========================================================================== */

const skillsData = [
  {
    id: 'csharp-dotnet',
    name: 'C# & .NET 8 Ecosystem',
    category: 'backend',
    badge: 'Core Specialization',
    level: 'Advanced',
    proficiency: 95,
    desc: 'Object-oriented backend architecture, clean service layers, LINQ querying, dependency injection, and enterprise APIs.',
    tags: ['C#', '.NET 8', 'ASP.NET Core', 'LINQ'],
    relatedProjects: ['Smart-Exam', 'Employee Directory & Auth System'],
    highlights: [
      'Builds structured RESTful APIs and backend services using C# and .NET 8.',
      'Implements clean architecture patterns with dependency injection and strong separation of concerns.'
    ]
  },
  {
    id: 'aspnet-webapi-razor',
    name: 'ASP.NET Core Web API & Razor Pages',
    category: 'backend',
    badge: 'Web API Specialist',
    level: 'Advanced',
    proficiency: 92,
    desc: 'RESTful API design, controller architecture, middleware, secure authentication, and unified C# backend workflows.',
    tags: ['REST API', 'ASP.NET Core', 'Swagger', 'JWT / Auth'],
    relatedProjects: ['Employee Directory & Auth System', 'Smart-Exam'],
    highlights: [
      'Designs clean, predictable RESTful API contracts with Swagger / OpenAPI documentation.',
      'Implemented secure authentication, authorization, and transactional update flows backed by relational storage.'
    ]
  },
  {
    id: 'mysql-architecture',
    name: 'MySQL Database Architecture',
    category: 'backend',
    badge: 'Core Strength',
    level: 'Advanced',
    proficiency: 94,
    desc: 'Normalized schema design, relational constraints, query optimization, and Navicat administration.',
    tags: ['MySQL', 'ERD Modeling', 'Data Integrity', 'Navicat'],
    relatedProjects: ['Smart-Exam', 'Employee Directory & Auth System', 'Student Council Election System'],
    highlights: [
      'Analytical database modeling focused on eliminating duplicate records and enforcing relational integrity.',
      'Designs transactional tables for exams, employee accounts, ballots, and operational records.'
    ]
  },
  {
    id: 'modern-web-angular',
    name: 'Modern Web & Angular',
    category: 'frontend',
    badge: 'Frontend',
    level: 'Intermediate',
    proficiency: 82,
    desc: 'Responsive component-driven interfaces, semantic HTML5, modern CSS, and JavaScript.',
    tags: ['Angular', 'JavaScript', 'HTML5', 'CSS3 / Tailwind'],
    relatedProjects: ['AI Assistant Full-Stack Platform', 'Student Council Election System'],
    highlights: [
      'Separates Angular frontend client architecture cleanly from backend REST services.',
      'Builds responsive, mobile-friendly interfaces for dashboards, chat, and voting portals.'
    ]
  },
  {
    id: 'ai-ocr-pipeline',
    name: 'AI & OCR Pipeline Integration',
    category: 'ai',
    badge: 'Applied AI',
    level: 'Intermediate',
    proficiency: 85,
    desc: 'Integrating Gemini AI API for content generation and Tesseract OCR for automated document grading.',
    tags: ['Gemini AI API', 'Tesseract OCR', 'Prompt Design'],
    relatedProjects: ['Smart-Exam', 'AI Assistant Full-Stack Platform'],
    highlights: [
      'Generates structured examination questionnaires with Gemini AI and pairs with Tesseract OCR for grading.',
      'Combines AI automation with human-in-the-loop review and structured database storage.'
    ]
  },
  {
    id: 'creative-photo-ops',
    name: 'Systems, DevOps & Digital Assets',
    category: 'creative',
    badge: 'Infra & Assets',
    level: 'Advanced',
    proficiency: 88,
    desc: 'Windows 11 administration, network troubleshooting, OBS streaming, Google Apps Script macros, and brand design.',
    tags: ['DevOps / Infra', 'Apps Script', 'OBS Studio', 'Brand Design'],
    relatedProjects: ['NC Mendoza Beauty Lounge', 'Local Business Solutions'],
    highlights: [
      'Configures local router networks, system administration, and automated Google Apps Script workflows.',
      'Creates high-impact brand visual assets, tarpaulins, and social media automation.'
    ]
  }
];

const projectsData = [
  {
    id: 'smart-exam',
    title: 'Smart-Exam',
    category: 'Flagship Capstone • C# Web API & AI System',
    summary: 'AI-powered examination generation and OCR answer-checking backend and management system built with ASP.NET Core and MySQL.',
    architecture: 'Razor Pages / Web UI ➔ .NET 8 ASP.NET Core API ➔ Gemini AI API (Question Gen) + Tesseract OCR (Sheet Grading) ➔ MySQL Relational DB',
    highlights: [
      'Automates exam questionnaire creation using Gemini AI structured prompts.',
      'Processes scanned student answer sheets via Tesseract OCR for rapid, accurate scoring.',
      'Normalized MySQL database tracking courses, exam banks, student scores, and analytics.'
    ],
    tags: ['.NET 8', 'C#', 'ASP.NET Core', 'MySQL', 'Gemini AI API', 'Tesseract OCR'],
    accent: 'from-indigo-500 to-cyan-500',
    githubUrl: '',
    liveUrl: 'https://kaleidoscopically-viewier-marcus.ngrok-free.dev'
  },
  {
    id: 'employee-dir',
    title: 'Employee Directory & Auth System',
    category: 'Enterprise Web App • ASP.NET Web API & Razor',
    summary: 'Full-stack C# employee management and authentication platform with secure self-service email updates.',
    architecture: 'Razor Pages Frontend (C#) ➔ ASP.NET Web API ➔ Authentication & Validation Service ➔ MySQL Database',
    highlights: [
      'Built end-to-end in C# across both Razor Pages UI and ASP.NET Web API services.',
      'Implemented secure credential verification and transactional email update workflows.',
      'Designed clean relational tables enforcing employee record integrity.'
    ],
    tags: ['C#', 'ASP.NET Web API', 'Razor Pages', 'MySQL'],
    accent: 'from-cyan-500 to-emerald-500',
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant Full-Stack Platform',
    category: 'Decoupled Architecture • AI & API',
    summary: 'Modular conversational assistant separating a scalable backend API from an interactive Angular frontend.',
    architecture: 'Angular SPA (aiAssistantAngular) ➔ REST JSON API ➔ Backend Service (aiAssistant) ➔ LLM Integration',
    highlights: [
      'Clean repository separation between backend service logic and Angular client UI.',
      'Real-time prompt handling, asynchronous state management, and responsive chat layout.',
      'Structured for iterative Agile feature expansion.'
    ],
    tags: ['Angular', 'REST API', 'Node.js / C#', 'TypeScript'],
    accent: 'from-violet-500 to-indigo-500',
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: 'election-system',
    title: 'Student Council Election System',
    category: 'Governance Software • Agile MVP',
    summary: 'Streamlined, tamper-resistant campus voting system scoped around speed, reliability, and clear voter verification.',
    architecture: 'Web Voting Portal ➔ Voter Eligibility & Ballot API ➔ Transactional MySQL Vote Ledger',
    highlights: [
      'Applied Agile MVP discipline—eliminating unnecessary complexity to guarantee election-day uptime.',
      'Enforced one-voter-one-ballot database constraints and real-time tally aggregation.',
      'Intuitive candidate presentation and mobile-friendly ballot interface.'
    ],
    tags: ['C#', 'MySQL', 'Agile MVP', 'Database Integrity'],
    accent: 'from-amber-500 to-rose-500',
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: 'nc-mendoza',
    title: 'NC Mendoza Beauty Lounge',
    category: 'Brand Identity & Digital Automation',
    summary: 'Complete visual branding, print tarpaulin layouts, and Meta Business Suite Messenger automation.',
    architecture: 'Brand Style System ➔ Print & Social Assets + Meta Business Suite Auto-Reply Workflows',
    highlights: [
      'Designed cohesive salon logo, promotional tarpaulins, and Facebook marketing visuals.',
      'Configured automated Messenger inquiry flows and booking responses in Meta Business Suite.',
      'Paired with Google Sheets / Apps Script service and payment tracking workflows.'
    ],
    tags: ['Brand Design', 'Print Layout', 'Meta Business Suite', 'Apps Script'],
    accent: 'from-rose-600 to-pink-500',
    githubUrl: '',
    liveUrl: ''
  }
];

/* ==========================================================================
   2. Application State
   ========================================================================== */

let activeSkillFilter = 'all';
let selectedSkillId = null;

/* ==========================================================================
   3. Helper Functions
   ========================================================================== */

function getCategoryLabel(filter) {
  const labels = {
    all: 'All Capabilities',
    backend: 'Backend & DB',
    frontend: 'Frontend',
    ai: 'AI & OCR',
    creative: 'Creative & Infra'
  };
  return labels[filter] || 'All Capabilities';
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   4. Skills Section Rendering & Inspection
   ========================================================================== */

function ensureSkillInspector() {
  const grid = document.getElementById('skills-grid');
  if (!grid || !grid.parentElement) return null;

  let inspector = document.getElementById('skill-inspector');
  if (!inspector) {
    inspector = document.createElement('div');
    inspector.id = 'skill-inspector';
    inspector.className = 'mt-6 glass bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-5 sm:p-6 transition-all animate-fadeIn';
    grid.insertAdjacentElement('afterend', inspector);
  }
  return inspector;
}

function renderSkillInspector(skill) {
  const inspector = ensureSkillInspector();
  if (!inspector || !skill) return;

  inspector.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-1">
          <span class="font-mono text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
            Selected Capability
          </span>
          <span class="font-mono text-xs text-cyan-400">${escapeHtml(skill.level)} • ${skill.proficiency}%</span>
        </div>
        <h3 class="text-xl font-bold text-white">${escapeHtml(skill.name)}</h3>
        <p class="text-sm text-slate-300 mt-1">${escapeHtml(skill.desc)}</p>
      </div>
      <div class="flex flex-wrap gap-1.5 shrink-0">
        ${skill.relatedProjects.map((proj) => `
          <span class="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 text-emerald-300 border border-emerald-500/30">
            Used in: ${escapeHtml(proj)}
          </span>
        `).join('')}
      </div>
    </div>
    <ul class="mt-4 grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
      ${skill.highlights.map((item) => `
        <li class="flex items-start gap-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
          <span class="text-indigo-400 font-bold mt-0.5">›</span>
          <span>${escapeHtml(item)}</span>
        </li>
      `).join('')}
    </ul>
  `;
}

function renderSkills(filter = activeSkillFilter) {
  activeSkillFilter = filter;
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === filter);

  if (!selectedSkillId || !filtered.some((s) => s.id === selectedSkillId)) {
    selectedSkillId = filtered[0]?.id || null;
  }

  grid.innerHTML = filtered.map((skill) => {
    const isSelected = skill.id === selectedSkillId;
    return `
      <div
        data-skill-id="${escapeHtml(skill.id)}"
        role="button"
        tabindex="0"
        aria-pressed="${isSelected}"
        class="skill-card glass bg-slate-900/80 rounded-2xl p-6 card-hover cursor-pointer flex flex-col justify-between transition-all ${isSelected
        ? 'border-2 border-indigo-400 ring-2 ring-indigo-500/25 bg-slate-900'
        : 'border border-slate-800 hover:border-indigo-500/40'
      }"
      >
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
              ${escapeHtml(skill.badge)}
            </span>
            <span class="font-mono text-[11px] text-cyan-400">${escapeHtml(skill.level)} (${skill.proficiency}%)</span>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">${escapeHtml(skill.name)}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-3">${escapeHtml(skill.desc)}</p>
          <div class="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-4" aria-hidden="true">
            <div class="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style="width: ${skill.proficiency}%"></div>
          </div>
        </div>
        <div>
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
            ${skill.tags.map((tag) => `
              <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                ${escapeHtml(tag)}
              </span>
            `).join('')}
          </div>
          <div class="mt-3 text-[11px] font-mono ${isSelected ? 'text-indigo-300' : 'text-slate-500'}">
            ${isSelected ? '● Inspecting details below' : 'Click to inspect highlights &amp; projects →'}
          </div>
        </div>
      </div>
    `;
  }).join('');

  const currentSkill = filtered.find((s) => s.id === selectedSkillId) || filtered[0];
  if (currentSkill) {
    renderSkillInspector(currentSkill);
  }

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function selectSkill(id) {
  selectedSkillId = id;
  renderSkills(activeSkillFilter);
}

/* ==========================================================================
   5. Projects Section Rendering
   ========================================================================== */

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projectsData.map((project) => {
    const hasGithub = Boolean(project.githubUrl);
    const hasLive = Boolean(project.liveUrl);

    return `
      <div
        data-project-id="${escapeHtml(project.id)}"
        role="button"
        tabindex="0"
        aria-label="View details for ${escapeHtml(project.title)}"
        class="project-card glass bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-2xl overflow-hidden card-hover cursor-pointer flex flex-col justify-between group"
      >
        <div>
          <div class="h-1.5 w-full bg-gradient-to-r ${project.accent}"></div>
          <div class="p-6">
            <div class="flex items-center justify-between gap-2 mb-1.5">
              <span class="font-mono text-[11px] text-cyan-400 uppercase tracking-wider">
                ${escapeHtml(project.category)}
              </span>
              <div class="flex items-center gap-1.5">
                ${hasGithub ? `
                  <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer"
                     title="View GitHub Repository" aria-label="GitHub Repository"
                     class="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <i data-lucide="github" class="w-4 h-4"></i>
                  </a>
                ` : ''}
                ${hasLive ? `
                  <a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer"
                     title="View Live System / Demo" aria-label="Live Demo"
                     class="p-1 rounded-md text-indigo-400 hover:text-indigo-300 hover:bg-slate-800 transition-colors">
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                  </a>
                ` : ''}
              </div>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5 flex items-center justify-between">
              ${escapeHtml(project.title)}
              <i data-lucide="arrow-up-right" class="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors"></i>
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">${escapeHtml(project.summary)}</p>
          </div>
        </div>
        <div class="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
          ${project.tags.map((tag) => `
            <span class="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-slate-950/90 text-slate-300 border border-slate-800">
              ${escapeHtml(tag)}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   6. Modals (Project Detail & Resume)
   ========================================================================== */

function openProjectModal(id) {
  const project = projectsData.find((item) => item.id === id);
  if (!project) return;

  const categoryEl = document.getElementById('modal-category');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc');
  const archEl = document.getElementById('modal-arch');
  const highlightsEl = document.getElementById('modal-highlights');
  const tagsEl = document.getElementById('modal-tags');
  const linksEl = document.getElementById('modal-links');
  const modal = document.getElementById('project-modal');

  if (categoryEl) categoryEl.textContent = project.category;
  if (titleEl) titleEl.textContent = project.title;
  if (descEl) descEl.textContent = project.summary;
  if (archEl) archEl.textContent = project.architecture;

  if (highlightsEl) {
    highlightsEl.innerHTML = project.highlights
      .map((h) => `<li>${escapeHtml(h)}</li>`)
      .join('');
  }

  if (tagsEl) {
    tagsEl.innerHTML = project.tags
      .map((t) => `
        <span class="font-mono text-xs px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
          ${escapeHtml(t)}
        </span>
      `).join('');
  }

  if (linksEl) {
    const buttons = [];
    if (project.githubUrl) {
      buttons.push(`
        <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all hover:-translate-y-0.5">
          <i data-lucide="github" class="w-4 h-4 text-slate-300"></i>
          GitHub Repository
        </a>
      `);
    }
    if (project.liveUrl) {
      buttons.push(`
        <a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5">
          <i data-lucide="external-link" class="w-4 h-4"></i>
          Live Demo / API
        </a>
      `);
    }

    if (buttons.length > 0) {
      linksEl.innerHTML = buttons.join('');
      linksEl.classList.remove('hidden');
    } else {
      linksEl.innerHTML = `
        <span class="text-xs font-mono text-slate-500 flex items-center gap-1.5">
          <i data-lucide="lock" class="w-3.5 h-3.5 text-slate-600"></i> Repository link available upon request
        </span>
      `;
      linksEl.classList.remove('hidden');
    }
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   7. Clipboard & Toast Notifications
   ========================================================================== */

let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  if (toastTimer) clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2600);
}

function copyText(text, message) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(text)
      .then(() => showToast(message || 'Copied to clipboard!'))
      .catch(() => fallbackCopyText(text, message));
  } else {
    fallbackCopyText(text, message);
  }
}

function fallbackCopyText(text, message) {
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    if (successful) {
      showToast(message || 'Copied to clipboard!');
    }
  } catch (err) {
    console.error('Fallback copy failed:', err);
  }
}

/* ==========================================================================
   8. Application Initialization & Event Binding
   ========================================================================== */

function initPortfolioApp() {
  // Render dynamic sections
  renderSkills('all');
  renderProjects();

  // Initialize Lucide icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Skills grid interaction
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skillsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-skill-id]');
      if (card) selectSkill(card.dataset.skillId);
    });

    skillsGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('[data-skill-id]');
        if (card) {
          e.preventDefault();
          selectSkill(card.dataset.skillId);
        }
      }
    });
  }

  // Projects grid interaction
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const card = e.target.closest('[data-project-id]');
      if (card) openProjectModal(card.dataset.projectId);
    });

    projectsGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('[data-project-id]');
        if (card) {
          e.preventDefault();
          openProjectModal(card.dataset.projectId);
        }
      }
    });
  }

  // Skill filter buttons
  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterValue = btn.dataset.filter || 'all';

      filterButtons.forEach((b) => {
        b.classList.remove('bg-indigo-600', 'text-white', 'active');
        b.classList.add('bg-slate-800/80', 'text-slate-300');
      });

      btn.classList.remove('bg-slate-800/80', 'text-slate-300');
      btn.classList.add('bg-indigo-600', 'text-white', 'active');

      selectedSkillId = null;
      renderSkills(filterValue);
      showToast(`Filtered by: ${getCategoryLabel(filterValue)}`);
    });
  });

  // Mobile navigation drawer toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a nav link is clicked
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.reset();
      showToast('Message sent! Kenith will get back to you soon.');
    });
  }

  // Modal backdrop click dismissal
  const projectModal = document.getElementById('project-modal');
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target.id === 'project-modal') closeProjectModal();
    });
  }

  const resumeModal = document.getElementById('resume-modal');
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target.id === 'resume-modal') closeResumeModal();
    });
  }

  // Global Escape key listener for closing open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeModal();
    }
  });
}

/* ==========================================================================
   9. Expose Global Handlers & Auto-Start
   ========================================================================== */

// Expose handlers on window so inline attributes or external callers can use them
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openResumeModal = openResumeModal;
window.closeResumeModal = closeResumeModal;
window.copyText = copyText;
window.showToast = showToast;
window.renderSkills = renderSkills;
window.selectSkill = selectSkill;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioApp);
} else {
  initPortfolioApp();
}
