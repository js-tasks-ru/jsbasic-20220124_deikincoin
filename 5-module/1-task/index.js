function hideSelf() {
  
  let btn = document.querySelector('.hide-self-button')
  
  btn.addEventListener('click', hide)

  function hide() {
    btn.hidden = true
  }
  
}
