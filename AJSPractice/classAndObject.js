//need to use class keyword.
//var,function,let,const etc can't work.

class student {
    Firstname;
    lastname;
    age;
    subject;

    filldata(f, l, s) {
        this.Firstname = f,
            this.lastname = l,
            this.age = s

    }

    registration() {

        console.log('this is registration process', this.Firstname, '', this.lastname, "", this.age)
    }

}

let stu1 = new student()


stu1.filldata("Abhijeet", "Shinde", 25)
stu1.registration()


let stu2 = new student()
stu2.filldata('nikhil', 'Vishate', 23)
stu2.registration()



class teacher {

    studentName;
    LastName;
    class;
    div;
    DOB;

    detail(a, b, c, d, e) {

        this.studentName = a,
            this.LastName = b,
            this.class = c,
            this.div = d,
            this.DOB = e
    }



    registration() {
        console.log('this is student id information', this.studentName, "", this.LastName, "", this.class, "", this.div, "", this.DOB)
    }

}
let stud = new teacher()
stud.detail('Vishal', 'Chemate', "1st", "A", "9/2/1997")
stud.registration()

let stud1 = new teacher()
stud1.detail('Vishal', 'Chemate', "1st", "A", "9/2/1997")
stud1.registration()


class person {
    constructor(n,a,A) {
        this.name =n,
        this.address = a,
        this.Age =A
    }
    show() {
        console.log('save person details :-', this.name,this.address,this.Age)
    }

}

let P1 = new person('vishal','nagar','23')
let p2 = new person('sachin','gangapur','24')

P1.show()
p2.show()





