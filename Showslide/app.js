let slideIndex=1

// control the next prev button
function plauside(n){
    slideShow(slideIndex+=n);
}
// Thumbainail image control
function currentslide(n){
    slideShow(slideIndex=n);
}
// function slideShow(n){
//     let slide=document.getElementsByClassName("myslide");
//     let dot=document.getElementsByClassName("dot");
//     for(let i=0; i<slide.length; i++){
//         slide[i].style.display="none"
//     }
//     for(let i=0; i<dot.length; i++){
//         dot[i].className=dot[i].className.replace("active", " ")
//     }
//     if(slideIndex>slide.length){
//         slideIndex=1;
//     }
//     if(slideIndex<1){
//         slideIndex=slide.length;
//     }
//     slide[slideIndex-1].style.display="block";
//     dot[slideIndex-1].className+=" active";
// }
// slideShow(slideIndex);

// Auto slide 
let slideautoIdx=0;
function autoslide(){
    let slide=document.getElementsByClassName("myslide");
    let dot=document.getElementsByClassName("dot");
    for(let i=0; i<slide.length; i++){
        slide[i].style.display="none";
    }
    for(let i=0; i<dot.length; i++){
        dot[i].className=dot[i].className.replace(" active", " ");
    }
    slideautoIdx++;
    if(slideautoIdx>slide.length){
        slideautoIdx=1
    }
    slide[slideautoIdx-1].style.display="block";
    dot[slideautoIdx-1].className+=" active";
    setTimeout(autoslide, 2000);
}
autoslide();

