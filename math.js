const {div} = require('./mathBasic')


function sum(n1,n2){
    return n1 + n2;
}


function doubleDiv(n1,n2){
    return div(n1,n2)* 2;
}


function addOne(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i]++
    }
    return arr
}


function mult(n1, n2){
    return n1 * n2;
}


function returnArr(a,b){

  let arr = [];
  for(let i=a; i<=b; i++){
    if(b > a) {
   arr.push(i)
  }
     else arr.push(a)
}
  return arr
}

function sumOfnum(a, b){
   let sum = 0;
   for (let i=a; i<=b; i++){
   if(b > a){
     sum += i;
  }
 else return a
}
   return  sum
 }


function helloWorld(hello){
    return hello;
}


function positive(num){
    return num *(-1);
}


function power(num,powers){
    return num**powers;
}

function percentV(number,percent){
    return (percent*number)/100;
}

function quadraticEquation(a, b, c){
    let d = b**2 - 4*a*c;
    let x1 = (-b + Math.sqrt(d))/ (2*a);
    let x2 = (-b - Math.sqrt(d))/ (2*a);
    if (d<0)return 'There are no roots';
    else return [x1,x2]
}



module.exports = {sum,doubleDiv, addOne, mult,returnArr, sumOfnum, helloWorld,positive,power,percentV,quadraticEquation};
