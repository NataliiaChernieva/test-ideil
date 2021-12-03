import beautyCountryTemplate from '../tamplates/beauty-card.hbs';
import * as Api from '../js/api';

const beautyCountry = document.querySelector('.beauty-country-js')

const renderBeautyCountryMarkup = data => {
    const markup = beautyCountryTemplate(data);
    beautyCountry.insertAdjacentHTML('afterbegin', markup)
}


Api.getBeautyCountryData()
    .then(data => renderBeautyCountryMarkup(data))