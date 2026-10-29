# Classcode · IPA Group

Prototype dùng để trình bày nội bộ về cấp mã lớp và quản trị nhóm chủ đề. Không kết nối IPAS hay Edtexco. Giao diện tiếng Việt, không cần cài thư viện frontend, không có tracking hoặc gọi API bên ngoài.

## Chạy thử

- Cách nhanh: mở `CLASSCODE_DEMO.html` trong Chrome/Edge. Đây là bản đóng gói tự chứa; dữ liệu lưu riêng theo địa chỉ file/trình duyệt. Nếu trình duyệt chặn lưu dữ liệu cho file, dùng cách HTTP bên dưới.
- Cách HTTP: chạy `python3 -m http.server 8000 --directory dist` rồi mở `http://localhost:8000`.
- Kiểm tra logic: Node.js 22+, chạy `npm test` (không cần npm install).

## Các luồng demo

1. **Mở lớp & cấp mã:** chọn nội dung, hình thức, ngày, nhãn đợt; xem trước mã; cấp và lưu. Tên/OWN/CAT lấy từ sổ nội dung.
2. **Nội dung lớp:** đăng ký nội dung mới để cấp KKKK; quản trị có thể sửa tên hoặc chuyển nhánh với lý do. Các lớp liên quan cập nhật mã và giữ alias.
3. **Danh mục CAT:** thêm nhóm, quy định nội dung bao gồm/loại trừ; đổi tên hoặc mã; ngừng/kích hoạt nhóm. Nhóm đã ngừng không được cấp lớp mới, lịch sử vẫn giữ.
4. **Sổ mã:** tìm bằng tên, mã hiện hành, mã cũ; lọc đơn vị/hình thức; xem ID bất biến và alias; hủy lớp nhưng không dùng lại số; xuất CSV.
5. **Mô phỏng đồng thời:** hai yêu cầu chạy bằng `Promise.all` qua hai transaction IndexedDB readwrite. Cấp hai mã khác nhau. Gửi lại cùng requestId trả về lớp đã cấp.
6. **Vai trò:** menu quản trị/contact point mô phỏng quyền thao tác. Đây không phải xác thực hay phân quyền bảo mật.

Tên các lớp trong seed là dữ liệu hư cấu phục vụ demo. Danh mục 27 CAT dùng lại cấu trúc dự thảo; các đơn vị và lớp mẫu không xác nhận quyền sở hữu thực tế. Không nhúng dữ liệu 595 lớp LMS hay hồ sơ đào tạo 2026, học viên, điểm, URL nội bộ vào repository.

## Quy tắc

`OWN_CAT_KKKK_HT_YYYY_DDD`

- OWN: mã đơn vị sở hữu nội dung.
- CAT: một cấp nhóm chủ đề, lấy theo ID nhóm ổn định.
- KKKK: số nội dung lớp toàn sổ, 0001–9999, không reset theo năm.
- HT: OF trực tiếp, ON trực tuyến đồng bộ, EL tự học, BL kết hợp.
- YYYY: năm mở lớp 1900–2199; không mặc định năm migrate.
- DDD: số đăng ký 001–999 theo `contentId + năm`, dùng chung xuyên hình thức. Không tái sử dụng số của lớp hủy.

Chỉ số đếm và bản ghi lớp được ghi cùng transaction IndexedDB. Đây là mô phỏng cấp tập trung trong **cùng một origin/profile trình duyệt**, hỗ trợ các tab cùng địa chỉ. Khác máy, profile, chế độ riêng tư, tên miền hoặc bản file offline có sổ độc lập. Không cam kết duy nhất mã toàn tập đoàn. Xóa dữ liệu website sẽ mất sổ của demo. Có nút xuất JSON để lưu bản sao, nhưng prototype chưa có chức năng nhập lại JSON.

Nút xem trước không dành số. Mỗi thao tác cấp có requestId; gửi lại cùng yêu cầu không cấp thêm. Cảnh báo trùng nội dung/hình thức/ngày hỗ trợ người dùng kiểm tra; không đủ để tự xác nhận hai hồ sơ nghiệp vụ có thực sự cùng lớp.

Mã được đổi có kiểm soát khi CAT/OWN thay đổi. ID lớp không đổi; các mã trước giữ trong alias. Mã hiện hành và alias đều phải duy nhất giữa các lớp. Chức năng gộp/tách CAT theo đợt và duyệt nhiều cấp chưa nằm trong prototype.

## Deploy lên GitHub Pages

1. Tạo repository cho prototype, ví dụ `ipag-classcode-prototype`. Chỉ đưa các file của app lên; không thêm dữ liệu đào tạo nội bộ.
2. Đưa `dist/`, `tests/`, `package.json`, README và `.github/workflows/pages.yml` lên nhánh `main`.
3. Repository → **Settings → Pages → Source: GitHub Actions**.
4. Chạy workflow **Test and deploy Classcode**, hoặc push commit lên `main`.
5. Đợi workflow thành công; lấy URL từ output của deployment hoặc Settings → Pages. Mọi đường dẫn tài nguyên là tương đối nên dùng được dưới `/ten-repository/`.

Workflow chỉ publish `dist/`. Không cần token ghi trong source; GitHub cấp `GITHUB_TOKEN` cho job qua permissions. GitHub Pages có thể công khai website ngay cả khi repository riêng tư tùy cấu hình/gói tài khoản; kiểm tra quyền truy cập trước khi dùng dữ liệu thực.

Tài liệu chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Cấu trúc

- `dist/app.js`: giao diện và luồng demo.
- `dist/engine.js`: quy tắc, kiểm tra dữ liệu, cấp mã, alias.
- `dist/store.js`: transaction IndexedDB và thông báo đồng bộ tab.
- `dist/seed.js`: 27 CAT, đơn vị mẫu; tên lớp hư cấu được tạo trong engine.
- `dist/style.css`: giao diện responsive, hỗ trợ reduced motion.
- `tests/engine.test.js`: kiểm tra quy tắc và các trường hợp biên.
- `CLASSCODE_DEMO.html`: bản tự chứa, được đóng gói từ `dist/`.

Để dùng production sau này: thay store cục bộ bằng API/database tập trung có unique constraints, transaction, xác thực, phân quyền phía server, idempotency và nhật ký quản trị. Sổ đã cấp cần backup, theo dõi phiên bản taxonomy, và tích hợp ID/mã lớp của LMS.
