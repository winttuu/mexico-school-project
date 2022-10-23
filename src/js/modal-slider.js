function onHandlerModalSlider(id, isNext) {
    const slider = document.getElementById(`${id}`);
    
    let currentSliderItemSelected = -1;
    const components = slider.querySelectorAll('.modal-slider-image')


    Array
        .from(components)
        .forEach((el, index) => {
            const regex = new RegExp('modal-slider-image--active');
            if(regex.test(el.classList.value)) {
                currentSliderItemSelected = index;
            }
        })
    

    if(isNext) {
        components.forEach(el => el.classList.remove('modal-slider-image--active'));

        if((currentSliderItemSelected + 1) >= components.length) {
            currentSliderItemSelected = 0;
            components[currentSliderItemSelected].classList.add('modal-slider-image--active');
        } else {
            components[currentSliderItemSelected + 1].classList.add('modal-slider-image--active');
        }
        
    }


    if(!isNext) {
        components.forEach(el => el.classList.remove('modal-slider-image--active'));

        if((currentSliderItemSelected - 1) < 0) {
            currentSliderItemSelected = components.length - 1;
            components[currentSliderItemSelected].classList.add('modal-slider-image--active');
        } else {
            components[currentSliderItemSelected - 1].classList.add('modal-slider-image--active');
        }
    }








    // const currentElementNumber = document.querySelector('.slider-item--active').id.replace('slider-', '');
    // const totalPages = document.querySelectorAll('.slider-item').length;

    // let toElement;
    // if(isNext) {
    //     if(currentElementNumber < totalPages - 1) {
    //         toElement = document.getElementById(`slider-${parseInt(currentElementNumber) + 1}`);
    //         document.querySelector('.slider-item--active').classList.remove('slider-item--active');
    //         toElement.classList.add('slider-item--active');
    //     }

    //     if(currentElementNumber == totalPages - 1) {
    //         toElement = document.getElementById(`slider-0`);
    //         document.querySelector('.slider-item--active').classList.remove('slider-item--active');
    //         toElement.classList.add('slider-item--active');
    //     }
    // } else {
    //     if(currentElementNumber > 0) {
    //         toElement = document.getElementById(`slider-${parseInt(currentElementNumber) - 1}`);
    //         document.querySelector('.slider-item--active').classList.remove('slider-item--active');
    //         toElement.classList.add('slider-item--active');
    //     }

    //     if(currentElementNumber == 0) {
    //         toElement = document.getElementById(`slider-${totalPages - 1}`);
    //         document.querySelector('.slider-item--active').classList.remove('slider-item--active');
    //         toElement.classList.add('slider-item--active');
    //     }
    // }
}