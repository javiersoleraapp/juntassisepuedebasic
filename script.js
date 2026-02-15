// Actualizar la acción del formulario con la dirección de correo real
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    // Cambiar la acción del formulario a Formspree (necesita tu email registrado)
    // Por ahora usamos formspree.io - debes crear una cuenta y obtener tu ID
    // Puedes editar la URL en index.html directamente o aquí:
    // contactForm.action = 'https://formspree.io/f/YOUR_FORM_ID';
    
    // Manejar el envío del formulario
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = contactForm.querySelector('.submit-button');
        const originalText = submitBtn.textContent;
        
        // Cambiar el texto del botón mientras se envía
        submitBtn.textContent = 'ENVIANDO... 🎸';
        submitBtn.disabled = true;
        
        // Formspree maneja el envío automáticamente
        // Aquí solo mejoramos la UX
        setTimeout(() => {
            submitBtn.textContent = '¡ENVIADO! 🎸';
            submitBtn.style.background = 'linear-gradient(45deg, #00BCD4, #00d4e0)';
        }, 1000);
    });
});

// Animación de scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Efecto de brillo en los títulos al pasar el ratón
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 20px #FF1744, 0 0 40px #00BCD4';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.textShadow = '0 0 10px #FF1744';
    });
});

// Validación en tiempo real del formulario
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#FF1744';
            this.style.boxShadow = '0 0 10px #FF1744';
        } else {
            this.style.borderColor = '#00BCD4';
            this.style.boxShadow = '0 0 10px #00BCD4';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 15px #FF1744';
    });
});

// Contador de caracteres para el textarea
const messageTextarea = document.getElementById('message');
if (messageTextarea) {
    messageTextarea.addEventListener('input', function() {
        const maxLength = 1000;
        if (this.value.length > maxLength) {
            this.value = this.value.substring(0, maxLength);
        }
    });
}

// Efecto parallax en la sección hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
}, { passive: true });

// Log para debugging (puedes remover después)
console.log('🎸 Bienvenido a Juntas Sí Se Puede - Rock Español de los 80/90 🎸');
console.log('¡Que la música te acompañe!');
