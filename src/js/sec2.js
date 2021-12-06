import secondSectionTemplate from '../tamplates/beauty-card.hbs';

const secondContainer = document.querySelector('.second-container-js')

const renderSecondSectionMarkup = data => {
    const markup = secondSectionTemplate(data);
    secondContainer.insertAdjacentHTML('afterbegin', markup)
}

fetch('http://localhost:3000/sec2').then(res=>res.json()).then(renderSecondSectionMarkup)