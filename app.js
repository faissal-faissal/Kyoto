let btnHamburger = document.querySelector('.nav-hamburger');
let btnMenuNav = document.querySelector('.liste-nav');


btnHamburger.addEventListener('click', presentation);

function presentation() {
    btnHamburger.classList.toggle('active');
    btnMenuNav.classList.toggle('active');
}

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(function(item){
    item.addEventListener('click', function() {
        btnMenuNav.classList.toggle('active')
        btnHamburger.classList.toggle('active');
    })
})