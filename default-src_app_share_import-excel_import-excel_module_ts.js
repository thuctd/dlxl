"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["default-src_app_share_import-excel_import-excel_module_ts"],{

/***/ 17276:
/*!***************************************************************************!*\
  !*** ./src/app/share/import-excel/export-ecxel/export-ecxel.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportEcxelComponent: () => (/* binding */ ExportEcxelComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ 62288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_authV2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authV2.service */ 50532);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 88834);





class ExportEcxelComponent {
  constructor(authSV) {
    this.authSV = authSV;
  }
  ngOnInit() {}
  export() {
    const data = [];
    this.dataJson.forEach(el => {
      delete el.status;
      delete el.sync;
      delete el.canEdit;
      delete el.keyWord;
      delete el.__v;
      data.push(el);
    });
    const ws = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.json_to_sheet(data, {
      dateNF: "dd.MM.yyyy",
      cellDates: true,
      cellStyles: true
    });
    const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_new();
    xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_append_sheet(wb, ws, this.api);
    xlsx__WEBPACK_IMPORTED_MODULE_2__.writeFile(wb, moment__WEBPACK_IMPORTED_MODULE_0___default()(Date.now()).format('YYYYMMDDHHMM') + "-4la-" + this.api + ".xlsx");
  }
  exportTar() {
    for (let i = 0; i < this.dataJson.length; i++) {
      delete this.dataJson[i]["dateModify"];
      delete this.dataJson[i]["canEdit"];
      delete this.dataJson[i]["keyWord"];
      delete this.dataJson[i]["__v"];
      delete this.dataJson[i]["_id"];
    }
    let dataStr = JSON.stringify(this.dataJson);
    let dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    let exportFileDefaultName = "4la-" + `${this.api ? this.api : ''}` + Date.now() + ".json";
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }
  check() {
    return this.authSV.checkPer("admin", 4);
  }
  static {
    this.ɵfac = function ExportEcxelComponent_Factory(t) {
      return new (t || ExportEcxelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authV2_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ExportEcxelComponent,
      selectors: [["app-export-ecxel"]],
      inputs: {
        dataJson: "dataJson",
        api: "api"
      },
      decls: 5,
      vars: 0,
      consts: [[1, "d-print-none"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function ExportEcxelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExportEcxelComponent_Template_button_click_1_listener() {
            return ctx.export();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Export Excel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExportEcxelComponent_Template_button_click_3_listener() {
            return ctx.exportTar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Export BackupDB");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton]
    });
  }
}

/***/ }),

/***/ 90990:
/*!*********************************************************************************!*\
  !*** ./src/app/share/import-excel/import-database/import-database.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportDatabaseComponent: () => (/* binding */ ImportDatabaseComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animate */ 27121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ 62288);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_plus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 14892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/http.service */ 57090);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../drop-file/drop-files/drop-files.component */ 69061);
















function ImportDatabaseComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportDatabaseComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.reload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "L\u00E0m l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ImportDatabaseComponent_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "app-drop-files", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("files", function ImportDatabaseComponent_div_4_div_9_Template_app_drop_files_files_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.onDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ImportDatabaseComponent_div_4_table_10_tr_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r11.err || "", "");
  }
}
function ImportDatabaseComponent_div_4_table_10_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ImportDatabaseComponent_div_4_table_10_tr_4_td_1_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r11.err);
  }
}
function ImportDatabaseComponent_div_4_table_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table", 11)(1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "D\u1EEE LI\u1EC6U L\u1ED6I");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ImportDatabaseComponent_div_4_table_10_tr_4_Template, 2, 2, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.errorData.length > 0 ? ctx_r4.errorData : ctx_r4.dataJson);
  }
}
function ImportDatabaseComponent_div_4_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportDatabaseComponent_div_4_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.reload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "L\u00E0m l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ImportDatabaseComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Import t\u1EEB file excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "a", 4)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "M\u1EABu import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ImportDatabaseComponent_div_4_button_8_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ImportDatabaseComponent_div_4_div_9_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ImportDatabaseComponent_div_4_table_10_Template, 5, 1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ImportDatabaseComponent_div_4_button_11_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("href", "https://github.com/thuctd/FileStore/raw/master/templates/", ctx_r0.api, ".xlsx", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.errorData.length > 0 || ctx_r0.dataJson.length > 0 || ctx_r0.backup.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.dataJson.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.errorData.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.errorData.length > 0 || ctx_r0.dataJson.length > 0 || ctx_r0.backup.length > 0);
  }
}
function ImportDatabaseComponent_table_5_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const items_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](items_r17.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](items_r17._ThongBaoLoi);
  }
}
function ImportDatabaseComponent_table_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table", 16)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "D\u00F2ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "L\u1ED7i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ImportDatabaseComponent_table_5_tr_8_Template, 5, 2, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.errServer);
  }
}
class ImportDatabaseComponent {
  constructor(plus, excelSV, authSV, router, loadSV, httpSV) {
    this.plus = plus;
    this.excelSV = excelSV;
    this.authSV = authSV;
    this.router = router;
    this.loadSV = loadSV;
    this.httpSV = httpSV;
    this.jsonArr = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.dataImport = [];
    this.dataJson = [];
    this.errorData = [];
    this.errServer = [];
    this.show = false;
    this.header = [];
    this.backup = [];
  }
  ngOnInit() {
    this.dataJson = [];
    this.dataImport = [];
  }
  onDrop(files) {
    const file = files[0];
    console.log(file);
    this.loadSV.load('onDrop');
    if (file.type == 'text/plain') {
      this.readFileText(file);
      return;
    }
    if (file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type == 'application/vnd.ms-excel') {
      this.excelSV.fileToJsonArray(file).then(val => {
        this.validateItems(val);
      });
    } else {
      alert('Lưu ý:\nBạn sẽ mất toàn bộ dữ liệu cũ trước khi import nhé!');
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = evtx => {
        const files = JSON.parse(evtx.target['result']);
        this.backup = this.cleanData(files);
        this.loadSV.loaded('onDrop');
      };
      reader.onerror = evt => {
        this.plus.alertError('Lỗi file import');
        this.loadSV.loaded('onDrop');
      };
    }
  }
  validateItems(evt) {
    const date = Date.now();
    for (let index = 1; index < evt.length; index++) {
      let item = evt[index];
      this.form.patchValue(item);
      if (this.form.valid) {
        item["keyWord"] = this.plus.generateKeyWord(item);
        item["dateModify"] = Date.now() + index;
        this.dataJson.push(item);
      } else {
        item["err"] = `Tại hàng ${index + 2}: ${this.plus.getErrValidateForm(this.form)}`;
        this.errorData.push(item);
        this.show = !this.show;
      }
    }
    if (this.errorData.length == 0) {
      this.jsonArr.emit(this.dataJson);
    }
    console.log(this.checkPer(2), this.errorData.length, this.dataJson);
  }
  import() {
    this.plus.subs.unsubscribe();
    this.httpSV.post(this.api + "/import", this.dataJson, this.fileName).subscribe(res => {
      if (res.status) {
        this.plus.goBack();
      } else {
        console.log(res);
      }
    });
  }
  importDBFile() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.plus.subs.unsubscribe();
      _this.httpSV.post(_this.api + "/import", _this.backup, _this.fileName).subscribe(res => {
        if (res.status) {
          _this.plus.goBack();
        } else {
          console.log(res);
        }
      });
    })();
  }
  checkPer(level) {
    return this.authSV.checkPer(this.api, level);
  }
  reload() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let curentUrl = _this2.router.url;
      yield _this2.router.navigate(["/"]);
      return _this2.router.navigate([`${curentUrl}`]);
    })();
  }
  export(data) {
    data.unshift(this.header);
    const ws = xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.json_to_sheet(data, {
      skipHeader: true
    });
    const wb = xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.book_new();
    xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.book_append_sheet(wb, ws, 'ChuaImport');
    xlsx__WEBPACK_IMPORTED_MODULE_10__.writeFile(wb, '4la-' + this.api + '-ChuaImport.xlsx');
  }
  exportExcel(data) {
    const ws = xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.json_to_sheet(data);
    const wb = xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.book_new();
    xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.book_append_sheet(wb, ws, this.api);
    xlsx__WEBPACK_IMPORTED_MODULE_10__.writeFile(wb, moment__WEBPACK_IMPORTED_MODULE_2___default()(Date.now()).format('YYYYMMDDHHMM') + "-4la-" + this.api + ".xlsx");
  }
  exportTar(data) {
    let dataStr = JSON.stringify(data);
    let dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    console.log(dataUri);
    let exportFileDefaultName = "4la-" + `${this.api ? this.api : ''}` + Date.now() + ".tar";
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }
  cleanData(arr) {
    const data = [];
    for (let i = 0; i < arr.length; i++) {
      const body = arr[i];
      body["keyWord"] = this.plus.generateKeyWord(body);
      body["dateModify"] = Date.now() + i;
      delete body['_id'];
      delete body['__v'];
      this.form.patchValue(body);
      console.log(body, this.form.valid);
      if (this.form.valid) {
        body["keyWord"] = this.plus.generateKeyWord(body);
        body["dateModify"] = Date.now() + i;
        this.dataJson.push(body);
      } else {
        body["err"] = `Tại hàng ${i}: ${this.plus.getErrValidateForm(this.form)}`;
        this.errorData.push(body);
      }
      data.push(body);
    }
    return data;
  }
  readFileText(evt) {
    const input = evt.target;
    const reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = () => {
      const text = reader.result;
    };
  }
  static {
    this.ɵfac = function ImportDatabaseComponent_Factory(t) {
      return new (t || ImportDatabaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_plus_service__WEBPACK_IMPORTED_MODULE_3__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_7__.HttpService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ImportDatabaseComponent,
      selectors: [["app-import-database"]],
      inputs: {
        form: "form",
        api: "api",
        fileName: "fileName"
      },
      outputs: {
        jsonArr: "jsonArr"
      },
      decls: 6,
      vars: 2,
      consts: [["mat-raised-button", "", "color", "accent", 3, "click"], [4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "text-center", "text-white", "py-2", "my-3", "bg-primary", "rounded-pill", "justify-content-center"], ["mat-button", "", "target", "_blank", 3, "href"], ["class", "text-center mx-3", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "ix", 4, "ngIf"], ["class", "table table-inverse table-responsive", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "text-center", "mx-3", 3, "click"], [1, "ix"], [3, "files"], [1, "table", "table-inverse", "table-responsive"], [1, "text-center", "text-danger", "py-3"], [4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "table"]],
      template: function ImportDatabaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportDatabaseComponent_Template_button_click_0_listener() {
            return ctx.show = !ctx.show;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Import ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "cloud_upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ImportDatabaseComponent_div_4_Template, 12, 5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ImportDatabaseComponent_table_5_Template, 9, 1, "table", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.show);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.errServer == null ? null : ctx.errServer.length) > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_8__.DropFilesComponent],
      data: {
        animation: [_animate__WEBPACK_IMPORTED_MODULE_1__.slideIn]
      }
    });
  }
}

