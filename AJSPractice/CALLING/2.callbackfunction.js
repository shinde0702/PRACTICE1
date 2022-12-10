//when we pass function as parameter then it is called call back functuion


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
