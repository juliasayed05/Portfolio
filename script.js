
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    menuIcon.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = function () {

    sections.forEach(function(sec) {

        let scrollPosition = window.scrollY;
        let sectionTop = sec.offsetTop - 150;
        let sectionHeight = sec.offsetHeight;
        let sectionId = sec.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {

            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            document.querySelector("header nav a[href*=" + sectionId + "]")
            .classList.add("active");
        }

    });

    let header = document.querySelector("header");

    if (window.scrollY > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }


menuIcon.classList.remove('fa-xmark');
menuIcon.classList.add('fa-bars');
navbar.classList.remove('active');
};

const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


