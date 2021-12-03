import allMaterialTemplate from '../tamplates/water-tmp.hbs'
import * as Api from '../js/api'

const allMaterial = document.querySelector('.all-material-js')

const renderAllMaterialMarkup = data => {
    const markup = allMaterialTemplate(data);
    allMaterial.insertAdjacentHTML('afterbegin', markup)
}

Api.getAllMaterialData()
    .then(data => renderAllMaterialMarkup(data))