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
        },
      },
    ],
  });
});
