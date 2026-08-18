const sidemenu = document.getElementById('sidemenu')

window.addEventListener('scroll', () =>{
    const navbar = document.getElementById('navbar')
    if(window.scrollY > 50){
        navbar.classList.add('scrolled')
    }
    else{
        navbar.classList.remove('scrolled')
    }
})

function closemenu(){
    sidemenu.style.right = '-400px'
}
function openmenu(){
    sidemenu.style.right = '0'
}



