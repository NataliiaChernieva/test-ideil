import Glide from '@glidejs/glide/dist/glide.modular.esm'

const focus = new Glide('.long-focus', {
          type: 'carousel',
          autoplay: 3000,
          perView: 1,
        }).mount();
const range = new Glide('.range-slider', {
          type: 'carousel',
          perView: 3,
        }).mount();
  new Glide('.popular-now', {
          type: 'carousel',
          perView: 4,
          gap: 30,
        }).mount();
