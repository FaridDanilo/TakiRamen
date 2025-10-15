//* Navbar Functions Start
const sectionActive = document.querySelectorAll('.navbar__links ul li a');

sectionActive.forEach(menu => {
    menu.addEventListener('click', () => {
        sectionActive.forEach(link => link.classList.remove('active'));

        menu.classList.add('active');
    });
});

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 15) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

const navbarToggle = document.getElementById("navbarToggle");
const navbarLinks = document.getElementById("navbarLinks");

navbarToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("show");
    navbarToggle.classList.toggle("active");
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".navbar__links a").forEach(link => {
    link.addEventListener("click", () => {
        navbarLinks.classList.remove("show");
        navbarToggle.classList.remove("active");
    });
});

// Cambiar icono hamburguesa ↔️ X
navbarToggle.addEventListener("click", () => {
    const icon = navbarToggle.querySelector("i");
    if (navbarToggle.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

//* Navbar Functions End

//* ============ Section Menú Start ============
const cardsContent = document.querySelectorAll('.card-content');

cardsContent.forEach(card => {
    const titleH3 = card.querySelector('h3');

    card.addEventListener('mouseover', () => {
        titleH3.style.opacity = '1';
        titleH3.style.animation = 'translate 0.3s ease';

    });

    card.addEventListener('mouseout', () => {
        titleH3.style.opacity = '0';
        titleH3.style.animation = 'none';
    });
});
//* ============ Section Menú Start ============


//* ============ Carrusel The Best Start ============
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__btn.next');
const prevButton = document.querySelector('.carousel__btn.prev');
let currentSlide = 0;

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }, 4000)
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

startAutoPlay();

track.parentElement.addEventListener('mouseenter', stopAutoPlay);
track.parentElement.addEventListener('mouseleave', startAutoPlay);
//* ============ Carrusel The Best Start ============