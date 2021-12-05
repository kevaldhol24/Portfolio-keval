// =====navbar toggler====
var navbar_toggler = document.querySelector(".navbar-toggler");
var navbar_color = document.querySelector(".navbar");
navbar_toggler.addEventListener("click", function() {
    navbar_toggler.classList.toggle("close_button");
    navbar_color.classList.toggle("navbar_bg_color");
})

var eduskills = document.getElementById("eduskills")
var skillbars = document.getElementsByClassName("skill_bar");

// ====preloader====
var preldr = document.getElementById("preloader")

function preloader() {
    preldr.style.display = "none";
}

// navbarhide=====
let navlink = document.querySelectorAll(".nav-link");
let navbarCollapse = document.querySelector(".navbar-collapse.collapse");
navlink.forEach(function(a) {
    a.addEventListener("click", function() {
        navbar_toggler.classList.toggle("close_button");
        navbar_color.classList.toggle("navbar_bg_color");
        navbarCollapse.classList.remove("show")
    })
})
var skill_bar_filled = false;
var navbar = document.querySelector(".navbar");
window.onscroll = function() {

    if (document.documentElement.scrollTop > 4) {
        navbar.classList.add("navbar_scrolled");
    } else {
        navbar.classList.remove("navbar_scrolled")
    }

    let dist = document.documentElement.scrollTop - eduskills.offsetTop
    console.log(dist)

    // =====skillbar====
    if (skill_bar_filled === false) {
        if (window.innerWidth > 768 && dist > -400) {
            Object.keys(skillbars).forEach(Element => {
                skillbars[Element].classList.add("fill_color")
            })
        } else if ((window.innerWidth > 576 && window.innerWidth < 767) && dist > -200) {
            Object.keys(skillbars).forEach(Element => {
                skillbars[Element].classList.add("fill_color")
            })
        } else if (dist > 0) {
            Object.keys(skillbars).forEach(Element => {
                skillbars[Element].classList.add("fill_color")
            })
        }
    }
}