"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["default-src_app_cmis4_chi-so_service_ts-src_app_kinh-doanh_bao-dam-hop-dong_bao-dam-hop-dong--4a3696"],{

/***/ 87535:
/*!*****************************************!*\
  !*** ./src/app/cmis4/chi-so.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChiSoService: () => (/* binding */ ChiSoService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmis4.service */ 61836);
/* harmony import */ var _share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/services/http.serviceV2 */ 24950);
/* harmony import */ var _site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site/loading/loading.service */ 97230);





class ChiSoService {
  constructor(cmis4SV, httpSV, loadSV) {
    this.cmis4SV = cmis4SV;
    this.httpSV = httpSV;
    this.loadSV = loadSV;
    this.user = JSON.parse(localStorage.getItem('USERCMIS'));
  }
  updateLichGhi(lichGhi) {
    this.loadSV.load('updateLichGhi');
    let data = lichGhi.map(el => ({
      ...el,
      _id: el.MA_SOGCS
    }));
    return this.httpSV.put('lich-ghi-chi-so/multi', data, '');
  }
  ExcuteNhapCSDoiGia(body) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/ExcuteNhapCSDoiGia';
      let path = '/serviceChiSoKHang/ExcuteNhapCSDoiGia';
      return _this.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getChiso_DGia(body) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/getChiso_DGia';
      let path = '/serviceChiSoKHang/getChiso_DGia';
      return _this2.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  get_Lich_SoGCS(body) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/get_Lich_SoGCS';
      let path = '/serviceChiSoKHang/get_Lich_SoGCS';
      return _this3.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getChiso(soGCSByListSoRESs, body) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let path = '/serviceChiSoKHang/getChiso';
      let url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/getChiso';
      return _this4.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getDDoSoGCS(body) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let path = '/serviceHopDong/getDDoSoGCS';
      let url = 'https://cmis-api.evnspc.vn/serviceHopDong/getDDoSoGCS';
      return _this5.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getSoGCSByListSo(maso) {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        TEN_DANH_MUC: "D_SOGCS",
        MA_DVIQLY: _this6.user.SUBDIVISIONID,
        PARAM: [maso]
      };
      let path = '/serviceDanhMuc/getSoGCSByListSo';
      let url = 'https://cmis-api.evnspc.vn/serviceDanhMuc/getSoGCSByListSo';
      return _this6.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  get_gcslichgcsByMaSogcs(maSo, body) {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let path = '/serviceChiSoKHang/get_gcslichgcsByMaSogcs';
      let url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/get_gcslichgcsByMaSogcs';
      return _this7.cmis4SV.cmis4Request(url, path, body).then(v => {
        return v[0];
      });
    })();
  }
  static {
    this.ɵfac = function ChiSoService_Factory(t) {
      return new (t || ChiSoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_1__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_2__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ChiSoService,
      factory: ChiSoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 32285:
/*!****************************************************************************!*\
  !*** ./src/app/kinh-doanh/bao-dam-hop-dong/bao-dam-hop-dong-v2.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaoDamHopDongV2Service: () => (/* binding */ BaoDamHopDongV2Service)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uid */ 10723);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/pouchdb.service */ 32939);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);








class BaoDamHopDongV2Service {
  constructor(plus, pouchDBSV, excelSV, authSV) {
    this.plus = plus;
    this.pouchDBSV = pouchDBSV;
    this.excelSV = excelSV;
    this.authSV = authSV;
    this.api = 'ky-quy';
    this.apiNhatKy = 'ky-quy-nhat-ky';
  }
  unsubscribe() {
    this.pouchDBSV.unsubscribe(this.api);
    this.pouchDBSV.unsubscribe(this.apiNhatKy);
  }
  sync() {
    this.pouchDBSV.connectRemote(this.apiNhatKy).subscribe();
    return this.pouchDBSV.connectRemote(this.api);
  }
  getByPk(pk) {
    return this.pouchDBSV.get(this.api, pk);
  }
  search(txt) {
    this.pouchDBSV.search(this.api, txt);
  }
  getAll() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.pouchDBSV.getAll(_this.api);
    })();
  }
  getNhatKyByMaPK(mapk) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.pouchDBSV.getDocsByKeyValue(_this2.apiNhatKy, 'MA_KHANG', mapk);
    })();
  }
  themNhatKy(item, soTienTruocUpdate, ghichu) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        _id: (0,uid__WEBPACK_IMPORTED_MODULE_1__.uid)(4),
        userId: _this3.user.fullName,
        MA_KHANG: item.MA_KHANG,
        STIEN_DCOC: Number(item.STIEN_DCOC) - soTienTruocUpdate,
        NGAY_BAO_CO: moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD/MM/YYYY'),
        dateModify: Date.now(),
        GHI_CHU: ghichu,
        KY_BD: soTienTruocUpdate !== Number(item.STIEN_DCOC) ? moment__WEBPACK_IMPORTED_MODULE_2___default()().toISOString() : null
      };
      return _this3.pouchDBSV.save(_this3.apiNhatKy, body);
    })();
  }
  xoaNhatKy(item) {
    return this.pouchDBSV.delete(this.apiNhatKy, item._id);
  }
  getTrangThai(trangThai) {
    return this.pouchDBSV.getDocsByKeyValue(this.api, 'TRANG_THAI', trangThai);
  }
  delete(item) {
    if (!this.authSV.checkPer('dev', 4)) {
      alert('Bạn không có quyền xóa');
      return;
    }
    return this.pouchDBSV.disable(this.api, item);
  }
  save(item) {
    if (!this.authSV.checkPer(this.api, 2)) {
      alert('Bạn không có quyền ghi');
      return;
    }
    return this.pouchDBSV.save(this.api, item);
  }
  saveNhatKy(item) {
    if (!this.authSV.checkPer(this.apiNhatKy, 2)) {
      alert('Bạn không có quyền ghi');
      return;
    }
    return this.pouchDBSV.save(this.apiNhatKy, item);
  }
  getBienDong(tuNgay, denNgay) {
    return this.pouchDBSV.getDocsByDateRange(this.api, 'KY_BD', tuNgay, denNgay);
  }
  static {
    this.ɵfac = function BaoDamHopDongV2Service_Factory(t) {
      return new (t || BaoDamHopDongV2Service)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_4__.PouchdbService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_5__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_6__.AuthServiceV2));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: BaoDamHopDongV2Service,
      factory: BaoDamHopDongV2Service.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 33814:
