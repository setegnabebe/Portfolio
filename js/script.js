/* Data Definitions */
const skillCategories = [
    {
        title: 'Programming & Apps',
        icon: 'code',
        skills: ['Python', 'Java', 'JavaScript', 'Shell Script', 'YAML', 'WildFly', 'Tomcat', 'IIS', 'Express.js', 'NextJS', 'React', 'Node.js', 'Spring Boot']
    },
    {
        title: 'Cloud & Virtualization',
        icon: 'cloud',
        skills: ['Docker', 'Kubernetes', 'AWS', 'Tele Cloud', 'Proxmox', 'OLVM', 'VirtualBox', 'Hyper-V']
    },
    {
        title: 'CI/CD & Automation',
        icon: 'terminal',
        skills: ['Jenkins', 'GitHub Action', 'GitLab CI', 'Ansible', 'Terraform', 'Git', 'GitHub', 'GitLab']
    },
    {
        title: 'Monitoring & Observability',
        icon: 'activity',
        skills: ['Zabbix', 'ELK Stack', 'Prometheus', 'Grafana', 'Signoz', 'CloudWatch']
    },
    {
        title: 'Networking & Security',
        icon: 'shield-check',
        skills: ['OPNsense', 'pfSense', 'UniFi', 'Linksys', 'Installation', 'VLAN', 'VoIP', 'NAT']
    },
    {
        title: 'Databases & Servers',
        icon: 'database',
        skills: ['MySQL', 'PostgreSQL', 'Oracle', 'Redis', 'Apache Doris', 'Nginx', 'Apache', 'HAProxy', 'Traefik', 'Caddy', 'Zimbra', 'Mailcow', 'Microsoft Exchange']
    }
];

const experiences = [
    {
        role: 'DevOps Engineer',
        company: 'Kispay Financial Solution S.C',
        period: 'May 2025 - Present',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Designed and managed full DevOps environments; deployed Kubernetes clusters and Docker.',
            'Built automated CI/CD pipelines using GitHub Action and Jenkins.',
            'Implemented monitoring solutions (ELK Stack and Signoz) for deep system observability.',
            'Managed AWS and Tele Cloud infrastructure, including complex VM migrations.',
            'Configured secure network environments using OPNsense firewall router and managed datacenter infrastructures.',
            'Configured Redis data store for caching and Apache Doris data warehouse for data and logs.',
            'Managed web servers (Caddy, Node.js), Nginx reverse proxy and load balancers (HAProxy).'
        ]
    },
    {
        role: 'System Administrator and DevOps Engineer',
        company: 'Hagbes PLC',
        period: 'Dec 2023 - May 2025',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Designed and managed full DevOps environments; deployed Kubernetes clusters.',
            'Built automated CI/CD pipelines using GitHub Action.',
            'Configured Traefik as an ingress controller and load balancer.',
            'Implemented monitoring solutions (Zabbix, Prometheus, Grafana) for observability.',
            'Installed and managed database servers (PostgreSQL, MySQL) and corporate email applications (Mailcow, Zimbra, Exchange).',
            'Configured secure network environments using OPNsense firewall router.',
            'Installed and deployed Odoo Server using Docker.',
            'Managed datacenter infrastructures.'
        ]
    },
    {
        role: 'Intern - DevOps Engineer',
        company: 'Atlas Computer Technology',
        period: 'Jun 2022 - Dec 2023',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Containerized applications using Docker and Kubernetes for better scalability.',
            'Managed web servers (Nginx, Apache) and load balancers (HAProxy).',
            'Integrated ELK stack for centralized logging, alerting, and visualization.',
            'Administered Linux-based server infrastructure ensuring 99.9% uptime.',
            'Deployed Zabbix and Grafana for server and application monitoring.',
            'Managed firewall configurations using pfSense and conducted security audits.'
        ]
    }
];

