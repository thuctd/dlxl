"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["src_app_login_login_module_ts"],{

/***/ 80390:
/*!******************************************************!*\
  !*** ./src/app/login/cau-hinh/cau-hinh.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CauHinhComponent: () => (/* binding */ CauHinhComponent)
/* harmony export */ });
/* harmony import */ var _share_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../share/animate */ 27121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/auth.service */ 14892);
/* harmony import */ var src_app_share_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/http.service */ 57090);







class CauHinhComponent {
  constructor(plus, fb, authSV, httpSV) {
    this.plus = plus;
    this.fb = fb;
    this.authSV = authSV;
    this.httpSV = httpSV;
    this.title = 'Cài đặt';
    this.api = 'user/update';
    this.show = false;
    this.readonly = false;
    this.NhomBan = [];
    this.NhomHang = [];
    this.noiDung = 'Thanh Toan Mua Hang';
    this.bankid = '';
    this.main = this.fb.group({
      _id: ['', []],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      phoneNumber: ['', []],
      title: ['', []],
      unit: ['', []],
      fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(100)]],
      birthday: ['', []]
    });
    this.nhomban = this.fb.group({
      NoiDung: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      SoLuong: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      ThuTu: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]]
    });
    this.nhomhang = this.fb.group({
      NoiDung: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      ThuTu: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]]
    });
  }
  ngOnInit() {
    this.plus.setTiTle(this.title);
    this.readConfig();
  }
  ngOnDestroy() {}
  test() {
    this.httpSV.getOutServer('qrcode/banks').then(res => {
      console.log(res);
    });
  }
  readConfig() {
    const body = this.user;
    body['birthday'] = this.plus.datexlsToHtml(body['birthday']);
    this.main.patchValue(body);
  }
  save() {
    const body = this.main.value;
    console.log(body['birthday']);
    const config = {
      NhomBan: this.NhomBan,
      NhomHang: this.NhomHang
    };
    const update = Object.assign(body, config);
    console.log(update);
  }
  checkPer(api, level) {
    return this.authSV.checkPer(api, level);
  }
  delNhomBan(i) {
    this.NhomBan.splice(i, 1);
    this.nhomban.reset();
  }
  editNhomBan(item, i) {
    this.nhomban.patchValue(item);
    this.NhomBan.splice(i, 1);
  }
  addNhomBan() {
    this.NhomBan.push(this.nhomban.value);
    this.nhomban.reset();
  }
  delNhomHang(i) {
    this.NhomHang.splice(i, 1);
    this.nhomhang.reset();
  }
  editNhomHang(item, i) {
    this.NhomHang.splice(i, 1);
    this.nhomhang.patchValue(item);
  }
  addNhomHang() {
    this.NhomHang.push(this.nhomhang.value);
    this.nhomhang.reset();
  }
  static {
    this.ɵfac = function CauHinhComponent_Factory(t) {
      return new (t || CauHinhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_share_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_share_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CauHinhComponent,
      selectors: [["app-cau-hinh"]],
      decls: 0,
      vars: 0,
      template: function CauHinhComponent_Template(rf, ctx) {},
      styles: ["#saveButton[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 10px;\n  z-index: 99;\n  border: none;\n  outline: none;\n  background-color: rgb(238, 71, 5);\n  color: white;\n  cursor: pointer;\n  border-radius: 8px;\n}"],
      data: {
        animation: [_share_animate__WEBPACK_IMPORTED_MODULE_0__.slideIn, _share_animate__WEBPACK_IMPORTED_MODULE_0__.slideX]
      }
    });
  }
}

/***/ }),

/***/ 26036:
/*!**********************************************************!*\
  !*** ./src/app/login/chinh-sach/chinh-sach.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChinhSachComponent: () => (/* binding */ ChinhSachComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);

class ChinhSachComponent {
  constructor() {}
  ngOnInit() {}
  delete() {}
  pushData() {
    console.log('Push test');
  }
  static {
    this.ɵfac = function ChinhSachComponent_Factory(t) {
      return new (t || ChinhSachComponent)();
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChinhSachComponent,
      selectors: [["app-chinh-sach"]],
      decls: 0,
      vars: 0,
      template: function ChinhSachComponent_Template(rf, ctx) {}
    });
  }
}

/***/ }),

/***/ 41122:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginRoutingModule: () => (/* binding */ LoginRoutingModule),
/* harmony export */   cauhinh: () => (/* binding */ cauhinh)
/* harmony export */ });
/* harmony import */ var _zalo_zalo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zalo/zalo.component */ 35556);
/* harmony import */ var _cau_hinh_cau_hinh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cau-hinh/cau-hinh.component */ 80390);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ 3644);
/* harmony import */ var _chinh_sach_chinh_sach_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chinh-sach/chinh-sach.component */ 26036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _share_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/services/auth.service */ 14892);








class cauhinh {
  constructor(authSV) {
    this.authSV = authSV;
  }
  canActivate() {
    return this.authSV.checkPer('cau-hinh');
  }
  static {
    this.ɵfac = function cauhinh_Factory(t) {
      return new (t || cauhinh)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_share_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: cauhinh,
      factory: cauhinh.ɵfac
    });
  }
}
const routes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}, {
  path: 'zalo',
  component: _zalo_zalo_component__WEBPACK_IMPORTED_MODULE_0__.ZaloComponent
}, {
  path: 'zalo/:code',
  component: _zalo_zalo_component__WEBPACK_IMPORTED_MODULE_0__.ZaloComponent
}, {
  path: 'chinh-sach',
  component: _chinh_sach_chinh_sach_component__WEBPACK_IMPORTED_MODULE_3__.ChinhSachComponent
}, {
  path: 'cau-hinh',
  component: _cau_hinh_cau_hinh_component__WEBPACK_IMPORTED_MODULE_1__.CauHinhComponent,
  canActivate: [cauhinh]
}];
class LoginRoutingModule {
  static {
    this.ɵfac = function LoginRoutingModule_Factory(t) {
      return new (t || LoginRoutingModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: LoginRoutingModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [cauhinh],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 3644:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 45312);
/* harmony import */ var _share_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/animate */ 27121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/services/plus.service */ 22014);
/* harmony import */ var _share_services_authV2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/services/authV2.service */ 50532);
/* harmony import */ var _share_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/services/form.service */ 60064);
/* harmony import */ var _share_services_telegram_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/services/telegram.service */ 21421);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _share_account_login_google_login_google_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/account/login-google/login-google.component */ 27756);
/* harmony import */ var _site_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../site/footer/footer.component */ 52106);
/* harmony import */ var _zalo_zalo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zalo/zalo.component */ 35556);


















