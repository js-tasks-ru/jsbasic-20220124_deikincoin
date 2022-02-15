function makeFriendsList(friends) {
  
  let list = document.createElement('ul')

  for ( user in friends) {
    list.insertAdjacentHTML('beforeEnd', `<li>${friends[user].firstName} ${friends[user].lastName}</li>`)
  }

  return list;

}

makeFriendsList();