const projects = [
    {
        title: 'Tele Cloud to AWS Migration',
        description: 'Designed and executed on-premises virtual machine migration to AWS using lift-and-shift strategy. Provisioned and managed AWS EC2 instances, VPCs, subnets, and implemented monitoring via CloudWatch.',
        icon: 'move',
        tags: ['AWS', 'EC2', 'VPC', 'CloudWatch', 'IAM'],
        github: '#',
        external: '#'
    },
    {
        title: 'Odoo Enterprise Deployment',
        description: 'Architected a scalable CI/CD environment for Odoo ERP. Optimized Docker containers for high availability and integrated automated testing stages.',
        icon: 'layers',
        tags: ['Odoo', 'Docker', 'GitHub Action', 'CI/CD'],
        github: '#',
        external: '#'
    },
    {
        title: 'USSD & Mobile Banking Platform',
        description: 'Implemented transaction-critical USSD systems. Optimized flows for high transaction volume and integrated real-time monitoring to ensure zero-downtime banking.',
        icon: 'zap',
        tags: ['FinTech', 'USSD', 'High-Availability', 'Monitoring'],
        github: '#',
        external: '#'
    }
];

const certifications = [
    'Programming Fundamentals | Udacity',
    'Android Developer Fundamentals | Udacity',
    'Next-Gen Network Security | IT Masters',
    'Cyber Threat Management | Cisco Networking Academy',
    'Endpoint Security | Cisco Networking Academy'
];

/* Main Initialization */
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderExperience();
    renderProjects();
    renderCertifications();
    initTheme();
    initRevealAnimations();
    initNavbarScroll();
    initMobileMenu();
    initCustomCursor();
    initParticleBackground();
    initCardTilt();
    initContactForm();
    initTerminalTyping();
    initNetworkToggle();
});

