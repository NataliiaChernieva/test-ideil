const search = document.querySelector('.search');
const searchInputBox = document.querySelector('.search-input-box');
const closeInInput = document.querySelector('.closeInInput')


search.addEventListener('click', function (e) {
    searchInputBox.classList.remove('visually-hidden');
    this.classList.add('visually-hidden');
})

closeInInput.addEventListener('click', function (e) {
    searchInputBox.classList.add('visually-hidden');
    search.classList.remove('visually-hidden');
} )