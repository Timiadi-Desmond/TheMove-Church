const sidemenu = document.getElementById('sidemenu')
const overlay = document.querySelector(".overlay");

function closemenu(){
    sidemenu.style.right = '-400px'
    overlay.classList.remove("active");

}
function openmenu(){
    sidemenu.style.right = '0'
    overlay.classList.add("active");
}
