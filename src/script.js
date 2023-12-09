// selected elements
var nextbutton = document.getElementsByClassName("next-button")[0];
var prevbutton = document.getElementsByClassName("prev-button")[0];
var carouselClass = document.getElementsByClassName("carousel-Class")[0]; // Typo: It should be "carouselClass" not "carousel-Class"

// global variables
var indexCount = 0;
var countTimer = 0; // Declare countTimer here to avoid reference error

// functions
var updateImg = function () {
    var translateValue = -indexCount * 100 + "%";
    carouselClass.style.transform = "translateX(" + translateValue + ")";
};

// next img function
var nextImageFunc = function () {
    if (indexCount < carouselClass.children.length - 1) {
        indexCount++;
    } else {
        indexCount = 0;
    }
    updateImg();
    countTimer = 0;
};

// prev img function
var prevImageFunc = function () {
    if (indexCount > 0) {
        indexCount--;
    } else {
        indexCount = carouselClass.children.length - 1; // Fix: Assign to indexCount, not carouselClass
    }
    updateImg();
    countTimer = 0;
};

// timer for next image
var timerFunc = function () {
    setInterval(function () {
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

// event listeners
nextbutton.addEventListener("click", nextImageFunc);
prevbutton.addEventListener("click", prevImageFunc);