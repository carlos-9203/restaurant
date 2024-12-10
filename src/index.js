import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
}

function init() {
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');

    homeTab.addEventListener('click', () => {
        setActiveButton(homeTab);
        loadHome();
    });
    menuTab.addEventListener('click', () => {
        setActiveButton(menuTab);
        loadMenu();
    });
    contactTab.addEventListener('click', () => {
        setActiveButton(contactTab);
        loadContact();
    });

    // Inicializa con Home activo
    setActiveButton(homeTab);
    loadHome();
}

init();
