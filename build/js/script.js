// Open/close menu

document.addEventListener('DOMContentLoaded', function () {
    var navList = document.querySelector(".nav");
    var navButton = document.querySelector(".button-menu");
    var navContent = document.querySelector(".nav__list");
    var navOpened = document.querySelector(".nav");
  
    navButton.addEventListener("click", function () {
        var listHeight = navContent.offsetHeight;

        if (navList.classList.contains("nav--closed")) {
            navList.classList.remove("nav--closed");
            navList.classList.add("nav--opened");
            navOpened.style.height = listHeight + "px";
            navButton.classList.remove("button-menu--open");
            navButton.classList.add("button-menu--close");
        } else {
            navList.classList.add("nav--closed");
            navList.classList.remove("nav--opened");
            navOpened.style.height = "0px";
            navButton.classList.remove("button-menu--close");
            navButton.classList.add("button-menu--open");
        }
    });
});

// Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slider__item");
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Toggles

var toggles = document.querySelectorAll(".toggles__item");

    toggles.forEach(function (element) {
        element.addEventListener("click", function (element) {
            var content = this.querySelector(".toggles__content");
            var toggle = this.querySelector(".toggles__button");
            var toggleText = document.querySelector(".toggles__text");
            var heightContent = toggleText.offsetHeight;

            if (content.classList.contains("active")) {
                content.classList.remove("active");
                toggle.classList.remove("toggles__button--active");
                content.style.height = "0px";
            }

            else {
                content.classList.add("active");
                toggle.classList.add("toggles__button--active");
                content.style.height = heightContent + "px";
            }
        })
    });

// Filter

var filterActive = ''

function filterProducts(category) {
    if (filterActive != category) {
        var elements = document.querySelectorAll(".portfolio-filter__content-item");

        elements.forEach(function (item, i) {
            item.classList.add("not-active");
        });

        var activeElements = document.querySelectorAll(`[data-filter="${category}"]`);

        activeElements.forEach(function (item) {
            item.classList.remove("not-active");
        });

        filterActive = category;
    }
}

var buttons = document.querySelectorAll(".portfolio-filter__button");

buttons.forEach(function (el) {
    el.addEventListener('click', function (e) {
        var curretTarget = event.target.dataset.button;

        buttons.forEach(function (item) {
            item.classList.remove("portfolio-filter__button--active");
            event.target.classList.add("portfolio-filter__button--active");
        })
        filterProducts(curretTarget);
    })
});

var buttonAll = document.querySelector(".button-all");
var elements = document.querySelectorAll(".portfolio-filter__content-item");

buttonAll.onclick = function () {
    elements.forEach(function (item, i) {
        item.classList.remove("not-active");
    });

    filterActive = "all";
};

