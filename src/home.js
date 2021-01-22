const Home = () => {
    const banner = document.createElement('div');
    banner.classList.add('bg-image');

    const bannerTitle = document.createElement('h1');
    bannerTitle.innerText = 'We provide meals specially for you and excellent customer service';

    const button = document.createElement('button');
    button.classList.add('btn-menu');
    button.innerText = 'VIEW MENU';

    banner.appendChild(bannerTitle);
    banner.appendChild(button);

    return banner;
};

export default Home();
