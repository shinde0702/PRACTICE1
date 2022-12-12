// clouser --> when nested function or combined function global scope perstist even function excuestion done,

function fun() {
    let number = 10
    function fun2() {
        number = number + 100;
        console.log('', number)
    }
    fun2()
    console.log(number)
}
fun()


function abhi() {
    let num1 = 20;

    function vishal() {
        num1 = num1 + 10
        console.log("clouser", num1)
    }
    vishal()
    console.log(num1)
}
abhi()