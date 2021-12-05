import ukraineTemplate from '../tamplates/sec-tmp.hbs';

const ukraine = document.querySelector('.ukraine-js')

const renderUkraineMarkup = data => {
    const markup = ukraineTemplate(data);
    ukraine.insertAdjacentHTML('afterbegin', markup)
}


fetch('http://localhost:3000/ukraine').then(res => res.json()).then(renderUkraineMarkup);
