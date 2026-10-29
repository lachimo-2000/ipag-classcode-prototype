export const seed = {
  "owners": [
    {
      "code": "IPAG",
      "name": "IPA Group"
    },
    {
      "code": "VNDS",
      "name": "VNDIRECT"
    },
    {
      "code": "PTI",
      "name": "PTI"
    },
    {
      "code": "IPAAM",
      "name": "IPAAM"
    },
    {
      "code": "GSF",
      "name": "GSF"
    },
    {
      "code": "HOMEFOOD",
      "name": "Homefood"
    },
    {
      "code": "ANVIE",
      "name": "AnVie"
    },
    {
      "code": "IPAS",
      "name": "IPAS"
    },
    {
      "code": "CBV",
      "name": "Crystal Bay Việt Nam"
    },
    {
      "code": "TUNGLAM",
      "name": "Tùng Lâm"
    }
  ],
  "categories": [
    {
      "id": "cat-ORG",
      "code": "ORG",
      "name": "Tổ chức, văn hóa và phương thức làm việc",
      "include": "Hiểu tổ chức, văn hóa, chuẩn mực, chính sách dành cho nhân viên và phương thức làm việc đặc thù.",
      "exclude": "Không nhận kỹ năng phổ quát chỉ vì nằm trong onboarding; nghiệp vụ HR đi HR.",
      "active": true
    },
    {
      "id": "cat-SKL",
      "code": "SKL",
      "name": "Năng lực làm việc cá nhân và phối hợp",
      "include": "Giao tiếp, tư duy phản biện, tự học, quản lý thời gian, trình bày và phối hợp nói chung.",
      "exclude": "Kỹ năng tư vấn bán hàng đi BIZ; giao quyền và phát triển đội ngũ đi LEAD.",
      "active": true
    },
    {
      "id": "cat-LEAD",
      "code": "LEAD",
      "name": "Lãnh đạo và quản lý đội ngũ",
      "include": "Dẫn dắt, giao quyền, quản lý hiệu suất, thay đổi và phát triển đội ngũ.",
      "exclude": "Thiết kế chính sách HR và đào tạo nghề HR đi HR; thiết kế quy trình đi OPS.",
      "active": true
    },
    {
      "id": "cat-HR",
      "code": "HR",
      "name": "Nhân sự và đào tạo",
      "include": "Tuyển dụng, đánh giá vị trí, mô tả công việc, quản trị nhân sự và đào tạo giảng viên.",
      "exclude": "Giới thiệu chính sách cho nhân viên đi ORG; kỹ năng dẫn dắt đội ngũ đi LEAD.",
      "active": true
    },
    {
      "id": "cat-OPS",
      "code": "OPS",
      "name": "Quản trị và cải tiến vận hành",
      "include": "Quản trị doanh nghiệp, thiết kế và cải tiến quy trình, chất lượng, quản lý dự án.",
      "exclude": "Không thu nhận tất cả lớp có từ quản trị; công nghệ, đầu tư và nhân sự theo nghiệp vụ tương ứng.",
      "active": true
    },
    {
      "id": "cat-ACC",
      "code": "ACC",
      "name": "Kế toán và tài chính doanh nghiệp",
      "include": "Hạch toán, chứng từ, thu chi, đối soát và kiểm soát chi phí.",
      "exclude": "Phân tích báo cáo để đầu tư đi INVA; diễn giải quy định thuế đi GRC.",
      "active": true
    },
    {
      "id": "cat-GRC",
      "code": "GRC",
      "name": "Pháp lý, tuân thủ và kiểm soát",
      "include": "Pháp luật, nghĩa vụ tuân thủ, AML, KYC kiểm soát, kiểm toán và bảo vệ dữ liệu cá nhân.",
      "exclude": "Bảo mật kỹ thuật đi SEC; KYC để tư vấn/thấu hiểu khách hàng đi BIZ.",
      "active": true
    },
    {
      "id": "cat-INVF",
      "code": "INVF",
      "name": "Nền tảng thị trường và đầu tư",
      "include": "Cơ chế thị trường, nhập môn đầu tư và nền tảng nghề chứng khoán.",
      "exclude": "Sản phẩm cụ thể đi INVP; phương pháp phân tích đi INVA; thao tác nghiệp vụ đi INVO.",
      "active": true
    },
    {
      "id": "cat-INVP",
      "code": "INVP",
      "name": "Sản phẩm và dịch vụ đầu tư",
      "include": "Đặc điểm, cơ chế và điều kiện sản phẩm cổ phiếu, trái phiếu, quỹ, phái sinh và dịch vụ đầu tư.",
      "exclude": "Phương pháp lựa chọn khoản đầu tư đi INVA; phân bổ theo mục tiêu đi INVW.",
      "active": true
    },
    {
      "id": "cat-INVA",
      "code": "INVA",
      "name": "Phân tích và nghiên cứu đầu tư",
      "include": "Phân tích kỹ thuật/cơ bản, định giá, nghiên cứu và đánh giá rủi ro đầu tư.",
      "exclude": "Bản chất sản phẩm đi INVP; xây và quản lý danh mục theo mục tiêu đi INVW.",
      "active": true
    },
    {
      "id": "cat-INVW",
      "code": "INVW",
      "name": "Hoạch định tài chính và quản lý danh mục",
      "include": "Mục tiêu tài chính, hoạch định, phân bổ và quản lý danh mục tài sản.",
      "exclude": "Đánh giá riêng một khoản đầu tư đi INVA; bán hàng và xử lý phản đối đi BIZ.",
      "active": true
    },
    {
      "id": "cat-INVO",
      "code": "INVO",
      "name": "Vận hành giao dịch chứng khoán",
      "include": "Quy trình tài khoản, giao dịch, tiền, lưu ký, quyền và đấu giá.",
      "exclude": "Chỉ hướng dẫn bấm trên ứng dụng đi APP; giới thiệu đặc điểm dịch vụ đi INVP.",
      "active": true
    },
    {
      "id": "cat-BIZ",
      "code": "BIZ",
      "name": "Bán hàng, tư vấn và chăm sóc khách hàng",
      "include": "Tiếp cận, tư vấn, bán hàng, marketing và duy trì quan hệ khách hàng.",
      "exclude": "Thiết kế trải nghiệm/sản phẩm đi CX; học bản chất sản phẩm đi INVP hoặc INSF.",
      "active": true
    },
    {
      "id": "cat-CX",
      "code": "CX",
      "name": "Thiết kế sản phẩm và trải nghiệm khách hàng",
      "include": "Nghiên cứu, thiết kế sản phẩm, hành trình và trải nghiệm khách hàng.",
      "exclude": "Thực hành giao tiếp hoặc bán hàng đi BIZ; lập trình và triển khai kỹ thuật đi TECH.",
      "active": true
    },
    {
      "id": "cat-INSF",
      "code": "INSF",
      "name": "Nền tảng và sản phẩm bảo hiểm",
      "include": "Nguyên lý, hợp đồng, đặc điểm, quyền lợi, điều kiện và quy tắc sản phẩm bảo hiểm.",
      "exclude": "Cấp đơn/nhập liệu đi INSO; giám định/bồi thường đi INSC; định phí/tái bảo hiểm đi INSR.",
      "active": true
    },
    {
      "id": "cat-INSO",
      "code": "INSO",
      "name": "Khai thác và vận hành hợp đồng bảo hiểm",
      "include": "Cấp đơn, nhập liệu, phát hành hợp đồng, thu phí và vận hành kênh bảo hiểm.",
      "exclude": "Không dùng làm nhóm cho mọi thao tác trên phần mềm; nội dung phải gắn nghiệp vụ hợp đồng.",
      "active": true
    },
    {
      "id": "cat-INSC",
      "code": "INSC",
      "name": "Giám định, cứu hộ và bồi thường",
      "include": "Giám định tổn thất, cứu hộ, hồ sơ, thanh toán và quy trình bồi thường.",
      "exclude": "Tái bảo hiểm là trọng tâm đi INSR; kiến thức y khoa thuần túy đi MED.",
      "active": true
    },
    {
      "id": "cat-INSR",
      "code": "INSR",
      "name": "Định phí và tái bảo hiểm",
      "include": "Định phí, mô hình phí, phân tán/chuyển giao rủi ro qua tái bảo hiểm.",
      "exclude": "Giới thiệu sản phẩm đi INSF; xử lý hồ sơ bồi thường đi INSC.",
      "active": true
    },
    {
      "id": "cat-TECH",
      "code": "TECH",
      "name": "Phát triển phần mềm và hạ tầng",
      "include": "Lập trình, kiến trúc, vận hành hệ thống, sự cố, thay đổi và quản lý tài sản CNTT.",
      "exclude": "Sử dụng ứng dụng đi APP; phân tích dữ liệu/AI đi DATA; bảo mật đi SEC.",
      "active": true
    },
    {
      "id": "cat-DATA",
      "code": "DATA",
      "name": "Dữ liệu và ứng dụng AI",
      "include": "Cơ sở dữ liệu, phân tích dữ liệu, Power BI và ứng dụng AI.",
      "exclude": "Phân tích đầu tư dùng công cụ số vẫn đi INVA; thao tác phần mềm nghiệp vụ đi APP.",
      "active": true
    },
    {
      "id": "cat-SEC",
      "code": "SEC",
      "name": "An toàn thông tin và bảo mật",
      "include": "Nhận thức và kỹ thuật bảo vệ thông tin, tài khoản, hệ thống và lập trình an toàn.",
      "exclude": "Quyền/nghĩa vụ pháp lý về dữ liệu cá nhân đi GRC; an ninh vật lý đi SAF.",
      "active": true
    },
    {
      "id": "cat-APP",
      "code": "APP",
      "name": "Sử dụng nền tảng và công cụ số",
      "include": "Thao tác nền tảng số, ứng dụng và công cụ làm việc/nghiệp vụ.",
      "exclude": "Nếu trọng tâm là quy trình chuyên môn thì theo nhóm nghiệp vụ; không phân theo tên phần mềm đơn thuần.",
      "active": true
    },
    {
      "id": "cat-FNB",
      "code": "FNB",
      "name": "Chế biến và vận hành nhà hàng",
      "include": "Kỹ thuật bếp, vận hành ca, tiêu chuẩn phục vụ tác nghiệp và an toàn thực phẩm.",
      "exclude": "Giới thiệu thương hiệu đi ORG; tư vấn bán hàng đi BIZ; dinh dưỡng cá nhân đi NUT.",
      "active": true
    },
    {
      "id": "cat-NUT",
      "code": "NUT",
      "name": "Dinh dưỡng và chăm sóc bữa ăn",
      "include": "Thực dưỡng, lựa chọn thực phẩm và chăm sóc bữa ăn cá nhân/gia đình.",
      "exclude": "Đào tạo chế biến/vận hành bếp nghề nghiệp đi FNB; bệnh lý và giải phẫu đi MED.",
      "active": true
    },
    {
      "id": "cat-WELL",
      "code": "WELL",
      "name": "Chánh niệm và đời sống tinh thần",
      "include": "Thiền, chánh niệm, sức khỏe tinh thần và thực hành nếp sống.",
      "exclude": "Kỹ năng tập trung làm việc thuần túy có thể đi SKL; chương trình chỉ có tên ANVIE chưa đủ để gán.",
      "active": true
    },
    {
      "id": "cat-MED",
      "code": "MED",
      "name": "Y khoa và chăm sóc sức khỏe",
      "include": "Giải phẫu, bệnh lý, kiến thức y khoa và chăm sóc sức khỏe.",
      "exclude": "Quyền lợi sản phẩm bảo hiểm sức khỏe đi INSF; hồ sơ giám định đi INSC.",
      "active": true
    },
    {
      "id": "cat-SAF",
      "code": "SAF",
      "name": "An toàn lao động và an ninh vật lý",
      "include": "Phòng ngừa tai nạn, vệ sinh lao động, bảo vệ con người và an ninh khu vực.",
      "exclude": "An toàn thông tin đi SEC; an toàn thực phẩm đi FNB.",
      "active": true
    }
  ]
};
