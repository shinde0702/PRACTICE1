function fun(a) {
    return function m1(b) {
        return function m2(c) {
            return a + b + c

        }
    }
}

// let ret1=fun(5)
// let ret2=ret1(3)
// let ret3=ret2(4)
// console.log(ret3)

let i=fun(5)(3)(4) //curring
console.log(i)


