/* ==========================================
   Projects Component
   ========================================== */

export function render() {
    return `
        <section id="projects" class="section projects">
            <div class="container">
                <div class="section-header reveal">
                    <h2 class="section-title">PROJECTS</h2>
                </div>
                <div class="projects-grid">
                    <div class="project-card reveal">
                        <div class="project-image">
                            <video 
                                class="project-video" 
                                src="./src/videos/Nexstudy.mp4" 
                                autoplay 
                                muted 
                                loop 
                                playsinline
                            ></video>
                            <div class="project-overlay">
                                <div class="project-links">
                                    <a href="https://github.com/Himani78116/NexStudy" class="project-link"><i class="fab fa-github"></i></a>
                                    <a href="https://nex-study-two.vercel.app/" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="project-info">
                            <h3 class="project-title"> Full-Stack Smart Learning Portal</h3>
                            <p class="project-description">A centralized learning platform with structured, topic-wise notes for all branches. Simplified access to organized study resources improving exam preparation efficiency.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Next.js</span>
                                <span class="tech-tag">PostgreSQL</span>
                                <span class="tech-tag">Groq API</span>
                            </div>
                        </div>
                    </div>

                    <div class="project-card reveal">
                        <div class="project-image">
                            <video 
                                class="project-video" 
                                src="./src/videos/Onetap.mp4" 
                                autoplay 
                                muted 
                                loop 
                                playsinline
                            ></video>
                            <div class="project-overlay">
                                <div class="project-links">
                                    <a href="https://github.com/Himani78116/OneTapGOV" class="project-link"><i class="fab fa-github"></i></a>
                                    <a href="https://one-tap-gov.vercel.app/" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="project-info">
                            <h3 class="project-title">AI Government Scheme Assistant</h3>
                            <p class="project-description">Collaborated with a 4-member team to build an AI-powered government scheme assistant. Developed the backend using FastAPI, integrating Groq API and Web Speech API for 
multilingual chat. Implemented Supabase authentication, PostgreSQL database, eligibility - checking logic.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">PostgreSQL</span>
                                <span class="tech-tag">FastAPI</span>
                                <span class="tech-tag">Groq API</span>
                                <span class="tech-tag">Sarvam AI API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function init() {
    // No specific JS behavior needed beyond CSS hover effects
}
