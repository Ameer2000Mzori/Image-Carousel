// selected elements
var nextbutton = document.getElementsByClassName("next-button")[0];
var prevbutton = document.getElementsByClassName("prev-button")[0];
var carouselClass = document.getElementsByClassName("carousel-Class")[0];
// gelobal varibales
var indexCount = 0;
// functions
var updateImg = function () {
    var translateValue = -indexCount * 100 + "%";
    carouselClass.style.transform = "translateX(".concat(translateValue, ")");
};
// next img function
var nextImageFunc = function () {
    if (indexCount < carouselClass.children.length - 1) {
        indexCount++;
    }
    else {
        indexCount = 0;
    }
    updateImg();
    countTimer = 0;
};
// prev img function
var prevImageFunc = function () {
    if (indexCount > 0) {
        indexCount--;
    }
    else {
        carouselClass = carouselClass.children.length - 1;
    }
    updateImg();
    countTimer = 0;
};
// timer for next image:
var countTimer = 0;
var timerFunc = function () {
    setInterval(function () {
        countTimer += 1;
        console.log(countTimer);
        if (countTimer > 5) {
            if (indexCount < carouselClass.children.length - 1) {
                indexCount++;
            }
            else {
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
