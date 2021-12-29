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

//// Toán tử điều kiện: &&, ||,..
/*
&&: TOÁN TỬ VÀ là toán tử tìm trong danh sách của nó trường đầu tiên nào trả về kq = false => đấy là kết quả trả về.
||: TOÁN TỬ HOẶC là tìm trong danh sách của nó trường đầu tiên nào trả về kq = true => đấy là kết quả trả về.
*/

// VD về toán tử &&
// let a = false;
// let b = true;
// let c = true;
// let d = true;
// console.log(a && b && c && d); // false

// VD: về toán tử ||
// let e = false;
// let f = false;
// let g = true;
// console.log(e || f || g); // true


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


////// câu điều kiện trong JS:  if -> (else if ) -> else

/*
Giải thích:
+ if: nếu
+ else if: điều kiện con. Chỉ chạy khi mà điều kiện(đk) ở if ko thỏa mãn
+ else: trường hợp còn lại. Chỉ chậy khi mà đk ở else if không thỏa mãn

Bài toán: phân loại các lớp theo điểm đầu vào:
- lớp A: diem >=8
- Lơp B: diem từ 6->8
- Lớp C: diem 4->6
- Lớp D: diem dưới 4.
*/
// let Nam = 8;
// let Quang = 6.5;
// let DangQuang = 6;
// let QuocAnh = 5.5;
// let Duy = 1;

// let diem = 2;

// if (diem >= 8) {
//     alert("Bạn đạt điều kiện vào lớp A");
// }
// else if (diem < 8 && diem >= 6) {
//     alert("Bạn đạt điều kiện vào lớp B");
// }
// else if (diem >= 4 && diem < 6) {
//     alert("Bạn đạt điều kiện vào lớp C");
// }
// else{
//     alert("Bạn đạt điều kiện vào lớp D");
// }




////// Vòng lặp cơ bản trong javascript: while, do while, for
//// VD vòng lặp while: bài toán in ra số từ 0->10;

// let i = 0;
// while (i < 11) {
//     console.log(i); //
//     i = i + 1;// tăng biến i lên 1 đơn vị sau mỗi lần lặp.
// }


//// VD về vòng lặp: do while: với bài toán tương tự
// let i = 0;
// do {
//     console.log(i);
//     i = i + 1;
// }
// while (i < 11);


////VD: về vòng lặp for: với bài toán tương tự
// C1: Không sử dụng 2 ô trống đầu và cuối
// let i = 0;
// for (; i < 11;) {
//     console.log(i);
//     i = i + 1;
// }


//C2: 
// let i;
// for (i = 0; i < 11; i = i + 1) {
//     console.log(i); // 0,1,2,....10
// }

// sau vòng lặp: giá trị của i là: 11


////// Mảng (danh sách) trong Javascript: lưu trữ (mọi kiểu dữ liệu) dưới dạng danh sách 
//// Khai báo mảng chưa có giá trị: 
let arr = [];
//// Khai báo mảng có giá trị 
let arr1 = [1, "hello", 3, "Bốn", 5, true, false, null, 9, 10];
console.log(arr1);
console.log(arr1[0]);

////// C,R,U,D với mảng: 

// C: Create: thêm phần tử  vào trong mảng: sử dụng push
arr.push("Dog");
console.log("mảng sau khi thêm 1 phần tử là: " + arr);

// R: Read: đọc mảng
console.log(arr);

// U: Update: sửa giá trị trong mảng:
arr[0] = "snake";
console.log("Mảng sau khi sửa dog -> snake là:", arr);
// D: Delete: xóa phần tử trong mảng: Sử dụng hàm Splice
arr.splice(0,1,"Ô thứ 3 trong Splice dùng để thêm phần tử");
console.log("Mảng sau khi xóa phần tử đầu tiên là:", arr);
/*
Giai thích Splice:
Box1: vị trí phần tử muốn xóa:
Box2: số phần tử muốn xóa kể từ vị trí đó: 
Box2: Thêm phần tử vào trong mảng kể từ vị trí đó

*/
