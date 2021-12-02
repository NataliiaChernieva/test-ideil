import secondSectionTemplate from '../tamplates/sec2-tmp.hbs'
import getSecondSectionData from '../js/api'

const secondContainer = document.querySelector('.second-container-js')

const renderFirstSectionMarkup = data => {
    const markup = secondSectionTemplate(data);
    secondContainer.insertAdjacentHTML('afterbegin', markup)
}


 getSecondSectionData().then(data=>renderFirstSectionMarkup(data))
// fetch('http://localhost:3000/sec2')
//     .then(res => res.json())
//     .then(data =>console.log(`data`, data))