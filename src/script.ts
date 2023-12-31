// selected elements
const nextbutton = document.getElementsByClassName("next-button")[0];
const prevbutton = document.getElementsByClassName("prev-button")[0];
const carouselClass = document.getElementsByClassName(
  "carousel-Class"
)[0] as any;

// gelobal varibales
let indexCount = 0;

// functions
const updateImg = () => {
  const translateValue = -indexCount * 100 + "%";
  carouselClass.style.transform = `translateX(${translateValue})`;
};

// next img function
const nextImageFunc = () => {
  if (indexCount < carouselClass.children.length - 1) {
    indexCount++;
  } else {
    indexCount = 0;
  }
  updateImg();
  countTimer = 0;
};

// prev img function
const prevImageFunc = () => {
  if (indexCount > 0) {
    indexCount--;
  } else {
    carouselClass = carouselClass.children.length - 1;
  }
  updateImg();
  countTimer = 0;
};

// timer for next image:
let countTimer = 0;
const timerFunc = () => {
  setInterval(() => {
    countTimer += 1;
    console.log(countTimer);
    if (countTimer > 5) {
      if (indexCount < carouselClass.children.length - 1) {
        indexCount++;
      } else {
        indexCount = 0;
      }
      updateImg();
      countTimer = 0;
      console.log("next");
    }
  }, 1000);
};

timerFunc();
// eventlinsters

nextbutton.addEventListener("click", nextImageFunc);
prevbutton.addEventListener("click", prevImageFunc);
