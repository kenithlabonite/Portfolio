<script>
    const skillsData = [
      {
        id: 'csharp-dotnet',
        name: 'C# & .NET 8 Ecosystem',
        category: 'backend',
        badge: 'Primary Stack',
        level: 'Advanced',
        proficiency: 92,
        desc: 'Object-oriented backend architecture, clean service layers, LINQ querying, and enterprise APIs.',
        tags: ['C# 12', '.NET 8', 'ASP.NET Core', 'LINQ', 'Visual Studio'],
        relatedProjects: ['Smart-Exam', 'Employee Directory & Auth System'],
        highlights: [
          'Builds structured RESTful APIs and Razor Pages applications using C# across backend and UI.',
          'Follows Agile MVP practices to ship working endpoints before over-optimizing.'
        ]
      },
      {
        id: 'aspnet-webapi-razor',
        name: 'ASP.NET Web API & Razor Pages',
        category: 'backend',
        badge: 'Full-Stack C#',
        level: 'Advanced',
        proficiency: 88,
        desc: 'RESTful API design, server-rendered Razor views, authentication flows, and email update endpoints.',
        tags: ['ASP.NET Web API', 'Razor Pages', 'REST JSON', 'Auth & Validation'],
        relatedProjects: ['Employee Directory & Auth System', 'Smart-Exam'],
        highlights: [
          'Implemented user authentication and account/email update flows backed by relational storage.',
          'Keeps API contracts clean and predictable for web clients and integrations.'
        ]
      },
      {
        id: 'mysql-architecture',
        name: 'MySQL Database Architecture',
        category: 'backend',
        badge: 'Core Strength',
        level: 'Advanced',
        proficiency: 94,
        desc: 'Normalized schema design, relational foreign-key constraints, data integrity, and Navicat administration.',
        tags: ['MySQL', 'ERD / Normalization', 'Data Integrity', 'Navicat', 'SQL'],
        relatedProjects: ['Smart-Exam', 'Employee Directory & Auth System', 'Student Council Election System'],
        highlights: [
          'Analytical database modeling focused on eliminating duplicate/orphan records and enforcing integrity.',
          'Designs transactional tables for exams, users, ballots, and operational records.'
        ]
      },
      {
        id: 'frontend-angular-web',
        name: 'Angular & Modern Web UI',
        category: 'frontend',
        badge: 'Frontend',
        level: 'Intermediate',
        proficiency: 82,
        desc: 'Component-driven Angular interfaces, responsive layouts, HTML5, CSS3, Tailwind CSS, and JavaScript.',
        tags: ['Angular', 'TypeScript / JS', 'HTML5', 'CSS3', 'Tailwind CSS'],
        relatedProjects: ['AI Assistant Full-Stack Platform', 'Student Council Election System'],
        highlights: [
          'Separates Angular frontend client code cleanly from backend REST services.',
          'Builds responsive, mobile-friendly interfaces for dashboards, chat, and voting.'
        ]
      },
      {
        id: 'ai-ocr-pipeline',
        name: 'Gemini AI API & Tesseract OCR',
        category: 'ai',
        badge: 'Applied AI',
        level: 'Intermediate',
        proficiency: 85,
        desc: 'Integrating Gemini AI API for automated exam/content generation and Tesseract OCR for answer-sheet reading.',
        tags: ['Gemini AI API', 'Tesseract OCR', 'Prompt Engineering', 'Automation'],
        relatedProjects: ['Smart-Exam', 'AI Assistant Full-Stack Platform'],
        highlights: [
          'Generates structured examination items with Gemini AI and pairs with Tesseract OCR for grading.',
          'Combines AI assistance with human-in-the-loop review and structured database storage.'
        ]
      },
      {
        id: 'creative-media-infra',
        name: 'Graphic Design, DSLR Media & Ops',
        category: 'creative',
        badge: 'Creative & Infra',
        level: 'Advanced',
        proficiency: 90,
        desc: 'Logos, tarpaulins, BSIT apparel/event visuals, DSLR photography, OBS live streams, and local network/printer/CCTV setup.',
        tags: ['Brand & Tarpaulin Design', 'Nikon D5300 / Canon EOS', 'OBS Studio', 'Google Apps Script', 'Networking'],
        relatedProjects: ['NC Mendoza Beauty Lounge', 'Golden Success College Events'],
        highlights: [
          'Creates print-ready tarpaulins, logos, and social assets plus Meta Business Suite auto-replies.',
          'Handles DSLR event photography, OBS streaming, Google Sheets/Apps Script macros, and local IT/network setup.'
        ]
      }
    ];

    const projectsData = [
      {
        id: 'smart-exam',
        title: 'Smart-Exam',
        category: 'Flagship Capstone • AI & EdTech',
        summary: 'AI-powered examination generation and OCR answer-checking management system built for Golden Success College.',
        architecture: 'Razor Pages / Web UI ➔ .NET 8 ASP.NET Core API ➔ Gemini AI API (Question Gen) + Tesseract OCR (Sheet Grading) ➔ MySQL Relational DB',
        highlights: [
          'Automates exam questionnaire creation using Gemini AI structured prompts.',
          'Processes scanned student answer sheets via Tesseract OCR for rapid, accurate scoring.',
          'Normalized MySQL database tracking courses, exam banks, student scores, and analytics.'
        ],
        tags: ['.NET 8', 'C#', 'MySQL', 'Gemini AI API', 'Tesseract OCR'],
        accent: 'from-indigo-500 to-cyan-500'
      },
      {
        id: 'employee-dir',
        title: 'Employee Directory & Auth System',
        category: 'Enterprise Web App • Full-Stack C#',
        summary: 'Full-stack C# employee management and authentication platform with secure self-service email updates.',
        architecture: 'Razor Pages Frontend (C#) ➔ ASP.NET Web API ➔ Authentication & Validation Service ➔ MySQL Database',
        highlights: [
          'Built end-to-end in C# across both Razor Pages UI and ASP.NET Web API services.',
          'Implemented secure credential verification and transactional email update workflows.',
          'Designed clean relational tables enforcing employee record integrity.'
        ],
        tags: ['C#', 'ASP.NET Web API', 'Razor Pages', 'MySQL'],
        accent: 'from-cyan-500 to-emerald-500'
      },
      {
        id: 'ai-assistant',
        title: 'AI Assistant Full-Stack Platform',
        category: 'Decoupled Architecture • AI',
        summary: 'Modular conversational assistant separating a scalable backend API from an interactive Angular frontend.',
        architecture: 'Angular SPA (aiAssistantAngular) ➔ REST JSON API ➔ Backend Service (aiAssistant) ➔ LLM Integration',
        highlights: [
          'Clean repository separation between backend service logic and Angular client UI.',
          'Real-time prompt handling, asynchronous state management, and responsive chat layout.',
          'Structured for iterative Agile feature expansion.'
        ],
        tags: ['Angular', 'REST API', 'Node.js / C#', 'TypeScript'],
        accent: 'from-violet-500 to-indigo-500'
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
        accent: 'from-amber-500 to-rose-500'
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
        accent: 'from-rose-600 to-pink-500'
      }
    ];

    let activeSkillFilter = 'all';
    let selectedSkillId = null;

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

    function ensureSkillInspector() {
      const grid = document.getElementById('skills-grid');
      if (!grid || !grid.parentElement) return null;

      let inspector = document.getElementById('skill-inspector');
      if (!inspector) {
        inspector = document.createElement('div');
        inspector.id = 'skill-inspector';
        inspector.className = 'mt-6 bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-5 sm:p-6';
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
                Active Skill Details
              </span>
              <span class="font-mono text-xs text-cyan-400">${skill.level} • ${skill.proficiency}%</span>
            </div>
            <h3 class="text-xl font-bold text-white">${skill.name}</h3>
            <p class="text-sm text-slate-300 mt-1">${skill.desc}</p>
          </div>
          <div class="flex flex-wrap gap-1.5 shrink-0">
            ${skill.relatedProjects
              .map((proj) => `<span class="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 text-emerald-300 border border-emerald-500/30">Used in: ${proj}</span>`)
              .join('')}
          </div>
        </div>
        <ul class="mt-4 grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
          ${skill.highlights
            .map((item) => `
              <li class="flex items-start gap-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <span class="text-indigo-400 font-bold mt-0.5">›</span>
                <span>${item}</span>
              </li>
            `)
            .join('')}
        </ul>
      `;
    }

    function renderSkills(filter = activeSkillFilter) {
      activeSkillFilter = filter;
      const grid = document.getElementById('skills-grid');
      if (!grid) return;

      const filtered = filter === 'all'
        ? skillsData
        : skillsData.filter((skill) => skill.category === filter);

      if (!selectedSkillId || !filtered.some((s) => s.id === selectedSkillId)) {
        selectedSkillId = filtered[0]?.id || null;
      }

      grid.innerHTML = filtered
        .map((skill) => {
          const isSelected = skill.id === selectedSkillId;
          return `
            <div
              onclick="selectSkill('${skill.id}')"
              role="button"
              tabindex="0"
              onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectSkill('${skill.id}');}"
              class="bg-slate-900/80 rounded-2xl p-6 cursor-pointer flex flex-col justify-between transition-all hover:-translate-y-1 ${
                isSelected
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
                  <div class="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style="width: ${skill.proficiency}%"></div>
                </div>
              </div>
              <div>
                <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  ${skill.tags
                    .map((tag) => `<span class="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">${tag}</span>`)
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

      renderSkillInspector(filtered.find((s) => s.id === selectedSkillId) || filtered[0]);
      if (window.lucide) lucide.createIcons();
    }

    function selectSkill(id) {
      selectedSkillId = id;
      renderSkills(activeSkillFilter);
    }

    function renderProjects() {
      const grid = document.getElementById('projects-grid');
      if (!grid) return;

      grid.innerHTML = projectsData
        .map((project) => `
          <div onclick="openProjectModal('${project.id}')" class="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group transition-all hover:-translate-y-1">
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
                .map((tag) => `<span class="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-slate-950/90 text-slate-300 border border-slate-800">${tag}</span>`)
                .join('')}
            </div>
          </div>
        `)
        .join('');

      if (window.lucide) lucide.createIcons();
    }

    function openProjectModal(id) {
      const project = projectsData.find((item) => item.id === id);
      if (!project) return;
      document.getElementById('modal-category').textContent = project.category;
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-desc').textContent = project.summary;
      document.getElementById('modal-arch').textContent = project.architecture;
      document.getElementById('modal-highlights').innerHTML = project.highlights.map((h) => `<li>${h}</li>`).join('');
      document.getElementById('modal-tags').innerHTML = project.tags
        .map((t) => `<span class="font-mono text-xs px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">${t}</span>`)
        .join('');
      const modal = document.getElementById('project-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeProjectModal() {
      const modal = document.getElementById('project-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function openResumeModal() {
      const modal = document.getElementById('resume-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeResumeModal() {
      const modal = document.getElementById('resume-modal');
      modal.classList.add('hidden');