/*!*************************************************************************!*\
  !*** ./src/app/kinh-doanh/bao-dam-hop-dong/bao-dam-hop-dong.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaoDamHopDongService: () => (/* binding */ BaoDamHopDongService),
/* harmony export */   E_KYQUY_HINHTHUC: () => (/* binding */ E_KYQUY_HINHTHUC),
/* harmony export */   E_KYQUY_TRANGTHAI: () => (/* binding */ E_KYQUY_TRANGTHAI)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 96354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 12498);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 99437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/http.serviceV2 */ 24950);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/indexeddbV2.service */ 4045);
/* harmony import */ var src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/sheets.service */ 63402);
/* harmony import */ var src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/pouchdb.service */ 32939);











class BaoDamHopDongService {
  constructor(plus, httpSV, formSV, idbSV, sheetdbSV, pouchDBSV) {
    this.plus = plus;
    this.httpSV = httpSV;
    this.formSV = formSV;
    this.idbSV = idbSV;
    this.sheetdbSV = sheetdbSV;
    this.pouchDBSV = pouchDBSV;
    this.header = {
      MA_KHANG: "Mã khách hàng",
      TEN_KHANG: "Tên khách hàng",
      STIEN_DCOC: "Số tiền",
      HTHUC_DBAO_HDONG: "Hình thức bảo đảm hợp đồng",
      SERI_CHUNG_THU: "Thông tin Chứng thư",
      HLUC_DENNGAY: "Hạn hợp đồng",
      DTHOAI_DD: "Điện thoại",
      DCHI_DDIEN: "Địa chỉ",
      NGAY_BAO_CO: "Ngày báo có",
      TRANG_THAI: "Trạng thái",
      GHI_CHU: "Ghi chú"
    };
    this.main = this.formSV.fb.group({
      MA_KHANG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1)]],
      TEN_KHANG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1)]],
      STIEN_DCOC: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1)]],
      HTHUC_DBAO_HDONG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1)]],
      SERI_CHUNG_THU: ['', []],
      HLUC_DENNGAY: ['', []],
      HLUC_TUNGAY: ['', []],
      DTHOAI_DD: ['', []],
      DCHI_DDIEN: ['', []],
      NGAY_BAO_CO: ['', []],
      TRANG_THAI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1)]],
      GHI_CHU: ['', []],
      HLUC_BAO_DAM: ['', []]
    });
    this.user = null;
    this.db = null;
    this.dbName = 'kinh-doanh';
    this.api = 'ky-quy';
    this.title = 'Bảo đảm hợp đồng';
    this.isExplain = false;
    this.E_HTHUC_DBAO_HDONG = E_KYQUY_HINHTHUC;
    this.E_TRANG_THAI = E_KYQUY_TRANGTHAI;
    this.bienDongSheet = '1uVWVYhn0cvJ39f_J4uLKVs3ljWGuSyUAcCTHZLqFi04';
    this.soTienBD = 0;
    this.plus.setTiTle(this.title);
  }
  initDB() {
    if (!this.db) {
      return this.idbSV.IDB_InitDB(this.dbName).subscribe(db => {
        this.db = db;
      });
    }
  }
  checkForm() {
    const err = this.formSV.getErrValidateFormV2(this.main, this.header);
    if (err.length > 2) {
      return this.plus.alertError(`${err}`);
    }
  }
  sync() {
    return this.pouchDBSV.connectRemote(this.api).subscribe();
  }
  getAllIDB() {
    return this.pouchDBSV.getAll(this.api);
  }
  getByPK(pk) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        _this.pouchDBSV.getDocsByKeyValue(_this.api, 'MA_KHANG', pk).then(res => {
          resolve(res);
        });
      });
    })();
  }
  getApi() {
    return this.httpSV.get(this.api).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
      console.log(response);
      this.idbSV.IDB_DB_Add(this.db, this.api, response.data).then(() => {
        this.plus.alertMatSnackBar('Cập nhật dữ liệu xong!');
      });
      return response.data;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(error => {
      console.log(error);
      throw error;
    }));
  }
  updateApi(kyquy) {
    this.main.patchValue(kyquy);
    const err = this.formSV.getErrValidateFormV2(this.main, this.header);
    if (err.length > 2) {
      this.plus.alertError(`${err}`);
      return;
    }
    return this.httpSV.put(this.api, kyquy, '').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
      this.addBienDong(kyquy).then(() => {
        console.log('Add bienDong');
      });
      return response.data;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(error => {
      console.log(error);
      throw error;
    }));
  }
  getBienDong(kyBD) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.sheetdbSV.getAll(_this2.bienDongSheet, 'Data').then(res => {
        return res.filter(e => e.KY_BD == kyBD);
      });
    })();
  }
  addBienDong(kyquy) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const bienDong = {
        nick: window.max.fullName,
        KY_BD: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('MM/YYYY'),
        MA_KHANG: kyquy.MA_KHANG,
        TEN_KHANG: kyquy.TEN_KHANG,
        STIEN_DCOC: kyquy.STIEN_DCOC,
        TRANG_THAI: kyquy.TRANG_THAI,
        GHI_CHU: kyquy.GHI_CHU
      };
      return _this3.sheetdbSV.addMany(_this3.bienDongSheet, 'Data', [bienDong]);
    })();
  }
  deleteApi(item) {
    return this.httpSV.disable(this.api, item);
  }
  static {
    this.ɵfac = function BaoDamHopDongService_Factory(t) {
      return new (t || BaoDamHopDongService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_3__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_4__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__.IndexeddbServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_6__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_7__.PouchdbService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: BaoDamHopDongService,
      factory: BaoDamHopDongService.ɵfac,
      providedIn: 'root'
    });
  }
}
var E_KYQUY_TRANGTHAI;
(function (E_KYQUY_TRANGTHAI) {
  E_KYQUY_TRANGTHAI["CHUATH"] = "Ch\u01B0a th\u1EF1c hi\u1EC7n";
  E_KYQUY_TRANGTHAI["DA_THUC_HIEN"] = "\u0110\u00E3 th\u1EF1c hi\u1EC7n";
  E_KYQUY_TRANGTHAI["DA_BAO_CO"] = "\u0110\u00E3 \u0111\u1ED1i so\u00E1t";
  E_KYQUY_TRANGTHAI["DA_THANH_LY"] = "\u0110\u00E3 thanh l\u00FD";
  E_KYQUY_TRANGTHAI["DA_HOAN_TRA"] = "\u0110\u00E3 ho\u00E0n tr\u1EA3";
  E_KYQUY_TRANGTHAI["DA_LAP_TNK"] = "\u0110\u00E3 l\u1EADp h\u1ED3 s\u01A1 chuy\u1EC3n thu nh\u1EADp kh\u00E1c";
  E_KYQUY_TRANGTHAI["DA_CHUYEN_TNK"] = "\u0110\u00E3 chuy\u1EC3n thu nh\u1EADp kh\u00E1c";
  E_KYQUY_TRANGTHAI["DA_NHAN_CT"] = "\u0110\u00E3 nh\u1EADn ch\u1EE9ng th\u01B0";
  E_KYQUY_TRANGTHAI["DA_NHAN_BS"] = "\u0110\u00E3 b\u1ED5 sung ti\u1EC1n \u0111\u1EB7t c\u1ECDc";
})(E_KYQUY_TRANGTHAI || (E_KYQUY_TRANGTHAI = {}));
var E_KYQUY_HINHTHUC;
(function (E_KYQUY_HINHTHUC) {
  E_KYQUY_HINHTHUC["KYQUY"] = "\u0110\u1EB7t c\u1ECDc b\u1EB1ng ti\u1EC1n";
  E_KYQUY_HINHTHUC["BAODAM"] = "B\u1EA3o l\u00E3nh ng\u00E2n h\u00E0ng";
})(E_KYQUY_HINHTHUC || (E_KYQUY_HINHTHUC = {}));

