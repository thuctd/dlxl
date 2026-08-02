"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["src_app_cmis4_cmis4_module_ts"],{

/***/ 61975:
/*!************************************************************!*\
  !*** ./src/app/cmis4/bao-cao-dmt/bao-cao-dmt.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaoCaoDmtComponent: () => (/* binding */ BaoCaoDmtComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_share_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/animate */ 27121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_dmt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cmis4-dmt.service */ 12676);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../share/material/month-year/month-year.component */ 55654);
/* harmony import */ var _share_custom_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../share/custom.pipe */ 78061);
















function BaoCaoDmtComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BaoCaoDmtComponent_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.getBCTEST());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "test");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function BaoCaoDmtComponent_div_8_tr_266_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 13)(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r6.NGAY_QTOAN);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 5, item_r6.SO_TIEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 7, item_r6.TIEN_GTGT));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 9, item_r6.TONG_TIEN));
  }
}
function BaoCaoDmtComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "table", 10)(19, "thead", 11)(20, "tr")(21, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "N\u1ED9i dung");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Bi\u1EC3u 1.1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Bi\u1EC3u 1.4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Bi\u1EC3u 1.6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Bi\u1EC3u 1.7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Bi\u1EC3u 1.8");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Bi\u1EC3u 1.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Bi\u1EC3u 1.10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Bi\u1EC3u 2.6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Bi\u1EC3u 2.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "tbody", 13)(42, "tr", 13)(43, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " T\u1ED5ng kh\u00E1ch h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](47, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](50, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](53, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](60, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "td")(62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](64, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](65, "sum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](67, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](68, "sum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](70, "sum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](71, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](72, "sum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "tr", 15)(78, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "C\u00F4ng su\u1EA5t t\u1ED5ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](82, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](85, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](88, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](95, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](100, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "tr", 15)(104, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "S\u1EA3n l\u01B0\u1EE3ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](108, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](111, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](116, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](119, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](126, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](129, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "tr", 13)(131, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, " Ti\u1EC1n ph\u00E1t sinh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](137, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](142, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](145, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](152, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](155, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "tr", 13)(157, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, "Thu\u1EBF ph\u00E1t sinh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](160, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](163, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](167, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](168, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](170, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](172, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](173, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](177, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](178, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](179, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "tr", 13)(181, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, " Ti\u1EC1n thanh to\u00E1n ch\u01B0a VAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](184, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](185, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](188, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](189, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](190, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](191);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](192, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](195, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](196, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](197, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](198);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](199, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](200, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](201, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](202, "tr", 13)(203, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](204, " Ti\u1EC1n thanh to\u00E1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](205, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](206, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](207, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](208, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](209, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](210, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](211, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](212, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](213);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](214, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](215, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](217, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](218, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](220, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](221, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](222);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](223, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "tr", 13)(225, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](226, " \u0110i\u1EC1u ch\u1EC9nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](227, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](228, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](231, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](232, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](233, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](234, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](235);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](236, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](237, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](238, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](239, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](240, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](241, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](242, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](243, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](244);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](245, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](246, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](247, "Bi\u1EC3u 1.2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](248, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BaoCaoDmtComponent_div_8_Template_button_click_248_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.getB12());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](249, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](250, "download_for_offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](251, "div")(252, "table", 17)(253, "thead")(254, "tr", 11)(255, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](256, "TT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](257, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](258, "Ng\u00E0y quy\u1EBFt to\u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](259, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](260, "S\u1ED1 ti\u1EC1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](261, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](262, "Thu\u1EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](263, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](264, "T\u1ED5ng ti\u1EC1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](265, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](266, BaoCaoDmtComponent_div_8_tr_266_Template, 14, 11, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](267, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](268, "td")(269, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](270, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](271);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](272, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](273, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](275, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](276, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](277);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](278, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("K\u1EF2 B\u00C1O C\u00C1O: ", ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].THANG, "/", ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].NAM, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("T\u1ED5ng KH: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 47, ctx_r1.dataB11[0] == null ? null : ctx_r1.dataB11[0].KHANG_TONG), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("KH sinh ho\u1EA1t: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 49, ctx_r1.dataB11[0] == null ? null : ctx_r1.dataB11[0].KHANG_SHOAT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("KH ngo\u00E0i sinh ho\u1EA1t: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 51, ctx_r1.dataB11[0] == null ? null : ctx_r1.dataB11[0].KHANG_NGSHOAT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("KH ngo\u00E0i h\u1EA1 \u00E1p: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 53, ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].CSUAT_100), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("KH ngo\u00E0i trung \u00E1p: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 55, (ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].CSUAT_200) + (ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].CSUAT_1000)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](47, 57, ctx_r1.dataB11[0] == null ? null : ctx_r1.dataB11[0].KHANG_TONG), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](50, 59, ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].DUAN_TONG), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](53, 61, (ctx_r1.dataB16[0] == null ? null : ctx_r1.dataB16[0].TONG_DUAN) + (ctx_r1.dataB16[1] == null ? null : ctx_r1.dataB16[1].TONG_DUAN)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](60, 63, ctx_r1.dataB19[0] == null ? null : ctx_r1.dataB19[0].SOLUONG_CKY), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](64, 65, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](65, 67, ctx_r1.dataB110, "TONG_DUAN")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" [", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](67, 70, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](68, 72, ctx_r1.dataB110, "CO_GIAYCHUNG_DKKD")), " GPKD; ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](69, 75, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](70, 77, ctx_r1.dataB110, "CO_BBAN_PCCC")), " PCCC; ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](71, 80, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](72, 82, ctx_r1.dataB110, "CO_BBAN_KTRA_ANTOAN")), " ATXD]");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.dataB26.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.dataB29.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](82, 85, ctx_r1.dataB11[0] == null ? null : ctx_r1.dataB11[0].CSUAT_TONG), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](85, 87, ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].CSUAT_TONG), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](88, 89, (ctx_r1.dataB16[0] == null ? null : ctx_r1.dataB16[0].TONG_CSUAT) + (ctx_r1.dataB16[1] == null ? null : ctx_r1.dataB16[1].TONG_CSUAT)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](95, 91, ctx_r1.dataB19[0] == null ? null : ctx_r1.dataB19[0].CSUAT_CKY), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](100, 93, ctx_r1.tongB26.CONG_SUAT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](108, 95, ctx_r1.dataB11[0] == null ? null : ctx_r1.dataB11[0].SLUONG_TONG), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](111, 97, ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].DNANG_EVNMUA), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](116, 99, (ctx_r1.dataB17[0] == null ? null : ctx_r1.dataB17[0].TONG_SLUONG) + (ctx_r1.dataB17[1] == null ? null : ctx_r1.dataB17[1].TONG_SLUONG)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](119, 101, ctx_r1.dataB18[0] == null ? null : ctx_r1.dataB18[0].SLUONG_PS), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](126, 103, ctx_r1.tongB26.DNANG_EVNMUA), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](129, 105, ctx_r1.tongB29.SLUONG_PS), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](137, 107, ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].TIEN_EVNMUA), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](142, 109, (ctx_r1.dataB17[0] == null ? null : ctx_r1.dataB17[0].TONG_TIEN) + (ctx_r1.dataB17[1] == null ? null : ctx_r1.dataB17[1].TONG_TIEN)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](145, 111, ctx_r1.dataB18[0] == null ? null : ctx_r1.dataB18[0].TIEN_PS), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](152, 113, ctx_r1.tongB26.TIEN_EVNMUA), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](155, 115, ctx_r1.tongB29.TIEN_PS), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](163, 117, ctx_r1.dataB14[0] == null ? null : ctx_r1.dataB14[0].VAT_EVNMUA), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](170, 119, ctx_r1.dataB18[0] == null ? null : ctx_r1.dataB18[0].THUE_PS_KT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](177, 121, ctx_r1.tongB26.VAT_EVNMUA), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](192, 123, ctx_r1.dataB18[0] == null ? null : ctx_r1.dataB18[0].TIEN_TT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](199, 125, ctx_r1.tongB26.TIEN_TTOAN), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](214, 127, ctx_r1.dataB18[0] == null ? null : ctx_r1.dataB18[0].TONG_TT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](223, 129, ctx_r1.tongB29.TONG_TT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](236, 131, ctx_r1.dataB18[0] == null ? null : ctx_r1.dataB18[0].TONG_DC), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](245, 133, ctx_r1.tongB29.TONG_DC), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.dataB12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](272, 135, ctx_r1.tongB12 == null ? null : ctx_r1.tongB12.SO_TIEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](275, 137, ctx_r1.tongB12 == null ? null : ctx_r1.tongB12.TIEN_GTGT));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](278, 139, ctx_r1.tongB12 == null ? null : ctx_r1.tongB12.TONG_TIEN));
  }
}
function BaoCaoDmtComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "B\u1EA3ng \u0111\u1ED1i so\u00E1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "table", 17)(6, "thead")(7, "tr", 11)(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "N\u1ED9i dung");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "S\u1ED1 ti\u1EC1n sau thu\u1EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "tbody", 23)(13, "tr")(14, "td")(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " T\u1ED3n \u0111\u1EA7u th\u00E1ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "tr")(21, "td")(22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Ph\u00E1t sinh");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "tr")(28, "td")(29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, " \u0110i\u1EC1u ch\u1EC9nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "tr")(35, "td")(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, " T\u1ED5ng Ph\u00E1t sinh sau \u0111i\u1EC1u ch\u1EC9nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](40, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "tr")(42, "td")(43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " \u0110\u00E3 thanh to\u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](47, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "tr")(49, "td")(50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, " T\u1ED3n cu\u1ED1i th\u00E1ng Tr\u01B0\u1EDBc thu\u1EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](54, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "tr")(56, "td")(57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, " T\u1ED3n cu\u1ED1i th\u00E1ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](61, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 7, ctx_r2.dataB18[0].TONG_DKY));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 9, ctx_r2.dataB18[0].TONG_PS));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 11, ctx_r2.dataB18[0].TONG_DC));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](40, 13, ctx_r2.dataB18[0].TONG_DC + ctx_r2.dataB18[0].TONG_PS));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](47, 15, ctx_r2.dataB18[0].TONG_TT));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](54, 17, ctx_r2.dataB18[0].TIEN_CKY));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](61, 19, ctx_r2.dataB18[0].TONG_CKY));
  }
}
class BaoCaoDmtComponent {
  constructor(cmis4DmtSV, plus, cmis4SV, loadSV, authSV) {
    this.cmis4DmtSV = cmis4DmtSV;
    this.plus = plus;
    this.cmis4SV = cmis4SV;
    this.loadSV = loadSV;
    this.authSV = authSV;
    this.user = JSON.parse(localStorage.getItem('USERCMIS'));
    this.showDMT = false;
    this.dataB11 = [];
    this.dataB12 = JSON.parse(localStorage.getItem('BIEU12')) || [];
    this.dataB14 = [];
    this.dataB16 = [];
    this.dataB17 = [];
    this.dataB18 = [];
    this.dataB19 = [];
    this.dataB110 = [];
    this.dataB26 = [];
    this.dataB29 = [];
    this.tongB26 = null;
    this.tongB29 = null;
    this.tongB12 = null;
    this.startDay = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(10, 'days').toDate();
    this.luyke = false;
  }
  ngOnInit() {
    this.user = this.cmis4SV.getUser();
    this.getLocal();
  }
  test() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let lk = _this.luyke ? 1 : 0;
      let thang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.ngayBaoCao, 'MM/YYYY').format('M');
      let nam = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.ngayBaoCao, 'MM/YYYY').format('YYYY');
      let dauThang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.ngayBaoCao, 'MM/YYYY').startOf("month").format("DD/MM/YYYY");
      let cuoiThang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.ngayBaoCao, 'MM/YYYY').endOf("month").format("DD/MM/YYYY");
      let body = {
        "NAM": nam,
        "THANG": thang,
        "TU_NGAY_GCS": dauThang,
        "DEN_NGAY_GCS": cuoiThang,
        "MA_DVIQLY": _this.user.SUBDIVISIONID,
        TCHAT_MTAM: 0
      };
      let BIEU18 = Object.assign({
        BIEU: "BIEU18",
        LUY_KE: lk,
        QUYET_TOAN: 0,
        NGAY_COD: +1
      }, body);
      _this.dataB18 = yield _this.cmis4DmtSV.getBaoCaoDMT(BIEU18);
    })();
  }
  getMonth(evt) {
    console.log(evt);
    this.ngayBaoCao = evt;
  }
  kiemTra() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.reset();
      _this2.loadSV.load('kiemTra');
      _this2.plus.alertMatSnackBar(`Đang tải dữ liệu...`);
      _this2.showDMT = false;
      let lk = _this2.luyke ? 1 : 0;
      let thang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this2.ngayBaoCao, 'MM/YYYY').format('M');
      let nam = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this2.ngayBaoCao, 'MM/YYYY').format('YYYY');
      let dauThang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this2.ngayBaoCao, 'MM/YYYY').startOf("month").format("DD/MM/YYYY");
      let cuoiThang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this2.ngayBaoCao, 'MM/YYYY').endOf("month").format("DD/MM/YYYY");
      let body = {
        "NAM": nam,
        "THANG": thang,
        "TU_NGAY_GCS": dauThang,
        "DEN_NGAY_GCS": cuoiThang,
        "MA_DVIQLY": _this2.user.SUBDIVISIONID,
        TCHAT_MTAM: 0
      };
      let BIEU11 = Object.assign({
        BIEU: "BIEU11",
        LUY_KE: lk,
        QUYET_TOAN: 1,
        NGAY_COD: -1
      }, body);
      let BIEU14 = Object.assign({
        BIEU: "BIEU14",
        LUY_KE: lk,
        QUYET_TOAN: 1,
        NGAY_COD: -1
      }, body);
      let BIEU16 = Object.assign({
        BIEU: "BIEU16_MOI",
        LUY_KE: lk,
        QUYET_TOAN: 0,
        NGAY_COD: -1,
        CO_CHE: -1
      }, body);
      let BIEU17 = Object.assign({
        BIEU: "BIEU17_MOI",
        LUY_KE: lk,
        QUYET_TOAN: 0,
        NGAY_COD: -1,
        CO_CHE: -1
      }, body);
      let BIEU18 = Object.assign({
        BIEU: "BIEU18",
        LUY_KE: lk,
        QUYET_TOAN: 0,
        NGAY_COD: +1
      }, body);
      let BIEU19 = Object.assign({
        BIEU: "BIEU19",
        LUY_KE: lk,
        QUYET_TOAN: 0,
        NGAY_COD: +1
      }, body);
      let BIEU110 = Object.assign({
        BIEU: "BIEU110",
        LUY_KE: 1,
        QUYET_TOAN: 0,
        NGAY_COD: +1
      }, body);
      let BIEU29 = Object.assign({
        BIEU: "BIEU29",
        LUY_KE: lk,
        QUYET_TOAN: 1,
        NGAY_COD: -1
      }, body);
      let BIEU12 = {
        BIEU: "BIEU12",
        LUY_KE: 0,
        TCHAT_MTAM: -1,
        QUYET_TOAN: 1,
        NGAY_COD: -1,
        "TU_NGAY_GCS": dauThang,
        "DEN_NGAY_GCS": cuoiThang,
        "NAM": nam,
        "THANG": thang,
        "MA_DVIQLY": _this2.user.SUBDIVISIONID
      };
      _this2.dataB11 = [];
      _this2.dataB12 = [];
      _this2.dataB14 = [];
      _this2.dataB16 = [];
      _this2.dataB17 = [];
      _this2.dataB18 = [];
      _this2.dataB19 = [];
      _this2.dataB110 = [];
      _this2.dataB29 = [];
      _this2.dataB26 = [];
      _this2.dataB11 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU11);
      _this2.plus.alertSuccess(`Biểu 1.1 đã xong!`);
      _this2.dataB12 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU12);
      _this2.plus.alertSuccess(`Biểu 1.2 đã xong!`);
      _this2.dataB14 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU14);
      _this2.plus.alertSuccess(`Biểu 1.4 đã xong!`);
      _this2.dataB16 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU16);
      _this2.plus.alertSuccess(`Biểu 1.6 đã xong!`);
      _this2.dataB17 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU17);
      _this2.plus.alertSuccess(`Biểu 1.7 đã xong!`);
      _this2.dataB18 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU18);
      _this2.plus.alertSuccess(`Biểu 1.8 đã xong!`);
      _this2.dataB19 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU19);
      _this2.plus.alertSuccess(`Biểu 1.9 đã xong!`);
      _this2.dataB110 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU110);
      _this2.plus.alertSuccess(`Biểu 1.10 đã xong!`);
      let BIEU26 = Object.assign({
        BIEU: "BIEU26",
        LUY_KE: lk,
        QUYET_TOAN: 1,
        NGAY_COD: 3,
        LOAI_BAO_CAO: 1
      }, body);
      _this2.dataB26 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU26);
      _this2.tongB26 = _this2.plus.sumByKeys(_this2.dataB26, ['DNANG_EVNMUA', 'CONG_SUAT', 'TIEN_TTOAN', 'VAT_EVNMUA', 'TIEN_EVNMUA', 'VAT_TTOAN']);
      _this2.plus.alertSuccess(`Biểu 2.6 đã xong!`);
      _this2.dataB29 = yield _this2.cmis4DmtSV.getBaoCaoDMT(BIEU29);
      _this2.plus.alertSuccess(`Biểu 2.9 đã xong!`);
      _this2.tongB29 = _this2.plus.sumByKeys(_this2.dataB29, ['SLUONG_PS', 'TIEN_PS', 'THUE_PS_KT', 'TIEN_CKY', 'TONG_CKY', 'TONG_DC', 'TONG_DKY', 'TONG_PS', 'TONG_TT']);
      _this2.tongB12 = _this2.plus.sumByKeys(_this2.dataB12, ['SO_TIEN', 'TIEN_GTGT', 'TONG_TIEN']);
      _this2.showDMT = true;
      _this2.loadSV.loaded('kiemTra');
    })();
  }
  getBCTEST() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let lk = _this3.luyke ? 1 : 0;
      let thang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this3.ngayBaoCao, 'MM/YYYY').format('M');
      let nam = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this3.ngayBaoCao, 'MM/YYYY').format('YYYY');
      let dauThang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this3.ngayBaoCao, 'MM/YYYY').startOf("month").format("DD/MM/YYYY");
      let cuoiThang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this3.ngayBaoCao, 'MM/YYYY').endOf("month").format("DD/MM/YYYY");
      let body = {
        "NAM": nam,
        "THANG": thang,
        "TU_NGAY_GCS": dauThang,
        "DEN_NGAY_GCS": cuoiThang,
        "MA_DVIQLY": _this3.user.SUBDIVISIONID,
        TCHAT_MTAM: 0
      };
      let BIEU16 = Object.assign({
        BIEU: "BIEU16_MOI",
        LUY_KE: lk,
        QUYET_TOAN: 0,
        NGAY_COD: -1,
        CO_CHE: -1
      }, body);
      _this3.dataB16 = yield _this3.cmis4DmtSV.getBaoCaoDMT(BIEU16);
    })();
  }
  getB12() {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let lk = _this4.luyke ? 1 : 0;
      let thang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this4.ngayBaoCao, 'MM/YYYY').format('M');
      let nam = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this4.ngayBaoCao, 'MM/YYYY').format('YYYY');
      let dauThang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this4.ngayBaoCao, 'MM/YYYY').startOf("month").format("DD/MM/YYYY");
      let cuoiThang = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this4.ngayBaoCao, 'MM/YYYY').endOf("month").format("DD/MM/YYYY");
      let body = {
        "NAM": nam,
        "THANG": thang,
        "TU_NGAY_GCS": dauThang,
        "DEN_NGAY_GCS": cuoiThang,
        "MA_DVIQLY": _this4.user.SUBDIVISIONID,
        TCHAT_MTAM: 0
      };
      let BIEU12 = {
        BIEU: "BIEU12",
        LUY_KE: 0,
        TCHAT_MTAM: -1,
        QUYET_TOAN: 1,
        NGAY_COD: -1,
        "TU_NGAY_GCS": dauThang,
        "DEN_NGAY_GCS": cuoiThang,
        "NAM": nam,
        "THANG": thang,
        "MA_DVIQLY": _this4.user.SUBDIVISIONID
      };
      _this4.dataB12 = yield _this4.cmis4DmtSV.getBaoCaoDMT(BIEU12);
      _this4.tongB12 = _this4.plus.sumByKeys(_this4.dataB12, ['SO_TIEN', 'TIEN_GTGT', 'TONG_TIEN']);
    })();
  }
  getLocal() {
    this.dataB11 = Array.isArray(JSON.parse(localStorage.getItem('BIEU11'))) ? JSON.parse(localStorage.getItem('BIEU11')) : [];
    this.dataB12 = Array.isArray(JSON.parse(localStorage.getItem('BIEU12'))) ? JSON.parse(localStorage.getItem('BIEU12')) : [];
    this.dataB14 = Array.isArray(JSON.parse(localStorage.getItem('BIEU14'))) ? JSON.parse(localStorage.getItem('BIEU14')) : [];
    this.dataB16 = Array.isArray(JSON.parse(localStorage.getItem('BIEU16_MOI'))) ? JSON.parse(localStorage.getItem('BIEU16_MOI')) : [];
    this.dataB17 = Array.isArray(JSON.parse(localStorage.getItem('BIEU17_MOI'))) ? JSON.parse(localStorage.getItem('BIEU17_MOI')) : [];
    this.dataB18 = Array.isArray(JSON.parse(localStorage.getItem('BIEU18'))) ? JSON.parse(localStorage.getItem('BIEU18')) : [];
    this.dataB19 = Array.isArray(JSON.parse(localStorage.getItem('BIEU19'))) ? JSON.parse(localStorage.getItem('BIEU19')) : [];
    this.dataB110 = Array.isArray(JSON.parse(localStorage.getItem('BIEU110'))) ? JSON.parse(localStorage.getItem('BIEU110')) : [];
    this.dataB26 = Array.isArray(JSON.parse(localStorage.getItem('BIEU26'))) ? JSON.parse(localStorage.getItem('BIEU26')) : [];
    this.dataB29 = Array.isArray(JSON.parse(localStorage.getItem('BIEU29'))) ? JSON.parse(localStorage.getItem('BIEU29')) : [];
    this.tongB26 = this.plus.sumByKeys(this.dataB26, ['DNANG_EVNMUA', 'CONG_SUAT', 'TIEN_TTOAN', 'VAT_EVNMUA', 'TIEN_EVNMUA']);
    this.tongB29 = this.plus.sumByKeys(this.dataB29, ['SLUONG_PS', 'TIEN_PS', 'THUE_PS_KT', 'THUE_TT_KT', 'TIEN_CKY', 'TONG_CKY', 'TONG_DC', 'TONG_DKY', 'TONG_PS', 'TONG_TT']);
    this.tongB12 = this.plus.sumByKeys(this.dataB12, ['SO_TIEN', 'TIEN_GTGT', 'TONG_TIEN']);
    this.showDMT = true;
    debugger;
  }
  reset() {
    this.dataB11 = [];
    this.dataB14 = [];
    this.dataB16 = [];
    this.dataB17 = [];
    this.dataB18 = [];
    this.dataB19 = [];
    this.dataB110 = [];
    this.dataB26 = [];
    this.dataB29 = [];
    this.tongB26 = this.plus.sumByKeys(this.dataB26, ['DNANG_EVNMUA', 'CONG_SUAT', 'TIEN_TTOAN', 'VAT_EVNMUA', 'TIEN_EVNMUA', 'VAT_TTOAN']);
    this.tongB29 = this.plus.sumByKeys(this.dataB29, ['SLUONG_PS', 'TIEN_PS', 'THUE_PS_KT', 'TIEN_CKY', 'TONG_CKY', 'TONG_DC', 'TONG_DKY', 'TONG_PS', 'TONG_TT']);
    localStorage.removeItem('BIEU11');
    localStorage.removeItem('BIEU12');
    localStorage.removeItem('BIEU14');
    localStorage.removeItem('BIEU16');
    localStorage.removeItem('BIEU17');
    localStorage.removeItem('BIEU18');
    localStorage.removeItem('BIEU19');
    localStorage.removeItem('BIEU110');
    localStorage.removeItem('BIEU26');
    localStorage.removeItem('BIEU29');
    this.showDMT = false;
  }
  checkPer(api, level = 1) {
    return this.authSV.checkPer(api, level);
  }
  static {
    this.ɵfac = function BaoCaoDmtComponent_Factory(t) {
      return new (t || BaoCaoDmtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_cmis4_dmt_service__WEBPACK_IMPORTED_MODULE_3__.Cmis4DmtService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_5__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_7__.AuthServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: BaoCaoDmtComponent,
      selectors: [["app-bao-cao-dmt"]],
      decls: 10,
      vars: 6,
      consts: [[1, "container", "my-3"], ["class", "test", 4, "ngIf"], [1, "row"], [3, "label", "startDay", "month"], [3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "warn", 3, "click"], [4, "ngIf"], ["class", "row justify-content-center", 4, "ngIf"], [1, "test"], ["mat-raised-button", "", 3, "click"], [1, "table", "table-bordered", "table-hover"], [1, "text-center"], ["scope", "col"], [1, "text-end"], ["scope", "row"], [1, ""], ["mat-icon-button", "", 3, "click"], [1, "table", "table-hover", "table-bordered"], ["class", "text-end", 4, "ngFor", "ngForOf"], [1, "text-end", 2, "font-weight", "bolder"], [1, "row", "justify-content-center"], [1, "col-4"], [1, "table-responsive"], [1, "fw-bold"]],
      template: function BaoCaoDmtComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BaoCaoDmtComponent_div_1_Template, 3, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2)(3, "app-month-year", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("month", function BaoCaoDmtComponent_Template_app_month_year_month_3_listener($event) {
            return ctx.getMonth($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-slide-toggle", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BaoCaoDmtComponent_Template_mat_slide_toggle_ngModelChange_4_listener($event) {
            return ctx.luyke = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "L\u0169y k\u1EBF");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BaoCaoDmtComponent_Template_button_click_6_listener() {
            return ctx.kiemTra();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "L\u1EA5y d\u1EEF li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, BaoCaoDmtComponent_div_8_Template, 279, 141, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, BaoCaoDmtComponent_div_9_Template, 62, 21, "div", 7);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.checkPer("dev"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Ch\u1ECDn k\u1EF3 b\u00E1o c\u00E1o")("startDay", ctx.startDay);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.luyke);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showDMT);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.dataB18.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_8__.MonthYearComponent, _share_custom_pipe__WEBPACK_IMPORTED_MODULE_9__.NumberPipePipe, _share_custom_pipe__WEBPACK_IMPORTED_MODULE_9__.SumPipe],
      styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.column2[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  padding: 10px;\n  height: 300px; \n\n}\n\n\n\n.row2[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}"],
      data: {
        animation: [src_app_share_animate__WEBPACK_IMPORTED_MODULE_2__.slideX, src_app_share_animate__WEBPACK_IMPORTED_MODULE_2__.slideIn]
      }
    });
  }
}

/***/ }),

/***/ 14235:
/*!**********************************************************************!*\
  !*** ./src/app/cmis4/bao-cap-cap-dien/bao-cap-cap-dien.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaoCapCapDienComponent: () => (/* binding */ BaoCapCapDienComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/material/month-year/month-year.component */ 55654);

















function BaoCapCapDienComponent_div_8_table_7_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_div_8_table_7_tr_16_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.copy(item_r5.MA_YCAU_KNAI));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.MA_YCAU_KNAI);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.TEN_NGUOIYCAU);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.NGAY_YCAU);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.BUOC_THAI);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.SNGAY_ND);
  }
}
function BaoCapCapDienComponent_div_8_table_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "table", 10)(1, "thead")(2, "tr", 6)(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "TT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "M\u00E3 y\u00EAu c\u1EA7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "T\u00EAn kh\u00E1ch h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Ng\u00E0y ti\u1EBFp nh\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "B\u01B0\u1EDBc hi\u1EC7n t\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "T\u1ED5ng s\u1ED1 ng\u00E0y");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "tbody", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, BaoCapCapDienComponent_div_8_table_7_tr_16_Template, 13, 6, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.itemsChuaHT);
  }
}
function BaoCapCapDienComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_div_8_Template_mat_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.export(ctx_r9.items));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, BaoCapCapDienComponent_div_8_table_7_Template, 17, 1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("DANH S\u00C1CH PHI\u1EBEU Y\u00CAU C\u1EA6U QU\u00C1 H\u1EA0N CH\u01AFA HO\u00C0N T\u1EA4T: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, ctx_r0.itemsChuaHT.length), " PHI\u1EBEU ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.itemsChuaHT.length > 0);
  }
}
function BaoCapCapDienComponent_div_9_table_7_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_div_9_table_7_tr_22_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.copy(item_r13.MA_YCAU_KNAI));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_div_9_table_7_tr_22_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.copy(item_r13.MA_DDO_DDIEN));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.MA_YCAU_KNAI);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.MA_DDO_DDIEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.TEN_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.NGAY_NHAN);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.NGAY_KS);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.NGAY_LDAT);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.NGAY_HTHANH);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.TSONGAY_CDIEN);
  }
}
function BaoCapCapDienComponent_div_9_table_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "table", 10)(1, "thead")(2, "tr", 6)(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "TT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "M\u00E3 y\u00EAu c\u1EA7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "M\u00E3 \u0111i\u1EC3m \u0111o");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "T\u00EAn kh\u00E1ch h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Ng\u00E0y ti\u1EBFp nh\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Ng\u00E0y kh\u1EA3o s\u00E1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Ng\u00E0y l\u1EAFp \u0111\u1EB7t");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Ng\u00E0y ho\u00E0n th\u00E0nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "T\u1ED5ng s\u1ED1 ng\u00E0y");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "tbody", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, BaoCapCapDienComponent_div_9_table_7_tr_22_Template, 19, 9, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r11.items);
  }
}
function BaoCapCapDienComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_div_9_Template_mat_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.export(ctx_r18.items));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, BaoCapCapDienComponent_div_9_table_7_Template, 23, 1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("DANH S\u00C1CH PHI\u1EBEU Y\u00CAU C\u1EA6U QU\u00C1 H\u1EA0N TRONG K\u1EF2: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, ctx_r1.items.length), " PHI\u1EBEU ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.items.length > 0);
  }
}
function BaoCapCapDienComponent_div_10_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_div_10_tr_29_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.copy(item_r21.MA_YCAU_KNAI));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_div_10_tr_29_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.copy(item_r21.MA_DDO_DDIEN));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r21.MA_YCAU_KNAI);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r21.MA_DDO_DDIEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r21.TEN_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r21.NGAY_NHAN);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r21.NGAY_KS);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r21.NGAY_LDAT);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r21.NGAY_HTHANH);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r21.TSONGAY_CDIEN);
  }
}
function BaoCapCapDienComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_div_10_Template_mat_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.export(ctx_r26.itemsFull));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "table", 10)(8, "thead")(9, "tr", 6)(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "TT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "M\u00E3 y\u00EAu c\u1EA7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "M\u00E3 \u0111i\u1EC3m \u0111o");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "T\u00EAn kh\u00E1ch h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Ng\u00E0y ti\u1EBFp nh\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Ng\u00E0y kh\u1EA3o s\u00E1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Ng\u00E0y l\u1EAFp \u0111\u1EB7t");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Ng\u00E0y ho\u00E0n th\u00E0nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "T\u1ED5ng s\u1ED1 ng\u00E0y");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "tbody", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, BaoCapCapDienComponent_div_10_tr_29_Template, 19, 9, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("DANH S\u00C1CH PHI\u1EBEU Y\u00CAU C\u1EA6U \u0110\u00C3 HO\u00C0N T\u1EA4T TRONG K\u1EF2: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, ctx_r2.itemsFull.length), " PHI\u1EBEU ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.itemsFull);
  }
}
class BaoCapCapDienComponent {
  constructor(plus, Cmis4SV, loadSV, excelSV, authSV) {
    this.plus = plus;
    this.Cmis4SV = Cmis4SV;
    this.loadSV = loadSV;
    this.excelSV = excelSV;
    this.authSV = authSV;
    this.user = JSON.parse(localStorage.getItem('USERCMIS'));
    this.items = [];
    this.itemsChuaHT = [];
    this.itemsFull = [];
    this.startDay = new Date();
    this.maDV = '';
  }
  ngOnInit() {
    this.user = this.Cmis4SV.getUser();
    this.maDV = this.user.SUBDIVISIONID;
  }
  lay766() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.itemsChuaHT = [];
      let url = "https://cmis-api.evnspc.vn/serviceBCaoThang/baoCaoCapDien";
      let tungay = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(7, 'days').format('DD/MM/YYYY');
      let denngay = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY');
      let nam = +moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.kyBaoCao, 'MM/YYYY').format('YYYY');
      let thang = +moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.kyBaoCao, 'MM/YYYY').format('MM');
      let body = {
        "CMD": 2,
        "SUBCMD": 24,
        "INFO": {
          "MA_DVIQLY": _this.maDV || _this.user.SUBDIVISIONID,
          "THANG": thang,
          "NAM": nam,
          "TU_NGAY": tungay,
          "DEN_NGAY": denngay,
          "TTRANG_HSO": "-1",
          "MDICH_SHOAT": -1,
          "LOAI_TRAM": "-1",
          "DTU_CTRINH": 0,
          "SO_PHA": -1,
          "ID_DCHINH": "ALL",
          "HOAN_THANH": 0,
          "MA_HTHUC": "-1",
          "NGAY_HTAT_TU": tungay,
          "NGAY_HTAT_DEN": denngay,
          "NGAY_CKT_TU": tungay,
          "NGAY_CKT_DEN": denngay,
          "TO": "ALL",
          "KQUA_TCONG": "0",
          "KQUA_KSAT": "0",
          "TINH_TRANG": 0,
          "MA_LOAI_YCAU": "-1",
          "CO_THANG_NAM_BCKD": false,
          "SO_NGAY": 1,
          "LUY_KE": false,
          "LOAI_TBA": "1",
          "NHOM_KHANG": "ALL",
          "TTRANG_DONG_BO": "1",
          "SO_NGAY_DB": 0,
          "KENH_THUC_HIEN": "ALL",
          "TTRANG_XLY": "-1",
          "PHAT_SINH": 1,
          "TTRANG_TTOAN": "ALL",
          "HTHUC_TTOAN": "ALL",
          "LOAI_KHANG": "-1",
          "CO_CSDLDC": "0",
          "TTHAI_YCAU": "-1"
        }
      };
      yield _this.Cmis4SV.post(url, body).then(res => {
        _this.itemsChuaHT = res.data;
      });
      body.INFO.THANG = thang - 1;
      yield _this.Cmis4SV.post(url, body).then(res => {
        let data = res.data;
        _this.itemsChuaHT = _this.itemsChuaHT.concat(data);
      });
    })();
  }
  export(data) {
    this.excelSV.export(data, `BaoCaoCapDien-${moment__WEBPACK_IMPORTED_MODULE_1___default()(this.kyBaoCao, 'MM/YYYY').format('MM-YYYY')}`);
  }
  baoCaoCapDien() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.lay766();
      _this2.items = [];
      _this2.itemsFull = [];
      let nam = +moment__WEBPACK_IMPORTED_MODULE_1___default()(_this2.kyBaoCao, 'MM/YYYY').format('YYYY');
      let thang = +moment__WEBPACK_IMPORTED_MODULE_1___default()(_this2.kyBaoCao, 'MM/YYYY').format('MM');
      _this2.loadSV.load('baoCaoCapDien');
      let url = "https://cmis-api.evnspc.vn/serviceBCaoThang/baoCaoCapDien";
      let path = '/serviceBCaoThang/baoCaoCapDien';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this2.user.ACCESS_TOKEN
      };
      let body = {
        "CMD": 2,
        "SUBCMD": 22,
        "INFO": {
          "MA_DVIQLY": _this2.maDV || _this2.user.SUBDIVISIONID,
          "THANG": thang,
          "NAM": nam,
          "TU_NGAY": _this2.kyBaoCao,
          "DEN_NGAY": _this2.kyBaoCao,
          "TTRANG_HSO": "-1",
          "MDICH_SHOAT": -1,
          "LOAI_TRAM": "-1",
          "DTU_CTRINH": 0,
          "SO_PHA": -1,
          "ID_DCHINH": "ALL",
          "HOAN_THANH": 0,
          "MA_HTHUC": "-1",
          "NGAY_HTAT_TU": `01/${_this2.kyBaoCao}`,
          "NGAY_HTAT_DEN": `30/${_this2.kyBaoCao}`,
          "NGAY_CKT_TU": `01/${_this2.kyBaoCao}`,
          "NGAY_CKT_DEN": `30/${_this2.kyBaoCao}`,
          "TO": "ALL",
          "KQUA_TCONG": "0",
          "KQUA_KSAT": "0",
          "TINH_TRANG": 0,
          "MA_LOAI_YCAU": "-1",
          "CO_THANG_NAM_BCKD": false,
          "SO_NGAY": 1,
          "LUY_KE": false,
          "LOAI_TBA": "1",
          "NHOM_KHANG": "ALL"
        }
      };
      return axios__WEBPACK_IMPORTED_MODULE_9__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this2.Cmis4SV.handleErrCmis(res);
        _this2.loadSV.loaded('baoCaoCapDien');
        let data = res.data;
        _this2.itemsFull = data;
        if (data.length == 0) {
          _this2.plus.alertSuccess('Không có trường hợp quá hạn dịch vụ');
        }
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          if (item.TEN_LOAI_YCAU.includes('>')) {
            _this2.items.push(item);
          }
        }
        if (_this2.items.length == 0) {
          _this2.plus.alertSuccess('Không có trường hợp quá hạn dịch vụ');
        }
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this2.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this2.authSV.reload('/cmis4');
        _this2.loadSV.clear();
        console.log(err);
      });
    })();
  }
  getMonth(evt) {
    console.log(evt);
    this.kyBaoCao = evt;
  }
  copy(text) {
    this.plus.copyToClipboard(text);
  }
  static {
    this.ɵfac = function BaoCapCapDienComponent_Factory(t) {
      return new (t || BaoCapCapDienComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_3__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_5__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_6__.AuthServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: BaoCapCapDienComponent,
      selectors: [["app-bao-cap-cap-dien"]],
      decls: 11,
      vars: 5,
      consts: [[1, "container", "my-3"], [3, "startDay", "month"], ["matInput", "", "placeholder", "M\u00E3 \u0111\u01A1n v\u1ECB", 3, "ngModel", "ngModelChange"], ["color", "accent", "mat-raised-button", "", 3, "click"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "text-center"], [1, "text-danger"], ["matTooltip", "Xu\u1EA5t file excel", "color", "primary", 3, "click"], ["class", "table table-bordered table-hover", 4, "ngIf"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], ["matTooltip", "B\u1EA5m \u0111\u1EC3 copy", 3, "click"], [1, "text-start"], [1, "text-warning"], [1, "text-primary"], ["matTooltip", "Xu\u1EA5t file excel", 3, "click"]],
      template: function BaoCapCapDienComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "app-month-year", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("month", function BaoCapCapDienComponent_Template_app_month_year_month_1_listener($event) {
            return ctx.getMonth($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-form-field")(3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function BaoCapCapDienComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.maDV = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_Template_button_click_4_listener() {
            return ctx.baoCaoCapDien();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Xem b\u00E1o c\u00E1o");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BaoCapCapDienComponent_Template_button_click_6_listener() {
            return ctx.lay766();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "C\u1EA3nh b\u00E1o s\u1EDBm");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, BaoCapCapDienComponent_div_8_Template, 8, 4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, BaoCapCapDienComponent_div_9_Template, 8, 4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, BaoCapCapDienComponent_div_10_Template, 30, 4, "div", 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("startDay", ctx.startDay);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.maDV);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.itemsChuaHT.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.items.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.itemsFull.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_7__.MonthYearComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe]
    });
  }
}

/***/ }),

/***/ 62571:
/*!************************************************************************!*\
  !*** ./src/app/cmis4/bien-ban-chot-dmt/bien-ban-chot-dmt.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BienBanChotDmtComponent: () => (/* binding */ BienBanChotDmtComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 93207);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70274);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/docxtemplate/docxtemplate.service */ 41982);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var src_app_share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/indexeddb.service */ 90657);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var _angular_fire_compat_remote_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/remote-config */ 73721);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../share/import-excel/parse-excel-clipboard/parse-excel-clipboard.component */ 8390);



















class BienBanChotDmtComponent {
  constructor(plus, docxSV, loadSV, idbSV, authSV, excelSV, remoteConfig) {
    this.plus = plus;
    this.docxSV = docxSV;
    this.loadSV = loadSV;
    this.idbSV = idbSV;
    this.authSV = authSV;
    this.excelSV = excelSV;
    this.remoteConfig = remoteConfig;
    this.searchArr = [];
    this.nam = moment__WEBPACK_IMPORTED_MODULE_2___default()().year() - 1;
    this.user = JSON.parse(localStorage.getItem('USERCMIS'));
    this.img = null;
    this.db = null;
    this.in6Thang = false;
    this.remote = window['remote'];
  }
  ngOnInit() {
    var _this = this;
    this.idbSV.IDB_InitDB('dien-luc').subscribe( /*#__PURE__*/function () {
      var _ref = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (db) {
        _this.db = db;
        _this.remote = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.lastValueFrom)(_this.remoteConfig.strings);
        _this.donGia = +_this.remote['DonGiaDMT'];
        _this.thuevat = +_this.remote['ThueVAT'] / 100;
        console.log(_this.remote);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.user = JSON.parse(localStorage.getItem('USERCMIS'));
    this.nam = new Date().getFullYear();
  }
  getBaocaoTongHopDienMTMN() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loadSV.load('getBaocaoTongHopDienMTMN');
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/getBaocaoTongHopDienMTMN';
      const path = '/serviceBCaoThang/getBaocaoTongHopDienMTMN';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this2.user.ACCESS_TOKEN
      };
      _this2.plus.alertWarning(`Đang lấy dữ liệu CMIS `);
      const bodyDaQT = {
        "BIEU": "BIEU23",
        "MA_DVIQLY": "PK0500",
        "TU_NGAY_GCS": `1/1/${+_this2.nam - 1}`,
        "DEN_NGAY_GCS": `31/12/${_this2.nam}`,
        "QUYET_TOAN": "1",
        "THANG": "1",
        "NAM": "2021",
        "LUY_KE": 0,
        "TCHAT_MTAM": -1,
        "NGAY_COD": -1
      };
      const bodyChuaQT = {
        "BIEU": "BIEU23",
        "MA_DVIQLY": "PK0500",
        "TU_NGAY_GCS": `1/1/2018`,
        "DEN_NGAY_GCS": `31/12/${_this2.nam}`,
        "QUYET_TOAN": "0",
        "THANG": "1",
        "NAM": "2021",
        "LUY_KE": 0,
        "TCHAT_MTAM": -1,
        "NGAY_COD": -1
      };
      const daQT = yield axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(url, bodyDaQT, {
        headers: httpOptions
      }).then(v => {
        return v['data'];
      });
      const chuaQT = yield axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(url, bodyChuaQT, {
        headers: httpOptions
      }).then(v => {
        return v['data'];
      });
      _this2.plus.alertSuccess(`Lấy dữ liệu CMIS thành công`);
      const sanLuongDMT = daQT.concat(chuaQT);
      const sanLuongNam = [];
      for (let i = 0; i < sanLuongDMT.length; i++) {
        const item = sanLuongDMT[i];
        if (+item.NAM == +_this2.nam) {
          const index = sanLuongNam.findIndex(val => val['MA_KHANG'] === item.MA_KHANG);
          if (index == -1) {
            delete item.DON_GIA;
            delete item.ID_DMT;
            delete item.LOAI_DCHINH;
            delete item.MA_DDO;
            delete item.MA_DVIQLY;
            delete item.NGAY_QTOAN;
            delete item.MA_GIA;
            delete item.SO_BBANQT;
            delete item.THANG;
            sanLuongNam.push(item);
          } else {
            sanLuongNam[index].SAN_LUONG += item.SAN_LUONG;
            sanLuongNam[index].SO_TIEN += item.SO_TIEN;
            sanLuongNam[index].TONG_TIEN += item.TONG_TIEN;
            sanLuongNam[index].SAN_LUONG += item.SAN_LUONG;
            sanLuongNam[index].TIEN_GTGT += item.TIEN_GTGT;
          }
        }
      }
      _this2.excelSV.export(daQT, `DaQT${_this2.nam - 1}`);
      _this2.excelSV.export(chuaQT, `ChuaQT`);
      _this2.excelSV.export(sanLuongNam, `DoanhThuNam${_this2.nam}`);
      _this2.loadSV.loaded('getBaocaoTongHopDienMTMN');
    })();
  }
  getBBQTArr(inhoadon) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(_this3.searchArr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.concatMap)(el => _this3.getBBanXnhanDienMTAM(el, _this3.nam, inhoadon))).subscribe(res => {
        console.log(res);
      });
    })();
  }
  getBBanXnhanDienMTAM(maKH, nam, inhoadon) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.loadSV.load('getBBanXnhanDienMTAM');
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/getBBanXnhanDienMTAM';
      const path = '/serviceBCaoThang/getDsachKhangCSoSLuong';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this4.user.ACCESS_TOKEN
      };
      _this4.plus.alertWarning(`Đang lấy dữ liệu CMIS ${maKH}`);
      const bodyQT1 = {
        "MA_DVIQLY": maKH.slice(0, 6),
        "MA_KHANG": [maKH],
        "NAM": nam,
        "QUYET_TOAN": 1
      };
      const bodyQT0 = {
        "MA_DVIQLY": maKH.slice(0, 6),
        "MA_KHANG": [maKH],
        "NAM": nam,
        "QUYET_TOAN": 0
      };
      const daQT = yield axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(url, bodyQT1, {
        headers: httpOptions
      }).then(v => {
        return v['data'];
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this4.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this4.authSV.reload('/cmis4');
        _this4.loadSV.clear();
        console.log(err);
        return [];
      });
      const chuaQT = yield axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(url, bodyQT0, {
        headers: httpOptions
      }).then(v => {
        return v['data'];
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this4.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this4.authSV.reload('/cmis4');
        _this4.loadSV.clear();
        console.log(err);
        return [];
      });
      _this4.plus.alertSuccess(`Lấy dữ liệu CMIS ${maKH} thành công`);
      const sanLuongDMT = daQT.concat(chuaQT);
      const dataexport = [];
      const dataexport10 = [];
      const dataexport8 = [];
      for (let i = 0; i < sanLuongDMT.length; i++) {
        const element = sanLuongDMT[i];
        if (element.NAM == nam) {
          dataexport.push(element);
        }
        if (element.THANG < 7 && element.TIEN_GTGT == 0 && element.NAM == nam) {
          dataexport10.push(element);
        }
        if (element.THANG > 6 && element.TIEN_GTGT == 0 && element.NAM == nam) {
          dataexport8.push(element);
        }
      }
      _this4.exportDoc(dataexport, maKH, nam);
      if (_this4.in6Thang) {
        _this4.exportDocThue(dataexport10, 1, 6, 0.1);
        _this4.exportDocThue(dataexport8, 7, 12, 0.08);
      }
      inhoadon ? _this4.exportDocThue(dataexport, 1, 12, _this4.thuevat) : null;
      _this4.loadSV.loaded('getBBanXnhanDienMTAM');
    })();
  }
  exportDocThue(data, i1, i2, vat) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dmtKH = yield _this5.idbSV.IDB_DB_GetAllByIndexKey(_this5.db, 'dmt-khach-hang', 'MaKhachHang', '=', data[0].MA_KHANG);
      let diachi = '';
      let daidien = '';
      const lastIndex = data.length - 1;
      if (dmtKH.length > 0) {
        diachi = dmtKH[0].DiaChi;
        daidien = dmtKH[0].DaiDien;
      } else {
        diachi = data[lastIndex].DCHI_KHANG;
        daidien = data[lastIndex].TEN_KHANG;
      }
      const body = {
        TenKH: data[lastIndex].TEN_KHANG,
        DiaChi: diachi,
        MaKH: data[lastIndex].MA_KHANG,
        DaiDien: daidien,
        Nam: _this5.nam,
        tongSL: 0,
        donGia: _this5.donGia,
        tongDG: _this5.donGia,
        tongCVAT: 0,
        tongVAT: 0,
        tongTien: 0,
        ThueDuocGiam: 0,
        TTSauGiam: 0,
        tb: []
      };
      for (let i = i1; i <= i2; i++) {
        body.tb.push({
          thang: i,
          tg: [],
          dk: [],
          ck: [],
          hsn: [],
          sl: 0,
          dg: 0,
          cvat: 0,
          vat: 0,
          tong: 0,
          sl2: 0,
          dg2: 0,
          cvat2: 0,
          vat2: 0,
          tong2: 0
        });
      }
      const tb1 = [];
      for (let i = 0; i < data.length; i++) {
        const el = data[i];
        body.tongCVAT += el.SO_TIEN;
        body.tongVAT += el.TIEN_GTGT;
        body.tongDG += el.DON_GIA;
        body.tongSL += el.SAN_LUONG;
        body.tongTien += el.TONG_TIEN;
        for (let ib = 0; ib < body.tb.length; ib++) {
          if (el.THANG == body.tb[ib].thang) {
            tb1.push(el);
            body.tb[ib].tg.push({
              type: el.BCS
            });
            body.tb[ib].dk.push({
              type: el.MA_GIA == ' ' ? new Intl.NumberFormat('it-IT').format(+el.CHISO_CU.replace(/,/g, '.')) : ""
            });
            body.tb[ib].ck.push({
              type: el.MA_GIA == ' ' ? new Intl.NumberFormat('it-IT').format(+el.CHISO_MOI.replace(/,/g, '.')) : ""
            });
            body.tb[ib].hsn.push({
              type: el.MA_GIA == ' ' ? new Intl.NumberFormat('it-IT').format(+el.HS_NHAN.replace(/,/g, '.')) : ""
            });
            body.tb[ib].sl += el.MA_GIA == 'MT' ? +el.SAN_LUONG : 0;
            body.tb[ib].dg = el.MA_GIA == 'MT' ? +el.DON_GIA : body.tb[ib].dg;
            body.tb[ib].cvat += el.MA_GIA == 'MT' ? +el.SO_TIEN : 0;
            body.tb[ib].vat += el.MA_GIA == 'MT' ? +el.TIEN_GTGT : 0;
            body.tb[ib].tong += el.MA_GIA == 'MT' ? +el.TONG_TIEN : 0;
            body.tb[ib].sl2 += el.MA_GIA == 'MT2' ? +el.SAN_LUONG : 0;
            body.tb[ib].dg2 = el.MA_GIA == 'MT2' ? +el.DON_GIA : body.tb[ib].dg2;
            body.tb[ib].cvat2 += el.MA_GIA == 'MT2' ? +el.SO_TIEN : 0;
            body.tb[ib].vat2 += el.MA_GIA == 'MT2' ? +el.TIEN_GTGT : 0;
            body.tb[ib].tong2 += el.MA_GIA == 'MT2' ? +el.TONG_TIEN : 0;
          }
        }
      }
      body.tongVAT = Math.round(body.tongSL * +_this5.remote['DonGiaDMT']);
      body.ThueDuocGiam = _this5.thuevat < 0.1 ? Math.round(vat == 0.08 ? body.tongVAT * 0.2 * 0.03 : 0) : 0;
      body.TTSauGiam = Math.round(body.tongVAT - body.ThueDuocGiam);
      console.log(body);
      _this5.docxSV.loadFileUrl(`https://thuctd.github.io/templates/DMT/MauBienBan6T-${_this5.user.SUBDIVISIONID}.docx`).then(wordFile => {
        _this5.docxSV.generateOne(body, wordFile, data[0].MA_KHANG + 'ChotSL').then(val => {
          console.log(val);
        });
      });
    })();
  }
  exportDoc(data, maKh, nam) {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dmtKH = yield _this6.idbSV.IDB_DB_GetAllByIndexKey(_this6.db, 'dmt-khach-hang', 'MaKhachHang', '=', maKh);
      let diachi = '';
      let daidien = '';
      const lastIndex = data.length - 1;
      if (dmtKH.length > 0) {
        diachi = dmtKH[0].DiaChi;
        daidien = dmtKH[0].DaiDien;
      } else {
        diachi = data[lastIndex].DCHI_KHANG;
        daidien = data[lastIndex].TEN_KHANG;
      }
      const body = {
        TenKH: data[lastIndex].TEN_KHANG,
        DiaChi: diachi,
        MaKH: data[lastIndex].MA_KHANG,
        DaiDien: daidien,
        Nam: nam,
        tongSL: 0,
        tongDG: 0,
        tongCVAT: 0,
        tongVAT: 0,
        tongTien: 0,
        tb: []
      };
      for (let i = 1; i < 13; i++) {
        body.tb.push({
          thang: i,
          tg: [],
          dk: [],
          ck: [],
          hsn: [],
          sl: 0,
          dg: 0,
          cvat: 0,
          vat: 0,
          tong: 0,
          sl2: 0,
          dg2: 0,
          cvat2: 0,
          vat2: 0,
          tong2: 0
        });
      }
      const tb1 = [];
      for (let i = 0; i < data.length; i++) {
        const el = data[i];
        if (el.NAM == nam) {
          body.tongCVAT += el.SO_TIEN;
          body.tongVAT += el.TIEN_GTGT;
          body.tongDG += el.DON_GIA;
          body.tongSL += el.SAN_LUONG;
          body.tongTien += el.TONG_TIEN;
          for (let ib = 0; ib < body.tb.length; ib++) {
            if (el.THANG == body.tb[ib].thang) {
              tb1.push(el);
              body.tb[ib].tg.push({
                type: el.BCS
              });
              body.tb[ib].dk.push({
                type: el.MA_GIA == ' ' ? new Intl.NumberFormat('it-IT').format(+el.CHISO_CU.replace(/,/g, '.')) : ""
              });
              body.tb[ib].ck.push({
                type: el.MA_GIA == ' ' ? new Intl.NumberFormat('it-IT').format(+el.CHISO_MOI.replace(/,/g, '.')) : ""
              });
              body.tb[ib].hsn.push({
                type: el.MA_GIA == ' ' ? new Intl.NumberFormat('it-IT').format(+el.HS_NHAN.replace(/,/g, '.')) : ""
              });
              body.tb[ib].sl += el.MA_GIA == 'MT' ? +el.SAN_LUONG : 0;
              body.tb[ib].dg = el.MA_GIA == 'MT' ? +el.DON_GIA : body.tb[ib].dg;
              body.tb[ib].cvat += el.MA_GIA == 'MT' ? +el.SO_TIEN : 0;
              body.tb[ib].vat += el.MA_GIA == 'MT' ? +el.TIEN_GTGT : 0;
              body.tb[ib].tong += el.MA_GIA == 'MT' ? +el.TONG_TIEN : 0;
              body.tb[ib].sl2 += el.MA_GIA == 'MT2' ? +el.SAN_LUONG : 0;
              body.tb[ib].dg2 = el.MA_GIA == 'MT2' ? +el.DON_GIA : body.tb[ib].dg2;
              body.tb[ib].cvat2 += el.MA_GIA == 'MT2' ? +el.SO_TIEN : 0;
              body.tb[ib].vat2 += el.MA_GIA == 'MT2' ? +el.TIEN_GTGT : 0;
              body.tb[ib].tong2 += el.MA_GIA == 'MT2' ? +el.TONG_TIEN : 0;
            }
          }
        }
      }
      _this6.docxSV.loadFileUrl(`https://thuctd.github.io/templates/DMT/MauBienBan-${_this6.user.SUBDIVISIONID}.docx`).then(wordFile => {
        _this6.docxSV.generateOne(body, wordFile, 'ChotSL-' + maKh).then(val => {
          console.log(val);
        });
      });
    })();
  }
  getCongNoArr() {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(_this7.searchArr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.concatMap)(el => _this7.getDsachKhangQToanDienMTAM(el, _this7.nam))).subscribe(res => {
        console.log(res);
      });
    })();
  }
  getDsachKhangQToanDienMTAM(maKH, nam) {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.user.SUBDIVISIONID !== maKH.slice(0, 6)) return _this8.plus.alertError('Không được phép truy cập!');
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/getDsachKhangQToanDienMTAM';
      const path = '/serviceBCaoThang/getDsachKhangQToanDienMTAM';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this8.user.ACCESS_TOKEN
      };
      const body = {
        "MA_DVIQLY": maKH.slice(0, 6),
        "MA_KHANG": maKH,
        "NAM": -1,
        "QUYET_TOAN": 0
      };
      yield axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(url, body, {
        headers: httpOptions
      }).then(v => {
        const data = v['data'];
        console.table(data);
        _this8.xuatCongNo(data);
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this8.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this8.authSV.reload('/cmis4');
        _this8.loadSV.clear();
        console.log(err);
        return [];
      });
    })();
  }
  xuatCongNo(items) {
    var _this9 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.loadSV.load('xuatCongNo');
      const setup = yield _this9.authSV._getOpt(src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_1__.ROLE.NLMTSETUP);
      const dmtKH = yield _this9.idbSV.IDB_DB_GetAllByIndexKey(_this9.db, 'dmt-khach-hang', 'MaKhachHang', '=', items[0].MA_KHANG);
      console.log(dmtKH, setup);
      const list = [];
      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        const item = {
          MaGCS: dmtKH[0].MaKV,
          MaKH: el.MA_KHANG,
          ThangNam: el.THANG + '/' + el.NAM,
          SanLuong: el.SAN_LUONG,
          TongTien: el.SO_TIEN + el.TIEN_GTGT
        };
        if (el.NAM <= _this9.nam) {
          list.push(item);
        }
      }
      const sumTien = _this9.plus.sumByKey(list, 'TongTien');
      const body = {
        _id: items[0].MA_KHANG,
        TenDonVi: setup.TenDonVi,
        DiaChi: setup.DiaChi,
        GiamDoc: setup.GiamDoc,
        TenKH: items[0].TEN_KHANG,
        DiaChiKH: dmtKH[0].DiaChi,
        DaiDien: dmtKH[0].DaiDien,
        ChucVu: dmtKH[0].ChucVu,
        TongTien: sumTien,
        Nam: _this9.nam,
        table: list
      };
      const wordFile = yield _this9.docxSV.loadFileUrl(`https://thuctd.github.io/templates/DMT/BBCongNo-${_this9.user.SUBDIVISIONID}.docx`);
      _this9.docxSV.generateOne(body, wordFile, items[0].MA_KHANG + '-CongNo').then(val => {
        console.log(val);
        _this9.loadSV.loaded('xuatCongNo');
      });
    })();
  }
  getClip(evt) {
    var _this0 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this0.searchArr = [];
      for (let i = 0; i < evt.length; i++) {
        const pk = evt[i][0];
        _this0.searchArr.push(pk);
      }
      console.log(_this0.searchArr);
    })();
  }
  static {
    this.ɵfac = function BienBanChotDmtComponent_Factory(t) {
      return new (t || BienBanChotDmtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_4__.DocxtemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_6__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_7__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_fire_compat_remote_config__WEBPACK_IMPORTED_MODULE_14__.AngularFireRemoteConfig));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: BienBanChotDmtComponent,
      selectors: [["app-bien-ban-chot-dmt"]],
      decls: 13,
      vars: 3,
      consts: [[1, "container"], [3, "label", "excel"], ["matInput", "", "type", "number", "placeholder", "N\u0103m", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["color", "warn", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"]],
      template: function BienBanChotDmtComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "app-parse-excel-clipboard", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("excel", function BienBanChotDmtComponent_Template_app_parse_excel_clipboard_excel_1_listener($event) {
            return ctx.getClip($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-form-field")(3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function BienBanChotDmtComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.nam = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 3)(5, "mat-slide-toggle", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function BienBanChotDmtComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) {
            return ctx.in6Thang = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "6 th\u00E1ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BienBanChotDmtComponent_Template_button_click_7_listener() {
            return ctx.getBBQTArr(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Bi\u00EAn b\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BienBanChotDmtComponent_Template_button_click_9_listener() {
            return ctx.getCongNoArr();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "C\u00F4ng n\u1EE3");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BienBanChotDmtComponent_Template_button_click_11_listener() {
            return ctx.getBBQTArr(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Phi\u1EBFu c\u00F3 thu\u1EBF");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Copy m\u00E3 PK d\u00E1n v\u00F4 \u0111\u00E2y");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.nam);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.in6Thang);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_8__.ParseExcelClipboardComponent]
    });
  }
}

/***/ }),

/***/ 88443:
/*!**********************************************************************!*\
  !*** ./src/app/cmis4/cap-nhat-lien-he/cap-nhat-lien-he.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapNhatLienHeComponent: () => (/* binding */ CapNhatLienHeComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 70274);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var src_app_share_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/animate */ 27121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 11161);
/* harmony import */ var _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../share/import-excel/parse-excel-clipboard/parse-excel-clipboard.component */ 8390);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);























function CapNhatLienHeComponent_div_36_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r3.STTU_UTIEN, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r3.DTHOAI_DVU, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r3.EMAIL, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r3.TEN_KH_LHE, "");
  }
}
function CapNhatLienHeComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15)(1, "table", 16)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "STT \u01AFu ti\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "\u0110i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "H\u1ECD v\u00E0 t\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, CapNhatLienHeComponent_div_36_tr_13_Template, 9, 5, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.lienhes);
  }
}
function CapNhatLienHeComponent_mat_expansion_panel_37_h5_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("\u0110\u00E3 c\u1EADp nh\u1EADt: ", ctx_r4.i, "/", ctx_r4.excelObj.length, "");
  }
}
function CapNhatLienHeComponent_mat_expansion_panel_37_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r6.MA_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r6.DTHOAI_DVU);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r6.TEN_KH_LHE);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r6.status);
  }
}
function CapNhatLienHeComponent_mat_expansion_panel_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "app-drop-files", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("files", function CapNhatLienHeComponent_mat_expansion_panel_37_Template_app_drop_files_files_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r8.onDropFile($event));
    })("ondragover", function CapNhatLienHeComponent_mat_expansion_panel_37_Template_app_drop_files_ondragover_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r10.ondragover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "app-parse-excel-clipboard", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("json", function CapNhatLienHeComponent_mat_expansion_panel_37_Template_app_parse_excel_clipboard_json_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.getJson($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, CapNhatLienHeComponent_mat_expansion_panel_37_h5_8_Template, 2, 2, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CapNhatLienHeComponent_mat_expansion_panel_37_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r12.updateLienHeArr());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Import");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div")(12, "table", 21)(13, "thead")(14, "tr")(15, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "TT");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "M\u00E3 PK");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "H\u1ECD t\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, CapNhatLienHeComponent_mat_expansion_panel_37_tr_26_Template, 11, 5, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CapNhatLienHeComponent_mat_expansion_panel_37_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.export());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "export");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Copy m\u00E3 PK d\u00E1n v\u00F4 \u0111\u00E2y");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.i > 0 || ctx_r1.excelObj.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.excelObj);
  }
}
class CapNhatLienHeComponent {
  constructor(excelSV, plus, cmis4SV, loadSV, formSV, authSV) {
    this.excelSV = excelSV;
    this.plus = plus;
    this.cmis4SV = cmis4SV;
    this.loadSV = loadSV;
    this.formSV = formSV;
    this.authSV = authSV;
    this.user = JSON.parse(localStorage.getItem('USERCMIS'));
    this.api = 'cmis4-lien-he';
    this.lienhes = [];
    this.searchArr = [];
    this.report = [];
    this.excelObj = [];
    this.i = 0;
    this.uutien = false;
    this.main = this.formSV.fb.group({
      MA_KHANG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(13)]],
      DTHOAI_DVU: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(11)]],
      TEN_KH_LHE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(5)]],
      EMAIL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email]]
    });
  }
  ngOnInit() {
    this.user = this.cmis4SV.getUser();
    this.main.patchValue({
      MA_KHANG: '',
      DTHOAI_DVU: ''
    });
  }
  getJson(evt) {
    console.log(evt);
    this.excelObj = evt;
  }
  updateLienHeArr() {
    let ask;
    if (this.uutien) {
      ask = confirm(`Bạn muốn lưu toàn bộ với số thứ tự ưu tiên là 0?`);
      if (!ask) return null;
    } else {
      ask = confirm(`Bạn muốn lưu toàn bộ danh sách?`);
      if (!ask) return null;
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.from)(this.excelObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.concatMap)((el, index) => this.updateLienHe(index, el.MA_KHANG, el.DTHOAI_DVU, el.TEN_KH_LHE, el.EMAIL))).subscribe();
  }
  xemlienhe(maKH) {
    this.main.patchValue({
      MA_KHANG: this.cmis4SV.convertPK(maKH)
    });
    this.cmis4SV.layTtinKHangMoinhat(this.cmis4SV.convertPK(maKH)).then(res => {
      Array.isArray(res.HDG_KHANG_LIENHE) ? this.lienhes = res.HDG_KHANG_LIENHE : this.plus.alertError(res.HDG_KHANG_LIENHE);
    });
  }
  updateThongTin(index, maKH, sdt) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.cmis4SV.capnhatThongTinDTHOAI(_this.cmis4SV.convertPK(maKH), sdt).then(() => {
        _this.plus.alertSuccess();
      }).catch(() => {
        _this.plus.alertError();
      });
    })();
  }
  updateLienHe(_x, _x2, _x3) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (index, maKH, sdt, hoten = '', email = '') {
      _this2.i = index + 1;
      let update = 0;
      yield _this2.plus.sleep(1000);
      const ttmoinhat = yield _this2.cmis4SV.layTtinKHangMoinhat(_this2.cmis4SV.convertPK(maKH));
      if (Object.prototype.hasOwnProperty.call(ttmoinhat, 'TYPE')) return null;
      for (let i = 0; i < ttmoinhat.HDG_KHANG_LIENHE.length; i++) {
        if (ttmoinhat == null) {
          _this2.excelObj[index]['status'] = false;
          update++;
          break;
        }
        const el = ttmoinhat.HDG_KHANG_LIENHE[i];
        if (el.DTHOAI_DVU == sdt && !_this2.uutien) {
          _this2.plus.alertWarning('Số điện thoại: ' + el.DTHOAI_DVU + '- STT: ' + el.STTU_UTIEN + _this2.cmis4SV.convertPK(maKH) + ' đã tồn tại!');
          _this2.excelObj[index]['status'] = false;
          update++;
          break;
        }
      }
      _this2.lienhes = ttmoinhat.HDG_KHANG_LIENHE;
      const newContact = {
        "DCHI_KH_LHE": ttmoinhat.HDG_KHANG_LIENHE[0].DCHI_KH_LHE,
        "TEN_KH_LHE": hoten.length > 0 ? hoten : ttmoinhat.HDG_KHANG_LIENHE[0].TEN_KH_LHE,
        "TRINH_DO": "",
        "NGHE_NGHIEP": "",
        "DTHOAI_DVU": sdt,
        "EMAIL": email,
        "FAX": "",
        "ZALO": "",
        "FACEBOOK": "",
        "MA_QHE": "99",
        "GIOI_TINH": ttmoinhat.HDG_KHANG_LIENHE[0].GIOI_TINH,
        "ID_LIENHE": -1,
        "MA_CNANG": "374",
        "MA_DVIQLY": ttmoinhat.HDG_KHANG_LIENHE[0].MA_DVIQLY,
        "MA_HDONG": ttmoinhat.HDG_KHANG_LIENHE[0].MA_HDONG,
        "MA_KHANG": _this2.cmis4SV.convertPK(maKH),
        "NGAY_HLUC": moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'day').format('DD/MM/YYYY'),
        "NGAY_SINH": "",
        "NGUOI_SUA": _this2.user.USERNAME,
        "NGUOI_TAO": _this2.user.USERNAME,
        "ID_LOG_XMDC": "",
        "SO_DINHDANH": null,
        "NGAY_CAP_CCCD": "",
        "NOI_CAP_CCCD": null,
        "DAN_TOC": null,
        "TON_GIAO": null,
        "QUOC_TICH": null,
        "TINHTRANG_HONNHAN": null,
        "IS_SIGN_BBAN_TTHAO": false,
        "STTU_UTIEN": `${_this2.uutien ? 0 : ttmoinhat.HDG_KHANG_LIENHE.length}`,
        "GIOI_TINH_HTHI": "Ông",
        "NGAY_KY": moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'day').format('DD/MM/YYYY')
      };
      _this2.uutien ? ttmoinhat.HDG_KHANG_LIENHE.unshift(newContact) : ttmoinhat.HDG_KHANG_LIENHE.push(newContact);
      const body = {
        bangDvXminhCdan: [],
        DV_XMINH_CDAN: [],
        DV_XMINH_CDAN_HDC: [],
        HDG_KHANG_LIENHE: _this2.removeDuplicates(ttmoinhat.HDG_KHANG_LIENHE, 'DTHOAI_DVU'),
        HDG_KHANG_LIENHE_U: ttmoinhat.HDG_KHANG_LIENHE_U,
        HDG_KHACH_HANG: ttmoinhat.HDG_KHACH_HANG,
        HDG_DIEM_DO: ttmoinhat.HDG_DIEM_DO,
        HDG_HOP_DONG: ttmoinhat.HDG_HOP_DONG
      };
      return update == 0 ? _this2.ThemTDoiTTinLienHe(body, index) : null;
    }).apply(this, arguments);
  }
  ThemTDoiTTinLienHe(body, index) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loadSV.load('ThemTDoiTTinLienHe');
      const url = "https://cmis-api.evnspc.vn/serviceHopDong/ThemTDoiTTinLienHe";
      const path = '/serviceHopDong/ThemTDoiTTinLienHe';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this3.user.ACCESS_TOKEN
      };
      _this3.plus.alertMatSnackBar(`Đang thay đổi số điện thoại ${body.HDG_HOP_DONG[0].MA_KHANG}...`);
      return axios__WEBPACK_IMPORTED_MODULE_15__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        _this3.cmis4SV.handleErrCmis(res);
        _this3.loadSV.loaded('ThemTDoiTTinLienHe');
        _this3.plus.alertSuccess(`${body.HDG_HOP_DONG[0].MA_KHANG}`);
        _this3.excelObj[index]['status'] = true;
      }).catch(err => {
        if (err.response.status === 401) {
          localStorage.removeItem('USERCMIS');
          _this3.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
          _this3.authSV.reload('/cmis4');
        }
      });
    })();
  }
  removeDuplicates(arr, key) {
    const seen = new Set();
    const data = arr.filter(item => {
      const value = item[key];
      if (seen.has(value) || item['DTHOAI_DVU'] == '' || item['DTHOAI_DVU'] == null) {
        return false;
      } else {
        seen.add(value);
        return true;
      }
    });
    data.map((item, index) => {
      item.STTU_UTIEN = `${index}`;
    });
    data.map((item, index) => {
      if (index != 0) {
        item.EMAIL = '';
      }
    });
    this.lienhes = data;
    return data;
  }
  onDropFile(files) {
    console.log(`onDropFile()`);
    for (let i = 0; i < files.length; i++) {
      if (files[i].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.excelSV.fileToJsonArray(files[i]).then(obj => {
          this.excelObj = obj;
          console.log(this.excelObj);
        });
      } else {
        this.plus.alertError(`File không hợp lệ`);
      }
    }
  }
  ondragover() {
    document.getElementById("dropZone").setAttribute("drop-active", "true");
  }
  checkPer(api, level = 1) {
    return this.authSV.checkPer(api, level);
  }
  export() {
    this.excelSV.export(this.excelObj, 'CapNhatLienHe');
  }
  static {
    this.ɵfac = function CapNhatLienHeComponent_Factory(t) {
      return new (t || CapNhatLienHeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_5__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_7__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_8__.AuthServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: CapNhatLienHeComponent,
      selectors: [["app-cap-nhat-lien-he"]],
      decls: 38,
      vars: 6,
      consts: [[1, "container", "my-3"], [1, "row", 3, "formGroup"], [1, "col"], ["appearance", "outline"], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "MA_KHANG"], ["matSuffix", ""], ["required", "", "type", "text", "autocomplete", "off", "matInput", "", "formControlName", "DTHOAI_DVU"], ["type", "text", "autocomplete", "off", "matInput", "", "formControlName", "EMAIL"], ["type", "text", "autocomplete", "off", "matInput", "", "formControlName", "TEN_KH_LHE"], [1, "text-center"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [1, "row"], [1, "table", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], [3, "label", "files", "ondragover"], [3, "label", "json"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "table"], ["scope", "col"], ["mat-button", "", 3, "click"], ["scope", "row"]],
      template: function CapNhatLienHeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "M\u00E3 kh\u00E1ch h\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "input", 4)(7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 2)(9, "mat-form-field", 3)(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 6)(13, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 2)(15, "mat-form-field", 3)(16, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 7)(19, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 2)(21, "mat-form-field", 3)(22, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "H\u1ECD v\u00E0 t\u00EAn");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "input", 8)(25, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 9)(27, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CapNhatLienHeComponent_Template_button_click_27_listener() {
            return ctx.xemlienhe(ctx.main.value.MA_KHANG);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "mat-slide-toggle", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function CapNhatLienHeComponent_Template_mat_slide_toggle_ngModelChange_30_listener($event) {
            return ctx.uutien = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "STT \u01B0u ti\u00EAn b\u1EB1ng 0");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CapNhatLienHeComponent_Template_button_click_32_listener() {
            return ctx.updateLienHe(0, ctx.main.value.MA_KHANG, ctx.main.value.DTHOAI_DVU, ctx.main.value.TEN_KH_LHE, ctx.main.value.EMAIL);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "\u0110\u1ED5i li\u00EAn h\u1EC7");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CapNhatLienHeComponent_Template_button_click_34_listener() {
            return ctx.updateThongTin(0, ctx.main.value.MA_KHANG, ctx.main.value.DTHOAI_DVU);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "\u0110\u1ED5i h\u1EE3p \u0111\u1ED3ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, CapNhatLienHeComponent_div_36_Template, 14, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, CapNhatLienHeComponent_mat_expansion_panel_37_Template, 29, 4, "mat-expansion-panel", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.main);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.uutien);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.main.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.main.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.lienhes == null ? null : ctx.lienhes.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.checkPer(ctx.api, 2));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatSuffix, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionPanelHeader, _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_9__.ParseExcelClipboardComponent, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_10__.DropFilesComponent],
      data: {
        animation: [src_app_share_animate__WEBPACK_IMPORTED_MODULE_2__.slideIn]
      }
    });
  }
}

/***/ }),

/***/ 83129:
/*!******************************************************************!*\
  !*** ./src/app/cmis4/chi-so-dinh-ky/chi-so-dinh-ky.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChiSoDinhKyComponent: () => (/* binding */ ChiSoDinhKyComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 70274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _chi_so_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chi-so.service */ 87535);
/* harmony import */ var src_app_share_services_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/firestore.service */ 57923);
/* harmony import */ var src_app_kinh_doanh_ghi_chi_so_ghi_chi_so_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/kinh-doanh/ghi-chi-so/ghi-chi-so.service */ 93934);
/* harmony import */ var src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/share/services/indexeddbV2.service */ 4045);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../share/material/month-year/month-year.component */ 55654);
/* harmony import */ var _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../share/import-excel/parse-excel-clipboard/parse-excel-clipboard.component */ 8390);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);
























function ChiSoDinhKyComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 3)(1, "div", 11)(2, "mat-form-field")(3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ChiSoDinhKyComponent_div_20_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.tile = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChiSoDinhKyComponent_div_20_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.loopSLLon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "L\u1EA5y d\u1EEF li\u1EC7u SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChiSoDinhKyComponent_div_20_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r5.exportFull());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Xu\u1EA5t full");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChiSoDinhKyComponent_div_20_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r6.exportSLLon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r0.tile);
  }
}
const _c0 = function (a0) {
  return {
    "bg-info": a0
  };
};
function ChiSoDinhKyComponent_mat_list_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-list")(1, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](3, _c0, item_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" S\u1ED5 ", item_r7.maSo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r7.status ? ": " + item_r7.SL + " bi\u1EC3u" : "", " ");
  }
}
class ChiSoDinhKyComponent {
  constructor(loadSV, cmis4SV, excelSV, plus, chiSoSV, fbSV, gcsSV, idbSV) {
    this.loadSV = loadSV;
    this.cmis4SV = cmis4SV;
    this.excelSV = excelSV;
    this.plus = plus;
    this.chiSoSV = chiSoSV;
    this.fbSV = fbSV;
    this.gcsSV = gcsSV;
    this.idbSV = idbSV;
    this.startDay = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'days').toDate();
    this.maSoGSCs = JSON.parse(localStorage.getItem('maSoGSCs')) || [];
    this.soGCSByListSoRES = null;
    this.dDoSoGCSPAYLOAD = null;
    this.getChisoRES = [];
    this.KhongCoSL = [];
    this.SanLuongBatThuong = [];
    this.MaTrangThai = [];
    this.tile = 30;
    this.exportData = {};
    this.isMerge = true;
    this.dataGhiRot = [];
    this.dataSLNho = [];
    this.dataSLTren100 = [];
    this.dataRES = [];
    this.chiSoAll = [];
    this.dataKiemSoast = [];
    this.dsbangkiemsoast = [];
  }
  ngOnInit() {
    this.idbSV.IDB_InitDB(this.gcsSV.dbName).subscribe(db => {
      this.gcsSV.db = db;
    });
    this.user = JSON.parse(localStorage.getItem('USERCMIS'));
  }
  kiemTraBatThuong() {
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  onDropFile(files) {
    console.log(`onDropFile()`);
    for (let i = 0; i < files.length; i++) {
      if (files[i].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.excelSV.fileToJson(files[i]).then(obj => {
          this.dsbangkiemsoast = this.dsbangkiemsoast.concat(obj);
          this.maSoGSCs = this.maSoGSCs.concat([...new Map(obj.map(i => [i.MA_SOGCS.toUpperCase(), {
            maSo: i.MA_SOGCS.toUpperCase(),
            status: false,
            SL: 0
          }])).values()]);
          console.log(this.maSoGSCs);
        });
      } else {
        this.plus.alertError(`File không hợp lệ`);
      }
    }
    this.maSoGSCs = [...new Set(this.maSoGSCs)];
  }
  loop() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.from)(_this.maSoGSCs).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.concatMap)((el, index) => _this.layDuLieu(el.maSo, index))).subscribe();
    })();
  }
  loopSL() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.from)(_this2.maSoGSCs).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.concatMap)((el, index) => _this2.locSLNho(el.maSo, index))).subscribe();
    })();
  }
  loopSLLon() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.from)(_this3.maSoGSCs).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.concatMap)((el, index) => _this3.locSLNho(el.maSo, index))).subscribe();
    })();
  }
  importAPI() {
    console.log(this.dataGhiRot);
    this.loadSV.load('importAPI');
    debugger;
    this.gcsSV.importRotPLC(this.dataGhiRot).then(res => {
      this.plus.alertSuccess();
      this.loadSV.loaded('importAPI');
    });
  }
  nhapChiso(soGCSByListSoRESs) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        "KY": _this4.dDoSoGCSPAYLOAD.KY,
        "THANG": _this4.dDoSoGCSPAYLOAD.THANG,
        "NAM": _this4.dDoSoGCSPAYLOAD.NAM,
        "MA_SOGCS": _this4.dDoSoGCSPAYLOAD.MA_SOGCS,
        "MA_DVIQLY": _this4.user.SUBDIVISIONID,
        "NGAY_CKY": _this4.dDoSoGCSPAYLOAD.NGAY_CKY,
        "LST_DDO": soGCSByListSoRESs,
        "IS_CHUANHAPCSO": false,
        "IS_CHOTCS": false
      };
      let path = '/serviceChiSoKHang/getChiso';
      let url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/getChiso';
      return _this4.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  locSLNho(maso, index) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.plus.alertMatSnackBar('Đang lấy dữ liệu ' + maso);
      _this5.loadSV.load('locSLNho');
      _this5.dataSLNho = [];
      let x1 = yield _this5.get_gcslichgcsByMaSogcs(maso);
      let x2 = yield _this5.getDDoSoGCS(x1);
      _this5.getChisoRES = yield _this5.getChiso(x2);
      _this5.dataRES = _this5.dataRES.concat(_this5.getChisoRES);
      _this5.maSoGSCs[index].status = true;
      _this5.loadSV.loaded('locSLNho');
    })();
  }
  locSLLon(maso, index) {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.plus.alertMatSnackBar('Đang lấy dữ liệu ' + maso);
      _this6.loadSV.load('locSLNho');
      _this6.dataSLNho = [];
      let x1 = yield _this6.get_gcslichgcsByMaSogcs(maso);
      let x2 = yield _this6.getDDoSoGCS(x1);
      _this6.getChisoRES = yield _this6.getChiso(x2);
      _this6.dataRES = _this6.dataRES.concat(_this6.getChisoRES);
      _this6.maSoGSCs[index].status = true;
      _this6.loadSV.loaded('locSLNho');
    })();
  }
  layDuLieu(maso, index) {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.plus.alertMatSnackBar('Đang lấy dữ liệu ' + maso);
      _this7.KhongCoSL = [];
      _this7.loadSV.load('layDuLieu');
      let x1 = yield _this7.get_gcslichgcsByMaSogcs(maso);
      console.log(x1);
      let x2 = yield _this7.getDDoSoGCS(x1);
      _this7.getChisoRES = yield _this7.getChiso(x2);
      _this7.chiSoAll = _this7.chiSoAll.concat(_this7.getChisoRES);
      debugger;
      let KhongCoSL = [];
      let STT = 1;
      KhongCoSL.push({
        STT: '',
        MA_KHANG: 'Mã sổ ghi: ' + maso,
        TEN_KHANG: `Tháng ${_this7.dDoSoGCSPAYLOAD.THANG}/${_this7.dDoSoGCSPAYLOAD.NAM}`
      });
      for (let i = 0; i < _this7.getChisoRES.length; i++) {
        const item = _this7.getChisoRES[i];
        let body = {
          _id: item.ID_BCS,
          ID_BCS: item.ID_BCS,
          MA_KHANG: item.MA_KHANG,
          TEN_KHANG: item.TEN_KHANG,
          SO_CTO: item.SO_CTO,
          MA_SOGCS: item.MA_SOGCS,
          SLUONG_1: +item.SLUONG_1,
          BCS: item.BCS,
          CHISO_CU: +item.CHISO_CU,
          CHISO_MOI: +item.CHISO_MOI || null,
          MA_GHI_CHU: item.MA_GHI_CHU,
          status: 1,
          KYCS: moment__WEBPACK_IMPORTED_MODULE_1___default()(item.NGAY_CKY, 'DD/MM/YYYY').format('YY/MM')
        };
        if ('MA_TTCTO' in item) {
          body['MA_TTCTO'] = item.MA_TTCTO;
          _this7.MaTrangThai.push(body);
        }
        if (item.CHISO_MOI == null || item.CHISO_MOI == '' || !('CHISO_MOI' in item)) {
          KhongCoSL.push(body);
          let lichGhi = yield _this7.gcsSV.getLichByMaSo(item.MA_SOGCS);
          body['TEN_TRAM'] = lichGhi.TEN_TRAM;
          body['PHAN_CONG'] = lichGhi.PHAN_CONG;
          body['NGAY_GHI'] = lichGhi.NGAY_GCS;
          body['GHI_CHU'] = '';
          _this7.dataGhiRot.push(body);
          STT++;
        }
        _this7.loadSV.loaded('layDuLieu');
      }
      _this7.maSoGSCs[index].status = true;
      _this7.maSoGSCs[index].SL = KhongCoSL.length - 1;
      KhongCoSL.length > 1 ? _this7.exportData[maso] = KhongCoSL : null;
    })();
  }
  exportSL() {
    for (let i = 0; i < this.dataRES.length; i++) {
      let item = this.dataRES[i];
      if (+item.SAN_LUONG < 5 && +item.SAN_LUONG > 0 && (item.BCS == 'SG' || item.BCS == 'KT' || item.BCS == 'SN' || item.BCS == 'KN')) {
        this.dataSLNho.push(item);
      }
    }
    this.excelSV.export(this.dataSLNho);
  }
  exportSLLon() {
    let bcschot = ['SG', 'SN', 'KT', 'KN'];
    for (let i = 0; i < this.dataRES.length; i++) {
      let item = this.dataRES[i];
      if ((+item.SAN_LUONG > +item.SLUONG_BQUAN + 100 || +item.SAN_LUONG > +item.SLUONG_1 + 100) && bcschot.includes(item.BCS)) {
        let body = this.plus.obj_extractByKeys(item, ['MA_KHANG', 'TEN_KHANG', 'MA_SOGCS', 'SAN_LUONG', 'SLUONG_1', 'SLUONG_BQUAN', 'BCS', 'MA_TTCTO']);
        body['CungKy'] = +item.SAN_LUONG - +item.SLUONG_1;
        body['TI_LE_BQ'] = +item.SAN_LUONG / +item.SLUONG_BQUAN;
        body['TI_LE_KHAC'] = +item.SAN_LUONG > +item.SLUONG_BQUAN * (this.tile + 100) / 100 ? '>' : '<';
        this.dataSLTren100.push(body);
      }
    }
    this.excelSV.exportMultiSheets({
      SLCanhBao: this.plus.sortArr(this.dataSLTren100, 'TI_LE', -1),
      GCS: this.dsbangkiemsoast
    }, moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD') + '-SLCanhBao');
  }
  exportFull() {
    let path = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YY/MM');
    this.excelSV.export(this.dataRES);
  }
  export() {
    this.MaTrangThai.length > 0 ? this.exportData['MaTrangThai'] = this.MaTrangThai : null;
    this.MaTrangThai.forEach(item => delete item.SLUONG_1);
    if (this.isMerge) {
      this.excelSV.exportMultiSheets(this.exportData, moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD') + '-GhiChiSo');
    } else {
      for (let i = 0; i < Object.keys(this.exportData).length; i++) {
        const element = Object.keys(this.exportData)[i];
        this.excelSV.export(this.exportData[element], moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD') + '-GhiChiSo-' + element);
      }
    }
  }
  exportMaTT() {
    this.MaTrangThai.length > 0 ? this.exportData['MaTrangThai'] = this.MaTrangThai : null;
  }
  getChiso(soGCSByListSoRESs) {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        "KY": _this8.dDoSoGCSPAYLOAD.KY,
        "THANG": _this8.dDoSoGCSPAYLOAD.THANG,
        "NAM": _this8.dDoSoGCSPAYLOAD.NAM,
        "MA_SOGCS": _this8.dDoSoGCSPAYLOAD.MA_SOGCS,
        "MA_DVIQLY": _this8.user.SUBDIVISIONID,
        "NGAY_CKY": _this8.dDoSoGCSPAYLOAD.NGAY_CKY,
        "LST_DDO": soGCSByListSoRESs,
        "IS_CHUANHAPCSO": false,
        "IS_CHOTCS": false
      };
      let path = '/serviceChiSoKHang/getChiso';
      let url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/getChiso';
      return _this8.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getDDoSoGCS(gcslichgcsByMaSogcsRES) {
    var _this9 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        "KY": `${gcslichgcsByMaSogcsRES.ky}`,
        "THANG": gcslichgcsByMaSogcsRES.thang,
        "NAM": gcslichgcsByMaSogcsRES.nam,
        "MA_SOGCS": gcslichgcsByMaSogcsRES.maSogcs,
        "MA_DVIQLY": _this9.user.SUBDIVISIONID,
        "THANG_HT": _this9.startDay.getMonth() + 1,
        "NAM_HT": _this9.startDay.getFullYear(),
        "NGAY_DKY": moment__WEBPACK_IMPORTED_MODULE_1___default()(gcslichgcsByMaSogcsRES.ngayDky).format("DD/MM/YYYY"),
        "NGAY_CKY": moment__WEBPACK_IMPORTED_MODULE_1___default()(gcslichgcsByMaSogcsRES.ngayCky).format("DD/MM/YYYY")
      };
      _this9.dDoSoGCSPAYLOAD = body;
      let path = '/serviceHopDong/getDDoSoGCS';
      let url = 'https://cmis-api.evnspc.vn/serviceHopDong/getDDoSoGCS';
      return _this9.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  getSoGCSByListSo(maso) {
    var _this0 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        TEN_DANH_MUC: "D_SOGCS",
        MA_DVIQLY: _this0.user.SUBDIVISIONID,
        PARAM: [maso]
      };
      let path = '/serviceDanhMuc/getSoGCSByListSo';
      let url = 'https://cmis-api.evnspc.vn/serviceDanhMuc/getSoGCSByListSo';
      return _this0.cmis4SV.cmis4Request(url, path, body).then(v => {
        console.log(v);
        return v;
      });
    })();
  }
  get_gcslichgcsByMaSogcs(maSo) {
    var _this1 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        "MA_SOGCS": maSo,
        "MA_DVIQLY": _this1.user.SUBDIVISIONID,
        "THANG": `${_this1.startDay.getMonth() + 1}`,
        "NAM": `${_this1.startDay.getFullYear()}`,
        "KY": "0"
      };
      let path = '/serviceChiSoKHang/get_gcslichgcsByMaSogcs';
      let url = 'https://cmis-api.evnspc.vn/serviceChiSoKHang/get_gcslichgcsByMaSogcs';
      return _this1.cmis4SV.cmis4Request(url, path, body).then(v => {
        return v[v.length - 1];
      });
    })();
  }
  getClip(evt) {
    localStorage.removeItem('maSoGSCs');
    this.maSoGSCs = [];
    for (let i = 0; i < evt.length; i++) {
      const pk = `${evt[i][0]}`;
      this.maSoGSCs.push({
        maSo: pk.toUpperCase(),
        status: false,
        SL: 0
      });
    }
    localStorage.setItem('maSoGSCs', JSON.stringify(this.maSoGSCs));
    console.log(this.maSoGSCs);
  }
  getMonth(evt) {
    console.log(evt);
    this.startDay = moment__WEBPACK_IMPORTED_MODULE_1___default()(evt, 'MM/YYYY').toDate();
  }
  checkPer(level, api = 'dev') {
    return window.max ? window.max.opt[api] > level ? true : false : false;
  }
  ondragover() {
    document.getElementById("dropZone").setAttribute("drop-active", "true");
  }
  static {
    this.ɵfac = function ChiSoDinhKyComponent_Factory(t) {
      return new (t || ChiSoDinhKyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_3__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_5__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_chi_so_service__WEBPACK_IMPORTED_MODULE_6__.ChiSoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_share_services_firestore_service__WEBPACK_IMPORTED_MODULE_7__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_kinh_doanh_ghi_chi_so_ghi_chi_so_service__WEBPACK_IMPORTED_MODULE_8__.GhiChiSoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_9__.IndexeddbServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: ChiSoDinhKyComponent,
      selectors: [["app-chi-so-dinh-ky"]],
      decls: 29,
      vars: 8,
      consts: [[1, "container", "py-5"], [3, "label", "startDay", "month"], [3, "label", "excel"], [1, "row"], [1, "col", "text-center"], [3, "ngModel", "ngModelChange"], ["color", "accent", "mat-raised-button", "", 3, "click"], ["color", "primary", "mat-raised-button", "", 3, "click"], ["color", "primary", "mat-raised-button", "", "matTooltip", "Xu\u1EA5t excel DS SL th\u1EA5p", 3, "click"], ["class", "row", 4, "ngIf"], [3, "label", "files", "ondragover"], [1, "btn"], ["mat-raised-button", "", 3, "click"], [4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "T\u1EC9 l\u1EC7 ki\u1EC3m tra", 3, "ngModel", "ngModelChange"], ["color", "primary", "mat-raised-button", "", "matTooltip", "Xu\u1EA5t excel DS SL b\u1EA5t th\u01B0\u1EDDng", 3, "click"], [1, "text-primary", 3, "ngClass"]],
      template: function ChiSoDinhKyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "app-month-year", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("month", function ChiSoDinhKyComponent_Template_app_month_year_month_1_listener($event) {
            return ctx.getMonth($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "app-parse-excel-clipboard", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("excel", function ChiSoDinhKyComponent_Template_app_parse_excel_clipboard_excel_2_listener($event) {
            return ctx.getClip($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "mat-slide-toggle", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ChiSoDinhKyComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) {
            return ctx.isMerge = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Gom th\u00E0nh 1 file");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChiSoDinhKyComponent_Template_button_click_7_listener() {
            return ctx.loop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "L\u1EA5y d\u1EEF li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChiSoDinhKyComponent_Template_button_click_9_listener() {
            return ctx.export();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Xu\u1EA5t excel");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChiSoDinhKyComponent_Template_button_click_11_listener() {
            return ctx.importAPI();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Giao s\u1ED5 ghi");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 3)(14, "div", 4)(15, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChiSoDinhKyComponent_Template_button_click_15_listener() {
            return ctx.loopSL();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "L\u1ECDc SL <5 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChiSoDinhKyComponent_Template_button_click_17_listener() {
            return ctx.exportSL();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "download");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, ChiSoDinhKyComponent_div_20_Template, 11, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 3)(22, "app-drop-files", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("files", function ChiSoDinhKyComponent_Template_app_drop_files_files_22_listener($event) {
            return ctx.onDropFile($event);
          })("ondragover", function ChiSoDinhKyComponent_Template_app_drop_files_ondragover_22_listener() {
            return ctx.ondragover();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 11)(24, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChiSoDinhKyComponent_Template_button_click_24_listener() {
            return ctx.kiemTraBatThuong();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Ki\u1EC3m tra b\u1EA5t th\u01B0\u1EDDng");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, ChiSoDinhKyComponent_mat_list_28_Template, 5, 5, "mat-list", 13);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "K\u1EF3 ghi ch\u1EC9 s\u1ED1")("startDay", ctx.startDay);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Copy m\u00E3 s\u1ED5 d\u00E1n v\u00F4 \u0111\u00E2y");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.isMerge);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.checkPer(1));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx.dataGhiRot.length, " C\u00F4ng t\u01A1 kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.maSoGSCs);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListItem, _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_10__.MonthYearComponent, _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_11__.ParseExcelClipboardComponent, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_12__.DropFilesComponent]
    });
  }
}

/***/ }),

/***/ 44483:
/*!**************************************************************!*\
  !*** ./src/app/cmis4/chot-doi-gia/chot-doi-gia.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChotDoiGiaComponent: () => (/* binding */ ChotDoiGiaComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 70274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _chi_so_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chi-so.service */ 87535);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/import-excel/parse-excel-clipboard/parse-excel-clipboard.component */ 8390);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);















function ChotDoiGiaComponent_h5_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" S\u1ED1 l\u01B0\u1EE3ng d\u00F2ng: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r0.dataChiSo.length), "");
  }
}
function ChotDoiGiaComponent_mat_list_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list")(1, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" S\u1ED5 ", item_r2.maSo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r2.SL > 0 ? ": " + item_r2.SL + " d\u00F2ng" : "", " ");
  }
}
class ChotDoiGiaComponent {
  constructor(chiSoSV, excelSV, authSV, cmis4SV) {
    this.chiSoSV = chiSoSV;
    this.excelSV = excelSV;
    this.authSV = authSV;
    this.cmis4SV = cmis4SV;
    this.startDay = moment__WEBPACK_IMPORTED_MODULE_1___default()('10/05/2025', 'DD/MM/YYYY').toDate() || moment__WEBPACK_IMPORTED_MODULE_1___default()().toDate();
    this.maSoGSCs = [];
    this.exportData = {};
    this.userCmis = JSON.parse(localStorage.getItem('USERCMIS'));
    this.dataChiSo = localStorage.getItem('dataChiSo') ? JSON.parse(localStorage.getItem('dataChiSo')) : [];
    this.error = [];
    this.NGAY_CKY = '';
    this.NgayDoiGia = '10/05/2025';
    this.testMS = `050623D14`;
    this.dataChuaCCS = [];
  }
  ngOnInit() {
    this.NGAY_CKY = moment__WEBPACK_IMPORTED_MODULE_1___default()('10/05/2025', 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
    console.log(' this.NGAY_CKY', this.NGAY_CKY);
  }
  phucTra() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const maSo = _this.maSoGSCs.map(el => el.maSo);
      const lan1 = yield _this.cmis4SV.get_CHISO_PHUCTRA_forNhap(maSo);
      lan1.forEach(el => {
        el.NGAY_PTRA_DATE = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month').add(1, 'day').toISOString();
        el.CHISO_PTRA = el.CHISO_MOI;
        el.CHENH_LECH = "0.00";
        el.NGAY_PTRA = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month').add(2, 'days').format('DD/MM/YYYY');
        el.NGUYEN_NHAN = '';
        el.NGUOI_TAO = _this.cmis4SV.getRandomNV();
        el.MA_CNANG = "517";
      });
      _this.cmis4SV.InsertGCS_CHISO_PTRA(lan1).then(res => {
        console.log(res);
      }).catch(err => console.log(err));
    })();
  }
  loop() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this2.maSoGSCs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.concatMap)(el => _this2.layDuLieu(el.maSo))).subscribe();
    })();
  }
  loopGhiDe() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this3.maSoGSCs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.concatMap)(el => _this3.ghiDeDuLieu(el.maSo))).subscribe();
    })();
  }
  loopRotCS() {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this4.maSoGSCs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.concatMap)(el => _this4.getChiSoRot(el.maSo))).subscribe();
    })();
  }
  getChiSoRot(maSo) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_SOGCS": maSo,
        "KY": +"1",
        "THANG": +`${_this5.startDay.getMonth() + 1}`,
        "NAM": +`${_this5.startDay.getFullYear()}`,
        "MA_DVIQLY": _this5.userCmis.SUBDIVISIONID
      };
      const get_Lich_SoGCS = yield _this5.chiSoSV.get_Lich_SoGCS(body);
      const body2 = {
        "THANG_HT": +`${_this5.startDay.getMonth() + 1}`,
        "NAM_HT": +`${_this5.startDay.getFullYear()}`,
        "NGAY_DKY": moment__WEBPACK_IMPORTED_MODULE_1___default()(get_Lich_SoGCS.lstLichgcs[0].ngayDky).format("DD/MM/YYYY"),
        "NGAY_CKY": _this5.NGAY_CKY
      };
      const getDDoSoGCS = yield _this5.chiSoSV.getDDoSoGCS(Object.assign(body, body2));
      const body3 = {
        KY: body.KY,
        THANG: body.THANG,
        NAM: body.NAM,
        MA_SOGCS: body.MA_SOGCS,
        IS_CHUANHAPCSO: true,
        MA_DVIQLY: body.MA_DVIQLY,
        NGAY_CKY: moment__WEBPACK_IMPORTED_MODULE_1___default()(_this5.NGAY_CKY, "DD/MM/YYYY").add(1, 'days').format("DD/MM/YYYY"),
        LST_DDO: getDDoSoGCS
      };
      const getChiso_DGia = yield _this5.chiSoSV.getChiso_DGia(body3);
      console.log(getChiso_DGia);
      _this5.dataChuaCCS.concat(getChiso_DGia);
    })();
  }
  ghiDeDuLieu(maSo) {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_SOGCS": maSo,
        "KY": +"1",
        "THANG": +`${_this6.startDay.getMonth() + 1}`,
        "NAM": +`${_this6.startDay.getFullYear()}`,
        "MA_DVIQLY": _this6.userCmis.SUBDIVISIONID
      };
      const get_Lich_SoGCS = yield _this6.chiSoSV.get_Lich_SoGCS(body);
      const body2 = {
        "THANG_HT": +`${_this6.startDay.getMonth() + 1}`,
        "NAM_HT": +`${_this6.startDay.getFullYear()}`,
        "NGAY_DKY": moment__WEBPACK_IMPORTED_MODULE_1___default()(get_Lich_SoGCS.lstLichgcs[0].ngayDky).format("DD/MM/YYYY"),
        "NGAY_CKY": _this6.NGAY_CKY
      };
      const getDDoSoGCS = yield _this6.chiSoSV.getDDoSoGCS(Object.assign(body, body2));
      const body3 = {
        KY: body.KY,
        THANG: body.THANG,
        NAM: body.NAM,
        MA_SOGCS: body.MA_SOGCS,
        IS_CHUANHAPCSO: true,
        MA_DVIQLY: body.MA_DVIQLY,
        NGAY_CKY: moment__WEBPACK_IMPORTED_MODULE_1___default()(_this6.NGAY_CKY, "DD/MM/YYYY").add(1, 'days').format("DD/MM/YYYY"),
        LST_DDO: getDDoSoGCS
      };
      const getChiso_DGia = yield _this6.chiSoSV.getChiso_DGia(body3);
      console.log(getChiso_DGia);
      const LST_CHISO = [];
      const change = [];
      if (_this6.dataChiSo.length == 0) {
        return alert('Chưa có dữ liệu ước');
      }
      for (let i = 0; i < getChiso_DGia.length; i++) {
        const el = getChiso_DGia[i];
        let cs;
        for (let ixls = 0; ixls < _this6.dataChiSo.length; ixls++) {
          const noiSuy = _this6.dataChiSo[ixls];
          if (noiSuy.MA_KHANG == el.MA_KHANG && el.BCS == noiSuy.BCS) {
            cs = noiSuy;
            break;
          } else {
            cs = null;
          }
        }
        if (cs == null || el.LOAICHISO !== 'CCS') {
          el['DIEN_GIAI'] = "Được sửa đổi";
          el['STT_GOC'] = el.STT;
          el['DMLTYPE'] = "";
          el['TEN_CAPDA'] = el.MA_CAPDA == "1" ? ["Dưới 380V"] : ["Từ 380V đến dưới 6kV"];
          el['NGAY_CHOT'] = el.NGAY_DKY;
          el['DMLTYPE_CS'] = "";
          LST_CHISO.push(el);
        } else if (el.LOAICHISO == 'CCS') {
          el['DIEN_GIAI'] = "Được sửa đổi";
          el['STT_GOC'] = el.STT;
          el['DMLTYPE'] = "Update";
          el['TEN_CAPDA'] = el.MA_CAPDA == "1" ? ["Dưới 380V"] : ["Từ 380V đến dưới 6kV"];
          el['CHISO_MOI'] = `${cs.UOCCHISOCHOT}`;
          el['NGAY_CHOT'] = el.NGAY_DKY;
          el['NGAY_CKY'] = _this6.NGAY_CKY;
          el['SAN_LUONG'] = `${+cs.UOCCHISOCHOT - +el.CHISO_CU}`;
          el['TONG'] = `${+cs.UOCCHISOCHOT - +el.CHISO_CU}`;
          el['IS_SELECTED'] = "0";
          el['SLUONG_THAO'] = "0";
          el['MA_DVICTREN'] = "PK";
          el['IS_SELECTED'] = "0";
          el['FLAG'] = "X";
          el['MA_TTCTO'] = '';
          el['MA_CNANG'] = "80";
          el['NGUOI_SUA'] = _this6.userCmis.USERNAME;
          el['NGUOI_TAO'] = _this6.userCmis.USERNAME;
          LST_CHISO.push(el);
          change.push(el.MA_KHANG);
        }
      }
      const bodyNhapCS = {
        LST_CHISO: LST_CHISO,
        LST_LICH: [get_Lich_SoGCS.lstLichgcs[0]],
        LST_CSUAT_DDO: []
      };
      console.log('change', change);
      console.log(bodyNhapCS);
      _this6.maSoGSCs.find(el2 => el2.maSo == maSo).SL = change.length;
    })();
  }
  layDuLieu(maSo) {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_SOGCS": maSo,
        "KY": +"1",
        "THANG": +`${_this7.startDay.getMonth() + 1}`,
        "NAM": +`${_this7.startDay.getFullYear()}`,
        "MA_DVIQLY": _this7.userCmis.SUBDIVISIONID
      };
      const get_Lich_SoGCS = yield _this7.chiSoSV.get_Lich_SoGCS(body);
      const body2 = {
        "THANG_HT": +`${_this7.startDay.getMonth() + 1}`,
        "NAM_HT": +`${_this7.startDay.getFullYear()}`,
        "NGAY_DKY": moment__WEBPACK_IMPORTED_MODULE_1___default()(get_Lich_SoGCS.lstLichgcs[0].ngayDky).format("DD/MM/YYYY"),
        "NGAY_CKY": _this7.NGAY_CKY
      };
      const getDDoSoGCS = yield _this7.chiSoSV.getDDoSoGCS(Object.assign(body, body2));
      console.log(getDDoSoGCS);
      const body3 = {
        KY: body.KY,
        THANG: body.THANG,
        IS_CHUANHAPCSO: true,
        NAM: body.NAM,
        MA_SOGCS: body.MA_SOGCS,
        MA_DVIQLY: body.MA_DVIQLY,
        NGAY_CKY: moment__WEBPACK_IMPORTED_MODULE_1___default()(_this7.NGAY_CKY, "DD/MM/YYYY").add(1, 'days').format("DD/MM/YYYY"),
        LST_DDO: getDDoSoGCS
      };
      const getChiso_DGia = yield _this7.chiSoSV.getChiso_DGia(body3);
      console.log(getChiso_DGia);
      const LST_CHISO = [];
      const change = [];
      if (_this7.dataChiSo.length == 0) {
        return alert('Chưa có dữ liệu ước');
      }
      for (let i = 0; i < getChiso_DGia.length; i++) {
        const el = getChiso_DGia[i];
        let cs;
        for (let ixls = 0; ixls < _this7.dataChiSo.length; ixls++) {
          const noiSuy = _this7.dataChiSo[ixls];
          if (noiSuy.MA_KHANG == el.MA_KHANG && el.BCS == noiSuy.BCS) {
            cs = noiSuy;
            break;
          } else {
            cs = null;
          }
        }
        if (el.LOAICHISO == 'CCS' || cs == null || 'SAN_LUONG' in el || parseInt(el.CHISO_CU) > parseInt(cs.UOCCHISOCHOT)) {
          console.log('SAN_LUONG' in el, el);
          el['DIEN_GIAI'] = "Được sửa đổi";
          el['STT_GOC'] = el.STT;
          el['DMLTYPE'] = "";
          el['TEN_CAPDA'] = el.MA_CAPDA == "1" ? ["Dưới 380V"] : ["Từ 380V đến dưới 6kV"];
          el['NGAY_CHOT'] = el.NGAY_DKY;
          el['TONG'] = el.SAN_LUONG;
          LST_CHISO.push(el);
        } else if ((el.LOAICHISO == 'DDK' || el.LOAICHISO == 'DUP') && cs != null) {
          el['DIEN_GIAI'] = "Được sửa đổi";
          el['STT_GOC'] = el.STT;
          el['DMLTYPE'] = "Insert";
          el['TEN_CAPDA'] = el.MA_CAPDA == "1" ? ["Dưới 380V"] : ["Từ 380V đến dưới 6kV"];
          el['CHISO_MOI'] = `${cs.UOCCHISOCHOT}`;
          el['NGAY_CHOT'] = el.NGAY_DKY;
          el['NGAY_CKY'] = _this7.NGAY_CKY;
          el['SAN_LUONG'] = `${+cs.UOCCHISOCHOT - +el.CHISO_CU}`;
          el['TONG'] = `${+cs.UOCCHISOCHOT - +el.CHISO_CU}`;
          el['IS_SELECTED'] = "0";
          el['SLUONG_THAO'] = "0";
          el['MA_DVICTREN'] = "PK";
          el['IS_SELECTED'] = "0";
          el['MA_TTCTO'] = '';
          el['MA_CNANG'] = "80";
          el['NGUOI_SUA'] = _this7.userCmis.USERNAME;
          el['NGUOI_TAO'] = _this7.userCmis.USERNAME;
          el['DMLTYPE_CS'] = "";
          LST_CHISO.push(el);
          change.push(el.MA_KHANG);
        }
      }
      const bodyNhapCS = {
        LST_CHISO: LST_CHISO,
        LST_LICH: [get_Lich_SoGCS.lstLichgcs[0]],
        LST_CSUAT_DDO: []
      };
      console.log('change', change);
      console.log(bodyNhapCS);
      _this7.maSoGSCs.find(el2 => el2.maSo == maSo).SL = change.length;
    })();
  }
  getClip(evt) {
    this.maSoGSCs = [];
    for (let i = 0; i < evt.length; i++) {
      const pk = `${evt[i][0]}`;
      this.maSoGSCs.push({
        maSo: pk.toUpperCase(),
        status: false,
        SL: 0
      });
    }
    console.log(this.maSoGSCs);
  }
  getMonth(evt) {
    console.log(evt);
    this.startDay = moment__WEBPACK_IMPORTED_MODULE_1___default()(evt, 'MM/YYYY').toDate();
  }
  getDay(evt) {
    console.log(evt);
    this.NGAY_CKY = moment__WEBPACK_IMPORTED_MODULE_1___default()(evt, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
  }
  export() {
    const body = {
      NhapCS: this.dataChiSo,
      KetQua: this.maSoGSCs
    };
    this.excelSV.exportMultiSheets(body, moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD') + '-GhiChiSo');
  }
  exportRot() {
    const body = {
      ThieuCS: this.dataChuaCCS
    };
    this.excelSV.exportMultiSheets(body, moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD') + '-ChiSoRot');
  }
  onDropFile(files) {
    localStorage.removeItem('dataChiSo');
    console.log(`onDropFile()`);
    this.excelSV.fileToJsonArray(files[0]).then(data => {
      console.log(data);
      this.dataChiSo = data;
      localStorage.setItem('dataChiSo', JSON.stringify(this.dataChiSo));
    });
  }
  xuatFileMau() {
    this.excelSV.export([{
      MA_SOGCS: '051229D10',
      MA_KHANG: 'PK05000016655',
      BCS: 'KT',
      UOCCHISOCHOT: 600
    }]);
  }
  xoaDuLieuTam() {
    localStorage.removeItem('dataChiSo');
    localStorage.removeItem('DSMaSO');
    this.authSV.reload();
  }
  static {
    this.ɵfac = function ChotDoiGiaComponent_Factory(t) {
      return new (t || ChotDoiGiaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_chi_so_service__WEBPACK_IMPORTED_MODULE_2__.ChiSoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_5__.Cmis4Service));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ChotDoiGiaComponent,
      selectors: [["app-chot-doi-gia"]],
      decls: 29,
      vars: 5,
      consts: [[1, "container", "py-5"], ["matTooltip", "Click t\u1EA3i file m\u1EABu", 1, "text-primary", 3, "click"], [3, "label", "files"], [3, "label", "excel"], [1, "row", "text-center"], ["class", "text-primary", 4, "ngIf"], [1, "row"], [1, "col", "text-center"], ["color", "accent", "mat-raised-button", "", 3, "click"], ["color", "primary", "mat-raised-button", "", 3, "click"], [4, "ngFor", "ngForOf"], [1, "text-primary"]],
      template: function ChotDoiGiaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChotDoiGiaComponent_Template_h4_click_2_listener() {
            return ctx.xuatFileMau();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "hr")(5, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "app-drop-files", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("files", function ChotDoiGiaComponent_Template_app_drop_files_files_6_listener($event) {
            return ctx.onDropFile($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-parse-excel-clipboard", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("excel", function ChotDoiGiaComponent_Template_app_parse_excel_clipboard_excel_7_listener($event) {
            return ctx.getClip($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ChotDoiGiaComponent_h5_9_Template, 3, 3, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChotDoiGiaComponent_Template_button_click_12_listener() {
            return ctx.loopGhiDe();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Ghi \u0111\u00E8 ch\u1EC9 s\u1ED1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChotDoiGiaComponent_Template_button_click_14_listener() {
            return ctx.loop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Nh\u1EADp ch\u1EC9 s\u1ED1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChotDoiGiaComponent_Template_button_click_16_listener() {
            return ctx.phucTra();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Nh\u1EADp ch\u1EC9 s\u1ED1 ph\u00FAc tra");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChotDoiGiaComponent_Template_button_click_18_listener() {
            return ctx.loopRotCS();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "L\u1EA5y d\u1EEF li\u1EC7u ch\u1ED1t");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChotDoiGiaComponent_Template_button_click_20_listener() {
            return ctx.export();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Xu\u1EA5t excel");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChotDoiGiaComponent_Template_button_click_22_listener() {
            return ctx.exportRot();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Xu\u1EA5t excel r\u1EDBt CS");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChotDoiGiaComponent_Template_button_click_24_listener() {
            return ctx.xoaDuLieuTam();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "X\u00F3a d\u1EEF li\u1EC7u t\u1EA1m");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChotDoiGiaComponent_Template_button_click_26_listener() {
            return ctx.xuatFileMau();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "File m\u1EABu");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, ChotDoiGiaComponent_mat_list_28_Template, 5, 2, "mat-list", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Ng\u00E0y \u0111\u1ED5i gi\u00E1: ", ctx.NgayDoiGia, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Th\u1EA3 file v\u00F4 \u0111\u00E2y r\u1ED3i l\u1ECDc s\u1ED5 c\u1EA7n th\u1EF1c hi\u1EC7n d\u00E1n v\u00F4 clip");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Copy m\u00E3 s\u1ED5 c\u1EA7n \u0111\u1EA9y v\u00F4 CMIS d\u00E1n v\u00F4 \u0111\u00E2y r\u1ED3i nh\u1EADp CSC");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dataChiSo.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.maSoGSCs);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem, _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_6__.ParseExcelClipboardComponent, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_7__.DropFilesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe]
    });
  }
}

/***/ }),

/***/ 77811:
/*!****************************************************************!*\
  !*** ./src/app/cmis4/cmis-tong-hop/cmis-tong-hop.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CmisTongHopComponent: () => (/* binding */ CmisTongHopComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/loading.service */ 4974);
/* harmony import */ var src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/indexeddbV2.service */ 4045);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 88834);











class CmisTongHopComponent {
  constructor(cmis4SV, loadSV, idbSV, plus, excelSV) {
    this.cmis4SV = cmis4SV;
    this.loadSV = loadSV;
    this.idbSV = idbSV;
    this.plus = plus;
    this.excelSV = excelSV;
    this.db = null;
    this.title = 'Tổng hợp CMIS';
    this.dbName = 'cmis4';
    this.apiLienHe = 'cmis4-lien-he';
    this.apitcd = 'cmis4-tcd';
    this.item = null;
    this.items = [];
    this.allItems = [];
    this.isTCD = true;
    this.itemsTCD = [];
    this.itemsLH = [];
  }
  ngOnInit() {
    this.idbSV.IDB_InitDB(this.dbName).subscribe(db => {
      this.db = db;
      console.log(db);
    });
  }
  onExportTCD() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.idbSV.IDB_DB_GetAll(_this.db, _this.apiLienHe).subscribe(res => {
        _this.itemsLH = res;
        debugger;
        _this.idbSV.IDB_DB_GetAll(_this.db, _this.apitcd).subscribe(res => {
          _this.itemsTCD = res;
          debugger;
          let data = _this.plus.joinArrByKey("MA_KHANG", _this.itemsTCD, _this.itemsLH);
          _this.excelSV.export(data, 'TCD-' + moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));
        });
      });
    })();
  }
  onExportLH() {
    this.loadSV.load();
    this.idbSV.IDB_DB_GetAll(this.db, this.apiLienHe)?.subscribe(res => {
      debugger;
      this.excelSV.export(res);
      this.loadSV.loaded();
    });
  }
  onLayLienHe() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loadSV.load();
      let url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/InBCThop';
      let body = {
        "BIEU": "29",
        "MA_DVIQLY": "PK0500",
        "TEN_TCHI": "**ALL**",
        "PLOC": "**ALL**",
        "HLDEN_NGAY": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY'),
        "LOAI_HDONG": "**ALL**",
        "LOAI_KHANG": "-1"
      };
      _this2.cmis4SV.cmis4Request(url, '', body).then(res => {
        res.forEach((item, index) => {
          item._id = item.ID_LIENHE;
          item.status = 1;
          item.dateModify = Date.now() + index;
        });
        _this2.idbSV.IDB_DB_AddPure(_this2.db, _this2.apiLienHe, res, Date.now()).then(res => {
          _this2.loadSV.loaded();
        });
      });
    })();
  }
  onLayTramCD() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loadSV.load();
      let url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/InBCThop';
      let body = {
        "pma_dviqly": "PK0500",
        "pMaTo": "ALL",
        "BIEU": "26**",
        "pTinHDenNGay": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY')
      };
      _this3.cmis4SV.cmis4Request(url, '', body).then(res => {
        console.log(res);
        res.map((item, index) => {
          item._id = item.MA_DDO.slice(0, 13);
          item.MA_KHANG = item.MA_DDO.slice(0, 13);
          item.status = 1;
          item.dateModify = Date.now() + index;
        });
        _this3.idbSV.IDB_DB_AddPure(_this3.db, _this3.apitcd, res, Date.now()).then(res => {
          _this3.loadSV.loaded();
        });
      });
    })();
  }
  static {
    this.ɵfac = function CmisTongHopComponent_Factory(t) {
      return new (t || CmisTongHopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_2__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_share_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_4__.IndexeddbServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_5__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_6__.ExcelService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: CmisTongHopComponent,
      selectors: [["app-cmis-tong-hop"]],
      decls: 21,
      vars: 1,
      consts: [[1, "container"], [1, "row"], [1, "py-3", 3, "ngModel", "ngModelChange"], [1, "btn"], ["mat-raised-button", "", 3, "click"], [1, "material-icons"]],
      template: function CmisTongHopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-slide-toggle", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CmisTongHopComponent_Template_mat_slide_toggle_ngModelChange_2_listener($event) {
            return ctx.isTCD = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "TCD");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmisTongHopComponent_Template_button_click_5_listener() {
            return ctx.onLayLienHe();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " account_circle ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Li\u00EAn h\u1EC7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmisTongHopComponent_Template_button_click_9_listener() {
            return ctx.onLayTramCD();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " account_circle ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Tr\u1EA1m CD");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmisTongHopComponent_Template_button_click_13_listener() {
            return ctx.onExportTCD();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " account_circle ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Xu\u1EA5t Excel TCD");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmisTongHopComponent_Template_button_click_17_listener() {
            return ctx.onExportLH();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " account_circle ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Xu\u1EA5t Excel Li\u00EAn h\u1EC7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.isTCD);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton]
    });
  }
}

/***/ }),

/***/ 99075:
/*!********************************************************!*\
  !*** ./src/app/cmis4/cmis-tool/cmis-tool.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CmisToolComponent: () => (/* binding */ CmisToolComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70274);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 67376);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);
















function CmisToolComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r0.html, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
  }
}
class CmisToolComponent {
  constructor(http, cmis4SV, plus, excelSV) {
    this.http = http;
    this.cmis4SV = cmis4SV;
    this.plus = plus;
    this.excelSV = excelSV;
    this.url = localStorage.getItem('CMIS4-TOOLS-URL');
    this.body = null;
    this.html = '';
    this.items = [];
    this.gomFile = false;
  }
  ngOnInit() {}
  loopRequest() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.dataInXls).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concatMap)(el => this.request(el))).subscribe();
  }
  convert() {
    let data = JSON.parse(this.body);
    data['name'] = '=C2&TEXT(B2;"00")';
    debugger;
    if (Array.isArray(data)) {
      this.dataInXls = data;
    } else {
      this.dataInXls = [data];
    }
    this.excelSV.export(this.dataInXls, 'tools');
  }
  request(body) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(body)) {
        body = JSON.parse(body);
      }
      let name = body.name || 'cmis4';
      delete body.name;
      console.log(body, name, _this.url);
      localStorage.setItem('CMIS4-TOOLS-URL', _this.url);
      return _this.cmis4SV.cmis4Request(_this.url, '', body).then(res => {
        if (_this.gomFile) {
          res.forEach(item => {
            item.name = name;
          });
          _this.items = _this.items.concat(res);
          return;
        }
        if (Array.isArray(res) && res.length > 0) {
          _this.excelSV.export(res, name);
        } else {
          _this.excelSV.exportMultiSheets(res, name);
        }
      });
    })();
  }
  exportMau() {
    let body = {
      url: '',
      body: '',
      name: ''
    };
    this.excelSV.export([body], 'mau');
  }
  export() {
    this.excelSV.export(this.items, 'cmis4');
  }
  onDropFile(files) {
    console.log(`onDropFile()`);
    for (let i = 0; i < files.length; i++) {
      if (files[i].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.excelSV.fileToJsonArray(files[i]).then(obj => {
          this.dataInXls = obj;
        });
      } else {
        this.plus.alertError(`File không hợp lệ`);
      }
    }
  }
  ondragover() {
    document.getElementById("dropZone").setAttribute("drop-active", "true");
  }
  static {
    this.ɵfac = function CmisToolComponent_Factory(t) {
      return new (t || CmisToolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_2__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CmisToolComponent,
      selectors: [["app-cmis-tool"]],
      decls: 20,
      vars: 5,
      consts: [[1, "container"], [3, "label", "files", "ondragover"], [1, "row"], ["matInput", "", "placeholder", "URL", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Body", 3, "ngModel", "ngModelChange"], ["color", "primary", "mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primay", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [3, "ngModel", "ngModelChange"], ["class", "row", 3, "innerHTML", 4, "ngIf"], [1, "row", 3, "innerHTML"]],
      template: function CmisToolComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "app-drop-files", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("files", function CmisToolComponent_Template_app_drop_files_files_1_listener($event) {
            return ctx.onDropFile($event);
          })("ondragover", function CmisToolComponent_Template_app_drop_files_ondragover_1_listener() {
            return ctx.ondragover();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "mat-form-field")(4, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CmisToolComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.url = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field")(6, "textarea", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CmisToolComponent_Template_textarea_ngModelChange_6_listener($event) {
            return ctx.body = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CmisToolComponent_Template_button_click_7_listener() {
            return ctx.convert();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "download");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CmisToolComponent_Template_button_click_10_listener() {
            return ctx.request(ctx.body);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "OK");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CmisToolComponent_Template_button_click_12_listener() {
            return ctx.loopRequest();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Loop");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-slide-toggle", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CmisToolComponent_Template_mat_slide_toggle_ngModelChange_14_listener($event) {
            return ctx.gomFile = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Gom l\u1EA1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CmisToolComponent_Template_button_click_16_listener() {
            return ctx.export();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "download");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, CmisToolComponent_div_19_Template, 1, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", "Nh\u1EDB th\u00EAm c\u1ED9t name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.url);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.body);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.gomFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.html.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_5__.DropFilesComponent]
    });
  }
}

/***/ }),

/***/ 21492:
/*!******************************************!*\
  !*** ./src/app/cmis4/cmis4.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cmis4Component: () => (/* binding */ Cmis4Component)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var src_assets_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/nav */ 11015);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cmis4.service */ 61836);
/* harmony import */ var _share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/services/authV2.service */ 50532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 36471);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 11161);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71997);
















function Cmis4Component_mat_expansion_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u0110\u0102NG NH\u1EACP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field", 9)(5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function Cmis4Component_mat_expansion_panel_1_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.userName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 9)(7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function Cmis4Component_mat_expansion_panel_1_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.login());
    })("ngModelChange", function Cmis4Component_mat_expansion_panel_1_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Cmis4Component_mat_expansion_panel_1_Template_span_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.showpass = !ctx_r7.showpass);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 13)(12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Cmis4Component_mat_expansion_panel_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u0110\u0103ng nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r0.showpass ? "text" : "password")("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.showpass ? "visibility" : "visibility_off");
  }
}
function Cmis4Component_thead_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "thead")(1, "tr")(2, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u0110\u01A1n v\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Ph\u00F2ng ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "H\u1ECD t\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u0110i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function Cmis4Component_div_20_mat_chip_listbox_1_mat_chip_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/cmis4/", item_r10.api, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.label);
  }
}
function Cmis4Component_div_20_mat_chip_listbox_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip-listbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Cmis4Component_div_20_mat_chip_listbox_1_mat_chip_option_2_Template, 2, 2, "mat-chip-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.checkPer(item_r10.api, 1) && item_r10.label.length > 0);
  }
}
function Cmis4Component_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Cmis4Component_div_20_mat_chip_listbox_1_Template, 3, 1, "mat-chip-listbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.nav);
  }
}
class Cmis4Component {
  constructor(cmis4SV, authSV, Cmis4SV) {
    this.cmis4SV = cmis4SV;
    this.authSV = authSV;
    this.Cmis4SV = Cmis4SV;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
    this.nav = src_assets_nav__WEBPACK_IMPORTED_MODULE_1__.NAV.filter(e => e.dbName == 'cmis4')[0].sub.slice(1);
    this.userCMIS = null;
    this.userName = localStorage.UCMIS || '';
    this.password = localStorage.PCMIS || '';
    this.showpass = false;
  }
  ngOnInit() {
    this.userCMIS = this.Cmis4SV.getUser();
    console.log(this.userCMIS);
    this.login();
    setTimeout(() => {
      this.login();
    }, 60 * 1000 * 5);
  }
  login() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.setItem('UCMIS', _this.userName);
      localStorage.setItem('PCMIS', _this.password);
      if (_this.userName == '' || _this.password == '') {
        return;
      }
      yield _this.cmis4SV.login(_this.userName, _this.password).then(userCMis => {
        _this.userCMIS = _this.cmis4SV.user;
        _this.authSV.updateTokenCMIS(_this.authSV.user.getValue()._id, userCMis);
      });
    })();
  }
  logout() {
    localStorage.removeItem('USERCMIS');
    localStorage.removeItem('PCMIS');
    this.authSV.reload();
  }
  checkPer(api, level = 1) {
    return this.authSV.checkPer(api, level);
  }
  static {
    this.ɵfac = function Cmis4Component_Factory(t) {
      return new (t || Cmis4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_3__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_3__.Cmis4Service));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: Cmis4Component,
      selectors: [["app-cmis4"]],
      decls: 21,
      vars: 8,
      consts: [[1, "container"], [4, "ngIf"], [1, "table-responsive"], [1, "table"], [1, ""], ["scope", "row"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["class", "menu", 4, "ngIf"], ["mat-raised-button", "", "color", "warn"], ["appearance", "outline"], ["matInput", "", "placeholder", "T\u00E0i kho\u1EA3n CMIS", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "M\u1EADt kh\u1EA9u CMIS", 3, "type", "ngModel", "keyup.enter", "ngModelChange"], ["matSuffix", "", 2, "padding-right", "1rem", 3, "click"], [1, "text-center"], ["mat-raised-button", "", 3, "click"], ["scope", "col"], [1, "menu"], [4, "ngFor", "ngForOf"], ["selected", "", 3, "routerLink", 4, "ngIf"], ["selected", "", 3, "routerLink"]],
      template: function Cmis4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Cmis4Component_mat_expansion_panel_1_Template, 14, 4, "mat-expansion-panel", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "table", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, Cmis4Component_thead_4_Template, 12, 0, "thead", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "tbody")(6, "tr", 4)(7, "td", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td")(18, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Cmis4Component_Template_button_click_18_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\u0110\u0103ng xu\u1EA5t");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, Cmis4Component_div_20_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.userCMIS);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userCMIS == null ? null : ctx.userCMIS.DEPT);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userCMIS == null ? null : ctx.userCMIS.SUBDIVISIONNAME);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userCMIS == null ? null : ctx.userCMIS.FULLNAME);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userCMIS == null ? null : ctx.userCMIS.MOBILE);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userCMIS == null ? null : ctx.userCMIS.ACCESS_TOKEN.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userCMIS);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipOption, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelHeader, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider]
    });
  }
}

/***/ }),

/***/ 53555:
/*!***************************************!*\
  !*** ./src/app/cmis4/cmis4.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cmis4Module: () => (/* binding */ Cmis4Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _cmis4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmis4.component */ 21492);
/* harmony import */ var _cmis4_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmis4.routing */ 15489);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ 64039);
/* harmony import */ var _bao_cap_cap_dien_bao_cap_cap_dien_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cap-cap-dien/bao-cap-cap-dien.component */ 14235);
/* harmony import */ var _tra_cuu_tra_cuu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tra-cuu/tra-cuu.component */ 98019);
/* harmony import */ var _bao_cao_dmt_bao_cao_dmt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cao-dmt/bao-cao-dmt.component */ 61975);
/* harmony import */ var _cap_nhat_lien_he_cap_nhat_lien_he_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cap-nhat-lien-he/cap-nhat-lien-he.component */ 88443);
/* harmony import */ var _bien_ban_chot_dmt_bien_ban_chot_dmt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bien-ban-chot-dmt/bien-ban-chot-dmt.component */ 62571);
/* harmony import */ var _share_import_excel_import_excel_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/import-excel/import-excel.module */ 4247);
/* harmony import */ var _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../share/drop-file/drop-file.module */ 96115);
/* harmony import */ var _chi_so_dinh_ky_chi_so_dinh_ky_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chi-so-dinh-ky/chi-so-dinh-ky.component */ 83129);
/* harmony import */ var _chot_doi_gia_chot_doi_gia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chot-doi-gia/chot-doi-gia.component */ 44483);
/* harmony import */ var _doi_soat_c06_doi_soat_c06_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doi-soat-c06/doi-soat-c06.component */ 11177);
/* harmony import */ var _so_hoa_so_hoa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./so-hoa/so-hoa.component */ 91395);
/* harmony import */ var _nhap_chi_so_dinh_ky_nhap_chi_so_dinh_ky_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nhap-chi-so-dinh-ky/nhap-chi-so-dinh-ky.component */ 48567);
/* harmony import */ var _in_hop_dong_in_hop_dong_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./in-hop-dong/in-hop-dong.component */ 53663);
/* harmony import */ var _cmis_tool_cmis_tool_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmis-tool/cmis-tool.component */ 99075);
/* harmony import */ var _het_han_hdmbd_het_han_hdmbd_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./het-han-hdmbd/het-han-hdmbd.component */ 40227);
/* harmony import */ var _tiep_nhan_yeu_cau_tiep_nhan_yeu_cau_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tiep-nhan-yeu-cau/tiep-nhan-yeu-cau.component */ 51147);
/* harmony import */ var _thay_doi_thong_tin_thay_doi_thong_tin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./thay-doi-thong-tin/thay-doi-thong-tin.component */ 90325);
/* harmony import */ var _kiem_do_hoa_don_kiem_do_hoa_don_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./kiem-do-hoa-don/kiem-do-hoa-don.component */ 10607);
/* harmony import */ var _du_thao_ha_ap_du_thao_ha_ap_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./du-thao-ha-ap/du-thao-ha-ap.component */ 73559);
/* harmony import */ var _giao_ho_so_giao_ho_so_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./giao-ho-so/giao-ho-so.component */ 94347);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/a11y */ 18617);
/* harmony import */ var _ghi_rot_chi_so_ghi_rot_chi_so_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ghi-rot-chi-so/ghi-rot-chi-so.component */ 71345);
/* harmony import */ var _cmis_tong_hop_cmis_tong_hop_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cmis-tong-hop/cmis-tong-hop.component */ 77811);
/* harmony import */ var src_app_share_pouchdb_utils_pouchdb_utils_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/share/pouchdb-utils/pouchdb-utils.module */ 61343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 17705);





























class Cmis4Module {
  static {
    this.ɵfac = function Cmis4Module_Factory(t) {
      return new (t || Cmis4Module)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
      type: Cmis4Module
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _cmis4_routing__WEBPACK_IMPORTED_MODULE_1__.Cmis4RoutingModule, _share_share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule, _share_import_excel_import_excel_module__WEBPACK_IMPORTED_MODULE_8__.ImportExcelModule, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_9__.DropFileModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__.A11yModule, src_app_share_pouchdb_utils_pouchdb_utils_module__WEBPACK_IMPORTED_MODULE_25__.PouchdbUtilsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](Cmis4Module, {
    declarations: [_cmis4_component__WEBPACK_IMPORTED_MODULE_0__.Cmis4Component, _bao_cap_cap_dien_bao_cap_cap_dien_component__WEBPACK_IMPORTED_MODULE_3__.BaoCapCapDienComponent, _tra_cuu_tra_cuu_component__WEBPACK_IMPORTED_MODULE_4__.TraCuuComponent, _bao_cao_dmt_bao_cao_dmt_component__WEBPACK_IMPORTED_MODULE_5__.BaoCaoDmtComponent, _cap_nhat_lien_he_cap_nhat_lien_he_component__WEBPACK_IMPORTED_MODULE_6__.CapNhatLienHeComponent, _bien_ban_chot_dmt_bien_ban_chot_dmt_component__WEBPACK_IMPORTED_MODULE_7__.BienBanChotDmtComponent, _chi_so_dinh_ky_chi_so_dinh_ky_component__WEBPACK_IMPORTED_MODULE_10__.ChiSoDinhKyComponent, _chot_doi_gia_chot_doi_gia_component__WEBPACK_IMPORTED_MODULE_11__.ChotDoiGiaComponent, _doi_soat_c06_doi_soat_c06_component__WEBPACK_IMPORTED_MODULE_12__.DoiSoatC06Component, _so_hoa_so_hoa_component__WEBPACK_IMPORTED_MODULE_13__.SoHoaComponent, _nhap_chi_so_dinh_ky_nhap_chi_so_dinh_ky_component__WEBPACK_IMPORTED_MODULE_14__.NhapChiSoDinhKyComponent, _in_hop_dong_in_hop_dong_component__WEBPACK_IMPORTED_MODULE_15__.InHopDongComponent, _cmis_tool_cmis_tool_component__WEBPACK_IMPORTED_MODULE_16__.CmisToolComponent, _het_han_hdmbd_het_han_hdmbd_component__WEBPACK_IMPORTED_MODULE_17__.HetHanHdmbdComponent, _tiep_nhan_yeu_cau_tiep_nhan_yeu_cau_component__WEBPACK_IMPORTED_MODULE_18__.TiepNhanYeuCauComponent, _thay_doi_thong_tin_thay_doi_thong_tin_component__WEBPACK_IMPORTED_MODULE_19__.ThayDoiThongTinComponent, _kiem_do_hoa_don_kiem_do_hoa_don_component__WEBPACK_IMPORTED_MODULE_20__.KiemDoHoaDonComponent, _du_thao_ha_ap_du_thao_ha_ap_component__WEBPACK_IMPORTED_MODULE_21__.DuThaoHaApComponent, _giao_ho_so_giao_ho_so_component__WEBPACK_IMPORTED_MODULE_22__.GiaoHoSoComponent, _ghi_rot_chi_so_ghi_rot_chi_so_component__WEBPACK_IMPORTED_MODULE_23__.GhiRotChiSoComponent, _cmis_tong_hop_cmis_tong_hop_component__WEBPACK_IMPORTED_MODULE_24__.CmisTongHopComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _cmis4_routing__WEBPACK_IMPORTED_MODULE_1__.Cmis4RoutingModule, _share_share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule, _share_import_excel_import_excel_module__WEBPACK_IMPORTED_MODULE_8__.ImportExcelModule, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_9__.DropFileModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__.A11yModule, src_app_share_pouchdb_utils_pouchdb_utils_module__WEBPACK_IMPORTED_MODULE_25__.PouchdbUtilsModule]
  });
})();

/***/ }),

/***/ 15489:
/*!****************************************!*\
  !*** ./src/app/cmis4/cmis4.routing.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cmis4RoutingModule: () => (/* binding */ Cmis4RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _cmis4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmis4.component */ 21492);
/* harmony import */ var _tra_cuu_tra_cuu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tra-cuu/tra-cuu.component */ 98019);
/* harmony import */ var _cap_nhat_lien_he_cap_nhat_lien_he_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cap-nhat-lien-he/cap-nhat-lien-he.component */ 88443);
/* harmony import */ var _bao_cao_dmt_bao_cao_dmt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-dmt/bao-cao-dmt.component */ 61975);
/* harmony import */ var _bien_ban_chot_dmt_bien_ban_chot_dmt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bien-ban-chot-dmt/bien-ban-chot-dmt.component */ 62571);
/* harmony import */ var _bao_cap_cap_dien_bao_cap_cap_dien_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cap-cap-dien/bao-cap-cap-dien.component */ 14235);
/* harmony import */ var _chi_so_dinh_ky_chi_so_dinh_ky_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chi-so-dinh-ky/chi-so-dinh-ky.component */ 83129);
/* harmony import */ var _chot_doi_gia_chot_doi_gia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chot-doi-gia/chot-doi-gia.component */ 44483);
/* harmony import */ var _doi_soat_c06_doi_soat_c06_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doi-soat-c06/doi-soat-c06.component */ 11177);
/* harmony import */ var _so_hoa_so_hoa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./so-hoa/so-hoa.component */ 91395);
/* harmony import */ var _nhap_chi_so_dinh_ky_nhap_chi_so_dinh_ky_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nhap-chi-so-dinh-ky/nhap-chi-so-dinh-ky.component */ 48567);
/* harmony import */ var _in_hop_dong_in_hop_dong_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./in-hop-dong/in-hop-dong.component */ 53663);
/* harmony import */ var _cmis_tool_cmis_tool_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cmis-tool/cmis-tool.component */ 99075);
/* harmony import */ var _het_han_hdmbd_het_han_hdmbd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./het-han-hdmbd/het-han-hdmbd.component */ 40227);
/* harmony import */ var _tiep_nhan_yeu_cau_tiep_nhan_yeu_cau_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tiep-nhan-yeu-cau/tiep-nhan-yeu-cau.component */ 51147);
/* harmony import */ var _kiem_do_hoa_don_kiem_do_hoa_don_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./kiem-do-hoa-don/kiem-do-hoa-don.component */ 10607);
/* harmony import */ var _thay_doi_thong_tin_thay_doi_thong_tin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./thay-doi-thong-tin/thay-doi-thong-tin.component */ 90325);
/* harmony import */ var _du_thao_ha_ap_du_thao_ha_ap_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./du-thao-ha-ap/du-thao-ha-ap.component */ 73559);
/* harmony import */ var _giao_ho_so_giao_ho_so_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./giao-ho-so/giao-ho-so.component */ 94347);
/* harmony import */ var _ghi_rot_chi_so_ghi_rot_chi_so_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ghi-rot-chi-so/ghi-rot-chi-so.component */ 71345);
/* harmony import */ var _cmis_tong_hop_cmis_tong_hop_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cmis-tong-hop/cmis-tong-hop.component */ 77811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 17705);
























const routes = [{
  path: '',
  component: _cmis4_component__WEBPACK_IMPORTED_MODULE_0__.Cmis4Component
}, {
  path: 'cmis4-tong-hop',
  component: _cmis_tong_hop_cmis_tong_hop_component__WEBPACK_IMPORTED_MODULE_20__.CmisTongHopComponent
}, {
  path: 'cmis4-tra-cuu',
  component: _tra_cuu_tra_cuu_component__WEBPACK_IMPORTED_MODULE_1__.TraCuuComponent
}, {
  path: 'cmis4-lien-he',
  component: _cap_nhat_lien_he_cap_nhat_lien_he_component__WEBPACK_IMPORTED_MODULE_2__.CapNhatLienHeComponent
}, {
  path: 'cmis4-cap-dien',
  component: _bao_cap_cap_dien_bao_cap_cap_dien_component__WEBPACK_IMPORTED_MODULE_5__.BaoCapCapDienComponent
}, {
  path: 'cmis4-bao-cao-dmt',
  component: _bao_cao_dmt_bao_cao_dmt_component__WEBPACK_IMPORTED_MODULE_3__.BaoCaoDmtComponent
}, {
  path: 'cmis4-bien-ban-dmt',
  component: _bien_ban_chot_dmt_bien_ban_chot_dmt_component__WEBPACK_IMPORTED_MODULE_4__.BienBanChotDmtComponent
}, {
  path: 'cmis4-chi-so',
  component: _chi_so_dinh_ky_chi_so_dinh_ky_component__WEBPACK_IMPORTED_MODULE_6__.ChiSoDinhKyComponent
}, {
  path: 'cmis4-doi-gia',
  component: _chot_doi_gia_chot_doi_gia_component__WEBPACK_IMPORTED_MODULE_7__.ChotDoiGiaComponent
}, {
  path: 'cmis4-c06',
  component: _doi_soat_c06_doi_soat_c06_component__WEBPACK_IMPORTED_MODULE_8__.DoiSoatC06Component
}, {
  path: 'cmis4-so-hoa',
  component: _so_hoa_so_hoa_component__WEBPACK_IMPORTED_MODULE_9__.SoHoaComponent
}, {
  path: 'nhap-chi-so-dinh-ky',
  component: _nhap_chi_so_dinh_ky_nhap_chi_so_dinh_ky_component__WEBPACK_IMPORTED_MODULE_10__.NhapChiSoDinhKyComponent
}, {
  path: 'cmis4-in-hop-dong',
  component: _in_hop_dong_in_hop_dong_component__WEBPACK_IMPORTED_MODULE_11__.InHopDongComponent
}, {
  path: 'cmis4-tools',
  component: _cmis_tool_cmis_tool_component__WEBPACK_IMPORTED_MODULE_12__.CmisToolComponent
}, {
  path: 'cmis4-han-hop-dong',
  component: _het_han_hdmbd_het_han_hdmbd_component__WEBPACK_IMPORTED_MODULE_13__.HetHanHdmbdComponent
}, {
  path: 'cmis4-tiep-nhan-yeu-cau',
  component: _tiep_nhan_yeu_cau_tiep_nhan_yeu_cau_component__WEBPACK_IMPORTED_MODULE_14__.TiepNhanYeuCauComponent
}, {
  path: 'cmis4-kiem-do-hoa-don',
  component: _kiem_do_hoa_don_kiem_do_hoa_don_component__WEBPACK_IMPORTED_MODULE_15__.KiemDoHoaDonComponent
}, {
  path: 'cmis4-thay-doi-thong-tin',
  component: _thay_doi_thong_tin_thay_doi_thong_tin_component__WEBPACK_IMPORTED_MODULE_16__.ThayDoiThongTinComponent
}, {
  path: 'cmis4-du-thao-ha-ap',
  component: _du_thao_ha_ap_du_thao_ha_ap_component__WEBPACK_IMPORTED_MODULE_17__.DuThaoHaApComponent
}, {
  path: 'cmis4-giao-ho-so',
  component: _giao_ho_so_giao_ho_so_component__WEBPACK_IMPORTED_MODULE_18__.GiaoHoSoComponent
}, {
  path: 'cmis4-ghi-rot',
  component: _ghi_rot_chi_so_ghi_rot_chi_so_component__WEBPACK_IMPORTED_MODULE_19__.GhiRotChiSoComponent
}];
class Cmis4RoutingModule {
  static {
    this.ɵfac = function Cmis4RoutingModule_Factory(t) {
      return new (t || Cmis4RoutingModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
      type: Cmis4RoutingModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](Cmis4RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
  });
})();

/***/ }),

/***/ 96100:
/*!******************************************!*\
  !*** ./src/app/cmis4/cmis4v2.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cmis4V2Service: () => (/* binding */ Cmis4V2Service)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _apiURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiURL */ 72676);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 18810);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/services/plus.service */ 22014);
/* harmony import */ var _site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site/loading/loading.service */ 97230);
/* harmony import */ var _share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/services/authV2.service */ 50532);









class Cmis4V2Service {
  constructor(httpClient, plus, loadSV, authSV) {
    this.httpClient = httpClient;
    this.plus = plus;
    this.loadSV = loadSV;
    this.authSV = authSV;
    this.user = null;
  }
  getUser() {
    let userLocal = JSON.parse(localStorage.getItem('USERCMIS')) || null;
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
  postData(service, api, inputData, ignoreLoading, typeService) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = _this.getURLService(service, typeService);
      const url = `${service}${api}`;
      const httpOptions = {
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this.getUser().ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(url, inputData, {
        headers: httpOptions
      }).catch(err => {
        if (err.response.status === 401) {
          localStorage.removeItem('USERCMIS');
          _this.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
          _this.authSV.reload('/cmis4');
        }
      });
    })();
  }
  getOptionsRequest(ignoreLoading, responseType, typeService) {
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
  handleError(error) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (typeof error?.error == 'object') {
        errorMessage = `Error Code: ${error.status}\nMessage: ${JSON.stringify(error?.error)}`;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(errorMessage);
  }
  static {
    this.ɵfac = function Cmis4V2Service_Factory(t) {
      return new (t || Cmis4V2Service)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceV2));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: Cmis4V2Service,
      factory: Cmis4V2Service.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 11177:
/*!**************************************************************!*\
  !*** ./src/app/cmis4/doi-soat-c06/doi-soat-c06.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoiSoatC06Component: () => (/* binding */ DoiSoatC06Component)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 70274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/firestore.service */ 57923);
/* harmony import */ var src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/authV2.service */ 50532);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var src_app_share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/indexeddb.service */ 90657);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/http.service */ 57090);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../share/import-excel/parse-excel-clipboard/parse-excel-clipboard.component */ 8390);



















function DoiSoatC06Component_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DoiSoatC06Component_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.export());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Xu\u1EA5t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DoiSoatC06Component_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DoiSoatC06Component_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.exportMau());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "File m\u1EABu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DoiSoatC06Component_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DoiSoatC06Component_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\u0110\u1ED1i so\u00E1t file");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
class DoiSoatC06Component {
  constructor(cmis4SV, excelSV, fbSV, authSV, loadSV, idbSV, plus, httpSV, formSV) {
    this.cmis4SV = cmis4SV;
    this.excelSV = excelSV;
    this.fbSV = fbSV;
    this.authSV = authSV;
    this.loadSV = loadSV;
    this.idbSV = idbSV;
    this.plus = plus;
    this.httpSV = httpSV;
    this.formSV = formSV;
    this.searchForm = this.formSV.fb.group({
      input: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(4)]]
    });
    this.main = this.formSV.fb.group({});
    this.dbName = 'kinh-doanh';
    this.api = 'cmis4-c06';
    this.db = null;
    this.perPageItems = 100;
    this.allowLoadmore = true;
    this.TINH_TRANG = null;
    this.list = [];
    this.outData = [];
    this.ilits = 0;
    this.maPK = '';
    this.outHTML = '';
    this.ngaysinh = '';
  }
  ngOnInit() {}
  timKiemThongTinKhachHangDoiSoat(maKH) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let url = 'https://cmis-api.evnspc.vn/service-interfaces/timKiemThongTinKhachHangDoiSoat';
      let body = {
        'MA_KHANG': maKH,
        'ONLY_CCCD_NSINH_EMPTY': false,
        'TAKE_IT_ALL': false,
        'LOAI_TKIEM': 3,
        'TTHAI_CHOA': 'ALL',
        'GIOI_TINH': 'ALL',
        'LIST_MA_SOGCS': [],
        'TEN_KHANG': null,
        'MA_DVIQLY': 'PK0500',
        'NGAY_SINH_TUNGAY': null,
        'NGAY_SINH_DENNGAY': null,
        'HTHUC_DSOAT': null
      };
      return _this.cmis4SV.cmis4Request(url, '', body);
    })();
  }
  updateC06(maKH) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.ilits++;
      _this2.maPK = maKH;
      localStorage.setItem('MA_KHANG', maKH);
      if (_this2.TINH_TRANG == null) {
        return _this2.plus.alertWarning('Vui loại nhập tình trạng C06');
      }
      let body1 = yield _this2.timKiemThongTinKhachHangDoiSoat(maKH);
      yield _this2.plus.sleep(1000);
      if (body1.data !== null) {
        let body = body1.data[0];
        let url = 'https://cmis-api.evnspc.vn/service-hopdong/updateKhachHangEvnC06';
        body["LY_DO"] = "Khách hàng là tổ chức";
        body["NGUOI_SUA"] = _this2.getRandomString();
        body["NGAY_SUA"] = new Date().toISOString();
        body["NGAY_SINH_CHOA"] = +_this2.TINH_TRANG == 5 ? body["NGAY_SINH_CHOA"] + "T00:00:00.000Z" : null;
        body["MA_CNANG"] = "719";
        body["TINH_TRANG"] = +_this2.TINH_TRANG;
        body["CAN_CHOOSE"] = true;
        return _this2.cmis4SV.cmis4Request(url, '', [body]);
      } else {
        return null;
      }
    })();
  }
  getRandomString() {
    let arr = ['truongnd1.dn', 'trungvl.dn', 'thuttt.dn', 'ancn.dn', 'conglt.dn', 'tientv1.dn', 'chungnh.dn', 'nhatdm.dn', 'duyntm.dn', 'hieunq1.dn', 'canvn.dn', 'phongna.dn', 'dungnt2.dn', 'tuann.dn', 'lieudc.dn', 'thinhnd.dn', 'khoanna.dn', 'duypd1.dn', 'linhnc.dn', 'luonglv1.dn', 'tranglc.dn', 'baonp.dn', 'nhannt1.dn', 'nhadt.dn', 'hanhhv.dn', 'baotd.dn', 'tuanlq.dn', 'dungph.dn', 'namlk1.dn', 'anhnh2.dn', 'tuannt1.dn', 'hoangnk.dn', 'tuanna3.dn', 'viettq1.dn', 'sunglq.dn', 'hieunq2.dn', 'hieult.dn', 'hattn.dn', 'truongdb.dn', 'phuonglv.dn'];
    return arr[Math.floor(Math.random() * arr.length)];
  }
  search() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.outData = [];
      (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.from)(_this3.list).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.concatMap)(el => _this3.doiSoat(el))).subscribe();
    })();
  }
  khongPhaiDS() {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.outData = [];
      (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.from)(_this4.list).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.concatMap)(el => _this4.updateC06(el.MA_KHANG))).subscribe();
    })();
  }
  doiSoat(item) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = yield _this5.cmis4SV.TraCuuThongTinDanCu(item.CMND, item.DDPL, item.NGAY_SINH);
      console.log(body);
      if (!('DV_XMINH_CDAN' in body)) return;
      _this5.outData.push({
        ...item,
        ...body.DV_XMINH_CDAN
      });
      _this5.outHTML = _this5.plus.generateHtmlTable(_this5.outData);
    })();
  }
  doiSoat1() {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.cccd == '' || _this6.hoten == '' || _this6.ngaysinh == '') {
        return;
      }
      let body = yield _this6.cmis4SV.TraCuuThongTinDanCu(_this6.cccd, _this6.hoten, '01/01/' + _this6.ngaysinh);
      console.log(body);
      if (!('DV_XMINH_CDAN' in body)) return;
      let data = body.DV_XMINH_CDAN;
      delete data.MA_YCAU_KNAI;
      delete data.MA_DVIQLY;
      delete data.ID_XMINH;
      delete data.LOAI_TTIN;
      delete data.TEN_CNANG;
      delete data.QUEQUAN;
      delete data.SOSOHOKHAU;
      delete data.NGAY_TAO;
      delete data.NGAY_SUA;
      delete data.NGUOI_TAO;
      delete data.NGUOI_SUA;
      delete data.MA_CNANG;
      delete data.ID_LOG_XMDC;
      delete data.NOIDANGKYKHAISINH;
      delete data.NGAYTHANGNAMSINH;
      _this6.outData.push(data);
      _this6.outHTML = _this6.plus.generateHtmlTable(_this6.outData);
    })();
  }
  export() {
    this.excelSV.export(this.outData, 'DoiSoatC06');
  }
  exportMau() {
    this.excelSV.export([{
      CMND: '',
      DDPL: '',
      NGAY_SINH: '',
      MA_KHANG: ''
    }], 'DoiSoatC06');
  }
  getExcel(evt) {
    this.list = evt;
    console.log(evt);
  }
  reset() {
    this.authSV.reload();
  }
  reload() {
    this.authSV.reload();
  }
  checkPer(level, api = this.api) {
    return window.max ? window.max.opt[api] > level ? true : false : false;
  }
  static {
    this.ɵfac = function DoiSoatC06Component_Factory(t) {
      return new (t || DoiSoatC06Component)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_1__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_6__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_7__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_http_service__WEBPACK_IMPORTED_MODULE_8__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_9__.FormService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: DoiSoatC06Component,
      selectors: [["app-doi-soat-c06"]],
      inputs: {
        hoten: "hoten",
        cccd: "cccd"
      },
      decls: 17,
      vars: 7,
      consts: [[1, "container", "py-3"], [1, "row"], [3, "json"], ["matInput", "", "placeholder", "H\u1ECD t\u00EAn", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "N\u0103m sinh", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "CCCD", 3, "ngModel", "ngModelChange"], [1, "text-center", "py-3"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "table-responsive", 3, "innerHTML"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function DoiSoatC06Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-parse-excel-clipboard", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("json", function DoiSoatC06Component_Template_app_parse_excel_clipboard_json_2_listener($event) {
            return ctx.getExcel($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 1)(4, "mat-form-field")(5, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DoiSoatC06Component_Template_input_ngModelChange_5_listener($event) {
            return ctx.hoten = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-form-field")(7, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DoiSoatC06Component_Template_input_ngModelChange_7_listener($event) {
            return ctx.ngaysinh = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "mat-form-field")(9, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DoiSoatC06Component_Template_input_ngModelChange_9_listener($event) {
            return ctx.cccd = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DoiSoatC06Component_Template_button_click_11_listener() {
            return ctx.doiSoat1();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "\u0110\u1ED1i so\u00E1t");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, DoiSoatC06Component_button_13_Template, 2, 0, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, DoiSoatC06Component_button_14_Template, 2, 0, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, DoiSoatC06Component_button_15_Template, 2, 0, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.hoten);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.ngaysinh);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.cccd);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.checkPer(4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.checkPer(4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.checkPer(4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", ctx.outHTML, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_10__.ParseExcelClipboardComponent]
    });
  }
}

/***/ }),

/***/ 73559:
/*!****************************************************************!*\
  !*** ./src/app/cmis4/du-thao-ha-ap/du-thao-ha-ap.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DuThaoHaApComponent: () => (/* binding */ DuThaoHaApComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 73028);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/material/date-picker/date-picker.component */ 8852);
/* harmony import */ var _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/import-excel/parse-excel-clipboard/parse-excel-clipboard.component */ 8390);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);














function DuThaoHaApComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.MA_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.TEN_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "row-", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.DTHOAI);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.DTHOAI2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.status1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.status2);
  }
}
class DuThaoHaApComponent {
  constructor(cmis4SV, plus, excelSV) {
    this.cmis4SV = cmis4SV;
    this.plus = plus;
    this.excelSV = excelSV;
    this.body = null;
    this.searchArr = [];
    this.dataInXls = [];
    this.ngayCN = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY');
    this.uutien = true;
    this.htmlData = '';
    this.maPKCapNhat = localStorage.getItem('capnhatByKey') || null;
    this.maPKLienHe = localStorage.getItem('updateLienHe') || null;
    this.maPKArr = [];
    this.startDay = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month').format('DD/MM/YYYY');
  }
  ngOnInit() {
    setTimeout(() => {
      const username = localStorage.getItem('UCMIS');
      const pass = localStorage.getItem('PCMIS');
      this.cmis4SV.login(username, pass).then(res => {
        console.log(res);
      });
    }, 60 * 1000 * 5);
  }
  xuatDS() {
    this.excelSV.export(this.dataInXls, 'DS_Import');
  }
  layDSDaLap() {
    const url = 'https://cmis-api.evnspc.vn/serviceInterface/getDanhSachKyLai';
    const body = {
      "MA_DVIQLY": "PK0500",
      "TU_NGAY": "13/03/2026",
      "DEN_NGAY": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY'),
      "NGUOI_TAO": "",
      "NGUOI_SUA": ""
    };
    this.cmis4SV.post(url, body).then(res => {
      const data = this.plus.arr_extract(res.data, ['MA_KHANG', 'TEN_KHANG', 'MA_TRAM', 'TINH_TRANG', 'NGAY_LAP', 'SO_DTHOAI_SMS']);
      this.excelSV.export(data, 'DSACH_KLAI');
    });
  }
  layDSDaLapHomNay() {
    const url = 'https://cmis-api.evnspc.vn/serviceInterface/getDanhSachKyLai';
    const body = {
      "MA_DVIQLY": "PK0500",
      "TU_NGAY": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY'),
      "DEN_NGAY": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY'),
      "NGUOI_TAO": "",
      "NGUOI_SUA": ""
    };
    this.cmis4SV.post(url, body).then(res => {
      const data = this.plus.arr_extract(res.data, ['MA_KHANG', 'TEN_KHANG', 'MA_TRAM', 'TINH_TRANG', 'NGAY_LAP', 'SO_DTHOAI_SMS']);
      this.excelSV.export(data, 'DSACH_KLAI');
    });
  }
  xoaDuThao() {
    if (this.maPKArr.length == 0) {
      console.log("Không có mã PK nào để xóa");
      return;
    }
    const url = "https://cmis-api.evnspc.vn/serviceInterface/deleteDuThaoKyLaiHopDong";
    const body = {
      "LIST_MA_TRAM": [],
      "LIST_MA_KHANG": this.maPKArr,
      "MA_DVIQLY": "PK0500",
      "TYPE": "MA_KHANG"
    };
    this.cmis4SV.post(url, body).then(res => {
      console.log(res);
    });
  }
  DoiLan1() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this.dataInXls).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((el, index) => _this.capnhatByKey(el.MA_KHANG, 'DTHOAI', el.DTHOAI2, index), 7)).subscribe();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this.dataInXls).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((el, index) => _this.updateLienHe(index, el.MA_KHANG, el.DTHOAI2), 3)).subscribe();
    })();
  }
  capnhatByKeyArr() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this2.dataInXls).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((el, index) => _this2.capnhatByKey(el.MA_KHANG, 'DTHOAI', el.DTHOAI2, index), 3)).subscribe();
    })();
  }
  updateLienHeArr() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this3.dataInXls).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.concatMap)((el, index) => _this3.updateLienHe(index, el.MA_KHANG, el.DTHOAI2))).subscribe();
    })();
  }
  DoiLan2() {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this4.dataInXls).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((el, index) => _this4.xoaLienHe(index, el.MA_KHANG, el.DTHOAI), 7)).subscribe();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this4.dataInXls).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((el, index) => _this4.capnhatByKeyLan2(el.MA_KHANG, 'DTHOAI', el.DTHOAI, index), 3)).subscribe();
    })();
  }
  DonLienHe() {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_this5.dataInXls).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((el, index) => _this5.xoaLienHe(index, el.MA_KHANG, el.DTHOAI), 7)).subscribe();
    })();
  }
  updateLienHe(_x, _x2, _x3) {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (index, maKH, sdt, hoten = '', email = '') {
      const nv = _this6.cmis4SV.getRandomNV();
      const ngayhl = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this6.startDay, 'DD/MM/YYYY').format('DD/MM/YYYY');
      const ttmoinhat = yield _this6.cmis4SV.layTtinKHangMoinhat(_this6.cmis4SV.convertPK(maKH));
      if (ttmoinhat['TYPE']) return null;
      const newContact = {
        "DCHI_KH_LHE": ttmoinhat.HDG_KHANG_LIENHE[0].DCHI_KH_LHE,
        "TEN_KH_LHE": hoten.length > 0 ? hoten : ttmoinhat.HDG_KHANG_LIENHE[0].TEN_KH_LHE,
        "TRINH_DO": "",
        "NGHE_NGHIEP": "",
        "DTHOAI_DVU": sdt,
        "EMAIL": email,
        "FAX": "",
        "ZALO": "",
        "FACEBOOK": "",
        "MA_QHE": "99",
        "GIOI_TINH": ttmoinhat.HDG_KHANG_LIENHE[0].GIOI_TINH,
        "ID_LIENHE": -1,
        "MA_CNANG": "374",
        "MA_DVIQLY": ttmoinhat.HDG_KHANG_LIENHE[0].MA_DVIQLY,
        "MA_HDONG": ttmoinhat.HDG_KHANG_LIENHE[0].MA_HDONG,
        "MA_KHANG": _this6.cmis4SV.convertPK(maKH),
        "NGAY_HLUC": ngayhl,
        "NGAY_SINH": "",
        "NGUOI_SUA": nv,
        "NGUOI_TAO": nv,
        "ID_LOG_XMDC": "",
        "SO_DINHDANH": null,
        "NGAY_CAP_CCCD": "",
        "NOI_CAP_CCCD": null,
        "DAN_TOC": null,
        "TON_GIAO": null,
        "QUOC_TICH": null,
        "TINHTRANG_HONNHAN": null,
        "IS_SIGN_BBAN_TTHAO": false,
        "STTU_UTIEN": '0',
        "GIOI_TINH_HTHI": "Ông",
        "NGAY_KY": ngayhl
      };
      _this6.uutien ? ttmoinhat.HDG_KHANG_LIENHE.unshift(newContact) : ttmoinhat.HDG_KHANG_LIENHE.push(newContact);
      const body = {
        bangDvXminhCdan: [],
        DV_XMINH_CDAN: [],
        DV_XMINH_CDAN_HDC: [],
        HDG_KHANG_LIENHE: _this6.removeDuplicatesLan1(ttmoinhat.HDG_KHANG_LIENHE, 'DTHOAI_DVU'),
        HDG_KHANG_LIENHE_U: ttmoinhat.HDG_KHANG_LIENHE_U,
        HDG_KHACH_HANG: ttmoinhat.HDG_KHACH_HANG,
        HDG_DIEM_DO: ttmoinhat.HDG_DIEM_DO,
        HDG_HOP_DONG: ttmoinhat.HDG_HOP_DONG
      };
      return _this6.cmis4SV.ThemTDoiTTinLienHe(body, index).then(v => {
        _this6.dataInXls[index]['status2'] = 'Thành công';
        localStorage.setItem('updateLienHe', maKH);
        console.log(v);
      }).catch(err => {
        _this6.dataInXls[index]['status2'] = 'Thất bại';
        console.log(err);
      });
    }).apply(this, arguments);
  }
  xoaLienHe(_x4, _x5, _x6) {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (index, maKH, sdt, hoten = '', email = '') {
      const nv = _this7.cmis4SV.getRandomNV();
      const ttmoinhat = yield _this7.cmis4SV.layTtinKHangMoinhat(_this7.cmis4SV.convertPK(maKH));
      if (ttmoinhat['TYPE']) return null;
      const newContact = {
        "DCHI_KH_LHE": ttmoinhat.HDG_KHANG_LIENHE[0].DCHI_KH_LHE,
        "TEN_KH_LHE": hoten.length > 0 ? hoten : ttmoinhat.HDG_KHANG_LIENHE[0].TEN_KH_LHE,
        "TRINH_DO": "",
        "NGHE_NGHIEP": "",
        "DTHOAI_DVU": sdt,
        "EMAIL": email,
        "FAX": "",
        "ZALO": "",
        "FACEBOOK": "",
        "MA_QHE": "99",
        "GIOI_TINH": ttmoinhat.HDG_KHANG_LIENHE[0].GIOI_TINH,
        "ID_LIENHE": -1,
        "MA_CNANG": "374",
        "MA_DVIQLY": ttmoinhat.HDG_KHANG_LIENHE[0].MA_DVIQLY,
        "MA_HDONG": ttmoinhat.HDG_KHANG_LIENHE[0].MA_HDONG,
        "MA_KHANG": _this7.cmis4SV.convertPK(maKH),
        "NGAY_HLUC": moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'day').format('DD/MM/YYYY'),
        "NGAY_SINH": "",
        "NGUOI_SUA": nv,
        "NGUOI_TAO": nv,
        "ID_LOG_XMDC": "",
        "SO_DINHDANH": null,
        "NGAY_CAP_CCCD": "",
        "NOI_CAP_CCCD": null,
        "DAN_TOC": null,
        "TON_GIAO": null,
        "QUOC_TICH": null,
        "TINHTRANG_HONNHAN": null,
        "IS_SIGN_BBAN_TTHAO": false,
        "STTU_UTIEN": '0',
        "GIOI_TINH_HTHI": "Ông",
        "NGAY_KY": moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'day').format('DD/MM/YYYY')
      };
      _this7.uutien ? ttmoinhat.HDG_KHANG_LIENHE.unshift(newContact) : ttmoinhat.HDG_KHANG_LIENHE.push(newContact);
      const body = {
        bangDvXminhCdan: [],
        DV_XMINH_CDAN: [],
        DV_XMINH_CDAN_HDC: [],
        HDG_KHANG_LIENHE: _this7.removeDuplicates(ttmoinhat.HDG_KHANG_LIENHE, 'DTHOAI_DVU'),
        HDG_KHANG_LIENHE_U: ttmoinhat.HDG_KHANG_LIENHE_U,
        HDG_KHACH_HANG: ttmoinhat.HDG_KHACH_HANG,
        HDG_DIEM_DO: ttmoinhat.HDG_DIEM_DO,
        HDG_HOP_DONG: ttmoinhat.HDG_HOP_DONG
      };
      return _this7.cmis4SV.ThemTDoiTTinLienHe(body, index).then(v => {
        _this7.dataInXls[index]['status2'] = 'Thành công';
        console.log(v);
      }).catch(err => {
        _this7.dataInXls[index]['status2'] = 'Thất bại';
        console.log(err);
      });
    }).apply(this, arguments);
  }
  capnhatByKey(maPK, key, value, index) {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ngayhl = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this8.startDay, 'DD/MM/YYYY').format('DD/MM/YYYY');
      const nv = _this8.cmis4SV.getRandomNV();
      const kh = yield _this8.cmis4SV.timKiemKhachHang(maPK);
      if (kh.length == 0) return null;
      const ttkh = yield _this8.cmis4SV.layTtinKHangMoinhat(maPK);
      ttkh.HDG_KHACH_HANG[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG[0].NGAY_HLUC = ngayhl;
      ttkh.HDG_KHACH_HANG[0].NGUOI_SUA = nv;
      ttkh.HDG_KHACH_HANG[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG[0][key] = value;
      ttkh.HDG_KHACH_HANG_U[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG_U[0].NGAY_HHLUC = ngayhl;
      ttkh.HDG_KHACH_HANG_U[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG_U[0][key] = null;
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
        "NGAY_TAO": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY HH:mm:ss'),
        "NGAY_SUA": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY HH:mm:ss'),
        "NGUOI_TAO": nv,
        "NGUOI_SUA": nv
      }];
      return _this8.cmis4SV.themTtinKhang(body).then(v => {
        _this8.plus.scrollTo(`row-${index - 10}`);
        localStorage.setItem('capnhatByKey', maPK);
        _this8.dataInXls[index]['status1'] = 'Thành công';
        console.log(v);
      }).catch(err => {
        _this8.dataInXls[index]['status1'] = 'Thất bại';
        console.log(err);
      });
    })();
  }
  capnhatByKeyLan2(maPK, key, value, index) {
    var _this9 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ngayhl = moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'day').format('DD/MM/YYYY');
      const nv = _this9.cmis4SV.getRandomNV();
      const kh = yield _this9.cmis4SV.timKiemKhachHang(maPK);
      const ttkh = yield _this9.cmis4SV.layTtinKHangMoinhat(maPK);
      ttkh.HDG_KHACH_HANG[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG[0].NGAY_HLUC = ngayhl;
      ttkh.HDG_KHACH_HANG[0].NGUOI_SUA = nv;
      ttkh.HDG_KHACH_HANG[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG[0][key] = value;
      ttkh.HDG_KHACH_HANG_U[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG_U[0].NGAY_HHLUC = ngayhl;
      ttkh.HDG_KHACH_HANG_U[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG_U[0][key] = null;
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
        "NGAY_HLUC": _this9.ngayCN,
        "MA_HDONG": kh[0].MA_HDONG,
        "TEN_COT": "MASO_DVIQHNS",
        "NGAY_TAO": moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'day').format('DD/MM/YYYY HH:mm:ss'),
        "NGAY_SUA": moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'day').format('DD/MM/YYYY HH:mm:ss'),
        "NGUOI_TAO": nv,
        "NGUOI_SUA": nv
      }];
      return _this9.cmis4SV.themTtinKhang(body).then(v => {
        _this9.dataInXls[index]['status1'] = 'Thành công';
        console.log(v);
      });
    })();
  }
  removeDuplicatesLan1(arr, key) {
    const seen = new Set();
    const data = arr.filter(item => {
      const value = item[key];
      if (seen.has(value) || item['DTHOAI_DVU'] == '' || item['DTHOAI_DVU'] == null) {
        return false;
      } else {
        seen.add(value);
        return true;
      }
    });
    data.map((item, index) => {
      item.STTU_UTIEN = `${index}`;
    });
    return data;
  }
  removeDuplicates(arr, key) {
    const seen = new Set();
    const sdt = ['0933344118', '0979714515', '0918524242', '0968842320', '0968805424', '0937503350', '0333217508', '0968805090', '0916669737', '0963063663', '0963888979', '0918805024', '0937232789', '0968819829', '0937232239', '0907868808', '0968647647', '0342164929'];
    const data = arr.filter(item => {
      const value = item[key];
      if (seen.has(value) || item['DTHOAI_DVU'] == '' || item['DTHOAI_DVU'] == null || sdt.includes(item['DTHOAI_DVU'])) {
        return false;
      } else {
        seen.add(value);
        return true;
      }
    });
    data.map((item, index) => {
      item.STTU_UTIEN = `${index}`;
    });
    return data;
  }
  getClip(evt) {
    var _this0 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this0.dataInXls = evt;
      _this0.maPKArr = _this0.dataInXls.map(el => el.MA_KHANG);
      _this0.htmlData = _this0.plus.generateHtmlTable(_this0.dataInXls);
      console.log(_this0.maPKArr);
    })();
  }
  onDropFile(files) {
    console.log(`onDropFile()`);
    this.reset();
    for (let i = 0; i < files.length; i++) {
      if (files[i].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.excelSV.fileToJson(files[i]).then(obj => {
          this.dataInXls = obj;
          console.log(obj);
          this.htmlData = this.plus.generateHtmlTable(this.dataInXls);
        });
      } else {
        this.plus.alertError(`File không hợp lệ`);
      }
    }
  }
  reset() {
    this.plus.reload();
  }
  ondragover() {
    document.getElementById("dropZone").setAttribute("drop-active", "true");
  }
  copy(evt) {
    this.plus.copyToClipboard(evt);
  }
  removeItem(index) {
    this.searchArr.splice(index, 1);
  }
  reload() {
    this.plus.reload();
  }
  getMonth(evt) {
    this.startDay = evt;
  }
  static {
    this.ɵfac = function DuThaoHaApComponent_Factory(t) {
      return new (t || DuThaoHaApComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_2__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: DuThaoHaApComponent,
      selectors: [["app-du-thao-ha-ap"]],
      decls: 59,
      vars: 9,
      consts: [[1, "container", "py-3"], [1, "row"], [3, "label", "files", "ondragover"], [1, "row", "py-3"], [3, "label", "json"], [3, "startDay", "openOnFocus", "label", "format", "month"], [1, "btn"], ["mat-raised-button", "", "color", "primary", "matTooltip", "L\u1EA5y Danh S\u00E1ch \u0110\u00E3 L\u1EADp", 3, "click"], ["mat-raised-button", "", "color", "primary", "matTooltip", "L\u1EA5y Danh S\u00E1ch \u0110\u00E3 L\u1EADp H\u00F4m Nay", 3, "click"], ["mat-raised-button", "", "color", "primary", "matTooltip", "L\u1EA5y DTHOAI2 l\u00E0m ch\u00EDnh", 3, "click"], ["mat-raised-button", "", "color", "accent", "matTooltip", "L\u1EA5y DTHOAI2 l\u00E0m ch\u00EDnh", 3, "click"], ["mat-icon-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "matTooltip", "L\u1EA5y DTHOAI l\u00E0m ch\u00EDnh", 3, "click"], ["mat-raised-button", "", "color", "warn", "matTooltip", "L\u1EA5y DTHOAI2 l\u00E0m ch\u00EDnh", 3, "click"], [1, ""], [1, "table", "table-hover", "table-borderless"], [1, "table-group-divider"], [4, "ngFor", "ngForOf"], [3, "id"]],
      template: function DuThaoHaApComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-drop-files", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("files", function DuThaoHaApComponent_Template_app_drop_files_files_2_listener($event) {
            return ctx.onDropFile($event);
          })("ondragover", function DuThaoHaApComponent_Template_app_drop_files_ondragover_2_listener() {
            return ctx.ondragover();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3)(4, "app-parse-excel-clipboard", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("json", function DuThaoHaApComponent_Template_app_parse_excel_clipboard_json_4_listener($event) {
            return ctx.getClip($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 1)(6, "app-date-picker", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("month", function DuThaoHaApComponent_Template_app_date_picker_month_6_listener($event) {
            return ctx.getMonth($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " | ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 1)(13, "div", 6)(14, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_14_listener() {
            return ctx.layDSDaLap();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "L\u1EA5y Danh S\u00E1ch \u0110\u00E3 L\u1EADp");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_16_listener() {
            return ctx.layDSDaLapHomNay();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "L\u1EA5y Danh S\u00E1ch \u0110\u00E3 L\u1EADp H\u00F4m Nay");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_18_listener() {
            return ctx.xuatDS();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Xu\u1EA5t danh s\u00E1ch");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_20_listener() {
            return ctx.capnhatByKeyArr();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\u0110\u1ED5i Th\u00F4ng tin");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_22_listener() {
            return ctx.updateLienHeArr();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "\u0110\u1ED5i Li\u00EAn h\u1EC7");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_24_listener() {
            return ctx.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 1)(28, "div", 6)(29, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_29_listener() {
            return ctx.DoiLan1();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "\u0110\u1ED5i c\u1EA3 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_31_listener() {
            return ctx.DoiLan2();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Kh\u00F4i ph\u1EE5c \u0111i\u1EC7n tho\u1EA1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_33_listener() {
            return ctx.DonLienHe();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Kh\u00F4i ph\u1EE5c Li\u00EAn h\u1EC7");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DuThaoHaApComponent_Template_button_click_35_listener() {
            return ctx.xoaDuThao();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "X\u00F3a D\u1EF1 Th\u1EA3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 1)(38, "div", 14)(39, "table", 15)(40, "thead", 14)(41, "tr")(42, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "STT");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "MA_KHANG");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "TEN_KHANG");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "DTHOAI");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "DTHOAI2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "\u0110\u1ED5i S\u0110T");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "\u0110\u1ED5i Li\u00EAn h\u1EC7");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "tbody", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, DuThaoHaApComponent_tr_57_Template, 15, 8, "tr", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "tfoot");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Copy m\u00E3 PK d\u00E1n v\u00F4 \u0111\u00E2y");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("startDay", ctx.startDay)("openOnFocus", true)("label", "Nga\u0300y")("format", "DD/MM/YYYY");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Th\u00F4ng tin: ", ctx.maPKCapNhat, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Li\u00EAn h\u1EC7: ", ctx.maPKLienHe, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.dataInXls);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_5__.DatePickerComponent, _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_6__.ParseExcelClipboardComponent, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_7__.DropFilesComponent]
    });
  }
}

/***/ }),

/***/ 71345:
/*!******************************************************************!*\
  !*** ./src/app/cmis4/ghi-rot-chi-so/ghi-rot-chi-so.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GhiRotChiSoComponent: () => (/* binding */ GhiRotChiSoComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/sheets.service */ 63402);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/indexeddbV2.service */ 4045);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);









class GhiRotChiSoComponent {
  constructor(excelSV, plus, sheetdbSV, cmis4SV, idbSV) {
    this.excelSV = excelSV;
    this.plus = plus;
    this.sheetdbSV = sheetdbSV;
    this.cmis4SV = cmis4SV;
    this.idbSV = idbSV;
    this.dbName = 'cmis4';
    this.apiKH = 'cmis4-cap-dien';
    this.apiPC = 'cmis4-c06';
    this.db = null;
    this.dataInXls = [];
    this.dataRot = [];
    this.dataKH = [];
    this.dataPC = [];
    this.file = null;
  }
  ngOnInit() {
    this.idbSV.IDB_InitDB(this.dbName).subscribe(db => {
      this.db = db;
      this.idbSV.IDB_DB_GetAll(this.db, this.apiKH).subscribe(data => {
        this.dataKH = data;
        console.log('Get data KH OK');
      });
    });
  }
  getKHPhanCong() {
    this.sheetdbSV.get('1X9NIeAsXEPJ8LG8Vr-KPN7Wn9uLiMqxNcM0fwdjXHIs', 'KH').subscribe(data => {
      this.dataKH = data.data;
      this.idbSV.IDB_DB_Add(this.db, this.apiKH, this.dataKH).then(() => {
        console.log('Lưu dữ liệu KH vào indexedDB OK');
      });
    });
  }
  mergeKeepOriginalOnly(arr1, arr2, key, mergeFn = (a, b) => ({
    ...a,
    ...b
  })) {
    const map = new Map();
    for (const item of arr1) map.set(item[key], item);
    for (const item of arr2) {
      const k = item[key];
      if (map.has(k)) {
        const merged = mergeFn(map.get(k), item);
        map.set(k, merged);
        debugger;
      }
    }
    return Array.from(map.values());
  }
  onDropFile(files) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(`onDropFile()`);
      _this.file = files[0];
      _this.gopFile();
    })();
  }
  gopFile() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        _this2.excelSV.fileToJson(_this2.file, 5).then(data => {
          for (const key in data) {
            for (let i2 = 0; i2 < data[key].length; i2++) {
              const item = data[key][i2];
              let body = {};
              body.MA_KHANG = item.Madiemdo.slice(0, 13);
              body.TEN_KHANG = item.Tendiemdo;
              body.SO_TBI = '[' + item.Socongto + ']';
              body.MA_TRAM = item.Matram;
              body.KS = +item.Tonggiao;
              body.B1 = +item.Bieugiao1;
              body.B2 = +item.Bieugiao2;
              body.B3 = +item.Bieugiao3;
              body.VC = +item.Voconggiao;
              body.Ngaygio = item.Ngaygio;
              _this2.dataInXls.push(body);
            }
          }
        });
      }
    })();
  }
  locDSRot() {
    for (let i = 0; i < this.dataInXls.length; i++) {
      const el = this.dataInXls[i];
      if (el.Ngaygio == 'NODATA') {
        this.dataRot.push(el);
      }
    }
    let out = this.mergeKeepOriginalOnly(this.dataRot, this.dataKH, 'MA_KHANG');
    let clean = this.plus.arr_extract(out, ['MA_SOGCS', 'MA_KHANG', 'TEN_KHANG', 'SO_TBI', 'MA_KVUC', 'NHAN_VIEN', 'TEN_SOGCS', 'MA_TRAM']);
    this.excelSV.export(clean, 'DS_ROT_CHISO');
  }
  xuatFileMdis() {
    this.excelSV.export(this.dataInXls, 'MDIS_CHISO');
  }
  reset() {}
  ondragover() {
    document.getElementById("dropZone").setAttribute("drop-active", "true");
  }
  static {
    this.ɵfac = function GhiRotChiSoComponent_Factory(t) {
      return new (t || GhiRotChiSoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_1__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_3__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_4__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__.IndexeddbServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: GhiRotChiSoComponent,
      selectors: [["app-ghi-rot-chi-so"]],
      decls: 17,
      vars: 4,
      consts: [[1, "container", "py-3"], [1, "row"], [3, "label", "files", "ondragover"], [1, "btn"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
      template: function GhiRotChiSoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-drop-files", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("files", function GhiRotChiSoComponent_Template_app_drop_files_files_2_listener($event) {
            return ctx.onDropFile($event);
          })("ondragover", function GhiRotChiSoComponent_Template_app_drop_files_ondragover_2_listener() {
            return ctx.ondragover();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 3)(11, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GhiRotChiSoComponent_Template_button_click_11_listener() {
            return ctx.getKHPhanCong();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "L\u1EA5y d\u1EEF li\u1EC7u KH");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GhiRotChiSoComponent_Template_button_click_13_listener() {
            return ctx.xuatFileMdis();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Xu\u1EA5t file g\u1ED9p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GhiRotChiSoComponent_Template_button_click_15_listener() {
            return ctx.locDSRot();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "L\u1EA5y ds r\u1EDBt CS");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.dataInXls.length, " b\u1EA3n ghi ch\u1EC9 s\u1ED1");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.dataKH.length, " b\u1EA3n ghi kh\u00E1ch h\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.dataRot.length, " b\u1EA3n ghi ch\u1EC9 s\u1ED1 r\u1EDBt \u0111\u01B0\u1EE3c ghi nh\u1EADn");
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_6__.DropFilesComponent]
    });
  }
}

/***/ }),

/***/ 94347:
/*!**********************************************************!*\
  !*** ./src/app/cmis4/giao-ho-so/giao-ho-so.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiaoHoSoComponent: () => (/* binding */ GiaoHoSoComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 70152);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/pouchdb.service */ 32939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/indexeddbV2.service */ 4045);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/docxtemplate/docxtemplate.service */ 41982);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/share/services/sheets.service */ 63402);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 5951);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 60850);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 11161);
/* harmony import */ var _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../share/material/date-picker/date-picker.component */ 8852);


























function GiaoHoSoComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td")(12, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_tr_24_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r10.deleteCustomer(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r8.MA_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r8.STT);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r8.TEN_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r8.LOAI_HS);
  }
}
function GiaoHoSoComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_td_34_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r12.saveCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function GiaoHoSoComponent_table_53_tr_17_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", item_r23.NoiDung);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r23.NoiDung, " ");
  }
}
function GiaoHoSoComponent_table_53_tr_17_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", item_r24.NoiDung);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r24.NoiDung, " ");
  }
}
function GiaoHoSoComponent_table_53_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 8)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td")(12, "div", 12)(13, "mat-form-field")(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Lo\u1EA1i c\u00F4ng t\u01A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function GiaoHoSoComponent_table_53_tr_17_Template_input_blur_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const i_r18 = restoredCtx.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r25.setValueByKey("LOAI_CTO", i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "mat-autocomplete", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, GiaoHoSoComponent_table_53_tr_17_mat_option_19_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "td")(21, "div", 12)(22, "mat-form-field")(23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "Ghi ch\u00FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function GiaoHoSoComponent_table_53_tr_17_Template_input_blur_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const i_r18 = restoredCtx.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r27.setValueByKey("GHI_CHU", i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "mat-autocomplete", 31, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, GiaoHoSoComponent_table_53_tr_17_mat_option_28_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "td")(30, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_table_53_tr_17_Template_mat_icon_click_30_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const item_r17 = restoredCtx.$implicit;
      const i_r18 = restoredCtx.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.xoaPhanCong(item_r17, i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](18);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](27);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r14.main);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r17.MA_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r17.TEN_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r17.DTHOAI_DVU);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r17.SNGAY_HENMAX);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r14.catLOAI_CTO);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r14.catLOAI_GAN_CTO);
  }
}
function GiaoHoSoComponent_table_53_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 29)(2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_table_53_tr_18_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r29.saveDienKe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
}
function GiaoHoSoComponent_table_53_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_table_53_tr_22_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const item_r31 = restoredCtx.$implicit;
      const i_r32 = restoredCtx.index;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r33.addGiaoHS(item_r31, i_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_table_53_tr_22_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const item_r31 = restoredCtx.$implicit;
      const i_r32 = restoredCtx.index;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r35.addGiaoHS(item_r31, i_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_table_53_tr_22_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const item_r31 = restoredCtx.$implicit;
      const i_r32 = restoredCtx.index;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r36.addGiaoHS(item_r31, i_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_table_53_tr_22_Template_td_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const item_r31 = restoredCtx.$implicit;
      const i_r32 = restoredCtx.index;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r37.addGiaoHS(item_r31, i_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r32 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r31.MA_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r31.TEN_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r31.DTHOAI_DVU);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r31.SNGAY_HENMAX);
  }
}
function GiaoHoSoComponent_table_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "table", 5)(1, "thead")(2, "tr")(3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "TT");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "M\u00E3 KH");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "T\u00EAn KH");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\u0110i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Ng\u00E0y h\u1EB9n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "th")(14, "th")(15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, GiaoHoSoComponent_table_53_tr_17_Template, 32, 10, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, GiaoHoSoComponent_table_53_tr_18_Template, 5, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "tr")(20, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, GiaoHoSoComponent_table_53_tr_22_Template, 11, 5, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.giaoHS);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.giaoHS.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.phanCong);
  }
}
function GiaoHoSoComponent_div_58_mat_radio_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_div_58_mat_radio_button_2_Template_mat_radio_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const item_r39 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r40.loaiHS = item_r39.NoiDung);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r39.NoiDung);
  }
}
function GiaoHoSoComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4)(1, "mat-radio-group", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, GiaoHoSoComponent_div_58_mat_radio_button_2_Template, 2, 1, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r3.catalogs);
  }
}
function GiaoHoSoComponent_mat_option_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_mat_option_70_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r44);
      const item_r42 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r43.ngKt.get("PHAN_CONG").setValue(item_r42.NoiDung));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r42.NoiDung, "");
  }
}
function GiaoHoSoComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td")(10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_tr_86_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r48);
      const i_r46 = restoredCtx.index;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r47.deleteCustomer(i_r46));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r45 = ctx.$implicit;
    const i_r46 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r46 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r45.MA_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r45.STT);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r45.TEN_KHANG);
  }
}
function GiaoHoSoComponent_td_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_td_93_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r49.saveKiemTra());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
class GiaoHoSoComponent {
  constructor(cmis4SV, formSV, idbSV, plus, docxSV, excelSV, sheetdbSV, loadSV, pouchDBSV) {
    this.cmis4SV = cmis4SV;
    this.formSV = formSV;
    this.idbSV = idbSV;
    this.plus = plus;
    this.docxSV = docxSV;
    this.excelSV = excelSV;
    this.sheetdbSV = sheetdbSV;
    this.loadSV = loadSV;
    this.pouchDBSV = pouchDBSV;
    this.main = this.formSV.fb.group({
      MA_KHANG: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      STT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      TEN_KHANG: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      LOAI_HS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1)]],
      PHAN_CONG: [''],
      GHI_CHU: [''],
      LOAI_CTO: ['']
    });
    this.ngKt = this.formSV.fb.group({
      PHAN_CONG: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
    this.api = 'cmis4-so-hoa';
    this.db = null;
    this.dbName = 'cmis4';
    this.items = [];
    this.localKey = 'items_LIST';
    this.spreadsheetId = '1t5dkWvH7_lsSow8-e9eOA5VBHwTZJbZEJ9p7Ksl5Hrs';
    this.snGiaKho = 'Data';
    this.snKiemTra = 'KiemTra';
    this.snDienKe = 'DienKe';
    this.headerKeys = [];
    this.ngay = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY');
    this.tuNgay = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(90, 'days').format('DD/MM/YYYY');
    this.denNgay = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY');
    this.tongYeuCau = [];
    this.phanCong = [];
    this.giaoHS = [];
    this.catalogs = [];
    this.nhanViens = [];
    this.catLOAI_CTO = [];
    this.catLOAI_GAN_CTO = [];
    this.nguoiKT = '';
    this.loaiHS = '';
    this.nvOpts = [];
  }
  ngOnInit() {
    this.plus.setTiTle('Giao hồ sơ');
    this.loadFromStorage();
    this.idbSV.IDB_InitDB(this.dbName).subscribe(db => {
      this.db = db;
      this.catalogs = this.plus.getCatalog('LoaiKiemTra');
      this.nhanViens = this.plus.getCatalog('NhanVien');
      this.catLOAI_CTO = this.plus.getCatalog('LOAI_CTO');
      this.catLOAI_GAN_CTO = this.plus.getCatalog('LOAI_GAN_CTO');
      console.log(this.catLOAI_GAN_CTO, this.catLOAI_CTO);
      this.idbSV.IDB_DB_GetAll(db, this.api).subscribe(res => {
        if (res.length == 0) {
          this.getSoHoa();
        }
      });
    });
    this.filter();
  }
  filter() {
    this.ngKt.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(500)).subscribe(v => {
      const input = this.plus.removeAccents(v.PHAN_CONG).toLowerCase();
      this.nvOpts = this.nhanViens.filter(x => this.plus.removeAccents(JSON.stringify(x)).toLowerCase().includes(input));
      if (this.nhanViens.length == 1) {
        this.ngKt.get('PHAN_CONG').setValue(this.nhanViens[0].NoiDung);
        this.nguoiKT = this.nhanViens[0].NoiDung;
      }
    });
  }
  get() {}
  addApp() {}
  timYeuCau(type) {
    this.phanCong = [];
    const url = 'https://cmis-api.evnspc.vn/serviceDichVu/timKiemYeuCau';
    const payTCS = {
      "strMaDviqly": "PK0500",
      "loaiYcau": "TCCS_D",
      "maYcau": "",
      "strTNTuNgay": this.tuNgay,
      "strTNDenNgay": this.denNgay,
      "daTN": true,
      "buocThien": "",
      "nguoiYcau": "",
      "kieuNgay": "",
      "diaChi": "",
      "typeDiaChi": "DCKHANG",
      "dauTuCT": 0,
      "tuNgay": "29/09/2025",
      "denNgay": "06/10/2025",
      "mucDich": -1,
      "thuanLoi": 1,
      "maKhang": "",
      "sNgayND": "0",
      "maHosoDVC": "",
      "techID": "",
      "lstLoaiDVAll": [{
        "label": "CDIEN - Cấp điện hạ áp (SH và NSH)",
        "value": "CDIEN",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDIEN",
          "maNhomYcau": 1,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 1,
          "tenLoaiYcau": "Cấp điện hạ áp (SH và NSH)",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TCCS_D - Dịch vụ thay đổi công suất sử dụng",
        "value": "TCCS_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TCCS_D",
          "maNhomYcau": 20,
          "maTto": "TC",
          "moTa": null,
          "soNgay": null,
          "stt": 1,
          "tenLoaiYcau": "Dịch vụ thay đổi công suất sử dụng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDHA_D - Dịch vụ cấp điện hạ áp",
        "value": "CDHA_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDHA_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 1,
          "tenLoaiYcau": "Dịch vụ cấp điện hạ áp",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDMT - Cấp điện mặt trời mái nhà",
        "value": "CDMT",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDMT",
          "maNhomYcau": 1,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 2,
          "tenLoaiYcau": "Cấp điện mặt trời mái nhà",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDMT_D - Cấp điện mặt trời mái nhà",
        "value": "CDMT_D",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDMT_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 2,
          "tenLoaiYcau": "Cấp điện mặt trời mái nhà",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDTC - Cấp điện tách công tơ",
        "value": "CDTC",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDTC",
          "maNhomYcau": 20,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 2,
          "tenLoaiYcau": "Cấp điện tách công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDCC - Cấp điện chung công tơ",
        "value": "CDCC",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDCC",
          "maNhomYcau": 20,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 3,
          "tenLoaiYcau": "Cấp điện chung công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNH - Cấp điện ngoài sinh hoạt ngắn hạn",
        "value": "CDNH",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDNH",
          "maNhomYcau": 2,
          "maTto": "GN",
          "moTa": null,
          "soNgay": null,
          "stt": 3,
          "tenLoaiYcau": "Cấp điện ngoài sinh hoạt ngắn hạn",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNM - Cấp điện NSH công suất max >= 40kW",
        "value": "CDNM",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDNM",
          "maNhomYcau": 20,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 3,
          "tenLoaiYcau": "Cấp điện NSH công suất max >= 40kW",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNS - Cấp điện NSH công suất max < 40kW",
        "value": "CDNS",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDNS",
          "maNhomYcau": 20,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 3,
          "tenLoaiYcau": "Cấp điện NSH công suất max < 40kW",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBAC - Cấp điện trung áp qua trạm chuyên dùng",
        "value": "TBAC",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "TBAC",
          "maNhomYcau": 3,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 23,
          "tenLoaiYcau": "Cấp điện trung áp qua trạm chuyên dùng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TCCS - Thay đổi công suất",
        "value": "TCCS",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "TCCS",
          "maNhomYcau": 12,
          "maTto": "TC",
          "moTa": null,
          "soNgay": 7,
          "stt": 25,
          "tenLoaiYcau": "Thay đổi công suất",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CKTS - Cấp điện trung áp qua trạm CD KH SH",
        "value": "CKTS",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CKTS",
          "maNhomYcau": 3,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 26,
          "tenLoaiYcau": "Cấp điện trung áp qua trạm CD KH SH",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBAE - Cấp điện TA NĐ đầu tư",
        "value": "TBAE",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "TBAE",
          "maNhomYcau": 4,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 26,
          "tenLoaiYcau": "Cấp điện TA NĐ đầu tư",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CKTM - Cấp điện trung áp KH đầu tư, mua buôn điện NT",
        "value": "CKTM",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CKTM",
          "maNhomYcau": 3,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 26,
          "tenLoaiYcau": "Cấp điện trung áp KH đầu tư, mua buôn điện NT",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBAC_D - Dịch vụ cấp điện TA KH đầu tư",
        "value": "TBAC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TBAC_D",
          "maNhomYcau": 18,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 27,
          "tenLoaiYcau": "Dịch vụ cấp điện TA KH đầu tư",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TCSTE_D - Tăng cường công suất trạm chuyên dùng điện lực",
        "value": "TCSTE_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TCSTE_D",
          "maNhomYcau": 18,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 28,
          "tenLoaiYcau": "Tăng cường công suất trạm chuyên dùng điện lực",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBSC_D - Dịch vụ cấp điện TA KH đầu tư, cấp điện sinh hoạt",
        "value": "TBSC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TBSC_D",
          "maNhomYcau": 18,
          "maTto": "GC",
          "moTa": "Dịch vụ cấp điện TA KH đầu tư, cấp điện sinh hoạt",
          "soNgay": 18,
          "stt": 28,
          "tenLoaiYcau": "Dịch vụ cấp điện TA KH đầu tư, cấp điện sinh hoạt",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBAE_D - Dịch vụ cấp điện TA NĐ đầu tư",
        "value": "TBAE_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TBAE_D",
          "maNhomYcau": 19,
          "maTto": "GE",
          "moTa": null,
          "soNgay": 18,
          "stt": 28,
          "tenLoaiYcau": "Dịch vụ cấp điện TA NĐ đầu tư",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBMC_D - Dịch vụ cấp điện TA KH đầu tư, cấp điện mua buôn điện",
        "value": "TBMC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TBMC_D",
          "maNhomYcau": 18,
          "maTto": "GC",
          "moTa": "Dịch vụ cấp điện TA KH đầu tư, cấp điện mua buôn điện",
          "soNgay": 18,
          "stt": 29,
          "tenLoaiYcau": "Dịch vụ cấp điện TA KH đầu tư, cấp điện mua buôn điện",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "DDOI_D - Dịch vụ thay đổi vị trí đo đếm",
        "value": "DDOI_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "DDOI_D",
          "maNhomYcau": 21,
          "maTto": "DC",
          "moTa": null,
          "soNgay": null,
          "stt": 30,
          "tenLoaiYcau": "Dịch vụ thay đổi vị trí đo đếm",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "MDSD_D - Dịch vụ thay đổi mục đích sử dụng điện",
        "value": "MDSD_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "MDSD_D",
          "maNhomYcau": 22,
          "maTto": "DM",
          "moTa": null,
          "soNgay": null,
          "stt": 31,
          "tenLoaiYcau": "Dịch vụ thay đổi mục đích sử dụng điện",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "SOHO_D - Dịch vụ thay đổi định mức sử dụng điện",
        "value": "SOHO_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "SOHO_D",
          "maNhomYcau": 23,
          "maTto": "SH",
          "moTa": null,
          "soNgay": null,
          "stt": 32,
          "tenLoaiYcau": "Dịch vụ thay đổi định mức sử dụng điện",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDKM_D - Dịch vụ thay đổi chủ thể HĐMBĐ",
        "value": "CDKM_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDKM_D",
          "maNhomYcau": 24,
          "maTto": "ST",
          "moTa": null,
          "soNgay": null,
          "stt": 33,
          "tenLoaiYcau": "Dịch vụ thay đổi chủ thể HĐMBĐ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTKH_D - Dịch vụ thay đổi thông tin",
        "value": "TTKH_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTKH_D",
          "maNhomYcau": 25,
          "maTto": "TI",
          "moTa": null,
          "soNgay": null,
          "stt": 34,
          "tenLoaiYcau": "Dịch vụ thay đổi thông tin",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "GHAN_D - Dịch vụ gia hạn hợp đồng",
        "value": "GHAN_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "GHAN_D",
          "maNhomYcau": 26,
          "maTto": "GH",
          "moTa": null,
          "soNgay": null,
          "stt": 35,
          "tenLoaiYcau": "Dịch vụ gia hạn hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDHD_D - Dịch vụ chấm dứt hợp đồng",
        "value": "CDHD_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDHD_D",
          "maNhomYcau": 27,
          "maTto": "TL",
          "moTa": null,
          "soNgay": null,
          "stt": 36,
          "tenLoaiYcau": "Dịch vụ chấm dứt hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "HDSD - Dịch vụ hợp đồng sau dây",
        "value": "HDSD",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "HDSD",
          "maNhomYcau": 28,
          "maTto": "SD",
          "moTa": null,
          "soNgay": null,
          "stt": 37,
          "tenLoaiYcau": "Dịch vụ hợp đồng sau dây",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "DDOI_N - Nghiệp vụ di dời nội bộ",
        "value": "DDOI_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "DDOI_N",
          "maNhomYcau": 29,
          "maTto": "DC",
          "moTa": null,
          "soNgay": null,
          "stt": 38,
          "tenLoaiYcau": "Nghiệp vụ di dời nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "MDSD_N - Nghiệp vụ thay đổi mục đích sử dụng điện nội bộ",
        "value": "MDSD_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "MDSD_N",
          "maNhomYcau": 30,
          "maTto": "DM",
          "moTa": null,
          "soNgay": null,
          "stt": 39,
          "tenLoaiYcau": "Nghiệp vụ thay đổi mục đích sử dụng điện nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "SOHO_N - Nghiệp vụ thay đổi số hộ nội bộ",
        "value": "SOHO_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "SOHO_N",
          "maNhomYcau": 31,
          "maTto": "SH",
          "moTa": null,
          "soNgay": null,
          "stt": 40,
          "tenLoaiYcau": "Nghiệp vụ thay đổi số hộ nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTKH_N - Nghiệp vụ thay đổi thông tin khách hàng nội bộ",
        "value": "TTKH_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTKH_N",
          "maNhomYcau": 32,
          "maTto": "TI",
          "moTa": null,
          "soNgay": null,
          "stt": 41,
          "tenLoaiYcau": "Nghiệp vụ thay đổi thông tin khách hàng nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "GHAN_N - Nghiệp vụ gia hạn hợp đồng nội bộ",
        "value": "GHAN_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "GHAN_N",
          "maNhomYcau": 33,
          "maTto": "GH",
          "moTa": null,
          "soNgay": null,
          "stt": 42,
          "tenLoaiYcau": "Nghiệp vụ gia hạn hợp đồng nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDHD_N - Nghiệp vụ chấm dứt hợp đồng nội bộ",
        "value": "CDHD_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDHD_N",
          "maNhomYcau": 34,
          "maTto": "TL",
          "moTa": null,
          "soNgay": null,
          "stt": 43,
          "tenLoaiYcau": "Nghiệp vụ chấm dứt hợp đồng nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTNB_N - Nghiệp vụ treo tháo thiết bị đo đếm nội bộ",
        "value": "TTNB_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTNB_N",
          "maNhomYcau": 35,
          "maTto": "TD",
          "moTa": null,
          "soNgay": null,
          "stt": 44,
          "tenLoaiYcau": "Nghiệp vụ treo tháo thiết bị đo đếm nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDKM_N - Nghiệp vụ chấm dứt ký mới hợp đồng",
        "value": "CDKM_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDKM_N",
          "maNhomYcau": 38,
          "maTto": "ST",
          "moTa": null,
          "soNgay": null,
          "stt": 45,
          "tenLoaiYcau": "Nghiệp vụ chấm dứt ký mới hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "KLMT_D - Ký hợp đồng mặt trời mái nhà",
        "value": "KLMT_D",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "KLMT_D",
          "maNhomYcau": 36,
          "maTto": "MT",
          "moTa": null,
          "soNgay": 7,
          "stt": 46,
          "tenLoaiYcau": "Ký hợp đồng mặt trời mái nhà",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "KMMT_D - Ký mới hợp đồng mặt trời mái nhà TSTT",
        "value": "KMMT_D",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "KMMT_D",
          "maNhomYcau": 36,
          "maTto": "MT",
          "moTa": "Ký mới hợp đồng mặt trời mái nhà TSTT",
          "soNgay": 7,
          "stt": 47,
          "tenLoaiYcau": "Ký mới hợp đồng mặt trời mái nhà TSTT",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TLMT_D - Dịch vụ chấm dứt hợp đồng mặt trời",
        "value": "TLMT_D",
        "item": {
          "maDtuong": "KH",
          "maLoaiYcau": "TLMT_D",
          "maNhomYcau": 37,
          "maTto": "LT",
          "moTa": "Dịch vụ chấm dứt hợp đồng mặt trời",
          "soNgay": null,
          "stt": 48,
          "tenLoaiYcau": "Dịch vụ chấm dứt hợp đồng mặt trời",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTKM_D - Dịch vụ thay đổi thông tin hợp đồng điện MTNM",
        "value": "TTKM_D",
        "item": {
          "maDtuong": "KH",
          "maLoaiYcau": "TTKM_D",
          "maNhomYcau": 39,
          "maTto": "TM",
          "moTa": "Dịch vụ thay đổi thông tin hợp đồng điện MTNM",
          "soNgay": null,
          "stt": 49,
          "tenLoaiYcau": "Dịch vụ thay đổi thông tin hợp đồng điện MTNM",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDCC_D - Cấp điện chung công tơ",
        "value": "CDCC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDCC_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Cấp điện chung công tơ",
          "soNgay": 7,
          "stt": 50,
          "tenLoaiYcau": "Cấp điện chung công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDTC_D - Cấp điện tách công tơ dùng chung",
        "value": "CDTC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDTC_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Cấp điện tách công tơ dùng chung",
          "soNgay": 7,
          "stt": 51,
          "tenLoaiYcau": "Cấp điện tách công tơ dùng chung",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNS_D - Dịch vụ cấp điện NSH công suất max < 40kW",
        "value": "CDNS_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDNS_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Dịch vụ cấp điện NSH công suất max < 40kW",
          "soNgay": 7,
          "stt": 52,
          "tenLoaiYcau": "Dịch vụ cấp điện NSH công suất max < 40kW",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNM_D - Dịch vụ cấp điện NSH công suất max >= 40kW",
        "value": "CDNM_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDNM_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Dịch vụ cấp điện NSH công suất max >= 40kW",
          "soNgay": 7,
          "stt": 53,
          "tenLoaiYcau": "Dịch vụ cấp điện NSH công suất max >= 40kW",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNH_D - Dịch vụ cấp điện NSH ngắn hạn",
        "value": "CDNH_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDNH_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Dịch vụ cấp điện NSH ngắn hạn",
          "soNgay": 7,
          "stt": 54,
          "tenLoaiYcau": "Dịch vụ cấp điện NSH ngắn hạn",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "KTCT_D - Dịch vụ kiểm tra công tơ",
        "value": "KTCT_D",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "KTCT_D",
          "maNhomYcau": 40,
          "maTto": "KR",
          "moTa": "Dịch vụ kiểm tra công tơ",
          "soNgay": 7,
          "stt": 55,
          "tenLoaiYcau": "Dịch vụ kiểm tra công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDLAI_D - Dịch vụ cấp điện trở lại theo KH yêu cầu",
        "value": "CDLAI_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDLAI_D",
          "maNhomYcau": 41,
          "maTto": "CL",
          "moTa": "Dịch vụ cấp điện trở lại theo KH yêu cầu",
          "soNgay": 7,
          "stt": 56,
          "tenLoaiYcau": "Dịch vụ cấp điện trở lại theo KH yêu cầu",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CSPK_N - Nghiệp vụ ký mua CSPK",
        "value": "CSPK_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CSPK_N",
          "maNhomYcau": 42,
          "maTto": "CS",
          "moTa": "Nghiệp vụ ký mua CSPK",
          "soNgay": null,
          "stt": 57,
          "tenLoaiYcau": "Nghiệp vụ ký mua CSPK",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "BDHD_N - Nghiệp vụ bảo đảm thực hiện hợp đồng",
        "value": "BDHD_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "BDHD_N",
          "maNhomYcau": 43,
          "maTto": "BD",
          "moTa": "Nghiệp vụ bảo đảm thực hiện hợp đồng",
          "soNgay": null,
          "stt": 58,
          "tenLoaiYcau": "Nghiệp vụ bảo đảm thực hiện hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTKH - Yêu cầu thay đổi thông tin khách hàng",
        "value": "TTKH",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTKH",
          "maNhomYcau": 11,
          "maTto": "TI",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Yêu cầu thay đổi thông tin khách hàng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "MDSD - Thay đổi mục đích sử dụng điện",
        "value": "MDSD",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "MDSD",
          "maNhomYcau": 6,
          "maTto": "DM",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Thay đổi mục đích sử dụng điện",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "KTCT - Kiểm tra công tơ",
        "value": "KTCT",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "KTCT",
          "maNhomYcau": 5,
          "maTto": "KR",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Kiểm tra công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TNCD - Ngừng cấp điện theo yêu cầu của KH",
        "value": "TNCD",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TNCD",
          "maNhomYcau": 10,
          "maTto": "NG",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Ngừng cấp điện theo yêu cầu của KH",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "DDOI - Di dời công tơ",
        "value": "DDOI",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "DDOI",
          "maNhomYcau": 14,
          "maTto": "DC",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Di dời công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDLAI - Cấp điện lại theo yêu cầu",
        "value": "CDLAI",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDLAI",
          "maNhomYcau": 15,
          "maTto": "CL",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Cấp điện lại theo yêu cầu",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTTT - Thông tin thanh toán",
        "value": "TTTT",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTTT",
          "maNhomYcau": 16,
          "maTto": "TT",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Thông tin thanh toán",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TLYKMOI - Yêu cầu thanh lý ký mới hợp đồng",
        "value": "TLYKMOI",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TLYKMOI",
          "maNhomYcau": 9,
          "maTto": "ST",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Yêu cầu thanh lý ký mới hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TLYHD - Yêu cầu thanh lý hợp đồng",
        "value": "TLYHD",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TLYHD",
          "maNhomYcau": 8,
          "maTto": "TL",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Yêu cầu thanh lý hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "GHAN - Yêu cầu gia hạn hợp đồng",
        "value": "GHAN",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "GHAN",
          "maNhomYcau": 13,
          "maTto": "GH",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Yêu cầu gia hạn hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "SOHO - Thay đổi số hộ",
        "value": "SOHO",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "SOHO",
          "maNhomYcau": 7,
          "maTto": "SH",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Thay đổi số hộ",
          "_persistence_fetchGroup": null
        }
      }],
      "routeName": "CapDienSHoatHDDT",
      "phanHeThucHien": "HDONGDTU"
    };
    const payload = {
      "strMaDviqly": "PK0500",
      "loaiYcau": "CDHA_D",
      "maYcau": "",
      "strTNTuNgay": this.tuNgay,
      "strTNDenNgay": this.denNgay,
      "tuNgay": this.tuNgay,
      "denNgay": this.denNgay,
      "daTN": true,
      "buocThien": "",
      "nguoiYcau": "",
      "kieuNgay": "",
      "diaChi": "",
      "typeDiaChi": "DCKHANG",
      "dauTuCT": 0,
      "mucDich": -1,
      "thuanLoi": 1,
      "maKhang": "",
      "sNgayND": "0",
      "maHosoDVC": "",
      "techID": "",
      "lstLoaiDVAll": [{
        "label": "CDIEN - Cấp điện hạ áp (SH và NSH)",
        "value": "CDIEN",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDIEN",
          "maNhomYcau": 1,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 1,
          "tenLoaiYcau": "Cấp điện hạ áp (SH và NSH)",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TCCS_D - Dịch vụ thay đổi công suất sử dụng",
        "value": "TCCS_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TCCS_D",
          "maNhomYcau": 20,
          "maTto": "TC",
          "moTa": null,
          "soNgay": null,
          "stt": 1,
          "tenLoaiYcau": "Dịch vụ thay đổi công suất sử dụng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDHA_D - Dịch vụ cấp điện hạ áp",
        "value": "CDHA_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDHA_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 1,
          "tenLoaiYcau": "Dịch vụ cấp điện hạ áp",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDMT - Cấp điện mặt trời mái nhà",
        "value": "CDMT",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDMT",
          "maNhomYcau": 1,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 2,
          "tenLoaiYcau": "Cấp điện mặt trời mái nhà",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDMT_D - Cấp điện mặt trời mái nhà",
        "value": "CDMT_D",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDMT_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 2,
          "tenLoaiYcau": "Cấp điện mặt trời mái nhà",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDTC - Cấp điện tách công tơ",
        "value": "CDTC",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDTC",
          "maNhomYcau": 20,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 2,
          "tenLoaiYcau": "Cấp điện tách công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDCC - Cấp điện chung công tơ",
        "value": "CDCC",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDCC",
          "maNhomYcau": 20,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 3,
          "tenLoaiYcau": "Cấp điện chung công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNH - Cấp điện ngoài sinh hoạt ngắn hạn",
        "value": "CDNH",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDNH",
          "maNhomYcau": 2,
          "maTto": "GN",
          "moTa": null,
          "soNgay": null,
          "stt": 3,
          "tenLoaiYcau": "Cấp điện ngoài sinh hoạt ngắn hạn",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNM - Cấp điện NSH công suất max >= 40kW",
        "value": "CDNM",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDNM",
          "maNhomYcau": 20,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 3,
          "tenLoaiYcau": "Cấp điện NSH công suất max >= 40kW",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNS - Cấp điện NSH công suất max < 40kW",
        "value": "CDNS",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CDNS",
          "maNhomYcau": 20,
          "maTto": "GK",
          "moTa": null,
          "soNgay": 7,
          "stt": 3,
          "tenLoaiYcau": "Cấp điện NSH công suất max < 40kW",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBAC - Cấp điện trung áp qua trạm chuyên dùng",
        "value": "TBAC",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "TBAC",
          "maNhomYcau": 3,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 23,
          "tenLoaiYcau": "Cấp điện trung áp qua trạm chuyên dùng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TCCS - Thay đổi công suất",
        "value": "TCCS",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "TCCS",
          "maNhomYcau": 12,
          "maTto": "TC",
          "moTa": null,
          "soNgay": 7,
          "stt": 25,
          "tenLoaiYcau": "Thay đổi công suất",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CKTS - Cấp điện trung áp qua trạm CD KH SH",
        "value": "CKTS",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CKTS",
          "maNhomYcau": 3,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 26,
          "tenLoaiYcau": "Cấp điện trung áp qua trạm CD KH SH",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBAE - Cấp điện TA NĐ đầu tư",
        "value": "TBAE",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "TBAE",
          "maNhomYcau": 4,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 26,
          "tenLoaiYcau": "Cấp điện TA NĐ đầu tư",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CKTM - Cấp điện trung áp KH đầu tư, mua buôn điện NT",
        "value": "CKTM",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "CKTM",
          "maNhomYcau": 3,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 26,
          "tenLoaiYcau": "Cấp điện trung áp KH đầu tư, mua buôn điện NT",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBAC_D - Dịch vụ cấp điện TA KH đầu tư",
        "value": "TBAC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TBAC_D",
          "maNhomYcau": 18,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 27,
          "tenLoaiYcau": "Dịch vụ cấp điện TA KH đầu tư",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TCSTE_D - Tăng cường công suất trạm chuyên dùng điện lực",
        "value": "TCSTE_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TCSTE_D",
          "maNhomYcau": 18,
          "maTto": "GC",
          "moTa": null,
          "soNgay": 18,
          "stt": 28,
          "tenLoaiYcau": "Tăng cường công suất trạm chuyên dùng điện lực",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBSC_D - Dịch vụ cấp điện TA KH đầu tư, cấp điện sinh hoạt",
        "value": "TBSC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TBSC_D",
          "maNhomYcau": 18,
          "maTto": "GC",
          "moTa": "Dịch vụ cấp điện TA KH đầu tư, cấp điện sinh hoạt",
          "soNgay": 18,
          "stt": 28,
          "tenLoaiYcau": "Dịch vụ cấp điện TA KH đầu tư, cấp điện sinh hoạt",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBAE_D - Dịch vụ cấp điện TA NĐ đầu tư",
        "value": "TBAE_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TBAE_D",
          "maNhomYcau": 19,
          "maTto": "GE",
          "moTa": null,
          "soNgay": 18,
          "stt": 28,
          "tenLoaiYcau": "Dịch vụ cấp điện TA NĐ đầu tư",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TBMC_D - Dịch vụ cấp điện TA KH đầu tư, cấp điện mua buôn điện",
        "value": "TBMC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TBMC_D",
          "maNhomYcau": 18,
          "maTto": "GC",
          "moTa": "Dịch vụ cấp điện TA KH đầu tư, cấp điện mua buôn điện",
          "soNgay": 18,
          "stt": 29,
          "tenLoaiYcau": "Dịch vụ cấp điện TA KH đầu tư, cấp điện mua buôn điện",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "DDOI_D - Dịch vụ thay đổi vị trí đo đếm",
        "value": "DDOI_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "DDOI_D",
          "maNhomYcau": 21,
          "maTto": "DC",
          "moTa": null,
          "soNgay": null,
          "stt": 30,
          "tenLoaiYcau": "Dịch vụ thay đổi vị trí đo đếm",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "MDSD_D - Dịch vụ thay đổi mục đích sử dụng điện",
        "value": "MDSD_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "MDSD_D",
          "maNhomYcau": 22,
          "maTto": "DM",
          "moTa": null,
          "soNgay": null,
          "stt": 31,
          "tenLoaiYcau": "Dịch vụ thay đổi mục đích sử dụng điện",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "SOHO_D - Dịch vụ thay đổi định mức sử dụng điện",
        "value": "SOHO_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "SOHO_D",
          "maNhomYcau": 23,
          "maTto": "SH",
          "moTa": null,
          "soNgay": null,
          "stt": 32,
          "tenLoaiYcau": "Dịch vụ thay đổi định mức sử dụng điện",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDKM_D - Dịch vụ thay đổi chủ thể HĐMBĐ",
        "value": "CDKM_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDKM_D",
          "maNhomYcau": 24,
          "maTto": "ST",
          "moTa": null,
          "soNgay": null,
          "stt": 33,
          "tenLoaiYcau": "Dịch vụ thay đổi chủ thể HĐMBĐ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTKH_D - Dịch vụ thay đổi thông tin",
        "value": "TTKH_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTKH_D",
          "maNhomYcau": 25,
          "maTto": "TI",
          "moTa": null,
          "soNgay": null,
          "stt": 34,
          "tenLoaiYcau": "Dịch vụ thay đổi thông tin",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "GHAN_D - Dịch vụ gia hạn hợp đồng",
        "value": "GHAN_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "GHAN_D",
          "maNhomYcau": 26,
          "maTto": "GH",
          "moTa": null,
          "soNgay": null,
          "stt": 35,
          "tenLoaiYcau": "Dịch vụ gia hạn hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDHD_D - Dịch vụ chấm dứt hợp đồng",
        "value": "CDHD_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDHD_D",
          "maNhomYcau": 27,
          "maTto": "TL",
          "moTa": null,
          "soNgay": null,
          "stt": 36,
          "tenLoaiYcau": "Dịch vụ chấm dứt hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "HDSD - Dịch vụ hợp đồng sau dây",
        "value": "HDSD",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "HDSD",
          "maNhomYcau": 28,
          "maTto": "SD",
          "moTa": null,
          "soNgay": null,
          "stt": 37,
          "tenLoaiYcau": "Dịch vụ hợp đồng sau dây",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "DDOI_N - Nghiệp vụ di dời nội bộ",
        "value": "DDOI_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "DDOI_N",
          "maNhomYcau": 29,
          "maTto": "DC",
          "moTa": null,
          "soNgay": null,
          "stt": 38,
          "tenLoaiYcau": "Nghiệp vụ di dời nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "MDSD_N - Nghiệp vụ thay đổi mục đích sử dụng điện nội bộ",
        "value": "MDSD_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "MDSD_N",
          "maNhomYcau": 30,
          "maTto": "DM",
          "moTa": null,
          "soNgay": null,
          "stt": 39,
          "tenLoaiYcau": "Nghiệp vụ thay đổi mục đích sử dụng điện nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "SOHO_N - Nghiệp vụ thay đổi số hộ nội bộ",
        "value": "SOHO_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "SOHO_N",
          "maNhomYcau": 31,
          "maTto": "SH",
          "moTa": null,
          "soNgay": null,
          "stt": 40,
          "tenLoaiYcau": "Nghiệp vụ thay đổi số hộ nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTKH_N - Nghiệp vụ thay đổi thông tin khách hàng nội bộ",
        "value": "TTKH_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTKH_N",
          "maNhomYcau": 32,
          "maTto": "TI",
          "moTa": null,
          "soNgay": null,
          "stt": 41,
          "tenLoaiYcau": "Nghiệp vụ thay đổi thông tin khách hàng nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "GHAN_N - Nghiệp vụ gia hạn hợp đồng nội bộ",
        "value": "GHAN_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "GHAN_N",
          "maNhomYcau": 33,
          "maTto": "GH",
          "moTa": null,
          "soNgay": null,
          "stt": 42,
          "tenLoaiYcau": "Nghiệp vụ gia hạn hợp đồng nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDHD_N - Nghiệp vụ chấm dứt hợp đồng nội bộ",
        "value": "CDHD_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDHD_N",
          "maNhomYcau": 34,
          "maTto": "TL",
          "moTa": null,
          "soNgay": null,
          "stt": 43,
          "tenLoaiYcau": "Nghiệp vụ chấm dứt hợp đồng nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTNB_N - Nghiệp vụ treo tháo thiết bị đo đếm nội bộ",
        "value": "TTNB_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTNB_N",
          "maNhomYcau": 35,
          "maTto": "TD",
          "moTa": null,
          "soNgay": null,
          "stt": 44,
          "tenLoaiYcau": "Nghiệp vụ treo tháo thiết bị đo đếm nội bộ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDKM_N - Nghiệp vụ chấm dứt ký mới hợp đồng",
        "value": "CDKM_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDKM_N",
          "maNhomYcau": 38,
          "maTto": "ST",
          "moTa": null,
          "soNgay": null,
          "stt": 45,
          "tenLoaiYcau": "Nghiệp vụ chấm dứt ký mới hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "KLMT_D - Ký hợp đồng mặt trời mái nhà",
        "value": "KLMT_D",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "KLMT_D",
          "maNhomYcau": 36,
          "maTto": "MT",
          "moTa": null,
          "soNgay": 7,
          "stt": 46,
          "tenLoaiYcau": "Ký hợp đồng mặt trời mái nhà",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "KMMT_D - Ký mới hợp đồng mặt trời mái nhà TSTT",
        "value": "KMMT_D",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "KMMT_D",
          "maNhomYcau": 36,
          "maTto": "MT",
          "moTa": "Ký mới hợp đồng mặt trời mái nhà TSTT",
          "soNgay": 7,
          "stt": 47,
          "tenLoaiYcau": "Ký mới hợp đồng mặt trời mái nhà TSTT",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TLMT_D - Dịch vụ chấm dứt hợp đồng mặt trời",
        "value": "TLMT_D",
        "item": {
          "maDtuong": "KH",
          "maLoaiYcau": "TLMT_D",
          "maNhomYcau": 37,
          "maTto": "LT",
          "moTa": "Dịch vụ chấm dứt hợp đồng mặt trời",
          "soNgay": null,
          "stt": 48,
          "tenLoaiYcau": "Dịch vụ chấm dứt hợp đồng mặt trời",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTKM_D - Dịch vụ thay đổi thông tin hợp đồng điện MTNM",
        "value": "TTKM_D",
        "item": {
          "maDtuong": "KH",
          "maLoaiYcau": "TTKM_D",
          "maNhomYcau": 39,
          "maTto": "TM",
          "moTa": "Dịch vụ thay đổi thông tin hợp đồng điện MTNM",
          "soNgay": null,
          "stt": 49,
          "tenLoaiYcau": "Dịch vụ thay đổi thông tin hợp đồng điện MTNM",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDCC_D - Cấp điện chung công tơ",
        "value": "CDCC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDCC_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Cấp điện chung công tơ",
          "soNgay": 7,
          "stt": 50,
          "tenLoaiYcau": "Cấp điện chung công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDTC_D - Cấp điện tách công tơ dùng chung",
        "value": "CDTC_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDTC_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Cấp điện tách công tơ dùng chung",
          "soNgay": 7,
          "stt": 51,
          "tenLoaiYcau": "Cấp điện tách công tơ dùng chung",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNS_D - Dịch vụ cấp điện NSH công suất max < 40kW",
        "value": "CDNS_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDNS_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Dịch vụ cấp điện NSH công suất max < 40kW",
          "soNgay": 7,
          "stt": 52,
          "tenLoaiYcau": "Dịch vụ cấp điện NSH công suất max < 40kW",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNM_D - Dịch vụ cấp điện NSH công suất max >= 40kW",
        "value": "CDNM_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDNM_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Dịch vụ cấp điện NSH công suất max >= 40kW",
          "soNgay": 7,
          "stt": 53,
          "tenLoaiYcau": "Dịch vụ cấp điện NSH công suất max >= 40kW",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDNH_D - Dịch vụ cấp điện NSH ngắn hạn",
        "value": "CDNH_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDNH_D",
          "maNhomYcau": 17,
          "maTto": "GK",
          "moTa": "Dịch vụ cấp điện NSH ngắn hạn",
          "soNgay": 7,
          "stt": 54,
          "tenLoaiYcau": "Dịch vụ cấp điện NSH ngắn hạn",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "KTCT_D - Dịch vụ kiểm tra công tơ",
        "value": "KTCT_D",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "KTCT_D",
          "maNhomYcau": 40,
          "maTto": "KR",
          "moTa": "Dịch vụ kiểm tra công tơ",
          "soNgay": 7,
          "stt": 55,
          "tenLoaiYcau": "Dịch vụ kiểm tra công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDLAI_D - Dịch vụ cấp điện trở lại theo KH yêu cầu",
        "value": "CDLAI_D",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDLAI_D",
          "maNhomYcau": 41,
          "maTto": "CL",
          "moTa": "Dịch vụ cấp điện trở lại theo KH yêu cầu",
          "soNgay": 7,
          "stt": 56,
          "tenLoaiYcau": "Dịch vụ cấp điện trở lại theo KH yêu cầu",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CSPK_N - Nghiệp vụ ký mua CSPK",
        "value": "CSPK_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CSPK_N",
          "maNhomYcau": 42,
          "maTto": "CS",
          "moTa": "Nghiệp vụ ký mua CSPK",
          "soNgay": null,
          "stt": 57,
          "tenLoaiYcau": "Nghiệp vụ ký mua CSPK",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "BDHD_N - Nghiệp vụ bảo đảm thực hiện hợp đồng",
        "value": "BDHD_N",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "BDHD_N",
          "maNhomYcau": 43,
          "maTto": "BD",
          "moTa": "Nghiệp vụ bảo đảm thực hiện hợp đồng",
          "soNgay": null,
          "stt": 58,
          "tenLoaiYcau": "Nghiệp vụ bảo đảm thực hiện hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTKH - Yêu cầu thay đổi thông tin khách hàng",
        "value": "TTKH",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTKH",
          "maNhomYcau": 11,
          "maTto": "TI",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Yêu cầu thay đổi thông tin khách hàng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "MDSD - Thay đổi mục đích sử dụng điện",
        "value": "MDSD",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "MDSD",
          "maNhomYcau": 6,
          "maTto": "DM",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Thay đổi mục đích sử dụng điện",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "KTCT - Kiểm tra công tơ",
        "value": "KTCT",
        "item": {
          "maDtuong": "DD",
          "maLoaiYcau": "KTCT",
          "maNhomYcau": 5,
          "maTto": "KR",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Kiểm tra công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TNCD - Ngừng cấp điện theo yêu cầu của KH",
        "value": "TNCD",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TNCD",
          "maNhomYcau": 10,
          "maTto": "NG",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Ngừng cấp điện theo yêu cầu của KH",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "DDOI - Di dời công tơ",
        "value": "DDOI",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "DDOI",
          "maNhomYcau": 14,
          "maTto": "DC",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Di dời công tơ",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "CDLAI - Cấp điện lại theo yêu cầu",
        "value": "CDLAI",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "CDLAI",
          "maNhomYcau": 15,
          "maTto": "CL",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Cấp điện lại theo yêu cầu",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TTTT - Thông tin thanh toán",
        "value": "TTTT",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TTTT",
          "maNhomYcau": 16,
          "maTto": "TT",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Thông tin thanh toán",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TLYKMOI - Yêu cầu thanh lý ký mới hợp đồng",
        "value": "TLYKMOI",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TLYKMOI",
          "maNhomYcau": 9,
          "maTto": "ST",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Yêu cầu thanh lý ký mới hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "TLYHD - Yêu cầu thanh lý hợp đồng",
        "value": "TLYHD",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "TLYHD",
          "maNhomYcau": 8,
          "maTto": "TL",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Yêu cầu thanh lý hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "GHAN - Yêu cầu gia hạn hợp đồng",
        "value": "GHAN",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "GHAN",
          "maNhomYcau": 13,
          "maTto": "GH",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Yêu cầu gia hạn hợp đồng",
          "_persistence_fetchGroup": null
        }
      }, {
        "label": "SOHO - Thay đổi số hộ",
        "value": "SOHO",
        "item": {
          "maDtuong": null,
          "maLoaiYcau": "SOHO",
          "maNhomYcau": 7,
          "maTto": "SH",
          "moTa": null,
          "soNgay": null,
          "stt": null,
          "tenLoaiYcau": "Thay đổi số hộ",
          "_persistence_fetchGroup": null
        }
      }],
      "routeName": "CapDienSHoatDT",
      "phanHeThucHien": "CDIENDTU"
    };
    this.cmis4SV.cmis4Request(url, '', type == 0 ? payload : payTCS).then(res => {
      this.tongYeuCau = res;
      for (let i = 0; i < res.length; i++) {
        const el = res[i];
        if (el.MA_CVIEC == 'CH9' && type == 0 || el.MA_CVIEC == 'PC' && type == 1) {
          const body = {
            MA_KHANG: el.MA_KHANG,
            TEN_KHANG: el.TEN_KHANG,
            DTHOAI_DVU: el.DTHOAI,
            DIA_CHI: el.DUONG_PHO,
            CHUOI_GIA: el.CHUOI_GIA,
            MA_LOAI_YCAU: el.MA_LOAI_YCAU,
            SNGAY_HENMAX: el.SNGAY_HENMAX,
            NGAY_GIAO: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY'),
            NGUOI_GIAO: window.max.fullName
          };
          console.log(el);
          this.phanCong.push(body);
        }
      }
      this.phanCong.sort((a, b) => a.MA_KHANG > b.MA_KHANG ? 1 : -1);
    });
  }
  exportCDHA() {
    this.excelSV.export(this.tongYeuCau, 'CDHA');
  }
  setValueByKey(key, index) {
    this.giaoHS[index][key] = this.main.get(key).value;
    console.log(this.giaoHS[index]);
  }
  addGiaoHS(item, i) {
    const body = this.main.value;
    item['GHI_CHU'] = body.GHI_CHU;
    item['LOAI_CTO'] = body.LOAI_CTO;
    this.giaoHS.push(item);
    this.phanCong.splice(i, 1);
  }
  getDate(date, type) {
    type == 0 ? this.tuNgay = date : this.denNgay = date;
  }
  xoaPhanCong(el, i) {
    this.giaoHS.splice(i, 1);
    this.phanCong.push(el);
  }
  getHeader() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.sheetdbSV.get(_this.spreadsheetId, _this.snGiaKho + '!1:1').subscribe(res => {
        console.log(res);
        _this.headerKeys = res[0];
      });
    })();
  }
  getSoHoa() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.sheetdbSV.getAll('1zhuwB9qoLm5kyFfpJFoa-1yKKsMN1Ltn9tejML8Dguo', 'SoHoa').then(res => {
        console.log(res[0]);
        _this2.idbSV.IDB_DB_Add(_this2.db, _this2.api, res);
      });
    })();
  }
  read() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const outData = [];
      const data = yield _this3.sheetdbSV.getAll(_this3.spreadsheetId, _this3.snGiaKho);
      console.log('Dữ liệu:', data);
      if (data.length == 0) {
        return _this3.plus.alertSuccess('Không có hồ sơ giao ngày này');
      }
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.NGAY_GIAO == _this3.ngay && item.NGUOI_GIAO == window.max.fullName) {
          outData.push(item);
        }
      }
      const body = {
        NGUOI_GIAO: window.max.fullName,
        NGAY_GIAO: _this3.ngay,
        tb: outData
      };
      _this3.docxSV.loadFileByName('BB-GiaoKho').then( /*#__PURE__*/function () {
        var _ref = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (wordFIle) {
          _this3.docxSV.generateOne(body, wordFIle, _this3.ngay);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  readGanMoi() {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (type = 0) {
      const ngay = type == 0 ? _this4.ngay : _this4.denNgay;
      const outData = [];
      const data = yield _this4.sheetdbSV.getAll(_this4.spreadsheetId, _this4.snDienKe);
      console.log('Dữ liệu:', data);
      debugger;
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.NGAY_GIAO == ngay && item.NGUOI_GIAO == window.max.fullName) {
          outData.push(item);
        }
      }
      const body = {
        NGUOI_GIAO: window.max.fullName,
        NGAY_GIAO: _this4.ngay,
        tb: outData
      };
      _this4.docxSV.loadFileByName('BB-GiaoGanMoi').then( /*#__PURE__*/function () {
        var _ref2 = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (wordFIle) {
          _this4.docxSV.generateOne(body, wordFIle, _this4.ngay);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }).apply(this, arguments);
  }
  saveToStorage() {
    localStorage.setItem(this.localKey, JSON.stringify(this.items));
  }
  clearToStorage() {
    localStorage.setItem(this.localKey, JSON.stringify([]));
  }
  loadFromStorage() {
    const data = localStorage.getItem(this.localKey);
    if (data) {
      this.items = JSON.parse(data);
    }
  }
  addKiemTra() {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = _this5.main.value;
      data.MA_KHANG = _this5.cmis4SV.convertPK(data.MA_KHANG);
      const STT = yield _this5.getSoTT(data.MA_KHANG);
      data.STT = STT?.SoThuTu || '';
      const dataKH = yield _this5.cmis4SV.layTtinKHangMoinhat(data.MA_KHANG);
      data.TEN_KHANG = dataKH.HDG_KHACH_HANG[0].TEN_KHANG;
      data.NGUOI_GIAO = window.max.fullName;
      data.NGAY_GIAO = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY');
      data.LOAI_HS = _this5.loaiHS;
      data.PHAN_CONG = _this5.ngKt.value.PHAN_CONG;
      debugger;
      if (data.MA_KHANG.length == 0 || data.LOAI_HS.length == 0 || data.PHAN_CONG.length == 0) return _this5.plus.alertWarning('Vui lòng nhập đủ thông tin');
      _this5.items.push(data);
      _this5.main.reset();
      _this5.main.controls['LOAI_HS'].setValue(data.LOAI_HS);
      _this5.main.controls['PHAN_CONG'].setValue(data.PHAN_CONG);
      _this5.saveToStorage();
      _this5.plus.focusById('MA_KHANG');
    })();
  }
  addCustomer() {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = _this6.main.value;
      data.MA_KHANG = _this6.cmis4SV.convertPK(data.MA_KHANG);
      if (data.MA_KHANG.length == 0 || data.LOAI_HS.length == 0) return _this6.plus.alertWarning('Vui lòng nhập đủ thông tin');
      const STT = yield _this6.getSoTT(data.MA_KHANG);
      data.STT = STT?.SoThuTu || '';
      debugger;
      const dataKH = yield _this6.cmis4SV.layTtinKHangMoinhat(data.MA_KHANG);
      data.TEN_KHANG = dataKH.HDG_KHACH_HANG[0].TEN_KHANG;
      data.NGUOI_GIAO = window.max.fullName;
      data.NGAY_GIAO = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY');
      debugger;
      _this6.items.push(data);
      _this6.main.reset();
      _this6.main.controls['LOAI_HS'].setValue(data.LOAI_HS);
      _this6.main.controls['PHAN_CONG'].setValue(data.PHAN_CONG);
      _this6.saveToStorage();
      _this6.plus.focusById('MA_KHANG');
    })();
  }
  deleteCustomer(index) {
    this.items.splice(index, 1);
    this.saveToStorage();
  }
  saveCustomer() {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.loadSV.load('saveCustomer');
      _this7.sheetdbSV.addMany(_this7.spreadsheetId, _this7.snGiaKho, _this7.items).then(res => {
        console.log(res);
        if (+res.status == 200) {
          _this7.clearToStorage();
          _this7.plus.alertSuccess('Đã lưu thành công');
          _this7.items = [];
        }
        _this7.loadSV.loaded('saveCustomer');
      });
    })();
  }
  saveDienKe() {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.loadSV.load('saveDienKe');
      _this8.sheetdbSV.addMany(_this8.spreadsheetId, _this8.snDienKe, _this8.giaoHS).then(res => {
        console.log(res);
        if (+res.status == 200) {
          _this8.clearToStorage();
          _this8.plus.alertSuccess('Đã lưu thành công');
          _this8.giaoHS = [];
          _this8.readGanMoi();
          _this8.loadSV.loaded('saveDienKe');
        }
      });
    })();
  }
  saveKiemTra() {
    var _this9 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.loadSV.load('saveKiemTra');
      const sheetName = _this9.snKiemTra;
      _this9.sheetdbSV.addMany(_this9.spreadsheetId, sheetName, _this9.items).then(res => {
        console.log(res);
        if (+res.status == 200) {
          _this9.clearToStorage();
          _this9.plus.alertSuccess('Đã lưu thành công');
          _this9.items = [];
          _this9.readKiemTra();
          _this9.loadSV.loaded('saveKiemTra');
        }
      });
    })();
  }
  readKiemTra() {
    var _this0 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const outData = [];
      const data = yield _this0.sheetdbSV.getAll(_this0.spreadsheetId, _this0.snKiemTra);
      console.log('Dữ liệu:', data);
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.NGAY_GIAO == _this0.ngay) {
          outData.push(item);
        }
      }
      const body = {
        NGUOI_GIAO: window.max.fullName,
        NGAY_GIAO: _this0.ngay,
        tb: outData
      };
      _this0.docxSV.loadFileByName('BB-GiaoKho').then( /*#__PURE__*/function () {
        var _ref3 = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (wordFIle) {
          _this0.docxSV.generateOne(body, wordFIle, _this0.ngay);
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  getSoTT(maKH) {
    var _this1 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this1.idbSV.IDB_DB_GetById(_this1.db, _this1.api, _this1.cmis4SV.convertPK(maKH)).catch(err => null);
    })();
  }
  checkPer(level, api = this.api) {
    return window.max ? window.max.opt[api] > level ? true : false : false;
  }
  static {
    this.ɵfac = function GiaoHoSoComponent_Factory(t) {
      return new (t || GiaoHoSoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_3__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_4__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__.IndexeddbServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_6__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_7__.DocxtemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_8__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_9__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_2__.PouchdbService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: GiaoHoSoComponent,
      selectors: [["app-giao-ho-so"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_2__.PouchdbService])],
      decls: 99,
      vars: 27,
      consts: [[1, "container", "py-3"], [1, "btn"], ["href", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTafHDzF91q-8bUbDSincnSbiURNIvjrFLOq6XDAZ9sWTaSpKAMidqZMDYU3D0A7ylsszdQw_ksBkuB/pubhtml", "target", "_blank"], ["mat-raised-button", ""], [1, "row"], [1, "table", "table-striped", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["matInput", "", "id", "MA_KHANG", "required", "", "placeholder", "M\u00E3 kh\u00E1ch h\u00E0ng", "formControlName", "MA_KHANG", 3, "keyup.enter"], ["matInput", "", "required", "", "placeholder", "Lo\u1EA1i h\u1ED3 s\u01A1", "formControlName", "LOAI_HS", 3, "keyup.enter"], ["colspan", "5", "class", "text-center", 4, "ngIf"], [1, "col"], [3, "startDay", "openOnFocus", "label", "format", "month"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["class", "table  table-striped table-hover", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col", 3, "formGroup"], ["type", "text", "placeholder", "Ng\u00E2n h\u00E0ng \u0111\u01A1n v\u1ECB nh\u1EADn ti\u1EC1n", "matInput", "", "formControlName", "PHAN_CONG", 3, "matAutocomplete"], ["matPrefix", "", "color", "warn", "mat-icon-button", "", 3, "click"], ["auto", "matAutocomplete"], [3, "click", 4, "ngFor", "ngForOf"], ["colspan", "3"], [3, "click"], ["colspan", "5", 1, "text-center"], ["mat-raised-button", "", "color", "warn", 3, "click"], [3, "formGroup", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["colspan", "8"], ["matInput", "", "formControlName", "LOAI_CTO", 3, "matAutocomplete", "blur"], ["autoActiveFirstOption", ""], ["autoLOAI_CTO", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "GHI_CHU", 3, "matAutocomplete", "blur"], ["autoGHI_CHU", "matAutocomplete"], ["color", "warn", 3, "click"], [3, "value"], ["colspan", "4", 3, "click"], [1, "font-blue"]],
      template: function GiaoHoSoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " Xem d\u1EEF li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 4)(6, "mat-expansion-panel")(7, "mat-expansion-panel-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Giao Kho ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "table", 5)(10, "thead")(11, "tr")(12, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "TT");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "M\u00E3 KH");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "STT h\u1ED3 s\u01A1");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "T\u00EAn KH");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Lo\u1EA1i h\u1ED3 s\u01A1");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, GiaoHoSoComponent_tr_24_Template, 15, 5, "tr", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "tr", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "td")(28, "mat-form-field")(29, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup.enter", function GiaoHoSoComponent_Template_input_keyup_enter_29_listener() {
            return ctx.addCustomer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "td")(31, "mat-form-field")(32, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup.enter", function GiaoHoSoComponent_Template_input_keyup_enter_32_listener() {
            return ctx.addCustomer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, GiaoHoSoComponent_td_34_Template, 4, 0, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 4)(36, "div", 12)(37, "app-date-picker", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("month", function GiaoHoSoComponent_Template_app_date_picker_month_37_listener($event) {
            return ctx.ngay = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_Template_button_click_38_listener() {
            return ctx.read();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "L\u1EA5y danh s\u00E1ch theo ng\u00E0y");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 4)(41, "mat-expansion-panel")(42, "mat-expansion-panel-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, " Giao G\u1EAFn M\u1EDBi ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "app-date-picker", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("month", function GiaoHoSoComponent_Template_app_date_picker_month_44_listener($event) {
            return ctx.getDate($event, 0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "app-date-picker", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("month", function GiaoHoSoComponent_Template_app_date_picker_month_45_listener($event) {
            return ctx.getDate($event, 1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 1)(47, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_Template_button_click_47_listener() {
            return ctx.timYeuCau(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "G\u1EAFn m\u1EDBi");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_Template_button_click_49_listener() {
            return ctx.timYeuCau(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "T\u0103ng CS");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_Template_button_click_51_listener() {
            return ctx.readGanMoi(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "L\u1EA5y danh s\u00E1ch theo ng\u00E0y");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, GiaoHoSoComponent_table_53_Template, 23, 3, "table", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 4)(55, "mat-expansion-panel")(56, "mat-expansion-panel-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, " Ki\u1EC3m Tra \u0110\u1ECBnh K\u1EF3 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](58, GiaoHoSoComponent_div_58_Template, 3, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 4)(60, "div", 18)(61, "mat-form-field")(62, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "Ng\u01B0\u1EDDi ki\u1EC3m tra");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](64, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_Template_button_click_65_listener() {
            return ctx.ngKt.get("PHAN_CONG").setValue("");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "mat-autocomplete", null, 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](70, GiaoHoSoComponent_mat_option_70_Template, 2, 1, "mat-option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "table", 5)(72, "thead")(73, "tr")(74, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "TT");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "M\u00E3 KH");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, "STT h\u1ED3 s\u01A1");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "T\u00EAn KH");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "Lo\u1EA1i h\u1ED3 s\u01A1");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](84, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](86, GiaoHoSoComponent_tr_86_Template, 13, 4, "tr", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "tr", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](88, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "td", 23)(90, "mat-form-field")(91, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup.enter", function GiaoHoSoComponent_Template_input_keyup_enter_91_listener() {
            return ctx.addKiemTra();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](93, GiaoHoSoComponent_td_93_Template, 4, 0, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "div", 4)(95, "div", 12)(96, "app-date-picker", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("month", function GiaoHoSoComponent_Template_app_date_picker_month_96_listener($event) {
            return ctx.ngay = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](97, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function GiaoHoSoComponent_Template_button_click_97_listener() {
            return ctx.readKiemTra();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](98, "L\u1EA5y d\u1EEF li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.main);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.items.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("startDay", ctx.ngay)("openOnFocus", false)("label", "Ng\u00E0y")("format", "DD/MM/YYYY");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("startDay", ctx.tuNgay)("openOnFocus", false)("label", "T\u1EEB Ng\u00E0y")("format", "DD/MM/YYYY");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("startDay", ctx.denNgay)("openOnFocus", false)("label", "\u0110\u1EBFn Ng\u00E0y")("format", "DD/MM/YYYY");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.phanCong.length > 0 || ctx.giaoHS.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.catalogs.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.ngKt);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.nvOpts);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.main);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.items.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("startDay", ctx.ngay)("openOnFocus", false)("label", "Ng\u00E0y")("format", "DD/MM/YYYY");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatPrefix, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteTrigger, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionPanelHeader, _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_11__.DatePickerComponent]
    });
  }
}

/***/ }),

/***/ 40227:
/*!****************************************************************!*\
  !*** ./src/app/cmis4/het-han-hdmbd/het-han-hdmbd.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HetHanHdmbdComponent: () => (/* binding */ HetHanHdmbdComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/indexeddbV2.service */ 4045);
/* harmony import */ var src_app_kinh_doanh_bao_dam_hop_dong_bao_dam_hop_dong_v2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/kinh-doanh/bao-dam-hop-dong/bao-dam-hop-dong-v2.service */ 32285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/material/month-year/month-year.component */ 55654);
/* harmony import */ var _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../share/material/date-picker/date-picker.component */ 8852);












function HetHanHdmbdComponent_div_9_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HetHanHdmbdComponent_div_9_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.exportSMS(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "SMS l\u1EA7n 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HetHanHdmbdComponent_div_9_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HetHanHdmbdComponent_div_9_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.exportSMS(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "SMS ng\u1EEBng");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HetHanHdmbdComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HetHanHdmbdComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.exportSMS(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "SMS TB");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, HetHanHdmbdComponent_div_9_button_3_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, HetHanHdmbdComponent_div_9_button_4_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HetHanHdmbdComponent_div_9_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.export());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r0.cutDay == null ? null : ctx_r0.cutDay.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r0.cutDay == null ? null : ctx_r0.cutDay.length) > 0);
  }
}
class HetHanHdmbdComponent {
  constructor(cmis4SV, excelSV, plus, idbSV, kyQuySV) {
    this.cmis4SV = cmis4SV;
    this.excelSV = excelSV;
    this.plus = plus;
    this.idbSV = idbSV;
    this.kyQuySV = kyQuySV;
    this.dbName = 'kinh-doanh';
    this.api = 'ky-quy';
    this.db = null;
    this.startDay = '';
    this.items = [];
    this.tableHtml = '';
    this.initDate = new Date();
  }
  ngOnInit() {}
  exportSMSTB() {
    const data = [];
    for (let i = 0; i < this.items.length; i++) {
      const el = this.items[i];
      const match = el.TEN_KHANG.match(/^(.*?)(?:\.|\s)*sdt:\s*(\d{10,11})/i);
      const body = {
        "SDT": match ? el.TEN_KHANG.match(/sdt:\s*(\d{10,11})/)[1] : '',
        "ND": `Điện lực Xuân Lộc đề nghị Quý KH ${match ? match[1].trim() : el.TEN_KHANG}-${el.MA_KHANG} mang CCCD, hồ sơ đất đến văn phòng ĐLXL gia hạn hợp đồng mua bán điện do HĐMBĐ sẽ hết hạn vào ngày ${el.HLUC_DENNGAY}. Trân trọng`,
        "SL": 1,
        "MA_KHANG": el.MA_KHANG
      };
      data.push(body);
    }
    this.excelSV.export(data, 'SMS');
  }
  exportSMS(type) {
    const data = [];
    data.push({
      "SDT": "0968647647",
      "ND": "Điện lực Xuân Lộc TB hợp đồng mua bán điện của Quý KH sẽ hết hạn vào ngày 30/11/2023. Vui lòng mang CCCD, hồ sơ đất đến văn phòng ĐLXL gia hạn trước ngày 15/11/2023 để tránh bị ngừng cấp điện. Trân trọng",
      "SL": 1
    });
    for (let i = 0; i < this.items.length; i++) {
      const el = this.items[i];
      const match = el.TEN_KHANG.match(/^(.*?)(?:\.|\s)*sdt:\s*(\d{10,11})/i);
      let truoc = moment__WEBPACK_IMPORTED_MODULE_1___default()(el.HLUC_DENNGAY, 'DD/MM/YYYY').subtract(15, 'days').format('DD/MM/YYYY');
      if (moment__WEBPACK_IMPORTED_MODULE_1___default()(truoc, 'DD/MM/YYYY').isBefore(moment__WEBPACK_IMPORTED_MODULE_1___default()())) {
        truoc = moment__WEBPACK_IMPORTED_MODULE_1___default()().add(7, 'days').format('DD/MM/YYYY');
      }
      const body = {
        "SDT": match ? el.TEN_KHANG.match(/sdt:\s*(\d{10,11})/)[1] : ''
      };
      switch (type) {
        case 1:
          body["ND"] = `Điện lực Xuân Lộc TB hợp đồng mua bán điện của Quý KH ${match ? match[1].trim() : el.TEN_KHANG}-${el.MA_KHANG} sắp hết hạn. Vui lòng mang CCCD, hồ sơ đất đến văn phòng Điện lực Xuân Lộc gia hạn trước ngày ${this.cutDay} để tránh bị ngừng cấp điện. Trân trọng`;
          break;
        case 2:
          body["ND"] = `Điện lực Xuân Lộc đề nghị Quý KH ${match ? match[1].trim() : el.TEN_KHANG}-${el.MA_KHANG} mang CCCD, hồ sơ đất đến văn phòng ĐLXL gia hạn hợp đồng trước ngày ${this.cutDay} để tránh bị ngừng cung cấp điện. Trân trọng`;
          break;
        case 3:
          body["ND"] = `Điện lực Xuân Lộc TB tạm ngừng cấp điện Quý KH ${match ? match[1].trim() : el.TEN_KHANG}-${el.MA_KHANG} từ ngày ${this.cutDay} do hết hạn hợp đồng mua bán điện. Trân trọng`;
          break;
      }
      body["SL"] = 1;
      body["MA_KHANG"] = el.MA_KHANG;
      data.push(body);
    }
    this.excelSV.export(data, 'SMS');
  }
  getData() {
    var _this = this;
    this.cmis4SV.bcHD22(this.startDay, this.endDay).then( /*#__PURE__*/function () {
      var _ref = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log(res);
        _this.items = [];
        for (let i = 0; i < res.length; i++) {
          const item = res[i];
          const kyquy = yield _this.kyQuySV.getByPk(item.MA_KHANG);
          const body = {
            MA_KHANG: item.MA_KHANG,
            TEN_KHANG: item.TEN_KHANG,
            HLUC_DENNGAY: item.HLUC_DENNGAY,
            CHUOI_GIA: item.CHUOI_GIA,
            DIA_CHI: item.DIA_CHI,
            KYQUY: _this.plus.numberWithCommas(kyquy?.STIEN_DCOC || '')
          };
          _this.items.push(body);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.items = this.plus.sortArr(this.items, 'HLUC_DENNGAY', 1);
    this.tableHtml = this.plus.generateHtmlTable(this.items);
  }
  getMonth(evt, i) {
    i == 1 ? this.startDay = evt : i == 2 ? this.endDay = evt : this.cutDay = evt;
  }
  export() {
    this.excelSV.export(this.items, 'het_han_hdmbd');
  }
  getMonthBC(evt) {
    this.startDay = moment__WEBPACK_IMPORTED_MODULE_1___default()(evt, 'MM/YYYY').startOf('month').format('DD/MM/YYYY');
    this.endDay = moment__WEBPACK_IMPORTED_MODULE_1___default()(evt, 'MM/YYYY').endOf('month').format('DD/MM/YYYY');
  }
  static {
    this.ɵfac = function HetHanHdmbdComponent_Factory(t) {
      return new (t || HetHanHdmbdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_2__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_share_services_indexeddbV2_service__WEBPACK_IMPORTED_MODULE_5__.IndexeddbServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_kinh_doanh_bao_dam_hop_dong_bao_dam_hop_dong_v2_service__WEBPACK_IMPORTED_MODULE_6__.BaoDamHopDongV2Service));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: HetHanHdmbdComponent,
      selectors: [["app-het-han-hdmbd"]],
      decls: 11,
      vars: 8,
      consts: [[1, "py-3", "container"], [1, "row"], [1, "col"], [3, "label", "startDay", "month"], [3, "startDay", "openOnFocus", "label", "format", "month"], [1, "btn"], ["color", "primary", "mat-raised-button", "", 3, "click"], ["class", " group mt-3", 4, "ngIf"], [1, "row", 3, "innerHTML"], [1, "group", "mt-3"], ["color", "accent", "mat-raised-button", "", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "click"]],
      template: function HetHanHdmbdComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-month-year", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("month", function HetHanHdmbdComponent_Template_app_month_year_month_3_listener($event) {
            return ctx.getMonthBC($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 2)(5, "app-date-picker", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("month", function HetHanHdmbdComponent_Template_app_date_picker_month_5_listener($event) {
            return ctx.getMonth($event, 3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HetHanHdmbdComponent_Template_button_click_7_listener() {
            return ctx.getData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "T\u00ECm ki\u1EBFm");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, HetHanHdmbdComponent_div_9_Template, 7, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Th\u00E1ng ba\u0301o c\u00E1o")("startDay", ctx.initDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("startDay", ctx.cutDay)("openOnFocus", true)("label", "Ng\u00E0y")("format", "DD/MM/YYYY");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.items.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx.tableHtml, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_7__.MonthYearComponent, _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_8__.DatePickerComponent]
    });
  }
}

/***/ }),

/***/ 53663:
/*!************************************************************!*\
  !*** ./src/app/cmis4/in-hop-dong/in-hop-dong.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InHopDongComponent: () => (/* binding */ InHopDongComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var src_app_kinh_doanh_bao_dam_hop_dong_bao_dam_hop_dong_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/kinh-doanh/bao-dam-hop-dong/bao-dam-hop-dong.service */ 33814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/docxtemplate/docxtemplate.service */ 41982);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/sheets.service */ 63402);
/* harmony import */ var src_app_kinh_doanh_bao_dam_hop_dong_bao_dam_hop_dong_v2_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/kinh-doanh/bao-dam-hop-dong/bao-dam-hop-dong-v2.service */ 32285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 82765);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 5951);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 53719);



















function InHopDongComponent_div_10_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul")(1, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InHopDongComponent_div_10_ul_1_Template_mat_radio_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.maYeuCau = item_r5.MA_YCAU_KNAI);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", item_r5.MA_YCAU_KNAI, " - ", item_r5.NGAY_TNHAN, " - ", item_r5.NOI_DUNG_YCAU, "");
  }
}
function InHopDongComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, InHopDongComponent_div_10_ul_1_Template, 3, 3, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.dsYeuCau);
  }
}
function InHopDongComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span")(1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InHopDongComponent_span_12_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.onCheckboxChange($event, item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r8._id, " ");
  }
}
function InHopDongComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r11.NoiDung);
  }
}
function InHopDongComponent_pre_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InHopDongComponent_pre_31_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.getData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "xem");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\n    ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, ctx_r3.item), "\n  ");
  }
}
class InHopDongComponent {
  constructor(cmis4SV, docxSV, plus, loadSV, sheetdbSV, kyQuySV) {
    this.cmis4SV = cmis4SV;
    this.docxSV = docxSV;
    this.plus = plus;
    this.loadSV = loadSV;
    this.sheetdbSV = sheetdbSV;
    this.kyQuySV = kyQuySV;
    this.api = 'cmis4-in-hop-dong';
    this.maYeuCau = '';
    this.maKH = '';
    this.item = null;
    this.dev = !src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production;
    this.dmDichVu = [];
    this.dsYeuCau = [];
    this.loaiHD = false;
    this.isKyQuy = false;
    this.istcd = false;
    this.is1TR = false;
    this.tkk = [];
    this.ttkcheck = [];
    this.lienhes = '';
    this.kytu = 'j';
  }
  ngOnInit() {
    this.cmis4SV.getDanhMuc().then(danhMuc => {
      console.log('Danh mục dịch vụ:', danhMuc);
    }).catch(err => {
      console.error('Error fetching danh mục:', err);
    });
    this.getTTK();
  }
  copyTTK() {
    const ttk = this.ttkcheck.map(item => item.NoiDung);
    this.plus.copyToClipboard(this.autoIncrementPrefix(this.kytu, ttk).join('\n'));
  }
  getTTK() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.sheetdbSV.get('1duYS3zmzr_dyLfh3AIIBRw5K0rqZeVGkgEXmpG-QDmU', 'TTK').subscribe(res => {
        _this.tkk = res.data;
        console.log('Response from getTTK:', res);
      });
    })();
  }
  onCheckboxChange(evt, item) {
    console.log('Checkbox changed:', evt, item);
    this.ttkcheck = evt.checked ? [...this.ttkcheck, item] : this.ttkcheck.filter(i => i !== item);
    if (item == 'istcd' && evt.checked) {
      this.istcd = true;
    }
    if (item == 'is1TR' && evt.checked) {
      this.is1TR = true;
    }
  }
  getYeuCau() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.cmis4SV.timKiemYeuCau(_this2.cmis4SV.convertPK(_this2.maKH)).then(response => {
        console.log('Response from timKiemYeuCau:', response);
        if (Array.isArray(response)) _this2.dsYeuCau = response;
        if (response.length == 1) _this2.maYeuCau = response[0].MA_YCAU_KNAI;else _this2.dsYeuCau = response;
        _this2.loadSV.clear();
      }).catch(err => {
        console.error('Error in timKiemYeuCau:', err);
      });
    })();
  }
  xemlienhe(maKH) {
    if (maKH == '') return;
    this.cmis4SV.layTtinKHangMoinhat(this.cmis4SV.convertPK(maKH)).then(res => {
      Array.isArray(res.HDG_KHANG_LIENHE) ? this.lienhes = res.HDG_KHANG_LIENHE.map(e => e.DTHOAI_DVU).join(' - ') : '';
    });
  }
  getData() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.xemlienhe(_this3.maKH);
      const loaiHD = _this3.loaiHD ? "HDNH" : "HDNSH";
      const duthao = yield _this3.cmis4SV.getDataDuThao(_this3.maYeuCau, loaiHD);
      const dataCapDien = yield _this3.cmis4SV.DataPhanHeCapDien(_this3.maYeuCau);
      console.log('duthao', duthao);
      const ranhGioSHTCC = 'Từ MCB tổng trở về lưới điện quốc gia là tài sản thuộc sở hữu của bên A; đường dây hạ thế sau MCB tổng đến nơi sử dụng điện là tài sản thuộc sở hữu của bên B';
      const tren40k = {
        _id: '40k',
        NoiDung: `Khi Bên B thay đổi công suất và sản lượng điện đã thỏa thuận trong hợp đồng này thì bên B phải gửi văn bản đăng ký, bảng kê công suất thiết bị và biểu đồ phụ tải ngày sản xuất điển hình cho bên A trước 60 ngày. Bảng đăng ký chế độ sử dụng điện cùng biểu đồ phụ tải mới đã được 02 bên thống nhất được xem là phụ lục của hợp đồng này và thay thế cho chế độ sử dụng điện đã đăng ký trước đó.`
      };
      let soDienThoai = [];
      soDienThoai.push(duthao.DTHOAI);
      soDienThoai.push(duthao.DTHOAI_DD);
      const lienhe = 'TYPE' in dataCapDien ? [] : dataCapDien.bangCdKhangLienhe.map(item => item.DTHOAI_DVU || '');
      soDienThoai.concat(lienhe).filter(str => `${str}`.length > 9);
      soDienThoai = [...new Set(soDienThoai)];
      const ngayGCS = duthao.NGAY_GCS == 'CT' ? 'Ngày cuối cùng của mỗi tháng' : duthao.NGAY_GCS == '15;CT' ? 'Ngày 15 và ngày cuối cùng của mỗi tháng' : 'Ngày 10, 20 và ngày cuối cùng của mỗi tháng';
      const body = {};
      body['DU_THAO'] = duthao;
      body['DATA_CAP_DIEN'] = dataCapDien;
      body.s1 = duthao.SO_HDONG1;
      body.s2 = duthao.SO_HDONG2;
      body.s3 = duthao.SO_HDONG3;
      body.s4 = duthao.SO_HDONG4;
      body.s5 = duthao.SO_HDONG5;
      body.s6 = duthao.SO_HDONG6;
      body.s7 = duthao.SO_HDONG7;
      body.s8 = duthao.SO_HDONG8;
      body.s9 = duthao.SO_HDONG9;
      body.s10 = duthao.SO_HDONG10;
      body.s11 = duthao.SO_HOP_DONG3;
      body.s12 = duthao.SO_HOP_DONG4;
      body.s13 = duthao.SO_HOP_DONG5;
      body.s14 = duthao.SO_HOP_DONG6;
      body.s15 = duthao.SO_HOP_DONG7;
      body.s16 = duthao.SO_HOP_DONG8;
      body.TEN_DDIEN = duthao.TEN_DDIEN;
      body.CHUC_VU_DD = duthao.CHUC_VU_DD;
      body.MA_HDONG = duthao.MA_HDONG;
      body.SO_HDONG = duthao.MA_HDONG.slice(8);
      body.HLUC_TUNGAY = duthao.HLUC_TUNGAY_FULL;
      body.HLUC_DENNGAY = duthao.HLUC_DENNGAY;
      body.DCHI_DDIEN = duthao.DIA_CHI_KH;
      body.DTHOAI = duthao.DTHOAI || '          ';
      body.DTHOAI_DD = _this3.lienhes.length > 0 ? _this3.lienhes : soDienThoai.join(' - ');
      body.DTHOAI_DDIEN = body.DTHOAI_DD || '          ';
      body.TEN_KHANG = duthao.TEN_KHANG;
      body.TEN_NHANG_KH = duthao.TEN_NHANG_KH || '          ';
      body.TKHOAN_KHANG = duthao.TKHOAN_KHANG || '          ';
      body.MA_KHANG = duthao.MA_KHANG;
      body.MASO_THUE = duthao.MASO_THUE_KHACH ? duthao.MASO_THUE_KHACH : duthao.MASO_THUE_KH ? duthao.MASO_THUE_KH : duthao.CAUHINHIN[0].GIAY_KDOANH || '          ';
      body.GPKD = duthao.CAUHINHIN.length > 0 ? `Số ${duthao.CAUHINHIN[0].GIAY_KDOANH} do ${duthao.CAUHINHIN[0].DVI_CAP_KDOANH} cấp ngày ${duthao.CAUHINHIN[0].NGAY_CAP_KDOANH}` : '          ';
      body.EMAIL = duthao.EMAIL_KH || '';
      body.TEN_DDIEN = duthao.TEN_DDIEN;
      body.CHUC_VU_DDIEN = duthao.CHUC_VU_DD;
      body.MASO_DVIQHNS = duthao.MASO_DVIQHNS || '          ';
      body.SO_CMT = duthao.SO_CMT || '          ';
      body.NGAY_CAP = duthao.NGAY_CAP_CMT_FULL || '          ';
      body.NOI_CAP = duthao.NOI_CAP || '          ';
      body.UY_QUYEN = duthao.NGUOI_UQUYEN_KH ? `(Theo văn bản uỷ quyền: Số ${duthao.SOGIAY_UQUYEN} của ông (bà) ${duthao.NGUOI_UQUYEN_KH} - Chức vụ ${duthao.CVU_UQUYENKH} vào ngày ${duthao.NGAYUQ_KH_FLL})` : '';
      body.DIA_CHI_DDO = duthao.PLUCHDONG[0].DDIEM_DDIEN;
      body.MUC_DICH = duthao.PLUCHDONG[0].MUC_DICHSD;
      body.DIEN_AP = duthao.PLUCHDONG[0].DIEN_AP || '          ';
      body.DONVI_DIENAP = duthao.PLUCHDONG[0].DONVI_DIENAP || '          ';
      body.P_TBINH = duthao.PLUCHDONG[0].P_TBINH || '          ';
      body.PMAX = duthao.PLUCHDONG[0].PMAX || '5';
      body.PMIN = duthao.PLUCHDONG[0].PMIN || '';
      body.A_TBINH = duthao.PLUCHDONG[0].A_TBINH || '350';
      body.NGAY_GCS = ngayGCS || '          ';
      body.TRACH_NHIEM = _this3.istcd || _this3.is1TR ? 'B' : 'A';
      body.SOLAN_TTOAN = duthao.PLUCHDONG[0].SO_KY || '          ';
      body.THOIHAN_TTOAN = duthao.CAUHINHIN[0].THOIHAN_TTOAN || 7;
      body.DIEM_DAUNOI = duthao.PLUCHDONG[0].DIEM_DAUNOI || '          ';
      body.RGIOI_SOHUU = _this3.istcd || _this3.is1TR ? duthao.PLUCHDONG[0].RGIOI_SOHUU : ranhGioSHTCC;
      body.RGIOI_VHANH = duthao.PLUCHDONG[0].RGIOI_VHANH || '          ';
      body.STIEN_DCOC = _this3.plus.cleanToNumber(duthao.CAUHINHIN[0].TIEN_DBAO_HDONG || duthao.STIEN_DCOC || 0);
      body.SO_NGAYBD1 = duthao.CAUHINHIN[0].SO_NGAYBD1 || '          ';
      body.HTHUC_DBAO_HDONG = duthao.CAUHINHIN[0].HTHUC_DBAO_HDONG || '';
      body.KY_QUY = +body.STIEN_DCOC > 0 ? 'Có' : 'Không';
      body.KIMUA_CSPK = +duthao.KIMUA_CSPK == 1 ? 'Có' : 'Không';
      +duthao.KIMUA_CSPK == 1 ? _this3.ttkcheck.unshift(tren40k) : null;
      body.THOA_THUAN_KHAC = _this3.ttkcheck.map(item => item.NoiDung).filter(str => str !== '');
      if (Array.isArray(dataCapDien.bangCdKhangLienhe)) {
        body.LIEN_HE = dataCapDien.bangCdKhangLienhe;
        body.LIEN_HE[0].TEN_KH_LHE = body.TEN_DDIEN;
      } else {
        body.LIEN_HE = [{
          TEN_KH_LHE: body.TEN_DDIEN,
          DTHOAI_DVU: body.DTHOAI
        }];
      }
      if (duthao.DDOGIA && Array.isArray(duthao.DDOGIA)) {
        body.DDOGIA = duthao.DDOGIA.map(item => ({
          ...item,
          MUC_DICH: duthao.PLUCHDONG[0].MUC_DICHSD
        }));
      }
      if (+body.STIEN_DCOC > 0) {
        body.HIEU_LUC_TEXT = `HĐMBĐ có hiệu lực kể từ ngày đại diện có thẩm quyền của hai bên ký kết/hoặc ngày nghiệm thu đóng điện tùy thuộc vào thời điểm nào xảy ra trước hơn và Bên bán điện nhận được tài liệu xác nhận/chứng minh hoàn
tất việc xác lập Biện Pháp Bảo Đảm của Bên mua điện.`;
      } else if (_this3.maYeuCau.slice(0, 2) == 'GC') {
        const ask = prompt(`Ngày đóng điện vận hành?`);
        if (ask.length == 0) return;
        body.HIEU_LUC_TEXT = `Hiệu lực từ ngày ${ask}`;
      } else if (_this3.maYeuCau.slice(0, 2) == 'GK') {
        const ask = prompt(`Ngày dự kiến treo thiết bị đo đếm?`);
        if (ask.length == 0) return;
        body.HIEU_LUC_TEXT = `Hiệu lực từ ngày ${ask}`;
      } else {
        body.HIEU_LUC_TEXT = `Hiệu lực hợp đồng kể từ ngày ${duthao.HLUC_TUNGAY_FULL}`;
      }
      _this3.item = _this3.item ? Object.assign(body, _this3.item) : body;
      console.log('body', _this3.item);
    })();
  }
  exportDocx() {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.getData();
      const fileName = _this4.is1TR ? `HD-NSH-1Tr` : _this4.istcd ? `HD-NSH-TCD` : `HD-NSH`;
      _this4.docxSV.loadFileUrl(`https://thuctd.github.io/templates/CMIS/${fileName}.docx`).then(wordFile => {
        _this4.docxSV.generateOne(_this4.item, wordFile, `${_this4.maYeuCau}-${_this4.cmis4SV.convertPK(_this4.maKH)}-HD-NSH.docx`).then(() => {
          _this4.plus.alertSuccess();
          _this4.reload();
        });
      });
    })();
  }
  exportCongNo() {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.getData();
      _this5.docxSV.loadFileUrl(`https://thuctd.github.io/templates/CMIS/CongNo-App.docx`).then(wordFile => {
        _this5.docxSV.generateOne(_this5.item, wordFile, `${_this5.maYeuCau}-CongNo.docx`).then(() => {
          _this5.plus.alertSuccess();
        });
      });
    })();
  }
  addKyQuy() {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.getData();
      const PK = _this6.cmis4SV.convertPK(_this6.maKH);
      if (PK.length != 13) {
        _this6.plus.alertError('Vui lòng nhập mã khách hàng trước khi thêm vào ký quỹ');
        return;
      }
      const kyQuy = yield _this6.kyQuySV.getByPk(PK);
      if (kyQuy) {
        return alert('Đã có đặt cọc. Qua cập nhật thôi!');
      }
      const kyQuyData = {
        MA_KHANG: _this6.cmis4SV.convertPK(_this6.maKH),
        TEN_KHANG: _this6.item.TEN_KHANG,
        STIEN_DCOC: _this6.item.STIEN_DCOC,
        HLUC_DENNGAY: _this6.item.HLUC_DENNGAY,
        HTHUC_DBAO_HDONG: _this6.item.HTHUC_DBAO_HDONG,
        HLUC_TUNGAY: _this6.item.HLUC_TUNGAY,
        DCHI_DDIEN: _this6.item.DCHI_DDIEN,
        DTHOAI_DD: _this6.item.DTHOAI_DDIEN,
        TRANG_THAI: src_app_kinh_doanh_bao_dam_hop_dong_bao_dam_hop_dong_service__WEBPACK_IMPORTED_MODULE_2__.E_KYQUY_TRANGTHAI.CHUATH,
        status: 1,
        _id: _this6.cmis4SV.convertPK(_this6.maKH),
        dateModify: Date.now()
      };
      _this6.kyQuySV.save(kyQuyData).then(() => {
        _this6.plus.alertSuccess('Đã thêm vào ký quỹ thành công');
        _this6.kyQuySV.themNhatKy(kyQuyData, 0, 'Thêm khách hàng mới đặt cọc');
      });
    })();
  }
  reload() {
    this.plus.reload();
  }
  reset() {
    this.maYeuCau = '';
    this.maKH = '';
    this.item = null;
    this.dsYeuCau = [];
  }
  checkPer(level, api = this.api) {
    return window.max ? window.max.opt[api] > level ? true : false : false;
  }
  autoIncrementPrefix(startChar, lines) {
    if (!lines || !Array.isArray(lines)) return [];
    if (typeof startChar !== 'string' || startChar.length === 0) {
      return lines.slice();
    }
    const result = [];
    let current = startChar;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '') {
        result.push(lines[i]);
        continue;
      }
      const prefix = current + '. ';
      result.push(prefix + lines[i]);
      current = this.incrementChar(current);
    }
    return result;
  }
  incrementChar(char) {
    if (!char) return 'a';
    const last = char[char.length - 1];
    const prefix = char.slice(0, -1);
    if (last === 'z') {
      return prefix ? this.incrementChar(prefix) + 'a' : 'aa';
    }
    if (last === 'Z') {
      return prefix ? this.incrementChar(prefix) + 'A' : 'AA';
    }
    if (/[0-9]/.test(last)) {
      const num = parseInt(last, 10) + 1;
      return prefix + num;
    }
    const next = String.fromCharCode(last.charCodeAt(0) + 1);
    return prefix + next;
  }
  static {
    this.ɵfac = function InHopDongComponent_Factory(t) {
      return new (t || InHopDongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_3__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_4__.DocxtemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_5__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_7__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_kinh_doanh_bao_dam_hop_dong_bao_dam_hop_dong_v2_service__WEBPACK_IMPORTED_MODULE_8__.BaoDamHopDongV2Service));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: InHopDongComponent,
      selectors: [["app-in-hop-dong"]],
      decls: 32,
      vars: 9,
      consts: [[1, "container", "pt-3"], [1, "row"], ["matInput", "", "placeholder", "M\u00E3 kh\u00E1ch h\u00E0ng", 3, "ngModel", "keydown.enter", "ngModelChange"], [1, "btn"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", 3, "click"], ["class", "row", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "py-3", 3, "ngModel", "change", "ngModelChange"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "py-3"], ["matInput", "", "placeholder", "K\u00FD t\u1EF1 b\u1EAFt \u0111\u1EA7u", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], [3, "change"], ["mat-button", "", 3, "click"]],
      template: function InHopDongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-form-field")(3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown.enter", function InHopDongComponent_Template_input_keydown_enter_3_listener() {
            return ctx.getYeuCau();
          })("ngModelChange", function InHopDongComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.maKH = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InHopDongComponent_Template_button_click_5_listener() {
            return ctx.getYeuCau();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " T\u00ECm y\u00EAu c\u1EA7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InHopDongComponent_Template_button_click_7_listener() {
            return ctx.reload();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, InHopDongComponent_div_10_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, InHopDongComponent_span_12_Template, 3, 1, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-slide-toggle", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InHopDongComponent_Template_mat_slide_toggle_change_13_listener($event) {
            return ctx.onCheckboxChange($event, "loaiHD");
          })("ngModelChange", function InHopDongComponent_Template_mat_slide_toggle_ngModelChange_13_listener($event) {
            return ctx.loaiHD = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Ng\u1EAFn h\u1EA1n");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-slide-toggle", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InHopDongComponent_Template_mat_slide_toggle_change_15_listener($event) {
            return ctx.onCheckboxChange($event, "istcd");
          })("ngModelChange", function InHopDongComponent_Template_mat_slide_toggle_ngModelChange_15_listener($event) {
            return ctx.istcd = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "C\u00F3 tr\u1EA1m chuy\u00EAn d\u00F9ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "mat-slide-toggle", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InHopDongComponent_Template_mat_slide_toggle_change_17_listener($event) {
            return ctx.onCheckboxChange($event, "is1TR");
          })("ngModelChange", function InHopDongComponent_Template_mat_slide_toggle_ngModelChange_17_listener($event) {
            return ctx.is1TR = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "KH 02 ph\u00E2n k\u1EF3 ho\u1EB7c xi m\u0103ng/s\u1EAFt th\u00E9p ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 3)(20, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InHopDongComponent_Template_button_click_20_listener() {
            return ctx.exportDocx();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " Xu\u1EA5t file");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InHopDongComponent_Template_button_click_22_listener() {
            return ctx.exportCongNo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, " C\u00F4ng n\u1EE3");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InHopDongComponent_Template_button_click_24_listener() {
            return ctx.addKyQuy();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Th\u00EAm v\u00E0o k\u00FD qu\u1EF9");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InHopDongComponent_Template_button_click_26_listener() {
            return ctx.copyTTK();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, " Copy th\u1ECFa thu\u1EADn kh\u00E1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "mat-form-field", 10)(29, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function InHopDongComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.kytu = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, InHopDongComponent_div_30_Template, 3, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, InHopDongComponent_pre_31_Template, 6, 3, "pre", 13);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.maKH);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.dsYeuCau.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.tkk);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.loaiHD);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.istcd);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.is1TR);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.kytu);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ttkcheck);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.checkPer(4));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_10__.JsonPipe]
    });
  }
}

/***/ }),

/***/ 10607:
/*!********************************************************************!*\
  !*** ./src/app/cmis4/kiem-do-hoa-don/kiem-do-hoa-don.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KiemDoHoaDonComponent: () => (/* binding */ KiemDoHoaDonComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/sheets.service */ 63402);
/* harmony import */ var src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/docxtemplate/docxtemplate.service */ 41982);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 82765);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 53719);











function KiemDoHoaDonComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span")(1, "mat-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function KiemDoHoaDonComponent_span_2_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onCheckboxChange($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r1, " ");
  }
}
class KiemDoHoaDonComponent {
  constructor(cmis4SV, sheetdbSV, docxSV) {
    this.cmis4SV = cmis4SV;
    this.sheetdbSV = sheetdbSV;
    this.docxSV = docxSV;
    this.donGia = null;
    this.loaiKD = null;
    this.listKD = ['DoiGia', 'TreoThao', 'SoHo'];
    this.item = null;
    this.maKH = '';
    this.khachHang = null;
  }
  ngOnInit() {}
  getSaoLuc() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.khachHang = yield _this.cmis4SV.layTtinKHangMoinhat(_this.cmis4SV.convertPK(_this.maKH));
      _this.cmis4SV.getSaoLucChiSoCT(_this.cmis4SV.convertPK(_this.maKH), '5/2025', '5/2025').then(res => {
        _this.item = _this.parseInputString(res[0].CHI_TIET_GIA);
      });
    })();
  }
  onCheckboxChange(event, item) {
    if (event.checked) {
      this.loaiKD = item;
    }
  }
  parseInputString(input) {
    const lines = input.split('\r').filter(line => line.trim() !== '');
    const parseLine = line => {
      const parts = line.split(':');
      if (parts.length !== 3) return null;
      const giaBieu = parts[1].split('-');
      if (giaBieu.length !== 2) return null;
      const gia = giaBieu[0];
      const bieu = giaBieu[1];
      const calcParts = parts[2].split('*');
      if (calcParts.length !== 2) return null;
      const sl = parseInt(calcParts[0], 10);
      const donGiaThanhTien = calcParts[1].split('=');
      if (donGiaThanhTien.length !== 2) return null;
      const donGia = parseInt(donGiaThanhTien[0], 10);
      const thanhTien = parseInt(donGiaThanhTien[1], 10);
      if (isNaN(sl) || isNaN(donGia) || isNaN(thanhTien)) return null;
      return {
        GIA: gia,
        BIEU: bieu,
        SL: sl,
        DON_GIA: donGia,
        THANH_TIEN: thanhTien
      };
    };
    return lines.map(parseLine).filter(result => result !== null);
  }
  convertoDoc() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let out = {
        GC: _this2.item,
        GM: _this2.item,
        HD: [],
        CHUOI_GIA: _this2.khachHang.HDG_KHACH_HANG[0].CHUOI_GIA,
        TEN_KHANG: _this2.khachHang.HDG_KHACH_HANG[0].TEN_KHANG,
        MA_KHANG: _this2.cmis4SV.convertPK(_this2.maKH)
      };
      let wordFile = yield _this2.docxSV.loadFileUrl(`https://thuctd.github.io/templates/CMIS/KiemDo-${_this2.loaiKD}.docx`);
      _this2.docxSV.generateOne(out, wordFile, _this2.maKH + '-KiemDo').then(val => {
        console.log(val);
      });
    })();
  }
  static {
    this.ɵfac = function KiemDoHoaDonComponent_Factory(t) {
      return new (t || KiemDoHoaDonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_1__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_2__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_3__.DocxtemplateService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: KiemDoHoaDonComponent,
      selectors: [["app-kiem-do-hoa-don"]],
      decls: 16,
      vars: 8,
      consts: [[1, "container", "py-3"], [1, "row"], [4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "M\u00E3 kh\u00E1ch h\u00E0ng", 3, "ngModel", "ngModelChange"], [1, "tbn"], ["mat-raised-button", "", 3, "click"], [3, "change"]],
      template: function KiemDoHoaDonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, KiemDoHoaDonComponent_span_2_Template, 3, 1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field")(4, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function KiemDoHoaDonComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.maKH = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function KiemDoHoaDonComponent_Template_button_click_6_listener() {
            return ctx.getSaoLuc();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "L\u1EA5y d\u1EEF li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function KiemDoHoaDonComponent_Template_button_click_8_listener() {
            return ctx.convertoDoc();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Xu\u1EA5t file");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listKD);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.maKH);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 4, ctx.khachHang));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 6, ctx.item));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe]
    });
  }
}

/***/ }),

/***/ 48567:
/*!****************************************************************************!*\
  !*** ./src/app/cmis4/nhap-chi-so-dinh-ky/nhap-chi-so-dinh-ky.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NhapChiSoDinhKyComponent: () => (/* binding */ NhapChiSoDinhKyComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _apiURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apiURL */ 72676);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4v2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cmis4v2.service */ 96100);
/* harmony import */ var _chi_so_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chi-so.service */ 87535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/material/month-year/month-year.component */ 55654);










class NhapChiSoDinhKyComponent {
  constructor(cmis4V2SV, chiSoSV) {
    this.cmis4V2SV = cmis4V2SV;
    this.chiSoSV = chiSoSV;
    this.startDay = moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(5, 'days').toDate();
    this.thang = '';
    this.nam = '';
    this.maSo = '050631X19';
    this.userCmis = JSON.parse(localStorage.getItem('USERCMIS'));
    this.NGAY_CKY = '';
    this.dataChiSo = [];
    this.maSoGSCs = JSON.parse(localStorage.getItem('DSMaSO')) || [];
  }
  ngOnInit() {
    this.userCmis = this.cmis4V2SV.getUser();
  }
  test() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let lichGhi = yield _this.get_gcslichgcsByMaSogcs(_this.maSo)[0];
      let inputData = {
        "KY": "1",
        "THANG": lichGhi.thang,
        "NAM": lichGhi.nam,
        "MA_SOGCS": lichGhi.maSogcs,
        "MA_DVIQLY": "PK0500",
        "THANG_HT": lichGhi.thang,
        "NAM_HT": lichGhi.nam,
        "NGAY_DKY": moment__WEBPACK_IMPORTED_MODULE_2___default()(lichGhi.ngayDky).format('DD/MM/YYYY'),
        "NGAY_CKY": moment__WEBPACK_IMPORTED_MODULE_2___default()(lichGhi.ngayCky).format('DD/MM/YYYY')
      };
      debugger;
      let data = yield _this.getDDoSoGCS(lichGhi);
    })();
  }
  getDDoSoGCS(lichGhi) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let inputData = {
        "KY": "1",
        "THANG": lichGhi.thang,
        "NAM": lichGhi.nam,
        "MA_SOGCS": lichGhi.maSogcs,
        "MA_DVIQLY": "PK0500",
        "THANG_HT": lichGhi.thang,
        "NAM_HT": lichGhi.nam,
        "NGAY_DKY": moment__WEBPACK_IMPORTED_MODULE_2___default()(lichGhi.ngayDky).format('DD/MM/YYYY'),
        "NGAY_CKY": moment__WEBPACK_IMPORTED_MODULE_2___default()(lichGhi.ngayCky).format('DD/MM/YYYY')
      };
      debugger;
      return _this2.cmis4V2SV.postData(_apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.HOPDONG, _apiURL__WEBPACK_IMPORTED_MODULE_1__.API_HOP_DONG.POST_GET_DDO_SO_GCS, inputData);
    })();
  }
  get_gcslichgcsByMaSogcs(maSo) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let inputData = {
        "MA_SOGCS": maSo,
        "MA_DVIQLY": "PK0500",
        "THANG": `${_this3.thang}`,
        "NAM": `${_this3.nam}`,
        "KY": "0"
      };
      return _this3.cmis4V2SV.postData(_apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.CHISOKHANG, _apiURL__WEBPACK_IMPORTED_MODULE_1__.API_CHISOKHANG.POST_GCS_LICH_GCS_BY_MA_SOGCS, inputData);
    })();
  }
  getSoGCSByListSo(maso) {
    let payload = {
      "TEN_DANH_MUC": "D_SOGCS",
      "MA_DVIQLY": "PK0500",
      "PARAM": [maso]
    };
    return this.cmis4V2SV.postData(_apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.DANHMUC, _apiURL__WEBPACK_IMPORTED_MODULE_1__.API_DANH_MUC.POST_GET_SO_GCS_BY_LIST_SO, payload);
  }
  ghiDeDuLieu(maSo) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        "MA_SOGCS": maSo,
        "KY": +"1",
        "THANG": +`${_this4.startDay.getMonth() + 1}`,
        "NAM": +`${_this4.startDay.getFullYear()}`,
        "MA_DVIQLY": _this4.userCmis.SUBDIVISIONID
      };
      let get_Lich_SoGCS = yield _this4.chiSoSV.get_Lich_SoGCS(body);
      let body2 = {
        "THANG_HT": +`${_this4.startDay.getMonth() + 1}`,
        "NAM_HT": +`${_this4.startDay.getFullYear()}`,
        "NGAY_DKY": moment__WEBPACK_IMPORTED_MODULE_2___default()(get_Lich_SoGCS.lstLichgcs[0].ngayDky).format("DD/MM/YYYY"),
        "NGAY_CKY": _this4.NGAY_CKY
      };
      let getDDoSoGCS = yield _this4.chiSoSV.getDDoSoGCS(Object.assign(body, body2));
      console.log(getDDoSoGCS);
      let body3 = {
        KY: body.KY,
        THANG: body.THANG,
        NAM: body.NAM,
        IS_CHUANHAPCSO: true,
        MA_SOGCS: body.MA_SOGCS,
        MA_DVIQLY: body.MA_DVIQLY,
        NGAY_CKY: moment__WEBPACK_IMPORTED_MODULE_2___default()(_this4.NGAY_CKY, "DD/MM/YYYY").add(1, 'days').format("DD/MM/YYYY"),
        LST_DDO: getDDoSoGCS
      };
      let getChiso_DGia = yield _this4.chiSoSV.getChiso_DGia(body3);
      console.log(getChiso_DGia);
      let LST_CHISO = [];
      let change = [];
      if (_this4.dataChiSo.length == 0) {
        return alert('Chưa có dữ liệu ước');
      }
      for (let i = 0; i < getChiso_DGia.length; i++) {
        let el = getChiso_DGia[i];
        let cs;
        for (let ixls = 0; ixls < _this4.dataChiSo.length; ixls++) {
          const noiSuy = _this4.dataChiSo[ixls];
          if (noiSuy.MA_KHANG == el.MA_KHANG && el.BCS == noiSuy.BCS) {
            cs = noiSuy;
            break;
          } else {
            cs = null;
          }
        }
        if (cs == null || el.LOAICHISO !== 'CCS') {
          el['DIEN_GIAI'] = "Được sửa đổi";
          el['STT_GOC'] = el.STT;
          el['DMLTYPE'] = "";
          el['TEN_CAPDA'] = el.MA_CAPDA == "1" ? ["Dưới 380V"] : ["Từ 380V đến dưới 6kV"];
          el['NGAY_CHOT'] = el.NGAY_DKY;
          el['DMLTYPE_CS'] = "";
          LST_CHISO.push(el);
        } else if (el.LOAICHISO == 'CCS') {
          el['DIEN_GIAI'] = "Được sửa đổi";
          el['STT_GOC'] = el.STT;
          el['DMLTYPE'] = "Update";
          el['TEN_CAPDA'] = el.MA_CAPDA == "1" ? ["Dưới 380V"] : ["Từ 380V đến dưới 6kV"];
          el['CHISO_MOI'] = `${cs.UOCCHISOCHOT}`;
          el['NGAY_CHOT'] = el.NGAY_DKY;
          el['NGAY_CKY'] = _this4.NGAY_CKY;
          el['SAN_LUONG'] = `${+cs.UOCCHISOCHOT - +el.CHISO_CU}`;
          el['TONG'] = `${+cs.UOCCHISOCHOT - +el.CHISO_CU}`;
          el['IS_SELECTED'] = "0";
          el['SLUONG_THAO'] = "0";
          el['MA_DVICTREN'] = "PK";
          el['IS_SELECTED'] = "0";
          el['FLAG'] = "X";
          el['MA_TTCTO'] = '';
          el['MA_CNANG'] = "80";
          el['NGUOI_SUA'] = _this4.userCmis.USERNAME;
          el['NGUOI_TAO'] = _this4.userCmis.USERNAME;
          LST_CHISO.push(el);
          change.push(el.MA_KHANG);
        }
      }
      let bodyNhapCS = {
        LST_CHISO: LST_CHISO,
        LST_LICH: [get_Lich_SoGCS.lstLichgcs[0]],
        LST_CSUAT_DDO: []
      };
      console.log('change', change);
      console.log(bodyNhapCS);
      let nhap = yield _this4.chiSoSV.ExcuteNhapCSDoiGia(bodyNhapCS);
      _this4.maSoGSCs.find(el2 => el2.maSo == maSo).SL = change.length;
    })();
  }
  layDuLieu(maSo) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        "MA_SOGCS": maSo,
        "KY": +"1",
        "THANG": +`${_this5.startDay.getMonth() + 1}`,
        "NAM": +`${_this5.startDay.getFullYear()}`,
        "MA_DVIQLY": _this5.userCmis.SUBDIVISIONID
      };
      let get_Lich_SoGCS = yield _this5.chiSoSV.get_Lich_SoGCS(body);
      let body2 = {
        "THANG_HT": +`${_this5.startDay.getMonth() + 1}`,
        "NAM_HT": +`${_this5.startDay.getFullYear()}`,
        "NGAY_DKY": moment__WEBPACK_IMPORTED_MODULE_2___default()(get_Lich_SoGCS.lstLichgcs[0].ngayDky).format("DD/MM/YYYY"),
        "NGAY_CKY": _this5.NGAY_CKY
      };
      let getDDoSoGCS = yield _this5.chiSoSV.getDDoSoGCS(Object.assign(body, body2));
      console.log(getDDoSoGCS);
      let body3 = {
        KY: body.KY,
        THANG: body.THANG,
        IS_CHUANHAPCSO: true,
        NAM: body.NAM,
        MA_SOGCS: body.MA_SOGCS,
        MA_DVIQLY: body.MA_DVIQLY,
        NGAY_CKY: moment__WEBPACK_IMPORTED_MODULE_2___default()(_this5.NGAY_CKY, "DD/MM/YYYY").add(1, 'days').format("DD/MM/YYYY"),
        LST_DDO: getDDoSoGCS
      };
      let getChiso_DGia = yield _this5.chiSoSV.getChiso_DGia(body3);
      console.log(getChiso_DGia);
      let LST_CHISO = [];
      let change = [];
      if (_this5.dataChiSo.length == 0) {
        return alert('Chưa có dữ liệu ước');
      }
      for (let i = 0; i < getChiso_DGia.length; i++) {
        let el = getChiso_DGia[i];
        let cs;
        for (let ixls = 0; ixls < _this5.dataChiSo.length; ixls++) {
          const noiSuy = _this5.dataChiSo[ixls];
          if (noiSuy.MA_KHANG == el.MA_KHANG && el.BCS == noiSuy.BCS) {
            cs = noiSuy;
            break;
          } else {
            cs = null;
          }
        }
        if (el.LOAICHISO == 'CCS' || cs == null || 'SAN_LUONG' in el || +el.CHISO_CU >= +cs.UOCCHISOCHOT) {
          console.log('SAN_LUONG' in el, el);
          el['DIEN_GIAI'] = "Được sửa đổi";
          el['STT_GOC'] = el.STT;
          el['DMLTYPE'] = "";
          el['TEN_CAPDA'] = el.MA_CAPDA == "1" ? ["Dưới 380V"] : ["Từ 380V đến dưới 6kV"];
          el['NGAY_CHOT'] = el.NGAY_DKY;
          el['TONG'] = el.SAN_LUONG;
          LST_CHISO.push(el);
        } else if (el.LOAICHISO == 'DDK' && cs != null) {
          el['DIEN_GIAI'] = "Được sửa đổi";
          el['STT_GOC'] = el.STT;
          el['DMLTYPE'] = "Insert";
          el['TEN_CAPDA'] = el.MA_CAPDA == "1" ? ["Dưới 380V"] : ["Từ 380V đến dưới 6kV"];
          el['CHISO_MOI'] = `${cs.UOCCHISOCHOT}`;
          el['NGAY_CHOT'] = el.NGAY_DKY;
          el['NGAY_CKY'] = _this5.NGAY_CKY;
          el['SAN_LUONG'] = `${+cs.UOCCHISOCHOT - +el.CHISO_CU}`;
          el['TONG'] = `${+cs.UOCCHISOCHOT - +el.CHISO_CU}`;
          el['IS_SELECTED'] = "0";
          el['SLUONG_THAO'] = "0";
          el['MA_DVICTREN'] = "PK";
          el['IS_SELECTED'] = "0";
          el['FLAG'] = "X";
          el['MA_TTCTO'] = '';
          el['MA_CNANG'] = "80";
          el['NGUOI_SUA'] = _this5.userCmis.USERNAME;
          el['NGUOI_TAO'] = _this5.userCmis.USERNAME;
          el['DMLTYPE_CS'] = "";
          LST_CHISO.push(el);
          change.push(el.MA_KHANG);
        }
      }
      let bodyNhapCS = {
        LST_CHISO: LST_CHISO,
        LST_LICH: [get_Lich_SoGCS.lstLichgcs[0]],
        LST_CSUAT_DDO: []
      };
      console.log('change', change);
      console.log(bodyNhapCS);
      let nhap = yield _this5.chiSoSV.ExcuteNhapCSDoiGia(bodyNhapCS);
      _this5.maSoGSCs.find(el2 => el2.maSo == maSo).SL = change.length;
    })();
  }
  getMonth(evt) {
    console.log(evt);
    this.startDay = moment__WEBPACK_IMPORTED_MODULE_2___default()(evt, 'MM/YYYY').toDate();
    this.thang = `${this.startDay.getMonth() + 1}`;
    this.nam = `${this.startDay.getFullYear()}`;
  }
  static {
    this.ɵfac = function NhapChiSoDinhKyComponent_Factory(t) {
      return new (t || NhapChiSoDinhKyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_cmis4v2_service__WEBPACK_IMPORTED_MODULE_3__.Cmis4V2Service), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_chi_so_service__WEBPACK_IMPORTED_MODULE_4__.ChiSoService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: NhapChiSoDinhKyComponent,
      selectors: [["app-nhap-chi-so-dinh-ky"]],
      decls: 11,
      vars: 5,
      consts: [[1, "container", "pt-4"], [3, "label", "startDay", "month"], [1, "row"], ["matInput", "", "placeholder", "M\u00E3 s\u1ED1", 3, "ngModel", "ngModelChange"], ["type", "button", 3, "click"]],
      template: function NhapChiSoDinhKyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "app-month-year", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("month", function NhapChiSoDinhKyComponent_Template_app_month_year_month_1_listener($event) {
            return ctx.getMonth($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2)(7, "mat-form-field")(8, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NhapChiSoDinhKyComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.maSo = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NhapChiSoDinhKyComponent_Template_button_click_9_listener() {
            return ctx.test();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " test");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", "K\u1EF3 ghi ch\u1EC9 s\u1ED1")("startDay", ctx.startDay);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Th\u00E1ng: ", ctx.thang, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("N\u0103m: ", ctx.nam, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.maSo);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _share_material_month_year_month_year_component__WEBPACK_IMPORTED_MODULE_5__.MonthYearComponent]
    });
  }
}

/***/ }),

/***/ 91395:
/*!**************************************************!*\
  !*** ./src/app/cmis4/so-hoa/so-hoa.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoHoaComponent: () => (/* binding */ SoHoaComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _apiURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apiURL */ 72676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/pouchdb.service */ 32939);
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uid */ 10723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var src_app_kinh_doanh_bao_dam_hop_dong_bao_dam_hop_dong_v2_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/kinh-doanh/bao-dam-hop-dong/bao-dam-hop-dong-v2.service */ 32285);
/* harmony import */ var src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/share/services/sheets.service */ 63402);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 5951);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 82798);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ 11161);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);
/* harmony import */ var _doi_soat_c06_doi_soat_c06_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../doi-soat-c06/doi-soat-c06.component */ 11177);
/* harmony import */ var _share_custom_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../share/custom.pipe */ 78061);
/* harmony import */ var _share_pipes_vietnameseFilter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../share/pipes/vietnameseFilter.pipe */ 7613);
































function SoHoaComponent_div_18_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 42)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "td")(6, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_18_tr_21_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r16);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r15.xoaGhiChu(item_r13._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td")(10, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_18_tr_21_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r16);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r17.taoCal(item_r13.GHI_CHU, item_r13.MA_KHANG + " - " + item_r13.TEN_KHANG, item_r13.NGAY));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "cal");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r13.NGAY);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r13.GHI_CHU);
  }
}
function SoHoaComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "div", 12)(2, "div")(3, "table", 33)(4, "thead", 34)(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "Ng\u00E0y");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Ghi ch\u00FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "tbody")(12, "tr", 37)(13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "td")(16, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keydown.enter", function SoHoaComponent_div_18_Template_input_keydown_enter_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r18.luuGhiChu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "td")(18, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_18_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r20.luuGhiChu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, SoHoaComponent_div_18_tr_21_Template, 12, 2, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r0.ghiChufb);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r0.itemsGhiChu);
  }
}
function SoHoaComponent_div_19_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_19_tr_14_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r24);
      const item_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r23.main.controls["MA_YCAU_KNAI"].setValue(item_r22.MA_DDO.slice(0, 13)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r22.MA_DDO.slice(0, 13));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r22.TEN_DDO);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r22.CONG_SUAT);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r22.SO_PHA);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](11, 5, item_r22.NGAY_HLUC, "dd-MM-yyyy"));
  }
}
function SoHoaComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "div")(2, "table", 45)(3, "thead", 46)(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "T\u00EAn tr\u1EA1m");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "C\u00F4ng su\u1EA5t");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "S\u1ED1 pha");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "Ng\u00E0y hi\u1EC7u l\u1EF1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, SoHoaComponent_div_19_tr_14_Template, 12, 8, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.ttTram);
  }
}
function SoHoaComponent_ul_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ul")(1, "mat-radio-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_ul_20_Template_mat_radio_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r26.main.controls["MA_YCAU_KNAI"].setValue(item_r25.MA_YCAU_KNAI));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate3"]("", item_r25.MA_YCAU_KNAI, " - ", item_r25.NGAY_TNHAN, " - ", item_r25.NOI_DUNG_YCAU, "");
  }
}
function SoHoaComponent_div_21_h6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h6", 42)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const itemgc_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", itemgc_r29, " ");
  }
}
function SoHoaComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SoHoaComponent_div_21_h6_1_Template, 3, 1, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r3.ghiChu);
  }
}
function SoHoaComponent_div_22_h6_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h6", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_h6_14_Template_h6_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r37.copytxt(ctx_r37.tenMST + ctx_r37.ttMST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("T\u00EAn KH: ", ctx_r30.tenMST, " (", ctx_r30.ttMST, ")");
  }
}
function SoHoaComponent_div_22_h6_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h6", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_h6_19_Template_h6_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r39.copytxt(ctx_r39.dcMST));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u0110\u1ECBa ch\u1EC9: ", ctx_r31.dcMST, "");
  }
}
function SoHoaComponent_div_22_h6_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("S\u1ED1 h\u1ED9: ", ctx_r32.item.SO_HO, "");
  }
}
function SoHoaComponent_div_22_h5_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h5", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_h5_41_Template_h5_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r41.getDMTMN());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "C\u00F3 l\u1EB7p \u0111i\u1EC7n m\u1EB7t tr\u1EDDi m\u00E1i nh\u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function SoHoaComponent_div_22_p_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "p")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate3"]("S\u1ED1 h\u1EE3p \u0111\u1ED3ng: ", ctx_r34.itemDMTMN.MA_HDONG, " ng\u00E0y ", ctx_r34.itemDMTMN.NGAY_KY, " C\u00F4ng su\u1EA5t: ", ctx_r34.itemDMTMN.CONG_SUAT, " kWp");
  }
}
function SoHoaComponent_div_22_h6_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" K\u00FD qu\u1EF9: ", ctx_r35.kyQuy, "");
  }
}
const _c0 = function (a0) {
  return {
    "bg-danger": a0
  };
};
function SoHoaComponent_div_22_table_54_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_table_54_tr_14_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47);
      const item_r44 = restoredCtx.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r46.copytxt(item_r44.taxID));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_table_54_tr_14_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47);
      const item_r44 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r48.copytxt(item_r44.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_table_54_tr_14_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47);
      const item_r44 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r49.copytxt(item_r44.address));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_table_54_tr_14_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47);
      const item_r44 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r50.copytxt(item_r44.status));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r44.taxID);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r44.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r44.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](9, _c0, item_r44.status !== "NNT \u0111ang ho\u1EA1t \u0111\u1ED9ng"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r44.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](11, 6, item_r44.updatedAt, "dd-MM-yyyy"));
  }
}
function SoHoaComponent_div_22_table_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "table", 45)(1, "thead", 46)(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "MST");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "T\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "\u0110\u1ECBa ch\u1EC9");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "Tr\u1EA1ng th\u00E1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "Ng\u00E0y c\u1EADp nh\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, SoHoaComponent_div_22_table_54_tr_14_Template, 12, 11, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](15, 2, ctx_r36.ttThueFull, ctx_r36.keySearch))("ngForTrackBy", ctx_r36.trackByFn);
  }
}
function SoHoaComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r51.copytxt(ctx_r51.item.MA_KHANG));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r53.copytxt(ctx_r53.item.TEN_KHANG));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r54.copytxt(ctx_r54.item.MASO_THUE));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "M\u00E3 s\u1ED1 thu\u1EBF:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function SoHoaComponent_div_22_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r55.item.MASO_THUE = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_span_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r56.copytxt(ctx_r56.item.SO_CMT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, SoHoaComponent_div_22_h6_14_Template, 2, 2, "h6", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r57.copytxt(ctx_r57.item.DIA_CHI));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r58.copytxt(ctx_r58.item.DCHI_DIEMDO));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, SoHoaComponent_div_22_h6_19_Template, 2, 1, "h6", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r59.copytxt(ctx_r59.item.MUC_DICHSD));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r60.copytxt(ctx_r60.item.EMAIL));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r61.copytxt(ctx_r61.item.MA_SOGCS));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r62.copytxt(ctx_r62.item.CHUOI_GIA));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r63.copytxt(ctx_r63.item.TEN_TRAM));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r64.copytxt(ctx_r64.item.SO_PHA));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r65.copytxt(ctx_r65.item.TENLOAI_DDO));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r66.copytxt(ctx_r66.item.KIMUA_CSPK));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r67.copytxt(ctx_r67.item.DIEM_DAUNOI));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_h6_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r68.copytxt(ctx_r68.item.RGIOI_SOHUU));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, SoHoaComponent_div_22_h6_40_Template, 2, 1, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](41, SoHoaComponent_div_22_h5_41_Template, 2, 0, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](42, SoHoaComponent_div_22_p_42_Template, 3, 3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](43, SoHoaComponent_div_22_h6_43_Template, 2, 1, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "div", 12)(45, "div", 56)(46, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r69.getMST(ctx_r69.item.MASO_THUE));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](48, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_22_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r70.getMSTHKD(ctx_r70.item.MASO_THUE));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](50, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](51, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "div", 59)(53, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function SoHoaComponent_div_22_Template_input_ngModelChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r71.keySearch = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](54, SoHoaComponent_div_22_table_54_Template, 16, 5, "table", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("M\u00E3 KH: ", ctx_r4.item.MA_KHANG, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r4.item.HLUC_DENNGAY);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("T\u00EAn KH: ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 26, ctx_r4.item.TEN_KHANG), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r4.item.MASO_THUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("CCCD: ", ctx_r4.item.SO_CMT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r4.dcMST.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u0110\u1ECBa ch\u1EC9: ", ctx_r4.item.DIA_CHI, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u0110\u1ECBa ch\u1EC9 \u0111i\u1EC3m \u0111o: ", ctx_r4.item.DCHI_DIEMDO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r4.dcMST.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("M\u1EE5c \u0111\u00EDch: ", ctx_r4.item.MUC_DICHSD, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Email: ", ctx_r4.item.EMAIL_FULL, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("M\u00E3 s\u1ED5 ghi ch\u1EC9 s\u1ED1: ", ctx_r4.item.MA_SOGCS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Chu\u1ED7i gi\u00E1: ", ctx_r4.item.CHUOI_GIA, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("T\u00EAn tr\u1EA1m: ", ctx_r4.item.TEN_TRAM, " - ", ctx_r4.item.MA_TRAM, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("S\u1ED1 pha: ", ctx_r4.item.SO_PHA, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Lo\u1EA1i \u0111i\u1EC3m \u0111o: ", ctx_r4.item.TENLOAI_DDO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Mua CSPK: ", ctx_r4.item.KIMUA_CSPK, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u0110i\u1EC3m \u0111\u1EA5u n\u1ED1i: ", ctx_r4.item.DIEM_DAUNOI, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("S\u1EDF h\u1EEFu: ", ctx_r4.item.RGIOI_SOHUU, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", +ctx_r4.item.SO_HO > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", +ctx_r4.item.TCHAT_MTAM == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", +ctx_r4.item.TCHAT_MTAM == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r4.kyQuy.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r4.keySearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r4.ttThueFull);
  }
}
function SoHoaComponent_div_24_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_24_tr_17_Template_td_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r76);
      const item_r73 = restoredCtx.$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r75.GetBase64HDTHSoUploadByMaYCau(item_r73));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_24_tr_17_Template_td_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r76);
      const item_r73 = restoredCtx.$implicit;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r77.main.controls["MA_YCAU_KNAI"].setValue(item_r73.MA_YCAU_KNAI));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r73 = ctx.$implicit;
    const i_r74 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 6, item_r73));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](i_r74 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r73.TEN_HSGT);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](8, 8, item_r73.NGAY_KYKH, "dd-MM-yy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r73.MA_YCAU_KNAI);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r73.TINH_TRANG == "3" ? "\u0110\u00E3 k\u00FD s\u1ED1" : "\u0110\u00EDnh k\u00E8m");
  }
}
function SoHoaComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "H\u1ED3 s\u01A1 \u0111ang c\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "table", 66)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "STT");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "T\u00EAn h\u1ED3 s\u01A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "Ng\u00E0y");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "M\u00E3 y\u00EAu c\u1EA7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "T\u00ECnh tr\u1EA1ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, SoHoaComponent_div_24_tr_17_Template, 13, 11, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r5.HoSo);
  }
}
function SoHoaComponent_div_29_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_29_mat_option_6_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r81);
      const item_r79 = restoredCtx.$implicit;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r80.selectOpt(item_r79));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", item_r79.MA_LOAI_HSO);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", item_r79.TEN_LOAI_HSO, " ");
  }
}
function SoHoaComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "Lo\u1EA1i h\u1ED3 s\u01A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, SoHoaComponent_div_29_mat_option_6_Template, 2, 2, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "app-drop-files", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("files", function SoHoaComponent_div_29_Template_app_drop_files_files_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r82.onDropFile($event));
    })("ondragover", function SoHoaComponent_div_29_Template_app_drop_files_ondragover_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r84.ondragover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r6.LoaiHS);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("label", "");
  }
}
function SoHoaComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 72)(1, "b")(2, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r7.main.value.MA_YCAU_KNAI);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r7.opt == null ? null : ctx_r7.opt.TEN_LOAI_HSO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r7.fileName);
  }
}
function SoHoaComponent_div_33_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r86 = ctx.$implicit;
    const i_r87 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](i_r87 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", item_r86.THANG, "/", item_r86.NAM, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 8, item_r86.DNTT_CTIET));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 10, item_r86.TIEN_CTIET));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r86.BCS);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 12, item_r86.CHISO_CU));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 14, item_r86.CHISO_MOI));
  }
}
function SoHoaComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 73)(1, "div", 50)(2, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "numberPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "mat-expansion-panel")(7, "mat-expansion-panel-header")(8, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "S\u1EA3n l\u01B0\u1EE3ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "table", 66)(11, "thead")(12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "STT");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "Th\u00E1ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "\u0110NTT");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "S\u1ED1 ti\u1EC1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22, "BCS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, "CHISO_CU");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26, "CHISO_MOI");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](28, SoHoaComponent_div_33_tr_28_Template, 19, 16, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 75)(30, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_div_33_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r89);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r88.exportSL());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "Xu\u1EA5t file");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "\u00C1p gi\u00E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](34, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "H\u1EE3p \u0111\u1ED3ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](37, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "\u0110o \u0111\u1EBFm");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](40, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, "Treo Th\u00E1o");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](43, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45, "Qu\u00E1 tr\u00ECnh h\u1EE3p \u0111\u1ED3ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](46, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("Ti\u1EC1n b\u00ECnh qu\u00E2n: ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 8, ctx_r8.bq), " | S\u1EA3n l\u01B0\u1EE3ng: ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 10, ctx_r8.sl12Thang), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r8.sanLuong);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", ctx_r8.ttApGia, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", ctx_r8.ttHopDong, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", ctx_r8.ttDoDem, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", ctx_r8.ttTreoThao, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", ctx_r8.ttQuaTrinhHopDong, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
  }
}
function SoHoaComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "iframe", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r9.pdfUrl, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeResourceUrl"]);
  }
}
function SoHoaComponent_span_41_span_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span")(1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_span_41_span_1_span_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r96);
      const item_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r94.removeFile(item_r91));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
}
function SoHoaComponent_span_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_span_41_span_1_Template_mat_icon_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r98);
      const item_r91 = restoredCtx.$implicit;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r97.convertBase64ToSafeUrl(item_r91.BASE64));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, SoHoaComponent_span_41_span_1_span_5_Template, 4, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r91 = ctx.$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("File - ", item_r91.NGAY_UPLOAD, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r90.checkPer(4));
  }
}
function SoHoaComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SoHoaComponent_span_41_span_1_Template, 6, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r10.multiHS);
  }
}
function SoHoaComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r99.XA);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r99.KA_CU);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r99.KA_MOI);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r99.GHI_CHU);
  }
}
class SoHoaComponent {
  constructor(cmis4SV, plus, formSV, loadSV, sanitizer, kyQuySV, sheetdbSV, excelSV, pouchDBSV) {
    this.cmis4SV = cmis4SV;
    this.plus = plus;
    this.formSV = formSV;
    this.loadSV = loadSV;
    this.sanitizer = sanitizer;
    this.kyQuySV = kyQuySV;
    this.sheetdbSV = sheetdbSV;
    this.excelSV = excelSV;
    this.pouchDBSV = pouchDBSV;
    this.api = 'cmis4-so-hoa';
    this.api_TonTai = 'ton-tai-CMIS';
    this.db = null;
    this.dbKD = null;
    this.dbName = 'cmis4';
    this.dbNameKD = 'kinh-doanh';
    this.opt = null;
    this.fileName = '';
    this.main = this.formSV.fb.group({
      MA_DVIQLY: 'PK0500',
      MA_LOAI_HSO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
      MA_YCAU_KNAI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern('^[a-zA-Z0-9]*$')]],
      DINH_DANG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
      FILE_VALUE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]]
    });
    this.ghiChufb = this.formSV.fb.group({
      GHI_CHU: [''],
      NGAY: [''],
      MA_KHANG: [''],
      _id: ['']
    });
    this.header = {
      MA_DVIQLY: 'Ma đơn vị quản lý',
      MA_YCAU_KNAI: 'Mã KH',
      MA_LOAI_HSO: 'Loại hồ sơ',
      DINH_DANG: 'File',
      FILE_VALUE: 'File'
    };
    this.nam = moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY');
    this.thang = moment__WEBPACK_IMPORTED_MODULE_2___default()().format('M');
    this.LoaiHS = [];
    this.HoSo = [];
    this.multiHS = [];
    this.dsYeuCau = [];
    this.maYeuCau = '';
    this.sttSoHoa = [];
    this.sanLuong = [];
    this.hdong = '';
    this.sttHS = '';
    this.ttHopDong = '';
    this.ttApGia = '';
    this.ttDoDem = '';
    this.ttTreoThao = '';
    this.ttQuaTrinhHopDong = '';
    this.ttMST = '';
    this.tenMST = '';
    this.dcMST = '';
    this.mstCN = '';
    this.bq = 0;
    this.kyQuy = '';
    this.item = null;
    this.ghiChu = [];
    this.tonTaiArr = [];
    this.sl12Thang = 0;
    this.ttTram = [];
    this.ttThueFull = [];
    this.itemsGhiChu = [];
    this.maPK = '';
    this.keySearch = 'Xuân';
    this.listImages = [];
    this.listPDFViewer = [];
    this.libraryId = 'AKfycbwpPKapOmmdRfr1tCcvXh8x1YgOI1CrwQgHe8-mUeIs6e7L7p0b1YJMTD1E-wH6S3D3EQ';
    this.khuAp = [];
    this.keyKA = '';
    this.itemDMTMN = null;
  }
  ngOnInit() {
    this.pouchDBSV.connectRemote(this.api).subscribe();
    this.getSoTT();
    this.getKA();
    this.getGToCViecLoaiYC();
  }
  convertBase64ToSafeUrl(base64String) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loadSV.load('getpdf');
      _this.plus.clickBtn('closeModalXHSGT');
      const cleanBase64 = base64String.trim();
      let mimeType = 'application/pdf';
      if (cleanBase64.startsWith('/9j/')) {
        mimeType = 'image/jpeg';
      } else if (cleanBase64.startsWith('iVBORw')) {
        mimeType = 'image/png';
      }
      if (mimeType == 'application/pdf') {
        const blob = _this.Base64ToBlob(cleanBase64);
        const url = URL.createObjectURL(blob);
        _this.pdfUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(url);
      } else {
        const dataUrl = `data:${mimeType};base64,${cleanBase64}`;
        _this.pdfUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(dataUrl);
      }
      yield _this.plus.sleep(1500);
      _this.loadSV.loaded('getpdf');
      _this.plus.clickBtn('modalXHSGT');
    })();
  }
  GetBase64HDTHSoUploadByMaYCau(item) {
    this.loadSV.load('GetBase64HDTHSoUploadByMaYCau');
    if (+item.TINH_TRANG >= 0) {
      const param = '/123/' + '123/' + item.MA_DVIQLY + '/' + item.MA_YCAU_KNAI + '/' + item.MA_HSGT;
      this.cmis4SV.getHSGT(param).subscribe(data => {
        const blobUrl = URL.createObjectURL(data);
        window.open(blobUrl);
      });
      this.loadSV.loaded('GetBase64HDTHSoUploadByMaYCau');
    } else {
      const url = 'https://cmis-api.evnspc.vn/serviceInterface/GetBase64HDTHSoUploadByMaYCau';
      const path = '/serviceInterface/GetBase64HDTHSoUploadByMaYCau';
      const payload = {
        'MA_DVIQLY': this.cmis4SV.getUser().SUBDIVISIONID,
        'MA_YCAU_KNAI': item.MA_YCAU_KNAI,
        'MA_LOAI_HSO': item.MA_HSGT
      };
      return this.cmis4SV.cmis4Request(url, path, payload).then(res => {
        if (Array.isArray(res) && res.length > 0) {
          this.multiHS = res;
          this.convertBase64ToSafeUrl(res[0].BASE64);
        }
        this.loadSV.loaded('GetBase64HDTHSoUploadByMaYCau');
      });
    }
  }
  Base64ToBlob(b64Data) {
    const contentType = 'application/pdf';
    const sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  }
  getGhiChu() {
    this.pouchDBSV.getDocsByKeyValue(this.api, 'MA_KHANG', this.maPK).then(res => {
      console.log(res);
      this.itemsGhiChu = res.sort((a, b) => new Date(b.NGAY).getTime() - new Date(a.NGAY).getTime());
    });
  }
  taoTask(title, notes, due) {
    const url = `https://script.google.com/macros/s/${this.libraryId}/exec?title=${title}&notes=${notes}&due=${due}`;
    fetch(url).then(r => {
      console.log(r);
      this.plus.alertSuccess('Đã tạo task');
    }).catch(e => console.log(e));
  }
  taoCal(title, description, start) {
    const url = 'https://share.4la.vn/cal';
    const calendarId = window['remote'].KD_Cal_ID || 'primary';
    const startTime = moment__WEBPACK_IMPORTED_MODULE_2___default()(start, 'YYYY-MM-DD').set('hour', 8).toISOString();
    const endTime = moment__WEBPACK_IMPORTED_MODULE_2___default()(start, 'YYYY-MM-DD').set('hour', 11).toISOString();
    const body = {
      title,
      description,
      startTime,
      endTime,
      calendarId
    };
    console.log(url, body);
    return axios__WEBPACK_IMPORTED_MODULE_18__["default"].post(url, body).then(r => {
      console.log(r);
      this.plus.alertSuccess('Đã tạo Cal');
    }).catch(e => console.log(e));
  }
  luuGhiChu() {
    const ghiChu = this.ghiChufb.value;
    ghiChu._id = (0,uid__WEBPACK_IMPORTED_MODULE_4__.uid)(4);
    ghiChu.MA_KHANG = this.maPK;
    const body = Object.assign(ghiChu, this.plus.obj_extractByKeys(this.item, ['TEN_KHANG', 'DIA_CHI', 'DCHI_DIEMDO', 'MA_KHANG', 'MA_TRAM']));
    this.pouchDBSV.save(this.api, body).then(() => {
      this.plus.alertSuccess('Đã lưu ghi chú');
      this.getGhiChu();
    });
  }
  xoaGhiChu(id) {
    this.pouchDBSV.delete(this.api, id).then(() => {
      this.plus.alertSuccess('Đã xóa ghi chú');
      this.getGhiChu();
    });
  }
  timMaTram() {
    this.cmis4SV.getDiemDo(this.maPK).then(res => {
      console.log(res);
      return this.ttTram = res;
    });
  }
  timkiem() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const maPK = _this2.cmis4SV.convertPK(_this2.maPK);
      return _this2.cmis4SV.timKiemKhachHang(maPK).then(data => {
        console.log(data);
        !_this2.item ? _this2.item = data[0] : _this2.item = Object.assign(_this2.item, data[0]);
      });
    })();
  }
  lay_TTinHopDongDeKyLai_TheoLoArr() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        "MA_DVIQLY": "PK0500",
        "MA_KHANG": _this3.maPK,
        "LOAI_YCAU": "KLLO"
      };
      _this3.cmis4SV.lay_TTinHopDongDeKyLai_TheoLoArr([body]).then(data => {
        !_this3.item ? _this3.item = data[0] : _this3.item = Object.assign(_this3.item, data[0]);
        console.log(_this3.item);
        if (_this3.item.MASO_THUE.length == 0) {
          _this3.item.MASO_THUE = _this3.item.SO_CMT;
        }
      }).catch(() => _this3.plus.loadSV.loaded('getMST'));
    })();
  }
  getMST(mst) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.plus.loadSV.load('getMST');
      if (!mst) mst = _this4.item.SO_CMT;
      if (mst.length == 0) return _this4.plus.loadSV.loaded('getMST');
      return axios__WEBPACK_IMPORTED_MODULE_18__["default"].get('https://api.xinvoice.vn/gdt-api/tax-payer-records/' + mst).then(res => {
        console.log(res);
        _this4.tenMST = res.data.data[0].name;
        _this4.dcMST = res.data.data[0].address;
        _this4.ttMST = res.data.data[0].status + ' - ' + res.data.data[0].updatedAt;
        _this4.ttThueFull = _this4.plus.sortArr(res.data.data, 'taxID', 1);
        _this4.plus.loadSV.loaded('getMST');
      }).catch(() => _this4.plus.loadSV.loaded('getMST'));
    })();
  }
  getMSTHKD(mst) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.plus.loadSV.load('getMST');
      if (!mst) mst = _this5.item.SO_CMT;
      if (mst.length == 0) return _this5.plus.loadSV.loaded('getMST');
      return axios__WEBPACK_IMPORTED_MODULE_18__["default"].get('https://api.xinvoice.vn/gdt-api/tax-payer/' + mst).then(res => {
        console.log(res);
        _this5.tenMST = res.data.data[0].name;
        _this5.dcMST = res.data.data[0].address;
        _this5.ttMST = res.data.data[0].status + ' - ' + res.data.data[0].updatedAt;
        _this5.ttThueFull = _this5.plus.sortArr(res.data.data, 'taxID', 1);
        _this5.plus.loadSV.loaded('getMST');
      });
    })();
  }
  getDMTMN() {
    this.cmis4SV.TimKiemKHangMTMN(this.maPK).then(data => {
      this.itemDMTMN = data[0];
    });
  }
  getSL() {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const pk = _this6.maPK;
      const tuNgay = moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(12, 'months').format('MM/YYYY');
      const denNgay = moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(1, 'months').format('MM/YYYY');
      yield _this6.cmis4SV.getSaoLucChiSo(pk, tuNgay, denNgay).then(res => {
        console.log(res);
        let tongTien = 0;
        for (let i = 0; i < res.length; i++) {
          const el = res[i];
          if (el.BCS == 'SG' || el.BCS == 'KT') {
            tongTien += el.TIEN_CTIET;
            _this6.sl12Thang += el.DNTT_CTIET;
          }
        }
        _this6.sanLuong = res.filter(el => el.BCS == 'SG' || el.BCS == 'KT');
        const bq = Math.round(tongTien / 12);
        _this6.sl12Thang = Math.round(Number(_this6.sl12Thang) / 12);
        return _this6.bq = bq;
      });
    })();
  }
  copytxt(txt) {
    this.plus.copyToClipboard(txt);
  }
  exportSL() {
    this.excelSV.export(this.sanLuong, 'SanLuong-' + this.main.value.MA_YCAU_KNAI);
  }
  tracuu() {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const pk = _this7.cmis4SV.convertPK(_this7.main.value.MA_YCAU_KNAI);
      const body = {
        "strMaDViQLy": _this7.main.controls['MA_YCAU_KNAI'].value.slice(0, 6),
        "strMaKhang": pk,
        "strMaDdo": pk + "001",
        "iKy": "1",
        "iThang": +_this7.thang,
        "iNam": +_this7.nam,
        "nLoaiTraCuu": 12,
        "trangThaiHL": "1"
      };
      const url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/traCuuTtinKhang';
      _this7.cmis4SV.cmis4Request(url, '', body).then(res => {
        if (res.length == 0) return;
        let hd = JSON.parse(res.TTIN_TRACUU[0]) || [];
        _this7.hdong = _this7.plus.generateHtmlTable(hd);
        hd = _this7.plus.sortArr(hd, 'HLUC_TUNGAY', -1);
        hd = _this7.filterKeys(hd, ['MA_HDONG', 'HLUC_TUNGAY', 'HLUC_DENNGAY', 'THOIHAN_TTOAN']);
        _this7.ttHopDong = _this7.plus.generateHtmlTable(hd);
      });
      body.nLoaiTraCuu = 1;
      _this7.cmis4SV.cmis4Request(url, '', body).then(res => {
        if (res.length == 0) return;
        let hd = JSON.parse(res.TTIN_TRACUU[0]) || [];
        hd = _this7.filterKeys(hd, ['MA_KHANG', 'NGAY_HLUC', 'LOAI_BCS_APGIA', 'MA_NHOMNN', 'DINH_MUC', 'SO_HO_APGIA']);
        console.log(res);
        _this7.ttApGia = _this7.plus.generateHtmlTable(hd);
      });
      body.nLoaiTraCuu = 0;
      _this7.cmis4SV.cmis4Request(url, '', body).then(res => {
        if (res.length == 0) return;
        let hd = JSON.parse(res.TTIN_TRACUU[0]) || [];
        hd = _this7.filterKeys(hd, ['DIA_CHI_KH', 'SO_HO', 'LOAI_DDO', 'KIMUA_CSPK', 'SO_PHA', 'NGAY_HLUC']);
        _this7.ttDoDem = _this7.plus.generateHtmlTable(hd);
        console.log(res);
      });
      body.nLoaiTraCuu = 11;
      _this7.cmis4SV.cmis4Request(url, '', body).then(res => {
        if (res.length == 0) return;
        let hd = JSON.parse(res.TTIN_TRACUU[0]) || [];
        hd = _this7.plus.sortArr(hd, 'NGAY_HLUC', -1);
        hd = _this7.filterKeys(hd, ['MA_KHANG', 'TEN_KHANG', 'NGAY_HLUC', 'MA_HDONG', 'MASO_THUE']);
        _this7.ttQuaTrinhHopDong = _this7.plus.generateHtmlTable(hd);
      });
      body.nLoaiTraCuu = 13;
      _this7.cmis4SV.cmis4Request(url, '', body).then(res => {
        if (res.length == 0) return;
        let hd = JSON.parse(res.TTIN_TRACUU[0]) || [];
        hd = _this7.plus.sortArr(hd, 'ID_BBAN', -1);
        hd = _this7.filterKeys(hd, ['MA_KHANG', 'TEN_KHANG', 'NGAY_TTHAO', 'MA_TBI', 'TEN_LDO']);
        _this7.ttTreoThao = _this7.plus.generateHtmlTable(hd);
        console.log(res);
      });
    })();
  }
  filterKeys(arr, keys) {
    return arr.map(obj => Object.fromEntries(keys.map(k => [k, obj[k]])));
  }
  getSttByPK() {
    const pk = this.cmis4SV.convertPK(this.maPK);
    this.pouchDBSV.get('SoHoa', pk).then(res => {
      this.sttHS = res.SoThuTu;
      alert(this.sttHS);
    });
  }
  getKA() {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.sheetdbSV.get('1AF5J9vPAgvnma5BUIHDOtMjlG4C9d_97hUmoN1QlZ6Q', 'Data').subscribe(res => {
        _this8.khuAp = res.data;
        _this8.pouchDBSV.save('KhuAp', _this8.khuAp).catch(err => {
          console.log(err);
        });
      });
    })();
  }
  getSoTT() {
    var _this9 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const info = yield _this9.pouchDBSV.dbInfo('SoHoa');
      if (info.doc_count == 0) {
        _this9.sheetdbSV.get('1zhuwB9qoLm5kyFfpJFoa-1yKKsMN1Ltn9tejML8Dguo', 'SoHoa').subscribe(res => {
          _this9.pouchDBSV.save('SoHoa', res.data).catch(err => {
            console.log(err);
          });
        });
      }
    })();
  }
  xemKyQuy() {
    var _this0 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this0.kyQuySV.getByPk(_this0.cmis4SV.convertPK(_this0.maPK)).then(res => {
        console.log(res);
        if (!res) return;
        _this0.kyQuy = _this0.plus.numberWithCommas(res.STIEN_DCOC) + '-' + res.TRANG_THAI;
      });
    })();
  }
  getYeuCau() {
    var _this1 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this1.multiHS = [];
      _this1.pdfUrl = null;
      _this1.cmis4SV.timKiemYeuCau(_this1.cmis4SV.convertPK(_this1.main.value.MA_YCAU_KNAI)).then(response => {
        console.log('Response from timKiemYeuCau:', response);
        if (Array.isArray(response)) _this1.dsYeuCau = response;
        if (_this1.dsYeuCau.length == 1) _this1.maYeuCau = _this1.dsYeuCau[0].MA_YCAU_KNAI;
        _this1.loadSV.clear();
      }).catch(err => {
        console.error('Error in timKiemYeuCau:', err);
      });
    })();
  }
  uploadHSoGTo() {
    this.loadSV.load('uploadHSoGTo');
    const url = 'https://cmis-api.evnspc.vn/serviceInterface/uploadHSoGTo';
    const path = '/serviceInterface/uploadHSoGTo';
    const err = this.formSV.getErrValidateFormV2(this.main, this.header);
    if (err.length > 0) return this.plus.alertError(err);
    const data = this.main.value;
    data.MA_YCAU_KNAI = this.cmis4SV.convertPK(data.MA_YCAU_KNAI);
    this.cmis4SV.cmis4Request(url, path, data).then(res => {
      this.plus.alertMatSnackBar(res.MESSAGE);
      this.loadSV.loaded('uploadHSoGTo');
      this.main.reset();
      this.main.patchValue({
        MA_YCAU_KNAI: data.MA_YCAU_KNAI,
        MA_DVIQLY: data.MA_DVIQLY
      });
      this.GetAllListHSoGToOfKHang();
    });
  }
  getGToCViecLoaiYC() {
    const url = 'https://cmis-api.evnspc.vn/serviceDanhMuc/getGToCViecLoaiYC';
    const path = '/serviceDanhMuc/getGToCViecLoaiYC';
    const payload = {
      'MA_LOAI_HSO': 'ALL',
      'MA_LOAI_YCAU': 'TLYKMOI',
      'MA_CVIEC': 'TN',
      'LOAI_SOHUU': '2'
    };
    this.cmis4SV.cmis4Request(url, path, payload).then(res => {
      localStorage.setItem('getGToCViecLoaiYC', JSON.stringify(res));
      this.LoaiHS = res;
    });
  }
  onDropFile(files) {
    this.parse64(files[0]).then(res => {
      const fileType = files[0].type.replace(/^.*\./, '');
      this.main.controls['DINH_DANG'].setValue(fileType.indexOf('/') < 0 ? fileType : fileType.split('/')[fileType.split('/').length - 1]);
      this.main.controls['FILE_VALUE'].setValue(res.toString().split(',')[1]);
      this.fileName = files[0].name;
      console.log(this.main.value);
    });
  }
  ondragover() {
    document.getElementById("dropZone").setAttribute("drop-active", "true");
  }
  selectOpt(opt) {
    var _this10 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.main.controls['MA_LOAI_HSO'].setValue(opt.MA_LOAI_HSO);
      _this10.opt = opt;
    })();
  }
  GetAllListHSoGToOfKHang() {
    var _this11 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.maPK = _this11.cmis4SV.convertPK(_this11.main.value.MA_YCAU_KNAI);
      _this11.reset();
      _this11.tracuu();
      _this11.getSL();
      _this11.xemKyQuy();
      _this11.timkiem();
      _this11.lay_TTinHopDongDeKyLai_TheoLoArr();
      _this11.getGhiChu();
      _this11.multiHS = [];
      _this11.pdfUrl = null;
      _this11.main.controls['MA_YCAU_KNAI'].setValue(_this11.maPK);
      const url = 'https://cmis-api.evnspc.vn/serviceInterface/GetAllListHSoGToOfKHang';
      const payload = {
        "MA_DVIQLY": _this11.main.controls['MA_YCAU_KNAI'].value.slice(0, 6),
        "MA_KHANG": _this11.maPK
      };
      _this11.tonTaiArr.forEach(el => {
        if (el.MA_KHANG == _this11.main.controls['MA_YCAU_KNAI'].value) {
          _this11.ghiChu.push(el.GHI_CHU);
        }
      });
      return _this11.cmis4SV.cmis4Request(url, '', payload).then(res => {
        _this11.HoSo = res.map(item => {
          item.NGAY_KYKH = moment__WEBPACK_IMPORTED_MODULE_2___default()(item.NGAY_KYKH, 'DD/MM/YYYY').toDate();
          return item;
        });
        _this11.HoSo = _this11.plus.sortArr(_this11.HoSo, 'NGAY_KYKH', -1);
      });
    })();
  }
  removeFile(item) {
    const payload = {
      "MA_DVIQLY": this.main.controls['MA_YCAU_KNAI'].value.slice(0, 6),
      "MA_YCAU_KNAI": this.cmis4SV.convertPK(item.MA_YCAU_KNAI),
      "MA_LOAI_HSO": item.MA_LOAI_HSO,
      "STT": item.STT
    };
    return this.cmis4SV.postData(_apiURL__WEBPACK_IMPORTED_MODULE_1__.PHAN_HE.INTERFACE, _apiURL__WEBPACK_IMPORTED_MODULE_1__.API_INTERFACE.POST_REMOVEHSOGTO_STT, payload).then(res => {
      this.plus.alertMatSnackBar(res.MESSAGE);
    });
  }
  parse64(file) {
    this.loadSV.load('parse64');
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.loadSV.loaded('parse64');
        resolve(reader.result);
        return resolve;
      };
      reader.onerror = e => {
        reject(e);
        return '';
      };
    });
  }
  trackByFn(index, item) {
    return item;
  }
  reset() {
    this.multiHS = [];
    this.dsYeuCau = [];
    this.maYeuCau = '';
    this.sttSoHoa = [];
    this.sanLuong = [];
    this.sttHS = '';
    this.ttHopDong = '';
    this.ttApGia = '';
    this.ttDoDem = '';
    this.ttTreoThao = '';
    this.bq = 0;
    this.kyQuy = '';
    this.HoSo = [];
    this.pdfUrl = null;
    this.ghiChu = [];
    this.ttMST = '';
    this.tenMST = '';
    this.dcMST = '';
    this.mstCN = '';
    this.ttThueFull = null;
  }
  checkPer(level, api = this.api) {
    return window.max ? window.max.opt[api] > level ? true : false : false;
  }
  static {
    this.ɵfac = function SoHoaComponent_Factory(t) {
      return new (t || SoHoaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_5__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_6__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_7__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_kinh_doanh_bao_dam_hop_dong_bao_dam_hop_dong_v2_service__WEBPACK_IMPORTED_MODULE_9__.BaoDamHopDongV2Service), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_10__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_11__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_3__.PouchdbService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: SoHoaComponent,
      selectors: [["app-so-hoa"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([src_app_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_3__.PouchdbService])],
      decls: 73,
      vars: 21,
      consts: [[1, "container", "py-4"], [1, "row", 3, "formGroup"], [1, "form", "py-1"], [1, "col"], ["id", "search-api", "required", "", "matInput", "", "placeholder", "M\u00E3 Kh\u00E1ch h\u00E0ng", "formControlName", "MA_YCAU_KNAI", 3, "focus", "keydown.enter"], ["mat-raised-button", "", "color", "accent", 1, "py-2", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "py-2", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", "id", "modalKA", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#KA", 1, "btn", "btn-primary"], ["class", "row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "row  py-3", 4, "ngIf"], [1, "row"], [4, "ngIf"], ["class", "fontweigth-bold", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["class", "container", 4, "ngIf"], [3, "hoten", "cccd"], ["hidden", "", "id", "modalXHSGT", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#XHSGT", 1, "btn", "btn-primary"], ["id", "XHSGT", "data-bs-backdrop", "static", "data-bs-keyboard", "true", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-fullscreen"], [1, "modal-content"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["color", "primary", "id", "closeModalXHSGT", "data-bs-dismiss", "modal", "mat-raised-button", ""], ["hidden", "", "id", "modalKA", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#KA", 1, "btn", "btn-primary"], ["id", "KA", "data-bs-backdrop", "static", "data-bs-keyboard", "true", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "col-12"], [1, "table", "table-hover", "table-borderless"], [1, ""], ["col-span", "4"], ["type", "text", "placeholder", "T\u00ECm ki\u1EBFm", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "formGroup"], ["type", "date", "formControlName", "NGAY", 1, "form-control"], ["type", "text", "matInput", "", "placeholder", "Ghi ch\u00FA", "formControlName", "GHI_CHU", 1, "form-control", 3, "keydown.enter"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["class", "text-danger", 4, "ngFor", "ngForOf"], [1, "text-danger"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 3, "click"], [1, "table", "table-striped", "table-hover", "table-borderless", "align-middle"], [1, "table-light"], ["scope", "row", 3, "click"], ["scope", "row"], [3, "click"], [1, "row", "py-3"], [1, "font-blue", 3, "click"], ["type", "text", 3, "ngModel", "ngModelChange"], ["class", "text-info", 3, "click", 4, "ngIf"], ["class", "text-danger", 3, "click", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "col-3"], ["mat-icon-button", "", "color", "accent", 3, "click"], ["mat-icon-button", "", "color", "primary", 3, "click"], [1, "mb-3"], ["placeholder", "Nh\u1EADp t\u1EEB kh\u00F3a t\u00ECm ki\u1EBFm...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "table table-striped table-hover table-borderless align-middle", 4, "ngIf"], [1, "text-info", 3, "click"], [1, "text-danger", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngClass", "click"], [1, "table", "table-striped"], [1, "text-center", 3, "matTooltip"], ["formControlName", "MA_LOAI_HSO"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "label", "files", "ondragover"], [3, "value", "click"], [1, "fontweigth-bold"], [1, "container"], [1, "font-blue"], [1, "btn"], [1, "row", 3, "innerHTML"], [1, "text-center"], [1, "text-end"], ["width", "100%", "height", "720px", 3, "src"], ["color", "primary", 3, "click"], ["color", "warn", "mat-icon-button", "", 3, "click"]],
      template: function SoHoaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "mat-form-field")(5, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "M\u00E3 KH");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("focus", function SoHoaComponent_Template_input_focus_7_listener() {
            return ctx.main.controls["MA_YCAU_KNAI"].setValue("");
          })("keydown.enter", function SoHoaComponent_Template_input_keydown_enter_7_listener() {
            return ctx.GetAllListHSoGToOfKHang();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_Template_button_click_8_listener() {
            return ctx.GetAllListHSoGToOfKHang();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Xem h\u1ED3 s\u01A1");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_Template_button_click_10_listener() {
            return ctx.timMaTram();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "T\u00ECm m\u00E3 tr\u1EA1m");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_Template_button_click_12_listener() {
            return ctx.getYeuCau();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, " T\u00ECm y\u00EAu c\u1EA7u g\u1EA7n \u0111\u00E2y");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_Template_button_click_14_listener() {
            return ctx.getSttByPK();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, " Xem STT");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, " S\u00E1p nh\u1EADp");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, SoHoaComponent_div_18_Template, 22, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, SoHoaComponent_div_19_Template, 16, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, SoHoaComponent_ul_20_Template, 3, 3, "ul", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, SoHoaComponent_div_21_Template, 2, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, SoHoaComponent_div_22_Template, 55, 28, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, SoHoaComponent_div_24_Template, 18, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 1)(26, "mat-expansion-panel")(27, "mat-expansion-panel-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, " Upload file l\u00EAn h\u1EC7 th\u1ED1ng s\u1ED1 h\u00F3a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, SoHoaComponent_div_29_Template, 8, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](30, SoHoaComponent_div_30_Template, 8, 3, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SoHoaComponent_Template_button_click_31_listener() {
            return ctx.uploadHSoGTo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "Upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](33, SoHoaComponent_div_33_Template, 47, 12, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](34, "app-doi-soat-c06", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, " Launch static backdrop modal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 19)(38, "div", 20)(39, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, SoHoaComponent_div_40_Template, 2, 1, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](41, SoHoaComponent_span_41_Template, 2, 1, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "div", 23)(43, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, "\u0110\u00F3ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46, " Launch static backdrop modal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 26)(48, "div", 27)(49, "div", 21)(50, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](51, "h5", 29)(52, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "div", 31)(54, "div", 12)(55, "div", 32)(56, "div")(57, "table", 33)(58, "thead", 34)(59, "tr", 35)(60, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function SoHoaComponent_Template_input_ngModelChange_60_listener($event) {
            return ctx.keyKA = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "tr")(62, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63, "X\u00E3");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](64, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](65, "Tr\u01B0\u1EDBc");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](66, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](67, "sau");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](68, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](69, "Ghi ch\u00FA");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](70, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](71, SoHoaComponent_tr_71_Template, 9, 4, "tr", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](72, "vietnameseFilter");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx.main);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.checkPer(2, "dev"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.ttTram);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.dsYeuCau);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.checkPer(1, "dev"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.item);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.HoSo.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx.main);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.main.value.MA_YCAU_KNAI.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.main.value.MA_YCAU_KNAI.length == 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.main.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.checkPer(2) && ctx.main.value.MA_YCAU_KNAI.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hoten", ctx.item == null ? null : ctx.item.TEN_KHANG)("cccd", ctx.item == null ? null : ctx.item.SO_CMT);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.pdfUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.multiHS.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.keyKA);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](72, 18, ctx.khuAp, ctx.keyKA));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltip, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionPanelHeader, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_12__.DropFilesComponent, _doi_soat_c06_doi_soat_c06_component__WEBPACK_IMPORTED_MODULE_13__.DoiSoatC06Component, _angular_common__WEBPACK_IMPORTED_MODULE_20__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _share_custom_pipe__WEBPACK_IMPORTED_MODULE_14__.NumberPipePipe, _share_custom_pipe__WEBPACK_IMPORTED_MODULE_14__.SearchPipe, _share_pipes_vietnameseFilter_pipe__WEBPACK_IMPORTED_MODULE_15__.VietnameseFilterPipe]
    });
  }
}

/***/ }),

/***/ 90325:
/*!**************************************************************************!*\
  !*** ./src/app/cmis4/thay-doi-thong-tin/thay-doi-thong-tin.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThayDoiThongTinComponent: () => (/* binding */ ThayDoiThongTinComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/form.service */ 60064);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/material/date-picker/date-picker.component */ 8852);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);












function ThayDoiThongTinComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.MA_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.KEY);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.VALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r1.STATUS);
  }
}
class ThayDoiThongTinComponent {
  constructor(cmis4SV, excelSV, plus, formSV) {
    this.cmis4SV = cmis4SV;
    this.excelSV = excelSV;
    this.plus = plus;
    this.formSV = formSV;
    this.makh = '';
    this.maNganSach = '';
    this.ngayCN = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'days').format('DD/MM/YYYY');
    this.dataInXls = [];
    this.outHTML = '';
    this.dcocFrom = this.formSV.fb.group({
      MA_KHANG: ''
    });
  }
  ngOnInit() {}
  getDay(evt) {
    console.log(evt);
    this.ngayCN = moment__WEBPACK_IMPORTED_MODULE_1___default()(evt, 'DD/MM/YYYY').format('DD/MM/YYYY');
  }
  loopRequest() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.dataInXls).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.concatMap)((el, index) => this.capnhatByKey(el.MA_KHANG, el.KEY, el.VALUE, index))).subscribe();
  }
  capnhatByKey(maPK, key, value, index) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nv = 'truongnd1.dn';
      const kh = yield _this.cmis4SV.timKiemKhachHang(maPK);
      const ttkh = yield _this.cmis4SV.layTtinKHangMoinhat(maPK);
      ttkh.HDG_KHACH_HANG[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG[0].NGAY_HLUC = _this.ngayCN;
      ttkh.HDG_KHACH_HANG[0].NGUOI_SUA = nv;
      ttkh.HDG_KHACH_HANG[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG[0][key] = value;
      ttkh.HDG_KHACH_HANG_U[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG_U[0].NGAY_HHLUC = _this.ngayCN;
      ttkh.HDG_KHACH_HANG_U[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG_U[0][key] = null;
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
        "NGAY_HLUC": _this.ngayCN,
        "MA_HDONG": kh[0].MA_HDONG,
        "TEN_COT": "MASO_DVIQHNS",
        "NGAY_TAO": moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month').format('DD/MM/YYYY HH:mm:ss'),
        "NGAY_SUA": moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month').format('DD/MM/YYYY HH:mm:ss'),
        "NGUOI_TAO": nv,
        "NGUOI_SUA": nv
      }];
      return _this.cmis4SV.themTtinKhang(body).then(v => {
        _this.dataInXls[index].STATUS = 'OK';
        _this.plus.generateHtmlTable(_this.dataInXls);
        console.log(v);
      });
    })();
  }
  capnhatmaNganSach(maPK, maNganSach) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const kh = yield _this2.cmis4SV.timKiemKhachHang(maPK);
      const ttkh = yield _this2.cmis4SV.layTtinKHangMoinhat(maPK);
      if (ttkh.HDG_KHACH_HANG[0].MASO_DVIQHNS) return null;
      ttkh.HDG_KHACH_HANG[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG[0].NGAY_HLUC = _this2.ngayCN;
      ttkh.HDG_KHACH_HANG[0].NGUOI_SUA = _this2.getRandomString();
      ttkh.HDG_KHACH_HANG[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG[0].MASO_DVIQHNS = maNganSach;
      ttkh.HDG_KHACH_HANG_U[0].MA_CNANG = '10';
      ttkh.HDG_KHACH_HANG_U[0].NGAY_HHLUC = _this2.ngayCN;
      ttkh.HDG_KHACH_HANG_U[0].NGUOI_TAO = ttkh.HDG_KHACH_HANG[0].NGUOI_SUA;
      ttkh.HDG_KHACH_HANG_U[0].MASO_DVIQHNS = null;
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
        "DLIEU_MOI": maNganSach,
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
        "NGAY_HLUC": _this2.ngayCN,
        "MA_HDONG": kh[0].MA_HDONG,
        "TEN_COT": "MASO_DVIQHNS",
        "NGAY_TAO": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY HH:mm:ss'),
        "NGAY_SUA": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY HH:mm:ss'),
        "NGUOI_TAO": "thuctd.dn",
        "NGUOI_SUA": "thuctd.dn"
      }];
      return _this2.cmis4SV.themTtinKhang(body).then(v => {
        const indexDataInXLS = _this2.dataInXls.findIndex(el => el.MAPK == maPK);
        _this2.dataInXls[indexDataInXLS].MANGANSACH = 'OK';
        _this2.plus.generateHtmlTable(_this2.dataInXls);
        console.log(v);
      });
    })();
  }
  getRandomString() {
    const arr = ['truongnd1.dn', 'trungvl.dn', 'thuttt.dn', 'ancn.dn', 'thuctd.dn', 'anhnhp.dn'];
    return arr[Math.floor(Math.random() * arr.length)];
  }
  onDropFile(files) {
    console.log(`onDropFile()`);
    for (let i = 0; i < files.length; i++) {
      if (files[i].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.excelSV.fileToJsonArray(files[i]).then(obj => {
          this.dataInXls = obj;
          console.log(obj);
          this.outHTML = this.plus.generateHtmlTable(this.dataInXls);
        });
      } else {
        this.plus.alertError(`File không hợp lệ`);
      }
    }
    this.plus.clickBtn('closeImportButton');
  }
  ondragover() {
    document.getElementById("dropZone").setAttribute("drop-active", "true");
  }
  exportMau() {
    const data = [{
      MA_KHANG: 'PK05001234',
      KEY: 'DTHOAI',
      VALUE: '0909123456'
    }];
    this.excelSV.export(data, 'Mau');
  }
  static {
    this.ɵfac = function ThayDoiThongTinComponent_Factory(t) {
      return new (t || ThayDoiThongTinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_2__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_4__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_share_services_form_service__WEBPACK_IMPORTED_MODULE_5__.FormService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ThayDoiThongTinComponent,
      selectors: [["app-thay-doi-thong-tin"]],
      decls: 25,
      vars: 5,
      consts: [[1, "container", "py-3"], [1, "row"], [3, "files", "ondragover"], [1, "btn"], [1, "col"], [3, "startDay", "openOnFocus", "label", "format", "month"], ["mat-raised-button", "", 3, "click"], ["color", "warn", "mat-raised-button", "", 3, "click"], [1, "table", "table-striped", "table-hover", "table-borderless", "align-middle"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
      template: function ThayDoiThongTinComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-drop-files", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("files", function ThayDoiThongTinComponent_Template_app_drop_files_files_2_listener($event) {
            return ctx.onDropFile($event);
          })("ondragover", function ThayDoiThongTinComponent_Template_app_drop_files_ondragover_2_listener() {
            return ctx.ondragover();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "app-date-picker", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("month", function ThayDoiThongTinComponent_Template_app_date_picker_month_5_listener($event) {
            return ctx.getDay($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ThayDoiThongTinComponent_Template_button_click_6_listener() {
            return ctx.exportMau();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "File m\u1EABu");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ThayDoiThongTinComponent_Template_button_click_8_listener() {
            return ctx.loopRequest();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "import");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 1)(11, "div")(12, "table", 8)(13, "thead")(14, "tr")(15, "th", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "MA_KHANG");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "KEY");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "VALUE");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "th", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "STATUS");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, ThayDoiThongTinComponent_tr_24_Template, 9, 4, "tr", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("startDay", ctx.ngayCN)("openOnFocus", true)("label", "Nga\u0300y 1")("format", "DD/MM/YYYY");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.dataInXls);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_6__.DatePickerComponent, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_7__.DropFilesComponent]
    });
  }
}

/***/ }),

/***/ 51147:
/*!************************************************************************!*\
  !*** ./src/app/cmis4/tiep-nhan-yeu-cau/tiep-nhan-yeu-cau.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiepNhanYeuCauComponent: () => (/* binding */ TiepNhanYeuCauComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/material/date-picker/date-picker.component */ 8852);











function TiepNhanYeuCauComponent_div_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 12)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("M\u00E3 y\u00EAu c\u1EA7u: ", ctx_r1.maYeuCau, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Nga\u0300y Ti\u1EBFp nh\u1EADn: ", ctx_r1.tienTrinh.DV_TIEN_TNHAN[0].NGAY_YCAU, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Nga\u0300y h\u1EB9n: ", ctx_r1.tienTrinh.DV_TIEN_TNHAN[0].NGAY_HEN, "");
  }
}
function TiepNhanYeuCauComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "mat-form-field")(2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TiepNhanYeuCauComponent_div_1_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.maYeuCau = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-date-picker", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("month", function TiepNhanYeuCauComponent_div_1_Template_app_date_picker_month_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.getMonth($event, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-date-picker", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("month", function TiepNhanYeuCauComponent_div_1_Template_app_date_picker_month_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.getMonth($event, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TiepNhanYeuCauComponent_div_1_ul_5_Template, 7, 3, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TiepNhanYeuCauComponent_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.timYC());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "T\u00ECm ki\u1EBFm");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TiepNhanYeuCauComponent_div_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.capNhat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "C\u1EADp nh\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.maYeuCau);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true)("label", "Nga\u0300y Ti\u1EBFp nh\u1EADn")("format", "DD/MM/YYYY");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true)("label", "Nga\u0300y h\u1EB9n")("format", "DD/MM/YYYY");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.tienTrinh);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.maYeuCau.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.maYeuCau.length == 0 || ctx_r0.ngayHen.length == 0);
  }
}
class TiepNhanYeuCauComponent {
  constructor(cmis4SV, plus) {
    this.cmis4SV = cmis4SV;
    this.plus = plus;
    this.api = 'cmis4-tiep-nhan-yeu-cau';
    this.maYeuCau = '';
    this.ngayTiepNhan = '';
    this.ngayHen = '';
    this.tienTrinh = null;
    this.textInput = '';
    this.htmlCRM = '';
  }
  ngOnInit() {}
  parseRequestArray() {
    let input = this.textInput;
    const result = [];
    const tickets = input.split('\n').filter(line => /^\d{8}/.test(line.trim()));
    for (let i = 0; i < tickets.length; i++) {
      const ticketLine = tickets[i];
      const fields = ticketLine.split('\t').map(field => field.trim());
      const ticketObj = {
        LOAI_YEU_CAU: '',
        MA_PHIEU: '',
        MA_KH: '',
        NGUOI_YEU_CAU: '',
        NOI_DUNG: '',
        SO_DT: '',
        HAN_GQ: ''
      };
      if (fields[0].match(/^\d{8}$/)) {
        ticketObj.MA_PHIEU = fields[0];
      }
      if (fields[1] && fields[1].startsWith('Khách hàng: ')) {
        ticketObj.NGUOI_YEU_CAU = fields[1].replace('Khách hàng: ', '');
      }
      if (fields[2] && fields[2].startsWith('Mã KH: ')) {
        ticketObj.MA_KH = fields[2].replace('Mã KH: ', '');
      }
      if (fields[3] && fields[3].startsWith('Điện thoại: ')) {
        ticketObj.SO_DT = fields[3].replace('Điện thoại: ', '');
      }
      if (fields[5] && fields[5].startsWith('Loại yêu cầu: ')) {
        ticketObj.LOAI_YEU_CAU = fields[5].replace('Loại yêu cầu: ', '');
      }
      const nextLine = input.split('\n')[input.split('\n').indexOf(ticketLine) + 1] || '';
      const nextFields = nextLine.split('\t').map(field => field.trim());
      if (nextFields[0] && nextFields[0].startsWith('Người yêu cầu: ')) {
        if (nextFields[3] && nextFields[3].startsWith('Nội dung yêu cầu: ')) {
          ticketObj.NOI_DUNG = nextFields[3].replace('Nội dung yêu cầu: ', '');
        }
        if (nextFields[4] && nextFields[4].match(/^\d{2}\/\d{2}\/\d{4} \d{1,2}:\d{2}:\d{2} (SA|CH)$/)) {
          const rawDateTime = nextFields[4];
          const isSA = rawDateTime.includes('SA');
          const baseDateTime = rawDateTime.replace(' SA', '').replace(' CH', '');
          const parsedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(baseDateTime, 'DD/MM/YYYY H:mm:ss');
          if (isSA && parsedDate.hours() >= 12) {
            parsedDate.subtract(12, 'hours');
          } else if (!isSA && parsedDate.hours() < 12) {
            parsedDate.add(12, 'hours');
          }
          ticketObj.HAN_GQ = parsedDate.format('DD/MM/YYYY HH:mm');
        }
      }
      if (ticketObj.MA_PHIEU) {
        result.push(ticketObj);
      }
    }
    result.sort((a, b) => {
      const dateA = moment__WEBPACK_IMPORTED_MODULE_1___default()(a.HAN_GQ, 'DD/MM/YYYY HH:mm');
      const dateB = moment__WEBPACK_IMPORTED_MODULE_1___default()(b.HAN_GQ, 'DD/MM/YYYY HH:mm');
      return dateA.isValid() && dateB.isValid() ? dateA.diff(dateB) : 0;
    });
    this.htmlCRM = this.plus.generateHtmlTable(result);
    return result;
  }
  timYC() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.tienTrinh = yield _this.cmis4SV.layDvTienTiepNhanTheoTinhTrang(_this.maYeuCau);
    })();
  }
  capNhat() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.tienTrinh.DV_TIEN_TNHAN[0].NGAY_YCAU = _this2.ngayTiepNhan;
      _this2.tienTrinh.DV_TIEN_TNHAN[0].NGAY_TAO = _this2.ngayTiepNhan;
      _this2.tienTrinh.DV_TIEN_TNHAN[0].NGAY_HEN = _this2.ngayHen;
      _this2.cmis4SV.capnhatTienTiepNhan(_this2.tienTrinh).then(() => {
        _this2.plus.alertSuccess('Cập nhật tình trạng tính tiếp nhận');
      });
    })();
  }
  getMonth(evt, i) {
    i == 1 ? this.ngayTiepNhan = evt : this.ngayHen = evt;
  }
  checkPer(level, api = this.api) {
    return window.max ? window.max.opt[api] > level ? true : false : false;
  }
  static {
    this.ɵfac = function TiepNhanYeuCauComponent_Factory(t) {
      return new (t || TiepNhanYeuCauComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_2__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: TiepNhanYeuCauComponent,
      selectors: [["app-tiep-nhan-yeu-cau"]],
      decls: 11,
      vars: 3,
      consts: [[1, "container", "py-3"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "example-full-width"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "btn"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "innerHTML"], ["matInput", "", "placeholder", "M\u00E3 y\u00EAu c\u1EA7u", 3, "ngModel", "ngModelChange"], [3, "openOnFocus", "label", "format", "month"], ["class", "list-group", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "list-group"]],
      template: function TiepNhanYeuCauComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TiepNhanYeuCauComponent_div_1_Template, 11, 10, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "item");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "textarea", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TiepNhanYeuCauComponent_Template_textarea_ngModelChange_6_listener($event) {
            return ctx.textInput = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TiepNhanYeuCauComponent_Template_button_click_8_listener() {
            return ctx.parseRequestArray();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Xem");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkPer(4));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.textInput);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.htmlCRM, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__.DatePickerComponent]
    });
  }
}

/***/ }),

/***/ 98019:
/*!****************************************************!*\
  !*** ./src/app/cmis4/tra-cuu/tra-cuu.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TraCuuComponent: () => (/* binding */ TraCuuComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 19724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70274);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _cmis4_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cmis4.service */ 61836);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/sheets.service */ 63402);
/* harmony import */ var src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/docxtemplate/docxtemplate.service */ 41982);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 82798);
/* harmony import */ var _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/material/date-picker/date-picker.component */ 8852);
/* harmony import */ var _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../share/loadmore/loadmore/loadmore.component */ 43716);
/* harmony import */ var _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../share/import-excel/parse-excel-clipboard/parse-excel-clipboard.component */ 8390);





















function TraCuuComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_mat_option_10_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.optSelected = item_r4.TenFile);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r4.TenFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", item_r4.NoiDung, " ");
  }
}
function TraCuuComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.loopRequestSL());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "L\u1EA5y SL theo l\u00F4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function TraCuuComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r2.ThongTinKHs.length + ctx_r2.sanLuong.length, " / ", ctx_r2.searchBodyArr.length, " ");
  }
}
function TraCuuComponent_table_37_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_table_37_tr_24_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.onEdit(item_r10.MA_KHANG));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_table_37_tr_24_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.onEdit(item_r10.MA_KHANG));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_table_37_tr_24_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.onEdit(item_r10.TEN_KHANG));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_table_37_tr_24_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.onEdit(item_r10.DIA_CHI));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_table_37_tr_24_Template_td_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.onEdit(item_r10.DTHOAI_DVU));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_table_37_tr_24_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.onEdit(item_r10.EMAIL));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_table_37_tr_24_Template_td_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.onEdit(item_r10.MUC_DICHSD));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_table_37_tr_24_Template_td_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.onEdit(item_r10.CHUOI_GIA));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_table_37_tr_24_Template_td_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.onEdit(item_r10.MA_SOGCS));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r10.MA_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r10.TEN_KHANG);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r10.TEN_DDIEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r10.DTHOAI_DVU);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r10.EMAIL);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r10.MUC_DICHSD);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r10.CHUOI_GIA);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r10.MA_SOGCS);
  }
}
function TraCuuComponent_table_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 18)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "TT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "MA_KHANG");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "TEN_KHANG");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "TEN_DDIEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "DTHOAI");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "EMAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "MUC_DICHSD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "CHUOI_GIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "MA_SOGCS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "MAU");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, TraCuuComponent_table_37_tr_24_Template, 20, 9, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.items);
  }
}
class TraCuuComponent {
  constructor(plus, cmis4SV, excelSV, sheetdbSV, docxSV) {
    this.plus = plus;
    this.cmis4SV = cmis4SV;
    this.excelSV = excelSV;
    this.sheetdbSV = sheetdbSV;
    this.docxSV = docxSV;
    this.ThongTinKHs = [];
    this.dataExport = [];
    this.user = JSON.parse(localStorage.getItem('USERCMIS')) || null;
    this.db = null;
    this.dbName = 'cmis4';
    this.api = 'cmis4-tra-cuu';
    this.allowLoadmore = true;
    this.perPageItems = 100;
    this.items = [];
    this.xlsArr = [];
    this.optDM = [];
    this.optSelected = '';
    this.ngay1 = new Date();
    this.ngay2 = new Date();
    this.sotien = 0;
    this.indexarr = 0;
    this.searchArr = [];
    this.searchBodyArr = [];
    this.excelObj = [];
    this.doituong = [];
    this.isDanhSach = false;
    this.theoLo = [];
    this.sanLuong = [];
    this.sanluongMax = [];
    this.itemsGiaoThu = [];
    this.itemsMST = [];
    this.clipTxt = [];
  }
  ngOnInit() {
    this.getDanhMuc();
  }
  loopRequestMST() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(this.ThongTinKHs).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.concatMap)((el, index) => this.getMST(el.MASO_THUE, index))).subscribe();
  }
  getMST(el, index) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!el) return;
      yield _this.plus.sleep(2000);
      return axios__WEBPACK_IMPORTED_MODULE_13__["default"].get('https://api.xinvoice.vn/gdt-api/tax-payer-records/' + el.slice(0, 10)).then(res => {
        console.log(res);
        _this.ThongTinKHs[index].MST_TEN = res.data.data[0].status;
        _this.ThongTinKHs[index].MST_DIACHI = res.data.data[0].address;
        _this.ThongTinKHs[index].MST_TRANG_THAI = res.data.data[0].status;
        _this.ThongTinKHs[index].MST_NGAY_UPDATE = res.data.data[0].updatedAt;
      });
    })();
  }
  layGiaoThu() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.cmis4SV.layGiaoThu().then(res => {
        console.log(res);
        _this2.itemsGiaoThu = res;
        _this2.excelSV.export(_this2.itemsGiaoThu, 'giaoThu' + moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYMMDD'));
        for (let i = 0; i < _this2.itemsGiaoThu.length; i++) {
          const item = _this2.itemsGiaoThu[i];
          const body = {
            "MA_DVIQLY": item.MA_DVIQLY,
            "MA_KHANG": item.MA_KHANG,
            "LOAI_YCAU": "KLLO"
          };
          _this2.searchBodyArr.push(body);
        }
      });
    })();
  }
  xuatGiaoThu() {
    const data = this.plus.joinArrByKey('MA_KHANG', this.itemsGiaoThu, this.ThongTinKHs);
    data.map(el => {
      el.TONG_TIEN = Number(el.TIEN_NO) + Number(el.THUE_NO), el.DTHOAI = el.DTHOAI && el.DTHOAI.length === 10 ? el.DTHOAI : el.DTHOAI_DVU_1;
    });
    this.excelSV.export(data, 'giaoThu_full' + moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYMMDD'));
  }
  loopRequestSL() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(this.searchArr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.concatMap)(el => this.getSL(el))).subscribe();
  }
  getSL(maKH) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const pk = _this3.cmis4SV.convertPK(maKH);
      const today = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('MM/YYYY');
      const ngayChon = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this3.ngay1).format('MM/YYYY');
      let tuNgay = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(12, 'months').format('MM/YYYY');
      let denNgay = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(35, 'days').format('MM/YYYY');
      if (ngayChon !== today) {
        tuNgay = '01/' + moment__WEBPACK_IMPORTED_MODULE_1___default()(_this3.ngay1, 'DD/MM/YYYY').format('YYYY');
        denNgay = '12/' + moment__WEBPACK_IMPORTED_MODULE_1___default()(_this3.ngay1, 'DD/MM/YYYY').format('YYYY');
      }
      yield _this3.cmis4SV.getSaoLucChiSo(pk, tuNgay, denNgay).then(res => {
        console.log(res);
        _this3.indexarr++;
        _this3.sanLuong = _this3.sanLuong.concat(res);
        let tongTien = 0;
        let max = 0;
        let tsl = 0;
        for (let i = 0; i < res.length; i++) {
          const el = res[i];
          if (el.KY == 1 && (el.BCS == 'SG' || el.BCS == 'KT')) {
            tongTien += el.TIEN_CTIET;
            tsl += el.DNTT_CTIET;
            if (el.DNTT_CTIET > max) {
              max = el.DNTT_CTIET;
            }
          }
        }
        const bq = Math.round(tongTien / 12);
        return _this3.sanluongMax.push({
          maKH: maKH,
          tongTien: tongTien,
          bq: bq,
          max: max,
          tsl: tsl
        });
      });
    })();
  }
  convertTheoLo() {
    for (let i = 0; i < this.ThongTinKHs.length; i++) {
      const el = this.ThongTinKHs[i];
      const body = {
        "MA_DVIQLY": el.MA_KHANG.slice(0, 6),
        "MA_YCAU_KNAI": el.MA_KHANG,
        "MA_KHANG": el.MA_KHANG,
        "MA_DDO": el.MA_KHANG + '001',
        "TEN_KHANG": el.TEN_KHANG,
        "DIA_CHI_KH": el.DIA_CHI,
        "DIA_CHI_DDO": el.DCHI_DIEMDO,
        "MA_HDONG": el.MA_HDONG2,
        "MA_TRAM": el.MA_TRAM,
        "HLUC_TUNGAY": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY'),
        "HLUC_DENNGAY": el.HLUC_DENNGAY || '',
        "EMAIL": el.EMAIL,
        "MASO_THUE": el.MASO_THUE,
        "NGAY_SINH": el.NGAY_SINH,
        "DTHOAI": el.DTHOAI + '',
        "TEN_DDIEN": el.TEN_KHANG,
        "SO_CMT": el.SO_CMT,
        "NGAY_CAP": el.NGAY_CAP,
        "NOI_CAP": "Cục cảnh sát QLHC về TTXH",
        "SOGIAY_UQUYEN": "",
        "TEN_UQUYEN": "",
        "NGAY_UQUYEN": "",
        "GIAY_KDOANH": "",
        "DVI_CAP_KDOANH": "",
        "NGAY_CAP_KDOANH": ""
      };
      this.theoLo.push(body);
    }
    this.excelSV.export(this.theoLo, 'theoLo');
  }
  getTCD() {}
  getDanhMuc() {
    this.sheetdbSV.get('1duYS3zmzr_dyLfh3AIIBRw5K0rqZeVGkgEXmpG-QDmU', 'CMIS').subscribe(res => {
      console.log(res);
      this.optDM = res.data;
    });
  }
  exportDocx() {
    if (this.isDanhSach) {
      const body = {
        _Merge: {
          Ngay2: this.ngay2
        },
        tb: this.ThongTinKHs,
        Ngay1: this.ngay1,
        SoTien: this.sotien,
        nick: this.user.FULLNAME
      };
      this.docxSV.loadFileUrl(`https://thuctd.github.io/templates/CMIS/${this.optSelected}.docx`).then(wordFile => {
        this.docxSV.generateOne(body, wordFile, this.optSelected + '.docx').then(() => {
          this.plus.alertSuccess();
        });
      });
    } else if (!this.isDanhSach && this.ThongTinKHs.length == 1) {
      const body = Object.assign(this.ThongTinKHs[0], {
        _Merge: {
          Ngay2: this.ngay2
        },
        Ngay1: this.ngay1,
        SoTien: this.sotien,
        nick: this.user.FULLNAME
      });
      this.docxSV.loadFileUrl(`https://thuctd.github.io/templates/CMIS/${this.optSelected}.docx`).then(wordFile => {
        this.docxSV.generateOne(body, wordFile, this.optSelected + '.docx').then(() => {
          this.plus.alertSuccess();
        });
      });
    } else {
      this.docxSV.loadFileUrl(`https://thuctd.github.io/templates/CMIS/${this.optSelected}.docx`).then(wordFile => {
        this.docxSV.generateZipFile({
          _Merge: this.items
        }, wordFile, this.optSelected + '.docx').then(() => {
          this.plus.alertSuccess();
        });
      });
    }
  }
  themTtinKhangDtuong(obj) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        MA_DVIQLY: _this4.user.SUBDIVISIONID,
        MA_KHANG: obj.MA_KHANG,
        MA_YCAU_KNAI: ''
      };
      const data = yield _this4.cmis4SV.layTtinKhangDtuongMoinhat([body]);
      console.log(data);
      const body2 = {
        "HDG_KHANG_EVN_C06": [],
        "bangDvXminhCdan": [],
        "DV_XMINH_CDAN": [],
        "DV_XMINH_DNGHIEP": [],
        "DV_XMINH_CDAN_HDC": [],
        "DV_XMINH_CDAN_U": [],
        "HDG_KHANG_DTUONG_U": [],
        "HDG_KHACH_HANG": data.HDG_KHACH_HANG,
        "HDG_KHACH_HANG_U": data.HDG_KHACH_HANG_U,
        "HDG_KHANG_DTUONG": [{
          "MA_DVIQLY": _this4.user.SUBDIVISIONID,
          "ID_DTUONG": -1,
          "NGAY_HLUC": obj.NGAY_HLUC,
          "NGAY_HHLUC": "",
          "MA_KHANG": obj.MA_KHANG,
          "MANHOM_KHANG": obj.MANHOM_KHANG,
          "TEN_NHOM": obj.TEN_NHOM,
          "TEN_KHANG": data.HDG_KHACH_HANG[0].TEN_KHANG,
          "DCHI_KHANG": data.HDG_KHACH_HANG[0].DCHI_KHANG,
          "NGAY_TAO": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY'),
          "NGAY_SUA": moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY'),
          "NGUOI_SUA": _this4.user.USERNAME,
          "NGUOI_TAO": _this4.user.USERNAME,
          "MA_CNANG": "511",
          "TRANG_THAI": "I",
          "MA_DVINBO": ""
        }]
      };
      const url = 'https://cmis-api.evnspc.vn/serviceHopDong/layTtinKhangDtuongMoinhat';
      const path = '/serviceHopDong/layTtinKhangDtuongMoinhat';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this4.cmis4SV.getUser().ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_13__["default"].post(url, body2, {
        headers: httpOptions
      }).then(res => {
        console.log(res.data);
        return res.data;
      }).catch(err => {
        _this4.cmis4SV.handleError(err);
      });
    })();
  }
  themTtinKhangDtuongArr() {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.xlsArr.length == 0) {
        _this5.plus.alertWarning('Vui lòng copy mã PK dán vào ô tìm kiếm hoặc import file excel');
      }
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(_this5.xlsArr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.concatMap)(el => _this5.themTtinKhangDtuong(el))).subscribe();
    })();
  }
  selectedFile(evt) {
    console.log(evt);
  }
  getMonth(evt, i) {
    if (i == 1) {
      this.ngay1 = evt;
    } else {
      this.ngay2 = evt;
    }
  }
  layTtinKhangDtuongMoinhat() {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const datas = [];
      for (let i = 0; i < _this6.searchArr.length; i++) {
        const el = _this6.searchArr[i];
        const body = {
          MA_DVIQLY: _this6.user.SUBDIVISIONID,
          MA_KHANG: el,
          MA_YCAU_KNAI: ''
        };
        datas.push(body);
      }
      _this6.cmis4SV.layTtinKhangDtuongMoinhat(datas).then(data => _this6.doituong = data.HDG_KHANG_DTUONG);
    })();
  }
  getThongTinMoiNhatArr() {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.searchArr.length == 0) {
        _this7.plus.alertWarning('Vui lòng copy mã PK dán vào ô tìm kiếm');
      }
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(_this7.searchArr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.concatMap)(el => _this7.lay_TTinHopDongDeKyLai_TheoLo(el))).subscribe();
    })();
  }
  lay_TTinHopDongDeKyLai_TheoLoArr() {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const step = 500;
      for (let i = 0; i < _this8.searchBodyArr.length; i += step) {
        const chunk = _this8.searchBodyArr.slice(i, i + step);
        _this8.cmis4SV.lay_TTinHopDongDeKyLai_TheoLoArr(chunk).then(data => {
          if (!Array.isArray(data)) return;
          _this8.ThongTinKHs = _this8.ThongTinKHs.concat(data);
          _this8.items = _this8.ThongTinKHs.slice(0, 50);
        });
      }
    })();
  }
  lay_TTinHopDongDeKyLai_TheoLo(maKH) {
    var _this9 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.cmis4SV.lay_TTinHopDongDeKyLai_TheoLo(maKH).then(data => {
        _this9.ThongTinKHs.push(data);
      });
    })();
  }
  traCuuKH(maKH) {
    var _this0 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dataMoiNhat = yield _this0.cmis4SV.layTtinKHangMoinhat(maKH);
      const bodyx = Object.assign({}, dataMoiNhat.HDG_DIEM_DO, dataMoiNhat.HDG_HOP_DONG, dataMoiNhat.HDG_KHACH_HANG, dataMoiNhat.HDG_KHANG_LIENHE, dataMoiNhat.HDG_PHU_LUC_HD);
      const bdu = _this0.plus.flattenObjectWithUniqueKeys(bodyx);
      console.log(bdu);
      let data1 = {};
      for (const el in dataMoiNhat) {
        const body = _this0.plus.Obj_clean(dataMoiNhat[el]?.[0]);
        data1 = {
          ...data1,
          ...body
        };
      }
      const dataMoi = yield _this0.cmis4SV.timKiemKhachHang(maKH);
      let data2 = {};
      const body2 = _this0.plus.Obj_clean(dataMoi[0]);
      data2 = {
        ...data2,
        ...body2
      };
      const body = {
        ...data1,
        ...data2
      };
      _this0.ThongTinKHs.push(body);
      body['_id'] = maKH;
      console.log(body);
    })();
  }
  exportExcel() {
    if (this.ThongTinKHs.length > 0) this.excelSV.export(this.ThongTinKHs, 'TraCuu');
    if (this.doituong.length > 0) this.excelSV.export(this.doituong, 'doituong');
    if (this.sanLuong.length > 0) this.excelSV.exportMultiSheets({
      sanLuong: this.sanLuong,
      sanluongMax: this.sanluongMax
    }, moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DDMMYYYY') + '-sanluong');
  }
  onDrop(files) {
    const searchArr = [];
    this.excelSV.fileToJsonArray(files[0]).then(body => {
      for (let i = 0; i < body.length; i++) {
        const el = body[i];
        searchArr.push(el.MA_KHANG);
      }
      this.searchArr = searchArr;
    });
  }
  onEdit(item) {
    this.plus.copyToClipboard(item);
  }
  getClip(evt) {
    var _this1 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this1.clipTxt = evt;
      _this1.searchArr = [];
      for (let i = 0; i < evt.length; i++) {
        const pk = _this1.cmis4SV.convertPK(evt[i][0]);
        _this1.searchArr.push(pk);
        const body = {
          "MA_DVIQLY": pk.slice(0, 6),
          "MA_KHANG": pk,
          "LOAI_YCAU": "KLLO"
        };
        _this1.searchBodyArr.push(body);
      }
      console.log(_this1.searchArr);
    })();
  }
  pushData(evt) {
    if (evt && this.allowLoadmore) {
      const count = this.items.length;
      const pushItems = this.ThongTinKHs.slice(count, count + this.perPageItems);
      this.items = this.items.concat(pushItems);
    }
  }
  onDropFile(files) {
    this.excelSV.fileToJsonArray(files[0]).then(body => {
      console.log(body);
      this.xlsArr = body;
    });
  }
  checkPer(level, api = this.api) {
    return window.max ? window.max.opt[api] > level ? true : false : false;
  }
  static {
    this.ɵfac = function TraCuuComponent_Factory(t) {
      return new (t || TraCuuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_cmis4_service__WEBPACK_IMPORTED_MODULE_3__.Cmis4Service), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_services_sheets_service__WEBPACK_IMPORTED_MODULE_5__.SheetDatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_share_docxtemplate_docxtemplate_service__WEBPACK_IMPORTED_MODULE_6__.DocxtemplateService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: TraCuuComponent,
      selectors: [["app-tra-cuu"]],
      decls: 39,
      vars: 16,
      consts: [[1, "container", "py-3"], [1, "row"], [1, "row", "py-3"], ["color", "warn", 3, "ngModel", "ngModelChange"], [1, "col"], ["selected", "", 3, "value", "click", 4, "ngFor", "ngForOf"], ["type", "number", "matInput", "", "placeholder", "S\u1ED1", 1, "text-end", 3, "ngModel", "ngModelChange"], [3, "startDay", "openOnFocus", "label", "format", "month"], [3, "label", "excel"], [1, "text-center"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "row px-3", 4, "ngIf"], ["class", "table table-hover table-bordered", 4, "ngIf"], [3, "percentLoad", "emit"], ["selected", "", 3, "value", "click"], [1, "row", "px-3"], [1, "table", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], [3, "click"]],
      template: function TraCuuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-slide-toggle", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TraCuuComponent_Template_mat_slide_toggle_ngModelChange_3_listener($event) {
            return ctx.isDanhSach = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Danh s\u00E1ch");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "mat-form-field")(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Ch\u1ECDn m\u1EABu ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-select");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, TraCuuComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 4)(12, "mat-form-field")(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "S\u1ED1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TraCuuComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.sotien = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 4)(17, "app-date-picker", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("month", function TraCuuComponent_Template_app_date_picker_month_17_listener($event) {
            return ctx.getMonth($event, 1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 4)(19, "app-date-picker", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("month", function TraCuuComponent_Template_app_date_picker_month_19_listener($event) {
            return ctx.getMonth($event, 2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "app-parse-excel-clipboard", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("excel", function TraCuuComponent_Template_app_parse_excel_clipboard_excel_20_listener($event) {
            return ctx.getClip($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 9)(22, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_Template_button_click_22_listener() {
            return ctx.lay_TTinHopDongDeKyLai_TheoLoArr();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "L\u1EA5y d\u1EEF li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, TraCuuComponent_button_24_Template, 2, 0, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_Template_button_click_25_listener() {
            return ctx.exportExcel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Xu\u1EA5t excel danh s\u00E1ch");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_Template_button_click_27_listener() {
            return ctx.exportDocx();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Xu\u1EA5t theo file m\u1EABu");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_Template_button_click_29_listener() {
            return ctx.convertTheoLo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Xu\u1EA5t file theo l\u00F4");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_Template_button_click_31_listener() {
            return ctx.layGiaoThu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "L\u1EA5y giao thu");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TraCuuComponent_Template_button_click_33_listener() {
            return ctx.xuatGiaoThu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Xu\u1EA5t giao thu");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, TraCuuComponent_div_35_Template, 3, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, TraCuuComponent_table_37_Template, 25, 1, "table", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "app-loadmore", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("emit", function TraCuuComponent_Template_app_loadmore_emit_38_listener($event) {
            return ctx.pushData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.isDanhSach);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.optDM);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.sotien);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("startDay", ctx.ngay1)("openOnFocus", true)("label", "Nga\u0300y 1")("format", "DD/MM/YYYY");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("startDay", ctx.ngay2)("openOnFocus", true)("label", "Nga\u0300y 2")("format", "DD/MM/YYYY");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Copy m\u00E3 PK d\u00E1n v\u00F4 \u0111\u00E2y");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.checkPer(2, "dev"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.searchBodyArr.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.ThongTinKHs.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("percentLoad", 80);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _share_material_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__.DatePickerComponent, _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_8__.LoadmoreComponent, _share_import_excel_parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_9__.ParseExcelClipboardComponent]
    });
  }
}

/***/ })

}]);