//Hoisting --> Variable and fucntion internaly moved to top of the its scope 
//var mobile - only declaration goes on top 
//when we declare variable outside function then it persisit globle scope


// console.log(k)
// let k;
// k=10

// fun()

// function fun()
// {
//     console.log('hoisting')
// }

//LexicalScope --> Child or inner function access its parents function variable that is called.


function lexical() {
    let a = 10
    function fun2() {
        let b = 20

        console.log(a + b)
    }
    fun2()
}
lexical()

function v() {
    let a = 20; //functional Scope/local Scope
    
    function w() {
        let b = 50;
        console.log('lexical scope')
    }

}