/* Rendering Functions */
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    container.innerHTML = skillCategories.map((cat, idx) => `
        <div class="skill-card glass reveal reveal-delay-${(idx % 3) + 1}" data-tilt>
            <div class="skill-icon"><i data-lucide="${cat.icon}"></i></div>
            <h3 class="skill-card-title">${cat.title}</h3>
            <div class="skill-tags">
                ${cat.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;
    container.innerHTML = experiences.map(exp => `
        <div class="timeline-item reveal">
            <div class="timeline-dot glass"><i data-lucide="briefcase"></i></div>
            <div class="timeline-content glass">
                <h3 class="exp-role">${exp.role}</h3>
                <div class="exp-meta">
                    <span><i data-lucide="building-2"></i> ${exp.company}</span>
                    <span><i data-lucide="calendar"></i> ${exp.period}</span>
                </div>
                <ul class="experience-desc">
                    ${exp.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = projects.map((proj, idx) => `
        <div class="project-card glass reveal reveal-delay-${(idx % 3) + 1}" data-tilt>
            <div class="project-icon"><i data-lucide="${proj.icon}"></i></div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-description">${proj.description}</p>
            <div class="skill-tags">
                ${proj.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderCertifications() {
    const container = document.getElementById('certs-container');
    if (!container) return;
    container.innerHTML = certifications.map(cert => `
        <div class="cert-item glass reveal">
            <i data-lucide="award"></i>
            <span>${cert}</span>
        </div>
    `).join('');
    lucide.createIcons();
}

/* Interactivity Functions */
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (!themeBtn || !themeIcon) return;
    let currentTheme = localStorage.getItem('theme') || 'dark';

    // apply theme (supports 'dark', 'light', 'network')
    if (currentTheme === 'network') {
        document.body.className = 'network-theme';
    } else {
        document.body.className = `${currentTheme}-theme`;
    }
    updateThemeIcon();

    themeBtn.addEventListener('click', () => {
        // toggle dark <-> light, network stays separate
        if (currentTheme === 'network') currentTheme = 'dark';
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.className = `${currentTheme}-theme`;
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const iconName = currentTheme === 'dark' ? 'sun' : 'moon';
        themeIcon.setAttribute('data-lucide', iconName);
        lucide.createIcons();
    }
}

function initNetworkToggle() {
    const netBtn = document.getElementById('network-toggle');
    const netIcon = document.getElementById('network-icon');
    if (!netBtn || !netIcon) return;

    let prevTheme = localStorage.getItem('theme') || 'dark';

    function applyNetwork(on) {
        if (on) {
            // activate network theme
            prevTheme = localStorage.getItem('theme') === 'network' ? 'dark' : localStorage.getItem('theme') || 'dark';
            document.body.className = 'network-theme';
            localStorage.setItem('theme', 'network');
            netIcon.setAttribute('data-lucide', 'wifi');
        } else {
            // revert to previous
            const restore = prevTheme || 'dark';
            document.body.className = `${restore}-theme`;
            localStorage.setItem('theme', restore);
                netIcon.setAttribute('data-lucide', 'refresh-cw');
        }
        lucide.createIcons();
    }

    // initialize
    applyNetwork(localStorage.getItem('theme') === 'network');

    netBtn.addEventListener('click', () => {
        const isNetwork = document.body.classList.contains('network-theme');
        applyNetwork(!isNetwork);
    });
}

function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass');
        } else {
            // Keep glass for premium feel
        }
    });
}

function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        const isFlex = navLinks.style.display === 'flex';
        navLinks.style.display = isFlex ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--surface)';
        navLinks.style.padding = '1rem';
    });
}

/* Advanced UI Features */
function initCustomCursor() {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (!dot || !outline) return;

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effect on interactive elements
    const links = document.querySelectorAll('a, button, .skill-card, .project-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            outline.style.borderColor = 'var(--secondary)';
        });
        link.addEventListener('mouseleave', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1)';
            outline.style.borderColor = 'var(--primary)';
        });
    });
}

function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        init();
    });
    resize();
    init();
    animate();
}

function initCardTilt() {
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
}

function initContactForm() {
    const form = document.querySelector('.contact-form');
    const status = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    if (!form || !status || !submitBtn) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            showStatus('Please fill in all fields.', 'error');
            return;
        }

        try {
            submitBtn.disabled = true;
            showStatus('Sending message...', 'loading');

            const response = await fetch(form.action, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                showStatus('Message sent successfully! I will get back to you soon.', 'success');
                form.reset();
            } else {
                const result = await response.json();
                showStatus(result.error || 'Oops! There was a problem sending your message.', 'error');
            }
        } catch (error) {
            showStatus('An error occurred. Please try again later.', 'error');
        } finally {
            submitBtn.disabled = false;
        }
    });

    function showStatus(text, type) {
        status.textContent = text;
        status.className = `form-status ${type}`;

        if (type === 'success') {
            setTimeout(() => {
                status.style.display = 'none';
            }, 5000);
        }
    }
}

/* Role toggle: switch accent colors and filter skills */
/* Copy SSH snippet to clipboard and UI feedback (removed - no SSH copy in UI) */

/* Small typing loop for the terminal snippet to feel alive */
function initTerminalTyping() {
    const el = document.getElementById('ssh-snippet');
    if (!el) return;

    const phrases = ['DevOps Engineer', 'Web-Hosting Engineer', 'System Administrator', 'Network Engineer'];
    let pIndex = 0;
    let charIndex = 0;
    let typing = true;
    const typeSpeed = 40;
    const deleteSpeed = 20;
    const pauseAfterFull = 1000;

    function tick() {
        const current = phrases[pIndex];
        if (typing) {
            charIndex++;
            el.textContent = current.slice(0, charIndex);
            if (charIndex >= current.length) {
                typing = false;
                setTimeout(tick, pauseAfterFull);
                return;
            }
            setTimeout(tick, typeSpeed);
        } else {
            charIndex--;
            el.textContent = current.slice(0, charIndex);
            if (charIndex <= 0) {
                typing = true;
                pIndex = (pIndex + 1) % phrases.length;
                setTimeout(tick, 200);
                return;
            }
            setTimeout(tick, deleteSpeed);
        }
    }

    tick();
}
