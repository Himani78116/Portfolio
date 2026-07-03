/* ==========================================
   App Entry Point
   Orchestrates component rendering and shared behaviors
   ========================================== */

import { render as renderNavbar, init as initNavbar } from './components/Navbar.js';
import { render as renderHero, init as initHero } from './components/Hero.js';
import { render as renderProjects, init as initProjects } from './components/Projects.js';
import { render as renderEducation, init as initEducation } from './components/Education.js';
import { render as renderSkills, init as initSkills } from './components/Skills.js';
import { render as renderContact, init as initContact } from './components/Contact.js';
import { render as renderFooter, init as initFooter } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {

    /* ====================================
       Render All Components
       ==================================== */
    const app = document.getElementById('app');

    app.innerHTML = `
        ${renderNavbar()}
        ${renderHero()}
        ${renderProjects()}
        ${renderEducation()}
        ${renderSkills()}
        ${renderContact()}
        ${renderFooter()}
    `;

    /* ====================================
       Initialize Component Behaviors
       ==================================== */
    initNavbar();
    initHero();
    initProjects();
    initEducation();
    initSkills();
    initContact();
    initFooter();

    /* ====================================
       Scroll Reveal Animations
       ==================================== */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ====================================
       Smooth Scroll for Anchor Links
       ==================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ====================================
       Keyboard Accessibility
       ==================================== */
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

});
