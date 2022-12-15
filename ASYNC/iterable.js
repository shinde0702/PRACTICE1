// iterable - which object follows iterable protocol that is called iterable.
//Rule-- 1.must be a function with a key Symbol.iterator.
//       2.The function must have an abject with name iterator
//       3.That iterator must return.
//       4.iterator object must contains a function with name(key)next
//       5.next function must return an object which contains(value:'hello',done:true)


let emp = {

    [Symbol.iterator]: function () {
        count = 0
        let iterator = {

            next: function () {
                count++
                if (count < 5) {
                    return { value: 'hello', done: true }

                }
                else {
                    return { value: 'hello', done: false }
                }
            }

        }

        return iterator;
    }

}
for (t of emp) {
    console.log(t)
}


function*fun(){

    yield "a";
    yield "b";
    yield "c";
    yield "d"
}

let gen= fun()

for(v of gen){
    console.log(v)
}