import fourthSectionTemplate from '../tamplates/sec4-tmp.hbs';

const fourthContainer = document.querySelector('.fourth-sec-js');
const fourthContainerTwo = document.querySelector('.fourth-sec-js-two');

const renderFourthSectionMarkup = data => {
    const markup = fourthSectionTemplate(data);
    fourthContainer.insertAdjacentHTML('afterbegin', markup)
}

const renderFourthSectionTwoMarkup = data => {
    const markup = fourthSectionTemplate(data);
    fourthContainerTwo.insertAdjacentHTML('afterbegin', markup)
}

fetch('http://localhost:3000/sec4').then(res => res.json()).then(renderFourthSectionMarkup)
fetch('http://localhost:3000/sec42').then(res=>res.json()).then(renderFourthSectionTwoMarkup)