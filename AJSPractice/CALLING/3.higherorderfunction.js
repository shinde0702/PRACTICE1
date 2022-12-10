// When a function return another function then it is called higher order function

function fun(){

    return function(){console.log("this is higher order function")}
}

let result=fun();
result()

fun()();//we can also use "fun()()" double paranthisis.