/***/ }),

/***/ 4247:
/*!***********************************************************!*\
  !*** ./src/app/share/import-excel/import-excel.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportExcelModule: () => (/* binding */ ImportExcelModule)
/* harmony export */ });
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../material/material.module */ 343);
/* harmony import */ var _parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-excel-clipboard/parse-excel-clipboard.component */ 8390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-excel/import-excel.component */ 52062);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _import_database_import_database_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-database/import-database.component */ 90990);
/* harmony import */ var _export_ecxel_export_ecxel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./export-ecxel/export-ecxel.component */ 17276);
/* harmony import */ var _read_to_mail_read_to_mail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./read-to-mail/read-to-mail.component */ 25420);
/* harmony import */ var _read_xlsx_read_xlsx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./read-xlsx/read-xlsx.component */ 2538);
/* harmony import */ var _drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../drop-file/drop-file.module */ 96115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);











class ImportExcelModule {
  static {
    this.ɵfac = function ImportExcelModule_Factory(t) {
      return new (t || ImportExcelModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: ImportExcelModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_7__.DropFileModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ImportExcelModule, {
    declarations: [_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_2__.ImportExcelComponent, _parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_1__.ParseExcelClipboardComponent, _import_database_import_database_component__WEBPACK_IMPORTED_MODULE_3__.ImportDatabaseComponent, _export_ecxel_export_ecxel_component__WEBPACK_IMPORTED_MODULE_4__.ExportEcxelComponent, _read_to_mail_read_to_mail_component__WEBPACK_IMPORTED_MODULE_5__.ReadToMailComponent, _read_xlsx_read_xlsx_component__WEBPACK_IMPORTED_MODULE_6__.ReadXlsxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_7__.DropFileModule],
    exports: [_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_2__.ImportExcelComponent, _parse_excel_clipboard_parse_excel_clipboard_component__WEBPACK_IMPORTED_MODULE_1__.ParseExcelClipboardComponent, _import_database_import_database_component__WEBPACK_IMPORTED_MODULE_3__.ImportDatabaseComponent, _export_ecxel_export_ecxel_component__WEBPACK_IMPORTED_MODULE_4__.ExportEcxelComponent, _read_to_mail_read_to_mail_component__WEBPACK_IMPORTED_MODULE_5__.ReadToMailComponent, _read_xlsx_read_xlsx_component__WEBPACK_IMPORTED_MODULE_6__.ReadXlsxComponent]
  });
})();

/***/ }),

