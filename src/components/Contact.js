/* ==========================================
   Contact Component
   ========================================== */

export function render() {
    return `
        <section id="contact" class="section contact">
            <div class="container">
                <div class="section-header reveal">
                    <h2 class="section-title">CONTACT</h2>
                </div>
                <div class="contact-content">
                    <div class="contact-info reveal">
                    <p class="contact-intro">I'm always open to discussing software engineering, AI, open-source projects, internships, and new opportunities. Feel free to reach out if you'd like to collaborate!</p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <span class="contact-label">Email:</span>
                            <a href="mailto:himanibagale0@gmail.com" class="contact-value">himanibagale0@gmail.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-label">Mobile:</span>
                            <a href="tel:+918767951880" class="contact-value">+91 8767951880</a>
                        </div>
                    </div>
                </div>
                    <form class="contact-form reveal" id="contactForm">
                        <div class="form-group">
                            <input type="text" id="name" class="form-input" placeholder=" " required>
                            <label for="name" class="form-label">Name</label>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" class="form-input" placeholder=" " required>
                            <label for="email" class="form-label">Email</label>
                        </div>
                        <div class="form-group">
                            <input type="text" id="subject" class="form-input" placeholder=" ">
                            <label for="subject" class="form-label">Subject</label>
                        </div>
                        <div class="form-group">
                            <textarea id="message" class="form-input form-textarea" placeholder=" " required></textarea>
                            <label for="message" class="form-label">Message</label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-submit">
                            <span>Send Message</span>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

export function init() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Log form data to console (wire up real submission later)
            const formData = new FormData(contactForm);
            console.log('Contact form submitted:', Object.fromEntries(formData));

            // Simulate sending (replace with actual form submission)
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
                submitBtn.style.background = 'linear-gradient(135deg, #00D9A6, #6C63FF)';

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    contactForm.reset();
                }, 2500);
            }, 1500);
        });
    }
}
