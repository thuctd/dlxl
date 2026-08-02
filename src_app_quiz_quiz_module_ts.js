"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["src_app_quiz_quiz_module_ts"],{

/***/ 42840:
/*!*************************************************************!*\
  !*** ./src/app/quiz/convert-quiz/convert-quiz.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConvertQuizComponent: () => (/* binding */ ConvertQuizComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/excel.service */ 53789);
/* harmony import */ var src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/http.serviceV2 */ 24950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);









function ConvertQuizComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_tr_40_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.chonDapAn(item_r1, i_r2, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_tr_40_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.chonDapAn(item_r1, i_r2, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_tr_40_Template_td_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.chonDapAn(item_r1, i_r2, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_tr_40_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.chonDapAn(item_r1, i_r2, 4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_tr_40_Template_td_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.chonDapAn(item_r1, i_r2, 5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_tr_40_Template_td_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.chonDapAn(item_r1, i_r2, 6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.CauHoi);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.DapAn1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.DapAn2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.DapAn3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.DapAn4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.DapAn5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.DapAn6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", item_r1.DapAnDung, " ", item_r1.DapAnFull, "");
  }
}
class ConvertQuizComponent {
  constructor(plus, excelSV, httpSV) {
    this.plus = plus;
    this.excelSV = excelSV;
    this.httpSV = httpSV;
    this.txt = '';
    this.items = [];
    this.html = '';
    this.nhom = '';
  }
  ngOnInit() {}
  reload() {
    this.plus.reload();
  }
  exportConvertFile() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.httpSV.getFileByName('templates/docx/4la-convert.xlsx');
    })();
  }
  chonDapAn(item, index, causo) {
    this.items[index].result = causo;
    this.items[index].DapAnFull = item[`DapAn${causo}`];
    this.items[index].DapAnDung = String.fromCharCode(64 + causo);
  }
  parseSimpleQuestions() {
    this.items = [];
    const content = (this.txt || '').toString().trim();
    if (!content) return [];
    const blocks = content.split(/(?:Câu\s*(?:số\s*)?\d+[:.]\s*|\b\d+[.]\s+)/gi).filter(b => b.trim());
    for (const block of blocks) {
      const optionRegex = new RegExp('(?:^|[\\r\\n])\\s*([A-F])[./:]\\/?\\s*([\\s\\S]*?)(?=[\\r\\n]\\s*[A-F][./:]|$)', 'gi');
      const options = [];
      let firstOptionIndex = -1;
      let match;
      while ((match = optionRegex.exec(block)) !== null) {
        if (firstOptionIndex === -1) firstOptionIndex = match.index;
        options.push(match[2].trim().replace(/\s+/g, ' '));
      }
      const cauHoi = (firstOptionIndex > 0 ? block.substring(0, firstOptionIndex) : block.split(/[\r\n]/)[0]).trim().replace(/\s+/g, ' ');
      if (!cauHoi) continue;
      this.items.push({
        CauHoi: cauHoi,
        DapAn1: options[0] || '',
        DapAn2: options[1] || '',
        DapAn3: options[2] || '',
        DapAn4: options[3] || '',
        DapAn5: options[4] || '',
        DapAn6: options[5] || ''
      });
    }
    this.html = this.plus.generateHtmlTable(this.items);
    return this.items;
  }
  export() {
    this.items.map((el, index) => {
      el.Nhom = this.nhom;
      el._id = this.nhom + index;
      el.DapAnDung = '=CHOOSE(J2;"A";"B";"C";"D";"E";"F")';
      el.DapAnFull = '=CHOOSE(J2;B2;C2;D2;E2)';
      el.result = 0;
    });
    console.log(this.items);
    this.excelSV.export(this.items, this.nhom);
  }
  parseTxt(evt) {
    console.log(evt);
    this.txt = evt.target.value;
    this.parseNhieuCauHoi();
  }
  reset() {
    this.txt = '';
  }
  parseNhieuCauHoi() {
    const text = (this.txt || '').toString().trim();
    if (!text) return [];
    const cacDong = text.split('\n').map(d => d.trim()).filter(d => d.length > 0);
    const danhSachKetQua = [];
    let cauHoiHienTai = null;
    let demDapAn = 1;
    for (const dong of cacDong) {
      if (/^Câu\s+/i.test(dong)) {
        if (cauHoiHienTai) {
          danhSachKetQua.push(cauHoiHienTai);
        }
        const noiDungCau = dong.replace(/^Câu\s+(?:số\s+)?\d+\s*:\s*/i, '');
        cauHoiHienTai = {
          CauHoi: noiDungCau
        };
        demDapAn = 1;
      } else if (/^[A-F]\.\/?/i.test(dong)) {
        if (cauHoiHienTai) {
          const noiDungDapAn = dong.replace(/^[A-F]\.\/?\s*/i, '');
          cauHoiHienTai[`DapAn${demDapAn}`] = noiDungDapAn;
          demDapAn++;
        }
      }
    }
    if (cauHoiHienTai) {
      danhSachKetQua.push(cauHoiHienTai);
    }
    this.items = danhSachKetQua;
    return this.html = this.plus.generateHtmlTable(this.items);
  }
  copy() {
    const macro = `Sub ChuanHoaDauMuc_AF()
    ' Macro chuẩn hóa các dấu mục từ A đến F
    Dim rng As Range

    ' --- BƯỚC 1: Thay thế [ ^t]{1,}([A-F]./) thành ^p\\1 ---
    Set rng = ActiveDocument.Content
    With rng.Find
        .ClearFormatting
        .Replacement.ClearFormatting
        .Text = "[ ^t]{1,}([A-F]./)"
        ' Trong VBA Word, ký t? xu?ng dòng ^p không dùng tr?c ti?p du?c ? ô Find khi b?t Wildcards,
        ' nhung ? ô Replace thì ta ph?i thay b?ng ^p d? xu?ng dòng chu?n ch?nh.
        .Replacement.Text = "^p\\1"
        .Forward = True
        .Wrap = wdFindContinue
        .Format = False
        .MatchWildcards = True ' B?t ch? d? Wildcards
        .Execute Replace:=wdReplaceAll
    End With

    ' --- BU?C 2: Thay th? ([A-F])/\\. thành \\1./ ---
    Set rng = ActiveDocument.Content
    With rng.Find
        .ClearFormatting
        .Replacement.ClearFormatting
        .Text = "([A-F])/\\."
        .Replacement.Text = "\\1./"
        .Forward = True
        .Wrap = wdFindContinue
        .Format = False
        .MatchWildcards = True ' B?t ch? d? Wildcards
        .Execute Replace:=wdReplaceAll
    End With

    ' --- BƯỚC 3: TÁCH DÒNG CÁC ĐÁP ÁN DÍNH NHAU BẰNG NHIỀU DẤU CÁCH ---
    ' Tìm kiếm: Ký tự khoảng trắng xuất hiện từ 1 lần trở lên {1,}, ngay sau đó là cụm ([A-F]./)
    ' Thay thế: Đổi khoảng trắng đó thành dấu xuống dòng ^p và giữ nguyên cụm đầu mục \\1
    Set rng = ActiveDocument.Content
    With rng.Find
        .ClearFormatting
        .Replacement.ClearFormatting
        .Text = " {1,}([A-F]./)" ' Lưu ý: Có một khoảng trắng đứng trước {1,}
        .Replacement.Text = "^p\\1"
        .Forward = True
        .Wrap = wdFindContinue
        .Format = False
        .MatchWildcards = True
        .Execute Replace:=wdReplaceAll
    End With

         ' --- BU?C 4: Thay th? ([A-F])/\\. thành \\1./ ---
    Set rng = ActiveDocument.Content
    With rng.Find
        .ClearFormatting
        .Replacement.ClearFormatting
        .Text = "^t"
        .Replacement.Text = ""
        .Forward = True
        .Wrap = wdFindContinue
        .Format = False
        .MatchWildcards = False ' B?t ch? d? Wildcards
        .Execute Replace:=wdReplaceAll
    End With

            ' --- BU?C 5: Thay th? ([A-F])/\\. thành \\1./ ---
    Set rng = ActiveDocument.Content
    With rng.Find
        .ClearFormatting
        .Replacement.ClearFormatting
        .Text = "^p^p"
        .Replacement.Text = "^p"
        .Forward = True
        .Wrap = wdFindContinue
        .Format = False
        .MatchWildcards = False ' B?t ch? d? Wildcards
        .Execute Replace:=wdReplaceAll
    End With

    ' --- BU?C 6: Ð?i toàn b? ch? IN Ð?M thành IN Ð?M MÀU XANH DUONG ---
    Set rng = ActiveDocument.Content
    With rng.Find
        .ClearFormatting
        .Replacement.ClearFormatting

        ' Tìm nh?ng gì có d?nh d?ng là IN Ð?M (Bold = True)
        .Font.Bold = True
        .Text = "" ' Ð? tr?ng d? tìm b?t k? ch? nào mi?n là in d?m

        ' Thi?t l?p d?nh d?ng thay th?: Gi? nguyên in d?m và thêm màu xanh
        .Replacement.Font.Bold = True
        .Replacement.Font.Color = wdColorBlue ' Màu xanh duong chu?n (Standard Blue)
        .Replacement.Text = "" ' Ð? tr?ng d? gi? nguyên n?i dung ch? g?c

        .Forward = True
        .Wrap = wdFindContinue
        .Format = True ' B?t bu?c ph?i là True d? Word tìm theo d?nh d?ng
        .MatchWildcards = False ' T?t wildcards ? bu?c này d? tìm ki?m d?nh d?ng chu?n xác hon
        .Execute Replace:=wdReplaceAll
    End With

    MsgBox "Ðã xong!", vbInformation, "DONE"
End Sub
`;
    return this.plus.copyToClipboard(macro);
  }
  static {
    this.ɵfac = function ConvertQuizComponent_Factory(t) {
      return new (t || ConvertQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_share_services_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_3__.HttpServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ConvertQuizComponent,
      selectors: [["app-convert-quiz"]],
      decls: 42,
      vars: 2,
      consts: [[1, "container", "py-5"], [1, "row"], ["placeholder", "Ch\u1EA5p nh\u1EADn t\u1EA5t c\u1EA3 c\u00E1c m\u1EE5c A./ B./ C./ ho\u1EB7c A. B. C.", "rows", "8", 1, "form-control", 3, "click", "change"], [1, "btn"], [1, "mb-3"], ["type", "text", "placeholder", "Nh\u00F3m ", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "id", "add-btn", "color", "warn", 3, "click"], ["mat-raised-button", "", "matTooltip", "Alt + F11 -> insert Module in Normal", 3, "click"], ["mat-raised-button", "", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover", "table-bordered"], [1, ""], [1, "table-group-divider"], [4, "ngFor", "ngForOf"], [3, "click"]],
      template: function ConvertQuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "textarea", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_Template_textarea_click_2_listener() {
            return ctx.reset();
          })("change", function ConvertQuizComponent_Template_textarea_change_2_listener($event) {
            return ctx.parseTxt($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConvertQuizComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.nhom = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_Template_button_click_7_listener() {
            return ctx.export();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Export");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_Template_button_click_9_listener() {
            return ctx.copy();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Macro");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_Template_button_click_11_listener() {
            return ctx.reload();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " reload");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConvertQuizComponent_Template_button_click_13_listener() {
            return ctx.exportConvertFile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " file");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 1)(17, "div", 9)(18, "table", 10)(19, "thead", 11)(20, "tr")(21, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "STT");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "CauHoi");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "DapAn1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "DapAn2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "DapAn3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "DapAn4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "DapAn5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "DapAn6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "DapAnFull");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "tbody", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ConvertQuizComponent_tr_40_Template, 19, 10, "tr", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "tfoot");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.nhom);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip]
    });
  }
}

