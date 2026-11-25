// Skills Dataset
const skillsData = [
  {
    id: 'csharp-dotnet',
    name: 'C# & .NET 8 Ecosystem',
    category: 'backend',
    badge: 'Primary Stack',
    level: 'Advanced',
    proficiency: 92,
    desc: 'Object-oriented backend architecture, clean service layers, LINQ querying, and enterprise APIs.',
    tags: ['C#', '.NET 8', 'ASP.NET Core', 'LINQ'],
    relatedProjects: ['Smart-Exam', 'Employee Directory & Auth System'],
    highlights: [
      'Builds structured RESTful APIs and Razor Pages applications using C# across backend and UI.',
      'Follows Agile MVP workflows to ship working endpoints before over-optimizing.',
    ],
  },
  {
    id: 'aspnet-webapi-razor',
    name: 'ASP.NET Web API & Razor Pages',
    category: 'backend',
    badge: 'Full-Stack C#',
    level: 'Advanced',
    proficiency: 88,
    desc: 'RESTful API design, server-rendered Razor views, and unified C# frontend/backend workflows.',
    tags: ['REST API', 'Razor Pages', 'Swagger', 'Auth'],
    relatedProjects: ['Employee Directory & Auth System', 'Smart-Exam'],
    highlights: [
      'Implemented user authentication and secure account/email update flows backed by relational storage.',
      'Designs clean, predictable API contracts for web clients and third-party integrations.',
    ],
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
      'Designs transactional tables for exams, employee accounts, ballots, and operational records.',
    ],
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
      'Builds responsive, mobile-friendly interfaces for dashboards, chat, and voting portals.',
    ],
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
      'Combines AI automation with human-in-the-loop review and structured database storage.',
    ],
  },
  {
    id: 'creative-photo-ops',
    name: 'Graphic Design, Photography & Ops',
    category: 'creative',
    badge: 'Creative & Infra',
    level: 'Advanced',
    proficiency: 90,
    desc: 'Brand logos, event tarpaulins, DSLR photography, OBS live streaming, and network troubleshooting.',
    tags: ['Brand Identity', 'DSLR Photo', 'OBS Studio', 'Google Apps Script'],
    relatedProjects: ['NC Mendoza Beauty Lounge', 'Golden Success College Events'],
    highlights: [
      'Creates print-ready tarpaulins, logos, and social assets alongside Meta Business Suite auto-replies.',
      'Handles DSLR event photography, OBS streaming, Google Sheets/Apps Script macros, and local network/printer setup.',
    ],
  },
];

