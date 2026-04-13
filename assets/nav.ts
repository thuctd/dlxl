import { ENVIDB } from './../app/share/env-idb.interface';

export const NAV: ENVIDB[] =
  [

    {
      label: 'Admin', link: 'admin', dbName: 'admin', dbVer: 2, global: false, icon: 'security',
      sub: [
        { label: 'Người dùng', link: 'admin/user', api: 'user', guest: false, icon: 'manage_accounts', index: [] },
        { label: 'Nhật ký', link: 'admin/log', api: 'log', guest: false, icon: 'receipt_long', index: [] },
        { label: 'Crypt', link: 'admin/crypt', api: 'dev', guest: false, icon: 'admin_panel_settings', index: [] },
      ]
    },
    {
      label: 'Email', link: 'email', dbName: 'email', dbVer: 1, global: true, guest: false, icon: 'forward_to_inbox',
      sub: [
        { label: 'Tiền lương', link: 'email/tien-luong', api: 'tien-luong', guest: false, icon: 'email', index: [] },
        { label: 'Thông báo', link: 'email/thong-bao', api: 'thong-bao', guest: false, icon: 'attach_email', index: [] },
      ]
    },
    {
      label: 'Trắc nghiệm', link: 'trac-nghiem', dbName: 'trac-nghiem', dbVer: 4, global: true, guest: false, icon: 'quiz',
      sub: [
        { label: 'Trắc nghiệm', link: 'trac-nghiem', api: 'trac-nghiem', guest: false, index: ['Nhom', 'PhanLoai'] },
        { label: 'Elearning', link: 'trac-nghiem/elearning', api: 'elearning', guest: false, icon: 'quiz', index: [] },

      ]
    },
    {
      label: '', link: '', dbName: 'user', dbVer: 1, global: false,
      sub: [
        { label: 'Công nợ   thu Chi', link: 'user/thu-chi', api: 'thu-chi', guest: false, icon: 'attach_money', index: [] },
        { label: 'Cài đặt', link: 'taikhoan/cau-hinh', api: 'cau-hinh', guest: false, icon: 'settings', index: [] },
      ]
    },
    {
      label: '', link: '', dbName: 'firebase-local', dbVer: 1, global: true,
      sub: [
        { label: '', link: '', api: 'any', guest: false, icon: '', index: ['type'] },
      ]
    },
    {
      label: 'Tiện ích', link: 'tienich', dbName: 'app', dbVer: 4, global: true, guest: false, icon: 'construction',
      sub: [
        // { label: 'Barcode Generate', link: 'tienich/barcode-generate', api: 'barcode', guest: false, icon: 'qr_code_scanner', index: [] },
        { label: 'Đặt tên file', link: 'tienich/ten-file', api: 'ten-file', guest: false, icon: 'insert_drive_file', index: [] },
        { label: 'Merge', link: 'tienich/merge', api: 'merge', guest: true, icon: 'history_edu', index: [] },
        { label: 'CSKH', link: 'tienich/cskh', api: 'cmis4-app-cskh', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'DTHOAI_KH'] },
        { label: 'HTML', link: 'tienich/html', api: 'hmtl', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'DTHOAI_KH'] },
        { label: 'Combine Excel', link: 'tienich/combine-excel', api: 'combine-excel', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'DTHOAI_KH'] },
        { label: 'Tra cứu luật', link: 'tienich/law', api: 'law', guest: false, icon: 'history_edu', index: ['DIEU_KHOAN', 'NOI_DUNG', 'keyWord'] },
        { label: '', link: '', api: 'tra-van-ban', guest: false, icon: 'history_edu', index: ['DIEU_KHOAN', 'NOI_DUNG', 'keyWord'] },

      ]
    },
    {
      label: 'CMIS4', link: 'cmis4', dbName: 'cmis4', dbVer: 5, global: true, guest: false, icon: 'construction',
      sub: [
        { label: 'CMIS4', link: 'cmis4', api: 'cmis4', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Tổng hợp', link: '', api: 'cmis4-tong-hop', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Số hóa hồ sơ', link: '', api: 'cmis4-so-hoa', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Tools', link: '', api: 'cmis4-tools', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Tra cứu', link: '', api: 'cmis4-tra-cuu', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Báo cáo 14 Chỉ tiêu', link: '', api: 'cmis4-cap-dien', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Cập nhật thông tin liên hệ', link: '', api: 'cmis4-lien-he', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Báo cáo tháng ĐMT', link: '', api: 'cmis4-bao-cao-dmt', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'BB chốt ĐMT', link: '', api: 'cmis4-bien-ban-dmt', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Ghi chỉ số', link: '', api: 'cmis4-chi-so', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Chốt chỉ số đổi giá', link: '', api: 'cmis4-doi-gia', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Nhập chỉ số định kỳ', link: '', api: 'nhap-chi-so-dinh-ky', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Đối soát C06', link: '', api: 'cmis4-c06', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'TEN_TRAM'] },
        { label: 'In hợp đồng', link: '', api: 'cmis4-in-hop-dong', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Hết hạn hợp đồng', link: '', api: 'cmis4-han-hop-dong', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Tiếp nhận yêu cầu', link: '', api: 'cmis4-tiep-nhan-yeu-cau', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Kiểm dò hóa đơn', link: '', api: 'cmis4-kiem-do-hoa-don', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Thay đổi thông tin', link: '', api: 'cmis4-thay-doi-thong-tin', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Dự thảo hợp đồng', link: '', api: 'cmis4-du-thao-ha-ap', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Giao hồ sơ', link: '', api: 'cmis4-giao-ho-so', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Ghi rớt', link: '', api: 'cmis4-ghi-rot', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },

        { label: '', link: '', api: 'cmis4-quyet-toan-dmt', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: '', link: '', api: 'cmis4-tcd', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
      ]
    },
    {
      label: 'Điện lực', link: 'dien-luc', dbName: 'dien-luc', dbVer: 9, global: true, guest: false, icon: 'construction',
      sub: [
        { label: 'Lập bảng kê', link: 'dien-luc/dmt-input', api: 'dmt-input', guest: false, icon: 'description', index: ['KyThanhToan', 'KyKeKhai', 'TrangThaiHoSo', 'TrangThaiThanhToan', 'NgayThanhToan', 'TenBangKe', 'Nam', 'CoHoaDon', 'MaKhachHang'] },
        { label: 'Chỉ số ĐMT', link: 'dien-luc/dmt-chi-so', api: 'dmt-chi-so', guest: false, icon: 'description', index: ['THANG', 'NAM', 'MA_KHANG', 'KyThanhToan'] },
        { label: '', link: '', api: 'dmt-accept', guest: false, icon: '', index: [] },
        { label: 'Danh sách bảng kê', link: 'dien-luc/dmt-pay', api: 'dmt-pay', guest: false, icon: 'description', index: ['TrangThai', 'KyThanhToan', 'TenBangKe', 'Nam'] },
        { label: 'Kê khai thuế', link: 'dien-luc/dmt-tax', api: 'dmt-tax', guest: false, icon: 'description', index: ['TrangThai', 'KyThanhToan', 'TenBangKe', 'Nam'] },
        { label: 'Khách hàng', link: 'dien-luc/dmt-khach-hang', api: 'dmt-khach-hang', guest: false, icon: 'description', index: ['MaKhachHang'] },
        { label: 'Lịch sử cập nhật', link: 'dien-luc/dmt-history', api: 'dmt-history', guest: false, icon: 'description', index: ['MaKhachHang'] },
        { label: 'Cài đặt', link: 'dien-luc/dmt-setup', api: 'dmt-setup', guest: false, icon: 'description', index: [] },
      ]
    },
    {
      label: 'UNC', link: 'unc', dbName: 'unc', dbVer: 3, global: true, guest: false, icon: 'construction',
      sub: [
        { label: 'Cấu hình đơn vị', link: 'unc/unc-cau-hinh', api: 'unc-cau-hinh', guest: false, icon: 'description', index: [] },
        { label: 'Danh sách ngân hàng', link: 'unc/unc-ngan-hang', api: 'unc-ngan-hang', guest: false, icon: 'description', index: [] },
        { label: 'Lập ủy nhiệm chi', link: 'unc/unc-khach-hang', api: 'unc-khach-hang', guest: false, icon: 'description', index: ['bin', 'SoTK'] },
        { label: 'Danh sách phiếu UNC', link: 'unc', api: 'unc-phieu', guest: false, icon: 'description', index: ['SoPhieu', 'NgayLap', 'NganHang', 'MaNganHang'] },
      ]
    },
    {
      label: 'Kinh Doanh', link: 'kinh-doanh', dbName: 'kinh-doanh', dbVer: 18, global: true, guest: false, icon: 'construction',
      sub: [
        { label: 'Hồ sơ trung áp', link: 'kinh-doanh/hsta', api: 'hsta', guest: false, icon: 'description', index: ['TEN_CONG_TRINH', 'TRANG_THAI', 'MA_KHANG'] },
        // { label: 'Treo tháo', link: 'kinh-doanh/treo-thao', api: 'treo-thao', guest: false, icon: 'description', index: ['SO_CTO_MOI', 'NGAY_THUC_HIEN', 'MA_KHANG', 'SO_CTO', 'MA_TRAM', 'nick', 'NV1'] },
        // { label: '', link: '', api: 'treo-thao2', guest: false, icon: 'description', index: ['SO_CTO_MOI', 'NGAY_THUC_HIEN', 'MA_KHANG', 'SO_CTO', 'MA_TRAM', 'nick', 'NV1'] },
        // { label: 'Phân công', link: 'kinh-doanh/phan-cong', api: 'phan-cong-treo-thao', guest: false, icon: 'description', index: ['SO_CTO_MOI', 'NGAY_THUC_HIEN', 'MA_KHANG', 'SO_CTO', 'MA_TRAM', 'nick', 'NV1'] },
        // { label: 'In Treo tháo', link: 'kinh-doanh/in-treo-thao', api: 'in-treo-thao', guest: false, icon: 'description', index: ['SO_CTO_MOI', 'NGAY_THUC_HIEN', 'MA_KHANG', 'SO_CTO', 'MA_TRAM'] },
        { label: 'SMS', link: 'kinh-doanh/sms-doc-thu', api: 'sms-doc-thu', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: 'Ghi chỉ số', link: 'kinh-doanh/ghi-chi-so', api: 'ghi-chi-so', guest: false, icon: 'quiz', index: ['MA_KHANG', 'SO_CTO', 'PHAN_CONG', 'MA_SOGCS', 'BCS' , 'KYCS', 'SO_GHI', 'TEN_TRAM', 'TRANG_THAI'] },
        { label: 'Lịch ghi chỉ số', link: 'kinh-doanh/lich-ghi-chi-so', api: 'lich-ghi-chi-so', guest: false, icon: 'quiz', index: ['PHAN_CONG', 'MA_SOGCS', 'MA_KV', 'TEN_TRAM'] },
        { label: 'Bảo đảm hợp đồng', link: 'kinh-doanh/ky-quy', api: 'ky-quy', guest: false, icon: 'quiz', index: ['MA_KHANG', 'HTHUC_DBAO_HDONG', 'TRANG_THAI', 'NGAY_BAO_CO', 			] },
        { label: 'Dự báo', link: 'kinh-doanh/du-bao', api: 'du-bao', guest: false, icon: 'quiz', index: [] },
      ]
    },
  ]