/***/ 52062:
/*!***************************************************************************!*\
  !*** ./src/app/share/import-excel/import-excel/import-excel.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportExcelComponent: () => (/* binding */ ImportExcelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ 62288);
/* harmony import */ var _services_plus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/plus.service */ 22014);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 88834);







function ImportExcelComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ch\u1ECDn file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ImportExcelComponent_table_7_tr_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r3.err || "", "");
  }
}
function ImportExcelComponent_table_7_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ImportExcelComponent_table_7_tr_4_td_1_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.err);
  }
}
function ImportExcelComponent_table_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 7)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "L\u1ED7i d\u1EEF li\u1EC7u file import");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ImportExcelComponent_table_7_tr_4_Template, 2, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportExcelComponent_table_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.reload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "L\u00E0m l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.errorData.length > 0 ? ctx_r1.errorData : ctx_r1.dataJson);
  }
}
class ImportExcelComponent {
  constructor(plus, loadSV) {
    this.plus = plus;
    this.loadSV = loadSV;
    this.xls = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.dataImport = [];
    this.dataJson = [];
    this.errorData = [];
  }
  ngOnInit() {}
  readXlsx(evt) {
    this.loadSV.load('readXlsx');
    this.dataJson = [];
    this.dataImport = [];
    let target = evt.target;
    const reader = new FileReader();
    reader.onload = e => {
      const bstr = e.target.result;
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_3__.read(bstr, {
        type: 'binary'
      });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      this.dataImport = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.sheet_to_json(ws, {
        header: 1
      });
      this.selectedFile(this.dataImport);
    };
    reader.readAsBinaryString(target.files[0]);
    target = null;
    this.loadSV.loaded('readXlsx');
  }
  selectedFile(evt) {
    console.log(evt);
    this.loadSV.load('selectedFile');
    for (let index = 1; index < evt.length; index++) {
      const x = {};
      evt[0].forEach((hx, ix) => {
        x[`${hx}`] = evt[index][ix];
      });
      if (x == undefined) return;
      this.form.patchValue(this.plus.Obj_clean(x));
      const body = x;
      if (this.form.valid) {
        body['dateModify'] = Date.now() + index;
        body['keyWord'] = this.plus.generateKeyWord(body);
        body['sync'] = 0;
        this.dataJson.push(body);
      } else {
        body['err'] = `Tại hàng ${index}: ${this.plus.getErrValidateForm(this.form)}`;
        this.errorData.push(x);
      }
    }
    if (this.errorData.length > 0) {
      this.loadSV.loaded('selectedFile');
      return;
    } else {
      this.xls.emit(this.dataJson);
    }
    this.loadSV.loaded('selectedFile');
  }
  reload() {
    this.plus.reload(this.dbName + '/' + this.api);
  }
  static {
    this.ɵfac = function ImportExcelComponent_Factory(t) {
      return new (t || ImportExcelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_plus_service__WEBPACK_IMPORTED_MODULE_0__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ImportExcelComponent,
      selectors: [["app-import-excel"]],
      inputs: {
        form: "form",
        api: "api",
        dbName: "dbName",
        keyWordArr: "keyWordArr"
      },
      outputs: {
        xls: "xls"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "list"], ["for", "file-import", "class", "custom-file-upload text-primary mx-5", 4, "ngIf"], ["hidden", "", "id", "file-import", "type", "file", "multiple", "false", 3, "change"], ["target", "_blank", 1, "badge", "badge-warning", 3, "href"], ["class", "table table-inverse table-responsive", 4, "ngIf"], ["for", "file-import", 1, "custom-file-upload", "text-primary", "mx-5"], ["aria-hidden", "true", 1, "fa", "fa-file-excel-o", "fa-2x", "text-success"], [1, "table", "table-inverse", "table-responsive"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "text-center", "mx-3", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function ImportExcelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ImportExcelComponent_label_2_Template, 3, 0, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ImportExcelComponent_Template_input_change_3_listener($event) {
            return ctx.readXlsx($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "File import m\u1EABu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ImportExcelComponent_table_7_Template, 7, 1, "table", 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dataJson.length == 0 && ctx.errorData.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://github.com/thuctd/FileStore/raw/master/templates/", ctx.api, ".xlsx", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorData.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton]
    });
  }
}

/***/ }),