function LoginComponent_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", item_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r6.label, " ");
  }
}
function LoginComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LoginComponent_div_3_ng_template_3_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r6.link, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("src", "/assets/img/", item_r6.api, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("alt", item_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", item_r6.label);
  }
}
function LoginComponent_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r11.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r11.user.fullName);
  }
}
function LoginComponent_div_4_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " H\u1ECD v\u00E0 t\u00EAn: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 1, ctx_r12.user == null ? null : ctx_r12.user.fullName), "");
  }
}
function LoginComponent_div_4_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u0110\u01A1n v\u1ECB: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 2, ctx_r13.user == null ? null : ctx_r13.user.unit), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 4, ctx_r13.user == null ? null : ctx_r13.user.unitFull), "");
  }
}
function LoginComponent_div_4_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_4_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.installApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " C\u00E0i \u1EE9ng d\u1EE5ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "install_mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_4_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span");
  }
}
function LoginComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LoginComponent_div_4_span_4_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, LoginComponent_div_4_li_6_Template, 5, 3, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LoginComponent_div_4_li_7_Template, 6, 6, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "li", 21)(13, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, LoginComponent_div_4_button_15_Template, 4, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "li", 21)(17, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 23)(20, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_4_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.signOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " Tho\u00E1t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "power_settings_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, LoginComponent_div_4_span_24_Template, 1, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.photoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.user == null ? null : ctx_r1.user.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.user == null ? null : ctx_r1.user.unitFull);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.version, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.deferredPrompt && !ctx_r1.isIOS && !ctx_r1.isInStandaloneMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("ID: ", ctx_r1.user._id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.user._id == "jiAqNrmWXBXNGvDXddtrUp0usIh1");
  }
}
function LoginComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 30)(2, "div", 31)(3, "h5", 32)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u0110\u0102NG NH\u1EACP");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-login-google")(7, "app-zalo")(8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@slideIn", undefined);
  }
}
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 33);
  }
}
function LoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 38)(5, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
}
class LoginComponent {
  constructor(plus, authSV, fb, formSV, teleSV) {
    this.plus = plus;
    this.authSV = authSV;
    this.fb = fb;
    this.formSV = formSV;
    this.teleSV = teleSV;
    this.photoUrl = localStorage.getItem('avatar');
    this.api = "user";
    this.spin = true;
    this.tittle = "Tài khoản";
    this.navUser = [];
    this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
    this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
    this.step = 1;
    this.isIOS = false;
    this.isInStandaloneMode = false;
    this.isGoogleBlocked = false;
    this.main = this.fb.group({
      phoneNumber: ['', [this.formSV.regex_integer(), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      phoneNumberCode: ['84', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(255), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      otpCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(6)]]
    });
  }
  ngOnDestroy() {
    const fb = document.getElementById('fb-customer-chat');
    const fbRoot = document.getElementById('fb-root');
    if (fb) fb.remove();
    if (fbRoot) fbRoot.remove();
  }
  ngOnInit() {
    this.plus.setTiTle(this.tittle);
    this.init();
    this.authSV.user$.subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.authSV.nav.subscribe(res => {
      this.navUser = res;
    });
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      this.deferredPrompt = event;
      console.log('beforeinstallprompt được kích hoạt');
    });
  }
  detectPlatform() {
    this.isIOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    this.isInStandaloneMode = 'standalone' in window.navigator && window.navigator.standalone === true;
  }
  installApp() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Người dùng đồng ý cài đặt app');
        } else {
          console.log('Người dùng từ chối cài đặt app');
        }
        this.deferredPrompt = null;
      });
    }
  }
  checkPer(api = this.api, level = 1) {
    return this.authSV.checkPer(api, level);
  }
  logout() {
    this.authSV.logout();
  }
  init() {
    document.getElementById('app').scrollTo(0, 50);
  }
  signOut() {
    const ask = confirm('Bạn muốn đăng xuất?');
    if (ask) {
      this.authSV.logout();
    }
  }
  loginZalo() {
    const href = window.location.href;
    const urlV4 = `https://oauth.zaloapp.com/v4/permission?app_id=2779128174828680737&redirect_uri=${href}/zalo&state=${localStorage.getItem('openpages')}`;
    window.location.href = urlV4;
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_share_services_form_service__WEBPACK_IMPORTED_MODULE_4__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_share_services_telegram_service__WEBPACK_IMPORTED_MODULE_5__.TelegramService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 11,
      vars: 5,
      consts: [[1, "container"], [1, "row"], [1, "outer"], ["class", "block", 4, "ngFor", "ngForOf"], ["class", "row my-5 justify-content-center", 4, "ngIf", "ngIfElse"], ["showLogin", ""], [1, "login-container"], ["id", "googleBtnFallback", 4, "ngIf"], ["class", "modal fade", "id", "qrUserId", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modelTitleId", "aria-hidden", "true", 4, "ngIf"], [1, "block"], [3, "routerLink"], [1, "img", 3, "src", "alt", "matTooltip"], ["label", ""], [1, "labelIcon", 3, "matTooltip"], [1, "row", "my-5", "justify-content-center"], [1, "col-md-8"], [1, "card"], [1, "text-right"], ["class", "card hangHoa", "routerLink", "/taikhoan", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item", 4, "ngIf"], [1, "list-group-item"], ["mat-raised-button", "", "matTooltip", "C\u00E0i \u0111\u1EB7t", "color", "accent", 3, "click", 4, "ngIf"], [1, "text-center"], ["mat-raised-button", "", "matTooltip", "\u0110\u0103ng xu\u1EA5t", "color", "warn", 3, "click"], ["fontSet", "material-icons-round"], [4, "ngIf"], ["routerLink", "/taikhoan", 1, "card", "hangHoa"], ["height", "100px", "width", "100px", 1, "justify-content-center", 3, "src", "matTooltip"], ["mat-raised-button", "", "matTooltip", "C\u00E0i \u0111\u1EB7t", "color", "accent", 3, "click"], [1, "col-lg-6", "mx-auto"], [1, "card", "card-signin", "text-center"], [1, "card-title", "text-center", "text-danger", "py-1"], ["id", "googleBtnFallback"], ["id", "qrUserId", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modelTitleId", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], [1, "modal-footer"], ["data-bs-dismiss", "modal"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 5, 5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 25, 9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LoginComponent_ng_template_5_Template, 9, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 1, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 7, 0, "div", 8);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.navUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.user)("ngIfElse", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isGoogleBlocked);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _share_account_login_google_login_google_component__WEBPACK_IMPORTED_MODULE_6__.LoginGoogleComponent, _site_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _zalo_zalo_component__WEBPACK_IMPORTED_MODULE_8__.ZaloComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe],
      styles: [".menubtn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 5px;\n  right: 9px;\n  z-index: 99;\n  color: blue;\n  \n\n  \n\n  \n\n\n}\n\n.login-aside[_ngcontent-%COMP%] {\n  animation: fadein 2.25s ease-in-out;\n  flex: 3 3;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: column;\n  min-height: 100%;\n  border-radius: 0 10px 10px 0;\n  background: url(\"https://source.unsplash.com/random/1200x900?mountain\") no-repeat center center;\n  background-size: cover;\n  position: relative;\n}\n[_ngcontent-%COMP%]:root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem;\n}\n\n\n.element.style[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 267px;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #007bff;\n  background: linear-gradient(to right, #0062E6, #33AEFF);\n}\n\n.card-signin[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem;\n}\n\n.card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 80%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s;\n}\n\n.form-label-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n  padding: 2rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: auto;\n  border-radius: 2rem;\n}\n\n.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n  padding: var(--input-padding-y) var(--input-padding-x);\n}\n\n.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  \n\n  line-height: 1.5;\n  color: #495057;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3);\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%] {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777;\n}\n\n.btn-google[_ngcontent-%COMP%] {\n  color: white;\n  background-color: rgb(209, 80, 80);\n}\n\n.btn-facebook[_ngcontent-%COMP%] {\n  color: white;\n  background-color: rgb(56, 56, 168);\n  border: 1px;\n}\n\n.btn-zalo[_ngcontent-%COMP%] {\n  color: blue;\n  padding: 5px !important;\n  background-color: rgb(173, 209, 241);\n  border: 1px;\n  font-size: larger;\n}\n\n\n\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n\n\n\n\n@media all and (-ms-high-contrast: none),\n(-ms-high-contrast: active) {\n  .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n.img[_ngcontent-%COMP%]{\n  width: 60px;\n  height: 60px;\n  z-index: 1;\n  position:relative\n}\n\n.labelIcon[_ngcontent-%COMP%] {\n  position: static;\n  z-index: 3;\n}\n\n.outer[_ngcontent-%COMP%] {\n    text-align:center;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.block[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  \n\n  display: inline-block;\n  margin: 0.6rem;\n  padding: 0.5rem;\n  \n\n\n  border: solid .05rem #777;\n  align-items: center;\n  background-color: white;\n  border-radius: 1rem;\n}\n\n.block[_ngcontent-%COMP%]:hover {\n  border-width: .3rem;\n  border-color: blue;\n  transform: scale(1.1);\n}\n\n\n\n.hangHoa[_ngcontent-%COMP%] {\n  height: 5rem;\n  width: 5rem;\n  border-radius: 1rem;\n  margin: 0.6rem;\n  padding: 0.5rem;\n  border-width: .1rem;\n  border-color: blue;\n  align-items: center;\n  justify-content: center;\n  color: tomato;\n  background-color: white;\n\n}\n\n.hangHoa[_ngcontent-%COMP%]:hover {\n  border-width: .3rem;\n  border-color: blue;\n  transform: scale(1.1);\n}\n\nimg[_ngcontent-%COMP%] {\n  font-family: 'Helvetica';\n  font-weight: 300;\n  line-height: 2;\n  text-align: center;\n\n  width: 100%;\n  height: auto;\n  display: block;\n  position: relative;\n}\n\nimg[_ngcontent-%COMP%]:after {\n  content: attr(alt);\n  \n\n  font-family: Roboto;\n  color: tomato;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n  display: block;\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n}\n\n\n\n\n.containerx[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%; \n\n}\n\n\n\n.responsive-iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.flag[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 16px;\n    margin-right: 0.3em;\n    display: inline-block;\n}\n\n\n\n\n\n\n.cap[_ngcontent-%COMP%] {\n      display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#recaptcha-container[_ngcontent-%COMP%]{\n  \n\n  \n\n\n\n  \n\n  \n\n  display: flex;\n  align-items: center\n}\n\n\n.f32[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]{display:inline-block;height:32px;width:32px;vertical-align:text-top;line-height:32px;background:url(https://github.com/lafeber/world-flags-sprite/raw/master/images/flags32.png) no-repeat;}\n.f32[_ngcontent-%COMP%]   ._African_Union[_ngcontent-%COMP%]{background-position:0 -32px;}\n.f32[_ngcontent-%COMP%]   ._Arab_League[_ngcontent-%COMP%]{background-position:0 -64px;}\n.f32[_ngcontent-%COMP%]   ._ASEAN[_ngcontent-%COMP%]{background-position:0 -96px;}\n.f32[_ngcontent-%COMP%]   ._CARICOM[_ngcontent-%COMP%]{background-position:0 -128px;}\n.f32[_ngcontent-%COMP%]   ._CIS[_ngcontent-%COMP%]{background-position:0 -160px;}\n.f32[_ngcontent-%COMP%]   ._Commonwealth[_ngcontent-%COMP%]{background-position:0 -192px;}\n.f32[_ngcontent-%COMP%]   ._England[_ngcontent-%COMP%]{background-position:0 -224px;}\n.f32[_ngcontent-%COMP%]   ._European_Union[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .eu[_ngcontent-%COMP%]{background-position:0 -256px;}\n.f32[_ngcontent-%COMP%]   ._Islamic_Conference[_ngcontent-%COMP%]{background-position:0 -288px;}\n.f32[_ngcontent-%COMP%]   ._Kosovo[_ngcontent-%COMP%]{background-position:0 -320px;}\n.f32[_ngcontent-%COMP%]   ._NATO[_ngcontent-%COMP%]{background-position:0 -352px;}\n.f32[_ngcontent-%COMP%]   ._Northern_Cyprus[_ngcontent-%COMP%]{background-position:0 -384px;}\n.f32[_ngcontent-%COMP%]   ._Northern_Ireland[_ngcontent-%COMP%]{background-position:0 -416px;}\n.f32[_ngcontent-%COMP%]   ._Olimpic_Movement[_ngcontent-%COMP%]{background-position:0 -448px;}\n.f32[_ngcontent-%COMP%]   ._OPEC[_ngcontent-%COMP%]{background-position:0 -480px;}\n.f32[_ngcontent-%COMP%]   ._Red_Cross[_ngcontent-%COMP%]{background-position:0 -512px;}\n.f32[_ngcontent-%COMP%]   ._Scotland[_ngcontent-%COMP%]{background-position:0 -544px;}\n.f32[_ngcontent-%COMP%]   ._Somaliland[_ngcontent-%COMP%]{background-position:0 -576px;}\n.f32[_ngcontent-%COMP%]   ._Tibet[_ngcontent-%COMP%]{background-position:0 -608px;}\n.f32[_ngcontent-%COMP%]   ._United_Nations[_ngcontent-%COMP%]{background-position:0 -640px;}\n.f32[_ngcontent-%COMP%]   ._Wales[_ngcontent-%COMP%]{background-position:0 -672px;}\n.f32[_ngcontent-%COMP%]   .ad[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .and[_ngcontent-%COMP%] {background-position: 0 -704px;}\n.f32[_ngcontent-%COMP%]   .ae[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .are[_ngcontent-%COMP%] {background-position: 0 -736px;}\n.f32[_ngcontent-%COMP%]   .af[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .afg[_ngcontent-%COMP%] {background-position: 0 -768px;}\n.f32[_ngcontent-%COMP%]   .ag[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .atg[_ngcontent-%COMP%] {background-position: 0 -800px;}\n.f32[_ngcontent-%COMP%]   .ai[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .aia[_ngcontent-%COMP%] {background-position: 0 -832px;}\n.f32[_ngcontent-%COMP%]   .al[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .alb[_ngcontent-%COMP%] {background-position: 0 -864px;}\n.f32[_ngcontent-%COMP%]   .am[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .arm[_ngcontent-%COMP%] {background-position: 0 -896px;}\n.f32[_ngcontent-%COMP%]   .ao[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ago[_ngcontent-%COMP%] {background-position: 0 -928px;}\n.f32[_ngcontent-%COMP%]   .aq[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ata[_ngcontent-%COMP%] {background-position: 0 -960px;}\n.f32[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .arg[_ngcontent-%COMP%] {background-position: 0 -992px;}\n.f32[_ngcontent-%COMP%]   .as[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .asm[_ngcontent-%COMP%] {background-position: 0 -1024px;}\n.f32[_ngcontent-%COMP%]   .at[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .aut[_ngcontent-%COMP%] {background-position: 0 -1056px;}\n.f32[_ngcontent-%COMP%]   .au[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .aus[_ngcontent-%COMP%] {background-position: 0 -1088px;}\n.f32[_ngcontent-%COMP%]   .aw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .abw[_ngcontent-%COMP%] {background-position: 0 -1120px;}\n.f32[_ngcontent-%COMP%]   .ax[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ala[_ngcontent-%COMP%] {background-position: 0 -1152px;}\n.f32[_ngcontent-%COMP%]   .az[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .aze[_ngcontent-%COMP%] {background-position: 0 -1184px;}\n.f32[_ngcontent-%COMP%]   .ba[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bih[_ngcontent-%COMP%] {background-position: 0 -1216px;}\n.f32[_ngcontent-%COMP%]   .bb[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .brb[_ngcontent-%COMP%] {background-position: 0 -1248px;}\n.f32[_ngcontent-%COMP%]   .bd[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bgd[_ngcontent-%COMP%] {background-position: 0 -1280px;}\n.f32[_ngcontent-%COMP%]   .be[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bel[_ngcontent-%COMP%] {background-position: 0 -1312px;}\n.f32[_ngcontent-%COMP%]   .bf[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bfa[_ngcontent-%COMP%] {background-position: 0 -1344px;}\n.f32[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bgr[_ngcontent-%COMP%] {background-position: 0 -1376px;}\n.f32[_ngcontent-%COMP%]   .bh[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bhr[_ngcontent-%COMP%] {background-position: 0 -1408px;}\n.f32[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bdi[_ngcontent-%COMP%] {background-position: 0 -1440px;}\n.f32[_ngcontent-%COMP%]   .bj[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ben[_ngcontent-%COMP%] {background-position: 0 -1472px;}\n.f32[_ngcontent-%COMP%]   .bm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bmu[_ngcontent-%COMP%] {background-position: 0 -1504px;}\n.f32[_ngcontent-%COMP%]   .bn[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .brn[_ngcontent-%COMP%] {background-position: 0 -1536px;}\n.f32[_ngcontent-%COMP%]   .bo[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bol[_ngcontent-%COMP%] {background-position: 0 -1568px;}\n.f32[_ngcontent-%COMP%]   .br[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bra[_ngcontent-%COMP%] {background-position: 0 -1600px;}\n.f32[_ngcontent-%COMP%]   .bs[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bhs[_ngcontent-%COMP%] {background-position: 0 -1632px;}\n.f32[_ngcontent-%COMP%]   .bt[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {background-position: 0 -1664px;}\n.f32[_ngcontent-%COMP%]   .bw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bwa[_ngcontent-%COMP%] {background-position: 0 -1696px;}\n.f32[_ngcontent-%COMP%]   .by[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .blr[_ngcontent-%COMP%] {background-position: 0 -1728px;}\n.f32[_ngcontent-%COMP%]   .bz[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .blz[_ngcontent-%COMP%] {background-position: 0 -1760px;}\n.f32[_ngcontent-%COMP%]   .ca[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .can[_ngcontent-%COMP%] {background-position: 0 -1792px;}\n.f32[_ngcontent-%COMP%]   .cd[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cod[_ngcontent-%COMP%] {background-position: 0 -1824px;}\n.f32[_ngcontent-%COMP%]   .cf[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .rca[_ngcontent-%COMP%] {background-position: 0 -1856px;}\n.f32[_ngcontent-%COMP%]   .cg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cog[_ngcontent-%COMP%] {background-position: 0 -1888px;}\n.f32[_ngcontent-%COMP%]   .ch[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .che[_ngcontent-%COMP%] {background-position: 0 -1920px;}\n.f32[_ngcontent-%COMP%]   .ci[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .civ[_ngcontent-%COMP%] {background-position: 0 -1952px;}\n.f32[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cok[_ngcontent-%COMP%] {background-position: 0 -1984px;}\n.f32[_ngcontent-%COMP%]   .cl[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .chl[_ngcontent-%COMP%] {background-position: 0 -2016px;}\n.f32[_ngcontent-%COMP%]   .cm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cmr[_ngcontent-%COMP%] {background-position: 0 -2048px;}\n.f32[_ngcontent-%COMP%]   .cn[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .chn[_ngcontent-%COMP%] {background-position: 0 -2080px;}\n.f32[_ngcontent-%COMP%]   .co[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {background-position: 0 -2112px;}\n.f32[_ngcontent-%COMP%]   .cr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cri[_ngcontent-%COMP%] {background-position: 0 -2144px;}\n.f32[_ngcontent-%COMP%]   .cu[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cub[_ngcontent-%COMP%] {background-position: 0 -2176px;}\n.f32[_ngcontent-%COMP%]   .cv[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cpv[_ngcontent-%COMP%] {background-position: 0 -2208px;}\n.f32[_ngcontent-%COMP%]   .cy[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cyp[_ngcontent-%COMP%] {background-position: 0 -2240px;}\n.f32[_ngcontent-%COMP%]   .cz[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cze[_ngcontent-%COMP%] {background-position: 0 -2272px;}\n.f32[_ngcontent-%COMP%]   .de[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .deu[_ngcontent-%COMP%] {background-position: 0 -2304px;}\n.f32[_ngcontent-%COMP%]   .dj[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .dji[_ngcontent-%COMP%] {background-position: 0 -2336px;}\n.f32[_ngcontent-%COMP%]   .dk[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .dnk[_ngcontent-%COMP%] {background-position: 0 -2368px;}\n.f32[_ngcontent-%COMP%]   .dm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .dma[_ngcontent-%COMP%] {background-position: 0 -2400px;}\n.f32[_ngcontent-%COMP%]   .do[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .dom[_ngcontent-%COMP%] {background-position: 0 -2432px;}\n.f32[_ngcontent-%COMP%]   .dz[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .dza[_ngcontent-%COMP%] {background-position: 0 -2464px;}\n.f32[_ngcontent-%COMP%]   .ec[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ecu[_ngcontent-%COMP%] {background-position: 0 -2496px;}\n.f32[_ngcontent-%COMP%]   .ee[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .est[_ngcontent-%COMP%] {background-position: 0 -2528px;}\n.f32[_ngcontent-%COMP%]   .eg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .egy[_ngcontent-%COMP%] {background-position: 0 -2560px;}\n.f32[_ngcontent-%COMP%]   .eh[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .esh[_ngcontent-%COMP%] {background-position: 0 -2592px;}\n.f32[_ngcontent-%COMP%]   .er[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .eri[_ngcontent-%COMP%] {background-position: 0 -2624px;}\n.f32[_ngcontent-%COMP%]   .es[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .esp[_ngcontent-%COMP%] {background-position: 0 -2656px;}\n.f32[_ngcontent-%COMP%]   .et[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .eth[_ngcontent-%COMP%] {background-position: 0 -2688px;}\n.f32[_ngcontent-%COMP%]   .fi[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .fin[_ngcontent-%COMP%] {background-position: 0 -2720px;}\n.f32[_ngcontent-%COMP%]   .fj[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .fji[_ngcontent-%COMP%] {background-position: 0 -2752px;}\n.f32[_ngcontent-%COMP%]   .fm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .fsm[_ngcontent-%COMP%] {background-position: 0 -2784px;}\n.f32[_ngcontent-%COMP%]   .fo[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .fro[_ngcontent-%COMP%] {background-position: 0 -2816px;}\n.f32[_ngcontent-%COMP%]   .fr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .fra[_ngcontent-%COMP%] {background-position: 0 -2848px;}\n.f32[_ngcontent-%COMP%]   .bl[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .blm[_ngcontent-%COMP%] {background-position: 0 -2848px;}\n.f32[_ngcontent-%COMP%]   .cp[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cpt[_ngcontent-%COMP%] {background-position: 0 -2848px;}\n.f32[_ngcontent-%COMP%]   .mf[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .maf[_ngcontent-%COMP%] {background-position: 0 -2848px;}\n.f32[_ngcontent-%COMP%]   .yt[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .myt[_ngcontent-%COMP%] {background-position: 0 -2848px;}\n.f32[_ngcontent-%COMP%]   .ga[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gab[_ngcontent-%COMP%] {background-position: 0 -2880px;}\n.f32[_ngcontent-%COMP%]   .gb[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gbr[_ngcontent-%COMP%] {background-position: 0 -2912px;}\n.f32[_ngcontent-%COMP%]   .sh[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .shn[_ngcontent-%COMP%] {background-position: 0 -2912px;}\n.f32[_ngcontent-%COMP%]   .gd[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .grd[_ngcontent-%COMP%] {background-position: 0 -2944px;}\n.f32[_ngcontent-%COMP%]   .ge[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .geo[_ngcontent-%COMP%] {background-position: 0 -2976px;}\n.f32[_ngcontent-%COMP%]   .gg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ggy[_ngcontent-%COMP%] {background-position: 0 -3008px;}\n.f32[_ngcontent-%COMP%]   .gh[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gha[_ngcontent-%COMP%] {background-position: 0 -3040px;}\n.f32[_ngcontent-%COMP%]   .gi[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gib[_ngcontent-%COMP%] {background-position: 0 -3072px;}\n.f32[_ngcontent-%COMP%]   .gl[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .grl[_ngcontent-%COMP%] {background-position: 0 -3104px;}\n.f32[_ngcontent-%COMP%]   .gm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gmb[_ngcontent-%COMP%] {background-position: 0 -3136px;}\n.f32[_ngcontent-%COMP%]   .gn[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gin[_ngcontent-%COMP%] {background-position: 0 -3168px;}\n.f32[_ngcontent-%COMP%]   .gp[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .glp[_ngcontent-%COMP%] {background-position: 0 -3200px;}\n.f32[_ngcontent-%COMP%]   .gq[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gnq[_ngcontent-%COMP%] {background-position: 0 -3232px;}\n.f32[_ngcontent-%COMP%]   .gr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .grc[_ngcontent-%COMP%] {background-position: 0 -3264px;}\n.f32[_ngcontent-%COMP%]   .gt[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gtm[_ngcontent-%COMP%] {background-position: 0 -3296px;}\n.f32[_ngcontent-%COMP%]   .gu[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gum[_ngcontent-%COMP%] {background-position: 0 -3328px;}\n.f32[_ngcontent-%COMP%]   .gw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%] {background-position: 0 -3360px;}\n.f32[_ngcontent-%COMP%]   .gy[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .guy[_ngcontent-%COMP%] {background-position: 0 -3392px;}\n.f32[_ngcontent-%COMP%]   .hk[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .hkg[_ngcontent-%COMP%] {background-position: 0 -3424px;}\n.f32[_ngcontent-%COMP%]   .hn[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .hnd[_ngcontent-%COMP%] {background-position: 0 -3456px;}\n.f32[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .hrv[_ngcontent-%COMP%] {background-position: 0 -3488px;}\n.f32[_ngcontent-%COMP%]   .ht[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .hti[_ngcontent-%COMP%] {background-position: 0 -3520px;}\n.f32[_ngcontent-%COMP%]   .hu[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .hun[_ngcontent-%COMP%] {background-position: 0 -3552px;}\n.f32[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .idn[_ngcontent-%COMP%] {background-position: 0 -3584px;}\n.f32[_ngcontent-%COMP%]   .mc[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mco[_ngcontent-%COMP%] {background-position: 0 -3584px;}\n.f32[_ngcontent-%COMP%]   .ie[_ngcontent-%COMP%] {background-position: 0 -3616px;}\n.f32[_ngcontent-%COMP%]   .il[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .isr[_ngcontent-%COMP%] {background-position: 0 -3648px;}\n.f32[_ngcontent-%COMP%]   .im[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .imn[_ngcontent-%COMP%] {background-position: 0 -3680px;}\n.f32[_ngcontent-%COMP%]   .in[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ind[_ngcontent-%COMP%] {background-position: 0 -3712px;}\n.f32[_ngcontent-%COMP%]   .iq[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .irq[_ngcontent-%COMP%] {background-position: 0 -3744px;}\n.f32[_ngcontent-%COMP%]   .ir[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .irn[_ngcontent-%COMP%] {background-position: 0 -3776px;}\n.f32[_ngcontent-%COMP%]   .is[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .isl[_ngcontent-%COMP%] {background-position: 0 -3808px;}\n.f32[_ngcontent-%COMP%]   .it[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ita[_ngcontent-%COMP%] {background-position: 0 -3840px;}\n.f32[_ngcontent-%COMP%]   .je[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .jey[_ngcontent-%COMP%] {background-position: 0 -3872px;}\n.f32[_ngcontent-%COMP%]   .jm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .jam[_ngcontent-%COMP%] {background-position: 0 -3904px;}\n.f32[_ngcontent-%COMP%]   .jo[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .jor[_ngcontent-%COMP%] {background-position: 0 -3936px;}\n.f32[_ngcontent-%COMP%]   .jp[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .jpn[_ngcontent-%COMP%] {background-position: 0 -3968px;}\n.f32[_ngcontent-%COMP%]   .ke[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ken[_ngcontent-%COMP%] {background-position: 0 -4000px;}\n.f32[_ngcontent-%COMP%]   .kg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .kgz[_ngcontent-%COMP%] {background-position: 0 -4032px;}\n.f32[_ngcontent-%COMP%]   .kh[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .khm[_ngcontent-%COMP%] {background-position: 0 -4064px;}\n.f32[_ngcontent-%COMP%]   .ki[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .kir[_ngcontent-%COMP%] {background-position: 0 -4096px;}\n.f32[_ngcontent-%COMP%]   .km[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .com[_ngcontent-%COMP%] {background-position: 0 -4128px;}\n.f32[_ngcontent-%COMP%]   .kn[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .kna[_ngcontent-%COMP%] {background-position: 0 -4160px;}\n.f32[_ngcontent-%COMP%]   .kp[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .prk[_ngcontent-%COMP%] {background-position: 0 -4192px;}\n.f32[_ngcontent-%COMP%]   .kr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .kor[_ngcontent-%COMP%] {background-position: 0 -4224px;}\n.f32[_ngcontent-%COMP%]   .kw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .kwt[_ngcontent-%COMP%] {background-position: 0 -4256px;}\n.f32[_ngcontent-%COMP%]   .ky[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cym[_ngcontent-%COMP%] {background-position: 0 -4288px;}\n.f32[_ngcontent-%COMP%]   .kz[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .kaz[_ngcontent-%COMP%] {background-position: 0 -4320px;}\n.f32[_ngcontent-%COMP%]   .la[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lao[_ngcontent-%COMP%] {background-position: 0 -4352px;}\n.f32[_ngcontent-%COMP%]   .lb[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lbn[_ngcontent-%COMP%] {background-position: 0 -4384px;}\n.f32[_ngcontent-%COMP%]   .lc[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lca[_ngcontent-%COMP%] {background-position: 0 -4416px;}\n.f32[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lie[_ngcontent-%COMP%] {background-position: 0 -4448px;}\n.f32[_ngcontent-%COMP%]   .lk[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lka[_ngcontent-%COMP%] {background-position: 0 -4480px;}\n.f32[_ngcontent-%COMP%]   .lr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lbr[_ngcontent-%COMP%] {background-position: 0 -4512px;}\n.f32[_ngcontent-%COMP%]   .ls[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lso[_ngcontent-%COMP%] {background-position: 0 -4544px;}\n.f32[_ngcontent-%COMP%]   .lt[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ltu[_ngcontent-%COMP%] {background-position: 0 -4576px;}\n.f32[_ngcontent-%COMP%]   .lu[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lux[_ngcontent-%COMP%] {background-position: 0 -4608px;}\n.f32[_ngcontent-%COMP%]   .lv[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lva[_ngcontent-%COMP%] {background-position: 0 -4640px;}\n.f32[_ngcontent-%COMP%]   .ly[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .lby[_ngcontent-%COMP%] {background-position: 0 -4672px;}\n.f32[_ngcontent-%COMP%]   .ma[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mar[_ngcontent-%COMP%] {background-position: 0 -4704px;}\n.f32[_ngcontent-%COMP%]   .md[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mda[_ngcontent-%COMP%] {background-position: 0 -4736px;}\n.f32[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mne[_ngcontent-%COMP%] {background-position: 0 -4768px;}\n.f32[_ngcontent-%COMP%]   .mg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mdg[_ngcontent-%COMP%] {background-position: 0 -4800px;}\n.f32[_ngcontent-%COMP%]   .mh[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mhl[_ngcontent-%COMP%] {background-position: 0 -4832px;}\n.f32[_ngcontent-%COMP%]   .mk[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mkd[_ngcontent-%COMP%] {background-position: 0 -4864px;}\n.f32[_ngcontent-%COMP%]   .ml[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mli[_ngcontent-%COMP%] {background-position: 0 -4896px;}\n.f32[_ngcontent-%COMP%]   .mm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mmr[_ngcontent-%COMP%] {background-position: 0 -4928px;}\n.f32[_ngcontent-%COMP%]   .mn[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mng[_ngcontent-%COMP%] {background-position: 0 -4960px;}\n.f32[_ngcontent-%COMP%]   .mo[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mac[_ngcontent-%COMP%] {background-position: 0 -4992px;}\n.f32[_ngcontent-%COMP%]   .mq[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mtq[_ngcontent-%COMP%] {background-position: 0 -5024px;}\n.f32[_ngcontent-%COMP%]   .mr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mrt[_ngcontent-%COMP%] {background-position: 0 -5056px;}\n.f32[_ngcontent-%COMP%]   .ms[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .msr[_ngcontent-%COMP%] {background-position: 0 -5088px;}\n.f32[_ngcontent-%COMP%]   .mt[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mlt[_ngcontent-%COMP%] {background-position: 0 -5120px;}\n.f32[_ngcontent-%COMP%]   .mu[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mus[_ngcontent-%COMP%] {background-position: 0 -5152px;}\n.f32[_ngcontent-%COMP%]   .mv[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mdv[_ngcontent-%COMP%] {background-position: 0 -5184px;}\n.f32[_ngcontent-%COMP%]   .mw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mwi[_ngcontent-%COMP%] {background-position: 0 -5216px;}\n.f32[_ngcontent-%COMP%]   .mx[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mex[_ngcontent-%COMP%] {background-position: 0 -5248px;}\n.f32[_ngcontent-%COMP%]   .my[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .mys[_ngcontent-%COMP%] {background-position: 0 -5280px;}\n.f32[_ngcontent-%COMP%]   .mz[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .moz[_ngcontent-%COMP%] {background-position: 0 -5312px;}\n.f32[_ngcontent-%COMP%]   .na[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .nam[_ngcontent-%COMP%] {background-position: 0 -5344px;}\n.f32[_ngcontent-%COMP%]   .nc[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ncl[_ngcontent-%COMP%] {background-position: 0 -5376px;}\n.f32[_ngcontent-%COMP%]   .ne[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ner[_ngcontent-%COMP%] {background-position: 0 -5408px;}\n.f32[_ngcontent-%COMP%]   .ng[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .nga[_ngcontent-%COMP%] {background-position: 0 -5440px;}\n.f32[_ngcontent-%COMP%]   .ni[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .nic[_ngcontent-%COMP%] {background-position: 0 -5472px;}\n.f32[_ngcontent-%COMP%]   .nl[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .nld[_ngcontent-%COMP%] {background-position: 0 -5504px;}\n.f32[_ngcontent-%COMP%]   .nl[_ngcontent-%COMP%]{background-position:0 -5504px;}  .f32[_ngcontent-%COMP%]   .bq[_ngcontent-%COMP%]{background-position:0 -5504px;}.f32[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%]{background-position:0 -5536px;}  .f32[_ngcontent-%COMP%]   .bv[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .nq[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .sj[_ngcontent-%COMP%]{background-position:0 -5536px;}\n.f32[_ngcontent-%COMP%]   .bq[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bes[_ngcontent-%COMP%] {background-position: 0 -5504px;}\n.f32[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .nor[_ngcontent-%COMP%] {background-position: 0 -5536px;}\n.f32[_ngcontent-%COMP%]   .bv[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .bvt[_ngcontent-%COMP%] {background-position: 0 -5536px;}\n.f32[_ngcontent-%COMP%]   .nq[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .atn[_ngcontent-%COMP%] {background-position: 0 -5536px;}\n.f32[_ngcontent-%COMP%]   .sj[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .sjm[_ngcontent-%COMP%] {background-position: 0 -5536px;}\n.f32[_ngcontent-%COMP%]   .np[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .npl[_ngcontent-%COMP%] {background-position: 0 -5568px;}\n.f32[_ngcontent-%COMP%]   .nr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .nru[_ngcontent-%COMP%] {background-position: 0 -5600px;}\n.f32[_ngcontent-%COMP%]   .nz[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .nzl[_ngcontent-%COMP%] {background-position: 0 -5632px;}\n.f32[_ngcontent-%COMP%]   .om[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .omn[_ngcontent-%COMP%] {background-position: 0 -5664px;}\n.f32[_ngcontent-%COMP%]   .pa[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .pan[_ngcontent-%COMP%] {background-position: 0 -5696px;}\n.f32[_ngcontent-%COMP%]   .pe[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .per[_ngcontent-%COMP%] {background-position: 0 -5728px;}\n.f32[_ngcontent-%COMP%]   .pf[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .pyf[_ngcontent-%COMP%] {background-position: 0 -5760px;}\n.f32[_ngcontent-%COMP%]   .pg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .png[_ngcontent-%COMP%] {background-position: 0 -5792px;}\n.f32[_ngcontent-%COMP%]   .ph[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .phl[_ngcontent-%COMP%] {background-position: 0 -5824px;}\n.f32[_ngcontent-%COMP%]   .pk[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .pak[_ngcontent-%COMP%] {background-position: 0 -5856px;}\n.f32[_ngcontent-%COMP%]   .pl[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .pol[_ngcontent-%COMP%] {background-position: 0 -5888px;}\n.f32[_ngcontent-%COMP%]   .pr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .pri[_ngcontent-%COMP%] {background-position: 0 -5920px;}\n.f32[_ngcontent-%COMP%]   .ps[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .pse[_ngcontent-%COMP%] {background-position: 0 -5952px;}\n.f32[_ngcontent-%COMP%]   .pt[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .prt[_ngcontent-%COMP%] {background-position: 0 -5984px;}\n.f32[_ngcontent-%COMP%]   .pw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .plw[_ngcontent-%COMP%] {background-position: 0 -6016px;}\n.f32[_ngcontent-%COMP%]   .py[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .pry[_ngcontent-%COMP%] {background-position: 0 -6048px;}\n.f32[_ngcontent-%COMP%]   .qa[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .qat[_ngcontent-%COMP%] {background-position: 0 -6080px;}\n.f32[_ngcontent-%COMP%]   .re[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .reu[_ngcontent-%COMP%] {background-position: 0 -6112px;}\n.f32[_ngcontent-%COMP%]   .ro[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .rou[_ngcontent-%COMP%] {background-position: 0 -6144px;}\n.f32[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .srb[_ngcontent-%COMP%] {background-position: 0 -6176px;}\n.f32[_ngcontent-%COMP%]   .ru[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .rus[_ngcontent-%COMP%] {background-position: 0 -6208px;}\n.f32[_ngcontent-%COMP%]   .rw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .rwa[_ngcontent-%COMP%] {background-position: 0 -6240px;}\n.f32[_ngcontent-%COMP%]   .sa[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .sau[_ngcontent-%COMP%] {background-position: 0 -6272px;}\n.f32[_ngcontent-%COMP%]   .sb[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .slb[_ngcontent-%COMP%] {background-position: 0 -6304px;}\n.f32[_ngcontent-%COMP%]   .sc[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .syc[_ngcontent-%COMP%] {background-position: 0 -6336px;}\n.f32[_ngcontent-%COMP%]   .sd[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .sdn[_ngcontent-%COMP%] {background-position: 0 -6368px;}\n.f32[_ngcontent-%COMP%]   .se[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .swe[_ngcontent-%COMP%] {background-position: 0 -6400px;}\n.f32[_ngcontent-%COMP%]   .sg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .sgp[_ngcontent-%COMP%] {background-position: 0 -6432px;}\n.f32[_ngcontent-%COMP%]   .si[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .svn[_ngcontent-%COMP%] {background-position: 0 -6464px;}\n.f32[_ngcontent-%COMP%]   .sk[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .svk[_ngcontent-%COMP%] {background-position: 0 -6496px;}\n.f32[_ngcontent-%COMP%]   .sl[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .sle[_ngcontent-%COMP%] {background-position: 0 -6528px;}\n.f32[_ngcontent-%COMP%]   .sm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .smr[_ngcontent-%COMP%] {background-position: 0 -6560px;}\n.f32[_ngcontent-%COMP%]   .sn[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .sen[_ngcontent-%COMP%] {background-position: 0 -6592px;}\n.f32[_ngcontent-%COMP%]   .so[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .som[_ngcontent-%COMP%] {background-position: 0 -6624px;}\n.f32[_ngcontent-%COMP%]   .sr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .sur[_ngcontent-%COMP%] {background-position: 0 -6656px;}\n.f32[_ngcontent-%COMP%]   .st[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .stp[_ngcontent-%COMP%] {background-position: 0 -6688px;}\n.f32[_ngcontent-%COMP%]   .sv[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .slv[_ngcontent-%COMP%] {background-position: 0 -6720px;}\n.f32[_ngcontent-%COMP%]   .sy[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .syr[_ngcontent-%COMP%] {background-position: 0 -6752px;}\n.f32[_ngcontent-%COMP%]   .sz[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .swz[_ngcontent-%COMP%] {background-position: 0 -6784px;}\n.f32[_ngcontent-%COMP%]   .tc[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tca[_ngcontent-%COMP%] {background-position: 0 -6816px;}\n.f32[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tcd[_ngcontent-%COMP%] {background-position: 0 -6848px;}\n.f32[_ngcontent-%COMP%]   .tg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tgo[_ngcontent-%COMP%] {background-position: 0 -6880px;}\n.f32[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tha[_ngcontent-%COMP%] {background-position: 0 -6912px;}\n.f32[_ngcontent-%COMP%]   .tj[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tjk[_ngcontent-%COMP%] {background-position: 0 -6944px;}\n.f32[_ngcontent-%COMP%]   .tl[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tls[_ngcontent-%COMP%] {background-position: 0 -6976px;}\n.f32[_ngcontent-%COMP%]   .tm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tkm[_ngcontent-%COMP%] {background-position: 0 -7008px;}\n.f32[_ngcontent-%COMP%]   .tn[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tun[_ngcontent-%COMP%] {background-position: 0 -7040px;}\n.f32[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ton[_ngcontent-%COMP%] {background-position: 0 -7072px;}\n.f32[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tur[_ngcontent-%COMP%] {background-position: 0 -7104px;}\n.f32[_ngcontent-%COMP%]   .tt[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tto[_ngcontent-%COMP%] {background-position: 0 -7136px;}\n.f32[_ngcontent-%COMP%]   .tv[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tuv[_ngcontent-%COMP%] {background-position: 0 -7168px;}\n.f32[_ngcontent-%COMP%]   .tw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .twn[_ngcontent-%COMP%] {background-position: 0 -7200px;}\n.f32[_ngcontent-%COMP%]   .tz[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .tza[_ngcontent-%COMP%] {background-position: 0 -7232px;}\n.f32[_ngcontent-%COMP%]   .ua[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ukr[_ngcontent-%COMP%] {background-position: 0 -7264px;}\n.f32[_ngcontent-%COMP%]   .ug[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .uga[_ngcontent-%COMP%] {background-position: 0 -7296px;}\n.f32[_ngcontent-%COMP%]   .us[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .usa[_ngcontent-%COMP%] {background-position: 0 -7328px;}\n.f32[_ngcontent-%COMP%]   .uy[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ury[_ngcontent-%COMP%] {background-position: 0 -7360px;}\n.f32[_ngcontent-%COMP%]   .uz[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .uzb[_ngcontent-%COMP%] {background-position: 0 -7392px;}\n.f32[_ngcontent-%COMP%]   .va[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .vat[_ngcontent-%COMP%] {background-position: 0 -7424px;}\n.f32[_ngcontent-%COMP%]   .vc[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .vct[_ngcontent-%COMP%] {background-position: 0 -7456px;}\n.f32[_ngcontent-%COMP%]   .ve[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ven[_ngcontent-%COMP%] {background-position: 0 -7488px;}\n.f32[_ngcontent-%COMP%]   .vg[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .vgb[_ngcontent-%COMP%] {background-position: 0 -7520px;}\n.f32[_ngcontent-%COMP%]   .vi[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .vir[_ngcontent-%COMP%] {background-position: 0 -7552px;}\n.f32[_ngcontent-%COMP%]   .vn[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .vnm[_ngcontent-%COMP%] {background-position: 0 -7584px;}\n.f32[_ngcontent-%COMP%]   .vu[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .vut[_ngcontent-%COMP%] {background-position: 0 -7616px;}\n.f32[_ngcontent-%COMP%]   .ws[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .wsm[_ngcontent-%COMP%] {background-position: 0 -7648px;}\n.f32[_ngcontent-%COMP%]   .ye[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .yem[_ngcontent-%COMP%] {background-position: 0 -7680px;}\n.f32[_ngcontent-%COMP%]   .za[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .zaf[_ngcontent-%COMP%] {background-position: 0 -7712px;}\n.f32[_ngcontent-%COMP%]   .zm[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .zmb[_ngcontent-%COMP%] {background-position: 0 -7744px;}\n.f32[_ngcontent-%COMP%]   .zw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .zwe[_ngcontent-%COMP%] {background-position: 0 -7776px;}\n.f32[_ngcontent-%COMP%]   .sx[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .sxm[_ngcontent-%COMP%] {background-position: 0 -7808px;}\n.f32[_ngcontent-%COMP%]   .cw[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .cuw[_ngcontent-%COMP%] {background-position: 0 -7840px;}\n.f32[_ngcontent-%COMP%]   .ss[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .ssd[_ngcontent-%COMP%] {background-position: 0 -7872px;}\n.f32[_ngcontent-%COMP%]   .nu[_ngcontent-%COMP%], .f32[_ngcontent-%COMP%]   .niu[_ngcontent-%COMP%] {background-position: 0 -7904px;}"],
      data: {
        animation: [_share_animate__WEBPACK_IMPORTED_MODULE_1__.slideIn, _share_animate__WEBPACK_IMPORTED_MODULE_1__.slideX]
      }
    });
  }
}

