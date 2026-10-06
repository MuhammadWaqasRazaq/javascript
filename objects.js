class Person{
    constructor(name, age , city){
        this.name = name,
        this.age = age,
        this.city = city

    }
    getInfo (){
        console.log(`My name is ${this.name} and my age is ${this.age} `); 
    }
}

const p1 = new Person("waqas", 24, "lahore")

console.log(p1.getInfo());