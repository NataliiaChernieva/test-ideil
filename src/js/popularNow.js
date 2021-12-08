import popularNowTemplate from '../tamplates/popular-now-tmp.hbs';
import Glide from '@glidejs/glide/dist/glide.modular.esm'

const popularNow = document.querySelector('.popular-now-js')

const renderPopularNowMarkup = data => {
    const markup = popularNowTemplate(data);
    popularNow.insertAdjacentHTML('afterbegin', markup)
}

fetch('http://localhost:3000/popular-now').then(res => res.json()).then(renderPopularNowMarkup);

// new Glide('.popular-now', {
//   type: 'carousel',
//   perView: 4,
//   gap: 30,
// }).mount();