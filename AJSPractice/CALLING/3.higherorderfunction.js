// When a function return another function then it is called higher order function

function fun() {

    return function () { console.log("this is higher order function") }
}

let result = fun();
result()

// fun()();//we can also use "fun()()" double paranthisis.


function abhi() {

    return function Abhijeet() {

        let y=50;
        let x=4;
        let z=y/x;
        console.log('this is higher order function:-',z)
    }

}
let pune=abhi()();
// pune()