/***/ }),

/***/ 93934:
/*!*************************************************************!*\
  !*** ./src/app/kinh-doanh/ghi-chi-so/ghi-chi-so.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GhiChiSoService: () => (/* binding */ GhiChiSoService),
/* harmony export */   LOAI_CHISO: () => (/* binding */ LOAI_CHISO),
/* harmony export */   TRANG_THAI_GCS: () => (/* binding */ TRANG_THAI_GCS)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/indexeddbV2.service */ 4045);
/* harmony import */ var src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/http.serviceV2 */ 24950);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var src_app_share_services_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/firestore.service */ 57923);
/* harmony import */ var src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/sheets.service */ 63402);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_cmis4_cmis4_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/cmis4/cmis4.service */ 61836);










class GhiChiSoService {
  constructor(idbSV, httpSV, loadSV, fbSV, sheetdbSV, plus, cmis4SV) {
    this.idbSV = idbSV;
    this.httpSV = httpSV;
    this.loadSV = loadSV;
    this.fbSV = fbSV;
    this.sheetdbSV = sheetdbSV;
    this.plus = plus;
    this.cmis4SV = cmis4SV;
    this.user = null;
    this.USERCMIS = this.cmis4SV.getUser();
    this.db = null;
    this.dbName = 'kinh-doanh';
    this.api = 'ghi-chi-so';
    this.apilich = 'lich-ghi-chi-so';
    this.table = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(10, 'days').format('YYMM');
    this.sheetID = '1X9NIeAsXEPJ8LG8Vr-KPN7Wn9uLiMqxNcM0fwdjXHIs';
    this.kyGCS = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(10, 'days').format('YY/MM');
    this.kyGCSTruoc = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'month').format('YY/MM');
    this.thang = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(10, 'days').format('MM');
    this.nam = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(10, 'days').format('YYYY');
    this.dmCapDienAp = [{
      "maCapda": "1",
      "moTa": " ",
      "sttHthi": 1,
      "tentatCapda": " ",
      "tenCapda": "Dưới 380V",
      "trangThai": 1,
      "_persistence_fetchGroup": null
    }, {
      "maCapda": "2",
      "moTa": " ",
      "sttHthi": 1,
      "tentatCapda": " ",
      "tenCapda": "Từ 380V đến dưới 6kV",
      "trangThai": 1,
      "_persistence_fetchGroup": null
    }, {
      "maCapda": "3",
      "moTa": " ",
      "sttHthi": 1,
      "tentatCapda": " ",
      "tenCapda": "Từ 6kV đến dưới 20kV",
      "trangThai": 1,
      "_persistence_fetchGroup": null
    }, {
      "maCapda": "4",
      "moTa": " ",
      "sttHthi": 1,
      "tentatCapda": " ",
      "tenCapda": "Từ 20kV đến dưới 22kV",
      "trangThai": 1,
      "_persistence_fetchGroup": null
    }, {
      "maCapda": "5",
      "moTa": " ",
      "sttHthi": 1,
      "tentatCapda": " ",
      "tenCapda": "Từ 22kV đến dưới 35kV",
      "trangThai": 1,
      "_persistence_fetchGroup": null
    }, {
      "maCapda": "6",
      "moTa": " ",
      "sttHthi": 1,
      "tentatCapda": " ",
      "tenCapda": "35kV",
      "trangThai": 1,
      "_persistence_fetchGroup": null
    }, {
      "maCapda": "7",
      "moTa": " ",
      "sttHthi": 1,
      "tentatCapda": " ",
      "tenCapda": "Trên 35kV đến dưới 110kV",
      "trangThai": 1,
      "_persistence_fetchGroup": null
    }, {
      "maCapda": "8",
      "moTa": " ",
      "sttHthi": 1,
      "tentatCapda": " ",
      "tenCapda": "Từ 110kV trở lên",
      "trangThai": 1,
      "_persistence_fetchGroup": null
    }, {
      "maCapda": "9",
      "moTa": " ",
      "sttHthi": 1,
      "tentatCapda": " ",
      "tenCapda": "Trên 220kV",
      "trangThai": 1,
      "_persistence_fetchGroup": null
    }];
  }
  delKyTruoc() {
    return this.idbSV.IDB_DB_DeleteAllKeepByIndex(this.db, this.api, 'KYCS', this.kyGCS).then(() => {
      console.log(`delKyTruoc`, this.kyGCS);
    });
  }
  ghiDuLieu(maso, data) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let getSoGCSByListSo = yield _this.cmis4SV.get_gcslichgcsByMaSogcs(maso, _this.thang, _this.nam);
      let NGAY_DKY = moment__WEBPACK_IMPORTED_MODULE_1___default()(getSoGCSByListSo.ngayDky).format('DD/MM/YYYY');
      let NGAY_CKY = moment__WEBPACK_IMPORTED_MODULE_1___default()(getSoGCSByListSo.ngayCky).format('DD/MM/YYYY');
      let body_getDDoSoGCS = {
        "KY": "1",
        "THANG": +_this.thang,
        "NAM": +_this.nam,
        "MA_SOGCS": maso,
        "MA_DVIQLY": "PK0500",
        "THANG_HT": +_this.thang,
        "NAM_HT": +_this.nam,
        "NGAY_DKY": NGAY_DKY,
        "NGAY_CKY": NGAY_CKY,
        "IS_DINH_KY": 1
      };
      let getDDoSoGCS = yield _this.cmis4SV.getDDoSoGCS(body_getDDoSoGCS);
      let body_getChiSo = {
        "KY": "1",
        "THANG": +_this.thang,
        "NAM": +_this.nam,
        "MA_SOGCS": maso,
        "MA_DVIQLY": "PK0500",
        "NGAY_CKY": NGAY_CKY,
        "LST_DDO": getDDoSoGCS,
        "IS_CHUANHAPCSO": true,
        "IS_CHOTCS": false
      };
      let getChiSo = yield _this.cmis4SV.getChiso(body_getChiSo);
      if ('TYPE' in getChiSo) return _this.plus.alertWarning('Không có dòng dữ liệu trên CMIS cần thao tác');
      let LST_CHISO = [];
      let modi = 0;
      for (let i = 0; i < getChiSo.length; i++) {
        let cmisData = getChiSo[i];
        let app4la;
        for (let ixls = 0; ixls < data.length; ixls++) {
          let item = data[ixls];
          if (item.MA_KHANG == cmisData.MA_KHANG && item.BCS == cmisData.BCS && item.CHISO_MOI && item.CHISO_MOI.toString().trim().length > 0 && +item.CHISO_MOI > +cmisData.CHISO_CU) {
            app4la = +item.CHISO_MOI;
            console.log(item.MA_KHANG, item.CHISO_MOI);
            break;
          }
        }
        cmisData.SLUONG_THAO = cmisData.SLUONG_THAO && cmisData.SLUONG_THAO.length > 0 ? cmisData.SLUONG_THAO : '0';
        cmisData.STT_GOC = cmisData.STT;
        const pTenCapda = _this.dmCapDienAp.filter(x => x.maCapda === cmisData.MA_CAPDA).map(x => x.tenCapda);
        cmisData.TEN_CAPDA = pTenCapda ? pTenCapda : '';
        cmisData.MA_CNANG = "54";
        cmisData.MA_DVICTREN = "PK";
        cmisData.NGUOI_SUA = _this.USERCMIS.USERNAME;
        cmisData.NGUOI_TAO = _this.USERCMIS.USERNAME;
        cmisData.NGAY_CKY = NGAY_CKY;
        cmisData.NGAY_DKY = NGAY_DKY;
        if (moment__WEBPACK_IMPORTED_MODULE_1___default()(NGAY_DKY).toDate() > moment__WEBPACK_IMPORTED_MODULE_1___default()(NGAY_CKY).toDate()) {
          cmisData.NGAY_DKY = cmisData.NGAY_CKY;
        }
        cmisData.DMLTYPE_CS = '';
        cmisData.CHISO_CU = cmisData.CHISO_CU && cmisData.CHISO_CU.length > 0 ? cmisData.CHISO_CU : '0';
        cmisData.SLUONG_TTIEP = cmisData.SLUONG_TTIEP && cmisData.SLUONG_TTIEP.length > 0 ? cmisData.SLUONG_TTIEP : '0';
        if (app4la > 0) {
          cmisData.CHISO_MOI = app4la.toString();
          cmisData.DMLTYPE = 'Insert';
          cmisData.SAN_LUONG = (parseFloat(cmisData.CHISO_MOI) - parseFloat(cmisData.CHISO_CU)).toString();
          cmisData.NGAY_PMAX = cmisData.NGAY_CKY;
          modi++;
        } else {
          cmisData.CHISO_MOI = cmisData.CHISO_MOI && cmisData.CHISO_MOI.length > 0 ? cmisData.CHISO_MOI : '';
          cmisData.DMLTYPE = '';
          cmisData.SAN_LUONG = cmisData.SAN_LUONG && cmisData.SAN_LUONG.length > 0 ? cmisData.SAN_LUONG : '0';
        }
        cmisData.TONG = parseFloat(cmisData.SAN_LUONG) + parseFloat(cmisData.SLUONG_TTIEP) + parseFloat(cmisData.SLUONG_THAO);
        LST_CHISO.push(cmisData);
      }
      let bodyNhapCS = {
        LST_CHISO: LST_CHISO,
        LST_LICH: [getSoGCSByListSo],
        LST_CHISODCN: []
      };
      console.log(LST_CHISO);
      if (modi == 0) {
        _this.plus.alertWarning('Không có dữ liệu để cập nhật.');
        return;
      }
      if (!confirm(`Cập nhật ${modi} dòng dữ liệu?`)) return;
      let x = yield _this.cmis4SV.ExcuteNhapCSDDK(bodyNhapCS).then(v => {
        _this.plus.alertSuccess();
      }).catch(err => {
        _this.plus.alertError('Có lỗi xảy ra khi cập nhật dữ liệu.');
      });
    })();
  }
  importRotPLC(data) {
    return this.fbSV.FBS_updateMany(`GCS_CMIS4/${this.kyGCS}`, data);
  }
  syncLichGhi() {
    this.loadSV.load('syncLichGhi');
    this.plus.alertMatSnackBar('Đang đồng bộ lịch ghi', 1000);
    return this.httpSV.updateLocalDB(this.db, this.apilich, localStorage.getItem('UNIT') + '-' + this.apilich);
  }
  save(data) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const updatedData = data.map(el => ({
        ...el,
        KYCS: _this2.kyGCS,
        dateModify: Date.now(),
        TRANG_THAI: 1
      }));
      const pathFBS = `GCS_CMIS4/${_this2.kyGCS}`;
      yield _this2.fbSV.FBS_updateMany(pathFBS, updatedData);
      yield _this2.idbSV.IDB_DB_Add(_this2.db, _this2.api, updatedData);
    })();
  }
  sync() {
    return this.fbSV.syncFirestoreToIndexedDB(`GCS_CMIS4/${this.kyGCS}`, this.api, this.dbName);
  }
  convertPK(pk) {
    const maKH = 'PK0500';
    const paddedPK = pk.padStart(7, '0');
    return maKH + paddedPK;
  }
  getPhanCong() {
    this.sheetdbSV.get(this.sheetID, 'PhanCong').subscribe(data => {
      console.log(data);
    });
  }
  getLichByMaSo(maso) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.idbSV.IDB_DB_GetAllByIndexKey(_this3.db, _this3.apilich, 'MA_SOGCS', '=', maso).then(res => {
        console.log(res);
        return res[0];
      });
    })();
  }
  summarizeData(data) {
    const summaryMap = new Map();
    data.forEach(item => {
      const {
        MA_SOGCS,
        TEN_TRAM,
        PHAN_CONG,
        CHISO_MOI,
        NGAY_GHI
      } = item;
      if (!MA_SOGCS) return;
      if (!summaryMap.has(MA_SOGCS)) {
        summaryMap.set(MA_SOGCS, {
          MA_SOGCS,
          TEN_TRAM,
          NGAY_GHI,
          PHAN_CONG,
          SL_GIAO: 0,
          SL_GHI: 0
        });
      }
      if (summaryMap.has(MA_SOGCS)) {
        summaryMap.get(MA_SOGCS).SL_GIAO += 1;
      }
      if (CHISO_MOI != null) {
        summaryMap.get(MA_SOGCS).SL_GHI += 1;
      }
    });
    return Array.from(summaryMap.values());
  }
  exportData(data) {
    const summaryMap = new Map();
    data.forEach(item => {
      const {
        MA_SOGCS,
        TEN_TRAM,
        PHAN_CONG,
        CHISO_MOI
      } = item;
      if (!MA_SOGCS) return;
      if (!summaryMap.has(MA_SOGCS)) {
        summaryMap.set(MA_SOGCS, {
          MA_SOGCS,
          TEN_TRAM,
          PHAN_CONG,
          SL_GIAO: 0,
          SL_GHI: 0
        });
      }
      if (summaryMap.has(MA_SOGCS)) {
        summaryMap.get(MA_SOGCS).SL_GIAO += 1;
      }
      if (CHISO_MOI) {
        summaryMap.get(MA_SOGCS).SL_GHI += 1;
      }
    });
    return Array.from(summaryMap.values());
  }
  static {
    this.ɵfac = function GhiChiSoService_Factory(t) {
      return new (t || GhiChiSoService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_2__.IndexeddbServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_3__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_share_services_firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_6__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_7__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_cmis4_cmis4_service__WEBPACK_IMPORTED_MODULE_8__.Cmis4Service));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: GhiChiSoService,
      factory: GhiChiSoService.ɵfac,
      providedIn: 'root'
    });
  }
}
var TRANG_THAI_GCS;
(function (TRANG_THAI_GCS) {
  TRANG_THAI_GCS[TRANG_THAI_GCS["CHUA_GHI"] = 0] = "CHUA_GHI";
  TRANG_THAI_GCS[TRANG_THAI_GCS["DA_GHI"] = 1] = "DA_GHI";
})(TRANG_THAI_GCS || (TRANG_THAI_GCS = {}));
var LOAI_CHISO;
(function (LOAI_CHISO) {
  LOAI_CHISO["KT"] = "KT";
  LOAI_CHISO["BT"] = "BT";
  LOAI_CHISO["CD"] = "CD";
  LOAI_CHISO["TD"] = "TD";
  LOAI_CHISO["SG"] = "SG";
  LOAI_CHISO["VC"] = "VC";
})(LOAI_CHISO || (LOAI_CHISO = {}));

