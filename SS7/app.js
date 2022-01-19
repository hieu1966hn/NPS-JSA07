/*
ES6 là gì? Tính năng của ES6?
1. Hằng Số
2. Các biến và các hàm có phạm vi khối (block & scoped)
3. Arrow Function
4. Các tham số mặc định
5. Các tham số còn lại
6. String Templating
7. Thuộc tính Đối tượng (object)
8. Cú pháp xác định lớp chính thức (Lập trình hướng đối tượng)

*/

//// 1. Hằng số: Hằng số là các giá trị chỉ có thể xác định 1 lần duy nhất (được gán giá trị 1 lần duy nhất)
// Cú pháp hằng số: 
const Pi = 3.14;
console.log("Pi: ", Pi);

//// 2. Block & scoped: Let
// cú pháp khai báo biến: let/var
// let a = "hello"
// var b = "world"
// console.log(a + " " + b);

/// VD: 
{
  {
    // let cha = "Đây là biến được khai báo ở khối 2"
    {
      // console.log("cha: ", cha);
      var con = "Đây là biến được khai báo ở khối 3"

    }
  }
  // console.log("cha: ", cha); // Lỗi, vì không thuộc phạm vi khai báo
}
console.log("con: ", con);// in ra gì?
// NX: khai báo biến với cú pháp var: đưa toàn bộ các biến được khai báo với cú pháp var cho toàn bộ file sử dụng
// Lưu ý: Khi khai báo biến: nên khai báo bằng từ khóa "let".


// 3. Arrow Function (hàm mũi tên)
// Cú pháp:
// VD: khai báo hàm cộng 2 số bất kỳ: 
function sum(a, b) {
  return a + b
}

sum(1, 2);// 3
console.log("sum(1,2): ", sum(1, 2));

// C2: 
let sum1 = function (a, b) {
  return a + b
}
console.log("sum1(3,4): ", sum1(3, 4));

// C3: Arrow function: nên dùng const
const sum2 = (a, b) => {
  return a + b;
}
console.log("sum2(5,5): ", sum2(5, 5));

/*
const tenHam = (parmeters,..) => {
  code JS trong này..
}
*/