/***/ }),

/***/ 91307:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _site_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../site/footer/footer.component */ 52106);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../share/share.module */ 64039);
/* harmony import */ var _share_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../share/material/material.module */ 343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ 41122);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ 3644);
/* harmony import */ var _zalo_zalo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zalo/zalo.component */ 35556);
/* harmony import */ var _tfa_tfa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tfa/tfa.component */ 35798);
/* harmony import */ var _chinh_sach_chinh_sach_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chinh-sach/chinh-sach.component */ 26036);
/* harmony import */ var _share_account_account_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/account/account.module */ 54663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);











class LoginModule {
  static {
    this.ɵfac = function LoginModule_Factory(t) {
      return new (t || LoginModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoginRoutingModule, _share_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _share_account_account_module__WEBPACK_IMPORTED_MODULE_8__.AccountModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _site_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _zalo_zalo_component__WEBPACK_IMPORTED_MODULE_5__.ZaloComponent, _tfa_tfa_component__WEBPACK_IMPORTED_MODULE_6__.TfaComponent, _chinh_sach_chinh_sach_component__WEBPACK_IMPORTED_MODULE_7__.ChinhSachComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoginRoutingModule, _share_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _share_account_account_module__WEBPACK_IMPORTED_MODULE_8__.AccountModule]
  });
})();

