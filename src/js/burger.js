document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault();
    // this.classList.toggle('is-active')
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active')
        document.querySelector('.burger-menu').classList.remove('menu-active');
    } else {
        this.classList.add('is-active')
        document.querySelector('.burger-menu').classList.add('menu-active');
    }
})