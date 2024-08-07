const left = document.querySelector('#next') 
const right = document.querySelector('#prev')
const slider = document.querySelectorAll('#slider')

right.addEventListener('click', () => {
  slider.style.transform = `translateX(-500px)`;
})
