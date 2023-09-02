"use strict";

let i = 0; // Starting point

const images = [];
const time = 5000; // change image every 10 seconds

// Image list

images[0] = "../images/image1.jpg";
images[1] = "../images/image2.jpg";
images[2] = "../images/image3.jpg";
images[3] = "../images/image4.jpg";
images[4] = "../images/image5.jpg";

// Change Image
function changeImg() {
  document.getElementById("slide").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

// Adding heading animation

const heading = document.querySelector(".span-heading");

function addAnimation() {
  heading.classList.add("heading--animation");
}

window.onload = function () {
  addAnimation();
  changeImg();
};

// Page Navigation

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// Displaying read more on click

const btnReadMore = document.querySelector(".btn-read-more");
const btnLink = document.querySelector(".btn-link");
const sectionToDisplay = document.querySelector(".section-hidden");

btnReadMore.addEventListener("click", function () {
  sectionToDisplay.classList.toggle("hidden");

  if (sectionToDisplay.classList.contains("hidden")) {
    btnReadMore.innerHTML = "Read more &DownArrow;";
    btnLink.setAttribute("href", "#section-hidden");
  } else {
    btnReadMore.innerHTML = "Read less &UpArrow;";
    btnLink.setAttribute("href", "#section--1");
  }
});

// Tabs

/* Moj pokušaj
const tabs = document.querySelector(".tabs");
const btnTab = document.querySelectorAll(".btn-tab");
const btnTabOne = document.querySelector(".tab-1");
const btnTabTwo = document.querySelector(".tab-2");
const btnTabThree = document.querySelector(".tab-3");
const btnTabFour = document.querySelector(".tab-4");

const productCard = document.querySelectorAll(".product__card");
const productCardOne = document.querySelector(".product__card-one");
const productCardTwo = document.querySelector(".product__card-two");
const productCardThree = document.querySelector(".product__card-three");
const productCardFour = document.querySelector(".product__card-four");

/*
btnTabOne.addEventListener("click", function () {
  btnTab.forEach(function () {
    btnTab.classList.remove("btn-tab-active");
  });

  productCardOne.classList.remove("hidden");
  productCardOne.classList.add("product-card--active");

  productCardTwo.classList.add("hidden");
  productCardThree.classList.add("hidden");
  productCardFour.classList.add("hidden");
});
*/

const buttons = document.querySelectorAll(".btn-tab");
const productCard = document.querySelectorAll(".product__card");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("btn-tab--active"));
    // Add active class to the clicked button
    button.classList.add("btn-tab--active");

    // Hide all tab containers
    productCard.forEach((tab) => tab.classList.add("hidden"));

    // Show the selected tab container
    const productId = button.getAttribute("data-tab");
    document.getElementById(productId).classList.remove("hidden");
  });
});

// Go to top button

const showOnPx = 300;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

// Event Listener za Scroll

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

const goToTop = () => {
  // Varijabla sa funkcijom gdje se selektuje body(vrh stranice) preko .scrollIntoView.
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop);

// Menu icon for smaller screens
/*
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav__links");

  // Function to update navigation links display based on screen width
  function updateNavDisplay() {
    if (window.innerWidth <= 600) {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  }

  // Toggle the navigation links when the menu icon is clicked
  navToggle.addEventListener("click", function () {
    if (navLinks.style.display === "block" || navLinks.style.display === "") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  });

  // Initial check on page load
  updateNavDisplay();

  // Listen for window resize events
  window.addEventListener("resize", updateNavDisplay);
});
*/
