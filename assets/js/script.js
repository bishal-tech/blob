const mobileMenu = document.querySelector(".navbar-collapse");

// Get the toggle button element
const toggleButton = document.querySelector(".navbar-toggler");

// Function to toggle the mobile menu
function toggleMobileMenu() {
  mobileMenu.classList.toggle("show");
}

// Function to close the mobile menu
function closeMobileMenu() {
  mobileMenu.classList.remove("show");
}

// Event listener for the toggle button
toggleButton.addEventListener("click", toggleMobileMenu);

// Event listener for clicks outside the menu
document.addEventListener("click", function (event) {
  const targetElement = event.target;
  if (targetElement !== toggleButton && !mobileMenu.contains(targetElement)) {
    closeMobileMenu();
  }
});

// header color function
function setHeaderColor() {
  const header = document.getElementById("header");
  const pageTitle = document.title;
  const navlinks = document.querySelectorAll(".navbar-nav li a");
  const active = document.querySelector(".active");
  console.log(active);

  // Replace 'Home' with the title of your home page
  const isHomePage = pageTitle === "Home";

  if (isHomePage) {
    header.style.backgroundColor = "transparent";
    $(".navbar-toggler").on("click", function () {
      $(".navbar").toggleClass("bg-white");
      navlinks.forEach((link) => {
        link.style.color = "black";
      });
    });
  } else {
    header.style.backgroundColor = "white";
    // Loop through each navlink and set the color to black
    navlinks.forEach((link) => {
      link.style.color = "black";
      active.style.color = "#c070ff";
    });
  }
}

// Call the function when the page loads
window.onload = setHeaderColor;

$(document).ready(function () {
  // homepage mobile nav toggle

  // gallery slider is here
  $("#gallery_slider1").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $("#gallery_slider2").slick({
    dots: false,
    rtl: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Add custom buttons
  $(".price-prev").click(function () {
    $(".pricing-slider").slick("slickPrev");
  });

  $(".price-next").click(function () {
    $(".pricing-slider").slick("slickNext");
  });


  $(".pricing-slider").slick({
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: fa,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".flip-card-slider").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: fa,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});




// Get references to the parent and child elements
const parent = document.getElementById('parent');
const child1 = document.getElementById('slice1');
const child2 = document.getElementById('slice2');
const child3 = document.getElementById('slice3');

const slice1img = document.querySelector('#slice1img');
const slice2img = document.querySelector('#slice3img');
const slice3img = document.querySelector('#slice2img');

slice1img.addEventListener('mouseenter', () => {
  console.log('enter')
  child1.classList.add('yellow-bg');
  parent.classList.add('yellow-border');
});
slice1img.addEventListener('mouseleave', () => {
  console.log('out')
  child1.classList.remove('yellow-bg');
  parent.classList.remove('yellow-border');
});

slice2img.addEventListener('mouseenter', () => {
  console.log('enter')
  child2.classList.add('purple-bg');
  parent.classList.add('purple-border');
});
slice2img.addEventListener('mouseleave', () => {
  console.log('out')
  child2.classList.remove('purple-bg');
  parent.classList.remove('purple-border');
});

slice3img.addEventListener('mouseenter', () => {
  console.log('enter')
  child3.classList.add('sky-bg');
  parent.classList.add('sky-border');
});
slice3img.addEventListener('mouseleave', () => {
  console.log('out')
  child3.classList.remove('sky-bg');
  parent.classList.remove('sky-border');
});


// Add event listeners for mouseenter and mouseleave on the child element
child1.addEventListener('mouseenter', () => {
  parent.classList.add('yellow-border');
});
child1.addEventListener('mouseleave', () => {
  parent.classList.remove('yellow-border');
});

child2.addEventListener('mouseenter', () => {
  parent.classList.add('purple-border');
});
child2.addEventListener('mouseleave', () => {
  parent.classList.remove('purple-border');
});

child3.addEventListener('mouseenter', () => {
  parent.classList.add('sky-border');
});
child3.addEventListener('mouseleave', () => {
  parent.classList.remove('sky-border');
});
