//1
let car = {
    make: "Toyota",
    model: "Corrolla",
    year: 2021
}
console.log(car);

//2
let person = {
    name: "Claire",
    address: {
        street: "380 Kim Nguu",
        city: "Hanoi",
        country: "Vietnam"
    }
}
console.log(person.address.street);

//3
let student = {
    name: "Ha",
    grades: {
        math: 9,
        english: 10
    }
}
console.log(student.grades["math"]);

//4
let settings = {
    volume: 10,
    brightness: 20
}
settings.volume = 35
console.log(settings.volume);

//5
let bike = {
    make: "Honda"
}
bike.color = "red"
console.log(bike);


//6
let employee = {
    name: "Vu",
    age: 30
}
delete employee.age
console.log(employee);

//7
const school = { classA: ["An", "Binh", "Chau"], classB: ["Dao", "Huong", "Giang"] }
console.log(`classA: ${school.classA}`, `classB: ${school.classB}`);