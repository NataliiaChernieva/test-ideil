import firstSectionTemplate from '../tamplates/sec1-tmp.hbs'

const firstContainer = document.querySelector('.first-container')

const renderFirstSectionMarkup = data => {
    const markup = firstSectionTemplate(data);
    firstContainer.insertAdjacentHTML('afterbegin', markup)
}