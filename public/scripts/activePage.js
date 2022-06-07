const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(element => {
    if(element.href.includes(activePage)){
        element.classList.add('active-link')
    }
})
