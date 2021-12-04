import secondSectionTemplate from '../tamplates/sec2-tmp.hbs';
import * as Api from '../js/api';

const secondContainer = document.querySelector('.second-container-js')

const renderSecondSectionMarkup = data => {
    const markup = secondSectionTemplate(data);
    secondContainer.insertAdjacentHTML('afterbegin', markup)
}

fetch('http://localhost:3000/sec2').then(res=>res.json()).then(renderSecondSectionMarkup)