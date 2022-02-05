function namify(users) {
  // ваш код...
}
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

function namify(users) {
  let names = [];
  users.map(function(user){
    return names.push(user.name)
  });
  return users = names;
}


let names = namify(users); // ['Вася', 'Петя', 'Маша']
