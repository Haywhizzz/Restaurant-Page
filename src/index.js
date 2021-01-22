import Navbar from './navbar';
import Home from './home';
import Menu from './menu';
import Contact from './contact';

const content = document.getElementById('content');

const showPage = (section) => {
    content.innerHTML = '';
    content.appendChild(Navbar);
    content.appendChild(section);
};

showPage(Home);

const bannerBtn = document.querySelector('.btn-menu');
const logoBtn = document.querySelector('.nav-logo');
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

const switchPage = ({
    target
}) => {
    switch (target) {
        case homeBtn:
            showPage(Home);
            break;
        case menuBtn:
            showPage(Menu);
            break;
        case bannerBtn:
            showPage(Menu);
            break;
        case contactBtn:
            showPage(Contact);
            break;
        default:
            showPage(Home);
            break;
    }
};

homeBtn.addEventListener('click', switchPage);
logoBtn.addEventListener('click', switchPage);
menuBtn.addEventListener('click', switchPage);
contactBtn.addEventListener('click', switchPage);
bannerBtn.addEventListener('click', switchPage);
