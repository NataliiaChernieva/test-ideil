import allMaterialTemplate from '../tamplates/water-tmp.hbs';

const allMaterial = document.querySelector('.all-material-js')

const renderAllMaterialMarkup = data => {
    const markup = allMaterialTemplate(data);
    allMaterial.insertAdjacentHTML('afterbegin', markup)
}

fetch('http://localhost:3000/all-material').then(res => res.json()).then(renderAllMaterialMarkup);