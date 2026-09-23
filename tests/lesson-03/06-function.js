//1
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
console.log(multiply(5, 6));

//2
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin([0, 5, 1, 8, 2]));
console.log(findMin([12, 33, 290, 99, 102]));

//3
function getTopStudents() {
    let students = [
        { "name": "Ha", "score": 91 },
        { "name": "An", "score": 92 },
        { "name": "Binh", "score": 78 },
        { "name": "Chau", "score": 90 },
        { "name": "Dao", "score": 85 }
    ];
    let threshold = 90;
    let topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i]);
        }
    }
    return topStudents;
}
console.log(getTopStudents());

//4 
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}
console.log(calculateInterest(1000000, 5, 3));