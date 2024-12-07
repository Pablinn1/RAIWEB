const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

// btnNext.addEventListener('click', alert('oi'))
// btnPrev.addEventListener('click', prevSlider())


// function proximo(){
//   imagem_0 = document.getElementById('slide_0')
//   imagem_1 = document.getElementById('slide_1')
//   imagem_0.style.opacity = 0;
//   imagem_1.style.opacity = 1;
// }