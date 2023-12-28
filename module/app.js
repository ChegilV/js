const modalBtn = document.querySelector(".modal-btn");
const modalOver = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    modalOver.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
    modalOver.classList.remove('open-modal');
});