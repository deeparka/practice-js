// const cart = ["iphone", "socks", "pants"];

// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.updateWallet();
//         });
//     });
// });

// console.log("start");
// setTimeout(function cbT() {
//     console.log("CB Timeout");
// }, 5000);
// fetch("https://api.netflix.com").then(function cbF() {
//     console.log("CB Netflix");
// });
// console.log("end");

// const printFullName = function (hometown, town) {
//     console.log(
//         this.firstName + " " + this.lastName + " from " + hometown + ", " + town
//     );
// };

// const nameOne = {
//     firstName: "Arkadeep",
//     lastName: "Prasad",
// };

// // function Borrowing
// printFullName.call(nameOne, "Malda", "WB");
// printFullName.apply(nameOne, ["Malda", "WB"]);

// const printMyFullName = printFullName.bind(nameOne, "Malda", "WB");
// console.log(printMyFullName);
// printMyFullName();

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             // }, i * 1000);
//         }
//         close(i);
//     }
//     console.log("Namaste Javascript");
// }

// x();

const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (i === j) {
            arr3[i] = arr1[i] + arr2[j];
        }
    }
}

console.log(arr3);
