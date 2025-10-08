const cards = document.querySelectorAll('.card-content');

cards.forEach(card => {
    const titleH1 = card.querySelector('h1');

    card.addEventListener('mouseover', () => {
        titleH1.style.opacity = '1';
        titleH1.style.animation = 'translate 0.3s ease';

    });

    card.addEventListener('mouseout', () => {
        titleH1.style.opacity = '0';
        titleH1.style.animation = 'none';
    });
});
