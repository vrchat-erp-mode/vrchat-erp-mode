document.addEventListener('DOMContentLoaded', () => {
    // Modal Logic
    const ageGate = document.getElementById('age-gate');
    const mainContent = document.getElementById('main-content');
    const btnEnter = document.getElementById('btn-enter');
    const btnLeave = document.getElementById('btn-leave');

    btnEnter.addEventListener('click', () => {
        ageGate.classList.add('hidden');
        mainContent.classList.remove('blur-content');
        
        // Remove from DOM after transition
        setTimeout(() => {
            ageGate.style.display = 'none';
        }, 500);
    });

    btnLeave.addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a, .btn-secondary-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if(href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetEl = document.getElementById(targetId);
                if(targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
