// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #ffd700 100%)';
    } else {
        nav.style.background = 'linear-gradient(135deg, #1e3c72 0%, #ffd700 100%)';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());
    
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert('Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda.');
    this.reset();
});

// Add animation to experience cards
const experienceCards = document.querySelectorAll('.experience-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

experienceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Gallery image click handler
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(img => {
    img.addEventListener('click', function() {
        // Create modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        
        // Create image in modal
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';
        modalImg.style.objectFit = 'contain';
        
        // Add close functionality
        modal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
    });
}); 