/***/ }),

/***/ 16532:
/*!*******************************************************!*\
  !*** ./src/app/quiz/elearning/elearning.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElearningComponent: () => (/* binding */ ElearningComponent)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var src_app_share_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/auth.service */ 14892);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 5951);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _share_import_excel_export_ecxel_export_ecxel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/import-excel/export-ecxel/export-ecxel.component */ 17276);
/* harmony import */ var _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/drop-file/drop-files/drop-files.component */ 69061);













function ElearningComponent_div_8_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", item_r1 == null ? null : item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", item_r1.CauHoi);
  }
}
function ElearningComponent_div_8_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r2 = ctx_r10.index;
    const item_r1 = ctx_r10.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.DapAn1);
  }
}
function ElearningComponent_div_8_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r2 = ctx_r11.index;
    const item_r1 = ctx_r11.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.DapAn2);
  }
}
function ElearningComponent_div_8_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r2 = ctx_r12.index;
    const item_r1 = ctx_r12.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.DapAn3);
  }
}
function ElearningComponent_div_8_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r2 = ctx_r13.index;
    const item_r1 = ctx_r13.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.DapAn4);
  }
}
function ElearningComponent_div_8_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r2 = ctx_r14.index;
    const item_r1 = ctx_r14.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.DapAn5);
  }
}
function ElearningComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ElearningComponent_div_8_img_5_Template, 1, 2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ElearningComponent_div_8_p_7_Template, 3, 2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ElearningComponent_div_8_p_8_Template, 3, 2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ElearningComponent_div_8_p_9_Template, 3, 2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ElearningComponent_div_8_p_11_Template, 3, 2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ElearningComponent_div_8_p_12_Template, 3, 2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p")(14, "b")(15, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" C\u00E2u s\u1ED1 ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 10, i_r2 + 1), ": ", item_r1.CauHoi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1 == null ? null : item_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.DapAn1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.DapAn2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.DapAn3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.DapAn4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.DapAn5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Tr\u1EA3 l\u1EDDi: ", item_r1.DapAnFull, " ");
  }
}
class ElearningComponent {
  constructor(plus, fb, authSV, loadSV) {
    this.plus = plus;
    this.fb = fb;
    this.authSV = authSV;
    this.loadSV = loadSV;
    this.chart = [];
    this.main = this.fb.group({
      CauHoi: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      DapAn1: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      DapAn2: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      DapAn3: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      DapAn4: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      DapAn5: [, []],
      DapAnDung: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      PhanLoai: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      Nhom: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      DapAnFull: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
    this.items = [];
  }
  ngOnInit() {}
  readMany(file) {
    for (let i = 0; i < file.length; i++) {
      const de = i + 1;
      const reader = new FileReader();
      reader.readAsText(file[i], "UTF-8");
      reader.onload = evtx => {
        const files = JSON.parse(evtx.target["result"]);
        console.log(files);
        const quiz = files.result.children[0].children;
        for (let i = 0; i < quiz.length; i++) {
          const body = {
            CauHoi: quiz[i].content.replace(/<(\/*)p[^>]*>/g, ''),
            img: quiz[i].avatar,
            PhanLoai: 'Elearning',
            Nhom: 'Thi Pháp luật',
            DapAnFull: '',
            DeSo: de,
            CauSo: i + 1
          };
          const ans = quiz[i].answers2;
          for (let y = 0; y < ans.length; y++) {
            body[`DapAn${y + 1}`] = ans[y].text;
            if (ans[y].is_answer == 1) {
              switch (y) {
                case 0:
                  body[`DapAnDung`] = 'A';
                  body[`DapAnFull`] = ans[y].text;
                  break;
                case 1:
                  body[`DapAnDung`] = 'B';
                  body[`DapAnFull`] = ans[y].text;
                  break;
                case 2:
                  body[`DapAnDung`] = 'C';
                  body[`DapAnFull`] = ans[y].text;
                  break;
                case 3:
                  body[`DapAnDung`] = 'D';
                  body[`DapAnFull`] = ans[y].text;
                  break;
                case 4:
                  body[`DapAnDung`] = 'E';
                  body[`DapAnFull`] = ans[y].text;
                  break;
              }
            }
          }
          this.items.push(body);
        }
      };
    }
  }
  readJson(file, i = 0) {
    const reader = new FileReader();
    reader.readAsText(file[i], "UTF-8");
    reader.onload = evtx => {
      this.loadSV.load('readJson');
      const files = JSON.parse(evtx.target["result"]);
      console.log(files);
      const quiz = files.result.children[0].children;
      for (let i = 0; i < quiz.length; i++) {
        const body = {
          CauHoi: quiz[i].content.replace(/<(\/*)p[^>]*>/g, ''),
          img: quiz[i].avatar,
          PhanLoai: 'Elearning',
          Nhom: 'Thi Pháp luật',
          DapAnFull: ''
        };
        const ans = quiz[i].answers2;
        for (let y = 0; y < ans.length; y++) {
          body[`DapAn${y + 1}`] = ans[y].text;
          if (ans[y].is_answer == 1) {
            switch (y) {
              case 0:
                body[`DapAnDung`] = 'A';
                body[`DapAnFull`] = ans[y].text;
                break;
              case 1:
                body[`DapAnDung`] = 'B';
                body[`DapAnFull`] = ans[y].text;
                break;
              case 2:
                body[`DapAnDung`] = 'C';
                body[`DapAnFull`] = ans[y].text;
                break;
              case 3:
                body[`DapAnDung`] = 'D';
                body[`DapAnFull`] = ans[y].text;
                break;
              case 4:
                body[`DapAnDung`] = 'E';
                body[`DapAnFull`] = ans[y].text;
                break;
            }
          }
        }
        this.items.push(body);
      }
      this.loadSV.loaded('readJson');
      console.table(this.items);
    };
    reader.onerror = evt => {
      this.plus.alertError("Lỗi file import");
      this.loadSV.loaded('readJson');
    };
  }
  trackBy(item) {
    return item;
  }
  paste() {
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const text = yield navigator.clipboard.readText();
      console.log(text);
    })();
  }
  reload() {
    this.authSV.reload();
  }
  static {
    this.ɵfac = function ElearningComponent_Factory(t) {
      return new (t || ElearningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_share_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ElearningComponent,
      selectors: [["app-elearning"]],
      decls: 9,
      vars: 4,
      consts: [[1, "d-none-print"], [3, "files"], [3, "dataJson", "api"], ["mat-raised-button", "", 1, "d-none-print", 3, "click"], ["id", "pdfTable", 1, "row"], [1, "col"], ["class", "tn", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tn"], [1, "cauhoi"], ["class", "img-fluid rounded mx-auto d-block", 3, "src", "alt", 4, "ngIf"], [1, "font-justify"], [4, "ngIf"], [3, "id"], [1, "img-fluid", "rounded", "mx-auto", "d-block", 3, "src", "alt"], [1, "radio-button", 3, "name"]],
      template: function ElearningComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 0)(1, "app-drop-files", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("files", function ElearningComponent_Template_app_drop_files_files_1_listener($event) {
            return ctx.readMany($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-export-ecxel", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ElearningComponent_Template_button_click_3_listener() {
            return ctx.reload();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ElearningComponent_div_8_Template, 17, 12, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataJson", ctx.items)("api", "ELearning");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackBy);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _share_import_excel_export_ecxel_export_ecxel_component__WEBPACK_IMPORTED_MODULE_4__.ExportEcxelComponent, _share_drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_5__.DropFilesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe],
      styles: [".cauhoi[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 5px;\n}"]
    });
  }
}

/***/ }),

/***/ 20094:
/*!*********************************************!*\
  !*** ./src/app/quiz/quiz-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizRoutingModule: () => (/* binding */ QuizRoutingModule)
/* harmony export */ });
/* harmony import */ var _elearning_elearning_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elearning/elearning.component */ 16532);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.component */ 91400);
/* harmony import */ var _convert_quiz_convert_quiz_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convert-quiz/convert-quiz.component */ 42840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);






const routes = [{
  path: '',
  component: _quiz_component__WEBPACK_IMPORTED_MODULE_1__.QuizComponent
}, {
  path: 'elearning',
  component: _elearning_elearning_component__WEBPACK_IMPORTED_MODULE_0__.ElearningComponent
}, {
  path: 'trac-nghiem-convert',
  component: _convert_quiz_convert_quiz_component__WEBPACK_IMPORTED_MODULE_2__.ConvertQuizComponent
}];
class QuizRoutingModule {
  static {
    this.ɵfac = function QuizRoutingModule_Factory(t) {
      return new (t || QuizRoutingModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: QuizRoutingModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](QuizRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 91400:
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizComponent: () => (/* binding */ QuizComponent),
/* harmony export */   cataogs: () => (/* binding */ cataogs)
/* harmony export */ });
/* harmony import */ var _share_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../share/animate */ 27121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/services/plus.service */ 22014);
/* harmony import */ var _share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/services/http.serviceV2 */ 24950);
/* harmony import */ var _share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../share/services/indexeddb.service */ 90657);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 48256);
/* harmony import */ var _site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../site/loading/loading.service */ 97230);
/* harmony import */ var _share_services_authV2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/services/authV2.service */ 50532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9183);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 5951);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 82798);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 11161);
/* harmony import */ var _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/loadmore/loadmore/loadmore.component */ 43716);























