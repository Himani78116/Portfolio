/* ==========================================
   Hero Component
   ========================================== */

export function render() {
    return `
        <section id="home" class="hero">
            <div class="hero-bg-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="shape shape-4"></div>
            </div>
            <div class="container hero-content">
                <div class="hero-text reveal">
                    <p class="hero-greeting">Hello, I'm Himani</p>
                    <p class="hero-title">Full-Stack Developer &amp; AI Enthusiast</p>
                    <p class="hero-description">
                        Passionate about software engineering, AI, and open source. I build modern web applications, contribute to open-source projects, and enjoy learning technologies that solve real-world problems.
                    </p>
                    <div class="hero-actions">
                        <a href="#projects" class="btn btn-primary">
                            Projects
                        </a>
                        <a href="#contact" class="btn btn-outline">
                            Contact
                        </a>
                    </div>
                    <div class="hero-contact-info">
                        <a href="mailto:himanibagale0@gmail.com" class="hero-contact-item">
                            <span>himanibagale0@gmail.com</span>
                        </a>
                        <a href="tel:+918767951880" class="hero-contact-item">
                            <span>+91 8767951880</span>
                        </a>
                    </div>
                    <div class="hero-socials">
                        <a href="https://github.com/Himani78116" target="_blank" class="social-link" aria-label="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/himanibagale/" target="_blank" class="social-link" aria-label="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://x.com/himani_bagale" target="_blank" class="social-link" aria-label="Twitter">
                            <i class="fab fa-x-twitter"></i>
                        </a>
                    </div>
                </div>
                <div class="hero-visual reveal">
                    <div class="hero-image-wrapper">
                        <div class="hero-image-placeholder">
                            <img src="src/images/image.jpeg" alt="image">
                        </div>
                        <div class="hero-status-card">
                            <div class="status-dot"></div>
                            <span>Open to opportunities</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function init() {
    /* Typing Effect for Hero Title */
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const fullText = heroTitle.textContent;
        heroTitle.setAttribute('aria-label', fullText);

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            heroTitle.textContent = '';
            let charIndex = 0;

            function typeText() {
                if (charIndex < fullText.length) {
                    heroTitle.textContent += fullText[charIndex];
                    charIndex++;
                    setTimeout(typeText, 40);
                }
            }

            setTimeout(typeText, 500);
        }
    }

    /* Parallax Effect on Hero Shapes */
    const shapes = document.querySelectorAll('.hero-bg-shapes .shape');

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        shapes.forEach((shape, index) => {
            const speed = 1 + index * 0.3;
            shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    }, { passive: true });
}
