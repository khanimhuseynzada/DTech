//JS is used to check errors that might occur while submitting the form
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const button = document.getElementById("button");
const blankError = "Input cannot be empty...";
const numericError = "Input should contain only ";
const emailError = "Input should contain an email";

button.addEventListener("click", errorCheck);

function errorCheck() {
  event.preventDefault();

  if (name.value == "") {
    name.setAttribute("placeholder","name "+ blankError);
  } else if (hasNumber(name.value)) {
    name.value = "";
    name.setAttribute("placeholder", numericError);

  }

  if (email.value == "") {
    email.setAttribute("placeholder", "email "+ blankError);
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value
    )
    
  ) {
    email.value = "";
    email.setAttribute("placeholder", emailError);
  }
  if (number.value == "") {
    number.setAttribute("placeholder", "number "+ blankError);
  } else if (isNaN(number.value)) {
    number.value = "";
    number.setAttribute("placeholder", numericError +" numbers");
  }
}



//Jquery is used for swiper
var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// and for mouse over functions
$(document).ready(function () {
  AOS.init();
  $(".heading-link").on({
    mouseover: function () {
      $(this)
        .css("background-color", "var(--green-color")
        .css("color", "var(--white-color");
    },
    mouseleave: function () {
      $(this)
        .css("background-color", "rgba(242,242,242,0)")
        .css("color", "var(--dark-blue-color");
    },
  });

  $("#product1").on({
    mouseover: function () {
      $(this).css({
        "background-image":
          "linear-gradient(rgba(25, 42, 56, 0.6),rgba(25, 42, 56, 0.6)), url(images/web-bg.jpg)",
        "background-size": "cover",
      });
    },
    mouseleave: function () {
      $(this).css({
        "background-color": "var(--dark-blue-color)",
        "background-image": "none",
      });
    },
  });

  $("#product2").on({
    mouseover: function () {
      $(this).css({
        "background-image":
          "linear-gradient(rgba(25, 42, 56, 0.6),rgba(25, 42, 56, 0.6)), url(images/game-bg.jpg)",
        "background-size": "cover",
      });
    },
    mouseleave: function () {
      $(this).css({
        "background-color": "var(--dark-blue-color)",
        "background-image": "none",
      });
    },
  });

  $("#product3").on({
    mouseover: function () {
      $(this).css({
        "background-image":
          "linear-gradient(rgba(25, 42, 56, 0.6),rgba(25, 42, 56, 0.6)), url(images/mob-bg.jpg)",
        "background-size": "cover",
      });
    },
    mouseleave: function () {
      $(this).css({
        "background-color": "var(--dark-blue-color)",
        "background-image": "none",
      });
    },
  });

  $("#product4").on({
    mouseover: function () {
      $(this).css({
        "background-image":
          "linear-gradient(rgba(25, 42, 56, 0.8),rgba(25, 42, 56, 0.8)), url(images/app-bg.jpg)",
        "background-size": "cover",
      });
    },
    mouseleave: function () {
      $(this).css({
        "background-color": "var(--dark-blue-color)",
        "background-image": "none",
      });
    },
  });
});