function QuizComponent_div_8_p_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " N\u1EBFu th\u1EA5y h\u1EEFu \u00EDch th\u00EC m\u1EDDi tui ly c\u00E0 ph\u00EA nha. (MB Bank - 479 579 679 ho\u1EB7c QR k\u1EBF b\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 46)(3, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "qr_code_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function QuizComponent_div_8_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r8.NoiDung);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](option_r8.NoiDung);
  }
}
function QuizComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "C\u00E0i \u0111\u1EB7t");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p")(5, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuizComponent_div_8_Template_mat_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.caidat.font = ctx_r9.caidat.font - 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "remove_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuizComponent_div_8_Template_mat_icon_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.caidat.font = ctx_r11.caidat.font + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p")(12, "mat-slide-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuizComponent_div_8_Template_mat_slide_toggle_change_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.caidat.tronCauHoi = !ctx_r12.caidat.tronCauHoi);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "C\u00E2u h\u1ECFi theo th\u1EE9 t\u1EF1 ng\u1EABu nhi\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p")(16, "mat-slide-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuizComponent_div_8_Template_mat_slide_toggle_change_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.caidat.xemDapAn = !ctx_r13.caidat.xemDapAn);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Hi\u1EC3n th\u1ECB \u0111\u00E1p \u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p")(20, "mat-slide-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuizComponent_div_8_Template_mat_slide_toggle_change_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.caidat.chiXemCauSai = !ctx_r14.caidat.chiXemCauSai);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Ch\u1EC9 xem c\u00E2u sai");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuizComponent_div_8_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r15.cauSai = [];
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.caidat.chiXemCauSai = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "X\u00F3a c\u00E2u sai");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, QuizComponent_div_8_p_26_Template, 6, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-form-field", 40)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Ch\u1ECDn nh\u00F3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function QuizComponent_div_8_Template_mat_select_valueChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.nhom = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, QuizComponent_div_8_mat_option_31_Template, 2, 2, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 43)(33, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuizComponent_div_8_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.luuCaiDat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" C\u1EE1 ch\u1EEF: ", ctx_r0.caidat == null ? null : ctx_r0.caidat.font, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.caidat == null ? null : ctx_r0.caidat.tronCauHoi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.caidat == null ? null : ctx_r0.caidat.xemDapAn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.caidat == null ? null : ctx_r0.caidat.chiXemCauSai);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" (", ctx_r0.cauSai == null ? null : ctx_r0.cauSai.length, " c\u00E2u) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showDonate());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.nhom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.catalogs);
  }
}
function QuizComponent_mat_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuizComponent_mat_icon_16_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function QuizComponent_mat_spinner_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner", 50);
  }
}
function QuizComponent_div_23_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 57);
  }
  if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", item_r20 == null ? null : item_r20.img, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", item_r20.CauHoi);
  }
}
const _c0 = function (a0) {
  return {
    "dapAnDung": a0
  };
};
function QuizComponent_div_23_p_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 58)(1, "mat-radio-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuizComponent_div_23_p_7_Template_mat_radio_button_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const i_r21 = ctx_r31.index;
      const item_r20 = ctx_r31.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.chonDapAn(i_r21, "A", item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const item_r20 = ctx_r33.$implicit;
    const i_r21 = ctx_r33.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx_r23.caidat.xemDapAn && item_r20.DapAnDung == "A"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r20.DapAn1, " ");
  }
}
function QuizComponent_div_23_p_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 58)(1, "mat-radio-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuizComponent_div_23_p_8_Template_mat_radio_button_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const i_r21 = ctx_r35.index;
      const item_r20 = ctx_r35.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.chonDapAn(i_r21, "B", item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const item_r20 = ctx_r37.$implicit;
    const i_r21 = ctx_r37.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx_r24.caidat.xemDapAn && item_r20.DapAnDung == "B"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r20.DapAn2, " ");
  }
}
function QuizComponent_div_23_p_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 58)(1, "mat-radio-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuizComponent_div_23_p_9_Template_mat_radio_button_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const i_r21 = ctx_r39.index;
      const item_r20 = ctx_r39.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r38.chonDapAn(i_r21, "C", item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const item_r20 = ctx_r41.$implicit;
    const i_r21 = ctx_r41.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx_r25.caidat.xemDapAn && item_r20.DapAnDung == "C"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r20.DapAn3, " ");
  }
}
function QuizComponent_div_23_p_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 58)(1, "mat-radio-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuizComponent_div_23_p_11_Template_mat_radio_button_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const i_r21 = ctx_r43.index;
      const item_r20 = ctx_r43.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r42.chonDapAn(i_r21, "D", item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const item_r20 = ctx_r45.$implicit;
    const i_r21 = ctx_r45.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx_r26.caidat.xemDapAn && item_r20.DapAnDung == "D"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r20.DapAn4, " ");
  }
}
function QuizComponent_div_23_p_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 58)(1, "mat-radio-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuizComponent_div_23_p_12_Template_mat_radio_button_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const i_r21 = ctx_r47.index;
      const item_r20 = ctx_r47.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r46.chonDapAn(i_r21, "E", item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const item_r20 = ctx_r49.$implicit;
    const i_r21 = ctx_r49.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx_r27.caidat.xemDapAn && item_r20.DapAnDung == "E"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r20.DapAn5, " ");
  }
}
function QuizComponent_div_23_p_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 58)(1, "mat-radio-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuizComponent_div_23_p_13_Template_mat_radio_button_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const i_r21 = ctx_r51.index;
      const item_r20 = ctx_r51.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r50.chonDapAn(i_r21, "F", item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const item_r20 = ctx_r53.$implicit;
    const i_r21 = ctx_r53.index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx_r28.caidat.xemDapAn && item_r20.DapAnDung == "F"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r20.DapAn6, " ");
  }
}
function QuizComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QuizComponent_div_23_img_5_Template, 1, 2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QuizComponent_div_23_p_7_Template, 3, 5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, QuizComponent_div_23_p_8_Template, 3, 5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, QuizComponent_div_23_p_9_Template, 3, 5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, QuizComponent_div_23_p_11_Template, 3, 5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, QuizComponent_div_23_p_12_Template, 3, 5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, QuizComponent_div_23_p_13_Template, 3, 5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" C\u00E2u s\u1ED1 ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 11, i_r21 + 1), ": ", item_r20.CauHoi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r20 == null ? null : item_r20.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r20.DapAn1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r20.DapAn2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r20.DapAn3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r20.DapAn4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r20.DapAn5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r20.DapAn6);
  }
}
function QuizComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuizComponent_button_34_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r57);
      const i_r55 = restoredCtx.index;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r56.scrollTo(i_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r55 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", ctx_r4.daLam[i_r55] == true ? "primary" : ctx_r4.daLam[i_r55] == false ? "warn" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r55 + 1, "");
  }
}
function QuizComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 23)(5, "div", 0)(6, "div", 64)(7, "a", 65)(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " T\u1EA3i xu\u1ED1ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("href", "https://api.vietqr.io/MBBank/479579679/25000/USER_ID ", ctx_r5.user._id.slice(0, 6), " Donate 4la/qr_only.jpg?accountName=TRAN%20DAI%20THUC", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "https://api.vietqr.io/MBBank/479579679/25000/USER_ID ", ctx_r5.user._id.slice(0, 6), " Donate%204la/qr_only.jpg?accountName=TRAN%20DAI%20THUC?", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
class QuizComponent {
  constructor(plus, fb, httpSV, idbSV, toastrSV, loadSV, authSV) {
    this.plus = plus;
    this.fb = fb;
    this.httpSV = httpSV;
    this.idbSV = idbSV;
    this.toastrSV = toastrSV;
    this.loadSV = loadSV;
    this.authSV = authSV;
    this.title = 'Học trắc nghiệm';
    this.dbName = 'trac-nghiem';
    this.api = 'trac-nghiem';
    this.db = null;
    this.items = [];
    this.allitems = [];
    this.selectedItem = null;
    this.sheetId = '11AAuqROk6K5O_MnBDkQ0P1HNs45loZMe-QaLKt3CgbQ';
    this.sheetName = 'Data';
    this.sheetCatalogs = 'catalogs';
    this.notify = '';
    this.main = this.fb.group({
      font: [16],
      cauSai: [false],
      chiXemCauSai: [false],
      tronCauHoi: [false],
      xemDapAn: [false],
      nhom: []
    });
    this.searchForm = this.fb.group({
      input: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4)]]
    });
    this.daLam = [];
    this.cauSai = [];
    this.spin = false;
    this.allowLoadmore = true;
    this.expanded = false;
  }
  ngOnDestroy() {
    console.log('Destroy', this.api);
    this.luuCaiDat();
  }
  ngOnInit() {
    this.plus.setTiTle(this.title);
    this.authSV.user.subscribe(user => {
      this.user = user;
    });
    this.idbSV.IDB_InitDB(this.dbName).subscribe(db => {
      this.db = db;
      this.xemCaiDat();
      this.getCatalogs();
    });
  }
  xemCaiDat() {
    this.caidat = JSON.parse(localStorage.getItem('caidat-' + this.api));
    if (this.caidat == null) {
      const body = {
        nhom: {
          Nhom: 'VHDN',
          NoiDung: 'Văn hóa doanh nghiệp',
          GiaTri: 1
        },
        cauSai: [],
        chiXemCauSai: false,
        font: 16,
        tronCauHoi: false,
        xemDapAn: true
      };
      this.caidat = body;
    } else {
      this.nhom = this.caidat.nhom.NoiDung;
      this.catalog = this.caidat.nhom;
      this.notify = this.caidat.nhom.Nhom;
      this.filterData();
    }
  }
  getCatalogs() {
    const catalogs = JSON.parse(localStorage.getItem('BoDe'));
    if (catalogs) {
      this.catalogs = catalogs;
    }
    const body = {
      sheetId: this.sheetId,
      sheetName: this.sheetCatalogs
    };
    this.httpSV.post('sheet', body).subscribe(res => {
      if (res) {
        this.catalogs = res.data;
        localStorage.setItem('BoDe', JSON.stringify(res.data));
        this.spin = false;
      }
    });
    this.getDataApi();
  }
  getDataApi() {
    const body = {
      sheetId: this.sheetId,
      sheetName: this.sheetName
    };
    this.httpSV.post('sheet', body).subscribe({
      next: res => {
        const body = res.data;
        const data = [];
        for (let i = 0; i < body.length; i++) {
          const item = body[i];
          item.status = 1;
          data.push(item);
        }
        this.idbSV.IDB_DB_ClearCollection(this.db, this.api);
        this.idbSV.IDB_DB_Add(this.db, this.api, data);
        if (data.length == 0) return;
      }
    });
  }
  luuCaiDat() {
    this.expanded = false;
    const bode = this.catalogs.filter(el => el.NoiDung == this.nhom);
    this.caidat.nhom = bode[0];
    this.notify = bode[0].Nhom;
    localStorage.setItem('caidat-' + this.api, JSON.stringify(this.caidat));
    console.log(this.caidat);
    this.filterData();
  }
  chonDapAn(causo, chon, item) {
    if (!item.DapAnDung) return;
    this.daLam[causo] = chon == item.DapAnDung;
    if (chon == item.DapAnDung) {
      this.plus.alertSuccess('Chính xác');
    } else {
      this.cauSai.push(item._id);
      this.plus.alertError('Không chính xác');
      this.plus.alertMatSnackBar(this.items[causo].DapAnFull, 30);
    }
    this.cauSai = [...new Set(this.cauSai)];
    localStorage.setItem('cauSai', JSON.stringify(this.cauSai));
  }
  chonNhom(evt) {
    console.log(evt);
    this.catalog = evt;
    this.caidat.nhom = evt;
    this.nhom = evt.NoiDung;
    this.notify = evt.Nhom;
  }
  filterData() {
    this.allowLoadmore = true;
    this.idbSV.IDB_DB_GetAllByIndexKey(this.db, this.api, 'Nhom', "=", this.nhom).then(res => {
      if (res.length > 0) {
        if (this.caidat.chiXemCauSai) {
          return this.xemCauSai();
        }
        this.allitems = res;
        if (this.caidat.tronCauHoi) {
          const data = this.plus.shuffleArr(res);
          this.allitems = data;
          this.items = data.slice(0, 20);
        } else {
          this.allitems = res;
          this.items = res.slice(0, 20);
        }
      } else {
        this.getCatalogs();
      }
    });
  }
  pushData(evt) {
    console.log(evt);
    if (evt && this.allowLoadmore) {
      this.loadSV.load('pushData');
      const count = this.items.length;
      const pushItems = this.allitems.slice(count, count + 20);
      this.items = this.items.concat(pushItems);
      this.loadSV.loaded('pushData');
    }
  }
  xemCauSai() {
    this.allowLoadmore = false;
    this.cauSai = JSON.parse(localStorage.getItem('cauSai'));
    this.items = [];
    this.idbSV.IDB_DB_GetAllByIndexKey(this.db, this.api, 'Nhom', "=", this.nhom).then(data => {
      const dataok = [];
      for (let i = 0; i < data.length; i++) {
        const el = data[i];
        if (this.cauSai.includes(el._id)) {
          dataok.push(el);
        }
      }
      this.items = dataok;
    });
  }
  search() {
    const txt = this.searchForm.value;
    this.allowLoadmore = false;
    if (this.searchForm.valid) {
      console.log(txt);
      this.spin = true;
      const x = [];
      this.idbSV.IDB_DB_GetAll(this.db, this.api).subscribe(res => {
        console.log('IDB_DB_GetAll()', res.length);
        const inputText = this.plus.removeAccents(txt.input);
        if (res.length == 0) this.plus.alertMatSnackBar('Không còn kết quả phù hợp');
        for (let i = 0; i < res.length; i++) {
          const el = JSON.stringify(res[i]);
          const key = this.plus.removeAccents(el);
          if (key.includes(inputText)) {
            x.push(res[i]);
          }
        }
        this.items = x;
        if (x.length == 0) this.plus.alertMatSnackBar('Không còn kết quả phù hợp');
        this.spin = false;
      });
    }
    ;
  }
  scrollTo(id) {
    this.plus.scrollTo(`${+id - 1}`, false);
  }
  reload() {
    this.authSV.reload();
  }
  checkPer(level, api = this.api) {
    return this.authSV.checkPer(api, level);
  }
  showDonate() {
    return !this.authSV.checkPer(this.api, 2);
  }
  static {
    this.ɵfac = function QuizComponent_Factory(t) {
      return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_share_services_plus_service__WEBPACK_IMPORTED_MODULE_1__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_2__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_share_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_3__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_5__.AuthServiceV2));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: QuizComponent,
      selectors: [["app-quiz"]],
      decls: 54,
      vars: 14,
      consts: [[1, "container-fluid"], [1, "row"], [1, "float-left"], [3, "expanded"], [3, "click"], ["color", "accent", "mat-raised-button", ""], ["class", "list", 4, "ngIf"], [1, "topRow"], ["mat-raised-button", "", "data-bs-toggle", "modal", "data-bs-target", "#DANHSACH"], [3, "formGroup"], ["matInput", "", "id", "search-api", "formControlName", "input", "placeholder", "T\u00ECm ki\u1EBFm (F2)", 3, "keyup.enter"], ["matSuffix", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "text-center", "text-danger"], [1, "center"], ["mode", "indeterminate", "color", "warn", "diameter", "50", 4, "ngIf"], [1, "col"], ["class", "tn", 4, "ngFor", "ngForOf"], [3, "percentLoad", "emit"], ["hidden", "", "id", "modalDANHSACH", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#DANHSACH", 1, "btn", "btn-primary"], ["id", "DANHSACH", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-body"], [1, "list", "text-center"], ["data-bs-dismiss", "modal", "mat-mini-fab", "", 3, "color", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["color", "primary", "id", "closeModalDANHSACH", "mat-raised-button", "", "data-bs-dismiss", "modal", "aria-label", "Close", 3, "disabled"], ["hidden", "", "id", "modalSETTING", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#SETTING", 1, "btn", "btn-primary"], ["id", "SETTING", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["color", "primary", "id", "closeModalSETTING", "mat-raised-button", "", "data-bs-dismiss", "modal", "aria-label", "Close", 3, "disabled"], ["class", "modal fade", "id", "qrcode", "tabindex", "-1", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "role", "dialog", "aria-labelledby", "modelTitleId", "aria-hidden", "true", 4, "ngIf"], [1, "list"], [2, "color", "blue"], ["color", "primary", 3, "click"], ["color", "warn", 3, "checked", "change"], ["mat-raised-button", "", 3, "click"], ["class", "font-blue", 4, "ngIf"], ["appearance", "outline"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-center"], ["color", "warn", "mat-raised-button", "", "matTooltip", "L\u01B0u", 3, "click"], [1, "font-blue"], ["type", "button", "id", "qrcodeModal", "data-bs-toggle", "modal", "data-bs-target", "#qrcode", "matTooltip", "Xem m\u00E3 QR thanh to\u00E1n", 1, "btn"], ["color", "warn"], [3, "value"], ["matSuffix", "", "color", "warn", 3, "click"], ["mode", "indeterminate", "color", "warn", "diameter", "50"], [1, "tn"], [1, "cauhoi"], ["class", "img-fluid rounded mx-auto d-block", 3, "src", "alt", 4, "ngIf"], [1, "font-justify"], [3, "ngClass", 4, "ngIf"], [3, "id"], [1, "img-fluid", "rounded", "mx-auto", "d-block", 3, "src", "alt"], [3, "ngClass"], [1, "radio-button", 3, "name", "change"], ["data-bs-dismiss", "modal", "mat-mini-fab", "", 3, "color", "click"], ["id", "qrcode", "tabindex", "-1", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "role", "dialog", "aria-labelledby", "modelTitleId", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "text-center"], [1, "card", "text-white", "bg-primary"], ["target", "_blank", "download", "", 1, "text-white", "text-bolder", 3, "href"], [1, "card-img-top", 3, "src"]],
      template: function QuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-expansion-panel", 3)(4, "mat-expansion-panel-header", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuizComponent_Template_mat_expansion_panel_header_click_4_listener() {
            return ctx.expanded = !ctx.expanded;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 5)(6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, QuizComponent_div_8_Template, 36, 8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7)(10, "button", 8)(11, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field", 9)(15, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function QuizComponent_Template_input_keyup_enter_15_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, QuizComponent_mat_icon_16_Template, 2, 0, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, QuizComponent_mat_spinner_20_Template, 1, 0, "mat-spinner", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 1)(22, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, QuizComponent_div_23_Template, 14, 13, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "app-loadmore", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("emit", function QuizComponent_Template_app_loadmore_emit_24_listener($event) {
            return ctx.pushData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " Launch static backdrop modal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 19)(28, "div", 20)(29, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 23)(32, "div", 0)(33, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, QuizComponent_button_34_Template, 2, 2, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 26)(36, "button", 27)(37, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Launch static backdrop modal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 29)(42, "div", 20)(43, "div", 21)(44, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "h5", 30)(46, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 26)(50, "button", 32)(51, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, QuizComponent_div_53_Template, 11, 2, "div", 33);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", ctx.expanded);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.catalogs == null ? null : ctx.catalogs.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.searchForm.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.notify);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.spin);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("font-size", ctx.caidat == null ? null : ctx.caidat.font, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("percentLoad", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.main.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.main.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionPanelHeader, _share_loadmore_loadmore_loadmore_component__WEBPACK_IMPORTED_MODULE_6__.LoadmoreComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe],
      styles: [".list[_ngcontent-%COMP%]{\n  border-left: solid blue;\n  border-bottom: solid blue;\n  padding-left: 2rem ;\n}\n\n.radio-button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-top: 10px;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  -moz-tab-size: 4;\n       tab-size: 4;\n}\n\n.cauhoi[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 5px;\n}\n\n.chon[_ngcontent-%COMP%]{\n  margin: 5px !important;\n}\n\n.topRow[_ngcontent-%COMP%]{\n  position: fixed;\n  top: 50px;\n  right: 15px;\n  z-index: 98;\n  opacity: 0.8;\n}\n\n.mat-raised-button[_ngcontent-%COMP%]{\n  color: brown;\n}\n\n.topRow[_ngcontent-%COMP%]:hover{\n  opacity: 1;\n  color: blue !important;\n}\n\n.dapAnDung[_ngcontent-%COMP%]{\n  color: blue;\n  font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}"],
      data: {
        animation: [_share_animate__WEBPACK_IMPORTED_MODULE_0__.slideX, _share_animate__WEBPACK_IMPORTED_MODULE_0__.slideIn]
      }
    });
  }
}
const cataogs = [{
  "NoiDung": "Dịch vụ khách hàng Bậc 1,2,3",
  "Nhom": "DVKH",
  "GiaTri": 120
}, {
  "NoiDung": "Dịch vụ khách hàng Bậc 4, 5",
  "Nhom": "DVKH",
  "GiaTri": 120
}, {
  "NoiDung": "Dịch vụ khách hàng Bậc 6, 7",
  "Nhom": "DVKH",
  "GiaTri": 120
}, {
  "NoiDung": "Ghi chỉ số, lập hóa đơn Bậc 1,2,3",
  "Nhom": "GCS",
  "GiaTri": 120
}, {
  "NoiDung": "Ghi chỉ số, lập hóa đơn Bậc 4, 5",
  "Nhom": "GCS",
  "GiaTri": 120
}, {
  "NoiDung": "Ghi chỉ số, lập hóa đơn Bậc 6, 7",
  "Nhom": "GCS",
  "GiaTri": 120
}, {
  "NoiDung": "KT lưới điện bậc 2",
  "Nhom": "KTD2",
  "GiaTri": 100
}, {
  "NoiDung": "KT lưới điện bậc 3",
  "Nhom": "KTD3",
  "GiaTri": 80
}, {
  "NoiDung": "KT lưới điện bậc 4",
  "Nhom": "KTD4",
  "GiaTri": 80
}, {
  "NoiDung": "KT lưới điện bậc 5",
  "Nhom": "KTD5",
  "GiaTri": 67
}, {
  "NoiDung": "KT lưới điện bậc 6",
  "Nhom": "KTD6",
  "GiaTri": 86
}, {
  "NoiDung": "KT lưới điện bậc 7",
  "Nhom": "KTD7",
  "GiaTri": 67
}, {
  "NoiDung": "Kỹ thuật đo lường Bậc 1,2,3",
  "Nhom": "KTDL",
  "GiaTri": 70
}, {
  "NoiDung": "Kỹ thuật đo lường Bậc 4, 5",
  "Nhom": "KTDL",
  "GiaTri": 70
}, {
  "NoiDung": "Kỹ thuật đo lường Bậc 6, 7",
  "Nhom": "KTDL",
  "GiaTri": 70
}, {
  "NoiDung": "Quy định hệ thống đo đếm điện Bậc 1,2,3",
  "Nhom": "QDHTDD",
  "GiaTri": 27
}, {
  "NoiDung": "Quy định hệ thống đo đếm điện Bậc 4, 5",
  "Nhom": "QDHTDD",
  "GiaTri": 27
}, {
  "NoiDung": "Quy định hệ thống đo đếm điện Bậc 6, 7",
  "Nhom": "QDHTDD",
  "GiaTri": 27
}, {
  "NoiDung": "Ký kết, quản lý HĐMBĐ Bậc 1,2,3",
  "Nhom": "QLHD",
  "GiaTri": 120
}, {
  "NoiDung": "Ký kết, quản lý HĐMBĐ Bậc 4, 5",
  "Nhom": "QLHD",
  "GiaTri": 120
}, {
  "NoiDung": "Ký kết, quản lý HĐMBĐ Bậc 6, 7",
  "Nhom": "QLHD",
  "GiaTri": 120
}, {
  "NoiDung": "Quản lý hệ thống đo đếm Bậc 1,2,3",
  "Nhom": "QLHTDD",
  "GiaTri": 40
}, {
  "NoiDung": "Quản lý hệ thống đo đếm Bậc 4, 5",
  "Nhom": "QLHTDD",
  "GiaTri": 40
}, {
  "NoiDung": "Quản lý hệ thống đo đếm Bậc 6, 7",
  "Nhom": "QLHTDD",
  "GiaTri": 40
}, {
  "NoiDung": "Quản lý sửa chữa lưới 2",
  "Nhom": "QLSC2",
  "GiaTri": 50
}, {
  "NoiDung": "Quản lý sửa chữa lưới 3",
  "Nhom": "QLSC3",
  "GiaTri": 86
}, {
  "NoiDung": "Quản lý sửa chữa lưới 4",
  "Nhom": "QLSC4",
  "GiaTri": 66
}, {
  "NoiDung": "Quản lý sửa chữa lưới 5",
  "Nhom": "QLSC5",
  "GiaTri": 103
}, {
  "NoiDung": "Quản lý sửa chữa lưới 6",
  "Nhom": "QLSC6",
  "GiaTri": 75
}, {
  "NoiDung": "Quản lý sửa chữa lưới 7",
  "Nhom": "QLSC7",
  "GiaTri": 71
}, {
  "NoiDung": "Thu ngân viên Bậc 1,2,3",
  "Nhom": "ThuNgan",
  "GiaTri": 120
}, {
  "NoiDung": "Thu ngân viên Bậc 4, 5",
  "Nhom": "ThuNgan",
  "GiaTri": 120
}, {
  "NoiDung": "Thu ngân viên Bậc 6, 7",
  "Nhom": "ThuNgan",
  "GiaTri": 120
}, {
  "NoiDung": "Vật tư",
  "Nhom": "VatTu",
  "GiaTri": 0
}, {
  "NoiDung": "Văn hóa doanh nghiệp",
  "Nhom": "VHDN",
  "GiaTri": 70
}, {
  "NoiDung": "Quản lý vận hành TBA 110kV",
  "Nhom": "VHTBA",
  "GiaTri": 136
}, {
  "NoiDung": "An toàn lao động nhóm 4",
  "Nhom": "AT4",
  "GiaTri": 53
}];

