// Ôn tập lại kiến  thức về Javascript:

/*
Javascript: là ngôn ngữ lập trình bậc cao. Là ngôn ngữ lập trình bất đồng bộ.
Java: là ngôn ngữ lập trình đồng bộ:


- Javascript: Được được viết dưới dạng file có đuôi ".js"
- JS: chạy dưới nền trình duyệt
- JS: code được dưới dạng front-end(static, ReactJS,  vueJS, angularJS)  && back-end (nodeJS) => full stack web
- JS: code được dưới dạng ứng dụng (VD: messenger (electron: JS), VScode (JS))
*/


////// KHái niệm biến trong JS: Biến dùng để lưu trữ dl, giá trị nào đó bên trong nó.
//// khai báo biến trong JS: let/var/const

// let a = "Hello world"; (ưu tiên dùng let khai báo biến)
// var b = 123; (hạn chế dùng or ko dùng càng tốt).
// const Pi = 3.14; // khai báo hằng số (lưu ý: hằng số ko thể thay đổi giá trị "ko gán lại giá trị")

// // Pi = 2;
// console.log(Pi); //? 2|| 3.14

/*
Lưu ý:
- let/var: khai báo biến. Những biến này được quyền  thay đổi (được quyền gán lại giá trị cho nó)
- const: Khai báo hằng số. (ko được quyền gán lại giá trị cho nó vì hằng số là không đổi).
*/


////// Toán tử trong Javascript:
//// Toán số học: +,-,*,/

//// Toán tử so sánh: >, <, >=, <=, != (khác), == (dấu bằng: so sánh tương đối), === (dấu bằng: so sánh tuyệt đối)


// VD về toán tử khác !=
// console.log("1 khác 2 true hay false? ", 1 != 2); // true

// // VD về toán tử so sánh tương đối: (chỉ so sánh về giá trị)
// console.log("Chuỗi 1 có bằng số 1 hay không (true or false):", "1" == 1); //  true

// // VD về toán tử so sánh tuyệt đối: (so sánh về kiểu dữ liệu và giá trị)
// console.log("Chuỗi 1 có bằng số 1 hay không (true or false):", "1" === 1); // false


////// 6 kiểu dữ liệu cơ bản trong JS:
/*
- string: Chuỗi: VD: 'hello', "hello", `hello`
- number: Số: VD: 1,2,3,4,54,5,....
- boolean: Đúng sai: VD: true || false
- Object: Đối tượng: VD: Hieu {name: "N.T.Hiếu, age: 24,"}
- null: Kiểu dữ liệu rỗng: VD: let array = [0,1,2,3,null,4]
- undefined: Kiểu dữ liệu không xác định: VD: let a; (thường gặp phải ở việc khai báo biến nhưng ko gán giá trị)
*/


////// câu điều kiện trong JS: 
