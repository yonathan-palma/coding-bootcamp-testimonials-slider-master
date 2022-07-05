"use strict";

const btnPrevious = document.getElementById("previous")
const btnNext = document.getElementById("next");
const slider = document.querySelector(".slider-wraper");
const slider_conatainer = document.querySelectorAll(".slider_conatainer")


const sliderNavigateNext= ()=>{
    slider.scroll({
        left: slider.offsetWidth,
        behavior: 'smooth'
    })
}

const sliderNavigatePrevious = ()=>{
    slider.scroll({
        left: 0,
        behavior: 'smooth'
    })
}

window.addEventListener("keydown", (e)=>{
    if (e.code == 'ArrowRight') {
        sliderNavigateNext();
    }else if(e.code == 'ArrowLeft'){
        sliderNavigatePrevious();
    }
});

btnNext.addEventListener("click", sliderNavigateNext);

btnPrevious.addEventListener("click", sliderNavigatePrevious);