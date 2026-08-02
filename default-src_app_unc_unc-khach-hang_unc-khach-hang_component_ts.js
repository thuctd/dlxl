"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["default-src_app_unc_unc-khach-hang_unc-khach-hang_component_ts"],{

/***/ 99989:
/*!*******************************************************!*\
  !*** ./src/app/share/services/bank-lookup.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankLookupService: () => (/* binding */ BankLookupService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _plus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus.service */ 22014);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);





class BankLookupService {
  constructor(plus, loadSV) {
    this.plus = plus;
    this.loadSV = loadSV;
  }
  getBanks() {
    return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get('https://api.banklookup.net/api/bank/list').then(v => {
      return v.data.data;
    });
  }
  getApiKey() {
    const response = axios__WEBPACK_IMPORTED_MODULE_3__["default"].get('https://raw.githubusercontent.com/thuctd/FileStore/master/vietqr.json').then(v => {
      console.log(v.data);
      localStorage.setItem('vietqr', JSON.stringify(v.data));
    });
  }
  check(body) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loadSV.load('UNC-CHECK');
      return new Promise((resolve, reject) => {
        return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('https://api.banklookup.net', body, {
          headers: {
            'x-api-key': 'af750e1f-e72a-4051-8d76-948ea5bd280fkey',
            'x-api-secret': '3beb091c-b863-4872-ab1e-3bf6fd3aa5d2secret'
          },
          timeout: 10000
        }).then(v => {
          _this.loadSV.loaded('UNC-CHECK');
          console.log(v.data);
          resolve(v);
        }).catch(e => {
          _this.loadSV.loaded('UNC-CHECK');
          console.log(e);
          resolve(false);
        });
      });
    })();
  }
  static {
    this.ɵfac = function BankLookupService_Factory(t) {
      return new (t || BankLookupService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_plus_service__WEBPACK_IMPORTED_MODULE_1__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: BankLookupService,
      factory: BankLookupService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 36531:
/*!****************************************************************!*\
  !*** ./src/app/unc/unc-khach-hang/unc-khach-hang.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UncKhachHangComponent: () => (/* binding */ UncKhachHangComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var src_app_share_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/animate */ 27121);
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uid */ 10723);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 70152);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/pouchdb.service */ 32939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/http.serviceV2 */ 24950);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/share/docxtemplate/docxtemplate.service */ 41982);
/* harmony import */ var src_app_share_services_bank_lookup_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/share/services/bank-lookup.service */ 99989);
/* harmony import */ var _unc_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../unc.service */ 30028);
/* harmony import */ var src_app_share_services_telegram_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/share/services/telegram.service */ 21421);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ 60850);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ 11161);
/* harmony import */ var _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../share/loadmore/loadmore/loadmore.component */ 43716);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);
/* harmony import */ var _share_custom_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../share/custom.pipe */ 78061);
































