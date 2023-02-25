import './style.scss';

const burger = document.querySelector('.beauty-header__nav-top_burger');
const catalogButton = document.querySelector('.beauty-header__nav-bottom_catalog-btn');
const headerNav = document.querySelector('.beauty-header__nav-top_list');
const bottomNav = document.querySelector('.beauty-header__nav-bottom_list');

document.addEventListener('click', (e) => {
    const withinNav = e.composedPath().includes(headerNav);
    const withinCatalog = e.composedPath().includes(bottomNav);

    if (!withinNav && headerNav.classList.contains('burger__list')) {
        headerNav.classList.remove('burger__list');
        burger.classList.toggle('active');
    }
    if (!withinCatalog && bottomNav.classList.contains('catalog__list')) {
        bottomNav.classList.remove('catalog__list');
    }
});

burger.addEventListener('click', (e) => {
    const withinCatalog = e.composedPath().includes(bottomNav);

    if (!withinCatalog && bottomNav.classList.contains('catalog__list')) {
        bottomNav.classList.remove('catalog__list');
    }
    e.stopPropagation();

    headerNav.classList.toggle('burger__list');
    burger.classList.toggle('active');
});

catalogButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const withinNav = e.composedPath().includes(headerNav);
    if (!withinNav && headerNav.classList.contains('burger__list')) {
        headerNav.classList.remove('burger__list');
        burger.classList.toggle('active');
    }
    bottomNav.classList.toggle('catalog__list');
});
