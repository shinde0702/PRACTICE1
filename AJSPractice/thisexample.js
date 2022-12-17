// // i. implicit binding --> it will store current object
let stud={

name:'akash',
fun:function(){

    console.log('hello', this)
}

}
stud.fun()
console.log('hello', this)


// //ii. explicit bindind --> when we pass manaully any object then it is called explicit binding

newfunction(this) 
{
    console.log(this)
}
newfunction.call(stud)

//iii.new binding --> new binding always crete empty object 

function teacher(){
console.log(this)
}
let t1=new teacher


