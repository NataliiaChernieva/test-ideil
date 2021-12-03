import ukraineTemplate from '../tamplates/beauty-card.hbs';
import * as Api from '../js/api';

const ukraine = document.querySelector('.ukraine-js')

const renderUkraineMarkup = data => {
    const markup = ukraineTemplate(data);
    ukraine.insertAdjacentHTML('afterbegin', markup)
}


Api.getUkraineData()
    .then(data => renderUkraineMarkup(data))