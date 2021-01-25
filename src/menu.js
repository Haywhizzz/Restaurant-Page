const menu = () => {
    const menuContainer = document.createElement('div');

    const menuHeader = document.createElement('h2');
    menuHeader.innerText = 'OUR MENU';
    menuHeader.classList.add('menu-header');

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-container');

    const menuOne = document.createElement('div');
    menuOne.classList.add('menu-card');
    const menuOneImg = document.createElement('div');
    menuOneImg.classList.add('menu-img-1');
    const menuOneName = document.createElement('h5');
    menuOneName.innerText = 'Assorted Fried Rice and Chicken';

    menuOne.appendChild(menuOneImg);
    menuOne.appendChild(menuOneName);

    const menuTwo = document.createElement('div');
    menuTwo.classList.add('menu-card');
    const menuTwoImg = document.createElement('div');
    menuTwoImg.classList.add('menu-img-2');
    const menuTwoName = document.createElement('h5');
    menuTwoName.innerText = 'Chicken Burger';

    menuTwo.appendChild(menuTwoImg);
    menuTwo.appendChild(menuTwoName);

    const menuThree = document.createElement('div');
    menuThree.classList.add('menu-card');
    const menuThreeImg = document.createElement('div');
    menuThreeImg.classList.add('menu-img-3');
    const menuThreeName = document.createElement('h5');
    menuThreeName.innerText = 'Potato and Eggs';

    menuThree.appendChild(menuThreeImg);
    menuThree.appendChild(menuThreeName);

    const menuFour = document.createElement('div');
    menuFour.classList.add('menu-card');
    const menuFourImg = document.createElement('div');
    menuFourImg.classList.add('menu-img-4');
    const menuFourName = document.createElement('h5');
    menuFourName.innerText = 'Sea Food';

    menuFour.appendChild(menuFourImg);
    menuFour.appendChild(menuFourName);

    const menuFive = document.createElement('div');
    menuFive.classList.add('menu-card');
    const menuFiveImg = document.createElement('div');
    menuFiveImg.classList.add('menu-img-5');
    const menuFiveName = document.createElement('h5');
    menuFiveName.innerText = 'Pasta';

    menuFive.appendChild(menuFiveImg);
    menuFive.appendChild(menuFiveName);

    const menuSix = document.createElement('div');
    menuSix.classList.add('menu-card');
    const menuSixImg = document.createElement('div');
    menuSixImg.classList.add('menu-img-6');
    const menuSixName = document.createElement('h5');
    menuSixName.innerText = 'Cheese and Egg';

    menuSix.appendChild(menuSixImg);
    menuSix.appendChild(menuSixName);

    itemContainer.appendChild(menuOne);
    itemContainer.appendChild(menuTwo);
    itemContainer.appendChild(menuThree);
    itemContainer.appendChild(menuFour);
    itemContainer.appendChild(menuFive);
    itemContainer.appendChild(menuSix);
    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(itemContainer);

    return menuContainer;
};

export default menu();