// Inicializar AOS para animaciones al hacer scroll
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Toggle menu mobile
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Smooth scroll para navegación
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navLinks = document.getElementById('navLinks');
        
        // Cerrar menú móvil si está abierto
        navLinks.classList.remove('active');
        
        // Scroll suave
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// CTA button smooth scroll
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Manejo del formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí puedes integrar con un servicio de email como EmailJS, Netlify Forms, etc.
    alert('¡Gracias por contactarnos! Nos comunicaremos contigo pronto.');
    
    // Limpiar el formulario
    this.reset();
});

// Efecto parallax sutil en el hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Cambiar apariencia del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 1)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.8)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    }
});

// Contador animado para estadísticas (opcional - puedes agregar sección de stats)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Lazy loading de imágenes (mejora el rendimiento)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Cerrar menú móvil al hacer clic fuera
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav');
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Prevenir cierre del menú al hacer clic dentro del menú
document.querySelector('.nav-links').addEventListener('click', function(e) {
    e.stopPropagation();
});