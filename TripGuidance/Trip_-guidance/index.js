// Scroll to section
const scrollDownIcon = document.querySelector('.scroll-down-icon');
const travelSection = document.querySelector('#travel');

scrollDownIcon.addEventListener('click', () => {
    travelSection.scrollIntoView({ behavior: 'smooth' });
});

// Mobile navigation
const navbar = document.querySelector('.navbar');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelectorAll('.link-item');

const mobileNavbar = () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.length * 100;

    if (containerHeight > linksHeight) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 'auto';
    }
}

mobileNavbar();

window.addEventListener('resize', mobileNavbar);

// Smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        element.scrollIntoView({ behavior: 'smooth' });
    });
});