document.addEventListener('DOMContentLoaded', () => {
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');

    // فتح المنيو
    openMenu.addEventListener('click', () => {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // منع السكرول عند فتح المنيو
    });

    // إغلاق المنيو
    const closeSidebar = () => {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeMenu.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // إغلاق المنيو عند الضغط على أي لينك وتغيير الـ Active
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarLinks.forEach(l => l.classList.remove('active-link'));
            link.classList.add('active-link');
            closeSidebar();
        });
    });

    // تغيير ستايل الهيدر عند السكرول
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(17, 24, 68, 0.95)';
        } else {
            header.style.padding = '15px 0';
            header.style.backgroundColor = '#111844';
        }
    });

    // Scroll Active Link Detection
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.desktop-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
const observerAbout = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('reveal-p')) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
            
            if (entry.target.classList.contains('count-num')) {
                const targetVal = parseInt(entry.target.getAttribute('data-val'));
                let currentVal = 0;
                const step = targetVal / 50;
                const timer = setInterval(() => {
                    currentVal += step;
                    if (currentVal >= targetVal) {
                        entry.target.innerText = targetVal + (targetVal === 100 ? "" : "+");
                        clearInterval(timer);
                    } else {
                        entry.target.innerText = Math.floor(currentVal);
                    }
                }, 30);
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.reveal-p, .count-num').forEach((el) => {
    observerAbout.observe(el);
});
const initServicesAnimation = () => {
    const cards = document.querySelectorAll('.animate-card');
    
    const servicesObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 150); 
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => servicesObserver.observe(card));
};
document.addEventListener('DOMContentLoaded', initServicesAnimation);
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.animate-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
});
document.addEventListener('DOMContentLoaded', () => {
    const whyItems = document.querySelectorAll('.animate-why');
    const whyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });

    whyItems.forEach(el => whyObserver.observe(el));
});
document.body.classList.add('loading');

window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    setTimeout(() => {
        splash.classList.add('splash-hidden');
        document.body.classList.remove('loading');
    }, 2000);
});