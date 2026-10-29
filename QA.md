# Kiểm tra prototype

## Kiểm tra tự động

`npm test`: 15 kiểm tra logic đạt. Bao gồm số thứ tự xuyên hình thức, reset theo năm, gửi lại request, hủy không tái dùng số, dữ liệu không hợp lệ, CAT ngừng hoạt động, thêm CAT, chuyển nhánh, alias, chống mã trùng và giới hạn bộ đếm, CSV an toàn khi mở trong bảng tính.

## Kiểm tra giao diện trình duyệt

- Mở dashboard và các luồng quản trị danh mục/nội dung/lớp.
- Thêm CAT ESG, đăng ký nội dung mới, mở lớp OF và nhận mã `IPAG_ESG_0011_OF_2026_001`.
- Hai yêu cầu cấp đồng thời tạo hai lớp riêng; gửi lại request đầu trả lại đúng lớp đó.
- Đổi CAT ORG thành ORGA; tìm bằng mã cũ `IPAG_ORG_0001_ON_2026_002` vẫn thấy lớp với mã mới `IPAG_ORGA_0001_ON_2026_002`. Chi tiết hiển thị alias và ID lớp.
- Giao diện desktop được xem trực tiếp. CSS có bố cục responsive; chưa xác nhận trên thiết bị di động thực.

## Giới hạn

Không kiểm thử tích hợp IPAS/Edtexco vì prototype không kết nối các hệ thống này. Tính duy nhất chỉ trong sổ IndexedDB của cùng origin/profile trình duyệt. Vai trò là mô phỏng. Không đồng bộ nhiều máy. Chưa hỗ trợ nhập lại JSON, duyệt nhiều cấp hoặc gộp/tách CAT hàng loạt.

Đây là kiểm tra tính năng prototype, không phải nghiệm thu quy tắc nghiệp vụ hoặc dữ liệu đào tạo thực tế.
