// ==========================
// 1. SIDEBAR TOGGLE (MOBILE)
// ==========================

const toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


// ==========================
// 2. CLOSE SIDEBAR ON CLICK
// ==========================

const navLinks = document.querySelectorAll('.sidebar nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});


// ==========================
// 3. ACTIVE MENU HIGHLIGHT
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Akshay-Sapkal-Profile.pdf';
    link.download = 'Akshay-Sapkal-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// ==========================
// TYPING ANIMATION
// ==========================
document.addEventListener("DOMContentLoaded", function () {

    const element = document.getElementById("typing-text");

    const texts = [
        "Analyzing Threats...",
        "Identifying Vulnerabilities...",
        "Strengthening system security..."
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            element.innerHTML = currentText.substring(0, charIndex--);
        } else {
            element.innerHTML = currentText.substring(0, charIndex++);
        }

        let speed = isDeleting ? 30 : 60;

        if (!isDeleting && charIndex === currentText.length) {
            speed = 1200; // pause at end
            isDeleting = true;
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 300;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});