document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        scrollPage(1);
    } else {
        scrollPage(-1);
    }
});

let currentSection = 0;
const sections = document.querySelectorAll('section');

function scrollPage(direction) {
    currentSection = Math.min(Math.max(currentSection + direction, 0), sections.length - 1);
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        currentSection = Array.from(sections).indexOf(targetSection);
    });
});

const navbar = document.querySelector('nav');

document.addEventListener('mousemove', function(event) {
    const viewportHeight = window.innerHeight;
    if (event.clientY > viewportHeight * 0.2) {
        navbar.style.top = '-100px'; // Adjust this value to move the navbar completely out of view
    } else {
        navbar.style.top = '0';
    }
});
