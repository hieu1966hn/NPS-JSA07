/*
Câu 1: Viết một function có tên là findEven(number) 
với number là một số bất kỳ trong khoảng từ 4-20.
Khi chạy findEven() sẽ đưa ra tất cả các số chẵn trong khoảng từ 4 đến number.

VD: number = 10 -> // 4,6,8,10
*/

/// Câu 1:

// Người dùng nhập vào 1 số bất kỳ từ 4-> 20
let n;
do {
  n = Number(prompt("Người dùng nhập vào số bất kỳ từ 4->20")); // 30
} while (n < 4 || n > 20);

function findEven(number) {
  for (let i = 4; i <= number; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

findEven(n);