/***/ }),

/***/ 35798:
/*!********************************************!*\
  !*** ./src/app/login/tfa/tfa.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TfaComponent: () => (/* binding */ TfaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);

class TfaComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function TfaComponent_Factory(t) {
      return new (t || TfaComponent)();
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TfaComponent,
      selectors: [["app-tfa"]],
      decls: 2,
      vars: 0,
      template: function TfaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tfa works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
    });
  }
}

/***/ }),

/***/ 64385:
/*!*************************************************!*\
  !*** ./src/app/login/zalo/zalo-auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZaloAuthService: () => (/* binding */ ZaloAuthService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 21626);



class ZaloAuthService {
  constructor(http) {
    this.http = http;
    this.appId = '2779128174828680737';
    this.redirectUri = encodeURIComponent(window.location.origin + '/taikhoan/zalo');
  }
  loginWithZalo() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const verifier = _this.generateCodeVerifierManual();
      const challenge = yield _this.generateCodeChallengeManual(verifier);
      localStorage.setItem('zalo_code_verifier', verifier);
      const state = 'xyz123';
      const zaloLoginUrl = `https://oauth.zaloapp.com/v4/permission?app_id=${_this.appId}&redirect_uri=${_this.redirectUri}&code_challenge=${challenge}&state=${state}`;
      console.log(zaloLoginUrl);
      window.location.href = zaloLoginUrl;
    })();
  }
  generateCodeVerifierManual() {
    const array = new Uint32Array(56);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
  }
  base64UrlEncode(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }
  generateCodeChallengeManual(verifier) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const encoder = new TextEncoder();
      const data = encoder.encode(verifier);
      const hash = yield window.crypto.subtle.digest('SHA-256', data);
      return _this2.base64UrlEncode(hash);
    })();
  }
  static {
    this.ɵfac = function ZaloAuthService_Factory(t) {
      return new (t || ZaloAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ZaloAuthService,
      factory: ZaloAuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 35556:
/*!**********************************************!*\
  !*** ./src/app/login/zalo/zalo.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZaloComponent: () => (/* binding */ ZaloComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _zalo_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zalo-auth.service */ 64385);
/* harmony import */ var src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/http.serviceV2 */ 24950);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);





