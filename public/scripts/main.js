// Hamburger button

const hamburger = document.querySelector('.hamburger-button');
const sections = document.querySelector('.sections');
const overlay = document.querySelector('#overlay');


hamburger.addEventListener('click', () => {
    sections.classList.toggle('active');
    overlay.classList.toggle('overlay');
    hamburger.classList.toggle('hamburger-fixed')
})

// Slice text if too long

const newsText = document.querySelectorAll('.news-text'); 
newsText.forEach(element => {
    if(element.textContent.split('').length > 200) {
        element.textContent = element.textContent.slice(0, 200) + '...'
    }
})
