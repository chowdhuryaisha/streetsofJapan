const open_button = document.getElementById('open-btn')
const close_button = document.getElementById('close-btn')
const container = document.querySelector('.container')

open_button.addEventListener('click', () => container.classList.add('show-nav'))
close_button.addEventListener('click', () => container.classList.remove('show-nav'))


