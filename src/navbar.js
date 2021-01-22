const Navbar = () => {
    const nav = document.createElement('nav');

    const logo = document.createElement('h1');
    logo.classList.add('nav-logo');
    logo.innerText = 'Restaurant';

    const navRight = document.createElement('ul');
    navRight.classList.add('nav-list');

    const navHome = document.createElement('li');
    const home = document.createElement('a');
    home.innerText = 'HOME';
    navHome.classList.add('nav-items');
    home.id = 'home';
    navHome.appendChild(home);

    const navMenu = document.createElement('li');
    const menu = document.createElement('a');
    menu.innerText = 'MENU';
    navMenu.classList.add('nav-items');
    menu.id = 'menu';
    navMenu.appendChild(menu);

    const navContact = document.createElement('li');
    const contact = document.createElement('a');
    contact.innerText = 'CONTACT';
    navContact.classList.add('nav-items');
    contact.id = 'contact';
    navContact.appendChild(contact);

    navRight.appendChild(navHome);
    navRight.appendChild(navMenu);
    navRight.appendChild(navContact);

    nav.appendChild(logo);
    nav.appendChild(navRight);

    return nav;
};

export default Navbar();