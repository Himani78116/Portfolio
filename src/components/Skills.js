/* ==========================================
   Skills Component
   ========================================== */

export function render() {
    return `
        <section id="skills" class="section skills">
            <div class="container">
                <div class="section-header reveal">
                    <h2 class="section-title">SKILLS</h2>
                    <p class="section-subtitle">The tools, languages, and frameworks I work with to bring ideas to life.</p>
                </div>
                <div class="skills-content">
                    <div class="skills-category reveal">
                        <div class="skills-category-header">
                            <h3 class="skills-category-title">Languages</h3>
                        </div>
                        <div class="skills-tags">
                            <span class="skill-tag"> Python</span>
                            <span class="skill-tag"> JavaScript</span>
                            <span class="skill-tag"> C</span>
                            <span class="skill-tag"> SQL</span>
                            <span class="skill-tag"> C++</span>
                        </div>
                    </div>

                    <div class="skills-category reveal">
                        <div class="skills-category-header">
                            <h3 class="skills-category-title">Web / Backend</h3>
                        </div>
                        <div class="skills-tags">
                            <span class="skill-tag"> Next.js</span>
                            <span class="skill-tag"> React</span>
                            <span class="skill-tag"> HTML</span>
                            <span class="skill-tag"> CSS</span>
                            <span class="skill-tag"> FastAPI</span>
                        </div>
                    </div>

                    <div class="skills-category reveal">
                        <div class="skills-category-header">
                            <h3 class="skills-category-title">Libraries / API</h3>
                        </div>
                        <div class="skills-tags">
                            <span class="skill-tag"> LLM APIs</span>
                            <span class="skill-tag"> Pandas</span>
                            <span class="skill-tag"> NumPy</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function init() {
    // Skills section animation is handled by the scroll reveal observer in app.js
}
