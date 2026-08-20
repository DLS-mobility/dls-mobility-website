document.addEventListener('DOMContentLoaded', () => {
    // 1. Technical Metric Counters Animation
    const counters = document.querySelectorAll('.metric-num');
    let hasAnimated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 40; // Adjust for smoothness
            const updateCount = () => {
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = (count + increment).toFixed(target % 1 === 0 ? 0 : 1);
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    window.addEventListener('scroll', () => {
        const metricsSection = document.querySelector('.hero-metrics');
        if (metricsSection && !hasAnimated) {
            const topPos = metricsSection.getBoundingClientRect().top;
            if (topPos < window.innerHeight - 50) {
                animateCounters();
                hasAnimated = true;
            }
        }
    });

    // Run once on load if visible
    animateCounters();

    // 2. Interactive Engineering Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 3. Technical Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formAlert.style.color = '#00ffaa';
            formAlert.innerText = 'Technical inquiry logged. Direct telemetry response sent to inbox.';
            contactForm.reset();
            setTimeout(() => {
                formAlert.innerText = '';
            }, 5000);
        });
    }
});
