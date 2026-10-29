"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["src_app_nlmt_nlmt_module_ts"],{

/***/ 93842:
/*!*******************************************************************!*\
  !*** ./src/app/nlmt/nlmt-khach-hang/nlmt-khach-hang.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NlmtKhachHangComponent: () => (/* binding */ NlmtKhachHangComponent)
/* harmony export */ });
/* harmony import */ var src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/share/services/pouchdb.service */ 32939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);


class NlmtKhachHangComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function NlmtKhachHangComponent_Factory(t) {
      return new (t || NlmtKhachHangComponent)();
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NlmtKhachHangComponent,
      selectors: [["app-nlmt-khach-hang"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_0__.PouchdbService])],
      decls: 2,
      vars: 0,
      template: function NlmtKhachHangComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " nlmt-khach-hang works!\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }
    });
  }
}

/***/ }),

/***/ 11142:
/*!*******************************************************************!*\
  !*** ./src/app/nlmt/nlmt-kinh-doanh/nlmt-kinh-doanh.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NlmtKinhDoanhComponent: () => (/* binding */ NlmtKinhDoanhComponent)
/* harmony export */ });
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uid */ 10723);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/pouchdb.service */ 32939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var _nlmt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nlmt.service */ 74712);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var src_app_share_services_email_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/email.service */ 11145);
/* harmony import */ var src_app_share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/share/services/indexeddb.service */ 90657);
/* harmony import */ var src_app_cmis4_cmis4_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/cmis4/cmis4.service */ 61836);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 88834);
















class NlmtKinhDoanhComponent {
  constructor(formSV, plus, fb, excelSv, nlmtSv, authSV, loadSV, emailSV, idbSV, cmis4SV, pouchDBSV) {
    this.formSV = formSV;
    this.plus = plus;
    this.fb = fb;
    this.excelSv = excelSv;
    this.nlmtSv = nlmtSv;
    this.authSV = authSV;
    this.loadSV = loadSV;
    this.emailSV = emailSV;
    this.idbSV = idbSV;
    this.cmis4SV = cmis4SV;
    this.pouchDBSV = pouchDBSV;
    this.title = 'Lập bảng kê';
    this.global = true;
    this.dbName = 'dien-luc';
    this.level = 0;
    this.db = null;
    this.items = [];
    this.selectedItem = null;
    this.selectedItems = [];
    this.filter = [];
    this.errors = [];
    this.pageSize = 20;
    this.pageIndex = 0;
    this.tongTienBangKe = 0;
    this.dataInXls = [];
    this.duplicateItems = [];
    this.wordFile = null;
    this.emails = [];
    this.i = 0;
    this.startDay = new Date();
    this.bangKe = [];
    this.readFileDone = false;
    this.step = 0;
    this.TongPhatLen = 0;
    this.ThanhTienTruocThue = 0;
    this.Thue = 0;
    this.ThanhTienSauThue = 0;
    this.itemsReport = [];
    this.itemsReportNoBill = [];
    this.all = false;
    this.statusNumber = 1;
    this.nameBill = (0,uid__WEBPACK_IMPORTED_MODULE_0__.uid)(4);
    this.allowLoadmore = true;
    this.bangKeChiSo = [];
    this.uploadProgress = 0;
    this.searchForm = this.formSV.fb.group({
      input: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(4)]]
    });
  }
  ngOnInit() {
    this.plus.setTiTle(this.title);
    this.authSV.user.subscribe(user => {
      this.user = user;
      this.pouchDBSV.connectRemote(this.nlmtSv.dbInput).subscribe(() => {
        this.getAllIDB();
      });
    });
    this.nameBill = '';
    this.month = +new Date().getMonth() + 1;
    this.year = +new Date().getFullYear();
  }
  getAllIDB() {
    this.pouchDBSV.getAll(this.nlmtSv.dbInput).then(v => {
      this.items = v;
      this.getInit();
    });
  }
  getInit() {
    this.pouchDBSV.getDocsByKeyValue(this.nlmtSv.dbInput, 'TrangThaiHoSo', 2, '<').then(res => {
      console.log(res);
    });
  }
  static {
    this.ɵfac = function NlmtKinhDoanhComponent_Factory(t) {
      return new (t || NlmtKinhDoanhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_2__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_nlmt_service__WEBPACK_IMPORTED_MODULE_5__.NlmtService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_6__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_email_service__WEBPACK_IMPORTED_MODULE_8__.EmailService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_9__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_cmis4_cmis4_service__WEBPACK_IMPORTED_MODULE_10__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_1__.PouchdbService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: NlmtKinhDoanhComponent,
      selectors: [["app-nlmt-kinh-doanh"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_1__.PouchdbService])],
      decls: 4,
      vars: 0,
      consts: [[1, "container"], [1, "row"], ["mat-raised-button", ""]],
      template: function NlmtKinhDoanhComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton]
    });
  }
}

/***/ }),

/***/ 10048:
/*!****************************************!*\
  !*** ./src/app/nlmt/nlmt.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NlmtComponent: () => (/* binding */ NlmtComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);

class NlmtComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function NlmtComponent_Factory(t) {
      return new (t || NlmtComponent)();
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NlmtComponent,
      selectors: [["app-nlmt"]],
      decls: 2,
      vars: 0,
      template: function NlmtComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nlmt works!\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
    });
  }
}

/***/ }),

/***/ 81967:
/*!*************************************!*\
  !*** ./src/app/nlmt/nlmt.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NlmtModule: () => (/* binding */ NlmtModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _nlmt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nlmt.component */ 10048);