function UncKhachHangComponent_mat_expansion_panel_1_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_mat_expansion_panel_1_mat_option_16_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r9);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r8.selectBank(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r7.icon_url, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("alt", item_r7.short_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", item_r7.name, " - ", item_r7.short_name, "");
  }
}
function UncKhachHangComponent_mat_expansion_panel_1_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-error", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "T\u00CAN T\u00C0I KHO\u1EA2N: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r4.accountName, " ");
  }
}
function UncKhachHangComponent_mat_expansion_panel_1_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 2)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, " Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "app-drop-files", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("files", function UncKhachHangComponent_mat_expansion_panel_1_div_81_Template_app_drop_files_files_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r10.onDropFile($event));
    })("ondragover", function UncKhachHangComponent_mat_expansion_panel_1_div_81_Template_app_drop_files_ondragover_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r12.ondragover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_mat_expansion_panel_1_div_81_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r13.import());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "Import");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("label", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r6.items.length == 0 && ctx_r6.importItems.length > 0);
  }
}
function UncKhachHangComponent_mat_expansion_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-expansion-panel", 20)(1, "mat-expansion-panel-header")(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "L\u1EACP PHI\u1EBEU CHI");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 22)(5, "div", 23)(6, "div", 24)(7, "mat-form-field")(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Ng\u00E2n h\u00E0ng \u0111\u01A1n v\u1ECB nh\u1EADn ti\u1EC1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_mat_expansion_panel_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r14.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "mat-autocomplete", null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](16, UncKhachHangComponent_mat_expansion_panel_1_mat_option_16_Template, 3, 4, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 29)(18, "mat-form-field", 30)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20, "S\u1ED1 t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "input", 31)(22, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "div", 29)(24, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_mat_expansion_panel_1_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r16.check());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25, " Ki\u1EC3m tra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "button", 34)(27, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, "qr_code_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div", 23)(30, "div", 24)(31, "mat-form-field", 30)(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](33, "Kh\u00E1ch h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](34, "input", 36)(35, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "div", 29)(37, "mat-form-field", 30)(38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](39, "T\u1EC9nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](40, "input", 37)(41, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "div", 29)(43, "mat-form-field", 30)(44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](45, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](46, "input", 38)(47, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](48, UncKhachHangComponent_mat_expansion_panel_1_mat_error_48_Template, 4, 1, "mat-error", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](49, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](50, "div", 23)(51, "div", 40)(52, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_mat_expansion_panel_1_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r17.saveCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](53, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](54, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](55, "div", 22)(56, "h5", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](57, "Th\u00F4ng tin thanh to\u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](58, "div", 43)(59, "mat-form-field", 30)(60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](61, "S\u1ED1 ti\u1EC1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("input", function UncKhachHangComponent_mat_expansion_panel_1_Template_input_input_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](63);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r18.formatNumber(_r5.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](64, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 46)(66, "mat-form-field", 30)(67, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](68, "N\u1ED9i dung");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](69, "input", 47)(70, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](71, "div", 48)(72, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](74, "bangChu");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](75, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_mat_expansion_panel_1_Template_button_click_75_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r19.printOrSave(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](76, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](77, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](78, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_mat_expansion_panel_1_Template_button_click_78_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r20.printOrSave(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](79, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](80, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](81, UncKhachHangComponent_mat_expansion_panel_1_div_81_Template, 7, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](15);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("expanded", ctx_r0.isexpanded)("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx_r0.main);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matAutocomplete", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r0.banksOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r0.main.controls["code"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r0.main.controls["code"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.accountName.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx_r0.uncForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" B\u1EB1ng ch\u1EEF: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](74, 13, ctx_r0.uncForm.value.SoTien), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r0.uncForm.invalid || ctx_r0.main.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r0.uncForm.invalid || ctx_r0.main.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.checkPer(4));
  }
}
function UncKhachHangComponent_tr_25_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r21.err);
  }
}
function UncKhachHangComponent_tr_25_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_tr_25_mat_icon_11_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r25.onDelete(item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UncKhachHangComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_tr_25_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r29);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r28.onEdit(item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_tr_25_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r29);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r30.onEdit(item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_tr_25_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r29);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r31.onEdit(item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_tr_25_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r29);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r32.onEdit(item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, UncKhachHangComponent_tr_25_td_9_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, UncKhachHangComponent_tr_25_mat_icon_11_Template, 2, 0, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td")(13, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_tr_25_Template_mat_icon_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r29);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r33.onEdit(item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r21.TenKhachHang);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r21.SoTK);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r21.NganHang);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r21.Tinh);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r21.err);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.checkPer(2));
  }
}
class UncKhachHangComponent {
  constructor(httpSV, formSV, authSV, plus, loadSV, excelSV, docxSV, bankSV, uncSV, pouchDBSV, teleSV) {
    this.httpSV = httpSV;
    this.formSV = formSV;
    this.authSV = authSV;
    this.plus = plus;
    this.loadSV = loadSV;
    this.excelSV = excelSV;
    this.docxSV = docxSV;
    this.bankSV = bankSV;
    this.uncSV = uncSV;
    this.pouchDBSV = pouchDBSV;
    this.teleSV = teleSV;
    this.main = this.formSV.fb.group({
      _id: ['', []],
      TenKhachHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
      SoTK: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3), this.formSV.pattern_letterAndNumber()]],
      NganHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3)]],
      Tinh: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
      DienThoai: ['', []],
      bin: ['', []],
      code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), this.formSV.pattern_letterAndNumber()]],
      Checked: [false, []]
    });
    this.uncForm = this.formSV.fb.group({
      SoTien: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1)]],
      NoiDung: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(5)]],
      SoPhieu: ['', []],
      maUNC: ['VCB']
    });
    this.uncFormHeader = {
      SoTien: 'Số Tiền',
      NoiDung: 'Nội Dung'
    };
    this.header = {
      _id: "_id",
      bin: 'Mã ngân hàng',
      TenKhachHang: "Tên Khách hàng",
      SoTK: "Số tài khoản",
      NganHang: "Ngân Hàng",
      Tinh: "Tỉnh",
      DienThoai: "Số điện thoại"
    };
    this.searchForm = this.formSV.fb.group({
      input: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(4)]]
    });
    this.user = null;
    this.api = 'unc-khach-hang';
    this.dbName = 'unc';
    this.db = null;
    this.allItems = [];
    this.items = [];
    this.importItems = [];
    this.item = null;
    this.allowLoadmore = true;
    this.perPageItems = 50;
    this.fileName = '';
    this.isexpanded = false;
    this.setup = null;
    this.banks = [];
    this.banksOpt = [];
    this.selectedBank = null;
    this.accountName = '';
    this.dsTKnganHang = [];
    this.maUNC = 'VCB';
    this.bankGui = null;
    this.banksOptMA = [];
    this.uncSetup = null;
  }
  ngOnDestroy() {
    console.log('Destroy', this.api);
    this.httpSV.unsubcribe();
    this.pouchDBSV.unsubscribe(this.api);
  }
  ngOnInit() {
    this.getAllIDB();
    this.pouchDBSV.connectRemote(this.api).subscribe(res => {
      console.log(res);
      this.getAllIDB();
    });
    this.authSV.user.subscribe(user => {
      this.user = user;
      this.banksOptMA = [user.UNCSETUP.NGANHANG];
      this.maUNC = user.UNCSETUP.NGANHANG.MaNganHang;
      this.uncForm.controls.maUNC.setValue(user.UNCSETUP.NGANHANG.MaNganHang);
      this.filter2();
      this.filter();
    });
    this.getBanks();
  }
  getBanks() {
    this.bankSV.getBanks().then(v => {
      this.banks = v;
      this.banksOpt = this.banks;
    });
  }
  selectedTK(item) {
    this.maUNC = item.MaNganHang;
    this.bankGui = item;
  }
  addNew() {
    this.item = null;
    this.main.reset();
    this.main.controls['SoTK'].setValue('');
    this.main.controls['NganHang'].setValue('');
    this.isexpanded = true;
  }
  check() {
    this.loadSV.load('UNC-CHECK');
    this.accountName = '';
    const body = {
      account: this.main.controls['SoTK'].value,
      bank: this.selectedBank.code
    };
    this.bankSV.check(body).then(v => {
      this.loadSV.loaded('UNC-CHECK');
      if (!v) {
        return this.accountName = 'Không tìm thấy tài khoản hoặc ngân hàng không phản hồi, vui lòng quét mã QR để kiểm tra';
      }
      console.log(v);
      this.accountName = v['data'].data.ownerName;
    }).catch(() => {
      this.loadSV.loaded('UNC-CHECK');
    });
  }
  selectBank(item) {
    this.selectedBank = item;
    this.main.controls['NganHang'].setValue(item.name + ' - ' + item.short_name);
    this.main.controls['code'].setValue(item.code);
    this.main.controls['bin'].setValue(item.bin.toString());
  }
  filter() {
    this.banksOpt = this.banks;
    this.main.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(500)).subscribe(v => {
      const input = this.plus.removeAccents(v.NganHang);
      this.banksOpt = this.banks.filter(x => this.plus.removeAccents(JSON.stringify(x)).toLowerCase().includes(input));
      if (this.banksOpt.length == 1) {
        this.selectBank(this.banksOpt[0]);
        document.getElementById('accountNumber').focus();
      }
    });
  }
  filter2() {
    this.banksOptMA = [this.user.UNCSETUP.NGANHANG];
    this.uncForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(500)).subscribe(v => {
      const input = this.plus.removeAccents(v.maUNC).toLowerCase();
      this.banksOptMA = this.dsTKnganHang.filter(x => this.plus.removeAccents(JSON.stringify(x)).toLowerCase().includes(input));
    });
  }
  formatNumber(evt) {
    let num = evt.toString().replace(/[^0-9]/g, '');
    num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    console.log(num);
    this.uncForm.controls['SoTien'].setValue(num);
  }
  printOrSave(type) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const err = _this.formSV.getErrValidateFormV2(_this.uncForm, _this.uncFormHeader);
      if (err.length > 0) {
        _this.plus.alertWarning(err);
        return false;
      }
      const kh = _this.main.value;
      const uncf = _this.uncForm.value;
      uncf.SoTien = uncf.SoTien.toString().replace(/[^0-9]/g, '');
      const body = {
        ChuTaiKhoan: _this.user.UNCSETUP.NGANHANG.ChuTaiKhoan,
        ChiNhanh: _this.user.UNCSETUP.NGANHANG.ChiNhanh,
        SoTaiKhoan: _this.user.UNCSETUP.NGANHANG.SoTaiKhoan,
        ThuocTinh: _this.user.UNCSETUP.TINH,
        GiamDoc: _this.user.UNCSETUP.TENGIAMDOC,
        TruongPTC: _this.user.UNCSETUP.NGUOIKY,
        ChucDanh: _this.user.UNCSETUP.CHUCDANHKY,
        KhachHang: kh.TenKhachHang,
        Tinh: kh.Tinh,
        SoTien: +uncf.SoTien,
        SoTaiKhoanKH: kh.SoTK,
        NganHang: kh.NganHang,
        NoiDung: uncf.NoiDung,
        _id: kh.SoTK + uncf.SoTien,
        status: 1,
        sync: 0,
        SoPhieu: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MMYY') + kh.SoTK + '-' + uncf.SoTien,
        NgayLap: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('DD/MM/YYYY'),
        MaNganHang: _this.maUNC,
        nick: _this.user.nick
      };
      _this.teleSV.sendMessage(`UNC: \n ${body.SoPhieu} \n ${body.KhachHang} \n (${body.SoTien}) \n ${body.NoiDung}`);
      _this.loadSV.load('xuatUNC');
      if (type == 0) {
        _this.docxSV.loadFileUrl(`https://thuctd.github.io/templates/UNC/${_this.maUNC}-UNC.docx`).then(wordFile => {
          _this.docxSV.generateOne(body, wordFile, 'UNC-' + body.KhachHang).then(val => {
            console.log(val);
            _this.plus.alertSuccess();
            _this.loadSV.loaded('xuatUNC');
            _this.uncSV.savePhieuLog(body);
            _this.pouchDBSV.save(_this.uncSV.apiPhieu, body).then(() => {
              console.log(body);
            });
          });
        });
      } else if (type == 1) {
        _this.pouchDBSV.save(_this.api, body).then(() => {
          console.log('saved');
          _this.loadSV.loaded('xuatUNC');
        });
      }
    })();
  }
  onDropFile(files) {
    this.items = [];
    this.importItems = [];
    this.excelSV.read(files[0], 1).then(data => {
      const arr = this.excelSV.convertJSon(data[0]);
      for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        el.SoTK = el.SoTK.toString();
        this.main.patchValue(el);
        el.err = this.formSV.getErrValidateFormV2(this.main, this.header);
        this.items.push(el);
        console.log(el);
      }
      if (this.items.length == 0) {
        this.plus.alertSuccess('Danh sách đã được kiểm tra');
      }
    });
  }
  getSetup(evt) {
    console.log(evt);
    this.setup = evt;
  }
  getAllIDB() {
    this.checkPer(1);
    this.isexpanded = false;
    this.pouchDBSV.getAll(this.api).then(v => {
      this.allItems = v;
      this.items = v.slice(0, this.perPageItems);
    });
  }
  onEdit(item) {
    this.item = item;
    this.selectedBank = this.banks.find(v => v.code == item.code);
    this.isexpanded = true;
    item.SoTK = this.plus.removeSpecialCharacters(item.SoTK);
    this.main.patchValue(item);
    this.uncForm.reset();
    this.uncForm.controls.NoiDung.setValue(window.max.nick + ' T/T ');
    this.plus.scrollTo('form');
  }
  onDelete(body) {
    const item = body;
    const ok = confirm('Xóa?');
    if (!ok) return;
    item.status = 0;
    delete item['__v'];
    this.pouchDBSV.delete(this.api, item._id).then(() => {
      this.plus.alertSuccess('Đã xóa');
    });
  }
  saveCustomer() {
    const body = this.main.value;
    const err = this.formSV.getErrValidateFormV2(this.main, this.header);
    if (err.length > 2) {
      return this.plus.alertError(`${err}`);
    }
    body._id = (0,uid__WEBPACK_IMPORTED_MODULE_2__.uid)(6);
    body.status = 1;
    body.sync = 1;
    this.pouchDBSV.save(this.api, body).then(() => {
      this.plus.alertSuccess();
    });
  }
  import() {
    this.httpSV.post(this.api + '/import', this.importItems).subscribe(res => {
      console.log(res);
    });
  }
  search() {
    const txt = this.searchForm.value.input;
    if (this.searchForm.valid) {
      console.log(txt);
      const x = [];
      this.allowLoadmore = false;
      for (let i = 0; i < this.allItems.length; i++) {
        const inputdmt = this.allItems[i];
        const el = JSON.stringify(inputdmt);
        const key = this.plus.removeAccents(el);
        if (key.includes(txt)) {
          x.push(inputdmt);
        }
      }
      this.items = x;
      if (x.length == 0) this.plus.alertMatSnackBar('Không còn kết quả phù hợp');
    }
    ;
  }
  pushData(evt) {
    this.loadSV.load('pushData');
    if (evt && this.allowLoadmore) {
      const count = this.items.length;
      const pushItems = this.allItems.slice(count, count + this.perPageItems);
      this.items = this.items.concat(pushItems);
      this.loadSV.loaded('pushData');
    }
    this.loadSV.loaded('pushData');
  }
  reset() {
    this.loadSV.clear();
    this.authSV.reload();
  }
  reload() {
    this.authSV.reload();
  }
  checkPer(level = 1, api = this.api) {
    return this.authSV.checkPer(api, level);
  }
  clear() {
    this.accountName = '';
    this.main.reset();
  }
  ondragover() {
    document.getElementById("dropZone").setAttribute("drop-active", "true");
  }
  static {
    this.ɵfac = function UncKhachHangComponent_Factory(t) {
      return new (t || UncKhachHangComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_5__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_6__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_7__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_8__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_10__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_11__.DocxtemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_share_services_bank_lookup_service__WEBPACK_IMPORTED_MODULE_12__.BankLookupService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_unc_service__WEBPACK_IMPORTED_MODULE_13__.UncService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_4__.PouchdbService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_share_services_telegram_service__WEBPACK_IMPORTED_MODULE_14__.TelegramService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: UncKhachHangComponent,
      selectors: [["app-unc-khach-hang"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵProvidersFeature"]([src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_4__.PouchdbService])],
      decls: 38,
      vars: 9,
      consts: [["id", "form", 1, "container", "pt-4"], ["color", "primary", "style", "border: solid 1.5px; border-radius: 10px; border-color: blue;", 3, "expanded", 4, "ngIf"], [1, "row", "py-2"], ["appearance", "outline", 3, "formGroup"], ["matInput", "", "id", "search-api", "formControlName", "input", "placeholder", "T\u00ECm ki\u1EBFm (F2)", 3, "keyup.enter"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], ["color", "primary", "matTooltip", "L\u00E0m m\u1EDBi d\u1EEF li\u1EC7u", 3, "click"], ["color", "accent", "matTooltip", "Th\u00EAm m\u1EDBi", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "qrcode", "tabindex", "-1", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "role", "dialog", "aria-labelledby", "modelTitleId", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "text-center"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "container-fluid"], [1, "card", "text-white", "bg-primary"], ["target", "_blank", "download", "", 1, "text-white", "text-bolder", 3, "href"], [1, "card-img-top", 3, "src"], [3, "percentLoad", "emit"], ["color", "primary", 2, "border", "solid 1.5px", "border-radius", "10px", "border-color", "blue", 3, "expanded"], [1, "text-danger"], [1, "row", 3, "formGroup"], [1, "row"], [1, "col-sm-6"], ["type", "text", "placeholder", "Ng\u00E2n h\u00E0ng \u0111\u01A1n v\u1ECB nh\u1EADn ti\u1EC1n", "matInput", "", "formControlName", "NganHang", 3, "matAutocomplete"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["auto", "matAutocomplete"], [3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-3"], ["appearance", "outline"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "SoTK"], ["matSuffix", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["type", "button", "id", "qrcodeModal", "data-bs-toggle", "modal", "data-bs-target", "#qrcode", "matTooltip", "Xem m\u00E3 QR thanh to\u00E1n", 1, "btn", 3, "disabled"], ["color", "warn"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "TenKhachHang"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "Tinh"], ["type", "text", "autocomplete", "off", "matInput", "", "formControlName", "DienThoai"], ["class", "text-white bg-primary py-3", 4, "ngIf"], [1, "btn", "text-center"], ["mat-raised-button", "", "color", "warn", "matTooltip", "L\u01B0u kh\u00E1ch h\u00E0ng", 3, "click"], [1, "text-primary"], [1, "col-4"], ["required", "", "autocomplete", "off", "matInput", "", "formControlName", "SoTien", 2, "text-align", "right", 3, "input"], ["soTien", ""], [1, "col"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "NoiDung"], [1, "text-center"], [1, "font-red"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Xu\u1EA5t file in", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", "matTooltip", "L\u01B0u phi\u1EBFu thanh to\u00E1n", 3, "disabled", "click"], ["class", "row  py-2", 4, "ngIf"], [3, "click"], ["width", "40px", 3, "src", "alt"], [1, "text-white", "bg-primary", "py-3"], [3, "label", "files", "ondragover"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["class", "text-danger", 4, "ngIf"], ["color", "warn", "matTooltip", "X\u00F3a", 3, "click", 4, "ngIf"], ["color", "primary", "matTooltip", "Ch\u1ECDn kh\u00E1ch h\u00E0ng in phi\u1EBFu", 3, "click"], ["color", "warn", "matTooltip", "X\u00F3a", 3, "click"]],
      template: function UncKhachHangComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, UncKhachHangComponent_mat_expansion_panel_1_Template, 82, 15, "mat-expansion-panel", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 2)(3, "mat-form-field", 3)(4, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup.enter", function UncKhachHangComponent_Template_input_keyup_enter_4_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 2)(6, "div", 5)(7, "table", 6)(8, "thead")(9, "tr")(10, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, "Kh\u00E1ch h\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13, "S\u1ED1 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, "Ng\u00E2n H\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "T\u1EC9nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "th")(19, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_Template_mat_icon_click_19_listener() {
            return ctx.reload();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "th")(22, "mat-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UncKhachHangComponent_Template_mat_icon_click_22_listener() {
            return ctx.addNew();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23, " add");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, UncKhachHangComponent_tr_25_Template, 15, 6, "tr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](26, "tfoot");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](30, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 14)(32, "div", 15)(33, "div", 16)(34, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35, "T\u1EA3i xu\u1ED1ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](36, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "app-loadmore", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("emit", function UncKhachHangComponent_Template_app_loadmore_emit_37_listener($event) {
            return ctx.pushData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@slideIn", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("href", "https://img.vietqr.io/image/", ctx.selectedBank == null ? null : ctx.selectedBank.short_name, "-", ctx.main.value.SoTK, "-compact2.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("src", "https://img.vietqr.io/image/", ctx.selectedBank == null ? null : ctx.selectedBank.code, "-", ctx.main.value.SoTK, "-compact2.png?", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("percentLoad", 60);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatSuffix, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltip, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionPanelHeader, _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_15__.LoadmoreComponent, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_16__.DropFilesComponent, _share_custom_pipe__WEBPACK_IMPORTED_MODULE_17__.BangChuPipe],
      data: {
        animation: [src_app_share_animate__WEBPACK_IMPORTED_MODULE_1__.slideIn]
      }
    });
  }
}

/***/ }),

/***/ 30028:
/*!************************************!*\
  !*** ./src/app/unc/unc.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UncService: () => (/* binding */ UncService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _share_services_authV2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/services/authV2.service */ 50532);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 96354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _share_services_sheets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/services/sheets.service */ 63402);
/* harmony import */ var _share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/services/plus.service */ 22014);
/* harmony import */ var _share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/services/indexeddbV2.service */ 4045);
/* harmony import */ var _share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/services/http.serviceV2 */ 24950);
/* harmony import */ var _share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/services/pouchdb.service */ 32939);