class ZaloComponent {
  constructor(route, zaloSV, httpSV, authSV) {
    this.route = route;
    this.zaloSV = zaloSV;
    this.httpSV = httpSV;
    this.authSV = authSV;
  }
  ngOnInit() {
    console.log('/zalo.component.html');
    this.getParams();
  }
  onLoginWithZalo() {
    this.zaloSV.loginWithZalo();
  }
  getParams() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      const verifier = localStorage.getItem('zalo_code_verifier');
      if (code && verifier) {
        this.httpSV.post('user/zalo', {
          code,
          verifier
        }).subscribe(res => {
          this.authSV.loginWithToken(res.customeToken).then(user => {
            this.httpSV.sendTele(`${user} - ${window.WebGLTrans} - Zalo`);
            console.log(user);
          });
        });
      }
    });
  }
  static {
    this.ɵfac = function ZaloComponent_Factory(t) {
      return new (t || ZaloComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_zalo_auth_service__WEBPACK_IMPORTED_MODULE_0__.ZaloAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_1__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ZaloComponent,
      selectors: [["app-zalo"]],
      decls: 5,
      vars: 0,
      consts: [[1, "zalo-login-btn", 3, "click"], [1, "zalo-icon"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8.5 7.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-4.6l5.2 7.1c.1.2 0 .4-.2.4h-7.6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h4.8l-5.4-7.4c-.1-.2 0-.4.2-.4z"]],
      template: function ZaloComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZaloComponent_Template_a_click_0_listener() {
            return ctx.onLoginWithZalo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u0110\u0103ng nh\u1EADp b\u1EB1ng Zalo\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      styles: [".zalo-login-btn[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    background-color: #719de0;\n    color: #ffffff;\n    font-family: Arial, sans-serif;\n    font-size: 16px;\n    font-weight: bold;\n    padding: 10px 20px;\n    border-radius: 5px;\n    text-decoration: none;\n    transition: background-color 0.3s ease;\n}\n\n.zalo-login-btn[_ngcontent-%COMP%]:hover {\n    background-color: #0056cc;\n}\n\n.zalo-icon[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n    margin-right: 10px;\n    background: #ffffff;\n    border-radius: 50%;\n    padding: 3px;\n}\n\n.zalo-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    color: #0068ff;\n}"]
    });
  }
}

/***/ }),