/* harmony import */ var _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/drop-file/drop-file.module */ 96115);
/* harmony import */ var _share_import_excel_import_excel_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/import-excel/import-excel.module */ 4247);
/* harmony import */ var _nlmt_kinh_doanh_nlmt_kinh_doanh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nlmt-kinh-doanh/nlmt-kinh-doanh.component */ 11142);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/share.module */ 64039);
/* harmony import */ var _nlmt_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nlmt.routing */ 19613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);









class NlmtModule {
  static {
    this.ɵfac = function NlmtModule_Factory(t) {
      return new (t || NlmtModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: NlmtModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _nlmt_routing__WEBPACK_IMPORTED_MODULE_5__.NlmtRoutes, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_1__.DropFileModule, _share_import_excel_import_excel_module__WEBPACK_IMPORTED_MODULE_2__.ImportExcelModule, _share_share_module__WEBPACK_IMPORTED_MODULE_4__.ShareModule, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_1__.DropFileModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NlmtModule, {
    declarations: [_nlmt_component__WEBPACK_IMPORTED_MODULE_0__.NlmtComponent, _nlmt_kinh_doanh_nlmt_kinh_doanh_component__WEBPACK_IMPORTED_MODULE_3__.NlmtKinhDoanhComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_1__.DropFileModule, _share_import_excel_import_excel_module__WEBPACK_IMPORTED_MODULE_2__.ImportExcelModule, _share_share_module__WEBPACK_IMPORTED_MODULE_4__.ShareModule, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_1__.DropFileModule]
  });
})();

/***/ }),

/***/ 19613:
/*!**************************************!*\
  !*** ./src/app/nlmt/nlmt.routing.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NlmtRoutes: () => (/* binding */ NlmtRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _nlmt_kinh_doanh_nlmt_kinh_doanh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nlmt-kinh-doanh/nlmt-kinh-doanh.component */ 11142);
/* harmony import */ var _nlmt_khach_hang_nlmt_khach_hang_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nlmt-khach-hang/nlmt-khach-hang.component */ 93842);



const routes = [{
  path: 'nlmt-kinh-doanh',
  component: _nlmt_kinh_doanh_nlmt_kinh_doanh_component__WEBPACK_IMPORTED_MODULE_0__.NlmtKinhDoanhComponent
}, {
  path: 'nlmt-khach-hang',
  component: _nlmt_khach_hang_nlmt_khach_hang_component__WEBPACK_IMPORTED_MODULE_1__.NlmtKhachHangComponent
}];
const NlmtRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes);

/***/ }),

/***/ 74712:
/*!**************************************!*\
  !*** ./src/app/nlmt/nlmt.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NlmtService: () => (/* binding */ NlmtService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ 92887);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/services/plus.service */ 22014);
/* harmony import */ var _share_services_crypt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/services/crypt.service */ 50962);






class NlmtService {
  constructor(fb, plus, cryptSV) {
    this.fb = fb;
    this.plus = plus;
    this.cryptSV = cryptSV;
    this.apiInput = 'nlmt-kinh-doanh';
    this.dbInput = 'dmt-input';
    this.apiKhachHang = 'dmt-khach-hang';
    this.apiPay = 'dmt-pay';
    this.dbKhachHang = 'dmt-khach-hang$' + localStorage.getItem('UNIT');
    this.dbPay = 'dmt-pay$' + localStorage.getItem('UNIT');
    this.workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();
    this.payForm = this.fb.group({
      _id: [, []],
      TenBangKe: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      TrangThai: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      LichSuCapNhat: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      TongPhatLen: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.plus.regex_integer())]],
      ThanhTienTruocThue: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.plus.regex_integer())]],
      Thue: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.plus.regex_integer())]],
      ThanhTienSauThue: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.plus.regex_integer())]],
      DanhSach: []
    });
    this.inputForm = this.fb.group({
      Email: [''],
      MaKhachHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      KhachHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      DiaChi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      MaGCS: [''],
      ChuTaiKhoan: [],
      SoTaiKhoan: [],
      NganHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      Nam: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[0-9]*$")]],
      Thang: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[0-9]*$")]],
      SanLuong: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.plus.regex_integer())]],
      DonGia: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.plus.regex_integer())]],
      TruocThue: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.plus.regex_integer())]],
      Thue: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.plus.regex_integer())]],
      TongTien: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.plus.regex_integer())]],
      KyHieuHoaDon: ['', []],
      SoHoaDon: ['', []],
      CCCD: ['', []],
      NgayHoaDon: ['', []],
      TrangThai: [''],
      DaGuiMail: [0],
      NgayMuaHang: ['', []]
    });
    this.importForm = this.fb.group({
      keyWord: ['', []],
      _id: ['', []],
      TONG_TIEN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^-?[0-9]\\d*$")]],
      MA_DVIQLY: ['', []],
      TKHOAN_KHANG: ['', []],
      MA_NHANG: ['', []],
      TEN_NHANG: ['', []],
      MA_SOGCS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      TYLE_THUE: ['', []],
      DIEN_TTHU: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^-?[0-9]\\d*$")]],
      SO_TIEN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^-?[0-9]\\d*$")]],
      DCHI_KHANG: ['', []],
      MA_KHANG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10)]],
      TIEN_GTGT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^-?[0-9]\\d*$")]],
      TEN_KHANG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      NGAY_GCS: ['', []],
      DON_GIA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[0-9]*$")]]
    });
  }
  static {
    this.ɵfac = function NlmtService_Factory(t) {
      return new (t || NlmtService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_share_services_crypt_service__WEBPACK_IMPORTED_MODULE_2__.CryptService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: NlmtService,
      factory: NlmtService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);