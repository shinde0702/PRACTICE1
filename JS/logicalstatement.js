let mobile = null;
let email = null;

// if(mobile==null)
// {
// console.log('please fil the mobile no')

// }
// if(email==null)
// {
//     console.log('please fil the email')
// }

// let mark=prompt('Enter Your Mark');

// if(mark>35)
// {
// console.log('your are passed')
// }
// else{
//     console.log('You are failed')
// }

/*90 - A 
80 - B 
70 - C 
50 - D 
35 - pass 
Failed*/

/*let mark=35
if(mark>90)
{ 
    console.log('Passed with grade A')
}
else if(mark>80)
{
    console.log('Passed with grade B')
}
else if(mark>70)
{
    console.log('Passed with grade C')
}
else if(mark>50)
{
    console.log('Passed with grade D')
}
else if(mark>=35)
{
    console.log('Your Are Passed')
}
else{
    console.log('you are failed')
}*/

let choice =parseInt (prompt("1.Ringtone 2.SMS 3.Internet"));

switch (choice) {
    case 1:
        document.write("RingTone Activated")
        break;
    case 2:
        document.write("SMS Pack Activated")
        break;
    case 3:
        document.write("Internet Pack Activated")
        break;
default:
    document.write("Invakid Choice")
    }
