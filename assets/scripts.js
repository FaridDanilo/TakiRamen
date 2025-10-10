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


//* ============ Modal Menú Start ============
const modal = document.getElementById('modal');
const modalImg = modal.querySelector('.modal__img');
const modalTitle = modal.querySelector('.modal__title');
const modalDesc = modal.querySelector('.modal__description');
const modalRating = modal.querySelector('.modal__rating');
const modalClose = modal.querySelector('.modal__close');

const ramenData = {
    "Miso Ramen": {
        description: "Caldo espeso a base de miso, con sabores intensos y un toque dulce.",
        rating: 4
    },
    "Shoyu Ramen": {
        description: "Ramen con base de salsa de soya, equilibrado y muy tradicional.",
        rating: 5
    },
    "Shio Ramen": {
        description: "El más ligero de todos, con un caldo transparente y suave.",
        rating: 3
    },
    "Tonkotsu Ramen": {
        description: "Rico y cremoso caldo de cerdo, típico de Hakata.",
        rating: 5
    },
    "Tantanmen Ramen": {
        description: "Ramen picante con sésamo y carne de cerdo molida.",
        rating: 4
    }
};

document.querySelectorAll('.card-content').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const imgSrc = card.querySelector('img').src;
        const ramen = ramenData[title] || { description: "Delicioso ramen japonés.", rating: 4 };

        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        modalDesc.textContent = ramen.description;
        modalRating.innerHTML = '★'.repeat(ramen.rating) + '☆'.repeat(5 - ramen.rating);

        modal.classList.add('active');
    });
});

modalClose.addEventListener('click', () => modal.classList.remove('active'));

modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
});
//* ============ Modal Menú End ============

