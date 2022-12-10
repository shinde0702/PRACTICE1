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