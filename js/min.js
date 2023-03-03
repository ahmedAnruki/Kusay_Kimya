function sohwNav() {
  document.querySelector(".bars i").classList.toggle("fa-x");
  document.querySelector(".bars i").classList.contains("fa-x")
    ? document.querySelector(".navbarNav").classList.add("active")
    : document.querySelector(".navbarNav").classList.remove("active");
}

const slideElement = document.querySelector(".slide-box");

let slideImges = Array.from(slideElement.children);

let solidCounter = 0;

function removeActiveClasses() {
  slideImges.map((ele) => {
    ele.classList.remove("active");
  });
}

function solid() {
  removeActiveClasses();
  slideImges[solidCounter].classList.add("active");

  if (solidCounter >= 2) {
    solidCounter = 0;
  } else {
    solidCounter++;
  }

  setTimeout(() => {
    solid();
  }, 5000);
}

solid();

function solidLeft() {

  if (solidCounter >= 2) {
    solidCounter = 0;
  } else {
    solidCounter++;
  }

  removeActiveClasses();
  slideImges[solidCounter].classList.add("active");
}

function solidRight() {

  if (solidCounter >= 2) {
    solidCounter = 0;
  } else {
    solidCounter++;
  }
  
  removeActiveClasses();
  slideImges[solidCounter].classList.add("active");
}
