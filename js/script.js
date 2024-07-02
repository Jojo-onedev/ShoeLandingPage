let menu = document.querySelector('.nav-menu');
let openIcon = document.querySelector('.nav-menu');
let closeIcon = document.querySelector('.nav-menu');

openIcon.addEventListener('click',()=>{
    if(!menu.classList.contains('open')){
        menu.classList.add('open')
    }else{
        menu.classList.remove('open')
    }
})