// Projects Dataset
const projectsData = [
  {
    id: 'smart-exam',
    title: 'Smart-Exam',
    category: 'Flagship Capstone • AI & EdTech',
    summary:
      'AI-powered examination generation and OCR answer-checking management system built for Golden Success College.',
    architecture:
      'Razor Pages / Web UI ➔ .NET 8 ASP.NET Core API ➔ Gemini AI API (Question Gen) + Tesseract OCR (Sheet Grading) ➔ MySQL Relational DB',
    highlights: [
      'Automates exam questionnaire creation using Gemini AI structured prompts.',
      'Processes scanned student answer sheets via Tesseract OCR for rapid, accurate scoring.',
      'Normalized MySQL database tracking courses, exam banks, student scores, and analytics.',
    ],
    tags: ['.NET 8', 'C#', 'MySQL', 'Gemini AI API', 'Tesseract OCR'],
    accent: 'from-indigo-500 to-cyan-500',
  },
  {
    id: 'employee-dir',
    title: 'Employee Directory & Auth System',
    category: 'Enterprise Web App • Full-Stack C#',
    summary:
      'Full-stack C# employee management and authentication platform with secure self-service email updates.',
    architecture:
      'Razor Pages Frontend (C#) ➔ ASP.NET Web API ➔ Authentication & Validation Service ➔ MySQL Database',
    highlights: [
      'Built end-to-end in C# across both Razor Pages UI and ASP.NET Web API services.',
      'Implemented secure credential verification and transactional email update workflows.',
      'Designed clean relational tables enforcing employee record integrity.',
    ],
    tags: ['C#', 'ASP.NET Web API', 'Razor Pages', 'MySQL'],
    accent: 'from-cyan-500 to-emerald-500',
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant Full-Stack Platform',
    category: 'Decoupled Architecture • AI',
    summary:
      'Modular conversational assistant separating a scalable backend API from an interactive Angular frontend.',
    architecture:
      'Angular SPA (aiAssistantAngular) ➔ REST JSON API ➔ Backend Service (aiAssistant) ➔ LLM Integration',
    highlights: [
      'Clean repository separation between backend service logic and Angular client UI.',
      'Real-time prompt handling, asynchronous state management, and responsive chat layout.',
      'Structured for iterative Agile feature expansion.',
    ],
    tags: ['Angular', 'REST API', 'Node.js / C#', 'TypeScript'],
    accent: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'election-system',
    title: 'Student Council Election System',
    category: 'Governance Software • Agile MVP',
    summary:
      'Streamlined, tamper-resistant campus voting system scoped around speed, reliability, and clear voter verification.',
    architecture:
      'Web Voting Portal ➔ Voter Eligibility & Ballot API ➔ Transactional MySQL Vote Ledger',
    highlights: [
      'Applied Agile MVP discipline—eliminating unnecessary complexity to guarantee election-day uptime.',
      'Enforced one-voter-one-ballot database constraints and real-time tally aggregation.',
      'Intuitive candidate presentation and mobile-friendly ballot interface.',
    ],
    tags: ['C#', 'MySQL', 'Agile MVP', 'Database Integrity'],
    accent: 'from-amber-500 to-rose-500',
  },
  {
    id: 'nc-mendoza',
    title: 'NC Mendoza Beauty Lounge',
    category: 'Brand Identity & Digital Automation',
    summary:
      'Complete visual branding, print tarpaulin layouts, and Meta Business Suite Messenger automation.',
    architecture:
      'Brand Style System ➔ Print & Social Assets + Meta Business Suite Auto-Reply Workflows',
    highlights: [
      'Designed cohesive salon logo, promotional tarpaulins, and Facebook marketing visuals.',
      'Configured automated Messenger inquiry flows and booking responses in Meta Business Suite.',
      'Paired with Google Sheets / Apps Script service and payment tracking workflows.',
    ],
    tags: ['Brand Design', 'Print Layout', 'Meta Business Suite', 'Apps Script'],
    accent: 'from-rose-600 to-pink-500',
  },
];

// State
let activeSkillFilter = 'all';
let selectedSkillId = null;

function getCategoryLabel(filter) {
  const labels = {
    all: 'All Capabilities',
    backend: 'Backend & DB',
    frontend: 'Frontend',
    ai: 'AI & OCR',
    creative: 'Creative & Infra',
  };
  return labels[filter] || 'All Capabilities';
}

