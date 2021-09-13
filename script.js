// selectors

const main = document.querySelector('.main');
const navigation = document.querySelector('.navigation');

//addEventListener
const toggleMenu = () =>
{
    navigation.classList.toggle('toggle-active');
    main.classList.toggle('toggle-active-second');
}