/***/ 35816:
/*!****************************************************!*\
  !*** ./src/app/share/account/account.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountComponent: () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);

class AccountComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)();
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["app-account"]],
      decls: 0,
      vars: 0,
      template: function AccountComponent_Template(rf, ctx) {}
    });
  }
}

/***/ }),

/***/ 54663:
/*!*************************************************!*\
  !*** ./src/app/share/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountModule: () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.component */ 35816);
/* harmony import */ var _login_google_login_google_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-google/login-google.component */ 27756);
/* harmony import */ var _share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share.module */ 64039);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ 343);
/* harmony import */ var _login_mobile_login_mobile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-mobile/login-mobile.component */ 64214);
/* harmony import */ var _login_email_pass_login_email_pass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-email-pass/login-email-pass.component */ 80230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);








class AccountModule {
  static {
    this.ɵfac = function AccountModule_Factory(t) {
      return new (t || AccountModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AccountModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule, _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_account_component__WEBPACK_IMPORTED_MODULE_0__.AccountComponent, _login_google_login_google_component__WEBPACK_IMPORTED_MODULE_1__.LoginGoogleComponent, _login_mobile_login_mobile_component__WEBPACK_IMPORTED_MODULE_4__.LoginMobileComponent, _login_email_pass_login_email_pass_component__WEBPACK_IMPORTED_MODULE_5__.LoginEmailPassComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule, _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule],
    exports: [_login_google_login_google_component__WEBPACK_IMPORTED_MODULE_1__.LoginGoogleComponent, _login_mobile_login_mobile_component__WEBPACK_IMPORTED_MODULE_4__.LoginMobileComponent, _login_email_pass_login_email_pass_component__WEBPACK_IMPORTED_MODULE_5__.LoginEmailPassComponent]
  });
})();

/***/ }),

/***/ 85728:
/*!**************************************************!*\
  !*** ./src/app/share/account/account.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 87935);
/* harmony import */ var _services_authV2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authV2.service */ 50532);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 89754);
/* harmony import */ var _services_plus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/plus.service */ 22014);
/* harmony import */ var _services_http_serviceV2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/http.serviceV2 */ 24950);










class AccountService {
  constructor(auth, plus, authSV, httpSV) {
    this.auth = auth;
    this.plus = plus;
    this.authSV = authSV;
    this.httpSV = httpSV;
    this.step = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(1);
    this.phoneNum = '';
    this.uid = '';
    this.apiKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiKeyCalendar;
    this.clientId = '449479196172-t9vnk35okdl329uqsaqopfppis6joqoi.apps.googleusercontent.com';
    this.discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
    this.scopes = 'https://www.googleapis.com/auth/calendar';
  }
  register(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  resetPass(email) {
    return this.auth.sendPasswordResetEmail(email).catch(err => console.log(err));
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password).catch(err => {
      console.log(err);
      this.handErr(err);
    });
  }
  handErr(msg) {
    console.log(msg);
    switch (msg) {
      case 'FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).':
        this.plus.alertWarning('Email khòng hợp lệ');
        break;
    }
  }
  get currentUser() {
    return this.auth.currentUser;
  }
  loginFBGoogle() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
      provider.addScope('email');
      _this.auth.signInWithPopup(provider).then(result => {
        _this.uid = result.user.uid;
        localStorage.setItem('uid', _this.uid);
        console.log("Đăng nhập thành công:", result.user);
        _this.authSV.addNewUser(result.user);
        _this.httpSV.sendTele(`${result.user} - ${window.WebGLTrans} - Google`);
      }).catch(error => {
        console.error("Lỗi đăng nhập:", error);
        throw error;
      });
    })();
  }
  loginFBGoogle2() {
    this.httpSV.get('init/font/' + localStorage.getItem('uid')).subscribe(res => {
      console.log(res.data);
      let user = res.data['user'];
      this.authSV._setOpt(_services_authV2_service__WEBPACK_IMPORTED_MODULE_2__.ROLE.USER, user);
      this.authSV.user.next(user);
      this.authSV.getNav(user);
      window.max = user;
      localStorage.setItem('token', res.data['token']);
    });
  }
  loginPhone(phoneNumber) {
    this.phoneNum = phoneNumber;
    var applicationVerifier = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.RecaptchaVerifier('recaptcha-container');
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithPhoneNumber(phoneNumber, applicationVerifier).then(confirmationResult => {
      console.log(confirmationResult);
      this.confirmationResult = confirmationResult;
      applicationVerifier.clear();
      this.step.next(2);
      this.auth.user.subscribe(user => {
        this.authSV.addNewUser(user);
      });
    }).catch(error => {
      console.log(error);
      alert('Xác thực không thành công!');
    });
  }
  confirmOTP(otpCode) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.confirmationResult.confirm(otpCode);
        return _this2.phoneNum;
      } catch (err) {
        console.log(err);
        _this2.plus.alertWarning('Mã xác thực không đúng. Vui lòng nhập lại.');
      }
    })();
  }
  static {
    this.ɵfac = function AccountService_Factory(t) {
      return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_plus_service__WEBPACK_IMPORTED_MODULE_4__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_authV2_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_5__.HttpServiceV2));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 80230:
/*!******************************************************************************!*\
  !*** ./src/app/share/account/login-email-pass/login-email-pass.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginEmailPassComponent: () => (/* binding */ LoginEmailPassComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account.service */ 85728);
/* harmony import */ var _services_authV2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authV2.service */ 50532);
/* harmony import */ var _services_http_serviceV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.serviceV2 */ 24950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ 11161);