/***/ }),

/***/ 96903:
/*!*************************************!*\
  !*** ./src/app/quiz/quiz.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizModule: () => (/* binding */ QuizModule)
/* harmony export */ });
/* harmony import */ var _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../share/drop-file/drop-file.module */ 96115);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../share/share.module */ 64039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-routing.module */ 20094);
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz.component */ 91400);
/* harmony import */ var _share_chart_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/chart/chart.module */ 58531);
/* harmony import */ var _share_datalist_datalist_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/datalist/datalist.module */ 30049);
/* harmony import */ var _share_import_excel_import_excel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/import-excel/import-excel.module */ 4247);
/* harmony import */ var _share_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share/material/material.module */ 343);
/* harmony import */ var _share_search_api_search_api_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/search-api/search-api.module */ 73599);
/* harmony import */ var _elearning_elearning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elearning/elearning.component */ 16532);
/* harmony import */ var _convert_quiz_convert_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./convert-quiz/convert-quiz.component */ 42840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);













class QuizModule {
  static {
    this.ɵfac = function QuizModule_Factory(t) {
      return new (t || QuizModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: QuizModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__.QuizRoutingModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _share_material_material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule, _share_search_api_search_api_module__WEBPACK_IMPORTED_MODULE_8__.SearchApiModule, _share_datalist_datalist_module__WEBPACK_IMPORTED_MODULE_5__.DatalistModule, _share_import_excel_import_excel_module__WEBPACK_IMPORTED_MODULE_6__.ImportExcelModule, _share_chart_chart_module__WEBPACK_IMPORTED_MODULE_4__.ChartModules, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_0__.DropFileModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](QuizModule, {
    declarations: [_quiz_component__WEBPACK_IMPORTED_MODULE_3__.QuizComponent, _elearning_elearning_component__WEBPACK_IMPORTED_MODULE_9__.ElearningComponent, _convert_quiz_convert_quiz_component__WEBPACK_IMPORTED_MODULE_10__.ConvertQuizComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__.QuizRoutingModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _share_material_material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule, _share_search_api_search_api_module__WEBPACK_IMPORTED_MODULE_8__.SearchApiModule, _share_datalist_datalist_module__WEBPACK_IMPORTED_MODULE_5__.DatalistModule, _share_import_excel_import_excel_module__WEBPACK_IMPORTED_MODULE_6__.ImportExcelModule, _share_chart_chart_module__WEBPACK_IMPORTED_MODULE_4__.ChartModules, _share_drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_0__.DropFileModule]
  });
})();

/***/ }),

