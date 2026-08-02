"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["default-src_app_cmis4_cmis4_service_ts"],{

/***/ 72676:
/*!*********************************!*\
  !*** ./src/app/cmis4/apiURL.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_AUTH: () => (/* binding */ API_AUTH),
/* harmony export */   API_BAN_LE_DIEN_NANG: () => (/* binding */ API_BAN_LE_DIEN_NANG),
/* harmony export */   API_BCAOLICHSU: () => (/* binding */ API_BCAOLICHSU),
/* harmony export */   API_BCAOTHANG: () => (/* binding */ API_BCAOTHANG),
/* harmony export */   API_BDONGTTHAO: () => (/* binding */ API_BDONGTTHAO),
/* harmony export */   API_BIEN_DONG_THIET_BI: () => (/* binding */ API_BIEN_DONG_THIET_BI),
/* harmony export */   API_CAY_TTHAT: () => (/* binding */ API_CAY_TTHAT),
/* harmony export */   API_CHISOKHANG: () => (/* binding */ API_CHISOKHANG),
/* harmony export */   API_CHI_SO_TTHAT: () => (/* binding */ API_CHI_SO_TTHAT),
/* harmony export */   API_COMMON: () => (/* binding */ API_COMMON),
/* harmony export */   API_CSBT: () => (/* binding */ API_CSBT),
/* harmony export */   API_DANH_MUC: () => (/* binding */ API_DANH_MUC),
/* harmony export */   API_DICH_VU: () => (/* binding */ API_DICH_VU),
/* harmony export */   API_DIEN_NONG_THON: () => (/* binding */ API_DIEN_NONG_THON),
/* harmony export */   API_EMAIL: () => (/* binding */ API_EMAIL),
/* harmony export */   API_FILEDTU: () => (/* binding */ API_FILEDTU),
/* harmony export */   API_HDON_DTU: () => (/* binding */ API_HDON_DTU),
/* harmony export */   API_HDON_D_CHINH: () => (/* binding */ API_HDON_D_CHINH),
/* harmony export */   API_HDON_PSINH: () => (/* binding */ API_HDON_PSINH),
/* harmony export */   API_HOP_DONG: () => (/* binding */ API_HOP_DONG),
/* harmony export */   API_HOSO_TBI: () => (/* binding */ API_HOSO_TBI),
/* harmony export */   API_INTERFACE: () => (/* binding */ API_INTERFACE),
/* harmony export */   API_KTRA_GSAT_MBD: () => (/* binding */ API_KTRA_GSAT_MBD),
/* harmony export */   API_NO_KHO_DOI: () => (/* binding */ API_NO_KHO_DOI),
/* harmony export */   API_QTHT: () => (/* binding */ API_QTHT),
/* harmony export */   API_QUAN_LY_THU_HO: () => (/* binding */ API_QUAN_LY_THU_HO),
/* harmony export */   API_QUAN_LY_TIEP_NHAN_LUOI_DIEN: () => (/* binding */ API_QUAN_LY_TIEP_NHAN_LUOI_DIEN),
/* harmony export */   API_REPORT: () => (/* binding */ API_REPORT),
/* harmony export */   API_TTIEN_CNO: () => (/* binding */ API_TTIEN_CNO),
/* harmony export */   API_UDUNG_HTRUONG_HCMC: () => (/* binding */ API_UDUNG_HTRUONG_HCMC),
/* harmony export */   API_UTILS: () => (/* binding */ API_UTILS),
/* harmony export */   PHAN_HE: () => (/* binding */ PHAN_HE),
/* harmony export */   SERVICE_GATEWAY: () => (/* binding */ SERVICE_GATEWAY)
/* harmony export */ });
class PHAN_HE {
  static {
    this.REPORT = 'Report';
  }
  static {
    this.COMMON = 'Common';
  }
  static {
    this.DICHVU = 'DichVu';
  }
  static {
    this.FILEDTU = 'FileDTu';
  }
  static {
    this.HOPDONG = 'HopDong';
  }
  static {
    this.HOSOTBI = 'HoSoTBi';
  }
  static {
    this.BDONGTBI = 'BDongTBi';
  }
  static {
    this.BDONGTTHAO = 'BDongTThao';
  }
  static {
    this.QLYSOGCS = 'QLySoGCS';
  }
  static {
    this.CHISOKHANG = 'ChiSoKHang';
  }
  static {
    this.HDONPSINH = 'HDonPSinh';
  }
  static {
    this.HDONDCHINH = 'HDonDChinh';
  }
  static {
    this.HDONDTU = 'HDonDTu';
  }
  static {
    this.TTIENCNO = 'TTienCNo';
  }
  static {
    this.NOKHODOI = 'NoKhoDoi';
  }
  static {
    this.PHIDCAT = 'PhiDCat';
  }
  static {
    this.KHONO = 'KhoNo';
  }
  static {
    this.CAYTTHAT = 'CayTThat';
  }
  static {
    this.CHISOTTHAT = 'ChiSoTThat';
  }
  static {
    this.GNHANDNANG = 'GNhanDNang';
  }
  static {
    this.QTRIHTHONG = 'QTriHThong';
  }
  static {
    this.SMS = 'SMS';
  }
  static {
    this.EMAIL = 'Email';
  }
  static {
    this.TBIHTRUONG = 'TbiHTruong';
  }
  static {
    this.KTRAGSATMBD = 'KTraGSatMBD';
  }
  static {
    this.BANLEDNANG = 'BanLeDNang';
  }
  static {
    this.DANHMUC = 'DanhMuc';
  }
  static {
    this.BCAOTHANG = 'BCaoThang';
  }
  static {
    this.BCAOLICHSU = 'BCaoLichSu';
  }
  static {
    this.QTRIDHANH = 'QTriDHanh';
  }
  static {
    this.INTERFACE = 'Interface';
  }
  static {
    this.DIENNTHON = 'DienNThon';
  }
  static {
    this.CSBT = 'CSBT';
  }
  static {
    this.EVNHUB = 'EVNHUB';
  }
  static {
    this.UDUNGHTRUONGHCMC = 'UDungHTruongHCMC';
  }
  static {
    this.AUTH = 'Auth';
  }
  static {
    this.QUANLYTHUHO = 'QLyThuHo';
  }
  static {
    this.QUANLYTIEPNHANLUOIDIEN = 'QLyTNhanLDien';
  }
  static {
    this.DIENMATTROI = 'DienMatTroi';
  }
  static {
    this.UTILS = 'Utils';
  }
}
class API_CSBT {
  static {
    this.POST_GET_BTHUONG = 'GetBThuong';
  }
  static {
    this.POST_GET_BTHUONG_C_TIET = 'GetBThuongCTiet';
  }
  static {
    this.POST_INSERT_CSODDO = 'InsertCSoDDo';
  }
}
class API_QUAN_LY_TIEP_NHAN_LUOI_DIEN {
  static {
    this.POST_GET_LIST_DANH_GIA_TNLD = 'getListTCTDanhGiaCongTrinhDien';
  }
  static {
    this.POST_INSERT_DANH_GIA_TNLD = 'insertTCTDanhGiaCongTrinhDien';
  }
  static {
    this.POST_UPDATE_DANH_GIA_TNLD = 'updateTCTDanhGiaCongTrinhDien';
  }
  static {
    this.POST_DELETE_DANH_GIA_TNLD = 'deleteTCTDanhGiaCongTrinhDien';
  }
  static {
    this.INSERT_TANG_TAI_SAN_TNLD = 'insertTangTSCongTrinhDien';
  }
  static {
    this.UPDATE_TANG_TAI_SAN_TNLD = 'updateTangTSCongTrinhDien';
  }
  static {
    this.DELETE_TANG_TAI_SAN_TNLD = 'deleteTangTSCongTrinhDien';
  }
  static {
    this.INSERT_CHU_SO_HUU_TNLD = 'insertChuSoHuuCongTrinhDien';
  }
  static {
    this.UPDATE_CHU_SO_HUU_TNLD = 'updateChuSoHuuCongTrinhDien';
  }
  static {
    this.DELETE_CHU_SO_HUU_TNLD = 'deleteChuSoHuuCongTrinhDien';
  }
  static {
    this.GET_TIM_KIEM_CHU_SO_HUU_TNLD = 'getTimKiemChuSoHuuCongTrinhDien';
  }
  static {
    this.POST_TIM_KIEM_CONG_TRINH_DIEN_TNLD = 'timKiemCongTrinhDienTiepNhan';
  }
  static {
    this.POST_TIM_KIEM_CONG_TRINH_DIEN_TNLD_LAZY = 'timKiemCongTrinhDienTiepNhanLazy';
  }
  static {
    this.POST_GET_CONG_TRINH_DIEN_TIEP_NHAN = 'getCongTrinhDienTiepNhan';
  }
  static {
    this.POST_INSERT_KIEM_KE_CONG_TRINH = 'insertKiemKeCongTrinhDien';
  }
  static {
    this.POST_UPDATE_KIEM_KE_CONG_TRINH = 'updateKiemKeCongTrinhDien';
  }
  static {
    this.POST_DELETE_KIEM_KE_CONG_TRINH = 'deleteKiemKeCongTrinhDien';
  }
  static {
    this.POST_INSERT_DONVI_DANHGIA_TAISAN_CONGTRINHDIEN = 'insertDonViDanhGiaTaiSanCongTrinhDien';
  }
  static {
    this.POST_UPDATE_DONVI_DANHGIA_TAISAN_CONGTRINHDIEN = 'updateDonViDanhGiaTaiSanCongTrinhDien';
  }
  static {
    this.POST_DELETE_DONVI_DANHGIA_TAISAN_CONGTRINHDIEN = 'deleteDonViDanhGiaTaiSanCongTrinhDien';
  }
  static {
    this.POST_INSERT_HOAN_VON_CONG_TRINH_DIEN = 'insertHoanVonCongTrinhDien';
  }
  static {
    this.POST_DELETE_HOAN_VON_CONG_TRINH_DIEN = 'deleteHoanVonCongTrinhDien';
  }
  static {
    this.POST_UPDATE_HOAN_VON_CONG_TRINH_DIEN = 'updateHoanVonCongTrinhDien';
  }
  static {
    this.POST_INSERT_TONGCONGTY_DANHGIA_TAISAN_CONGTRINHDIEN = 'insertTongCongTyDanhGiaTaiSanCongTrinhDien';
  }
  static {
    this.POST_UPDATE_TONGCONGTY_DANHGIA_TAISAN_CONGTRINHDIEN = 'updateTongCongTyDanhGiaTaiSanCongTrinhDien';
  }
  static {
    this.POST_DELETE_TONGCONGTY_DANHGIA_TAISAN_CONGTRINHDIEN = 'deleteTongCongTyDanhGiaTaiSanCongTrinhDien';
  }
  static {
    this.POST_GET_LIST_CHUSOHUU_CONGTRINHDIEN = 'getListChuSoHuuCongTrinhDien';
  }
  static {
    this.POST_INSERT_BAN_GIAO_CONG_TRINH = 'insertThongTinBanGiaoCongTrinh';
  }
  static {
    this.POST_UPDATE_BAN_GIAO_CONG_TRINH = 'updateThongTinBanGiaoCongTrinh';
  }
  static {
    this.POST_DELETE_BAN_GIAO_CONG_TRINH = 'deleteThongTinBanGiaoCongTrinh';
  }
  static {
    this.POST_INSERT_CONGTRINHDIEN = 'insertCTrinhTNLD';
  }
  static {
    this.POST_UPDATE_CONGTRINHDIEN = 'updateCTrinhTNLD';
  }
  static {
    this.POST_DELETE_CONGTRINHDIEN = 'deleteCTrinhTNLD';
  }
  static {
    this.POST_INSERT_DONG_CONG_TRINH_DIEN = 'insertDongCongTrinhCongTrinhDien';
  }
  static {
    this.POST_DELETE_DONG_CONG_TRINH_DIEN = 'deleteDongCongTrinhCongTrinhDien';
  }
  static {
    this.POST_UPDATE_DONG_CONG_TRINH_DIEN = 'updateDongCongTrinhCongTrinhDien';
  }
  static {
    this.POST_INSERT_TONGCONGTY_BAO_CAO_QSH_CONG_TRINH_DIEN = 'insertThongTinTCTCapNhatBaoCaoQSH';
  }
  static {
    this.POST_UPDATE_TONGCONGTY_BAO_CAO_QSH_CONG_TRINH_DIEN = 'updateThongTinTCTCapNhatBaoCaoQSH';
  }
  static {
    this.POST_DELETE_TONGCONGTY_BAO_CAO_QSH_CONG_TRINH_DIEN = 'deleteThongTinTCTCapNhatBaoCaoQSH';
  }
  static {
    this.POST_GET_LIST_CONG_TRINH_DIEN = 'getListThongTinCongTrinhDien';
  }
  static {
    this.POST_TIM_KIEM_CHI_PHI_CONG_TRINH_DIEN = 'getTimKiemChiPhiCongTrinhDien';
  }
  static {
    this.POST_INSERT_CHI_PHI_CONG_TRINH_DIEN = 'insertChiPhiCongTrinhDien';
  }
  static {
    this.POST_UPDATE_CHI_PHI_CONG_TRINH_DIEN = 'updateChiPhiCongTrinhDien';
  }
  static {
    this.POST_DELETE_CHI_PHI_CONG_TRINH_DIEN = 'deleteChiPhiCongTrinhDien';
  }
}
class API_QUAN_LY_THU_HO {
  static {
    this.POST_TIM_KIEM_YEU_CAU_QLTH_LAZY = 'timkiemHopDongQLTHLazy';
  }
  static {
    this.POST_TIM_KIEM_YEU_CAU_QLTH = 'timkiemHopDongQLTH';
  }
  static {
    this.GET_INFO_MENU_CHUCNANG = 'GetInfoMenuChucNang';
  }
  static {
    this.POST_THONG_TIN_HOP_DONG_QLTH = 'getThongTinHopDongQLTH';
  }
  static {
    this.POST_INSERT_CNHAT_HSO_BDAM_HDONG = 'insertCNhatHSoBDamHDong';
  }
  static {
    this.POST_UPDATE_CNHAT_HSO_BDAM_HDONG = 'updateCNhatHSoBDamHDong';
  }
  static {
    this.POST_DELETE_CNHAT_HSO_BDAM_HDONG = 'deleteCNhatHSoBDamHDong';
  }
  static {
    this.GET_DSACH_QTOAN_TCTG = 'getDSachQToanTCTG';
  }
  static {
    this.GET_DSACH_QTOAN_HTKD = 'getDSachQtoanHTKD';
  }
  static {
    this.TTOAN_CPHI_TCTG = 'tToanCPhiQToanTCTG';
  }
  static {
    this.TTOAN_CPHI_HTKD = 'tToanCPhiQToanHTKD';
  }
  static {
    this.QTOAN_TCONG_TCTG = 'qToanTienCongTCTG';
  }
  static {
    this.QTOAN_PHI_HTKD = 'qToanPhiHTKD';
  }
  static {
    this.GET_TCHUC_DICHVU = 'getTTToChucDichVu';
  }
  static {
    this.DELETE_QTOAN_TCTG = 'deleteQToanTienCongTCTG';
  }
  static {
    this.DELETE_QTOAN_HTKD = 'deleteQToanPhiHTKD';
  }
  static {
    this.POST_INSERT_THONG_TIN_HOP_DONG_QLTH = 'insertThongTinHopDongQLTH';
  }
  static {
    this.POST_UPDATE_THONG_TIN_HOP_DONG_QLTH = 'updateThongTinHopDongQLTH';
  }
  static {
    this.POST_CAP_NHAT_THONG_TIN_HD_QLTH = 'capNhatThongTinHopDongQLTH';
  }
  static {
    this.POST_HUY_CAP_NHAT_THONG_TIN_HD_QLTH = 'huyCapNhatThongTinHopDongQLTH';
  }
  static {
    this.POST_CHECK_CAP_NHAT_THONG_TIN_HD_QLTH = 'checkCapNhatThongTinHopDongQLTH';
  }
  static {
    this.POST_DELETE_THONG_TIN_HOP_DONG_QLTH = 'deleteThongTinHopDongQLTH';
  }
  static {
    this.POST_XAC_NHAN_HIEU_LUC_HOP_DONG = 'xacNhanHieuLucHopDongQLTH';
  }
  static {
    this.GET_TTIN_TTOAN_QLTH = 'getDSachTTinTToanQLTH';
  }
  static {
    this.INSERT_PHIEU_TTOAN_QLTH = 'insertPhieuTToanQLTH';
  }
  static {
    this.UPDATE_PHIEU_TTOAN_QLTH = 'updatePhieuTToanQLTH';
  }
  static {
    this.DELETE_PHIEU_TTOAN_QLTH = 'deletePhieuTToanQLTH';
  }
  static {
    this.POST_HIEU_CHINH_THONG_TIN_HO_SO_BAO_DAM_HOP_DONG = 'hieuChinhThongTinHoSoBaoDamHopDong';
  }
  static {
    this.POST_HUY_HIEU_CHINH_THONG_TIN_HO_SO_BAO_DAM_HOP_DONG = 'huyHieuChinhThongTinHoSoBaoDamHopDong';
  }
  static {
    this.POST_CHAM_DUT_HOP_DONG_QLTH = 'capNhatChamDuHopDongQLTH';
  }
  static {
    this.POST_HUY_CHAM_DUT_HOP_DONG_QLTH = 'huyChamDuHopDongQLTH';
  }
}
class API_NO_KHO_DOI {
  static {
    this.TIM_KIEM_KHANG_QUA_TRINH_THU_HOI_NO = 'timKiemThongTinKhachHangNKD';
  }
  static {
    this.POST_TRA_CUU_NO_KHO_DOI = 'timKiemThongTinKhachHangNKD';
  }
  static {
    this.POST_DELETE_HDON_KDOI_INDUYETDNGHIKNO = 'DeleteHDonKDoiInDuyetDNghiKNo';
  }
  static {
    this.POST_GET_DS_KHTT = 'getDsKHTT';
  }
  static {
    this.POST_GET_DS_ID_HDON = 'getDsIdHdon';
  }
  static {
    this.POST_DELETE_HDON_KDOI_THEO_LO = 'deleteHDonKDoiTheoLo';
  }
  static {
    this.POST_UPDATE_HDON_KDOI_THEO_LO = 'updateHDonKDoiTheoLo';
  }
  static {
    this.POST_INSERT_HDON_KDOI_THEO_LO = 'insertHDonKDoiTheoLo';
  }
  static {
    this.POST_GET_HDON_NO_KHO_DOI = 'getHDon_NoKhoDoi';
  }
  static {
    this.POST_GET_DS_CHUYEN_NO = 'getDsChuyenNo';
  }
  static {
    this.POST_GET_DS_HDON_K_DOI = 'getDsHDonKDoi';
  }
  static {
    this.POST_GET_DS_TLY_NKD = 'getDsThanhLyNkd';
  }
  static {
    this.POST_GET_HUY_DS_NKD = 'getHuyDanhSachNKD';
  }
  static {
    this.POST_HUY_DS_NKD = 'getXoaDanhSachNKD';
  }
  static {
    this.POST_GET_NO_SAU_THANH_LY = 'timKiemNoSauThanhLy';
  }
  static {
    this.POST_INSERT_PHIEU_THU_HOI_NO = 'themPhieuNoSauThanhLy';
  }
  static {
    this.POST_UPDATE_PHIEU_THU_HOI_NO = 'suaPhieuNoSauThanhLy';
  }
  static {
    this.POST_DELETE_PHIEU_THU_HOI_NO = 'xoaPhieuNoSauThanhLy';
  }
  static {
    this.POST_HUY_THANH_LY_KHANG_NKD = 'huyThanhLyKHangNKD';
  }
  static {
    this.POST_THANH_LY_KHANG_NKD = 'thanhLyKHangNKD';
  }
  static {
    this.POST_GET_DSACH_KHANG_THANH_LY = 'getDsachKhangTly';
  }
  static {
    this.POST_INSERT_LAP_DS_NO_KHO_DOI = 'insertLapDsNoKhoDoi';
  }
  static {
    this.POST_GET_DANH_SACH_LAP_NO_KHO_DOI = 'getDanhSachLapNoKhoDoi';
  }
  static {
    this.POST_GET_CN_KHANG_NKD = 'getCnKhangNkd';
  }
  static {
    this.POST_GET_LOAI_HSO = 'getLoaiHoSoNKD';
  }
  static {
    this.GET_HSO_AND_LDO_NKD = 'getHsoKhangAndLydoNKD';
  }
}
class API_BAN_LE_DIEN_NANG {
  static {
    this.POST_GETLUONGTT = 'getLuongTT';
  }
  static {
    this.POST_CAPNHATLUONGTT = 'capnhatLuongTT';
  }
  static {
    this.POST_DELETELUONGTT = 'deleteLuongTT';
  }
  static {
    this.POST_GETDINHMUCDONGIA = 'getDinhMucDonGia';
  }
  static {
    this.POST_SELECTDINHMUCDONGIABYID = 'selectDinhMucDonGiaByID';
  }
  static {
    this.POST_CAPNHATDINHMUCDONGIA = 'capnhatDinhMucDonGia';
  }
  static {
    this.POST_DELETEDINHMUCDONGIA = 'deleteDinhMucDonGia';
  }
}
class API_KTRA_GSAT_MBD {
  static {
    this.POST_GET_REPORT_SMS = 'getReportSMS';
  }
  static {
    this.POST_GET_YCAU_TRA_CUU = 'getYcauTraCuu';
  }
  static {
    this.POST_GET_HDON_LAP_TTIEP_BY_ID = 'getHdonLapTTiepByID';
  }
  static {
    this.POST_INSERT_GS_KE_HOACH = 'InsertGS_KE_HOACH';
  }
  static {
    this.POST_DELETE_GS_KE_HOACH = 'DeleteGS_KE_HOACH';
  }
  static {
    this.POST_SELECT_GS_KE_HOACH = 'Select_GS_KE_HOACH';
  }
  static {
    this.POST_SELECT_GS_XLY_CQUAN = 'Select_GS_XLY_CQUAN';
  }
  static {
    this.POST_DELETE_XLY_COQUAN = 'DeleteXlyCoquan';
  }
  static {
    this.POST_INSERT_XLY_COQUAN = 'InsertXlyCoquan';
  }
  static {
    this.POST_UPDATE_NGAY_THANG_NAM_HOAN_THANH = 'UpdateNgayThangNamHoanThanh';
  }
  static {
    this.POST_DELETE_TIEN_TRINH_HOAN_THANH = 'Delete_TienTrinhHoanThanh';
  }
  static {
    this.POST_INSERT_TIEN_TRINH_HOAN_THANH = 'Insert_TienTrinhHoanThanh';
  }
  static {
    this.POST_UPDATE_XNHT_BBAN_KTRA = 'UpdateXNHTBBanKtra';
  }
  static {
    this.POST_GET_XNHTB_BAN_KTRA = 'GetXNHTBBanKtra';
  }
  static {
    this.POST_UPDATE_PA_XLY_CQUAN = 'updatePaXlyCquan';
  }
  static {
    this.POST_INSERT_PA_XLY_CQUAN = 'insertPaXlyCquan';
  }
  static {
    this.POST_DELETE_PA_XLY_COQUAN = 'deletePaXlyCoquan';
  }
  static {
    this.POST_SELECT_GS_YEU_CAU_VPHC_DAXLY = 'Select_GS_YEU_CAU_VPHC_DAXLY';
  }
  static {
    this.POST_SELECT_GS_YEU_CAU_VPHC = 'Select_GS_YEU_CAU_VPHC';
  }
  static {
    this.POST_TIM_KIEM_YEU_CAU_KTGSMBD = 'timKiemYeuCauKTGSMBD';
  }
  static {
    this.POST_DELETE_BBAN_VPHC = 'DeleteBBanVPHC';
  }
  static {
    this.POST_SELECT_GS_BBAN_VPHC = 'Select_GS_BBAN_VPHC';
  }
  static {
    this.POST_UPDATE_BBAN_VPHC = 'UpdateBBanVPHC';
  }
  static {
    this.POST_INSERT_BBAN_VPHC = 'InsertBBanVPHC';
  }
  static {
    this.POST_GHI_DU_LIEU_TT = 'ghiDuLieuTT';
  }
  static {
    this.POST_GET_YCAU_GSMBD = 'getYCauGSMBD';
  }
  static {
    this.POST_KTRA_HDON_BTHUONG = 'KTraHdonBthuong';
  }
  static {
    this.POST_LAY_HDON_BTHUONG = 'LayHdonBthuong';
  }
  static {
    this.POST_HUY_DUYET_HDON_BTHUONG = 'HuyDuyetHdonBthuong';
  }
  static {
    this.POST_DUYET_HDON_BTHUONG = 'DuyetHdonBthuong';
  }
  static {
    this.POST_GET_NGAY_KTRA = 'getNgayKtra';
  }
  static {
    this.POST_GET_GS_PHUONG_ANPHAT = 'getGsPhuongAnPhat';
  }
  static {
    this.POST_GET_HDON_BTHUONG_KTGS = 'getHdonBThuongKTGS';
  }
  static {
    this.POST_GET_ID_HDON_FROM_NGUOI_SUA_GSYCAU = 'getIdHdonfromNguoiSuaGSYcau';
  }
  static {
    this.POST_GET_NDUNG_BBAN_BY_ID = 'getNDungBBanByID';
  }
  static {
    this.POST_GET_REPORT_IN_BTHUONGTTHU = 'getReportInBthuongTThu';
  }
  static {
    this.POST_XOA_HDONBTHUONG = 'XoaHdonBthuong';
  }
  static {
    this.POST_TIM_HDON_BTHUONG_THEODKIEN = 'TimHdonBthuongTheoDkien';
  }
  static {
    this.POST_GET_YCAU_TTOAN_BTHUONG = 'getYcauTToanBThuong';
  }
  static {
    this.POST_SELECT_DATA_ASSIGNED_NHAN_VIEN = 'SelectDataAssignedNhanVien';
  }
  static {
    this.POST_UPLOAD_FILE_GSMBD = 'Uploadfile_GSMBD';
  }
  static {
    this.POST_DELETE_BBANKTRA = 'DeleteBBanKtra';
  }
  static {
    this.POST_UPDATE_BBANKTRA = 'UpdateBBanKtra';
  }
  static {
    this.POST_INSERT_BBANKTRA = 'InsertBBanKtra';
  }
  static {
    this.POST_SELECT_DS_YEU_CAU_KTHUC_BUOC = 'Select_DS_YEU_CAU_KTHUC_BUOC';
  }
  static {
    this.POST_SELECT_GS_YEU_CAU_BDAU_BUOC = 'Select_GS_YEU_CAU_BDAU_BUOC';
  }
  static {
    this.POST_GET_BBANK_TRA_BYKEY = 'getBBanKTraByKey';
  }
  static {
    this.POST_TIM_KIEM_YEUCAU = 'timKiemYeuCau';
  }
  static {
    this.POST_DELETE_THONGTINPHANCONG = 'Delete_ThongTinPhanCong';
  }
  static {
    this.POST_INSERT_THONGTINPHANCONG = 'Insert_ThongTinPhanCong';
  }
  static {
    this.POST_GET_LIST_ASSIGNED = 'Get_List_Assigned';
  }
  static {
    this.POST_DELETE_LSTYEUCAUKTRA = 'DeletelstYeucauKtra';
  }
  static {
    this.POST_GET_LSTYEUCAUKTRA = 'getlstYeucauKtra';
  }
  static {
    this.POST_SAVE_LSTYCAUKTRA = 'Save_lstYcauKtra';
  }
  static {
    this.POST_SELECT_GS_KE_HOACH_TIMKIEM = 'Select_GS_KE_HOACH_TimKiem';
  }
  static {
    this.POST_DELETE_GS_YEU_CAU = 'Delete_GS_YEU_CAU';
  }
  static {
    this.POST_UPDATE_GS_YEU_CAU = 'Update_GS_YEU_CAU';
  }
  static {
    this.POST_INSERT_GS_YEU_CAU = 'Insert_GS_YEU_CAU';
  }
  static {
    this.POST_SELECT_GS_YEU_CAU = 'Select_GS_YEU_CAU';
  }
  static {
    this.POST_INSERT_TIM_HDON_BTHUONG = 'InsertTimHdonBthuong';
  }
  static {
    this.POST_GET_ALL_DATA_KTAO_SLIEU_BCAOKTGS = 'GetAllDataKTaoSLieuBCaoKTGS';
  }
  static {
    this.POST_DELETE_ALL_DATA_KTAO_SLIEU_BCAO_KTGS = 'DeleteAllDataKTaoSLieuBCaoKTGS';
  }
  static {
    this.POST_INSERT_DATA_KTAO_SLIEU_BCAO_KTGS = 'InserDataKTaoSLieuBCaoKTGS';
  }
  static {
    this.POST_GET_DANH_MUC_GSDN = 'getDanhMucGsdn';
  }
  static {
    this.POST_INSERT_PHUONG_AN_TINH_BOI_THUONG = 'Insert_PhuongAnTinhBoiThuong';
  }
  static {
    this.POST_SELECT_GS_PAN_PHAT = 'Select_GS_PAN_PHAT';
  }
  static {
    this.POST_DELETE_PHUONG_AN_TINH_BOI_THUONG = 'Delete_PhuongAnTinhBoiThuong';
  }
}
class API_BIEN_DONG_THIET_BI {
  static {
    this.POST_TIM_KIEM_BB_NHAN_THIET_BI_GUI = 'TimkiemBbNhanthietbigui';
  }
  static {
    this.POST_UPDATE_NHAN_BBANGUIKD = 'Update_Nhan_BbanGuiKD';
  }
  static {
    this.POST_SEARCH_TBI_DA_GUI_KDINH_BYID = 'SearchTbidaguikdinh_byId';
  }
  static {
    this.POST_SEARCH_CTO_HTRUONG_TU = 'searchCtoHtruongTU';
  }
  static {
    this.POST_INSERT_LIST_KDINH_TU = 'InsertListKdinhTu';
  }
  static {
    this.POST_HUY_LST_KIEM_DINH_TU = 'huylstKiemdinhTu';
  }
  static {
    this.POST_HUY_KIEM_DINH_TU = 'huyKiemdinhTu';
  }
  static {
    this.POST_GET_BBAN_KDINH_TU = 'getBBanKdinhTu';
  }
  static {
    this.POST_SEARCH_TU = 'searchTu';
  }
  static {
    this.POST_INSERT_KDINH_TU = 'insertKDinhtu';
  }
  static {
    this.POST_SEARCH_CTO_HTRUONG_TI = 'searchCtoHtruongTI';
  }
  static {
    this.POST_INSERT_LIST_KDINH_TI = 'InsertListKdinhTi';
  }
  static {
    this.POST_HUY_LST_KIEM_DINH_TI = 'huylstKiemdinhTi';
  }
  static {
    this.POST_HUY_KIEM_DINH_TI = 'huyKiemdinhTi';
  }
  static {
    this.POST_GET_BBAN_KDINH_TI = 'getBBanKdinhTi';
  }
  static {
    this.POST_SEARCH_TI = 'searchTi';
  }
  static {
    this.POST_INSERT_KDINH_TI = 'insertKDinhti';
  }
  static {
    this.POST_SEARCH_CTO = 'searchCto';
  }
  static {
    this.POST_INSERT_LIST_KDINH_CTO = 'InsertListKdinhCto';
  }
  static {
    this.POST_HUY_LST_KIEM_DINH = 'huylstKiemdinh';
  }
  static {
    this.POST_HUY_KIEM_DINH = 'huyKiemdinh';
  }
  static {
    this.POST_GET_BBAN_KDINH = 'getBBanKdinh';
  }
  static {
    this.POST_SEARCH_CTO_HTRUONG = 'searchCtoHtruong';
  }
  static {
    this.POST_GET_BBAN_GUI_BYMA_TBI = 'getBBanGui_byMaTbi';
  }
  static {
    this.POST_INSERT_KDINH_CTO = 'insertKDinhcto';
  }
  static {
    this.POST_UPDATE_XNHAN_TLY = 'Update_XnhanTly';
  }
  static {
    this.POST_GET_TBI_XN_TLY = 'getTbiXnTly';
  }
  static {
    this.POST_GET_TBI_XNTLY = 'get_Ctiet_XNTly';
  }
  static {
    this.POST_SEARCH_TTIN_LTRINH = 'searchTTinLtrinh';
  }
  static {
    this.POST_UPDATE_TTIN_LTRINH = 'updateTTinLtrinh';
  }
  static {
    this.POST_SEARCH_BB_TTIN_LTRINH = 'searchbbTTinLtrinh';
  }
  static {
    this.POST_INSERT_BBAN_C_KHO = 'insertBBanCKho';
  }
  static {
    this.POST_UPDATE_BBAN_CHUYEN_KHO = 'Update_BBan_ChuyenKho';
  }
  static {
    this.POST_TIM_TBI_CHUYEN_KHO_BYSOCTO = 'TimTbiChuyenkho_Bysocto';
  }
  static {
    this.POST_TIM_TBI_DA_C_KHO_BYID = 'TimTbidaCKho_byId';
  }
  static {
    this.POST_TIM_BIEN_BAN_DA_CKHO = 'TimBienbandaCKho';
  }
  static {
    this.POST_DELETE_BBAN_CKHO = 'Delete_BBan_CKho';
  }
}
class API_CHI_SO_TTHAT {
  static {
    this.POST_DELETE_DATA_SLUONG_PTHUC = 'deleteDataSLuongPthuc';
  }
  static {
    this.POST_GET_DU_LIEU_SLUONG_PTHUC = 'getDuLieuSluongPthuc';
  }
  static {
    this.POST_CAP_NHAT_DULIEU_SLUONG_PTHUC = 'capNhatDuLieuSluongPthuc';
  }
  static {
    this.POST_GET_SAN_LUONG_DN = 'getSanLuongDN';
  }
  static {
    this.POST_UPDATE_DATA_KH_TT = 'updateDataKHTT';
  }
  static {
    this.POST_GET_DATA_KH_TT = 'getDataKHTT';
  }
  static {
    this.POST_EXCUTE_LANBC = 'Excute_lanBC';
  }
  static {
    this.POST_GET_LAN_BCAO_BYID = 'getLanBCaobyID';
  }
  static {
    this.POST_UPDATE_DATASANLUONGST = 'updateDataSanLuongST';
  }
  static {
    this.POST_GET_DATASANLUONGST = 'getDataSanLuongST';
  }
  static {
    this.POST_EXCUTE_TINHSL = 'Excute_TinhSL';
  }
  static {
    this.POST_GET_LSTSOGCS_TINHSL = 'getLstSogcs_TinhSL';
  }
  static {
    this.POST_GET_LSTLICHSOGCS = 'getLstLichSogcs';
  }
  static {
    this.POST_GET_CHISODDO = 'getchisoddo';
  }
  static {
    this.POST_GET_CSO_TTHAO_BYMADDO = 'getCSo_TThao_ByMaDDo';
  }
  static {
    this.POST_EXCUTENHAPCS = 'ExcuteNhapCS';
  }
  static {
    this.POST_GET_GCSLICHGCSBYNGAY = 'get_gcslichgcsByNgay';
  }
  static {
    this.POST_GET_CHISO = 'getChiso';
  }
  static {
    this.POST_GET_GCSLICHGCSBYMASOGCS = 'get_gcslichgcsByMaSogcs';
  }
  static {
    this.POST_GET_DATELICHGCSHHC = 'getDatelichgcsHHC';
  }
  static {
    this.POST_GET_CSONHANHHC = 'getCsoNhanHHC';
  }
  static {
    this.POST_INSERT_TTCHISO = 'insertTTChiSo';
  }
  static {
    this.POST_DELETE_CHISO = 'DeleteChiSo';
  }
  static {
    this.POST_UPDATETTLICH = 'updateTTLich';
  }
  static {
    this.POST_GET_HHCSERVICE = 'getHHCService';
  }
  static {
    this.POST_UPDATE_HHCSERVICE_EVNHES = 'updateFileHhcChiSoByEvnhes';
  }
  static {
    this.POST_GET_LOGHHCXML = 'getLogHHCXml';
  }
  static {
    this.POST_XUAT_SOLIEUHHC = 'xuatSolieuHHC';
  }
  static {
    this.POST_GET_GCSLICHGCSHHC = 'getgcslichgcsHHC';
  }
  static {
    this.POST_GET_CHI_SO_NGAY_CKY = 'getChiso_ngaycky';
  }
  static {
    this.POST_GET_TT_LICH_GCS_BYTT = 'getTT_LICHGCS_byTT';
  }
  static {
    this.POST_GET_LANBCAO = 'getLanBCao';
  }
  static {
    this.POST_GET_LICH_GCS = 'getLichgcs';
  }
  static {
    this.POST_INSERT_LICH_GCS = 'insertLichGcs';
  }
  static {
    this.POST_DELETE_LGCS = 'deleteLGCS';
  }
  static {
    this.POST_CHECK_CHI_SO_LICH = 'checkChiso_Lich';
  }
  static {
    this.POST_UPDATE_LICH_GCS = 'updateLichgcs';
  }
  static {
    this.POST_TIM_KIEM_TTIN_CSO_VA_SLUONG_CUA_DDO_TU_KDLDD = 'timKiemTTinCSoVaSLuongCuaDDoTuKDLDD';
  }
  static {
    this.POST_INSERT_TTIN_SLUONG_CUA_DDO_TU_KDLDD = 'insertTTinSLuongCuaDDoTuKDLDD';
  }
  static {
    this.POST_DELETE_TTIN_SLUONG_CUA_DDO_TU_KDLDD = 'deleteTTinSLuongCuaDDoTuKDLDD';
  }
}
class API_DIEN_NONG_THON {
  static {
    this.GET_DATABYTABLENAMEANDKEY = 'getDataByTableNameAndKey';
  }
  static GET_D_LOAI_DUAN_DNT(table, param) {
    return `${table}/${param}`;
  }
  static GET_DATA_TNHAN_YCAU(table, madvqly, param) {
    return `${table}/${madvqly}/${param}`;
  }
  static POST_DATA_TNHAN_YCAU(table, method) {
    return `${table}/${method}`;
  }
}
class API_DANH_MUC {
  static {
    this.POST_GET_FULL_CAP_DVIQLY = 'getFullCapDviQly';
  }
  static {
    this.POST_GET_LIST_MADVICTREN_AND_MADVICDUOI = 'getListMaDviCtrenAndMaDviCduoi';
  }
  static {
    this.POST_GET_LIST_DIACHI_BY_ID_DIACHINH = 'getListDiaChiByIdDiaChinh';
  }
  static {
    this.POST_GET_LIST_DIACHI_BY_MA_DIACHINH = 'getListDiaChiByListMaDiaChinh';
  }
  static {
    this.GET_SO_BY_MA_TO = 'getSoByMaTo';
  }
  static {
    this.POST_DSOGCS_BY_MA_SO = 'getDsogcsbyMaso';
  }
  static {
    this.POST_GET_D_PUBLIC_KEY_BY_USER = 'getD_PUBLIC_KEY_ByUser';
  }
  static {
    this.POST_GET_USER_D_PUBLIC_KEY = 'getUserD_PUBLIC_KEY';
  }
  static {
    this.POST_GET_CAP_KY = 'getCapKy';
  }
  static {
    this.POST_XOA_CAP_KY = 'xoaCapKy';
  }
  static {
    this.POST_GHI_CAP_KY = 'ghiCapKy';
  }
  static {
    this.POST_GET_DMUC_TYLE_TANG_TRUONG = 'getDMucTyleTangTruong';
  }
  static {
    this.POST_INSERT_LIST_DTLE_TPHAM = 'InsertListDTleTpham';
  }
  static {
    this.POST_GET_DMUC_GIA_MUA = 'getDMucGiaMua';
  }
  static {
    this.POST_INSERT_DMUC_GIA_MUA_DIEN = 'insertDmGiaMuaDien';
  }
  static {
    this.POST_DELETE_SDUNG_TBHT = 'deleteSDUNG_TBHT';
  }
  static {
    this.POST_UPDATE_SDUNG_TBHT = 'updateSDUNG_TBHT';
  }
  static {
    this.POST_GET_SDUNG_TBHT = 'getSDUNG_TBHT';
  }
  static {
    this.POST_DELETE_HS_TBHT = 'deleteHS_TBHT';
  }
  static {
    this.POST_UPDATE_TBHT = 'updateHS_TBHT';
  }
  static {
    this.POST_GET_HS_TBHT = 'getHS_TBHT';
  }
  static {
    this.POST_DELETE_KIM_TREO_THAO = 'deleteKimTreoThao';
  }
  static {
    this.POST_UPDATE_KIM_TREO_THAO = 'updateKimTreoThao';
  }
  static {
    this.POST_INSERT_KIM_TREO_THAO = 'insertKimTreoThao';
  }
  static {
    this.POST_CHECK_IF_MA_IS_CURRENTLY_EFFECTIVE = 'checkIfMaKimTreoThaoIsCurrentlyEffective';
  }
  static {
    this.POST_CHECK_IF_MA_KIM_TREO_THAO_iS_EXISTED = 'checkIfMaKimTreoThaoIsExisted';
  }
  static {
    this.POST_GET_KIM_TREO_THAO = 'getKimTreoThao';
  }
  static {
    this.POST_SELECT_MA_SO_GSC = 'select_MaSoGSC';
  }
  static {
    this.POST_GET_LIST_FILE_HO_SO = 'getListFileHoSo';
  }
  static {
    this.POST_GET_MOI_QHE = 'getMoiqhe';
  }
  static {
    this.POST_GET_LIST_DSO_GCS = 'GetListDSoGCS';
  }
  static {
    this.POST_GET_DANHMUC_ISLAZY = 'GetDanhMucIsLazy';
  }
  static {
    this.POST_MAP_JSONOBJECT_TO_HTML = 'MapJSONObjectToHTML';
  }
  static {
    this.POST_GET_NHOM_NN_DOI_GIA_HHC = 'get_NhomNNDoiGia_HHC';
  }
  static {
    this.POST_GET_DVI_QLY_CHI_TIET = 'getDviqlyChitiet';
  }
  static {
    this.POST_GET_GIA_NHOM_NN = 'getGiaNhomNN';
  }
  static {
    this.POST_GET_LDO_SAI = 'getLDoSai';
  }
  static {
    this.POST_GET_CAP_DAP = 'getCapDAp';
  }
  static {
    this.POST_GET_DGIA_NHOM_NN = 'getDGiaNhomNN';
  }
  static {
    this.POST_MAP_LIST_JSON_OBJECT_TOHTML = 'MapListJSONObjectToHTML';
  }
  static {
    this.POST_GET_TKHOAN_NHANG_DVI = 'getTKhoanNHangDvi';
  }
  static {
    this.POST_GET_DM_NGAN_HANG_BY_DON_VI = 'getDmNganHangByDonvi';
  }
  static {
    this.POST_GET_D_NGAN_HANG = 'getDNganHang';
  }
  static {
    this.POST_GET_SO_GCS_BY_LIST_SO = 'getSoGCSByListSo';
  }
  static {
    this.POST_UPDATE_BBAN_PBO_NHAN = 'Update_BBan_PBo_Nhan';
  }
  static {
    this.POST_GET_NGAY_AP_DUNG = 'getNgayApDung';
  }
  static {
    this.GET_LOAI_TBI = 'getLoaiTbi';
  }
  static {
    this.POST_GET_MA_NHOM_NNBY_DONGIA = 'getMaNhomNNbyDonGia';
  }
  static {
    this.POST_GET_HSOCOSFI = 'getHsoCosfi';
  }
  static {
    this.POST_GET_KTRAVIEN_BPHANLIKE = 'getKtravienBphanLike';
  }
  static {
    this.POST_GET_KTRA_VIENBPHAN = 'getKtravienBphan';
  }
  static {
    this.POST_GET_BOPHAN_KIEMTRAALL = 'getBophanKiemtraAll';
  }
  static {
    this.POST_GET_BOPHAN_KIEMTRALIKE = 'getBophanKiemtraLike';
  }
  static {
    this.POST_GET_KIEM_TRA_VIEN_LIKE = 'getKiemtravienLike';
  }
  static {
    this.POST_GET_GIA_NHOMNNGHEKTGS = 'getGiaNhomNNgheKTGS';
  }
  static {
    this.POST_GET_GIA_NHOM_MAXNNHIEULUC = 'getGiaNhommaxNNHieuluc';
  }
  static {
    this.POST_GET_NNGHE_DTUONGGIA = 'getNNgheDTuongGia';
  }
  static {
    this.POST_GET_DVI_KDINH = 'getDviKdinh';
  }
  static {
    this.POST_GET_NVIEN_KDINH = 'getNVienKDinh';
  }
  static {
    this.POST_GET_GIACAONHAT = 'getGiacaoNhat';
  }
  static {
    this.POST_GET_DO_KDINH = 'getLDoKDinh';
  }
  static {
    this.GET_DVI_QLY = 'getDviqly';
  }
  static {
    this.POST_CHANGEDMUCDCAPKYHSDT = 'changeDmucDCapKyHSDT';
  }
  static {
    this.POST_GETDCAPKYHSDTBYPRIMARYKEY = 'getDCapKyHSDTByPrimaryKey';
  }
  static {
    this.POST_GETCONGVIECBYMALOAIYCAU = 'getCongViecByMaLoaiYCau';
  }
  static {
    this.GET_GETLOAIYEUCAUALL = 'getLoaiYeuCauAll';
  }
  static {
    this.POST_GETDMTRONGAILIENKETCONGVIECS = 'getDMTroNgaiLienKetCongViecs';
  }
  static {
    this.POST_GETTRONGAILIENKETCONGVIECBYMACVIECANDLOAIYCAUANDTNGAI = 'getTroNgaiLienKetCongViecByMaCViecAndLoaiYCauAndTNGai';
  }
  static {
    this.POST_CREATETNGAILKETCVIEC = 'createTNgaiLKetCViec';
  }
  static {
    this.POST_UPDATETNGAILKETCVIEC = 'updateTNgaiLKetCViec';
  }
  static {
    this.POST_DELETETNGAILKETCVIEC = 'deleteTNgaiLKetCViec';
  }
  static {
    this.POST_CREATDMUCPCAPUQUYEN = 'creatDmucPCapUQuyen';
  }
  static {
    this.POST_UPDATEDMUCPCAPUQUYEN = 'updateDmucPCapUQuyen';
  }
  static {
    this.POST_DELETEDMUCPCAPUQUYEN = 'deleteDmucPCapUQuyen';
  }
  static {
    this.POST_CHECKIFMANHANGEXIST = 'checkIfMaNHangExist';
  }
  static {
    this.POST_GETDSTKHOANDVI = 'getDsTkhoanDvi';
  }
  static {
    this.POST_INSERTTKHOANDVI = 'insertTkhoanDvi';
  }
  static {
    this.POST_DELETEDSTKHOANDVI = 'deleteDsTkhoanDvi';
  }
  static {
    this.POST_UPDATETKHOANDVI = 'updateTkhoanDvi';
  }
  static {
    this.POST_CHECKIFMATBIISEXISTED = 'checkIfMaTbiIsExisted';
  }
  static {
    this.POST_GETTHIETBI = 'getThietBi';
  }
  static {
    this.POST_GETLOAITHIETBI = 'getLoaiThietBi';
  }
  static {
    this.POST_INSERTDTHIETBI = 'InsertDthietBi';
  }
  static {
    this.POST_DELETEDSTHIETBI = 'deleteDsThietBi';
  }
  static {
    this.POST_INSERTBOPHAN = 'insertBophan';
  }
  static {
    this.POST_UPDATEBOPHAN = 'updateBophan';
  }
  static {
    this.POST_DELETEDSBOPHAN = 'deleteDsBophan';
  }
  static {
    this.POST_GETDSCVIEC = 'getDsCviec';
  }
  static {
    this.POST_GETDSBPHANCVIEC = 'getDsBphanCviec';
  }
  static {
    this.POST_UPDATEDSBPHANCVIEC = 'updateDsBphanCviec';
  }
  static {
    this.POST_GETKHOTBI = 'getKhoTbi';
  }
  static {
    this.POST_CHECKIFMAKHOTBIISEXISTED = 'checkIfMaKhoTbiIsExisted';
  }
  static {
    this.POST_INSERTKHOTBI = 'insertKhoTbi';
  }
  static {
    this.POST_UPDATEKHOTBI = 'updateKhoTbi';
  }
  static {
    this.POST_DELETEKHOTBI = 'deleteKhoTbi';
  }
  static {
    this.POST_GETMAUBAOCAOALL = 'getMauBaoCaoAll';
  }
  static {
    this.POST_CAPNHATMAUBAOCAO = 'capnhatMauBaoCao';
  }
  static {
    this.POST_DELETEMAUBAOCAO = 'deleteMauBaoCao';
  }
  static {
    this.POST_LAYTTINGOIVTU = 'layTTinGoiVtu';
  }
  static {
    this.POST_THEMGOIDVU = 'themGoiDvu';
  }
  static {
    this.POST_XOAGOIDVU = 'xoaGoiDvu';
  }
  static {
    this.POST_SUAGOIDVU = 'suaGoiDvu';
  }
  static {
    this.POST_GETCHUNGTHUSOALL = 'getChungThuSoAll';
  }
  static {
    this.POST_CAPNHATCHUNGTHUSO = 'capnhatChungThuSo';
  }
  static {
    this.POST_DELETECHUNGTHUSO = 'deleteChungThuSo';
  }
  static {
    this.POST_GETTTIN_CTS = 'getTTin_CTS';
  }
  static {
    this.POST_GETDSNVIENBPHAN = 'getDsNvienBphan';
  }
  static {
    this.POST_UPDATEDSNVIENBPHAN = 'updateDsNvienBphan';
  }
  static {
    this.POST_GETDSKDINHVIEN = 'getDsKDinhvien';
  }
  static {
    this.POST_INSERTKDINHVIEN = 'insertKDinhvien';
  }
  static {
    this.POST_UPDATEKDINHVIEN = 'updateKDinhvien';
  }
  static {
    this.POST_DELETEDSKDINHVIEN = 'deleteDsKDinhvien';
  }
  static {
    this.POST_CHECKIFMALOISEXISTED = 'checkIfMaLoIsExisted';
  }
  static {
    this.POST_INSERTLO = 'insertLo';
  }
  static {
    this.POST_UPDATELO = 'updateLo';
  }
  static {
    this.POST_DELETELO = 'deleteLo';
  }
  static {
    this.GET_GETCAPDAP_DN = 'getCapDAp_DN';
  }
  static {
    this.POST_GETDSNVIEN = 'getDsNvien';
  }
  static {
    this.POST_GET_NHAN_VIEN_BY_MA_NHAN_VIEN = 'getDMucNhanVienByMaNVien';
  }
  static {
    this.POST_GETDSBOPHAN = 'getDsBophan';
  }
  static {
    this.POST_GETDSTO = 'getDsTo';
  }
  static {
    this.POST_INSERTNVIEN = 'insertDMucNVien';
  }
  static {
    this.POST_UPDATENVIEN = 'updateDMucNVien';
  }
  static {
    this.POST_UPDATENHANVIEN = 'updateNvien';
  }
  static {
    this.POST_DELETEDSNVIEN = 'deleteListDMucNVien';
  }
  static {
    this.POST_SELELCT_MASOGSC = 'selelct_MaSoGSC';
  }
  static {
    this.POST_UPDATET_DMSOGSC = 'updatet_DmSoGSC';
  }
  static {
    this.POST_DELETE_DMSOGSC = 'delete_DmSoGSC';
  }
  static {
    this.POST_DELETE_TTTHEOLOGCS = 'delete_TTtheoLoGCS';
  }
  static {
    this.POST_SEARCH_DMSOGSC = 'search_DmSoGSC';
  }
  static {
    this.POST_INSERT_DMSOGSC = 'Insert_DmSoGSC';
  }
  static {
    this.POST_UPDATE_TTTHEOLOGCS = 'update_TTtheoLoGCS';
  }
  static {
    this.POST_IMPORTDMSOGSC = 'importDmSoGSC';
  }
  static {
    this.POST_INSERT_DMNVTHUNGAN = 'insertDMucTNganVien';
  }
  static {
    this.POST_UPDATE_DMNVTHUNGAN = 'updateDMucThuNganVien';
  }
  static {
    this.POST_DELETE_DMNVTHUNGAN = 'delete_DmNvThuNgan';
  }
  static {
    this.POST_DELETE_TTTHEOLOTHUNGAN = 'deleteListDMucTNganVien';
  }
  static {
    this.POST_SEARCH_DMNVTHUNGAN = 'search_DmNvThuNgan';
  }
  static {
    this.POST_SELECT_HINHTHUCTHUNGAN = 'select_HinhThucThuNgan';
  }
  static {
    this.POST_SELECT_DMTHUNGANVIEN = 'getAllDMucThuNganVien';
  }
  static {
    this.POST_SELELCT_MATHUNGANVIEN = 'getDMucThuNganVienByMaTNgan';
  }
  static {
    this.POST_UPDATE_TTTHEOLO = 'update_TTtheoLo';
  }
  static {
    this.POST_SELECT_DMSOGSC = 'select_DmSoGSC';
  }
  static {
    this.POST_CAPNHAT_SOGCSHOTRO_COVID = 'capNhatSoGCSHoTroCovid';
  }
  static {
    this.POST_GET_SOGCS_HOTRO_COVID = 'getSoGCSHoTroCovid';
  }
  static {
    this.POST_CAPNHAT_DVIHOTRO_COVID = 'capNhatDviHoTroCovid';
  }
  static {
    this.POST_GET_DMUC_DVIHOTRO_COVID = 'getDMucDviHoTroCovid';
  }
  static {
    this.POST_SELECT_MATO = 'getDmToByMaTo';
  }
  static {
    this.POST_GET_ALL_DTO = 'getAllDTo';
  }
  static {
    this.POST_INSERT_DTO = 'insertDTo';
  }
  static {
    this.POST_UPDATE_DTO = 'updateDTo';
  }
  static {
    this.DELETE_LIST_DTO = 'deleteListDTo';
  }
  static {
    this.POST_DELETE_LIST_DTO = 'deleteListDmTo';
  }
  static {
    this.POST_DELETE_DMTO = 'delete_DmTo';
  }
  static {
    this.POST_DELETE_TTTHEOLODTO = 'delete_TTtheoLoDTo';
  }
  static {
    this.POST_INSERT_DMTO = 'Insert_DmTo';
  }
  static {
    this.POST_UPDATE_DMTO = 'updatet_DmTo';
  }
  static {
    this.POST_SEARCH_DMTO = 'search_DmTo';
  }
  static {
    this.POST_INSERT_DMTRAM = 'Insert_DmTram';
  }
  static {
    this.delete_TTtheoDTram = 'updatet_DmTram';
  }
  static {
    this.POST_DELETE_DMTRAM = 'delete_DmTram';
  }
  static {
    this.POST_DELETE_TTTHEODTRAM = 'delete_TTtheoDTram';
  }
  static {
    this.POST_SELECT_DMTRAM = 'select_DmTram';
  }
  static {
    this.POST_SELECT_DCAPDIENAP = 'select_DCapDienAp';
  }
  static {
    this.POST_SELECT_DMATO = 'select_DMaTo';
  }
  static {
    this.POST_SELELCT_ID_TRAM = 'selelct_ID_Tram';
  }
  static {
    this.POST_GET_DVI_QLY_BY_TCTY = 'getDviQlyByTCTy';
  }
  static {
    this.POST_SELECT_DMTYGIA12 = 'select_dmTyGia12';
  }
  static {
    this.POST_INSERT_DTYGIA = 'InsertDtyGia';
  }
  static {
    this.POST_UPDATE_DTYGIA = 'updateDtyGia';
  }
  static {
    this.POST_DELETE_DTYGIA = 'deleteDTyGia';
  }
  static {
    this.POST_SELECT_MAXID_TYGIA = 'selelct_maxId_tygia';
  }
  static {
    this.POST_SELECT_LOAITIEN_TYGIA = 'selelct_LoaiTien_tygia';
  }
  static {
    this.POST_SEARCH_DMTYGIA = 'search_dmTyGia';
  }
  static {
    this.POST_SELECT_DMLOAITIEN = 'select_DmLoaiTien';
  }
  static {
    this.POST_GET_DVIGNHAN = 'getDviGnhan';
  }
  static {
    this.POST_CHECK_IF_MADVIGNHAN_IS_EXISTED = 'checkIfMaDviGnhanIsExisted';
  }
  static {
    this.POST_INSERT_DVIGNHAN = 'insertDviGnhan';
  }
  static {
    this.POST_UPDATE_DVIGNHAN = 'updateDviGnhan';
  }
  static {
    this.POST_DELETE_DVIGNHAN = 'deleteDviGnhan';
  }
  static {
    this.POST_SELECT_DMNVIENKDINH = 'select_DmNVienKDinh';
  }
  static {
    this.POST_SELELCT_ID_NVIENKDINH = 'selelct_ID_NVienKDinh';
  }
  static {
    this.POST_INSERT_DMNVIENKDINH = 'InsertDmNVienKDinh';
  }
  static {
    this.POST_SEARCH_DMUC_DNVIEN_KDINH_BY_ID = 'searchDMucDNVienKDinhByID';
  }
  static {
    this.POST_UPDATE_DMNVIENKDINH = 'update_DmNVienKDinh';
  }
  static {
    this.POST_DELETE_NVIENKDINH = 'deleteNVienKDinh';
  }
  static {
    this.POST_SELECT_DMDVIKDINH = 'select_DmDViKDinh';
  }
  static {
    this.POST_SELELCT_ID_DVIKDINH = 'selelct_ID_DViKDinh';
  }
  static {
    this.POST_INSERT_DMDVIKDINH = 'InsertDmDViKDinh';
  }
  static {
    this.POST_SEARCH_DMUCDVIKDINH_BY_ID = 'searchDMucDViKDinhByID';
  }
  static {
    this.POST_UPDATE_DMDVIKDINH = 'update_DmDViKDinh';
  }
  static {
    this.POST_DELETE_DVIKDINH = 'deleteDViKDinh';
  }
  static {
    this.POST_SELECT_DMVTUALL = 'select_DmVTuAll';
  }
  static {
    this.GET_DMVTUALL = 'getAllDMucVatTu';
  }
  static {
    this.POST_INSERT_DMUCVTU = 'insertDMucVTu';
  }
  static {
    this.POST_SEARCH_DMVTU = 'search_DmVTu';
  }
  static {
    this.POST_INSERT_DMVTU = 'InsertDmVTu';
  }
  static {
    this.POST_SELELCT_ID_VATTU = 'selelct_ID_VatTu';
  }
  static {
    this.POST_DELETE_DMUC_VATTU = 'deleteListDMucVatTu';
  }
  static {
    this.POST_UPDATE_DMUC_VTU = 'update_DmVTu';
  }
  static {
    this.POST_UPDATE_DMVTU = 'updateDMucVatTu';
  }
  static {
    this.POST_INSERT_DMNHOMKH = 'Insert_DmNhomKH';
  }
  static {
    this.POST_UPDATE_DMNHOMKH = 'update_DmNhomKH';
  }
  static {
    this.POST_DELETE_TTTHEODNHOMKH = 'delete_TTtheoDnhomKH';
  }
  static {
    this.POST_SEARCH_DMNHOMKH = 'search_DmNhomKH';
  }
  static {
    this.POST_SELECT_DMNHOMKH = 'select_DmNhomKH';
  }
  static {
    this.POST_SELELCT_ID_NHOMKH = 'selelct_ID_nhomKH';
  }
  static {
    this.POST_INSERT_LYDO = 'insertLyDo';
  }
  static {
    this.POST_UPDATE_LYDO = 'updateLyDo';
  }
  static {
    this.POST_DELETE_LYDO = 'deleteLyDo';
  }
  static {
    this.POST_CHECK_IF_MALDOI_SEXISTED = 'checkIfMaLDoIsExisted';
  }
  static {
    this.POST_GET_LY_DO = 'getLyDo';
  }
  static {
    this.POST_GETD_LOAI_BKE = 'getD_LOAI_BKE';
  }
  static {
    this.POST_GET_DMUC_BKE = 'getDMucBKe';
  }
  static {
    this.POST_GET_CTS = 'getCTS';
  }
  static {
    this.POST_GET_D_LOAI_BKE = 'getD_LOAI_BKE';
  }
  static {
    this.POST_GET_DMUCBKE = 'getDMucBKe';
  }
  static {
    this.POST_GET_MTO = 'getMTO';
  }
  static {
    this.POST_GET_DMSO = 'getDMSO';
  }
  static {
    this.POST_GET_DVI_TRI_TREO = 'getDViTriTreo';
  }
  static {
    this.POST_GET_LDO_TTHAO = 'getLDoTThao';
  }
  static {
    this.POST_GET_NGANHANG_DVI_QLY = 'GetNganHangDViQLy';
  }
  static {
    this.POST_SEARCH_DSO = 'search_dso';
  }
  static {
    this.POST_GET_LICH_SODN = 'getLichSoDN';
  }
  static {
    this.GET_MA_PT_GOC = 'getMaPTGoc';
  }
  static {
    this.GET_MA_PT_CON = 'getMaPTCon';
  }
  static {
    this.GET_MA_PT_CHA = 'getMaPTCha';
  }
  static {
    this.GET_NVIEN_TTHAOBYMAQLDV = 'getNVienTThaoByMaQLDV';
  }
  static {
    this.GET_TNGAN_VIEN = 'getTNganVien';
  }
  static {
    this.GET_HINH_THUC_TIEP_NHAN = 'getHinhThucTiepNhan';
  }
  static {
    this.GET_DVI_QLY_BY_ID = 'getDviQlyById';
  }
  static {
    this.GET_DVI_QLY_ALL = 'getDviQlyAll';
  }
  static {
    this.CAP_NHAT_DVI_QLY = 'capnhatDviQly';
  }
  static {
    this.DELETE_DVI_QLY = 'deleteDviQly';
  }
  static {
    this.GET_DD_VD_CHINH_All = 'getDDvDChinhAll';
  }
  static {
    this.GET_IMG_SIGN_BY_ID = 'getImgSignById';
  }
  static {
    this.GET_DNUOC_URL = 'getDNuocUrl';
  }
  static {
    this.GET_DHANG_URL = 'getDHangUrl';
  }
  static {
    this.POST_DELETE_CLOAI_TI_URL = 'deleteCloaiTiUrl';
  }
  static {
    this.POST_UPDATE_CLOAI_TI_URL = 'capnhatCloaiTiUrl';
  }
  static {
    this.GET_CLOAI_TI_ID_URL = 'getCloaiTiIdUrl';
  }
  static {
    this.GET_ALL_CLOAI_TI_URL = 'getAllCloaiTiUrl';
  }
  static {
    this.POST_DELETE_CLOAI_TU_URL = 'deleteCloaiTuUrl';
  }
  static {
    this.POST_UPDATE_CLOAI_TU_URL = 'capnhatCloaiTuUrl';
  }
  static {
    this.GET_DANH_MUC = 'getDanhMuc';
  }
  static {
    this.POST_GET_CLOAI_TU_ID = 'getCloaiTuId';
  }
  static {
    this.POST_GET_CLOAI_TI_ID = 'getCloaiTiId';
  }
  static {
    this.GET_LOAI_TIEN = 'getLoaiTien';
  }
  static {
    this.GET_DANH_MUC_LIKE_DK = 'getDanhMuc_likedk';
  }
  static {
    this.VALIDATE_DANH_MUC = 'validateDanhMuc';
  }
  static {
    this.GET_ALL_PARAMETER = 'getAllParameter';
  }
  static {
    this.GET_LOAIHOPDONG = 'getLoaiHopDong';
  }
  static {
    this.GET_HTTT = 'getHttt';
  }
  static {
    this.GET_PTTT = 'getPttt';
  }
  static {
    this.GET_ALL_CLOAI_CTO = 'getAllCloaiCto';
  }
  static {
    this.GET_DNUOC = 'getDNuoc';
  }
  static {
    this.GET_DHANG = 'getDHang';
  }
  static {
    this.POST_CAP_NHAT_CLOAI_CTO = 'capnhatCloaiCto';
  }
  static {
    this.POST_XOA_CLOAI_CTO = 'deleteCloaiCto';
  }
  static {
    this.POST_GET_CLOAI_CTO_BY_ID = 'getCloaiCtoById';
  }
  static {
    this.GET_ALL_CLOAI_TU = 'getAllCloaiTu';
  }
  static {
    this.GET_ALL_CLOAI_TI = 'getAllCloaiTi';
  }
  static {
    this.POST_CAPNHAT_CLOAITU = 'capnhatCloaiTu';
  }
  static {
    this.POST_CAPNHAT_CLOAITI = 'capnhatCloaiTi';
  }
  static {
    this.POST_DELETE_CLOAITU = 'deleteCloaiTu';
  }
  static {
    this.POST_DELETE_CLOAITI = 'deleteCloaiTi';
  }
  static {
    this.GET_TRO_NGAI_CVIEC = 'getTroNgaiCviecAll';
  }
  static {
    this.GET_TRO_NGAI_CVIEC_BY_ID = 'getTroNgaiCviecById';
  }
  static {
    this.POST_CAP_NHAT_TRO_NGAI_CVIEC = 'capnhatTroNgaiCviec';
  }
  static {
    this.DELETE_TRO_NGAI_CVIEC = 'deleteTroNgaiCviec';
  }
  static {
    this.POST_DLOAI_BKE_SO = 'getDLoaiBKeSoAll';
  }
  static {
    this.POST_CAP_NHAT_BANG_KE = 'capnhatBangKe';
  }
  static {
    this.POST_DELETE_BANGKE = 'deleteBangKe';
  }
  static {
    this.POST_DIA_CHI_DAY_DU = 'getDiaChiDayDu';
  }
  static {
    this.POST_DVI_QLY = 'getDviqly';
  }
  static {
    this.GET_T_NGAI = 'getTngai';
  }
  static {
    this.GET_LOAIYCCHUYEN = 'getLoaiYCChuyen';
  }
  static {
    this.POST_TNGAITHEOCVIEC = 'getTNgaiTheoCViec';
  }
  static {
    this.POST_NVIENBPHAN = 'getNVienBPhan';
  }
  static {
    this.POST_BPHANCVIEC = 'getBPhanCViec';
  }
  static {
    this.POST_GTO_CVIEC_LOAIYC = 'getGToCViecLoaiYC';
  }
  static {
    this.POST_CLOAI = 'getCloai';
  }
  static {
    this.POST_NVIEN = 'getNVien';
  }
  static {
    this.POST_LDO = 'getLDo';
  }
  static {
    this.POST_NNGHE = 'getNNghe';
  }
  static {
    this.GET_DMUC_NHOM_NN = 'getDmucNhomNN';
  }
  static {
    this.POST_GET_GIANHOM_NN_HIEULUC = 'getGiaNhomNNHieuluc';
  }
  static {
    this.POST_DMUCLOAIBCS_THEOLOAIDDO = 'getDmucLoaiBCS_theoLoaiDdo';
  }
  static {
    this.GET_DMUC_BACTHANG = 'getDmucBacThang';
  }
  static {
    this.GET_DMUC_LOAI_BCS = 'getDmucLoaiBCS';
  }
  static {
    this.GET_LOAI_DDO = 'getLoaiDDo';
  }
  static {
    this.POST_NGHANG_TKHOAN_DVI = 'getNgHangTkhoanDvi';
  }
  static {
    this.POST_DVI_QLY_BYID = 'getDviQlyById';
  }
  static {
    this.POST_YEUCAU_FROM_DV_YEUCAU = 'getYeuCauFromDvYeuCau';
  }
  static {
    this.POST_DGIA_NHOMNN_BY_MA_NHOMNN = 'GetDGiaNhomNNByMaNhomNN';
  }
  static {
    this.POST_DGIA_NHOMNN_BY_MA_NHOMNN_GIA = 'GetDGiaNhomNNByMaNhomNNGia';
  }
  static {
    this.POST_TKHOAN_DVI = 'getTkhoanDvi';
  }
  static {
    this.GET_NHANG = 'getNhang';
  }
  static {
    this.POST_DLOAI_HSO = 'getDLoaiHso';
  }
  static {
    this.POST_LOAI_YEU_CAU_WORK_IDDT = 'getLoaiYeuCauWorkIdDT';
  }
  static {
    this.POST_LUU_TRINH_KY = 'luuTrinhKy';
  }
  static {
    this.POST_GET_TRINH_KY = 'getTrinhKy';
  }
  static {
    this.POST_GET_KY_BKE = 'getKyBKe';
  }
  static {
    this.POST_GET_KHO_NHAP = 'getKhoNhap';
  }
  static {
    this.POST_GET_LO = 'getLo';
  }
  static {
    this.POST_CHUNGLOAI_CTO_FULL_BY_MA_CLOAI = 'getChungLoaiCToFull_byMaCLoai';
  }
  static {
    this.POST_SEARCH_DMTRAM = 'search_DmTram';
  }
  static {
    this.POST_LYDO_QH = 'getLyDoQH';
  }
  static {
    this.GET_LOAI_HO_SO_ALL = 'getDLoaiHsoAll';
  }
  static {
    this.POST_GET_LIST_D_CONG_VIEC_BY_MA_LOAI_YCAU = 'getListDCongViecByMaLoaiYCau';
  }
  static {
    this.GET_ALL_LOAIHSO = 'getAllDLoaiHSo';
  }
  static {
    this.CREATE_DLOAI_HSO = 'createDLoaiHSo';
  }
  static {
    this.UPDATE_DLOAI_HSO = 'updateDLoaiHSo';
  }
  static {
    this.DELETE_DLOAI_HSO = 'deleteDLoaiHSo';
  }
  static {
    this.POST_GET_CLOAICTO_BY_MACLOAI = 'getCLoaiCToByListMaCLoai';
  }
  static getCViecDVu(sTenDMuc) {
    return 'getCViecDVu?maDichVu=' + sTenDMuc;
  }
}
class API_QTHT {
  static {
    this.USER_LOGIN_SSO = 'loginSSO';
  }
  static {
    this.POST_REFRESH_TOKEN = 'refreshToken';
  }
  static {
    this.DELETE_ROLE = 'deleteRole';
  }
  static {
    this.UPDATE_ROLE = 'updateRole';
  }
  static {
    this.GET_ROLE_BY_ID = 'getRoleById';
  }
  static {
    this.GET_ROLE_ALL = 'getRoleAll';
  }
  static {
    this.RESET_PASS = 'resetPassUser';
  }
  static {
    this.SELECT_MA_TO = 'select_DMaTo';
  }
  static {
    this.USER_KO_THEO_DON_VI = 'getAllUserKhongTheoDonVi';
  }
  static {
    this.DELETE_USER = 'deleteUser';
  }
  static {
    this.GET_USER_ALL = 'getAllUser';
  }
  static {
    this.POST_UPDATE_USER = 'updateUser';
  }
  static {
    this.POST_DELETE_ROLE = 'deleteRole';
  }
  static {
    this.POST_GET_ROLE_BY_ID = 'getRoleById';
  }
  static {
    this.POST_GET_ROLE_ALL = 'getRoleAll';
  }
  static {
    this.POST_GET_USER_BY_ROLE_ID = 'getUserByRoleId';
  }
  static {
    this.POST_UPDATE_USER_OF_ROLE = 'updateUserOfRole';
  }
  static {
    this.POST_UPDATE_ROLE_OF_USER = 'updateRoleOfUser';
  }
  static {
    this.POST_UPDATE_MENU_BY_ROLE = 'updateMenuByRole';
  }
  static {
    this.POST_UPDATE_ROLE_OF_MENU = 'updateRoleOfMenu';
  }
  static {
    this.POST_DELETE_LIB = 'deleteLib';
  }
  static {
    this.POST_UPDATE_LIB = 'updateLib';
  }
  static {
    this.POST_GET_MENU_BY_ROLE_ID = 'getMenuByRoleId';
  }
  static {
    this.POST_GET_LIB_BY_ID = 'getLibById';
  }
  static {
    this.GET_ALL_LIB = 'getAllLib';
  }
  static {
    this.POST_DELETE_MENU = 'deleteMenu';
  }
  static {
    this.POST_INSERT_MENU = 'InsertMenu';
  }
  static {
    this.POST_UPDATE_MENU = 'UpdateMenu';
  }
  static {
    this.POST_GET_MENU_BY_ID = 'getMenuById';
  }
  static {
    this.GET_MENU_ALL = 'getMenuAll';
  }
  static {
    this.POST_GET_ALL_USER_SFOLLOW = 'getAllUserSFollow';
  }
  static {
    this.POST_REMOVE_USER_FLLOW = 'removeUserFllow';
  }
  static {
    this.POST_SET_USER_FLLOW = 'setUserFllow';
  }
  static {
    this.POST_GET_OBJECT_ALL = 'getObjectAll';
  }
  static {
    this.POST_REMOVE_LIST_OBJECT = 'removeListObject';
  }
  static {
    this.POST_GET_NGUOI_DUNG_ALL = 'getNguoiDungAll';
  }
  static {
    this.POST_CHECK_CHOT_SO_LIEU_PHAN_HE = 'checkChotSoLieuPhanHe';
  }
  static {
    this.POST_KQUA_TINH_KTGS = 'kquaTinhKtgs';
  }
  static {
    this.POST_DELETE_LOG_FROM_SMESSAGE = 'deleteLogFromSmessage';
  }
  static {
    this.POST_GET_LOG_TINH_TOAN = 'getLogTinhToan';
  }
  static {
    this.POST_GET_LICHSU_CTHANG = 'getLichSuCThang';
  }
  static {
    this.POST_GETLOGCTHANG = 'getLogCTHANG';
  }
  static {
    this.POST_INSERT_LOGCTHANG = 'insertLogCTHANG';
  }
  static {
    this.POST_CHECK_LOGC_THANG = 'checkLogCTHANG';
  }
  static {
    this.POST_GET_STHANG_LVIEC = 'getSThanglviec';
  }
  static {
    this.POST_TONGHOPKPI = 'TongHopKPI';
  }
  static {
    this.POST_GET_CHOTSOLIEU_BCKD = 'getchotsolieu_bckd';
  }
  static {
    this.POST_GET_CHOTSOLIEU_BAOCAOBY_PHANHE = 'GetChotSoLieuBaoCaoByPhanHe';
  }
  static {
    this.POST_CHOTSOLIEU_BCKD = 'chotsolieu_bckd';
  }
  static {
    this.POST_HUY_CHOTSOLIEU_BCKD = 'huychotsolieu_bckd';
  }
  static {
    this.UN_LOOK_OBJECT = 'unlockObject';
  }
  static {
    this.GET_USER_LOGIN = 'getNguoiDung';
  }
  static {
    this.USER_LOGIN = 'login';
  }
  static {
    this.GET_DVI_QLY = 'getDDViQLy';
  }
  static {
    this.GET_MENU_OF_USER = 'getMenuOfUser';
  }
  static {
    this.GET_VERSION = 'getVersion';
  }
  static {
    this.GET_ALL_PARAMETER = 'getAllParameter';
  }
  static {
    this.GET_THANG_NAM_LV = 'getThangNamLV';
  }
  static {
    this.GET_INFO_MENU_CHUCNANG = 'GetInfoMenuChucNang';
  }
  static {
    this.POST_USER_ROUTING_DV = 'getUserRoutingDV';
  }
  static {
    this.POST_SYSDATE_CURRENT = 'GetSysdateCurrent';
  }
  static {
    this.POST_LIB_BY_ROUTE = 'getLibByRoute';
  }
  static {
    this.POST_LOCK_OBJECT = 'lockObject';
  }
  static {
    this.POST_UN_LOCK_OBJECT = 'unlockObject';
  }
  static {
    this.GET_S_LOG_USER = 'get_SLogUser';
  }
  static {
    this.GET_VERSION_INFO = 'getVersionInfo';
  }
  static {
    this.POST_GET_FUNCTION = 'getFunction';
  }
  static {
    this.POST_GET_VERSION_CONTENT = 'getVersionContent';
  }
  static {
    this.GET_ALL_USER = 'getAllUser';
  }
  static {
    this.GET_USER_BY_ID = 'getUserById';
  }
  static {
    this.DELETE_MASSAGE = 'deleteMessage';
  }
  static {
    this.DELETE_ALL_MASSAGE = 'deleteAllMessage';
  }
  static {
    this.POST_UPDATE_USER_DETAIL = 'updateUserDetail';
  }
  static getMessage(userName) {
    return 'getMessage?strTenDNhap=' + userName;
  }
}
class API_COMMON {
  static {
    this.POST_SEARCH_DSO = 'search_dso';
  }
  static {
    this.READFILEXML = 'readFileXML';
  }
  static {
    this.GET_DANH_MUC = 'getDanhMuc';
  }
  static {
    this.POST_STHANG_LVIEC = 'getSThanglviec';
  }
}
class API_DICH_VU {
  static {
    this.POST_UPDATE_DV_YEU_CAU = 'updateDVYeuCau';
  }
  static {
    this.POST_CAP_NHAT_CD_DDOHT = 'capnhatCD_DDoHT';
  }
  static {
    this.POST_TRA_CUU_THONG_TIN_CU_DAN_BY_LIST = 'TraCuuThongTinDanCuByList';
  }
  static {
    this.POST_TINH_TOAN_SO_NGAY_MOI_MANUAL = 'TinhToanSoNgayMoiManual';
  }
  static {
    this.POST_TINH_TOAN_SO_NGAY_MANUAL = 'TinhToanSoNgayManual';
  }
  static {
    this.POST_THEM_DV_HSO_GTO = 'themDvHSoGTo';
  }
  static {
    this.POST_CREATE_FILE_THONG_TIN_CDAN = 'createFileThongTinCDan';
  }
  static {
    this.POST_GET_THONG_TIN_TIEP_NHAN_BY_MA_YCAU = 'getThongTinTiepNhanByMaYCau';
  }
  static {
    this.POST_GET_ALL_DV_YEUCAU_THEO_MAKH = 'getAllDvYeuCauTheoMaKH';
  }
  static {
    this.POST_LAY_CHI_TIET_TIEN_DO_GSMBD = 'LayChiTietTienDoGSMBD';
  }
  static {
    this.POST_TINH_TOAN_SO_NGAY = 'tinhToanSoNgay';
  }
  static {
    this.POST_LAY_CAU_HINH_CONGVIEC = 'layCauHinhCongViec';
  }
  static {
    this.POST_GET_BANG_KE_CSUAT_TBI = 'GetBangKeCsuatTbi';
  }
  static {
    this.POST_LAY_DV_TIEN_TRINH_MOINHAT = 'lay_DV_TIEN_TRINH_moinhat';
  }
  static {
    this.POST_GET_LOAI_HSO_GIAY_TO = 'getLoaiHso_Giayto';
  }
  static {
    this.POST_LAY_CD_DIEM_D_OBY_MA_DDO = 'layCDDiemDoByMaDDo';
  }
  static {
    this.POST_GET_NVIEN_BPHAN = 'getNVienBPhan';
  }
  static {
    this.POST_GET_BPHAN_CVIEC = 'getBPhanCViec';
  }
  static {
    this.POST_CHECK_TRUNG_MAHDONG_DICHVU_DIEN = 'CheckTrungMaHDongDichVuDien';
  }
  static {
    this.POST_TRACUU_THONGTIN_DANCU = 'TraCuuThongTinDanCu';
  }
  static {
    this.POST_CAPNHAT_MUCDICH_SDD = 'capNhatMucDichSDD';
  }
  static {
    this.POST_DULIEU_DUTOAN_BY_MADDO_DUNGDIEN = 'GetDuLieuDuToanByMaDDoDungDien';
  }
  static {
    this.POST_YEUCAU_FROM_DV_YEUCAU = 'getYeuCauFromDvYeuCau';
  }
  static {
    this.POST_LAY_DV_TIEN_TRINH_THEO_DDO = 'layDvTienTrinhTheoDdo';
  }
  static {
    this.POST_TIM_KIEM_YEU_CAU = 'timKiemYeuCau';
  }
  static {
    this.POST_LAY_CHITIET_TIENDO = 'LayChiTietTienDo';
  }
  static {
    this.POST_LAY_TIEPNHAN_YEUCAU_DATN = 'lay_TiepNhanYeuCau_DaTN';
  }
  static {
    this.POST_DATA_PHANHE_CAPDIEN = 'DataPhanHeCapDien';
  }
  static {
    this.POST_COPY_YEUCAU = 'copyYeuCau';
  }
  static {
    this.POST_LAY_TTIN_XUAT_QTOAN = 'layTTinXuatQToan';
  }
  static {
    this.POST_CHECK_DV_TIENTRINH_UPDATE_SDT_DICHVU = 'CheckDVTienTrinhUpdateSDTDichVu';
  }
  static {
    this.POST_DV_TIENTIEPNHAN_THEOTINHTRANG = 'layDvTienTiepNhanTheoTinhTrang';
  }
  static {
    this.POST_D_NGAY_THIEN = 'getDngayThien';
  }
  static {
    this.POST_UPDATE_TIENTIEPNHAN = 'UpdateTienTiepNhan';
  }
  static {
    this.POST_TINHTOAN_SONGAY_MANUAL = 'TinhToanSoNgayManual';
  }
  static {
    this.POST_TIMKIEM_THEOMA = 'timKiemTheoMa';
  }
  static {
    this.POST_CHUYENCAPDUOI_TIEPNHANYEUCAU = 'chuyenCapDuoi_TiepNhanYeuCau';
  }
  static {
    this.POST_CAPNHATTIENTNHAN = 'capNhatTienTNhan';
  }
  static {
    this.POST_LAYCAUHINHTHONGTINXULY = 'layCauHinhThongTinXuLy';
  }
  static {
    this.POST_CAPNHATTHONGTINXULY = 'capNhatThongTinXuLy';
  }
  static {
    this.POST_TTINKSAT = 'getTtinKsat';
  }
  static {
    this.POST_TTINHDONG = 'getTtinHdong';
  }
  static {
    this.POST_DSACHYCAU = 'getDsachYcau';
  }
  static {
    this.POST_DMKHANG = 'getDMKhang';
  }
  static {
    this.POST_LSUKSAT = 'getLsuKsat';
  }
  static {
    this.POST_INSERTKQUAKSAT = 'InsertKquaKsat';
  }
  static {
    this.POST_UPDATEKQUAKSAT = 'UpdateKquaKsat';
  }
  static {
    this.POST_DELETEKQUAKSAT = 'DeleteKquaKsat';
  }
  static {
    this.POST_CAPNHATNGAYKYHDONG = 'capNhatNgayKyHdong';
  }
  static {
    this.POST_XOANGAYKYHDONG = 'xoaNgayKyHdong';
  }
  static {
    this.POST_UPDATETTHAITHUTIEN = 'updateTthaiThutien';
  }
  static {
    this.POST_LAYTTINTBITREOTHAOTHEOTINHTRANGCHUYENKTHAC = 'layTTinTBiTreoThaoTheoTinhTrangChuyenKThac';
  }
  static {
    this.POST_LAYDUTOAN = 'layDuToan';
  }
  static {
    this.POST_TTINNTIEN = 'getTtinNtien';
  }
  static {
    this.POST_LAY_TIEPNHANYEUCAU_CHUATN = 'lay_TiepNhanYeuCau_ChuaTN';
  }
  static {
    this.POST_KTRA_TIEPNHANQUAYVONG = 'ktra_TiepNhanQuayVong';
  }
  static {
    this.POST_THEMMOI_TIEPNHANYEUCAU = 'themMoi_TiepNhanYeuCau';
  }
  static {
    this.POST_CAPNHAT_TIEPNHANYEUCAU = 'capNhat_TiepNhanYeuCau';
  }
  static {
    this.POST_XOA_TIEPNHANYEUCAU = 'xoa_TiepNhanYeuCau';
  }
  static {
    this.POST_KTRA_TRUNGSOCMT = 'ktra_TrungSoCMT';
  }
  static {
    this.POST_THEM_TIEN_TIEPNHAN = 'themTienTiepNhan';
  }
  static {
    this.POST_CAPNHAT_TIEN_TIEPNHAN = 'capnhatTienTiepNhan';
  }
  static {
    this.POST_XOA_TIEN_TIEPNHAN = 'xoaTienTiepNhan';
  }
  static {
    this.POST_LAY_TTIN_TIEPNHAN_THEO_MAKH = 'layTTinTiepNhanTheoMaKH';
  }
  static {
    this.POST_LAYDV_TDOI_TTIN_THEO_MAYCAU = 'laydvTDoiTTinTheoMaYCau';
  }
  static {
    this.POST_THEM_DV_TIENTRINH = 'themDvTienTrinh';
  }
  static {
    this.POST_XOA_DV_TIENTRINH = 'xoaDvTienTrinh';
  }
  static {
    this.POST_XOA_DV_TIENTRINH_THEO_DDO = 'xoaDvTienTrinhTheoDdo';
  }
  static {
    this.POST_THEM_DUTOAN = 'themDuToan';
  }
  static {
    this.POST_XOA_DUTOAN = 'xoaDuToan';
  }
  static {
    this.POST_CAPNHAT_DUTOAN = 'capnhatDuToan';
  }
  static {
    this.POST_LUUMAU_DUTOAN = 'luuMauDuToan';
  }
  static {
    this.POST_LAY_DV_TIENTRINH_MOINHI = 'layDvTienTrinhMoiNhi';
  }
  static {
    this.POST_LAY_DV_TIENTRINH_MOI_NHAT = 'layDvTienTrinhMoiNhatModel';
  }
  static {
    this.POST_LAY_DUTHAO_HOPDONGSH_CHUADT = 'lay_DuThaoHopDongSH_ChuaDT';
  }
  static {
    this.POST_XOA_DUTHAO_HOPDONGSH = 'xoa_DuThaoHopDongSH';
  }
  static {
    this.POST_CAPNHAT_DUTHAO_HOPDONGSH = 'capNhat_DuThaoHopDongSH';
  }
  static {
    this.POST_GHI_DUTHAO_HOPDONGSH = 'ghi_DuThaoHopDongSH';
  }
  static {
    this.POST_LAY_THONGTIN_DDO = 'layThongtinDdo';
  }
  static {
    this.POST_LAY_TIEN_TRINH_DUYET = 'layTienTrinhDuyet';
  }
  static {
    this.POST_LAY_DULIEU_DUTOAN = 'layDuLieuDuToan';
  }
  static {
    this.POST_GS_DATA_BLOB = 'getGS_DATA_BLOB';
  }
  static {
    this.POST_CONVERT_IMAGE_TO_BASE64 = 'converstImageToBase64';
  }
  static {
    this.POST_LAY_MAX_STT_SO = 'layMaxSTTSo';
  }
  static {
    this.POST_CAPNHAT_CHUYEN_KHAITHAC = 'capNhatChuyenKhaiThac';
  }
  static {
    this.POST_HUY_CHUYEN_KHAITHAC = 'huyChuyenKhaiThac';
  }
  static {
    this.POST_LAY_INFO_CHUYEN_KHAITHAC = 'layInfoChuyenKhaiThac';
  }
  static {
    this.POST_LAY_KY_THANG_NAM = 'layKyThangNam';
  }
  static {
    this.POST_LAY_DS_DIEMDO_THEO_MASO_GCS = 'layDSDiemDoTheoMaSoGCS';
  }
  static {
    this.POST_CAPNHAT_HOANTAT = 'capNhatHoanTat';
  }
  static {
    this.POST_XOA_HOANTAT = 'xoaHoanTat';
  }
  static {
    this.POST_DELETE_PHIEUTHU_HU = 'DeletePhieuthuHU';
  }
  static {
    this.POST_TTIN_TNHAN_THEO_LST_MAKH = 'layTTinTNhanTheoLstMaKH';
  }
  static {
    this.POST_THEM_TIEPNHAN_YCAU_THEOLO = 'themTiepNhanYCau_TheoLo';
  }
  static {
    this.POST_CAPNHAT_TIEPNHAN_YCAU_THEOLO = 'capNhatTiepNhanYCau_TheoLo';
  }
  static {
    this.POST_XOA_TIEPNHAN_YCAU_THEOLO = 'xoaTiepNhanYCau_TheoLo';
  }
  static {
    this.POST_DATA_TIEPNHAN_UPDATE = 'getDataTiepNhan_Update';
  }
  static {
    this.POST_LAY_TTIN_HOPDONG_DATHUCHIEN = 'layTTinHopDongDaThucHien';
  }
  static {
    this.POST_THEM_HOPDONG_DVK = 'themHopDongDvk';
  }
  static {
    this.POST_XOA_HOPDONG_DVK = 'xoaHopDongDvk';
  }
  static {
    this.POST_CAPNHAT_HOPDONG_DVK = 'capNhatHopDongDvk';
  }
  static {
    this.POST_TIM_YEUCAU_LAP_BIENBAN = 'timYeucauLapBienBan';
  }
  static {
    this.POST_SEARCH_TTIN_HTRUONG = 'SearchTtinHtruong';
  }
  static {
    this.POST_LAY_THONG_TIN_SO_GCS_KHANG = 'layThongtinSoGCS_Khang';
  }
  static {
    this.POST_INSERT_KSAT_HTRUONG = 'InsertKsatHtruong';
  }
  static {
    this.POST_UPDATE_KSAT_HTRUONG = 'UpdateKsatHtruong';
  }
  static {
    this.POST_DELETE_KSAT_HTRUONG = 'DeleteKsatHtruong';
  }
  static {
    this.POST_GET_DDO = 'GetDdo';
  }
  static {
    this.POST_INSERT_PHIEU_THU = 'InsertPhieuthu';
  }
  static {
    this.POST_DELETE_PHIEU_THU = 'DeletePhieuthu';
  }
  static {
    this.POST_LAY_QUYET_TOAN_THEO_LO = 'layQuyetToanTheoLo';
  }
  static {
    this.POST_THEM_QUYET_TOAN_THEO_LO = 'themQuyetToanTheoLo';
  }
  static {
    this.POST_XOA_QUYET_TOAN_THEO_LO = 'xoaQuyetToanTheoLo';
  }
  static {
    this.POST_CAP_NHAT_QUYET_TOAN_THEO_LO = 'capnhatQuyetToanTheoLo';
  }
  static {
    this.POST_GHI_PHATTRIEN_NHANH = 'ghi_PhatTrienNhanh';
  }
  static {
    this.POST_INSERT_HDG_LOG_PTN = 'InsertHDGLogPTN';
  }
  static {
    this.POST_INSERT_DVU_PTN = 'insertDvu_PTN';
  }
  static {
    this.POST_THEM_DVU_HSO_GTO = 'themDvHSoGTo';
  }
  static {
    this.POST_CREATE_FILEHDONG_DICHVU_DIEN = 'CreateFilePDF_DuThaoHDMBD_Sua';
  }
  static {
    this.POST_CREATE_FILECDHD_DICHVU_DIEN = 'CreateFilePDF_BBanCDHDMBD';
  }
  static {
    this.POST_THEM_MOI_TNHAN_YCAU_NBO = 'themMoiTNhanYCauNBo';
  }
  static {
    this.GET_HSO_GTO_BY_MA_HDONG = 'getHSoGToByMaHDong';
  }
  static {
    this.GET_TTIN_DV_TIEN_TNHAN = 'getListThongTinDVTienTNhan';
  }
  static {
    this.GET_DS_COT = 'getDSCot';
  }
  static {
    this.GET_DS_HANH_HIEN_TRUONG = 'getDSHinhanhhientruong';
  }
  static {
    this.POST_GET_LIST_DV_CAU_HINH_DK_BY_MA_LOAI_YCAU = 'getListDVCauHinhDKByMaLoaiYCau';
  }
  static {
    this.POST_TRACUU_THONGTIN_DOANHNGHIEP = 'TraCuuThongTinDoanhNghiep';
  }
}
class API_HDON_D_CHINH {
  static {
    this.POST_GET_CHI_SO_DDO = 'getchisoddo';
  }
  static {
    this.POST_GET_THONG_TIN_HDON = 'getthongtinHDon';
  }
  static {
    this.POST_GET_HD_LAP_THONG_BAO_LAN1 = 'getHD_Lapthongbaolan1';
  }
  static {
    this.POST_GET_DSACH_BBAN = 'getDSachBBan';
  }
  static {
    this.POST_GET_THONG_TIN_CS = 'getthongtinCS';
  }
  static {
    this.POST_GET_THONG_TIN_HD = 'getthongtinHD';
  }
  static {
    this.POST_GET_THONG_TIN_NGAY_PH = 'getthongtinngayph';
  }
  static {
    this.POST_GET_HDON_DC_DT = 'get_HDonDC_DT';
  }
  static {
    this.POST_LAP_HDDT_DC_HSM = 'Lap_HDDT_DC_HSM';
  }
  static {
    this.POST_GET_HDN_HDON_DC_TRUC_TIEP = 'getHdnHdonDcTrucTiep';
  }
  static {
    this.POST_GET_NGAY_DAU_KY_NGAY_CUOI_KY_HDON = 'getNgayDauKyNgayCuoiKyHdon';
  }
  static {
    this.POST_GHI_DU_LIEU_TT = 'ghiDuLieuTT';
  }
  static {
    this.POST_CHECK_HUY_BO_HOA_DON_DC = 'checkHuyBoHoaDonDC';
  }
  static {
    this.POST_INSERT_HDON_DCHINH_SUA_SAI = 'insertHDonDChinhSuaSai';
  }
  static {
    this.POST_GET_HD_CHI_TIET_DC = 'gethdchitietdc';
  }
  static {
    this.POST_GET_THONG_TIN_HDON_CTIET = 'getthongtinHDonCtiet';
  }
  static {
    this.POST_GET_HDON_DC = 'gethdondc';
  }
  static {
    this.POST_UPDATE_INFO_RECEIVE_BILL = 'UpdateInfoReceiveBill';
  }
  static {
    this.POST_GET_INFO_COR_BILL = 'GetInfoCorBill';
  }
  static {
    this.POST_GET_HDON_TIEP_NHAN_ID = 'gethdontiepnhan_id';
  }
  static {
    this.POST_DELETE_HD_TIEP_NHAN_SSAI = 'delete_hdtiepnhanssai';
  }
  static {
    this.POST_INSERT_HD_TIEP_NHAN_SSAI = 'insert_hdtiepnhanssai';
  }
  static {
    this.POST_CHECK_ID_HOADON_DA_DIEU_CHINH = 'checkid_hoadondadieuchinh';
  }
  static {
    this.POST_GET_BBAN_GIAOPH_BY_ARRAY = 'get_BBan_GiaoPH_ByArray';
  }
  static {
    this.POST_GET_BBAN_GIAOPH = 'get_BBan_GiaoPH';
  }
  static {
    this.POST_GET_INFO_CUSTOMER = 'GetInfoCusTomer';
  }
  static {
    this.POST_XOA_HDON_DCHINH_SUA_SAI = 'xoaHDonDChinhSuaSai';
  }
  static {
    this.POST_GET_BBAN_DCHINH_TTIEP = 'getBBanDChinhTTiep';
  }
  static {
    this.POST_GET_HDON_DCHINH_TINH_BQUAN = 'getHDonDChinhTinhBQuan';
  }
  static {
    this.POST_TKIEM_HDON_CTIET_FORGSMBD = 'TKiemHDon_CtietForGSMBD';
  }
  static {
    this.POST_INSERT_HDN_DATA_DCHINH = 'insertHdnDataDchinh';
  }
  static {
    this.POST_LAY_MAX_IDBBAGDCHINH = 'layMaxIdBBAGDChinh';
  }
}
class API_HDON_DTU {
  static {
    this.POST_CAP_NHAT_BANG_THOP = 'capNhatBangThop';
  }
  static {
    this.POST_GET_DATA_TDIEP_LO = 'getDataTDiep_Lo';
  }
  static {
    this.POST_CAP_NHAT_BANG_THOP_GUI_LAI_HDON_LE = 'capNhatBangThopGuiLaiHdonLe';
  }
  static {
    this.POST_DOWNLOAD_FILE_XML_THONG_DIEP = 'downloadFileXmlThongDiep';
  }
  static {
    this.POST_CAP_NHAT_BANG_THOP_GUI_LAI_CQT = 'capNhatBangThopGuiLaiCQT';
  }
  static {
    this.POST_GET_PHAN_HOI_CO_QUAN_THUE = 'getPhanHoiCoQuanThue';
  }
  static {
    this.POST_SAVE_DATA_HANG_DOI_SEND_TO_GDOT = 'saveDataHangDoiSendToGDOT';
  }
  static {
    this.POST_GET_TTIN_CTIET_XML_BANG_THOP = 'getTTinCTietXMLBangTHop';
  }
  static {
    this.POST_GET_DATA_TONG_HOP_GUI_TCT = 'getDataTongHopGuiTCT';
  }
  static {
    this.POST_CAP_NHAT_THOP_HDON_HUY_BO_HOAN_TOAN = 'capNhatThopHdonHuyBoHoanToan';
  }
  static {
    this.POST_GET_HDON_DCHINH_HBH_TOAN = 'getHdonDChinhHBHToan';
  }
  static {
    this.POST_GET_HD_DTCD = 'getHDDTCD';
  }
  static {
    this.POST_GET_HDDT_TBTD = 'getHDDT_TBTD';
  }
  static {
    this.POST_GET_HDDT_CHI_TIET = 'getHDDT_Chitiet';
  }
  static {
    this.POST_GET_HD_DT = 'getHDDT';
  }
  static {
    this.POST_GET_DS_XEM_HD = 'getDS_XEMHD';
  }
  static {
    this.POST_GET_LOG_KY_HD = 'getLogKyHD';
  }
  static {
    this.POST_GET_HANG_DOI_KY_HD = 'getHangDoiKyHD';
  }
  static {
    this.POST_GET_LOG_KY_HD_LOI = 'getLogKyHD_Loi';
  }
  static {
    this.POST_DELETE_LOI_KY_HDON = 'deleteLoiKyHDon';
  }
  static {
    this.POST_GET_LIST_TTIN_DLIEU_CQT = 'GetListTTinDLieuCQT';
  }
}
class API_HOP_DONG {
  static {
    this.GET_HDG_KHANG_EVN_C06 = 'getHdgKhangEvnC06';
  }
  static {
    this.POST_GET_TTIN_KHDMT_CHUYENDVI = 'getTTinKHDMTLogChuyenDVi';
  }
  static {
    this.POST_GET_DDO_MTAM_BY_LISTMADDO = 'getHDGDdoMtam_byMaDdo';
  }
  static {
    this.POST_GET_KHACHHANG_BY_LISTMAKHANG = 'layTtinKhangByListMaKH';
  }
  static {
    this.POST_GET_DDO_BY_LISTDDO = 'layTtinDDoByListMaDDo';
  }
  static {
    this.POST_GET_KHACHHANG_CHUYENDVI = 'getTTLogChuyenDonVi';
  }
  static {
    this.POST_CAPNHAT_CHUYENDVI = 'insertChuyenDonVi';
  }
  static {
    this.POST_GET_HDG_QHE_DDO_BY_MA_DIEMDO = 'getHdgQheDdoByMaDiemDo';
  }
  static {
    this.POST_UPDATE_KHACHHANG_CHUADOISOAT = 'updateKhachHangChuaDoiSoat';
  }
  static {
    this.POST_UPDATE_DINHDANH_KHACHHANG = 'updateDinhDanhKhachHang';
  }
  static {
    this.POST_TIMKIEM_KHACHHANG_EVN_C06 = 'timKiemKhachHangEvnC06';
  }
  static {
    this.POST_UPDATE_KHACHHANG_EVN_C06 = 'updateKhachHangEvnC06';
  }
  static {
    this.POST_UPDATE_KHACHHANG_DA_DOISOAT = 'updateKhachHangDaDoiSoat';
  }
  static {
    this.POST_LIST_SO_NGC = 'getListSoNhapCSoNGC';
  }
  static {
    this.POST_LAY_KHANG_LECH_MANN = 'timKiemKhangLechMaNN';
  }
  static {
    this.GET_KHANG_BAN_BUON = 'timKiemKHangBanBuon';
  }
  static {
    this.GET_KHANG_DDO_BY_MADDO = 'Get_Khang_Ddo_byMaddo';
  }
  static {
    this.GET_KHANG_MTMN_TDOI_CSUAT_COD = 'getKhangMTMNTDoiCSuatCOD';
  }
  static {
    this.POST_GET_CSUAT_MAX_DATE = 'getCsuatMaxDate';
  }
  static {
    this.POST_GET_LIST_DIEM_DO_BY_LIST_SO_GCS = 'getListDiemDoByListSoGCS';
  }
  static {
    this.POST_GET_DIEM_DO_TDOI_GCS = 'getDiemDoTDoiGCS';
  }
  static {
    this.POST_GHI_LAP_KE_HOACH_GCS = 'GhiLapKeHoachGCS';
  }
  static {
    this.POST_CHECK_NGAY_LAP_GCS = 'checkNgayLapGCS';
  }
  static {
    this.POST_GET_DANH_SACH_DIEM_DO_SOXA_LST_SO = 'getDachSachDiemDoSoDoxaLstSo';
  }
  static {
    this.POST_SUA_KY_LAI_HOP_DONG = 'suaKyLaiHopDong_DichVu';
  }
  static {
    this.POST_GET_DATA_KHOACH = 'getDataKHoach';
  }
  static {
    this.GET_DDO_XAC_NHAN_NGAY_GHI_CU = 'GetDDoXacNhanNgayGhiCu';
  }
  static {
    this.POST_UPDATE_XAC_NHAN = 'updateXacNhan';
  }
  static {
    this.POST_GET_DSTT_DDOTDOI_GCS = 'getDsachTTDdoTdoiGCS';
  }
  static {
    this.POST_HDG_KHANG_TTHUAN_DICH_NGAY_GCS = 'GetHDGKhangTThuanDichNgayGCS';
  }
  static {
    this.POST_GET_HDG_KHANG_TTHUAN_DICHNGAYGCS = 'GetHDGKhangTThuanDichNgayGCS';
  }
  static {
    this.POST_GET_SO_GCS_BY_MA_DDO = 'getSoGcsByMaDDo';
  }
  static {
    this.POST_GET_DIEM_DO_KHANG = 'getDiemDoKhang';
  }
  static {
    this.POST_GET_DIA_CHI_DDO_HD_DC = 'getdiachiddohddc';
  }
  static {
    this.POST_GET_NGAN_HANG_DVI = 'getnganhangdvi';
  }
  static {
    this.POST_GET_DIA_CHI_DDO = 'getdiachiddo';
  }
  static {
    this.POST_GET_THONG_TIN_DDO_PHU = 'getthongtinDdophu';
  }
  static {
    this.POST_GET_LST_DIEM_DO_SO_GCS_XNHANHDON = 'getLstDiemDoSoGCS_XNhanHDon';
  }
  static {
    this.POST_GET_QHE_THD = 'getQHeTHD';
  }
  static {
    this.POST_GET_DDO_HUY_TINH_HD = 'getDDoHuyTinhHD';
  }
  static {
    this.POST_GET_DSACH_DDO_LISTSO_NGAYCKY = 'getDSachDDoListSo_NgayCKy';
  }
  static {
    this.POST_GET_TTIN_PLUC_HOPDONG = 'getTTinPLucHopDong';
  }
  static {
    this.POST_LAY_THONG_TIN_CONG_NO_INBBANXNHANNO = 'lay_thongtinCongno_inBBanXNhanNo';
  }
  static {
    this.POST_GET_INFO_CUSTOMER = 'GetInfoCusTomer';
  }
  static {
    this.POST_GET_DDO_SO_GCS = 'getDDoSoGCS';
  }
  static {
    this.POST_GET_DACHSACH_DIEMDO_SOLSTSO = 'getDachSachDiemDoSoLstSo';
  }
  static {
    this.POST_GET_DDO_BY_MA_TRAM_FOR_GSMBD = 'getDDoByMaTramForGSMBD';
  }
  static {
    this.POST_LAY_TTIN_AP_GIA_DDO_MAX_NGAYHLUCKTGS = 'layTtinApGiaDDoMaxNgayHLucKTGS';
  }
  static {
    this.POST_GET_DDO_BY_SOGCS_FOR_GSMBD = 'getDDoBySoGCSForGSMBD';
  }
  static {
    this.POST_GET_NGAY_HIEU_LUC = 'getNgayHieuLuc';
  }
  static {
    this.POST_GET_HDGB_DAM_HDONG = 'GetHDGBDamHDong';
  }
  static {
    this.POST_GET_HDG_DDO_SOGCSHHLBYMAKHANG = 'getHdgDdoSogcsHHLbyMaKhang';
  }
  static {
    this.POST_LAY_TTIN_AP_GIADDOMAXNGAYHLUCGIANHOMNN = 'layTtinApGiaDDoMaxNgayHLucGiaNhomNN';
  }
  static {
    this.POST_LAY_TTIN_APGIA_THAYDOI_SOHO = 'layTtinApGiaThaydoiSoho';
  }
  static {
    this.POST_LAY_TTIN_AP_GIA_DDOMAXNGAYHLUC = 'layTtinApGiaDDoMaxNgayHLuc';
  }
  static {
    this.POST_GET_CUSTOMER_DATAKH = 'getCustomerDataKH';
  }
  static {
    this.POST_GET_PMAXBYMAKH = 'getPmaxByMaKH';
  }
  static {
    this.POST_GET_GIA_CAONHAT = 'getGiaCaoNhat';
  }
  static {
    this.POST_GET_BBAN_AP_GIA_TU_NGAY_DENNGAY = 'getBBanApgiatuNgaydenNgay';
  }
  static {
    this.POST_CANCEL_UPDATE_TTIN_BDAM_HDONG = 'CancelUpdateTTinBDamHDong';
  }
  static {
    this.POST_UPDATE_TTIN_BDAM_HDONG = 'UpdateTTinBDamHDong';
  }
  static {
    this.POST_GET_DATA_KHANG_HOPDONG = 'GetDataKHangHopDong';
  }
  static {
    this.POST_GET_LIST_HDG_HDONG_DVK = 'GetListHDGHDongDVK';
  }
  static {
    this.POST_GET_THONGTINKH = 'getthongtinkh';
  }
  static {
    this.POST_GET_DIEMDO = 'getDiemdo';
  }
  static {
    this.POST_GET_CHUOI_GIA_BY_LIST_DDO = 'getChuoiGiaByListDDo';
  }
  static {
    this.POST_LAYDIEMDO_BY_MADDOCONHL = 'layDiemDo_ByMaDDoConHL';
  }
  static {
    this.POST_TIMKIEM_BBAN_TTIN_KHANG_DDO_MOI = 'TimKiemBbanTtinKhangddo_Moi';
  }
  static {
    this.POST_GET_HDGT_LYKYLAI_BY_MAYCAUKNAI = 'GetHDGTLyKyLaiByMaYCauKNai';
  }
  static {
    this.POST_CANCEL_UPDATE_TTIN_KHANG_MTMN = 'CancelUpdateTTinKHangMTMN';
  }
  static {
    this.POST_UPDATE_TTIN_KHANG_MTMN = 'UpdateTTinKHangMTMN';
  }
  static {
    this.POST_HUY_CHUYEN_SO = 'huyChuyenSo';
  }
  static {
    this.POST_GET_DACHSACH_DIEMDO_SO_GCS = 'getDachSachDiemDoSoGCS';
  }
  static {
    this.POST_DANH_LAI_STT = 'DanhLaiSTT';
  }
  static {
    this.POST_GET_DD_TRAM_CD = 'getDdTramCD';
  }
  static {
    this.POST_TIMKIEM_KHANG = 'timKiemKhachHang';
  }
  static {
    this.POST_TIMKIEM_KHANG_MTMN = 'TimKiemKHangMTMN';
  }
  static {
    this.POST_GET_KHACH_HANG_HET_HLUC = 'GetKhachHangHetHLuc';
  }
  static {
    this.POST_GET_TT_BBAN_MDICH_SDDIEN = 'getTTBBanMDich_SDDien';
  }
  static {
    this.POST_GET_TTIN_HDDVK = 'GetTTinHDDVK';
  }
  static {
    this.POST_XOA_BBAN_APGIA_DUP = 'xoaBbanApGia_DUP';
  }
  static {
    this.POST_GET_THONGTIN_KHACHHANG_MTMN = 'GetThongTinKhachHangMTMN';
  }
  static {
    this.POST_DELETE_DATA_HDG_TTIN_TDOI_MTAM = 'DeleteDataHDGTTinTDoiMTAM';
  }
  static {
    this.POST_UPDATE_DATA_HDG_TTIN_TDOI_MTAM = 'UpdateDataHDGTTinTDoiMTAM';
  }
  static {
    this.POST_GET_HDG_HDONG_DVK_BY_MAKH = 'GetHDGHDongDVKByMaKH';
  }
  static {
    this.POST_GET_PLUC_HDONG = 'getPLucHDong';
  }
  static {
    this.POST_CAPNHAT_LOG_DCHINH_MTAM = 'capNhatLogDChinhMTAM';
  }
  static {
    this.POST_GET_DATA_THEMMOI_MTMN_CONHLUC = 'GetDataThemMoiMTMNConHLuc';
  }
  static {
    this.POST_THEM_TTIN_DDO_MTAM = 'themTtinDdoMtam';
  }
  static {
    this.POST_LAY_TTIN_DDO_MTAM_MOI_NHAT = 'layTtinDdoMtamMoinhat';
  }
  static {
    this.POST_BBAN_SOHO_SD_CHUNG_CTO = 'getBBanSoHo_SDChungCto';
  }
  static {
    this.POST_CHECK_KHANG_HAS_HDONG_MTMN = 'CheckKHangHasHDongMTMN';
  }
  static {
    this.POST_GET_INFO_HDONG_KHANG_MTMN_CON_HLUC = 'GetInfoHDongKHangMTMNConHLuc';
  }
  static {
    this.POST_CAPNHAT_TTIN_KHANG = 'capnhatTtinKhang';
  }
  static {
    this.POST_XOA_TDOI_TTIN_TTOAN = 'xoaTDoiTTinTToan';
  }
  static {
    this.POST_THEM_TDOI_TTIN_TTOAN = 'ThemTDoiTTinTToan';
  }
  static {
    this.POST_LAY_LST_TTIN_CAUHINH_IN_HDBY_MADVI = 'laylstTTinCauhinhinHdByMaDvi';
  }
  static {
    this.POST_THEMKY_LAI_HOPDONG_DICHVU = 'themKyLaiHopDong_DichVu';
  }
  static {
    this.POST_DATLAPPAN_CDIEN_HDONG = 'GetDataLapPAnCDienHDong';
  }
  static {
    this.POST_GET_HTML_VIEW_THANHLY_KYLAI_MTAM = 'GetHTMLViewThanhLyKyLaiMTAM';
  }
  static {
    this.POST_CAPNHAT_HOPDONG_DVK = 'capNhatHopDongDvk';
  }
  static {
    this.POST_XOA_HOPDONG_DVK = 'xoaHopDongDvk';
  }
  static {
    this.POST_THEM_HOPDONG_DVK = 'themHopDongDvk';
  }
  static {
    this.GET_HOPDONG_MTAM_DUNGTTOAN = 'GetHopDongMTAMDungTToan';
  }
  static {
    this.TIMKIEM_KHACHHANG = 'timKiemKhachHang';
  }
  static {
    this.POST_LAY_TTINHOPDONGDAKYLAI_DICHVU = 'lay_TTinHopDongDaKyLai_DichVu';
  }
  static {
    this.POST_GETHOPDONGMTAMBYMAKH = 'getHopDongMTAMByMaKH';
  }
  static {
    this.POST_LAY_THONG_TINKH_TIEPNHAN = 'layThongTinKHTiepNhan';
  }
  static {
    this.POST_LAY_TTIN_CAUHINH_KHANG = 'layTtinCauHinhKhang';
  }
  static {
    this.POST_LAY_TTIN_KHANG_MOINHAT = 'layTtinKHangMoinhat';
  }
  static {
    this.POST_LAY_THONGTIN_APGIA_DDO = 'layThongTinApGiaDDo';
  }
  static {
    this.POST_LAY_TTIN_CHUOI_APGIA_DDO = 'layTtinChuoiApGiaDDo';
  }
  static {
    this.POST_LAY_GCS_GANNHAT_THEO_DDO = 'layGCSGanNhat_theoDdo';
  }
  static {
    this.POST_LAY_HDON_GANNHAT_THEO_KHANG = 'layHdonGanNhat_theoKhang';
  }
  static {
    this.POST_TTIN_TREOTHAO_THEO_MADDO = 'getTtinTreothao_theoMaDDo';
  }
  static {
    this.POST_THEM_BBAN_APGIA = 'themBbanApGia';
  }
  static {
    this.POST_XOA_BBAN_APGIA = 'xoaBbanApGia';
  }
  static {
    this.POST_GET_GIA_NHOMN_NHIEULUC = 'getGiaNhomNNHieuluc';
  }
  static {
    this.LAYTHONGTINCHISO_DUP = 'layThongTinChiSo_DUP';
  }
  static {
    this.POST_LAY_TTINKHANG_CONHLUC = 'layTtinKhang_ConHluc';
  }
  static {
    this.POST_THUCHIEN_THANHLY_HUYTHANHLY_HOPDONG = 'ThucHien_ThanhLy_HuyThanhLy_HopDong';
  }
  static {
    this.POST_HDG_TLY_KYLAI_MAXID = 'select_HDG_TLY_KYLAI_MaxID';
  }
  static {
    this.POST_LAY_TTIN_HO_DCHUNG = 'lay_TTinHoDchung';
  }
  static {
    this.POST_LAY_DSACHDDO_THEO_MAKHANG = 'layDSachDdo_theoMaKHang';
  }
  static {
    this.POST_LAY_THONGTIN_HOPDONG = 'layThongTinHopDong';
  }
  static {
    this.POST_ALL_HOPDONG_MTMN_BY_MAKH = 'GetAllHopDongMTMNByMaKH';
  }
  static {
    this.POST_LIST_HDGT_DOI_TTINBY_MA_YCAU_KNAI = 'GetListHDGTDoiTTinByMaYCauKNai';
  }
  static {
    this.POST_TRANG_THAI_DDO_LICH_GCS = 'getTrangthaiDdoLichGCS';
  }
  static {
    this.POST_THEM_CSO_CHOT_DDO = 'themCsoChotDdo';
  }
  static {
    this.POST_LAY_THONGTIN_DDO = 'layThongTinDDo';
  }
  static {
    this.POST_TTIN_TREOTHAO_HSN = 'getTtinTreothao_HSN';
  }
  static {
    this.POST_THEM_BBAN_THAYDOI_SOHO = 'themBBanThayDoiSoHo';
  }
  static {
    this.POST_XOA_BBAN_THAYDOI_SOHO_DDO = 'xoaBBanThayDoiSoHo_Ddo';
  }
  static {
    this.POST_LAY_THONG_TIN_DDO_SOHO = 'layThongTinDDoSoHo';
  }
  static {
    this.POST_GIAY_TO_DUNG_CHUNG = 'getGiayTo_DungChung';
  }
  static {
    this.POST_LIST_HDG_HODCHUNG_BY_MADDO = 'getListHDGHoDChungByMaDDo';
  }
  static {
    this.POST_THEM_TTIN_KHANG = 'themTtinKhang';
  }
  static {
    this.POST_XOA_TTIN_KHANG = 'xoaTtinKhang';
  }
  static {
    this.POST_LAY_KHACHHANG_THEO_MAKH_CONHL = 'layKhachHangTheoMaKHConHL';
  }
  static {
    this.POST_CHECK_HHCX_DEKY_LAIHD = 'checkHHCXDeKyLaiHD';
  }
  static {
    this.POST_KIEMTRA_XOA_BBAN_GIAHAN_HOPDONG = 'KiemTraxoaBBanGiaHanHopDong';
  }
  static {
    this.POST_THEM_BBAN_GIAHAN_HOPDONG = 'themBBanGiaHanHopDong';
  }
  static {
    this.POST_XOA_BBAN_GIAHAN_HOPDONG = 'xoaBBanGiaHanHopDong';
  }
  static {
    this.POST_TTB_BAN_CDUT_HD = 'getTTBBanCDutHD';
  }
  static {
    this.POST_SINHMA_HOPDONG = 'sinhMa_HopDong';
  }
  static {
    this.POST_INSERT_TTIN_INHDONG = 'InsertTTin_InHDong';
  }
  static {
    this.POST_CHECK_TRUNG_MAHONG = 'CheckTrungMaHong';
  }
  static {
    this.POST_LIST_DIEMDO_BY_LSTMAKHANG = 'getListDiemDoBylstMaKhang';
  }
  static {
    this.POST_TTIN_HOPDONG_DEKYLAI_THEOLO = 'lay_TTinHopDongDeKyLai_TheoLo';
  }
  static {
    this.POST_THEM_KYLAI_HOPDONG_THEOLO = 'themKyLaiHopDong_TheoLo';
  }
  static {
    this.POST_CHECK_BIENDONG_APGIA = 'checkBienDongApGia';
  }
  static {
    this.POST_XOA_KYLAI_HOPDONG_THEOLO = 'xoaKyLaiHopDong_TheoLo';
  }
  static {
    this.POST_TTIN_KHANGTNHAN_BY_LSTMAKH = 'getTTinKhangTNhanByLstMaKH';
  }
  static {
    this.POST_THEM_TDOI_TTIN_DDO_CUNG_NGAY = 'ThemTDoiTTinDDoCungNgay';
  }
  static {
    this.POST_XOA_TDOI_TTIN_LIENHE = 'xoaTDoiTTinLienHe';
  }
  static {
    this.POST_XOA_DIEM_DO = 'xoaDiemDo';
  }
  static {
    this.POST_THEM_TDOI_TTIN_LIENHE = 'ThemTDoiTTinLienHe';
  }
  static {
    this.POST_TTIN_KHANG_LHE_BY_FILE_EXCEL = 'layTtinKHangLHeMoinhatByFileExcel';
  }
  static {
    this.POST_LAY_TTIN_HOPDONG_DEKYLAI = 'lay_TTinHopDongDeKyLai';
  }
  static {
    this.POST_LAY_TTINHOPDONG_DEKYLAI_DICHVU = 'lay_TTinHopDongDeKyLai_DichVu';
  }
  static {
    this.POST_LIST_DIEMDO_BY_MAKHANG = 'getListDiemDoByMaKhang';
  }
  static {
    this.POST_CHECK_BIEN_DONG_DIEMDO = 'checkBienDongDiemDo';
  }
  static {
    this.POST_CHECK_TLKL_DIEMDO = 'timKiemTTinDDoTLKL';
  }
  static {
    this.POST_CHECK_BIENDONG_KHACHANG = 'checkBienDongKhacHang';
  }
  static {
    this.POSTCHECK_BIENDONG_HOPDONG = 'checkBienDongHopDong';
  }
  static {
    this.POST_THEM_TDOI_TTIN_DDO = 'ThemTDoiTTinDDo';
  }
  static {
    this.POST_XOA_TDOI_TTIN_DDO = 'xoaTDoiTTinDDo';
  }
  static {
    this.POST_NGUNG_DIEM_DO = 'ngungDiemDo';
  }
  static {
    this.POST_CAPNHAT_THONGTIN_DIEMDO = 'CapNhatThongTinDiemDo';
  }
  static {
    this.POST_LAY_TTIN_DDODE_THAYDOI_THEO_MAKH = 'lay_TTinDDoDeThayDoi_TheoMaKH';
  }
  static {
    this.POST_CREATE_THANHLY_MT = 'CreateThanhLyMT';
  }
  static {
    this.POST_DELETE_THANHLY_MT = 'DeleteThanhLyMT';
  }
  static {
    this.POST_HTML_VIEW_THANHLY_MTAM = 'GetHTMLViewThanhLyMTAM';
  }
  static {
    this.POST_HDG_TTIN_HDDVK_BY_MAHDONG = 'GetHDGTTinHDDVKByMaHDong';
  }
  static {
    this.POST_HDG_TLY_DVK_BY_MAKHANG = 'GetHDGTLyDVKByMaKHang';
  }
  static {
    this.POST_HDG_DATA_DUTHAO_BY_MA_YCAUKNAI = 'GetHDGDataDuThaoByMaYCauKNai';
  }
  static {
    this.POST_GET_DSACH_DDO_MTAM_BY_MAKHANG = 'GetDSachDDoMTAMByMaKHang';
  }
  static {
    this.POST_LIST_DIEMDO_FOR_GHEPTONG = 'getListDiemDoForGhepTong';
  }
  static {
    this.POST_THEM_HDG_QHE_DDO = 'themHdgQheDdo';
  }
  static {
    this.POST_THEM_HDG_QHE_DDO_TRUPHU = 'themHdgQheDdoTruPhu';
  }
  static {
    this.POST_XOA_HDG_QHE_DDO = 'xoaHdgQheDdo';
  }
  static {
    this.POST_HDG_QHE_DDO_BY_MAKHANG = 'getHdgQheDdoByMaKhang';
  }
  static {
    this.POST_THONGTIN_DIEMDO = 'getThongTinDiemDo';
  }
  static {
    this.POST_XOA_HDG_QHE_DDO_TRUPHU = 'xoaHdgQheDdoTruPhu';
  }
  static {
    this.POST_HDG_DDO_SO_GCS_BY_LIST_DDO = 'getHdgDdoSogcsByListDDo';
  }
  static {
    this.POST_HDG_QHE_DDO_TRUPHU_FOR_DELETE = 'getHdgQheDdoTruPhuForDelete';
  }
  static {
    this.POST_LAY_DSKH_CHO_THUETRO = 'layDSKHChoThueTro';
  }
  static {
    this.POST_GHI_KH_CHO_THUE_TRO = 'ghi_KHChoThueTro';
  }
  static {
    this.POST_LAY_KTRA_KH_THUE_TRO_THEO_MAKH = 'layKtraKHThuetroTheoMaKH';
  }
  static {
    this.POST_XOA_BBAN_KTRA_HO_THUE_TRO = 'xoaBBanKtraHoThueTro';
  }
  static {
    this.POST_CREATE_DSACH_KHANG_UU_DAI = 'createDSachKhangUuDai';
  }
  static {
    this.POST_DELE_DSACH_KHANG_UU_DAI = 'deleDSachKhangUuDai';
  }
  static {
    this.POST_GET_LIST_KHANG_UU_DAI = 'getListKhangUuDai';
  }
  static {
    this.POST_GET_LIST_KHAN_GAP_GIA_GTRU = 'getListKhangApGiaGTru';
  }
  static {
    this.POST_DELETE_HDG_BBAN_APGIA_GTRU = 'deleteHdgBBanApGiaGTru';
  }
  static {
    this.POST_CAPNHAT_BBAN_APGIA_GTRU = 'capNhatBBanApGiaGTru';
  }
  static {
    this.POST_GET_DULIEU_APGIA_GTRU = 'getDuLieuApGiaGTru';
  }
  static {
    this.POST_TIMKIEM_KHACHHANG_IN_BBAN_TTHAO = 'timKiemKhachHangInBBanTThao';
  }
  static {
    this.POST_DATA_BB_CDMT_BY_MAKHANG = 'GetDataBBCDMTByMaKHang';
  }
  static {
    this.POST_GET_INFO_CHISO_CHAMDUT_MATTROI = 'GetInfoChiSoChamDutMatTroi';
  }
  static {
    this.POST_GET_THONGTIN_HDONG_SAU_CTO = 'getThongTinHDongSauCTo';
  }
  static {
    this.POST_CREATE_DUTHAO_HDONG_DAY_SAU_CTO = 'createDuThaoHDongDaySauCTo';
  }
  static {
    this.POST_layTTinDdoSoGcsTheoDDo4CapDien = 'layTTinDdoSoGcsTheoDDo4CapDien';
  }
  static {
    this.POST_XOA_TDOI_KHANG_DTUONG = 'xoaTDoiKhangDtuong';
  }
  static {
    this.POST_LAY_TTIN_KHANG_DTUONG_MOINHAT = 'layTtinKhangDtuongMoinhat';
  }
  static {
    this.POST_THEM_TTIN_KHANG_DTUONG = 'themTtinKhangDtuong';
  }
  static {
    this.POST_THEM_CHUYEN_DIEM_DO = 'themChuyenDiemDo';
  }
  static {
    this.POST_XOA_KYLAI_HOPDONG_DICHVU = 'xoaKyLaiHopDong_DichVu';
  }
  static {
    this.POST_XOA_KYLAI_HOPDONG_DICHVU_HU = 'xoaKyLaiHopDongHU_DichVu';
  }
  static {
    this.POST_XOA_CHUYEN_DIEMDO = 'xoaChuyenDiemDo';
  }
  static {
    this.POST_LAY_TTIN_HOPDONG_DVK_DATHUCHIEN = 'layTTinHopDongDvkDaThucHien';
  }
  static {
    this.POST_THANHLY_KYLAI_HOPDONG_MTAM = 'thanhLyKyLaiHopDongMTAM';
  }
  static {
    this.POST_LAY_TTINKHANG_DETHAYDOI_TTOAN_THEO_MAKH = 'layTTinKhangDeThayDoiTToanTheoMaKH';
  }
  static {
    this.POST_XOA_TDOI_DDO_MTAM = 'xoaTDoiDDoMtam';
  }
  static {
    this.LOOK_OBJECT = 'lockObject';
  }
  static {
    this.UN_LOOK_OBJECT = 'unlockObject';
  }
  static {
    this.GET_TTIN_DTHAO = 'getTTinDThao';
  }
  static {
    this.XOA_BBAN_AP_GIA_DUP = 'xoaBbanApGia_DUP';
  }
  static {
    this.LAY_THONG_TIN_AP_GIA_DDO_NGAYHIEULUC = 'layThongTinApGiaDDo_ngayhluc';
  }
  static {
    this.POST_INSERT_THANH_LY_KY_MOI_NGHIEP_VU = 'insertThanhLyKyMoiNghiepVu';
  }
  static {
    this.POST_DELETE_THANH_LY_KY_MOI_NGHIEP_VU = 'deleteThanhLyKyMoiNghiepVu';
  }
  static {
    this.POST_GET_LIST_SO_NHAP_CSO_NGC = 'getListSoNhapCSoNGC';
  }
  static {
    this.POST_GET_PLUC_HDONG_BY_MADONG_MAKHANG = 'getPLHDongByMaHDongAndMaKHang';
  }
}
class API_EMAIL {
  static {
    this.POST_GET_SE_DVU_MAU_THEO_KHACH_HANG = 'getSeDvuMauTheoKhachHang';
  }
  static {
    this.POST_GET_DS_KHANG_DKY = 'getDsKhangDky';
  }
  static {
    this.POST_getSEDVuMau = 'getSEDVuMau';
  }
  static {
    this.POST_UPDATE_SEND_SMS_THEO_LO = 'updateSendSmsTheoLo';
  }
  static {
    this.POST_GET_NOI_DUNG_TIN_NHAN = 'getNoiDungTinNhan';
  }
  static {
    this.POST_CHECK_SED_VU_MAU_IFEXIST = 'checkSEDVuMauIfExist';
  }
  static {
    this.POST_UPDATE_SED_VU_MAU = 'updateSEDVuMau';
  }
  static {
    this.POST_DELETE_SED_VU_MAU = 'deleteSEDVuMau';
  }
  static {
    this.POST_INSERT_SED_VU_MAU = 'insertSEDVuMau';
  }
  static {
    this.POST_GET_LIST_KHANG_DKY_GUI_EMAIL = 'GetListKHangDKyGuiEmail';
  }
  static {
    this.POST_UPDATE_SEND_EMAIL_THEO_LO = 'updateSendEmailTheoLo';
  }
  static {
    this.POST_GET_SMS_EMAIL_CONFIG = 'getSmsEmailConfig';
  }
  static {
    this.POST_UPDATE_SMS_EMAIL_CONFIG = 'updateSmsEmailConfig';
  }
  static {
    this.POST_DELETE_SMS_EMAIL_CONFIG = 'deleteSmsEmailConfig';
  }
  static {
    this.POST_IN_BAO_CAO = 'Inbaocao';
  }
  static {
    this.POST_CHECK_SE_DVU_MAU_IF_EXIST = 'checkSEDVuMauIfExist';
  }
  static {
    this.POST_UPDATE_SE_DVU_MAU = 'updateSEDVuMau';
  }
  static {
    this.POST_DELETE_SE_DVU_MAU = 'deleteSEDVuMau';
  }
  static {
    this.POST_INSERT_SE_DVU_MAU = 'insertSEDVuMau';
  }
  static {
    this.POST_DANG_KY_DICH_VU_THEO_LO = 'dangKyDichVuTheoLo';
  }
  static {
    this.POST_HUY_KY_DICH_VU_THEO_LO = 'huyKyDichVuTheoLo';
  }
  static {
    this.POST_GET_DS_SMS_THEO_DVI = 'getDsSmsTheoDvi';
  }
  static {
    this.POST_GET_DS_SMS_THEO_TTHAI_VA_KHOANG_THOI_GIAN = 'getDsSMSTheoTThaiVaKhoangThoiGian';
  }
  static {
    this.POST_UPDATE_TTHAI_DUYET_THEO_LO = 'updateTThaiDuyetTheoLo';
  }
}
class API_CAY_TTHAT {
  static {
    this.POST_GET_DDO_KSOAT_DNGUON = 'getDdoKsoatDNguon';
  }
  static {
    this.POST_GET_DATA_CAYTT_LKET = 'getDataCayTTLket';
  }
  static {
    this.POST_UPDATE_INFO_QHE_DDOTT = 'update_info_Qhe_DdoTT';
  }
  static {
    this.POST_GET_THEM_DDO_CAY_TT = 'get_Them_Ddo_Cay_TT';
  }
  static {
    this.POST_DELETE_PTUDIEN = 'deletePtudien';
  }
  static {
    this.POST_GET_LSTP_TUDIEN = 'getLstPtudien';
  }
  static {
    this.POST_GET_LST_MACHVONG = 'getLstMachvong';
  }
  static {
    this.POST_EXCUTE_TLMACHVONG = 'Excute_TLMachvong';
  }
  static {
    this.POST_GET_DDO_QHECAY_TT = 'getDdo_QHeCay_TT';
  }
  static {
    this.POST_GET_DDOCONDITIONDATE = 'getDdoConditionDate';
  }
  static {
    this.POST_GET_DATADSO = 'getDataDSo';
  }
  static {
    this.POST_DELETE_CHUYEN_SO = 'DeleteChuyenSo';
  }
  static {
    this.POST_GET_DDO = 'getDdo';
  }
  static {
    this.POST_UPDATE_CHANGE_CHUYEN_SOSTT = 'UpdateChangeChuyenSoSTT';
  }
  static {
    this.POST_GET_DIEMDO_CHUYENSO = 'getDiemDo_ChuyenSo';
  }
  static {
    this.POST_GET_GCS_LICH_GCS_BY_NGAY = 'get_gcslichgcsByNgay';
  }
  static {
    this.POST_GET_DDO_RGIOI = 'getDdoRgioi';
  }
  static {
    this.POST_TIMKIEM_KHACHHANG_IN_BBAN_TTHAO = 'timKiemKhachHangInBBanTThao';
  }
  static {
    this.POST_MAX_STT = 'getMax_STT';
  }
  static {
    this.POST_UPDATE_INFO_DDO_TT = 'update_info_DDo_TT';
  }
  static {
    this.POST_GET_DDO_LKET = 'getDdoLKet';
  }
  static {
    this.POST_GET_DIEM_DO = 'getDiemDo';
  }
  static {
    this.POST_GET_DATA_CAY_TT = 'getDataCay_TT';
  }
  static {
    this.POST_GET_MAX_STT_CAY_TT = 'getMaxSTTCayTT';
  }
  static {
    this.POST_UPDATE_INFO_CAY_TT = 'update_info_Cay_TT';
  }
  static {
    this.POST_UPDATE_LIST_CAY_TT = 'update_List_Cay_TT';
  }
  static {
    this.POST_GET_ALL_ANHXA_DDO_KDLDD = 'getAllAnhXaDDoKDLDD';
  }
  static {
    this.POST_UPDATE_ANHXA_DDO_KDLDD = 'updateAnhXaDDoKDLDD';
  }
  static {
    this.POST_DELETE_ANHXA_DDO_KDLDD = 'deleteAnhXaDDoKDLDD';
  }
  static {
    this.POST_TIM_KIEM_TTIN_CSO_VA_SLUONG_CUA_DDO_TU_KDLDD = 'timKiemTTinCSoVaSLuongCuaDDoTuKDLDD';
  }
}
class API_HDON_PSINH {
  static {
    this.POST_GET_HDN_HDON_BY_SO_GCS = 'getHdnHdonBySoGcs';
  }
  static {
    this.POST_LAP_HOA_DON_DTU_THD_LE = 'LapHoadon_DTu_ThdLe';
  }
  static {
    this.POST_GET_HDON_CT_LST_SO_GCS_THD_LE = 'getHdonCTLstSoGCS_ThdLe';
  }
  static {
    this.POST_GET_HDON_HUY_XAC_NHAN_THD_LE = 'getHdonHuyXacNhan_ThdLe';
  }
  static {
    this.POST_UPDATE_HDN_HDON_THD_LE = 'updatehdnHDon_ThdLe';
  }
  static {
    this.POST_GET_HDON_LST_SO_GCS_THD_LE = 'getHdonLstSoGCS_ThdLe';
  }
  static {
    this.POST_TKIEM_HDON_KH = 'TKiemHDonKH';
  }
  static {
    this.POST_HUY_TINH_HDON_KH = 'huyTinhHDonKH';
  }
  static {
    this.POST_TKIEM_LST_HDON = 'TKiemLstHDon';
  }
  static {
    this.POST_CREAT_KHANG_HDN_PHU_TAI = 'creatKhangHdnPhuTai';
  }
  static {
    this.POST_DELETE_HDN_MAU_SERY = 'deleteHDN_MAU_SERY';
  }
  static {
    this.POST_UPDATE_HDN_MAU_SERY = 'updateHDN_MAU_SERY';
  }
  static {
    this.POST_INSERT_HDN_MAU_SERY = 'insertHDN_MAU_SERY';
  }
  static {
    this.POST_GET_HDN_MAU_SERY = 'getHDN_MAU_SERY';
  }
  static {
    this.POST_GET_THONG_TIN_HDON = 'getthongtinHDon';
  }
  static {
    this.POST_GET_THONG_TIN_HDON_CTIET = 'getthongtinHDonCtiet';
  }
  static {
    this.POST_GET_HD_LAP_THONG_BAO_LAN1 = 'getHD_Lapthongbaolan1';
  }
  static {
    this.POST_GET_THONG_TIN_HD = 'getthongtinHD';
  }
  static {
    this.POST_GET_THONG_TIN_NGAY_PH = 'getthongtinngayph';
  }
  static {
    this.POST_GET_BBAN_GIAOPH_BY_ARRAY = 'get_BBan_GiaoPH_ByArray';
  }
  static {
    this.POST_GET_BBAN_GIAOPH = 'get_BBan_GiaoPH';
  }
  static {
    this.POST_LAP_HOA_DON_DTUNEW = 'LapHoadon_DTuNew';
  }
  static {
    this.POST_LAP_HOADON_DTU = 'LapHoadon_DTu';
  }
  static {
    this.POST_GET_SOGCS_SANLUONGDIEN_HDCT = 'get_SoGCS_SanLuongDien_HDCT';
  }
  static {
    this.POST_GET_SOGCS_TRANGTHAI_LO = 'get_SoGCS_TrangThai_Lo';
  }
  static {
    this.POST_XAC_NHAN_KY_DSACH_BTHUONG = 'xacNhanKyDsachBThuong';
  }
  static {
    this.POST_GET_DSACH_DDO_BTHUONG = 'getDsachDdoBthuong';
  }
  static {
    this.POST_THOP_SLUONG = 'thopSLuong';
  }
  static {
    this.POST_GET_HDON_CT_LST_SO_GCS = 'getHdonCTLstSoGCS';
  }
  static {
    this.POST_GET_HDON_LST_SO_GCS = 'getHdonLstSoGCS';
  }
  static {
    this.POST_GET_HDON_HUY_XAC_NHAN = 'getHdonHuyXacNhan';
  }
  static {
    this.POST_HUY_TINH_HDON = 'huyTinhHDon';
  }
  static {
    this.POST_HUY_TAM_TINH_HDON = 'huyTamTinhHDon';
  }
  static {
    this.POST_INSERT_SO_HDOI = 'insertSoHDoi';
  }
  static {
    this.POST_GET_LOG = 'getLog';
  }
  static {
    this.POST_TRA_CUU_HD = 'api/TraCuuHD';
  }
  static {
    this.POST_GET_SO_HDOI = 'getSoHDoi';
  }
  static {
    this.POST_TKIEM_HDON = 'TKiemHDon';
  }
  static {
    this.POST_TKIEM_HDON_TTINH = 'TKiemHDonTTinh';
  }
  static {
    this.POST_GET_HDN_HDON_DC_TRUC_TIEP = 'getHdnHdonDcTrucTiep';
  }
  static {
    this.POST_TKIEM_HDON_KH_THEONGAY = 'TKiemHDonKHtheoNgay';
  }
  static {
    this.POST_GET_HDON_CTIET_TINH_SLUONG_BQUAN_KTGS = 'getHDonCTietTinhSLuongBQuanKTGS';
  }
  static {
    this.POST_GET_HOADONBYKTN = 'getHoaDonByKTN';
  }
  static {
    this.POST_GET_HDN_HDONBYMAKHANG = 'getHdnHdonByMaKHang';
  }
  static {
    this.POST_TKIEM_HDN_HDON_12KYHOADON = 'TKiemHdnHdon12kyhoadon';
  }
  static {
    this.POST_TONG_HOP_DBAOT_PHAM_PHUTAI = 'tongHopDBaoTPhamPhuTai';
  }
  static {
    this.POST_HDON_NGAYCKY = 'getHDon_NgayCKy';
  }
  static {
    this.POST_TKIEM_HDON_KH_TRUY_THU_TTHOAN = 'TKiemHDonKHTruythuTThoan';
  }
  static {
    this.POST_TKIEM_HDON_FOR_GSMBD = 'TKiemHDonForGsmbd';
  }
  static {
    this.POST_TKIEMHDON_CTIETFORGSMBD = 'TKiemHDon_CtietForGSMBD';
  }
  static {
    this.POST_TKIEM_HDONKHTHEOKY_THANGNAM = 'TKiemHDonKHtheoKythangNam';
  }
}
class API_REPORT {
  static {
    this.POST_GET_HDON_DA_KY = 'gethdondaky';
  }
  static {
    this.POST_INTSERT_FILE = 'intsertfile';
  }
  static {
    this.POST_SIGN_FILE_BASE = 'sign_file_base';
  }
  static {
    this.POST_EXPORT_PDF = 'exportPDF';
  }
  static {
    this.POST_SIGN_FILELEVEL2 = 'sign_fileLevel2';
  }
  static {
    this.POST_VIEW_FILE = 'view_file';
  }
  static {
    this.POST_SIGN_FILE = 'sign_file';
  }
  static {
    this.POST_REPORT_CREATEKEY = 'Report_createKey';
  }
  static {
    this.POST_EXPORT_REPORT = 'exportReport';
  }
  static {
    this.POST_IN_HDONG = 'inHdong';
  }
  static {
    this.POST_BASE64_REPORT = 'Base64Report';
  }
  static {
    this.POST_HTML_TEMPLATE = 'getHTMLTemplate';
  }
  static {
    this.POST_PRINT_REPORT = 'printReport';
  }
}
class API_FILEDTU {
  static {
    this.POST_GET_LIST_HDT_HSO_UPLOAD = 'getListHDTHSoUpload';
  }
  static {
    this.POST_GET_LIST_HDT_HSO_UPLOAD_BY_MA_LOAI_HSO = 'getListHDTHSoUploadByMaLoaiHSo';
  }
  static {
    this.POST_GET_LIST_BBAN_BKE_BY_CONDITION = 'getListBBanBKeByCondition';
  }
  static {
    this.POST_GET_BBAN_KE_BY_LOAI_BKE = 'getBBanKeByLoaiBKe';
  }
  static {
    this.POST_GET_TRANG_THAI_BBAN_SIGN = 'getTrangThaiBBanSign';
  }
  static {
    this.POST_INSERT_BKE = 'insertbke';
  }
  static {
    this.POST_GET_TINH_TRANG_BK = 'gettinhtrangbk';
  }
  static {
    this.POST_GET_DATA_SIGN_BLOB_FILE = 'getDataSignBlobFile';
  }
  static {
    this.POST_GET_HDN_BBAN_BKE = 'getHdnBBanBKe';
  }
  static {
    this.POST_UPLOAD_FILE = 'uploadFile';
  }
  static {
    this.POST_DELETE_KYBANGKE = 'DeleteKyBangKe';
  }
  static {
    this.POST_GET_BK_BLOP_FILE = 'getBK_BLOP_FILE';
  }
  static {
    this.POST_SIGN_FILE_EVN2 = 'sign_file_evn2';
  }
  static {
    this.POST_TIM_KIEM_BKE = 'timKiemBKe';
  }
  static {
    this.POST_GET_DANHSACHBK = 'getDanhSachBK';
  }
  static {
    this.POST_SIGN_FILE_EVN = 'sign_file_evn';
  }
  static {
    this.POST_GS_DATA_BLOB = 'getGS_DATA_BLOB';
  }
  static {
    this.POST_DELETE_GS_BIEN_BAN = 'DeleteGsBienBan';
  }
  static {
    this.POST_HDTH_SO_KY_BY_MA_YCAUKNAI = 'GetHDTHSoKyByMaYCauKNai';
  }
}
class API_CHISOKHANG {
  static {
    this.GET_CHI_SO_BY_MA_CTO = 'getChisobyMaCto';
  }
  static {
    this.POST_XUAT_SO_LIEU_HHC_PTRA_SERVER = 'xuatSolieuHHCPTraServer';
  }
  static {
    this.GET_SO_LIEU_HHC_PTRA_SERVER = 'getSolieuHHCPTraServer';
  }
  static {
    this.POST_GET_GCS_HHC_SERVICE_BYLISTSO = 'getListHhcByServerByListSo';
  }
  static {
    this.GET_HDGDDO_TDOIGCS = 'getDiemDoTDoiGcs';
  }
  static {
    this.GET_LIST_CHUYEN_SO_LIEU_HHC = 'getListChuyenSoLieuHHC';
  }
  static {
    this.POST_EXCUTE_NHAP_CS_MTAM = 'ExcuteNhapCS_MTAM';
  }
  static {
    this.GET_CHI_SO_MTAM = 'getChiso_MTAM';
  }
  static {
    this.POST_GET_LICH_DCN_BY_LIST_SO = 'getLichDcnByListSo';
  }
  static {
    this.POST_REUPDATE_HANG_DOI_XULY_LOG = 'reupdateHangDoiXuLyLog';
  }
  static {
    this.POST_CHUYEN_TRANG_THAI_SO = 'chuyenTrangThaiSo';
  }
  static {
    this.POST_GET_LICH_GCS_DOXA_HHC = 'getLichGCSDoxaHHC';
  }
  static {
    this.POST_GET_LIST_SO_NHAN_HHC_BY_SERVER = 'getListSoNhanHhcByServer';
  }
  static {
    this.POST_GET_LIST_SO_NHAN_HHC_BY_FILE_NEW = 'getListSoNhanHhcByFileNew';
  }
  static {
    this.POST_HUY_XUAT_SO_LIEU_HHC_NEW = 'huyXuatSolieuHhcNew';
  }
  static {
    this.GET_CHI_SO_DCN = 'getChiSoDcn';
  }
  static {
    this.GET_GCS_LICH_DCN = 'getGcsLichDCN';
  }
  static {
    this.POST_GET_CHI_SO_DDO_DOI_GIA_SG = 'getchisoddodoigia_sg';
  }
  static {
    this.POST_GET_CHI_SO_DDO_DCN = 'getchisoddo_sg_dcn';
  }
  static {
    this.GET_LICH_DCN = 'getLichDcn';
  }
  static {
    this.POST_GET_DATA_DCN = 'getDataDcn';
  }
  static {
    this.GET_LOG_PERFORMANCE = 'getLogPerformance';
  }
  static {
    this.POST_INSERT_HANG_DOI_PERFORMANCE = 'insertHangDoiPerformance';
  }
  static {
    this.GET_SO_XAC_NHAN_PERFOMANCE = 'getSoXacNhanPerformance';
  }
  static {
    this.POST_GET_LICH_GCS_BY_NGAY = 'getLichGcsByNgay';
  }
  static {
    this.GET_CSO_XAC_NHAN_DO_XA = 'getCSoXNhanDoXa';
  }
  static {
    this.POST_GHI_LAP_KE_HOACH_GCS = 'GhiLapKeHoachGCS';
  }
  static {
    this.POST_XOA_KE_HOACH_GCS = 'XoaKeHoachGCS';
  }
  static {
    this.POST_TIM_KIEM_KE_HOACH_GCS = 'TimKiemKeHoachGCS';
  }
  static {
    this.POST_GET_GCS_LICH_BY_QUERY = 'getGcsLichByQuery';
  }
  static {
    this.POST_EXCUTE_NHAP_CS_BAT_DAU = 'ExcuteNhapCSBatDau';
  }
  static {
    this.POST_GET_CHI_SO_BAT_DAU = 'getChisoBatDau';
  }
  static {
    this.POST_EXCUTE_SLTP = 'ExcuteSLTP';
  }
  static {
    this.POST_GET_SLUONG_TPHAM_BY_TRAM = 'getSLuongTPhamByTram';
  }
  static {
    this.POST_GET_SLUONG_TPHAM = 'getSLuongTPham';
  }
  static {
    this.POST_GET_CHI_SO_XNHAN_HDON_LE = 'getChiSo_XNhanHDonLe';
  }
  static {
    this.POST_GET_LICH_GCS_THD_LE = 'getLichGCS_ThdLe';
  }
  static {
    this.POST_GET_CSO_THD_LE = 'getCSoTHDLe';
  }
  static {
    this.POST_EXCUTE_NHAP_CS_CHOT_CS = 'ExcuteNhapCS_ChotCS';
  }
  static {
    this.POST_GET_CHI_SO_CHOT_CS = 'getChisoCSC';
  }
  static {
    this.POST_GET_CHI_SO_CHOT_CS_LE = 'getChiso_ChotCS';
  }
  static {
    this.POST_DELETE_LST_GCS_CHI_SO_PTRA = 'DeleteLstGCS_CHISO_PTRA';
  }
  static {
    this.POST_INSERT_GCS_CHI_SO_PTRA = 'InsertGCS_CHISO_PTRA';
  }
  static {
    this.POST_GET_CHISO_PHUC_TRA_LSTDDO = 'get_CHISO_PHUCTRA_LstDDo';
  }
  static {
    this.POST_GET_CHI_SO_PHUC_TRA_FOR_NHAP = 'get_CHISO_PHUCTRA_forNhap';
  }
  static {
    this.POST_GET_UPDATE_DDO = 'getUpdateDdo';
  }
  static {
    this.POST_GET_CSO_DD_DO_KTRA = 'getCsoDddoKTra';
  }
  static {
    this.POST_DELETE_CHI_SO_KIEM_TRA = 'DeleteChiSoKiemTra';
  }
  static {
    this.POST_UPDATE_CHI_SO_KIEM_TRA = 'UpdateChiSoKiemTra';
  }
  static {
    this.POST_INSERT_CHI_SO_KIEM_TRA = 'InsertChiSoKiemTra';
  }
  static {
    this.POST_GET_CHI_SO_BAT_THUONG = 'GetChiSoBatThuong';
  }
  static {
    this.POST_XUAT_SO_LIEU_HHC_PTRA = 'xuatSolieuHHC_PTra';
  }
  static {
    this.POST_DELETE_LIST_KHANG_PTRA = 'DeleteListKhangPtra';
  }
  static {
    this.POST_INSERT_LIST_KHANG_PTRA = 'insertListKhangPtra';
  }
  static {
    this.POST_GET_LST_CHI_SO_DA_PHUC_TRA = 'get_lstchisoDaPhuctra';
  }
  static {
    this.POST_GET_LST_CHI_SO_PHUC_TRA = 'get_lstchisoPhuctra';
  }
  static {
    this.POST_GET_LICH_GCS_CC = 'getLichGCS';
  }
  static {
    this.POST_GET_LICH_SO_GCS = 'get_Lich_SoGCS';
  }
  static {
    this.POST_EXCUTE_NHAP_CS_DOI_GIA = 'ExcuteNhapCSDoiGia';
  }
  static {
    this.POST_GET_CHI_SO_DGIA = 'getChiso_DGia';
  }
  static {
    this.POST_GET_GCS_HHC_SERVICE_DGIA = 'getGcsHhcService_DGia';
  }
  static {
    this.POST_XOA_CHI_SO_DGIA = 'xoaChiSo_DGia';
  }
  static {
    this.POST_INSERT_GCS_CHI_SO_DGIA = 'insertGcsChiSo_DGia';
  }
  static {
    this.POST_GET_LOG_HHC_DGIA = 'getLogHHC_DGia';
  }
  static {
    this.POST_UPDATE_GCS_LICH_DGIA = 'updateGcsLich_DGia';
  }
  static {
    this.POST_XUAT_SO_LIEU_HHC_DGIA = 'xuatSolieuHHC_DGia';
  }
  static {
    this.POST_GET_CHISO_DGIA_HHC = 'getChiso_DGiaHHC';
  }
  static {
    this.POST_GET_SOGCS_HHC_CCS = 'get_SOGCS_HHC_CCS';
  }
  static {
    this.POST_GET_LICH_GCS_THEO_TTHAI = 'getLichgcsTheoTthai';
  }
  static {
    this.POST_GET_THONG_TIN_CS = 'getthongtinCS';
  }
  static {
    this.POST_GET_CHI_SO_DDO = 'getchisoddo';
  }
  static {
    this.POST_GET_LICH_GCS_TTHAI = 'getLichgcsTthai';
  }
  static {
    this.POST_GET_SO_BY_TRANG_THAI = 'getSobyTrangThai';
  }
  static {
    this.POST_GET_SO_XNHAN_LSTSO_BBGN = 'getSoXNhanLstSo_BBGN';
  }
  static {
    this.POST_GET_SO_GCS_LAP_HDON = 'getSogcsLapHdon';
  }
  static {
    this.POST_GET_CHI_SO_XNHAN_HDON_NOT_SUM = 'GetChiSo_XNhanHDonNotSum';
  }
  static {
    this.POST_GET_CHI_SO_XNHAN_HDON = 'getChiSo_XNhanHDon';
  }
  static {
    this.POST_GET_SOXNHAN_LST_SO = 'getSoXNhanLstSo';
  }
  static {
    this.POST_KTRA_CHI_SO_BTHUONG = 'ktraChiSoBThuong';
  }
  static {
    this.POST_EXCUTE_XNHAN_CSO = 'ExcuteXNhanCSo';
  }
  static {
    this.POST_GET_CSO_XNHAN = 'getCSoXNhan';
  }
  static {
    this.POST_GET_SO_XNHAN_TTHD = 'getSoXacNhanTTHD';
  }
  static {
    this.POST_GET_SO_XNHAN = 'getSoXNhan';
  }
  static {
    this.POST_GET_SO_TAM_TINH_HDON = 'getSoTTinhHdon';
  }
  static {
    this.POST_CAP_NHAT_GCS_LICH = 'capnhatGcsLich';
  }
  static {
    this.POST_GET_CSO_TTHAO_BYMADDO = 'getCSo_TThao_ByMaDDo';
  }
  static {
    this.POST_EXCUTENHAPCS = 'ExcuteNhapCS';
  }
  static {
    this.POST_GET_GCS_HHC_SERVICE = 'getGcsHhcService';
  }
  static {
    this.POST_XOA_CHI_SO = 'xoaChiSo';
  }
  static {
    this.POST_INSERT_GCS_CHI_SO = 'insertGcsChiSo';
  }
  static {
    this.POST_GET_LOG_HHC_LIST_SO = 'getLogHHCListSo';
  }
  static {
    this.POST_GET_LOG_HHC = 'getLogHHC';
  }
  static {
    this.POST_UPDATE_GCS_LICH = 'updateGcsLich';
  }
  static {
    this.POST_XUAT_SOLIEUHHC = 'xuatSolieuHHC';
  }
  static {
    this.POST_XUAT_SOLIEUHHC_NEW = 'xuatSolieuHhcNew';
  }
  static {
    this.POST_GET_CHI_SO2 = 'getChiso2';
  }
  static {
    this.POST_GET_LICH_GCS_HHC = 'getLichGCSHHC';
  }
  static {
    this.POST_GET_LICH_GCS_HHC_NEW = 'getLichGcsHhcNew';
  }
  static {
    this.POST_GET_CHI_SO_BY_DDO_MODEL_MOI_NHAT = 'getChiSoByDDoModelMoinhat';
  }
  static {
    this.POST_GET_KHACHHANG_KTGS = 'get_Khachhang_KTGS';
  }
  static {
    this.POST_GET_TTIN_CSO_TUNGAYDENNGAY = 'getTTinCSoTuNgaydenNgay';
  }
  static {
    this.POST_GET_DATA_CHISO_TUKTNDENKTN = 'get_DataChisoTuKTNdenKTN';
  }
  static {
    this.POST_GET_KHACH_HANG_KTGS = 'get_Khachhang_KTGS';
  }
  static {
    this.POST_GET_GCS_LICH3RDAFTERMAX = 'GetGcsLich3rdafterMax';
  }
  static {
    this.POST_DELETELGCS = 'deleteLGCS';
  }
  static {
    this.POST_GET_MASONVIEN = 'getmasonvien';
  }
  static {
    this.POST_GET_CHISODDO_SG = 'getchisoddo_sg';
  }
  static {
    this.POST_SEARCH_DSO = 'search_dso';
  }
  static {
    this.POST_GET_LICH_GCS = 'getLichgcs';
  }
  static {
    this.POST_GET_CHISO = 'getChiso';
  }
  static {
    this.POST_GET_GCS_LICH_GCS_BY_MAXID = 'get_gcslichgcsByMaxID';
  }
  static {
    this.POST_LAYTHONGTINCHISO_DUP = 'layThongTinChiSo_DUP';
  }
  static {
    this.POST_LAY_THONGTIN_CHISO_MA_KHANG = 'layThongTinChiSo_Ma_Khang';
  }
  static {
    this.POST_CHISO_BY_MADDO = 'getChiSobyMaDDo';
  }
  static {
    this.POST_LAY_KY_THANG_NAM = 'layKyThangNam';
  }
  static {
    this.POST_KTRA_DIEUKIEN_SOGCS_CHUYENKHAITHAC = 'ktraDieuKienSoGCS_ChuyenKhaiThac';
  }
  static {
    this.POST_GCS_LICH_GCS_BY_MA_SOGCS = 'get_gcslichgcsByMaSogcs';
  }
  static {
    this.POST_GCS_CHISO_BY_MAKHANG = 'getGCS_chiso_byMaKHang';
  }
  static {
    this.POST_CHECK_HDON_THEO_MADIEMDO_DEKYLAIHD = 'checkHDonTheoMaDiemDoDeKyLaiHD';
  }
  static {
    this.POST_CHISO_MAX_NGAYCKY = 'getChisoMaxNgaycky';
  }
  static {
    this.POST_CHECK_HDON_THEO_LSTDIEMDO_DEKYLAIHD = 'checkHDonTheolstDiemDoDeKyLaiHD';
  }
  static {
    this.POST_CHISO_NGAYCKY = 'getChiso_ngaycky';
  }
  static {
    this.POST_CHECK_BIENDONG_CHISO = 'checkBienDongChiSo';
  }
  static {
    this.POST_CHECK_HDON_THEO_MAKHANG_DEKYLAIHD = 'checkHDonTheoMaKhangDeKyLaiHD';
  }
  static {
    this.POST_CHECK_BIENDONG_CHISO_BY_LIST_DDO = 'checkBienDongChiSoByListDDoModel';
  }
  static {
    this.POST_GCS_LICH_BY_LIST_SO_GCS_GHEPTONG = 'getGcsLichByListSoGCSGhepTong';
  }
  static {
    this.POST_GCS_LICH_BY_LIST_SO_GCS_ENHANCED = 'getGcsLichByListSoGCSEnhanced';
  }
  static {
    this.POST_INSERT_LICH_GCS = 'insertLichGcs';
  }
  static {
    this.POST_GET_LICH_GCS_BY_LIST_SO = 'getLichGCSByListSo';
  }
  static {
    this.POST_GET_CHI_SO_MAX_NGAY_CKY_CSC = 'getChisoMaxNgaycky_CSC';
  }
  static {
    this.POST_GET_LIST_DSACH_SO_SAP_GHI_GCS = 'GetListDSachSoSapGhiGCS';
  }
  static {
    this.POST_GET_DATA_LICH = 'getDataLich';
  }
  static {
    this.POST_GET_EXIST_LICHGCS = 'getExistLichgcs';
  }
  static {
    this.POST_GET_LSTDDO_EVNADS = 'getDSDDoBThuongEVNADS';
  }
}
class API_BDONGTTHAO {
  static {
    this.POST_GET_TTIN_CHAYHONG_BY_MATBI_AND_SO_TBI = 'getTTinChayHongByMaTbiAndSoTbi';
  }
  static {
    this.POST_GET_TTIN_LICH_GCS = 'getTTinLichGCS';
  }
  static {
    this.POST_GET_DSACH_BCS_CTO = 'getDSachBCSCTo';
  }
  static {
    this.POST_SEARCH_IN_BIEN_BAN_BY_ID = 'SearchInbienbanbyID';
  }
  static {
    this.POST_SUA_BBAN_TLY = 'SuaBbanTLy';
  }
  static {
    this.POST_TIM_CTIET_TLY = 'timCtietTly';
  }
  static {
    this.POST_TIM_KIEM_BBAN_TLY = 'timKiemBbanTly';
  }
  static {
    this.POST_TIM_KIEM_TBI_TLY = 'TimKiemTbiTly';
  }
  static {
    this.POST_XOA_BBAN_TLY = 'XoaBbanTLy';
  }
  static {
    this.POST_LUU_BBAN_TLY = 'LuuBbanTLy';
  }
  static {
    this.POST_GET_NGAY_TREO_THAO = 'getNgayTreoThao';
  }
  static {
    this.POST_UPDATE_THONG_TIN_DO_XA_DDO = 'UpdateThongtindoxaDDo';
  }
  static {
    this.POST_GET_THONG_TIN_DO_XA_DDO = 'getThongtindoxaDDo';
  }
  static {
    this.POST_UPDATE_FROM_EXCEL_DOXA = 'UpdatefromExcelDoxa';
  }
  static {
    this.POST_GET_BDONG_BTHIETBINGAYTTHAO = 'GetBdongBThietbiNgayTthao';
  }
  static {
    this.POST_LAY_MAX_BBANTTHAOBYMADDO = 'layMaxBbanTThaobyMaddo';
  }
  static {
    this.POST_LAYTTINTBITREOTHAOTHEOTINHTRANGCHUYENKTHAC = 'layTTinTBiTreoThaoTheoTinhTrangChuyenKThac';
  }
  static {
    this.POST_DELETE_BBAN_TICH_TRTHAO = 'DeleteBbanTIchTrthao';
  }
  static {
    this.POST_UPDATE_BBAN_TICH_TRTHAO = 'UpdateBbanTIchTrthao';
  }
  static {
    this.POST_SAVE_BBAN_TICH_TRTHAO = 'SaveBbanTIchTrthao';
  }
  static {
    this.POST_TIM_KIEM_BBAN_IN = 'TimKiemBbanIn';
  }
  static {
    this.POST_GET_BBANBDONG = 'getBBanBDong';
  }
  static {
    this.POST_layTTinTBiTreoThaoTheoTinhTrangChuyenKThac = 'layTTinTBiTreoThaoTheoTinhTrangChuyenKThac';
  }
  static {
    this.POST_XOA_BBAN_TREO_THAO = 'XoaBbanTreothao';
  }
  static {
    this.POST_CHECK_NCS_KY_TRUOC = 'checkNCSkytruoc';
  }
  static {
    this.POST_LAY_KY_THANG_NAM = 'layKyThangNam';
  }
  static {
    this.POST_UPDATE_BIEN_BAN_TREO_THAO = 'UpdateBienbanTreothao';
  }
  static {
    this.POST_SAVE_BBAN_TREO_THAO = 'SaveBbanTreothao';
  }
  static {
    this.POST_TIM_KIEM_BBAN_TTHAO = 'TimKiemBbanTThao';
  }
  static {
    this.POST_TIM_TU_THEO_MATU = 'TimtuTheoMatu';
  }
  static {
    this.POST_TIM_TI_THEO_MATI = 'TimtiTheoMati';
  }
  static {
    this.POST_TIM_CTO_THEO_SO_CTO = 'TimctoTheosoCto';
  }
  static {
    this.POST_GET_BIEN_BAN_IN = 'getbienbanin';
  }
  static {
    this.POST_GET_HSO_TITU = 'getHsoTITU';
  }
  static {
    this.POST_GET_CONGTO_HIENTAI = 'getCongTohientai';
  }
  static {
    this.POST_GET_DANHSACH_DIEMDO_SOCONGTO = 'getDanhSachDiemDoSoCongTo';
  }
  static {
    this.POST_UPDATE_BBAN_TREOMOI = 'updateBbanTreomoi';
  }
  static {
    this.POST_DELETE_BBAN_TREOMOI = 'deleteBbanTreoMoi';
  }
  static {
    this.POST_GET_BBAN_DATREOMOI = 'getBBanDaTreoMoi';
  }
  static {
    this.POST_SAVE_BBAN_TREOMOI = 'saveBbanTreoMoi';
  }
  static {
    this.POST_LAY_CS_CTO = 'layCsCto';
  }
  static {
    this.POST_TIMKIEM_CTO = 'timKiemCto';
  }
  static {
    this.POST_TIMTHIETBI_THEOSOTBI = 'TimThietBiTheoSoTbi';
  }
  static {
    this.POST_LAYDS_THONGTIN_KHDDO = 'layDsThongTinKhDdo';
  }
  static {
    this.POST_INFO_SO_HOP_COT = 'getInforSoHopCot';
  }
  static {
    this.POST_BBAN_TREO_THAO = 'GetBBanTreoThao';
  }
  static {
    this.POST_TBI_HTAI_BY_NGAYTTHAO_MATBI = 'GetTbiHtai_byNgayTThao_maTbi';
  }
  static {
    this.POST_THIETBI = 'get_Thietbi';
  }
  static {
    this.POST_THONGTIN_BCS_MADDO = 'layThongTinBcsMaddo';
  }
  static {
    this.POST_TTINDODEM_DEKYLAI_DICHVU = 'lay_TTinDoDemDeKyLai_DichVu';
  }
  static {
    this.POST_FIND_NEW_SCHEDULE = 'FindNewSchedule';
  }
  static {
    this.POST_LAY_TBI_HIENTAI_THEO_MADDO = 'layTbiHienTaiTheoMaDDo';
  }
  static {
    this.POST_THIETBI_HIENTAI = 'getThietbihientai';
  }
  static {
    this.POST_TIMKIEM_BBAN_TTINKHANG_DDO = 'TimKiemBbanTtinKhangddo';
  }
  static {
    this.POST_GET_MA_TBI = 'getMaTbi';
  }
  static {
    this.POST_LST_MA_TBI = 'getLstMaTbi';
  }
  static {
    this.POST_SEARCH_CTO_BY_MA_CTO = 'searchCtoByMaCto';
  }
  static {
    this.POST_SEARCH_BBAN_IN_BIEN_BAN = 'SearchBBanInbienban';
  }
  static {
    this.POST_SAVE_BBAN_IN = 'Save_BBan_In';
  }
  static {
    this.POST_SAVE_BBAN_IN_LIST = 'Save_BBan_In_List';
  }
  static {
    this.POST_SEARCH_IN_BIENBAN_BY_ID = 'SearchInbienbanbyID';
  }
  static {
    this.POST_DELETE_BBAN_IN = 'Delete_BBan_In';
  }
}
class API_HOSO_TBI {
  static {
    this.GET_SEARCH_TBI_GUI = 'getSearchTbiGui';
  }
  static {
    this.GET_BBAN_TR_THAO = 'getBBanTrThao';
  }
  static {
    this.GET_TTIN_PBO_TBI = 'getTtinPboTbi';
  }
  static {
    this.GET_TBI_CHONG = 'getTbiCHong';
  }
  static {
    this.GET_SEARCH_TBI_KHDDO = 'get_SearchTbi_KHDDO';
  }
  static {
    this.GET_SEARCH_TBI_TLY = 'get_SearchTbi_Tly';
  }
  static {
    this.GET_SEARCH_TBI_PBO = 'get_SearchTbi_Pbo';
  }
  static {
    this.GET_SEARCH_TBI_GUIDK = 'get_SearchTbi_GuiKd';
  }
  static {
    this.GET_SEARCH_TBI_KDINH = 'get_SearchTbi_Kdinh';
  }
  static {
    this.GET_SEARCH_TBI_STATUS = 'get_SearchTbi_Status';
  }
  static {
    this.POST_TIM_LIST_THIETBI_PHANBO_BY_MATBI = 'timListThietBiPhanBoByMaTbi';
  }
  static {
    this.POST_INSERT_HSO_FROM_EXCEL = 'InsertHsoTuFromExcel';
  }
  static {
    this.POST_LAY_THONG_TIN_TBI_BY_SO_TBI = 'layThongTinTbibySotbi';
  }
  static {
    this.POST_SEARCH_NGAY_PBO = 'searchNgayPbo';
  }
  static {
    this.POST_SEARCH_DETAIL_BBPBO_DANHAN = 'search_Detail_BbPbo_DaNhan';
  }
  static {
    this.POST_SEARCH_DETAIL_BBPBO_CHUANHAN = 'search_Detail_BbPbo_ChuaNhan';
  }
  static {
    this.POST_UPDATE_BBAN_PBO_NHAN = 'updateBbanPboNhan';
  }
  static {
    this.POST_UPDATE_BBAN_PBO = 'updateBbanPbo';
  }
  static {
    this.POST_DELETE_BBAN_PBO = 'deleteBbanPbo';
  }
  static {
    this.POST_TIM_BIEN_BAN_DA_PHAN_BO = 'TimBienbandaphanbo';
  }
  static {
    this.POST_BIEN_BAN_DA_PHAN_BO_SEARCH_BYID = 'bienbandaphanboSearchById';
  }
  static {
    this.POST_TIM_TBI_PHAN_BO_BY_BBAN_VNGAY = 'TimTbiphanbobyBBanvNgay';
  }
  static {
    this.POST_TIM_TBI_PHAN_BO = 'TimTbiphanbo';
  }
  static {
    this.POST_TIM_TBI_PHAN_BO_BY_SO_TBI = 'TimTbiphanbo_Bysotbi';
  }
  static {
    this.POST_TIM_CONG_TO_PHAN_BO_EXCEL = 'TimCongtophanboExcel';
  }
  static {
    this.POST_SAVE_BBAN_PBO = 'Save_BBan_PBo';
  }
  static {
    this.POST_TIM_TBI_DA_PHAN_BO_BYID = 'TimTbidaphanbo_byId';
  }
  static {
    this.POST_DELETE_BBAN_GUI = 'Delete_BBan_Gui';
  }
  static {
    this.POST_DELETE_BBAN_GUI_BD = 'Delete_BBan_Gui';
  }
  static {
    this.POST_TIM_BIEN_BAN_DA_GUI_KDINH = 'TimBienbandaguikdinh';
  }
  static {
    this.POST_TIM_TBI_DA_GUI_KDINH_BYID = 'TimTbidaguikdinh_byId';
  }
  static {
    this.POST_TIM_THIET_BI_GUI_KDINH_BYSOTBI = 'TimThietbiGuiKDinh_Bysotbi';
  }
  static {
    this.POST_UPDATE_BBAN_GUI = 'Update_BBan_Gui';
  }
  static {
    this.POST_SAVE_BBAN_GUI = 'Save_BBan_Gui';
  }
  static {
    this.POST_INSERT_HSO_TI_FROM_FILE = 'InsertHsoTiFromFile';
  }
  static {
    this.POST_UPDATE_TI_NOTPK = 'UpdateTiNotPK';
  }
  static {
    this.POST_INSERT_OR_UPDATE_HSO_TI = 'insertOrUpdateHsoTI';
  }
  static {
    this.POST_DELETE_TI = 'deleteTi';
  }
  static {
    this.POST_GET_HO_SO_TI = 'getHosoti';
  }
  static {
    this.POST_GET_LIST_DHSO_TI_INSERT = 'getListDHsoTiInsert';
  }
  static {
    this.POST_GET_TI_LIST = 'getTIlist';
  }
  static {
    this.POST_GET_TI_CONDITION = 'getTICondition';
  }
  static {
    this.POST_TIM_THIETBI_CHAYHONG_BYSOTBI = 'TimThietbiChayHong_Bysotbi';
  }
  static {
    this.POST_LAY_THONG_TIN_TBI_CHAY_HONG = 'layThongTinTbiChayHong';
  }
  static {
    this.POST_DELETE_TT_CHAY_HONG = 'deleteTTChayHong';
  }
  static {
    this.POST_INSERT_HSO_TU_FROM_FILE = 'InsertHsoTuFromFile';
  }
  static {
    this.POST_CAP_NHAT_NHIEU_HSOTU = 'CapNhatNhieuHsoTu';
  }
  static {
    this.POST_INSERT_OR_UPDATE_HSO_TU = 'InsertOrUpdateHsoTu';
  }
  static {
    this.POST_UPDATE_HSO_KDINH = 'updateHsoKdinh';
  }
  static {
    this.POST_UPDATE_HSOTU = 'UpdateHsoTu';
  }
  static {
    this.POST_INSERT_HSO_KDINH = 'insertHsoKdinh';
  }
  static {
    this.POST_INSERT_HSOTU = 'insertHsoTu';
  }
  static {
    this.POST_TIMKIEMTU = 'timKiemTu';
  }
  static {
    this.POST_SEARCH_TU = 'searchTu';
  }
  static {
    this.POST_GET_DHSO_TU_ENTITY = 'getDHsoTuEntity';
  }
  static {
    this.POST_GET_DHSO_TU = 'getDHsoTu';
  }
  static {
    this.POST_GET_LIST_DHSOTU_INSERT = 'getListDHsoTuInsert';
  }
  static {
    this.POST_UPLOAD_FILE = 'uploadFile';
  }
  static {
    this.POST_SEARCH_CTO = 'searchCto';
  }
  static {
    this.POST_UPDATE_LIST_HSO_CTO = 'UpdateListHsoCto';
  }
  static {
    this.POST_DELETE_LIST_HOSO_CTO = 'DeleteListHosoCto';
  }
  static {
    this.POST_INSERT_LIST_HOSO_CTO = 'InsertListHosoCto';
  }
  static {
    this.POST_INSERT_HOSO_CTO_FILE = 'InsertListHosoCto';
  }
  static {
    this.POST_INSERT_OR_UPDATE_HSO_CTO = 'InsertOrUpdateHsoCto';
  }
  static {
    this.POST_GET_THONG_TIN_HSO_TBI = 'getThongTinHsoTbi';
  }
  static {
    this.POST_INSERT_TT_CHAY_HONG = 'insertTTChayHong';
  }
  static {
    this.POST_UPDATETT_CHAY_HONG = 'UpdateTTChayHong';
  }
  static {
    this.POST_TEST_SERVICE = 'testService';
  }
  static {
    this.POST_LAY_THONG_TIN_TBI = 'layThongTinTbi';
  }
  static {
    this.POST_SEARCH_CTO_BY_MACTO = 'searchCtoByMaCto';
  }
  static {
    this.POST_UPLOAD_FILE_HS_OCTO = 'uploadFileHsocto';
  }
  static {
    this.POST_LAY_THONG_TIN_TBI_TREO = 'layThongTinTbiTreo';
  }
  static {
    this.POST_UPLOAD_FILE_EXCEL = 'uploadFileExcel';
  }
}
class API_TTIEN_CNO {
  static {
    this.POST_HUY_CAP_NHAT_QTOAN_SLUONG_MTAM = 'huycapnhatQToanSLuongMTAM';
  }
  static {
    this.POST_UPDATE_QTOAN_SLUONG_MTAM = 'capnhatQToanSLuongMTAM';
  }
  static {
    this.POST_DELETE_DSACH_TTIN_VPHAM = 'deleteDsachTtinVpham';
  }
  static {
    this.POST_GHI_TTIN_VPHAM_CS_MTMN = 'ghiTtinVphamCSMTMN';
  }
  static {
    this.POST_UPDATE_QTOAN_MTAM_THEOLO = 'capNhatQToanMTAMTheoLo';
  }
  static {
    this.POST_UPDATE_TTHAIDCAT = 'UpdateTThaiDCat';
  }
  static {
    this.POST_GET_TTHAI_DCAT = 'GetTThaiDCat';
  }
  static {
    this.POST_GHI_HDON_SAU_P_HANH = 'ghi_HDonSauPHanh';
  }
  static {
    this.POST_LAY_CN_HDON_PHTHU = 'lay_CN_HDON_PHTHU';
  }
  static {
    this.POST_LAY_CN_PTHU_KHDON = 'lay_CN_PTHU_KHDON';
  }
  static {
    this.POST_LAY_THONG_TIN_NO_KH_TT_MODEL = 'lay_thongtinno_khttmodel';
  }
  static {
    this.POST_GET_LICH_TTIEN = 'getLichTTien';
  }
  static {
    this.POST_HUY_LAP_LICH_TTIEN = 'huyLapLichTTien';
  }
  static {
    this.POST_CAP_NHAT_LICH_TTIEN = 'capnhatLichTTien';
  }
  static {
    this.POST_DELETE_LICH_TTIEN = 'deleteLichTTien';
  }
  static {
    this.POST_HUY_PSO_TNV = 'huyPSoTNV';
  }
  static {
    this.POST_CAP_NHAT_PSOTNGAN = 'capnhatPSoTNgan';
  }
  static {
    this.POST_GET_PSO_TNV_BYTNV = 'getPSoTNVByTNV';
  }
  static {
    this.POST_GET_PSOTNV = 'getPSoTNV';
  }
  static {
    this.POST_DELETE_CN_HDON_CTRA_BY_LISTIDHDON = 'DeleteCNHDonCTraByListIDHDon';
  }
  static {
    this.POST_GET_HDON_CTRA_BY_MA_KHANG = 'GetHDonCTraByMaKHang';
  }
  static {
    this.POST_DELETE_CN_HDONCTRA = 'DeleteCNHDonCTra';
  }
  static {
    this.POST_INSERT_CNHDON_CTRA = 'InsertCNHDonCTra';
  }
  static {
    this.POST_GET_HDON_TINH_LAI_BY_MAKHANG = 'GetHDonTinhLaiByMaKHang';
  }
  static {
    this.POST_SAVE_DATA_HUY_HDON = 'SaveDataHuyHDon';
  }
  static {
    this.POST_GET_DATA_HUY_HDON = 'GetDataHuyHDon';
  }
  static {
    this.POST_LAY_CN_THONGTIN_CONGNO_INBBANXNHANNO = 'lay_cn_thongtinCongno_inBBanXNhanNo';
  }
  static {
    this.POST_INSERT_HDON_UNT = 'insertHdonUnt';
  }
  static {
    this.POST_FIND_HOA_DON_UNT = 'findHoaDonUNT';
  }
  static {
    this.POST_GET_SO_GCS_BY_NO_PTTT = 'getSoGcsByNoPTTT';
  }
  static {
    this.POST_FIND_PTHU_GUI_TBAO_CATDIEN = 'findPthu_GuiTbaoCatDien';
  }
  static {
    this.POST_SELECT_GUI_TBAOCATDIEN = 'select_GuiTbaoCatDien';
  }
  static {
    this.POST_GET_TTIN_TBAO_TTOAN_TDIEN = 'getTTinTBaoTToanTDien';
  }
  static {
    this.POST_LAY_THONGTIN_TBAO_CU = 'lay_thongtin_tbao_cu';
  }
  static {
    this.POST_FIND_PTHU_GUI_TBAO_NGUNG_CAP_DIEN = 'findPthu_GuiTbaoNgungCapDien';
  }
  static {
    this.POST_SAVE_GUI_TBAO_NCAP_DIEN = 'save_GuiTbaoNCapdien';
  }
  static {
    this.POST_SELECT_GUI_TBAO_NCDIEN = 'select_GuiTbaoNCdien';
  }
  static {
    this.POST_FIND_HOA_DON_NO_BY_KEY = 'findHoaDonNoByKey';
  }
  static {
    this.POST_GET_TTHAI_GIAO_HOA_DON = 'gettthaigiaohoadon';
  }
  static {
    this.POST_FIND_PTHU_GUI_TBAO_TDIEN = 'findPthu_GuiTbaoTdien';
  }
  static {
    this.POST_XOA_PTHU_GUI_TBAO_TDIEN = 'xoaPthu_GuiTbaoTdien';
  }
  static {
    this.POST_SAVE_GUI_TBAO_TDIEN = 'save_GuiTbaoTdien';
  }
  static {
    this.POST_SELECT_GUITBAOTDIEN = 'select_GuiTbaoTdien';
  }
  static {
    this.POST_XOA_TTIN_PBO_THOAN_THEOLO = 'xoaTTinPBoThoanTheoLo';
  }
  static {
    this.POST_CAP_NHAT_LST_CNO_THOA_IHOANNHIEUHDON = 'capnhatLstCnoThoaiHoanNhieuHDon';
  }
  static {
    this.POST_GET_LST_PTHUPBO_THOANTHEOLO = 'getLstPThuPBoThoanTheoLo';
  }
  static {
    this.POST_GET_TTIN_TIEN_NO_PBOGTRU = 'getTTinTienNoPBoGTru';
  }
  static {
    this.POST_SEARCH_CN_PHTHU_TNGAN = 'Search_CN_PHTHU_TNGAN';
  }
  static {
    this.POST_DELETE_PTHU_TNGAN = 'deletePThuTNgan';
  }
  static {
    this.POST_CAP_NHAT_PTHU_TNGAN = 'capnhatPThuTNgan';
  }
  static {
    this.POST_SELECT_DETAIL_THO_TNGAN = 'select_detail_tho_tngan';
  }
  static {
    this.POST_SELECT_TONG_TIEN_PB = 'select_TONG_TIEN_PB';
  }
  static {
    this.POST_SELECT_TONG_SO_HDON = 'select_TONG_SO_HDON';
  }
  static {
    this.POST_SELECT_SO_TIEN_HDON_TKHOAN = 'select_SO_TIEN_HDON_TKHOAN';
  }
  static {
    this.POST_SELECT_SO_TIEN_HDON_HTHU = 'select_SO_TIEN_HDON_HTHU';
  }
  static {
    this.POST_SELECT_SO_TIEN_PTHU_KHDON = 'select_SO_TIEN_PTHU_KHDON';
  }
  static {
    this.POST_SELECT_TIEN_THUA_PHIEU_THU = 'select_TIEN_THUA_PHIEU_THU';
  }
  static {
    this.POST_SELECT_SOHDON_PHIEU_THU = 'select_soHdon_Phieu_thu';
  }
  static {
    this.POST_SELECT_SO_TIEN_PHIEU_THU = 'select_SO_TIEN_PHIEU_THU';
  }
  static {
    this.POST_SELECT_SO_TIEN_THO = 'select_SO_TIEN_THO';
  }
  static {
    this.POST_SELECT_SO_TIEN_PHTHU_TNGAN = 'select_SO_TIEN_PHTHU_TNGAN';
  }
  static {
    this.POST_SELECT_TIEN_LKE = 'select_TIEN_LKE';
  }
  static {
    this.POST_SELECT_TONG_TIEN = 'select_TONG_TIEN';
  }
  static {
    this.POST_SELECT_CN_BB_GTHU_BYMATNGAN = 'select_CN_BB_GTHU_ByMaTNgan';
  }
  static {
    this.POST_SEARCH_THO_TCHUC = 'Search_THO_TCHUC';
  }
  static {
    this.POST_HUY_XNHAN_TTIEN_ALL_HTHUC = 'huyXnhanTTienAllHThuc';
  }
  static {
    this.POST_XNHAN_TTIEN_ALL_HTHUC = 'xnhanTTienAllHThuc';
  }
  static {
    this.POST_XNHAN_TTIEN = 'xnhanTTien';
  }
  static {
    this.POST_SEARCH_DETAIL_CN_HDON_DELETE = 'Search_Detail_CN_HDON_DELETE';
  }
  static {
    this.POST_SEARCH_DETAIL_CN_HDON = 'Search_Detail_CN_HDON';
  }
  static {
    this.POST_SEARCH_DETAIL_CN_HDON_NHANG = 'Search_Detail_CN_HDON_NHANG';
  }
  static {
    this.POST_SEARCH_DETAIL_CN_HDON_THO = 'Search_Detail_CN_HDON_THO';
  }
  static {
    this.POST_SEARCH_CN_TTIEN_DTHU = 'Search_CN_TTIEN_DTHU';
  }
  static {
    this.POST_SEARCH_CN_TTIEN_TGIAN = 'Search_CN_TTIEN_TGIAN';
  }
  static {
    this.POST_SEARCH_CN_HDON_THO = 'Search_CN_HDON_THO';
  }
  static {
    this.POST_GET_TCHUC_THO = 'Get_Tchuc_Tho';
  }
  static {
    this.POST_SEARCH_THO_NGAN_HANG = 'Search_THO_NGAN_HANG';
  }
  static {
    this.POST_TIM_HUY_XNHAN_DV = 'timHuyXNhanDV';
  }
  static {
    this.POST_TIM_KIEM_XNHANDV = 'timkiemXNhanDV';
  }
  static {
    this.POST_GET_TCHUC_TTOAN = 'getTChucTToan';
  }
  static {
    this.POST_HUY_XAC_NHANDV = 'huy_xacnhanDV';
  }
  static {
    this.POST_XAC_NHAN_DV = 'xacnhanDV';
  }
  static {
    this.POST_FIND_KQUA_CNO = 'findKQuaCNo';
  }
  static {
    this.POST_XOA_NO_TNVLD = 'xoaNoTNVLD';
  }
  static {
    this.POST_GET_TIEN_NOP_BY_TNV = 'getTienNopByTNV';
  }
  static {
    this.POST_FIND_HDON_BY_BBAN = 'findHDonByBBan';
  }
  static {
    this.POST_FIND_BBAN_BY_TNV = 'findBBanByTNV';
  }
  static {
    this.POST_XOA_PHIEU_THU = 'xoa_Phieuthu';
  }
  static {
    this.POST_LAY_THONG_TIN_PHIEU_THU = 'lay_thongtinPhieuthu';
  }
  static {
    this.POST_GHI_THONG_TIN_TRA_THOAIHOAN = 'ghi_thongtin_traThoaiHoan';
  }
  static {
    this.POST_GHI_THONG_TIN_CNTQ = 'ghi_thongtin_CNTQ';
  }
  static {
    this.POST_LAY_THONG_TIN_NO_TQ = 'lay_thongtinno_TQ';
  }
  static {
    this.POST_GHI_THU_TIEN_UNG_TRUOC = 'ghi_thutien_ungtruoc';
  }
  static {
    this.POST_LAY_THONG_TIN_NO_KHTT_NOPTIENTHUA = 'lay_thongtin_no_khtt_noptienthua';
  }
  static {
    this.POST_GHI_THUTIEN_THUHO = 'ghi_thutien_Thuho';
  }
  static {
    this.POST_LAY_THONG_TIN_NO_THUHO = 'lay_thongtinno_Thuho';
  }
  static {
    this.POST_GHI_THUTIEN_DONGCAT = 'ghi_thutien_Dongcat';
  }
  static {
    this.POST_GET_BILLDC = 'get_BillDC';
  }
  static {
    this.POST_GET_BILL_CNTQ = 'get_BillCNTQ';
  }
  static {
    this.POST_EXECUTE_BILLTQ = 'execute_BillTQ';
  }
  static {
    this.POST_GET_BBAN_CTIET_KOGTHU = 'getBBanCtietKoGThu';
  }
  static {
    this.POST_update_Bien_Ban_QToan_KoGiaoThu = 'updateBienBanQToan_KoGiaoThu';
  }
  static {
    this.POST_GET_BBAN_QTOAN_KOGIAOTHU = 'getBBanQToan_KoGiaoThu';
  }
  static {
    this.POST_DELETE_BIEN_BAN_QTOAN = 'deleteBienBanQToan';
  }
  static {
    this.POST_UPDATE_BIEN_BAN_QTOAN = 'updateBienBanQToan';
  }
  static {
    this.POST_GET_CTIET_HDON_KO_GTHU = 'getCtietHDonKoGThu';
  }
  static {
    this.POST_GET_CTIET_HDON_CO_GTHU = 'getCtietHDonCoGThu';
  }
  static {
    this.POST_GET_BBAN_TIEN_THUA_KO_GIAO = 'getBBanTienThuaKoGiao';
  }
  static {
    this.POST_GET_BBAN_TIEN_THUA_GIAO = 'getBBanTienThuaGiao';
  }
  static {
    this.POST_GET_BBAN_TIEN_THUA = 'getBBanTienThua';
  }
  static {
    this.POST_GET_TTIN_BBAN = 'getTTinBBan';
  }
  static {
    this.POST_GET_BBAN_KO_GTHU = 'getBBanKoGThu';
  }
  static {
    this.POST_GET_BBAN_CO_GTHU = 'getBBanCoGThu';
  }
  static {
    this.POST_GET_BBAN_DA_QTOAN = 'getBBanDaQToan';
  }
  static {
    this.POST_GET_TIEN_THUA_TNV = 'getTienThuaTNV';
  }
  static {
    this.POST_GET_BBAN_Q_TOAN = 'getBBanQToan';
  }
  static {
    this.POST_GET_TTIN_IN_BBAN = 'getTTinInBBan';
  }
  static {
    this.POST_GET_B_BAN = 'getBBan';
  }
  static {
    this.POST_PRINT_BKE_CTIET_GTHU = 'printBKeCTietGThu';
  }
  static {
    this.POST_PRINT_BBAN_GTHU = 'printBBanGThu';
  }
  static {
    this.POST_UPDATE_BIEN_BAN_GIAO = 'updateBienBanGiao';
  }
  static {
    this.POST_INSERT_BIEN_BAN_GIAO = 'insertBienBanGiao';
  }
  static {
    this.POST_GET_TIEN_DA_GIAO = 'getTienDaGiao';
  }
  static {
    this.POST_DEL_BIEN_BAN_GIAO = 'delBienBanGiao';
  }
  static {
    this.POST_FIND_SO_GCS_BY_BIEN_BAN = 'findSoGCSByBienBan';
  }
  static {
    this.POST_FIND_MA_KVUC = 'findMaKVuc';
  }
  static {
    this.POST_FIND_MA_SO_GCS_TKIEM = 'findMaSoGCS_Tkiem';
  }
  static {
    this.POST_FIND_MA_SO_GCS = 'findMaSoGCS';
  }
  static {
    this.POST_FIND_BIEN_BAN_GIAO = 'findBienBanGiao';
  }
  static {
    this.POST_FIND_HOA_DON_NO_BY_SO_BBANG_THU = 'findHoaDonNoBySoBBanGThu';
  }
  static {
    this.POST_FIND_HOA_DON_GIAO = 'findHoaDonGiao';
  }
  static {
    this.POST_SP_KIEMTRA_DIEUKIEN_CHUYENTHANG = 'spKiemTraDieuKienChuyenThang';
  }
  static {
    this.POST_GET_TTCHOTTHANGHIENTAI = 'getTTChotThangHienTai';
  }
  static {
    this.POST_GET_DSHOADON_CHUA_DU_DK_CHUYENTHANG = 'getDSHoaDonChuaDuDKChuyenThang';
  }
  static {
    this.POST_GET_DANHMUC = 'getDanhMuc';
  }
  static {
    this.GET_ALLCNDUNGTTOAN_MTMN = 'GetAllCNDungTToanMTMN';
  }
  static {
    this.INSERT_CNDUNGTTOAN_MTMN = 'InsertCNDungTToanMTMN';
  }
  static {
    this.KPHUC_CNDUNGTTOAN_MTMN = 'KPhucCNDungTToanMTMN';
  }
  static {
    this.UPDATE_CNDUNGTTOAN_MTMN = 'UpdateCNDungTToanMTMN';
  }
  static {
    this.POST_TIMKIEMDV = 'timkiemDV';
  }
  static {
    this.POST_GET_MONEY_DEBIT = 'getMoneyDebit';
  }
  static {
    this.POST_LAY_TIENTHUA_THEO_MAKHTT = 'layTienThuaTheoMaKHTT';
  }
  static {
    this.POST_DATA_THONGTINNO_KHTT = 'data_thongtinno_khtt';
  }
  static {
    this.POST_DATA_THONGTINNO_KH = 'data_thongtinno_kh';
  }
  static {
    this.POST_SELECT_THONGTIN_TIENNO = 'select_thongtin_tienno';
  }
  static {
    this.POST_GET_SOTIEN_DA_THANHTOAN = 'getSoTienDaThanhToan';
  }
  static {
    this.POST_GET_TIEN_THOAI_HOAN_THEO_MAKHTT = 'GetTienThoaiHoanTheoMaKHTT';
  }
  static {
    this.POST_GET_CND_VUTD_NO_BY_MA_YCAU_KNAI = 'GetCNDVuTDNoByMaYCauKNai';
  }
  static {
    this.POST_CHECK_TIEN_THUA = 'checkTienThua';
  }
}
class API_INTERFACE {
  static {
    this.POST_HUY_TRANG_THAI_KY_TAY_HDONG_SDOI_BSUNG = 'huyTrangThaiKyTayHDongSDoiBSung';
  }
  static {
    this.POST_CHUYEN_HSODTU_OF_LIST_KHACHHANG_CHUYENDVI = 'chuyenHSoDTuOfListKHangChuyenDVi';
  }
  static {
    this.POST_GET_HSO_TIEP_NHAN = 'getHSoTiepNhan';
  }
  static {
    this.POST_TIMKIEM_THONGTIN_KHACHHANG_CHUADOISOAT = 'timKiemThongTinKhachHangChuaDoiSoat';
  }
  static {
    this.POST_TIMKIEM_THONGTIN_KHACHHANG = 'timKiemThongTinKhachHang';
  }
  static {
    this.POST_TIMKIEM_THONGTIN_KHACHHANG_DOISOAT = 'timKiemThongTinKhachHangDoiSoat';
  }
  static {
    this.DELETE_LIST_FILE_HSO = 'DeleteListFileHSoGTo';
  }
  static {
    this.POST_TIM_KIEM_DDO_BY_LIST_MA_SO_GCS = 'TimKiemDDoByListMaSoGCS';
  }
  static {
    this.POST_DELETE_GUI_THONG_BAO_THAY_DOI_NGAY_GCS = 'DeleteGuiThongBaoThayDoiNgayGCS';
  }
  static {
    this.POST_UPDATE_GUI_THONG_BAO_THAY_DOI_NGAY_GCS = 'UpdateGuiThongBaoThayDoiNgayGCS';
  }
  static {
    this.POST_SAVE_GUI_THONG_BAO_THAY_DOI_NGAY_GCS = 'SaveGuiThongBaoThayDoiNgayGCS';
  }
  static {
    this.POST_KIEM_TRA_GUI_THONG_BAO_THAY_DOI_NGAY_GCS = 'KiemTraGuiThongBaoThayDoiNgayGCS';
  }
  static {
    this.POST_TIM_KIEM_KHANG_GUI_THONG_BAO_THAY_DOI_NGAY_GCS = 'TimKiemKHangGuiThongBaoTDoiNgayGCS';
  }
  static {
    this.POST_TINH_HDON_KTGS = 'tinhHdonKtgs';
  }
  static {
    this.POST_GET_DATA_HDON_BY_DATE = 'getDataHdonByDate';
  }
  static {
    this.POST_CREATE_DU_THAO_HDONG_DAY_SAU_CTO = 'createDuThaoHDongDaySauCTo';
  }
  static {
    this.POST_CREATE_FILE_PDF_KTGS = 'createFilePdfKtgs';
  }
  static {
    this.POST_DOWNLOAD_FILE_ON_SFTP = 'DownloadFileOnSFTP';
  }
  static {
    this.POST_GET_BASE64_FILE_UDTH = 'getBase64FileUdth';
  }
  static {
    this.POST_GET_LIST_FILE_UDTH = 'getListFileUdth';
  }
  static {
    this.POST_TRINH_KY_FILE_UPLOAD = 'trinhKyFileUpload';
  }
  static {
    this.POST_GET_HSO_UPLOAD_TRINH_KY = 'getHSoUploadTrinhKy';
  }
  static {
    this.POST_CREATE_FILE_PDF_DIEN_TU = 'CreateFilePDFDienTu';
  }
  static {
    this.POST_UPLOAD_LIST_FILE_UPLOAD = 'uploadListFileUpload';
  }
  static {
    this.POST_GET_ALL_LIST_HSO_GTO_OF_KHANG = 'GetAllListHSoGToOfKHang';
  }
  static {
    this.POST_CREATE_LIST_FILE_PDF_DIEN_TU = 'CreateListFilePDFDienTu';
  }
  static {
    this.POST_DELETE_FILE_DIEN_TU = 'DeleteFilePDFDienTu';
  }
  static {
    this.POST_HUY_DUYET_PHUONG_AN_DICH_CHUYEN_GCS = 'HuyDuyetPhuongAnDichChuyenGCS';
  }
  static {
    this.POST_DUYET_PHUONG_AN_DICH_CHUYEN_GCS = 'DuyetPhuongAnDichChuyenGCS';
  }
  static {
    this.POST_KIEM_TRA_DUYET_PHUONG_AN_DICH_CHUYEN_GCS = 'KiemTraDuyetPhuongAnDichChuyenGCS';
  }
  static {
    this.POST_TIM_KIEM_KHANG_DUYET_PHUONG_AN_CHUYEN_NGAY_GCS = 'TimKiemKHangDuyetPhuongAnChuyenNgayGCS';
  }
  static {
    this.POST_CREATE_BBAN_TTHUAN_DICH_CHUYEN_NGAY_GCSKYGIAY = 'CreateBBanTThuanDichChuyenNgayGCSKyGiay';
  }
  static {
    this.POST_DELETE_LIST_HSO_GTO_TDOI_NGAY_GCS = 'DeleteListHSoGToTDoiNgayGCS';
  }
  static {
    this.POST_UPLOAD_LIST_TTHOA_DCHUYEN_NGAYGCS = 'UploadListTThoaDChuyenNgayGCS';
  }
  static {
    this.POST_DELETE_LIST_HSOGTO = 'DeleteListHSoGTo';
  }
  static {
    this.POST_UPLOAD_LIST_HSO_GTO = 'UploadListHSoGTo';
  }
  static {
    this.POST_GET_LISH_SO_GIAY_TO_UPLOAD = 'GetLisHSoGiayToUpload';
  }
  static {
    this.POST_UPDATE_TTRINH_BBAN_TTHUAN_DICH_CHUYEN_NGAY_GCS = 'UpdateTTrinhBBanTThuanDichChuyenNgayGCS';
  }
  static {
    this.POST_DELETE_BBAN_TTHUAN_DICH_CHUYEN_NGAY_GCS = 'DeleteBBanTThuanDichChuyenNgayGCS';
  }
  static {
    this.POST_CREATE_BBAN_TTHUAN_DICH_CHUYEN_NGAY_GCS = 'CreateBBanTThuanDichChuyenNgayGCS';
  }
  static {
    this.POST_TIM_KIEM_KHANG_DA_LAP_TTHUAN_CHUYEN_NGAY_GCS = 'TimKiemKHangDaLapTThuanChuyenNgayGCS';
  }
  static {
    this.POST_TIM_KIEM_KHANG_LAP_TTHUAN_CHUYEN_NGAY_GCS = 'TimKiemKHangLapTThuanChuyenNgayGCS';
  }
  static {
    this.POST_GET_HDON_CHAM_NO_NB = 'GetHDonChamNo_NB';
  }
  static {
    this.POST_GET_HDON_GTHU_NB = 'GetHDonGThu_NB';
  }
  static {
    this.POST_GET_BB_GIAO_NB = 'GetBBGIAO_NB';
  }
  static {
    this.POST_CREATE_BBAN_TRTH_PDF = 'createBBanTrTh_pdf';
  }
  static {
    this.POST_CHECK_KHANG_IS_BAN_CAMKET_MTMN = 'CheckKHangIsBanCamKetMTMN';
  }
  static {
    this.POST_DELETE_LIST_FILE_PDF_BAN_CAM_KET_MTMN = 'DeleteListFilePDFBanCamKetMTMN';
  }
  static {
    this.POST_UPDATE_FILE_PDF_BAN_CAM_KET_MTMN = 'UpdateFilePDFBanCamKetMTMN';
  }
  static {
    this.POST_CREATE_LIST_FILE_PDF_BAN_CAM_KET_MTMN = 'CreateListFilePDFBanCamKetMTMN';
  }
  static {
    this.POST_GET_DD_TBI_HTAI = 'getDDTbiHTai';
  }
  static {
    this.POST_DELETE_BBAN_TRTH = 'deleteBBanTrTh';
  }
  static {
    this.POST_UPDATE_BBAN_TRTH = 'updateBBanTrTh';
  }
  static {
    this.POST_GET_TTIN_KHANG_TREOTHAO = 'getTTinKHangTreoThao';
  }
  static {
    this.POST_GET_TTIN_DTHAO = 'getTTinDThao';
  }
  static {
    this.POST_DELETE_FILE_PDF_DICHVU_HDONG_DIENDTU = 'DeleteFilePDFDichVuHDongDienDTu';
  }
  static {
    this.POST_UPDATE_FILE_PDF_DICHVU_HDONG_DIENDTU = 'UpdateFilePDFDichVuHDongDienDTu';
  }
  static {
    this.POST_CREATE_FILE_PDF_DICHVU_HDONG_DIENDTU = 'CreateFilePDFDichVuHDongDienDTu';
  }
  static {
    this.GET_TTIN_DTHAO = 'getTTinDThao';
  }
  static {
    this.POST_DELETE_BBAN_MUCDICH_SD = 'deleteBBanMucDichSD';
  }
  static {
    this.POST_UPDATE_BBAN_MUCDICH_SD = 'updateBBanMucDichSD';
  }
  static {
    this.POST_CREATE_BBAN_MUCDICH_SD = 'createBBanMucDichSD';
  }
  static {
    this.POST_KIEMTRA_DICHVU_OF_KHANG_SOHOA = 'KiemTraDichVuOfKHangSoHoa';
  }
  static {
    this.POST_UPDATE_BBAN_KSAT_AND_PAHH_DONGDTU = 'UpdateBBanKSatAndPAHHDongDTu';
  }
  static {
    this.POST_DELETE_PAN_CDIEN_DDOI_CSUAT = 'deletePAnCDienDDoi_CSuat';
  }
  static {
    this.POST_UPLOADHSOGTO = 'uploadHSoGTo';
  }
  static {
    this.POST_REMOVEHSOGTO = 'removeHSoGTo';
  }
  static {
    this.POST_REMOVEHSOGTO_STT = 'removeHSoGTo_STT';
  }
  static {
    this.POST_GETLISTHSGT = 'getListHSGT';
  }
  static {
    this.POST_GETBBANKY = 'getBBanKy_DL';
  }
  static {
    this.POST_CHECKHSOGTO = 'checkHSoGTo_DLuc';
  }
  static {
    this.POST_UPDATE_BBANKY = 'updateBBanKyGiay';
  }
  static {
    this.POST_REMOVE_BBANKY = 'deleteBBanKyGiay';
  }
  static {
    this.GET_HSGT = 'getHSGT';
  }
  static {
    this.GET_HSGT_SCAN_MANY = 'getHSGT_Scan_Many';
  }
  static {
    this.POST_GET_BASE64_HDTHSO_UPLOAD_BY_MAYCAU = 'GetBase64HDTHSoUploadByMaYCau';
  }
  static {
    this.POST_TAO_BAN_THE_HIEN_FILE_DIEN_TU = 'taoBanTheHienFileDienTu';
  }
  static {
    this.POST_CHECK_KY_HSDT = 'checkKyHSDT';
  }
  static {
    this.POST_SHARE_DATA = 'getShareData';
  }
  static {
    this.POST_CREATE_SIGN_FILE_PDF = 'createSignFilePDF';
  }
  static {
    this.POST_TTIN_DTHAO = 'getTTinDThao';
  }
  static {
    this.POST_CREATE_PAN_CDIEN = 'createPAnCDien';
  }
  static {
    this.POST_UPDATE_PAN_CDIEN = 'updatePAnCDien';
  }
  static {
    this.POST_DELETE_PAN_CDIEN = 'deletePAnCDien';
  }
  static {
    this.POST_YCAUH_CHINH = 'getYCauHChinh';
  }
  static {
    this.POST_IMPL_KYSO_ND = 'implKySo_ND';
  }
  static {
    this.POST_IDKEY_BY_USER_SIGN = 'getIdKey_byUser_Sign';
  }
  static {
    this.POST_HSGT_SCAN = 'getHSGT_Scan';
  }
  static {
    this.POST_UPDATE_HSOKY = 'updateHSoKy';
  }
  static {
    this.POST_TIMKIEM_HSO_YCAU_KYLAI_CHUATN = 'TimKiemHSoYCauKyLaiChuaTN';
  }
  static {
    this.POST_TIMKIEM_HSO_YCAU_KYLAI_DATN = 'TimKiemHSoYCauKyLaiDaTN';
  }
  static {
    this.POST_TIEPNHAN_YCAU_KYLAI = 'TiepNhanYCauKyLai';
  }
  static {
    this.POST_HUYTIEP_NHAN_YCAU_KYLAI = 'HuyTiepNhanYCauKyLai';
  }
  static {
    this.POST_TIMKIEM_HSO_YCAU_DADUYET = 'TimKiemHSoYCauDaDuyet';
  }
  static {
    this.POST_DUYET_TIEPNHAN_YCAU_KYLAI = 'DuyetTiepNhanYCauKyLai';
  }
  static {
    this.POST_KHONGDUYET_TNHAN_YCAU_KYLAI = 'KhongDuyetTNhanYCauKyLai';
  }
  static {
    this.POST_HUYDUYET_TIEPNHAN_YCAU_KYLAI = 'HuyDuyetTiepNhanYCauKyLai';
  }
  static {
    this.POST_HSO_DTHAO_FOR_FORM_DUYET_XACNHAN = 'getHsoDThaoForFormDuyetXacNhan';
  }
  static {
    this.POST_XACNHAN_HSO_DTHAO = 'XacNhanHsoDThao';
  }
  static {
    this.POST_HUY_DUYET_XACNHAN_HSO_DTHAO = 'HuyDuyetXacNhanHSoDThao';
  }
  static {
    this.POST_CREAT_DSACH_KHANG_KYLAI = 'creatDSachKhangKyLai';
  }
  static {
    this.POST_DELETE_DSACH_KHANG_KYLAI = 'deleDSachKhangKyLai';
  }
  static {
    this.POST_DANHSACH_KYLAI = 'getDanhSachKyLai';
  }
  static {
    this.POST_DSACH_KYLAI_HD = 'getDSachKyLaiHD';
  }
  static {
    this.POST_CREATE_DATA_DTHAO = 'createDataDThao';
  }
  static {
    this.POST_UPDATE_DATA_DTHAO = 'updateDataDThao';
  }
  static {
    this.POST_DELETE_DATA_DTHAO = 'deleteDataDThao';
  }
  static {
    this.POST_ARRAY_TO_JSON = 'arrayToJSon';
  }
  static {
    this.POST_LST_KYLAI_SOHOA_THEOTT = 'getLstKyLaiSohoaTheoTT';
  }
  static {
    this.POST_UPDATE_DSACH_KYLAI_HD = 'updateDsachKyLaiHD';
  }
  static {
    this.POST_TTIN_DTHAO_BY_LST_YCAU = 'getTTinDThao_ByLstYCau';
  }
  static {
    this.POST_HSO_KY_ND = 'getHSoKyND';
  }
  static {
    this.POST_YCAU_KY_ND = 'getYCauKyND';
  }
  static {
    this.POST_HOSO_KYSO = 'getHosKySo';
  }
  static {
    this.POST_IMPL_KYSO_NV = 'implKySo_NV';
  }
  static {
    this.POST_ID_KEY_BY_USER = 'getIdKey_byUser';
  }
  static {
    this.POST_TRINH_KY = 'trinhKy';
  }
  static {
    this.POST_CREATE_PLUC_HOPDONG = 'createPLucHopDong';
  }
  static {
    this.POST_UPDATE_PLUC_HOPDONG = 'updatePLucHopDong';
  }
  static {
    this.POST_DELETE_PLUC_HOPDONG = 'deletePlucHopDong';
  }
  static {
    this.POST_DELETE_BBC_DUT_HDONG_MT = 'DeleteBBCDutHDongMT';
  }
  static {
    this.POST_UPDATE_BBC_DUT_HDONG_MT = 'UpdateBBCDutHDongMT';
  }
  static {
    this.POST_CREATE_BBC_DH_DONG_MT = 'CreateBBCDHDongMT';
  }
  static {
    this.POST_UPDATE_DUTHAO_HDONG_DAY_SAU_CTO = 'updateDuThaoHDongDaySauCTo';
  }
  static {
    this.POST_DELETE_DUTHAO_HDONG_DAY_SAU_CTO = 'deleteDuThaoHDongDaySauCTo';
  }
  static {
    this.POST_CREATE_BBAN_TRTH = 'createBBanTrTh';
  }
  static {
    this.POST_CREATE_DUTHAO_HDONG_DTU_CTRINH = 'createDuThaoHDongDTuCTrinh';
  }
  static {
    this.POST_UPDATE_DUTHAO_HDONG_DTU_CTRINH = 'updateDuThaoHDongDTuCTrinh';
  }
  static {
    this.POST_DELETE_DUTHAO_HDONG_DTU_CTRINH = 'deleteDuThaoHDongDTuCTrinh';
  }
  static {
    this.POST_TIMKIEM_KHANG_IN_INTERFACE = 'TimKiemKHangInInterface';
  }
  static {
    this.POST_DELETE_BB_CDUT_HDONG = 'deleteBBCDutHDong';
  }
  static {
    this.POST_UPDATE_BB_CDUT_HDONG = 'updateBBCDutHDong';
  }
  static {
    this.POST_UPDATE_BB_CDUT_HDONG_DTU = 'UpdateBBCDutHDongDTu';
  }
  static {
    this.POST_CREATE_FILE_PDF_THANHLY_KYLAI_HDMT = 'CreateFilePDF_ThanhLyKyLaiHDMT';
  }
  static {
    this.POST_REMOVE_FILE_PDF_THANHLY_KYLAI_HDMT = 'RemoveFilePDF_ThanhLyKyLaiHDMT';
  }
  static {
    this.POST_CREATE_BBAN_KSAT_AND_PAHH_DONGDTU = 'CreateBBanKSatAndPAHHDongDTu';
  }
  static {
    this.POST_CREATE_BBAN_SOHO_SD = 'createBBanSohoSD';
  }
  static {
    this.POST_UPDATE_BBAN_SOHO_SD = 'updateBBanSohoSD';
  }
  static {
    this.POST_DELETE_BBAN_SOHO_SD = 'deleteBBanSohoSD';
  }
  static {
    this.POST_KIEM_TRA_HUY_DUYET_PHUONG_AN_DICH_CHUYEN_GCS = 'KiemTraHuyDuyetPhuongAnDichChuyenGCS';
  }
  static {
    this.POST_TIM_DIEM_DO_DA_LAP_TTHUAN_CHUYEN_NGAY_GCS = 'TimKiemDiemDoDaLapTThuanChuyenNgayGCS';
  }
  static {
    this.POST_GET_HSO_DIEN_TU_TRINH_KY = 'getHSoDienTuTrinhKy';
  }
  static {
    this.POST_CREATE_BBKRA_SDUNG_DTU = 'CreateBBKTRaSDungDienDTu';
  }
  static {
    this.POST_DELETE_BBKRA_SDUNG_DTU = 'DeleteBBKTRaSDungDienDTu';
  }
  static {
    this.POST_TIM_KIEM_TTIN_KHANG_HDONG_SDOI_BSUNG = 'timKiemTTinKHangHDongSDoiBSung';
  }
  static {
    this.POST_CREATE_HDONG_SDOI_BSUNG_THU_DO_MOI = 'createHDongSDoiBSungThuDoMoi';
  }
  static {
    this.POST_DELETE_HDONG_SDOI_BSUNG_THU_DO_MOI = 'deleteHDongSDoiBSungThuDoMoi';
  }
  static {
    this.POST_UPDATE_LIST_FILE_KY_TAY_HDONG_SDOI_BSUNG = 'uploadListFileKyTayHDongSDoiBSung';
  }
  static {
    this.POST_UPLOAD_LISTFILE_HSOGTO = 'UploadListFileHSoGTo';
  }
}
class API_BCAOTHANG {
  static {
    this.POST_GET_DSACH_QTOAN_MTAM_BY_MADDO = 'getDsachQtoanMtamByMaDdo';
  }
  static {
    this.POST_THONGKE_THONGTIN_KHACHHANG_DOISOAT = 'thongKeThongTinKhachHangDoiSoat';
  }
  static {
    this.POST_GET_BCCT_QUAN_LY_THU_HO = 'getBcctQuanLyThuHo';
  }
  static {
    this.POST_GET_BCTH_QUAN_LY_THU_HO = 'getBcthQuanLyThuHo';
  }
  static {
    this.POST_GET_BCTH_TIEP_NHAN_DUOI_DIEN = 'getBcthTiepNhanLuoiDien';
  }
  static {
    this.POST_GET_BCCT_TIEP_NHAN_DUOI_DIEN = 'getBcctTiepNhanLuoiDien';
  }
  static {
    this.POST_GET_BCCT_TNLD_DIEUCHUYEN_CTRINH = 'getBcctTnldDieuChuyenCTrinh';
  }
  static {
    this.POST_GET_BCCT_TNLD_OF_QD23 = 'getBcctTnldOfQD23';
  }
  static {
    this.POST_GET_BCCT_TNLD_OF_TT32 = 'getBcctTnldOfTT32';
  }
  static {
    this.POST_GET_LIST_THEO_DOI_TKIEM_DIEN = 'getListTheoDoiTKiemDien';
  }
  static {
    this.POST_INSERT_THEO_DOI_TKIEM_DIEN = 'insertTheoDoiTKiemDien';
  }
  static {
    this.POST_BCAO_TKD = 'BCAO_TKD';
  }
  static {
    this.POST_GET_GTRI_NGAY_THU_CAO_NHAT = 'getGtriNgayThuCaoNhat';
  }
  static {
    this.POST_CAP_NHAT_MOI_SO_LIEU_MTMN = 'capNhatMoiSoLieuMTMN';
  }
  static {
    this.POST_CAP_NHAT_SL_SOTIEN_DCHINH_COD_NHCS = 'capNhatSLSoTienDChinhCOD_NHCS';
  }
  static {
    this.GET_DSACH_KHANG_DCHINH_SLUONG_MTAM_TAB2 = 'getDsachKhangDChinhSLuongMTAM_Tab2';
  }
  static {
    this.POST_CALCUTED_COD_NHCS = 'calculated_COD_NHCS';
  }
  static {
    this.POST_CAP_NHAT_DCHINH_SLUONG_MTAM = 'capNhatDChinhSLuongMTAM';
  }
  static {
    this.GET_DSACH_KHANG_DCHINH_SLUONG_MTAM = 'getDsachKhangDChinhSLuongMTAM';
  }
  static {
    this.POST_GET_TIEN_TTHU_VPCS_MTMN = 'GetTienTThuVpcsMTMN';
  }
  static {
    this.POST_GET_DSACH_TTIN_VPHAM = 'getDsachTtinVpham';
  }
  static {
    this.POST_GET_CHUYEN_ERP = 'getChuyenERP';
  }
  static {
    this.POST_KET_XUAT_ERP = 'ketXuatERP';
  }
  static {
    this.POST_LAY_HDON_ERP = 'layHDonERP';
  }
  static {
    this.POST_TONG_HOP_KPI = 'TongHopKPI';
  }
  static {
    this.POST_GET_LOG_ERROR = 'getLogError';
  }
  static {
    this.POST_GET_BC_SLUONG_MTMN = 'getBCSLuongMTMN';
  }
  static {
    this.POST_GET_DELETE_DCHINH_MTAM = 'getDeleteDChinhMTAM';
  }
  static {
    this.POST_GET_CAP_NHAT_DCHINH_MTAM = 'getCapNhatDChinhMTAM';
  }
  static {
    this.POST_GET_DON_GIA_DCHINH_MTAM = 'getDonGiaDChinhMTAM';
  }
  static {
    this.POST_GET_DSACH_DCHINH_MTAM = 'getDsachKhangDChinhMTAM';
  }
  static {
    this.POST_INBAOCAO_KHOACH_TDOI_NGAYGCS = 'InBaoCaoKeHoachTDoiNgayGhi';
  }
  static {
    this.POST_GET_DSACH_PHIEU_QTOAN_DIEM_MTAM = 'getDsachKhangPhieuQToanDienMTAM';
  }
  static {
    this.POST_GET_BBAN_XNHAN_DIEM_MTAM = 'getBBanXnhanDienMTAM';
  }
  static {
    this.POST_GET_BBAN_XNHAN_DIEM_MTAM_KHANG = 'getBBanXnhanDienMTAM_Khang';
  }
  static {
    this.POST_GET_DSACH_KHANG_QTOAN_DIEN_MTAM = 'getDsachKhangQToanDienMTAM';
  }
  static {
    this.POST_GET_DSACH_KHANG_QTOAN_THUE_DIEM_MTAM = 'getDsachKhangQToanThueDienMTAM';
  }
  static {
    this.POST_GET_DSACH_KHANG_CSO_SLUONG = 'getDsachKhangCSoSLuong';
  }
  static {
    this.POST_UPDATE_QTOAN_SLUONG_MTAM = 'capnhatQToanSLuongMTAM';
  }
  static {
    this.POST_GET_XAC_NHAN_BIEN_BAN_DIEN_MTAM = 'getBBanXnhanDienMTAM';
  }
  static {
    this.POST_DELETE_LY_DO = 'deleteLyDo';
  }
  static {
    this.POST_UPDATE_LY_DO_CHUA_TTOAN_TIEN_DMT = 'capNhatLydo_ChuaTToanTienDMT';
  }
  static {
    this.POST_GET_DSACH_CTIET_QTOAN_MTAM_THEOLO = 'getDsachCTietQToanMTAMTheoLo';
  }
  static {
    this.POST_GET_DSACHKH_CHUA_TTOAN_TIEN_DMT = 'getDsachKH_ChuaTToanTienDMT';
  }
  static {
    this.POST_GET_TTIN_CSO_SANLUONG_MTAM_THEOLO = 'getTtinCSoSanLuongMTAM_TheoLo';
  }
  static {
    this.POST_GET_DATA_KHOACH_GCS = 'getDataKHoachGCS';
  }
  static {
    this.POST_GET_HDON_CHAM_NO_NB = 'GetHDonChamNo_NB';
  }
  static {
    this.POST_GET_HDON_GTHU_NB = 'GetHDonGThu_NB';
  }
  static {
    this.POST_GET_BB_GIAO_NB = 'GetBBGIAO_NB';
  }
  static {
    this.POST_GET_SAO_LUC_CHI_SO_AP_GIA = 'getSaoLucChiSoApGia';
  }
  static {
    this.POST_GET_SAO_LUC_CHI_SO_THONG_TIN_DIEM_DO = 'getSaoLucChiSoThongTinDiemDo';
  }
  static {
    this.POST_GET_SAO_LUC_CHI_SOCT = 'getSaoLucChiSoCT';
  }
  static {
    this.POST_GET_SAO_LUC_CHI_SO = 'getSaoLucChiSo';
  }
  static {
    this.POST_DEL_LOG_IN_HDON = 'delLogInHDon';
  }
  static {
    this.POST_GET_LOG_IN_HDON = 'getLogInHDon';
  }
  static {
    this.POST_CREATE_DU_BAO_DIEN_NHAN_DAU_NGUON = 'createDuBaoDienNhanDauNguon';
  }
  static {
    this.POST_GET_DU_BAO_DIEN_NHAN_DAU_NGUON = 'getDuBaoDienNhanDauNguon';
  }
  static {
    this.POST_KY_XAC_NHAN_DU_BAO_PTAI = 'kyXacNhanDuBaoPTai';
  }
  static {
    this.POST_GET_THONG_TIN_XAC_NHAN_DBAO_PTAI_CAPTREN = 'getThongTinXacNhanDBaoPTai_CapTren';
  }
  static {
    this.POST_GET_THONG_TIN_XAC_NHAN_DBAO_PTAI_CDUOI = 'getThongTinXacNhanDBaoPTai_CDuoi';
  }
  static {
    this.POST_GET_LOG_GHI_CHI_SO_BY_THANG_NAM = 'getLogGhiChiSoByThangNam';
  }
  static {
    this.POST_DELETE_LOG_GHI_CHI_SO = 'deleteLogGhiChiSo';
  }
  static {
    this.POST_CREATE_LOG_GHI_CHI_SO = 'createLogGhiChiSo';
  }
  static {
    this.POST_GET_TTIN_KY_XNHAN_DBP_TAI_THEOTUNGDVI = 'getTTinKyXNhanDBPTaiTheoTungDVi';
  }
  static {
    this.POST_GET_THONG_TIN_PHU_TAI_CAP_TREN = 'getThongTinPhuTaiCapTren';
  }
  static {
    this.POST_GET_THONG_TIN_PHU_TAI_CAP_DUOI = 'getThongTinPhuTaiCapDuoi';
  }
  static {
    this.POST_TONG_HOP_GIAO_THU_KHTT = 'TongHopGiaoThu_KHTT';
  }
  static {
    this.POST_GET_DSKHTT = 'getDsKHTT';
  }
  static {
    this.POST_GET_TRA_CUU_CONG_NO_KHTT = 'GetTraCuuCongNo_KHTT';
  }
  static {
    this.POST_GET_DS_KHANH_HANG_THANH_TOAN_CNO = 'getDsKhanhHangThanhToanCNo';
  }
  static {
    this.POST_TRA_CUU_KH_BY_MA_TRAM = 'TraCuu_KH_ByMaTram';
  }
  static {
    this.POST_TRA_CUU_KH_BY_MA_SO = 'TraCuu_KH_ByMaSo';
  }
  static {
    this.POST_GET_BANG_KE_THU_NGAN = 'getBangKeThuNgan';
  }
  static {
    this.POST_GET_HDON_BST = 'getHDON_BST';
  }
  static {
    this.POST_GET_HDON_DCHINH_SUA_SAI_BY_ID = 'getHDonDChinhSuaSaiByID';
  }
  static {
    this.POST_GET_HDN_HDON_TIEP_NHAN_ID = 'getHdnHdonTiepnhanID';
  }
  static {
    this.POST_GET_HDN_HDON_COS_FI_DC = 'getHdnHdoncosfiDc';
  }
  static {
    this.POST_GET_HDN_HDON_COS_FI = 'getHdnHdoncosfi';
  }
  static {
    this.POST_GET_HDG_QHE_DDO_GT = 'getHDG_QHE_DDO_GT';
  }
  static {
    this.POST_GET_HDG_QHE_DDO_BQ = 'getHDG_QHE_DDO_BQ';
  }
  static {
    this.POST_GET_HDG_QHE_DDO_TP = 'getHDG_QHE_DDO_TP';
  }
  static {
    this.POST_GET_HDG_PTHUC_TTOAN = 'getHdgPthucTtoan';
  }
  static {
    this.POST_GET_HDG_VI_TRI_DDO = 'getHdgVitriDdo';
  }
  static {
    this.POST_GET_HDG_KHACH_HANG_THANH_TOAN = 'getHdgKhachHangThanhToan';
  }
  static {
    this.POST_GET_HDG_DDO_SO_GCS_GT = 'getHdgDdoSogcsGT';
  }
  static {
    this.POST_GET_HDG_DDO_SO_GCS_BQ = 'getHdgDdoSogcsBQ';
  }
  static {
    this.POST_GET_HDG_DDO_SO_GCS = 'getHdgDdoSogcs';
  }
  static {
    this.POST_GET_HDG_DIEM_DO_GT = 'getHDGDiemDoGT';
  }
  static {
    this.POST_GET_GIA_BAN_DIEN_DC = 'getGiaBanDienDc';
  }
  static {
    this.POST_GET_GIA_BAN_DIEN = 'getGiaBanDien';
  }
  static {
    this.POST_GET_CHI_SO = 'getChiSo';
  }
  static {
    this.POST_GET_HDN_HDON_CTIET = 'getHdnHdonctiet';
  }
  static {
    this.POST_GET_HDN_HDON = 'getHdnHdon';
  }
  static {
    this.POST_GET_HDG_DIEM_DO = 'getHDGDiemDo';
  }
  static {
    this.POST_GET_HDG_KHACH_HANG_BY_MA_KHANG = 'getHdgKhachHangByMaKHang';
  }
  static {
    this.POST_GET_HDON_DCHINH_SUA_SAI = 'getHDonDChinhSuaSai';
  }
  static {
    this.POST_GET_TIEP_NHAN_HIEN_TAI = 'gettiepnhan_hientai';
  }
  static {
    this.POST_GET_HDON_TIEP_NHAN_SSAI = 'gethdontiepnhanssai';
  }
  static {
    this.POST_GET_BBAN_GIAO_NHAN_HDON_DIENTU_LSU = 'getBBanGiaoNhanHdonDienTu_LSU';
  }
  static {
    this.POST_GET_BBANGIAO_NHAN_HDON_DIENTU = 'getBBanGiaoNhanHdonDienTu';
  }
  static {
    this.POST_GET_HDON_NGTE = 'getHDon_NgTe';
  }
  static {
    this.POST_GET_BBAN_KHONG_GIAOTHU = 'getBBanKhongGiaoThu';
  }
  static {
    this.POST_GET_DANH_SACH_KHANG_KHONG_GIAO_THU = 'getDanhsachKhangKhongGiaoThu';
  }
  static {
    this.POST_GET_HDN_HDON_CTIET_DC = 'getHdnHdonctietDc';
  }
  static {
    this.POST_GET_HDN_HDON_DC = 'getHdnHdonDc';
  }
  static {
    this.POST_GET_HDN_CHI_SO_DC = 'getHdnChisoDc';
  }
  static {
    this.POST_GET_HDN_DIEM_DO_DC = 'getHdnDiemdoDc';
  }
  static {
    this.POST_GET_HDN_KHANG_DC = 'getHdnKhangDc';
  }
  static {
    this.POST_GET_HDN_BBAN_DCHINH = 'getHdnBbanDchinh';
  }
  static {
    this.POST_GET_TTIN_KHANG = 'getTTinKHang';
  }
  static {
    this.POST_GET_TTIN_HDON_SAI_TT = 'getTTinHDonSaiTT';
  }
  static {
    this.POST_GET_TBI_TRT_HAOKTGS = 'getTbiTrThaoKTGS';
  }
  static {
    this.POST_TKIEM_HDON_CTIET_FOR_GSMBD = 'TKiemHDon_CtietForGSMBD';
  }
  static {
    this.POST_GET_DDO_THEO_NGAY_HLUC = 'get_Ddo_Theo_Ngay_Hluc';
  }
  static {
    this.POST_IN_BAO_CAO_KTGSMBD = 'Inbaocao_KTGSMBD';
  }
  static {
    this.POST_SPTONGHOP_KHOITAO_SLIEU = 'spTongHop_KhoiTao_SLieu';
  }
  static {
    this.POST_SP_CAPNHAT_SOLIEU_TONDKY_BAOCAO = 'spCapnhatSoLieuTonDKyBaoCao';
  }
  static {
    this.POST_SP_GET_TONDKY_SOLIEU_BAOCAO = 'spGetTonDKySoLieuBaoCao';
  }
  static {
    this.POST_SP_PHAN_TICH_GIAMUA = 'spPhantichgiamua';
  }
  static {
    this.POST_SP_PHAN_TICHGIA_THEODTG = 'spPhantichgia_theoDTG';
  }
  static {
    this.POST_SP_CHENH_LECH_MUA_BAN = 'spChenhlech_mua_ban';
  }
  static {
    this.POST_SP_DUKIEN_GIA_BQ = 'spDukiengiaBQ';
  }
  static {
    this.POST_IN_BAOCAO_PDF_KTGSMBD = 'InbaocaoPDF_KTGSMBD';
  }
  static {
    this.POST_UPDATE_DATAMTROIMNHA = 'updateDataMtroiMNha';
  }
  static {
    this.POST_GET_DATAMTROIMNHA = 'getDataMTroiMNha';
  }
  static {
    this.POST_UPDATE_DATASTAITPHAM = 'updateDataSTaiTPham';
  }
  static {
    this.POST_GET_DATASTAITPHAM = 'getDataSTaiTPham';
  }
  static {
    this.POST_EXCUTE_UNITEVN = 'Excute_UnitEVN';
  }
  static {
    this.POST_EXCUTE_HIGHVOLEVN = 'Excute_HighVolEVN';
  }
  static {
    this.POST_EXCUTE_MEDIVOLEVN = 'Excute_MediVolEVN';
  }
  static {
    this.POST_EXCUTE_LOWVOLEVN = 'Excute_LowVolEVN';
  }
  static {
    this.POST_GET_SLIEUNHAPTTEVN = 'getSLieuNhapTTEVN';
  }
  static {
    this.POST_GHIDULIEUDAUVAO_NHAPDC = 'GhiDuLieuDauVao_NhapDC';
  }
  static {
    this.POST_GET_DULIEUDAUVAO_NHAPDC = 'GetDuLieuDauVao_NhapDC';
  }
  static {
    this.POST_LAY_TTRINH_DANG_THOP = 'layTTrinhDangTHop';
  }
  static {
    this.POST_LAY_DSACH_BC_LSU_THOP = 'layDSachBCLSuTHop';
  }
  static {
    this.POST_LAY_NKY_THOP_BYID_BC_LSU_THOP = 'layNKyTHopByIdBCLSuTHop';
  }
  static {
    this.POST_GHIDULIEUTONGHOP_NHAPDC = 'GhiDuLieuTongHop_NhapDC';
  }
  static {
    this.POST_GET_DULIEUTONGHOP_NHAPDC = 'GetDuLieuTongHop_NhapDC';
  }
  static {
    this.POST_GET_DANHMUC = 'getDanhMuc';
  }
  static {
    this.GET_BANGKETHANH_TOANTIENDIENMTAM = 'getBangKeThanhToanTienDienMTAM';
  }
  static {
    this.POST_GETBCCT_BLDN = 'getBcct_BLDN';
  }
  static {
    this.POST_GETBCCT_TCONGDVU = 'getBcct_TCongDVu';
  }
  static {
    this.POST_GETBCTH_BLDN = 'getBcth_BLDN';
  }
  static {
    this.POST_GETBCAOTT_CTIET = 'getBCaoTT_CTiet';
  }
  static {
    this.POST_GETBCAOTT_KPP = 'getBCTinhToanKpp';
  }
  static {
    this.POST_GETBCAO_TTEVN = 'getBCaoTTEVN';
  }
  static {
    this.POST_INBAOCAO_KTGSMBD_MOI = 'Inbaocao_KTGSMBD_Moi';
  }
  static {
    this.POST_BAOCAO_KINHDOANH = 'baoCaoKinhDoanh';
  }
  static {
    this.POST_BAO_CAO_CAP_DIEN = 'baoCaoCapDien';
  }
  static {
    this.POST_GET_GIA = 'getGia';
  }
  static {
    this.POST_GETBAOCAOTHSD_HDON = 'GetBaoCaoTHSD_HDON';
  }
  static {
    this.POST_INBAOCAO_DSKH_HDONVAT0 = 'Inbaocao_DSKH_HDonVAT0';
  }
  static {
    this.POST_INBAOCAO_CTIET_KHDON_KTN = 'InBaoCao_CTiet_KHDon_KTN';
  }
  static {
    this.POST_INBAOCAO_CTIET_KHDON_NGAYGCS = 'InBaoCao_CTiet_KHDon_NgayGCS';
  }
  static {
    this.POST_BAOCAOCTIETHOADON = 'baoCaoCtietHoaDon';
  }
  static {
    this.POST_INBAOCAO_CTIET_KHDON_SOTHANG = 'InBaoCao_CTiet_KHDon_SoThang';
  }
  static {
    this.POST_INBAOCAO_THOP_HOADON = 'Inbaocao_thop_hoadon';
  }
  static {
    this.POST_INBAOCAO_THOP_SSAI_LOAIDCHINH = 'Inbaocao_thop_ssai_loaidchinh';
  }
  static {
    this.POST_INBAOCAO_THOP_NGANHNGHE = 'Inbaocao_thop_nganhnghe';
  }
  static {
    this.POST_INBAOCAO_THOP_GIA = 'Inbaocao_thop_gia';
  }
  static {
    this.POST_INBAOCAO_THOP_TRAM = 'Inbaocao_thop_tram';
  }
  static {
    this.POST_INBAOCAO_THOP_NGAYGCS = 'Inbaocao_thop_ngaygcs';
  }
  static {
    this.POST_INBAOCAO_THOP_CAPDA = 'Inbaocao_thop_capda';
  }
  static {
    this.POST_INBAOCAO_THOP_NHOMKH = 'Inbaocao_thop_nhomkh';
  }
  static {
    this.POST_INBAOCAO_THOP_NHOMNN = 'Inbaocao_thop_nhomnn';
  }
  static {
    this.POST_INBAOCAO_THOP_TO = 'Inbaocao_thop_to';
  }
  static {
    this.POST_INBAOCAO_TDOI_NGAY_GHI = 'InBaoCaoTDoiNgayGhi';
  }
  static {
    this.POST_INSERT_TTINJOB = 'Insert_TTinJob';
  }
  static {
    this.POST_SPKIEMTRA_DIEUKIEN_THOPBCCHUNG = 'spKiemTraDieuKienThopBCChung';
  }
  static {
    this.POST_DS_HISTORY = 'ds_History';
  }
  static {
    this.POST_INBAOCAO_CTIET_THONGKEDTT1 = 'Inbaocao_ctiet_thongkedtt1';
  }
  static {
    this.POST_INBAOCAO_CTIET_THONGKEDTT = 'Inbaocao_ctiet_thongkedtt';
  }
  static {
    this.GET_TTINJOB = 'getTTinJob';
  }
  static {
    this.POST_INBAOCAO_THOP_SOGCS = 'Inbaocao_thop_sogcs';
  }
  static {
    this.POST_INBAOCAO_THOP_DONVI = 'Inbaocao_thop_donvi';
  }
  static {
    this.POST_INBAOCAO_CTDD = 'InBaocaoCTDD';
  }
  static {
    this.POST_INBAOCAO_THDD = 'InBaocaoTHDD';
  }
  static {
    this.POST_TH_BCAO_HDONG = 'th_Bcao_hdong';
  }
  static {
    this.GET_BCAOCTIETKHANGDUNG_TTOANDMT = 'getBcaoCTietKhangDungTToanDMT';
  }
  static {
    this.GET_BCAO_QTRI = 'getBCaoQuantri';
  }
  static {
    this.GET_BCAOCTIET_BIENDONGKHANG_27 = 'getBcaoCTietBienDongKhang_27';
  }
  static {
    this.GET_BANGKETHANHTOAN_TIENDIENMTAM = 'th_Bcao_hdong';
  }
  static {
    this.GET_BAOCAO_TONGHOPDIENMTMN = 'getBaocaoTongHopDienMTMN';
  }
  static {
    this.POST_GET_BCCT_3_8_DSACH_KHANG_TNNS = 'getBcCt_3_8_DSach_Khang_TNNS';
  }
  static {
    this.POST_GET_BCCT2_2_4_KHANG_CDUNG = 'getBcCt2_2_4_KHang_CDung';
  }
  static {
    this.POST_GET_BCCT2_2_1_NHOMTHEOTOTHU = 'getBcCt2_2_1_NhomTheoToThu';
  }
  static {
    this.POST_GET_DATA_BCNOKDOI = 'getDataBCNoKDoi';
  }
  static {
    this.POST_LAY_TTINKHANG = 'layTtinKhang';
  }
  static {
    this.GET_BCCTMAU_6_CTIETTHO = 'getBcctMau_6_CTietTho';
  }
  static {
    this.GET_BCCTMAU_6_CTIETHTHU = 'getBcctMau_6_CTietHThu';
  }
  static {
    this.GET_BCCTMAU_4_KHANGCOTTHUA = 'getBcctMau_4_KHangCoTThua';
  }
  static {
    this.POST_CNO_BCCT = 'CNO_BCCT';
  }
  static {
    this.BAO_CAOCONGNO_GTHUQTOAN = 'baoCaoCongNoGthuQtoan';
  }
  static {
    this.GET_BCTHMAU5_3_TUOINOPHAITRA = 'getBcthMau5_3TuoiNoPhaiTra';
  }
  static {
    this.GET_BCTHMAU5_2_TUOINOPHAITHU = 'getBcthMau5_2TuoiNoPhaiThu';
  }
  static {
    this.GET_BCTHMAU5_1_TUOINOTCT = 'getBcthMau5_1TuoiNoTCT';
  }
  static {
    this.GET_BCTHMAU4_1_THOPTONTHEOSOGCS = 'getBcthMau4_1THopTonTheoSoGCS';
  }
  static {
    this.GET_BCTHMAU3_6_TILETHU = 'getBcthMau3_6TiLeThu';
  }
  static {
    this.GET_BCTHMAU3_5_THINHTHUTHEOTO = 'getBcthMau3_5THinhThuTheoTo';
  }
  static {
    this.GET_BCTHMAU3_4_PTSODUTHEOTUOINO = 'getBcthMau3_4PTSoDuTheoTuoiNo';
  }
  static {
    this.GET_BCTHMAU3_3_THINHTHUTHEOSOGCS = 'getBcthMau3_3THinhThuTheoSoGCS';
  }
  static {
    this.GET_BCTHMAU3_2_THINHTHUTHEOLOAIKHANG = 'getBcthMau3_2THinhThuTheoLoaiKHang';
  }
  static {
    this.GET_BCTHMAU3_1_THOPTHUTHEOHTTHU = 'getBcthMau3_1THopThuTheoHTThu';
  }
  static {
    this.GET_BCTHMAU2_10_THOPDUOCTHO = 'getBcthMau2_10THopDuocTHo';
  }
  static {
    this.GET_BCTHMAU2_11_THOPSOTHUQUA_TCTG = 'getBcthMau2_11THopSoThuQuaTCTG';
  }
  static {
    this.GET_BCTHMAU2_10_THOPTHO = 'getBcthMau2_10THopTHo';
  }
  static {
    this.GET_BCTHMAU2_10_THOPHTHU = 'getBcthMau2_10THopHThu';
  }
  static {
    this.GET_BCTHMAU2_9_THOPKQUACHAM_THEOTNVIEN = 'getBcthMau2_9THopKQuaChamTheoTNVien';
  }
  static {
    this.GET_BCTHMAU2_8_THOPKQUACHAM = 'getBcthMau2_8THopKQuaCham';
  }
  static {
    this.GET_BCTHMAU2_7_THOPTHU_THEOMOCTGIAN = 'getBcthMau2_7THopThuTheoMocTGian';
  }
  static {
    this.GET_BCTHMAU2_6_THOPTHU_THEOTO = 'getBcthMau2_6THopThuTheoTo';
  }
  static {
    this.GET_BCTHMAU2_5_THOPTHUTHEO_SOGCS = 'getBcthMau2_5THopThuTheoSoGCS';
  }
  static {
    this.GET_BCTHMAU2_4T_HOPTHUTHEO_LOAIDVU = 'getBcthMau2_4THopThuTheoLoaiDVu';
  }
  static {
    this.GET_BCTHMAU2_3_THOPTHU_THEODVI = 'getBcthMau2_3THopThuTheoDVi';
  }
  static {
    this.GET_BCTHMAU2_2_THOP_THUTHEO_TNV = 'getBcthMau2_2THopThuTheoTNV';
  }
  static {
    this.GET_BCTHMAU2_1_THOP_THU_THEONGAY = 'getBcthMau2_1THopThuTheoNgay';
  }
  static {
    this.GET_BCTHMAU1_2T_HOP_PSINH_TOTHU = 'getBcthMau1_2THopPSinhToThu';
  }
  static {
    this.GET_BCTH_MAU1_1T_HOP_PSINH_HTTHU = 'getBcthMau1_1THopPSinhHTThu';
  }
  static {
    this.GET_BCTH_MAU2_2 = 'getBcthMau2_2';
  }
  static {
    this.GET_BCTH_MAU2_1 = 'getBcthMau2_1';
  }
  static {
    this.GET_BCTH_MAU1_1 = 'getBcthMau1_1';
  }
  static {
    this.GET_THOI_GIAN = 'getthoigian';
  }
  static {
    this.GET_KSOAT_CSO_BTHUONG = 'getKsoatCsoBThuong';
  }
  static {
    this.POST_GET_MA_DANHMUC_THANGNAM = 'getMaDanhMuc_thangnam';
  }
  static {
    this.POST_BAO_CAO_CTIET_CHISO = 'baoCaoCtietChiso';
  }
  static {
    this.POST_GET_MA_DANH_MUC = 'getMaDanhMuc';
  }
  static {
    this.POST_IN_HDONG = 'InHDong';
  }
  static {
    this.POST_KH_HETHLUC_FULL = 'GetKHHetHLucFull';
  }
  static {
    this.POST_GET_SO_TIEN_THANH_TOAN = 'getSoTienThanhToan';
  }
  static {
    this.POST_LIST_TTIN_QTOAN_MTMN = 'GetListTTinQToanMTMN';
  }
  static {
    this.POST_TRACUU_TTIN_KHANG = 'traCuuTtinKhang';
  }
  static {
    this.POST_QUANHE_TRUPHU = 'getQuanHeTruPhu';
  }
  static {
    this.POST_QUANHE_GHEPTONG = 'getQuanHeGhepTong';
  }
  static {
    this.POST_QUANHE_TRUPHU_BS = 'getQuanHeTruPhuBS';
  }
  static {
    this.POST_QUANHE_GHEP_TONGBS = 'getQuanHeGhepTongBS';
  }
  static {
    this.POST_GET_HDG_BBAN_APGIA_BY_MINNGAYDK = 'getHdgBBanApGiaByMinNgayDK';
  }
  static {
    this.POST_IN_BC_THOP = 'InBCThop';
  }
  static {
    this.POST_UPDATE_PAGE = 'UpdatePage';
  }
  static {
    this.POST_ADD_PAGE = 'addPage';
  }
  static {
    this.POST_DELETE_PAGE = 'deletePage';
  }
  static {
    this.POST_UPDATE_ELEMENT = 'UpdateElement';
  }
  static {
    this.POST_LOAD_PAGE = 'LoadPage';
  }
  static {
    this.POST_LOAD_ELEMENT = 'LoadElement';
  }
  static {
    this.POST_LOAD_LOAI_VB = 'LoadLoaiVB';
  }
  static {
    this.POST_GET_KHANG_CMIS_CUSTOMER = 'getKhangCmisCustomer';
  }
  static {
    this.POST_INSERT_CUSTOMER_ERP = 'InsertCustomerERP';
  }
  static {
    this.POST_UPDATE_CUSTOMER_ERP = 'UpdateCustomerERP';
  }
  static {
    this.POST_DELE_CMIS_CUSTOMER_ERP = 'DeleCmisCustomerERP';
  }
  static {
    this.POST_INBAOCAO_THOP_KH_TRAMSAC = 'Inbaocao_Thop_KHTramSac';
  }
  static {
    this.POST_INBAOCAO_CTIET_KH_TRAMSAC = 'Inbaocao_Ctiet_KHTramSac';
  }
  static {
    this.POST_INBAOCAO_CTIET_KH2P = 'inBaoCaoCTietKH2P';
  }
  static {
    this.POST_INBAOCAO_THOP_KH2P = 'inBaoCaoTHopKH2P';
  }
  static {
    this.GET_BCTH_MAU6_1 = 'getBCTHopPsinhNKD';
  }
  static {
    this.GET_BCTH_MAU6_2 = 'getBCTHopTuoiNoNKD';
  }
}
class API_BCAOLICHSU {
  static {
    this.GET_SEARCH_TBI_GUI = 'getSearchTbiGui';
  }
  static {
    this.GET_CHI_SO_BY_MA_CTO = 'getChisobyMaCto';
  }
  static {
    this.GET_BBAN_TR_THAO = 'getBBanTrThao';
  }
  static {
    this.GET_TTIN_PBO_TBI = 'getTtinPboTbi';
  }
  static {
    this.GET_SEARCH_TBI_TLY = 'get_SearchTbi_Tly';
  }
  static {
    this.POST_GET_BBAN_GIAO_PH_DC_LSU = 'get_BBan_GiaoPH_DC_LSu';
  }
  static {
    this.POST_GET_BBAN_GIAO_PH_LSU = 'get_BBan_GiaoPH_LSu';
  }
  static {
    this.POST_GET_HDON_LSU_TINHLAIBYMAKHANG = 'GetHDonLSU_TinhLaiByMaKHang';
  }
  static {
    this.POST_GET_CHI_SO_DDO = 'getchisoddo';
  }
  static {
    this.POST_GET_THONG_TIN_HDON = 'getthongtinHDon';
  }
  static {
    this.POST_GET_THONG_TIN_HDON_CTIET = 'getthongtinHDonCtiet';
  }
  static {
    this.POST_GET_HD_LAP_THONG_BAO_LAN1 = 'getHD_Lapthongbaolan1';
  }
  static {
    this.POST_GET_THONG_TIN_CS = 'getthongtinCS';
  }
  static {
    this.POST_GET_THONG_TIN_HD_DC = 'getthongtinHD_dc';
  }
  static {
    this.POST_GET_THONG_TIN_HD = 'getthongtinHD';
  }
  static {
    this.POST_GET_THONG_TIN_NGAY_PH_DC = 'getthongtinngayph_dc';
  }
  static {
    this.POST_GET_THONG_TIN_NGAY_PH = 'getthongtinngayph';
  }
  static {
    this.POST_GET_LICH_GCS_TTHAI = 'getLichgcsTthai';
  }
  static {
    this.POST_GET_CHI_SO_DDO_SG = 'getchisoddo_sg';
  }
  static {
    this.POST_GET_HDN_HDON_COS_FI = 'getHdnHdoncosfi';
  }
  static {
    this.POST_GET_GIA_BAN_DIEN_DC = 'getGiaBanDienDc';
  }
  static {
    this.POST_GET_GIA_BAN_DIEN = 'getGiaBanDien';
  }
  static {
    this.POST_GET_HDN_CHI_SO_DC = 'getHdnChisoDc';
  }
  static {
    this.POST_GET_CHI_SO = 'getChiSo';
  }
  static {
    this.POST_GET_HDN_HDON_CTIET = 'getHdnHdonctiet';
  }
  static {
    this.POST_GET_HDN_HDON = 'getHdnHdon';
  }
  static {
    this.POST_GET_TIEP_NHAN_LICH_SU = 'gettiepnhan_lichsu';
  }
  static {
    this.POST_GET_HDON_TIEP_NHAN_SSAI = 'gethdontiepnhanssai';
  }
  static {
    this.POST_GET_SO_XNHAN_LSTSO_BBGN = 'getSoXNhanLstSo_BBGN';
  }
  static {
    this.POST_GET_BBAN_DA_QTOAN = 'getBBanDaQToan';
  }
  static {
    this.POST_GET_TTIN_IN_BBAN = 'getTTinInBBan';
  }
  static {
    this.POST_PRINT_BKE_CTIET_GTHU = 'printBKeCTietGThu';
  }
  static {
    this.POST_PRINT_BBAN_GTHU = 'printBBanGThu';
  }
  static {
    this.POST_FIND_SO_GCS_BY_BIEN_BAN = 'findSoGCSByBienBan';
  }
  static {
    this.POST_FIND_BIEN_BAN_GIAO = 'findBienBanGiao';
  }
  static {
    this.POST_TRACUU_TTIN_KHANG_LSUG = 'traCuuTtinKhangLSu';
  }
  static {
    this.POST_GET_GIA_BAN_DIEN_NGAYHHLUC_MKHANG = 'getGiaBanDien_NgayHHluc_MKhang';
  }
  static {
    this.POST_TKIEMHDON_CTIETFORGSMBD = 'TKiemHDon_CtietForGSMBD';
  }
  static {
    this.POST_TKIEM_HDON_FOR_GSMBD = 'TKiemHDonForGsmbd';
  }
}
class API_UDUNG_HTRUONG_HCMC {
  static {
    this.GET_DS_VATTU_ERP = 'getDSVatTuErp';
  }
  static {
    this.CREATE_DS_VATTU_ERP = 'insertVatTuErp';
  }
  static {
    this.UPDATE_DS_VATTU_ERP = 'updateVatTuErp_TheoId';
  }
  static {
    this.DELETE_DS_VATTU_ERP = 'deleteVatTuErp_TheoId';
  }
  static {
    this.GET_DS_KHOVATTU = 'getDanhSachKhoVattu';
  }
  static {
    this.INSERT_THONGTIN_KHOVATTU = 'insertThongtinKhoVattu';
  }
  static {
    this.UPDATE_THONGTIN_KHOVATTU = 'updateThongtinKhoVattu';
  }
  static {
    this.DELETE_THONGTIN_KHOVATTU = 'deleteThongtinKhoVattu';
  }
  static {
    this.GET_DS_VATTUCHUNG = 'getDanhSachVattuChung';
  }
  static {
    this.GET_DS_VATTU = 'getDSVattu';
  }
  static {
    this.GET_DS_VATTU_BY_DONVI = 'getDSVattu_TheoDonVi';
  }
  static {
    this.GET_DS_CPHI_NCONG_BY_DONVI = 'getDSCPNhancong_theoDonVi';
  }
  static {
    this.CREATE_CPHI_NCONG = 'insertCphiNhancong';
  }
  static {
    this.UPDATE_CPHI_NCONG = 'updateCphiNhancong_theoId';
  }
  static {
    this.DELETE_CPHI_NCONG = 'deleteCphiNhancong_theoId';
  }
  static {
    this.GET_DS_CPHI_KSAT_BY_DONVI = 'getDSCPKhaosat_theoDonVi';
  }
  static {
    this.CREATE_CPHI_KSAT = 'insertCphiKhaosat';
  }
  static {
    this.UPDATE_CPHI_KSAT = 'updateCphiKhaosat_theoMaCphiKsat';
  }
  static {
    this.DELETE_CPHI_KSAT = 'deleteCphiKhaosat_theoMaCphiKsat';
  }
  static {
    this.GET_DS_CPHI_VCHUYEN_BY_DONVI = 'getDSCPVanchuyen_theoDonVi';
  }
  static {
    this.CREATE_CPHI_VCHUYEN = 'insertCphiVanchuyen';
  }
  static {
    this.UPDATE_CPHI_VCHUYEN = 'updateCphiVanchuyen_theoMaCphiVchuyen';
  }
  static {
    this.DELETE_CPHI_VCHUYEN = 'deleteCphiVanchuyen_theoMaCphiVchuyen';
  }
  static {
    this.LoadDanhSachDanhMucMauVatTu = 'LoadDanhSachDanhMucMauVatTu';
  }
  static {
    this.LayDanhSachKhoVatTu = 'LayDanhSachKhoVatTu';
  }
  static {
    this.LayDSChiTietMauVatTu = 'LayDSChiTietMauVatTu';
  }
  static {
    this.EditSoLuongVatTu = 'EditSoLuongVatTu';
  }
  static {
    this.ChonThemVaoMauVatTu = 'ChonThemVaoMauVatTu';
  }
  static {
    this.DELETE_TEMP_CT_VATTU = 'deleteTempCTVattu';
  }
  static {
    this.UPDATE_TEMP_CPHI_VATTU = 'updateTempVattu_theoId';
  }
  static {
    this.CREATE_TEMP_CPHI_VATTU = 'insertTempVattu';
  }
  static {
    this.DELETE_TEMP_CPHI_VATTU = 'deleteTempVattu_theoId';
  }
  static {
    this.GET_DS_TEMP_CPHI_NCONG_BY_DONVI = 'getDSTempNhancong_TheoDonVi';
  }
  static {
    this.GET_DS_TEMP_CT_CPHI_NCONG_BY_DONVI = 'getDSChiPhiNhanCong_TheoIdDonVi';
  }
  static {
    this.GET_DS_CHI_TIET_MAU_NHANCONG = 'getDSChiTietMauNhanCong';
  }
  static {
    this.EDIT_SOLUONG_NHANCONG = 'editSoLuongNhanCong';
  }
  static {
    this.UPDATE_TEMP_CPHI_NCONG = 'updateTempNhancong_theoId';
  }
  static {
    this.CREATE_TEMP_CPHI_NCONG = 'insertTempNhancong';
  }
  static {
    this.DELETE_TEMP_CPHI_NCONG = 'deleteTempNhancong_theoId';
  }
  static {
    this.GET_DS_TEMP_CPHI_KSAT_BY_DONVI = 'getDSTempKhaosat_TheoDonVi';
  }
  static {
    this.GET_DS_CHIPHI_KHAOSAT_BYIDDONVI = 'getDSChiPhiKhaosatByIdDonVi';
  }
  static {
    this.GET_DS_TEMP_CT_CPHI_KSAT_BY_DONVI = 'getDSChiPhiKhaosatByIdDonVi';
  }
  static {
    this.UPDATE_TEMP_CPHI_KSAT = 'updateTempKhaosat_theoId';
  }
  static {
    this.CREATE_TEMP_CPHI_KSAT = 'insertTempKhaosat';
  }
  static {
    this.DELETE_TEMP_CPHI_KSAT = 'deleteTempKhaosat_theoId';
  }
  static {
    this.GET_DS_TEMP_CPHI_VCHUYEN_BY_DONVI = 'getDSTempVanchuyen_TheoDonVi';
  }
  static {
    this.GET_DS_TEMP_CT_CPHI_VCHUYEN_BY_DONVI = 'getDSChiTietMauVanchuyen';
  }
  static {
    this.UPDATE_TEMP_CPHI_VCHUYEN = 'updateTempVanchuyen_theoId';
  }
  static {
    this.CREATE_TEMP_CPHI_VCHUYEN = 'insertTempVanchuyen';
  }
  static {
    this.DELETE_TEMP_CPHI_VCHUYEN = 'deleteTempVanchuyen_theoId';
  }
  static {
    this.GET_DS_MA_YEUCAU = 'loadDanhSachMaYeuCau';
  }
  static {
    this.GET_DanhSachDonGiaVatTuThiCong = 'LayDanhSachDonGiaVatTuThiCong';
  }
  static {
    this.GET_DanhSachChiTietChiPhiVanChuyen = 'LayDanhSachChiTietChiPhiVanChuyen';
  }
  static {
    this.GET_DanhSachChiTietChiPhiKhaoSat = 'LayDanhSachChiTietChiPhiKhaoSat';
  }
  static {
    this.GET_DanhSachDonGiaNhanCong = 'LayDanhSachBangDonGiaNhanCong';
  }
  static {
    this.GET_DS_DM_GHINHAN = 'getDSDMGhinhan';
  }
  static {
    this.GET_DANHSACHGHINHAN = 'getDSGhinhan';
  }
  static {
    this.GET_THONGTINGHINHAN = 'getTTGhinhan';
  }
  static {
    this.UPDATE_GHINHAN = 'updateGhinhan_theoMakh';
  }
}
class API_AUTH {
  static {
    this.USER_LOGIN = 'login';
  }
  static {
    this.USER_LOGOUT = 'logout';
  }
  static {
    this.REFRESH_TOKEN = 'refreshToken';
  }
}
class API_UTILS {
  static {
    this.GET_KIEM_TRA_KET_NOI_SDPI = 'health';
  }
  static {
    this.POST_KIEM_TRA_TICH_HOP_SDPI = 'tich-hop';
  }
  static {
    this.POST_GET_DANH_MUC_SDPI = 'danh-muc';
  }
  static {
    this.POST_SEND_TICKET_TO_SDPI = 'send';
  }
  static {
    this.POST_UPLOAD_FILE_SDPI = 'attachment';
  }
  static {
    this.GET_DONVI_SDPI = 'org';
  }
}
class SERVICE_GATEWAY {
  static {
    this.REPORT = '/serviceReport/';
  }
  static {
    this.REPORT_SPRING = '/serviceReport/';
  }
  static {
    this.COMMON = '/serviceCommon/';
  }
  static {
    this.COMMON_SPRING = '/serviceCommon/';
  }
  static {
    this.HOSOTBI = '/serviceHoSoTBi/';
  }
  static {
    this.HOSOTBI_SPRING = '/service-hosothietbi/';
  }
  static {
    this.BDONGTBI = '/serviceBDongTBi/';
  }
  static {
    this.BDONGTBI_SPRING = '/serviceBDongTBi/';
  }
  static {
    this.BDONGTTHAO = '/serviceBDongTThao/';
  }
  static {
    this.BDONGTTHAO_SPRING = '/serviceBDongTThao/';
  }
  static {
    this.QLYSOGCS = '/QLySoGCS/';
  }
  static {
    this.QLYSOGCS_SPRING = '/QLySoGCS/';
  }
  static {
    this.CHISOKHANG = '/serviceChiSoKHang/';
  }
  static {
    this.CHISOKHANG_SPRING = '/serviceChiSoKHang/';
  }
  static {
    this.HDONPSINH = '/serviceHDonPSinh/';
  }
  static {
    this.HDONPSINH_SPRING = '/serviceHDonPSinh/';
  }
  static {
    this.HDONDCHINH = '/serviceHDonDChinh/';
  }
  static {
    this.HDONDCHINH_SPRING = '/serviceHDonDChinh/';
  }
  static {
    this.HDONDTU = '/serviceHDonDTu/';
  }
  static {
    this.HDONDTU_SPRING = '/serviceHDonDTu/';
  }
  static {
    this.TTIENCNO = '/serviceTTienCNo/';
  }
  static {
    this.TTIENCNO_SPRING = '/serviceTTienCNo/';
  }
  static {
    this.PHIDCAT = '/servicePhiDCat/';
  }
  static {
    this.PHIDCAT_SPRING = '/servicePhiDCat/';
  }
  static {
    this.KHONO = '/serviceKhoNo/';
  }
  static {
    this.KHONO_SPRING = '/serviceKhoNo/';
  }
  static {
    this.CAYTTHAT = '/serviceCayTThat/';
  }
  static {
    this.CAYTTHAT_SPRING = '/serviceCayTThat/';
  }
  static {
    this.CHISOTTHAT = '/serviceChiSoTThat/';
  }
  static {
    this.CHISOTTHAT_SPRING = '/serviceChiSoTThat/';
  }
  static {
    this.GNHANDNANG = '/serviceGNhanDNang/';
  }
  static {
    this.GNHANDNANG_SPRING = '/serviceGNhanDNang/';
  }
  static {
    this.QTRIHTHONG = '/serviceQTriHThong/';
  }
  static {
    this.QTRIHTHONG_SPRING = '/serviceQTriHThong/';
  }
  static {
    this.SMS = '/serviceSMS/';
  }
  static {
    this.SMS_SPRING = '/serviceSMS/';
  }
  static {
    this.EMAIL = '/serviceEmail/';
  }
  static {
    this.EMAIL_SPRING = '/serviceEmail/';
  }
  static {
    this.TBIHTRUONG = '/serviceTbiHTruong/';
  }
  static {
    this.TBIHTRUONG_SPRING = '/serviceTbiHTruong/';
  }
  static {
    this.KTRAGSATMBD = '/serviceKTraGSatMBD/';
  }
  static {
    this.KTRAGSATMBD_SPRING = '/serviceKTraGSatMBD/';
  }
  static {
    this.BANLEDNANG = '/serviceBanLeDNang/';
  }
  static {
    this.BANLEDNANG_SPRING = '/serviceBanLeDNang/';
  }
  static {
    this.BCAOLICHSU = '/serviceBCaoLichSu/';
  }
  static {
    this.BCAOLICHSU_SPRING = '/serviceBCaoLichSu/';
  }
  static {
    this.QTRIDHANH = '/serviceQTriDHanh/';
  }
  static {
    this.QTRIDHANH_SPRING = '/serviceQTriDHanh/';
  }
  static {
    this.DIENNTHON = '/serviceDienNThon/';
  }
  static {
    this.DIENNTHON_SPRING = '/serviceDienNThon/';
  }
  static {
    this.CSBT = '/serviceCSBT/';
  }
  static {
    this.CSBT_SPRING = '/serviceCSBT/';
  }
  static {
    this.EVNHUB = '/serviceEVNHUB/';
  }
  static {
    this.EVNHUB_SPRING = '/serviceEVNHUB/';
  }
  static {
    this.EVNID = '/evnid/';
  }
  static {
    this.UDUNGHTRUONGHCMC = '/serviceUDungHTruong/';
  }
  static {
    this.UDUNGHTRUONGHCMC_SPRING = '/serviceUDungHTruong/';
  }
  static {
    this.DICHVU = '/serviceDichVu/';
  }
  static {
    this.DICHVU_SPRING = '/service-dichvu/';
  }
  static {
    this.FILEDTU = '/serviceFileDTu/';
  }
  static {
    this.FILEDTU_SPRING = '/service-filedientu/';
  }
  static {
    this.HOPDONG = '/serviceHopDong/';
  }
  static {
    this.HOPDONG_SPRING = '/service-hopdong/';
  }
  static {
    this.INTERFACE = '/serviceInterface/';
  }
  static {
    this.INTERFACE_SPRING = '/service-interfaces/';
  }
  static {
    this.DANHMUC = '/serviceDanhMuc/';
  }
  static {
    this.DANHMUC_SPRING = '/service-danhmuc/';
  }
  static {
    this.BCAOTHANG = '/serviceBCaoThang/';
  }
  static {
    this.BCAOTHANG_SPRING = '/service-baocaothang/';
  }
  static {
    this.AUTH = '/serviceAuth/';
  }
  static {
    this.AUTH_SPRING = '/service-auth/';
  }
  static {
    this.QUANLYTHUHO = '/service-quanlythuho/';
  }
  static {
    this.QUANLYTIEPNHANLUOIDIEN = '/service-quanlytiepnhanluoidien/';
  }
  static {
    this.NOKHODOI = '/service-nokhodoi/';
  }
  static {
    this.DIENMATTROI = '/service-dienmattroi/';
  }
  static {
    this.UTILS = '/service-utils/';
  }
}

/***/ }),

/***/ 61836:
/*!****************************************!*\
  !*** ./src/app/cmis4/cmis4.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cmis4Service: () => (/* binding */ Cmis4Service)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 12498);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 99437);
/* harmony import */ var _apiURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiURL */ 72676);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../site/loading/loading.service */ 97230);
/* harmony import */ var _share_services_authV2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/services/authV2.service */ 50532);











class Cmis4Service {
  constructor(plus, loadSV, authSV, httpClient) {
    this.plus = plus;
    this.loadSV = loadSV;
    this.authSV = authSV;
    this.httpClient = httpClient;
    this.user = localStorage.USERCMIS ? JSON.parse(localStorage.USERCMIS) : null;
    this.axiosInstance = axios__WEBPACK_IMPORTED_MODULE_6__["default"].create({
      baseURL: '',
      timeout: 10000
    });
    this.setupInterceptors();
  }
  loopRequest(arr, fn) {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(arr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concatMap)(el => fn(el))).subscribe();
  }
  base() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = '';
      const body = {};
      const path = new URL(url).pathname;
      return _this.cmis4Request(url, path, body);
    })();
  }
  TimKiemKHangMTMN(MA_KHANG) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceHopDong/TimKiemKHangMTMN';
      const body = {
        "MA_DVIQLY": _this2.getUser().SUBDIVISIONID,
        "CACH_TKIEM": 1,
        "TTIN_TKIEM": MA_KHANG,
        "LOAI_CSUAT_TK": 0,
        "LOAI_KHANG_TK": 0
      };
      const path = new URL(url).pathname;
      return _this2.cmis4Request(url, path, body);
    })();
  }
  InsertGCS_CHISO_PTRA(body) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/InsertGCS_CHISO_PTRA';
      const path = new URL(url).pathname;
      return _this3.cmis4Request(url, path, body);
    })();
  }
  get_CHISO_PHUCTRA_forNhap(maso) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_DVIQLY": _this4.getUser().SUBDIVISIONID,
        "MA_TTCTO": "",
        "DA_NHAP": "val1",
        "KY": "1",
        "LST_MASO": maso,
        "LST_MATRAM": [],
        "THANG": moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(1, 'month').format('M'),
        "NAM": moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(1, 'month').format('YYYY')
      };
      const url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/get_CHISO_PHUCTRA_forNhap';
      const path = new URL(url).pathname;
      return _this4.cmis4Request(url, path, body);
    })();
  }
  setupInterceptors() {
    var _this5 = this;
    this.axiosInstance.interceptors.response.use(response => response, /*#__PURE__*/function () {
      var _ref = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        const config = error.config;
        const maxRetries = config.retry ?? 3;
        const delay = config.retryDelay ?? 1000;
        if (!config || maxRetries <= 0) return Promise.reject(error);
        config.__retryCount = config.__retryCount || 0;
        if (config.__retryCount >= maxRetries) {
          return Promise.reject(error);
        }
        config.__retryCount += 1;
        console.warn(`Retry lần ${config.__retryCount} cho: ${config.url}`);
        yield new Promise(resolve => setTimeout(resolve, delay));
        return _this5.axiosInstance(config);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  getV2(url, config) {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this6.axiosInstance.get(url, config);
      return response.data;
    })();
  }
  postV2(url, data, config) {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this7.axiosInstance.post(url, data, config);
      return response.data;
    })();
  }
  InBCThop() {}
  getDiemDo(maTram) {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceCayTThat/getDiemDo';
      const body = {
        "MA_DVIQLY": "PK0500",
        "MA_DDO": "",
        "MA_TRAM": _this8.convertMaTram(maTram),
        "MA_LO": "ALL",
        "TEN_DDO": "ALL",
        "TRANG_THAI": 1
      };
      return _this8.cmis4Request(url, url, body);
    })();
  }
  layGiaoThu() {
    var _this9 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ms = yield _this9.findMaSoGCS();
      const url = 'https://cmis-api.evnspc.vn/serviceTTienCNo/findHoaDonGiao';
      const body = {
        "MA_DVIQLY": "PK0500",
        "KY": 1,
        "THANG_HT": moment__WEBPACK_IMPORTED_MODULE_2___default()().format('M'),
        "NAM_HT": moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY'),
        "THANG": moment__WEBPACK_IMPORTED_MODULE_2___default()().format('MM'),
        "NAM": moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY'),
        "MA_SOGCS": ms,
        "MA_KHANG": "",
        "CHECKED_KHTT": false,
        "STT_TRANG": "",
        "CHECK_KVUC": "KO",
        "KHU_VUC": [],
        "STT_KHANG": "",
        "STT_KHANG_DEN": "",
        "NGANH_HANG": [],
        "HDON_ID": "",
        "HDON_TYPE": "0",
        "HTTT": ["0", "A1", "AT", "BC", "BD", "BL", "CK", "CQ", "DL", "DT", "DTHU", "KI", "KN", "KO", "KQ", "KT", "LD", "MB", "NH", "PS", "QC", "QN", "QNH", "TD", "TH", "TM", "TN", "TQ", "UC", "UT", "UC", "UT", "UC", "UT"],
        "HDONCU_TYPE": 0,
        "CHECKED_KHODOI": false
      };
      return _this9.cmis4Request(url, '', body);
    })();
  }
  findMaSoGCS() {
    var _this0 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceTTienCNo/findMaSoGCS';
      const body = {
        "MA_DVIQLY": "PK0500",
        "MA_TNGAN": "ALL",
        "HDON_TYPE": "0",
        "THANG_HT": moment__WEBPACK_IMPORTED_MODULE_2___default()().format('M'),
        "NAM_HT": moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY'),
        "HTTT": []
      };
      return _this0.cmis4Request(url, '', body);
    })();
  }
  decipher(salt) {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g).map(hex => parseInt(hex, 16)).map(applySaltToChar).map(charCode => String.fromCharCode(charCode)).join('');
  }
  cipher(salt) {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ('0' + Number(n).toString(16)).padStart(2, '0');
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
    return text => text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
  }
  layDvTienTrinhTheoDdo() {
    var _this1 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {};
      const url = '';
      const path = new URL(url).pathname;
      return _this1.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  themTtinKhang(body) {
    var _this10 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceHopDong/themTtinKhang';
      const path = new URL(url).pathname;
      return _this10.cmis4Request(url, path, body).then(v => {
        console.log(v);
        _this10.plus.alertSuccess();
        return v;
      });
    })();
  }
  capnhatTienTiepNhan(body) {
    var _this11 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceDichVu/capnhatTienTiepNhan';
      const path = new URL(url).pathname;
      return _this11.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  layDvTienTiepNhanTheoTinhTrang(maYeuCau) {
    var _this12 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "TINH_TRANG": "-1",
        "MA_DVIQLY": "PK0500",
        "MA_YCAU_KNAI": maYeuCau
      };
      const url = 'https://cmis-api.evnspc.vn/serviceDichVu/layDvTienTiepNhanTheoTinhTrang';
      const path = new URL(url).pathname;
      return _this12.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  bcHD22(tungay, denngay) {
    var _this13 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_DVIQLY": "PK0500",
        "MA_TO": "ALL",
        "BIEU": "22",
        "TEN_TCHI": "ALL",
        "TU_NGAY": tungay,
        "DEN_NGAY": denngay,
        "LOAI_KHANG": "-1",
        "LOAI_HDONG": "**ALL**",
        "LOAI_DDO": "0",
        "MA_NN": "**ALL**",
        "PLOC": "SOME"
      };
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/InBCThop';
      const path = new URL(url).pathname;
      return _this13.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getSaoLucChiSoCT(maKH, tuNgay, denNgay) {
    var _this14 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_DVIQLY": "PK0500",
        "MA_KHANG": maKH,
        "TU_NGAY": tuNgay,
        "DEN_NGAY": denNgay,
        "NGAY_CKY": " ",
        "KH_DDO": "K"
      };
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/getSaoLucChiSoCT';
      const path = new URL(url).pathname;
      return _this14.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getSaoLucChiSo(maKH, tuNgay, denNgay) {
    var _this15 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_DVIQLY": "PK0500",
        "MA_KHANG": maKH,
        "TU_NGAY": tuNgay,
        "DEN_NGAY": denNgay,
        "NGAY_CKY": "01/01/2001",
        "KHAI_THAC": "",
        "KH_DDO": "K"
      };
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/getSaoLucChiSo';
      const path = new URL(url).pathname;
      return _this15.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getRandomNV() {
    const arr = ['spc2\\truongnd1.dn', 'spc2\\trungvl.dn', 'spc2\\thuttt.dn', 'spc2\\ancn.dn', 'spc2\\nhatdm.dn', 'spc2\\phongna.dn', 'spc2\\linhnc.dn', 'spc2\\luonglv1.dn', 'spc2\\tranglc.dn', 'spc2\\nhadt.dn', 'spc2\\dungph.dn', 'spc2\\anhnh2.dn', 'spc2\\hoangnk.dn', 'spc2\\tuanna3.dn', 'spc2\\viettq1.dn', 'spc2\\sunglq.dn', 'spc2\\hieunq2.dn', 'spc2\\hieult.dn', 'spc2\\hattn.dn', 'spc2\\truongdb.dn'];
    return arr[Math.floor(Math.random() * arr.length)];
  }
  timKiemYeuCau(_x2) {
    var _this16 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (maKH, loaiYcau = '') {
      const tuNgay = moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(30, 'days').format('DD/MM/YYYY');
      const denNgay = moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD/MM/YYYY');
      const body = {
        "strMaDviqly": "PK0500",
        "loaiYcau": loaiYcau,
        "maYcau": "",
        "strTNTuNgay": tuNgay,
        "strTNDenNgay": denNgay,
        "daTN": true,
        "buocThien": "",
        "nguoiYcau": "",
        "kieuNgay": "",
        "diaChi": "",
        "dauTuCT": 0,
        "tuNgay": tuNgay,
        "denNgay": denNgay,
        "mucDich": -1,
        "thuanLoi": 1,
        "maKhang": maKH,
        "sNgayND": "0"
      };
      const url = 'https://cmis-api.evnspc.vn/serviceDichVu/timKiemYeuCau';
      const path = new URL(url).pathname;
      return _this16.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    }).apply(this, arguments);
  }
  DataPhanHeCapDien(maYeuCau) {
    var _this17 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceDichVu/DataPhanHeCapDien';
      const body = {
        'DanhSachYeuCau': [{
          'MA_DVIQLY': 'PK0500',
          'MA_YCAU_KNAI': maYeuCau
        }],
        'DanhSachBang': ['CD_BBAN_APGIA', 'CD_DDO_DDIEN', 'CD_DIEM_DO', 'CD_KHANG_LIENHE', 'DV_HDONG_DTHAO', 'DV_YEU_CAU', 'DV_TIEN_TRINH', 'CD_HO_DCHUNG', 'CD_GTO_HDCHUNG', 'DV_TIEN_TNHAN', 'CD_PHU_LUC_HD', 'CD_BDO_PTAI', 'CD_BDPTAI_CTIET', 'CD_CA_SUDUNG', 'HDG_KHANG_EVN_C06']
      };
      const path = new URL(url).pathname;
      return _this17.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getDataDuThao(maYeuCau, loaiHD) {
    var _this18 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceInterface/getTTinDThao';
      const params = {
        "MA_DVIQLY": "PK0500",
        "MA_YCAU_KNAI": maYeuCau,
        "MA_DTUONG_CHA": loaiHD
      };
      return _this18.cmis4Request(url, '', params);
    })();
  }
  getKyQuy(maYeuCau) {
    var _this19 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceDichVu/layCauHinhThongTinXuLy';
      const params = {
        "MA_YCAU_KNAI": maYeuCau,
        "MA_DVIQLY": "PK0500",
        "MA_CVIEC": "KT",
        "MA_LOAI_YCAU": "CDHA_D"
      };
      return _this19.cmis4Request(url, '', params).then(v => {
        const duthao = v.DV_TTIN_XLY_LST;
        const HTHUC_DBAO_HDONG = duthao.find(v => v.MA_TTIN == 'HTHUC_DBAO_HDONG') ? duthao.find(v => v.MA_TTIN == 'HTHUC_DBAO_HDONG').GIA_TRI : '';
        const SO_TIEN_DBAO_HDONG = duthao.find(v => v.MA_TTIN == 'TIEN_DBAO_HDONG') ? +duthao.find(v => v.MA_TTIN == 'TIEN_DBAO_HDONG').GIA_TRI : '';
        const GIAY_KDOANH = duthao.find(v => v.MA_TTIN == 'GIAY_KDOANH') ? duthao.find(v => v.MA_TTIN == 'GIAY_KDOANH').GIA_TRI : '';
        const DVI_CAP_KDOANH = duthao.find(v => v.MA_TTIN == 'DVI_CAP_KDOANH') ? duthao.find(v => v.MA_TTIN == 'DVI_CAP_KDOANH').GIA_TRI : '';
        const NGAY_CAP_KDOANH = duthao.find(v => v.MA_TTIN == 'NGAY_CAP_KDOANH') ? duthao.find(v => v.MA_TTIN == 'NGAY_CAP_KDOANH').GIA_TRI : '';
        return {
          HTHUC_DBAO_HDONG,
          SO_TIEN_DBAO_HDONG,
          GIAY_KDOANH,
          DVI_CAP_KDOANH,
          NGAY_CAP_KDOANH
        };
      });
    })();
  }
  getDanhMuc() {
    var _this20 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_DVIQLY": "PK0500",
        "TEN_DANH_MUC": "D_LOAI_YCAU"
      };
      const url = 'https://cmis-api.evnspc.vn/serviceDanhMuc/getDanhMuc';
      const path = new URL(url).pathname;
      return _this20.cmis4Request(url, path, body).then(v => {
        console.log(v);
        localStorage.setItem('DanhMucDichVu', JSON.stringify(v.LST_OBJ));
        return v.LST_OBJ;
      }).catch(err => {
        console.error('Error fetching danh mục:', err);
        throw err;
      });
    })();
  }
  downloadFilePDF(service, api, ignoreLoading, typeService) {
    try {
      service = this.getURLService(service, typeService);
      const url = `${service}${api}`;
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders();
      headers = headers.set('Accept', 'application/pdf');
      return this.httpClient.get(url, {
        headers,
        responseType: 'blob'
      });
    } catch (error) {
      document.body.style.cursor = 'default';
      return error?.error ?? null;
    }
  }
  GetAllListHSoGToOfKHang(MA_KHANG) {
    var _this21 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_DVIQLY": _this21.user.SUBDIVISIONID,
        "MA_KHANG": MA_KHANG
      };
      const url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/GetAllListHSoGToOfKHang';
      const path = '/serviceChiSoKHang/GetAllListHSoGToOfKHang';
      return _this21.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      }).catch(err => {
        console.error('Error fetching data:', err);
        throw err;
      });
    })();
  }
  ExcuteNhapCSDDK(body) {
    var _this22 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/ExcuteNhapCS';
      const path = '/serviceChiSoKHang/ExcuteNhapCS';
      return _this22.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  get_gcslichgcsByMaSogcs(maso, thang, nam) {
    var _this23 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/get_gcslichgcsByMaSogcs';
      const path = '/serviceChiSoKHang/get_gcslichgcsByMaSogcs';
      const body = {
        "MA_SOGCS": maso,
        "MA_DVIQLY": "PK0500",
        "THANG": thang,
        "NAM": nam,
        "KY": "0"
      };
      return _this23.cmis4Request(url, path, body).then(v => {
        return v[0];
      });
    })();
  }
  getSoGCSByListSo(maso) {
    var _this24 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "TEN_DANH_MUC": "D_SOGCS",
        "MA_DVIQLY": "PK0500",
        "PARAM": [maso]
      };
      _this24.loadSV.load('getSoGCSByListSo');
      const url = 'https://cmis-api.evnspc.vn/serviceDanhMuc/getSoGCSByListSo';
      const httpOptions = {
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this24.getUser().ACCESS_TOKEN
      };
      _this24.plus.alertMatSnackBar(`Đang lấy dữ liệu ...`);
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this24.handleErrCmis(res);
        _this24.loadSV.loaded('getSoGCSByListSo');
        _this24.plus.alertSuccess(``);
        return res['data'].ListVaL[0];
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this24.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this24.authSV.reload('/cmis4');
        _this24.loadSV.clear();
        console.log(err);
        return null;
      });
    })();
  }
  postData(service, api, inputData, ignoreLoading, typeService) {
    var _this25 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = _this25.getURLService(service, typeService);
      const url = `${service}${api}`;
      const path = new URL(url).pathname;
      return _this25.cmis4Request(url, path, inputData).catch(err => {
        console.log(err);
        _this25.handleError(err);
      });
    })();
  }
  getOptionsRequest(ignoreLoading, responseType) {
    const options = {};
    if (ignoreLoading != undefined && ignoreLoading) {
      options.reportProgress = true;
    }
    if (responseType != undefined && responseType) {
      options.responseType = responseType;
    }
    return options;
  }
  getURLService(phanhe, typeService) {
    try {
      const ipAPIGateWay = 'https://cmis-api.evnspc.vn';
      if (typeService && typeService == '1') {
        switch (phanhe) {
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.DICHVU:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.DICHVU_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.FILEDTU:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.FILEDTU_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HOPDONG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HOPDONG_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HOSOTBI:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HOSOTBI_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BDONGTBI:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BDONGTBI_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BDONGTTHAO:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BDONGTTHAO_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QLYSOGCS:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QLYSOGCS_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.CHISOKHANG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.CHISOKHANG_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HDONPSINH:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HDONPSINH_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HDONDCHINH:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HDONDCHINH_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HDONDTU:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HDONDTU_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.TTIENCNO:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.TTIENCNO_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.NOKHODOI:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.NOKHODOI;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.PHIDCAT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.PHIDCAT_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.KHONO:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.KHONO_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.CAYTTHAT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.CAYTTHAT_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.CHISOTTHAT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.CHISOTTHAT_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.GNHANDNANG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.GNHANDNANG_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QTRIHTHONG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QTRIHTHONG_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.SMS:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.SMS_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.EMAIL:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.EMAIL_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.TBIHTRUONG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.TBIHTRUONG_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.KTRAGSATMBD:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.KTRAGSATMBD_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BANLEDNANG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BANLEDNANG_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.DANHMUC:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.DANHMUC_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BCAOTHANG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BCAOTHANG_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BCAOLICHSU:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BCAOLICHSU_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QTRIDHANH:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QTRIDHANH_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.REPORT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.REPORT_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.COMMON:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.COMMON_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.INTERFACE:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.INTERFACE_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.DIENNTHON:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.DIENNTHON_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.CSBT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.CSBT_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.EVNHUB:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.EVNHUB_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.UDUNGHTRUONGHCMC:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.UDUNGHTRUONGHCMC_SPRING;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.AUTH:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.AUTH;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QUANLYTHUHO:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QUANLYTHUHO;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QUANLYTIEPNHANLUOIDIEN:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QUANLYTIEPNHANLUOIDIEN;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.DIENMATTROI:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.DIENMATTROI;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.UTILS:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.UTILS;
            }
          default:
            {
              return ipAPIGateWay + '/';
            }
        }
      } else {
        switch (phanhe) {
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.DICHVU:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.DICHVU;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.FILEDTU:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.FILEDTU;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HOPDONG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HOPDONG;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HOSOTBI:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HOSOTBI;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BDONGTBI:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BDONGTBI;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BDONGTTHAO:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BDONGTTHAO;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QLYSOGCS:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QLYSOGCS;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.CHISOKHANG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.CHISOKHANG;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HDONPSINH:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HDONPSINH;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HDONDCHINH:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HDONDCHINH;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HDONDTU:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.HDONDTU;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.TTIENCNO:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.TTIENCNO;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.NOKHODOI:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.NOKHODOI;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.PHIDCAT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.PHIDCAT;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.KHONO:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.KHONO;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.CAYTTHAT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.CAYTTHAT;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.CHISOTTHAT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.CHISOTTHAT;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.GNHANDNANG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.GNHANDNANG;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QTRIHTHONG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QTRIHTHONG;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.SMS:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.SMS;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.EMAIL:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.EMAIL;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.TBIHTRUONG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.TBIHTRUONG;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.KTRAGSATMBD:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.KTRAGSATMBD;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BANLEDNANG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BANLEDNANG;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.DANHMUC:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.DANHMUC;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BCAOTHANG:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BCAOTHANG;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.BCAOLICHSU:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.BCAOLICHSU;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QTRIDHANH:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QTRIDHANH;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.REPORT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.REPORT;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.COMMON:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.COMMON;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.INTERFACE:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.INTERFACE;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.DIENNTHON:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.DIENNTHON;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.CSBT:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.CSBT;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.EVNHUB:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.EVNHUB;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.UDUNGHTRUONGHCMC:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.UDUNGHTRUONGHCMC;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.AUTH:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.AUTH;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QUANLYTHUHO:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QUANLYTHUHO;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.QUANLYTIEPNHANLUOIDIEN:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.QUANLYTIEPNHANLUOIDIEN;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.DIENMATTROI:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.DIENMATTROI;
            }
          case _apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.UTILS:
            {
              return ipAPIGateWay + _apiURL__WEBPACK_IMPORTED_MODULE_1__.SERVICE_GATEWAY.UTILS;
            }
          default:
            {
              return ipAPIGateWay + '/';
            }
        }
      }
    } catch (error) {
      console.log('Lỗi lấy IP APT Gate way' + error);
      return error?.error ?? null;
    }
  }
  post(url, payload) {
    var _this26 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this26.loadSV.load(url);
      const httpOptions = {
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this26.getUser().ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, payload, {
        headers: httpOptions
      }).then(v => {
        _this26.plus.alertMatSnackBar(`Đã gửi yêu cầu thành công`);
        _this26.loadSV.loaded(url);
        return v;
      }).catch(err => {
        _this26.loadSV.clear();
        _this26.loadSV.loaded(url);
        if (err.response.status === 401) {
          localStorage.removeItem('USERCMIS');
          _this26.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
          _this26.authSV.reload('/cmis4');
        }
        console.log(err);
        return [];
      });
    })();
  }
  getHSGT(sparam) {
    const url = this.getURLService(_apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.INTERFACE) + 'getHSGT' + sparam;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getUser().ACCESS_TOKEN);
    headers = headers.set('Accept', 'application/pdf');
    return this.httpClient.get(url, {
      headers,
      responseType: 'blob'
    });
  }
  GetBase64HDTHSoUploadByMaYCau(params) {
    const url = 'https://cmis-api.evnspc.vn/serviceInterface/GetBase64HDTHSoUploadByMaYCau';
    const httpOptions = {
      "authority": "cmis-api.evnspc.vn",
      "authorization": "Bearer " + this.getUser().ACCESS_TOKEN
    };
    return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, params, {
      headers: httpOptions
    });
  }
  cmis4Request(url, path, payload) {
    var _this27 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this27.loadSV.load(url);
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this27.getUser().ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, payload, {
        headers: httpOptions
      }).then(v => {
        _this27.loadSV.loaded(url);
        return v.data;
      }).catch(err => {
        _this27.loadSV.clear();
        _this27.loadSV.loaded(url);
        if (err.response.status === 401) {
          localStorage.removeItem('USERCMIS');
          _this27.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
          _this27.authSV.reload('/cmis4');
        }
        console.log(err);
        return [];
      });
    })();
  }
  cmis4RequestObs(url, payload) {
    var _this28 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this28.loadSV.load(url);
      const httpOptions = {
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this28.getUser().ACCESS_TOKEN
      };
      return _this28.httpClient.post(url, payload, {
        headers: httpOptions
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(err => {
        _this28.loadSV.clear();
        _this28.loadSV.loaded(url);
        if (err.response.status === 401) {
          localStorage.removeItem('USERCMIS');
          _this28.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
          _this28.authSV.reload('/cmis4');
        }
        console.log(err);
        return [];
      })).subscribe(v => {
        _this28.loadSV.loaded(url);
        return v.data;
      });
    })();
  }
  cmis4RequestGET(url) {
    var _this29 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const path = new URL(url).pathname;
      _this29.loadSV.load(path);
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this29.getUser().ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url, {
        headers: httpOptions
      }).then(v => {
        _this29.plus.alertMatSnackBar(`Đã gửi yêu cầu thành công`);
        _this29.loadSV.loaded(path);
        return v.data;
      }).catch(err => {
        _this29.loadSV.clear();
        if (err.response.status === 401) {
          localStorage.removeItem('USERCMIS');
          _this29.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
          _this29.authSV.reload('/cmis4');
        }
        console.log(err);
      });
    })();
  }
  cmis4RequestGETPDF(sparam) {
    const url = this.getURLService(_apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.INTERFACE) + 'getHSGT' + sparam;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    headers = headers.set('Authorization', 'Bearer ' + this.getUser().ACCESS_TOKEN);
    return this.httpClient.get(url, {
      headers,
      responseType: 'blob'
    });
  }
  TraCuuThongTinDanCu(SO_DINHDANH, HOTEN_CDAN, NGAY_SINH) {
    var _this30 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this30.loadSV.load('TraCuuThongTinDanCu');
      const url = 'https://cmis-api.evnspc.vn/serviceDichVu/TraCuuThongTinDanCu';
      const httpOptions = {
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this30.getUser().ACCESS_TOKEN
      };
      const body = {
        "SO_DINHDANH": SO_DINHDANH,
        "SO_DDANH_CBO": _this30.user.SO_DINHDANH,
        "SDT_CBO": _this30.user.PHONE,
        "HOTEN_CDAN": HOTEN_CDAN,
        "NGAY_SINH": NGAY_SINH,
        "IS_XMINHCDAN": true,
        "IS_XMINHHKHAU": true,
        "IS_KHLIENHE": false,
        "IS_ONLY": false,
        "STTU_UTIEN": 1,
        "START_INDEX": 1,
        "USER": _this30.user.USERNAME,
        "MA_DVIQLY": _this30.user.SUBDIVISIONID,
        "JWT": _this30.user.ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(v => {
        _this30.loadSV.loaded('lay_TTinHopDongDeKyLai_TheoLoArr');
        return v.data;
      }).catch(err => {
        _this30.handleError(err);
      });
    })();
  }
  capnhatThongTinDTHOAI(maPK, value) {
    var _this31 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ngayhl = moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD/MM/YYYY');
      const nv = _this31.getRandomNV();
      const kh = yield _this31.timKiemKhachHang(maPK);
      if (kh.length == 0) return null;
      const ttkh = yield _this31.layTtinKHangMoinhat(maPK);
      ttkh.HDG_KHACH_HANG[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG[0].NGAY_HLUC = ngayhl;
      ttkh.HDG_KHACH_HANG[0].NGUOI_SUA = nv;
      ttkh.HDG_KHACH_HANG[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG[0]['DTHOAI'] = value;
      ttkh.HDG_KHACH_HANG_U[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG_U[0].NGAY_HHLUC = ngayhl;
      ttkh.HDG_KHACH_HANG_U[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG_U[0]['DTHOAI'] = null;
      const body = {
        HDG_KHACH_HANG: ttkh.HDG_KHACH_HANG,
        HDG_KHACH_HANG_U: ttkh.HDG_KHACH_HANG_U,
        HDG_TDOITTIN: [],
        HDG_TDOITTIN_U: null
      };
      body.HDG_TDOITTIN = [{
        "ID_TDOI": -1,
        "MA_YCAU_KNAI": "",
        "MA_DVIQLY": "PK0500",
        "DCHI_DDIEN": kh[0].DIA_CHI_DDO,
        "DCHI_KHANG": kh[0].DIA_CHI_KH,
        "DLIEU_CU": "",
        "DLIEU_MOI": value,
        "ID_KT_CU": kh[0].ID_KHANG,
        "ID_KT_MOI": "-1",
        "ID_KT_CHA": "",
        "NAMHD": "2025",
        "NAMKH": "2025",
        "THANGHD": "6",
        "THANGKH": "6",
        "TEN_BANG": "HDG_KHACH_HANG",
        "MA_KHANG": maPK,
        "TEN_KHANG": kh[0].TEN_KHANG,
        "MA_DDO": kh[0].MA_DDO,
        "MA_CNANG": "10",
        "NGAY_HLUC": ngayhl,
        "MA_HDONG": kh[0].MA_HDONG,
        "TEN_COT": "MASO_DVIQHNS",
        "NGAY_TAO": moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD/MM/YYYY HH:mm:ss'),
        "NGAY_SUA": moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD/MM/YYYY HH:mm:ss'),
        "NGUOI_TAO": nv,
        "NGUOI_SUA": nv
      }];
      return _this31.themTtinKhang(body);
    })();
  }
  lay_TTinHopDongDeKyLai_TheoLoArr(arr) {
    var _this32 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this32.loadSV.load('lay_TTinHopDongDeKyLai_TheoLoArr');
      const url = "https://cmis-api.evnspc.vn/serviceHopDong/lay_TTinHopDongDeKyLai_TheoLo";
      const path = '/serviceHopDong/lay_TTinHopDongDeKyLai_TheoLo';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this32.getUser().ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, arr, {
        headers: httpOptions
      }).then(v => {
        _this32.loadSV.loaded('lay_TTinHopDongDeKyLai_TheoLoArr');
        return _this32.converTraCuu(v.data);
      }).catch(err => {
        _this32.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this32.loadSV.clear();
        console.log(err);
      });
    })();
  }
  converTraCuu(datas) {
    const outData = [];
    for (let i = 0; i < datas.length; i++) {
      const data = datas[i];
      const body = {};
      body['TenFile'] = data.HDG_HOP_DONG[0].MA_KHANG + '-' + data.HDG_KHACH_HANG[0].TEN_KHANG;
      body['MA_KHANG'] = data.HDG_HOP_DONG[0].MA_KHANG;
      body['TEN_KHANG'] = data.HDG_KHACH_HANG[0].TEN_KHANG;
      body['TEN_DDIEN'] = data.HDG_PHU_LUC_HD[0].TEN_DDIEN;
      body['CHUC_VU'] = data.HDG_PHU_LUC_HD[0].CHUC_VU;
      body['GIOI_TINH'] = data.HDG_KHACH_HANG[0].GIOI_TINH;
      body['SO_CMT'] = data.HDG_PHU_LUC_HD[0].SO_CMT;
      body['NGAY_CAP'] = data.HDG_PHU_LUC_HD[0].NGAY_CAP;
      body['NOI_CAP'] = data.HDG_PHU_LUC_HD[0].NOI_CAP;
      body['TEN_UQUYEN'] = data.HDG_PHU_LUC_HD[0].TEN_UQUYEN;
      body['NGAY_SINH'] = data.HDG_KHACH_HANG[0].NGAY_SINH;
      body['DIA_CHI'] = data.HDG_KHACH_HANG[0].DUONG_PHO;
      body['DCHI_DIEMDO'] = data.HDG_DIEM_DO[0].DIA_CHI;
      body['DTHOAI_DVU'] = [...new Set(data.HDG_KHANG_LIENHE.filter(item => item !== "" || item !== null).map(x => x.DTHOAI_DVU))].join(', ');
      body['EMAIL'] = data.HDG_KHACH_HANG[0].EMAIL;
      body['EMAIL_FULL'] = [...new Set(data.HDG_KHANG_LIENHE.filter(item => this.plus.isEmail(item)).map(x => x.EMAIL)), data.HDG_KHACH_HANG[0].EMAIL].join(', ');
      body['MASO_THUE'] = data.HDG_KHACH_HANG[0].MASO_THUE;
      body['MASO_DVIQHNS'] = data.HDG_KHACH_HANG[0].MASO_DVIQHNS;
      body['DIEM_DAUNOI'] = data.HDG_PHU_LUC_HD[0].DIEM_DAUNOI;
      body['RGIOI_SOHUU'] = data.HDG_PHU_LUC_HD[0].RGIOI_SOHUU;
      body['MA_HDONG2'] = data.HDG_DIEM_DO[0].MA_HDONG;
      body['MA_HDONG'] = `${data.HDG_DIEM_DO[0].MA_HDONG}`.slice(5);
      body['NGAY_HLUC'] = data.HDG_PHU_LUC_HD[0].NGAY_HLUC;
      body['NGAY_HHLUC'] = data.HDG_PHU_LUC_HD[0].NGAY_HHLUC;
      body['HLUC_TUNGAY'] = data.HDG_HOP_DONG[0].HLUC_TUNGAY;
      body['HLUC_DENNGAY'] = data.HDG_HOP_DONG[0].HLUC_DENNGAY;
      body['STIEN_DCOC'] = data.HDG_PHU_LUC_HD[0].STIEN_DCOC;
      body['MA_TRAM'] = data.HDG_VITRI_DDO[0].MA_TRAM;
      body['CHUOI_GIA'] = data.HDG_CHUOI_GIA[0].CHUOI_GIA;
      body['SO_HO'] = data.HDG_DIEM_DO[0].SO_HO;
      body['STT'] = data.HDG_DDO_SOGCS[0].STT;
      body['MA_KVUC'] = data.HDG_DDO_SOGCS[0].MA_KVUC;
      body['MA_SOGCS'] = data.HDG_DDO_SOGCS[0].MA_SOGCS;
      body['LOAI_DDO'] = data.HDG_DIEM_DO[0].LOAI_DDO;
      body['DTHOAI'] = data.HDG_KHACH_HANG[0].DTHOAI;
      body['LOAI_KHANG'] = data.HDG_KHACH_HANG[0].LOAI_KHANG;
      body['MANHOM_KHANG'] = data.HDG_KHACH_HANG[0].MANHOM_KHANG;
      body['MA_NN'] = data.HDG_KHACH_HANG[0].MA_NN;
      body['MUC_DICHSD'] = data.HDG_PHU_LUC_HD[0].MUC_DICHSD;
      body['KIMUA_CSPK'] = data.HDG_DIEM_DO[0].KIMUA_CSPK;
      body['SO_PHA'] = data.HDG_DIEM_DO[0].SO_PHA;
      body['LOAI_TRAM'] = data.HDG_DIEM_DO[0].LOAI_TRAM;
      for (let i = 0; i < data.HDG_KHANG_LIENHE.length; i++) {
        const item = data.HDG_KHANG_LIENHE[i];
        body[`DTHOAI_DVU_${i + 1}`] = item.DTHOAI_DVU;
        body[`EMAIL_${i + 1}`] = item.EMAIL;
      }
      outData.push(body);
    }
    return outData;
  }
  lay_TTinHopDongDeKyLai_TheoLo(maKH) {
    var _this33 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this33.loadSV.load('lay_TTinHopDongDeKyLai_TheoLo');
      const url = "https://cmis-api.evnspc.vn/serviceHopDong/lay_TTinHopDongDeKyLai_TheoLo";
      const path = '/serviceHopDong/lay_TTinHopDongDeKyLai_TheoLo';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this33.getUser().ACCESS_TOKEN
      };
      const body = [{
        "MA_DVIQLY": maKH.slice(0, 6),
        "MA_KHANG": maKH,
        "LOAI_YCAU": "KLLO"
      }];
      _this33.plus.alertMatSnackBar(`Đang lấy thông tin mới nhất ${maKH}...`);
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(v => {
        _this33.loadSV.loaded('lay_TTinHopDongDeKyLai_TheoLo');
        const data = v['data'][0];
        const email = data.HDG_KHANG_LIENHE.map(x => x.EMAIL);
        email.concat(data.HDG_HOP_DONG.map(x => x.EMAIL));
        const body = {};
        body['MA_KHANG'] = data.HDG_HOP_DONG[0].MA_KHANG;
        body['TEN_KHANG'] = data.HDG_KHACH_HANG[0].TEN_KHANG;
        body['TEN_DDIEN'] = data.HDG_PHU_LUC_HD[0].TEN_DDIEN;
        body['CHUC_VU'] = data.HDG_PHU_LUC_HD[0].CHUC_VU;
        body['GIOI_TINH'] = data.HDG_KHACH_HANG[0].GIOI_TINH;
        body['NGAY_SINH'] = data.HDG_KHACH_HANG[0].NGAY_SINH;
        body['SO_CMT'] = data.HDG_PHU_LUC_HD[0].SO_CMT;
        body['NGAY_CAP'] = data.HDG_PHU_LUC_HD[0].NGAY_CAP;
        body['NOI_CAP'] = data.HDG_PHU_LUC_HD[0].NOI_CAP;
        body['TEN_UQUYEN'] = data.HDG_PHU_LUC_HD[0].TEN_UQUYEN;
        body['DCHI_DDIEN'] = data.HDG_PHU_LUC_HD[0].DCHI_DDIEN;
        body['DTHOAI_DVU'] = [...new Set(data.HDG_KHANG_LIENHE.map(x => x.DTHOAI_DVU))].join('-');
        body['EMAIL'] = email.join('; ');
        body['MASO_THUE'] = data.HDG_KHACH_HANG[0].MASO_THUE;
        body['DDIEM_DDIEN'] = data.HDG_PHU_LUC_HD[0].DDIEM_DDIEN;
        body['DIA_CHI'] = data.HDG_DIEM_DO[0].DIA_CHI;
        body['DUONG_PHO'] = data.HDG_KHACH_HANG[0].DUONG_PHO;
        body['DCHI_TTOAN'] = data.HDG_PHU_LUC_HD[0].DCHI_TTOAN;
        body['MA_HDONG'] = data.HDG_DIEM_DO[0].MA_HDONG;
        body['NGAY_HLUC'] = data.HDG_PHU_LUC_HD[0].NGAY_HLUC;
        body['NGAY_HHLUC'] = data.HDG_PHU_LUC_HD[0].NGAY_HHLUC;
        body['HLUC_TUNGAY'] = data.HDG_HOP_DONG[0].HLUC_TUNGAY;
        body['HLUC_DENNGAY'] = data.HDG_HOP_DONG[0].HLUC_DENNGAY;
        body['MA_TRAM'] = data.HDG_VITRI_DDO[0].MA_TRAM;
        body['CHUOI_GIA'] = data.HDG_CHUOI_GIA[0].CHUOI_GIA;
        body['STT'] = data.HDG_DDO_SOGCS[0].STT;
        body['MA_KVUC'] = data.HDG_DDO_SOGCS[0].MA_KVUC;
        body['MA_SOGCS'] = data.HDG_DDO_SOGCS[0].MA_SOGCS;
        body['CSUAT'] = data.HDG_DIEM_DO[0].CSUAT;
        body['LOAI_DDO'] = data.HDG_DIEM_DO[0].LOAI_DDO;
        body['DTHOAI'] = data.HDG_KHACH_HANG[0].DTHOAI;
        body['LOAI_KHANG'] = data.HDG_KHACH_HANG[0].LOAI_KHANG;
        body['MANHOM_KHANG'] = data.HDG_KHACH_HANG[0].MANHOM_KHANG;
        body['MA_NN'] = data.HDG_KHACH_HANG[0].MA_NN;
        body['MUC_DICHSD'] = data.HDG_PHU_LUC_HD[0].MUC_DICHSD;
        body['KIMUA_CSPK'] = data.HDG_DIEM_DO[0].KIMUA_CSPK;
        body['SO_PHA'] = data.HDG_DIEM_DO[0].SO_PHA;
        body['PHA'] = data.HDG_VITRI_DDO[0].PHA;
        body['SO_COT'] = data.HDG_VITRI_DDO[0].SO_COT;
        body['SO_HOP'] = data.HDG_VITRI_DDO[0].SO_HOP;
        body['STIEN_DCOC'] = data.HDG_PHU_LUC_HD[0].STIEN_DCOC;
        for (let i = 0; i < data.HDG_KHANG_LIENHE.length; i++) {
          const item = data.HDG_KHANG_LIENHE[i];
          body[`DTHOAI_DVU_${i + 1}`] = item.DTHOAI_DVU;
          body[`EMAIL_${i + 1}`] = item.EMAIL;
        }
        body['LHS'] = data.HDG_KHANG_LIENHE;
        return body;
      }).catch(err => {
        _this33.handleError(err);
        return null;
      });
    })();
  }
  convertHopDong(data) {
    const body = {};
    body['MA_KHANG'] = data.HDG_HOP_DONG[0].MA_KHANG;
    body['TEN_KHANG'] = data.HDG_KHACH_HANG[0].TEN_KHANG;
    body['TEN_DDIEN'] = data.HDG_PHU_LUC_HD[0].TEN_DDIEN;
    body['CHUC_VU'] = data.HDG_PHU_LUC_HD[0].CHUC_VU;
    body['GIOI_TINH'] = data.HDG_KHACH_HANG[0].GIOI_TINH;
    body['SO_CMT'] = data.HDG_PHU_LUC_HD[0].SO_CMT;
    body['NGAY_CAP'] = data.HDG_PHU_LUC_HD[0].NGAY_CAP;
    body['NOI_CAP'] = data.HDG_PHU_LUC_HD[0].NOI_CAP;
    body['TEN_UQUYEN'] = data.HDG_PHU_LUC_HD[0].TEN_UQUYEN;
    body['DCHI_DDIEN'] = data.HDG_PHU_LUC_HD[0].DCHI_DDIEN;
    body['DTHOAI_DVU'] = data.HDG_KHANG_LIENHE.map(x => x.DTHOAI_DVU).join(' - ');
    body['EMAIL'] = data.HDG_KHANG_LIENHE.map(x => x.EMAIL).join(' - ');
    body['MASO_THUE'] = data.HDG_KHACH_HANG[0].MASO_THUE;
    body['DDIEM_DDIEN'] = data.HDG_PHU_LUC_HD[0].DDIEM_DDIEN;
    body['DIA_CHI'] = data.HDG_DIEM_DO[0].DIA_CHI;
    body['DUONG_PHO'] = data.HDG_KHACH_HANG[0].DUONG_PHO;
    body['DCHI_TTOAN'] = data.HDG_PHU_LUC_HD[0].DCHI_TTOAN;
    body['MA_HDONG'] = data.HDG_DIEM_DO[0].MA_HDONG;
    body['NGAY_HLUC'] = data.HDG_PHU_LUC_HD[0].NGAY_HLUC;
    body['NGAY_HHLUC'] = data.HDG_PHU_LUC_HD[0].NGAY_HHLUC;
    body['HLUC_TUNGAY'] = data.HDG_HOP_DONG[0].HLUC_TUNGAY;
    body['HLUC_DENNGAY'] = data.HDG_HOP_DONG[0].HLUC_DENNGAY;
    body['MA_TRAM'] = data.HDG_VITRI_DDO[0].MA_TRAM;
    body['CHUOI_GIA'] = data.HDG_CHUOI_GIA[0].CHUOI_GIA;
    body['STT'] = data.HDG_DDO_SOGCS[0].STT;
    body['MA_KVUC'] = data.HDG_DDO_SOGCS[0].MA_KVUC;
    body['MA_SOGCS'] = data.HDG_DDO_SOGCS[0].MA_SOGCS;
    body['CSUAT'] = data.HDG_DIEM_DO[0].CSUAT;
    body['LOAI_DDO'] = data.HDG_DIEM_DO[0].LOAI_DDO;
    body['DTHOAI'] = data.HDG_KHACH_HANG[0].DTHOAI;
    body['LOAI_KHANG'] = data.HDG_KHACH_HANG[0].LOAI_KHANG;
    body['MANHOM_KHANG'] = data.HDG_KHACH_HANG[0].MANHOM_KHANG;
    body['MA_NN'] = data.HDG_KHACH_HANG[0].MA_NN;
    body['MUC_DICHSD'] = data.HDG_PHU_LUC_HD[0].MUC_DICHSD;
    body['KIMUA_CSPK'] = data.HDG_DIEM_DO[0].KIMUA_CSPK;
    body['SO_PHA'] = data.HDG_DIEM_DO[0].SO_PHA;
    body['PHA'] = data.HDG_VITRI_DDO[0].PHA;
    body['NGAY_SINH'] = data.HDG_KHACH_HANG[0].NGAY_SINH;
    body['SO_COT'] = data.HDG_VITRI_DDO[0].SO_COT;
    body['SO_HOP'] = data.HDG_VITRI_DDO[0].SO_HOP;
    for (let i = 0; i < data.HDG_KHANG_LIENHE.length; i++) {
      const item = data.HDG_KHANG_LIENHE[i];
      body[`DTHOAI_DVU_${i + 1}`] = item.DTHOAI_DVU;
      body[`EMAIL_${i + 1}`] = item.EMAIL;
    }
  }
  layTtinKHangMoinhat(maKH) {
    var _this34 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this34.loadSV.load('layTtinKHangMoinhat');
      const url = "https://cmis-api.evnspc.vn/serviceHopDong/layTtinKHangMoinhat";
      const path = '/serviceHopDong/layTtinKHangMoinhat';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this34.getUser().ACCESS_TOKEN
      };
      const body = [{
        "MA_DVIQLY": `${_this34.convertPK(maKH)}`.slice(0, 6),
        "MA_KHANG": `${_this34.convertPK(maKH)}`,
        "MA_YCAU_KNAI": ""
      }];
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(v => {
        _this34.loadSV.loaded('layTtinKHangMoinhat');
        _this34.handleErrCmis(v);
        return v['data'] || null;
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this34.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this34.authSV.reload('/cmis4');
        _this34.loadSV.clear();
        console.log(err);
      });
    })();
  }
  layTtinKHangMoinhatCONVERT(maKH) {
    var _this35 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this35.loadSV.load('layTtinKHangMoinhat');
      const url = "https://cmis-api.evnspc.vn/serviceHopDong/layTtinKHangMoinhat";
      const path = '/serviceHopDong/layTtinKHangMoinhat';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this35.getUser().ACCESS_TOKEN
      };
      const body = [{
        "MA_DVIQLY": `${_this35.convertPK(maKH)}`.slice(0, 6),
        "MA_KHANG": `${_this35.convertPK(maKH)}`,
        "MA_YCAU_KNAI": ""
      }];
      _this35.plus.alertMatSnackBar(`Đang lấy thông tin mới nhất ${_this35.convertPK(maKH)}...`);
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(v => {
        _this35.loadSV.loaded('layTtinKHangMoinhat');
        _this35.handleErrCmis(v);
        return v['data'] || null;
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this35.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this35.authSV.reload('/cmis4');
        _this35.loadSV.clear();
        console.log(err);
      });
    })();
  }
  convertRES(body, resTimKIem) {
    return {
      MA_KHANG: body.HDG_DIEM_DO[0].MA_KHANG,
      MA_SOGCS: body.HDG_DDO_SOGCS[0].MA_SOGCS,
      MA_KVUC: body.HDG_DDO_SOGCS[0].MA_KVUC,
      STT: body.HDG_DDO_SOGCS[0].STT,
      TEN_KHANG: body.HDG_KHACH_HANG[0].TEN_KHANG,
      MUC_DICHSD: body.HDG_PHU_LUC_HD[0].MUC_DICHSD,
      CHUOI_GIA: resTimKIem[0].CHUOI_GIA,
      DIA_CHI_KH: resTimKIem[0].DIA_CHI_KH,
      DTHOAI: resTimKIem[0].DTHOAI,
      DTHOAI_DVU: body.HDG_KHANG_LIENHE[0].DTHOAI_DVU,
      TEN_KH_LHE: body.HDG_KHANG_LIENHE[0].TEN_KH_LHE,
      DCHI_DDIEN: body.HDG_PHU_LUC_HD[0].DCHI_DDIEN,
      DIEM_DAUNOI: body.HDG_PHU_LUC_HD[0].DIEM_DAUNOI,
      SO_NHA: body.HDG_KHACH_HANG[0].SO_NHA,
      DDIEM_DDIEN: body.HDG_PHU_LUC_HD[0].DDIEM_DDIEN,
      DIA_CHI: body.HDG_DIEM_DO[0].DIA_CHI,
      DCHI_KH_LHE: body.HDG_KHANG_LIENHE[0].DCHI_KH_LHE,
      LOAI_DDO: body.HDG_DIEM_DO[0].LOAI_DDO,
      MA_HDONG: body.HDG_DIEM_DO[0].MA_HDONG,
      STTU_UTIEN: body.HDG_KHANG_LIENHE[0].STTU_UTIEN,
      MANHOM_KHANG: body.HDG_KHACH_HANG[0].MANHOM_KHANG,
      NGAY_SINH: body.HDG_KHACH_HANG[0].NGAY_SINH,
      HLUC_DENNGAY: body.HDG_HOP_DONG[0].HLUC_DENNGAY,
      TEN_DDIEN: body.HDG_PHU_LUC_HD[0].TEN_DDIEN,
      GIOI_TINH: body.HDG_KHACH_HANG[0].GIOI_TINH,
      CHUC_VU: body.HDG_PHU_LUC_HD[0].CHUC_VU,
      SO_CMND: body.HDG_KHANG_LIENHE[0].SO_CMND,
      SO_CMT: body.HDG_PHU_LUC_HD[0].SO_CMT,
      NGAY_CAP: body.HDG_PHU_LUC_HD[0].NGAY_CAP,
      NOI_CAP: body.HDG_PHU_LUC_HD[0].NOI_CAP,
      STIEN_DCOC: body.HDG_PHU_LUC_HD[0].STIEN_DCOC,
      EMAIL: body.HDG_KHACH_HANG[0].EMAIL,
      DAN_TOC: body.HDG_KHANG_LIENHE[0].DAN_TOC,
      TON_GIAO: body.HDG_KHANG_LIENHE[0].TON_GIAO,
      TEN_UQUYEN: body.HDG_PHU_LUC_HD[0].TEN_UQUYEN,
      SOGIAY_UQUYEN: body.HDG_PHU_LUC_HD[0].SOGIAY_UQUYEN,
      NGAY_UQUYEN: body.HDG_PHU_LUC_HD[0].NGAY_UQUYEN,
      CVU_UQUYEN: body.HDG_PHU_LUC_HD[0].CVU_UQUYEN,
      LH: body.HDG_KHANG_LIENHE
    };
  }
  layTtinKhangDtuongMoinhat(datas) {
    var _this36 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this36.loadSV.load('layTtinKhangDtuongMoinhat');
      const url = 'https://cmis-api.evnspc.vn/serviceHopDong/layTtinKhangDtuongMoinhat';
      const path = '/serviceHopDong/layTtinKhangDtuongMoinhat';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this36.getUser().ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, datas, {
        headers: httpOptions
      }).then(res => {
        _this36.handleErrCmis(res);
        _this36.loadSV.loaded('layTtinKhangDtuongMoinhat');
        return res.data;
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this36.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this36.authSV.reload('/cmis4');
        _this36.loadSV.clear();
        console.log(err);
      });
    })();
  }
  getBCDanhSachLienHe() {
    var _this37 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "BIEU": "29",
        "MA_DVIQLY": _this37.getUser().SUBDIVISIONID,
        "TEN_TCHI": "**ALL**",
        "PLOC": "**ALL**",
        "HLDEN_NGAY": '01/01/2000',
        "LOAI_HDONG": "**ALL**",
        "LOAI_KHANG": "-1"
      };
      _this37.loadSV.load('getBCDanhSachLienHe');
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/InBCThop';
      const path = '/serviceBCaoThang/InBCThop';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this37.getUser().ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this37.handleErrCmis(res);
        _this37.loadSV.loaded('getBCDanhSachLienHe');
        return res.data;
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this37.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this37.authSV.reload('/cmis4');
        _this37.loadSV.clear();
        console.log(err);
      });
    })();
  }
  getBCDanhSachDiemDoTheoSo() {
    var _this38 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_DVIQLY": _this38.getUser().SUBDIVISIONID,
        "MA_TO": "ALL",
        "BIEU": "111",
        "MA_TCHI": "**ALL**",
        "TEN_TCHI": "**ALL**",
        "PLOC": "**ALL**",
        "NHOM_KHANG": "**ALL**"
      };
      _this38.loadSV.load('getBCDanhSachDiemDoTheoSo');
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/InBCThop';
      const path = '/serviceBCaoThang/InBCThop';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this38.getUser().ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this38.handleErrCmis(res);
        _this38.loadSV.loaded('getBCDanhSachDiemDoTheoSo');
        return res.data;
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this38.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this38.authSV.reload('/cmis4');
        _this38.loadSV.clear();
        console.log(err);
      });
    })();
  }
  timKiemKhachHang(PK) {
    var _this39 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const MA_KHANG = _this39.convertPK(PK);
      _this39.loadSV.load('timKiemKhachHang');
      const url = 'https://cmis-api.evnspc.vn/serviceHopDong/timKiemKhachHang';
      const path = '/serviceHopDong/timKiemKhachHang';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this39.getUser().ACCESS_TOKEN
      };
      const body = {
        "strMaDViQLy": MA_KHANG.slice(0, 6),
        "nLoaiTimKiem": 3,
        "strGiaTriTimKiem": MA_KHANG,
        "bGetHetHLuc": false,
        "strNhomKhang": "ALL",
        "strLoaiKhang": "ALL",
        "strHTTT": "ALL",
        "strPTTT": "ALL",
        "strLoaiHDong": "ALL",
        "TYPE_GETDATA": "CON_HLUC",
        "IS_KHANG_MTAMN": false
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this39.handleErrCmis(res);
        _this39.loadSV.loaded('timKiemKhachHang');
        return res.data;
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this39.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this39.authSV.reload('/cmis4');
        _this39.loadSV.clear();
        console.log(err);
      });
    })();
  }
  getBaocaoTongHopDienMTMNChuaQuyetToan() {
    var _this40 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/getBaocaoTongHopDienMTMN';
      const path = '/serviceBCaoThang/getBaocaoTongHopDienMTMN';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this40.getUser().ACCESS_TOKEN
      };
      const body = {
        "THANG": "1",
        "NAM": "2021",
        "LUY_KE": 0,
        "TCHAT_MTAM": -1,
        "NGAY_COD": -1,
        "BIEU": "BIEU23",
        "MA_DVIQLY": "PK0500",
        "TU_NGAY_GCS": "1/12/2020",
        "DEN_NGAY_GCS": "23/12/2023",
        "QUYET_TOAN": "0"
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this40.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this40.authSV.reload('/cmis4');
        _this40.loadSV.clear();
        console.log(err);
        return null;
      });
    })();
  }
  ThemTDoiTTinLienHe(body, index) {
    var _this41 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this41.loadSV.load('ThemTDoiTTinLienHe');
      const url = "https://cmis-api.evnspc.vn/serviceHopDong/ThemTDoiTTinLienHe";
      const path = '/serviceHopDong/ThemTDoiTTinLienHe';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this41.user.ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this41.handleErrCmis(res);
        _this41.loadSV.loaded('ThemTDoiTTinLienHe');
      }).catch(err => {
        if (err.response.status === 401) {
          localStorage.removeItem('USERCMIS');
          _this41.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
          _this41.authSV.reload('/cmis4');
        }
      });
    })();
  }
  login(userName, password) {
    var _this42 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const param = {
        username: `${userName}`,
        password: `${password}`,
        expiration: 10080,
        deviceInfo: {
          deviceId: _this42.guid(),
          deviceType: "Windows/windows-10/desktop/Chrome",
          appId: 'CMIS4',
          appVersion: '4.0.0'
        }
      };
      localStorage.usernameCmis = userName;
      const url = "https://cmis-api.evnspc.vn/serviceAuth/login";
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, param).then(v => {
        _this42.handleErrCmis(v);
        const body = v['data']['data'][0];
        _this42.user = body;
        localStorage.USERCMIS = JSON.stringify(_this42.user);
        window.max['USERCMIS'] = _this42.user;
        return body;
      });
    })();
  }
  refreshToken(REFRESH_TOKEN) {
    const body = {
      "REFRESH_TOKEN": REFRESH_TOKEN
    };
    const url = 'https://cmis-api.evnspc.vn/serviceAuth/refreshToken';
    return this.cmis4Request(url, '', body);
  }
  guid() {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
  }
  handleErrCmis(res) {
    if (res['data']['TYPE'] == 'ERROR') {
      this.plus.alertError(res['data']['MESSAGE']);
    } else {
      this.plus.alertSuccess();
    }
  }
  getUser() {
    const userLocal = JSON.parse(localStorage.getItem('USERCMIS')) || null;
    if (!userLocal) {
      this.plus.alertError('Vui lòng đăng nhập lại');
      this.user = null;
      return null;
    }
    if (userLocal.HetHan < Date.now()) {
      localStorage.removeItem('USERCMIS');
      this.user = null;
      this.authSV.reload('/cmis4');
      return null;
    }
    return userLocal;
  }
  getDsachKhangQToanDienMTAM(body) {
    var _this43 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this43.loadSV.load('getDsachKhangQToanDienMTAM');
      const url = "https://cmis-api.evnspc.vn/serviceBCaoThang/getDsachKhangQToanDienMTAM";
      const path = '/serviceBCaoThang/getDsachKhangQToanDienMTAM';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this43.getUser().ACCESS_TOKEN
      };
      _this43.plus.alertMatSnackBar(`Đang lấy dữ liệu ${body.MA_KHANG}...`);
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this43.handleErrCmis(res);
        _this43.loadSV.loaded('getDsachKhangQToanDienMTAM');
        _this43.plus.alertSuccess(`${body.MA_KHANG}`);
        return res['data'];
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this43.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this43.authSV.reload('/cmis4');
        _this43.loadSV.clear();
        console.log(err);
        return null;
      });
    })();
  }
  capnhatQToanSLuongMTAM(body) {
    var _this44 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this44.loadSV.load('capnhatQToanSLuongMTAM');
      const url = "https://cmis-api.evnspc.vn/serviceTTienCNo/capnhatQToanSLuongMTAM";
      const path = '/serviceTTienCNo/capnhatQToanSLuongMTAM';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this44.getUser().ACCESS_TOKEN
      };
      _this44.plus.alertMatSnackBar(`Đang lấy dữ liệu ${body.MA_KHANG}...`);
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this44.handleErrCmis(res);
        _this44.loadSV.loaded('capnhatQToanSLuongMTAM');
        _this44.plus.alertSuccess(`${body.MA_KHANG}`);
        console.log(res);
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this44.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this44.authSV.reload('/cmis4');
        _this44.loadSV.clear();
        console.log(err);
        return null;
      });
    })();
  }
  getBangKeThanhToanTienDienMTAM(body) {
    var _this45 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this45.loadSV.load('getBangKeThanhToanTienDienMTAM');
      const url = "https://cmis-api.evnspc.vn/serviceBCaoThang/getBangKeThanhToanTienDienMTAM";
      const path = '/serviceBCaoThang/getBangKeThanhToanTienDienMTAM';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this45.getUser().ACCESS_TOKEN
      };
      _this45.plus.alertMatSnackBar(`Đang lấy dữ liệu ...`);
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this45.handleErrCmis(res);
        _this45.loadSV.loaded('getBangKeThanhToanTienDienMTAM');
        _this45.plus.alertSuccess(``);
        return res['data'];
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this45.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this45.authSV.reload('/cmis4');
        _this45.loadSV.clear();
        console.log(err);
        return null;
      });
    })();
  }
  getDDoSoGCS(body) {
    var _this46 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this46.loadSV.load('getDDoSoGCS');
      const url = "https://cmis-api.evnspc.vn/serviceHopDong/getDDoSoGCS";
      const path = '/serviceHopDong/getDDoSoGCS';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this46.getUser().ACCESS_TOKEN
      };
      _this46.plus.alertMatSnackBar(`Đang lấy dữ liệu ...`);
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this46.handleErrCmis(res);
        _this46.loadSV.loaded('getDDoSoGCS');
        _this46.plus.alertSuccess(``);
        return res['data'];
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this46.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this46.authSV.reload('/cmis4');
        _this46.loadSV.clear();
        console.log(err);
        return null;
      });
    })();
  }
  getChiso(body) {
    var _this47 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this47.loadSV.load('getChiso');
      const url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/getChiso';
      const path = '/serviceChiSoKHang/getChiso';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this47.getUser().ACCESS_TOKEN
      };
      _this47.plus.alertMatSnackBar(`Đang lấy dữ liệu ...`);
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this47.handleErrCmis(res);
        _this47.loadSV.loaded('getChiso');
        _this47.plus.alertSuccess(``);
        return res['data'];
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this47.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this47.authSV.reload('/cmis4');
        _this47.loadSV.clear();
        console.log(err);
        return null;
      });
    })();
  }
  layChiSoDinhKy(body) {
    var _this48 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this48.getDDoSoGCS(body).then(data => {
        const body2 = {
          "KY": body.KY,
          "THANG": +body.THANG,
          "NAM": +body.NAM,
          "MA_SOGCS": body.MA_SOGCS,
          "MA_DVIQLY": body.MA_DVIQLY,
          "NGAY_CKY": body.NGAY_CKY,
          "LST_DDO": data,
          "IS_CHUANHAPCSO": false,
          "IS_CHOTCS": false
        };
        _this48.getChiso(body2).then(data => {
          console.log(data);
        });
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this48.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this48.authSV.reload('/cmis4');
        _this48.loadSV.clear();
        console.log(err);
        return null;
      });
    })();
  }
  getHeader() {
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders({
        "Content-Type": "application/json",
        'Accept': 'application/json'
      })
    };
    return httpOptions;
  }
  handleError(err) {
    this.loadSV.clear();
    if (err.response.status === 401) {
      localStorage.removeItem('USERCMIS');
      this.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
      this.authSV.reload('/cmis4');
    }
    console.log(err);
    return null;
  }
  convertPK(pk) {
    let maKH = this.user ? this.user.SUBDIVISIONID : 'PK0500';
    switch (pk.length) {
      case 1:
        maKH = maKH + '000000' + pk;
        break;
      case 2:
        maKH = maKH + '00000' + pk;
        break;
      case 3:
        maKH = maKH + '0000' + pk;
        break;
      case 4:
        maKH = maKH + '000' + pk;
        break;
      case 5:
        maKH = maKH + '00' + pk;
        break;
      case 6:
        maKH = maKH + '0' + pk;
        break;
      case 7:
        maKH = maKH + pk;
        break;
      default:
        maKH = pk;
        break;
    }
    return maKH;
  }
  convertMaTram(pk) {
    let maTram = '';
    switch (pk.length) {
      case 1:
        maTram = '21050000' + pk;
        break;
      case 2:
        maTram = '2105000' + pk;
        break;
      case 3:
        maTram = '210500' + pk;
        break;
      case 4:
        maTram = '21050' + pk;
        break;
      default:
        maTram = pk;
        break;
    }
    return maTram;
  }
  static {
    this.ɵfac = function Cmis4Service_Factory(t) {
      return new (t || Cmis4Service)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_5__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: Cmis4Service,
      factory: Cmis4Service.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);