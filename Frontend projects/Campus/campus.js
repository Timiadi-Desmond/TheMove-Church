const sidemenu = document.getElementById('sidemenu')
const overlay = document.querySelector(".overlay");

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
    overlay.classList.remove("active");

}
function openmenu(){
    sidemenu.style.right = '0'
    overlay.classList.add("active");
}







