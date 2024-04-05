const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');

let currentlySeclected = 0;

prevBtn.addEventListener('click', function(){
    galleryImgs[currentlySeclected].classList.remove("active");
    currentlySeclected--;
    galleryImgs[currentlySeclected].classList.add("active");
    nextBtn.disabled = false;

    if(currentlySeclected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function(){
    galleryImgs[currentlySeclected].classList.remove("active");

    currentlySeclected++;
    galleryImgs[currentlySeclected].classList.add("active");
    prevBtn.disabled = false;

    if(galleryImgs.length - 1 === currentlySeclected) {
        nextBtn.disabled = true;
    }
});