/***/ 67081:
/*!***********************************************************************************!*\
  !*** ./src/app/share/datalist/data-list-index-db/data-list-index-db.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataListIndexDbComponent: () => (/* binding */ DataListIndexDbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _services_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/indexeddb.service */ 90657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60177);




function DataListIndexDbComponent_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "option", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", item_r1.NoiDung);
  }
}
class DataListIndexDbComponent {
  constructor(plus, idbSV) {
    this.plus = plus;
    this.idbSV = idbSV;
    this.nhom = '';
    this.api = '';
    this.dbName = '';
    this.key = '';
    this.db = null;
    this.items = [];
  }
  ngOnInit() {
    this.plus.IDB_InitDB(this.dbName).subscribe(db => {
      this.db = db;
      this.idbSV.IDB_DB_GetAll(db, this.api).subscribe(cats => {
        const data = [];
        cats.forEach(el => {
          if (el['Nhom'] === this.nhom) {
            return data.push(el);
          }
        });
        this.items = this.plus.sortArr(data, 'NoiDung');
      });
    });
  }
  static {
    this.ɵfac = function DataListIndexDbComponent_Factory(t) {
      return new (t || DataListIndexDbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_0__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__.IndexeddbService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DataListIndexDbComponent,
      selectors: [["app-data-list-index-db"]],
      inputs: {
        nhom: "nhom",
        api: "api",
        dbName: "dbName",
        key: "key"
      },
      decls: 2,
      vars: 2,
      consts: [[3, "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function DataListIndexDbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "datalist", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DataListIndexDbComponent_option_1_Template, 1, 1, "option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx.nhom);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf]
    });
  }
}

