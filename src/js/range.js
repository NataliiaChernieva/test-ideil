import rangeCardTemplate from '../tamplates/range-card.hbs'

const rangeSlide = document.querySelector('.range-slide')

const renderMarkup = result => {
    const markup = rangeCardTemplate(result);
    rangeSlide.insertAdjacentHTML('afterbegin', markup)
}


