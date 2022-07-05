"use strict";

const btnPrevious = document.getElementById("previous")
const btnNext = document.getElementById("next");
const slider = document.querySelector(".slider-wraper");
const slider_conatainer = document.querySelectorAll(".slider_conatainer")


const sliderNavigateNext= ()=>{
    // slider_conatainer.forEach((currentValue, currentIndex, listObj)=> {
    //     listObj[currentIndex].style.animation = "btnNext 1s ease-in 0s forwards"; 
    // });
    slider.scrollLeft += slider.offsetWidth;
}

const sliderNavigatePrevious = ()=>{
    // slider_conatainer.forEach((currentValue, currentIndex, listObj)=> {
    //     listObj[currentIndex].style.animation = "btnPrevious 1s ease-in 0s forwards"; 
    // });
    slider.scrollLeft -= slider.offsetWidth;
}

window.addEventListener("keydown", (e)=>{
    // e.preventDefault();
    if (e.code == 'ArrowRight') {
        sliderNavigateNext();
    }else if(e.code == 'ArrowLeft'){
        sliderNavigatePrevious();
    }
});

btnNext.addEventListener("click", sliderNavigateNext);

btnPrevious.addEventListener("click", sliderNavigatePrevious);