// normal function

/*function fun1(){
    console.log('abhijeet')
}
fun1()

function fun2(){
    console.log('arbaaz')
}
fun2()

function fun3(){
    console.log('vishal')
    }
setTimeout(fun3,1000) //You can take any where means before function or after function


*/


//sync callback function
/*
function fun(callback) {

    callback()

    console.log('sync callback function')
}

fun(fun1)

function fun1() {
    console.log('Welcome to learn ')
}
*/


// async callback function

/*function fun(callback) {

   setTimeout(callback, 5000 )

   console.log('welcome to callback')
}
fun(fun1)

function fun1() {

   console.log('Welcome to learn js')
}
*/

// SetInterval

/*
function fun5(){
    console.log('hii hello')
}
setInterval(fun5,1000)
*/


//callback hell

let student = {
    firstname: 'abhijeet',
    middlename: 'K',
    surname: 'shinde'
}  //asume student object

let fname;
let mname;
let lname;
function fullname() {

    setTimeout(() => {
        fname = student.firstname;
        setTimeout(() => {
            mname = student.middlename;
            setTimeout(() => {
                lname = student.surname;
                console.log(fname,mname,lname);
            }, 2000)
        }, 2000)
    }, 2000)

}
fullname();  //callback hell--> dificult to understand coding to devolper/time consuming
