const navs = document.querySelectorAll(".nav")
const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")


open_btn.addEventListener('click',()=>{
    navs.forEach(nav_el =>nav_el.classList.add('visible'))
})
close_btn.addEventListener('click',()=>{
    navs.forEach(nav_el =>nav_el.classList.remove('visible'))
})