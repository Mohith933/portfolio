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