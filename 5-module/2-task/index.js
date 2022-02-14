function toggleText() {
  
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  btn.addEventListener('click', toggleHide);

  function toggleHide() {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
    } else {
      text.hidden = 'true';
    }
  }

}
