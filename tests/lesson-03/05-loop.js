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
for (let n =2; n <= 9; n++){
    console.log(`Bảng cửu chương ${n}:`);
    for (let i = 1; i <= 9; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}
}
bangCuuChuong();

//3
const oddNumbers = [];
for (let i = 1; i <= 99; i++) {
    if (i%2!==0){
        oddNumbers.push(i);
    }
}
console.log(oddNumbers);

//4
function printEmails(){
    for (let i = 1; i <= 10; i++){
        console.log(`user${i}@example.com`);
    }
}
printEmails();

//5
// const revenue =[
//     {month:1, total: 100},
//     {month: 2, total: 150},
//     {month: 3, total: 100},
//     {month: 4, total: 100},
//     {month: 5, total: 100},
//     {month: 6, total: 100},
//     {month: 7, total: 100},
//     {month: 8, total: 100}
// ];
// let totalRevenue = 0;
// for (let i = 0; i<= revenue.length; i++){
//     totalRevenue += revenue[i].total;
// }
// console.log(`Tong doanh thu: ${totalRevenue}`);