//Hoisting --> Variable and fucntion internaly moved to top of the its scope 
//var mobile - only declaration goes on top 

// console.log(k)
// let k;
// k=10

// fun()

// function fun()
// {
//     console.log('hoisting')
// }

//LexicalScope --> Child or inner function access its parents function variable that is called.


function lexical()
{
let a=10
function fun2()
{
let b=20

console.log(a+b)
}
fun2()
}
lexical()

