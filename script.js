
let sumOfEvens = n => { 
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  };

let num=parseInt(prompt("enter a value for n"));
let result=sumOfEvens(num);
document.write(`The sum of even numbers up to ${num} is ${result}.`);

