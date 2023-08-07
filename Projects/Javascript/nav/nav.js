const change = document.querySelector('.buttons');
const nav = document.querySelector('.list');

change.addEventListener('click', () => {
    nav.classList.toggle('active');
});
