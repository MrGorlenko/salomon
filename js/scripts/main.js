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

let catalogMain = document.querySelectorAll('#catalogMain button');
let buttonsWidget1 = document.querySelectorAll('#buttonsWidget1 button'),
buttonsWidget2 = document.querySelectorAll('#buttonsWidget2 button'),
buttonsWidget3 = document.querySelectorAll('#buttonsWidget3 button');

switchButtons(catalogMain, 'toggle-button-active')
switchButtons(buttonsWidget1, 'active')
switchButtons(buttonsWidget2, 'active')
switchButtons(buttonsWidget3, 'active')