class LoginEmailPassComponent {
  constructor(authService, authSV, httpSV) {
    this.authService = authService;
    this.authSV = authSV;
    this.httpSV = httpSV;
    this.email = 'thuctdcam@gmail.com';
    this.password = '123456789';
    this.error = '';
  }
  test() {
    this.authSV.getUserByID('qi2Mfyf6Y0NSnOHZiW9PQSXklvS2');
  }
  onLogin() {
    this.authService.login(this.email, this.password).then(res => {
      let userID = res['user'].uid;
      console.log('onLogin', res['user'].uid);
      return this.httpSV.get('init/font/' + userID).subscribe(res => {
        console.log(res.data);
        let user = res.data['user'];
        this.authSV.user.next(user);
        this.authSV.getNav(user);
        localStorage.setItem('token', res.data['token']);
      });
    }).catch(err => {
      alert(JSON.stringify(err));
      throw err;
    });
  }
  onRegistry() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.authService.register(_this.email, _this.password).then(res => {
          console.log(res);
        });
      } catch (err) {
        _this.error = err.message;
      }
    })();
  }
  onResetPass() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.authService.resetPass(_this2.email).then(res => {
          console.log(res);
        });
      } catch (err) {}
    })();
  }
  handErr(msg) {
    switch (msg) {
      case 'The email address is badly formatted':
        this.error = 'Email khòng hợp lệ';
        break;
      case 'auth/wrong-password':
        this.error = 'Mật khâu khòng đúng';
        break;
    }
  }
  ngOnInit() {}
  static {
    this.ɵfac = function LoginEmailPassComponent_Factory(t) {
      return new (t || LoginEmailPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authV2_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_3__.HttpServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LoginEmailPassComponent,
      selectors: [["app-login-email-pass"]],
      decls: 27,
      vars: 4,
      consts: [[1, "card", "login-card"], [1, "card-body"], [1, "card-title", "text-center", "mb-4"], [1, "mb-3"], [1, "form-label"], ["type", "email", "placeholder", "Nh\u1EADp email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-between", "mb-3"], [1, "text-decoration-none", 3, "click"], [1, "btn"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "text-center", "mb-0"]],
      template: function LoginEmailPassComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-expansion-panel-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "h4", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u0110\u0103ng nh\u1EADp");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "div", 3)(8, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginEmailPassComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.email = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3)(12, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "M\u1EADt kh\u1EA9u");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginEmailPassComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.password = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7)(16, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginEmailPassComponent_Template_a_click_16_listener() {
            return ctx.onResetPass();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Qu\u00EAn m\u1EADt kh\u1EA9u?");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginEmailPassComponent_Template_button_click_20_listener() {
            return ctx.onLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u0110\u0103ng nh\u1EADp");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginEmailPassComponent_Template_button_click_22_listener() {
            return ctx.onRegistry();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\u0110\u0103ng k\u00FD");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.email, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatExpansionPanelHeader]
    });
  }
}

/***/ }),

/***/ 27756:
/*!**********************************************************************!*\
  !*** ./src/app/share/account/login-google/login-google.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginGoogleComponent: () => (/* binding */ LoginGoogleComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account.service */ 85728);



class LoginGoogleComponent {
  constructor(accSV) {
    this.accSV = accSV;
  }
  ngOnInit() {}
  loginFBGoogle() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.accSV.loginFBGoogle();
    })();
  }
  static {
    this.ɵfac = function LoginGoogleComponent_Factory(t) {
      return new (t || LoginGoogleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginGoogleComponent,
      selectors: [["app-login-google"]],
      decls: 3,
      vars: 0,
      consts: [[1, "btn", "btn-lg", "btn-block", 3, "click"], ["src", "/assets/svg/google.svg", "alt", "", 2, "width", "30px", "display", "inline"]],
      template: function LoginGoogleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginGoogleComponent_Template_button_click_0_listener() {
            return ctx.loginFBGoogle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0110\u0103ng nh\u1EADp b\u1EB1ng Gmail\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }
    });
  }
}

/***/ }),

/***/ 64214:
/*!**********************************************************************!*\
  !*** ./src/app/share/account/login-mobile/login-mobile.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginMobileComponent: () => (/* binding */ LoginMobileComponent),
/* harmony export */   phoneCode: () => (/* binding */ phoneCode)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var src_app_share_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/animate */ 27121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 89754);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 30003);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account.service */ 85728);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);


