/***/ }),

/***/ 59476:
/*!********************************************************************************!*\
  !*** ./src/app/share/pouchdb-utils/pouchdb-search/pouchdb-search.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PouchdbSearchComponent: () => (/* binding */ PouchdbSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_pouchdb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/pouchdb.service */ 32939);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/form.service */ 60064);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loading.service */ 4974);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 53719);











class PouchdbSearchComponent {
  constructor(pouchDBSV, formSV, loadSV) {
    this.pouchDBSV = pouchDBSV;
    this.formSV = formSV;
    this.loadSV = loadSV;
    this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.placeholder = 'Tìm kiếm (F2)';
    this.keySearch = 'keyWord';
    this.key = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.searchForm = this.formSV.fb.group({
      input: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]]
    });
  }
  ngOnInit() {}
  search() {
    this.loadSV.load('search pouchdb');
    this.key.emit(this.searchForm.value.input);
    console.log(this.dbName, this.searchForm.value.input);
    this.pouchDBSV.search(this.dbName, this.searchForm.value.input).then(v => {
      this.filter.emit(v);
      this.loadSV.loaded('search pouchdb');
    });
  }
  static {
    this.ɵfac = function PouchdbSearchComponent_Factory(t) {
      return new (t || PouchdbSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_0__.PouchdbService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PouchdbSearchComponent,
      selectors: [["app-pouchdb-search"]],
      inputs: {
        dbName: "dbName",
        placeholder: "placeholder",
        keySearch: "keySearch"
      },
      outputs: {
        filter: "filter",
        key: "key"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_0__.PouchdbService])],
      decls: 4,
      vars: 2,
      consts: [[3, "formGroup"], ["matInput", "", "id", "search-api", "formControlName", "input", 3, "placeholder", "keyup.enter"], ["matPrefix", "", "color", "warn", 3, "click"]],
      template: function PouchdbSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function PouchdbSearchComponent_Template_input_keyup_enter_1_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PouchdbSearchComponent_Template_mat_icon_click_2_listener() {
            return ctx.searchForm.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "clear");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatPrefix]
    });
  }
}

