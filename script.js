let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
}

let currentIndex = 0; 
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length; 
const slidesToShow = 3; 
const slideWidth = slides[0].offsetWidth; 

function showSlides() {
    document.querySelector('.slider').style.transform = `translateX(-${(currentIndex * slideWidth)}px)`;
}

function nextSlide() {
    if (currentIndex + slidesToShow < totalSlides) {
        currentIndex += slidesToShow;
    } else {
        currentIndex = 0; 
    }
    showSlides();
}

showSlides();


setInterval(nextSlide, 7000);