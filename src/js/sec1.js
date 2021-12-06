import firstSectionTemplate from '../tamplates/sec1-tmp.hbs'

const slidesFirstContainer = document.querySelector('.first-container-js')
const mainSlide = document.querySelector('.slider-for');

const renderFirstSectionMarkup = data => {
    mainSlide.insertAdjacentHTML('afterbegin', "")
    const markup = firstSectionTemplate(data);
    mainSlide.insertAdjacentHTML('afterbegin', markup)
}

// fetch('http://localhost:3000/sec1').then(res=>res.json()).then(renderFirstSectionMarkup)

slidesFirstContainer.addEventListener('click', function (e){
    // if (e.target.nodeName !== 'div'|| e.target.nodeName !== 'h2' ) return;
    console.log(`object`, e.target.id)
    const id = e.target.id;
    fetch(`http://localhost:3000/sec1/${id}`).then(res => res.json()).then(renderFirstSectionMarkup);
})
