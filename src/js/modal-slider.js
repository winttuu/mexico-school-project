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

}