/***/ 8390:
/*!*********************************************************************************************!*\
  !*** ./src/app/share/import-excel/parse-excel-clipboard/parse-excel-clipboard.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParseExcelClipboardComponent: () => (/* binding */ ParseExcelClipboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/excel.service */ 53789);




class ParseExcelClipboardComponent {
  constructor(plus, excelSV) {
    this.plus = plus;
    this.excelSV = excelSV;
    this.excel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.label = 'Copy và dán nội dung vào đây';
    this.output = [];
    this.table = '';
  }
  ngOnInit() {}
  convertJson(data) {
    let out = [];
    for (let i = 1; i < data.length; i++) {
      let item = {};
      const element = data[i];
      for (let [key, value] of Object.entries(data[0])) {
        item[`${value}`] = element[key];
      }
      out.push(item);
    }
    this.json.emit(out);
  }
  parseExcel(evt) {
    let inp = evt.target.value.trim();
    let clipRows = [];
    let jsonObj = [];
    const row = inp.split('\n');
    for (let i = 0; i < row.length; i++) {
      clipRows[i] = row[i].split('\t');
    }
    clipRows.forEach(el => {
      const header = clipRows[0];
      let item = {};
      el.forEach((element, i) => {
        item[i] = element;
      });
      jsonObj.push(item);
    });
    this.output = jsonObj;
    this.json.emit(jsonObj);
    this.table = this.exportTbale(jsonObj);
    localStorage.setItem('parser', JSON.stringify(jsonObj));
    this.excel.emit(jsonObj);
    this.convertJson(jsonObj);
    return jsonObj;
  }
  parseExcel2(evt) {
    let inp = evt.target.value.trim();
    let clipRows = [];
    let jsonObj = [];
    const row = inp.split('\n');
    for (let i = 0; i < row.length; i++) {
      clipRows[i] = row[i].split('\t');
    }
    clipRows.forEach(el => {
      const header = clipRows[0];
      let item = {};
      el.forEach((element, i) => {
        item[this.plus.generateKey(header[i])] = element;
      });
      jsonObj.push(item);
    });
    this.output = jsonObj;
    this.table = this.exportTbale(jsonObj);
    localStorage.setItem('parser', JSON.stringify(jsonObj));
    this.excel.emit(jsonObj);
    return jsonObj;
  }
  exportTbale(json) {
    let headerRow = '<th>STT</th>';
    let rows = '';
    for (let key in json[0]) {
      if (json[0].hasOwnProperty(key)) {
        headerRow += '<th>' + this.plus.generateKey(json[0][key]) + '</th>';
      }
    }
    json.forEach((val, i) => {
      rows += `<tr><td>${i + 1}</td>`;
      for (const key in val) {
        if (val.hasOwnProperty(key)) {
          rows += '<td>' + val[key] + '</td>';
        }
      }
      rows += '</tr>';
    });
    const table = `
    <table class="table table-bordered table-hover ">
      <thead>
        <tr class="text-center">
         ${headerRow}
        </tr>
      <thead>
      <tbody style = "border: 1px solid black;">
         ${rows}
      <tbody>
    <table>
    `;
    return table;
  }
  reset(evt) {
    return evt.target.value = '';
  }
  save() {
    const data = JSON.stringify(this.output);
    localStorage.setItem('parser', data);
  }
  static {
    this.ɵfac = function ParseExcelClipboardComponent_Factory(t) {
      return new (t || ParseExcelClipboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_0__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_excel_service__WEBPACK_IMPORTED_MODULE_1__.ExcelService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ParseExcelClipboardComponent,
      selectors: [["app-parse-excel-clipboard"]],
      inputs: {
        label: "label"
      },
      outputs: {
        excel: "excel",
        json: "json"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "container"], [1, "form-group"], [1, "text-center"], ["rows", "2", 1, "form-control", 3, "placeholder", "click", "change"], ["input1", ""]],
      template: function ParseExcelClipboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "textarea", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParseExcelClipboardComponent_Template_textarea_click_3_listener($event) {
            return ctx.reset($event);
          })("change", function ParseExcelClipboardComponent_Template_textarea_change_3_listener($event) {
            return ctx.parseExcel($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "  ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);
        }
      }
    });
  }
}

