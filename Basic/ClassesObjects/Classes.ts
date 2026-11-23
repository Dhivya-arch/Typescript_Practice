// variables and methods can be static.Both can be accessible through className only
// Once the static variable is updated,all the objects of that class can have updated Value.


class Student{
id:number;
name:string;
contact:number;

constructor(id:number,name:string,contact:number){
    this.id=id;
    this.name=name;
    this.contact=contact;
}

getStudent():string {
     console.log("Name of the student is:",this.name);
     return this.name;
}

}

let studentObj=new Student(1001,"div",1234567890);
let returnName=studentObj.getStudent();
console.log("Name retrived from method:",returnName)

// ReadOnly ans static Operator
class Employee{
    readonly empId:number;
    name:string;
    static orgName:string;

    constructor(empId:number,name:string){
        this.empId=empId;
        this.name=name;
    }

    setOrgName(orgName:string){
        Employee.orgName=orgName;
    }
}

let empObj=new Employee(101,"Schoold");
empObj.setOrgName("ABC solutions");
console.log("orgname is ",Employee.orgName);