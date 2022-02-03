let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
 
  let result = 0
  
  for (let prop in salaries) {
    if (typeof salaries[prop] == 'number'  && !isNaN(salaries[prop]) && salaries[prop] != Infinity && salaries[prop] != -Infinity) {
      result += salaries[prop];
    }
  }
  
  return result;
}

sumSalary(salaries);