/***/ }),

/***/ 25420:
/*!***************************************************************************!*\
  !*** ./src/app/share/import-excel/read-to-mail/read-to-mail.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadToMailComponent: () => (/* binding */ ReadToMailComponent)
/* harmony export */ });
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animate */ 27121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ 62288);
/* harmony import */ var _services_plus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/plus.service */ 22014);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 99213);








function ReadToMailComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ch\u1ECDn file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class ReadToMailComponent {
  constructor(plus, loadSV) {
    this.plus = plus;
    this.loadSV = loadSV;
    this.xlsMail = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.dataImport = [];
  }
  ngOnInit() {}
  readXlsx(evt) {
    this.loadSV.load('readXlsx');
    this.dataImport = [];
    let target = evt.target;
    const reader = new FileReader();
    reader.onload = e => {
      const bstr = e.target.result;
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_4__.read(bstr, {
        type: 'binary'
      });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      this.dataImport = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.sheet_to_json(ws, {
        header: 1
      });
      this.xlsMail.emit(this.dataImport);
    };
    reader.readAsBinaryString(target.files[0]);
    target = null;
    this.loadSV.loaded('readXlsx');
  }
  reload() {
    this.plus.reload(this.dbName + '/' + this.api);
  }
  static {
    this.ɵfac = function ReadToMailComponent_Factory(t) {
      return new (t || ReadToMailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_plus_service__WEBPACK_IMPORTED_MODULE_1__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ReadToMailComponent,
      selectors: [["app-read-to-mail"]],
      inputs: {
        api: "api",
        dbName: "dbName"
      },
      outputs: {
        xlsMail: "xlsMail"
      },
      decls: 9,
      vars: 2,
      consts: [[1, "row"], ["for", "file-import", "class", "custom-file-upload text-primary mx-5", 4, "ngIf"], ["hidden", "", "id", "file-import", "type", "file", "multiple", "false", 3, "change"], ["target", "_blank", 1, "badge", "badge-warning", 3, "href"], ["for", "file-import", 1, "custom-file-upload", "text-primary", "mx-5"], ["aria-hidden", "true", 1, "fa", "fa-file-excel-o", "fa-2x", "text-success"]],
      template: function ReadToMailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ReadToMailComponent_label_2_Template, 3, 0, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReadToMailComponent_Template_input_change_3_listener($event) {
            return ctx.readXlsx($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 3)(6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " File import m\u1EABu");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataImport.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://github.com/thuctd/FileStore/raw/master/templates/", ctx.api, ".xlsx", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
      data: {
        animation: [_animate__WEBPACK_IMPORTED_MODULE_0__.slideIn]
      }
    });
  }
}

/***/ }),

/***/ 2538:
/*!*********************************************************************!*\
  !*** ./src/app/share/import-excel/read-xlsx/read-xlsx.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadXlsxComponent: () => (/* binding */ ReadXlsxComponent)