/***/ }),

/***/ 21392:
/*!****************************************************************!*\
  !*** ./src/app/share/pouchdb-utils/pouchdb-utils.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PouchdbUtilsComponent: () => (/* binding */ PouchdbUtilsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);

class PouchdbUtilsComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function PouchdbUtilsComponent_Factory(t) {
      return new (t || PouchdbUtilsComponent)();
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PouchdbUtilsComponent,
      selectors: [["app-pouchdb-utils"]],
      decls: 2,
      vars: 0,
      template: function PouchdbUtilsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pouchdb-utils works!\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
    });
  }
}

/***/ }),

/***/ 61343:
/*!*************************************************************!*\
  !*** ./src/app/share/pouchdb-utils/pouchdb-utils.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PouchdbUtilsModule: () => (/* binding */ PouchdbUtilsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _pouchdb_utils_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pouchdb-utils.component */ 21392);
/* harmony import */ var _pouchdb_search_pouchdb_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pouchdb-search/pouchdb-search.component */ 59476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ 343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);






class PouchdbUtilsModule {
  static {
    this.ɵfac = function PouchdbUtilsModule_Factory(t) {
      return new (t || PouchdbUtilsModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: PouchdbUtilsModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PouchdbUtilsModule, {
    declarations: [_pouchdb_utils_component__WEBPACK_IMPORTED_MODULE_0__.PouchdbUtilsComponent, _pouchdb_search_pouchdb_search_component__WEBPACK_IMPORTED_MODULE_1__.PouchdbSearchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
    exports: [_pouchdb_utils_component__WEBPACK_IMPORTED_MODULE_0__.PouchdbUtilsComponent, _pouchdb_search_pouchdb_search_component__WEBPACK_IMPORTED_MODULE_1__.PouchdbSearchComponent]
  });
})();

/***/ }),

