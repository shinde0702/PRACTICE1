//when we pass function as parameter then it is called call back functuion

/*
function fun(num) {

   num()

}

fun(sub);
fun(addition)

function addition() {
   let num1 = 10;
   let num2 = 20;
   let sum = num1 + num2;
   console.log('addition of two number::', sum)
}

function sub() {
   let num1 = 20;
   let num2 = 10;
   let sub = num1 - num2;
   console.log('substraction of two number::', sub)
}
*/


let v=(number) =>{
   number()
}
v(abhi)  //call ny function

function abhi() {
   let a = 1;
   let b = 2;
   let c = a + b;
   console.log(c)
}

function first() {
   let d = 50;
   let e = 60;
   let f = d * e;
   console.log(f)
}

function second() {
   let x = 25;
   let y = 5;
   let z = x / y;
   console.log(z)
}



