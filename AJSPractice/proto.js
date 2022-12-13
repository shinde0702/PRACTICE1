let obj1={
    name:"Abhijeet"

}

let obj2={
    __proto__:obj1,
    lastname:"Shinde",
    fun:function(){console.log(this.name)}
}

obj2.fun();
console.log(obj2)