/***/ }),

/***/ 30049:
/*!***************************************************!*\
  !*** ./src/app/share/datalist/datalist.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatalistModule: () => (/* binding */ DatalistModule)
/* harmony export */ });
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../material/material.module */ 343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _datalist_datalist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalist/datalist.component */ 39379);
/* harmony import */ var _data_list_index_db_data_list_index_db_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-list-index-db/data-list-index-db.component */ 67081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);





class DatalistModule {
  static {
    this.ɵfac = function DatalistModule_Factory(t) {
      return new (t || DatalistModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DatalistModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DatalistModule, {
    declarations: [_datalist_datalist_component__WEBPACK_IMPORTED_MODULE_1__.DatalistComponent, _data_list_index_db_data_list_index_db_component__WEBPACK_IMPORTED_MODULE_2__.DataListIndexDbComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule],
    exports: [_datalist_datalist_component__WEBPACK_IMPORTED_MODULE_1__.DatalistComponent]
  });
})();

/***/ }),

/***/ 39379:
/*!***************************************************************!*\
  !*** ./src/app/share/datalist/datalist/datalist.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatalistComponent: () => (/* binding */ DatalistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _services_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/indexeddb.service */ 90657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60177);




function DatalistComponent_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", item_r1.GiaTri);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.NoiDung);
  }
}
class DatalistComponent {
  constructor(plus, idbSV) {
    this.plus = plus;
    this.idbSV = idbSV;
    this.Nhom = '';
    this.FormName = '';
    this.db = null;
    this.dbName = 'app';
    this.api = 'catalog';
    this.catalogs = [];
  }
  ngOnInit() {
    this.plus.IDB_InitDB('app').subscribe(db => {
      this.db = db;
      this.idbSV.IDB_DB_GetAll(db, this.api).subscribe(cats => {
        const data = [];
        cats.forEach(el => {
          if (el['Nhom'] === this.Nhom) {
            return data.push(el);
          }
        });
        this.catalogs = this.plus.sortArr(data, 'NoiDung');
      });
    });
  }
  static {
    this.ɵfac = function DatalistComponent_Factory(t) {
      return new (t || DatalistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_0__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__.IndexeddbService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DatalistComponent,
      selectors: [["app-datalist"]],
      inputs: {
        Nhom: "Nhom",
        FormName: "FormName"
      },
      decls: 2,
      vars: 1,
      consts: [["name", "nhom", "id", "nhom", "formControlName", "NhomHang", 1, "custom-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function DatalistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DatalistComponent_option_1_Template, 2, 2, "option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.catalogs);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
      styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"]
    });
  }
}

/***/ })

}]);