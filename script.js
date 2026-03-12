const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

function closeNavbar() {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    navbar.classList.remove("active");
}

menuIcon.onclick = function () {
    menuIcon.classList.toggle("fa-xmark");
    menuIcon.classList.toggle("fa-bars");
    navbar.classList.toggle("active");
};

function handleClick() {
    const resumePath = "./Resume/julia_resume__February.pdf";
    const downloadLink = document.createElement("a");

    downloadLink.href = resumePath;
    downloadLink.download = "julia_resume__February.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

window.handleClick = handleClick;

window.onscroll = function () {
    const scrollPosition = window.scrollY;

    sections.forEach(function (sec) {
        const sectionTop = sec.offsetTop - 150;
        const sectionHeight = sec.offsetHeight;
        const sectionId = sec.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(`header nav a[href="#${sectionId}"]`);

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

    if (header) {
        header.classList.toggle("sticky", scrollPosition > 100);
    }

    closeNavbar();
};

navLinks.forEach(function (link) {
    link.addEventListener("click", closeNavbar);
});

const typed = new Typed(".multiple-text", {
    strings: ["Software Developer", "Web Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
