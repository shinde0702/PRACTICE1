// Binary 

// a) Prefixfix --->
let p=10;
let m=++p;
console.log(m)

// b) Postfix --->
h=10
let n=h++;
console.log(n)

// i. Arithmaticc Binary Operator

let a, b, c; //variable Declaration
a = 2;
b = 3;
c = a + b;
console.log(c)

// ii. Assignment Binary Operator


let d, e;
d = 10;
e = 20

d = e + d
d += e

d *= e

console.log(d)

// iii. Relational Binary Operator  --> This type operator return only true and falls / or 1 & 0
console.log("Greaer than >", 10 < 20);
console.log("Less than >", 10 > 20);

let mark = 45;

let pass = mark > 45;
pass = mark >= 45;

console.log(pass)

// Equallity
// == allow implicit conversion
// === not allow implicit conversion

let marks = "10";

console.log(10 == marks);    //" == "convert string to number
console.log(10 === marks);  //" === "not convert string to number


//iv Logical Binary Operator

let username="shinde0702";
let password="12345";

let login = username=="shinde0702" && password == 1234 ;

console.log(login)