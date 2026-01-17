const humberger = document.getElementById("humbergerMenu");
const navbar =  document.getElementById("navbarMenu");

humberger.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
});