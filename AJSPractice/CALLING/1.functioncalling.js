//1.call by value --> When we pass primative value to parameter then it is called call by value.



function fun(){

console.log('call by value')

}
let k=10; //primative value
fun(k);  //call by value



//2.call by reference --> when we pass non primative value to parameter it is called as call by reference.

function num(){
    console.log('call by reference')
}
let arrray=[10,55]
num(arrray); //call by reference

