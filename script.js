let menu = document.querySelector("#menu")
let cross = document.querySelector("#cross")
menu.addEventListener('click', () => {
  menu.style.display = "none"
  cross.style.display = "block"
  gsap.to(cross, {
    opacity: 1,
    x: -6,
    duration: 0.3
  })
  let tl = gsap.timeline()

tl.to('.hidden',{
  y: 390,
  duration: 0.6,
})
 tl.to('.hidden a',{
  opacity: 1,
  stagger: 0.1,
  y: 5
})
})

cross.addEventListener('click', () => {
  menu.style.display = "block"
  cross.style.display = "none"
  gsap.to(cross,{
    x: 6
  })
  gsap.to(menu, {
    opacity: 1,
    duration: 0.3
  })
  let tl = gsap.timeline()
  tl.to('.hidden', {
    y: 0,
    duration: 0.6
  })
  tl.to('.hidden a', {
    opacity: 0,
    stagger: 0.1
  })
})