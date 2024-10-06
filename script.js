const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
hamburger.onclick = function(){
navBar.classList.toggle('active');
}
const links = document.querySelectorAll('a');
links.forEach(link => {
link.onclick = function(){
navBar.classList.remove('active');
    }
});
// Function to fade in elements
function fadeIn(element) {
    let opacity = 0;
    element.style.display = 'block';
    const interval = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(interval);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
    }, 50);
}

// Apply fade-in effect to all sections when the page loads
window.onload = function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0; // Initially hide section
        fadeIn(section); // Fade in section
    });
};

// Image hover effect for skills
const skillImages = document.querySelectorAll('.box img');
skillImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});