class UncService {
  constructor(sheetdbSV, plus, idbSV, authSV, httpSV, pouchDBSV) {
    this.sheetdbSV = sheetdbSV;
    this.plus = plus;
    this.idbSV = idbSV;
    this.authSV = authSV;
    this.httpSV = httpSV;
    this.pouchDBSV = pouchDBSV;
    this.sheetId = '1pxQZwAtNDwOpMGSRSOSK3UxuV1xvWcAZ1CNhGHvwvRo';
    this.dbName = 'unc';
    this.apiKH = 'unc-khach-hang';
    this.apiNganHang = 'unc-ngan-hang';
    this.apiPhieu = 'unc-phieu';
    this.unit = localStorage.getItem('UNIT');
    this.db = null;
    this.lastUNC = 0;
    this.authSV._getOpt(_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_1__.ROLE.USER).then(user => this.user = user);
    this.pouchDBSV.connectRemote(this.apiKH);
    this.pouchDBSV.connectRemote(this.apiPhieu);
  }
  syncKH() {
    return this.httpSV.updateLocalDB(this.db, this.apiKH, window.max.unit + '-' + this.apiKH);
  }
  syncPhieu() {
    return this.httpSV.updateLocalDB(this.db, this.apiPhieu, localStorage.getItem('UNIT') + '-' + this.apiPhieu);
  }
  getallTK() {
    return this.idbSV.IDB_DB_GetAll(this.db, 'unc-ngan-hang', 'MaNganHang');
  }
  getTaiKhoanPK() {
    const user = this.user || window.max;
    return this.sheetdbSV.get(this.sheetId, `TK_${user.unit}`);
  }
  getAllKH() {
    return this.sheetdbSV.get(this.sheetId, `UNCKHACHHANG`);
  }
  getAllPhieu() {
    const user = this.user || window.max;
    return this.sheetdbSV.get(this.sheetId, `PHIEU_${user.unit}`);
  }
  getMaxPhieu() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        _this.idbSV.IDB_DB_GetAll(_this.db, 'unc-phieu', 'SoPhieu').subscribe(v => {
          _this.lastUNC = _this.plus.Arr_MaxValue(v, 'SoPhieu');
          resolve(_this.lastUNC);
          console.log('getMaxPhieu', _this.lastUNC);
        });
      });
    })();
  }
  saveKH(data) {
    window[`unc-khach-hang`] = 0;
    this.pouchDBSV.save(this.apiKH, data);
    return this.httpSV.put(this.apiKH, data, '');
  }
  saveCauHinh(data) {
    window[`unc-cau-hinh`] = 0;
    return this.sheetdbSV.save(this.sheetId, `UNCCAUHINH`, data, 'MADONVI');
  }
  getCauHinh() {
    const user = this.user || window.max;
    return this.sheetdbSV.get(this.sheetId, `UNCCAUHINH`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
      const set = res.data.filter(v => v.MADONVI == user.unit)[0];
      this.authSV._setOpt(_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_1__.ROLE.UNCSETUP, set);
      return set;
    }));
  }
  savePhieu(data) {
    this.pouchDBSV.save(this.apiPhieu, data);
    window[`unc-phieumax`] = 0;
    delete data['__v'];
    return this.httpSV.post(this.apiPhieu, data);
  }
  savePhieuLog(data) {
    return this.sheetdbSV.addMany(this.sheetId, `LOG`, data);
  }
  static {
    this.ɵfac = function UncService_Factory(t) {
      return new (t || UncService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_2__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_4__.IndexeddbServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_5__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_6__.PouchdbService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: UncService,
      factory: UncService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);