let boton1 = document.querySelector('.boton1');
let card1 = document.querySelector('.card1');
let boton2 = document.querySelector('.boton2');
let card2 = document.querySelector('.card2');
let boton3 = document.querySelector('.boton3');
let card3 = document.querySelector('.card3');
let boton4 = document.querySelector('.boton4');
let card4 = document.querySelector('.card4');
let boton5 = document.querySelector('.boton5');
let card5 = document.querySelector('.card5');
let boton6 = document.querySelector('.boton6');
let card6 = document.querySelector('.card6');

let choose = 1

const changeOption = () => {
   choose == 1 ? (
      boton1.classList.value = 'boton1',
      card1.classList.value = 'content content-active'
   )
   : (
      boton1.classList.value = 'boton1',
      card1.classList.value = 'content'
   )

   choose == 2 ? (
      boton1.classList.value = 'boton2',
      card2.classList.value = 'content content-active'
   )
   : (
      boton2.classList.value = 'boton1',
      card2.classList.value = 'content'
   )

   choose == 3 ? (
      boton3.classList.value = 'boton3',
      card3.classList.value = 'content content-active'
   )
   : (
      boton3.classList.value = 'boton1',
      card3.classList.value = 'content'
   )

   choose == 4 ? (
      boton4.classList.value = 'boton4',
      card4.classList.value = 'content content-active'
   )
   : (
      boton4.classList.value = 'boton4',
      card4.classList.value = 'content'
   )

   choose == 5 ? (
      boton5.classList.value = 'boton5',
      card5.classList.value = 'content content-active'
   )
   : (
      boton5.classList.value = 'boton5',
      card5.classList.value = 'content'
   )

   choose == 6 ? (
      boton6.classList.value = 'boton6',
      card6.classList.value = 'content content-active'
   )
   : (
      boton6.classList.value = 'boton6',
      card6.classList.value = 'content'
   )
   }

boton1.addEventListener('click', () => {
   choose = 1
   changeOption()
})

boton2.addEventListener('click', () => {
   choose = 2
   changeOption()
})

boton3.addEventListener('click', () => {
   choose = 3
   changeOption()
})

boton4.addEventListener('click', () => {
   choose = 4
   changeOption()
})

boton5.addEventListener('click', () => {
   choose = 5
   changeOption()
})

boton6.addEventListener('click', () => {
   choose = 6
   changeOption()
})
