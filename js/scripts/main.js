let switchButtons = function(btns, activeClass){
  btns.forEach(function(element, index){
    element.addEventListener('click', function(index){
      btns.forEach(function(element){
        element.classList.remove(activeClass)
      })
      element.classList.add(activeClass)
    })
  })
};


let catalogMain = document.querySelectorAll('#catalogMain button'),
catalogMainMobile = document.querySelectorAll('#catalogMainMobile button');
let buttonsWidget1 = document.querySelectorAll('#buttonsWidget1 button'),
buttonsWidget2 = document.querySelectorAll('#buttonsWidget2 button'),
buttonsWidget3 = document.querySelectorAll('#buttonsWidget3 button');

switchButtons(catalogMain, 'toggle-button-active')
switchButtons(catalogMainMobile, 'toggle-button-active')
switchButtons(buttonsWidget1, 'active')
switchButtons(buttonsWidget2, 'active')
switchButtons(buttonsWidget3, 'active')

let sections = document.querySelectorAll('.section');

let burger = document.getElementById('burger'),
 burgerToggle = document.getElementById('burger-toggle'),
 burgerClose = document.getElementById('burger-close'),
 burgerMenus = document.querySelectorAll('.burger .firstLvl .first');

burgerClose.addEventListener('click', () => {
  burger.classList.add('burger__off');
  burger.classList.remove('burger__on');
  sections.forEach((section) => {
    section.classList.add('d-block');
    section.classList.remove('d-none');
  })
})

burgerToggle.addEventListener('click', () => {
  sections.forEach((section) => {
    setTimeout(()=> {
      section.classList.add('d-none');
      section.classList.remove('d-block');
    }, 400)
    
  })
  burger.classList.add('burger__on');
  burger.classList.remove('burger__off');
})

burgerMenus.forEach(function(elem){
  elem.addEventListener('click', function(e){
    if (elem.classList.contains('on')){
      elem.classList.remove('on')
      elem.classList.add('off')
      elem.children[1].classList.add('secondLvlOff')
      elem.children[1].classList.remove('secondLvlOn')
    } else {
      elem.classList.remove('off')
      elem.classList.add('on')
      elem.children[1].classList.add('secondLvlOn')
      elem.children[1].classList.remove('secondLvlOff')
    }
  })
})
