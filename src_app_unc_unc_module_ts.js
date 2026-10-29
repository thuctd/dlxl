"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["src_app_unc_unc_module_ts"],{

/***/ 97709:
/*!************************************************************!*\
  !*** ./src/app/unc/unc-cau-hinh/unc-cau-hinh.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UncCauHinhComponent: () => (/* binding */ UncCauHinhComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/indexeddb.service */ 90657);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var src_app_share_services_bank_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/bank-lookup.service */ 99989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 60850);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);


















function UncCauHinhComponent_mat_option_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UncCauHinhComponent_mat_option_64_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.selectBank(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", item_r3.icon_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", item_r3.short_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r3.name, " - ", item_r3.short_name, "");
  }
}
function UncCauHinhComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UncCauHinhComponent_tr_72_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.delete(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r6.ChuTaiKhoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r6.SoTaiKhoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r6.NganHang);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r6.ChiNhanh);
  }
}
class UncCauHinhComponent {
  constructor(formSV, plus, idbSV, authSV, bankSV) {
    this.formSV = formSV;
    this.plus = plus;
    this.idbSV = idbSV;
    this.authSV = authSV;
    this.bankSV = bankSV;
    this.main = this.formSV.fb.group({
      TENDONVI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      TENGIAMDOC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      CHUCDANHKY: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      NGUOIKY: ['', []],
      TINH: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
    this.formNganHang = this.formSV.fb.group({
      ChuTaiKhoan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      SoTaiKhoan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      NganHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      ChiNhanh: ['', []],
      MaNganHang: ['', []]
    });
    this.searchForm = this.formSV.fb.group({
      input: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)]]
    });
    this.dbName = 'unc';
    this.api = 'unc-cau-hinh';
    this.db = null;
    this.setup = null;
    this.banks = [];
    this.banksOpt = [];
    this.uncSetup = null;
    this.itemsNganHang = [];
  }
  ngOnInit() {
    this.idbSV.IDB_InitDB(this.dbName).subscribe(db => {
      this.db = db;
      this.authSV.user$.subscribe(user => {
        this.user = user;
        console.log(this.user);
        this.main.patchValue(user.UNCSETUP);
        this.formNganHang.patchValue(user.UNCSETUP.NGANHANG);
      });
      this.bankSV.getBanks().then(v => {
        this.banks = v;
        this.banksOpt = this.banks;
      });
    });
    this.filter();
  }
  save() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = _this.main.value;
      const nganhang = _this.formNganHang.value;
      data.NGANHANG = nganhang;
      _this.authSV.updateUncSetup(_this.user._id, data).then(() => {
        _this.plus.alertSuccess();
      });
    })();
  }
  selectBank(item) {
    this.selectedBank = item;
    this.formNganHang.controls['NganHang'].setValue(item.name + ' - ' + item.short_name);
    this.formNganHang.controls['MaNganHang'].setValue(item.code);
  }
  delete(i) {
    return this.itemsNganHang.splice(i, 1);
  }
  filter() {
    this.banksOpt = this.banks;
    this.formNganHang.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500)).subscribe(v => {
      const input = this.plus.removeAccents(v.NganHang).toLowerCase();
      this.banksOpt = this.banks.filter(x => this.plus.removeAccents(JSON.stringify(x)).toLowerCase().includes(input));
    });
  }
  static {
    this.ɵfac = function UncCauHinhComponent_Factory(t) {
      return new (t || UncCauHinhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_3__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_bank_lookup_service__WEBPACK_IMPORTED_MODULE_5__.BankLookupService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: UncCauHinhComponent,
      selectors: [["app-unc-cau-hinh"]],
      decls: 73,
      vars: 5,
      consts: [[1, "container", "py-4"], [1, "row", 3, "formGroup"], [1, "col"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "TENDONVI"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "TENGIAMDOC"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "CHUCDANHKY"], ["type", "text", "autocomplete", "off", "matInput", "", "formControlName", "NGUOIKY"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "TINH"], [1, "row"], [1, "btn", "text-center"], ["mat-raised-button", "", "color", "warn", "matTooltip", "L\u01B0u kh\u00E1ch h\u00E0ng", "id", "save-btn", 3, "click"], [1, "table", "table-striped"], [3, "formGroup"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "ChuTaiKhoan"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "SoTaiKhoan"], ["type", "text", "placeholder", "T\u00EAn ng\u00E2n h\u00E0ng", "matInput", "", "formControlName", "NganHang", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "text", "autocomplete", "off", "matInput", "", "formControlName", "ChiNhanh"], [4, "ngFor", "ngForOf"], [3, "click"], ["width", "40px", 3, "src", "alt"], ["mat-icon-button", "", "color", "warn", 3, "click"]],
      template: function UncCauHinhComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field")(4, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "T\u00EAn \u0111\u01A1n v\u1ECB");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 2)(8, "mat-form-field")(9, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "T\u00EAn Gi\u00E1m \u0111\u1ED1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 2)(13, "mat-form-field")(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Ch\u1EE9c danh k\u00FD");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 2)(18, "mat-form-field")(19, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Ng\u01B0\u1EDDi k\u00FD");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 2)(23, "mat-form-field")(24, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Thu\u1ED9c t\u1EC9nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 8)(28, "div", 9)(29, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UncCauHinhComponent_Template_button_click_29_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "save");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 0)(33, "div", 8)(34, "div", 2)(35, "table", 11)(36, "thead")(37, "tr")(38, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Ch\u1EE7 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "S\u1ED1 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Ng\u00E2n h\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Chi nh\u00E1nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "tr", 12)(47, "th")(48, "mat-form-field")(49, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Ch\u1EE7 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "th")(53, "mat-form-field")(54, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "S\u1ED1 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "th")(58, "mat-form-field")(59, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Ng\u00E2n H\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "mat-autocomplete", null, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, UncCauHinhComponent_mat_option_64_Template, 3, 4, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "th")(66, "mat-form-field")(67, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Chi nh\u00E1nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, UncCauHinhComponent_tr_72_Template, 13, 5, "tr", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.main);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formNganHang);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.banksOpt);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.itemsNganHang);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip]
    });
  }
}