/***/ 57923:
/*!*****************************************************!*\
  !*** ./src/app/share/services/firestore.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirestoreService: () => (/* binding */ FirestoreService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 71985);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70152);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54843);
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uid */ 10723);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 30003);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 48256);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _indexeddbV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indexeddbV2.service */ 4045);
/* harmony import */ var _plus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plus.service */ 22014);










class FirestoreService {
  constructor(afs, toastr, loadSV, idbSV, plus) {
    this.afs = afs;
    this.toastr = toastr;
    this.loadSV = loadSV;
    this.idbSV = idbSV;
    this.plus = plus;
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.chunkSize = 200;
  }
  unsub() {
    this.subs.unsubscribe();
  }
  sync(path, dbName, collectionLocal) {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(obs => {
      this.idbSV.IDB_InitDB(dbName).subscribe( /*#__PURE__*/function () {
        var _ref = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (db) {
          const maxLocalTimestamp = yield _this.idbSV.IDB_GetMax(db, collectionLocal);
          let queryRef;
          if (maxLocalTimestamp > 0) {
            queryRef = _this.afs.collection(path, ref => ref.where('dateModify', '>', maxLocalTimestamp));
          } else {
            queryRef = _this.afs.collection(path);
          }
          return _this.subs = queryRef.valueChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(1000)).subscribe({
            next: function () {
              var _ref2 = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (docs) {
                console.log(`[syncFirestoreToIndexedDB] New documents to update:`, docs.length);
                if (docs.length > 0) {
                  yield _this.idbSV.IDB_DB_Add(db, collectionLocal, docs);
                }
                obs.next(collectionLocal);
                console.log(`[syncFirestoreToIndexedDB] Update complete.`);
              });
              return function next(_x2) {
                return _ref2.apply(this, arguments);
              };
            }(),
            error: err => {
              console.error(`[syncFirestoreToIndexedDB] Error:`, err);
              _this._toastWarn('Lỗi khi đồng bộ dữ liệu! Vui lòng kiểm tra kết nối mạng.');
              throw err;
            },
            complete: () => {
              console.log(`[syncFirestoreToIndexedDB] Sync complete.`);
              obs.next(collectionLocal);
            }
          });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }
  syncFirestoreToIndexedDB(_x3, _x4, _x5) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (path, collectionLocal, dbName, subDbName = '') {
      const db = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this2.idbSV.IDB_InitDB(dbName, subDbName));
      const maxLocalTimestamp = yield _this2.idbSV.IDB_GetMax(db, collectionLocal);
      console.log(`[syncFirestoreToIndexedDB] Max timestamp from IndexedDB:`, maxLocalTimestamp);
      let queryRef;
      if (maxLocalTimestamp > 0) {
        queryRef = _this2.afs.collection(path, ref => ref.where('dateModify', '>', maxLocalTimestamp));
      } else {
        queryRef = _this2.afs.collection(path);
      }
      _this2.subs?.unsubscribe();
      return _this2.subs = queryRef.valueChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(1000)).subscribe({
        next: function () {
          var _ref3 = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (docs) {
            console.log(`[syncFirestoreToIndexedDB] New documents to update:`, docs.length);
            if (docs.length > 0) {
              yield _this2.idbSV.IDB_DB_Add(db, collectionLocal, docs);
            }
            console.log(`[syncFirestoreToIndexedDB] Update complete.`);
          });
          return function next(_x6) {
            return _ref3.apply(this, arguments);
          };
        }(),
        error: err => {
          console.error(`[syncFirestoreToIndexedDB] Error:`, err);
          _this2.handleError(path, 'sync', err);
          throw err;
        },
        complete: () => {
          console.log(`[syncFirestoreToIndexedDB] Sync complete.`);
        }
      });
    }).apply(this, arguments);
  }
  FBS_set(path, id, item) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = _this3.addBaseProperty(item);
      _this3.loadSV.load('FBS_set');
      console.log(`FBS_set()`, path, id, body);
      if (!id) {
        return alert('_id không hơp lệ');
      }
      return _this3.afs.collection(path).doc(id).set(body).then(v => {
        _this3.loadSV.loaded('FBS_set');
        _this3.logger(path, body, `FBS_set `, true);
        _this3._toastSuccess();
      }).catch(err => {
        _this3.handleError(path, 'FBS_set', err);
      });
    })();
  }
  FBS_setMany(path, arr) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (arr.length > 1000) return alert('Vui lòng thao tác nhỏ hơn 1000 dữ liệu!');
      _this4.loadSV.load('FBS_setMany', path);
      let chunkSize = _this4.chunkSize;
      let dos = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        console.log(`chunk`, chunk);
        const batch = _this4.afs.firestore.batch();
        for (let i2 = 0; i2 < chunk.length; i2++) {
          const el = chunk[i2];
          const ref = _this4.afs.firestore.collection(path).doc(el[`_id`]);
          batch.set(ref, _this4.addBaseProperty(el));
        }
        dos.push(batch.commit());
        console.log(`FBS_setMany`, path, chunk);
      }
      return Promise.allSettled(dos).then(values => {
        _this4.logger(path, arr, `FBS_setMany `, true);
        _this4.loadSV.loaded('FBS_setMany', path);
        console.log(`FBS_setMany()`, path, arr);
      }).catch(err => {
        _this4.loadSV.loaded('FBS_setMany', path);
        _this4.handleError(path, 'FBS_set', err);
      });
    })();
  }
  FBS_add(path, obj) {
    return new Promise((resolve, reject) => {
      let body = this.addBaseProperty(obj);
      body['_id'] = (0,uid__WEBPACK_IMPORTED_MODULE_1__.uid)(25);
      console.log(` FBS_add`, path, body);
      this.afs.collection(path).doc(body['_id']).set(body).then(val => {
        resolve(body);
        this.logger(path, body, `FBS_add `, true);
        this._toastSuccess();
      }).catch(err => {
        this.handleError(path, 'FBS_add', err);
      });
    });
  }
  FBS_addMany(path, arr) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (arr.length > 1000) return alert('Vui lòng thao tác nhỏ hơn 1000 dữ liệu!');
      _this5.loadSV.load('FBS_addMany', path);
      let chunkSize = _this5.chunkSize;
      let dos = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        console.log(`chunk`, chunk);
        const batch = _this5.afs.firestore.batch();
        for (let i2 = 0; i2 < chunk.length; i2++) {
          const el = chunk[i2];
          el._id = el._id ? el._id : (0,uid__WEBPACK_IMPORTED_MODULE_1__.uid)(25);
          let body = _this5.addBaseProperty(el);
          body.dateModify = Date.now() + i;
          if (!body[`_id`]) {
            return alert('_id không hơp lệ');
          }
          const ref = _this5.afs.firestore.collection(path).doc(body[`_id`]);
          batch.set(ref, body);
        }
        dos.push(batch.commit());
        console.log(`FBS_addMany`, path, chunk);
      }
      return Promise.all(dos).then(values => {
        _this5._toastSuccess();
        _this5.logger(path, arr, `FBS_addMany `, true);
        _this5.loadSV.loaded('FBS_addMany', path);
        console.log(`FBS_addMany()`, path, arr);
      }).catch(err => {
        _this5.loadSV.loaded('FBS_addMany', path);
        _this5.handleError(path, 'FBS_addMany', err);
      });
    })();
  }
  FBS_update(pathNoId, id, obj) {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = obj;
      body[`dateModify`] = Date.now();
      _this6.loadSV.load(`FBS_update`, pathNoId);
      if (!id) {
        return alert('_id không hơp lệ');
      }
      console.log(`FBS_update`, pathNoId, id, body);
      yield _this6.afs.collection(pathNoId).doc(id).set(body, {
        merge: true
      }).then(val => {
        _this6._toastSuccess();
        _this6.loadSV.loaded(`FBS_update`, pathNoId);
        _this6.logger(pathNoId, body, `FBS_update: `, true);
      }).catch(err => {
        _this6.loadSV.loaded(`FBS_update`, pathNoId);
        _this6.handleError(pathNoId, 'FBS_update', err);
      });
    })();
  }
  FBS_updateMany(path, arr) {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.loadSV.load('FBS_updateMany', path);
      const now = Date.now();
      let chunkSize = _this7.chunkSize;
      let dos = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        console.log(`chunk`, chunk);
        const batch = _this7.afs.firestore.batch();
        for (let i2 = 0; i2 < chunk.length; i2++) {
          const el = chunk[i2];
          let body = el;
          if (!body[`_id`]) {
            return alert('_id không hơp lệ');
          }
          body['dateModify'] = now + i2;
          const ref = _this7.afs.firestore.collection(path).doc(body[`_id`]);
          batch.set(ref, body, {
            merge: true
          });
        }
        dos.push(batch.commit());
        console.log(`FBS_updateMany`, path, arr);
      }
      return Promise.allSettled(dos).then(values => {
        _this7._toastSuccess();
        _this7.logger(path, arr, `FBS_updateMany `, true);
        _this7.loadSV.loaded('FBS_updateMany', path);
        console.log(`FBS_updateMany()`, path, arr);
      }).catch(err => {
        _this7.loadSV.loaded('FBS_updateMany', path);
        _this7.handleError(path, 'FBS_set', err);
      });
    })();
  }
  FBS_getById(path, id) {
    console.log('FBS_getById', path, id);
    this.logger(path, id, `FBS_getById`, null);
    return this.afs.collection(path).doc(id).valueChanges();
  }
  FBS_GetByQuery(path, where, query, value) {
    console.log('FBS_GetByQuery', path, where + query + value);
    this.logger(path, where + value, 'FBS_GetByQuery ', null);
    return this.afs.collection(path, ref => ref.where(where, query, value).orderBy(where, "desc")).valueChanges();
  }
  FBS_Delete_ID(path, id) {
    return new Promise((resolve, reject) => {
      console.log(`FBS_Delete_ID()`, path, id);
      this.loadSV.load('FBS_Delete_ID', path);
      this.afs.collection(path).doc(id).delete().then(v => {
        this.logger(path, id, `FBS_Delete_ID `, true);
        this.loadSV.loaded('FBS_Delete_ID', path);
        this._toastSuccess();
        resolve(true);
      }).catch(err => {
        this.loadSV.loaded('FBS_Delete_ID', path);
        this.handleError(path, 'FBS_Delete_ID' + id, err);
      });
    });
  }
  FBS_deleteMany(path, arr) {
    if (arr.length > 1000) return alert('Vui lòng thao tác nhỏ hơn 1000 dữ liệu!');
    this.loadSV.load('FBS_deleteMany', path);
    let chunkSize = this.chunkSize;
    let dos = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      console.log(`chunk`, chunk);
      const batch = this.afs.firestore.batch();
      for (let i2 = 0; i2 < chunk.length; i2++) {
        const el = chunk[i2];
        const ref = this.afs.firestore.collection(path).doc(el._id);
        batch.delete(ref);
      }
      dos.push(batch.commit());
      console.log(`FBS_updateMany`, path, arr);
    }
    Promise.allSettled(dos).then(values => {
      this._toastSuccess();
      this.logger(path, arr, `FBS_updateMany `, true);
      this.loadSV.loaded('FBS_deleteMany', path);
      console.log(`FBS_updateMany()`, path, arr);
    }).catch(err => {
      this.loadSV.loaded('FBS_deleteMany', path);
      this.handleError(path, 'FBS_deleteMany', err);
    });
  }
  FBS_Disable_ID(path, id) {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(`FBS_Disable_ID()`, path, id);
      const ok = confirm('Bạn muốn xóa?');
      if (!ok) return;
      _this8.loadSV.load('FBS_Disable_ID', path);
      _this8.afs.collection(path).doc(id).update({
        status: 0,
        dateModify: Date.now()
      }).then(v => {
        console.log(v);
        _this8.logger(path, id, `FBS_Delete_ID `, true);
        _this8.loadSV.loaded('FBS_Disable_ID', path);
      }).catch(err => {
        _this8.loadSV.loaded('FBS_Disable_ID', path);
        _this8.handleError(path, 'FBS_Disable_ID', err);
      });
    })();
  }
  FBS_DisableMany(path, arr) {
    this.loadSV.load('FBS_DisableMany', path);
    let chunkSize = this.chunkSize;
    let dos = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      console.log(`chunk`, chunk);
      const batch = this.afs.firestore.batch();
      for (let i2 = 0; i2 < chunk.length; i2++) {
        const el = chunk[i2];
        const ref = this.afs.firestore.collection(path).doc(el._id);
        batch.update(ref, {
          status: 0
        });
      }
      dos.push(batch.commit());
      console.log(`FBS_DisableMany`, path, arr);
    }
    Promise.allSettled(dos).then(values => {
      this._toastSuccess();
      this.logger(path, arr, `FBS_DisableMany `, true);
      this.loadSV.loaded('FBS_DisableMany', path);
      console.log(`FBS_updateMany()`, path, arr);
    }).catch(error => {
      this.loadSV.loaded('FBS_DisableMany', path);
      console.error(`FBS_DisableMany`, path, error);
      this.logger(path, arr, `FBS_DisableMany ERR` + error, false);
    });
  }
  logger(api, data, method, error = true) {}
  _toastErr(msg = '') {
    this.toastr.error(msg);
    if (msg == 'Missing or insufficient permissions') {
      this.toastr.error('Bạn chưa được cấp quyền truy cập!');
    }
  }
  _toastSuccess(msg = '') {
    this.toastr.success(msg, 'Lưu thành công');
  }
  _toastWarn(msg = '') {
    this.toastr.warning(msg, 'Cảnh báo');
  }
  _setOpt(obj, module) {
    this.idbSV.IDB_InitDB('firebase-local').subscribe(db => {
      let enc = Buffer.from(JSON.stringify(obj)).toString('base64');
      let body = {
        _id: obj._id + module,
        module: module,
        key: enc,
        status: 1
      };
      this.idbSV.IDB_DB_Add(db, 'any', body);
    });
  }
  _getOpt(module = '') {
    return new Promise(resolve => {
      this.idbSV.IDB_InitDB('firebase-local').subscribe(db => {
        let data = [];
        let one = null;
        this.idbSV.IDB_DB_GetAll(db, 'any').subscribe(res => {
          for (let i = 0; i < res.length; i++) {
            const el = res[i]['key'];
            let body = JSON.parse(Buffer.from(el, 'base64').toString());
            res[i]['module'] == module ? one = body : null;
            data.push(body);
          }
          if (module.length > 0 && one) {
            resolve(one);
          } else if (module.length == 0 && data.length > 0) {
            resolve(data);
          }
        });
      });
    });
  }
  addBaseProperty(body) {
    delete body['keyword'];
    body['sync'] = navigator.onLine ? 1 : 0;
    body['dateModify'] = Date.now();
    body['status'] = 1;
    return body;
  }
  chunk(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
  handleError(path, func, err) {
    const firebaseErr = {
      "unknown": 'Lỗi không xác định',
      "invalid-argument": 'Không thành công, vui lòng thử lại sau',
      "unauthenticated": 'Chưa xác thực, vui lòng đăng nhập.',
      "data-loss": 'Dữ liệu bị lỗi',
      "unavailable": 'Lỗi kết nối hoặc đường truyền không ổn định',
      "internal": 'Lỗi không xác định',
      "cancelled": 'Hoạt động đã bị hủy bỏ',
      "deadline-exceeded": 'Đã quá thời hạn phản hồi',
      "not-found": 'Không tìm thấy tài liệu',
      "already-exists": 'Một số tài liệu mà chúng tôi cố gắng tạo đã tồn tại',
      "permission-denied": 'Quyền truy cập bị từ chối',
      "resource-exhausted": 'Một số tài nguyên đã cạn kiệt hoặc hệ thống tệp đã hết dung lượng',
      "failed-precondition": 'Thao tác bị từ chối vì hệ thống không ở trạng thái cần thiết để thực hiện thao tác',
      "aborted": 'Hoạt động đã bị hủy bỏ',
      "out-of-range": 'Thao tác đã được thực hiện ngoài phạm vi hợp lệ',
      "unimplemented": 'Hoạt động không được thực hiện hoặc không được hỗ trợ/kích hoạt'
    };
    err._id = (0,uid__WEBPACK_IMPORTED_MODULE_1__.uid)(4);
    this.afs.collection(`logger/${moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY')}/${moment__WEBPACK_IMPORTED_MODULE_2___default()().format('MM')}/${moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD')}/false`, err);
    this._toastWarn(firebaseErr[err.code]);
  }
  static {
    this.ɵfac = function FirestoreService_Factory(t) {
      return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_4__.IndexeddbServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_plus_service__WEBPACK_IMPORTED_MODULE_5__.PlusService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: FirestoreService,
      factory: FirestoreService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);