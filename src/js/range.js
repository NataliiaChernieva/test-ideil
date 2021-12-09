import rangeCardTemplate from '../tamplates/range-card.hbs'

const rangeSlider = document.querySelector('.range-slider-js')

const renderRangeMarkup = result => {
    const markup = rangeCardTemplate(result);
    rangeSlider.insertAdjacentHTML('afterbegin', markup)
}

fetch('http://localhost:3000/range')
    .then(res => res.json())
    .then(renderRangeMarkup)
    // .then(
    //     new Glide('#g4', {
    //     type: 'carousel',
    //     perView: 3,
    //   }).mount()
    // )