/***/ }),

/***/ 65519:
/*!**************************************************************!*\
  !*** ./src/app/unc/unc-ngan-hang/unc-ngan-hang.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UncNganHangComponent: () => (/* binding */ UncNganHangComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70152);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var src_app_share_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/share/animate */ 27121);
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uid */ 10723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/sheets.service */ 63402);
/* harmony import */ var _unc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unc.service */ 30028);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/indexeddbV2.service */ 4045);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var src_app_share_services_bank_lookup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/bank-lookup.service */ 99989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 60850);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../share/loadmore/loadmore/loadmore.component */ 43716);





















function UncNganHangComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UncNganHangComponent_mat_option_35_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.selectBank(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", item_r3.icon_url, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("alt", item_r3.short_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", item_r3.name, " - ", item_r3.short_name, "");
  }
}
function UncNganHangComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UncNganHangComponent_tr_43_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.onEdit(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UncNganHangComponent_tr_43_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.onEdit(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UncNganHangComponent_tr_43_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.onEdit(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UncNganHangComponent_tr_43_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.onEdit(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td")(10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UncNganHangComponent_tr_43_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.delete(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r6.ChuTaiKhoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r6.SoTaiKhoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r6.NganHang);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r6.ChiNhanh);
  }
}
class UncNganHangComponent {
  constructor(sheetdbSV, uncSV, plus, idbSV, authSV, formSV, bankSV) {
    this.sheetdbSV = sheetdbSV;
    this.uncSV = uncSV;
    this.plus = plus;
    this.idbSV = idbSV;
    this.authSV = authSV;
    this.formSV = formSV;
    this.bankSV = bankSV;
    this.searchForm = this.formSV.fb.group({
      input: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(2)]]
    });
    this.main = this.formSV.fb.group({
      dateModify: [Date.now(), [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      status: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      sync: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      ChuTaiKhoan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      SoTaiKhoan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      NganHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      ChiNhanh: ['', []],
      MaNganHang: ['', []]
    });
    this.sheetId = '1pxQZwAtNDwOpMGSRSOSK3UxuV1xvWcAZ1CNhGHvwvRo';
    this.dbName = 'unc';
    this.api = 'unc-ngan-hang';
    this.db = null;
    this.allItems = [];
    this.items = [];
    this.perPageItems = 50;
    this.allowLoadmore = true;
    this.header = {
      Block: "Block",
      Nam: "Năm",
      keyWord: "keyWord",
      canEdit: "canEdit",
      ver: "ver",
      userId: "User",
      dateModify: "dateModify",
      status: "status",
      sync: "sync",
      _id: "_id",
      ChuTaiKhoan: "Chủ tài khoản",
      SoTaiKhoan: "Số tài khoản",
      NganHang: "Ngân hàng",
      ChiNhanh: "Chi nhánh",
      MaNganHang: "Mã ngân hàng"
    };
    this.banks = [];
    this.banksOpt = [];
    this.uncSetup = null;
  }
  ngOnInit() {
    this.idbSV.IDB_InitDB(this.dbName).subscribe(db => {
      this.db = db;
      this.uncSV.db = db;
      this.user = window.max;
      this.uncSV.getCauHinh().subscribe(setup => {
        this.uncSetup = setup;
      });
      this.bankSV.getBanks().then(v => {
        this.banks = v;
        this.banksOpt = this.banks;
      });
    });
    this.filter();
  }
  getAll() {
    this.idbSV.IDB_DB_GetAll(this.db, this.api).subscribe(res => {
      this.allItems = res;
      this.items = res.slice(0, this.perPageItems);
    });
  }
  save() {
    const data = this.main.value;
    const user = window.max;
    if (data._id.length == 0 || !data._id) {
      data._id = (0,uid__WEBPACK_IMPORTED_MODULE_1__.uid)(6);
    }
    const check = this.formSV.getErrValidateFormV2(this.main, this.header);
    if (check.length == 0) {
      this.sheetdbSV.save(this.sheetId, 'TK_' + user.unit, data, '_id').subscribe(() => {
        this.plus.alertSuccess();
      });
    } else {
      this.plus.alertError(check.toString());
    }
  }
  delete(item) {
    const ask = confirm(`Bạn muốn xóa?`);
    if (!ask) return;
    this.sheetdbSV.save(this.sheetId, 'TK_' + this.user.unit, item, '_id').subscribe(() => {
      this.plus.alertSuccess();
    });
  }
  getTaiKhoanPK() {
    this.idbSV.IDB_DB_ClearCollection(this.db, this.api).then(() => {});
    this.uncSV.getTaiKhoanPK().subscribe(v => {
      this.idbSV.IDB_DB_Add(this.db, this.api, v.data).then(() => {
        this.getAll();
      });
    });
  }
  search() {
    const txt = this.searchForm.value;
    if (txt.input.length < 2) {
      return;
    }
    if (this.searchForm.valid) {
      console.log(txt);
      const x = [];
      this.allowLoadmore = false;
      this.idbSV.IDB_DB_GetAll(this.db, this.api).subscribe(res => {
        console.log('IDB_DB_GetAll()', res.length);
        const inputText = this.plus.removeAccents(txt.input);
        if (res.length == 0) this.plus.alertMatSnackBar('Không còn kết quả phù hợp');
        for (let i = 0; i < res.length; i++) {
          const inputdmt = res[i];
          const el = JSON.stringify(inputdmt);
          const key = this.plus.removeAccents(el);
          if (key.includes(inputText)) {
            x.push(inputdmt);
          }
        }
        this.items = x;
        if (x.length == 0) {
          this.plus.alertMatSnackBar('Không còn kết quả phù hợp');
          this.items = this.allItems.slice(0, this.perPageItems);
        }
      });
    }
    ;
  }
  filter() {
    this.banksOpt = this.banks;
    this.main.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(500)).subscribe(v => {
      const input = this.plus.removeAccents(v.NganHang).toLowerCase();
      this.banksOpt = this.banks.filter(x => this.plus.removeAccents(JSON.stringify(x)).toLowerCase().includes(input));
    });
  }
  onEdit(item) {
    this.item = item;
    this.main.patchValue(item);
    this.plus.scrollTop();
  }
  selectBank(item) {
    this.selectedBank = item;
    this.main.controls['NganHang'].setValue(item.name + ' - ' + item.short_name);
    this.main.controls['MaNganHang'].setValue(item.code);
  }
  idbSearch() {
    this.searchForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(500)).subscribe(s => {
      if (this.searchForm.invalid) return;
      if (this.searchForm.valid) {
        this.idbSV.IDB_DB_Search(this.db, this.api, s.input, 50).subscribe(res => {
          console.log(res);
          this.items = res;
        });
      }
      ;
    });
  }
  checkPer(api, level = 1) {
    return this.authSV.checkPer(api, level);
  }
  pushData(evt) {
    console.log(evt);
    if (evt && this.allowLoadmore) {
      const count = this.items.length;
      const pushItems = this.items.slice(count, count + 100);
      this.items = this.items.concat(pushItems);
    }
  }
  reset() {
    this.authSV.reload();
  }
  reload() {
    this.authSV.reload();
  }
  static {
    this.ɵfac = function UncNganHangComponent_Factory(t) {
      return new (t || UncNganHangComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_2__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_unc_service__WEBPACK_IMPORTED_MODULE_3__.UncService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__.IndexeddbServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_6__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_7__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_bank_lookup_service__WEBPACK_IMPORTED_MODULE_8__.BankLookupService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: UncNganHangComponent,
      selectors: [["app-unc-ngan-hang"]],
      decls: 45,
      vars: 6,
      consts: [[1, "container", "py-4"], [1, "row"], ["appearance", "outline", 3, "formGroup"], ["matInput", "", "id", "search-api", "formControlName", "input", "placeholder", "T\u00ECm ki\u1EBFm (F2)", 3, "keyup.enter"], [1, "col"], [1, "table", "table-striped"], [3, "formGroup"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "ChuTaiKhoan"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "SoTaiKhoan"], ["type", "text", "placeholder", "T\u00EAn ng\u00E2n h\u00E0ng", "matInput", "", "formControlName", "NganHang", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "text", "autocomplete", "off", "matInput", "", "formControlName", "ChiNhanh"], [4, "ngFor", "ngForOf"], [3, "percentLoad", "emit"], [3, "click"], ["width", "40px", 3, "src", "alt"], ["mat-icon-button", "", "color", "warn", 3, "click"]],
      template: function UncNganHangComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup.enter", function UncNganHangComponent_Template_input_keyup_enter_3_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 1)(5, "div", 4)(6, "table", 5)(7, "thead")(8, "tr")(9, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Ch\u1EE7 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "S\u1ED1 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Ng\u00E2n h\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Chi nh\u00E1nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "tr", 6)(18, "th")(19, "mat-form-field")(20, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Ch\u1EE7 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "th")(24, "mat-form-field")(25, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "S\u1ED1 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th")(29, "mat-form-field")(30, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Ng\u00E2n H\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "mat-autocomplete", null, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, UncNganHangComponent_mat_option_35_Template, 3, 4, "mat-option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "th")(37, "mat-form-field")(38, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Chi nh\u00E1nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, UncNganHangComponent_tr_43_Template, 13, 5, "tr", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "app-loadmore", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("emit", function UncNganHangComponent_Template_app_loadmore_emit_44_listener($event) {
            return ctx.pushData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.main);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matAutocomplete", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.banksOpt);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("percentLoad", 60);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger, _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_9__.LoadmoreComponent],
      data: {
        animation: [src_app_share_animate__WEBPACK_IMPORTED_MODULE_0__.slideIn]
      }
    });
  }
}

