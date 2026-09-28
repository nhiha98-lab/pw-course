//1
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
console.log(multiply(5, 6));

//2
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b
    }
    if (c < min) {
        min = c
    }
    return min;
}
console.log(findMin(0, 5, 1));
console.log(findMin(12, 33, 290));

//3
function getTopStudents(students, threshold) {
    let topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i]);
        }
    }
    return topStudents;
}
let students = [
    { "name": "Ha", "score": 91 },
    { "name": "An", "score": 92 },
    { "name": "Binh", "score": 78 },
    { "name": "Chau", "score": 90 },
    { "name": "Dao", "score": 85 }
];
let threshold = 90;
console.log(getTopStudents(students, threshold));

//4 
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}
console.log(calculateInterest(1000000, 5, 3));