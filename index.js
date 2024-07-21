currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;


function next(){
    if(totalSlides<currentSlideID){
        currentSlideID++;
        showSlide();
    }

}

function prev(){
    if(currentSlideID>1){
        currentSlideID--;
        showSlide();
    }
    

}

function showSlide(){
    slides = document.getElementById('slider').getElementsByTagName('li')
    for(let index=0;index<totalSlides; index++){
        const element = slides[index];
        if(currentSlideID===index+1){
            element.classList.remove('hidden')
        }
        else{
            element.classList.add('hidden')

        }
    }
}

//selectng side navabar,menuicon

var sidenav= document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")
menuicon.addEventListener("click",function()
{
   sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

var topnav= document.getElementById("topnav")
var closetop=document.getElementById("closetop")
var topbar =document.getElementById("topbar")

closetop.addEventListener("click",function(){
    topnav.classList.remove("topbar")
    
})