/***/ }),

/***/ 60682:
/*!*******************************************!*\
  !*** ./src/app/unc/unc-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UncRoutingModule: () => (/* binding */ UncRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _unc_khach_hang_unc_khach_hang_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unc-khach-hang/unc-khach-hang.component */ 36531);
/* harmony import */ var _unc_ngan_hang_unc_ngan_hang_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unc-ngan-hang/unc-ngan-hang.component */ 65519);
/* harmony import */ var _unc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unc.component */ 40308);
/* harmony import */ var _unc_cau_hinh_unc_cau_hinh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unc-cau-hinh/unc-cau-hinh.component */ 97709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);







const routes = [{
  path: '',
  component: _unc_component__WEBPACK_IMPORTED_MODULE_2__.UncComponent
}, {
  path: 'unc-khach-hang',
  component: _unc_khach_hang_unc_khach_hang_component__WEBPACK_IMPORTED_MODULE_0__.UncKhachHangComponent
}, {
  path: 'unc-ngan-hang',
  component: _unc_ngan_hang_unc_ngan_hang_component__WEBPACK_IMPORTED_MODULE_1__.UncNganHangComponent
}, {
  path: 'unc-cau-hinh',
  component: _unc_cau_hinh_unc_cau_hinh_component__WEBPACK_IMPORTED_MODULE_3__.UncCauHinhComponent
}];
class UncRoutingModule {
  static {
    this.ɵfac = function UncRoutingModule_Factory(t) {
      return new (t || UncRoutingModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: UncRoutingModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UncRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 40308:
/*!**************************************!*\
  !*** ./src/app/unc/unc.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UncComponent: () => (/* binding */ UncComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 70152);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _share_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/animate */ 27121);
/* harmony import */ var _share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/services/pouchdb.service */ 32939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/services/plus.service */ 22014);
/* harmony import */ var _unc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unc.service */ 30028);
/* harmony import */ var _share_services_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/services/form.service */ 60064);
/* harmony import */ var _share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/docxtemplate/docxtemplate.service */ 41982);
/* harmony import */ var _site_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../site/loading/loading.service */ 97230);
/* harmony import */ var _share_services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/services/excel.service */ 53789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 60850);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 11161);
/* harmony import */ var _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../share/material/date-picker/date-picker.component */ 8852);
/* harmony import */ var _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../share/loadmore/loadmore/loadmore.component */ 43716);
/* harmony import */ var _share_custom_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../share/custom.pipe */ 78061);


























function UncComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " BAO CAO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function UncComponent_div_5_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_tr_30_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r6.onEdit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_tr_30_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r8.onEdit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_tr_30_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r9.onEdit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_tr_30_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r10.onEdit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_tr_30_Template_td_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r11.onEdit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_tr_30_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r12.onEdit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_tr_30_Template_td_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r13.onEdit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_tr_30_Template_td_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r14.onEdit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td")(19, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_tr_30_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.delete(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.SoPhieu);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r5.NgayLap);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r5.KhachHang);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r5.SoTaiKhoanKH);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r5.NganHang);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 9, item_r5.SoTien));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r5.NoiDung);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r5.MaNganHang);
  }
}
function UncComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1)(1, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " DANH S\u00C1CH PHI\u1EBEU UNC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_Template_mat_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r16.export());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 14)(7, "table", 40)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "S\u1ED1 phi\u1EBFu");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Ng\u00E0y l\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "\u0110\u01A1n v\u1ECB nh\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "T\u00E0i kho\u1EA3n nh\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Ng\u00E2n h\u00E0ng nh\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "S\u1ED1 ti\u1EC1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "N\u1ED9i dung");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "M\u1EABu UNC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "th")(27, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_div_5_Template_mat_icon_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r18.reload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, UncComponent_div_5_tr_30_Template, 22, 11, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.items);
  }
}
function UncComponent_mat_option_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_mat_option_95_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const item_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r20.selectedTK(item_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", item_r19.MaNganHang + (item_r19.ChiNhanh.length > 0 ? " - " + item_r19.ChiNhanh : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"](" ", item_r19.MaNganHang, " ", item_r19.ChiNhanh.length > 0 ? " - " + item_r19.ChiNhanh : "", " ", item_r19.NganHang, " ");
  }
}
class UncComponent {
  constructor(plus, uncSV, formSV, docxSV, loadSV, excelSV, pouchDBSV) {
    this.plus = plus;
    this.uncSV = uncSV;
    this.formSV = formSV;
    this.docxSV = docxSV;
    this.loadSV = loadSV;
    this.excelSV = excelSV;
    this.pouchDBSV = pouchDBSV;
    this.dbName = 'unc';
    this.api = 'unc-phieu';
    this.db = null;
    this.allItems = [];
    this.items = [];
    this.perPageItems = 50;
    this.allowLoadmore = true;
    this.dsTKnganHang = [];
    this.banksAuto = [];
    this.maUNC = '';
    this.searchForm = this.formSV.fb.group({
      input: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(2)]]
    });
    this.main = this.formSV.fb.group({
      dateModify: [Date.now(), [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      status: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      sync: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      SoPhieu: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      NgayLap: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      KhachHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      SoTaiKhoanKH: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      NganHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      SoTien: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      NoiDung: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      ChuTaiKhoan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      SoTaiKhoan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      ChiNhanh: ['', []],
      ThuocTinh: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      GiamDoc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      TruongPTC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      ChucDanh: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      MaNganHang: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]]
    });
  }
  ngOnDestroy() {
    this.pouchDBSV.unsubscribe(this.uncSV.apiPhieu);
  }
  ngOnInit() {
    this.pouchDBSV.connectRemote(this.uncSV.apiPhieu).subscribe(dbNname => {
      console.log(dbNname);
      this.getAllIDB();
    });
  }
  syncKH() {
    this.pouchDBSV.connectRemote(this.uncSV.apiKH).subscribe();
  }
  getTkNH() {
    this.uncSV.getallTK().subscribe(v => {
      this.dsTKnganHang = v;
    });
  }
  save() {
    const data = this.main.value;
    this.pouchDBSV.save(this.uncSV.apiPhieu, data).then(() => {
      this.plus.alertSuccess();
      this.plus.reload();
      this.plus.clickBtn('closeModalunc');
    });
  }
  delete(item) {
    const ok = confirm('Ban chac chan muon xoa?');
    if (!ok) return;
    item.status = 0;
    this.pouchDBSV.delete(this.uncSV.apiPhieu, item._id).then(() => {
      this.plus.alertSuccess();
      this.getAllIDB();
    });
  }
  reload() {
    return this.plus.reload();
  }
  print() {
    this.loadSV.load('xuatUNC');
    const data = this.main.value;
    this.docxSV.loadFileUrl(`https://thuctd.github.io/templates/UNC/${data.MaNganHang}-UNC.docx`).then(wordFile => {
      this.docxSV.generateOne(data, wordFile, 'UNC-' + data.KhachHang).then(val => {
        console.log(val);
        this.plus.alertSuccess();
        this.loadSV.loaded('xuatUNC');
      });
    });
  }
  getAllIDB() {
    this.allItems = [];
    this.pouchDBSV.getAll(this.uncSV.apiPhieu).then(v => {
      console.log(v);
      this.allItems = v;
      this.items = v;
      this.filter();
    });
  }
  getAllPhieu() {}
  search() {
    this.pouchDBSV.search(this.uncSV.apiPhieu, this.searchForm.value.input).then(v => {
      this.items = v;
    });
  }
  pushData(evt) {
    if (evt && this.allowLoadmore) {
      const count = this.items.length;
      const pushItems = this.allItems.slice(count, count + this.perPageItems);
      this.items = this.items.concat(pushItems);
    }
  }
  selectedTK(item) {
    this.maUNC = item.MaNganHang;
    this.main.controls['MaNganHang'].setValue(item.MaNganHang);
  }
  getMonth(evt) {
    console.log(evt);
    this.main.controls['NgayLap'].setValue(evt);
  }
  onEdit(item) {
    this.plus.clickBtn('modalunc');
    this.main.patchValue(item);
  }
  export() {
    this.pouchDBSV.exportAll(this.uncSV.apiPhieu).then(data => {
      this.excelSV.export(data, `UNC-${moment__WEBPACK_IMPORTED_MODULE_0___default()().format('MM-YYYY')}`);
    });
  }
  filter() {
    this.banksAuto = this.dsTKnganHang;
    this.main.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(500)).subscribe(v => {
      const input = this.plus.removeAccents(v.MaNganHang).toLowerCase();
      console.log(input);
      this.banksAuto = this.dsTKnganHang.filter(x => this.plus.removeAccents(JSON.stringify(x)).toLowerCase().includes(input));
      if (this.banksAuto.length == 0) {
        this.banksAuto = this.dsTKnganHang;
        this.plus.alertMatSnackBar('Không còn kết quả phù hợp');
      }
    });
  }
  static {
    this.ɵfac = function UncComponent_Factory(t) {
      return new (t || UncComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_unc_service__WEBPACK_IMPORTED_MODULE_4__.UncService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_share_services_form_service__WEBPACK_IMPORTED_MODULE_5__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_6__.DocxtemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_share_services_excel_service__WEBPACK_IMPORTED_MODULE_8__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_2__.PouchdbService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: UncComponent,
      selectors: [["app-unc"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_2__.PouchdbService])],
      decls: 106,
      vars: 11,
      consts: [[1, "container", "py-4"], [1, "row"], ["appearance", "outline", 3, "formGroup"], ["matInput", "", "id", "search-api", "formControlName", "input", "placeholder", "T\u00ECm ki\u1EBFm (F2)", 3, "keyup.enter"], ["class", "row", 4, "ngIf"], [3, "percentLoad", "emit"], ["hidden", "", "id", "modalunc", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#unc", 1, "btn", "btn-primary"], ["id", "unc", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", 3, "formGroup"], [1, "col"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "_id"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "SoPhieu"], [3, "startDay", "openOnFocus", "label", "format", "month"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "KhachHang"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "SoTaiKhoanKH"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "NganHang"], ["required", "", "type", "number", "autocomplete", "off", "matInput", "", "formControlName", "SoTien"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "NoiDung"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "ChuTaiKhoan"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "SoTaiKhoan"], ["type", "text", "autocomplete", "off", "matInput", "", "formControlName", "ChiNhanh"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "ThuocTinh"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "GiamDoc"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "TruongPTC"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "ChucDanh"], ["matInput", "", "formControlName", "MaNganHang", 3, "matAutocomplete"], ["autoActiveFirstOption", ""], ["automaUNC", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["color", "warn", "mat-raised-button", "", 3, "click"], ["color", "primary", "mat-raised-button", "", 3, "click"], ["color", "primary", "id", "closeModalunc", "mat-raised-button", "", "data-bs-dismiss", "modal", "aria-label", "Close"], [1, "tit"], ["color", "primary", 3, "click"], [1, "table", "table-bordered", "table-hover"], ["color", "primary", "matTooltip", "L\u00E0m m\u1EDBi d\u1EEF li\u1EC7u", 3, "click"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "text-end", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], [3, "value", "click"]],
      template: function UncComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup.enter", function UncComponent_Template_input_keyup_enter_3_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, UncComponent_div_4_Template, 5, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, UncComponent_div_5_Template, 31, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "app-loadmore", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("emit", function UncComponent_Template_app_loadmore_emit_6_listener($event) {
            return ctx.pushData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Launch static backdrop modal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Phieu UNC");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "mat-form-field")(19, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "_id");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 14)(23, "mat-form-field")(24, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "S\u1ED1 phi\u1EBFu");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 14)(28, "app-date-picker", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("month", function UncComponent_Template_app_date_picker_month_28_listener($event) {
            return ctx.getMonth($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 14)(30, "mat-form-field")(31, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "\u0110\u01A1n v\u1ECB nh\u1EADn");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](33, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 14)(35, "mat-form-field")(36, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "T\u00E0i kho\u1EA3n nh\u1EADn");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 14)(40, "mat-form-field")(41, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Ng\u00E2n h\u00E0ng nh\u1EADn");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 14)(45, "mat-form-field")(46, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "S\u1ED1 ti\u1EC1n");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](48, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 14)(50, "mat-form-field")(51, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "N\u1ED9i dung");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](53, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 14)(55, "mat-form-field")(56, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, "Ch\u1EE7 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](58, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 14)(60, "mat-form-field")(61, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "S\u1ED1 t\u00E0i kho\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](63, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "div", 14)(65, "mat-form-field")(66, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "Chi nh\u00E1nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](68, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "div", 14)(70, "mat-form-field")(71, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72, "Thu\u1ED9c t\u1EC9nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](73, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "div", 14)(75, "mat-form-field")(76, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "Gi\u00E1m \u0110\u1ED1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](78, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "div", 14)(80, "mat-form-field")(81, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, "Ng\u01B0\u1EDDi k\u00FD");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](83, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "div", 14)(85, "mat-form-field")(86, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87, "Ch\u1EE9 danh k\u00FD");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](88, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "mat-form-field")(90, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, "M\u1EABu UNC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](92, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "mat-autocomplete", 31, 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](95, UncComponent_mat_option_95_Template, 2, 4, "mat-option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "div", 34)(97, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_Template_button_click_97_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99, "save");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UncComponent_Template_button_click_100_listener() {
            return ctx.print();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](101, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, "print");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "button", 37)(104, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](94);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.items.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("percentLoad", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.main);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("startDay", ctx.main.controls["NgayLap"].value)("openOnFocus", false)("label", "Ng\u00E0y l\u1EADp")("format", "DD/MM/YYYY");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.banksAuto);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionPanelHeader, _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_9__.DatePickerComponent, _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_10__.LoadmoreComponent, _share_custom_pipe__WEBPACK_IMPORTED_MODULE_11__.NumberPipePipe],
      styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 0px;\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  height: 32px;\n  line-height: 32px;\n  font-size: 14px;\n}"],
      data: {
        animation: [_share_animate__WEBPACK_IMPORTED_MODULE_1__.slideIn]
      }
    });
  }
}

