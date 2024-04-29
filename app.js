// Step 1: Get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

let colorPickerDom = document.getElementById('colorSelector');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

colorPickerDom.addEventListener('change', function() {
    let color = this.value;
    document.body.style.color = color; 
});

document.querySelectorAll('.colorButton').forEach(button => {
    button.addEventListener('click', function() {
        let color = this.dataset.color;
        changeTextColor(color);
    });
});
function changeTextColor(color) {
    document.body.style.color = color;
}

SliderDom.querySelectorAll('.item img').forEach(img => {
    img.addEventListener('click', function() {
       
    });
});

function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}
