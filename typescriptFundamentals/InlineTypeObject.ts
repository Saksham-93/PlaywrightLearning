//Inline Type Object Example

let student:{
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
} =
{
    name:"Scott",
    age:23,
    grade:"A",
    getSummary:function():string{
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`
    }


}

console.log(student.getSummary())