/***/ }),

/***/ 211:
/*!***********************************!*\
  !*** ./src/app/unc/unc.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UncModule: () => (/* binding */ UncModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _unc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unc.component */ 40308);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/share.module */ 64039);
/* harmony import */ var _unc_khach_hang_unc_khach_hang_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unc-khach-hang/unc-khach-hang.component */ 36531);
/* harmony import */ var _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/drop-file/drop-file.module */ 96115);
/* harmony import */ var _unc_ngan_hang_unc_ngan_hang_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unc-ngan-hang/unc-ngan-hang.component */ 65519);
/* harmony import */ var _unc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unc-routing.module */ 60682);
/* harmony import */ var _share_search_api_search_api_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/search-api/search-api.module */ 73599);
/* harmony import */ var _unc_cau_hinh_unc_cau_hinh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unc-cau-hinh/unc-cau-hinh.component */ 97709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);










class UncModule {
  static {
    this.ɵfac = function UncModule_Factory(t) {
      return new (t || UncModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: UncModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_3__.DropFileModule, _unc_routing_module__WEBPACK_IMPORTED_MODULE_5__.UncRoutingModule, _share_search_api_search_api_module__WEBPACK_IMPORTED_MODULE_6__.SearchApiModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](UncModule, {
    declarations: [_unc_component__WEBPACK_IMPORTED_MODULE_0__.UncComponent, _unc_khach_hang_unc_khach_hang_component__WEBPACK_IMPORTED_MODULE_2__.UncKhachHangComponent, _unc_ngan_hang_unc_ngan_hang_component__WEBPACK_IMPORTED_MODULE_4__.UncNganHangComponent, _unc_cau_hinh_unc_cau_hinh_component__WEBPACK_IMPORTED_MODULE_7__.UncCauHinhComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_3__.DropFileModule, _unc_routing_module__WEBPACK_IMPORTED_MODULE_5__.UncRoutingModule, _share_search_api_search_api_module__WEBPACK_IMPORTED_MODULE_6__.SearchApiModule]
  });
})();

/***/ })

}]);