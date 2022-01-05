/*
Câu 1: Viết một function có tên là findEven(number) 
với number là một số bất kỳ trong khoảng từ 4-20.
Khi chạy findEven() sẽ đưa ra tất cả các số chẵn trong khoảng từ 4 đến number.

VD: number = 10 -> // 4,6,8,10
*/

/// Câu 1:

// Người dùng nhập vào 1 số bất kỳ từ 4-> 20
// let n;
// do {
//   n = Number(prompt("Người dùng nhập vào số bất kỳ từ 4->20")); // 30
// } while (n < 4 || n > 20);

// function findEven(number) {
//   for (let i = 4; i <= number; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }

// findEven(n);

///Câu 2:
/*
Bên phía HTML hãy tạo một thẻ div có màu bất kỳ. 
Hãy viết một đoạn code thực hiện chức năng khi di chuột vào thẻ div sẽ chuyển màu,
khi di chuột ra sẽ trở về màu cũ.
*/

// const bai02 = document.getElementById("bai02");
// bai02.addEventListener("mouseover", function () {
//     bai02.style.backgroundColor = "green"
// });

// bai02.addEventListener("mouseleave", function () {
//     bai02.style.backgroundColor = "chocolate"
// });

//

//// Câu 3:
/*
Câu 3:  Viết một function có tên numberOneTriangle() khi chạy function này,
trên màn hình sẽ đưa ra hình sau: 
1
11
111
1111
11111
*/

// i: số hàng tương ứng
// j: số cột tương ứng
function numberOneTriangle() {
    
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++) { // h1:c1, h2:c1->c2 => 11
      document.write("1");
    }
    document.write("</br>"); // Câu lệnh xuống dòng
  }
  
}

numberOneTriangle();
