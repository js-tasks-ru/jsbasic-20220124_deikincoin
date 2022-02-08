let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let usersArr = [user1];

function showSalary(usersArr, age) {

  infoUser = '';

  usersArr.reduce(function(index, user) {
    if(user.age <= age) {
      return infoUser += `${user.name}, ${user.balance}\n`;
    }
  },0)
  
  return infoUser.slice('/n', -1);
}

let result = showSalary(users, 40);


