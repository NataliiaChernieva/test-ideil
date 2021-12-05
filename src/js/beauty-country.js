import beautyCountryTemplate from '../tamplates/sec-tmp.hbs';

const beautyCountry = document.querySelector('.beauty-country-js')

const renderBeautyCountryMarkup = data => {
    const markup = beautyCountryTemplate(data);
    beautyCountry.insertAdjacentHTML('afterbegin', markup)
}

fetch('http://localhost:3000/beauty-country').then(res => res.json()).then(renderBeautyCountryMarkup);