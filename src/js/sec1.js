import firstSectionTemplate from '../tamplates/sec1-tmp.hbs'
import * as Api from '../js/api'

const firstContainer = document.querySelector('.first-container-js')

const renderFirstSectionMarkup = data => {
    const markup = firstSectionTemplate(data);
    firstContainer.insertAdjacentHTML('afterbegin', markup)
}

Api.getFirstSectionData()
    .then(data => renderFirstSectionMarkup(data))
    
