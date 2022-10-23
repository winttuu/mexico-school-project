function onActiveSlider(isNext) {
    const currentElementNumber = document.querySelector('.slider-item--active').id.replace('slider-', '');
    const totalPages = document.querySelectorAll('.slider-item').length;

    let toElement;
    if(isNext) {
        if(currentElementNumber < totalPages - 1) {
            toElement = document.getElementById(`slider-${parseInt(currentElementNumber) + 1}`);
            document.querySelector('.slider-item--active').classList.remove('slider-item--active');
            toElement.classList.add('slider-item--active');
        }

        if(currentElementNumber == totalPages - 1) {
            toElement = document.getElementById(`slider-0`);
            document.querySelector('.slider-item--active').classList.remove('slider-item--active');
            toElement.classList.add('slider-item--active');
        }
    } else {
        if(currentElementNumber > 0) {
            toElement = document.getElementById(`slider-${parseInt(currentElementNumber) - 1}`);
            document.querySelector('.slider-item--active').classList.remove('slider-item--active');
            toElement.classList.add('slider-item--active');
        }

        if(currentElementNumber == 0) {
            toElement = document.getElementById(`slider-${totalPages - 1}`);
            document.querySelector('.slider-item--active').classList.remove('slider-item--active');
            toElement.classList.add('slider-item--active');
        }
    }
}


function onActiveModal(contentNumber) {
    if(contentNumber == -1) {
        document.querySelector('.modal--active').classList.remove('modal--active');
        return;
    }

    document.querySelector('.modal').classList.add('modal--active');
    const contentList = document.querySelectorAll('.modal .content');
    contentList.forEach(item => item.classList.remove('content--active'));
    contentList[contentNumber].classList.add('content--active');
}


function goToSection(section) {
    const selectionSection = document.getElementById(section);
    selectionSection.scrollIntoView({ behavior: 'smooth', block: 'end'})
}


(() => {
    const loop = time => {
        setTimeout(() => {
            onActiveSlider(true);
            loop(time);
        }, time);
    };
    
    loop(4000);
})();






// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }