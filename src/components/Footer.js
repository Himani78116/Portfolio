/* ==========================================
   Footer Component
   ========================================== */

export function render() {
    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-brand">
                        <a href="#home" class="footer-logo">Himani Bagale</a>
                        <p class="footer-tagline">Full Stack Developer</p>
                    </div>
                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-socials">
                        <h4>Connect</h4>
                        <div class="footer-social-links">
                            <a href="https://github.com/Himani78116" target="_blank" class="footer-social-link" aria-label="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/himanibagale/" target="_blank" class="footer-social-link" aria-label="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://x.com/himani_bagale" target="_blank" class="footer-social-link" aria-label="Twitter">
                                <i class="fab fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-divider"></div>
                <p class="footer-copy">&copy; ${new Date().getFullYear()} Himani Bagale. All rights reserved.</p>
            </div>
        </footer>
    `;
}

export function init() {
    // No specific JS behavior needed
}
