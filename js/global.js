const humberger = document.getElementById("humbergerMenu");
const navbar =  document.getElementById("navbarMenu");

humberger.addEventListener('click', ()=>{
    humberger.classList.toggle('active');
    navbar.classList.toggle('active');
});