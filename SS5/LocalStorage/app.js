////// Khởi tạo localStorage
// C1:
localStorage.cmtnd = "0123456789";
//            key       value
// C2:
localStorage.setItem("motobykeLicense", "Đây là bằng lái của tôi");
//                      key                     value

// VD: Lưu trữ thông tin người dung:

let TrungHieu = {
  name: "Nguyễn Trung Hiếu",
  age: 24,
  address: "Hà Nội",
  job: "Coding",
  cmt: "1234567890",
};

// kiểm tra kiểu dữ liệu biến
console.log(typeof TrungHieu);

// Trước khi lưu trữ trên localStorage. Ta tiến hành ép kiểu dữ liệu -> kiểu String

localStorage.setItem("TrungHieu", JSON.stringify(TrungHieu));
//                      Key         value

// Lưu ý: Khi lưu trữ trên localStorage: Ta chỉ có thể lưu trữ dưới dạng "String" (kiểu dữ liệu chuỗi)

////// Lấy dữ liệu từ trên localStorage và sử dụng:
// C1:
console.log(localStorage.cmtnd);
//                        key

//C2:
console.log(localStorage.getItem("motobykeLicense"));
//                                     key

////// Sửa Value (giá trị) trong localStorage như thế nào:
// C1:
localStorage.cmtnd = "0987654321 + Đây là CMT mới được cập nhật";
//            key            value
// C2:
localStorage.setItem(
  "motobykeLicense",
  "Đây là motobykeLicense mới được update trong LocalStorage"
);
//                          key                 value


/////// Xóa từ khóa và giá trị trong localStorage
localStorage.removeItem("cmtnd");
localStorage.removeItem("motobykeLicense");
//                        key