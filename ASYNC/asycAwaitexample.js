console.log('Welcome1')

async function fun() {

    let pin = await fun3()

    console.log('enetr your pin', pin)

}
fun()

console.log('Wellcome3')


function fun3() { 

    setTimeout(() => {
        return 'atm pin'
    }, 5000)
}

