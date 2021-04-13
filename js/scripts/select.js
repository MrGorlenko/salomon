
class Select {
  constructor( element, state ) {
    this.element = element;
    this.state = state;
  }

  test() {
    console.log('yes')
  }  

  changeState() {
    this.state = !this.state
    if (this.state) {
      this.element.children[0].className = 'active'
    } else {
      this.element.children[0].className = 'unactive'
    }
  }
}

select1 = new Select(document.querySelector('.select'), false)