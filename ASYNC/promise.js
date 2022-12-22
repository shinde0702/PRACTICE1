
// let abhi = new Promise((resolve, reject) => {

// reject()

// }
// )

// abhi.then(() => { console.log('promise resolved successfully') })
//     .catch(() => { console.log('error occured') })

fetch('https://fakestoreapi.com/products')
.then((data)=>{console.log(data.json())})
.then
.catch((err)=>{console.log(err);})






// abhi.then(success)
// .catch(failed)
// // function success(){
// //     console.log('promise resolved successfully')
// // }

// // function failed(){
// //     console.log('error occured')
// // }