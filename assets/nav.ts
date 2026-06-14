
export const NAV: ENVIDB[] =
  [
    {
      _id: '0', label: 'Admin', link: 'admin', dbName: 'admin', dbVer: 2, global: false, icon: 'security',
      sub: [
        { _id: '1', label: 'Người dùng', link: 'admin/user', api: 'user', guest: false, icon: 'manage_accounts', index: [] },
        { _id: '2', label: 'Nhật ký', link: 'admin/log', api: 'log', guest: false, icon: 'receipt_long', index: [] },
        { _id: '3', label: 'Crypt', link: 'admin/crypt', api: 'dev', guest: false, icon: 'admin_panel_settings', index: [] },
      ]
    },
    {
      _id: '1', label: 'Email', link: 'email', dbName: 'email', dbVer: 1, global: true, guest: false, icon: 'forward_to_inbox',
      sub: [
        { _id: '1', label: 'Tiền lương', link: 'email/tien-luong', api: 'tien-luong', guest: false, icon: 'email', index: [] },
        { _id: '2', label: 'Thông báo', link: 'email/thong-bao', api: 'thong-bao', guest: false, icon: 'attach_email', index: [] },
      ]
    },
    {
      _id: '2', label: 'Trắc nghiệm', link: 'trac-nghiem', dbName: 'trac-nghiem', dbVer: 4, global: true, guest: false, icon: 'quiz',
      sub: [
        { _id: '1', label: 'Trắc nghiệm', link: 'trac-nghiem', api: 'trac-nghiem', guest: false, index: ['Nhom', 'PhanLoai'] },
        { _id: '2', label: 'Elearning', link: 'trac-nghiem/elearning', api: 'elearning', guest: false, icon: 'quiz', index: [] },
        { _id: '3', label: 'Trắc nghiệm', link: 'trac-nghiem/trac-nghiem-convert', api: 'trac-nghiem-convert', guest: false, index: ['Nhom', 'PhanLoai'] },

      ]
    },
    {
      _id: '3', label: '', link: '', dbName: 'user', dbVer: 1, global: false,
      sub: [
        { _id: '1', label: 'Công nợ   thu Chi', link: 'user/thu-chi', api: 'thu-chi', guest: false, icon: 'attach_money', index: [] },
        { _id: '2', label: 'Cài đặt', link: 'taikhoan/cau-hinh', api: 'cau-hinh', guest: false, icon: 'settings', index: [] },
      ]
    },
    {
      _id: '4', label: '', link: '', dbName: 'firebase-local', dbVer: 1, global: true,
      sub: [
        { _id: '1', label: '', link: '', api: 'any', guest: false, icon: '', index: ['type'] },
      ]
    },
    {
      _id: '5', label: 'Tiện ích', link: 'tienich', dbName: 'app', dbVer: 4, global: true, guest: false, icon: 'construction',
      sub: [
        { _id: '1', label: 'Hóa đơn pdf', link: 'tienich/hoa-don', api: 'hoa-don', guest: false, icon: 'insert_drive_file', index: [] },
        { _id: '2', label: 'Đặt tên file', link: 'tienich/ten-file', api: 'ten-file', guest: false, icon: 'insert_drive_file', index: [] },
        { _id: '3', label: 'Merge', link: 'tienich/merge', api: 'merge', guest: true, icon: 'history_edu', index: [] },
        { _id: '4', label: 'CSKH', link: 'tienich/cskh', api: 'cmis4-app-cskh', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'DTHOAI_KH'] },
        { _id: '5', label: 'HTML', link: 'tienich/html', api: 'hmtl', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'DTHOAI_KH'] },
        { _id: '6', label: 'Combine Excel', link: 'tienich/combine-excel', api: 'combine-excel', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'DTHOAI_KH'] },
        { _id: '7', label: 'Tra cứu luật', link: 'tienich/law', api: 'law', guest: false, icon: 'history_edu', index: ['DIEU_KHOAN', 'NOI_DUNG',] },
        { _id: '8', label: '', link: '', api: 'tra-van-ban', guest: false, icon: 'history_edu', index: ['DIEU_KHOAN', 'NOI_DUNG',] },
      ]
    },
    {
      _id: '6', label: 'CMIS4', link: 'cmis4', dbName: 'cmis4', dbVer: 5, global: true, guest: false, icon: 'construction',
      sub: [
        { _id: '1', label: 'CMIS4', link: 'cmis4', api: 'cmis4', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '2', label: 'Tổng hợp', link: '', api: 'cmis4-tong-hop', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '3', label: 'Số hóa hồ sơ', link: '', api: 'cmis4-so-hoa', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '4', label: 'Tools', link: '', api: 'cmis4-tools', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '5', label: 'Tra cứu', link: '', api: 'cmis4-tra-cuu', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '6', label: 'Báo cáo 14 Chỉ tiêu', link: '', api: 'cmis4-cap-dien', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '7', label: 'Cập nhật thông tin liên hệ', link: '', api: 'cmis4-lien-he', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '8', label: 'Báo cáo tháng ĐMT', link: '', api: 'cmis4-bao-cao-dmt', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '9', label: 'BB chốt ĐMT', link: '', api: 'cmis4-bien-ban-dmt', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '10', label: 'Ghi chỉ số', link: '', api: 'cmis4-chi-so', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '11', label: 'Chốt chỉ số đổi giá - Phúc tra CS', link: '', api: 'cmis4-doi-gia', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '12', label: 'Nhập chỉ số định kỳ', link: '', api: 'nhap-chi-so-dinh-ky', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '13', label: 'Đối soát C06', link: '', api: 'cmis4-c06', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'TEN_TRAM'] },
        { _id: '14', label: 'In hợp đồng', link: '', api: 'cmis4-in-hop-dong', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '15', label: 'Hết hạn hợp đồng', link: '', api: 'cmis4-han-hop-dong', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '16', label: 'Tiếp nhận yêu cầu', link: '', api: 'cmis4-tiep-nhan-yeu-cau', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '17', label: 'Kiểm dò hóa đơn', link: '', api: 'cmis4-kiem-do-hoa-don', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '18', label: 'Thay đổi thông tin', link: '', api: 'cmis4-thay-doi-thong-tin', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '19', label: 'Dự thảo hợp đồng', link: '', api: 'cmis4-du-thao-ha-ap', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '20', label: 'Giao hồ sơ', link: '', api: 'cmis4-giao-ho-so', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '21', label: 'Ghi rớt', link: '', api: 'cmis4-ghi-rot', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '22', label: '', link: '', api: 'cmis4-quyet-toan-dmt', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '23', label: '', link: '', api: 'cmis4-tcd', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
      ]
    },
    {
      _id: '7', label: 'Điện lực', link: 'dien-luc', dbName: 'dien-luc', dbVer: 9, global: true, guest: false, icon: 'construction',
      sub: [
        { _id: '1', label: 'Lập bảng kê', link: 'dien-luc/dmt-input', api: 'dmt-input', guest: false, icon: 'description', index: ['KyThanhToan', 'KyKeKhai', 'TrangThaiHoSo', 'TrangThaiThanhToan', 'NgayThanhToan', 'TenBangKe', 'Nam', 'CoHoaDon', 'MaKhachHang'] },
        { _id: '2', label: 'Chỉ số ĐMT', link: 'dien-luc/dmt-chi-so', api: 'dmt-chi-so', guest: false, icon: 'description', index: ['THANG', 'NAM', 'MA_KHANG', 'KyThanhToan'] },
        { _id: '3', label: '', link: '', api: 'dmt-accept', guest: false, icon: '', index: [] },
        { _id: '4', label: 'Danh sách bảng kê', link: 'dien-luc/dmt-pay', api: 'dmt-pay', guest: false, icon: 'description', index: ['TrangThai', 'KyThanhToan', 'TenBangKe', 'Nam'] },
        { _id: '5', label: 'Kê khai thuế', link: 'dien-luc/dmt-tax', api: 'dmt-tax', guest: false, icon: 'description', index: ['TrangThai', 'KyThanhToan', 'TenBangKe', 'Nam'] },
        { _id: '6', label: 'Khách hàng', link: 'dien-luc/dmt-khach-hang', api: 'dmt-khach-hang', guest: false, icon: 'description', index: ['MaKhachHang'] },
        { _id: '7', label: 'Lịch sử cập nhật', link: 'dien-luc/dmt-history', api: 'dmt-history', guest: false, icon: 'description', index: ['MaKhachHang'] },
        { _id: '8', label: 'Cài đặt', link: 'dien-luc/dmt-setup', api: 'dmt-setup', guest: false, icon: 'description', index: [] },
      ]
    },
    {
      _id: '8', label: 'UNC', link: 'unc', dbName: 'unc', dbVer: 3, global: true, guest: false, icon: 'construction',
      sub: [
        { _id: '1', label: 'Cấu hình đơn vị', link: 'unc/unc-cau-hinh', api: 'unc-cau-hinh', guest: false, icon: 'description', index: [] },
        { _id: '2', label: 'Danh sách ngân hàng', link: 'unc/unc-ngan-hang', api: 'unc-ngan-hang', guest: false, icon: 'description', index: ['KhachHang'] },
        { _id: '3', label: 'Lập ủy nhiệm chi', link: 'unc/unc-khach-hang', api: 'unc-khach-hang', guest: false, icon: 'description', index: ['bin', 'SoTK'] },
        { _id: '4', label: 'Danh sách phiếu UNC', link: 'unc', api: 'unc-phieu', guest: false, icon: 'description', index: ['SoPhieu', 'NoiDung', 'KhachHang'] },
      ]
    },
    {
      _id: '9', label: 'Kinh Doanh', link: 'kinh-doanh', dbName: 'kinh-doanh', dbVer: 18, global: true, guest: false, icon: 'construction',
      sub: [
        { _id: '1', label: 'Hồ sơ trung áp', link: 'kinh-doanh/hsta', api: 'hsta', guest: false, icon: 'description', index: ['TEN_CONG_TRINH', 'TRANG_THAI', 'MA_KHANG'] },
        { _id: '2', label: 'SMS', link: 'kinh-doanh/sms-doc-thu', api: 'sms-doc-thu', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { _id: '3', label: 'Ghi chỉ số', link: 'kinh-doanh/ghi-chi-so', api: 'ghi-chi-so', guest: false, icon: 'quiz', index: ['MA_KHANG', 'SO_CTO', 'PHAN_CONG', 'MA_SOGCS', 'BCS', 'KYCS', 'SO_GHI', 'TEN_TRAM', 'TRANG_THAI'] },
        { _id: '4', label: 'Lịch ghi chỉ số', link: 'kinh-doanh/lich-ghi-chi-so', api: 'lich-ghi-chi-so', guest: false, icon: 'quiz', index: ['PHAN_CONG', 'MA_SOGCS', 'MA_KV', 'TEN_TRAM'] },
        { _id: '5', label: 'Bảo đảm hợp đồng', link: 'kinh-doanh/ky-quy', api: 'ky-quy', guest: false, icon: 'quiz', index: ['MA_KHANG', 'TEN_KHANG', 'GHI_CHU'] },
        { _id: '7', label: '', link: '', api: 'ky-quy-nhat-ky', guest: false, icon: 'quiz', index: ['MA_KHANG'] },
        { _id: '6', label: 'Dự báo', link: 'kinh-doanh/du-bao', api: 'du-bao', guest: false, icon: 'quiz', index: [] },
      ]
    },
    {
      _id: '10', label: 'Kinh Doanh', link: 'nlmt', dbName: 'kinh-doanh', dbVer: 18, global: true, guest: false, icon: 'construction',
      sub: [
        { _id: '1', label: 'Lập bảng kê', link: 'nlmt/nlmt-kinh-doanh', api: 'nlmt-kinh-doanh', guest: false, icon: 'description', index: [ 'TenBangKe', 'MaKhachHang', 'KhacHang'] },
        { _id: '2', label: 'Khách hàng', link: 'nlmt/nlmt-khach-hang', api: 'nlmt-khach-hang', guest: false, icon: 'description', index: [  'MaKhachHang', 'KhacHang', 'Email'] },
        { _id: '3', label: 'Danh sách bảng kê', link: 'nlmt/nlmt-pay', api: 'nlmt-pay', guest: false, icon: 'description', index: [ 'TenBangKe'] },
      ]
    },
  ]


export interface ENVIDB {
  dbName: string;
  link: string;
  dbVer: number;
  label: string;
  global: boolean;
  guest?: boolean;
  icon?: string;
  sub: SUBNAV[];
  _id: string
}

export interface SUBNAV {
  api: string;
  link: string;
  label: string;
  index: string[];
  icon?: string;
  guest?: boolean
  _id: string
}


