import ukraineTemplate from '../tamplates/ukraine.hbs';

const ukraine = document.querySelector('.ukraine-js')
const ukraineTwo = document.querySelector('.ukraine-js-two')

const renderUkraineMarkup = data => {
    const markup = ukraineTemplate(data);
    ukraine.insertAdjacentHTML('afterbegin', markup)
}

const renderUkraineTwoMarkup = data => {
    const markup = ukraineTemplate(data);
    ukraineTwo.insertAdjacentHTML('beforeend', markup)
}


fetch('http://localhost:3000/ukraine').then(res => res.json()).then(renderUkraineMarkup);
fetch('http://localhost:3000/ukraine-two').then(res => res.json()).then(renderUkraineTwoMarkup);
