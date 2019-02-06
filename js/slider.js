'use strict';

var slider = document.querySelector('.slider');

if (slider) {
  var sliderControls = slider.querySelectorAll('.slider__control');
  var sliderSlides = slider.querySelectorAll('.slider__item');

  for (var i = 0; i < sliderControls.length; i++) {
    sliderControls[i].addEventListener('click', function (event) {
      for (var j = 0; j < sliderControls.length; j++) {
        sliderControls[j].removeAttribute('disabled');
        sliderSlides[j].classList.remove('slider__item--active');
      }
      event.currentTarget.setAttribute('disabled', 'disabled');
      sliderSlides[Array.prototype.indexOf.call(
          event.currentTarget.parentElement.children, event.currentTarget
      )].classList.add('slider__item--active');
    });
  }
}
