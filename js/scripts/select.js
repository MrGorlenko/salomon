
class Select {
  constructor( element, state ) {
    this.element = element;
    this.state = state;
  }

  changeState() {
    this.state = !this.state
    if (this.state) {
      this.element.children[1].className = 'active'
    } else {
      this.element.children[1].className = 'unactive'
    }
  }

  selectOption(option) {
    this.option = option
    this.element.children[0].innerHTML = option
  }
}


select1 = new Select(document.querySelector('.select1'), false)
select2 = new Select(document.querySelector('.select2'), false)
select3 = new Select(document.querySelector('.select3'), false)


