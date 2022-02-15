function highlight(table) {
  
  let row = table.getElementsByTagName('tr');

  let listClass = {
    m: 'male',
    f: 'female',
    true: 'available', 
    false: 'unavailable'
  };

  for (let i = 1; i < row.length; i++) {
    
    let age = row[i].cells[1].innerHTML;
    let gender = row[i].cells[2];
    let status = row[i].cells[3];

    if (status.hasAttribute('data-available')) {
      el = status.getAttribute('data-available');
      status.parentNode.classList.add(listClass[el])
    } else {
      status.parentNode.hidden = true;
    };

    gender.parentNode.classList.add(listClass[gender.innerHTML]);

    if (age < 18) {
      gender.parentNode.style.textDecoration = 'line-through'
    };

  };

}