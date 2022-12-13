//Constructor - it is a special function. 
            //  It excute automatically whenver object created.
            // No need to call explicitly
            //it is used to fill the value for the object properties/variable.
class student {


    constructor(f,m,l) {

        this.firstname = f,
            this.middlename = m,
            this.lastname = l
    }

    display() {
        console.log("this is constructor functionz:-", this.firstname, "space ", this.middlename, this.lastname)
    }
}

let stud1=new student("Abhijeet","K","Shinde");
let stu2=new student("Vishal","B","Chimate")
stud1.display()
stu2.display()

