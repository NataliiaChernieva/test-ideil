import firstSectionTemplate from '../tamplates/sec1-tmp.hbs'

const firstContainer = document.querySelector('.first-container-js')

const renderFirstSectionMarkup = data => {
    const markup = firstSectionTemplate(data);
    firstContainer.insertAdjacentHTML('afterbegin', markup)
}

// fetch('http://localhost:3000/sec1').then(res=>res.json()).then(renderFirstSectionMarkup)