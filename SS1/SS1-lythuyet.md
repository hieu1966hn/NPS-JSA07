Github: Công cụ quản lý mã nguồn

- KN: là một hệ thống quản lý dự án phiên bản code, hoạt động giống như MXH cho lập trình viên. Các lập trình viên có thể "clone" lại mã nguồn từ một repository chính là dịch vụ máy chủ repository công cộng. Mỗi người có thể tạo tk trên đó và tạo ra các kho chứa code của riêng mình.

- Bước đầu sử dụng github: Tạo tài khoản github tại trang "github.com"

- Để sử dụng github trong máy tính. Ta phải cài đặt môi trường cho nó: git (git-scm)

- Sau khi tải và cài đặt thành công môi trường "git-scm"

- Thao tác đẩy code lên github và chia sẻ online

* B1: Lên github.com (đã đăng nhập) và tạo 1 folder rỗng trên github. (nhập tên folder -> create)
* B2: Copy đường link trên trang github đó (link https)
* B3: Liên kết folder trên github (repository) với folder trong máy mình. Thông qua câu lệnh "git clone link". (Folder github_Repository liên kết với folder code trong máy thông qua file ".git") => ".git" ở đâu => tất cả folder or file xung quanh đều có thể đẩy lên github và lưu trữ trên đó.
* B4: Mở "git bash here" và gõ lệnh: "git stage .": Dùng để lấy toàn bộ folder or file để nạp lên github.
* B5: Gõ lệnh: git commit -m "new code": dùng để mô tả mình đẩy lên github những gì.
* B6: Gõ lệnh: "git push": để đẩy code đã nạp lên github.
