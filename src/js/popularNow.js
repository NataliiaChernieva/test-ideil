import popularNowTemplate from '../tamplates/popular-now-tmp.hbs';
import * as Api from '../js/api';

const popularNow = document.querySelector('.popular-now-js')

const renderPopularNowMarkup = data => {
    const markup = popularNowTemplate(data);
    popularNow.insertAdjacentHTML('afterbegin', markup)
}

fetch('http://localhost:3000/popular-now').then(res => res.json()).then(renderPopularNowMarkup);