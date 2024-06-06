
let menu = document.getElementById('menu')
let mobile = document.getElementById('mobile')
let overlay = document.getElementById('overlay')
menu.addEventListener('click', ()=>{
    mobile.classList.add('abrir-menu')
})

mobile.addEventListener('click', ()=>{
    mobile.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    mobile.classList.remove('abrir-menu')
})