document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
const heroElements = heroContent.children;

Array.from(heroElements).forEach((element, index) => {
element.style.opacity = '0';
element.style.transform = 'translateY(20px)';
setTimeout(() => {
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}, index * 200);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});

const heroContent = document.querySelector('.hero-content');
    const heroElements = heroContent.children;

    Array.from(heroElements).forEach((element, index) => {
        element.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`;
    });

    const heroBackground = document.querySelector('.hero-background');
    heroBackground.style.background = 'linear-gradient(45deg, #000000, #1a1a1a, #333333)';
    heroBackground.style.backgroundSize = '400% 400%';
    heroBackground.style.animation = 'gradientAnimation 15s ease infinite';
});
const animateOnScroll = () => {
const elements = document.querySelectorAll('.education-item, .experience-item, .project-item, .skill-category');
elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('visible');
    }
});
};
const debounce = (func, wait = 20, immediate = true) => {
let timeout;
return function() {
    const context = this, args = arguments;
    const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
};
};

window.addEventListener('scroll', debounce(animateOnScroll));
animateOnScroll();
const heroText = document.querySelector('.hero-content h1');
const text = heroText.textContent;
heroText.textContent = '';
let i = 0;
const typeWriter = () => {
if (i < text.length) {
    heroText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
}
};
typeWriter();

const form = document.querySelector('#contact-form');
form.addEventListener('submit', (e) => {
e.preventDefault();

const name = form.elements.name.value;
const email = form.elements.email.value;
const message = form.elements.message.value;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    showNotification("Please enter a valid email address.", "error");
    return;
}
showNotification("Message sent successfully!");
form.reset();
});

function showNotification(message, type = "success") {
const notification = document.createElement('div');
notification.textContent = message;
notification.style.position = 'fixed';
notification.style.bottom = '20px';
notification.style.right = '20px';
notification.style.padding = '10px 20px';
notification.style.borderRadius = '5px';
notification.style.color = '#fff';
notification.style.backgroundColor = type === "success" ? '#2ecc71' : '#e74c3c';
notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
notification.style.transition = 'opacity 0.5s ease-in-out';
notification.style.zIndex = '1000';
document.body.appendChild(notification);

setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 500);
}, 3000);
}
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
const scrollPosition = window.pageYOffset;
hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

const skillItems = document.querySelectorAll('.skill-category ul li');
skillItems.forEach(item => {
item.style.width = '0%';
requestAnimationFrame(() => {
    item.style.width = '100%';
    item.style.transition = 'width 1s ease-out';
});
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
header.classList.toggle('scrolled', window.scrollY > 100);
});
const revealProjects = () => {
const projects = document.querySelectorAll('.project-item');
projects.forEach((project, index) => {
    setTimeout(() => {
        project.classList.add('visible');
    }, index * 200);
});
};

window.addEventListener('load', revealProjects);
});