// Create or Retrieve Skill Details Inspector
function ensureSkillInspector() {
  const grid = document.getElementById('skills-grid');
  if (!grid || !grid.parentElement) return null;

  let inspector = document.getElementById('skill-inspector');
  if (!inspector) {
    inspector = document.createElement('div');
    inspector.id = 'skill-inspector';
    inspector.className =
      'mt-6 glass bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-5 sm:p-6 transition-all';
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
          <span class="font-mono text-xs text-cyan-400">${skill.level} • ${skill.proficiency}%</span>
        </div>
        <h3 class="text-xl font-bold text-white">${skill.name}</h3>
        <p class="text-sm text-slate-300 mt-1">${skill.desc}</p>
      </div>
      <div class="flex flex-wrap gap-1.5 shrink-0">
        ${skill.relatedProjects
      .map(
        (proj) =>
          `<span class="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 text-emerald-300 border border-emerald-500/30">Used in: ${proj}</span>`
      )
      .join('')}
      </div>
    </div>
    <ul class="mt-4 grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
      ${skill.highlights
      .map(
        (item) => `
          <li class="flex items-start gap-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
            <span class="text-indigo-400 font-bold mt-0.5">›</span>
            <span>${item}</span>
          </li>`
      )
      .join('')}
    </ul>
  `;
}

// Render Skills Grid
function renderSkills(filter = activeSkillFilter) {
  activeSkillFilter = filter;
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const filtered =
    filter === 'all' ? skillsData : skillsData.filter((skill) => skill.category === filter);

  if (!selectedSkillId || !filtered.some((skill) => skill.id === selectedSkillId)) {
    selectedSkillId = filtered[0]?.id || null;
  }

  grid.innerHTML = filtered
    .map((skill) => {
      const isSelected = skill.id === selectedSkillId;
      return `
      <div
        data-skill-id="${skill.id}"
        role="button"
        tabindex="0"
        class="skill-card glass bg-slate-900/80 rounded-2xl p-6 card-hover cursor-pointer flex flex-col justify-between transition-all ${isSelected
          ? 'border-2 border-indigo-400 ring-2 ring-indigo-500/25 bg-slate-900'
          : 'border border-slate-800 hover:border-indigo-500/40'
        }"
      >
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
              ${skill.badge}
            </span>
            <span class="font-mono text-[11px] text-cyan-400">${skill.level} (${skill.proficiency}%)</span>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">${skill.name}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-3">${skill.desc}</p>

          <div class="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-4">
            <div
              class="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
              style="width: ${skill.proficiency}%"
            ></div>
          </div>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
            ${skill.tags
          .map(
            (tag) =>
              `<span class="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">${tag}</span>`
          )
          .join('')}
          </div>
          <div class="mt-3 text-[11px] font-mono ${isSelected ? 'text-indigo-300' : 'text-slate-500'}">
            ${isSelected ? '● Inspecting details below' : 'Click to inspect highlights & projects →'}
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  renderSkillInspector(filtered.find((skill) => skill.id === selectedSkillId) || filtered[0]);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function selectSkill(id) {
  selectedSkillId = id;
  renderSkills(activeSkillFilter);
}

// Render Projects Grid
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projectsData
    .map(
      (project) => `
    <div
      data-project-id="${project.id}"
      role="button"
      tabindex="0"
      class="project-card glass bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-2xl overflow-hidden card-hover cursor-pointer flex flex-col justify-between group"
    >
      <div>
        <div class="h-1.5 w-full bg-gradient-to-r ${project.accent}"></div>
        <div class="p-6">
          <div class="font-mono text-[11px] text-cyan-400 uppercase tracking-wider mb-1.5">${project.category}</div>
          <h3 class="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5 flex items-center justify-between">
            ${project.title}
            <i data-lucide="arrow-up-right" class="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors"></i>
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">${project.summary}</p>
        </div>
      </div>
      <div class="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
        ${project.tags
          .map(
            (tag) =>
              `<span class="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-slate-950/90 text-slate-300 border border-slate-800">${tag}</span>`
          )
          .join('')}
      </div>
    </div>
  `
    )
    .join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Project Modal Controls
function openProjectModal(id) {
  const project = projectsData.find((item) => item.id === id);
  if (!project) return;

  document.getElementById('modal-category').textContent = project.category;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-desc').textContent = project.summary;
  document.getElementById('modal-arch').textContent = project.architecture;
  document.getElementById('modal-highlights').innerHTML = project.highlights
    .map((highlight) => `<li>${highlight}</li>`)
    .join('');
  document.getElementById('modal-tags').innerHTML = project.tags
    .map(
      (tag) =>
        `<span class="font-mono text-xs px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">${tag}</span>`
    )
    .join('');

  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Resume Modal Controls
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Clipboard Copy & Toast Notification
function copyText(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(message));
  } else {
    showToast(message);
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2600);
}

// Event Listeners & Initialization
function initPortfolioApp() {
  renderSkills('all');
  renderProjects();

  if (window.lucide) {
    lucide.createIcons();
  }

  // Event Delegation for Skill Cards & Project Cards
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

  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.addEventListener('click', (e) => {
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

  // Skill Filter Buttons
  document.querySelectorAll('.skill-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterValue = btn.dataset.filter || 'all';
      document.querySelectorAll('.skill-filter-btn').forEach((b) => {
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

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.reset();
      showToast('Message sent! Kenith will get back to you soon.');
    });
  }

  // Close Modals on Backdrop Click & Escape Key
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeModal();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioApp);
} else {
  initPortfolioApp();
}