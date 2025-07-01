// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelectorAll('.hamburger .bar');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Données des services
const servicesData = [
    {
        icon: 'fas fa-code',
        title: 'Développement Web',
        description: 'Sites web performants et responsives avec les dernières technologies.'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Applications Mobiles',
        description: 'Applications natives et cross-platform  avec Flutter ou React Native.'
    },
    {
        icon: 'fas fa-paint-brush',
        title: 'Photomanipulation',
        description: 'Création d\'images uniques et retouche professionnelle pour vos projets.'
    }
];

// Générer les cartes de services
const servicesGrid = document.querySelector('.services-grid');
servicesData.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
        <div class="service-icon">
            <i class="${service.icon}"></i>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    servicesGrid.appendChild(serviceCard);
});

// Données du portfolio
const portfolioData = [
    {
        image: 'imagerie.png',
        category: 'web',
        title: 'Site Notion en imagerie médicale',
        description: 'Site web interactif pour apprendre les notions en imagerie médicales',
        url: 'https://flavienrado.github.io/d-clic-imagerie/'
    },
    {    
        image: 'app_mobile.png',
        category: 'app',
        title: 'Application Recettes',
        description: 'Partage de recettes avec fonctionnalités sociales',
        url: 'assets/images/app_mobile.png'
    },
    {
        image: 'fla_poster.jpg',
        category: 'photomanipulation',
        title: 'poster',
        description: 'Création d\'un poster ',
        url: 'assets/images/fla_poster.jpg'
    },
    {
        image: 'site_perso.png',
        category: 'web',
        title: 'Site Personnel',
        description: 'Site vitrine moderne pour une présentation personnelle',
        url: 'https://rakotondranivo-flavien.netlify.app/'
    }
];

// Générer le portfolio
const portfolioGrid = document.querySelector('.portfolio-grid');
portfolioData.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';
    portfolioItem.setAttribute('data-category', item.category);
    portfolioItem.innerHTML = `
    <img src="assets/images/${item.image}" alt="${item.title}" class="portfolio-img" loading="lazy">
    <div class="portfolio-overlay">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.url}" class="btn btn-primary" target="_blank">Voir le projet</a>
    </div>
    `;
    portfolioGrid.appendChild(portfolioItem);
});

// Filtrage du portfolio
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Retirer active de tous les boutons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Ajouter active au bouton cliqué
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Compétences
const skillsData = [
    { name: 'Développement Web', level: 75 },
    { name: 'Photomanipulation', level: 70 },
    { name: 'Flutter/Kotlin', level: 45 }
    
];

// Générer les compétences
const skillsContainer = document.querySelector('.skills');
skillsData.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <div class="skill-name">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
        </div>
        <div class="skill-bar">
            <div class="skill-progress" data-level="${skill.level}"></div>
        </div>
    `;
    skillsContainer.appendChild(skillItem);
});

// Animer les barres de compétences quand la section est visible
const aboutSection = document.querySelector('#about');
const skillProgress = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillProgress.forEach(progress => {
        const level = progress.getAttribute('data-level');
        progress.style.width = `${level}%`;
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);

// Données des témoignages
/**const testimonialsData = [
    {
        content: 'Le RaFl a complètement transformé notre présence en ligne. Son approche professionnelle a abouti à un site qui a augmenté nos conversions de 40%.',
        author: 'Sarah D.',
        role: 'CEO, Entreprise XYZ',
        image: 'testimonial1.jpg'
    },
    {
        content: 'Travailler avec Le RaFl a été une révélation. Il a livré notre application avant la deadline avec des améliorations inattendues.',
        author: 'Thomas L.',
        role: 'Directeur Technique, Startup ABC',
        image: 'testimonial2.jpg'
    },
    {
        content: 'Je recommande Le RaFl sans hésitation. Sa capacité à comprendre nos besoins et les traduire en solutions est impressionnante.',
        author: 'Amélie P.',
        role: 'Responsable Marketing, Société 123',
        image: 'testimonial3.jpg'
    }
];**/

// Générer les témoignages (pour un slider)
/** const testimonialsSlider = document.querySelector('.testimonials-slider');
testimonialsData.forEach(testimonial => {
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'testimonial';
    testimonialElement.innerHTML = `
        <div class="testimonial-content">
            <p>${testimonial.content}</p>
        </div>
        <div class="testimonial-author">
            <div class="author-img">
                <img src="assets/images/${testimonial.image}" alt="${testimonial.author}" loading="lazy">
            </div>
            <div class="author-info">
                <h4>${testimonial.author}</h4>
                <p>${testimonial.role}</p>
            </div>
        </div>
    `;
    testimonialsSlider.appendChild(testimonialElement);
});**/

// Formulaire de contact
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    // Pour Netlify Forms, il suffit de laisser le navigateur gérer l'envoi.
    // Mais pour afficher un message sans recharger la page :
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch('/', {
        method: 'POST',
        headers: { 'Accept': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
    })
    .then(response => {
        if (response.ok) {
            alert('Message envoyé avec succès! Je vous répondrai dès que possible.');
            contactForm.reset();
        } else {
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    })
    .catch(() => {
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    });
});

// Mettre à jour l'année dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialiser un slider pour les témoignages (avec TinySlider par exemple)
// Vous devrez inclure la bibliothèque TinySlider ou une autre solution de slider
document.addEventListener('DOMContentLoaded', function() {
    // Code d'initialisation du slider si vous en utilisez un
    // tns({ container: '.testimonials-slider', items: 1, slideBy: 'page', autoplay: true });
});