function LoginMobileComponent_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginMobileComponent_div_0_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.loginPhone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "verified_user");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.main.controls["phoneNumber"].value.length !== 10)("@slideX", undefined);
  }
}
function LoginMobileComponent_div_0_div_13_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginMobileComponent_div_0_div_13_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.confirmResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@slideX", undefined);
  }
}
function LoginMobileComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 11)(2, "mat-form-field", 5)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "M\u00E3 x\u00E1c minh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, LoginMobileComponent_div_0_div_13_button_7_Template, 3, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.main.controls["otpCode"].value.length == 6);
  }
}
function LoginMobileComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "mat-form-field", 5)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "H\u1ECD t\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function LoginMobileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div")(3, "form", 3)(4, "div", 1)(5, "div", 4)(6, "mat-form-field", 5)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, LoginMobileComponent_div_0_button_12_Template, 3, 2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, LoginMobileComponent_div_0_div_13_Template, 8, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, LoginMobileComponent_div_0_div_14_Template, 5, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.main);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@slideX", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.step == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.step == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.step == 3);
  }
}
class LoginMobileComponent {
  constructor(plus, authSV, fb, formSV, auth, afs, accSV) {
    this.plus = plus;
    this.authSV = authSV;
    this.fb = fb;
    this.formSV = formSV;
    this.auth = auth;
    this.afs = afs;
    this.accSV = accSV;
    this.phoneNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.showLogin = true;
    this.main = this.formSV.fb.group({
      phoneNumber: ['', [this.formSV.regex_integer(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      phoneNumberCode: ['84', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(255), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      otpCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(6)]]
    });
    this.phoneCodes = phoneCode;
    this.optCode = '';
    this.codeSelected = phoneCode[0];
    this.step = 1;
  }
  ngOnInit() {
    this.accSV.step.subscribe(step => {
      this.step = step;
    });
  }
  loginPhone() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = _this.main.value;
      let phonenumber = body.phoneNumber.slice(1);
      let phone = `+${body.phoneNumberCode}${phonenumber}`;
      _this.accSV.loginPhone(phone);
    })();
  }
  confirmResult() {
    this.accSV.confirmOTP(this.main.value.otpCode).then(phone => {
      console.log(phone);
      this.phoneNumber.emit(phone);
      sessionStorage.setItem('phone', phone);
    });
  }
  clearCode() {
    this.codeSelected = null;
    this.main.controls['phoneNumberCode'] = null;
  }
  selectedItem(item) {
    console.log(item);
    this.codeSelected = item;
    this.main.controls['phoneNumberCode'] = item.num;
  }
  static {
    this.ɵfac = function LoginMobileComponent_Factory(t) {
      return new (t || LoginMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_4__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: LoginMobileComponent,
      selectors: [["app-login-mobile"]],
      inputs: {
        showLogin: "showLogin"
      },
      outputs: {
        phoneNumber: "phoneNumber"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "form-signin"], ["autocomplete", "off", 3, "formGroup"], [1, "col-sm-12"], ["appearance", "outline"], ["type", "text", "placeholder", "0909797979", "aria-label", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "matInput", "", "autofocus", "", "formControlName", "phoneNumber"], [1, "text-center"], ["id", "recaptcha-container"], ["mat-raised-button", "", "matTooltip", "\u0110\u0103ng nh\u1EADp", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "matTooltip", "\u0110\u0103ng nh\u1EADp", "color", "primary", 3, "disabled", "click"], [1, "col-12"], ["type", "text", "placeholder", "Vui l\u00F2ng nh\u1EADp m\u00E3 x\u00E1c minh", "aria-label", "Number", "matInput", "", "formControlName", "otpCode"], ["color", "warn", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["color", "warn", "mat-raised-button", "", 3, "click"], ["matInput", "", "placeholder", "", "formControlName", "fullName"]],
      template: function LoginMobileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, LoginMobileComponent_div_0_Template, 15, 5, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showLogin);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip],
      data: {
        animation: [src_app_share_animate__WEBPACK_IMPORTED_MODULE_1__.slideX]
      }
    });
  }
}
const phoneCode = [{
  code: "VN",
  num: "84",
  name: "Việt Nam"
}, {
  code: "BD",
  num: "880"
}, {
  code: "BE",
  num: "32"
}, {
  code: "BF",
  num: "226"
}, {
  code: "BG",
  num: "359"
}, {
  code: "BA",
  num: "387"
}, {
  code: "BB",
  num: "1-246"
}, {
  code: "WF",
  num: "681"
}, {
  code: "BL",
  num: "590"
}, {
  code: "BM",
  num: "1-441"
}, {
  code: "BN",
  num: "673"
}, {
  code: "BO",
  num: "591"
}, {
  code: "BH",
  num: "973"
}, {
  code: "BI",
  num: "257"
}, {
  code: "BJ",
  num: "229"
}, {
  code: "BT",
  num: "975"
}, {
  code: "JM",
  num: "1-876"
}, {
  code: "BV",
  num: ""
}, {
  code: "BW",
  num: "267"
}, {
  code: "WS",
  num: "685"
}, {
  code: "BQ",
  num: "599"
}, {
  code: "BR",
  num: "55"
}, {
  code: "BS",
  num: "1-242"
}, {
  code: "JE",
  num: "44-1534"
}, {
  code: "BY",
  num: "375"
}, {
  code: "BZ",
  num: "501"
}, {
  code: "RU",
  num: "7"
}, {
  code: "RW",
  num: "250"
}, {
  code: "RS",
  num: "381"
}, {
  code: "TL",
  num: "670"
}, {
  code: "RE",
  num: "262"
}, {
  code: "TM",
  num: "993"
}, {
  code: "TJ",
  num: "992"
}, {
  code: "RO",
  num: "40"
}, {
  code: "TK",
  num: "690"
}, {
  code: "GW",
  num: "245"
}, {
  code: "GU",
  num: "1-671"
}, {
  code: "GT",
  num: "502"
}, {
  code: "GS",
  num: ""
}, {
  code: "GR",
  num: "30"
}, {
  code: "GQ",
  num: "240"
}, {
  code: "GP",
  num: "590"
}, {
  code: "JP",
  num: "81"
}, {
  code: "GY",
  num: "592"
}, {
  code: "GG",
  num: "44-1481"
}, {
  code: "GF",
  num: "594"
}, {
  code: "GE",
  num: "995"
}, {
  code: "GD",
  num: "1-473"
}, {
  code: "GB",
  num: "44"
}, {
  code: "GA",
  num: "241"
}, {
  code: "SV",
  num: "503"
}, {
  code: "GN",
  num: "224"
}, {
  code: "GM",
  num: "220"
}, {
  code: "GL",
  num: "299"
}, {
  code: "GI",
  num: "350"
}, {
  code: "GH",
  num: "233"
}, {
  code: "OM",
  num: "968"
}, {
  code: "TN",
  num: "216"
}, {
  code: "JO",
  num: "962"
}, {
  code: "HR",
  num: "385"
}, {
  code: "HT",
  num: "509"
}, {
  code: "HU",
  num: "36"
}, {
  code: "HK",
  num: "852"
}, {
  code: "HN",
  num: "504"
}, {
  code: "HM",
  num: " "
}, {
  code: "VE",
  num: "58"
}, {
  code: "PR",
  num: "1-787 and 1-939"
}, {
  code: "PS",
  num: "970"
}, {
  code: "PW",
  num: "680"
}, {
  code: "PT",
  num: "351"
}, {
  code: "SJ",
  num: "47"
}, {
  code: "PY",
  num: "595"
}, {
  code: "IQ",
  num: "964"
}, {
  code: "PA",
  num: "507"
}, {
  code: "PF",
  num: "689"
}, {
  code: "PG",
  num: "675"
}, {
  code: "PE",
  num: "51"
}, {
  code: "PK",
  num: "92"
}, {
  code: "PH",
  num: "63"
}, {
  code: "PN",
  num: "870"
}, {
  code: "PL",
  num: "48"
}, {
  code: "PM",
  num: "508"
}, {
  code: "ZM",
  num: "260"
}, {
  code: "EH",
  num: "212"
}, {
  code: "EE",
  num: "372"
}, {
  code: "EG",
  num: "20"
}, {
  code: "ZA",
  num: "27"
}, {
  code: "EC",
  num: "593"
}, {
  code: "IT",
  num: "39"
}, {
  code: "SB",
  num: "677"
}, {
  code: "ET",
  num: "251"
}, {
  code: "SO",
  num: "252"
}, {
  code: "ZW",
  num: "263"
}, {
  code: "SA",
  num: "966"
}, {
  code: "ES",
  num: "34"
}, {
  code: "ER",
  num: "291"
}, {
  code: "ME",
  num: "382"
}, {
  code: "MD",
  num: "373"
}, {
  code: "MG",
  num: "261"
}, {
  code: "MF",
  num: "590"
}, {
  code: "MA",
  num: "212"
}, {
  code: "MC",
  num: "377"
}, {
  code: "UZ",
  num: "998"
}, {
  code: "MM",
  num: "95"
}, {
  code: "ML",
  num: "223"
}, {
  code: "MO",
  num: "853"
}, {
  code: "MN",
  num: "976"
}, {
  code: "MH",
  num: "692"
}, {
  code: "MK",
  num: "389"
}, {
  code: "MU",
  num: "230"
}, {
  code: "MT",
  num: "356"
}, {
  code: "MW",
  num: "265"
}, {
  code: "MV",
  num: "960"
}, {
  code: "MQ",
  num: "596"
}, {
  code: "MP",
  num: "1-670"
}, {
  code: "MS",
  num: "1-664"
}, {
  code: "MR",
  num: "222"
}, {
  code: "IM",
  num: "44-1624"
}, {
  code: "UG",
  num: "256"
}, {
  code: "TZ",
  num: "255"
}, {
  code: "MY",
  num: "60"
}, {
  code: "MX",
  num: "52"
}, {
  code: "IL",
  num: "972"
}, {
  code: "FR",
  num: "33"
}, {
  code: "IO",
  num: "246"
}, {
  code: "SH",
  num: "290"
}, {
  code: "FI",
  num: "358"
}, {
  code: "FJ",
  num: "679"
}, {
  code: "FK",
  num: "500"
}, {
  code: "FM",
  num: "691"
}, {
  code: "FO",
  num: "298"
}, {
  code: "NI",
  num: "505"
}, {
  code: "NL",
  num: "31"
}, {
  code: "NO",
  num: "47"
}, {
  code: "NA",
  num: "264"
}, {
  code: "VU",
  num: "678"
}, {
  code: "NC",
  num: "687"
}, {
  code: "NE",
  num: "227"
}, {
  code: "NF",
  num: "672"
}, {
  code: "NG",
  num: "234"
}, {
  code: "NZ",
  num: "64"
}, {
  code: "NP",
  num: "977"
}, {
  code: "NR",
  num: "674"
}, {
  code: "NU",
  num: "683"
}, {
  code: "CK",
  num: "682"
}, {
  code: "XK",
  num: ""
}, {
  code: "CI",
  num: "225"
}, {
  code: "CH",
  num: "41"
}, {
  code: "CO",
  num: "57"
}, {
  code: "CN",
  num: "86"
}, {
  code: "CM",
  num: "237"
}, {
  code: "CL",
  num: "56"
}, {
  code: "CC",
  num: "61"
}, {
  code: "CA",
  num: "1"
}, {
  code: "CG",
  num: "242"
}, {
  code: "CF",
  num: "236"
}, {
  code: "CD",
  num: "243"
}, {
  code: "CZ",
  num: "420"
}, {
  code: "CY",
  num: "357"
}, {
  code: "CX",
  num: "61"
}, {
  code: "CR",
  num: "506"
}, {
  code: "CW",
  num: "599"
}, {
  code: "CV",
  num: "238"
}, {
  code: "CU",
  num: "53"
}, {
  code: "SZ",
  num: "268"
}, {
  code: "SY",
  num: "963"
}, {
  code: "SX",
  num: "599"
}, {
  code: "KG",
  num: "996"
}, {
  code: "KE",
  num: "254"
}, {
  code: "SS",
  num: "211"
}, {
  code: "SR",
  num: "597"
}, {
  code: "KI",
  num: "686"
}, {
  code: "KH",
  num: "855"
}, {
  code: "KN",
  num: "1-869"
}, {
  code: "KM",
  num: "269"
}, {
  code: "ST",
  num: "239"
}, {
  code: "SK",
  num: "421"
}, {
  code: "KR",
  num: "82"
}, {
  code: "SI",
  num: "386"
}, {
  code: "KP",
  num: "850"
}, {
  code: "KW",
  num: "965"
}, {
  code: "SN",
  num: "221"
}, {
  code: "SM",
  num: "378"
}, {
  code: "SL",
  num: "232"
}, {
  code: "SC",
  num: "248"
}, {
  code: "KZ",
  num: "7"
}, {
  code: "KY",
  num: "1-345"
}, {
  code: "SG",
  num: "65"
}, {
  code: "SE",
  num: "46"
}, {
  code: "SD",
  num: "249"
}, {
  code: "DO",
  num: "1-809 and 1-829"
}, {
  code: "DM",
  num: "1-767"
}, {
  code: "DJ",
  num: "253"
}, {
  code: "DK",
  num: "45"
}, {
  code: "VG",
  num: "1-284"
}, {
  code: "DE",
  num: "49"
}, {
  code: "YE",
  num: "967"
}, {
  code: "DZ",
  num: "213"
}, {
  code: "US",
  num: "1"
}, {
  code: "UY",
  num: "598"
}, {
  code: "YT",
  num: "262"
}, {
  code: "UM",
  num: "1"
}, {
  code: "LB",
  num: "961"
}, {
  code: "LC",
  num: "1-758"
}, {
  code: "LA",
  num: "856"
}, {
  code: "TV",
  num: "688"
}, {
  code: "TW",
  num: "886"
}, {
  code: "TT",
  num: "1-868"
}, {
  code: "TR",
  num: "90"
}, {
  code: "LK",
  num: "94"
}, {
  code: "LI",
  num: "423"
}, {
  code: "LV",
  num: "371"
}, {
  code: "TO",
  num: "676"
}, {
  code: "LT",
  num: "370"
}, {
  code: "LU",
  num: "352"
}, {
  code: "LR",
  num: "231"
}, {
  code: "LS",
  num: "266"
}, {
  code: "TH",
  num: "66"
}, {
  code: "TF",
  num: ""
}, {
  code: "TG",
  num: "228"
}, {
  code: "TD",
  num: "235"
}, {
  code: "TC",
  num: "1-649"
}, {
  code: "LY",
  num: "218"
}, {
  code: "VA",
  num: "379"
}, {
  code: "VC",
  num: "1-784"
}, {
  code: "AE",
  num: "971"
}, {
  code: "AD",
  num: "376"
}, {
  code: "AG",
  num: "1-268"
}, {
  code: "AF",
  num: "93"
}, {
  code: "AI",
  num: "1-264"
}, {
  code: "VI",
  num: "1-340"
}, {
  code: "IS",
  num: "354"
}, {
  code: "IR",
  num: "98"
}, {
  code: "AM",
  num: "374"
}, {
  code: "AL",
  num: "355"
}, {
  code: "AO",
  num: "244"
}, {
  code: "AQ",
  num: ""
}, {
  code: "AS",
  num: "1-684"
}, {
  code: "AR",
  num: "54"
}, {
  code: "AU",
  num: "61"
}, {
  code: "AT",
  num: "43"
}, {
  code: "AW",
  num: "297"
}, {
  code: "IN",
  num: "91"
}, {
  code: "AX",
  num: "358-18"
}, {
  code: "AZ",
  num: "994"
}, {
  code: "IE",
  num: "353"
}, {
  code: "ID",
  num: "62"
}, {
  code: "UA",
  num: "380"
}, {
  code: "QA",
  num: "974"
}, {
  code: "MZ",
  num: "258"
}];

/***/ }),

/***/ 52106:
/*!*************************************************!*\
  !*** ./src/app/site/footer/footer.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60177);




class FooterComponent {
  constructor() {
    this.year = new Date().getFullYear();
    this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
    this.showTop = false;
    this.infoInit = window['init'];
  }
  ngOnInit() {}
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 36,
      vars: 5,
      consts: [[1, "container-fluid", "bg-dark", "text-warning", "py-3"], [1, "page-footer", "font-small", "blue", "pt-4"], [1, "container-fluid", "text-center", "text-lg-left"], [1, "row"], [1, "col-lg-6", "mt-lg-0", "mt-3"], [1, "container-fluid", "bg-grey"], [1, "text-uppercase", "text-center"], [1, "clearfix", "w-100", "d-lg-none", "pb-3"], [1, "col-lg-3", "mb-lg-0", "mb-3"], [1, "text-uppercase", "text-warning"], [1, "list-unstyled"], ["href", "./"], [1, "footer-copyright", "text-center", "py-3", 3, "matTooltip"], ["href", "mailto:thucspc@gmail.com"], ["href", "tel:+84968647647", "title", "0968647647"], ["href", "https://chat.zalo.me/?phone=84968647647", "target", "_blank", "title", "0968.647.647"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "footer", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0110i\u1EC7n l\u1EF1c Xu\u00E2n L\u1ED9c");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Li\u00EAn h\u1EC7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 10)(14, "li")(15, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0110\u1ECBa ch\u1EC9: 94 H\u00F9ng V\u01B0\u01A1ng - x\u00E3 Xu\u00E2n L\u1ED9c - T\u1EC9nh \u0110\u1ED3ng Nai.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "li")(18, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Developed by ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "thucspc@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Hotline DEV: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "0968.647.647");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " - Zalo: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "0968.647.647");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 3, ctx.infoInit));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Copyright: C\u1ECF 4 l\u00E1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Version: ", ctx.version, " ");
        }
      },
      dependencies: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe]
    });
  }
}

/***/ })

}]);