/* harmony export */ });
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animate */ 27121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ 62288);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 99213);








function ReadXlsxComponent_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideX", undefined);
  }
}
class ReadXlsxComponent {
  constructor(plus, loadSV) {
    this.plus = plus;
    this.loadSV = loadSV;
    this.numSheet = 1;
    this.raw = true;
    this.xls = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.docx = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.ok = false;
    this.sheetList = [];
    this.sheetSelect = [];
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.xls.unsubscribe();
    this.docx.unsubscribe();
    console.log('ngOnDestroy app-read-xlsx');
  }
  readXlsx(evt) {
    this.loadSV.load('readXlsx');
    let output = {};
    if (!(evt.target.files[0] == undefined || evt.target.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || evt.target.files[0].type == 'application/vnd.ms-excel')) return this.plus.alertError('Không phải file excel');
    let target = evt.target;
    if (!target) return this.plus.alertError('Bạn chưa chọn file');
    const reader = new FileReader();
    reader.readAsArrayBuffer(target.files[0]);
    reader.onloadend = e => {
      const bstr = e.target.result;
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_4__.read(bstr, {
        type: 'binary',
        cellDates: true,
        dateNF: 'DD/MM/YYYY'
      });
      const sheets = wb.SheetNames;
      for (let i = 0; i < sheets.length; i++) {
        const wsname = sheets[i];
        if (wsname == '_Merge') return this.plus.alertError('Vui lòng đổi tên sheet _Merge thành tên khác');
        const ws = wb.Sheets[wsname];
        const data = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.sheet_to_json(ws, {
          header: 1,
          raw: this.raw
        });
        i == 0 ? this.json.emit(this.convertJSon2(data)) : null;
        this.xls.emit(data);
        output[`${i == 0 ? '_Merge' : wsname}`] = this.convertJSon(data);
      }
      this.docx.emit(output);
      this.ok = true;
      this.loadSV.loaded('readXlsx');
    };
  }
  convertJSon(xlxsData) {
    const data = [];
    for (let index = 1; index < xlxsData.length; index++) {
      if (xlxsData[index][0] == 'x' || xlxsData[index][0] == 'TRUE') {
        const x = {};
        xlxsData[0].forEach((el, i) => {
          x[`${el}`] = xlxsData[index][i];
        });
        data.push(x);
      }
    }
    return data;
  }
  convertJSon2(xlxsData) {
    const data = [];
    for (let index = 1; index < xlxsData.length; index++) {
      const x = {};
      xlxsData[0].forEach((el, i) => {
        if (xlxsData[index][i]) {
          x[`${el}`] = xlxsData[index][i];
        }
      });
      data.push(x);
    }
    return data;
  }
  choose(item) {
    const index = this.sheetSelect.indexOf(item);
    if (index !== -1) {
      this.sheetSelect.splice(index, 1);
    } else {
      this.sheetSelect.push(item);
    }
  }
  static {
    this.ɵfac = function ReadXlsxComponent_Factory(t) {
      return new (t || ReadXlsxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ReadXlsxComponent,
      selectors: [["app-read-xlsx"]],
      inputs: {
        numSheet: "numSheet",
        raw: "raw"
      },
      outputs: {
        xls: "xls",
        docx: "docx",
        json: "json"
      },
      decls: 5,
      vars: 1,
      consts: [["hidden", "", "id", "read-xlsx", "type", "file", "multiple", "false", 3, "input"], ["for", "read-xlsx", 1, "custom-file-upload", "text-primary"], ["aria-hidden", "true", 1, "fa", "text-success", "fa-file-excel-o", "fa-2x"], ["color", "primary", 4, "ngIf"], ["color", "primary"]],
      template: function ReadXlsxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ReadXlsxComponent_Template_input_input_0_listener($event) {
            return ctx.readXlsx($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Ch\u1ECDn file excel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ReadXlsxComponent_mat_icon_4_Template, 2, 1, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ok);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
      data: {
        animation: [_animate__WEBPACK_IMPORTED_MODULE_0__.slideX]
      }
    });
  }
}

/***/ })

}]);