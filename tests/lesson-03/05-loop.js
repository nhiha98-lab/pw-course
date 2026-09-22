//1
function sum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum());

//2
function bangCuuChuong(){
    const n = 2;
    for (let i = 1; i <= 9; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}
console.log(bangCuuChuong());