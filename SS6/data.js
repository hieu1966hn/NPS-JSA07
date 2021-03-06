// file nay: Dùng để khai báo các món ăn dưới dạng mảng chứa đối tượng;
let menu = [
  // kiểu dữ liệu mảng
  {
    // Phần tử ở vị trí thứ 0: Kiểu dữ liệu Object (đối tượng)
    name: "Pho",
    title: "Day la mon an co truyen Ha Noi va Viet Nam",
    des: "Mon pho ra doi vao ngay ,....Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto autem numquam, tenetur quo natus dicta beatae in saepe nam distinctio ullam. Quam est reiciendis, iure repellendus in adipisci molestias?",
    img: "https://vcdn1-dulich.vnecdn.net/2020/03/04/7174177733-6c0af1a0b2-b-4778-1583317457.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=W5Ll2-T9398seyb0orXqFA",
  },
  {
    // Phần tử ở vị trí thứ 1: Kiểu dữ liệu Object (đối tượng)
    name: "Bun rieu",
    title: "Day la mon an tuyet voi va rat thich hop de di an voi nguoi yeu",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto autem numquam, tenetur quo natus dicta beatae in saepe nam distinctio ullam. Quam est reiciendis, iure repellendus in adipisci molestias?",
    img: "https://cdn.tgdd.vn/2020/08/CookProduct/Untitled-1-1200x676-10.jpg",
  },
  {
    // Phần tử ở vị trí thứ 1: Kiểu dữ liệu Object (đối tượng)
    name: "Banh da cua",
    title: "Day la mot mon an sieu ngon cua HaiPhong",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto autem numquam, tenetur quo natus dicta beatae in saepe nam distinctio ullam. Quam est reiciendis, iure repellendus in adipisci molestias?",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/81/BANH_DA_CUA_1.jpg",
  },
  {
    // Phần tử ở vị trí thứ 1: Kiểu dữ liệu Object (đối tượng)
    name: "Bun Bo Hue",
    title: "Mon an ngon cua Hue",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto autem numquam, tenetur quo natus dicta beatae in saepe nam distinctio ullam. Quam est reiciendis, iure repellendus in adipisci molestias?",
    img: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/84024100-4767-4006-a26f-ec8ff577d9fa.jpg",
  },
  {
    // Phần tử ở vị trí thứ 1: Kiểu dữ liệu Object (đối tượng)
    name: "Quay",
    title: "Mon an di kem voi Pho",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto autem numquam, tenetur quo natus dicta beatae in saepe nam distinctio ullam. Quam est reiciendis, iure repellendus in adipisci molestias?",
    img: "https://cdn.daylambanh.edu.vn/wp-content/uploads/2020/01/cach-lam-quay-nong-600x400.jpg",
  },

  {
    // Phần tử ở vị trí thứ 1: Kiểu dữ liệu Object (đối tượng)
    name: "Banh cuon",
    title: "Mon an co truyen dan toc",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto autem numquam, tenetur quo natus dicta beatae in saepe nam distinctio ullam. Quam est reiciendis, iure repellendus in adipisci molestias?",
    img: "https://image-us.eva.vn/upload/3-2018/images/2018-07-12/banh-cuon-trang-chao-1531380999-627-width640height480.jpg",
  },
];

// Đẩy dữ liệu lên localStorage

// let menuCart = [];
// // Ép kiểu sang chuỗi
// let menuCartString = JSON.stringify(menuCart);
// // Đẩy lên localStorage với câu lệnh sau
// localStorage.setItem("menuCart", menuCartString);


// // Bắt đầu ép kiểu dữ liệu sang chuỗi để đẩy lên LocalStorage.
// let menuString = JSON.stringify(menu); // ép kiểu cho mảng menu -> chuỗi
// console.log("menuString: ", menuString);


// // Đẩy mảng này lên LocalStorage (lưu trữ dữ liệu online)
// localStorage.setItem( "menu",menuString );


// Comment hết phần bên trên đi, vì chúng ta đã đẩy thành localstorage nên ko  cần nó nữa
let items = document.querySelector('.items');
let getMenuFromLocalStorage = JSON.parse(localStorage.getItem("menu"));
console.log("getMenuFromLocalStorage: ", getMenuFromLocalStorage);

console.log(items);
for(item of getMenuFromLocalStorage){ // Item là biến chạy từ vị trí thứ 0 -> vị trí cuoi cùng của mảng menu
items.innerHTML +=`
<div class="item">
<div class="product-view">
  <img class="img-icon" src="${item.img}" alt="Not found">
  <button type='input' value="${item.name}" >Add to list</button>
</div>

<div class="content">
  <h3>${item.name}</h3>
</div>
<p>
${item.title}
</p>

</div>
`
}
 

