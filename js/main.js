/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav__menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
};

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav__menu");
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => { n.addEventListener("click", linkAction) })


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header")
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    breakpoints: {
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

/*==================== PRODUCTS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove("products__active")
        })
        target.classList.add("products__active")

        tabs.forEach(tab => {
            tab.classList.remove("products__active")
        })
        tab.classList.add("products__active")
    });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*=============== CART ===============*/
const cart = document.getElementById("cart");
const cartShop = document.getElementById("cart-shop");
const cartClose = document.getElementById("cart-close");

/*===== SHOW CART =====*/
if (cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add("show-cart")
    })
};

/*===== HIDDEN CART =====*/
if (cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove("show-cart")
    })
}

/*==================== LOGIN ====================*/
const loginViews = document.querySelector(".logins__modal");
const loginBtns = document.querySelector(".login__btn");
const loginCloses = document.querySelector(".logins__modal-close");
const submitBtn = document.querySelector(".logins__button");

if (loginBtns) {
    loginBtns.addEventListener("click", () => {
        loginViews.classList.add("active-modal")
    })
}

if (loginCloses) {
    loginCloses.addEventListener("click", () => {
        loginViews.classList.remove("active-modal")
    })
}

if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        loginViews.classList.remove("active-modal")
    })
}

