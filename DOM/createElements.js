
// let a = document.createElement('img')

// console.log(a)

let ele =document.createElement('li');

ele.className='abhijeet';
ele.id='cr';
ele.setAttribute('title','list')
ele.innerHTML='hello akshay'

let ul = document.querySelector('ul.box');
ul.appendChild(ele)
console.log(ele)
