/*function fun3(){
    console.log('vishal')
    }

//
function fun1(){
    console.log('abhijeet')
}
fun1()


//  
function fun2(){
    console.log('arbaaz')
}
fun2()
//

setTimeout(fun3,1000)
*/

//sync callback function

function fun(callback) {

    (callback)

    console.log('welcome to callback')
}
fun(fun1)

function fun1() {

    console.log('Welcome to learn js')
}

// async callback function

function fun(callback) {

    setTimeout(callback, 5000)

    console.log('welcome to callback')
}
fun(fun1)

function fun1() {

    console.log('Welcome to learn js')
}









