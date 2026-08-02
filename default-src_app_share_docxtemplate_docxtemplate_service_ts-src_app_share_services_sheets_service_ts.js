(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["default-src_app_share_docxtemplate_docxtemplate_service_ts-src_app_share_services_sheets_service_ts"],{

/***/ 41982:
/*!************************************************************!*\
  !*** ./src/app/share/docxtemplate/docxtemplate.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocxtemplateService: () => (/* binding */ DocxtemplateService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var read_vn_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! read-vn-number */ 67124);
/* harmony import */ var docxtemplater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! docxtemplater */ 55986);
/* harmony import */ var docxtemplater__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(docxtemplater__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pizzip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pizzip */ 85124);
/* harmony import */ var pizzip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pizzip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pizzip_utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pizzip/utils/index.js */ 53824);
/* harmony import */ var pizzip_utils_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pizzip_utils_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ 2578);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jszip */ 77247);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ 62288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_plus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/plus.service */ 22014);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/excel.service */ 53789);













function loadFile(url, callback) {
  pizzip_utils_index_js__WEBPACK_IMPORTED_MODULE_4___default().getBinaryContent(url, callback);
}
class DocxtemplateService {
  constructor(plus, loadSV, excelSV) {
    this.plus = plus;
    this.loadSV = loadSV;
    this.excelSV = excelSV;
    this.lastKey = '';
    this.options = {
      parser: function (tag) {
        this.lastKey = tag;
        let changeCase = "";
        const lowerRegex = /\b.\|.\blower/;
        if (lowerRegex.test(tag)) {
          changeCase = "lower";
          tag = tag.toString().replace(lowerRegex, "");
        }
        const upperRegex = /\b.\|.\bupper/;
        if (upperRegex.test(tag)) {
          changeCase = "upper";
          tag = tag.toString().replace(upperRegex, "");
        }
        const titleRegex = /\b.\|.\btitle/;
        if (titleRegex.test(tag)) {
          changeCase = "title";
          tag = tag.toString().replace(titleRegex, "");
        }
        const DDRegex = /\b.\|.\bdd/;
        if (DDRegex.test(tag)) {
          changeCase = "dd";
          tag = tag.toString().replace(DDRegex, "");
        }
        const timeRegex = /\b.\|.\btime/;
        if (timeRegex.test(tag)) {
          changeCase = "time";
          tag = tag.toString().replace(timeRegex, "");
        }
        const MMRegex = /\b.\|.\bmm/;
        if (MMRegex.test(tag)) {
          changeCase = "mm";
          tag = tag.toString().replace(MMRegex, "");
        }
        const YYYYRegex = /\b.\|.\byyyy/;
        if (YYYYRegex.test(tag)) {
          changeCase = "yyyy";
          tag = tag.toString().replace(YYYYRegex, "");
        }
        const dmyRegex = /\b.\|.\bdmy/;
        if (dmyRegex.test(tag)) {
          changeCase = "dmy";
          tag = tag.toString().replace(dmyRegex, "").trim();
        }
        const dmytRegex = /\b.\|.\bdt/;
        if (dmytRegex.test(tag)) {
          changeCase = "dt";
          tag = tag.toString().replace(dmytRegex, "").trim();
        }
        const numberRegex = /\b.\|.\bnumber/;
        if (numberRegex.test(tag)) {
          changeCase = "number";
          tag = tag.toString().replace(numberRegex, "");
        }
        const vndRegex = /\b.\|.\bvnd/;
        if (vndRegex.test(tag)) {
          changeCase = "vnd";
          tag = tag.toString().replace(vndRegex, "");
        }
        return {
          get: function (scope) {
            let result = null;
            tag == "." ? result = scope : result = scope[tag.trim()];
            if (result == undefined || result == null) return '          ';
            if (typeof result == 'object') {
              const datex = new Date(result);
              const date = moment__WEBPACK_IMPORTED_MODULE_1___default()(datex).add(1, 'm').toDate();
              if (!isNaN(date.getDate())) {
                switch (changeCase.trim()) {
                  case "dd":
                    result = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("DD");
                    break;
                  case "mm":
                    result = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("MM");
                    break;
                  case "yyyy":
                    result = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("YYYY");
                    break;
                  case "time":
                    result = `${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("HH")} giờ ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("mm")} phút`;
                    break;
                  case "dmy":
                    result = `ngày ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("DD")} tháng ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("MM")} năm ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("YYYY")}`;
                    break;
                  case "dt":
                    result = `${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("HH")} giờ ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("mm")} phút ngày ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("DD")} tháng ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("MM")} năm ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("YYYY")}`;
                    break;
                  case "number":
                    result = new Intl.NumberFormat('it-IT').format(+result);
                    break;
                  default:
                    result = `${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("DD/MM/YYYY")}`;
                }
                return result;
              } else {
                return result;
              }
            } else {
              const date = moment__WEBPACK_IMPORTED_MODULE_1___default()(result, 'DD/MM/YYYY HH:mm').add(1, 'm').toDate();
              switch (changeCase) {
                case "dd":
                  result = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("DD");
                  break;
                case "mm":
                  result = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("MM");
                  break;
                case "yyyy":
                  result = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("YYYY");
                  break;
                case "time":
                  result = `${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("HH")} giờ ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("mm")} phút`;
                  break;
                case "dmy":
                  result = `ngày ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("DD")} tháng ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("MM")} năm ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("YYYY")}`;
                  break;
                case "dt":
                  result = `${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("HH")} giờ ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("mm")} phút ngày ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("DD")} tháng ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("MM")} năm ${moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("YYYY")}`;
                  break;
                case "upper":
                  result = result.toUpperCase();
                  break;
                case "lower":
                  result = result.toLowerCase();
                  break;
                case "number":
                  {
                    const num = Number(result?.toString().replace(/\./g, '').replace(/,/g, '.') ?? NaN);
                    result = Number.isInteger(num) ? new Intl.NumberFormat('it-IT').format(num) : result;
                    break;
                  }
                case "title":
                  result = result.substring(0, 1).toUpperCase() + result.substring(1);
                  break;
                case "vnd":
                  {
                    const parsed = Number(result?.toString().replace(/\./g, '').replace(/,/g, '.') ?? NaN);
                    if (!isNaN(parsed)) {
                      const vnd = (0,read_vn_number__WEBPACK_IMPORTED_MODULE_10__["default"])(Math.floor(parsed)) + ' đồng';
                      result = vnd.substring(0, 1).toUpperCase() + vnd.substring(1);
                    } else {
                      result = `          `;
                    }
                    break;
                  }
                default:
                  result = `${result}`;
              }
              return `${result}`;
            }
          }
        };
      },
      paragraphLoop: true,
      linebreaks: false
    };
  }
  fileToJsonArrayByKey(file, convertDate = false, dateFormat = 'DD/MM/YYYY', readSheets = 30, rawNumbers = true) {
    return new Promise(resolve => {
      const output = {};
      this.loadSV.load('toJsonArray');
      if (!(file == undefined || file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type == 'application/vnd.ms-excel')) return this.plus.alertError('Không phải file excel');
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = e => {
        const bstr = e.target.result;
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_11__.read(bstr, {
          type: 'binary',
          cellText: false,
          cellDates: true
        });
        const sheets = wb.SheetNames;
        for (let i = 0; i < (readSheets < sheets.length ? readSheets : sheets.length); i++) {
          const wsname = sheets[i];
          const ws = wb.Sheets[wsname];
          const data = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.sheet_to_json(ws, {
            defval: '',
            header: 1,
            raw: convertDate,
            dateNF: dateFormat,
            rawNumbers: rawNumbers
          });
          if (i == 0) {
            output['MainSheet'] = this.excelSV.convertJSonByX(data);
          } else {
            output[`${wsname}`] = this.excelSV.convertJSon(data);
          }
          resolve(output);
          this.loadSV.loaded('toJsonArray');
        }
        ;
      };
    });
  }
  generateStepFile(obj, wordFile, fileName) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loadSV.load('generateStepFile');
      for (let i = 0; i < obj['_Merge'].length; i++) {
        const xs = Object.assign(obj['_Merge'][i], obj);
        delete xs['_Merge'];
        const fileSub = xs['TenFile'] ? `-` + xs['TenFile'] : obj['_Merge'].length == 1 ? '' : i;
        console.log(xs);
        try {
          const zip = new (pizzip__WEBPACK_IMPORTED_MODULE_3___default())(wordFile);
          const doc = new (docxtemplater__WEBPACK_IMPORTED_MODULE_2___default())(zip, _this.options).setData(xs);
          doc.render();
          const out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          });
          console.log(out);
          (0,file_saver__WEBPACK_IMPORTED_MODULE_5__.saveAs)(out, moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now()).format("yyMMDD") + `${fileSub}-${fileName}`);
          yield _this.plus.sleep(1500);
        } catch (error) {
          console.log(error);
          _this.plus.alertError('Vui lòng kiểm tra lại cấu hình file word');
        }
      }
      _this.loadSV.loaded('generateStepFile');
    })();
  }
  generateZipFile(obj, wordFile, fileName) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loadSV.load('generateZipFile');
      console.log(obj);
      const zip = new (jszip__WEBPACK_IMPORTED_MODULE_6___default())();
      const img = zip.folder("");
      const name = fileName + '.zip';
      for (let i = 0; i < obj['_Merge'].length; i++) {
        const xs = Object.assign(obj['_Merge'][i], obj);
        const fileSub = xs['TenFile'] ? xs['TenFile'] + '-' : obj['_Merge'].length == 1 ? '' : i + '-';
        delete xs['_Merge'];
        console.log(xs);
        try {
          const zip = new (pizzip__WEBPACK_IMPORTED_MODULE_3___default())(wordFile);
          const doc = new (docxtemplater__WEBPACK_IMPORTED_MODULE_2___default())(zip, _this2.options).setData(xs);
          doc.render();
          const out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          });
          img.file(fileSub + fileName, out);
        } catch (error) {
          console.log(error);
          _this2.plus.alertError('Vui lòng kiểm tra lại cấu hình file word');
        }
      }
      zip.generateAsync({
        type: 'blob'
      }).then(content => {
        if (content) {
          console.log(content);
          (0,file_saver__WEBPACK_IMPORTED_MODULE_5__.saveAs)(content, name);
        }
      });
      _this2.loadSV.loaded('generateZipFile');
    })();
  }
  generateMerge(obj, wordFile, fileName) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loadSV.load('generateMerge');
      const data = [];
      for (let i = 0; i < obj['_Merge'].length; i++) {
        const xs = Object.assign(obj['_Merge'][i], obj);
        delete xs['_Merge'];
        data.push(xs);
      }
      const merge = {
        merge: data
      };
      try {
        const subName = obj['TenFile'] ? obj['TenFile'] : '';
        const zip = new (pizzip__WEBPACK_IMPORTED_MODULE_3___default())(wordFile);
        const doc = new (docxtemplater__WEBPACK_IMPORTED_MODULE_2___default())(zip, _this3.options).setData(merge);
        doc.render();
        const out = doc.getZip().generate({
          type: "blob",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });
        yield _this3.plus.sleep(500).then(() => {
          (0,file_saver__WEBPACK_IMPORTED_MODULE_5__.saveAs)(out, moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now()).format("YYMMDD") + `-${subName + fileName}`);
        });
      } catch (error) {
        console.log(error);
        _this3.plus.alertError("Vui lòng kiểm tra lại cấu hình file word");
      }
      _this3.loadSV.loaded('generateMerge');
    })();
  }
  generateOne(obj, wordFile, fileName) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.loadSV.load('generateOne');
      try {
        const subName = obj['TenFile'] ? obj['TenFile'] : '';
        const zip = new (pizzip__WEBPACK_IMPORTED_MODULE_3___default())(wordFile);
        const doc = new (docxtemplater__WEBPACK_IMPORTED_MODULE_2___default())(zip, _this4.options).setData(obj);
        doc.render();
        const out = doc.getZip().generate({
          type: "blob",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_5__.saveAs)(out, moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now()).format("YYMMDD") + `-${subName + fileName}`);
        yield _this4.plus.sleep(1500);
      } catch (error) {
        console.log(error);
        _this4.plus.alertError('Vui lòng kiểm tra lại cấu hình file word');
      }
      _this4.loadSV.loaded('generateOne');
    })();
  }
  generateOnePromise(obj, wordFile, fileName) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        _this5.loadSV.load('generateOnePromise');
        try {
          const subName = obj['TenFile'] ? obj['TenFile'] : '';
          const zip = new (pizzip__WEBPACK_IMPORTED_MODULE_3___default())(wordFile);
          const doc = new (docxtemplater__WEBPACK_IMPORTED_MODULE_2___default())(zip, _this5.options).setData(obj);
          doc.render();
          const out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          });
          const fileout = new File([out], subName + fileName + ".docx", {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          });
          resolve(fileout);
        } catch (error) {
          console.log(error);
          _this5.plus.alertError('Vui lòng kiểm tra lại cấu hình file word');
        }
        _this5.loadSV.loaded('generateOnePromise');
      });
    })();
  }
  generateMergePromise(obj, wordFile, fileName) {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.loadSV.load('generateMerge');
      return new Promise(resolve => {
        const data = [];
        for (let i = 0; i < obj['_Merge'].length; i++) {
          const xs = Object.assign(obj['_Merge'][i], obj);
          delete xs['_Merge'];
          data.push(xs);
        }
        const merge = {
          merge: data
        };
        try {
          const subName = obj['TenFile'] ? obj['TenFile'] : '';
          const zip = new (pizzip__WEBPACK_IMPORTED_MODULE_3___default())(wordFile);
          const doc = new (docxtemplater__WEBPACK_IMPORTED_MODULE_2___default())(zip, _this6.options).setData(merge);
          doc.render();
          const out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          });
          const fileout = new File([out], subName + fileName + ".docx", {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          });
          resolve(fileout);
        } catch (error) {
          console.log(error);
          _this6.plus.alertError("Vui lòng kiểm tra lại cấu hình file word");
        }
        _this6.loadSV.loaded('generateMerge');
      });
    })();
  }
  generateZipFilesDocx(obj, wordFile, fileName) {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.loadSV.load('generateZipFilesDocx');
      const zip = new (jszip__WEBPACK_IMPORTED_MODULE_6___default())();
      const img = zip.folder("");
      const name = fileName + '.zip';
      for (let i = 0; i < obj['_Merge'].length; i++) {
        const xs = Object.assign(obj['_Merge'][i], obj);
        const fileSub = xs['TenFile'] ? xs['TenFile'] + '-' : obj['_Merge'].length == 1 ? '' : i + '-';
        delete xs['_Merge'];
        console.log(xs);
        try {
          const zip = new (pizzip__WEBPACK_IMPORTED_MODULE_3___default())(wordFile);
          const doc = new (docxtemplater__WEBPACK_IMPORTED_MODULE_2___default())(zip, _this7.options).setData(xs);
          doc.render();
          const out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          });
          img.file(fileSub + fileName, out);
        } catch (error) {
          console.log(error);
          _this7.plus.alertError('Vui lòng kiểm tra lại cấu hình file word');
        }
      }
      zip.generateAsync({
        type: 'blob'
      }).then(content => {
        if (content) {
          console.log(content);
          (0,file_saver__WEBPACK_IMPORTED_MODULE_5__.saveAs)(content, name);
        }
      });
      _this7.loadSV.loaded('generateZipFilesDocx');
    })();
  }
  loadFileByName(fileName) {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        loadFile(`https://thuctd.github.io/templates/${fileName}.docx`, (error, content) => {
          if (content) {
            resolve(content);
          }
          if (error) {
            _this8.plus.alertError('Không thể tải file!');
            reject(error);
          }
        });
      });
    })();
  }
  loadFileUrl(url) {
    var _this9 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        loadFile(url, (error, content) => {
          if (content) {
            resolve(content);
          }
          if (error) {
            _this9.plus.alertError('Không thể tải file!');
            reject(error);
          }
        });
      });
    })();
  }
  readWordFile(file) {
    new Promise(resolve => {
      const myReader = new FileReader();
      myReader.readAsArrayBuffer(file);
      myReader.onloadend = () => resolve(myReader.result);
    });
  }
  static {
    this.ɵfac = function DocxtemplateService_Factory(t) {
      return new (t || DocxtemplateService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_plus_service__WEBPACK_IMPORTED_MODULE_7__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_excel_service__WEBPACK_IMPORTED_MODULE_9__.ExcelService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: DocxtemplateService,
      factory: DocxtemplateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 63402:
/*!**************************************************!*\
  !*** ./src/app/share/services/sheets.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SheetDatabaseService: () => (/* binding */ SheetDatabaseService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54843);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 96354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 99437);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 12498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _http_serviceV2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.serviceV2 */ 24950);
/* harmony import */ var _plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plus.service */ 22014);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ 4974);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 21626);







class SheetDatabaseService {
  constructor(httpSV, plus, loadSV, http) {
    this.httpSV = httpSV;
    this.plus = plus;
    this.loadSV = loadSV;
    this.http = http;
    this.logSheetId = '1sYuKAA-nRwwShljwUNul9P3HOBJ8tY9siSR52WqFi-8';
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  }
  getHeader(sheetId, sheetName) {
    return new Promise(resolve => {
      this.httpSV.post('sheet/header', {
        sheetId: sheetId,
        sheetName: sheetName
      }).subscribe(res => {
        resolve(res.data);
      });
    });
  }
  addMany(sheetId, sheetName, item) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = Array.isArray(item) ? item : [item];
      const header = yield _this.getHeader(sheetId, sheetName);
      const rows = _this.objectsToRows(data, header);
      const body = {
        sheetId: sheetId,
        sheetName: sheetName,
        data: rows
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.httpSV.post('sheet/addPure', body, true));
    })();
  }
  addLog(api, item) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = Array.isArray(item) ? item : [item];
      data.forEach(e => {
        e.nick = window.max.nick;
      });
      const header = yield _this2.getHeader(_this2.logSheetId, api);
      const rows = _this2.objectsToRows(data, header);
      const body = {
        sheetId: _this2.logSheetId,
        sheetName: api,
        data: rows
      };
      return _this2.httpSV.post('sheet/addPure', body, true).subscribe(() => {});
    })();
  }
  updateOne(sheetId, sheetName, rowIndex, item) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const header = yield _this3.getHeader(sheetId, sheetName);
      const rows = _this3.objectToRow(item, header);
      const range = `${sheetName}!A${rowIndex}:${String.fromCharCode(64 + rows.length)}${rowIndex}`;
      const body = {
        sheetId: sheetId,
        sheetName: sheetName,
        data: rows,
        range: range
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this3.httpSV.post('sheet/updateOnePure', body, true));
    })();
  }
  objectsToRows(data, headers, includeHeader = false) {
    const rows = [];
    if (includeHeader) {
      rows.push(headers);
    }
    data.forEach(obj => {
      rows.push(this.objectToRow(obj, headers));
    });
    return rows;
  }
  objectToRow(obj, headers) {
    return headers.map(h => obj[h] !== undefined ? obj[h] : null);
  }
  sheetToObjects(values) {
    const header = values[0];
    const rows = values.slice(1);
    return rows.map(row => {
      const obj = {};
      header.forEach((key, i) => {
        obj[key] = row[i] !== undefined ? row[i] : null;
      });
      return obj;
    });
  }
  save(sheetId, sheetName, item, idKey) {
    this.loadSV.load('save-sheet');
    const body = {
      sheetId: sheetId,
      sheetName: sheetName,
      data: Array.isArray(item) ? item : [item],
      idKey: idKey
    };
    return this.httpSV.post('sheet/update', body, true).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.plus.alertSuccess('Thành công');
      this.loadSV.loaded('save-sheet');
      return response;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.loadSV.loaded('save-sheet');
      console.log(error);
      throw error;
    }));
  }
  import(sheetId, sheetName, item, idKey) {
    this.loadSV.load('save-sheet');
    const body = {
      sheetId: sheetId,
      sheetName: sheetName,
      data: Array.isArray(item) ? item : [item],
      idKey: idKey
    };
    return this.httpSV.post('sheet/import', body, true).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.plus.alertSuccess('Thành công');
      this.loadSV.loaded('save-sheet');
      return response;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.loadSV.loaded('save-sheet');
      console.log(error);
      throw error;
    }));
  }
  getAll(sheetId, sheetName) {
    return new Promise(resolve => {
      this.httpSV.post('sheet', {
        sheetId: sheetId,
        sheetName: sheetName
      }, true).subscribe(res => {
        resolve(res.data);
      });
    });
  }
  get(sheetId, sheetName, load = true) {
    load ? this.loadSV.load('get-sheet') : null;
    const body = {
      sheetId: sheetId,
      sheetName: sheetName,
      data: [],
      idKey: ''
    };
    return this.httpSV.post('sheet', body, true).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      window[sheetName + 'max'] = 0;
      this.loadSV.loaded('get-sheet');
      return response;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.loadSV.loaded('get-sheet');
      this.plus.alertError('Lỗi không thể lấy dữ liệu');
      console.log(error);
      throw error;
    }));
  }
  static {
    this.ɵfac = function SheetDatabaseService_Factory(t) {
      return new (t || SheetDatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_http_serviceV2__WEBPACK_IMPORTED_MODULE_1__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: SheetDatabaseService,
      factory: SheetDatabaseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 33499:
/*!********************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/conventions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
 *
 * Works with anything that has a `length` property and index access properties,
 * including NodeList.
 *
 * @param {T[] | { length: number; [number]: T }} list
 * @param {function (item: T, index: number, list:T[]):boolean} predicate
 * @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac
 * Allows injecting a custom implementation in tests (`Array.prototype` by default).
 * @returns {T | undefined}
 * @template {unknown} T
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
 */
function find(list, predicate, ac) {
  if (ac === undefined) {
    ac = Array.prototype;
  }
  if (list && typeof ac.find === 'function') {
    return ac.find.call(list, predicate);
  }
  for (var i = 0; i < list.length; i++) {
    if (hasOwn(list, i)) {
      var item = list[i];
      if (predicate.call(undefined, item, i, list)) {
        return item;
      }
    }
  }
}

/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * If `Object.getOwnPropertyDescriptors` is available,
 * a new object with all properties of object but without any prototype is created and returned
 * after freezing it.
 *
 * @param {T} object
 * The object to freeze.
 * @param {Pick<ObjectConstructor, 'create' | 'freeze' | 'getOwnPropertyDescriptors'>} [oc=Object]
 * `Object` by default,
 * allows to inject custom object constructor for tests.
 * @returns {Readonly<T>}
 * @template {Object} T
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * @prettierignore
 */
function freeze(object, oc) {
  if (oc === undefined) {
    oc = Object;
  }
  if (oc && typeof oc.getOwnPropertyDescriptors === 'function') {
    object = oc.create(null, oc.getOwnPropertyDescriptors(object));
  }
  return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object;
}

/**
 * Implementation for `Object.hasOwn` but ES5 compatible.
 *
 * @param {any} object
 * @param {string | number} key
 * @returns {boolean}
 */
function hasOwn(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

/**
 * Since xmldom can not rely on `Object.assign`,
 * it uses/provides a simplified version that is sufficient for its needs.
 *
 * @param {Object} target
 * @param {Object | null | undefined} source
 * @returns {Object}
 * The target with the merged/overridden properties.
 * @throws {TypeError}
 * If target is not an object.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
 */
function assign(target, source) {
  if (target === null || typeof target !== 'object') {
    throw new TypeError('target is not an object');
  }
  for (var key in source) {
    if (hasOwn(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
}

/**
 * A number of attributes are boolean attributes.
 * The presence of a boolean attribute on an element represents the `true` value,
 * and the absence of the attribute represents the `false` value.
 *
 * If the attribute is present, its value must either be the empty string, or a value that is
 * an ASCII case-insensitive match for the attribute's canonical name,
 * with no leading or trailing whitespace.
 *
 * Note: The values `"true"` and `"false"` are not allowed on boolean attributes.
 * To represent a `false` value, the attribute has to be omitted altogether.
 *
 * @see https://html.spec.whatwg.org/#boolean-attributes
 * @see https://html.spec.whatwg.org/#attributes-3
 */
var HTML_BOOLEAN_ATTRIBUTES = freeze({
  allowfullscreen: true,
  async: true,
  autofocus: true,
  autoplay: true,
  checked: true,
  controls: true,
  default: true,
  defer: true,
  disabled: true,
  formnovalidate: true,
  hidden: true,
  ismap: true,
  itemscope: true,
  loop: true,
  multiple: true,
  muted: true,
  nomodule: true,
  novalidate: true,
  open: true,
  playsinline: true,
  readonly: true,
  required: true,
  reversed: true,
  selected: true
});

/**
 * Check if `name` is matching one of the HTML boolean attribute names.
 * This method doesn't check if such attributes are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} name
 * @returns {boolean}
 * @see {@link HTML_BOOLEAN_ATTRIBUTES}
 * @see https://html.spec.whatwg.org/#boolean-attributes
 * @see https://html.spec.whatwg.org/#attributes-3
 */
function isHTMLBooleanAttribute(name) {
  return hasOwn(HTML_BOOLEAN_ATTRIBUTES, name.toLowerCase());
}

/**
 * Void elements only have a start tag; end tags must not be specified for void elements.
 * These elements should be written as self-closing like this: `<area />`.
 * This should not be confused with optional tags that HTML allows to omit the end tag for
 * (like `li`, `tr` and others), which can have content after them,
 * so they can not be written as self-closing.
 * xmldom does not have any logic for optional end tags cases,
 * and will report them as a warning.
 * Content that would go into the unopened element,
 * will instead be added as a sibling text node.
 *
 * @type {Readonly<{
 * 	area: boolean;
 * 	col: boolean;
 * 	img: boolean;
 * 	wbr: boolean;
 * 	link: boolean;
 * 	hr: boolean;
 * 	source: boolean;
 * 	br: boolean;
 * 	input: boolean;
 * 	param: boolean;
 * 	meta: boolean;
 * 	embed: boolean;
 * 	track: boolean;
 * 	base: boolean;
 * }>}
 * @see https://html.spec.whatwg.org/#void-elements
 * @see https://html.spec.whatwg.org/#optional-tags
 */
var HTML_VOID_ELEMENTS = freeze({
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
});

/**
 * Check if `tagName` is matching one of the HTML void element names.
 * This method doesn't check if such tags are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} tagName
 * @returns {boolean}
 * @see {@link HTML_VOID_ELEMENTS}
 * @see https://html.spec.whatwg.org/#void-elements
 */
function isHTMLVoidElement(tagName) {
  return hasOwn(HTML_VOID_ELEMENTS, tagName.toLowerCase());
}

/**
 * Tag names that are raw text elements according to HTML spec.
 * The value denotes whether they are escapable or not.
 *
 * @see {@link isHTMLEscapableRawTextElement}
 * @see {@link isHTMLRawTextElement}
 * @see https://html.spec.whatwg.org/#raw-text-elements
 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
 */
var HTML_RAW_TEXT_ELEMENTS = freeze({
  script: false,
  style: false,
  textarea: true,
  title: true
});

/**
 * Check if `tagName` is matching one of the HTML raw text element names.
 * This method doesn't check if such tags are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} tagName
 * @returns {boolean}
 * @see {@link isHTMLEscapableRawTextElement}
 * @see {@link HTML_RAW_TEXT_ELEMENTS}
 * @see https://html.spec.whatwg.org/#raw-text-elements
 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
 */
function isHTMLRawTextElement(tagName) {
  var key = tagName.toLowerCase();
  return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && !HTML_RAW_TEXT_ELEMENTS[key];
}
/**
 * Check if `tagName` is matching one of the HTML escapable raw text element names.
 * This method doesn't check if such tags are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} tagName
 * @returns {boolean}
 * @see {@link isHTMLRawTextElement}
 * @see {@link HTML_RAW_TEXT_ELEMENTS}
 * @see https://html.spec.whatwg.org/#raw-text-elements
 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
 */
function isHTMLEscapableRawTextElement(tagName) {
  var key = tagName.toLowerCase();
  return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && HTML_RAW_TEXT_ELEMENTS[key];
}
/**
 * Only returns true if `value` matches MIME_TYPE.HTML, which indicates an HTML document.
 *
 * @param {string} mimeType
 * @returns {mimeType is 'text/html'}
 * @see https://www.iana.org/assignments/media-types/text/html
 * @see https://en.wikipedia.org/wiki/HTML
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
 */
function isHTMLMimeType(mimeType) {
  return mimeType === MIME_TYPE.HTML;
}
/**
 * For both the `text/html` and the `application/xhtml+xml` namespace the spec defines that the
 * HTML namespace is provided as the default.
 *
 * @param {string} mimeType
 * @returns {boolean}
 * @see https://dom.spec.whatwg.org/#dom-document-createelement
 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument
 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
 */
function hasDefaultHTMLNamespace(mimeType) {
  return isHTMLMimeType(mimeType) || mimeType === MIME_TYPE.XML_XHTML_APPLICATION;
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02
 *      MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype
 *      WHATWG HTML Spec
 * @see {@link DOMParser.prototype.parseFromString}
 */
var MIME_TYPE = freeze({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
   *      WHATWG HTML Spec
   */
  HTML: 'text/html',
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType
   *      registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: 'application/xml',
  /**
   * `text/xml`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: 'text/xml',
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType
   *      registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: 'application/xhtml+xml',
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: 'image/svg+xml'
});
/**
 * @typedef {'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' | 'text/html' | 'text/xml'}
 * MimeType
 */
/**
 * @type {MimeType[]}
 * @private
 * Basically `Object.values`, which is not available in ES5.
 */
var _MIME_TYPES = Object.keys(MIME_TYPE).map(function (key) {
  return MIME_TYPE[key];
});

/**
 * Only returns true if `mimeType` is one of the allowed values for
 * `DOMParser.parseFromString`.
 *
 * @param {string} mimeType
 * @returns {mimeType is 'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' |  'text/html' | 'text/xml'}
 *
 */
function isValidMimeType(mimeType) {
  return _MIME_TYPES.indexOf(mimeType) > -1;
}
/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: 'http://www.w3.org/1999/xhtml',
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: 'http://www.w3.org/2000/svg',
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: 'http://www.w3.org/XML/1998/namespace',
  /**
   * The `xmlns:` namespace.
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: 'http://www.w3.org/2000/xmlns/'
});
exports.assign = assign;
exports.find = find;
exports.freeze = freeze;
exports.HTML_BOOLEAN_ATTRIBUTES = HTML_BOOLEAN_ATTRIBUTES;
exports.HTML_RAW_TEXT_ELEMENTS = HTML_RAW_TEXT_ELEMENTS;
exports.HTML_VOID_ELEMENTS = HTML_VOID_ELEMENTS;
exports.hasDefaultHTMLNamespace = hasDefaultHTMLNamespace;
exports.hasOwn = hasOwn;
exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
exports.isHTMLRawTextElement = isHTMLRawTextElement;
exports.isHTMLEscapableRawTextElement = isHTMLEscapableRawTextElement;
exports.isHTMLMimeType = isHTMLMimeType;
exports.isHTMLVoidElement = isHTMLVoidElement;
exports.isValidMimeType = isValidMimeType;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;

/***/ }),

/***/ 22219:
/*!*******************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom-parser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var conventions = __webpack_require__(/*! ./conventions */ 33499);
var dom = __webpack_require__(/*! ./dom */ 57315);
var errors = __webpack_require__(/*! ./errors */ 72204);
var entities = __webpack_require__(/*! ./entities */ 31032);
var sax = __webpack_require__(/*! ./sax */ 51495);
var DOMImplementation = dom.DOMImplementation;
var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
var isHTMLMimeType = conventions.isHTMLMimeType;
var isValidMimeType = conventions.isValidMimeType;
var MIME_TYPE = conventions.MIME_TYPE;
var NAMESPACE = conventions.NAMESPACE;
var ParseError = errors.ParseError;
var XMLReader = sax.XMLReader;

/**
 * Normalizes line ending according to <https://www.w3.org/TR/xml11/#sec-line-ends>,
 * including some Unicode "newline" characters:
 *
 * > XML parsed entities are often stored in computer files which,
 * > for editing convenience, are organized into lines.
 * > These lines are typically separated by some combination
 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
 * >
 * > To simplify the tasks of applications, the XML processor must behave
 * > as if it normalized all line breaks in external parsed entities (including the document entity)
 * > on input, before parsing, by translating the following to a single #xA character:
 * >
 * > 1. the two-character sequence #xD #xA,
 * > 2. the two-character sequence #xD #x85,
 * > 3. the single character #x85,
 * > 4. the single character #x2028,
 * > 5. the single character #x2029,
 * > 6. any #xD character that is not immediately followed by #xA or #x85.
 *
 * @param {string} input
 * @returns {string}
 * @prettierignore
 */
function normalizeLineEndings(input) {
  return input.replace(/\r[\n\u0085]/g, '\n').replace(/[\r\u0085\u2028\u2029]/g, '\n');
}

/**
 * @typedef Locator
 * @property {number} [columnNumber]
 * @property {number} [lineNumber]
 */

/**
 * @typedef DOMParserOptions
 * @property {typeof assign} [assign]
 * The method to use instead of `conventions.assign`, which is used to copy values from
 * `options` before they are used for parsing.
 * @property {typeof DOMHandler} [domHandler]
 * For internal testing: The class for creating an instance for handling events from the SAX
 * parser.
 * *****Warning: By configuring a faulty implementation, the specified behavior can completely
 * be broken.*****.
 * @property {Function} [errorHandler]
 * DEPRECATED! use `onError` instead.
 * @property {function(level:ErrorLevel, message:string, context: DOMHandler):void}
 * [onError]
 * A function invoked for every error that occurs during parsing.
 *
 * If it is not provided, all errors are reported to `console.error`
 * and only `fatalError`s are thrown as a `ParseError`,
 * which prevents any further processing.
 * If the provided method throws, a `ParserError` is thrown,
 * which prevents any further processing.
 *
 * Be aware that many `warning`s are considered an error that prevents further processing in
 * most implementations.
 * @property {boolean} [locator=true]
 * Configures if the nodes created during parsing will have a `lineNumber` and a `columnNumber`
 * attribute describing their location in the XML string.
 * Default is true.
 * @property {(string) => string} [normalizeLineEndings]
 * used to replace line endings before parsing, defaults to exported `normalizeLineEndings`,
 * which normalizes line endings according to <https://www.w3.org/TR/xml11/#sec-line-ends>,
 * including some Unicode "newline" characters.
 * @property {Object} [xmlns]
 * The XML namespaces that should be assumed when parsing.
 * The default namespace can be provided by the key that is the empty string.
 * When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
 * the default namespace that will be used,
 * will be overridden according to the specification.
 * @see {@link normalizeLineEndings}
 */

/**
 * The DOMParser interface provides the ability to parse XML or HTML source code from a string
 * into a DOM `Document`.
 *
 * ***xmldom is different from the spec in that it allows an `options` parameter,
 * to control the behavior***.
 *
 * @class
 * @param {DOMParserOptions} [options]
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
 */
function DOMParser(options) {
  options = options || {};
  if (options.locator === undefined) {
    options.locator = true;
  }

  /**
   * The method to use instead of `conventions.assign`, which is used to copy values from
   * `options`
   * before they are used for parsing.
   *
   * @type {conventions.assign}
   * @private
   * @see {@link conventions.assign}
   * @readonly
   */
  this.assign = options.assign || conventions.assign;

  /**
   * For internal testing: The class for creating an instance for handling events from the SAX
   * parser.
   * *****Warning: By configuring a faulty implementation, the specified behavior can completely
   * be broken*****.
   *
   * @type {typeof DOMHandler}
   * @private
   * @readonly
   */
  this.domHandler = options.domHandler || DOMHandler;

  /**
   * A function that is invoked for every error that occurs during parsing.
   *
   * If it is not provided, all errors are reported to `console.error`
   * and only `fatalError`s are thrown as a `ParseError`,
   * which prevents any further processing.
   * If the provided method throws, a `ParserError` is thrown,
   * which prevents any further processing.
   *
   * Be aware that many `warning`s are considered an error that prevents further processing in
   * most implementations.
   *
   * @type {function(level:ErrorLevel, message:string, context: DOMHandler):void}
   * @see {@link onErrorStopParsing}
   * @see {@link onWarningStopParsing}
   */
  this.onError = options.onError || options.errorHandler;
  if (options.errorHandler && typeof options.errorHandler !== 'function') {
    throw new TypeError('errorHandler object is no longer supported, switch to onError!');
  } else if (options.errorHandler) {
    options.errorHandler('warning', 'The `errorHandler` option has been deprecated, use `onError` instead!', this);
  }

  /**
   * used to replace line endings before parsing, defaults to `normalizeLineEndings`
   *
   * @type {(string) => string}
   * @readonly
   */
  this.normalizeLineEndings = options.normalizeLineEndings || normalizeLineEndings;

  /**
   * Configures if the nodes created during parsing will have a `lineNumber` and a
   * `columnNumber`
   * attribute describing their location in the XML string.
   * Default is true.
   *
   * @type {boolean}
   * @readonly
   */
  this.locator = !!options.locator;

  /**
   * The default namespace can be provided by the key that is the empty string.
   * When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
   * the default namespace that will be used,
   * will be overridden according to the specification.
   *
   * @type {Readonly<Object>}
   * @readonly
   */
  this.xmlns = this.assign(Object.create(null), options.xmlns);
}

/**
 * Parses `source` using the options in the way configured by the `DOMParserOptions` of `this`
 * `DOMParser`. If `mimeType` is `text/html` an HTML `Document` is created,
 * otherwise an XML `Document` is created.
 *
 * __It behaves different from the description in the living standard__:
 * - Uses the `options` passed to the `DOMParser` constructor to modify the behavior.
 * - Any unexpected input is reported to `onError` with either a `warning`,
 * `error` or `fatalError` level.
 * - Any `fatalError` throws a `ParseError` which prevents further processing.
 * - Any error thrown by `onError` is converted to a `ParseError` which prevents further
 * processing - If no `Document` was created during parsing it is reported as a `fatalError`.
 * *****Warning: By configuring a faulty DOMHandler implementation,
 * the specified behavior can completely be broken*****.
 *
 * @param {string} source
 * The XML mime type only allows string input!
 * @param {string} [mimeType='application/xml']
 * the mimeType or contentType of the document to be created determines the `type` of document
 * created (XML or HTML)
 * @returns {Document}
 * The `Document` node.
 * @throws {ParseError}
 * for any `fatalError` or anything that is thrown by `onError`
 * @throws {TypeError}
 * for any invalid `mimeType`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
 * @see https://html.spec.whatwg.org/#dom-domparser-parsefromstring-dev
 */
DOMParser.prototype.parseFromString = function (source, mimeType) {
  if (!isValidMimeType(mimeType)) {
    throw new TypeError('DOMParser.parseFromString: the provided mimeType "' + mimeType + '" is not valid.');
  }
  var defaultNSMap = this.assign(Object.create(null), this.xmlns);
  var entityMap = entities.XML_ENTITIES;
  var defaultNamespace = defaultNSMap[''] || null;
  if (hasDefaultHTMLNamespace(mimeType)) {
    entityMap = entities.HTML_ENTITIES;
    defaultNamespace = NAMESPACE.HTML;
  } else if (mimeType === MIME_TYPE.XML_SVG_IMAGE) {
    defaultNamespace = NAMESPACE.SVG;
  }
  defaultNSMap[''] = defaultNamespace;
  defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
  var domBuilder = new this.domHandler({
    mimeType: mimeType,
    defaultNamespace: defaultNamespace,
    onError: this.onError
  });
  var locator = this.locator ? {} : undefined;
  if (this.locator) {
    domBuilder.setDocumentLocator(locator);
  }
  var sax = new XMLReader();
  sax.errorHandler = domBuilder;
  sax.domBuilder = domBuilder;
  var isXml = !conventions.isHTMLMimeType(mimeType);
  if (isXml && typeof source !== 'string') {
    sax.errorHandler.fatalError('source is not a string');
  }
  sax.parse(this.normalizeLineEndings(String(source)), defaultNSMap, entityMap);
  if (!domBuilder.doc.documentElement) {
    sax.errorHandler.fatalError('missing root element');
  }
  return domBuilder.doc;
};

/**
 * @typedef DOMHandlerOptions
 * @property {string} [mimeType=MIME_TYPE.XML_APPLICATION]
 * @property {string | null} [defaultNamespace=null]
 */
/**
 * The class that is used to handle events from the SAX parser to create the related DOM
 * elements.
 *
 * Some methods are only implemented as an empty function,
 * since they are (at least currently) not relevant for xmldom.
 *
 * @class
 * @param {DOMHandlerOptions} [options]
 * @see http://www.saxproject.org/apidoc/org/xml/sax/ext/DefaultHandler2.html
 */
function DOMHandler(options) {
  var opt = options || {};
  /**
   * The mime type is used to determine if the DOM handler will create an XML or HTML document.
   * Only if it is set to `text/html` it will create an HTML document.
   * It defaults to MIME_TYPE.XML_APPLICATION.
   *
   * @type {string}
   * @see {@link MIME_TYPE}
   * @readonly
   */
  this.mimeType = opt.mimeType || MIME_TYPE.XML_APPLICATION;

  /**
   * The namespace to use to create an XML document.
   * For the following reasons this is required:
   * - The SAX API for `startDocument` doesn't offer any way to pass a namespace,
   * since at that point there is no way for the parser to know what the default namespace from
   * the document will be.
   * - When creating using `DOMImplementation.createDocument` it is required to pass a
   * namespace,
   * to determine the correct `Document.contentType`, which should match `this.mimeType`.
   * - When parsing an XML document with the `application/xhtml+xml` mimeType,
   * the HTML namespace needs to be the default namespace.
   *
   * @type {string | null}
   * @private
   * @readonly
   */
  this.defaultNamespace = opt.defaultNamespace || null;

  /**
   * @type {boolean}
   * @private
   */
  this.cdata = false;

  /**
   * The last `Element` that was created by `startElement`.
   * `endElement` sets it to the `currentElement.parentNode`.
   *
   * Note: The sax parser currently sets it to white space text nodes between tags.
   *
   * @type {Element | Node | undefined}
   * @private
   */
  this.currentElement = undefined;

  /**
   * The Document that is created as part of `startDocument`,
   * and returned by `DOMParser.parseFromString`.
   *
   * @type {Document | undefined}
   * @readonly
   */
  this.doc = undefined;

  /**
   * The locator is stored as part of setDocumentLocator.
   * It is controlled and mutated by the SAX parser to store the current parsing position.
   * It is used by DOMHandler to set `columnNumber` and `lineNumber`
   * on the DOM nodes.
   *
   * @type {Readonly<Locator> | undefined}
   * @private
   * @readonly (the
   * sax parser currently sometimes set's it)
   */
  this.locator = undefined;
  /**
   * @type {function (level:ErrorLevel ,message:string, context:DOMHandler):void}
   * @readonly
   */
  this.onError = opt.onError;
}
function position(locator, node) {
  node.lineNumber = locator.lineNumber;
  node.columnNumber = locator.columnNumber;
}
DOMHandler.prototype = {
  /**
   * Either creates an XML or an HTML document and stores it under `this.doc`.
   * If it is an XML document, `this.defaultNamespace` is used to create it,
   * and it will not contain any `childNodes`.
   * If it is an HTML document, it will be created without any `childNodes`.
   *
   * @see http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
   */
  startDocument: function () {
    var impl = new DOMImplementation();
    this.doc = isHTMLMimeType(this.mimeType) ? impl.createHTMLDocument(false) : impl.createDocument(this.defaultNamespace, '');
  },
  startElement: function (namespaceURI, localName, qName, attrs) {
    var doc = this.doc;
    var el = doc.createElementNS(namespaceURI, qName || localName);
    var len = attrs.length;
    appendElement(this, el);
    this.currentElement = el;
    this.locator && position(this.locator, el);
    for (var i = 0; i < len; i++) {
      var namespaceURI = attrs.getURI(i);
      var value = attrs.getValue(i);
      var qName = attrs.getQName(i);
      var attr = doc.createAttributeNS(namespaceURI, qName);
      this.locator && position(attrs.getLocator(i), attr);
      attr.value = attr.nodeValue = value;
      el.setAttributeNode(attr);
    }
  },
  endElement: function (namespaceURI, localName, qName) {
    this.currentElement = this.currentElement.parentNode;
  },
  startPrefixMapping: function (prefix, uri) {},
  endPrefixMapping: function (prefix) {},
  processingInstruction: function (target, data) {
    var ins = this.doc.createProcessingInstruction(target, data);
    this.locator && position(this.locator, ins);
    appendElement(this, ins);
  },
  ignorableWhitespace: function (ch, start, length) {},
  characters: function (chars, start, length) {
    chars = _toString.apply(this, arguments);
    //console.log(chars)
    if (chars) {
      if (this.cdata) {
        var charNode = this.doc.createCDATASection(chars);
      } else {
        var charNode = this.doc.createTextNode(chars);
      }
      if (this.currentElement) {
        this.currentElement.appendChild(charNode);
      } else if (/^\s*$/.test(chars)) {
        this.doc.appendChild(charNode);
        //process xml
      }

      this.locator && position(this.locator, charNode);
    }
  },
  skippedEntity: function (name) {},
  endDocument: function () {
    this.doc.normalize();
  },
  /**
   * Stores the locator to be able to set the `columnNumber` and `lineNumber`
   * on the created DOM nodes.
   *
   * @param {Locator} locator
   */
  setDocumentLocator: function (locator) {
    if (locator) {
      locator.lineNumber = 0;
    }
    this.locator = locator;
  },
  //LexicalHandler
  comment: function (chars, start, length) {
    chars = _toString.apply(this, arguments);
    var comm = this.doc.createComment(chars);
    this.locator && position(this.locator, comm);
    appendElement(this, comm);
  },
  startCDATA: function () {
    //used in characters() methods
    this.cdata = true;
  },
  endCDATA: function () {
    this.cdata = false;
  },
  startDTD: function (name, publicId, systemId, internalSubset) {
    var impl = this.doc.implementation;
    if (impl && impl.createDocumentType) {
      var dt = impl.createDocumentType(name, publicId, systemId, internalSubset);
      this.locator && position(this.locator, dt);
      appendElement(this, dt);
      this.doc.doctype = dt;
    }
  },
  reportError: function (level, message) {
    if (typeof this.onError === 'function') {
      try {
        this.onError(level, message, this);
      } catch (e) {
        throw new ParseError('Reporting ' + level + ' "' + message + '" caused ' + e, this.locator);
      }
    } else {
      console.error('[xmldom ' + level + ']\t' + message, _locator(this.locator));
    }
  },
  /**
   * @see http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function (message) {
    this.reportError('warning', message);
  },
  error: function (message) {
    this.reportError('error', message);
  },
  /**
   * This function reports a fatal error and throws a ParseError.
   *
   * @param {string} message
   * - The message to be used for reporting and throwing the error.
   * @returns {never}
   * This function always throws an error and never returns a value.
   * @throws {ParseError}
   * Always throws a ParseError with the provided message.
   */
  fatalError: function (message) {
    this.reportError('fatalError', message);
    throw new ParseError(message, this.locator);
  }
};
function _locator(l) {
  if (l) {
    return '\n@#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
  }
}
function _toString(chars, start, length) {
  if (typeof chars == 'string') {
    return chars.substr(start, length);
  } else {
    //java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
    if (chars.length >= start + length || start) {
      return new java.lang.String(chars, start, length) + '';
    }
    return chars;
  }
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'.replace(/\w+/g, function (key) {
  DOMHandler.prototype[key] = function () {
    return null;
  };
});

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement(handler, node) {
  if (!handler.currentElement) {
    handler.doc.appendChild(node);
  } else {
    handler.currentElement.appendChild(node);
  }
}

/**
 * A method that prevents any further parsing when an `error`
 * with level `error` is reported during parsing.
 *
 * @see {@link DOMParserOptions.onError}
 * @see {@link onWarningStopParsing}
 */
function onErrorStopParsing(level) {
  if (level === 'error') throw 'onErrorStopParsing';
}

/**
 * A method that prevents any further parsing when any `error` is reported during parsing.
 *
 * @see {@link DOMParserOptions.onError}
 * @see {@link onErrorStopParsing}
 */
function onWarningStopParsing() {
  throw 'onWarningStopParsing';
}
exports.__DOMHandler = DOMHandler;
exports.DOMParser = DOMParser;
exports.normalizeLineEndings = normalizeLineEndings;
exports.onErrorStopParsing = onErrorStopParsing;
exports.onWarningStopParsing = onWarningStopParsing;

/***/ }),

/***/ 57315:
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var conventions = __webpack_require__(/*! ./conventions */ 33499);
var find = conventions.find;
var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
var hasOwn = conventions.hasOwn;
var isHTMLMimeType = conventions.isHTMLMimeType;
var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
var isHTMLVoidElement = conventions.isHTMLVoidElement;
var MIME_TYPE = conventions.MIME_TYPE;
var NAMESPACE = conventions.NAMESPACE;

/**
 * Private DOM Constructor symbol
 *
 * Internal symbol used for construction of all classes whose constructors should be private.
 * Currently used for checks in `Node`, `Document`, `Element`, `Attr`, `CharacterData`, `Text`, `Comment`,
 * `CDATASection`, `DocumentType`, `Notation`, `Entity`, `EntityReference`, `DocumentFragment`, `ProcessingInstruction`
 * so the constructor can't be used from outside the module.
 */
var PDC = Symbol();
var errors = __webpack_require__(/*! ./errors */ 72204);
var DOMException = errors.DOMException;
var DOMExceptionName = errors.DOMExceptionName;
var g = __webpack_require__(/*! ./grammar */ 99218);

/**
 * Checks if the given symbol equals the Private DOM Constructor symbol (PDC)
 * and throws an Illegal constructor exception when the symbols don't match.
 * This ensures that the constructor remains private and can't be used outside this module.
 */
function checkSymbol(symbol) {
  if (symbol !== PDC) {
    throw new TypeError('Illegal constructor');
  }
}

/**
 * A prerequisite for `[].filter`, to drop elements that are empty.
 *
 * @param {string} input
 * The string to be checked.
 * @returns {boolean}
 * Returns `true` if the input string is not empty, `false` otherwise.
 */
function notEmptyString(input) {
  return input !== '';
}
/**
 * Splits a string on ASCII whitespace characters (U+0009 TAB, U+000A LF, U+000C FF, U+000D CR,
 * U+0020 SPACE).
 * It follows the definition from the infra specification from WHATWG.
 *
 * @param {string} input
 * The string to be split.
 * @returns {string[]}
 * An array of the split strings. The array can be empty if the input string is empty or only
 * contains whitespace characters.
 * @see {@link https://infra.spec.whatwg.org/#split-on-ascii-whitespace}
 * @see {@link https://infra.spec.whatwg.org/#ascii-whitespace}
 */
function splitOnASCIIWhitespace(input) {
  // U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
  return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * The current record object to which the element will be added as a key.
 * The object's keys are string types and values are either boolean or undefined.
 * @param {string} element
 * The string to be added as a key to the current record.
 * @returns {Record<string, boolean | undefined>}
 * The updated record object after the addition of the new element.
 */
function orderedSetReducer(current, element) {
  if (!hasOwn(current, element)) {
    current[element] = true;
  }
  return current;
}

/**
 * Converts a string into an ordered set by splitting the input on ASCII whitespace and
 * ensuring uniqueness of elements.
 * This follows the definition of an ordered set from the infra specification by WHATWG.
 *
 * @param {string} input
 * The input string to be transformed into an ordered set.
 * @returns {string[]}
 * An array of unique strings obtained from the input, preserving the original order.
 * The array can be empty if the input string is empty or only contains whitespace characters.
 * @see {@link https://infra.spec.whatwg.org/#ordered-set}
 */
function toOrderedSet(input) {
  if (!input) return [];
  var list = splitOnASCIIWhitespace(input);
  return Object.keys(list.reduce(orderedSetReducer, {}));
}

/**
 * Uses `list.indexOf` to implement a function that behaves like `Array.prototype.includes`.
 * This function is used in environments where `Array.prototype.includes` may not be available.
 *
 * @param {any[]} list
 * The array in which to search for the element.
 * @returns {function(any): boolean}
 * A function that accepts an element and returns a boolean indicating whether the element is
 * included in the provided list.
 */
function arrayIncludes(list) {
  return function (element) {
    return list && list.indexOf(element) !== -1;
  };
}

/**
 * Validates a qualified name based on the criteria provided in the DOM specification by
 * WHATWG.
 *
 * @param {string} qualifiedName
 * The qualified name to be validated.
 * @throws {DOMException}
 * With code {@link DOMException.INVALID_CHARACTER_ERR} if the qualified name contains an
 * invalid character.
 * @see {@link https://dom.spec.whatwg.org/#validate}
 */
function validateQualifiedName(qualifiedName) {
  if (!g.QName_exact.test(qualifiedName)) {
    throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in qualified name "' + qualifiedName + '"');
  }
}

/**
 * Validates a qualified name and the namespace associated with it,
 * based on the criteria provided in the DOM specification by WHATWG.
 *
 * @param {string | null} namespace
 * The namespace to be validated. It can be a string or null.
 * @param {string} qualifiedName
 * The qualified name to be validated.
 * @returns {[namespace: string | null, prefix: string | null, localName: string]}
 * Returns a tuple with the namespace,
 * prefix and local name of the qualified name.
 * @throws {DOMException}
 * Throws a DOMException if the qualified name or the namespace is not valid.
 * @see {@link https://dom.spec.whatwg.org/#validate-and-extract}
 */
function validateAndExtract(namespace, qualifiedName) {
  validateQualifiedName(qualifiedName);
  namespace = namespace || null;
  /**
   * @type {string | null}
   */
  var prefix = null;
  var localName = qualifiedName;
  if (qualifiedName.indexOf(':') >= 0) {
    var splitResult = qualifiedName.split(':');
    prefix = splitResult[0];
    localName = splitResult[1];
  }
  if (prefix !== null && namespace === null) {
    throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is non-null and namespace is null');
  }
  if (prefix === 'xml' && namespace !== conventions.NAMESPACE.XML) {
    throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is "xml" and namespace is not the XML namespace');
  }
  if ((prefix === 'xmlns' || qualifiedName === 'xmlns') && namespace !== conventions.NAMESPACE.XMLNS) {
    throw new DOMException(DOMException.NAMESPACE_ERR, 'either qualifiedName or prefix is "xmlns" and namespace is not the XMLNS namespace');
  }
  if (namespace === conventions.NAMESPACE.XMLNS && prefix !== 'xmlns' && qualifiedName !== 'xmlns') {
    throw new DOMException(DOMException.NAMESPACE_ERR, 'namespace is the XMLNS namespace and neither qualifiedName nor prefix is "xmlns"');
  }
  return [namespace, prefix, localName];
}

/**
 * Copies properties from one object to another.
 * It only copies the object's own (not inherited) properties.
 *
 * @param {Object} src
 * The source object from which properties are copied.
 * @param {Object} dest
 * The destination object to which properties are copied.
 */
function copy(src, dest) {
  for (var p in src) {
    if (hasOwn(src, p)) {
      dest[p] = src[p];
    }
  }
}

/**
 * Extends a class with the properties and methods of a super class.
 * It uses a form of prototypal inheritance, and establishes the `constructor` property
 * correctly(?).
 *
 * It is not clear to the current maintainers if this implementation is making sense,
 * since it creates an intermediate prototype function,
 * which all properties of `Super` are copied onto using `_copy`.
 *
 * @param {Object} Class
 * The class that is to be extended.
 * @param {Object} Super
 * The super class from which properties and methods are inherited.
 * @private
 */
function _extends(Class, Super) {
  var pt = Class.prototype;
  if (!(pt instanceof Super)) {
    function t() {}
    t.prototype = Super.prototype;
    t = new t();
    copy(pt, t);
    Class.prototype = pt = t;
  }
  if (pt.constructor != Class) {
    if (typeof Class != 'function') {
      console.error('unknown Class:' + Class);
    }
    pt.constructor = Class;
  }
}
var NodeType = {};
var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
var TEXT_NODE = NodeType.TEXT_NODE = 3;
var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
var DocumentPosition = conventions.freeze({
  DOCUMENT_POSITION_DISCONNECTED: 1,
  DOCUMENT_POSITION_PRECEDING: 2,
  DOCUMENT_POSITION_FOLLOWING: 4,
  DOCUMENT_POSITION_CONTAINS: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32
});

//helper functions for compareDocumentPosition
/**
 * Finds the common ancestor in two parent chains.
 *
 * @param {Node[]} a
 * The first parent chain.
 * @param {Node[]} b
 * The second parent chain.
 * @returns {Node}
 * The common ancestor node if it exists. If there is no common ancestor, the function will
 * return `null`.
 */
function commonAncestor(a, b) {
  if (b.length < a.length) return commonAncestor(b, a);
  var c = null;
  for (var n in a) {
    if (a[n] !== b[n]) return c;
    c = a[n];
  }
  return c;
}

/**
 * Assigns a unique identifier to a document to ensure consistency while comparing unrelated
 * nodes.
 *
 * @param {Document} doc
 * The document to which a unique identifier is to be assigned.
 * @returns {string}
 * The unique identifier of the document. If the document already had a unique identifier, the
 * function will return the existing one.
 */
function docGUID(doc) {
  if (!doc.guid) doc.guid = Math.random();
  return doc.guid;
}
//-- end of helper functions

/**
 * The NodeList interface provides the abstraction of an ordered collection of nodes,
 * without defining or constraining how this collection is implemented.
 * NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 * You can also access the items of the NodeList with a `for...of` loop.
 *
 * @class NodeList
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * @constructs NodeList
 */
function NodeList() {}
NodeList.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1
   * inclusive.
   *
   * @type {number}
   */
  length: 0,
  /**
   * Returns the item at `index`. If index is greater than or equal to the number of nodes in
   * the list, this returns null.
   *
   * @param index
   * Unsigned long Index into the collection.
   * @returns {Node | null}
   * The node at position `index` in the NodeList,
   * or null if that is not a valid index.
   */
  item: function (index) {
    return index >= 0 && index < this.length ? this[index] : null;
  },
  /**
   * Returns a string representation of the NodeList.
   *
   * @param {unknown} nodeFilter
   * __A filter function? Not implemented according to the spec?__.
   * @returns {string}
   * A string representation of the NodeList.
   */
  toString: function (nodeFilter) {
    for (var buf = [], i = 0; i < this.length; i++) {
      serializeToString(this[i], buf, nodeFilter);
    }
    return buf.join('');
  },
  /**
   * Filters the NodeList based on a predicate.
   *
   * @param {function(Node): boolean} predicate
   * - A predicate function to filter the NodeList.
   * @returns {Node[]}
   * An array of nodes that satisfy the predicate.
   * @private
   */
  filter: function (predicate) {
    return Array.prototype.filter.call(this, predicate);
  },
  /**
   * Returns the first index at which a given node can be found in the NodeList, or -1 if it is
   * not present.
   *
   * @param {Node} item
   * - The Node item to locate in the NodeList.
   * @returns {number}
   * The first index of the node in the NodeList; -1 if not found.
   * @private
   */
  indexOf: function (item) {
    return Array.prototype.indexOf.call(this, item);
  }
};
NodeList.prototype[Symbol.iterator] = function () {
  var me = this;
  var index = 0;
  return {
    next: function () {
      if (index < me.length) {
        return {
          value: me[index++],
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    },
    return: function () {
      return {
        done: true
      };
    }
  };
};

/**
 * Represents a live collection of nodes that is automatically updated when its associated
 * document changes.
 *
 * @class LiveNodeList
 * @param {Node} node
 * The associated node.
 * @param {function} refresh
 * The function to refresh the live node list.
 * @augments NodeList
 * @constructs LiveNodeList
 */
function LiveNodeList(node, refresh) {
  this._node = node;
  this._refresh = refresh;
  _updateLiveList(this);
}
/**
 * Updates the live node list.
 *
 * @param {LiveNodeList} list
 * The live node list to update.
 * @private
 */
function _updateLiveList(list) {
  var inc = list._node._inc || list._node.ownerDocument._inc;
  if (list._inc !== inc) {
    var ls = list._refresh(list._node);
    __set__(list, 'length', ls.length);
    if (!list.$$length || ls.length < list.$$length) {
      for (var i = ls.length; (i in list); i++) {
        if (hasOwn(list, i)) {
          delete list[i];
        }
      }
    }
    copy(ls, list);
    list._inc = inc;
  }
}
/**
 * Returns the node at position `index` in the LiveNodeList, or null if that is not a valid
 * index.
 *
 * @param {number} i
 * Index into the collection.
 * @returns {Node | null}
 * The node at position `index` in the LiveNodeList, or null if that is not a valid index.
 */
LiveNodeList.prototype.item = function (i) {
  _updateLiveList(this);
  return this[i] || null;
};
_extends(LiveNodeList, NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes
 * that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal
 * index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities
 *
 * This implementation only supports property indices, but does not support named properties,
 * as specified in the living standard.
 *
 * @class NamedNodeMap
 * @see https://dom.spec.whatwg.org/#interface-namednodemap
 * @see https://webidl.spec.whatwg.org/#dfn-supported-property-names
 * @constructs NamedNodeMap
 */
function NamedNodeMap() {}
/**
 * Returns the index of a node within the list.
 *
 * @param {Array} list
 * The list of nodes.
 * @param {Node} node
 * The node to find.
 * @returns {number}
 * The index of the node within the list, or -1 if not found.
 * @private
 */
function _findNodeIndex(list, node) {
  var i = 0;
  while (i < list.length) {
    if (list[i] === node) {
      return i;
    }
    i++;
  }
}
/**
 * Adds a new attribute to the list and updates the owner element of the attribute.
 *
 * @param {Element} el
 * The element which will become the owner of the new attribute.
 * @param {NamedNodeMap} list
 * The list to which the new attribute will be added.
 * @param {Attr} newAttr
 * The new attribute to be added.
 * @param {Attr} oldAttr
 * The old attribute to be replaced, or null if no attribute is to be replaced.
 * @returns {void}
 * @private
 */
function _addNamedNode(el, list, newAttr, oldAttr) {
  if (oldAttr) {
    list[_findNodeIndex(list, oldAttr)] = newAttr;
  } else {
    list[list.length] = newAttr;
    list.length++;
  }
  if (el) {
    newAttr.ownerElement = el;
    var doc = el.ownerDocument;
    if (doc) {
      oldAttr && _onRemoveAttribute(doc, el, oldAttr);
      _onAddAttribute(doc, el, newAttr);
    }
  }
}
/**
 * Removes an attribute from the list and updates the owner element of the attribute.
 *
 * @param {Element} el
 * The element which is the current owner of the attribute.
 * @param {NamedNodeMap} list
 * The list from which the attribute will be removed.
 * @param {Attr} attr
 * The attribute to be removed.
 * @returns {void}
 * @private
 */
function _removeNamedNode(el, list, attr) {
  //console.log('remove attr:'+attr)
  var i = _findNodeIndex(list, attr);
  if (i >= 0) {
    var lastIndex = list.length - 1;
    while (i <= lastIndex) {
      list[i] = list[++i];
    }
    list.length = lastIndex;
    if (el) {
      var doc = el.ownerDocument;
      if (doc) {
        _onRemoveAttribute(doc, el, attr);
      }
      attr.ownerElement = null;
    }
  }
}
NamedNodeMap.prototype = {
  length: 0,
  item: NodeList.prototype.item,
  /**
   * Get an attribute by name. Note: Name is in lower case in case of HTML namespace and
   * document.
   *
   * @param {string} localName
   * The local name of the attribute.
   * @returns {Attr | null}
   * The attribute with the given local name, or null if no such attribute exists.
   * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name
   */
  getNamedItem: function (localName) {
    if (this._ownerElement && this._ownerElement._isInHTMLDocumentAndNamespace()) {
      localName = localName.toLowerCase();
    }
    var i = 0;
    while (i < this.length) {
      var attr = this[i];
      if (attr.nodeName === localName) {
        return attr;
      }
      i++;
    }
    return null;
  },
  /**
   * Set an attribute.
   *
   * @param {Attr} attr
   * The attribute to set.
   * @returns {Attr | null}
   * The old attribute with the same local name and namespace URI as the new one, or null if no
   * such attribute exists.
   * @throws {DOMException}
   * With code:
   * - {@link INUSE_ATTRIBUTE_ERR} - If the attribute is already an attribute of another
   * element.
   * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
   */
  setNamedItem: function (attr) {
    var el = attr.ownerElement;
    if (el && el !== this._ownerElement) {
      throw new DOMException(DOMException.INUSE_ATTRIBUTE_ERR);
    }
    var oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
    if (oldAttr === attr) {
      return attr;
    }
    _addNamedNode(this._ownerElement, this, attr, oldAttr);
    return oldAttr;
  },
  /**
   * Set an attribute, replacing an existing attribute with the same local name and namespace
   * URI if one exists.
   *
   * @param {Attr} attr
   * The attribute to set.
   * @returns {Attr | null}
   * The old attribute with the same local name and namespace URI as the new one, or null if no
   * such attribute exists.
   * @throws {DOMException}
   * Throws a DOMException with the name "InUseAttributeError" if the attribute is already an
   * attribute of another element.
   * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
   */
  setNamedItemNS: function (attr) {
    return this.setNamedItem(attr);
  },
  /**
   * Removes an attribute specified by the local name.
   *
   * @param {string} localName
   * The local name of the attribute to be removed.
   * @returns {Attr}
   * The attribute node that was removed.
   * @throws {DOMException}
   * With code:
   * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given name is found.
   * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditem
   * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name
   */
  removeNamedItem: function (localName) {
    var attr = this.getNamedItem(localName);
    if (!attr) {
      throw new DOMException(DOMException.NOT_FOUND_ERR, localName);
    }
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  /**
   * Removes an attribute specified by the namespace and local name.
   *
   * @param {string | null} namespaceURI
   * The namespace URI of the attribute to be removed.
   * @param {string} localName
   * The local name of the attribute to be removed.
   * @returns {Attr}
   * The attribute node that was removed.
   * @throws {DOMException}
   * With code:
   * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given namespace URI and local
   * name is found.
   * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditemns
   * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace
   */
  removeNamedItemNS: function (namespaceURI, localName) {
    var attr = this.getNamedItemNS(namespaceURI, localName);
    if (!attr) {
      throw new DOMException(DOMException.NOT_FOUND_ERR, namespaceURI ? namespaceURI + ' : ' + localName : localName);
    }
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  /**
   * Get an attribute by namespace and local name.
   *
   * @param {string | null} namespaceURI
   * The namespace URI of the attribute.
   * @param {string} localName
   * The local name of the attribute.
   * @returns {Attr | null}
   * The attribute with the given namespace URI and local name, or null if no such attribute
   * exists.
   * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace
   */
  getNamedItemNS: function (namespaceURI, localName) {
    if (!namespaceURI) {
      namespaceURI = null;
    }
    var i = 0;
    while (i < this.length) {
      var node = this[i];
      if (node.localName === localName && node.namespaceURI === namespaceURI) {
        return node;
      }
      i++;
    }
    return null;
  }
};
NamedNodeMap.prototype[Symbol.iterator] = function () {
  var me = this;
  var index = 0;
  return {
    next: function () {
      if (index < me.length) {
        return {
          value: me[index++],
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    },
    return: function () {
      return {
        done: true
      };
    }
  };
};

/**
 * The DOMImplementation interface provides a number of methods for performing operations that
 * are independent of any particular instance of the document object model.
 *
 * The DOMImplementation interface represents an object providing methods which are not
 * dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * **The individual methods describe the differences compared to the specs**.
 *
 * @class DOMImplementation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core
 *      (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 * @constructs DOMImplementation
 */
function DOMImplementation() {}
DOMImplementation.prototype = {
  /**
   * Test if the DOM implementation implements a specific feature and version, as specified in
   * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#DOMFeatures DOM Features}.
   *
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given
   * feature is supported. The different implementations fairly diverged in what kind of
   * features were reported. The latest version of the spec settled to force this method to
   * always return true, where the functionality was accurate and in use.
   *
   * @deprecated
   * It is deprecated and modern browsers return true in all cases.
   * @function DOMImplementation#hasFeature
   * @param {string} feature
   * The name of the feature to test.
   * @param {string} [version]
   * This is the version number of the feature to test.
   * @returns {boolean}
   * Always returns true.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-5CED94D7 DOM Level 3 Core
   */
  hasFeature: function (feature, version) {
    return true;
  },
  /**
   * Creates a DOM Document object of the specified type with its document element. Note that
   * based on the {@link DocumentType}
   * given to create the document, the implementation may instantiate specialized
   * {@link Document} objects that support additional features than the "Core", such as "HTML"
   * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML}.
   * On the other hand, setting the {@link DocumentType} after the document was created makes
   * this very unlikely to happen. Alternatively, specialized {@link Document} creation methods,
   * such as createHTMLDocument
   * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML},
   * can be used to obtain specific types of {@link Document} objects.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document`
   * instance (with it's `type` set to `'xml'`).
   * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   *
   * @function DOMImplementation.createDocument
   * @param {string | null} namespaceURI
   * The
   * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-namespaceURI namespace URI}
   * of the document element to create or null.
   * @param {string | null} qualifiedName
   * The
   * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified name}
   * of the document element to be created or null.
   * @param {DocumentType | null} [doctype=null]
   * The type of document to be created or null. When doctype is not null, its
   * {@link Node#ownerDocument} attribute is set to the document being created. Default is
   * `null`
   * @returns {Document}
   * A new {@link Document} object with its document element. If the NamespaceURI,
   * qualifiedName, and doctype are null, the returned {@link Document} is empty with no
   * document element.
   * @throws {DOMException}
   * With code:
   *
   * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
   * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
   * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed, if the qualifiedName has a
   * prefix and the namespaceURI is null, or if the qualifiedName is null and the namespaceURI
   * is different from null, or if the qualifiedName has a prefix that is "xml" and the
   * namespaceURI is different from "{@link http://www.w3.org/XML/1998/namespace}"
   * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#Namespaces XML Namespaces},
   * or if the DOM implementation does not support the "XML" feature but a non-null namespace
   * URI was provided, since namespaces were defined by XML.
   * - `WRONG_DOCUMENT_ERR`: Raised if doctype has already been used with a different document
   * or was created from a different implementation.
   * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
   * "XML" and the language exposed through the Document does not support XML Namespaces (such
   * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
   * @since DOM Level 2.
   * @see {@link #createHTMLDocument}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument DOM Living Standard
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-2-Core-DOM-createDocument DOM
   *      Level 3 Core
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM
   *      Level 2 Core (initial)
   */
  createDocument: function (namespaceURI, qualifiedName, doctype) {
    var contentType = MIME_TYPE.XML_APPLICATION;
    if (namespaceURI === NAMESPACE.HTML) {
      contentType = MIME_TYPE.XML_XHTML_APPLICATION;
    } else if (namespaceURI === NAMESPACE.SVG) {
      contentType = MIME_TYPE.XML_SVG_IMAGE;
    }
    var doc = new Document(PDC, {
      contentType: contentType
    });
    doc.implementation = this;
    doc.childNodes = new NodeList();
    doc.doctype = doctype || null;
    if (doctype) {
      doc.appendChild(doctype);
    }
    if (qualifiedName) {
      var root = doc.createElementNS(namespaceURI, qualifiedName);
      doc.appendChild(root);
    }
    return doc;
  },
  /**
   * Creates an empty DocumentType node. Entity declarations and notations are not made
   * available. Entity reference expansions and default attribute additions do not occur.
   *
   * **This behavior is slightly different from the one in the specs**:
   * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - `publicId` and `systemId` contain the raw data including any possible quotes,
   *   so they can always be serialized back to the original value
   * - `internalSubset` contains the raw string between `[` and `]` if present,
   *   but is not parsed or validated in any form.
   *
   * @function DOMImplementation#createDocumentType
   * @param {string} qualifiedName
   * The {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified
   * name} of the document type to be created.
   * @param {string} [publicId]
   * The external subset public identifier.
   * @param {string} [systemId]
   * The external subset system identifier.
   * @param {string} [internalSubset]
   * the internal subset or an empty string if it is not present
   * @returns {DocumentType}
   * A new {@link DocumentType} node with {@link Node#ownerDocument} set to null.
   * @throws {DOMException}
   * With code:
   *
   * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
   * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
   * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed.
   * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
   * "XML" and the language exposed through the Document does not support XML Namespaces (such
   * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
   * @since DOM Level 2.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType
   *      MDN
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living
   *      Standard
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-3-Core-DOM-createDocType DOM
   *      Level 3 Core
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM
   *      Level 2 Core
   * @see https://github.com/xmldom/xmldom/blob/master/CHANGELOG.md#050
   * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-Core-DocType-internalSubset
   * @prettierignore
   */
  createDocumentType: function (qualifiedName, publicId, systemId, internalSubset) {
    validateQualifiedName(qualifiedName);
    var node = new DocumentType(PDC);
    node.name = qualifiedName;
    node.nodeName = qualifiedName;
    node.publicId = publicId || '';
    node.systemId = systemId || '';
    node.internalSubset = internalSubset || '';
    node.childNodes = new NodeList();
    return node;
  },
  /**
   * Returns an HTML document, that might already have a basic DOM structure.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - If the first argument is `false` no initial nodes are added (steps 3-7 in the specs are
   * omitted)
   * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   *
   * @param {string | false} [title]
   * A string containing the title to give the new HTML document.
   * @returns {Document}
   * The HTML document.
   * @since WHATWG Living Standard.
   * @see {@link #createDocument}
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
   * @see https://dom.spec.whatwg.org/#html-document
   */
  createHTMLDocument: function (title) {
    var doc = new Document(PDC, {
      contentType: MIME_TYPE.HTML
    });
    doc.implementation = this;
    doc.childNodes = new NodeList();
    if (title !== false) {
      doc.doctype = this.createDocumentType('html');
      doc.doctype.ownerDocument = doc;
      doc.appendChild(doc.doctype);
      var htmlNode = doc.createElement('html');
      doc.appendChild(htmlNode);
      var headNode = doc.createElement('head');
      htmlNode.appendChild(headNode);
      if (typeof title === 'string') {
        var titleNode = doc.createElement('title');
        titleNode.appendChild(doc.createTextNode(title));
        headNode.appendChild(titleNode);
      }
      htmlNode.appendChild(doc.createElement('body'));
    }
    return doc;
  }
};

/**
 * The DOM Node interface is an abstract base class upon which many other DOM API objects are
 * based, thus letting those object types to be used similarly and often interchangeably. As an
 * abstract class, there is no such thing as a plain Node object. All objects that implement
 * Node functionality are based on one of its subclasses. Most notable are Document, Element,
 * and DocumentFragment.
 *
 * In addition, every kind of DOM node is represented by an interface based on Node. These
 * include Attr, CharacterData (which Text, Comment, CDATASection and ProcessingInstruction are
 * all based on), and DocumentType.
 *
 * In some cases, a particular feature of the base Node interface may not apply to one of its
 * child interfaces; in that case, the inheriting node may return null or throw an exception,
 * depending on circumstances. For example, attempting to add children to a node type that
 * cannot have children will throw an exception.
 *
 * **This behavior is slightly different from the in the specs**:
 * - unimplemented interfaces: `EventTarget`
 *
 * @class
 * @abstract
 * @param {Symbol} symbol
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 * @see https://dom.spec.whatwg.org/#node
 * @prettierignore
 */
function Node(symbol) {
  checkSymbol(symbol);
}
Node.prototype = {
  /**
   * The first child of this node.
   *
   * @type {Node | null}
   */
  firstChild: null,
  /**
   * The last child of this node.
   *
   * @type {Node | null}
   */
  lastChild: null,
  /**
   * The previous sibling of this node.
   *
   * @type {Node | null}
   */
  previousSibling: null,
  /**
   * The next sibling of this node.
   *
   * @type {Node | null}
   */
  nextSibling: null,
  /**
   * The parent node of this node.
   *
   * @type {Node | null}
   */
  parentNode: null,
  /**
   * The parent element of this node.
   *
   * @type {Element | null}
   */
  get parentElement() {
    return this.parentNode && this.parentNode.nodeType === this.ELEMENT_NODE ? this.parentNode : null;
  },
  /**
   * The child nodes of this node.
   *
   * @type {NodeList}
   */
  childNodes: null,
  /**
   * The document object associated with this node.
   *
   * @type {Document | null}
   */
  ownerDocument: null,
  /**
   * The value of this node.
   *
   * @type {string | null}
   */
  nodeValue: null,
  /**
   * The namespace URI of this node.
   *
   * @type {string | null}
   */
  namespaceURI: null,
  /**
   * The prefix of the namespace for this node.
   *
   * @type {string | null}
   */
  prefix: null,
  /**
   * The local part of the qualified name of this node.
   *
   * @type {string | null}
   */
  localName: null,
  /**
   * The baseURI is currently always `about:blank`,
   * since that's what happens when you create a document from scratch.
   *
   * @type {'about:blank'}
   */
  baseURI: 'about:blank',
  /**
   * Is true if this node is part of a document.
   *
   * @type {boolean}
   */
  get isConnected() {
    var rootNode = this.getRootNode();
    return rootNode && rootNode.nodeType === rootNode.DOCUMENT_NODE;
  },
  /**
   * Checks whether `other` is an inclusive descendant of this node.
   *
   * @param {Node | null | undefined} other
   * The node to check.
   * @returns {boolean}
   * True if `other` is an inclusive descendant of this node; false otherwise.
   * @see https://dom.spec.whatwg.org/#dom-node-contains
   */
  contains: function (other) {
    if (!other) return false;
    var parent = other;
    do {
      if (this === parent) return true;
      parent = other.parentNode;
    } while (parent);
    return false;
  },
  /**
   * @typedef GetRootNodeOptions
   * @property {boolean} [composed=false]
   */
  /**
   * Searches for the root node of this node.
   *
   * **This behavior is slightly different from the in the specs**:
   * - ignores `options.composed`, since `ShadowRoot`s are unsupported, always returns root.
   *
   * @param {GetRootNodeOptions} [options]
   * @returns {Node}
   * Root node.
   * @see https://dom.spec.whatwg.org/#dom-node-getrootnode
   * @see https://dom.spec.whatwg.org/#concept-shadow-including-root
   */
  getRootNode: function (options) {
    var parent = this;
    do {
      if (!parent.parentNode) {
        return parent;
      }
      parent = parent.parentNode;
    } while (parent);
  },
  /**
   * Checks whether the given node is equal to this node.
   *
   * @param {Node} [otherNode]
   * @see https://dom.spec.whatwg.org/#concept-node-equals
   */
  isEqualNode: function (otherNode) {
    if (!otherNode) return false;
    if (this.nodeType !== otherNode.nodeType) return false;
    switch (this.nodeType) {
      case this.DOCUMENT_TYPE_NODE:
        if (this.name !== otherNode.name) return false;
        if (this.publicId !== otherNode.publicId) return false;
        if (this.systemId !== otherNode.systemId) return false;
        break;
      case this.ELEMENT_NODE:
        if (this.namespaceURI !== otherNode.namespaceURI) return false;
        if (this.prefix !== otherNode.prefix) return false;
        if (this.localName !== otherNode.localName) return false;
        if (this.attributes.length !== otherNode.attributes.length) return false;
        for (var i = 0; i < this.attributes.length; i++) {
          var attr = this.attributes.item(i);
          if (!attr.isEqualNode(otherNode.getAttributeNodeNS(attr.namespaceURI, attr.localName))) {
            return false;
          }
        }
        break;
      case this.ATTRIBUTE_NODE:
        if (this.namespaceURI !== otherNode.namespaceURI) return false;
        if (this.localName !== otherNode.localName) return false;
        if (this.value !== otherNode.value) return false;
        break;
      case this.PROCESSING_INSTRUCTION_NODE:
        if (this.target !== otherNode.target || this.data !== otherNode.data) {
          return false;
        }
        break;
      case this.TEXT_NODE:
      case this.COMMENT_NODE:
        if (this.data !== otherNode.data) return false;
        break;
    }
    if (this.childNodes.length !== otherNode.childNodes.length) {
      return false;
    }
    for (var i = 0; i < this.childNodes.length; i++) {
      if (!this.childNodes[i].isEqualNode(otherNode.childNodes[i])) {
        return false;
      }
    }
    return true;
  },
  /**
   * Checks whether or not the given node is this node.
   *
   * @param {Node} [otherNode]
   */
  isSameNode: function (otherNode) {
    return this === otherNode;
  },
  /**
   * Inserts a node before a reference node as a child of this node.
   *
   * @param {Node} newChild
   * The new child node to be inserted.
   * @param {Node | null} refChild
   * The reference node before which newChild will be inserted.
   * @returns {Node}
   * The new child node successfully inserted.
   * @throws {DOMException}
   * Throws a DOMException if inserting the node would result in a DOM tree that is not
   * well-formed, or if `child` is provided but is not a child of `parent`.
   * See {@link _insertBefore} for more details.
   * @since Modified in DOM L2
   */
  insertBefore: function (newChild, refChild) {
    return _insertBefore(this, newChild, refChild);
  },
  /**
   * Replaces an old child node with a new child node within this node.
   *
   * @param {Node} newChild
   * The new node that is to replace the old node.
   * If it already exists in the DOM, it is removed from its original position.
   * @param {Node} oldChild
   * The existing child node to be replaced.
   * @returns {Node}
   * Returns the replaced child node.
   * @throws {DOMException}
   * Throws a DOMException if replacing the node would result in a DOM tree that is not
   * well-formed, or if `oldChild` is not a child of `this`.
   * This can also occur if the pre-replacement validity assertion fails.
   * See {@link _insertBefore}, {@link Node.removeChild}, and
   * {@link assertPreReplacementValidityInDocument} for more details.
   * @see https://dom.spec.whatwg.org/#concept-node-replace
   */
  replaceChild: function (newChild, oldChild) {
    _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
    if (oldChild) {
      this.removeChild(oldChild);
    }
  },
  /**
   * Removes an existing child node from this node.
   *
   * @param {Node} oldChild
   * The child node to be removed.
   * @returns {Node}
   * Returns the removed child node.
   * @throws {DOMException}
   * Throws a DOMException if `oldChild` is not a child of `this`.
   * See {@link _removeChild} for more details.
   */
  removeChild: function (oldChild) {
    return _removeChild(this, oldChild);
  },
  /**
   * Appends a child node to this node.
   *
   * @param {Node} newChild
   * The child node to be appended to this node.
   * If it already exists in the DOM, it is removed from its original position.
   * @returns {Node}
   * Returns the appended child node.
   * @throws {DOMException}
   * Throws a DOMException if appending the node would result in a DOM tree that is not
   * well-formed, or if `newChild` is not a valid Node.
   * See {@link insertBefore} for more details.
   */
  appendChild: function (newChild) {
    return this.insertBefore(newChild, null);
  },
  /**
   * Determines whether this node has any child nodes.
   *
   * @returns {boolean}
   * Returns true if this node has any child nodes, and false otherwise.
   */
  hasChildNodes: function () {
    return this.firstChild != null;
  },
  /**
   * Creates a copy of the calling node.
   *
   * @param {boolean} deep
   * If true, the contents of the node are recursively copied.
   * If false, only the node itself (and its attributes, if it is an element) are copied.
   * @returns {Node}
   * Returns the newly created copy of the node.
   * @throws {DOMException}
   * May throw a DOMException if operations within {@link Element#setAttributeNode} or
   * {@link Node#appendChild} (which are potentially invoked in this method) do not meet their
   * specific constraints.
   * @see {@link cloneNode}
   */
  cloneNode: function (deep) {
    return cloneNode(this.ownerDocument || this, this, deep);
  },
  /**
   * Puts the specified node and all of its subtree into a "normalized" form. In a normalized
   * subtree, no text nodes in the subtree are empty and there are no adjacent text nodes.
   *
   * Specifically, this method merges any adjacent text nodes (i.e., nodes for which `nodeType`
   * is `TEXT_NODE`) into a single node with the combined data. It also removes any empty text
   * nodes.
   *
   * This method operates recursively, so it also normalizes any and all descendent nodes within
   * the subtree.
   *
   * @throws {DOMException}
   * May throw a DOMException if operations within removeChild or appendData (which are
   * potentially invoked in this method) do not meet their specific constraints.
   * @since Modified in DOM Level 2
   * @see {@link Node.removeChild}
   * @see {@link CharacterData.appendData}
   */
  normalize: function () {
    var child = this.firstChild;
    while (child) {
      var next = child.nextSibling;
      if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
        this.removeChild(next);
        child.appendData(next.data);
      } else {
        child.normalize();
        child = next;
      }
    }
  },
  /**
   * Checks whether the DOM implementation implements a specific feature and its version.
   *
   * @deprecated
   * Since `DOMImplementation.hasFeature` is deprecated and always returns true.
   * @param {string} feature
   * The package name of the feature to test. This is the same name that can be passed to the
   * method `hasFeature` on `DOMImplementation`.
   * @param {string} version
   * This is the version number of the package name to test.
   * @returns {boolean}
   * Returns true in all cases in the current implementation.
   * @since Introduced in DOM Level 2
   * @see {@link DOMImplementation.hasFeature}
   */
  isSupported: function (feature, version) {
    return this.ownerDocument.implementation.hasFeature(feature, version);
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * **This behavior is different from the in the specs**:
   * - no node type specific handling
   * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
   *
   * @param {string | null} namespaceURI
   * The namespace URI for which to find the associated prefix.
   * @returns {string | null}
   * The associated prefix, if found; otherwise, null.
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   * @prettierignore
   */
  lookupPrefix: function (namespaceURI) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      //console.dir(map)
      if (map) {
        for (var n in map) {
          if (hasOwn(map, n) && map[n] === namespaceURI) {
            return n;
          }
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  /**
   * This function is used to look up the namespace URI associated with the given prefix,
   * starting from this node.
   *
   * **This behavior is different from the in the specs**:
   * - no node type specific handling
   * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
   *
   * @param {string | null} prefix
   * The prefix for which to find the associated namespace URI.
   * @returns {string | null}
   * The associated namespace URI, if found; otherwise, null.
   * @since DOM Level 3
   * @see https://dom.spec.whatwg.org/#dom-node-lookupnamespaceuri
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespaceURI
   * @prettierignore
   */
  lookupNamespaceURI: function (prefix) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      //console.dir(map)
      if (map) {
        if (hasOwn(map, prefix)) {
          return map[prefix];
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  /**
   * Determines whether the given namespace URI is the default namespace.
   *
   * The function works by looking up the prefix associated with the given namespace URI. If no
   * prefix is found (i.e., the namespace URI is not registered in the namespace map of this
   * node or any of its ancestors), it returns `true`, implying the namespace URI is considered
   * the default.
   *
   * **This behavior is different from the in the specs**:
   * - no node type specific handling
   * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
   *
   * @param {string | null} namespaceURI
   * The namespace URI to be checked.
   * @returns {boolean}
   * Returns true if the given namespace URI is the default namespace, false otherwise.
   * @since DOM Level 3
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isDefaultNamespace
   * @see https://dom.spec.whatwg.org/#dom-node-isdefaultnamespace
   * @prettierignore
   */
  isDefaultNamespace: function (namespaceURI) {
    var prefix = this.lookupPrefix(namespaceURI);
    return prefix == null;
  },
  /**
   * Compares the reference node with a node with regard to their position in the document and
   * according to the document order.
   *
   * @param {Node} other
   * The node to compare the reference node to.
   * @returns {number}
   * Returns how the node is positioned relatively to the reference node according to the
   * bitmask. 0 if reference node and given node are the same.
   * @since DOM Level 3
   * @see https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-compare
   * @see https://dom.spec.whatwg.org/#dom-node-comparedocumentposition
   */
  compareDocumentPosition: function (other) {
    if (this === other) return 0;
    var node1 = other;
    var node2 = this;
    var attr1 = null;
    var attr2 = null;
    if (node1 instanceof Attr) {
      attr1 = node1;
      node1 = attr1.ownerElement;
    }
    if (node2 instanceof Attr) {
      attr2 = node2;
      node2 = attr2.ownerElement;
      if (attr1 && node1 && node2 === node1) {
        for (var i = 0, attr; attr = node2.attributes[i]; i++) {
          if (attr === attr1) return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
          if (attr === attr2) return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
        }
      }
    }
    if (!node1 || !node2 || node2.ownerDocument !== node1.ownerDocument) {
      return DocumentPosition.DOCUMENT_POSITION_DISCONNECTED + DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + (docGUID(node2.ownerDocument) > docGUID(node1.ownerDocument) ? DocumentPosition.DOCUMENT_POSITION_FOLLOWING : DocumentPosition.DOCUMENT_POSITION_PRECEDING);
    }
    if (attr2 && node1 === node2) {
      return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
    }
    if (attr1 && node1 === node2) {
      return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
    }
    var chain1 = [];
    var ancestor1 = node1.parentNode;
    while (ancestor1) {
      if (!attr2 && ancestor1 === node2) {
        return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
      }
      chain1.push(ancestor1);
      ancestor1 = ancestor1.parentNode;
    }
    chain1.reverse();
    var chain2 = [];
    var ancestor2 = node2.parentNode;
    while (ancestor2) {
      if (!attr1 && ancestor2 === node1) {
        return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
      }
      chain2.push(ancestor2);
      ancestor2 = ancestor2.parentNode;
    }
    chain2.reverse();
    var ca = commonAncestor(chain1, chain2);
    for (var n in ca.childNodes) {
      var child = ca.childNodes[n];
      if (child === node2) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
      if (child === node1) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
      if (chain2.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
      if (chain1.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
    }
    return 0;
  }
};

/**
 * Encodes special XML characters to their corresponding entities.
 *
 * @param {string} c
 * The character to be encoded.
 * @returns {string}
 * The encoded character.
 * @private
 */
function _xmlEncoder(c) {
  return c == '<' && '&lt;' || c == '>' && '&gt;' || c == '&' && '&amp;' || c == '"' && '&quot;' || '&#' + c.charCodeAt() + ';';
}
copy(NodeType, Node);
copy(NodeType, Node.prototype);
copy(DocumentPosition, Node);
copy(DocumentPosition, Node.prototype);

/**
 * @param callback
 * Return true for continue,false for break.
 * @returns
 * boolean true: break visit;
 */
function _visitNode(node, callback) {
  if (callback(node)) {
    return true;
  }
  if (node = node.firstChild) {
    do {
      if (_visitNode(node, callback)) {
        return true;
      }
    } while (node = node.nextSibling);
  }
}

/**
 * @typedef DocumentOptions
 * @property {string} [contentType=MIME_TYPE.XML_APPLICATION]
 */
/**
 * The Document interface describes the common properties and methods for any kind of document.
 *
 * It should usually be created using `new DOMImplementation().createDocument(...)`
 * or `new DOMImplementation().createHTMLDocument(...)`.
 *
 * The constructor is considered a private API and offers to initially set the `contentType`
 * property via it's options parameter.
 *
 * @class
 * @param {Symbol} symbol
 * @param {DocumentOptions} [options]
 * @augments Node
 * @private
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document
 * @see https://dom.spec.whatwg.org/#interface-document
 */
function Document(symbol, options) {
  checkSymbol(symbol);
  var opt = options || {};
  this.ownerDocument = this;
  /**
   * The mime type of the document is determined at creation time and can not be modified.
   *
   * @type {string}
   * @see https://dom.spec.whatwg.org/#concept-document-content-type
   * @see {@link DOMImplementation}
   * @see {@link MIME_TYPE}
   * @readonly
   */
  this.contentType = opt.contentType || MIME_TYPE.XML_APPLICATION;
  /**
   * @type {'html' | 'xml'}
   * @see https://dom.spec.whatwg.org/#concept-document-type
   * @see {@link DOMImplementation}
   * @readonly
   */
  this.type = isHTMLMimeType(this.contentType) ? 'html' : 'xml';
}

/**
 * Updates the namespace mapping of an element when a new attribute is added.
 *
 * @param {Document} doc
 * The document that the element belongs to.
 * @param {Element} el
 * The element to which the attribute is being added.
 * @param {Attr} newAttr
 * The new attribute being added.
 * @private
 */
function _onAddAttribute(doc, el, newAttr) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns === NAMESPACE.XMLNS) {
    //update namespace
    el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
  }
}

/**
 * Updates the namespace mapping of an element when an attribute is removed.
 *
 * @param {Document} doc
 * The document that the element belongs to.
 * @param {Element} el
 * The element from which the attribute is being removed.
 * @param {Attr} newAttr
 * The attribute being removed.
 * @param {boolean} remove
 * Indicates whether the attribute is to be removed.
 * @private
 */
function _onRemoveAttribute(doc, el, newAttr, remove) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns === NAMESPACE.XMLNS) {
    //update namespace
    delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
  }
}

/**
 * Updates `parent.childNodes`, adjusting the indexed items and its `length`.
 * If `newChild` is provided and has no nextSibling, it will be appended.
 * Otherwise, it's assumed that an item has been removed or inserted,
 * and `parent.firstNode` and its `.nextSibling` to re-indexing all child nodes of `parent`.
 *
 * @param {Document} doc
 * The parent document of `el`.
 * @param {Node} parent
 * The parent node whose childNodes list needs to be updated.
 * @param {Node} [newChild]
 * The new child node to be appended. If not provided, the function assumes a node has been
 * removed.
 * @private
 */
function _onUpdateChild(doc, parent, newChild) {
  if (doc && doc._inc) {
    doc._inc++;
    var childNodes = parent.childNodes;
    // assumes nextSibling and previousSibling were already configured upfront
    if (newChild && !newChild.nextSibling) {
      // if an item has been appended, we only need to update the last index and the length
      childNodes[childNodes.length++] = newChild;
    } else {
      // otherwise we need to reindex all items,
      // which can take a while when processing nodes with a lot of children
      var child = parent.firstChild;
      var i = 0;
      while (child) {
        childNodes[i++] = child;
        child = child.nextSibling;
      }
      childNodes.length = i;
      delete childNodes[childNodes.length];
    }
  }
}

/**
 * Removes the connections between `parentNode` and `child`
 * and any existing `child.previousSibling` or `child.nextSibling`.
 *
 * @param {Node} parentNode
 * The parent node from which the child node is to be removed.
 * @param {Node} child
 * The child node to be removed from the parentNode.
 * @returns {Node}
 * Returns the child node that was removed.
 * @throws {DOMException}
 * With code:
 * - {@link DOMException.NOT_FOUND_ERR} If the parentNode is not the parent of the child node.
 * @private
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 */
function _removeChild(parentNode, child) {
  if (parentNode !== child.parentNode) {
    throw new DOMException(DOMException.NOT_FOUND_ERR, "child's parent is not parent");
  }
  var oldPreviousSibling = child.previousSibling;
  var oldNextSibling = child.nextSibling;
  if (oldPreviousSibling) {
    oldPreviousSibling.nextSibling = oldNextSibling;
  } else {
    parentNode.firstChild = oldNextSibling;
  }
  if (oldNextSibling) {
    oldNextSibling.previousSibling = oldPreviousSibling;
  } else {
    parentNode.lastChild = oldPreviousSibling;
  }
  _onUpdateChild(parentNode.ownerDocument, parentNode);
  child.parentNode = null;
  child.previousSibling = null;
  child.nextSibling = null;
  return child;
}

/**
 * Returns `true` if `node` can be a parent for insertion.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function hasValidParentNodeType(node) {
  return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
}

/**
 * Returns `true` if `node` can be inserted according to it's `nodeType`.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function hasInsertableNodeType(node) {
  return node && (node.nodeType === Node.CDATA_SECTION_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.DOCUMENT_TYPE_NODE || node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE || node.nodeType === Node.TEXT_NODE);
}

/**
 * Returns true if `node` is a DOCTYPE node.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function isDocTypeNode(node) {
  return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
}

/**
 * Returns true if the node is an element.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function isElementNode(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Returns true if `node` is a text node.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function isTextNode(node) {
  return node && node.nodeType === Node.TEXT_NODE;
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Document} doc
 * The document node.
 * @param {Node} child
 * The node that would become the nextSibling if the element would be inserted.
 * @returns {boolean}
 * `true` if an element can be inserted before child.
 * @private
 */
function isElementInsertionPossible(doc, child) {
  var parentChildNodes = doc.childNodes || [];
  if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
    return false;
  }
  var docTypeNode = find(parentChildNodes, isDocTypeNode);
  return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Node} doc
 * The document node.
 * @param {Node} child
 * The node that would become the nextSibling if the element would be inserted.
 * @returns {boolean}
 * `true` if an element can be inserted before child.
 * @private
 */
function isElementReplacementPossible(doc, child) {
  var parentChildNodes = doc.childNodes || [];
  function hasElementChildThatIsNotChild(node) {
    return isElementNode(node) && node !== child;
  }
  if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
    return false;
  }
  var docTypeNode = find(parentChildNodes, isDocTypeNode);
  return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Asserts pre-insertion validity of a node into a parent before a child.
 * Throws errors for invalid node combinations that would result in an ill-formed DOM.
 *
 * @param {Node} parent
 * The parent node to insert `node` into.
 * @param {Node} node
 * The node to insert.
 * @param {Node | null} child
 * The node that should become the `nextSibling` of `node`. If null, no sibling is considered.
 * @throws {DOMException}
 * With code:
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `parent` is not a Document,
 * DocumentFragment, or Element node.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a host-including inclusive
 * ancestor of `parent`. (Currently not implemented)
 * - {@link DOMException.NOT_FOUND_ERR} If `child` is non-null and its `parent` is not
 * `parent`.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is not a DocumentFragment,
 * DocumentType, Element, or CharacterData node.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If either `node` is a Text node and `parent` is
 * a document, or if `node` is a doctype and `parent` is not a document.
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidity1to5(parent, node, child) {
  // 1. If `parent` is not a Document, DocumentFragment, or Element node, then throw a "HierarchyRequestError" DOMException.
  if (!hasValidParentNodeType(parent)) {
    throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Unexpected parent node type ' + parent.nodeType);
  }
  // 2. If `node` is a host-including inclusive ancestor of `parent`, then throw a "HierarchyRequestError" DOMException.
  // not implemented!
  // 3. If `child` is non-null and its parent is not `parent`, then throw a "NotFoundError" DOMException.
  if (child && child.parentNode !== parent) {
    throw new DOMException(DOMException.NOT_FOUND_ERR, 'child not in parent');
  }
  if (
  // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
  !hasInsertableNodeType(node) ||
  // 5. If either `node` is a Text node and `parent` is a document,
  // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
  // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
  // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
  isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE) {
    throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Unexpected node type ' + node.nodeType + ' for parent node type ' + parent.nodeType);
  }
}

/**
 * Asserts pre-insertion validity of a node into a document before a child.
 * Throws errors for invalid node combinations that would result in an ill-formed DOM.
 *
 * @param {Document} parent
 * The parent node to insert `node` into.
 * @param {Node} node
 * The node to insert.
 * @param {Node | undefined} child
 * The node that should become the `nextSibling` of `node`. If undefined, no sibling is
 * considered.
 * @returns {Node}
 * @throws {DOMException}
 * With code:
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with more than
 * one element child or has a Text node child.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with one
 * element child and either `parent` has an element child, `child` is a doctype, or `child` is
 * non-null and a doctype is following `child`.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is an Element and `parent` has an
 * element child, `child` is a doctype, or `child` is non-null and a doctype is following
 * `child`.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentType and `parent` has a
 * doctype child, `child` is non-null and an element is preceding `child`, or `child` is null
 * and `parent` has an element child.
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidityInDocument(parent, node, child) {
  var parentChildNodes = parent.childNodes || [];
  var nodeChildNodes = node.childNodes || [];

  // DocumentFragment
  if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    var nodeChildElements = nodeChildNodes.filter(isElementNode);
    // If node has more than one element child or has a Text node child.
    if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
    }
    // Otherwise, if `node` has one element child and either `parent` has an element child,
    // `child` is a doctype, or `child` is non-null and a doctype is following `child`.
    if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
    }
  }
  // Element
  if (isElementNode(node)) {
    // `parent` has an element child, `child` is a doctype,
    // or `child` is non-null and a doctype is following `child`.
    if (!isElementInsertionPossible(parent, child)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
    }
  }
  // DocumentType
  if (isDocTypeNode(node)) {
    // `parent` has a doctype child,
    if (find(parentChildNodes, isDocTypeNode)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
    }
    var parentElementChild = find(parentChildNodes, isElementNode);
    // `child` is non-null and an element is preceding `child`,
    if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
    }
    // or `child` is null and `parent` has an element child.
    if (!child && parentElementChild) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can not be appended since element is present');
    }
  }
}

/**
 * @param {Document} parent
 * The parent node to insert `node` into.
 * @param {Node} node
 * The node to insert.
 * @param {Node | undefined} child
 * the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws {DOMException}
 * For several node combinations that would create a DOM that is not well-formed.
 * @throws {DOMException}
 * If `child` is provided but is not a child of `parent`.
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreReplacementValidityInDocument(parent, node, child) {
  var parentChildNodes = parent.childNodes || [];
  var nodeChildNodes = node.childNodes || [];

  // DocumentFragment
  if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    var nodeChildElements = nodeChildNodes.filter(isElementNode);
    // If `node` has more than one element child or has a Text node child.
    if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
    }
    // Otherwise, if `node` has one element child and either `parent` has an element child that is not `child` or a doctype is following `child`.
    if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
    }
  }
  // Element
  if (isElementNode(node)) {
    // `parent` has an element child that is not `child` or a doctype is following `child`.
    if (!isElementReplacementPossible(parent, child)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
    }
  }
  // DocumentType
  if (isDocTypeNode(node)) {
    function hasDoctypeChildThatIsNotChild(node) {
      return isDocTypeNode(node) && node !== child;
    }

    // `parent` has a doctype child that is not `child`,
    if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
    }
    var parentElementChild = find(parentChildNodes, isElementNode);
    // or an element is preceding `child`.
    if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
      throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
    }
  }
}

/**
 * Inserts a node into a parent node before a child node.
 *
 * @param {Node} parent
 * The parent node to insert the node into.
 * @param {Node} node
 * The node to insert into the parent.
 * @param {Node | null} child
 * The node that should become the next sibling of the node.
 * If null, the function inserts the node at the end of the children of the parent node.
 * @param {Function} [_inDocumentAssertion]
 * An optional function to check pre-insertion validity if parent is a document node.
 * Defaults to {@link assertPreInsertionValidityInDocument}
 * @returns {Node}
 * Returns the inserted node.
 * @throws {DOMException}
 * Throws a DOMException if inserting the node would result in a DOM tree that is not
 * well-formed. See {@link assertPreInsertionValidity1to5},
 * {@link assertPreInsertionValidityInDocument}.
 * @throws {DOMException}
 * Throws a DOMException if child is provided but is not a child of the parent. See
 * {@link Node.removeChild}
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function _insertBefore(parent, node, child, _inDocumentAssertion) {
  // To ensure pre-insertion validity of a node into a parent before a child, run these steps:
  assertPreInsertionValidity1to5(parent, node, child);

  // If parent is a document, and any of the statements below, switched on the interface node implements,
  // are true, then throw a "HierarchyRequestError" DOMException.
  if (parent.nodeType === Node.DOCUMENT_NODE) {
    (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
  }
  var cp = node.parentNode;
  if (cp) {
    cp.removeChild(node); //remove and update
  }

  if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
    var newFirst = node.firstChild;
    if (newFirst == null) {
      return node;
    }
    var newLast = node.lastChild;
  } else {
    newFirst = newLast = node;
  }
  var pre = child ? child.previousSibling : parent.lastChild;
  newFirst.previousSibling = pre;
  newLast.nextSibling = child;
  if (pre) {
    pre.nextSibling = newFirst;
  } else {
    parent.firstChild = newFirst;
  }
  if (child == null) {
    parent.lastChild = newLast;
  } else {
    child.previousSibling = newLast;
  }
  do {
    newFirst.parentNode = parent;
  } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
  _onUpdateChild(parent.ownerDocument || parent, parent, node);
  if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
    node.firstChild = node.lastChild = null;
  }
  return node;
}
Document.prototype = {
  /**
   * The implementation that created this document.
   *
   * @type DOMImplementation
   * @readonly
   */
  implementation: null,
  nodeName: '#document',
  nodeType: DOCUMENT_NODE,
  /**
   * The DocumentType node of the document.
   *
   * @type DocumentType
   * @readonly
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function (newChild, refChild) {
    //raises
    if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
      var child = newChild.firstChild;
      while (child) {
        var next = child.nextSibling;
        this.insertBefore(child, refChild);
        child = next;
      }
      return newChild;
    }
    _insertBefore(this, newChild, refChild);
    newChild.ownerDocument = this;
    if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
      this.documentElement = newChild;
    }
    return newChild;
  },
  removeChild: function (oldChild) {
    var removed = _removeChild(this, oldChild);
    if (removed === this.documentElement) {
      this.documentElement = null;
    }
    return removed;
  },
  replaceChild: function (newChild, oldChild) {
    //raises
    _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
    newChild.ownerDocument = this;
    if (oldChild) {
      this.removeChild(oldChild);
    }
    if (isElementNode(newChild)) {
      this.documentElement = newChild;
    }
  },
  // Introduced in DOM Level 2:
  importNode: function (importedNode, deep) {
    return importNode(this, importedNode, deep);
  },
  // Introduced in DOM Level 2:
  getElementById: function (id) {
    var rtv = null;
    _visitNode(this.documentElement, function (node) {
      if (node.nodeType == ELEMENT_NODE) {
        if (node.getAttribute('id') == id) {
          rtv = node;
          return true;
        }
      }
    });
    return rtv;
  },
  /**
   * Creates a new `Element` that is owned by this `Document`.
   * In HTML Documents `localName` is the lower cased `tagName`,
   * otherwise no transformation is being applied.
   * When `contentType` implies the HTML namespace, it will be set as `namespaceURI`.
   *
   * __This implementation differs from the specification:__ - The provided name is not checked
   * against the `Name` production,
   * so no related error will be thrown.
   * - There is no interface `HTMLElement`, it is always an `Element`.
   * - There is no support for a second argument to indicate using custom elements.
   *
   * @param {string} tagName
   * @returns {Element}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
   * @see https://dom.spec.whatwg.org/#dom-document-createelement
   * @see https://dom.spec.whatwg.org/#concept-create-element
   */
  createElement: function (tagName) {
    var node = new Element(PDC);
    node.ownerDocument = this;
    if (this.type === 'html') {
      tagName = tagName.toLowerCase();
    }
    if (hasDefaultHTMLNamespace(this.contentType)) {
      node.namespaceURI = NAMESPACE.HTML;
    }
    node.nodeName = tagName;
    node.tagName = tagName;
    node.localName = tagName;
    node.childNodes = new NodeList();
    var attrs = node.attributes = new NamedNodeMap();
    attrs._ownerElement = node;
    return node;
  },
  /**
   * @returns {DocumentFragment}
   */
  createDocumentFragment: function () {
    var node = new DocumentFragment(PDC);
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    return node;
  },
  /**
   * @param {string} data
   * @returns {Text}
   */
  createTextNode: function (data) {
    var node = new Text(PDC);
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    node.appendData(data);
    return node;
  },
  /**
   * @param {string} data
   * @returns {Comment}
   */
  createComment: function (data) {
    var node = new Comment(PDC);
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    node.appendData(data);
    return node;
  },
  /**
   * @param {string} data
   * @returns {CDATASection}
   */
  createCDATASection: function (data) {
    var node = new CDATASection(PDC);
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    node.appendData(data);
    return node;
  },
  /**
   * @param {string} target
   * @param {string} data
   * @returns {ProcessingInstruction}
   */
  createProcessingInstruction: function (target, data) {
    var node = new ProcessingInstruction(PDC);
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    node.nodeName = node.target = target;
    node.nodeValue = node.data = data;
    return node;
  },
  /**
   * Creates an `Attr` node that is owned by this document.
   * In HTML Documents `localName` is the lower cased `name`,
   * otherwise no transformation is being applied.
   *
   * __This implementation differs from the specification:__ - The provided name is not checked
   * against the `Name` production,
   * so no related error will be thrown.
   *
   * @param {string} name
   * @returns {Attr}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute
   * @see https://dom.spec.whatwg.org/#dom-document-createattribute
   */
  createAttribute: function (name) {
    if (!g.QName_exact.test(name)) {
      throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in name "' + name + '"');
    }
    if (this.type === 'html') {
      name = name.toLowerCase();
    }
    return this._createAttribute(name);
  },
  _createAttribute: function (name) {
    var node = new Attr(PDC);
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    node.name = name;
    node.nodeName = name;
    node.localName = name;
    node.specified = true;
    return node;
  },
  /**
   * Creates an EntityReference object.
   * The current implementation does not fill the `childNodes` with those of the corresponding
   * `Entity`
   *
   * @deprecated
   * In DOM Level 4.
   * @param {string} name
   * The name of the entity to reference. No namespace well-formedness checks are performed.
   * @returns {EntityReference}
   * @throws {DOMException}
   * With code `INVALID_CHARACTER_ERR` when `name` is not valid.
   * @throws {DOMException}
   * with code `NOT_SUPPORTED_ERR` when the document is of type `html`
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE
   */
  createEntityReference: function (name) {
    if (!g.Name.test(name)) {
      throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'not a valid xml name "' + name + '"');
    }
    if (this.type === 'html') {
      throw new DOMException('document is an html document', DOMExceptionName.NotSupportedError);
    }
    var node = new EntityReference(PDC);
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    node.nodeName = name;
    return node;
  },
  // Introduced in DOM Level 2:
  /**
   * @param {string} namespaceURI
   * @param {string} qualifiedName
   * @returns {Element}
   */
  createElementNS: function (namespaceURI, qualifiedName) {
    var validated = validateAndExtract(namespaceURI, qualifiedName);
    var node = new Element(PDC);
    var attrs = node.attributes = new NamedNodeMap();
    node.childNodes = new NodeList();
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.tagName = qualifiedName;
    node.namespaceURI = validated[0];
    node.prefix = validated[1];
    node.localName = validated[2];
    attrs._ownerElement = node;
    return node;
  },
  // Introduced in DOM Level 2:
  /**
   * @param {string} namespaceURI
   * @param {string} qualifiedName
   * @returns {Attr}
   */
  createAttributeNS: function (namespaceURI, qualifiedName) {
    var validated = validateAndExtract(namespaceURI, qualifiedName);
    var node = new Attr(PDC);
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    node.nodeName = qualifiedName;
    node.name = qualifiedName;
    node.specified = true;
    node.namespaceURI = validated[0];
    node.prefix = validated[1];
    node.localName = validated[2];
    return node;
  }
};
_extends(Document, Node);
function Element(symbol) {
  checkSymbol(symbol);
  this._nsMap = Object.create(null);
}
Element.prototype = {
  nodeType: ELEMENT_NODE,
  /**
   * The attributes of this element.
   *
   * @type {NamedNodeMap | null}
   */
  attributes: null,
  getQualifiedName: function () {
    return this.prefix ? this.prefix + ':' + this.localName : this.localName;
  },
  _isInHTMLDocumentAndNamespace: function () {
    return this.ownerDocument.type === 'html' && this.namespaceURI === NAMESPACE.HTML;
  },
  /**
   * Implementaton of Level2 Core function hasAttributes.
   *
   * @returns {boolean}
   * True if attribute list is not empty.
   * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-NodeHasAttrs
   */
  hasAttributes: function () {
    return !!(this.attributes && this.attributes.length);
  },
  hasAttribute: function (name) {
    return !!this.getAttributeNode(name);
  },
  /**
   * Returns element’s first attribute whose qualified name is `name`, and `null`
   * if there is no such attribute.
   *
   * @param {string} name
   * @returns {string | null}
   */
  getAttribute: function (name) {
    var attr = this.getAttributeNode(name);
    return attr ? attr.value : null;
  },
  getAttributeNode: function (name) {
    if (this._isInHTMLDocumentAndNamespace()) {
      name = name.toLowerCase();
    }
    return this.attributes.getNamedItem(name);
  },
  /**
   * Sets the value of element’s first attribute whose qualified name is qualifiedName to value.
   *
   * @param {string} name
   * @param {string} value
   */
  setAttribute: function (name, value) {
    if (this._isInHTMLDocumentAndNamespace()) {
      name = name.toLowerCase();
    }
    var attr = this.getAttributeNode(name);
    if (attr) {
      attr.value = attr.nodeValue = '' + value;
    } else {
      attr = this.ownerDocument._createAttribute(name);
      attr.value = attr.nodeValue = '' + value;
      this.setAttributeNode(attr);
    }
  },
  removeAttribute: function (name) {
    var attr = this.getAttributeNode(name);
    attr && this.removeAttributeNode(attr);
  },
  setAttributeNode: function (newAttr) {
    return this.attributes.setNamedItem(newAttr);
  },
  setAttributeNodeNS: function (newAttr) {
    return this.attributes.setNamedItemNS(newAttr);
  },
  removeAttributeNode: function (oldAttr) {
    //console.log(this == oldAttr.ownerElement)
    return this.attributes.removeNamedItem(oldAttr.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function (namespaceURI, localName) {
    var old = this.getAttributeNodeNS(namespaceURI, localName);
    old && this.removeAttributeNode(old);
  },
  hasAttributeNS: function (namespaceURI, localName) {
    return this.getAttributeNodeNS(namespaceURI, localName) != null;
  },
  /**
   * Returns element’s attribute whose namespace is `namespaceURI` and local name is
   * `localName`,
   * or `null` if there is no such attribute.
   *
   * @param {string} namespaceURI
   * @param {string} localName
   * @returns {string | null}
   */
  getAttributeNS: function (namespaceURI, localName) {
    var attr = this.getAttributeNodeNS(namespaceURI, localName);
    return attr ? attr.value : null;
  },
  /**
   * Sets the value of element’s attribute whose namespace is `namespaceURI` and local name is
   * `localName` to value.
   *
   * @param {string} namespaceURI
   * @param {string} qualifiedName
   * @param {string} value
   * @see https://dom.spec.whatwg.org/#dom-element-setattributens
   */
  setAttributeNS: function (namespaceURI, qualifiedName, value) {
    var validated = validateAndExtract(namespaceURI, qualifiedName);
    var localName = validated[2];
    var attr = this.getAttributeNodeNS(namespaceURI, localName);
    if (attr) {
      attr.value = attr.nodeValue = '' + value;
    } else {
      attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
      attr.value = attr.nodeValue = '' + value;
      this.setAttributeNode(attr);
    }
  },
  getAttributeNodeNS: function (namespaceURI, localName) {
    return this.attributes.getNamedItemNS(namespaceURI, localName);
  },
  /**
   * Returns a LiveNodeList of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classNames` is an empty string or only contains HTML white space
   * characters.
   *
   * Warning: This returns a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames
   * Is a string representing the class name(s) to match; multiple class names are separated by
   * (ASCII-)whitespace.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function (classNames) {
    var classNamesSet = toOrderedSet(classNames);
    return new LiveNodeList(this, function (base) {
      var ls = [];
      if (classNamesSet.length > 0) {
        _visitNode(base, function (node) {
          if (node !== base && node.nodeType === ELEMENT_NODE) {
            var nodeClassNames = node.getAttribute('class');
            // can be null if the attribute does not exist
            if (nodeClassNames) {
              // before splitting and iterating just compare them for the most common case
              var matches = classNames === nodeClassNames;
              if (!matches) {
                var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
              }
              if (matches) {
                ls.push(node);
              }
            }
          }
        });
      }
      return ls;
    });
  },
  /**
   * Returns a LiveNodeList of elements with the given qualifiedName.
   * Searching for all descendants can be done by passing `*` as `qualifiedName`.
   *
   * All descendants of the specified element are searched, but not the element itself.
   * The returned list is live, which means it updates itself with the DOM tree automatically.
   * Therefore, there is no need to call `Element.getElementsByTagName()`
   * with the same element and arguments repeatedly if the DOM changes in between calls.
   *
   * When called on an HTML element in an HTML document,
   * `getElementsByTagName` lower-cases the argument before searching for it.
   * This is undesirable when trying to match camel-cased SVG elements (such as
   * `<linearGradient>`) in an HTML document.
   * Instead, use `Element.getElementsByTagNameNS()`,
   * which preserves the capitalization of the tag name.
   *
   * `Element.getElementsByTagName` is similar to `Document.getElementsByTagName()`,
   * except that it only searches for elements that are descendants of the specified element.
   *
   * @param {string} qualifiedName
   * @returns {LiveNodeList}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbytagname
   */
  getElementsByTagName: function (qualifiedName) {
    var isHTMLDocument = (this.nodeType === DOCUMENT_NODE ? this : this.ownerDocument).type === 'html';
    var lowerQualifiedName = qualifiedName.toLowerCase();
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node === base || node.nodeType !== ELEMENT_NODE) {
          return;
        }
        if (qualifiedName === '*') {
          ls.push(node);
        } else {
          var nodeQualifiedName = node.getQualifiedName();
          var matchingQName = isHTMLDocument && node.namespaceURI === NAMESPACE.HTML ? lowerQualifiedName : qualifiedName;
          if (nodeQualifiedName === matchingQName) {
            ls.push(node);
          }
        }
      });
      return ls;
    });
  },
  getElementsByTagNameNS: function (namespaceURI, localName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)) {
          ls.push(node);
        }
      });
      return ls;
    });
  }
};
Document.prototype.getElementsByClassName = Element.prototype.getElementsByClassName;
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
_extends(Element, Node);
function Attr(symbol) {
  checkSymbol(symbol);
  this.namespaceURI = null;
  this.prefix = null;
  this.ownerElement = null;
}
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr, Node);
function CharacterData(symbol) {
  checkSymbol(symbol);
}
CharacterData.prototype = {
  data: '',
  substringData: function (offset, count) {
    return this.data.substring(offset, offset + count);
  },
  appendData: function (text) {
    text = this.data + text;
    this.nodeValue = this.data = text;
    this.length = text.length;
  },
  insertData: function (offset, text) {
    this.replaceData(offset, 0, text);
  },
  deleteData: function (offset, count) {
    this.replaceData(offset, count, '');
  },
  replaceData: function (offset, count, text) {
    var start = this.data.substring(0, offset);
    var end = this.data.substring(offset + count);
    text = start + text + end;
    this.nodeValue = this.data = text;
    this.length = text.length;
  }
};
_extends(CharacterData, Node);
function Text(symbol) {
  checkSymbol(symbol);
}
Text.prototype = {
  nodeName: '#text',
  nodeType: TEXT_NODE,
  splitText: function (offset) {
    var text = this.data;
    var newText = text.substring(offset);
    text = text.substring(0, offset);
    this.data = this.nodeValue = text;
    this.length = text.length;
    var newNode = this.ownerDocument.createTextNode(newText);
    if (this.parentNode) {
      this.parentNode.insertBefore(newNode, this.nextSibling);
    }
    return newNode;
  }
};
_extends(Text, CharacterData);
function Comment(symbol) {
  checkSymbol(symbol);
}
Comment.prototype = {
  nodeName: '#comment',
  nodeType: COMMENT_NODE
};
_extends(Comment, CharacterData);
function CDATASection(symbol) {
  checkSymbol(symbol);
}
CDATASection.prototype = {
  nodeName: '#cdata-section',
  nodeType: CDATA_SECTION_NODE
};
_extends(CDATASection, Text);
function DocumentType(symbol) {
  checkSymbol(symbol);
}
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType, Node);
function Notation(symbol) {
  checkSymbol(symbol);
}
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation, Node);
function Entity(symbol) {
  checkSymbol(symbol);
}
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity, Node);
function EntityReference(symbol) {
  checkSymbol(symbol);
}
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference, Node);
function DocumentFragment(symbol) {
  checkSymbol(symbol);
}
DocumentFragment.prototype.nodeName = '#document-fragment';
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment, Node);
function ProcessingInstruction(symbol) {
  checkSymbol(symbol);
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction, CharacterData);
function XMLSerializer() {}
XMLSerializer.prototype.serializeToString = function (node, nodeFilter) {
  return nodeSerializeToString.call(node, nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(nodeFilter) {
  var buf = [];
  var refNode = this.nodeType === DOCUMENT_NODE && this.documentElement || this;
  var prefix = refNode.prefix;
  var uri = refNode.namespaceURI;
  if (uri && prefix == null) {
    var prefix = refNode.lookupPrefix(uri);
    if (prefix == null) {
      var visibleNamespaces = [{
        namespace: uri,
        prefix: null
      }
      //{namespace:uri,prefix:''}
      ];
    }
  }

  serializeToString(this, buf, nodeFilter, visibleNamespaces);
  return buf.join('');
}
function needNamespaceDefine(node, isHTML, visibleNamespaces) {
  var prefix = node.prefix || '';
  var uri = node.namespaceURI;
  // According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
  // and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
  // > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
  // in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
  // and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
  // > [...] Furthermore, the attribute value [...] must not be an empty string.
  // so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
  if (!uri) {
    return false;
  }
  if (prefix === 'xml' && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
    return false;
  }
  var i = visibleNamespaces.length;
  while (i--) {
    var ns = visibleNamespaces[i];
    // get namespace prefix
    if (ns.prefix === prefix) {
      return ns.namespace !== uri;
    }
  }
  return true;
}
/**
 * Literal whitespace other than space that appear in attribute values are serialized as
 * their entity references, so they will be preserved.
 * (In contrast to whitespace literals in the input which are normalized to spaces).
 *
 * Well-formed constraint: No < in Attribute Values:
 * > The replacement text of any entity referred to directly or indirectly
 * > in an attribute value must not contain a <.
 *
 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
 * @see https://www.w3.org/TR/xml11/#NT-AttValue
 * @see https://www.w3.org/TR/xml11/#AVNormalize
 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
 * @prettierignore
 */
function addSerializedAttribute(buf, qualifiedName, value) {
  buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
}
function serializeToString(node, buf, nodeFilter, visibleNamespaces) {
  if (!visibleNamespaces) {
    visibleNamespaces = [];
  }
  var doc = node.nodeType === DOCUMENT_NODE ? node : node.ownerDocument;
  var isHTML = doc.type === 'html';
  if (nodeFilter) {
    node = nodeFilter(node);
    if (node) {
      if (typeof node == 'string') {
        buf.push(node);
        return;
      }
    } else {
      return;
    }
    //buf.sort.apply(attrs, attributeSorter);
  }

  switch (node.nodeType) {
    case ELEMENT_NODE:
      var attrs = node.attributes;
      var len = attrs.length;
      var child = node.firstChild;
      var nodeName = node.tagName;
      var prefixedNodeName = nodeName;
      if (!isHTML && !node.prefix && node.namespaceURI) {
        var defaultNS;
        // lookup current default ns from `xmlns` attribute
        for (var ai = 0; ai < attrs.length; ai++) {
          if (attrs.item(ai).name === 'xmlns') {
            defaultNS = attrs.item(ai).value;
            break;
          }
        }
        if (!defaultNS) {
          // lookup current default ns in visibleNamespaces
          for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
            var namespace = visibleNamespaces[nsi];
            if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
              defaultNS = namespace.namespace;
              break;
            }
          }
        }
        if (defaultNS !== node.namespaceURI) {
          for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
            var namespace = visibleNamespaces[nsi];
            if (namespace.namespace === node.namespaceURI) {
              if (namespace.prefix) {
                prefixedNodeName = namespace.prefix + ':' + nodeName;
              }
              break;
            }
          }
        }
      }
      buf.push('<', prefixedNodeName);
      for (var i = 0; i < len; i++) {
        // add namespaces for attributes
        var attr = attrs.item(i);
        if (attr.prefix == 'xmlns') {
          visibleNamespaces.push({
            prefix: attr.localName,
            namespace: attr.value
          });
        } else if (attr.nodeName == 'xmlns') {
          visibleNamespaces.push({
            prefix: '',
            namespace: attr.value
          });
        }
      }
      for (var i = 0; i < len; i++) {
        var attr = attrs.item(i);
        if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
          var prefix = attr.prefix || '';
          var uri = attr.namespaceURI;
          addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : 'xmlns', uri);
          visibleNamespaces.push({
            prefix: prefix,
            namespace: uri
          });
        }
        serializeToString(attr, buf, nodeFilter, visibleNamespaces);
      }

      // add namespace for current node
      if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
        var prefix = node.prefix || '';
        var uri = node.namespaceURI;
        addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : 'xmlns', uri);
        visibleNamespaces.push({
          prefix: prefix,
          namespace: uri
        });
      }
      // in XML elements can be closed when they have no children
      var canCloseTag = !child;
      if (canCloseTag && (isHTML || node.namespaceURI === NAMESPACE.HTML)) {
        // in HTML (doc or ns) only void elements can be closed right away
        canCloseTag = isHTMLVoidElement(nodeName);
      }
      if (canCloseTag) {
        buf.push('/>');
      } else {
        buf.push('>');
        //if is cdata child node
        if (isHTML && isHTMLRawTextElement(nodeName)) {
          while (child) {
            if (child.data) {
              buf.push(child.data);
            } else {
              serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
            }
            child = child.nextSibling;
          }
        } else {
          while (child) {
            serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
            child = child.nextSibling;
          }
        }
        buf.push('</', prefixedNodeName, '>');
      }
      // remove added visible namespaces
      //visibleNamespaces.length = startVisibleNamespaces;
      return;
    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      var child = node.firstChild;
      while (child) {
        serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
        child = child.nextSibling;
      }
      return;
    case ATTRIBUTE_NODE:
      return addSerializedAttribute(buf, node.name, node.value);
    case TEXT_NODE:
      /*
       * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
       * except when used as markup delimiters, or within a comment, a processing instruction,
       * or a CDATA section.
       * If they are needed elsewhere, they must be escaped using either numeric character
       * references or the strings `&amp;` and `&lt;` respectively.
       * The right angle bracket (>) may be represented using the string " &gt; ",
       * and must, for compatibility, be escaped using either `&gt;`,
       * or a character reference when it appears in the string `]]>` in content,
       * when that string is not marking the end of a CDATA section.
       *
       * In the content of elements, character data is any string of characters which does not
       * contain the start-delimiter of any markup and does not include the CDATA-section-close
       * delimiter, `]]>`.
       *
       * @see https://www.w3.org/TR/xml/#NT-CharData
       * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
       */
      return buf.push(node.data.replace(/[<&>]/g, _xmlEncoder));
    case CDATA_SECTION_NODE:
      return buf.push(g.CDATA_START, node.data, g.CDATA_END);
    case COMMENT_NODE:
      return buf.push(g.COMMENT_START, node.data, g.COMMENT_END);
    case DOCUMENT_TYPE_NODE:
      var pubid = node.publicId;
      var sysid = node.systemId;
      buf.push(g.DOCTYPE_DECL_START, ' ', node.name);
      if (pubid) {
        buf.push(' ', g.PUBLIC, ' ', pubid);
        if (sysid && sysid !== '.') {
          buf.push(' ', sysid);
        }
      } else if (sysid && sysid !== '.') {
        buf.push(' ', g.SYSTEM, ' ', sysid);
      }
      if (node.internalSubset) {
        buf.push(' [', node.internalSubset, ']');
      }
      buf.push('>');
      return;
    case PROCESSING_INSTRUCTION_NODE:
      return buf.push('<?', node.target, ' ', node.data, '?>');
    case ENTITY_REFERENCE_NODE:
      return buf.push('&', node.nodeName, ';');
    //case ENTITY_NODE:
    //case NOTATION_NODE:
    default:
      buf.push('??', node.nodeName);
  }
}
function importNode(doc, node, deep) {
  var node2;
  switch (node.nodeType) {
    case ELEMENT_NODE:
      node2 = node.cloneNode(false);
      node2.ownerDocument = doc;
    //var attrs = node2.attributes;
    //var len = attrs.length;
    //for(var i=0;i<len;i++){
    //node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
    //}
    case DOCUMENT_FRAGMENT_NODE:
      break;
    case ATTRIBUTE_NODE:
      deep = true;
      break;
    //case ENTITY_REFERENCE_NODE:
    //case PROCESSING_INSTRUCTION_NODE:
    ////case TEXT_NODE:
    //case CDATA_SECTION_NODE:
    //case COMMENT_NODE:
    //	deep = false;
    //	break;
    //case DOCUMENT_NODE:
    //case DOCUMENT_TYPE_NODE:
    //cannot be imported.
    //case ENTITY_NODE:
    //case NOTATION_NODE：
    //can not hit in level3
    //default:throw e;
  }

  if (!node2) {
    node2 = node.cloneNode(false); //false
  }

  node2.ownerDocument = doc;
  node2.parentNode = null;
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(importNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}

/**
 * Creates a copy of a node from an existing one.
 *
 * @param {Document} doc
 * The Document object representing the document that the new node will belong to.
 * @param {Node} node
 * The node to clone.
 * @param {boolean} deep
 * If true, the contents of the node are recursively copied.
 * If false, only the node itself (and its attributes, if it is an element) are copied.
 * @returns {Node}
 * Returns the newly created copy of the node.
 * @throws {DOMException}
 * May throw a DOMException if operations within setAttributeNode or appendChild (which are
 * potentially invoked in this function) do not meet their specific constraints.
 */
function cloneNode(doc, node, deep) {
  var node2 = new node.constructor(PDC);
  for (var n in node) {
    if (hasOwn(node, n)) {
      var v = node[n];
      if (typeof v != 'object') {
        if (v != node2[n]) {
          node2[n] = v;
        }
      }
    }
  }
  if (node.childNodes) {
    node2.childNodes = new NodeList();
  }
  node2.ownerDocument = doc;
  switch (node2.nodeType) {
    case ELEMENT_NODE:
      var attrs = node.attributes;
      var attrs2 = node2.attributes = new NamedNodeMap();
      var len = attrs.length;
      attrs2._ownerElement = node2;
      for (var i = 0; i < len; i++) {
        node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
      }
      break;
    case ATTRIBUTE_NODE:
      deep = true;
  }
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(cloneNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}
function __set__(object, key, value) {
  object[key] = value;
}
//do dynamic
try {
  if (Object.defineProperty) {
    Object.defineProperty(LiveNodeList.prototype, 'length', {
      get: function () {
        _updateLiveList(this);
        return this.$$length;
      }
    });
    Object.defineProperty(Node.prototype, 'textContent', {
      get: function () {
        return getTextContent(this);
      },
      set: function (data) {
        switch (this.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            while (this.firstChild) {
              this.removeChild(this.firstChild);
            }
            if (data || String(data)) {
              this.appendChild(this.ownerDocument.createTextNode(data));
            }
            break;
          default:
            this.data = data;
            this.value = data;
            this.nodeValue = data;
        }
      }
    });
    function getTextContent(node) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var buf = [];
          node = node.firstChild;
          while (node) {
            if (node.nodeType !== 7 && node.nodeType !== 8) {
              buf.push(getTextContent(node));
            }
            node = node.nextSibling;
          }
          return buf.join('');
        default:
          return node.nodeValue;
      }
    }
    __set__ = function (object, key, value) {
      //console.log(value)
      object['$$' + key] = value;
    };
  }
} catch (e) {
  //ie8
}
exports._updateLiveList = _updateLiveList;
exports.Attr = Attr;
exports.CDATASection = CDATASection;
exports.CharacterData = CharacterData;
exports.Comment = Comment;
exports.Document = Document;
exports.DocumentFragment = DocumentFragment;
exports.DocumentType = DocumentType;
exports.DOMImplementation = DOMImplementation;
exports.Element = Element;
exports.Entity = Entity;
exports.EntityReference = EntityReference;
exports.LiveNodeList = LiveNodeList;
exports.NamedNodeMap = NamedNodeMap;
exports.Node = Node;
exports.NodeList = NodeList;
exports.Notation = Notation;
exports.Text = Text;
exports.ProcessingInstruction = ProcessingInstruction;
exports.XMLSerializer = XMLSerializer;

/***/ }),

/***/ 31032:
/*!*****************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/entities.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var freeze = (__webpack_require__(/*! ./conventions */ 33499).freeze);

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML
 *      Wikipedia
 */
exports.XML_ENTITIES = freeze({
  amp: '&',
  apos: "'",
  gt: '>',
  lt: '<',
  quot: '"'
});

/**
 * A map of all entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see {@link XML_ENTITIES}
 * @see {@link DOMParser.parseFromString}
 * @see {@link DOMImplementation.prototype.createHTMLDocument}
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5)
 *      Spec
 * @see https://html.spec.whatwg.org/entities.json JSON
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML
 *      Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML
 *      Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
  Aacute: '\u00C1',
  aacute: '\u00E1',
  Abreve: '\u0102',
  abreve: '\u0103',
  ac: '\u223E',
  acd: '\u223F',
  acE: '\u223E\u0333',
  Acirc: '\u00C2',
  acirc: '\u00E2',
  acute: '\u00B4',
  Acy: '\u0410',
  acy: '\u0430',
  AElig: '\u00C6',
  aelig: '\u00E6',
  af: '\u2061',
  Afr: '\uD835\uDD04',
  afr: '\uD835\uDD1E',
  Agrave: '\u00C0',
  agrave: '\u00E0',
  alefsym: '\u2135',
  aleph: '\u2135',
  Alpha: '\u0391',
  alpha: '\u03B1',
  Amacr: '\u0100',
  amacr: '\u0101',
  amalg: '\u2A3F',
  AMP: '\u0026',
  amp: '\u0026',
  And: '\u2A53',
  and: '\u2227',
  andand: '\u2A55',
  andd: '\u2A5C',
  andslope: '\u2A58',
  andv: '\u2A5A',
  ang: '\u2220',
  ange: '\u29A4',
  angle: '\u2220',
  angmsd: '\u2221',
  angmsdaa: '\u29A8',
  angmsdab: '\u29A9',
  angmsdac: '\u29AA',
  angmsdad: '\u29AB',
  angmsdae: '\u29AC',
  angmsdaf: '\u29AD',
  angmsdag: '\u29AE',
  angmsdah: '\u29AF',
  angrt: '\u221F',
  angrtvb: '\u22BE',
  angrtvbd: '\u299D',
  angsph: '\u2222',
  angst: '\u00C5',
  angzarr: '\u237C',
  Aogon: '\u0104',
  aogon: '\u0105',
  Aopf: '\uD835\uDD38',
  aopf: '\uD835\uDD52',
  ap: '\u2248',
  apacir: '\u2A6F',
  apE: '\u2A70',
  ape: '\u224A',
  apid: '\u224B',
  apos: '\u0027',
  ApplyFunction: '\u2061',
  approx: '\u2248',
  approxeq: '\u224A',
  Aring: '\u00C5',
  aring: '\u00E5',
  Ascr: '\uD835\uDC9C',
  ascr: '\uD835\uDCB6',
  Assign: '\u2254',
  ast: '\u002A',
  asymp: '\u2248',
  asympeq: '\u224D',
  Atilde: '\u00C3',
  atilde: '\u00E3',
  Auml: '\u00C4',
  auml: '\u00E4',
  awconint: '\u2233',
  awint: '\u2A11',
  backcong: '\u224C',
  backepsilon: '\u03F6',
  backprime: '\u2035',
  backsim: '\u223D',
  backsimeq: '\u22CD',
  Backslash: '\u2216',
  Barv: '\u2AE7',
  barvee: '\u22BD',
  Barwed: '\u2306',
  barwed: '\u2305',
  barwedge: '\u2305',
  bbrk: '\u23B5',
  bbrktbrk: '\u23B6',
  bcong: '\u224C',
  Bcy: '\u0411',
  bcy: '\u0431',
  bdquo: '\u201E',
  becaus: '\u2235',
  Because: '\u2235',
  because: '\u2235',
  bemptyv: '\u29B0',
  bepsi: '\u03F6',
  bernou: '\u212C',
  Bernoullis: '\u212C',
  Beta: '\u0392',
  beta: '\u03B2',
  beth: '\u2136',
  between: '\u226C',
  Bfr: '\uD835\uDD05',
  bfr: '\uD835\uDD1F',
  bigcap: '\u22C2',
  bigcirc: '\u25EF',
  bigcup: '\u22C3',
  bigodot: '\u2A00',
  bigoplus: '\u2A01',
  bigotimes: '\u2A02',
  bigsqcup: '\u2A06',
  bigstar: '\u2605',
  bigtriangledown: '\u25BD',
  bigtriangleup: '\u25B3',
  biguplus: '\u2A04',
  bigvee: '\u22C1',
  bigwedge: '\u22C0',
  bkarow: '\u290D',
  blacklozenge: '\u29EB',
  blacksquare: '\u25AA',
  blacktriangle: '\u25B4',
  blacktriangledown: '\u25BE',
  blacktriangleleft: '\u25C2',
  blacktriangleright: '\u25B8',
  blank: '\u2423',
  blk12: '\u2592',
  blk14: '\u2591',
  blk34: '\u2593',
  block: '\u2588',
  bne: '\u003D\u20E5',
  bnequiv: '\u2261\u20E5',
  bNot: '\u2AED',
  bnot: '\u2310',
  Bopf: '\uD835\uDD39',
  bopf: '\uD835\uDD53',
  bot: '\u22A5',
  bottom: '\u22A5',
  bowtie: '\u22C8',
  boxbox: '\u29C9',
  boxDL: '\u2557',
  boxDl: '\u2556',
  boxdL: '\u2555',
  boxdl: '\u2510',
  boxDR: '\u2554',
  boxDr: '\u2553',
  boxdR: '\u2552',
  boxdr: '\u250C',
  boxH: '\u2550',
  boxh: '\u2500',
  boxHD: '\u2566',
  boxHd: '\u2564',
  boxhD: '\u2565',
  boxhd: '\u252C',
  boxHU: '\u2569',
  boxHu: '\u2567',
  boxhU: '\u2568',
  boxhu: '\u2534',
  boxminus: '\u229F',
  boxplus: '\u229E',
  boxtimes: '\u22A0',
  boxUL: '\u255D',
  boxUl: '\u255C',
  boxuL: '\u255B',
  boxul: '\u2518',
  boxUR: '\u255A',
  boxUr: '\u2559',
  boxuR: '\u2558',
  boxur: '\u2514',
  boxV: '\u2551',
  boxv: '\u2502',
  boxVH: '\u256C',
  boxVh: '\u256B',
  boxvH: '\u256A',
  boxvh: '\u253C',
  boxVL: '\u2563',
  boxVl: '\u2562',
  boxvL: '\u2561',
  boxvl: '\u2524',
  boxVR: '\u2560',
  boxVr: '\u255F',
  boxvR: '\u255E',
  boxvr: '\u251C',
  bprime: '\u2035',
  Breve: '\u02D8',
  breve: '\u02D8',
  brvbar: '\u00A6',
  Bscr: '\u212C',
  bscr: '\uD835\uDCB7',
  bsemi: '\u204F',
  bsim: '\u223D',
  bsime: '\u22CD',
  bsol: '\u005C',
  bsolb: '\u29C5',
  bsolhsub: '\u27C8',
  bull: '\u2022',
  bullet: '\u2022',
  bump: '\u224E',
  bumpE: '\u2AAE',
  bumpe: '\u224F',
  Bumpeq: '\u224E',
  bumpeq: '\u224F',
  Cacute: '\u0106',
  cacute: '\u0107',
  Cap: '\u22D2',
  cap: '\u2229',
  capand: '\u2A44',
  capbrcup: '\u2A49',
  capcap: '\u2A4B',
  capcup: '\u2A47',
  capdot: '\u2A40',
  CapitalDifferentialD: '\u2145',
  caps: '\u2229\uFE00',
  caret: '\u2041',
  caron: '\u02C7',
  Cayleys: '\u212D',
  ccaps: '\u2A4D',
  Ccaron: '\u010C',
  ccaron: '\u010D',
  Ccedil: '\u00C7',
  ccedil: '\u00E7',
  Ccirc: '\u0108',
  ccirc: '\u0109',
  Cconint: '\u2230',
  ccups: '\u2A4C',
  ccupssm: '\u2A50',
  Cdot: '\u010A',
  cdot: '\u010B',
  cedil: '\u00B8',
  Cedilla: '\u00B8',
  cemptyv: '\u29B2',
  cent: '\u00A2',
  CenterDot: '\u00B7',
  centerdot: '\u00B7',
  Cfr: '\u212D',
  cfr: '\uD835\uDD20',
  CHcy: '\u0427',
  chcy: '\u0447',
  check: '\u2713',
  checkmark: '\u2713',
  Chi: '\u03A7',
  chi: '\u03C7',
  cir: '\u25CB',
  circ: '\u02C6',
  circeq: '\u2257',
  circlearrowleft: '\u21BA',
  circlearrowright: '\u21BB',
  circledast: '\u229B',
  circledcirc: '\u229A',
  circleddash: '\u229D',
  CircleDot: '\u2299',
  circledR: '\u00AE',
  circledS: '\u24C8',
  CircleMinus: '\u2296',
  CirclePlus: '\u2295',
  CircleTimes: '\u2297',
  cirE: '\u29C3',
  cire: '\u2257',
  cirfnint: '\u2A10',
  cirmid: '\u2AEF',
  cirscir: '\u29C2',
  ClockwiseContourIntegral: '\u2232',
  CloseCurlyDoubleQuote: '\u201D',
  CloseCurlyQuote: '\u2019',
  clubs: '\u2663',
  clubsuit: '\u2663',
  Colon: '\u2237',
  colon: '\u003A',
  Colone: '\u2A74',
  colone: '\u2254',
  coloneq: '\u2254',
  comma: '\u002C',
  commat: '\u0040',
  comp: '\u2201',
  compfn: '\u2218',
  complement: '\u2201',
  complexes: '\u2102',
  cong: '\u2245',
  congdot: '\u2A6D',
  Congruent: '\u2261',
  Conint: '\u222F',
  conint: '\u222E',
  ContourIntegral: '\u222E',
  Copf: '\u2102',
  copf: '\uD835\uDD54',
  coprod: '\u2210',
  Coproduct: '\u2210',
  COPY: '\u00A9',
  copy: '\u00A9',
  copysr: '\u2117',
  CounterClockwiseContourIntegral: '\u2233',
  crarr: '\u21B5',
  Cross: '\u2A2F',
  cross: '\u2717',
  Cscr: '\uD835\uDC9E',
  cscr: '\uD835\uDCB8',
  csub: '\u2ACF',
  csube: '\u2AD1',
  csup: '\u2AD0',
  csupe: '\u2AD2',
  ctdot: '\u22EF',
  cudarrl: '\u2938',
  cudarrr: '\u2935',
  cuepr: '\u22DE',
  cuesc: '\u22DF',
  cularr: '\u21B6',
  cularrp: '\u293D',
  Cup: '\u22D3',
  cup: '\u222A',
  cupbrcap: '\u2A48',
  CupCap: '\u224D',
  cupcap: '\u2A46',
  cupcup: '\u2A4A',
  cupdot: '\u228D',
  cupor: '\u2A45',
  cups: '\u222A\uFE00',
  curarr: '\u21B7',
  curarrm: '\u293C',
  curlyeqprec: '\u22DE',
  curlyeqsucc: '\u22DF',
  curlyvee: '\u22CE',
  curlywedge: '\u22CF',
  curren: '\u00A4',
  curvearrowleft: '\u21B6',
  curvearrowright: '\u21B7',
  cuvee: '\u22CE',
  cuwed: '\u22CF',
  cwconint: '\u2232',
  cwint: '\u2231',
  cylcty: '\u232D',
  Dagger: '\u2021',
  dagger: '\u2020',
  daleth: '\u2138',
  Darr: '\u21A1',
  dArr: '\u21D3',
  darr: '\u2193',
  dash: '\u2010',
  Dashv: '\u2AE4',
  dashv: '\u22A3',
  dbkarow: '\u290F',
  dblac: '\u02DD',
  Dcaron: '\u010E',
  dcaron: '\u010F',
  Dcy: '\u0414',
  dcy: '\u0434',
  DD: '\u2145',
  dd: '\u2146',
  ddagger: '\u2021',
  ddarr: '\u21CA',
  DDotrahd: '\u2911',
  ddotseq: '\u2A77',
  deg: '\u00B0',
  Del: '\u2207',
  Delta: '\u0394',
  delta: '\u03B4',
  demptyv: '\u29B1',
  dfisht: '\u297F',
  Dfr: '\uD835\uDD07',
  dfr: '\uD835\uDD21',
  dHar: '\u2965',
  dharl: '\u21C3',
  dharr: '\u21C2',
  DiacriticalAcute: '\u00B4',
  DiacriticalDot: '\u02D9',
  DiacriticalDoubleAcute: '\u02DD',
  DiacriticalGrave: '\u0060',
  DiacriticalTilde: '\u02DC',
  diam: '\u22C4',
  Diamond: '\u22C4',
  diamond: '\u22C4',
  diamondsuit: '\u2666',
  diams: '\u2666',
  die: '\u00A8',
  DifferentialD: '\u2146',
  digamma: '\u03DD',
  disin: '\u22F2',
  div: '\u00F7',
  divide: '\u00F7',
  divideontimes: '\u22C7',
  divonx: '\u22C7',
  DJcy: '\u0402',
  djcy: '\u0452',
  dlcorn: '\u231E',
  dlcrop: '\u230D',
  dollar: '\u0024',
  Dopf: '\uD835\uDD3B',
  dopf: '\uD835\uDD55',
  Dot: '\u00A8',
  dot: '\u02D9',
  DotDot: '\u20DC',
  doteq: '\u2250',
  doteqdot: '\u2251',
  DotEqual: '\u2250',
  dotminus: '\u2238',
  dotplus: '\u2214',
  dotsquare: '\u22A1',
  doublebarwedge: '\u2306',
  DoubleContourIntegral: '\u222F',
  DoubleDot: '\u00A8',
  DoubleDownArrow: '\u21D3',
  DoubleLeftArrow: '\u21D0',
  DoubleLeftRightArrow: '\u21D4',
  DoubleLeftTee: '\u2AE4',
  DoubleLongLeftArrow: '\u27F8',
  DoubleLongLeftRightArrow: '\u27FA',
  DoubleLongRightArrow: '\u27F9',
  DoubleRightArrow: '\u21D2',
  DoubleRightTee: '\u22A8',
  DoubleUpArrow: '\u21D1',
  DoubleUpDownArrow: '\u21D5',
  DoubleVerticalBar: '\u2225',
  DownArrow: '\u2193',
  Downarrow: '\u21D3',
  downarrow: '\u2193',
  DownArrowBar: '\u2913',
  DownArrowUpArrow: '\u21F5',
  DownBreve: '\u0311',
  downdownarrows: '\u21CA',
  downharpoonleft: '\u21C3',
  downharpoonright: '\u21C2',
  DownLeftRightVector: '\u2950',
  DownLeftTeeVector: '\u295E',
  DownLeftVector: '\u21BD',
  DownLeftVectorBar: '\u2956',
  DownRightTeeVector: '\u295F',
  DownRightVector: '\u21C1',
  DownRightVectorBar: '\u2957',
  DownTee: '\u22A4',
  DownTeeArrow: '\u21A7',
  drbkarow: '\u2910',
  drcorn: '\u231F',
  drcrop: '\u230C',
  Dscr: '\uD835\uDC9F',
  dscr: '\uD835\uDCB9',
  DScy: '\u0405',
  dscy: '\u0455',
  dsol: '\u29F6',
  Dstrok: '\u0110',
  dstrok: '\u0111',
  dtdot: '\u22F1',
  dtri: '\u25BF',
  dtrif: '\u25BE',
  duarr: '\u21F5',
  duhar: '\u296F',
  dwangle: '\u29A6',
  DZcy: '\u040F',
  dzcy: '\u045F',
  dzigrarr: '\u27FF',
  Eacute: '\u00C9',
  eacute: '\u00E9',
  easter: '\u2A6E',
  Ecaron: '\u011A',
  ecaron: '\u011B',
  ecir: '\u2256',
  Ecirc: '\u00CA',
  ecirc: '\u00EA',
  ecolon: '\u2255',
  Ecy: '\u042D',
  ecy: '\u044D',
  eDDot: '\u2A77',
  Edot: '\u0116',
  eDot: '\u2251',
  edot: '\u0117',
  ee: '\u2147',
  efDot: '\u2252',
  Efr: '\uD835\uDD08',
  efr: '\uD835\uDD22',
  eg: '\u2A9A',
  Egrave: '\u00C8',
  egrave: '\u00E8',
  egs: '\u2A96',
  egsdot: '\u2A98',
  el: '\u2A99',
  Element: '\u2208',
  elinters: '\u23E7',
  ell: '\u2113',
  els: '\u2A95',
  elsdot: '\u2A97',
  Emacr: '\u0112',
  emacr: '\u0113',
  empty: '\u2205',
  emptyset: '\u2205',
  EmptySmallSquare: '\u25FB',
  emptyv: '\u2205',
  EmptyVerySmallSquare: '\u25AB',
  emsp: '\u2003',
  emsp13: '\u2004',
  emsp14: '\u2005',
  ENG: '\u014A',
  eng: '\u014B',
  ensp: '\u2002',
  Eogon: '\u0118',
  eogon: '\u0119',
  Eopf: '\uD835\uDD3C',
  eopf: '\uD835\uDD56',
  epar: '\u22D5',
  eparsl: '\u29E3',
  eplus: '\u2A71',
  epsi: '\u03B5',
  Epsilon: '\u0395',
  epsilon: '\u03B5',
  epsiv: '\u03F5',
  eqcirc: '\u2256',
  eqcolon: '\u2255',
  eqsim: '\u2242',
  eqslantgtr: '\u2A96',
  eqslantless: '\u2A95',
  Equal: '\u2A75',
  equals: '\u003D',
  EqualTilde: '\u2242',
  equest: '\u225F',
  Equilibrium: '\u21CC',
  equiv: '\u2261',
  equivDD: '\u2A78',
  eqvparsl: '\u29E5',
  erarr: '\u2971',
  erDot: '\u2253',
  Escr: '\u2130',
  escr: '\u212F',
  esdot: '\u2250',
  Esim: '\u2A73',
  esim: '\u2242',
  Eta: '\u0397',
  eta: '\u03B7',
  ETH: '\u00D0',
  eth: '\u00F0',
  Euml: '\u00CB',
  euml: '\u00EB',
  euro: '\u20AC',
  excl: '\u0021',
  exist: '\u2203',
  Exists: '\u2203',
  expectation: '\u2130',
  ExponentialE: '\u2147',
  exponentiale: '\u2147',
  fallingdotseq: '\u2252',
  Fcy: '\u0424',
  fcy: '\u0444',
  female: '\u2640',
  ffilig: '\uFB03',
  fflig: '\uFB00',
  ffllig: '\uFB04',
  Ffr: '\uD835\uDD09',
  ffr: '\uD835\uDD23',
  filig: '\uFB01',
  FilledSmallSquare: '\u25FC',
  FilledVerySmallSquare: '\u25AA',
  fjlig: '\u0066\u006A',
  flat: '\u266D',
  fllig: '\uFB02',
  fltns: '\u25B1',
  fnof: '\u0192',
  Fopf: '\uD835\uDD3D',
  fopf: '\uD835\uDD57',
  ForAll: '\u2200',
  forall: '\u2200',
  fork: '\u22D4',
  forkv: '\u2AD9',
  Fouriertrf: '\u2131',
  fpartint: '\u2A0D',
  frac12: '\u00BD',
  frac13: '\u2153',
  frac14: '\u00BC',
  frac15: '\u2155',
  frac16: '\u2159',
  frac18: '\u215B',
  frac23: '\u2154',
  frac25: '\u2156',
  frac34: '\u00BE',
  frac35: '\u2157',
  frac38: '\u215C',
  frac45: '\u2158',
  frac56: '\u215A',
  frac58: '\u215D',
  frac78: '\u215E',
  frasl: '\u2044',
  frown: '\u2322',
  Fscr: '\u2131',
  fscr: '\uD835\uDCBB',
  gacute: '\u01F5',
  Gamma: '\u0393',
  gamma: '\u03B3',
  Gammad: '\u03DC',
  gammad: '\u03DD',
  gap: '\u2A86',
  Gbreve: '\u011E',
  gbreve: '\u011F',
  Gcedil: '\u0122',
  Gcirc: '\u011C',
  gcirc: '\u011D',
  Gcy: '\u0413',
  gcy: '\u0433',
  Gdot: '\u0120',
  gdot: '\u0121',
  gE: '\u2267',
  ge: '\u2265',
  gEl: '\u2A8C',
  gel: '\u22DB',
  geq: '\u2265',
  geqq: '\u2267',
  geqslant: '\u2A7E',
  ges: '\u2A7E',
  gescc: '\u2AA9',
  gesdot: '\u2A80',
  gesdoto: '\u2A82',
  gesdotol: '\u2A84',
  gesl: '\u22DB\uFE00',
  gesles: '\u2A94',
  Gfr: '\uD835\uDD0A',
  gfr: '\uD835\uDD24',
  Gg: '\u22D9',
  gg: '\u226B',
  ggg: '\u22D9',
  gimel: '\u2137',
  GJcy: '\u0403',
  gjcy: '\u0453',
  gl: '\u2277',
  gla: '\u2AA5',
  glE: '\u2A92',
  glj: '\u2AA4',
  gnap: '\u2A8A',
  gnapprox: '\u2A8A',
  gnE: '\u2269',
  gne: '\u2A88',
  gneq: '\u2A88',
  gneqq: '\u2269',
  gnsim: '\u22E7',
  Gopf: '\uD835\uDD3E',
  gopf: '\uD835\uDD58',
  grave: '\u0060',
  GreaterEqual: '\u2265',
  GreaterEqualLess: '\u22DB',
  GreaterFullEqual: '\u2267',
  GreaterGreater: '\u2AA2',
  GreaterLess: '\u2277',
  GreaterSlantEqual: '\u2A7E',
  GreaterTilde: '\u2273',
  Gscr: '\uD835\uDCA2',
  gscr: '\u210A',
  gsim: '\u2273',
  gsime: '\u2A8E',
  gsiml: '\u2A90',
  Gt: '\u226B',
  GT: '\u003E',
  gt: '\u003E',
  gtcc: '\u2AA7',
  gtcir: '\u2A7A',
  gtdot: '\u22D7',
  gtlPar: '\u2995',
  gtquest: '\u2A7C',
  gtrapprox: '\u2A86',
  gtrarr: '\u2978',
  gtrdot: '\u22D7',
  gtreqless: '\u22DB',
  gtreqqless: '\u2A8C',
  gtrless: '\u2277',
  gtrsim: '\u2273',
  gvertneqq: '\u2269\uFE00',
  gvnE: '\u2269\uFE00',
  Hacek: '\u02C7',
  hairsp: '\u200A',
  half: '\u00BD',
  hamilt: '\u210B',
  HARDcy: '\u042A',
  hardcy: '\u044A',
  hArr: '\u21D4',
  harr: '\u2194',
  harrcir: '\u2948',
  harrw: '\u21AD',
  Hat: '\u005E',
  hbar: '\u210F',
  Hcirc: '\u0124',
  hcirc: '\u0125',
  hearts: '\u2665',
  heartsuit: '\u2665',
  hellip: '\u2026',
  hercon: '\u22B9',
  Hfr: '\u210C',
  hfr: '\uD835\uDD25',
  HilbertSpace: '\u210B',
  hksearow: '\u2925',
  hkswarow: '\u2926',
  hoarr: '\u21FF',
  homtht: '\u223B',
  hookleftarrow: '\u21A9',
  hookrightarrow: '\u21AA',
  Hopf: '\u210D',
  hopf: '\uD835\uDD59',
  horbar: '\u2015',
  HorizontalLine: '\u2500',
  Hscr: '\u210B',
  hscr: '\uD835\uDCBD',
  hslash: '\u210F',
  Hstrok: '\u0126',
  hstrok: '\u0127',
  HumpDownHump: '\u224E',
  HumpEqual: '\u224F',
  hybull: '\u2043',
  hyphen: '\u2010',
  Iacute: '\u00CD',
  iacute: '\u00ED',
  ic: '\u2063',
  Icirc: '\u00CE',
  icirc: '\u00EE',
  Icy: '\u0418',
  icy: '\u0438',
  Idot: '\u0130',
  IEcy: '\u0415',
  iecy: '\u0435',
  iexcl: '\u00A1',
  iff: '\u21D4',
  Ifr: '\u2111',
  ifr: '\uD835\uDD26',
  Igrave: '\u00CC',
  igrave: '\u00EC',
  ii: '\u2148',
  iiiint: '\u2A0C',
  iiint: '\u222D',
  iinfin: '\u29DC',
  iiota: '\u2129',
  IJlig: '\u0132',
  ijlig: '\u0133',
  Im: '\u2111',
  Imacr: '\u012A',
  imacr: '\u012B',
  image: '\u2111',
  ImaginaryI: '\u2148',
  imagline: '\u2110',
  imagpart: '\u2111',
  imath: '\u0131',
  imof: '\u22B7',
  imped: '\u01B5',
  Implies: '\u21D2',
  in: '\u2208',
  incare: '\u2105',
  infin: '\u221E',
  infintie: '\u29DD',
  inodot: '\u0131',
  Int: '\u222C',
  int: '\u222B',
  intcal: '\u22BA',
  integers: '\u2124',
  Integral: '\u222B',
  intercal: '\u22BA',
  Intersection: '\u22C2',
  intlarhk: '\u2A17',
  intprod: '\u2A3C',
  InvisibleComma: '\u2063',
  InvisibleTimes: '\u2062',
  IOcy: '\u0401',
  iocy: '\u0451',
  Iogon: '\u012E',
  iogon: '\u012F',
  Iopf: '\uD835\uDD40',
  iopf: '\uD835\uDD5A',
  Iota: '\u0399',
  iota: '\u03B9',
  iprod: '\u2A3C',
  iquest: '\u00BF',
  Iscr: '\u2110',
  iscr: '\uD835\uDCBE',
  isin: '\u2208',
  isindot: '\u22F5',
  isinE: '\u22F9',
  isins: '\u22F4',
  isinsv: '\u22F3',
  isinv: '\u2208',
  it: '\u2062',
  Itilde: '\u0128',
  itilde: '\u0129',
  Iukcy: '\u0406',
  iukcy: '\u0456',
  Iuml: '\u00CF',
  iuml: '\u00EF',
  Jcirc: '\u0134',
  jcirc: '\u0135',
  Jcy: '\u0419',
  jcy: '\u0439',
  Jfr: '\uD835\uDD0D',
  jfr: '\uD835\uDD27',
  jmath: '\u0237',
  Jopf: '\uD835\uDD41',
  jopf: '\uD835\uDD5B',
  Jscr: '\uD835\uDCA5',
  jscr: '\uD835\uDCBF',
  Jsercy: '\u0408',
  jsercy: '\u0458',
  Jukcy: '\u0404',
  jukcy: '\u0454',
  Kappa: '\u039A',
  kappa: '\u03BA',
  kappav: '\u03F0',
  Kcedil: '\u0136',
  kcedil: '\u0137',
  Kcy: '\u041A',
  kcy: '\u043A',
  Kfr: '\uD835\uDD0E',
  kfr: '\uD835\uDD28',
  kgreen: '\u0138',
  KHcy: '\u0425',
  khcy: '\u0445',
  KJcy: '\u040C',
  kjcy: '\u045C',
  Kopf: '\uD835\uDD42',
  kopf: '\uD835\uDD5C',
  Kscr: '\uD835\uDCA6',
  kscr: '\uD835\uDCC0',
  lAarr: '\u21DA',
  Lacute: '\u0139',
  lacute: '\u013A',
  laemptyv: '\u29B4',
  lagran: '\u2112',
  Lambda: '\u039B',
  lambda: '\u03BB',
  Lang: '\u27EA',
  lang: '\u27E8',
  langd: '\u2991',
  langle: '\u27E8',
  lap: '\u2A85',
  Laplacetrf: '\u2112',
  laquo: '\u00AB',
  Larr: '\u219E',
  lArr: '\u21D0',
  larr: '\u2190',
  larrb: '\u21E4',
  larrbfs: '\u291F',
  larrfs: '\u291D',
  larrhk: '\u21A9',
  larrlp: '\u21AB',
  larrpl: '\u2939',
  larrsim: '\u2973',
  larrtl: '\u21A2',
  lat: '\u2AAB',
  lAtail: '\u291B',
  latail: '\u2919',
  late: '\u2AAD',
  lates: '\u2AAD\uFE00',
  lBarr: '\u290E',
  lbarr: '\u290C',
  lbbrk: '\u2772',
  lbrace: '\u007B',
  lbrack: '\u005B',
  lbrke: '\u298B',
  lbrksld: '\u298F',
  lbrkslu: '\u298D',
  Lcaron: '\u013D',
  lcaron: '\u013E',
  Lcedil: '\u013B',
  lcedil: '\u013C',
  lceil: '\u2308',
  lcub: '\u007B',
  Lcy: '\u041B',
  lcy: '\u043B',
  ldca: '\u2936',
  ldquo: '\u201C',
  ldquor: '\u201E',
  ldrdhar: '\u2967',
  ldrushar: '\u294B',
  ldsh: '\u21B2',
  lE: '\u2266',
  le: '\u2264',
  LeftAngleBracket: '\u27E8',
  LeftArrow: '\u2190',
  Leftarrow: '\u21D0',
  leftarrow: '\u2190',
  LeftArrowBar: '\u21E4',
  LeftArrowRightArrow: '\u21C6',
  leftarrowtail: '\u21A2',
  LeftCeiling: '\u2308',
  LeftDoubleBracket: '\u27E6',
  LeftDownTeeVector: '\u2961',
  LeftDownVector: '\u21C3',
  LeftDownVectorBar: '\u2959',
  LeftFloor: '\u230A',
  leftharpoondown: '\u21BD',
  leftharpoonup: '\u21BC',
  leftleftarrows: '\u21C7',
  LeftRightArrow: '\u2194',
  Leftrightarrow: '\u21D4',
  leftrightarrow: '\u2194',
  leftrightarrows: '\u21C6',
  leftrightharpoons: '\u21CB',
  leftrightsquigarrow: '\u21AD',
  LeftRightVector: '\u294E',
  LeftTee: '\u22A3',
  LeftTeeArrow: '\u21A4',
  LeftTeeVector: '\u295A',
  leftthreetimes: '\u22CB',
  LeftTriangle: '\u22B2',
  LeftTriangleBar: '\u29CF',
  LeftTriangleEqual: '\u22B4',
  LeftUpDownVector: '\u2951',
  LeftUpTeeVector: '\u2960',
  LeftUpVector: '\u21BF',
  LeftUpVectorBar: '\u2958',
  LeftVector: '\u21BC',
  LeftVectorBar: '\u2952',
  lEg: '\u2A8B',
  leg: '\u22DA',
  leq: '\u2264',
  leqq: '\u2266',
  leqslant: '\u2A7D',
  les: '\u2A7D',
  lescc: '\u2AA8',
  lesdot: '\u2A7F',
  lesdoto: '\u2A81',
  lesdotor: '\u2A83',
  lesg: '\u22DA\uFE00',
  lesges: '\u2A93',
  lessapprox: '\u2A85',
  lessdot: '\u22D6',
  lesseqgtr: '\u22DA',
  lesseqqgtr: '\u2A8B',
  LessEqualGreater: '\u22DA',
  LessFullEqual: '\u2266',
  LessGreater: '\u2276',
  lessgtr: '\u2276',
  LessLess: '\u2AA1',
  lesssim: '\u2272',
  LessSlantEqual: '\u2A7D',
  LessTilde: '\u2272',
  lfisht: '\u297C',
  lfloor: '\u230A',
  Lfr: '\uD835\uDD0F',
  lfr: '\uD835\uDD29',
  lg: '\u2276',
  lgE: '\u2A91',
  lHar: '\u2962',
  lhard: '\u21BD',
  lharu: '\u21BC',
  lharul: '\u296A',
  lhblk: '\u2584',
  LJcy: '\u0409',
  ljcy: '\u0459',
  Ll: '\u22D8',
  ll: '\u226A',
  llarr: '\u21C7',
  llcorner: '\u231E',
  Lleftarrow: '\u21DA',
  llhard: '\u296B',
  lltri: '\u25FA',
  Lmidot: '\u013F',
  lmidot: '\u0140',
  lmoust: '\u23B0',
  lmoustache: '\u23B0',
  lnap: '\u2A89',
  lnapprox: '\u2A89',
  lnE: '\u2268',
  lne: '\u2A87',
  lneq: '\u2A87',
  lneqq: '\u2268',
  lnsim: '\u22E6',
  loang: '\u27EC',
  loarr: '\u21FD',
  lobrk: '\u27E6',
  LongLeftArrow: '\u27F5',
  Longleftarrow: '\u27F8',
  longleftarrow: '\u27F5',
  LongLeftRightArrow: '\u27F7',
  Longleftrightarrow: '\u27FA',
  longleftrightarrow: '\u27F7',
  longmapsto: '\u27FC',
  LongRightArrow: '\u27F6',
  Longrightarrow: '\u27F9',
  longrightarrow: '\u27F6',
  looparrowleft: '\u21AB',
  looparrowright: '\u21AC',
  lopar: '\u2985',
  Lopf: '\uD835\uDD43',
  lopf: '\uD835\uDD5D',
  loplus: '\u2A2D',
  lotimes: '\u2A34',
  lowast: '\u2217',
  lowbar: '\u005F',
  LowerLeftArrow: '\u2199',
  LowerRightArrow: '\u2198',
  loz: '\u25CA',
  lozenge: '\u25CA',
  lozf: '\u29EB',
  lpar: '\u0028',
  lparlt: '\u2993',
  lrarr: '\u21C6',
  lrcorner: '\u231F',
  lrhar: '\u21CB',
  lrhard: '\u296D',
  lrm: '\u200E',
  lrtri: '\u22BF',
  lsaquo: '\u2039',
  Lscr: '\u2112',
  lscr: '\uD835\uDCC1',
  Lsh: '\u21B0',
  lsh: '\u21B0',
  lsim: '\u2272',
  lsime: '\u2A8D',
  lsimg: '\u2A8F',
  lsqb: '\u005B',
  lsquo: '\u2018',
  lsquor: '\u201A',
  Lstrok: '\u0141',
  lstrok: '\u0142',
  Lt: '\u226A',
  LT: '\u003C',
  lt: '\u003C',
  ltcc: '\u2AA6',
  ltcir: '\u2A79',
  ltdot: '\u22D6',
  lthree: '\u22CB',
  ltimes: '\u22C9',
  ltlarr: '\u2976',
  ltquest: '\u2A7B',
  ltri: '\u25C3',
  ltrie: '\u22B4',
  ltrif: '\u25C2',
  ltrPar: '\u2996',
  lurdshar: '\u294A',
  luruhar: '\u2966',
  lvertneqq: '\u2268\uFE00',
  lvnE: '\u2268\uFE00',
  macr: '\u00AF',
  male: '\u2642',
  malt: '\u2720',
  maltese: '\u2720',
  Map: '\u2905',
  map: '\u21A6',
  mapsto: '\u21A6',
  mapstodown: '\u21A7',
  mapstoleft: '\u21A4',
  mapstoup: '\u21A5',
  marker: '\u25AE',
  mcomma: '\u2A29',
  Mcy: '\u041C',
  mcy: '\u043C',
  mdash: '\u2014',
  mDDot: '\u223A',
  measuredangle: '\u2221',
  MediumSpace: '\u205F',
  Mellintrf: '\u2133',
  Mfr: '\uD835\uDD10',
  mfr: '\uD835\uDD2A',
  mho: '\u2127',
  micro: '\u00B5',
  mid: '\u2223',
  midast: '\u002A',
  midcir: '\u2AF0',
  middot: '\u00B7',
  minus: '\u2212',
  minusb: '\u229F',
  minusd: '\u2238',
  minusdu: '\u2A2A',
  MinusPlus: '\u2213',
  mlcp: '\u2ADB',
  mldr: '\u2026',
  mnplus: '\u2213',
  models: '\u22A7',
  Mopf: '\uD835\uDD44',
  mopf: '\uD835\uDD5E',
  mp: '\u2213',
  Mscr: '\u2133',
  mscr: '\uD835\uDCC2',
  mstpos: '\u223E',
  Mu: '\u039C',
  mu: '\u03BC',
  multimap: '\u22B8',
  mumap: '\u22B8',
  nabla: '\u2207',
  Nacute: '\u0143',
  nacute: '\u0144',
  nang: '\u2220\u20D2',
  nap: '\u2249',
  napE: '\u2A70\u0338',
  napid: '\u224B\u0338',
  napos: '\u0149',
  napprox: '\u2249',
  natur: '\u266E',
  natural: '\u266E',
  naturals: '\u2115',
  nbsp: '\u00A0',
  nbump: '\u224E\u0338',
  nbumpe: '\u224F\u0338',
  ncap: '\u2A43',
  Ncaron: '\u0147',
  ncaron: '\u0148',
  Ncedil: '\u0145',
  ncedil: '\u0146',
  ncong: '\u2247',
  ncongdot: '\u2A6D\u0338',
  ncup: '\u2A42',
  Ncy: '\u041D',
  ncy: '\u043D',
  ndash: '\u2013',
  ne: '\u2260',
  nearhk: '\u2924',
  neArr: '\u21D7',
  nearr: '\u2197',
  nearrow: '\u2197',
  nedot: '\u2250\u0338',
  NegativeMediumSpace: '\u200B',
  NegativeThickSpace: '\u200B',
  NegativeThinSpace: '\u200B',
  NegativeVeryThinSpace: '\u200B',
  nequiv: '\u2262',
  nesear: '\u2928',
  nesim: '\u2242\u0338',
  NestedGreaterGreater: '\u226B',
  NestedLessLess: '\u226A',
  NewLine: '\u000A',
  nexist: '\u2204',
  nexists: '\u2204',
  Nfr: '\uD835\uDD11',
  nfr: '\uD835\uDD2B',
  ngE: '\u2267\u0338',
  nge: '\u2271',
  ngeq: '\u2271',
  ngeqq: '\u2267\u0338',
  ngeqslant: '\u2A7E\u0338',
  nges: '\u2A7E\u0338',
  nGg: '\u22D9\u0338',
  ngsim: '\u2275',
  nGt: '\u226B\u20D2',
  ngt: '\u226F',
  ngtr: '\u226F',
  nGtv: '\u226B\u0338',
  nhArr: '\u21CE',
  nharr: '\u21AE',
  nhpar: '\u2AF2',
  ni: '\u220B',
  nis: '\u22FC',
  nisd: '\u22FA',
  niv: '\u220B',
  NJcy: '\u040A',
  njcy: '\u045A',
  nlArr: '\u21CD',
  nlarr: '\u219A',
  nldr: '\u2025',
  nlE: '\u2266\u0338',
  nle: '\u2270',
  nLeftarrow: '\u21CD',
  nleftarrow: '\u219A',
  nLeftrightarrow: '\u21CE',
  nleftrightarrow: '\u21AE',
  nleq: '\u2270',
  nleqq: '\u2266\u0338',
  nleqslant: '\u2A7D\u0338',
  nles: '\u2A7D\u0338',
  nless: '\u226E',
  nLl: '\u22D8\u0338',
  nlsim: '\u2274',
  nLt: '\u226A\u20D2',
  nlt: '\u226E',
  nltri: '\u22EA',
  nltrie: '\u22EC',
  nLtv: '\u226A\u0338',
  nmid: '\u2224',
  NoBreak: '\u2060',
  NonBreakingSpace: '\u00A0',
  Nopf: '\u2115',
  nopf: '\uD835\uDD5F',
  Not: '\u2AEC',
  not: '\u00AC',
  NotCongruent: '\u2262',
  NotCupCap: '\u226D',
  NotDoubleVerticalBar: '\u2226',
  NotElement: '\u2209',
  NotEqual: '\u2260',
  NotEqualTilde: '\u2242\u0338',
  NotExists: '\u2204',
  NotGreater: '\u226F',
  NotGreaterEqual: '\u2271',
  NotGreaterFullEqual: '\u2267\u0338',
  NotGreaterGreater: '\u226B\u0338',
  NotGreaterLess: '\u2279',
  NotGreaterSlantEqual: '\u2A7E\u0338',
  NotGreaterTilde: '\u2275',
  NotHumpDownHump: '\u224E\u0338',
  NotHumpEqual: '\u224F\u0338',
  notin: '\u2209',
  notindot: '\u22F5\u0338',
  notinE: '\u22F9\u0338',
  notinva: '\u2209',
  notinvb: '\u22F7',
  notinvc: '\u22F6',
  NotLeftTriangle: '\u22EA',
  NotLeftTriangleBar: '\u29CF\u0338',
  NotLeftTriangleEqual: '\u22EC',
  NotLess: '\u226E',
  NotLessEqual: '\u2270',
  NotLessGreater: '\u2278',
  NotLessLess: '\u226A\u0338',
  NotLessSlantEqual: '\u2A7D\u0338',
  NotLessTilde: '\u2274',
  NotNestedGreaterGreater: '\u2AA2\u0338',
  NotNestedLessLess: '\u2AA1\u0338',
  notni: '\u220C',
  notniva: '\u220C',
  notnivb: '\u22FE',
  notnivc: '\u22FD',
  NotPrecedes: '\u2280',
  NotPrecedesEqual: '\u2AAF\u0338',
  NotPrecedesSlantEqual: '\u22E0',
  NotReverseElement: '\u220C',
  NotRightTriangle: '\u22EB',
  NotRightTriangleBar: '\u29D0\u0338',
  NotRightTriangleEqual: '\u22ED',
  NotSquareSubset: '\u228F\u0338',
  NotSquareSubsetEqual: '\u22E2',
  NotSquareSuperset: '\u2290\u0338',
  NotSquareSupersetEqual: '\u22E3',
  NotSubset: '\u2282\u20D2',
  NotSubsetEqual: '\u2288',
  NotSucceeds: '\u2281',
  NotSucceedsEqual: '\u2AB0\u0338',
  NotSucceedsSlantEqual: '\u22E1',
  NotSucceedsTilde: '\u227F\u0338',
  NotSuperset: '\u2283\u20D2',
  NotSupersetEqual: '\u2289',
  NotTilde: '\u2241',
  NotTildeEqual: '\u2244',
  NotTildeFullEqual: '\u2247',
  NotTildeTilde: '\u2249',
  NotVerticalBar: '\u2224',
  npar: '\u2226',
  nparallel: '\u2226',
  nparsl: '\u2AFD\u20E5',
  npart: '\u2202\u0338',
  npolint: '\u2A14',
  npr: '\u2280',
  nprcue: '\u22E0',
  npre: '\u2AAF\u0338',
  nprec: '\u2280',
  npreceq: '\u2AAF\u0338',
  nrArr: '\u21CF',
  nrarr: '\u219B',
  nrarrc: '\u2933\u0338',
  nrarrw: '\u219D\u0338',
  nRightarrow: '\u21CF',
  nrightarrow: '\u219B',
  nrtri: '\u22EB',
  nrtrie: '\u22ED',
  nsc: '\u2281',
  nsccue: '\u22E1',
  nsce: '\u2AB0\u0338',
  Nscr: '\uD835\uDCA9',
  nscr: '\uD835\uDCC3',
  nshortmid: '\u2224',
  nshortparallel: '\u2226',
  nsim: '\u2241',
  nsime: '\u2244',
  nsimeq: '\u2244',
  nsmid: '\u2224',
  nspar: '\u2226',
  nsqsube: '\u22E2',
  nsqsupe: '\u22E3',
  nsub: '\u2284',
  nsubE: '\u2AC5\u0338',
  nsube: '\u2288',
  nsubset: '\u2282\u20D2',
  nsubseteq: '\u2288',
  nsubseteqq: '\u2AC5\u0338',
  nsucc: '\u2281',
  nsucceq: '\u2AB0\u0338',
  nsup: '\u2285',
  nsupE: '\u2AC6\u0338',
  nsupe: '\u2289',
  nsupset: '\u2283\u20D2',
  nsupseteq: '\u2289',
  nsupseteqq: '\u2AC6\u0338',
  ntgl: '\u2279',
  Ntilde: '\u00D1',
  ntilde: '\u00F1',
  ntlg: '\u2278',
  ntriangleleft: '\u22EA',
  ntrianglelefteq: '\u22EC',
  ntriangleright: '\u22EB',
  ntrianglerighteq: '\u22ED',
  Nu: '\u039D',
  nu: '\u03BD',
  num: '\u0023',
  numero: '\u2116',
  numsp: '\u2007',
  nvap: '\u224D\u20D2',
  nVDash: '\u22AF',
  nVdash: '\u22AE',
  nvDash: '\u22AD',
  nvdash: '\u22AC',
  nvge: '\u2265\u20D2',
  nvgt: '\u003E\u20D2',
  nvHarr: '\u2904',
  nvinfin: '\u29DE',
  nvlArr: '\u2902',
  nvle: '\u2264\u20D2',
  nvlt: '\u003C\u20D2',
  nvltrie: '\u22B4\u20D2',
  nvrArr: '\u2903',
  nvrtrie: '\u22B5\u20D2',
  nvsim: '\u223C\u20D2',
  nwarhk: '\u2923',
  nwArr: '\u21D6',
  nwarr: '\u2196',
  nwarrow: '\u2196',
  nwnear: '\u2927',
  Oacute: '\u00D3',
  oacute: '\u00F3',
  oast: '\u229B',
  ocir: '\u229A',
  Ocirc: '\u00D4',
  ocirc: '\u00F4',
  Ocy: '\u041E',
  ocy: '\u043E',
  odash: '\u229D',
  Odblac: '\u0150',
  odblac: '\u0151',
  odiv: '\u2A38',
  odot: '\u2299',
  odsold: '\u29BC',
  OElig: '\u0152',
  oelig: '\u0153',
  ofcir: '\u29BF',
  Ofr: '\uD835\uDD12',
  ofr: '\uD835\uDD2C',
  ogon: '\u02DB',
  Ograve: '\u00D2',
  ograve: '\u00F2',
  ogt: '\u29C1',
  ohbar: '\u29B5',
  ohm: '\u03A9',
  oint: '\u222E',
  olarr: '\u21BA',
  olcir: '\u29BE',
  olcross: '\u29BB',
  oline: '\u203E',
  olt: '\u29C0',
  Omacr: '\u014C',
  omacr: '\u014D',
  Omega: '\u03A9',
  omega: '\u03C9',
  Omicron: '\u039F',
  omicron: '\u03BF',
  omid: '\u29B6',
  ominus: '\u2296',
  Oopf: '\uD835\uDD46',
  oopf: '\uD835\uDD60',
  opar: '\u29B7',
  OpenCurlyDoubleQuote: '\u201C',
  OpenCurlyQuote: '\u2018',
  operp: '\u29B9',
  oplus: '\u2295',
  Or: '\u2A54',
  or: '\u2228',
  orarr: '\u21BB',
  ord: '\u2A5D',
  order: '\u2134',
  orderof: '\u2134',
  ordf: '\u00AA',
  ordm: '\u00BA',
  origof: '\u22B6',
  oror: '\u2A56',
  orslope: '\u2A57',
  orv: '\u2A5B',
  oS: '\u24C8',
  Oscr: '\uD835\uDCAA',
  oscr: '\u2134',
  Oslash: '\u00D8',
  oslash: '\u00F8',
  osol: '\u2298',
  Otilde: '\u00D5',
  otilde: '\u00F5',
  Otimes: '\u2A37',
  otimes: '\u2297',
  otimesas: '\u2A36',
  Ouml: '\u00D6',
  ouml: '\u00F6',
  ovbar: '\u233D',
  OverBar: '\u203E',
  OverBrace: '\u23DE',
  OverBracket: '\u23B4',
  OverParenthesis: '\u23DC',
  par: '\u2225',
  para: '\u00B6',
  parallel: '\u2225',
  parsim: '\u2AF3',
  parsl: '\u2AFD',
  part: '\u2202',
  PartialD: '\u2202',
  Pcy: '\u041F',
  pcy: '\u043F',
  percnt: '\u0025',
  period: '\u002E',
  permil: '\u2030',
  perp: '\u22A5',
  pertenk: '\u2031',
  Pfr: '\uD835\uDD13',
  pfr: '\uD835\uDD2D',
  Phi: '\u03A6',
  phi: '\u03C6',
  phiv: '\u03D5',
  phmmat: '\u2133',
  phone: '\u260E',
  Pi: '\u03A0',
  pi: '\u03C0',
  pitchfork: '\u22D4',
  piv: '\u03D6',
  planck: '\u210F',
  planckh: '\u210E',
  plankv: '\u210F',
  plus: '\u002B',
  plusacir: '\u2A23',
  plusb: '\u229E',
  pluscir: '\u2A22',
  plusdo: '\u2214',
  plusdu: '\u2A25',
  pluse: '\u2A72',
  PlusMinus: '\u00B1',
  plusmn: '\u00B1',
  plussim: '\u2A26',
  plustwo: '\u2A27',
  pm: '\u00B1',
  Poincareplane: '\u210C',
  pointint: '\u2A15',
  Popf: '\u2119',
  popf: '\uD835\uDD61',
  pound: '\u00A3',
  Pr: '\u2ABB',
  pr: '\u227A',
  prap: '\u2AB7',
  prcue: '\u227C',
  prE: '\u2AB3',
  pre: '\u2AAF',
  prec: '\u227A',
  precapprox: '\u2AB7',
  preccurlyeq: '\u227C',
  Precedes: '\u227A',
  PrecedesEqual: '\u2AAF',
  PrecedesSlantEqual: '\u227C',
  PrecedesTilde: '\u227E',
  preceq: '\u2AAF',
  precnapprox: '\u2AB9',
  precneqq: '\u2AB5',
  precnsim: '\u22E8',
  precsim: '\u227E',
  Prime: '\u2033',
  prime: '\u2032',
  primes: '\u2119',
  prnap: '\u2AB9',
  prnE: '\u2AB5',
  prnsim: '\u22E8',
  prod: '\u220F',
  Product: '\u220F',
  profalar: '\u232E',
  profline: '\u2312',
  profsurf: '\u2313',
  prop: '\u221D',
  Proportion: '\u2237',
  Proportional: '\u221D',
  propto: '\u221D',
  prsim: '\u227E',
  prurel: '\u22B0',
  Pscr: '\uD835\uDCAB',
  pscr: '\uD835\uDCC5',
  Psi: '\u03A8',
  psi: '\u03C8',
  puncsp: '\u2008',
  Qfr: '\uD835\uDD14',
  qfr: '\uD835\uDD2E',
  qint: '\u2A0C',
  Qopf: '\u211A',
  qopf: '\uD835\uDD62',
  qprime: '\u2057',
  Qscr: '\uD835\uDCAC',
  qscr: '\uD835\uDCC6',
  quaternions: '\u210D',
  quatint: '\u2A16',
  quest: '\u003F',
  questeq: '\u225F',
  QUOT: '\u0022',
  quot: '\u0022',
  rAarr: '\u21DB',
  race: '\u223D\u0331',
  Racute: '\u0154',
  racute: '\u0155',
  radic: '\u221A',
  raemptyv: '\u29B3',
  Rang: '\u27EB',
  rang: '\u27E9',
  rangd: '\u2992',
  range: '\u29A5',
  rangle: '\u27E9',
  raquo: '\u00BB',
  Rarr: '\u21A0',
  rArr: '\u21D2',
  rarr: '\u2192',
  rarrap: '\u2975',
  rarrb: '\u21E5',
  rarrbfs: '\u2920',
  rarrc: '\u2933',
  rarrfs: '\u291E',
  rarrhk: '\u21AA',
  rarrlp: '\u21AC',
  rarrpl: '\u2945',
  rarrsim: '\u2974',
  Rarrtl: '\u2916',
  rarrtl: '\u21A3',
  rarrw: '\u219D',
  rAtail: '\u291C',
  ratail: '\u291A',
  ratio: '\u2236',
  rationals: '\u211A',
  RBarr: '\u2910',
  rBarr: '\u290F',
  rbarr: '\u290D',
  rbbrk: '\u2773',
  rbrace: '\u007D',
  rbrack: '\u005D',
  rbrke: '\u298C',
  rbrksld: '\u298E',
  rbrkslu: '\u2990',
  Rcaron: '\u0158',
  rcaron: '\u0159',
  Rcedil: '\u0156',
  rcedil: '\u0157',
  rceil: '\u2309',
  rcub: '\u007D',
  Rcy: '\u0420',
  rcy: '\u0440',
  rdca: '\u2937',
  rdldhar: '\u2969',
  rdquo: '\u201D',
  rdquor: '\u201D',
  rdsh: '\u21B3',
  Re: '\u211C',
  real: '\u211C',
  realine: '\u211B',
  realpart: '\u211C',
  reals: '\u211D',
  rect: '\u25AD',
  REG: '\u00AE',
  reg: '\u00AE',
  ReverseElement: '\u220B',
  ReverseEquilibrium: '\u21CB',
  ReverseUpEquilibrium: '\u296F',
  rfisht: '\u297D',
  rfloor: '\u230B',
  Rfr: '\u211C',
  rfr: '\uD835\uDD2F',
  rHar: '\u2964',
  rhard: '\u21C1',
  rharu: '\u21C0',
  rharul: '\u296C',
  Rho: '\u03A1',
  rho: '\u03C1',
  rhov: '\u03F1',
  RightAngleBracket: '\u27E9',
  RightArrow: '\u2192',
  Rightarrow: '\u21D2',
  rightarrow: '\u2192',
  RightArrowBar: '\u21E5',
  RightArrowLeftArrow: '\u21C4',
  rightarrowtail: '\u21A3',
  RightCeiling: '\u2309',
  RightDoubleBracket: '\u27E7',
  RightDownTeeVector: '\u295D',
  RightDownVector: '\u21C2',
  RightDownVectorBar: '\u2955',
  RightFloor: '\u230B',
  rightharpoondown: '\u21C1',
  rightharpoonup: '\u21C0',
  rightleftarrows: '\u21C4',
  rightleftharpoons: '\u21CC',
  rightrightarrows: '\u21C9',
  rightsquigarrow: '\u219D',
  RightTee: '\u22A2',
  RightTeeArrow: '\u21A6',
  RightTeeVector: '\u295B',
  rightthreetimes: '\u22CC',
  RightTriangle: '\u22B3',
  RightTriangleBar: '\u29D0',
  RightTriangleEqual: '\u22B5',
  RightUpDownVector: '\u294F',
  RightUpTeeVector: '\u295C',
  RightUpVector: '\u21BE',
  RightUpVectorBar: '\u2954',
  RightVector: '\u21C0',
  RightVectorBar: '\u2953',
  ring: '\u02DA',
  risingdotseq: '\u2253',
  rlarr: '\u21C4',
  rlhar: '\u21CC',
  rlm: '\u200F',
  rmoust: '\u23B1',
  rmoustache: '\u23B1',
  rnmid: '\u2AEE',
  roang: '\u27ED',
  roarr: '\u21FE',
  robrk: '\u27E7',
  ropar: '\u2986',
  Ropf: '\u211D',
  ropf: '\uD835\uDD63',
  roplus: '\u2A2E',
  rotimes: '\u2A35',
  RoundImplies: '\u2970',
  rpar: '\u0029',
  rpargt: '\u2994',
  rppolint: '\u2A12',
  rrarr: '\u21C9',
  Rrightarrow: '\u21DB',
  rsaquo: '\u203A',
  Rscr: '\u211B',
  rscr: '\uD835\uDCC7',
  Rsh: '\u21B1',
  rsh: '\u21B1',
  rsqb: '\u005D',
  rsquo: '\u2019',
  rsquor: '\u2019',
  rthree: '\u22CC',
  rtimes: '\u22CA',
  rtri: '\u25B9',
  rtrie: '\u22B5',
  rtrif: '\u25B8',
  rtriltri: '\u29CE',
  RuleDelayed: '\u29F4',
  ruluhar: '\u2968',
  rx: '\u211E',
  Sacute: '\u015A',
  sacute: '\u015B',
  sbquo: '\u201A',
  Sc: '\u2ABC',
  sc: '\u227B',
  scap: '\u2AB8',
  Scaron: '\u0160',
  scaron: '\u0161',
  sccue: '\u227D',
  scE: '\u2AB4',
  sce: '\u2AB0',
  Scedil: '\u015E',
  scedil: '\u015F',
  Scirc: '\u015C',
  scirc: '\u015D',
  scnap: '\u2ABA',
  scnE: '\u2AB6',
  scnsim: '\u22E9',
  scpolint: '\u2A13',
  scsim: '\u227F',
  Scy: '\u0421',
  scy: '\u0441',
  sdot: '\u22C5',
  sdotb: '\u22A1',
  sdote: '\u2A66',
  searhk: '\u2925',
  seArr: '\u21D8',
  searr: '\u2198',
  searrow: '\u2198',
  sect: '\u00A7',
  semi: '\u003B',
  seswar: '\u2929',
  setminus: '\u2216',
  setmn: '\u2216',
  sext: '\u2736',
  Sfr: '\uD835\uDD16',
  sfr: '\uD835\uDD30',
  sfrown: '\u2322',
  sharp: '\u266F',
  SHCHcy: '\u0429',
  shchcy: '\u0449',
  SHcy: '\u0428',
  shcy: '\u0448',
  ShortDownArrow: '\u2193',
  ShortLeftArrow: '\u2190',
  shortmid: '\u2223',
  shortparallel: '\u2225',
  ShortRightArrow: '\u2192',
  ShortUpArrow: '\u2191',
  shy: '\u00AD',
  Sigma: '\u03A3',
  sigma: '\u03C3',
  sigmaf: '\u03C2',
  sigmav: '\u03C2',
  sim: '\u223C',
  simdot: '\u2A6A',
  sime: '\u2243',
  simeq: '\u2243',
  simg: '\u2A9E',
  simgE: '\u2AA0',
  siml: '\u2A9D',
  simlE: '\u2A9F',
  simne: '\u2246',
  simplus: '\u2A24',
  simrarr: '\u2972',
  slarr: '\u2190',
  SmallCircle: '\u2218',
  smallsetminus: '\u2216',
  smashp: '\u2A33',
  smeparsl: '\u29E4',
  smid: '\u2223',
  smile: '\u2323',
  smt: '\u2AAA',
  smte: '\u2AAC',
  smtes: '\u2AAC\uFE00',
  SOFTcy: '\u042C',
  softcy: '\u044C',
  sol: '\u002F',
  solb: '\u29C4',
  solbar: '\u233F',
  Sopf: '\uD835\uDD4A',
  sopf: '\uD835\uDD64',
  spades: '\u2660',
  spadesuit: '\u2660',
  spar: '\u2225',
  sqcap: '\u2293',
  sqcaps: '\u2293\uFE00',
  sqcup: '\u2294',
  sqcups: '\u2294\uFE00',
  Sqrt: '\u221A',
  sqsub: '\u228F',
  sqsube: '\u2291',
  sqsubset: '\u228F',
  sqsubseteq: '\u2291',
  sqsup: '\u2290',
  sqsupe: '\u2292',
  sqsupset: '\u2290',
  sqsupseteq: '\u2292',
  squ: '\u25A1',
  Square: '\u25A1',
  square: '\u25A1',
  SquareIntersection: '\u2293',
  SquareSubset: '\u228F',
  SquareSubsetEqual: '\u2291',
  SquareSuperset: '\u2290',
  SquareSupersetEqual: '\u2292',
  SquareUnion: '\u2294',
  squarf: '\u25AA',
  squf: '\u25AA',
  srarr: '\u2192',
  Sscr: '\uD835\uDCAE',
  sscr: '\uD835\uDCC8',
  ssetmn: '\u2216',
  ssmile: '\u2323',
  sstarf: '\u22C6',
  Star: '\u22C6',
  star: '\u2606',
  starf: '\u2605',
  straightepsilon: '\u03F5',
  straightphi: '\u03D5',
  strns: '\u00AF',
  Sub: '\u22D0',
  sub: '\u2282',
  subdot: '\u2ABD',
  subE: '\u2AC5',
  sube: '\u2286',
  subedot: '\u2AC3',
  submult: '\u2AC1',
  subnE: '\u2ACB',
  subne: '\u228A',
  subplus: '\u2ABF',
  subrarr: '\u2979',
  Subset: '\u22D0',
  subset: '\u2282',
  subseteq: '\u2286',
  subseteqq: '\u2AC5',
  SubsetEqual: '\u2286',
  subsetneq: '\u228A',
  subsetneqq: '\u2ACB',
  subsim: '\u2AC7',
  subsub: '\u2AD5',
  subsup: '\u2AD3',
  succ: '\u227B',
  succapprox: '\u2AB8',
  succcurlyeq: '\u227D',
  Succeeds: '\u227B',
  SucceedsEqual: '\u2AB0',
  SucceedsSlantEqual: '\u227D',
  SucceedsTilde: '\u227F',
  succeq: '\u2AB0',
  succnapprox: '\u2ABA',
  succneqq: '\u2AB6',
  succnsim: '\u22E9',
  succsim: '\u227F',
  SuchThat: '\u220B',
  Sum: '\u2211',
  sum: '\u2211',
  sung: '\u266A',
  Sup: '\u22D1',
  sup: '\u2283',
  sup1: '\u00B9',
  sup2: '\u00B2',
  sup3: '\u00B3',
  supdot: '\u2ABE',
  supdsub: '\u2AD8',
  supE: '\u2AC6',
  supe: '\u2287',
  supedot: '\u2AC4',
  Superset: '\u2283',
  SupersetEqual: '\u2287',
  suphsol: '\u27C9',
  suphsub: '\u2AD7',
  suplarr: '\u297B',
  supmult: '\u2AC2',
  supnE: '\u2ACC',
  supne: '\u228B',
  supplus: '\u2AC0',
  Supset: '\u22D1',
  supset: '\u2283',
  supseteq: '\u2287',
  supseteqq: '\u2AC6',
  supsetneq: '\u228B',
  supsetneqq: '\u2ACC',
  supsim: '\u2AC8',
  supsub: '\u2AD4',
  supsup: '\u2AD6',
  swarhk: '\u2926',
  swArr: '\u21D9',
  swarr: '\u2199',
  swarrow: '\u2199',
  swnwar: '\u292A',
  szlig: '\u00DF',
  Tab: '\u0009',
  target: '\u2316',
  Tau: '\u03A4',
  tau: '\u03C4',
  tbrk: '\u23B4',
  Tcaron: '\u0164',
  tcaron: '\u0165',
  Tcedil: '\u0162',
  tcedil: '\u0163',
  Tcy: '\u0422',
  tcy: '\u0442',
  tdot: '\u20DB',
  telrec: '\u2315',
  Tfr: '\uD835\uDD17',
  tfr: '\uD835\uDD31',
  there4: '\u2234',
  Therefore: '\u2234',
  therefore: '\u2234',
  Theta: '\u0398',
  theta: '\u03B8',
  thetasym: '\u03D1',
  thetav: '\u03D1',
  thickapprox: '\u2248',
  thicksim: '\u223C',
  ThickSpace: '\u205F\u200A',
  thinsp: '\u2009',
  ThinSpace: '\u2009',
  thkap: '\u2248',
  thksim: '\u223C',
  THORN: '\u00DE',
  thorn: '\u00FE',
  Tilde: '\u223C',
  tilde: '\u02DC',
  TildeEqual: '\u2243',
  TildeFullEqual: '\u2245',
  TildeTilde: '\u2248',
  times: '\u00D7',
  timesb: '\u22A0',
  timesbar: '\u2A31',
  timesd: '\u2A30',
  tint: '\u222D',
  toea: '\u2928',
  top: '\u22A4',
  topbot: '\u2336',
  topcir: '\u2AF1',
  Topf: '\uD835\uDD4B',
  topf: '\uD835\uDD65',
  topfork: '\u2ADA',
  tosa: '\u2929',
  tprime: '\u2034',
  TRADE: '\u2122',
  trade: '\u2122',
  triangle: '\u25B5',
  triangledown: '\u25BF',
  triangleleft: '\u25C3',
  trianglelefteq: '\u22B4',
  triangleq: '\u225C',
  triangleright: '\u25B9',
  trianglerighteq: '\u22B5',
  tridot: '\u25EC',
  trie: '\u225C',
  triminus: '\u2A3A',
  TripleDot: '\u20DB',
  triplus: '\u2A39',
  trisb: '\u29CD',
  tritime: '\u2A3B',
  trpezium: '\u23E2',
  Tscr: '\uD835\uDCAF',
  tscr: '\uD835\uDCC9',
  TScy: '\u0426',
  tscy: '\u0446',
  TSHcy: '\u040B',
  tshcy: '\u045B',
  Tstrok: '\u0166',
  tstrok: '\u0167',
  twixt: '\u226C',
  twoheadleftarrow: '\u219E',
  twoheadrightarrow: '\u21A0',
  Uacute: '\u00DA',
  uacute: '\u00FA',
  Uarr: '\u219F',
  uArr: '\u21D1',
  uarr: '\u2191',
  Uarrocir: '\u2949',
  Ubrcy: '\u040E',
  ubrcy: '\u045E',
  Ubreve: '\u016C',
  ubreve: '\u016D',
  Ucirc: '\u00DB',
  ucirc: '\u00FB',
  Ucy: '\u0423',
  ucy: '\u0443',
  udarr: '\u21C5',
  Udblac: '\u0170',
  udblac: '\u0171',
  udhar: '\u296E',
  ufisht: '\u297E',
  Ufr: '\uD835\uDD18',
  ufr: '\uD835\uDD32',
  Ugrave: '\u00D9',
  ugrave: '\u00F9',
  uHar: '\u2963',
  uharl: '\u21BF',
  uharr: '\u21BE',
  uhblk: '\u2580',
  ulcorn: '\u231C',
  ulcorner: '\u231C',
  ulcrop: '\u230F',
  ultri: '\u25F8',
  Umacr: '\u016A',
  umacr: '\u016B',
  uml: '\u00A8',
  UnderBar: '\u005F',
  UnderBrace: '\u23DF',
  UnderBracket: '\u23B5',
  UnderParenthesis: '\u23DD',
  Union: '\u22C3',
  UnionPlus: '\u228E',
  Uogon: '\u0172',
  uogon: '\u0173',
  Uopf: '\uD835\uDD4C',
  uopf: '\uD835\uDD66',
  UpArrow: '\u2191',
  Uparrow: '\u21D1',
  uparrow: '\u2191',
  UpArrowBar: '\u2912',
  UpArrowDownArrow: '\u21C5',
  UpDownArrow: '\u2195',
  Updownarrow: '\u21D5',
  updownarrow: '\u2195',
  UpEquilibrium: '\u296E',
  upharpoonleft: '\u21BF',
  upharpoonright: '\u21BE',
  uplus: '\u228E',
  UpperLeftArrow: '\u2196',
  UpperRightArrow: '\u2197',
  Upsi: '\u03D2',
  upsi: '\u03C5',
  upsih: '\u03D2',
  Upsilon: '\u03A5',
  upsilon: '\u03C5',
  UpTee: '\u22A5',
  UpTeeArrow: '\u21A5',
  upuparrows: '\u21C8',
  urcorn: '\u231D',
  urcorner: '\u231D',
  urcrop: '\u230E',
  Uring: '\u016E',
  uring: '\u016F',
  urtri: '\u25F9',
  Uscr: '\uD835\uDCB0',
  uscr: '\uD835\uDCCA',
  utdot: '\u22F0',
  Utilde: '\u0168',
  utilde: '\u0169',
  utri: '\u25B5',
  utrif: '\u25B4',
  uuarr: '\u21C8',
  Uuml: '\u00DC',
  uuml: '\u00FC',
  uwangle: '\u29A7',
  vangrt: '\u299C',
  varepsilon: '\u03F5',
  varkappa: '\u03F0',
  varnothing: '\u2205',
  varphi: '\u03D5',
  varpi: '\u03D6',
  varpropto: '\u221D',
  vArr: '\u21D5',
  varr: '\u2195',
  varrho: '\u03F1',
  varsigma: '\u03C2',
  varsubsetneq: '\u228A\uFE00',
  varsubsetneqq: '\u2ACB\uFE00',
  varsupsetneq: '\u228B\uFE00',
  varsupsetneqq: '\u2ACC\uFE00',
  vartheta: '\u03D1',
  vartriangleleft: '\u22B2',
  vartriangleright: '\u22B3',
  Vbar: '\u2AEB',
  vBar: '\u2AE8',
  vBarv: '\u2AE9',
  Vcy: '\u0412',
  vcy: '\u0432',
  VDash: '\u22AB',
  Vdash: '\u22A9',
  vDash: '\u22A8',
  vdash: '\u22A2',
  Vdashl: '\u2AE6',
  Vee: '\u22C1',
  vee: '\u2228',
  veebar: '\u22BB',
  veeeq: '\u225A',
  vellip: '\u22EE',
  Verbar: '\u2016',
  verbar: '\u007C',
  Vert: '\u2016',
  vert: '\u007C',
  VerticalBar: '\u2223',
  VerticalLine: '\u007C',
  VerticalSeparator: '\u2758',
  VerticalTilde: '\u2240',
  VeryThinSpace: '\u200A',
  Vfr: '\uD835\uDD19',
  vfr: '\uD835\uDD33',
  vltri: '\u22B2',
  vnsub: '\u2282\u20D2',
  vnsup: '\u2283\u20D2',
  Vopf: '\uD835\uDD4D',
  vopf: '\uD835\uDD67',
  vprop: '\u221D',
  vrtri: '\u22B3',
  Vscr: '\uD835\uDCB1',
  vscr: '\uD835\uDCCB',
  vsubnE: '\u2ACB\uFE00',
  vsubne: '\u228A\uFE00',
  vsupnE: '\u2ACC\uFE00',
  vsupne: '\u228B\uFE00',
  Vvdash: '\u22AA',
  vzigzag: '\u299A',
  Wcirc: '\u0174',
  wcirc: '\u0175',
  wedbar: '\u2A5F',
  Wedge: '\u22C0',
  wedge: '\u2227',
  wedgeq: '\u2259',
  weierp: '\u2118',
  Wfr: '\uD835\uDD1A',
  wfr: '\uD835\uDD34',
  Wopf: '\uD835\uDD4E',
  wopf: '\uD835\uDD68',
  wp: '\u2118',
  wr: '\u2240',
  wreath: '\u2240',
  Wscr: '\uD835\uDCB2',
  wscr: '\uD835\uDCCC',
  xcap: '\u22C2',
  xcirc: '\u25EF',
  xcup: '\u22C3',
  xdtri: '\u25BD',
  Xfr: '\uD835\uDD1B',
  xfr: '\uD835\uDD35',
  xhArr: '\u27FA',
  xharr: '\u27F7',
  Xi: '\u039E',
  xi: '\u03BE',
  xlArr: '\u27F8',
  xlarr: '\u27F5',
  xmap: '\u27FC',
  xnis: '\u22FB',
  xodot: '\u2A00',
  Xopf: '\uD835\uDD4F',
  xopf: '\uD835\uDD69',
  xoplus: '\u2A01',
  xotime: '\u2A02',
  xrArr: '\u27F9',
  xrarr: '\u27F6',
  Xscr: '\uD835\uDCB3',
  xscr: '\uD835\uDCCD',
  xsqcup: '\u2A06',
  xuplus: '\u2A04',
  xutri: '\u25B3',
  xvee: '\u22C1',
  xwedge: '\u22C0',
  Yacute: '\u00DD',
  yacute: '\u00FD',
  YAcy: '\u042F',
  yacy: '\u044F',
  Ycirc: '\u0176',
  ycirc: '\u0177',
  Ycy: '\u042B',
  ycy: '\u044B',
  yen: '\u00A5',
  Yfr: '\uD835\uDD1C',
  yfr: '\uD835\uDD36',
  YIcy: '\u0407',
  yicy: '\u0457',
  Yopf: '\uD835\uDD50',
  yopf: '\uD835\uDD6A',
  Yscr: '\uD835\uDCB4',
  yscr: '\uD835\uDCCE',
  YUcy: '\u042E',
  yucy: '\u044E',
  Yuml: '\u0178',
  yuml: '\u00FF',
  Zacute: '\u0179',
  zacute: '\u017A',
  Zcaron: '\u017D',
  zcaron: '\u017E',
  Zcy: '\u0417',
  zcy: '\u0437',
  Zdot: '\u017B',
  zdot: '\u017C',
  zeetrf: '\u2128',
  ZeroWidthSpace: '\u200B',
  Zeta: '\u0396',
  zeta: '\u03B6',
  Zfr: '\u2128',
  zfr: '\uD835\uDD37',
  ZHcy: '\u0416',
  zhcy: '\u0436',
  zigrarr: '\u21DD',
  Zopf: '\u2124',
  zopf: '\uD835\uDD6B',
  Zscr: '\uD835\uDCB5',
  zscr: '\uD835\uDCCF',
  zwj: '\u200D',
  zwnj: '\u200C'
});

/**
 * @deprecated
 * Use `HTML_ENTITIES` instead.
 * @see {@link HTML_ENTITIES}
 */
exports.entityMap = exports.HTML_ENTITIES;

/***/ }),

/***/ 72204:
/*!***************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/errors.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var conventions = __webpack_require__(/*! ./conventions */ 33499);
function extendError(constructor, writableName) {
  constructor.prototype = Object.create(Error.prototype, {
    constructor: {
      value: constructor
    },
    name: {
      value: constructor.name,
      enumerable: true,
      writable: writableName
    }
  });
}
var DOMExceptionName = conventions.freeze({
  /**
   * the default value as defined by the spec
   */
  Error: 'Error',
  /**
   * @deprecated
   * Use RangeError instead.
   */
  IndexSizeError: 'IndexSizeError',
  /**
   * @deprecated
   * Just to match the related static code, not part of the spec.
   */
  DomstringSizeError: 'DomstringSizeError',
  HierarchyRequestError: 'HierarchyRequestError',
  WrongDocumentError: 'WrongDocumentError',
  InvalidCharacterError: 'InvalidCharacterError',
  /**
   * @deprecated
   * Just to match the related static code, not part of the spec.
   */
  NoDataAllowedError: 'NoDataAllowedError',
  NoModificationAllowedError: 'NoModificationAllowedError',
  NotFoundError: 'NotFoundError',
  NotSupportedError: 'NotSupportedError',
  InUseAttributeError: 'InUseAttributeError',
  InvalidStateError: 'InvalidStateError',
  SyntaxError: 'SyntaxError',
  InvalidModificationError: 'InvalidModificationError',
  NamespaceError: 'NamespaceError',
  /**
   * @deprecated
   * Use TypeError for invalid arguments,
   * "NotSupportedError" DOMException for unsupported operations,
   * and "NotAllowedError" DOMException for denied requests instead.
   */
  InvalidAccessError: 'InvalidAccessError',
  /**
   * @deprecated
   * Just to match the related static code, not part of the spec.
   */
  ValidationError: 'ValidationError',
  /**
   * @deprecated
   * Use TypeError instead.
   */
  TypeMismatchError: 'TypeMismatchError',
  SecurityError: 'SecurityError',
  NetworkError: 'NetworkError',
  AbortError: 'AbortError',
  /**
   * @deprecated
   * Just to match the related static code, not part of the spec.
   */
  URLMismatchError: 'URLMismatchError',
  QuotaExceededError: 'QuotaExceededError',
  TimeoutError: 'TimeoutError',
  InvalidNodeTypeError: 'InvalidNodeTypeError',
  DataCloneError: 'DataCloneError',
  EncodingError: 'EncodingError',
  NotReadableError: 'NotReadableError',
  UnknownError: 'UnknownError',
  ConstraintError: 'ConstraintError',
  DataError: 'DataError',
  TransactionInactiveError: 'TransactionInactiveError',
  ReadOnlyError: 'ReadOnlyError',
  VersionError: 'VersionError',
  OperationError: 'OperationError',
  NotAllowedError: 'NotAllowedError',
  OptOutError: 'OptOutError'
});
var DOMExceptionNames = Object.keys(DOMExceptionName);
function isValidDomExceptionCode(value) {
  return typeof value === 'number' && value >= 1 && value <= 25;
}
function endsWithError(value) {
  return typeof value === 'string' && value.substring(value.length - DOMExceptionName.Error.length) === DOMExceptionName.Error;
}
/**
 * DOM operations only raise exceptions in "exceptional" circumstances, i.e., when an operation
 * is impossible to perform (either for logical reasons, because data is lost, or because the
 * implementation has become unstable). In general, DOM methods return specific error values in
 * ordinary processing situations, such as out-of-bound errors when using NodeList.
 *
 * Implementations should raise other exceptions under other circumstances. For example,
 * implementations should raise an implementation-dependent exception if a null argument is
 * passed when null was not expected.
 *
 * This implementation supports the following usages:
 * 1. according to the living standard (both arguments are optional):
 * ```
 * new DOMException("message (can be empty)", DOMExceptionNames.HierarchyRequestError)
 * ```
 * 2. according to previous xmldom implementation (only the first argument is required):
 * ```
 * new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "optional message")
 * ```
 * both result in the proper name being set.
 *
 * @class DOMException
 * @param {number | string} messageOrCode
 * The reason why an operation is not acceptable.
 * If it is a number, it is used to determine the `name`, see
 * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-258A00AF ExceptionCode}
 * @param {string | keyof typeof DOMExceptionName | Error} [nameOrMessage]
 * The `name` to use for the error.
 * If `messageOrCode` is a number, this arguments is used as the `message` instead.
 * @augments Error
 * @see https://webidl.spec.whatwg.org/#idl-DOMException
 * @see https://webidl.spec.whatwg.org/#dfn-error-names-table
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-17189187
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(messageOrCode, nameOrMessage) {
  // support old way of passing arguments: first argument is a valid number
  if (isValidDomExceptionCode(messageOrCode)) {
    this.name = DOMExceptionNames[messageOrCode];
    this.message = nameOrMessage || '';
  } else {
    this.message = messageOrCode;
    this.name = endsWithError(nameOrMessage) ? nameOrMessage : DOMExceptionName.Error;
  }
  if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
}
extendError(DOMException, true);
Object.defineProperties(DOMException.prototype, {
  code: {
    enumerable: true,
    get: function () {
      var code = DOMExceptionNames.indexOf(this.name);
      if (isValidDomExceptionCode(code)) return code;
      return 0;
    }
  }
});
var ExceptionCode = {
  INDEX_SIZE_ERR: 1,
  DOMSTRING_SIZE_ERR: 2,
  HIERARCHY_REQUEST_ERR: 3,
  WRONG_DOCUMENT_ERR: 4,
  INVALID_CHARACTER_ERR: 5,
  NO_DATA_ALLOWED_ERR: 6,
  NO_MODIFICATION_ALLOWED_ERR: 7,
  NOT_FOUND_ERR: 8,
  NOT_SUPPORTED_ERR: 9,
  INUSE_ATTRIBUTE_ERR: 10,
  INVALID_STATE_ERR: 11,
  SYNTAX_ERR: 12,
  INVALID_MODIFICATION_ERR: 13,
  NAMESPACE_ERR: 14,
  INVALID_ACCESS_ERR: 15,
  VALIDATION_ERR: 16,
  TYPE_MISMATCH_ERR: 17,
  SECURITY_ERR: 18,
  NETWORK_ERR: 19,
  ABORT_ERR: 20,
  URL_MISMATCH_ERR: 21,
  QUOTA_EXCEEDED_ERR: 22,
  TIMEOUT_ERR: 23,
  INVALID_NODE_TYPE_ERR: 24,
  DATA_CLONE_ERR: 25
};
var entries = Object.entries(ExceptionCode);
for (var i = 0; i < entries.length; i++) {
  var key = entries[i][0];
  DOMException[key] = entries[i][1];
}

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @class
 * @param {string} message
 * @param {any} [locator]
 */
function ParseError(message, locator) {
  this.message = message;
  this.locator = locator;
  if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
extendError(ParseError);
exports.DOMException = DOMException;
exports.DOMExceptionName = DOMExceptionName;
exports.ExceptionCode = ExceptionCode;
exports.ParseError = ParseError;

/***/ }),

/***/ 99218:
/*!****************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/grammar.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Detects relevant unicode support for regular expressions in the runtime.
 * Should the runtime not accepts the flag `u` or unicode ranges,
 * character classes without unicode handling will be used.
 *
 * @param {typeof RegExp} [RegExpImpl=RegExp]
 * For testing: the RegExp class.
 * @returns {boolean}
 * @see https://node.green/#ES2015-syntax-RegExp--y--and--u--flags
 */
function detectUnicodeSupport(RegExpImpl) {
  try {
    if (typeof RegExpImpl !== 'function') {
      RegExpImpl = RegExp;
    }
    // eslint-disable-next-line es5/no-unicode-regex,es5/no-unicode-code-point-escape
    var match = new RegExpImpl('\u{1d306}', 'u').exec('𝌆');
    return !!match && match[0].length === 2;
  } catch (error) {}
  return false;
}
var UNICODE_SUPPORT = detectUnicodeSupport();

/**
 * Removes `[`, `]` and any trailing quantifiers from the source of a RegExp.
 *
 * @param {RegExp} regexp
 */
function chars(regexp) {
  if (regexp.source[0] !== '[') {
    throw new Error(regexp + ' can not be used with chars');
  }
  return regexp.source.slice(1, regexp.source.lastIndexOf(']'));
}

/**
 * Creates a new character list regular expression,
 * by removing `search` from the source of `regexp`.
 *
 * @param {RegExp} regexp
 * @param {string} search
 * The character(s) to remove.
 * @returns {RegExp}
 */
function chars_without(regexp, search) {
  if (regexp.source[0] !== '[') {
    throw new Error('/' + regexp.source + '/ can not be used with chars_without');
  }
  if (!search || typeof search !== 'string') {
    throw new Error(JSON.stringify(search) + ' is not a valid search');
  }
  if (regexp.source.indexOf(search) === -1) {
    throw new Error('"' + search + '" is not is /' + regexp.source + '/');
  }
  if (search === '-' && regexp.source.indexOf(search) !== 1) {
    throw new Error('"' + search + '" is not at the first postion of /' + regexp.source + '/');
  }
  return new RegExp(regexp.source.replace(search, ''), UNICODE_SUPPORT ? 'u' : '');
}

/**
 * Combines and Regular expressions correctly by using `RegExp.source`.
 *
 * @param {...(RegExp | string)[]} args
 * @returns {RegExp}
 */
function reg(args) {
  var self = this;
  return new RegExp(Array.prototype.slice.call(arguments).map(function (part) {
    var isStr = typeof part === 'string';
    if (isStr && self === undefined && part === '|') {
      throw new Error('use regg instead of reg to wrap expressions with `|`!');
    }
    return isStr ? part : part.source;
  }).join(''), UNICODE_SUPPORT ? 'mu' : 'm');
}

/**
 * Like `reg` but wraps the expression in `(?:`,`)` to create a non tracking group.
 *
 * @param {...(RegExp | string)[]} args
 * @returns {RegExp}
 */
function regg(args) {
  if (arguments.length === 0) {
    throw new Error('no parameters provided');
  }
  return reg.apply(regg, ['(?:'].concat(Array.prototype.slice.call(arguments), [')']));
}

// /**
//  * Append ^ to the beginning of the expression.
//  * @param {...(RegExp | string)[]} args
//  * @returns {RegExp}
//  */
// function reg_start(args) {
// 	if (arguments.length === 0) {
// 		throw new Error('no parameters provided');
// 	}
// 	return reg.apply(reg_start, ['^'].concat(Array.prototype.slice.call(arguments)));
// }

// https://www.w3.org/TR/xml/#document
// `[1] document ::= prolog element Misc*`
// https://www.w3.org/TR/xml11/#NT-document
// `[1] document ::= ( prolog element Misc* ) - ( Char* RestrictedChar Char* )`

/**
 * A character usually appearing in wrongly converted strings.
 *
 * @type {string}
 * @see https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character
 * @see https://nodejs.dev/en/api/v18/buffer/#buffers-and-character-encodings
 * @see https://www.unicode.org/faq/utf_bom.html#BOM
 * @readonly
 */
var UNICODE_REPLACEMENT_CHARACTER = '\uFFFD';
// https://www.w3.org/TR/xml/#NT-Char
// any Unicode character, excluding the surrogate blocks, FFFE, and FFFF.
// `[2] Char ::= #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]`
// https://www.w3.org/TR/xml11/#NT-Char
// `[2] Char ::= [#x1-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]`
// https://www.w3.org/TR/xml11/#NT-RestrictedChar
// `[2a] RestrictedChar ::= [#x1-#x8] | [#xB-#xC] | [#xE-#x1F] | [#x7F-#x84] | [#x86-#x9F]`
// https://www.w3.org/TR/xml11/#charsets
var Char = /[-\x09\x0A\x0D\x20-\x2C\x2E-\uD7FF\uE000-\uFFFD]/; // without \u10000-\uEFFFF
if (UNICODE_SUPPORT) {
  // eslint-disable-next-line es5/no-unicode-code-point-escape
  Char = reg('[', chars(Char), '\\u{10000}-\\u{10FFFF}', ']');
}
var _SChar = /[\x20\x09\x0D\x0A]/;
var SChar_s = chars(_SChar);
// https://www.w3.org/TR/xml11/#NT-S
// `[3] S ::= (#x20 | #x9 | #xD | #xA)+`
var S = reg(_SChar, '+');
// optional whitespace described as `S?` in the grammar,
// simplified to 0-n occurrences of the character class
// instead of 0-1 occurrences of a non-capturing group around S
var S_OPT = reg(_SChar, '*');

// https://www.w3.org/TR/xml11/#NT-NameStartChar
// `[4] NameStartChar ::= ":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]`
var NameStartChar = /[:_a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/; // without \u10000-\uEFFFF
if (UNICODE_SUPPORT) {
  // eslint-disable-next-line es5/no-unicode-code-point-escape
  NameStartChar = reg('[', chars(NameStartChar), '\\u{10000}-\\u{10FFFF}', ']');
}
var NameStartChar_s = chars(NameStartChar);

// https://www.w3.org/TR/xml11/#NT-NameChar
// `[4a] NameChar ::= NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]`
var NameChar = reg('[', NameStartChar_s, chars(/[-.0-9\xB7]/), chars(/[\u0300-\u036F\u203F-\u2040]/), ']');
// https://www.w3.org/TR/xml11/#NT-Name
// `[5] Name ::= NameStartChar (NameChar)*`
var Name = reg(NameStartChar, NameChar, '*');
/*
https://www.w3.org/TR/xml11/#NT-Names
`[6] Names ::= Name (#x20 Name)*`
*/

// https://www.w3.org/TR/xml11/#NT-Nmtoken
// `[7] Nmtoken ::= (NameChar)+`
var Nmtoken = reg(NameChar, '+');
/*
https://www.w3.org/TR/xml11/#NT-Nmtokens
`[8] Nmtokens ::= Nmtoken (#x20 Nmtoken)*`
var Nmtokens = reg(Nmtoken, regg(/\x20/, Nmtoken), '*');
*/

// https://www.w3.org/TR/xml11/#NT-EntityRef
// `[68] EntityRef ::= '&' Name ';'` [WFC: Entity Declared] [VC: Entity Declared] [WFC: Parsed Entity] [WFC: No Recursion]
var EntityRef = reg('&', Name, ';');
// https://www.w3.org/TR/xml11/#NT-CharRef
// `[66] CharRef ::= '&#' [0-9]+ ';' | '&#x' [0-9a-fA-F]+ ';'` [WFC: Legal Character]
var CharRef = regg(/&#[0-9]+;|&#x[0-9a-fA-F]+;/);

/*
https://www.w3.org/TR/xml11/#NT-Reference
- `[67] Reference ::= EntityRef | CharRef`
- `[66] CharRef ::= '&#' [0-9]+ ';' | '&#x' [0-9a-fA-F]+ ';'` [WFC: Legal Character]
- `[68] EntityRef ::= '&' Name ';'` [WFC: Entity Declared] [VC: Entity Declared] [WFC: Parsed Entity] [WFC: No Recursion]
*/
var Reference = regg(EntityRef, '|', CharRef);

// https://www.w3.org/TR/xml11/#NT-PEReference
// `[69] PEReference ::= '%' Name ';'`
// [VC: Entity Declared] [WFC: No Recursion] [WFC: In DTD]
var PEReference = reg('%', Name, ';');

// https://www.w3.org/TR/xml11/#NT-EntityValue
// `[9] EntityValue ::= '"' ([^%&"] | PEReference | Reference)* '"' | "'" ([^%&'] | PEReference | Reference)* "'"`
var EntityValue = regg(reg('"', regg(/[^%&"]/, '|', PEReference, '|', Reference), '*', '"'), '|', reg("'", regg(/[^%&']/, '|', PEReference, '|', Reference), '*', "'"));

// https://www.w3.org/TR/xml11/#NT-AttValue
// `[10] AttValue ::= '"' ([^<&"] | Reference)* '"' | "'" ([^<&'] | Reference)* "'"`
var AttValue = regg('"', regg(/[^<&"]/, '|', Reference), '*', '"', '|', "'", regg(/[^<&']/, '|', Reference), '*', "'");

// https://www.w3.org/TR/xml-names/#ns-decl
// https://www.w3.org/TR/xml-names/#ns-qualnames
// NameStartChar without ":"
var NCNameStartChar = chars_without(NameStartChar, ':');
// https://www.w3.org/TR/xml-names/#orphans
// `[5] NCNameChar ::= NameChar - ':'`
// An XML NameChar, minus the ":"
var NCNameChar = chars_without(NameChar, ':');
// https://www.w3.org/TR/xml-names/#NT-NCName
// `[4] NCName ::= Name - (Char* ':' Char*)`
// An XML Name, minus the ":"
var NCName = reg(NCNameStartChar, NCNameChar, '*');

/**
https://www.w3.org/TR/xml-names/#ns-qualnames

```
[7] QName ::= PrefixedName | UnprefixedName
				  === (NCName ':' NCName) | NCName
				  === NCName (':' NCName)?
[8] PrefixedName ::= Prefix ':' LocalPart
								 === NCName ':' NCName
[9] UnprefixedName ::= LocalPart
									 === NCName
[10] Prefix ::= NCName
[11] LocalPart ::= NCName
```
*/
var QName = reg(NCName, regg(':', NCName), '?');
var QName_exact = reg('^', QName, '$');
var QName_group = reg('(', QName, ')');

// https://www.w3.org/TR/xml11/#NT-SystemLiteral
// `[11] SystemLiteral ::= ('"' [^"]* '"') | ("'" [^']* "'")`
var SystemLiteral = regg(/"[^"]*"|'[^']*'/);

/*
 https://www.w3.org/TR/xml11/#NT-PI
 ```
 [17] PITarget    ::= Name - (('X' | 'x') ('M' | 'm') ('L' | 'l'))
 [16] PI    ::= '<?' PITarget (S (Char* - (Char* '?>' Char*)))? '?>'
 ```
 target /xml/i is not excluded!
*/
var PI = reg(/^<\?/, '(', Name, ')', regg(S, '(', Char, '*?)'), '?', /\?>/);

// https://www.w3.org/TR/xml11/#NT-PubidChar
// `[13] PubidChar ::= #x20 | #xD | #xA | [a-zA-Z0-9] | [-'()+,./:=?;!*#@$_%]`
var PubidChar = /[\x20\x0D\x0Aa-zA-Z0-9-'()+,./:=?;!*#@$_%]/;

// https://www.w3.org/TR/xml11/#NT-PubidLiteral
// `[12] PubidLiteral ::= '"' PubidChar* '"' | "'" (PubidChar - "'")* "'"`
var PubidLiteral = regg('"', PubidChar, '*"', '|', "'", chars_without(PubidChar, "'"), "*'");

// https://www.w3.org/TR/xml11/#NT-CharData
// `[14] CharData    ::= [^<&]* - ([^<&]* ']]>' [^<&]*)`

var COMMENT_START = '<!--';
var COMMENT_END = '-->';
// https://www.w3.org/TR/xml11/#NT-Comment
// `[15] Comment ::= '<!--' ((Char - '-') | ('-' (Char - '-')))* '-->'`
var Comment = reg(COMMENT_START, regg(chars_without(Char, '-'), '|', reg('-', chars_without(Char, '-'))), '*', COMMENT_END);
var PCDATA = '#PCDATA';
// https://www.w3.org/TR/xml11/#NT-Mixed
// `[51] Mixed ::= '(' S? '#PCDATA' (S? '|' S? Name)* S? ')*' | '(' S? '#PCDATA' S? ')'`
// https://www.w3.org/TR/xml-names/#NT-Mixed
// `[51] Mixed ::= '(' S? '#PCDATA' (S? '|' S? QName)* S? ')*' | '(' S? '#PCDATA' S? ')'`
// [VC: Proper Group/PE Nesting] [VC: No Duplicate Types]
var Mixed = regg(reg(/\(/, S_OPT, PCDATA, regg(S_OPT, /\|/, S_OPT, QName), '*', S_OPT, /\)\*/), '|', reg(/\(/, S_OPT, PCDATA, S_OPT, /\)/));
var _children_quantity = /[?*+]?/;
/*
 `[49] choice ::= '(' S? cp ( S? '|' S? cp )+ S? ')'` [VC: Proper Group/PE Nesting]
 `[50] seq ::= '(' S? cp ( S? ',' S? cp )* S? ')'` [VC: Proper Group/PE Nesting]
 simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
 var _choice_or_seq = reg('[', NameChar_s, SChar_s, chars(_children_quantity), '()|,]*');
 ```
 [48] cp ::= (Name | choice | seq) ('?' | '*' | '+')?
         === (Name | '(' S? cp ( S? '|' S? cp )+ S? ')' | '(' S? cp ( S? ',' S? cp )* S? ')') ('?' | '*' | '+')?
         !== (Name | [_choice_or_seq]*) ('?' | '*' | '+')?
 ```
 simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
 var cp = reg(regg(Name, '|', _choice_or_seq), _children_quantity);
*/
/*
Inefficient regular expression (High)
This part of the regular expression may cause exponential backtracking on strings starting with '(|' and containing many repetitions of '|'.
https://github.com/xmldom/xmldom/security/code-scanning/91
var choice = regg(/\(/, S_OPT, cp, regg(S_OPT, /\|/, S_OPT, cp), '+', S_OPT, /\)/);
*/
/*
Inefficient regular expression (High)
This part of the regular expression may cause exponential backtracking on strings starting with '(,' and containing many repetitions of ','.
https://github.com/xmldom/xmldom/security/code-scanning/92
var seq = regg(/\(/, S_OPT, cp, regg(S_OPT, /,/, S_OPT, cp), '*', S_OPT, /\)/);
*/

// `[47] children ::= (choice | seq) ('?' | '*' | '+')?`
// simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
var children = reg(/\([^>]+\)/, _children_quantity /*regg(choice, '|', seq), _children_quantity*/);

// https://www.w3.org/TR/xml11/#NT-contentspec
// `[46] contentspec ::= 'EMPTY' | 'ANY' | Mixed | children`
var contentspec = regg('EMPTY', '|', 'ANY', '|', Mixed, '|', children);
var ELEMENTDECL_START = '<!ELEMENT';
// https://www.w3.org/TR/xml11/#NT-elementdecl
// `[45] elementdecl ::= '<!ELEMENT' S Name S contentspec S? '>'`
// https://www.w3.org/TR/xml-names/#NT-elementdecl
// `[17] elementdecl ::= '<!ELEMENT' S QName S contentspec S? '>'`
// because of https://www.w3.org/TR/xml11/#NT-PEReference
// since xmldom is not supporting replacements of PEReferences in the DTD
// this also supports PEReference in the possible places
var elementdecl = reg(ELEMENTDECL_START, S, regg(QName, '|', PEReference), S, regg(contentspec, '|', PEReference), S_OPT, '>');

// https://www.w3.org/TR/xml11/#NT-NotationType
// `[58] NotationType ::= 'NOTATION' S '(' S? Name (S? '|' S? Name)* S? ')'`
// [VC: Notation Attributes] [VC: One Notation Per Element Type] [VC: No Notation on Empty Element] [VC: No Duplicate Tokens]
var NotationType = reg('NOTATION', S, /\(/, S_OPT, Name, regg(S_OPT, /\|/, S_OPT, Name), '*', S_OPT, /\)/);
// https://www.w3.org/TR/xml11/#NT-Enumeration
// `[59] Enumeration ::= '(' S? Nmtoken (S? '|' S? Nmtoken)* S? ')'`
// [VC: Enumeration] [VC: No Duplicate Tokens]
var Enumeration = reg(/\(/, S_OPT, Nmtoken, regg(S_OPT, /\|/, S_OPT, Nmtoken), '*', S_OPT, /\)/);

// https://www.w3.org/TR/xml11/#NT-EnumeratedType
// `[57] EnumeratedType ::= NotationType | Enumeration`
var EnumeratedType = regg(NotationType, '|', Enumeration);

/*
```
[55] StringType ::= 'CDATA'
[56] TokenizedType ::= 'ID' [VC: ID] [VC: One ID per Element Type] [VC: ID Attribute Default]
   | 'IDREF' [VC: IDREF]
   | 'IDREFS' [VC: IDREF]
	 | 'ENTITY' [VC: Entity Name]
	 | 'ENTITIES' [VC: Entity Name]
	 | 'NMTOKEN' [VC: Name Token]
	 | 'NMTOKENS' [VC: Name Token]
 [54] AttType ::= StringType | TokenizedType | EnumeratedType
```*/
var AttType = regg(/CDATA|ID|IDREF|IDREFS|ENTITY|ENTITIES|NMTOKEN|NMTOKENS/, '|', EnumeratedType);

// `[60] DefaultDecl ::= '#REQUIRED' | '#IMPLIED' | (('#FIXED' S)? AttValue)`
// [WFC: No < in Attribute Values] [WFC: No External Entity References]
// [VC: Fixed Attribute Default] [VC: Required Attribute] [VC: Attribute Default Value Syntactically Correct]
var DefaultDecl = regg(/#REQUIRED|#IMPLIED/, '|', regg(regg('#FIXED', S), '?', AttValue));

// https://www.w3.org/TR/xml11/#NT-AttDef
// [53] AttDef ::= S Name S AttType S DefaultDecl
// https://www.w3.org/TR/xml-names/#NT-AttDef
// [1] NSAttName ::= PrefixedAttName | DefaultAttName
// [2] PrefixedAttName ::= 'xmlns:' NCName [NSC: Reserved Prefixes and Namespace Names]
// [3] DefaultAttName ::= 'xmlns'
// [21] AttDef ::= S (QName | NSAttName) S AttType S DefaultDecl
// 						 === S Name S AttType S DefaultDecl
// xmldom is not distinguishing between QName and NSAttName on this level
// to support XML without namespaces in DTD we can not restrict it to QName
var AttDef = regg(S, Name, S, AttType, S, DefaultDecl);
var ATTLIST_DECL_START = '<!ATTLIST';
// https://www.w3.org/TR/xml11/#NT-AttlistDecl
// `[52] AttlistDecl ::= '<!ATTLIST' S Name AttDef* S? '>'`
// https://www.w3.org/TR/xml-names/#NT-AttlistDecl
// `[20] AttlistDecl ::= '<!ATTLIST' S QName AttDef* S? '>'`
// to support XML without namespaces in DTD we can not restrict it to QName
var AttlistDecl = reg(ATTLIST_DECL_START, S, Name, AttDef, '*', S_OPT, '>');

// https://html.spec.whatwg.org/multipage/urls-and-fetching.html#about:legacy-compat
var ABOUT_LEGACY_COMPAT = 'about:legacy-compat';
var ABOUT_LEGACY_COMPAT_SystemLiteral = regg('"' + ABOUT_LEGACY_COMPAT + '"', '|', "'" + ABOUT_LEGACY_COMPAT + "'");
var SYSTEM = 'SYSTEM';
var PUBLIC = 'PUBLIC';
// https://www.w3.org/TR/xml11/#NT-ExternalID
// `[75] ExternalID ::= 'SYSTEM' S SystemLiteral | 'PUBLIC' S PubidLiteral S SystemLiteral`
var ExternalID = regg(regg(SYSTEM, S, SystemLiteral), '|', regg(PUBLIC, S, PubidLiteral, S, SystemLiteral));
var ExternalID_match = reg('^', regg(regg(SYSTEM, S, '(?<SystemLiteralOnly>', SystemLiteral, ')'), '|', regg(PUBLIC, S, '(?<PubidLiteral>', PubidLiteral, ')', S, '(?<SystemLiteral>', SystemLiteral, ')')));

// https://www.w3.org/TR/xml11/#NT-NDataDecl
// `[76] NDataDecl ::= S 'NDATA' S Name` [VC: Notation Declared]
var NDataDecl = regg(S, 'NDATA', S, Name);

// https://www.w3.org/TR/xml11/#NT-EntityDef
// `[73] EntityDef ::= EntityValue | (ExternalID NDataDecl?)`
var EntityDef = regg(EntityValue, '|', regg(ExternalID, NDataDecl, '?'));
var ENTITY_DECL_START = '<!ENTITY';
// https://www.w3.org/TR/xml11/#NT-GEDecl
// `[71] GEDecl ::= '<!ENTITY' S Name S EntityDef S? '>'`
var GEDecl = reg(ENTITY_DECL_START, S, Name, S, EntityDef, S_OPT, '>');
// https://www.w3.org/TR/xml11/#NT-PEDef
// `[74] PEDef ::= EntityValue | ExternalID`
var PEDef = regg(EntityValue, '|', ExternalID);
// https://www.w3.org/TR/xml11/#NT-PEDecl
// `[72] PEDecl ::= '<!ENTITY' S '%' S Name S PEDef S? '>'`
var PEDecl = reg(ENTITY_DECL_START, S, '%', S, Name, S, PEDef, S_OPT, '>');
// https://www.w3.org/TR/xml11/#NT-EntityDecl
// `[70] EntityDecl ::= GEDecl | PEDecl`
var EntityDecl = regg(GEDecl, '|', PEDecl);

// https://www.w3.org/TR/xml11/#NT-PublicID
// `[83] PublicID    ::= 'PUBLIC' S PubidLiteral`
var PublicID = reg(PUBLIC, S, PubidLiteral);
// https://www.w3.org/TR/xml11/#NT-NotationDecl
// `[82] NotationDecl    ::= '<!NOTATION' S Name S (ExternalID | PublicID) S? '>'` [VC: Unique Notation Name]
var NotationDecl = reg('<!NOTATION', S, Name, S, regg(ExternalID, '|', PublicID), S_OPT, '>');

// https://www.w3.org/TR/xml11/#NT-Eq
// `[25] Eq ::= S? '=' S?`
var Eq = reg(S_OPT, '=', S_OPT);
// https://www.w3.org/TR/xml/#NT-VersionNum
// `[26] VersionNum ::= '1.' [0-9]+`
// https://www.w3.org/TR/xml11/#NT-VersionNum
// `[26] VersionNum ::= '1.1'`
var VersionNum = /1[.]\d+/;
// https://www.w3.org/TR/xml11/#NT-VersionInfo
// `[24] VersionInfo ::= S 'version' Eq ("'" VersionNum "'" | '"' VersionNum '"')`
var VersionInfo = reg(S, 'version', Eq, regg("'", VersionNum, "'", '|', '"', VersionNum, '"'));
// https://www.w3.org/TR/xml11/#NT-EncName
// `[81] EncName ::= [A-Za-z] ([A-Za-z0-9._] | '-')*`
var EncName = /[A-Za-z][-A-Za-z0-9._]*/;
// https://www.w3.org/TR/xml11/#NT-EncDecl
// `[80] EncodingDecl ::= S 'encoding' Eq ('"' EncName '"' | "'" EncName "'" )`
var EncodingDecl = regg(S, 'encoding', Eq, regg('"', EncName, '"', '|', "'", EncName, "'"));
// https://www.w3.org/TR/xml11/#NT-SDDecl
// `[32] SDDecl ::= S 'standalone' Eq (("'" ('yes' | 'no') "'") | ('"' ('yes' | 'no') '"'))`
var SDDecl = regg(S, 'standalone', Eq, regg("'", regg('yes', '|', 'no'), "'", '|', '"', regg('yes', '|', 'no'), '"'));
// https://www.w3.org/TR/xml11/#NT-XMLDecl
// [23] XMLDecl ::= '<?xml' VersionInfo EncodingDecl? SDDecl? S? '?>'
var XMLDecl = reg(/^<\?xml/, VersionInfo, EncodingDecl, '?', SDDecl, '?', S_OPT, /\?>/);

/*
 https://www.w3.org/TR/xml/#NT-markupdecl
 https://www.w3.org/TR/xml11/#NT-markupdecl
 `[29] markupdecl ::= elementdecl | AttlistDecl | EntityDecl | NotationDecl | PI | Comment`
 var markupdecl = regg(elementdecl, '|', AttlistDecl, '|', EntityDecl, '|', NotationDecl, '|', PI_unsafe, '|', Comment);
*/
/*
 https://www.w3.org/TR/xml-names/#NT-doctypedecl
`[28a] DeclSep   ::= PEReference | S`
 https://www.w3.org/TR/xml11/#NT-intSubset
```
 [28b] intSubset ::= (markupdecl | DeclSep)*
                 === (markupdecl | PEReference | S)*
```
 [WFC: PE Between Declarations]
 var intSubset = reg(regg(markupdecl, '|', PEReference, '|', S), '*');
*/
var DOCTYPE_DECL_START = '<!DOCTYPE';
/*
 https://www.w3.org/TR/xml11/#NT-doctypedecl
 `[28] doctypedecl ::= '<!DOCTYPE' S Name (S ExternalID)? S? ('[' intSubset ']' S?)? '>'`
 https://www.afterwardsw3.org/TR/xml-names/#NT-doctypedecl
 `[16] doctypedecl ::= '<!DOCTYPE' S QName (S ExternalID)? S? ('[' (markupdecl | PEReference | S)* ']' S?)? '>'`
 var doctypedecl = reg('<!DOCTYPE', S, Name, regg(S, ExternalID), '?', S_OPT, regg(/\[/, intSubset, /]/, S_OPT), '?', '>');
*/

var CDATA_START = '<![CDATA[';
var CDATA_END = ']]>';
var CDStart = /<!\[CDATA\[/;
var CDEnd = /\]\]>/;
var CData = reg(Char, '*?', CDEnd);
/*
 https://www.w3.org/TR/xml/#dt-cdsection
 `[18]   	CDSect	   ::=   	CDStart CData CDEnd`
 `[19]   	CDStart	   ::=   	'<![CDATA['`
 `[20]   	CData	   ::=   	(Char* - (Char* ']]>' Char*))`
 `[21]   	CDEnd	   ::=   	']]>'`
*/
var CDSect = reg(CDStart, CData);

// unit tested
exports.chars = chars;
exports.chars_without = chars_without;
exports.detectUnicodeSupport = detectUnicodeSupport;
exports.reg = reg;
exports.regg = regg;
exports.ABOUT_LEGACY_COMPAT = ABOUT_LEGACY_COMPAT;
exports.ABOUT_LEGACY_COMPAT_SystemLiteral = ABOUT_LEGACY_COMPAT_SystemLiteral;
exports.AttlistDecl = AttlistDecl;
exports.CDATA_START = CDATA_START;
exports.CDATA_END = CDATA_END;
exports.CDSect = CDSect;
exports.Char = Char;
exports.Comment = Comment;
exports.COMMENT_START = COMMENT_START;
exports.COMMENT_END = COMMENT_END;
exports.DOCTYPE_DECL_START = DOCTYPE_DECL_START;
exports.elementdecl = elementdecl;
exports.EntityDecl = EntityDecl;
exports.EntityValue = EntityValue;
exports.ExternalID = ExternalID;
exports.ExternalID_match = ExternalID_match;
exports.Name = Name;
exports.NotationDecl = NotationDecl;
exports.Reference = Reference;
exports.PEReference = PEReference;
exports.PI = PI;
exports.PUBLIC = PUBLIC;
exports.PubidLiteral = PubidLiteral;
exports.QName = QName;
exports.QName_exact = QName_exact;
exports.QName_group = QName_group;
exports.S = S;
exports.SChar_s = SChar_s;
exports.S_OPT = S_OPT;
exports.SYSTEM = SYSTEM;
exports.SystemLiteral = SystemLiteral;
exports.UNICODE_REPLACEMENT_CHARACTER = UNICODE_REPLACEMENT_CHARACTER;
exports.UNICODE_SUPPORT = UNICODE_SUPPORT;
exports.XMLDecl = XMLDecl;

/***/ }),

/***/ 32419:
/*!**************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var conventions = __webpack_require__(/*! ./conventions */ 33499);
exports.assign = conventions.assign;
exports.hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
exports.isHTMLMimeType = conventions.isHTMLMimeType;
exports.isValidMimeType = conventions.isValidMimeType;
exports.MIME_TYPE = conventions.MIME_TYPE;
exports.NAMESPACE = conventions.NAMESPACE;
var errors = __webpack_require__(/*! ./errors */ 72204);
exports.DOMException = errors.DOMException;
exports.DOMExceptionName = errors.DOMExceptionName;
exports.ExceptionCode = errors.ExceptionCode;
exports.ParseError = errors.ParseError;
var dom = __webpack_require__(/*! ./dom */ 57315);
exports.Attr = dom.Attr;
exports.CDATASection = dom.CDATASection;
exports.CharacterData = dom.CharacterData;
exports.Comment = dom.Comment;
exports.Document = dom.Document;
exports.DocumentFragment = dom.DocumentFragment;
exports.DocumentType = dom.DocumentType;
exports.DOMImplementation = dom.DOMImplementation;
exports.Element = dom.Element;
exports.Entity = dom.Entity;
exports.EntityReference = dom.EntityReference;
exports.LiveNodeList = dom.LiveNodeList;
exports.NamedNodeMap = dom.NamedNodeMap;
exports.Node = dom.Node;
exports.NodeList = dom.NodeList;
exports.Notation = dom.Notation;
exports.ProcessingInstruction = dom.ProcessingInstruction;
exports.Text = dom.Text;
exports.XMLSerializer = dom.XMLSerializer;
var domParser = __webpack_require__(/*! ./dom-parser */ 22219);
exports.DOMParser = domParser.DOMParser;
exports.normalizeLineEndings = domParser.normalizeLineEndings;
exports.onErrorStopParsing = domParser.onErrorStopParsing;
exports.onWarningStopParsing = domParser.onWarningStopParsing;

/***/ }),

/***/ 51495:
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/sax.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var conventions = __webpack_require__(/*! ./conventions */ 33499);
var g = __webpack_require__(/*! ./grammar */ 99218);
var errors = __webpack_require__(/*! ./errors */ 72204);
var isHTMLEscapableRawTextElement = conventions.isHTMLEscapableRawTextElement;
var isHTMLMimeType = conventions.isHTMLMimeType;
var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
var hasOwn = conventions.hasOwn;
var NAMESPACE = conventions.NAMESPACE;
var ParseError = errors.ParseError;
var DOMException = errors.DOMException;

//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0; //tag name offerring
var S_ATTR = 1; //attr name offerring
var S_ATTR_SPACE = 2; //attr name end and space offer
var S_EQ = 3; //=space?
var S_ATTR_NOQUOT_VALUE = 4; //attr value(no quot value only)
var S_ATTR_END = 5; //attr value end and no space(quot end)
var S_TAG_SPACE = 6; //(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7; //closed el<el />

function XMLReader() {}
XMLReader.prototype = {
  parse: function (source, defaultNSMap, entityMap) {
    var domBuilder = this.domBuilder;
    domBuilder.startDocument();
    _copy(defaultNSMap, defaultNSMap = Object.create(null));
    parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
    domBuilder.endDocument();
  }
};

/**
 * Detecting everything that might be a reference,
 * including those without ending `;`, since those are allowed in HTML.
 * The entityReplacer takes care of verifying and transforming each occurrence,
 * and reports to the errorHandler on those that are not OK,
 * depending on the context.
 */
var ENTITY_REG = /&#?\w+;?/g;
function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
  var isHTML = isHTMLMimeType(domBuilder.mimeType);
  if (source.indexOf(g.UNICODE_REPLACEMENT_CHARACTER) >= 0) {
    errorHandler.warning('Unicode replacement character detected, source encoding issues?');
  }
  function fixedFromCharCode(code) {
    // String.prototype.fromCharCode does not supports
    // > 2 bytes unicode chars directly
    if (code > 0xffff) {
      code -= 0x10000;
      var surrogate1 = 0xd800 + (code >> 10),
        surrogate2 = 0xdc00 + (code & 0x3ff);
      return String.fromCharCode(surrogate1, surrogate2);
    } else {
      return String.fromCharCode(code);
    }
  }
  function entityReplacer(a) {
    var complete = a[a.length - 1] === ';' ? a : a + ';';
    if (!isHTML && complete !== a) {
      errorHandler.error('EntityRef: expecting ;');
      return a;
    }
    var match = g.Reference.exec(complete);
    if (!match || match[0].length !== complete.length) {
      errorHandler.error('entity not matching Reference production: ' + a);
      return a;
    }
    var k = complete.slice(1, -1);
    if (hasOwn(entityMap, k)) {
      return entityMap[k];
    } else if (k.charAt(0) === '#') {
      return fixedFromCharCode(parseInt(k.substring(1).replace('x', '0x')));
    } else {
      errorHandler.error('entity not found:' + a);
      return a;
    }
  }
  function appendText(end) {
    //has some bugs
    if (end > start) {
      var xt = source.substring(start, end).replace(ENTITY_REG, entityReplacer);
      locator && position(start);
      domBuilder.characters(xt, 0, end - start);
      start = end;
    }
  }
  var lineStart = 0;
  var lineEnd = 0;
  var linePattern = /\r\n?|\n|$/g;
  var locator = domBuilder.locator;
  function position(p, m) {
    while (p >= lineEnd && (m = linePattern.exec(source))) {
      lineStart = lineEnd;
      lineEnd = m.index + m[0].length;
      locator.lineNumber++;
    }
    locator.columnNumber = p - lineStart + 1;
  }
  var parseStack = [{
    currentNSMap: defaultNSMapCopy
  }];
  var unclosedTags = [];
  var start = 0;
  while (true) {
    try {
      var tagStart = source.indexOf('<', start);
      if (tagStart < 0) {
        if (!isHTML && unclosedTags.length > 0) {
          return errorHandler.fatalError('unclosed xml tag(s): ' + unclosedTags.join(', '));
        }
        if (!source.substring(start).match(/^\s*$/)) {
          var doc = domBuilder.doc;
          var text = doc.createTextNode(source.substring(start));
          if (doc.documentElement) {
            return errorHandler.error('Extra content at the end of the document');
          }
          doc.appendChild(text);
          domBuilder.currentElement = text;
        }
        return;
      }
      if (tagStart > start) {
        var fromSource = source.substring(start, tagStart);
        if (!isHTML && unclosedTags.length === 0) {
          fromSource = fromSource.replace(new RegExp(g.S_OPT.source, 'g'), '');
          fromSource && errorHandler.error("Unexpected content outside root element: '" + fromSource + "'");
        }
        appendText(tagStart);
      }
      switch (source.charAt(tagStart + 1)) {
        case '/':
          var end = source.indexOf('>', tagStart + 2);
          var tagNameRaw = source.substring(tagStart + 2, end > 0 ? end : undefined);
          if (!tagNameRaw) {
            return errorHandler.fatalError('end tag name missing');
          }
          var tagNameMatch = end > 0 && g.reg('^', g.QName_group, g.S_OPT, '$').exec(tagNameRaw);
          if (!tagNameMatch) {
            return errorHandler.fatalError('end tag name contains invalid characters: "' + tagNameRaw + '"');
          }
          if (!domBuilder.currentElement && !domBuilder.doc.documentElement) {
            // not enough information to provide a helpful error message,
            // but parsing will throw since there is no root element
            return;
          }
          var currentTagName = unclosedTags[unclosedTags.length - 1] || domBuilder.currentElement.tagName || domBuilder.doc.documentElement.tagName || '';
          if (currentTagName !== tagNameMatch[1]) {
            var tagNameLower = tagNameMatch[1].toLowerCase();
            if (!isHTML || currentTagName.toLowerCase() !== tagNameLower) {
              return errorHandler.fatalError('Opening and ending tag mismatch: "' + currentTagName + '" != "' + tagNameRaw + '"');
            }
          }
          var config = parseStack.pop();
          unclosedTags.pop();
          var localNSMap = config.localNSMap;
          domBuilder.endElement(config.uri, config.localName, currentTagName);
          if (localNSMap) {
            for (var prefix in localNSMap) {
              if (hasOwn(localNSMap, prefix)) {
                domBuilder.endPrefixMapping(prefix);
              }
            }
          }
          end++;
          break;
        // end element
        case '?':
          // <?...?>
          locator && position(tagStart);
          end = parseProcessingInstruction(source, tagStart, domBuilder, errorHandler);
          break;
        case '!':
          // <!doctype,<![CDATA,<!--
          locator && position(tagStart);
          end = parseDoctypeCommentOrCData(source, tagStart, domBuilder, errorHandler, isHTML);
          break;
        default:
          locator && position(tagStart);
          var el = new ElementAttributes();
          var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
          //elStartEnd
          var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler, isHTML);
          var len = el.length;
          if (!el.closed) {
            if (isHTML && conventions.isHTMLVoidElement(el.tagName)) {
              el.closed = true;
            } else {
              unclosedTags.push(el.tagName);
            }
          }
          if (locator && len) {
            var locator2 = copyLocator(locator, {});
            //try{//attribute position fixed
            for (var i = 0; i < len; i++) {
              var a = el[i];
              position(a.offset);
              a.locator = copyLocator(locator, {});
            }
            domBuilder.locator = locator2;
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
            domBuilder.locator = locator;
          } else {
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
          }
          if (isHTML && !el.closed) {
            end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
          } else {
            end++;
          }
      }
    } catch (e) {
      if (e instanceof ParseError) {
        throw e;
      } else if (e instanceof DOMException) {
        throw new ParseError(e.name + ': ' + e.message, domBuilder.locator, e);
      }
      errorHandler.error('element parse error: ' + e);
      end = -1;
    }
    if (end > start) {
      start = end;
    } else {
      //Possible sax fallback here, risk of positional error
      appendText(Math.max(tagStart, start) + 1);
    }
  }
}
function copyLocator(f, t) {
  t.lineNumber = f.lineNumber;
  t.columnNumber = f.columnNumber;
  return t;
}

/**
 * @returns
 * end of the elementStartPart(end of elementEndPart for selfClosed el)
 * @see {@link #appendElement}
 */
function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler, isHTML) {
  /**
   * @param {string} qname
   * @param {string} value
   * @param {number} startIndex
   */
  function addAttribute(qname, value, startIndex) {
    if (hasOwn(el.attributeNames, qname)) {
      return errorHandler.fatalError('Attribute ' + qname + ' redefined');
    }
    if (!isHTML && value.indexOf('<') >= 0) {
      return errorHandler.fatalError("Unescaped '<' not allowed in attributes values");
    }
    el.addValue(qname,
    // @see https://www.w3.org/TR/xml/#AVNormalize
    // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
    // - recursive replacement of (DTD) entity references
    // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
    value.replace(/[\t\n\r]/g, ' ').replace(ENTITY_REG, entityReplacer), startIndex);
  }
  var attrName;
  var value;
  var p = ++start;
  var s = S_TAG; //status
  while (true) {
    var c = source.charAt(p);
    switch (c) {
      case '=':
        if (s === S_ATTR) {
          //attrName
          attrName = source.slice(start, p);
          s = S_EQ;
        } else if (s === S_ATTR_SPACE) {
          s = S_EQ;
        } else {
          //fatalError: equal must after attrName or space after attrName
          throw new Error('attribute equal must after attrName'); // No known test case
        }

        break;
      case "'":
      case '"':
        if (s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
        ) {
          //equal
          if (s === S_ATTR) {
            errorHandler.warning('attribute value must after "="');
            attrName = source.slice(start, p);
          }
          start = p + 1;
          p = source.indexOf(c, start);
          if (p > 0) {
            value = source.slice(start, p);
            addAttribute(attrName, value, start - 1);
            s = S_ATTR_END;
          } else {
            //fatalError: no end quot match
            throw new Error("attribute value no end '" + c + "' match");
          }
        } else if (s == S_ATTR_NOQUOT_VALUE) {
          value = source.slice(start, p);
          addAttribute(attrName, value, start);
          errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
          start = p + 1;
          s = S_ATTR_END;
        } else {
          //fatalError: no equal before
          throw new Error('attribute value must after "="'); // No known test case
        }

        break;
      case '/':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            s = S_TAG_CLOSE;
            el.closed = true;
          case S_ATTR_NOQUOT_VALUE:
          case S_ATTR:
            break;
          case S_ATTR_SPACE:
            el.closed = true;
            break;
          //case S_EQ:
          default:
            throw new Error("attribute invalid close char('/')");
          // No known test case
        }

        break;
      case '':
        //end document
        errorHandler.error('unexpected end of input');
        if (s == S_TAG) {
          el.setTagName(source.slice(start, p));
        }
        return p;
      case '>':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            break;
          //normal
          case S_ATTR_NOQUOT_VALUE: //Compatible state
          case S_ATTR:
            value = source.slice(start, p);
            if (value.slice(-1) === '/') {
              el.closed = true;
              value = value.slice(0, -1);
            }
          case S_ATTR_SPACE:
            if (s === S_ATTR_SPACE) {
              value = attrName;
            }
            if (s == S_ATTR_NOQUOT_VALUE) {
              errorHandler.warning('attribute "' + value + '" missed quot(")!');
              addAttribute(attrName, value, start);
            } else {
              if (!isHTML) {
                errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
              }
              addAttribute(value, value, start);
            }
            break;
          case S_EQ:
            if (!isHTML) {
              return errorHandler.fatalError('AttValue: \' or " expected');
            }
        }
        return p;
      /*xml space '\x20' | #x9 | #xD | #xA; */
      case '\u0080':
        c = ' ';
      default:
        if (c <= ' ') {
          //space
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p)); //tagName
              s = S_TAG_SPACE;
              break;
            case S_ATTR:
              attrName = source.slice(start, p);
              s = S_ATTR_SPACE;
              break;
            case S_ATTR_NOQUOT_VALUE:
              var value = source.slice(start, p);
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              addAttribute(attrName, value, start);
            case S_ATTR_END:
              s = S_TAG_SPACE;
              break;
            //case S_TAG_SPACE:
            //case S_EQ:
            //case S_ATTR_SPACE:
            //	void();break;
            //case S_TAG_CLOSE:
            //ignore warning
          }
        } else {
          //not space
          //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
          //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
          switch (s) {
            //case S_TAG:void();break;
            //case S_ATTR:void();break;
            //case S_ATTR_NOQUOT_VALUE:void();break;
            case S_ATTR_SPACE:
              if (!isHTML) {
                errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
              }
              addAttribute(attrName, attrName, start);
              start = p;
              s = S_ATTR;
              break;
            case S_ATTR_END:
              errorHandler.warning('attribute space is required"' + attrName + '"!!');
            case S_TAG_SPACE:
              s = S_ATTR;
              start = p;
              break;
            case S_EQ:
              s = S_ATTR_NOQUOT_VALUE;
              start = p;
              break;
            case S_TAG_CLOSE:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
        }
    } //end outer switch
    p++;
  }
}

/**
 * @returns
 * `true` if a new namespace has been defined.
 */
function appendElement(el, domBuilder, currentNSMap) {
  var tagName = el.tagName;
  var localNSMap = null;
  var i = el.length;
  while (i--) {
    var a = el[i];
    var qName = a.qName;
    var value = a.value;
    var nsp = qName.indexOf(':');
    if (nsp > 0) {
      var prefix = a.prefix = qName.slice(0, nsp);
      var localName = qName.slice(nsp + 1);
      var nsPrefix = prefix === 'xmlns' && localName;
    } else {
      localName = qName;
      prefix = null;
      nsPrefix = qName === 'xmlns' && '';
    }
    //can not set prefix,because prefix !== ''
    a.localName = localName;
    //prefix == null for no ns prefix attribute
    if (nsPrefix !== false) {
      //hack!!
      if (localNSMap == null) {
        localNSMap = Object.create(null);
        _copy(currentNSMap, currentNSMap = Object.create(null));
      }
      currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
      a.uri = NAMESPACE.XMLNS;
      domBuilder.startPrefixMapping(nsPrefix, value);
    }
  }
  var i = el.length;
  while (i--) {
    a = el[i];
    if (a.prefix) {
      //no prefix attribute has no namespace
      if (a.prefix === 'xml') {
        a.uri = NAMESPACE.XML;
      }
      if (a.prefix !== 'xmlns') {
        a.uri = currentNSMap[a.prefix];
      }
    }
  }
  var nsp = tagName.indexOf(':');
  if (nsp > 0) {
    prefix = el.prefix = tagName.slice(0, nsp);
    localName = el.localName = tagName.slice(nsp + 1);
  } else {
    prefix = null; //important!!
    localName = el.localName = tagName;
  }
  //no prefix element has default namespace
  var ns = el.uri = currentNSMap[prefix || ''];
  domBuilder.startElement(ns, localName, tagName, el);
  //endPrefixMapping and startPrefixMapping have not any help for dom builder
  //localNSMap = null
  if (el.closed) {
    domBuilder.endElement(ns, localName, tagName);
    if (localNSMap) {
      for (prefix in localNSMap) {
        if (hasOwn(localNSMap, prefix)) {
          domBuilder.endPrefixMapping(prefix);
        }
      }
    }
  } else {
    el.currentNSMap = currentNSMap;
    el.localNSMap = localNSMap;
    //parseStack.push(el);
    return true;
  }
}
function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
  // https://html.spec.whatwg.org/#raw-text-elements
  // https://html.spec.whatwg.org/#escapable-raw-text-elements
  // https://html.spec.whatwg.org/#cdata-rcdata-restrictions:raw-text-elements
  // TODO: https://html.spec.whatwg.org/#cdata-rcdata-restrictions
  var isEscapableRaw = isHTMLEscapableRawTextElement(tagName);
  if (isEscapableRaw || isHTMLRawTextElement(tagName)) {
    var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
    var text = source.substring(elStartEnd + 1, elEndStart);
    if (isEscapableRaw) {
      text = text.replace(ENTITY_REG, entityReplacer);
    }
    domBuilder.characters(text, 0, text.length);
    return elEndStart;
  }
  return elStartEnd + 1;
}
function _copy(source, target) {
  for (var n in source) {
    if (hasOwn(source, n)) {
      target[n] = source[n];
    }
  }
}

/**
 * @typedef ParseUtils
 * @property {function(relativeIndex: number?): string | undefined} char
 * Provides look ahead access to a singe character relative to the current index.
 * @property {function(): number} getIndex
 * Provides read-only access to the current index.
 * @property {function(reg: RegExp): string | null} getMatch
 * Applies the provided regular expression enforcing that it starts at the current index and
 * returns the complete matching string,
 * and moves the current index by the length of the matching string.
 * @property {function(): string} getSource
 * Provides read-only access to the complete source.
 * @property {function(places: number?): void} skip
 * moves the current index by places (defaults to 1)
 * @property {function(): number} skipBlanks
 * Moves the current index by the amount of white space that directly follows the current index
 * and returns the amount of whitespace chars skipped (0..n),
 * or -1 if the end of the source was reached.
 * @property {function(): string} substringFromIndex
 * creates a substring from the current index to the end of `source`
 * @property {function(compareWith: string): boolean} substringStartsWith
 * Checks if `source` contains `compareWith`, starting from the current index.
 * @property {function(compareWith: string): boolean} substringStartsWithCaseInsensitive
 * Checks if `source` contains `compareWith`, starting from the current index,
 * comparing the upper case of both sides.
 * @see {@link parseUtils}
 */

/**
 * A temporary scope for parsing and look ahead operations in `source`,
 * starting from index `start`.
 *
 * Some operations move the current index by a number of positions,
 * after which `getIndex` returns the new index.
 *
 * @param {string} source
 * @param {number} start
 * @returns {ParseUtils}
 */
function parseUtils(source, start) {
  var index = start;
  function char(n) {
    n = n || 0;
    return source.charAt(index + n);
  }
  function skip(n) {
    n = n || 1;
    index += n;
  }
  function skipBlanks() {
    var blanks = 0;
    while (index < source.length) {
      var c = char();
      if (c !== ' ' && c !== '\n' && c !== '\t' && c !== '\r') {
        return blanks;
      }
      blanks++;
      skip();
    }
    return -1;
  }
  function substringFromIndex() {
    return source.substring(index);
  }
  function substringStartsWith(text) {
    return source.substring(index, index + text.length) === text;
  }
  function substringStartsWithCaseInsensitive(text) {
    return source.substring(index, index + text.length).toUpperCase() === text.toUpperCase();
  }
  function getMatch(args) {
    var expr = g.reg('^', args);
    var match = expr.exec(substringFromIndex());
    if (match) {
      skip(match[0].length);
      return match[0];
    }
    return null;
  }
  return {
    char: char,
    getIndex: function () {
      return index;
    },
    getMatch: getMatch,
    getSource: function () {
      return source;
    },
    skip: skip,
    skipBlanks: skipBlanks,
    substringFromIndex: substringFromIndex,
    substringStartsWith: substringStartsWith,
    substringStartsWithCaseInsensitive: substringStartsWithCaseInsensitive
  };
}

/**
 * @param {ParseUtils} p
 * @param {DOMHandler} errorHandler
 * @returns {string}
 */
function parseDoctypeInternalSubset(p, errorHandler) {
  /**
   * @param {ParseUtils} p
   * @param {DOMHandler} errorHandler
   * @returns {string}
   */
  function parsePI(p, errorHandler) {
    var match = g.PI.exec(p.substringFromIndex());
    if (!match) {
      return errorHandler.fatalError('processing instruction is not well-formed at position ' + p.getIndex());
    }
    if (match[1].toLowerCase() === 'xml') {
      return errorHandler.fatalError('xml declaration is only allowed at the start of the document, but found at position ' + p.getIndex());
    }
    p.skip(match[0].length);
    return match[0];
  }
  // Parse internal subset
  var source = p.getSource();
  if (p.char() === '[') {
    p.skip(1);
    var intSubsetStart = p.getIndex();
    while (p.getIndex() < source.length) {
      p.skipBlanks();
      if (p.char() === ']') {
        var internalSubset = source.substring(intSubsetStart, p.getIndex());
        p.skip(1);
        return internalSubset;
      }
      var current = null;
      // Only in external subset
      // if (char() === '<' && char(1) === '!' && char(2) === '[') {
      // 	parseConditionalSections(p, errorHandler);
      // } else
      if (p.char() === '<' && p.char(1) === '!') {
        switch (p.char(2)) {
          case 'E':
            // ELEMENT | ENTITY
            if (p.char(3) === 'L') {
              current = p.getMatch(g.elementdecl);
            } else if (p.char(3) === 'N') {
              current = p.getMatch(g.EntityDecl);
            }
            break;
          case 'A':
            // ATTRIBUTE
            current = p.getMatch(g.AttlistDecl);
            break;
          case 'N':
            // NOTATION
            current = p.getMatch(g.NotationDecl);
            break;
          case '-':
            // COMMENT
            current = p.getMatch(g.Comment);
            break;
        }
      } else if (p.char() === '<' && p.char(1) === '?') {
        current = parsePI(p, errorHandler);
      } else if (p.char() === '%') {
        current = p.getMatch(g.PEReference);
      } else {
        return errorHandler.fatalError('Error detected in Markup declaration');
      }
      if (!current) {
        return errorHandler.fatalError('Error in internal subset at position ' + p.getIndex());
      }
    }
    return errorHandler.fatalError('doctype internal subset is not well-formed, missing ]');
  }
}

/**
 * Called when the parser encounters an element starting with '<!'.
 *
 * @param {string} source
 * The xml.
 * @param {number} start
 * the start index of the '<!'
 * @param {DOMHandler} domBuilder
 * @param {DOMHandler} errorHandler
 * @param {boolean} isHTML
 * @returns {number | never}
 * The end index of the element.
 * @throws {ParseError}
 * In case the element is not well-formed.
 */
function parseDoctypeCommentOrCData(source, start, domBuilder, errorHandler, isHTML) {
  var p = parseUtils(source, start);
  switch (isHTML ? p.char(2).toUpperCase() : p.char(2)) {
    case '-':
      // should be a comment
      var comment = p.getMatch(g.Comment);
      if (comment) {
        domBuilder.comment(comment, g.COMMENT_START.length, comment.length - g.COMMENT_START.length - g.COMMENT_END.length);
        return p.getIndex();
      } else {
        return errorHandler.fatalError('comment is not well-formed at position ' + p.getIndex());
      }
    case '[':
      // should be CDATA
      var cdata = p.getMatch(g.CDSect);
      if (cdata) {
        if (!isHTML && !domBuilder.currentElement) {
          return errorHandler.fatalError('CDATA outside of element');
        }
        domBuilder.startCDATA();
        domBuilder.characters(cdata, g.CDATA_START.length, cdata.length - g.CDATA_START.length - g.CDATA_END.length);
        domBuilder.endCDATA();
        return p.getIndex();
      } else {
        return errorHandler.fatalError('Invalid CDATA starting at position ' + start);
      }
    case 'D':
      {
        // should be DOCTYPE
        if (domBuilder.doc && domBuilder.doc.documentElement) {
          return errorHandler.fatalError('Doctype not allowed inside or after documentElement at position ' + p.getIndex());
        }
        if (isHTML ? !p.substringStartsWithCaseInsensitive(g.DOCTYPE_DECL_START) : !p.substringStartsWith(g.DOCTYPE_DECL_START)) {
          return errorHandler.fatalError('Expected ' + g.DOCTYPE_DECL_START + ' at position ' + p.getIndex());
        }
        p.skip(g.DOCTYPE_DECL_START.length);
        if (p.skipBlanks() < 1) {
          return errorHandler.fatalError('Expected whitespace after ' + g.DOCTYPE_DECL_START + ' at position ' + p.getIndex());
        }
        var doctype = {
          name: undefined,
          publicId: undefined,
          systemId: undefined,
          internalSubset: undefined
        };
        // Parse the DOCTYPE name
        doctype.name = p.getMatch(g.Name);
        if (!doctype.name) return errorHandler.fatalError('doctype name missing or contains unexpected characters at position ' + p.getIndex());
        if (isHTML && doctype.name.toLowerCase() !== 'html') {
          errorHandler.warning('Unexpected DOCTYPE in HTML document at position ' + p.getIndex());
        }
        p.skipBlanks();

        // Check for ExternalID
        if (p.substringStartsWith(g.PUBLIC) || p.substringStartsWith(g.SYSTEM)) {
          var match = g.ExternalID_match.exec(p.substringFromIndex());
          if (!match) {
            return errorHandler.fatalError('doctype external id is not well-formed at position ' + p.getIndex());
          }
          if (match.groups.SystemLiteralOnly !== undefined) {
            doctype.systemId = match.groups.SystemLiteralOnly;
          } else {
            doctype.systemId = match.groups.SystemLiteral;
            doctype.publicId = match.groups.PubidLiteral;
          }
          p.skip(match[0].length);
        } else if (isHTML && p.substringStartsWithCaseInsensitive(g.SYSTEM)) {
          // https://html.spec.whatwg.org/multipage/syntax.html#doctype-legacy-string
          p.skip(g.SYSTEM.length);
          if (p.skipBlanks() < 1) {
            return errorHandler.fatalError('Expected whitespace after ' + g.SYSTEM + ' at position ' + p.getIndex());
          }
          doctype.systemId = p.getMatch(g.ABOUT_LEGACY_COMPAT_SystemLiteral);
          if (!doctype.systemId) {
            return errorHandler.fatalError('Expected ' + g.ABOUT_LEGACY_COMPAT + ' in single or double quotes after ' + g.SYSTEM + ' at position ' + p.getIndex());
          }
        }
        if (isHTML && doctype.systemId && !g.ABOUT_LEGACY_COMPAT_SystemLiteral.test(doctype.systemId)) {
          errorHandler.warning('Unexpected doctype.systemId in HTML document at position ' + p.getIndex());
        }
        if (!isHTML) {
          p.skipBlanks();
          doctype.internalSubset = parseDoctypeInternalSubset(p, errorHandler);
        }
        p.skipBlanks();
        if (p.char() !== '>') {
          return errorHandler.fatalError('doctype not terminated with > at position ' + p.getIndex());
        }
        p.skip(1);
        domBuilder.startDTD(doctype.name, doctype.publicId, doctype.systemId, doctype.internalSubset);
        domBuilder.endDTD();
        return p.getIndex();
      }
    default:
      return errorHandler.fatalError('Not well-formed XML starting with "<!" at position ' + start);
  }
}
function parseProcessingInstruction(source, start, domBuilder, errorHandler) {
  var match = source.substring(start).match(g.PI);
  if (!match) {
    return errorHandler.fatalError('Invalid processing instruction starting at position ' + start);
  }
  if (match[1].toLowerCase() === 'xml') {
    if (start > 0) {
      return errorHandler.fatalError('processing instruction at position ' + start + ' is an xml declaration which is only at the start of the document');
    }
    if (!g.XMLDecl.test(source.substring(start))) {
      return errorHandler.fatalError('xml declaration is not well-formed');
    }
  }
  domBuilder.processingInstruction(match[1], match[2]);
  return start + match[0].length;
}
function ElementAttributes() {
  this.attributeNames = Object.create(null);
}
ElementAttributes.prototype = {
  setTagName: function (tagName) {
    if (!g.QName_exact.test(tagName)) {
      throw new Error('invalid tagName:' + tagName);
    }
    this.tagName = tagName;
  },
  addValue: function (qName, value, offset) {
    if (!g.QName_exact.test(qName)) {
      throw new Error('invalid attribute:' + qName);
    }
    this.attributeNames[qName] = this.length;
    this[this.length++] = {
      qName: qName,
      value: value,
      offset: offset
    };
  },
  length: 0,
  getLocalName: function (i) {
    return this[i].localName;
  },
  getLocator: function (i) {
    return this[i].locator;
  },
  getQName: function (i) {
    return this[i].qName;
  },
  getURI: function (i) {
    return this[i].uri;
  },
  getValue: function (i) {
    return this[i].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};

exports.XMLReader = XMLReader;
exports.parseUtils = parseUtils;
exports.parseDoctypeCommentOrCData = parseDoctypeCommentOrCData;

/***/ }),

/***/ 66497:
/*!********************************************************!*\
  !*** ./node_modules/docxtemplater/js/content-types.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


var coreContentType = "application/vnd.openxmlformats-package.core-properties+xml";
var appContentType = "application/vnd.openxmlformats-officedocument.extended-properties+xml";
var customContentType = "application/vnd.openxmlformats-officedocument.custom-properties+xml";
var settingsContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml";
var diagramDataContentType = "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml";
var diagramDrawingContentType = "application/vnd.ms-office.drawingml.diagramDrawing+xml";
module.exports = {
  settingsContentType: settingsContentType,
  coreContentType: coreContentType,
  appContentType: appContentType,
  customContentType: customContentType,
  diagramDataContentType: diagramDataContentType,
  diagramDrawingContentType: diagramDrawingContentType
};

/***/ }),

/***/ 24418:
/*!****************************************************!*\
  !*** ./node_modules/docxtemplater/js/doc-utils.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
var _require = __webpack_require__(/*! @xmldom/xmldom */ 32419),
  DOMParser = _require.DOMParser,
  XMLSerializer = _require.XMLSerializer;
var _require2 = __webpack_require__(/*! ./errors.js */ 57629),
  throwXmlTagNotFound = _require2.throwXmlTagNotFound;
var _require3 = __webpack_require__(/*! ./utils.js */ 64389),
  last = _require3.last,
  first = _require3.first;
function isWhiteSpace(value) {
  return /^[ \n\r\t]+$/.test(value);
}
function parser(tag) {
  return {
    get: function get(scope) {
      if (tag === ".") {
        return scope;
      }
      if (scope) {
        return scope[tag];
      }
      return scope;
    }
  };
}
function defaultWarnFn(errors) {
  for (var _i2 = 0; _i2 < errors.length; _i2++) {
    var error = errors[_i2];
    if (error.message) {
      /* eslint-disable-next-line no-console */
      console.warn("Warning : " + error.message);
    }
  }
}
var attrToRegex = {};
function setSingleAttribute(partValue, attr, attrValue) {
  var regex;
  // Stryker disable next-line all : because this is an optimisation
  if (attrToRegex[attr]) {
    regex = attrToRegex[attr];
  } else {
    regex = new RegExp("(<.* ".concat(attr, "=\")([^\"]*)(\".*)$"));
    attrToRegex[attr] = regex;
  }
  if (regex.test(partValue)) {
    return partValue.replace(regex, "$1".concat(attrValue, "$3"));
  }
  var end = partValue.lastIndexOf("/>");
  if (end === -1) {
    end = partValue.lastIndexOf(">");
  }
  return partValue.substr(0, end) + " ".concat(attr, "=\"").concat(attrValue, "\"") + partValue.substr(end);
}
function getSingleAttribute(value, attributeName) {
  var index = value.indexOf(" ".concat(attributeName, "=\""));
  if (index === -1) {
    return null;
  }
  var startIndex = value.substr(index).search(/["']/) + index;
  var endIndex = value.substr(startIndex + 1).search(/["']/) + startIndex;
  return value.substr(startIndex + 1, endIndex - startIndex);
}
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
function startsWith(str, prefix) {
  return str.substring(0, prefix.length) === prefix;
}
function getDuplicates(arr) {
  var duplicates = [];
  var hash = {},
    result = [];
  for (var i = 0, l = arr.length; i < l; ++i) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = true;
      result.push(arr[i]);
    } else {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
}
function uniq(arr) {
  var hash = {},
    result = [];
  for (var i = 0, l = arr.length; i < l; ++i) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}
function chunkBy(parsed, f) {
  var chunks = [[]];
  for (var _i4 = 0; _i4 < parsed.length; _i4++) {
    var p = parsed[_i4];
    var currentChunk = chunks[chunks.length - 1];
    var res = f(p);
    if (res === "start") {
      chunks.push([p]);
    } else if (res === "end") {
      currentChunk.push(p);
      chunks.push([]);
    } else {
      currentChunk.push(p);
    }
  } // Remove empty chunks
  var result = [];
  for (var _i6 = 0; _i6 < chunks.length; _i6++) {
    var chunk = chunks[_i6];
    if (chunk.length > 0) {
      result.push(chunk);
    }
  }
  return result;
}
function getDefaults() {
  return {
    errorLogging: "json",
    stripInvalidXMLChars: false,
    paragraphLoop: false,
    nullGetter: function nullGetter(part) {
      return part.module ? "" : "undefined";
    },
    xmlFileNames: ["[Content_Types].xml"],
    parser: parser,
    warnFn: defaultWarnFn,
    linebreaks: false,
    fileTypeConfig: null,
    delimiters: {
      start: "{",
      end: "}"
    },
    syntax: {
      changeDelimiterPrefix: "="
    }
  };
}
function xml2str(xmlNode) {
  return new XMLSerializer().serializeToString(xmlNode).replace(/xmlns(:[a-z0-9]+)?="" ?/g, "");
}
function str2xml(str) {
  if (str.charCodeAt(0) === 65279) {
    // BOM sequence
    str = str.substr(1);
  }
  return new DOMParser().parseFromString(str, "text/xml");
}
var charMap = [["&", "&amp;"], ["<", "&lt;"], [">", "&gt;"], ['"', "&quot;"], ["'", "&apos;"]];
var charMapRegexes = charMap.map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    endChar = _ref2[0],
    startChar = _ref2[1];
  return {
    rstart: new RegExp(startChar, "g"),
    rend: new RegExp(endChar, "g"),
    start: startChar,
    end: endChar
  };
});
function wordToUtf8(string) {
  for (var i = charMapRegexes.length - 1; i >= 0; i--) {
    var r = charMapRegexes[i];
    string = string.replace(r.rstart, r.end);
  }
  return string;
}
function utf8ToWord(string) {
  var _string;
  if ((_string = string) !== null && _string !== void 0 && _string.toString) {
    // To make sure that the object given is a string (this is a noop for strings).
    string = string.toString();
  } else {
    string = "";
  }
  var r;
  for (var i = 0, l = charMapRegexes.length; i < l; i++) {
    r = charMapRegexes[i];
    string = string.replace(r.rend, r.start);
  }
  return string;
}

// This function is written with for loops for performance
function concatArrays(arrays) {
  var result = [];
  for (var _i8 = 0; _i8 < arrays.length; _i8++) {
    var array = arrays[_i8];
    for (var _i0 = 0; _i0 < array.length; _i0++) {
      var el = array[_i0];
      result.push(el);
    }
  }
  return result;
}
function pushArray(array1, array2) {
  if (!array2) {
    return array1;
  }
  for (var i = 0, len = array2.length; i < len; i++) {
    array1.push(array2[i]);
  }
  return array1;
}
var spaceRegexp = new RegExp(String.fromCharCode(160), "g");
function convertSpaces(s) {
  return s.replace(spaceRegexp, " ");
}
function pregMatchAll(regex, content) {
  /*
   * Regex is a string, content is the content. It returns an array of all
   * matches with their offset, for example:
   *
   * regex=la
   * content=lolalolilala
   *
   * Returns:
   *
   * [
   *    {array: {0: 'la'}, offset: 2},
   *    {array: {0: 'la'}, offset: 8},
   *    {array: {0: 'la'}, offset: 10}
   * ]
   */
  var matchArray = [];
  var match;
  while ((match = regex.exec(content)) != null) {
    matchArray.push({
      array: match,
      offset: match.index
    });
  }
  return matchArray;
}
function isEnding(value, element) {
  return value === "</" + element + ">";
}
function isStarting(value, element) {
  return value.indexOf("<" + element) === 0 && [">", " ", "/"].indexOf(value[element.length + 1]) !== -1;
}
function getRight(parsed, element, index) {
  var val = getRightOrNull(parsed, element, index);
  if (val !== null) {
    return val;
  }
  throwXmlTagNotFound({
    position: "right",
    element: element,
    parsed: parsed,
    index: index
  });
}
function getRightOrNull(parsed, elements, index) {
  if (typeof elements === "string") {
    elements = [elements];
  }
  var level = 1;
  for (var i = index, l = parsed.length; i < l; i++) {
    var part = parsed[i];
    for (var _i10 = 0, _elements2 = elements; _i10 < _elements2.length; _i10++) {
      var element = _elements2[_i10];
      if (isEnding(part.value, element)) {
        level--;
      }
      if (isStarting(part.value, element)) {
        level++;
      }
      if (level === 0) {
        return i;
      }
    }
  }
  return null;
}
function getLeft(parsed, element, index) {
  var val = getLeftOrNull(parsed, element, index);
  if (val !== null) {
    return val;
  }
  throwXmlTagNotFound({
    position: "left",
    element: element,
    parsed: parsed,
    index: index
  });
}
function getLeftOrNull(parsed, elements, index) {
  if (typeof elements === "string") {
    elements = [elements];
  }
  var level = 1;
  for (var i = index; i >= 0; i--) {
    var part = parsed[i];
    for (var _i12 = 0, _elements4 = elements; _i12 < _elements4.length; _i12++) {
      var element = _elements4[_i12];
      if (isStarting(part.value, element)) {
        level--;
      }
      if (isEnding(part.value, element)) {
        level++;
      }
      if (level === 0) {
        return i;
      }
    }
  }
  return null;
}

/*
 * Stryker disable all : because those are functions that depend on the parsed
 * structure based and we don't want minimal code here, but rather code that
 * makes things clear.
 */
function isTagStart(tagType, _ref3) {
  var type = _ref3.type,
    tag = _ref3.tag,
    position = _ref3.position;
  return type === "tag" && tag === tagType && (position === "start" || position === "selfclosing");
}
function isTagEnd(tagType, _ref4) {
  var type = _ref4.type,
    tag = _ref4.tag,
    position = _ref4.position;
  return type === "tag" && tag === tagType && position === "end";
}
function isParagraphStart(_ref5) {
  var type = _ref5.type,
    tag = _ref5.tag,
    position = _ref5.position;
  return ["w:p", "a:p", "text:p"].indexOf(tag) !== -1 && type === "tag" && position === "start";
}
function isParagraphEnd(_ref6) {
  var type = _ref6.type,
    tag = _ref6.tag,
    position = _ref6.position;
  return ["w:p", "a:p", "text:p"].indexOf(tag) !== -1 && type === "tag" && position === "end";
}
function isTextStart(_ref7) {
  var type = _ref7.type,
    position = _ref7.position,
    text = _ref7.text;
  return text && type === "tag" && position === "start";
}
function isTextEnd(_ref8) {
  var type = _ref8.type,
    position = _ref8.position,
    text = _ref8.text;
  return text && type === "tag" && position === "end";
}
function isContent(_ref9) {
  var type = _ref9.type,
    position = _ref9.position;
  return type === "placeholder" || type === "content" && position === "insidetag";
}
function isModule(_ref0, modules) {
  var module = _ref0.module,
    type = _ref0.type;
  if (!(modules instanceof Array)) {
    modules = [modules];
  }
  return type === "placeholder" && modules.indexOf(module) !== -1;
}
// Stryker restore all

var corruptCharacters = /[\x00-\x08\x0B\x0C\x0E-\x1F]/g;
/*
 * 00    NUL '\0' (null character)
 * 01    SOH (start of heading)
 * 02    STX (start of text)
 * 03    ETX (end of text)
 * 04    EOT (end of transmission)
 * 05    ENQ (enquiry)
 * 06    ACK (acknowledge)
 * 07    BEL '\a' (bell)
 * 08    BS  '\b' (backspace)
 * 0B    VT  '\v' (vertical tab)
 * 0C    FF  '\f' (form feed)
 * 0E    SO  (shift out)
 * 0F    SI  (shift in)
 * 10    DLE (data link escape)
 * 11    DC1 (device control 1)
 * 12    DC2 (device control 2)
 * 13    DC3 (device control 3)
 * 14    DC4 (device control 4)
 * 15    NAK (negative ack.)
 * 16    SYN (synchronous idle)
 * 17    ETB (end of trans. blk)
 * 18    CAN (cancel)
 * 19    EM  (end of medium)
 * 1A    SUB (substitute)
 * 1B    ESC (escape)
 * 1C    FS  (file separator)
 * 1D    GS  (group separator)
 * 1E    RS  (record separator)
 * 1F    US  (unit separator)
 */
function hasCorruptCharacters(string) {
  corruptCharacters.lastIndex = 0;
  return corruptCharacters.test(string);
}
function removeCorruptCharacters(string) {
  if (typeof string !== "string") {
    string = String(string);
  }
  return string.replace(corruptCharacters, "");
}
function invertMap(map) {
  var invertedMap = {};
  for (var key in map) {
    var value = map[key];
    invertedMap[value] || (invertedMap[value] = []);
    invertedMap[value].push(key);
  }
  return invertedMap;
}
/*
 * This ensures that the sort is stable. The default Array.sort of the browser
 * is not stable in firefox, as the JS spec does not enforce the sort to be
 * stable.
 */
function stableSort(arr, compare) {
  // Stryker disable all : in previous versions of Chrome, sort was not stable by itself, so we had to add this. This is to support older versions of JS runners.
  return arr.map(function (item, index) {
    return {
      item: item,
      index: index
    };
  }).sort(function (a, b) {
    return compare(a.item, b.item) || a.index - b.index;
  }).map(function (_ref1) {
    var item = _ref1.item;
    return item;
  });
  // Stryker restore all
}

module.exports = {
  endsWith: endsWith,
  startsWith: startsWith,
  isContent: isContent,
  isParagraphStart: isParagraphStart,
  isParagraphEnd: isParagraphEnd,
  isTagStart: isTagStart,
  isTagEnd: isTagEnd,
  isTextStart: isTextStart,
  isTextEnd: isTextEnd,
  isStarting: isStarting,
  isEnding: isEnding,
  isModule: isModule,
  uniq: uniq,
  getDuplicates: getDuplicates,
  chunkBy: chunkBy,
  last: last,
  first: first,
  xml2str: xml2str,
  str2xml: str2xml,
  getRightOrNull: getRightOrNull,
  getRight: getRight,
  getLeftOrNull: getLeftOrNull,
  getLeft: getLeft,
  pregMatchAll: pregMatchAll,
  convertSpaces: convertSpaces,
  charMapRegexes: charMapRegexes,
  hasCorruptCharacters: hasCorruptCharacters,
  removeCorruptCharacters: removeCorruptCharacters,
  getDefaults: getDefaults,
  wordToUtf8: wordToUtf8,
  utf8ToWord: utf8ToWord,
  concatArrays: concatArrays,
  pushArray: pushArray,
  invertMap: invertMap,
  charMap: charMap,
  getSingleAttribute: getSingleAttribute,
  setSingleAttribute: setSingleAttribute,
  isWhiteSpace: isWhiteSpace,
  stableSort: stableSort
};

/***/ }),

/***/ 55986:
/*!********************************************************!*\
  !*** ./node_modules/docxtemplater/js/docxtemplater.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _excluded = ["modules"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var DocUtils = __webpack_require__(/*! ./doc-utils.js */ 24418);
var z = __webpack_require__(/*! ./minizod.js */ 47900);

// Schema definitions for DXT.ConstructorOptions
var dxtSyntaxSchema = z.object({
  allowUnopenedTag: z["boolean"]().optional(),
  allowUnclosedTag: z["boolean"]().optional(),
  allowUnbalancedLoops: z["boolean"]().optional(),
  changeDelimiterPrefix: z.string().optional().nullable()
});
var dxtOptionsSchema = z.object({
  delimiters: z.object({
    start: z.string().nullable(),
    end: z.string().nullable()
  }).strict().optional(),
  fileTypeConfig: z.object({}).optional(),
  paragraphLoop: z["boolean"]().optional(),
  parser: z["function"]().optional(),
  errorLogging: z.union([z["boolean"](), z.string()]).optional(),
  linebreaks: z["boolean"]().optional(),
  nullGetter: z["function"]().optional(),
  syntax: dxtSyntaxSchema.optional(),
  stripInvalidXMLChars: z["boolean"]().optional(),
  warnFn: z["function"]().optional()
}).strict();
var _require = __webpack_require__(/*! ./get-relation-types.js */ 33909),
  getRelsTypes = _require.getRelsTypes;
var _require2 = __webpack_require__(/*! ./get-content-types.js */ 26600),
  collectContentTypes = _require2.collectContentTypes,
  getContentTypes = _require2.getContentTypes;
var moduleWrapper = __webpack_require__(/*! ./module-wrapper.js */ 43084);
var traits = __webpack_require__(/*! ./traits.js */ 89507);
var commonModule = __webpack_require__(/*! ./modules/common.js */ 63389);
var createScope = __webpack_require__(/*! ./scope-manager.js */ 74926);
var Lexer = __webpack_require__(/*! ./lexer.js */ 62438);
var _require3 = __webpack_require__(/*! ./get-tags.js */ 4176),
  _getTags = _require3.getTags;
var logErrors = __webpack_require__(/*! ./error-logger.js */ 72171);
var _require4 = __webpack_require__(/*! ./errors.js */ 57629),
  throwMultiError = _require4.throwMultiError,
  throwResolveBeforeCompile = _require4.throwResolveBeforeCompile,
  throwRenderInvalidTemplate = _require4.throwRenderInvalidTemplate,
  throwRenderTwice = _require4.throwRenderTwice,
  XTInternalError = _require4.XTInternalError,
  XTTemplateError = _require4.XTTemplateError,
  throwFileTypeNotIdentified = _require4.throwFileTypeNotIdentified,
  throwFileTypeNotHandled = _require4.throwFileTypeNotHandled,
  throwApiVersionError = _require4.throwApiVersionError;
DocUtils.getRelsTypes = getRelsTypes;
DocUtils.traits = traits;
DocUtils.moduleWrapper = moduleWrapper;
DocUtils.collectContentTypes = collectContentTypes;
DocUtils.getContentTypes = getContentTypes;
var getDefaults = DocUtils.getDefaults,
  str2xml = DocUtils.str2xml,
  xml2str = DocUtils.xml2str,
  concatArrays = DocUtils.concatArrays,
  uniq = DocUtils.uniq,
  getDuplicates = DocUtils.getDuplicates,
  stableSort = DocUtils.stableSort,
  pushArray = DocUtils.pushArray,
  utf8ToWord = DocUtils.utf8ToWord,
  invertMap = DocUtils.invertMap;
var ctXML = "[Content_Types].xml";
var relsFile = "_rels/.rels";
var currentModuleApiVersion = [3, 47, 2];
function throwIfDuplicateModules(modules) {
  var duplicates = getDuplicates(modules.map(function (_ref) {
    var name = _ref.name;
    return name;
  }));
  if (duplicates.length > 0) {
    throw new XTInternalError("Detected duplicate module \"".concat(duplicates[0], "\""));
  }
}
function addXmlFileNamesFromXmlContentType(doc) {
  for (var _i2 = 0, _doc$modules2 = doc.modules; _i2 < _doc$modules2.length; _i2++) {
    var _module = _doc$modules2[_i2];
    for (var _i4 = 0, _ref3 = _module.xmlContentTypes || []; _i4 < _ref3.length; _i4++) {
      var contentType = _ref3[_i4];
      var candidates = doc.invertedContentTypes[contentType] || [];
      for (var _i6 = 0; _i6 < candidates.length; _i6++) {
        var candidate = candidates[_i6];
        if (doc.zip.files[candidate]) {
          doc.options.xmlFileNames.push(candidate);
        }
      }
    }
  }
}
function reorderModules(modules) {
  /**
   * Modules will be sorted according to priority.
   *
   * Input example:
   * [
   *   { priority: 1, name: "FooMod" },
   *   { priority: -1, name: "XMod" },
   *   { priority: 4, name: "OtherMod" }
   * ]
   *
   * Output example (sorted by priority in descending order):
   * [
   *   { priority: 4, name: "OtherMod" },
   *   { priority: 1, name: "FooMod" },
   *   { priority: -1, name: "XMod" }
   * ]
   * Tested in #test-reorder-modules
   */
  return stableSort(modules, function (m1, m2) {
    return (m2.priority || 0) - (m1.priority || 0);
  });
}
function zipFileOrder(files) {
  var allFiles = [];
  for (var name in files) {
    allFiles.push(name);
  }
  /*
   * The first files that need to be put in the zip file are :
   * [Content_Types].xml and _rels/.rels
   */
  var resultFiles = [ctXML, relsFile];

  /*
   * The next files that should be in the zip file are :
   *
   * - word/* (ie word/document.xml, word/header1.xml, ...)
   * - xl/* (ie xl/worksheets/sheet1.xml)
   * - ppt/* (ie ppt/slides/slide1.xml)
   */
  var prefixes = ["word/", "xl/", "ppt/"];
  for (var _i8 = 0; _i8 < allFiles.length; _i8++) {
    var _name = allFiles[_i8];
    for (var _i0 = 0; _i0 < prefixes.length; _i0++) {
      var prefix = prefixes[_i0];
      if (_name.indexOf("".concat(prefix)) === 0) {
        resultFiles.push(_name);
      }
    }
  }
  /*
   * Push the rest of files, such as docProps/core.xml and docProps/app.xml
   */
  for (var _i10 = 0; _i10 < allFiles.length; _i10++) {
    var _name2 = allFiles[_i10];
    if (resultFiles.indexOf(_name2) === -1) {
      resultFiles.push(_name2);
    }
  }
  return resultFiles;
}
function deprecatedMessage(obj, message) {
  if (obj.hideDeprecations === true) {
    return;
  }
  // eslint-disable-next-line no-console
  console.warn(message);
}
function deprecatedMethod(obj, method) {
  if (obj.hideDeprecations === true) {
    return;
  }
  return deprecatedMessage(obj, "Deprecated method \".".concat(method, "\", view upgrade guide : https://docxtemplater.com/docs/api/#upgrade-guide, stack : ").concat(new Error().stack));
}
function dropUnsupportedFileTypesModules(doc) {
  doc.modules = doc.modules.filter(function (module) {
    if (!module.supportedFileTypes) {
      return true;
    }
    if (!Array.isArray(module.supportedFileTypes)) {
      throw new Error("The supportedFileTypes field of the module must be an array");
    }
    var isSupportedModule = module.supportedFileTypes.includes(doc.fileType);
    if (!isSupportedModule) {
      module.on("detached");
    }
    return isSupportedModule;
  });
}
function verifyErrors(doc) {
  var compiled = doc.compiled;
  doc.errors = concatArrays(Object.keys(compiled).map(function (name) {
    return compiled[name].allErrors;
  }));
  if (doc.errors.length !== 0) {
    if (doc.options.errorLogging) {
      logErrors(doc.errors, doc.options.errorLogging);
    }
    throwMultiError(doc.errors);
  }
}
function isBuffer(v) {
  return typeof Buffer !== "undefined" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(v);
}
var Docxtemplater = /*#__PURE__*/function () {
  function Docxtemplater(zip) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref4$modules = _ref4.modules,
      modules = _ref4$modules === void 0 ? [] : _ref4$modules,
      options = _objectWithoutProperties(_ref4, _excluded);
    _classCallCheck(this, Docxtemplater);
    this.targets = [];
    this.rendered = false;
    this.scopeManagers = {};
    this.compiled = {};
    this.modules = [commonModule()];
    this.xmlDocuments = {};
    if (arguments.length === 0) {
      deprecatedMessage(this, "Deprecated docxtemplater constructor with no arguments, view upgrade guide : https://docxtemplater.com/docs/api/#upgrade-guide, stack : ".concat(new Error().stack));
      this.hideDeprecations = true;
      this.setOptions(options);
    } else {
      this.hideDeprecations = true;
      this.setOptions(options);
      if (isBuffer(zip)) {
        throw new Error("You passed a Buffer to the Docxtemplater constructor. The first argument of docxtemplater's constructor must be a valid zip file (jszip v2 or pizzip v3)");
      }
      if (!zip || !zip.files || typeof zip.file !== "function") {
        throw new Error("The first argument of docxtemplater's constructor must be a valid zip file (jszip v2 or pizzip v3)");
      }
      if (!Array.isArray(modules)) {
        throw new Error("The modules argument of docxtemplater's constructor must be an array");
      }
      for (var _i12 = 0; _i12 < modules.length; _i12++) {
        var _module2 = modules[_i12];
        this.attachModule(_module2);
      }
      this.loadZip(zip);
      this.compile();
      this.v4Constructor = true;
    }
    this.hideDeprecations = false;
  }
  return _createClass(Docxtemplater, [{
    key: "verifyApiVersion",
    value: function verifyApiVersion(neededVersion) {
      neededVersion = neededVersion.split(".").map(function (i) {
        return parseInt(i, 10);
      });
      if (neededVersion.length !== 3) {
        throwApiVersionError("neededVersion is not a valid version", {
          neededVersion: neededVersion,
          explanation: "the neededVersion must be an array of length 3"
        });
      }
      if (neededVersion[0] !== currentModuleApiVersion[0]) {
        throwApiVersionError("The major api version do not match, you probably have to update docxtemplater with npm install --save docxtemplater", {
          neededVersion: neededVersion,
          currentModuleApiVersion: currentModuleApiVersion,
          explanation: "moduleAPIVersionMismatch : needed=".concat(neededVersion.join("."), ", current=").concat(currentModuleApiVersion.join("."))
        });
      }
      if (neededVersion[1] > currentModuleApiVersion[1]) {
        throwApiVersionError("The minor api version is not uptodate, you probably have to update docxtemplater with npm install --save docxtemplater", {
          neededVersion: neededVersion,
          currentModuleApiVersion: currentModuleApiVersion,
          explanation: "moduleAPIVersionMismatch : needed=".concat(neededVersion.join("."), ", current=").concat(currentModuleApiVersion.join("."))
        });
      }
      if (neededVersion[1] === currentModuleApiVersion[1] && neededVersion[2] > currentModuleApiVersion[2]) {
        throwApiVersionError("The patch api version is not uptodate, you probably have to update docxtemplater with npm install --save docxtemplater", {
          neededVersion: neededVersion,
          currentModuleApiVersion: currentModuleApiVersion,
          explanation: "moduleAPIVersionMismatch : needed=".concat(neededVersion.join("."), ", current=").concat(currentModuleApiVersion.join("."))
        });
      }
      return true;
    }
  }, {
    key: "setModules",
    value: function setModules(obj) {
      for (var _i14 = 0, _this$modules2 = this.modules; _i14 < _this$modules2.length; _i14++) {
        var _module3 = _this$modules2[_i14];
        _module3.set(obj);
      }
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(eventName) {
      for (var _i16 = 0, _this$modules4 = this.modules; _i16 < _this$modules4.length; _i16++) {
        var _module4 = _this$modules4[_i16];
        _module4.on(eventName);
      }
    }
  }, {
    key: "attachModule",
    value: function attachModule(module) {
      if (this.v4Constructor) {
        throw new XTInternalError("attachModule() should not be called manually when using the v4 constructor");
      }
      deprecatedMethod(this, "attachModule");
      var moduleType = _typeof(module);
      if (moduleType === "function") {
        throw new XTInternalError("Cannot attach a class/function as a module. Most probably you forgot to instantiate the module by using `new` on the module.");
      }
      if (!module || moduleType !== "object") {
        throw new XTInternalError("Cannot attachModule with a falsy value");
      }
      if (module.requiredAPIVersion) {
        this.verifyApiVersion(module.requiredAPIVersion);
      }
      if (module.attached === true) {
        if (typeof module.clone === "function") {
          module = module.clone();
        } else {
          throw new Error("Cannot attach a module that was already attached : \"".concat(module.name, "\". The most likely cause is that you are instantiating the module at the root level, and using it for multiple instances of Docxtemplater"));
        }
      }
      module.attached = true;
      var wrappedModule = moduleWrapper(module);
      this.modules.push(wrappedModule);
      wrappedModule.on("attached");
      if (this.fileType) {
        dropUnsupportedFileTypesModules(this);
      }
      return this;
    }
  }, {
    key: "findModule",
    value: function findModule(name) {
      for (var _i18 = 0, _this$modules6 = this.modules; _i18 < _this$modules6.length; _i18++) {
        var _module5 = _this$modules6[_i18];
        if (_module5.name === name) {
          return _module5;
        }
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var _this$delimiters, _this$delimiters2;
      if (this.v4Constructor) {
        throw new Error("setOptions() should not be called manually when using the v4 constructor");
      }
      if (!options) {
        throw new Error("setOptions should be called with an object as first parameter");
      }
      var result = dxtOptionsSchema.validate(options);
      if (result.success === false) {
        throw new Error(result.error);
      }
      deprecatedMethod(this, "setOptions");
      this.options = {};
      var defaults = getDefaults();
      for (var key in defaults) {
        var defaultValue = defaults[key];
        this.options[key] = options[key] != null ? options[key] : this[key] || defaultValue;
        this[key] = this.options[key];
      }
      (_this$delimiters = this.delimiters).start && (_this$delimiters.start = utf8ToWord(this.delimiters.start));
      (_this$delimiters2 = this.delimiters).end && (_this$delimiters2.end = utf8ToWord(this.delimiters.end));
      return this;
    }
  }, {
    key: "loadZip",
    value: function loadZip(zip) {
      if (this.v4Constructor) {
        throw new Error("loadZip() should not be called manually when using the v4 constructor");
      }
      deprecatedMethod(this, "loadZip");
      if (zip.loadAsync) {
        throw new XTInternalError("Docxtemplater doesn't handle JSZip version >=3, please use pizzip");
      }
      if (zip.xtRendered) {
        this.options.warnFn([new Error("This zip file appears to be the outcome of a previous docxtemplater generation. This typically indicates that docxtemplater was integrated by reusing the same zip file. It is recommended to create a new Pizzip instance for each docxtemplater generation.")]);
      }
      this.zip = zip;
      this.updateFileTypeConfig();
      this.modules = concatArrays([this.fileTypeConfig.baseModules.map(function (moduleFunction) {
        return moduleFunction();
      }), this.modules]);
      for (var _i20 = 0, _this$modules8 = this.modules; _i20 < _this$modules8.length; _i20++) {
        var _module6 = _this$modules8[_i20];
        _module6.zip = this.zip;
        _module6.docxtemplater = this;
        _module6.fileTypeConfig = this.fileTypeConfig;
        _module6.fileType = this.fileType;
        _module6.xtOptions = this.options;
        _module6.modules = this.modules;
      }
      dropUnsupportedFileTypesModules(this);
      return this;
    }
  }, {
    key: "precompileFile",
    value: function precompileFile(fileName) {
      var currentFile = this.createTemplateClass(fileName);
      currentFile.preparse();
      this.compiled[fileName] = currentFile;
    }
  }, {
    key: "compileFile",
    value: function compileFile(fileName) {
      this.compiled[fileName].parse();
    }
  }, {
    key: "getScopeManager",
    value: function getScopeManager(to, currentFile, tags) {
      var _this$scopeManagers;
      (_this$scopeManagers = this.scopeManagers)[to] || (_this$scopeManagers[to] = createScope({
        tags: tags,
        parser: this.parser,
        cachedParsers: currentFile.cachedParsers
      }));
      return this.scopeManagers[to];
    }
  }, {
    key: "resolveData",
    value: function resolveData(data) {
      var _this = this;
      deprecatedMethod(this, "resolveData");
      var errors = [];
      if (!Object.keys(this.compiled).length) {
        throwResolveBeforeCompile();
      }
      return Promise.resolve(data).then(function (data) {
        _this.data = data;
        _this.setModules({
          data: _this.data,
          Lexer: Lexer
        });
        _this.mapper = _this.modules.reduce(function (value, module) {
          return module.getRenderedMap(value);
        }, {});
        return Promise.all(Object.keys(_this.mapper).map(function (to) {
          var _this$mapper$to = _this.mapper[to],
            from = _this$mapper$to.from,
            data = _this$mapper$to.data;
          return Promise.resolve(data).then(function (data) {
            var currentFile = _this.compiled[from];
            currentFile.filePath = to;
            currentFile.scopeManager = _this.getScopeManager(to, currentFile, data);
            return currentFile.resolveTags(data).then(function (result) {
              currentFile.scopeManager.finishedResolving = true;
              return result;
            }, function (errs) {
              pushArray(errors, errs);
            });
          });
        })).then(function (resolved) {
          if (errors.length !== 0) {
            if (_this.options.errorLogging) {
              logErrors(errors, _this.options.errorLogging);
            }
            throwMultiError(errors);
          }
          return concatArrays(resolved);
        });
      });
    }
  }, {
    key: "compile",
    value: function compile() {
      deprecatedMethod(this, "compile");
      this.updateFileTypeConfig();
      throwIfDuplicateModules(this.modules);
      this.modules = reorderModules(this.modules);
      if (Object.keys(this.compiled).length) {
        return this;
      }
      var options = this.options;
      for (var _i22 = 0, _this$modules0 = this.modules; _i22 < _this$modules0.length; _i22++) {
        var _module7 = _this$modules0[_i22];
        options = _module7.optionsTransformer(options, this);
      }
      this.options = options;
      this.options.xmlFileNames = uniq(this.options.xmlFileNames);
      for (var _i24 = 0, _this$options$xmlFile2 = this.options.xmlFileNames; _i24 < _this$options$xmlFile2.length; _i24++) {
        var fileName = _this$options$xmlFile2[_i24];
        var content = this.zip.files[fileName].asText();
        this.xmlDocuments[fileName] = str2xml(content);
      }
      this.setModules({
        zip: this.zip,
        xmlDocuments: this.xmlDocuments
      });
      for (var _i26 = 0, _this$modules10 = this.modules; _i26 < _this$modules10.length; _i26++) {
        var _module8 = _this$modules10[_i26];
        _module8.xmlDocuments = this.xmlDocuments;
      }
      this.getTemplatedFiles();
      /*
       * Loop inside all templatedFiles (ie xml files with content).
       * Sometimes they don't exist (footer.xml for example)
       */
      this.sendEvent("before-preparse");
      for (var _i28 = 0, _this$templatedFiles2 = this.templatedFiles; _i28 < _this$templatedFiles2.length; _i28++) {
        var _fileName = _this$templatedFiles2[_i28];
        if (this.zip.files[_fileName] != null) {
          this.precompileFile(_fileName);
        }
      }
      this.sendEvent("after-preparse");
      for (var _i30 = 0, _this$templatedFiles4 = this.templatedFiles; _i30 < _this$templatedFiles4.length; _i30++) {
        var _fileName2 = _this$templatedFiles4[_i30];
        if (this.zip.files[_fileName2] != null) {
          this.compiled[_fileName2].parse({
            noPostParse: true
          });
        }
      }
      this.sendEvent("after-parse");
      for (var _i32 = 0, _this$templatedFiles6 = this.templatedFiles; _i32 < _this$templatedFiles6.length; _i32++) {
        var _fileName3 = _this$templatedFiles6[_i32];
        if (this.zip.files[_fileName3] != null) {
          this.compiled[_fileName3].postparse();
        }
      }
      this.sendEvent("after-postparse");
      this.setModules({
        compiled: this.compiled
      });
      verifyErrors(this);
      return this;
    }
  }, {
    key: "updateFileTypeConfig",
    value: function updateFileTypeConfig() {
      this.relsTypes = getRelsTypes(this.zip);
      var _getContentTypes = getContentTypes(this.zip),
        overrides = _getContentTypes.overrides,
        defaults = _getContentTypes.defaults,
        contentTypes = _getContentTypes.contentTypes,
        contentTypeXml = _getContentTypes.contentTypeXml;
      if (contentTypeXml) {
        this.filesContentTypes = collectContentTypes(overrides, defaults, this.zip);
        this.invertedContentTypes = invertMap(this.filesContentTypes);
        this.setModules({
          contentTypes: this.contentTypes,
          invertedContentTypes: this.invertedContentTypes
        });
      }
      var fileType;
      if (this.zip.files.mimetype) {
        fileType = "odt";
      }
      for (var _i34 = 0, _this$modules12 = this.modules; _i34 < _this$modules12.length; _i34++) {
        var _module9 = _this$modules12[_i34];
        fileType = _module9.getFileType({
          zip: this.zip,
          contentTypes: contentTypes,
          contentTypeXml: contentTypeXml,
          overrides: overrides,
          defaults: defaults,
          doc: this
        }) || fileType;
      }
      this.fileType = fileType;
      if (fileType === "odt") {
        throwFileTypeNotHandled(fileType);
      }
      if (!fileType) {
        throwFileTypeNotIdentified(this.zip);
      }
      addXmlFileNamesFromXmlContentType(this);
      dropUnsupportedFileTypesModules(this);
      this.fileTypeConfig = this.options.fileTypeConfig || this.fileTypeConfig;
      if (!this.fileTypeConfig) {
        if (Docxtemplater.FileTypeConfig[this.fileType]) {
          this.fileTypeConfig = Docxtemplater.FileTypeConfig[this.fileType]();
        } else {
          /*
           * Error case handled since v3.60.2
           * Throw specific error when trying to template xlsx file without xlsxmodule
           */
          var message = "Filetype \"".concat(this.fileType, "\" is not supported");
          var id = "filetype_not_supported";
          if (this.fileType === "xlsx") {
            message = "Filetype \"".concat(this.fileType, "\" is supported only with the paid XlsxModule");
            id = "xlsx_filetype_needs_xlsx_module";
          }
          var err = new XTTemplateError(message);
          err.properties = {
            id: id,
            explanation: message
          };
          throw err;
        }
      }
      return this;
    }
  }, {
    key: "renderAsync",
    value: function renderAsync(data) {
      var _this2 = this;
      this.hideDeprecations = true;
      var promise = this.resolveData(data);
      this.hideDeprecations = false;
      this.zip.xtRendered = true;
      return promise.then(function () {
        return _this2.render();
      });
    }
  }, {
    key: "render",
    value: function render(data) {
      this.zip.xtRendered = true;
      if (this.rendered) {
        throwRenderTwice();
      }
      this.rendered = true;
      if (Object.keys(this.compiled).length === 0) {
        this.compile();
      }
      if (this.errors.length > 0) {
        throwRenderInvalidTemplate();
      }
      if (arguments.length > 0) {
        this.data = data;
      }
      this.setModules({
        data: this.data,
        Lexer: Lexer
      });
      this.mapper || (this.mapper = this.modules.reduce(function (value, module) {
        return module.getRenderedMap(value);
      }, {}));
      var output = [];
      for (var to in this.mapper) {
        var _this$mapper$to2 = this.mapper[to],
          from = _this$mapper$to2.from,
          _data = _this$mapper$to2.data;
        var currentFile = this.compiled[from];
        currentFile.scopeManager = this.getScopeManager(to, currentFile, _data);
        currentFile.render(to);
        output.push([to, currentFile.content, currentFile]);
        delete currentFile.content;
      }
      for (var _i36 = 0; _i36 < output.length; _i36++) {
        var outputPart = output[_i36];
        var _outputPart = _slicedToArray(outputPart, 3),
          content = _outputPart[1],
          _currentFile = _outputPart[2];
        for (var _i38 = 0, _this$modules14 = this.modules; _i38 < _this$modules14.length; _i38++) {
          var _module0 = _this$modules14[_i38];
          if (_module0.preZip) {
            var result = _module0.preZip(content, _currentFile);
            if (typeof result === "string") {
              outputPart[1] = result;
            }
          }
        }
      }
      for (var _i40 = 0; _i40 < output.length; _i40++) {
        var _output$_i = _slicedToArray(output[_i40], 2),
          _to = _output$_i[0],
          _content = _output$_i[1];
        this.zip.file(_to, _content, {
          createFolders: true
        });
      }
      verifyErrors(this);
      this.sendEvent("syncing-zip");
      this.syncZip();
      // The synced-zip event is used in the subtemplate module for example
      this.sendEvent("synced-zip");
      return this;
    }
  }, {
    key: "syncZip",
    value: function syncZip() {
      for (var fileName in this.xmlDocuments) {
        this.zip.remove(fileName);
        var content = xml2str(this.xmlDocuments[fileName]);
        this.zip.file(fileName, content, {
          createFolders: true
        });
      }
    }
  }, {
    key: "setData",
    value: function setData(data) {
      deprecatedMethod(this, "setData");
      this.data = data;
      return this;
    }
  }, {
    key: "getZip",
    value: function getZip() {
      return this.zip;
    }
  }, {
    key: "createTemplateClass",
    value: function createTemplateClass(path) {
      var content = this.zip.files[path].asText();
      return this.createTemplateClassFromContent(content, path);
    }
  }, {
    key: "createTemplateClassFromContent",
    value: function createTemplateClassFromContent(content, filePath) {
      var xmltOptions = {
        filePath: filePath,
        contentType: this.filesContentTypes[filePath],
        relsType: this.relsTypes[filePath]
      };
      var defaults = getDefaults();
      var defaultKeys = pushArray(Object.keys(defaults), ["filesContentTypes", "fileTypeConfig", "fileType", "modules"]);
      for (var _i42 = 0; _i42 < defaultKeys.length; _i42++) {
        var key = defaultKeys[_i42];
        xmltOptions[key] = this[key];
      }
      return new Docxtemplater.XmlTemplater(content, xmltOptions);
    }
  }, {
    key: "getFullText",
    value: function getFullText(path) {
      return this.createTemplateClass(path || this.fileTypeConfig.textPath(this)).getFullText();
    }
  }, {
    key: "getTemplatedFiles",
    value: function getTemplatedFiles() {
      this.templatedFiles = this.fileTypeConfig.getTemplatedFiles(this.zip);
      pushArray(this.templatedFiles, this.targets);
      var templatedNs = this.fileTypeConfig.templatedNs || [];
      if (templatedNs.length > 0) {
        for (var key in this.filesContentTypes) {
          if (/^customXml\/item\d+\.xml$/.test(key)) {
            for (var _i44 = 0; _i44 < templatedNs.length; _i44++) {
              var ns = templatedNs[_i44];
              var text = this.zip.file(key).asText();
              if (text.indexOf("xmlns=\"".concat(ns, "\"")) !== -1) {
                this.templatedFiles.push(key);
              }
            }
          }
        }
      }
      this.templatedFiles = uniq(this.templatedFiles);
      return this.templatedFiles;
    }
  }, {
    key: "getTags",
    value: function getTags() {
      var result = {
        headers: [],
        footers: []
      };
      for (var key in this.compiled) {
        var contentType = this.filesContentTypes[key];
        if (contentType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml") {
          result.document = {
            target: key,
            tags: _getTags(this.compiled[key].postparsed)
          };
        }
        if (contentType === "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml") {
          result.headers.push({
            target: key,
            tags: _getTags(this.compiled[key].postparsed)
          });
        }
        if (contentType === "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml") {
          result.footers.push({
            target: key,
            tags: _getTags(this.compiled[key].postparsed)
          });
        }
      }
      return result;
    }

    /* Export functions, present since 3.62.0 */
  }, {
    key: "toBuffer",
    value: function toBuffer(options) {
      return this.zip.generate(_objectSpread(_objectSpread({
        compression: "DEFLATE",
        fileOrder: zipFileOrder
      }, options), {}, {
        type: "nodebuffer"
      }));
    }

    /* Export functions, present since 3.62.0 */
  }, {
    key: "toBlob",
    value: function toBlob(options) {
      return this.zip.generate(_objectSpread(_objectSpread({
        compression: "DEFLATE",
        fileOrder: zipFileOrder
      }, options), {}, {
        type: "blob"
      }));
    }

    /* Export functions, present since 3.62.0 */
  }, {
    key: "toBase64",
    value: function toBase64(options) {
      return this.zip.generate(_objectSpread(_objectSpread({
        compression: "DEFLATE",
        fileOrder: zipFileOrder
      }, options), {}, {
        type: "base64"
      }));
    }

    /* Export functions, present since 3.62.0 */
  }, {
    key: "toUint8Array",
    value: function toUint8Array(options) {
      return this.zip.generate(_objectSpread(_objectSpread({
        compression: "DEFLATE",
        fileOrder: zipFileOrder
      }, options), {}, {
        type: "uint8array"
      }));
    }

    /* Export functions, present since 3.62.0 */
  }, {
    key: "toArrayBuffer",
    value: function toArrayBuffer(options) {
      return this.zip.generate(_objectSpread(_objectSpread({
        compression: "DEFLATE",
        fileOrder: zipFileOrder
      }, options), {}, {
        type: "arraybuffer"
      }));
    }
  }]);
}();
Docxtemplater.DocUtils = DocUtils;
Docxtemplater.Errors = __webpack_require__(/*! ./errors.js */ 57629);
Docxtemplater.XmlTemplater = __webpack_require__(/*! ./xml-templater.js */ 78008);
Docxtemplater.FileTypeConfig = __webpack_require__(/*! ./file-type-config.js */ 21232);
Docxtemplater.XmlMatcher = __webpack_require__(/*! ./xml-matcher.js */ 99482);
module.exports = Docxtemplater;
module.exports["default"] = Docxtemplater;

/***/ }),

/***/ 72171:
/*!*******************************************************!*\
  !*** ./node_modules/docxtemplater/js/error-logger.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./doc-utils.js */ 24418),
  pushArray = _require.pushArray;
// The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
function replaceErrors(key, value) {
  if (value instanceof Error) {
    return pushArray(Object.getOwnPropertyNames(value), ["stack"]).reduce(function (error, key) {
      error[key] = value[key];
      if (key === "stack") {
        // This is used because in Firefox, stack is not an own property
        error[key] = value[key].toString();
      }
      return error;
    }, {});
  }
  return value;
}
function logger(error, logging) {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify({
    error: error
  }, replaceErrors, logging === "json" ? 2 : null));
  if (error.properties && error.properties.errors instanceof Array) {
    var errorMessages = error.properties.errors.map(function (error) {
      return error.properties.explanation;
    }).join("\n");
    // eslint-disable-next-line no-console
    console.log("errorMessages", errorMessages);
    /*
     * errorMessages is a humanly readable message looking like this :
     * 'The tag beginning with "foobar" is unopened'
     */
  }
}

module.exports = logger;

/***/ }),

/***/ 57629:
/*!*************************************************!*\
  !*** ./node_modules/docxtemplater/js/errors.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _require = __webpack_require__(/*! ./utils.js */ 64389),
  last = _require.last,
  first = _require.first;
function XTError(message) {
  this.name = "GenericError";
  this.message = message;
  this.stack = new Error(message).stack;
}
XTError.prototype = Error.prototype;
function XTTemplateError(message) {
  this.name = "TemplateError";
  this.message = message;
  this.stack = new Error(message).stack;
}
XTTemplateError.prototype = new XTError();
function XTRenderingError(message) {
  this.name = "RenderingError";
  this.message = message;
  this.stack = new Error(message).stack;
}
XTRenderingError.prototype = new XTError();
function XTScopeParserError(message) {
  this.name = "ScopeParserError";
  this.message = message;
  this.stack = new Error(message).stack;
}
XTScopeParserError.prototype = new XTError();
function XTInternalError(message) {
  this.name = "InternalError";
  this.properties = {
    explanation: "InternalError"
  };
  this.message = message;
  this.stack = new Error(message).stack;
}
XTInternalError.prototype = new XTError();
function XTAPIVersionError(message) {
  this.name = "APIVersionError";
  this.properties = {
    explanation: "APIVersionError"
  };
  this.message = message;
  this.stack = new Error(message).stack;
}
XTAPIVersionError.prototype = new XTError();
function throwApiVersionError(msg, properties) {
  var err = new XTAPIVersionError(msg);
  err.properties = _objectSpread({
    id: "api_version_error"
  }, properties);
  throw err;
}
function throwMultiError(errors) {
  var err = new XTTemplateError("Multi error");
  err.properties = {
    errors: errors,
    id: "multi_error",
    explanation: "The template has multiple errors"
  };
  throw err;
}
function getUnopenedTagException(options) {
  var err = new XTTemplateError("Unopened tag");
  err.properties = {
    xtag: last(options.xtag.split(" ")),
    id: "unopened_tag",
    context: options.xtag,
    offset: options.offset,
    lIndex: options.lIndex,
    explanation: "The tag beginning with \"".concat(options.xtag.substr(0, 10), "\" is unopened")
  };
  return err;
}
function getDuplicateOpenTagException(options) {
  var err = new XTTemplateError("Duplicate open tag, expected one open tag");
  err.properties = {
    xtag: first(options.xtag.split(" ")),
    id: "duplicate_open_tag",
    context: options.xtag,
    offset: options.offset,
    lIndex: options.lIndex,
    explanation: "The tag beginning with \"".concat(options.xtag.substr(0, 10), "\" has duplicate open tags")
  };
  return err;
}
function getDuplicateCloseTagException(options) {
  var err = new XTTemplateError("Duplicate close tag, expected one close tag");
  err.properties = {
    xtag: first(options.xtag.split(" ")),
    id: "duplicate_close_tag",
    context: options.xtag,
    offset: options.offset,
    lIndex: options.lIndex,
    explanation: "The tag ending with \"".concat(options.xtag.substr(0, 10), "\" has duplicate close tags")
  };
  return err;
}
function getUnclosedTagException(options) {
  var err = new XTTemplateError("Unclosed tag");
  err.properties = {
    xtag: first(options.xtag.split(" ")).substr(1),
    id: "unclosed_tag",
    context: options.xtag,
    offset: options.offset,
    lIndex: options.lIndex,
    explanation: "The tag beginning with \"".concat(options.xtag.substr(0, 10), "\" is unclosed")
  };
  return err;
}
function throwXmlTagNotFound(options) {
  var err = new XTTemplateError("No tag \"".concat(options.element, "\" was found at the ").concat(options.position));
  var part = options.parsed[options.index];
  err.properties = {
    id: "no_xml_tag_found_at_".concat(options.position),
    explanation: "No tag \"".concat(options.element, "\" was found at the ").concat(options.position),
    offset: part.offset,
    part: part,
    parsed: options.parsed,
    index: options.index,
    element: options.element
  };
  throw err;
}
function getCorruptCharactersException(_ref) {
  var tag = _ref.tag,
    value = _ref.value,
    offset = _ref.offset;
  var err = new XTRenderingError("There are some XML corrupt characters");
  err.properties = {
    id: "invalid_xml_characters",
    xtag: tag,
    value: value,
    offset: offset,
    explanation: "There are some corrupt characters for the field ".concat(tag)
  };
  return err;
}
function getInvalidRawXMLValueException(_ref2) {
  var tag = _ref2.tag,
    value = _ref2.value,
    offset = _ref2.offset;
  var err = new XTRenderingError("Non string values are not allowed for rawXML tags");
  err.properties = {
    id: "invalid_raw_xml_value",
    xtag: tag,
    value: value,
    offset: offset,
    explanation: "The value of the raw tag : '".concat(tag, "' is not a string")
  };
  return err;
}
function throwExpandNotFound(options) {
  var _options$part = options.part,
    value = _options$part.value,
    offset = _options$part.offset,
    _options$id = options.id,
    id = _options$id === void 0 ? "raw_tag_outerxml_invalid" : _options$id,
    _options$message = options.message,
    message = _options$message === void 0 ? "Raw tag not in paragraph" : _options$message;
  var part = options.part;
  var _options$explanation = options.explanation,
    explanation = _options$explanation === void 0 ? "The tag \"".concat(value, "\" is not inside a paragraph") : _options$explanation;
  if (typeof explanation === "function") {
    explanation = explanation(part);
  }
  var err = new XTTemplateError(message);
  err.properties = {
    id: id,
    explanation: explanation,
    rootError: options.rootError,
    xtag: value,
    offset: offset,
    postparsed: options.postparsed,
    expandTo: options.expandTo,
    index: options.index
  };
  throw err;
}
function throwRawTagShouldBeOnlyTextInParagraph(options) {
  var err = new XTTemplateError("Raw tag should be the only text in paragraph");
  var tag = options.part.value;
  err.properties = {
    id: "raw_xml_tag_should_be_only_text_in_paragraph",
    explanation: "The raw tag \"".concat(tag, "\" should be the only text in this paragraph. This means that this tag should not be surrounded by any text or spaces."),
    xtag: tag,
    offset: options.part.offset,
    paragraphParts: options.paragraphParts
  };
  throw err;
}
function getUnmatchedLoopException(part) {
  var location = part.location,
    offset = part.offset,
    square = part.square;
  var t = location === "start" ? "unclosed" : "unopened";
  var T = location === "start" ? "Unclosed" : "Unopened";
  var err = new XTTemplateError("".concat(T, " loop"));
  var tag = part.value;
  err.properties = {
    id: "".concat(t, "_loop"),
    explanation: "The loop with tag \"".concat(tag, "\" is ").concat(t),
    xtag: tag,
    offset: offset
  };
  if (square) {
    err.properties.square = square;
  }
  return err;
}
function getUnbalancedLoopException(pair, lastPair) {
  var err = new XTTemplateError("Unbalanced loop tag");
  var lastL = lastPair[0].part.value;
  var lastR = lastPair[1].part.value;
  var l = pair[0].part.value;
  var r = pair[1].part.value;
  err.properties = {
    id: "unbalanced_loop_tags",
    explanation: "Unbalanced loop tags {#".concat(lastL, "}{/").concat(lastR, "}{#").concat(l, "}{/").concat(r, "}"),
    offset: [lastPair[0].part.offset, pair[1].part.offset],
    lastPair: {
      left: lastPair[0].part.value,
      right: lastPair[1].part.value
    },
    pair: {
      left: pair[0].part.value,
      right: pair[1].part.value
    }
  };
  return err;
}
function getClosingTagNotMatchOpeningTag(_ref3) {
  var tags = _ref3.tags;
  var err = new XTTemplateError("Closing tag does not match opening tag");
  err.properties = {
    id: "closing_tag_does_not_match_opening_tag",
    explanation: "The tag \"".concat(tags[0].value, "\" is closed by the tag \"").concat(tags[1].value, "\""),
    openingtag: first(tags).value,
    offset: [first(tags).offset, last(tags).offset],
    closingtag: last(tags).value
  };
  if (first(tags).square) {
    err.properties.square = [first(tags).square, last(tags).square];
  }
  return err;
}
function getScopeCompilationError(_ref4) {
  var tag = _ref4.tag,
    rootError = _ref4.rootError,
    offset = _ref4.offset;
  var err = new XTScopeParserError("Scope parser compilation failed");
  err.properties = {
    id: "scopeparser_compilation_failed",
    offset: offset,
    xtag: tag,
    explanation: "The scope parser for the tag \"".concat(tag, "\" failed to compile"),
    rootError: rootError
  };
  return err;
}
function getScopeParserExecutionError(_ref5) {
  var tag = _ref5.tag,
    scope = _ref5.scope,
    error = _ref5.error,
    offset = _ref5.offset;
  var err = new XTScopeParserError("Scope parser execution failed");
  err.properties = {
    id: "scopeparser_execution_failed",
    explanation: "The scope parser for the tag ".concat(tag, " failed to execute"),
    scope: scope,
    offset: offset,
    xtag: tag,
    rootError: error
  };
  return err;
}
function getLoopPositionProducesInvalidXMLError(_ref6) {
  var tag = _ref6.tag,
    offset = _ref6.offset;
  var err = new XTTemplateError("The position of the loop tags \"".concat(tag, "\" would produce invalid XML"));
  err.properties = {
    xtag: tag,
    id: "loop_position_invalid",
    explanation: "The tags \"".concat(tag, "\" are misplaced in the document, for example one of them is in a table and the other one outside the table"),
    offset: offset
  };
  return err;
}
function throwUnimplementedTagType(part, index) {
  var errorMsg = "Unimplemented tag type \"".concat(part.type, "\"");
  if (part.module) {
    errorMsg += " \"".concat(part.module, "\"");
  }
  var err = new XTTemplateError(errorMsg);
  err.properties = {
    part: part,
    index: index,
    id: "unimplemented_tag_type"
  };
  throw err;
}
function throwMalformedXml() {
  var err = new XTInternalError("Malformed xml");
  err.properties = {
    explanation: "The template contains malformed xml",
    id: "malformed_xml"
  };
  throw err;
}
function throwResolveBeforeCompile() {
  var err = new XTInternalError("You must run `.compile()` before running `.resolveData()`");
  err.properties = {
    id: "resolve_before_compile",
    explanation: "You must run `.compile()` before running `.resolveData()`"
  };
  throw err;
}
function throwRenderInvalidTemplate() {
  var err = new XTInternalError("You should not call .render on a document that had compilation errors");
  err.properties = {
    id: "render_on_invalid_template",
    explanation: "You should not call .render on a document that had compilation errors"
  };
  throw err;
}
function throwRenderTwice() {
  var err = new XTInternalError("You should not call .render twice on the same docxtemplater instance");
  err.properties = {
    id: "render_twice",
    explanation: "You should not call .render twice on the same docxtemplater instance"
  };
  throw err;
}
function throwFileTypeNotIdentified(zip) {
  var files = Object.keys(zip.files).slice(0, 10);
  var msg = "";
  if (files.length === 0) {
    msg = "Empty zip file";
  } else {
    msg = "Zip file contains : ".concat(files.join(","));
  }
  var err = new XTInternalError("The filetype for this file could not be identified, is this file corrupted ? ".concat(msg));
  err.properties = {
    id: "filetype_not_identified",
    explanation: "The filetype for this file could not be identified, is this file corrupted ? ".concat(msg)
  };
  throw err;
}
function throwXmlInvalid(content, offset) {
  var err = new XTTemplateError("An XML file has invalid xml");
  err.properties = {
    id: "file_has_invalid_xml",
    content: content,
    offset: offset,
    explanation: "The docx contains invalid XML, it is most likely corrupt"
  };
  throw err;
}
function throwFileTypeNotHandled(fileType) {
  var err = new XTInternalError("The filetype \"".concat(fileType, "\" is not handled by docxtemplater"));
  err.properties = {
    id: "filetype_not_handled",
    explanation: "The file you are trying to generate is of type \"".concat(fileType, "\", but only docx and pptx formats are handled"),
    fileType: fileType
  };
  throw err;
}
module.exports = {
  XTError: XTError,
  XTTemplateError: XTTemplateError,
  XTInternalError: XTInternalError,
  XTScopeParserError: XTScopeParserError,
  XTAPIVersionError: XTAPIVersionError,
  // Remove this alias in v4
  RenderingError: XTRenderingError,
  XTRenderingError: XTRenderingError,
  getClosingTagNotMatchOpeningTag: getClosingTagNotMatchOpeningTag,
  getLoopPositionProducesInvalidXMLError: getLoopPositionProducesInvalidXMLError,
  getScopeCompilationError: getScopeCompilationError,
  getScopeParserExecutionError: getScopeParserExecutionError,
  getUnclosedTagException: getUnclosedTagException,
  getUnopenedTagException: getUnopenedTagException,
  getUnmatchedLoopException: getUnmatchedLoopException,
  getDuplicateCloseTagException: getDuplicateCloseTagException,
  getDuplicateOpenTagException: getDuplicateOpenTagException,
  getCorruptCharactersException: getCorruptCharactersException,
  getInvalidRawXMLValueException: getInvalidRawXMLValueException,
  getUnbalancedLoopException: getUnbalancedLoopException,
  throwApiVersionError: throwApiVersionError,
  throwFileTypeNotHandled: throwFileTypeNotHandled,
  throwFileTypeNotIdentified: throwFileTypeNotIdentified,
  throwMalformedXml: throwMalformedXml,
  throwMultiError: throwMultiError,
  throwExpandNotFound: throwExpandNotFound,
  throwRawTagShouldBeOnlyTextInParagraph: throwRawTagShouldBeOnlyTextInParagraph,
  throwUnimplementedTagType: throwUnimplementedTagType,
  throwXmlTagNotFound: throwXmlTagNotFound,
  throwXmlInvalid: throwXmlInvalid,
  throwResolveBeforeCompile: throwResolveBeforeCompile,
  throwRenderInvalidTemplate: throwRenderInvalidTemplate,
  throwRenderTwice: throwRenderTwice
};

/***/ }),

/***/ 21232:
/*!***********************************************************!*\
  !*** ./node_modules/docxtemplater/js/file-type-config.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var loopModule = __webpack_require__(/*! ./modules/loop.js */ 10978);
var spacePreserveModule = __webpack_require__(/*! ./modules/space-preserve.js */ 61609);
var rawXmlModule = __webpack_require__(/*! ./modules/rawxml.js */ 21727);
var expandPairTrait = __webpack_require__(/*! ./modules/expand-pair-trait.js */ 76600);
var render = __webpack_require__(/*! ./modules/render.js */ 47540);
function DocXFileTypeConfig() {
  return {
    getTemplatedFiles: function getTemplatedFiles() {
      return [];
    },
    templatedNs: ["http://schemas.microsoft.com/office/2006/coverPageProps"],
    textPath: function textPath(doc) {
      return doc.textTarget;
    },
    tagsXmlTextArray: ["Company", "HyperlinkBase", "Manager", "cp:category", "cp:keywords", "dc:creator", "dc:description", "dc:subject", "dc:title", "cp:contentStatus", "PublishDate", "Abstract", "CompanyAddress", "CompanyPhone", "CompanyFax", "CompanyEmail", "w:t", "a:t", "m:t", "vt:lpstr", "vt:lpwstr"],
    tagsXmlLexedArray: ["w:proofState", "w:tc", "w:tr", "w:tbl", "w:ftr", "w:hdr", "w:body", "w:document", "w:p", "w:r", "w:br", "w:rPr", "w:pPr", "w:spacing", "w:sdtContent", "w:sdt", "w:drawing", "w:sectPr", "w:type", "w:headerReference", "w:footerReference", "w:bookmarkStart", "w:bookmarkEnd", "w:commentRangeStart", "w:commentRangeEnd", "w:commentReference"],
    droppedTagsInsidePlaceholder: ["w:p", "w:br", "w:bookmarkStart", "w:bookmarkEnd"],
    expandTags: [{
      contains: "w:tc",
      expand: "w:tr"
    }],
    onParagraphLoop: [{
      contains: "w:p",
      expand: "w:p",
      onlyTextInTag: true
    }],
    tagRawXml: "w:p",
    baseModules: [loopModule, spacePreserveModule, expandPairTrait, rawXmlModule, render],
    tagShouldContain: [{
      tag: "w:sdtContent",
      shouldContain: ["w:p", "w:r", "w:commentRangeStart", "w:sdt"],
      value: "<w:p></w:p>"
    }, {
      tag: "w:tc",
      shouldContain: ["w:p"],
      value: "<w:p></w:p>"
    }, {
      tag: "w:tr",
      shouldContain: ["w:tc"],
      drop: true
    }, {
      tag: "w:tbl",
      shouldContain: ["w:tr"],
      drop: true
    }]
  };
}
function PptXFileTypeConfig() {
  return {
    getTemplatedFiles: function getTemplatedFiles() {
      return [];
    },
    textPath: function textPath(doc) {
      return doc.textTarget;
    },
    tagsXmlTextArray: ["Company", "HyperlinkBase", "Manager", "cp:category", "cp:keywords", "dc:creator", "dc:description", "dc:subject", "dc:title", "a:t", "m:t", "vt:lpstr", "vt:lpwstr"],
    tagsXmlLexedArray: ["p:sp", "a:tc", "a:tr", "a:tbl", "a:graphicData", "a:p", "a:r", "a:rPr", "p:txBody", "a:txBody", "a:off", "a:ext", "p:graphicFrame", "p:xfrm", "a16:rowId", "a:endParaRPr"],
    droppedTagsInsidePlaceholder: ["a:p", "a:endParaRPr"],
    expandTags: [{
      contains: "a:tc",
      expand: "a:tr"
    }],
    onParagraphLoop: [{
      contains: "a:p",
      expand: "a:p",
      onlyTextInTag: true
    }],
    tagRawXml: "p:sp",
    baseModules: [loopModule, expandPairTrait, rawXmlModule, render],
    tagShouldContain: [{
      tag: "a:tbl",
      shouldContain: ["a:tr"],
      dropParent: "p:graphicFrame"
    }, {
      tag: "p:txBody",
      shouldContain: ["a:p"],
      value: "<a:p></a:p>"
    }, {
      tag: "a:txBody",
      shouldContain: ["a:p"],
      value: "<a:p></a:p>"
    }]
  };
}
module.exports = {
  docx: DocXFileTypeConfig,
  pptx: PptXFileTypeConfig
};

/***/ }),

/***/ 57747:
/*!****************************************************!*\
  !*** ./node_modules/docxtemplater/js/filetypes.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


var docxContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml";
var docxmContentType = "application/vnd.ms-word.document.macroEnabled.main+xml";
var dotxContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml";
var dotmContentType = "application/vnd.ms-word.template.macroEnabledTemplate.main+xml";
var headerContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml";
var footnotesContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml";
var commentsContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml";
var footerContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml";
var pptxContentType = "application/vnd.openxmlformats-officedocument.presentationml.slide+xml";
var pptxSlideMaster = "application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml";
var pptxSlideLayout = "application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml";
var pptxPresentationContentType = "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml";
var xlsxContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml";
var xlsmContentType = "application/vnd.ms-excel.sheet.macroEnabled.main+xml";
var xlsxWorksheetContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml";
/*
 * This is used for the main part of the document, ie usually that would be the
 * type of word/document.xml
 */
var main = [docxContentType, docxmContentType, dotxContentType, dotmContentType];
var filetypes = {
  main: main,
  docx: [headerContentType].concat(main, [footerContentType, footnotesContentType, commentsContentType]),
  pptx: [pptxContentType, pptxSlideMaster, pptxSlideLayout, pptxPresentationContentType],
  xlsx: [xlsxContentType, xlsmContentType, xlsxWorksheetContentType]
};
module.exports = filetypes;

/***/ }),

/***/ 26600:
/*!************************************************************!*\
  !*** ./node_modules/docxtemplater/js/get-content-types.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./doc-utils.js */ 24418),
  str2xml = _require.str2xml;
var ctXML = "[Content_Types].xml";
function collectContentTypes(overrides, defaults, zip) {
  var partNames = {};
  for (var _i2 = 0; _i2 < overrides.length; _i2++) {
    var override = overrides[_i2];
    var contentType = override.getAttribute("ContentType");
    var partName = override.getAttribute("PartName").substr(1);
    partNames[partName] = contentType;
  }
  zip.file(/./).map(function (_ref) {
    var name = _ref.name;
    for (var _i4 = 0; _i4 < defaults.length; _i4++) {
      var def = defaults[_i4];
      var _contentType = def.getAttribute("ContentType");
      var extension = def.getAttribute("Extension");
      if (name.slice(name.length - extension.length) === extension && !partNames[name] && name !== ctXML) {
        partNames[name] = _contentType;
      }
    }
    partNames[name] || (partNames[name] = "");
  });
  return partNames;
}
function getContentTypes(zip) {
  var contentTypes = zip.files[ctXML];
  var contentTypeXml = contentTypes ? str2xml(contentTypes.asText()) : null;
  var overrides = contentTypeXml ? contentTypeXml.getElementsByTagName("Override") : null;
  var defaults = contentTypeXml ? contentTypeXml.getElementsByTagName("Default") : null;
  return {
    overrides: overrides,
    defaults: defaults,
    contentTypes: contentTypes,
    contentTypeXml: contentTypeXml
  };
}
module.exports = {
  collectContentTypes: collectContentTypes,
  getContentTypes: getContentTypes
};

/***/ }),

/***/ 33909:
/*!*************************************************************!*\
  !*** ./node_modules/docxtemplater/js/get-relation-types.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./doc-utils.js */ 24418),
  str2xml = _require.str2xml;
var relsFile = "_rels/.rels";
function getRelsTypes(zip) {
  var rootRels = zip.files[relsFile];
  var rootRelsXml = rootRels ? str2xml(rootRels.asText()) : null;
  var rootRelationships = rootRelsXml ? rootRelsXml.getElementsByTagName("Relationship") : [];
  var relsTypes = {};
  for (var _i2 = 0; _i2 < rootRelationships.length; _i2++) {
    var relation = rootRelationships[_i2];
    relsTypes[relation.getAttribute("Target")] = relation.getAttribute("Type");
  }
  return relsTypes;
}
module.exports = {
  getRelsTypes: getRelsTypes
};

/***/ }),

/***/ 72959:
/*!**********************************************************!*\
  !*** ./node_modules/docxtemplater/js/get-resolved-id.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


function getResolvedId(part, options) {
  if (part.lIndex == null) {
    return null;
  }
  var path = options.scopeManager.scopePathItem;
  if (part.parentPart) {
    path = path.slice(0, path.length - 1);
  }
  var res = options.filePath + "@" + part.lIndex.toString() + "-" + path.join("-");
  return res;
}
module.exports = getResolvedId;

/***/ }),

/***/ 4176:
/*!***************************************************!*\
  !*** ./node_modules/docxtemplater/js/get-tags.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function isPlaceholder(part) {
  return part.type === "placeholder";
}

/* eslint-disable-next-line complexity */
function getTags(postParsed) {
  var tags = {};
  var stack = [{
    items: postParsed.filter(isPlaceholder),
    parents: [],
    path: []
  }];
  function processFiltered(part, current, filtered) {
    if (filtered.length) {
      stack.push({
        items: filtered,
        parents: [].concat(_toConsumableArray(current.parents), [part]),
        path: part.dataBound !== false && !part.attrParsed && part.value && !part.attrParsed ? [].concat(_toConsumableArray(current.path), [part.value]) : _toConsumableArray(current.path)
      });
    }
  }
  function getLocalTags(tags, path) {
    var sizeScope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : path.length;
    var localTags = tags;
    for (var i = 0; i < sizeScope; i++) {
      localTags = localTags[path[i]];
    }
    return localTags;
  }
  function getScopeSize(part, parents) {
    var size = parents.length;
    for (var _i2 = 0; _i2 < parents.length; _i2++) {
      var parent = parents[_i2];
      var lIndexLoop = typeof parent.lIndex === "number" ? parent.lIndex : parseInt(parent.lIndex.split("-")[0], 10);
      if (lIndexLoop > part.lIndex) {
        size--;
      }
    }
    return size;
  }
  while (stack.length > 0) {
    var current = stack.pop();
    var localTags = getLocalTags(tags, current.path);
    for (var _i4 = 0, _current$items2 = current.items; _i4 < _current$items2.length; _i4++) {
      var _localTags4, _part$value2;
      var part = _current$items2[_i4];
      if (part.attrParsed) {
        for (var key in part.attrParsed) {
          processFiltered(part, current, part.attrParsed[key].filter(isPlaceholder));
        }
        continue;
      }
      if (part.subparsed) {
        if (part.dataBound !== false) {
          var _localTags, _part$value;
          (_localTags = localTags)[_part$value = part.value] || (_localTags[_part$value] = {});
        }
        processFiltered(part, current, part.subparsed.filter(isPlaceholder));
        continue;
      }
      if (part.cellParsed) {
        for (var _i6 = 0, _part$cellPostParsed2 = part.cellPostParsed; _i6 < _part$cellPostParsed2.length; _i6++) {
          var cp = _part$cellPostParsed2[_i6];
          if (cp.type === "placeholder") {
            if (cp.module === "pro-xml-templating/xls-module-loop") {
              continue;
            } else if (cp.subparsed) {
              var _localTags2, _cp$value;
              (_localTags2 = localTags)[_cp$value = cp.value] || (_localTags2[_cp$value] = {});
              processFiltered(cp, current, cp.subparsed.filter(isPlaceholder));
            } else {
              var _localTags3, _cp$value2;
              var sizeScope = getScopeSize(part, current.parents);
              localTags = getLocalTags(tags, current.path, sizeScope);
              (_localTags3 = localTags)[_cp$value2 = cp.value] || (_localTags3[_cp$value2] = {});
            }
          }
        }
        continue;
      }
      if (part.dataBound === false) {
        continue;
      }
      (_localTags4 = localTags)[_part$value2 = part.value] || (_localTags4[_part$value2] = {});
    }
  }
  return tags;
}
module.exports = {
  getTags: getTags,
  isPlaceholder: isPlaceholder
};

/***/ }),

/***/ 49739:
/*!*********************************************************!*\
  !*** ./node_modules/docxtemplater/js/join-uncorrupt.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./doc-utils.js */ 24418),
  startsWith = _require.startsWith,
  endsWith = _require.endsWith,
  isStarting = _require.isStarting,
  isEnding = _require.isEnding,
  isWhiteSpace = _require.isWhiteSpace;
var filetypes = __webpack_require__(/*! ./filetypes.js */ 57747);
function addEmptyParagraphAfterTable(parts) {
  var lastNonEmpty = "";
  for (var i = 0, len = parts.length; i < len; i++) {
    var p = parts[i];
    if (isWhiteSpace(p) || startsWith(p, "<w:bookmarkEnd")) {
      continue;
    }
    if (endsWith(lastNonEmpty, "</w:tbl>")) {
      if (!startsWith(p, "<w:p") && !startsWith(p, "<w:tbl") && !startsWith(p, "<w:sectPr") &&
      // Tested by #regression-paragraph-after-table-header-footer
      !startsWith(p, "</w:ftr>") && !startsWith(p, "</w:hdr>")) {
        p = "<w:p/>".concat(p);
      }
    }
    lastNonEmpty = p;
    parts[i] = p;
  }
  return parts;
}

// eslint-disable-next-line complexity
function joinUncorrupt(parts, options) {
  var contains = options.fileTypeConfig.tagShouldContain || [];
  /*
   * Before doing this "uncorruption" method here, this was done with the
   * `part.emptyValue` trick, however, there were some corruptions that were
   * not handled, for example with a template like this :
   *
   * ------------------------------------------------
   * | {-w:p falsy}My para{/falsy}   |              |
   * | {-w:p falsy}My para{/falsy}   |              |
   * ------------------------------------------------
   */
  var collecting = "";
  var currentlyCollecting = -1;
  if (filetypes.docx.indexOf(options.contentType) !== -1) {
    parts = addEmptyParagraphAfterTable(parts);
  }
  var startIndex = -1;
  for (var j = 0, len2 = contains.length; j < len2; j++) {
    var _contains$j = contains[j],
      tag = _contains$j.tag,
      shouldContain = _contains$j.shouldContain,
      value = _contains$j.value,
      drop = _contains$j.drop,
      dropParent = _contains$j.dropParent;
    for (var i = 0, len = parts.length; i < len; i++) {
      var part = parts[i];
      if (currentlyCollecting === j) {
        if (isEnding(part, tag)) {
          currentlyCollecting = -1;
          if (dropParent) {
            var start = -1;
            for (var k = startIndex; k > 0; k--) {
              if (isStarting(parts[k], dropParent)) {
                start = k;
                break;
              }
            }
            for (var _k = start; _k <= parts.length; _k++) {
              if (isEnding(parts[_k], dropParent)) {
                parts[_k] = "";
                break;
              }
              parts[_k] = "";
            }
          } else {
            for (var _k2 = startIndex; _k2 <= i; _k2++) {
              parts[_k2] = "";
            }
            if (!drop) {
              parts[i] = collecting + value + part;
            }
          }
        }
        collecting += part;
        for (var _k3 = 0, len3 = shouldContain.length; _k3 < len3; _k3++) {
          var sc = shouldContain[_k3];
          if (isStarting(part, sc)) {
            currentlyCollecting = -1;
            break;
          }
        }
      }
      if (currentlyCollecting === -1 && isStarting(part, tag) &&
      /*
       * To verify that the part doesn't have multiple tags,
       * such as <w:tc><w:p>
       */
      part.substr(1).indexOf("<") === -1) {
        // self-closing tag such as <w:t/>
        if (part[part.length - 2] === "/") {
          parts[i] = "";
        } else {
          startIndex = i;
          currentlyCollecting = j;
          collecting = part;
        }
      }
    }
  }
  return parts;
}
module.exports = joinUncorrupt;

/***/ }),

/***/ 62438:
/*!************************************************!*\
  !*** ./node_modules/docxtemplater/js/lexer.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _require = __webpack_require__(/*! ./errors.js */ 57629),
  getUnclosedTagException = _require.getUnclosedTagException,
  getUnopenedTagException = _require.getUnopenedTagException,
  getDuplicateOpenTagException = _require.getDuplicateOpenTagException,
  getDuplicateCloseTagException = _require.getDuplicateCloseTagException,
  throwMalformedXml = _require.throwMalformedXml,
  throwXmlInvalid = _require.throwXmlInvalid,
  XTTemplateError = _require.XTTemplateError;
var _require2 = __webpack_require__(/*! ./doc-utils.js */ 24418),
  isTextStart = _require2.isTextStart,
  isTextEnd = _require2.isTextEnd,
  wordToUtf8 = _require2.wordToUtf8,
  pushArray = _require2.pushArray;
var DELIMITER_NONE = 0,
  DELIMITER_EQUAL = 1,
  DELIMITER_START = 2,
  DELIMITER_END = 3;
function inRange(range, match) {
  return range[0] <= match.offset && match.offset < range[1];
}
function updateInTextTag(part, inTextTag) {
  if (isTextStart(part)) {
    if (inTextTag) {
      throwMalformedXml();
    }
    return true;
  }
  if (isTextEnd(part)) {
    if (!inTextTag) {
      throwMalformedXml();
    }
    return false;
  }
  return inTextTag;
}
function getTag(tag) {
  var position = "";
  var start = 1;
  var end = tag.indexOf(" ");
  if (tag[tag.length - 2] === "/") {
    position = "selfclosing";
    if (end === -1) {
      end = tag.length - 2;
    }
  } else if (tag[1] === "/") {
    start = 2;
    position = "end";
    if (end === -1) {
      end = tag.length - 1;
    }
  } else {
    position = "start";
    if (end === -1) {
      end = tag.length - 1;
    }
  }
  return {
    tag: tag.slice(start, end),
    position: position
  };
}
function tagMatcher(content, textMatchArray, othersMatchArray) {
  var cursor = 0;
  var contentLength = content.length;
  var allMatches = {};
  for (var _i2 = 0; _i2 < textMatchArray.length; _i2++) {
    var m = textMatchArray[_i2];
    allMatches[m] = true;
  }
  for (var _i4 = 0; _i4 < othersMatchArray.length; _i4++) {
    var _m = othersMatchArray[_i4];
    allMatches[_m] = false;
  }
  var totalMatches = [];
  while (cursor < contentLength) {
    cursor = content.indexOf("<", cursor);
    if (cursor === -1) {
      break;
    }
    var offset = cursor;
    var nextOpening = content.indexOf("<", cursor + 1);
    cursor = content.indexOf(">", cursor);
    if (cursor === -1 || nextOpening !== -1 && cursor > nextOpening) {
      throwXmlInvalid(content, offset);
    }
    var tagText = content.slice(offset, cursor + 1);
    var _getTag = getTag(tagText),
      tag = _getTag.tag,
      position = _getTag.position;
    var text = allMatches[tag];
    if (text == null) {
      continue;
    }
    totalMatches.push({
      type: "tag",
      position: position,
      text: text,
      offset: offset,
      value: tagText,
      tag: tag
    });
  }
  return totalMatches;
}
function getDelimiterErrors(delimiterMatches, fullText, syntaxOptions) {
  var errors = [];
  var inDelimiter = false;
  var lastDelimiterMatch = {
    offset: 0
  };
  var xtag;
  var delimiterWithErrors = delimiterMatches.reduce(function (delimiterAcc, currDelimiterMatch) {
    var position = currDelimiterMatch.position;
    var delimiterOffset = currDelimiterMatch.offset;
    var lastDelimiterOffset = lastDelimiterMatch.offset;
    var lastDelimiterLength = lastDelimiterMatch.length;
    xtag = fullText.substr(lastDelimiterOffset, delimiterOffset - lastDelimiterOffset);
    if (inDelimiter && position === "start") {
      if (lastDelimiterOffset + lastDelimiterLength === delimiterOffset) {
        xtag = fullText.substr(lastDelimiterOffset, delimiterOffset - lastDelimiterOffset + lastDelimiterLength + 4);
        if (!syntaxOptions.allowUnclosedTag) {
          errors.push(getDuplicateOpenTagException({
            xtag: xtag,
            offset: lastDelimiterOffset
          }));
          lastDelimiterMatch = currDelimiterMatch;
          delimiterAcc.push(_objectSpread(_objectSpread({}, currDelimiterMatch), {}, {
            error: true
          }));
          return delimiterAcc;
        }
      }
      if (!syntaxOptions.allowUnclosedTag) {
        errors.push(getUnclosedTagException({
          xtag: wordToUtf8(xtag),
          offset: lastDelimiterOffset
        }));
        lastDelimiterMatch = currDelimiterMatch;
        delimiterAcc.push(_objectSpread(_objectSpread({}, currDelimiterMatch), {}, {
          error: true
        }));
        return delimiterAcc;
      }
      delimiterAcc.pop();
    }
    if (!inDelimiter && position === "end") {
      if (syntaxOptions.allowUnopenedTag) {
        return delimiterAcc;
      }
      if (lastDelimiterOffset + lastDelimiterLength === delimiterOffset) {
        xtag = fullText.substr(lastDelimiterOffset - 4, delimiterOffset - lastDelimiterOffset + lastDelimiterLength + 4);
        errors.push(getDuplicateCloseTagException({
          xtag: xtag,
          offset: lastDelimiterOffset
        }));
        lastDelimiterMatch = currDelimiterMatch;
        delimiterAcc.push(_objectSpread(_objectSpread({}, currDelimiterMatch), {}, {
          error: true
        }));
        return delimiterAcc;
      }
      errors.push(getUnopenedTagException({
        xtag: xtag,
        offset: delimiterOffset
      }));
      lastDelimiterMatch = currDelimiterMatch;
      delimiterAcc.push(_objectSpread(_objectSpread({}, currDelimiterMatch), {}, {
        error: true
      }));
      return delimiterAcc;
    }
    inDelimiter = position === "start";
    lastDelimiterMatch = currDelimiterMatch;
    delimiterAcc.push(currDelimiterMatch);
    return delimiterAcc;
  }, []);
  if (inDelimiter) {
    var lastDelimiterOffset = lastDelimiterMatch.offset;
    xtag = fullText.substr(lastDelimiterOffset, fullText.length - lastDelimiterOffset);
    if (!syntaxOptions.allowUnclosedTag) {
      errors.push(getUnclosedTagException({
        xtag: wordToUtf8(xtag),
        offset: lastDelimiterOffset
      }));
    } else {
      delimiterWithErrors.pop();
    }
  }
  return {
    delimiterWithErrors: delimiterWithErrors,
    errors: errors
  };
}
function compareOffsets(startOffset, endOffset) {
  if (startOffset === -1 && endOffset === -1) {
    return DELIMITER_NONE;
  }
  if (startOffset === endOffset) {
    return DELIMITER_EQUAL;
  }
  if (startOffset === -1 || endOffset === -1) {
    return endOffset < startOffset ? DELIMITER_START : DELIMITER_END;
  }
  return startOffset < endOffset ? DELIMITER_START : DELIMITER_END;
}
function splitDelimiters(inside) {
  var newDelimiters = inside.split(" ");
  if (newDelimiters.length !== 2) {
    var err = new XTTemplateError("New Delimiters cannot be parsed");
    err.properties = {
      id: "change_delimiters_invalid",
      explanation: "Cannot parser delimiters"
    };
    throw err;
  }
  var _newDelimiters = _slicedToArray(newDelimiters, 2),
    start = _newDelimiters[0],
    end = _newDelimiters[1];
  if (start.length === 0 || end.length === 0) {
    var _err = new XTTemplateError("New Delimiters cannot be parsed");
    _err.properties = {
      id: "change_delimiters_invalid",
      explanation: "Cannot parser delimiters"
    };
    throw _err;
  }
  return [start, end];
}
function getAllDelimiterIndexes(fullText, delimiters, syntaxOptions) {
  var indexes = [];
  var start = delimiters.start,
    end = delimiters.end;
  var offset = -1;
  var insideTag = false;
  if (start == null && end == null) {
    // Special case of delimiter set to null/null, no templating is done
    return [];
  }
  while (true) {
    var startOffset = fullText.indexOf(start, offset + 1);
    var endOffset = fullText.indexOf(end, offset + 1);
    var position = null;
    var len = void 0;
    var compareResult = compareOffsets(startOffset, endOffset);
    if (compareResult === DELIMITER_EQUAL) {
      compareResult = insideTag ? DELIMITER_END : DELIMITER_START;
    }
    switch (compareResult) {
      case DELIMITER_NONE:
        return indexes;
      case DELIMITER_END:
        insideTag = false;
        offset = endOffset;
        position = "end";
        len = end.length;
        break;
      case DELIMITER_START:
        insideTag = true;
        offset = startOffset;
        position = "start";
        len = start.length;
        break;
    }
    /*
     * If tag starts with =, such as {=[ ]=}
     * then the delimiters will change right after that tag.
     *
     * For example, with the following template :
     *
     * Hello {foo}, {=[ ]=}what's up with [name] ?
     *
     * The "foo" tag is a normal tag, the "=[ ]=" is a tag to change the
     * delimiters to "[" and "]", and the last "name" is a tag with the new
     * delimiters
     */
    if (syntaxOptions.changeDelimiterPrefix && compareResult === DELIMITER_START && fullText[offset + start.length] === syntaxOptions.changeDelimiterPrefix) {
      indexes.push({
        offset: startOffset,
        position: "start",
        length: start.length,
        changedelimiter: true
      });
      var nextEqual = fullText.indexOf(syntaxOptions.changeDelimiterPrefix, offset + start.length + 1);
      var nextEndOffset = fullText.indexOf(end, nextEqual + 1);
      indexes.push({
        offset: nextEndOffset,
        position: "end",
        length: end.length,
        changedelimiter: true
      });
      var _insideTag = fullText.substr(offset + start.length + 1, nextEqual - offset - start.length - 1);
      var _splitDelimiters = splitDelimiters(_insideTag);
      var _splitDelimiters2 = _slicedToArray(_splitDelimiters, 2);
      start = _splitDelimiters2[0];
      end = _splitDelimiters2[1];
      offset = nextEndOffset;
      continue;
    }
    indexes.push({
      offset: offset,
      position: position,
      length: len
    });
  }
}
function parseDelimiters(innerContentParts, delimiters, syntaxOptions) {
  var full = innerContentParts.map(function (p) {
    return p.value;
  }).join("");
  var delimiterMatches = getAllDelimiterIndexes(full, delimiters, syntaxOptions);
  var offset = 0;
  var ranges = innerContentParts.map(function (part) {
    offset += part.value.length;
    return {
      offset: offset - part.value.length,
      lIndex: part.lIndex
    };
  });
  var _getDelimiterErrors = getDelimiterErrors(delimiterMatches, full, syntaxOptions),
    delimiterWithErrors = _getDelimiterErrors.delimiterWithErrors,
    errors = _getDelimiterErrors.errors;
  var cutNext = 0;
  var delimiterIndex = 0;
  var parsed = ranges.map(function (p, i) {
    var offset = p.offset;
    var range = [offset, offset + innerContentParts[i].value.length];
    var partContent = innerContentParts[i].value;
    var delimitersInOffset = [];
    while (delimiterIndex < delimiterWithErrors.length && inRange(range, delimiterWithErrors[delimiterIndex])) {
      delimitersInOffset.push(delimiterWithErrors[delimiterIndex]);
      delimiterIndex++;
    }
    var parts = [];
    var cursor = 0;
    if (cutNext > 0) {
      cursor = cutNext;
      cutNext = 0;
    }
    for (var _i6 = 0; _i6 < delimitersInOffset.length; _i6++) {
      var delimiterInOffset = delimitersInOffset[_i6];
      var _value = partContent.substr(cursor, delimiterInOffset.offset - offset - cursor);
      if (delimiterInOffset.changedelimiter) {
        if (delimiterInOffset.position === "start") {
          if (_value.length > 0) {
            parts.push({
              type: "content",
              value: _value
            });
          }
        } else {
          cursor = delimiterInOffset.offset - offset + delimiterInOffset.length;
        }
        continue;
      }
      if (_value.length > 0) {
        parts.push({
          type: "content",
          value: _value
        });
        cursor += _value.length;
      }
      var delimiterPart = {
        type: "delimiter",
        position: delimiterInOffset.position,
        offset: cursor + offset
      };
      parts.push(delimiterPart);
      cursor = delimiterInOffset.offset - offset + delimiterInOffset.length;
    }
    cutNext = cursor - partContent.length;
    var value = partContent.substr(cursor);
    if (value.length > 0) {
      parts.push({
        type: "content",
        value: value
      });
    }
    return parts;
  }, this);
  return {
    parsed: parsed,
    errors: errors
  };
}
function isInsideContent(part) {
  // Stryker disable all : because the part.position === "insidetag" would be enough but we want to make the API future proof
  return part.type === "content" && part.position === "insidetag";
  // Stryker restore all
}

function getContentParts(xmlparsed) {
  return xmlparsed.filter(isInsideContent);
}
function decodeContentParts(xmlparsed, fileType) {
  var inTextTag = false;
  for (var _i8 = 0; _i8 < xmlparsed.length; _i8++) {
    var part = xmlparsed[_i8];
    inTextTag = updateInTextTag(part, inTextTag);
    if (part.type === "content") {
      part.position = inTextTag ? "insidetag" : "outsidetag";
    }
    if (fileType !== "text" && isInsideContent(part)) {
      part.value = part.value.replace(/>/g, "&gt;");
    }
  }
}
module.exports = {
  parseDelimiters: parseDelimiters,
  parse: function parse(xmllexed, delimiters, syntax, fileType) {
    decodeContentParts(xmllexed, fileType);
    var _parseDelimiters = parseDelimiters(getContentParts(xmllexed), delimiters, syntax),
      delimiterParsed = _parseDelimiters.parsed,
      errors = _parseDelimiters.errors;
    var lexed = [];
    var index = 0;
    var lIndex = 0;
    for (var _i0 = 0; _i0 < xmllexed.length; _i0++) {
      var part = xmllexed[_i0];
      if (isInsideContent(part)) {
        for (var _i10 = 0, _delimiterParsed$inde2 = delimiterParsed[index]; _i10 < _delimiterParsed$inde2.length; _i10++) {
          var p = _delimiterParsed$inde2[_i10];
          if (p.type === "content") {
            p.position = "insidetag";
          }
          p.lIndex = lIndex++;
        }
        pushArray(lexed, delimiterParsed[index]);
        index++;
      } else {
        part.lIndex = lIndex++;
        lexed.push(part);
      }
    }
    return {
      errors: errors,
      lexed: lexed
    };
  },
  xmlparse: function xmlparse(content, xmltags) {
    var matches = tagMatcher(content, xmltags.text, xmltags.other);
    var cursor = 0;
    var parsed = [];
    for (var _i12 = 0; _i12 < matches.length; _i12++) {
      var match = matches[_i12];
      if (content.length > cursor && match.offset - cursor > 0) {
        parsed.push({
          type: "content",
          value: content.substr(cursor, match.offset - cursor)
        });
      }
      cursor = match.offset + match.value.length;
      delete match.offset;
      parsed.push(match);
    }
    if (content.length > cursor) {
      parsed.push({
        type: "content",
        value: content.substr(cursor)
      });
    }
    return parsed;
  }
};

/***/ }),

/***/ 14661:
/*!*****************************************************!*\
  !*** ./node_modules/docxtemplater/js/merge-sort.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


function getMinFromArrays(arrays, state) {
  var minIndex = -1;
  for (var i = 0, l = arrays.length; i < l; i++) {
    if (state[i] >= arrays[i].length) {
      continue;
    }
    if (minIndex === -1 || arrays[i][state[i]].offset < arrays[minIndex][state[minIndex]].offset) {
      minIndex = i;
    }
  }
  return minIndex;
}
module.exports = function (arrays) {
  var totalLength = 0;
  for (var _i2 = 0, _arrays2 = arrays; _i2 < _arrays2.length; _i2++) {
    var array = _arrays2[_i2];
    totalLength += array.length;
  }
  arrays = arrays.filter(function (array) {
    return array.length > 0;
  });
  var resultArray = new Array(totalLength);
  var state = arrays.map(function () {
    return 0;
  });
  for (var i = 0; i < totalLength; i++) {
    var arrayIndex = getMinFromArrays(arrays, state);
    resultArray[i] = arrays[arrayIndex][state[arrayIndex]];
    state[arrayIndex]++;
  }
  return resultArray;
};

/***/ }),

/***/ 47900:
/*!**************************************************!*\
  !*** ./node_modules/docxtemplater/js/minizod.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var MiniZod = /*#__PURE__*/function () {
  function MiniZod() {
    _classCallCheck(this, MiniZod);
  }
  return _createClass(MiniZod, null, [{
    key: "createSchema",
    value: function createSchema(validateFn) {
      var schema = {
        validate: validateFn,
        optional: function optional() {
          return MiniZod.createSchema(function (value) {
            return value === undefined ? {
              success: true,
              value: value
            } : validateFn(value);
          });
        },
        nullable: function nullable() {
          return MiniZod.createSchema(function (value) {
            return value == null ? {
              success: true,
              value: value
            } : validateFn(value);
          });
        }
      };
      return schema;
    }
  }, {
    key: "string",
    value: function string() {
      return MiniZod.createSchema(function (value) {
        if (typeof value !== "string") {
          return {
            success: false,
            error: "Expected string, received ".concat(_typeof(value))
          };
        }
        return {
          success: true,
          value: value
        };
      });
    }
  }, {
    key: "date",
    value: function date() {
      return MiniZod.createSchema(function (value) {
        if (!(value instanceof Date)) {
          return {
            success: false,
            error: "Expected date, received ".concat(_typeof(value))
          };
        }
        return {
          success: true,
          value: value
        };
      });
    }
  }, {
    key: "boolean",
    value: function _boolean() {
      return MiniZod.createSchema(function (value) {
        if (typeof value !== "boolean") {
          return {
            success: false,
            error: "Expected boolean, received ".concat(_typeof(value))
          };
        }
        return {
          success: true,
          value: value
        };
      });
    }
  }, {
    key: "number",
    value: function number() {
      return MiniZod.createSchema(function (value) {
        if (typeof value !== "number") {
          return {
            success: false,
            error: "Expected number, received ".concat(_typeof(value))
          };
        }
        return {
          success: true,
          value: value
        };
      });
    }
  }, {
    key: "function",
    value: function _function() {
      return MiniZod.createSchema(function (value) {
        if (typeof value !== "function") {
          return {
            success: false,
            error: "Expected function, received ".concat(_typeof(value))
          };
        }
        return {
          success: true,
          value: value
        };
      });
    }
  }, {
    key: "array",
    value: function array(itemSchema) {
      return MiniZod.createSchema(function (value) {
        if (!Array.isArray(value)) {
          return {
            success: false,
            error: "Expected array, received ".concat(_typeof(value))
          };
        }
        for (var i = 0; i < value.length; i++) {
          var result = itemSchema.validate(value[i]);
          if (!result.success) {
            return {
              success: false,
              error: "".concat(result.error, " at index ").concat(i)
            };
          }
        }
        return {
          success: true,
          value: value
        };
      });
    }
  }, {
    key: "any",
    value: function any() {
      return MiniZod.createSchema(function (value) {
        return {
          success: true,
          value: value
        };
      });
    }
  }, {
    key: "isRegex",
    value: function isRegex() {
      return MiniZod.createSchema(function (value) {
        if (!(value instanceof RegExp)) {
          return {
            success: false,
            error: "Expected RegExp, received ".concat(_typeof(value))
          };
        }
        return {
          success: true,
          value: value
        };
      });
    }
  }, {
    key: "union",
    value: function union(schemas) {
      return MiniZod.createSchema(function (value) {
        for (var _i2 = 0; _i2 < schemas.length; _i2++) {
          var s = schemas[_i2];
          var result = s.validate(value);
          if (result.success) {
            return result;
          }
        }
        return {
          success: false,
          error: "Value ".concat(value, " does not match any schema in union")
        };
      });
    }
  }, {
    key: "object",
    value: function object(shape) {
      var schema = MiniZod.createSchema(function (value) {
        if (value == null) {
          return {
            success: false,
            error: "Expected object, received ".concat(value)
          };
        }
        if (_typeof(value) !== "object") {
          return {
            success: false,
            error: "Expected object, received ".concat(_typeof(value))
          };
        }
        for (var _i4 = 0, _Object$entries2 = Object.entries(shape); _i4 < _Object$entries2.length; _i4++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 2),
            key = _Object$entries2$_i[0],
            validator = _Object$entries2$_i[1];
          var result = validator.validate(value[key]);
          if (!result.success) {
            return {
              success: false,
              error: "".concat(result.error, " at ").concat(key)
            };
          }
        }
        return {
          success: true,
          value: value
        };
      });
      schema.strict = function () {
        return MiniZod.createSchema(function (value) {
          var baseResult = schema.validate(value);
          if (!baseResult.success) {
            return baseResult;
          }
          var extraKeys = Object.keys(value).filter(function (key) {
            return !(key in shape);
          });
          if (extraKeys.length > 0) {
            return {
              success: false,
              error: "Unexpected properties: ".concat(extraKeys.join(", "))
            };
          }
          return baseResult;
        });
      };
      return schema;
    }
  }, {
    key: "record",
    value: function record(valueSchema) {
      return MiniZod.createSchema(function (value) {
        if (value === null) {
          return {
            success: false,
            error: "Expected object, received null"
          };
        }
        if (_typeof(value) !== "object") {
          return {
            success: false,
            error: "Expected object, received ".concat(_typeof(value))
          };
        }
        for (var _i6 = 0, _Object$keys2 = Object.keys(value); _i6 < _Object$keys2.length; _i6++) {
          var key = _Object$keys2[_i6];
          if (typeof key !== "string") {
            return {
              success: false,
              error: "Expected string key, received ".concat(_typeof(key), " at ").concat(key)
            };
          }
          var result = valueSchema.validate(value[key]);
          if (!result.success) {
            return {
              success: false,
              error: "".concat(result.error, " at key ").concat(key)
            };
          }
        }
        return {
          success: true,
          value: value
        };
      });
    }
  }]);
}();
module.exports = MiniZod;

/***/ }),

/***/ 43084:
/*!*********************************************************!*\
  !*** ./node_modules/docxtemplater/js/module-wrapper.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./errors.js */ 57629),
  XTInternalError = _require.XTInternalError;
function emptyFun() {}
function identity(i) {
  return i;
}
module.exports = function (module) {
  var defaults = {
    on: emptyFun,
    set: emptyFun,
    getFileType: emptyFun,
    optionsTransformer: identity,
    preparse: identity,
    matchers: function matchers() {
      return [];
    },
    parse: emptyFun,
    getTraits: emptyFun,
    postparse: identity,
    errorsTransformer: identity,
    preResolve: emptyFun,
    resolve: emptyFun,
    getRenderedMap: identity,
    render: emptyFun,
    nullGetter: emptyFun,
    postrender: identity
  };
  if (Object.keys(defaults).every(function (key) {
    return !module[key];
  })) {
    var err = new XTInternalError("This module cannot be wrapped, because it doesn't define any of the necessary functions");
    err.properties = {
      id: "module_cannot_be_wrapped",
      explanation: "This module cannot be wrapped, because it doesn't define any of the necessary functions"
    };
    throw err;
  }
  for (var key in defaults) {
    module[key] || (module[key] = defaults[key]);
  }
  return module;
};

/***/ }),

/***/ 63389:
/*!*********************************************************!*\
  !*** ./node_modules/docxtemplater/js/modules/common.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _require = __webpack_require__(/*! ../doc-utils.js */ 24418),
  pushArray = _require.pushArray;
var wrapper = __webpack_require__(/*! ../module-wrapper.js */ 43084);
var filetypes = __webpack_require__(/*! ../filetypes.js */ 57747);
var _require2 = __webpack_require__(/*! ../content-types.js */ 66497),
  settingsContentType = _require2.settingsContentType,
  coreContentType = _require2.coreContentType,
  appContentType = _require2.appContentType,
  customContentType = _require2.customContentType,
  diagramDataContentType = _require2.diagramDataContentType,
  diagramDrawingContentType = _require2.diagramDrawingContentType;
var commonContentTypes = [settingsContentType, coreContentType, appContentType, customContentType, diagramDataContentType, diagramDrawingContentType];
var Common = /*#__PURE__*/function () {
  function Common() {
    _classCallCheck(this, Common);
    this.name = "Common";
  }
  return _createClass(Common, [{
    key: "getFileType",
    value: function getFileType(_ref) {
      var doc = _ref.doc;
      var invertedContentTypes = doc.invertedContentTypes;
      if (!invertedContentTypes) {
        return;
      }
      for (var _i2 = 0; _i2 < commonContentTypes.length; _i2++) {
        var ct = commonContentTypes[_i2];
        if (invertedContentTypes[ct]) {
          pushArray(doc.targets, invertedContentTypes[ct]);
        }
      }
      var keys = ["docx", "pptx", "xlsx"];
      var ftCandidate;
      for (var _i4 = 0; _i4 < keys.length; _i4++) {
        var key = keys[_i4];
        var contentTypes = filetypes[key];
        for (var _i6 = 0; _i6 < contentTypes.length; _i6++) {
          var _ct = contentTypes[_i6];
          if (invertedContentTypes[_ct]) {
            for (var _i8 = 0, _invertedContentTypes2 = invertedContentTypes[_ct]; _i8 < _invertedContentTypes2.length; _i8++) {
              var target = _invertedContentTypes2[_i8];
              if (doc.relsTypes[target] && ["http://purl.oclc.org/ooxml/officeDocument/relationships/officeDocument", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"].indexOf(doc.relsTypes[target]) === -1) {
                continue;
              }
              ftCandidate = key;
              if (filetypes.main.indexOf(_ct) !== -1 || _ct === filetypes.pptx[0]) {
                doc.textTarget || (doc.textTarget = target);
              }
              if (ftCandidate === "xlsx") {
                continue;
              }
              doc.targets.push(target);
            }
          }
        }
        if (ftCandidate) {
          continue;
        }
      }
      return ftCandidate;
    }
  }]);
}();
module.exports = function () {
  return wrapper(new Common());
};

/***/ }),

/***/ 76600:
/*!********************************************************************!*\
  !*** ./node_modules/docxtemplater/js/modules/expand-pair-trait.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var traitName = "expandPair";
var mergeSort = __webpack_require__(/*! ../merge-sort.js */ 14661);
var _require = __webpack_require__(/*! ../doc-utils.js */ 24418),
  getLeft = _require.getLeft,
  getRight = _require.getRight,
  pushArray = _require.pushArray;
var wrapper = __webpack_require__(/*! ../module-wrapper.js */ 43084);
var _require2 = __webpack_require__(/*! ../traits.js */ 89507),
  getExpandToDefault = _require2.getExpandToDefault;
var _require3 = __webpack_require__(/*! ../errors.js */ 57629),
  getUnmatchedLoopException = _require3.getUnmatchedLoopException,
  getClosingTagNotMatchOpeningTag = _require3.getClosingTagNotMatchOpeningTag,
  getUnbalancedLoopException = _require3.getUnbalancedLoopException;
function getOpenCountChange(part) {
  switch (part.location) {
    case "start":
      return 1;
    case "end":
      return -1;
  }
}
function match(start, end) {
  return start != null && end != null && (start.part.location === "start" && end.part.location === "end" && start.part.value === end.part.value || end.part.value === "");
}
function transformer(traits) {
  var i = 0;
  var errors = [];
  while (i < traits.length) {
    var part = traits[i].part;
    if (part.location === "end") {
      if (i === 0) {
        traits.splice(0, 1);
        errors.push(getUnmatchedLoopException(part));
        return {
          traits: traits,
          errors: errors
        };
      }
      var endIndex = i;
      var startIndex = i - 1;
      var offseter = 1;
      if (match(traits[startIndex], traits[endIndex])) {
        traits.splice(endIndex, 1);
        traits.splice(startIndex, 1);
        return {
          errors: errors,
          traits: traits
        };
      }
      while (offseter < 50) {
        var startCandidate = traits[startIndex - offseter];
        var endCandidate = traits[endIndex + offseter];
        if (match(startCandidate, traits[endIndex])) {
          traits.splice(endIndex, 1);
          traits.splice(startIndex - offseter, 1);
          return {
            errors: errors,
            traits: traits
          };
        }
        if (match(traits[startIndex], endCandidate)) {
          traits.splice(endIndex + offseter, 1);
          traits.splice(startIndex, 1);
          return {
            errors: errors,
            traits: traits
          };
        }
        offseter++;
      }
      errors.push(getClosingTagNotMatchOpeningTag({
        tags: [traits[startIndex].part, traits[endIndex].part]
      }));
      traits.splice(endIndex, 1);
      traits.splice(startIndex, 1);
      return {
        traits: traits,
        errors: errors
      };
    }
    i++;
  }
  for (var _i2 = 0; _i2 < traits.length; _i2++) {
    var _part = traits[_i2].part;
    errors.push(getUnmatchedLoopException(_part));
  }
  return {
    traits: [],
    errors: errors
  };
}
function getPairs(traits) {
  var levelTraits = {};
  var errors = [];
  var pairs = [];
  var transformedTraits = [];
  pushArray(transformedTraits, traits);
  while (transformedTraits.length > 0) {
    var result = transformer(transformedTraits);
    pushArray(errors, result.errors);
    transformedTraits = result.traits;
  }

  // Stryker disable all : because this check makes the function return quicker
  if (errors.length > 0) {
    return {
      pairs: pairs,
      errors: errors
    };
  }
  // Stryker restore all
  var countOpen = 0;
  for (var _i4 = 0; _i4 < traits.length; _i4++) {
    var currentTrait = traits[_i4];
    var part = currentTrait.part;
    var change = getOpenCountChange(part);
    countOpen += change;
    if (change === 1) {
      levelTraits[countOpen] = currentTrait;
    } else {
      var startTrait = levelTraits[countOpen + 1];
      if (countOpen === 0) {
        pairs.push([startTrait, currentTrait]);
      }
    }
    countOpen = countOpen >= 0 ? countOpen : 0;
  }
  return {
    pairs: pairs,
    errors: errors
  };
}
var ExpandPairTrait = /*#__PURE__*/function () {
  function ExpandPairTrait() {
    _classCallCheck(this, ExpandPairTrait);
    this.name = "ExpandPairTrait";
  }
  return _createClass(ExpandPairTrait, [{
    key: "optionsTransformer",
    value: function optionsTransformer(options, docxtemplater) {
      if (docxtemplater.options.paragraphLoop) {
        pushArray(docxtemplater.fileTypeConfig.expandTags, docxtemplater.fileTypeConfig.onParagraphLoop);
      }
      this.expandTags = docxtemplater.fileTypeConfig.expandTags;
      return options;
    }
  }, {
    key: "postparse",
    value: function postparse(postparsed, options) {
      var _this = this;
      var getTraits = options.getTraits,
        postparse = options.postparse,
        fileType = options.fileType;
      var traits = getTraits(traitName, postparsed, options);
      traits = traits.map(function (trait) {
        return trait || [];
      });
      traits = mergeSort(traits);
      var _getPairs = getPairs(traits),
        pairs = _getPairs.pairs,
        errors = _getPairs.errors;
      var lastRight = 0;
      var lastPair = null;
      var expandedPairs = pairs.map(function (pair) {
        var expandTo = pair[0].part.expandTo;
        if (expandTo === "auto" && fileType !== "text") {
          var result = getExpandToDefault(postparsed, pair, _this.expandTags);
          if (result.error) {
            errors.push(result.error);
          }
          expandTo = result.value;
        }
        if (!expandTo || fileType === "text") {
          var _left = pair[0].offset;
          var _right = pair[1].offset;
          if (_left < lastRight && !_this.docxtemplater.options.syntax.allowUnbalancedLoops) {
            errors.push(getUnbalancedLoopException(pair, lastPair));
          }
          lastPair = pair;
          lastRight = _right;
          return [_left, _right];
        }
        var left, right;
        try {
          left = getLeft(postparsed, expandTo, pair[0].offset);
        } catch (e) {
          errors.push(e);
        }
        try {
          right = getRight(postparsed, expandTo, pair[1].offset);
        } catch (e) {
          errors.push(e);
        }
        if (left < lastRight && !_this.docxtemplater.options.syntax.allowUnbalancedLoops) {
          errors.push(getUnbalancedLoopException(pair, lastPair));
        }
        lastRight = right;
        lastPair = pair;
        return [left, right];
      });

      // Stryker disable all : because this check makes the function return quicker
      if (errors.length > 0) {
        return {
          postparsed: postparsed,
          errors: errors
        };
      }
      // Stryker restore all
      var currentPairIndex = 0;
      var innerParts;
      var newParsed = postparsed.reduce(function (newParsed, part, i) {
        var inPair = currentPairIndex < pairs.length && expandedPairs[currentPairIndex][0] <= i && i <= expandedPairs[currentPairIndex][1];
        var pair = pairs[currentPairIndex];
        var expandedPair = expandedPairs[currentPairIndex];
        if (!inPair) {
          newParsed.push(part);
          return newParsed;
        }
        // We're inside the pair
        if (expandedPair[0] === i) {
          // Start pair
          innerParts = [];
        }
        if (pair[0].offset !== i && pair[1].offset !== i) {
          // Exclude inner pair indexes
          innerParts.push(part);
        }
        if (expandedPair[1] === i) {
          // End pair
          var basePart = postparsed[pair[0].offset];
          basePart.subparsed = postparse(innerParts, {
            basePart: basePart
          });
          basePart.endLindex = pair[1].part.lIndex;
          delete basePart.location;
          delete basePart.expandTo;
          newParsed.push(basePart);
          currentPairIndex++;
          var _expandedPair = expandedPairs[currentPairIndex];
          while (_expandedPair && _expandedPair[0] < i) {
            /*
             * If we have :
             * expandedPairs =[[5,72],[51,67],[90,106]]
             * Then after treating [5,72], we need to treat [90,106]
             * Fixed since v3.58.4
             */
            currentPairIndex++;
            _expandedPair = expandedPairs[currentPairIndex];
          }
        }
        return newParsed;
      }, []);
      return {
        postparsed: newParsed,
        errors: errors
      };
    }
  }]);
}();
module.exports = function () {
  return wrapper(new ExpandPairTrait());
};

/***/ }),

/***/ 10978:
/*!*******************************************************!*\
  !*** ./node_modules/docxtemplater/js/modules/loop.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _require = __webpack_require__(/*! ../doc-utils.js */ 24418),
  chunkBy = _require.chunkBy,
  last = _require.last,
  isParagraphStart = _require.isParagraphStart,
  isModule = _require.isModule,
  pushArray = _require.pushArray,
  isParagraphEnd = _require.isParagraphEnd,
  isContent = _require.isContent,
  startsWith = _require.startsWith,
  isTagEnd = _require.isTagEnd,
  isTagStart = _require.isTagStart,
  getSingleAttribute = _require.getSingleAttribute,
  setSingleAttribute = _require.setSingleAttribute;
var filetypes = __webpack_require__(/*! ../filetypes.js */ 57747);
var wrapper = __webpack_require__(/*! ../module-wrapper.js */ 43084);
var moduleName = "loop";
function hasContent(parts) {
  for (var _i2 = 0; _i2 < parts.length; _i2++) {
    var part = parts[_i2];
    if (isContent(part)) {
      return true;
    }
  }
  return false;
}
function getFirstMeaningFulPart(parsed) {
  for (var _i4 = 0; _i4 < parsed.length; _i4++) {
    var part = parsed[_i4];
    if (part.type !== "content") {
      return part;
    }
  }
  return null;
}
function isInsideParagraphLoop(part) {
  var firstMeaningfulPart = getFirstMeaningFulPart(part.subparsed);
  return firstMeaningfulPart != null && firstMeaningfulPart.tag !== "w:t";
}
function getPageBreakIfApplies(part) {
  return part.hasPageBreak && isInsideParagraphLoop(part) ? '<w:p><w:r><w:br w:type="page"/></w:r></w:p>' : "";
}
function isEnclosedByParagraphs(parsed) {
  return parsed.length && isParagraphStart(parsed[0]) && isParagraphEnd(last(parsed));
}
function getOffset(chunk) {
  return hasContent(chunk) ? 0 : chunk.length;
}
function addPageBreakAtEnd(subRendered) {
  var j = subRendered.parts.length - 1;
  if (subRendered.parts[j] === "</w:p>") {
    subRendered.parts.splice(j, 0, '<w:r><w:br w:type="page"/></w:r>');
  } else {
    subRendered.parts.push('<w:p><w:r><w:br w:type="page"/></w:r></w:p>');
  }
}
function addPageBreakAtBeginning(subRendered) {
  subRendered.parts.unshift('<w:p><w:r><w:br w:type="page"/></w:r></w:p>');
}
function isContinuous(parts) {
  for (var _i6 = 0; _i6 < parts.length; _i6++) {
    var part = parts[_i6];
    if (isTagStart("w:type", part) && part.value.indexOf("continuous") !== -1) {
      return true;
    }
  }
  return false;
}
function isNextPage(parts) {
  for (var _i8 = 0; _i8 < parts.length; _i8++) {
    var part = parts[_i8];
    if (isTagStart("w:type", part) && part.value.indexOf('w:val="nextPage"') !== -1) {
      return true;
    }
  }
  return false;
}
function addSectionBefore(parts, sect) {
  parts.unshift("<w:p><w:pPr>".concat(sect.map(function (_ref) {
    var value = _ref.value;
    return value;
  }).join(""), "</w:pPr></w:p>"));
}
function addContinuousType(parts) {
  var stop = false;
  var inSectPr = false;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (!stop && startsWith(part, "<w:sectPr")) {
      inSectPr = true;
    }
    if (inSectPr) {
      if (startsWith(part, "<w:type")) {
        stop = true;
      }
      if (!stop && startsWith(part, "</w:sectPr")) {
        parts.splice(i, 0, '<w:type w:val="continuous"/>');
        i++; // Skip re-processing the now-shifted closing tag to avoid infinite insertion
      }
    }
  }

  return parts;
}
function dropHeaderFooterRefs(parts) {
  var writeIndex = 0;
  for (var readIndex = 0; readIndex < parts.length; readIndex++) {
    if (!startsWith(parts[readIndex], "<w:headerReference") && !startsWith(parts[readIndex], "<w:footerReference")) {
      parts[writeIndex] = parts[readIndex];
      writeIndex++;
    }
  }
  parts.length = writeIndex;
  return parts;
}
function hasPageBreak(chunk) {
  for (var _i0 = 0; _i0 < chunk.length; _i0++) {
    var part = chunk[_i0];
    if (part.tag === "w:br" && part.value.indexOf('w:type="page"') !== -1) {
      return true;
    }
  }
  return false;
}
function hasImage(chunk) {
  for (var _i10 = 0; _i10 < chunk.length; _i10++) {
    var el = chunk[_i10];
    if (el.tag === "w:drawing") {
      return true;
    }
  }
  return false;
}
function getSectPr(chunks) {
  var sectPrs = [];
  var currentSectPr = null;
  for (var _i12 = 0; _i12 < chunks.length; _i12++) {
    var part = chunks[_i12];
    if (isTagStart("w:sectPr", part)) {
      currentSectPr = [];
      sectPrs.push(currentSectPr);
    }
    if (currentSectPr !== null) {
      currentSectPr.push(part);
    }
    if (isTagEnd("w:sectPr", part)) {
      currentSectPr = null;
    }
  }
  return sectPrs;
}
function getSectPrHeaderFooterChangeCount(chunks) {
  var collectSectPr = false;
  var sectPrCount = 0;
  for (var _i14 = 0; _i14 < chunks.length; _i14++) {
    var part = chunks[_i14];
    if (isTagStart("w:sectPr", part)) {
      collectSectPr = true;
    }
    if (collectSectPr) {
      if (part.tag === "w:headerReference" || part.tag === "w:footerReference") {
        sectPrCount++;
        collectSectPr = false;
      }
    }
    if (isTagEnd("w:sectPr", part)) {
      collectSectPr = false;
    }
  }
  return sectPrCount;
}
function getLastSectPr(parsed) {
  var sectPr = [];
  var inSectPr = false;
  for (var i = parsed.length - 1; i >= 0; i--) {
    var part = parsed[i];

    /*
     * Since we try to get the last sectPr, we traverse the parsed array
     * from the end to beginning, this is why inSectPr becomes true when we
     * we see a </w:sectPr> closing tag
     */
    if (isTagEnd("w:sectPr", part)) {
      inSectPr = true;
    }
    if (isTagStart("w:sectPr", part)) {
      sectPr.unshift(part.value);
      inSectPr = false;
    }
    if (inSectPr) {
      sectPr.unshift(part.value);
    }
    if (isParagraphStart(part)) {
      if (sectPr.length > 0) {
        return sectPr.join("");
      }
      break;
    }
  }
  return "";
}
var LoopModule = /*#__PURE__*/function () {
  function LoopModule() {
    _classCallCheck(this, LoopModule);
    this.name = "LoopModule";
    this.inXfrm = false;
    this.totalSectPr = 0;
    this.prefix = {
      start: "#",
      end: "/",
      dash: /^-([^\s]+)\s(.+)/,
      inverted: "^"
    };
  }
  return _createClass(LoopModule, [{
    key: "optionsTransformer",
    value: function optionsTransformer(opts, docxtemplater) {
      this.docxtemplater = docxtemplater;
      return opts;
    }
  }, {
    key: "preparse",
    value: function preparse(parsed, _ref2) {
      var contentType = _ref2.contentType;
      if (filetypes.main.indexOf(contentType) !== -1) {
        this.sects = getSectPr(parsed);
      }
    }
  }, {
    key: "matchers",
    value: function matchers() {
      var module = moduleName;
      return [[this.prefix.start, module, {
        expandTo: "auto",
        location: "start",
        inverted: false
      }], [this.prefix.inverted, module, {
        expandTo: "auto",
        location: "start",
        inverted: true
      }], [this.prefix.end, module, {
        location: "end"
      }], [this.prefix.dash, module, function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 3),
          expandTo = _ref4[1],
          value = _ref4[2];
        return {
          location: "start",
          inverted: false,
          expandTo: expandTo,
          value: value
        };
      }]];
    }
  }, {
    key: "getTraits",
    value: function getTraits(traitName, parsed) {
      // Stryker disable all : because getTraits should disappear in v4
      if (traitName !== "expandPair") {
        return;
      }
      // Stryker restore all

      var tags = [];
      for (var offset = 0, len = parsed.length; offset < len; offset++) {
        var part = parsed[offset];
        if (isModule(part, moduleName) && part.subparsed == null) {
          tags.push({
            part: part,
            offset: offset
          });
        }
      }
      return tags;
    }

    /* eslint-disable-next-line complexity */
  }, {
    key: "postparse",
    value: function postparse(parsed, _ref5) {
      var basePart = _ref5.basePart;
      if (basePart && this.docxtemplater.fileType === "docx" && parsed.length > 0) {
        basePart.sectPrCount = getSectPrHeaderFooterChangeCount(parsed);
        this.totalSectPr += basePart.sectPrCount;
        var sects = this.sects;
        for (var index = 0, len = sects.length; index < len; index++) {
          var sect = sects[index];
          if (basePart.lIndex < sect[0].lIndex) {
            if (index + 1 < sects.length && isContinuous(sects[index + 1])) {
              basePart.addContinuousType = true;
            }
            break;
          }
          if (parsed[0].lIndex < sect[0].lIndex && sect[0].lIndex < basePart.lIndex) {
            if (isNextPage(sects[index])) {
              basePart.addNextPage = {
                index: index
              };
            }
            break;
          }
        }
        basePart.lastParagrapSectPr = getLastSectPr(parsed);
      }
      if (!basePart || basePart.expandTo !== "auto" || basePart.module !== moduleName || !isEnclosedByParagraphs(parsed)) {
        return parsed;
      }
      basePart.paragraphLoop = true;
      var level = 0;
      var chunks = chunkBy(parsed, function (p) {
        if (isParagraphStart(p)) {
          level++;
          if (level === 1) {
            return "start";
          }
        }
        if (isParagraphEnd(p)) {
          level--;
          if (level === 0) {
            return "end";
          }
        }
        return null;
      });
      var firstChunk = chunks[0];
      var lastChunk = last(chunks);
      var firstOffset = getOffset(firstChunk);
      var lastOffset = getOffset(lastChunk);
      basePart.hasPageBreakBeginning = hasPageBreak(firstChunk);
      basePart.hasPageBreak = hasPageBreak(lastChunk);
      if (hasImage(firstChunk)) {
        firstOffset = 0;
      }
      if (hasImage(lastChunk)) {
        lastOffset = 0;
      }
      return parsed.slice(firstOffset, parsed.length - lastOffset);
    }
  }, {
    key: "resolve",
    value: function resolve(part, options) {
      var self = this;
      if (!isModule(part, moduleName)) {
        return null;
      }
      var sm = options.scopeManager;
      var promisedValue = sm.getValueAsync(part.value, {
        part: part
      });
      var promises = [];
      var lastPromise;
      if (self.resolveSerially) {
        lastPromise = Promise.resolve(null);
      }
      function loopOver(scope, i, length) {
        var scopeManager = sm.createSubScopeManager(scope, part.value, i, part, length);
        if (self.resolveSerially) {
          lastPromise = lastPromise.then(function () {
            return options.resolve(_objectSpread(_objectSpread({}, options), {}, {
              compiled: part.subparsed,
              tags: {},
              scopeManager: scopeManager
            }));
          });
          promises.push(lastPromise);
        } else {
          promises.push(options.resolve(_objectSpread(_objectSpread({}, options), {}, {
            compiled: part.subparsed,
            tags: {},
            scopeManager: scopeManager
          })));
        }
      }
      var errorList = [];
      return promisedValue.then(function (values) {
        values !== null && values !== void 0 ? values : values = options.nullGetter(part);
        if (values instanceof Promise) {
          return values.then(function (values) {
            if (values instanceof Array) {
              return Promise.all(values);
            }
            return values;
          });
        }
        if (values instanceof Array) {
          return Promise.all(values);
        }
        return values;
      }).then(function (values) {
        sm.loopOverValue(values, loopOver, part.inverted);
        return Promise.all(promises).then(function (r) {
          return r.map(function (_ref6) {
            var resolved = _ref6.resolved,
              errors = _ref6.errors;
            pushArray(errorList, errors);
            return resolved;
          });
        }).then(function (value) {
          if (errorList.length > 0) {
            throw errorList;
          }
          return value;
        });
      });
    }
  }, {
    key: "render",
    value: function render(part, options) {
      var self = this;
      if (part.tag === "p:xfrm") {
        self.inXfrm = part.position === "start";
      }
      if (part.tag === "a:ext" && self.inXfrm) {
        self.lastExt = part;
        return part;
      }
      if (!isModule(part, moduleName)) {
        return null;
      }
      var totalValue = [];
      var errors = [];
      var heightOffset = 0;
      var firstTag = part.subparsed[0];
      var tagHeight = 0;
      if ((firstTag === null || firstTag === void 0 ? void 0 : firstTag.tag) === "a:tr") {
        tagHeight = +getSingleAttribute(firstTag.value, "h");
      }
      heightOffset -= tagHeight;
      var a16RowIdOffset = 0;
      var insideParagraphLoop = isInsideParagraphLoop(part);
      function loopOver(scope, i, length) {
        heightOffset += tagHeight;
        var scopeManager = options.scopeManager.createSubScopeManager(scope, part.value, i, part, length);
        for (var _i16 = 0, _part$subparsed2 = part.subparsed; _i16 < _part$subparsed2.length; _i16++) {
          var pp = _part$subparsed2[_i16];
          if (isTagStart("a16:rowId", pp)) {
            var val = +getSingleAttribute(pp.value, "val") + a16RowIdOffset;
            a16RowIdOffset = 1;
            pp.value = setSingleAttribute(pp.value, "val", val);
          }
        }
        var subRendered = options.render(_objectSpread(_objectSpread({}, options), {}, {
          compiled: part.subparsed,
          tags: {},
          scopeManager: scopeManager
        }));
        if (part.hasPageBreak && i === length - 1 && insideParagraphLoop) {
          addPageBreakAtEnd(subRendered);
        }
        var isNotFirst = scopeManager.scopePathItem.some(function (i) {
          return i !== 0;
        });
        if (isNotFirst) {
          if (part.sectPrCount === 1) {
            subRendered.parts = dropHeaderFooterRefs(subRendered.parts);
          }
          if (part.addContinuousType) {
            subRendered.parts = addContinuousType(subRendered.parts);
          }
        } else if (part.addNextPage) {
          addSectionBefore(subRendered.parts, self.sects[part.addNextPage.index]);
        }
        if (part.addNextPage) {
          addPageBreakAtEnd(subRendered);
        }
        if (part.hasPageBreakBeginning && insideParagraphLoop) {
          addPageBreakAtBeginning(subRendered);
        }
        for (var _i18 = 0, _subRendered$parts2 = subRendered.parts; _i18 < _subRendered$parts2.length; _i18++) {
          var _val = _subRendered$parts2[_i18];
          totalValue.push(_val);
        }
        pushArray(errors, subRendered.errors);
      }
      var value = options.scopeManager.getValue(part.value, {
        part: part
      });
      value !== null && value !== void 0 ? value : value = options.nullGetter(part);
      var result = options.scopeManager.loopOverValue(value, loopOver, part.inverted);
      // if the loop is showing empty content
      if (result === false) {
        if (part.lastParagrapSectPr) {
          if (part.paragraphLoop) {
            return {
              value: "<w:p><w:pPr>".concat(part.lastParagrapSectPr, "</w:pPr></w:p>")
            };
          }
          return {
            value: "</w:t></w:r></w:p><w:p><w:pPr>".concat(part.lastParagrapSectPr, "</w:pPr><w:r><w:t>")
          };
        }
        return {
          value: getPageBreakIfApplies(part) || "",
          errors: errors
        };
      }
      if (heightOffset !== 0) {
        var cy = +getSingleAttribute(self.lastExt.value, "cy");
        /*
         * We do edit the value of a previous result here
         * #edit-value-backwards
         */
        self.lastExt.value = setSingleAttribute(self.lastExt.value, "cy", cy + heightOffset);
      }
      return {
        value: options.joinUncorrupt(totalValue, _objectSpread(_objectSpread({}, options), {}, {
          basePart: part
        })),
        errors: errors
      };
    }
  }]);
}();
module.exports = function () {
  return wrapper(new LoopModule());
};

/***/ }),

/***/ 21727:
/*!*********************************************************!*\
  !*** ./node_modules/docxtemplater/js/modules/rawxml.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var traits = __webpack_require__(/*! ../traits.js */ 89507);
var _require = __webpack_require__(/*! ../doc-utils.js */ 24418),
  isContent = _require.isContent;
var _require2 = __webpack_require__(/*! ../errors.js */ 57629),
  throwRawTagShouldBeOnlyTextInParagraph = _require2.throwRawTagShouldBeOnlyTextInParagraph,
  getInvalidRawXMLValueException = _require2.getInvalidRawXMLValueException;
var wrapper = __webpack_require__(/*! ../module-wrapper.js */ 43084);
var moduleName = "rawxml";
function getInner(_ref) {
  var part = _ref.part,
    left = _ref.left,
    right = _ref.right,
    postparsed = _ref.postparsed,
    index = _ref.index;
  var paragraphParts = postparsed.slice(left + 1, right);
  for (var i = 0, len = paragraphParts.length; i < len; i++) {
    if (i === index - left - 1) {
      continue;
    }
    var p = paragraphParts[i];
    if (isContent(p)) {
      throwRawTagShouldBeOnlyTextInParagraph({
        paragraphParts: paragraphParts,
        part: part
      });
    }
  }
  return part;
}
var RawXmlModule = /*#__PURE__*/function () {
  function RawXmlModule() {
    _classCallCheck(this, RawXmlModule);
    this.name = "RawXmlModule";
    this.prefix = "@";
  }
  return _createClass(RawXmlModule, [{
    key: "optionsTransformer",
    value: function optionsTransformer(options, docxtemplater) {
      this.fileTypeConfig = docxtemplater.fileTypeConfig;
      return options;
    }
  }, {
    key: "matchers",
    value: function matchers() {
      return [[this.prefix, moduleName]];
    }
  }, {
    key: "postparse",
    value: function postparse(postparsed) {
      return traits.expandToOne(postparsed, {
        moduleName: moduleName,
        getInner: getInner,
        expandTo: this.fileTypeConfig.tagRawXml,
        error: {
          message: "Raw tag not in paragraph",
          id: "raw_tag_outerxml_invalid",
          explanation: function explanation(part) {
            return "The tag \"".concat(part.value, "\" is not inside a paragraph, putting raw tags inside an inline loop is disallowed.");
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render(part, options) {
      if (part.module !== moduleName) {
        return null;
      }
      var value;
      var errors = [];
      try {
        value = options.scopeManager.getValue(part.value, {
          part: part
        });
        value !== null && value !== void 0 ? value : value = options.nullGetter(part);
      } catch (e) {
        errors.push(e);
        return {
          errors: errors
        };
      }
      value = value ? value : "";
      if (typeof value === "string") {
        return {
          value: value
        };
      }
      return {
        errors: [getInvalidRawXMLValueException({
          tag: part.value,
          value: value,
          offset: part.offset
        })]
      };
    }
  }]);
}();
module.exports = function () {
  return wrapper(new RawXmlModule());
};

/***/ }),

/***/ 47540:
/*!*********************************************************!*\
  !*** ./node_modules/docxtemplater/js/modules/render.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var wrapper = __webpack_require__(/*! ../module-wrapper.js */ 43084);
var _require = __webpack_require__(/*! ../errors.js */ 57629),
  getScopeCompilationError = _require.getScopeCompilationError,
  getCorruptCharactersException = _require.getCorruptCharactersException;
var _require2 = __webpack_require__(/*! ../doc-utils.js */ 24418),
  utf8ToWord = _require2.utf8ToWord,
  hasCorruptCharacters = _require2.hasCorruptCharacters,
  removeCorruptCharacters = _require2.removeCorruptCharacters;
var _require3 = __webpack_require__(/*! ../content-types.js */ 66497),
  settingsContentType = _require3.settingsContentType,
  coreContentType = _require3.coreContentType,
  appContentType = _require3.appContentType,
  customContentType = _require3.customContentType;
var NON_LINE_BREAKS_CONTENT_TYPE = [settingsContentType, coreContentType, appContentType, customContentType];
var ftprefix = {
  docx: "w",
  pptx: "a"
};
var Render = /*#__PURE__*/function () {
  function Render() {
    _classCallCheck(this, Render);
    this.name = "Render";
    this.recordRun = false;
    this.recordedRun = [];
  }
  return _createClass(Render, [{
    key: "set",
    value: function set(obj) {
      if (obj.compiled) {
        this.compiled = obj.compiled;
      }
      if (obj.data != null) {
        this.data = obj.data;
      }
    }
  }, {
    key: "optionsTransformer",
    value: function optionsTransformer(options, docxtemplater) {
      this.docxtemplater = docxtemplater;
      this.brTag = docxtemplater.fileType === "docx" ? "<w:r><w:br/></w:r>" : "<a:br/>";
      this.prefix = ftprefix[docxtemplater.fileType];
      this.runStartTag = "".concat(this.prefix, ":r");
      this.runPropsStartTag = "".concat(this.prefix, ":rPr");
      return options;
    }
  }, {
    key: "postparse",
    value: function postparse(postparsed, options) {
      var errors = [];
      for (var _i2 = 0; _i2 < postparsed.length; _i2++) {
        var p = postparsed[_i2];
        if (p.type === "placeholder") {
          var tag = p.value;
          try {
            options.cachedParsers[p.lIndex] = this.docxtemplater.parser(tag, {
              tag: p
            });
          } catch (rootError) {
            errors.push(getScopeCompilationError({
              tag: tag,
              rootError: rootError,
              offset: p.offset
            }));
          }
        }
      }
      return {
        postparsed: postparsed,
        errors: errors
      };
    }
  }, {
    key: "getRenderedMap",
    value: function getRenderedMap(mapper) {
      for (var from in this.compiled) {
        mapper[from] = {
          from: from,
          data: this.data
        };
      }
      return mapper;
    }
  }, {
    key: "render",
    value: function render(part, _ref) {
      var contentType = _ref.contentType,
        scopeManager = _ref.scopeManager,
        linebreaks = _ref.linebreaks,
        nullGetter = _ref.nullGetter,
        fileType = _ref.fileType,
        stripInvalidXMLChars = _ref.stripInvalidXMLChars;
      if (NON_LINE_BREAKS_CONTENT_TYPE.indexOf(contentType) !== -1) {
        // Fixes issue tested in #docprops-linebreak
        linebreaks = false;
      }
      if (linebreaks) {
        this.recordRuns(part);
      }
      if (part.type !== "placeholder" || part.module) {
        return;
      }
      var value;
      try {
        value = scopeManager.getValue(part.value, {
          part: part
        });
      } catch (e) {
        return {
          errors: [e]
        };
      }
      value !== null && value !== void 0 ? value : value = nullGetter(part);
      if (typeof value === "string") {
        if (stripInvalidXMLChars) {
          value = removeCorruptCharacters(value);
        } else if (["docx", "pptx", "xlsx"].indexOf(fileType) !== -1 && hasCorruptCharacters(value)) {
          return {
            errors: [getCorruptCharactersException({
              tag: part.value,
              value: value,
              offset: part.offset
            })]
          };
        }
      }
      if (fileType === "text") {
        return {
          value: value
        };
      }
      return {
        value: linebreaks && typeof value === "string" ? this.renderLineBreaks(value) : utf8ToWord(value)
      };
    }
  }, {
    key: "recordRuns",
    value: function recordRuns(part) {
      if (part.tag === this.runStartTag) {
        this.recordedRun = "";
      } else if (part.tag === this.runPropsStartTag) {
        if (part.position === "start") {
          this.recordRun = true;
          this.recordedRun += part.value;
        }
        if (part.position === "end" || part.position === "selfclosing") {
          this.recordedRun += part.value;
          this.recordRun = false;
        }
      } else if (this.recordRun) {
        this.recordedRun += part.value;
      }
    }
  }, {
    key: "renderLineBreaks",
    value: function renderLineBreaks(value) {
      var result = [];
      var lines = value.split("\n");
      for (var i = 0, len = lines.length; i < len; i++) {
        result.push(utf8ToWord(lines[i]));
        if (i < lines.length - 1) {
          result.push("</".concat(this.prefix, ":t></").concat(this.prefix, ":r>").concat(this.brTag, "<").concat(this.prefix, ":r>").concat(this.recordedRun, "<").concat(this.prefix, ":t").concat(this.docxtemplater.fileType === "docx" ? ' xml:space="preserve"' : "", ">"));
        }
      }
      return result;
    }
  }]);
}();
module.exports = function () {
  return wrapper(new Render());
};

/***/ }),

/***/ 61609:
/*!*****************************************************************!*\
  !*** ./node_modules/docxtemplater/js/modules/space-preserve.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var wrapper = __webpack_require__(/*! ../module-wrapper.js */ 43084);
var _require = __webpack_require__(/*! ../doc-utils.js */ 24418),
  isTextStart = _require.isTextStart,
  isTextEnd = _require.isTextEnd,
  endsWith = _require.endsWith,
  startsWith = _require.startsWith,
  pushArray = _require.pushArray;
var wTpreserve = '<w:t xml:space="preserve">';
var wTpreservelen = wTpreserve.length;
var wtEnd = "</w:t>";
var wtEndlen = wtEnd.length;
function isWtStart(part) {
  return isTextStart(part) && part.tag === "w:t";
}
function addXMLPreserve(chunk, index) {
  var tag = chunk[index].value;
  if (chunk[index + 1].value === "</w:t>") {
    return tag;
  }
  if (tag.indexOf('xml:space="preserve"') !== -1) {
    return tag;
  }
  return tag.substr(0, tag.length - 1) + ' xml:space="preserve">';
}
function isInsideLoop(meta, chunk) {
  return meta && meta.basePart && chunk.length > 1;
}

// This module is used only for `docx` files
var SpacePreserve = /*#__PURE__*/function () {
  function SpacePreserve() {
    _classCallCheck(this, SpacePreserve);
    this.name = "SpacePreserveModule";
  }
  return _createClass(SpacePreserve, [{
    key: "postparse",
    value: function postparse(postparsed, meta) {
      var chunk = [],
        inTextTag = false,
        endLindex = 0,
        lastTextTag = 0;
      function isStartingPlaceHolder(part, chunk) {
        return part.type === "placeholder" && chunk.length > 1;
      }
      var result = postparsed.reduce(function (postparsed, part) {
        if (isWtStart(part)) {
          inTextTag = true;
          lastTextTag = chunk.length;
        }
        if (!inTextTag) {
          postparsed.push(part);
          return postparsed;
        }
        chunk.push(part);
        if (isInsideLoop(meta, chunk)) {
          endLindex = meta.basePart.endLindex;
          chunk[0].value = addXMLPreserve(chunk, 0);
        }
        if (isStartingPlaceHolder(part, chunk)) {
          chunk[lastTextTag].value = addXMLPreserve(chunk, lastTextTag);
          endLindex = part.endLindex;
        }
        if (isTextEnd(part) && part.lIndex > endLindex) {
          if (endLindex !== 0) {
            chunk[lastTextTag].value = addXMLPreserve(chunk, lastTextTag);
          }
          pushArray(postparsed, chunk);
          chunk = [];
          inTextTag = false;
          endLindex = 0;
          lastTextTag = 0;
        }
        return postparsed;
      }, []);
      pushArray(result, chunk);
      return result;
    }
  }, {
    key: "postrender",
    value: function postrender(parts) {
      var lastNonEmpty = "";
      var lastNonEmptyIndex = 0;
      for (var i = 0, len = parts.length; i < len; i++) {
        var p = parts[i];
        if (p === "") {
          continue;
        }
        if (endsWith(lastNonEmpty, wTpreserve) && startsWith(p, wtEnd)) {
          parts[lastNonEmptyIndex] = lastNonEmpty.substr(0, lastNonEmpty.length - wTpreservelen) + "<w:t/>";
          p = p.substr(wtEndlen);
        }
        lastNonEmpty = p;
        lastNonEmptyIndex = i;
        parts[i] = p;
      }
      return parts;
    }
  }]);
}();
module.exports = function () {
  return wrapper(new SpacePreserve());
};

/***/ }),

/***/ 41929:
/*!*************************************************!*\
  !*** ./node_modules/docxtemplater/js/parser.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
var _require = __webpack_require__(/*! ./doc-utils.js */ 24418),
  wordToUtf8 = _require.wordToUtf8,
  pushArray = _require.pushArray;
var _require2 = __webpack_require__(/*! ./prefix-matcher.js */ 97789),
  match = _require2.match,
  getValue = _require2.getValue,
  getValues = _require2.getValues;
function getMatchers(modules, options) {
  var allMatchers = [];
  for (var _i2 = 0; _i2 < modules.length; _i2++) {
    var _module = modules[_i2];
    if (_module.matchers) {
      var matchers = _module.matchers(options);
      if (!(matchers instanceof Array)) {
        throw new Error("module matcher returns a non array");
      }
      pushArray(allMatchers, matchers);
    }
  }
  return allMatchers;
}
function getMatches(matchers, placeHolderContent, options) {
  var matches = [];
  for (var _i4 = 0; _i4 < matchers.length; _i4++) {
    var matcher = matchers[_i4];
    var _matcher = _slicedToArray(matcher, 2),
      prefix = _matcher[0],
      _module2 = _matcher[1];
    var properties = matcher[2] || {};
    if (options.match(prefix, placeHolderContent)) {
      var values = options.getValues(prefix, placeHolderContent);
      if (typeof properties === "function") {
        properties = properties(values);
      }
      if (!properties.value) {
        var _values = _slicedToArray(values, 2);
        properties.value = _values[1];
      }
      matches.push(_objectSpread({
        type: "placeholder",
        prefix: prefix,
        module: _module2,
        onMatch: properties.onMatch,
        priority: properties.priority
      }, properties));
    }
  }
  return matches;
}
function moduleParse(placeHolderContent, options) {
  var modules = options.modules,
    startOffset = options.startOffset;
  var endLindex = options.lIndex;
  var moduleParsed;
  options.offset = startOffset;
  options.match = match;
  options.getValue = getValue;
  options.getValues = getValues;
  var matchers = getMatchers(modules, options);
  var matches = getMatches(matchers, placeHolderContent, options);
  if (matches.length > 0) {
    var bestMatch = null;
    for (var _i6 = 0; _i6 < matches.length; _i6++) {
      var _match = matches[_i6];
      _match.priority || (_match.priority = -_match.value.length);
      if (!bestMatch || _match.priority > bestMatch.priority) {
        bestMatch = _match;
      }
    }
    bestMatch.offset = startOffset;
    delete bestMatch.priority;
    bestMatch.endLindex = endLindex;
    bestMatch.lIndex = endLindex;
    bestMatch.raw = placeHolderContent;
    if (bestMatch.onMatch) {
      bestMatch.onMatch(bestMatch);
    }
    delete bestMatch.onMatch;
    delete bestMatch.prefix;
    return bestMatch;
  }
  for (var _i8 = 0; _i8 < modules.length; _i8++) {
    var _module3 = modules[_i8];
    moduleParsed = _module3.parse(placeHolderContent, options);
    if (moduleParsed) {
      moduleParsed.offset = startOffset;
      moduleParsed.endLindex = endLindex;
      moduleParsed.lIndex = endLindex;
      moduleParsed.raw = placeHolderContent;
      return moduleParsed;
    }
  }
  return {
    type: "placeholder",
    value: placeHolderContent,
    offset: startOffset,
    endLindex: endLindex,
    lIndex: endLindex
  };
}
var parser = {
  preparse: function preparse(parsed, modules, options) {
    function preparse(parsed, options) {
      for (var _i0 = 0; _i0 < modules.length; _i0++) {
        var _module4 = modules[_i0];
        parsed = _module4.preparse(parsed, options) || parsed;
      }
      return parsed;
    }
    return preparse(parsed, options);
  },
  parse: function parse(lexed, modules, options) {
    var inPlaceHolder = false;
    var placeHolderContent = "";
    var startOffset;
    var tailParts = [];
    var droppedTags = options.fileTypeConfig.droppedTagsInsidePlaceholder || [];
    return lexed.reduce(function (parsed, token) {
      if (token.type === "delimiter") {
        inPlaceHolder = token.position === "start";
        if (token.position === "end") {
          options.parse = function (placeHolderContent) {
            return moduleParse(placeHolderContent, _objectSpread(_objectSpread(_objectSpread({}, options), token), {}, {
              startOffset: startOffset,
              modules: modules
            }));
          };
          parsed.push(options.parse(wordToUtf8(placeHolderContent)));
          pushArray(parsed, tailParts);
          tailParts = [];
        }
        if (token.position === "start") {
          tailParts = [];
          startOffset = token.offset;
        }
        placeHolderContent = "";
        return parsed;
      }
      if (!inPlaceHolder) {
        parsed.push(token);
        return parsed;
      }
      if (token.type !== "content" || token.position !== "insidetag") {
        if (droppedTags.indexOf(token.tag) !== -1) {
          return parsed;
        }
        tailParts.push(token);
        return parsed;
      }
      placeHolderContent += token.value;
      return parsed;
    }, []);
  },
  postparse: function postparse(postparsed, modules, options) {
    function getTraits(traitName, postparsed, options) {
      var result = [];
      for (var _i10 = 0; _i10 < modules.length; _i10++) {
        var _module5 = modules[_i10];
        result.push(_module5.getTraits(traitName, postparsed, options));
      }
      return result;
    }
    var errors = [];
    function _postparse(postparsed, options) {
      var newPostparsed = postparsed;
      for (var _i12 = 0; _i12 < modules.length; _i12++) {
        var _module6 = modules[_i12];
        var postparseResult = _module6.postparse(newPostparsed, _objectSpread(_objectSpread({}, options), {}, {
          postparse: function postparse(parsed, opts) {
            return _postparse(parsed, _objectSpread(_objectSpread({}, options), opts));
          },
          getTraits: getTraits
        }));
        if (postparseResult == null) {
          continue;
        }
        if (postparseResult.errors) {
          pushArray(errors, postparseResult.errors);
          newPostparsed = postparseResult.postparsed;
          continue;
        }
        newPostparsed = postparseResult;
      }
      return newPostparsed;
    }
    return {
      postparsed: _postparse(postparsed, options),
      errors: errors
    };
  }
};
module.exports = parser;

/***/ }),

/***/ 37132:
/*!*****************************************************!*\
  !*** ./node_modules/docxtemplater/js/postrender.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
 * Convert string to array (typed, when possible)
 * Stryker disable all : because this is a utility function that was copied
 * from
 * https://github.com/open-xml-templating/pizzip/blob/34a840553c604980859dc6d0dcd1f89b6e5527b3/es6/utf8.js#L33
 */
function string2buf(str) {
  var c,
    c2,
    mPos,
    i,
    bufLen = 0;
  var strLen = str.length;

  // count binary size
  for (mPos = 0; mPos < strLen; mPos++) {
    c = str.charCodeAt(mPos);
    if ((c & 0xfc00) === 0xd800 && mPos + 1 < strLen) {
      c2 = str.charCodeAt(mPos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        mPos++;
      }
    }
    bufLen += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  var buf = new Uint8Array(bufLen);

  // convert
  for (i = 0, mPos = 0; i < bufLen; mPos++) {
    c = str.charCodeAt(mPos);
    if ((c & 0xfc00) === 0xd800 && mPos + 1 < strLen) {
      c2 = str.charCodeAt(mPos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        mPos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xc0 | c >>> 6;
      buf[i++] = 0x80 | c & 0x3f;
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xe0 | c >>> 12;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | c >>> 18;
      buf[i++] = 0x80 | c >>> 12 & 0x3f;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    }
  }
  return buf;
}
// Stryker restore all

function postrender(parts, options) {
  for (var _i2 = 0, _options$modules2 = options.modules; _i2 < _options$modules2.length; _i2++) {
    var _module = _options$modules2[_i2];
    parts = _module.postrender(parts, options);
  }
  var fullLength = 0;
  var newParts = options.joinUncorrupt(parts, options);
  var longStr = "";
  var lenStr = 0;
  var maxCompact = 65536;
  var uintArrays = [];
  for (var i = 0, len = newParts.length; i < len; i++) {
    var part = newParts[i];

    /*
     * This condition should be hit in the integration test at :
     * it("should not regress with long file (hit maxCompact value of 65536)", function () {
     * Stryker disable all : because this is an optimisation that won't make any tests fail
     */
    if (part.length + lenStr > maxCompact) {
      var _arr = string2buf(longStr);
      fullLength += _arr.length;
      uintArrays.push(_arr);
      longStr = "";
    }
    // Stryker restore all

    longStr += part;
    lenStr += part.length;
    delete newParts[i];
  }
  var arr = string2buf(longStr);
  fullLength += arr.length;
  uintArrays.push(arr);
  var array = new Uint8Array(fullLength);
  var j = 0;

  // Stryker disable all : because this is an optimisation that won't make any tests fail
  for (var _i4 = 0; _i4 < uintArrays.length; _i4++) {
    var buf = uintArrays[_i4];
    for (var _i5 = 0; _i5 < buf.length; ++_i5) {
      array[_i5 + j] = buf[_i5];
    }
    j += buf.length;
  } // Stryker restore all
  return array;
}
module.exports = postrender;

/***/ }),

/***/ 97789:
/*!*********************************************************!*\
  !*** ./node_modules/docxtemplater/js/prefix-matcher.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var nbspRegex = new RegExp(String.fromCharCode(160), "g");
function replaceNbsps(str) {
  return str.replace(nbspRegex, " ");
}
function match(condition, placeHolderContent) {
  var type = _typeof(condition);
  if (type === "string") {
    return replaceNbsps(placeHolderContent.substr(0, condition.length)) === condition;
  }
  if (condition instanceof RegExp) {
    return condition.test(replaceNbsps(placeHolderContent));
  }
  if (type === "function") {
    return !!condition(placeHolderContent);
  }
}
function getValue(condition, placeHolderContent) {
  var type = _typeof(condition);
  if (type === "string") {
    return replaceNbsps(placeHolderContent).substr(condition.length);
  }
  if (condition instanceof RegExp) {
    return replaceNbsps(placeHolderContent).match(condition)[1];
  }
  if (type === "function") {
    return condition(placeHolderContent);
  }
}
function getValues(condition, placeHolderContent) {
  var type = _typeof(condition);
  if (type === "string") {
    return [placeHolderContent, replaceNbsps(placeHolderContent).substr(condition.length)];
  }
  if (condition instanceof RegExp) {
    return replaceNbsps(placeHolderContent).match(condition);
  }
  if (type === "function") {
    return [placeHolderContent, condition(placeHolderContent)];
  }
}
module.exports = {
  match: match,
  getValue: getValue,
  getValues: getValues
};

/***/ }),

/***/ 30490:
/*!*************************************************!*\
  !*** ./node_modules/docxtemplater/js/render.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./errors.js */ 57629),
  throwUnimplementedTagType = _require.throwUnimplementedTagType,
  XTScopeParserError = _require.XTScopeParserError;
var _require2 = __webpack_require__(/*! ./doc-utils.js */ 24418),
  pushArray = _require2.pushArray;
var getResolvedId = __webpack_require__(/*! ./get-resolved-id.js */ 72959);
function moduleRender(part, options) {
  for (var _i2 = 0, _options$modules2 = options.modules; _i2 < _options$modules2.length; _i2++) {
    var _module = _options$modules2[_i2];
    var moduleRendered = _module.render(part, options);
    if (moduleRendered) {
      return moduleRendered;
    }
  }
  return false;
}
function render(options) {
  var baseNullGetter = options.baseNullGetter;
  var compiled = options.compiled,
    scopeManager = options.scopeManager;
  options.nullGetter = function (part, sm) {
    return baseNullGetter(part, sm || scopeManager);
  };
  var errors = [];
  var parts = [];
  for (var i = 0, len = compiled.length; i < len; i++) {
    var part = compiled[i];
    options.index = i;
    options.resolvedId = getResolvedId(part, options);
    var moduleRendered = void 0;
    try {
      moduleRendered = moduleRender(part, options);
    } catch (e) {
      if (e instanceof XTScopeParserError) {
        errors.push(e);
        parts.push(part);
        continue;
      }
      throw e;
    }
    if (moduleRendered) {
      if (moduleRendered.errors) {
        pushArray(errors, moduleRendered.errors);
      }
      parts.push(moduleRendered);
      continue;
    }
    if (part.type === "content" || part.type === "tag") {
      parts.push(part);
      continue;
    }
    throwUnimplementedTagType(part, i);
  }

  // This is done in two steps because for some files, it is possible to #edit-value-backwards
  var totalParts = [];
  for (var _i4 = 0; _i4 < parts.length; _i4++) {
    var value = parts[_i4].value;
    if (value instanceof Array) {
      pushArray(totalParts, value);
    } else if (value) {
      totalParts.push(value);
    }
  }
  return {
    errors: errors,
    parts: totalParts
  };
}
module.exports = render;

/***/ }),

/***/ 64868:
/*!**************************************************!*\
  !*** ./node_modules/docxtemplater/js/resolve.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _require = __webpack_require__(/*! ./doc-utils.js */ 24418),
  pushArray = _require.pushArray;
var getResolvedId = __webpack_require__(/*! ./get-resolved-id.js */ 72959);
function moduleResolve(part, options) {
  for (var _i2 = 0, _options$modules2 = options.modules; _i2 < _options$modules2.length; _i2++) {
    var _module = _options$modules2[_i2];
    var moduleResolved = _module.resolve(part, options);
    if (moduleResolved) {
      return moduleResolved;
    }
  }
  return false;
}
function resolvePart(part, resolved, errors, options) {
  var moduleResolved = moduleResolve(part, _objectSpread(_objectSpread({}, options), {}, {
    resolvedId: getResolvedId(part, options)
  }));
  if (moduleResolved) {
    return moduleResolved.then(function (value) {
      resolved.push({
        tag: part.value,
        lIndex: part.lIndex,
        value: value
      });
    })["catch"](function (e) {
      if (e instanceof Array) {
        pushArray(errors, e);
      } else {
        errors.push(e);
      }
    });
  }
  if (part.type === "placeholder") {
    return options.scopeManager.getValueAsync(part.value, {
      part: part
    }).then(function (value) {
      return value == null ? options.nullGetter(part) : value;
    }).then(function (value) {
      resolved.push({
        tag: part.value,
        lIndex: part.lIndex,
        value: value
      });
    })["catch"](function (e) {
      if (e instanceof Array) {
        pushArray(errors, e);
      } else {
        errors.push(e);
      }
    });
  }
}
function resolve(options) {
  var resolved = [];
  var errors = [];
  var baseNullGetter = options.baseNullGetter;
  var scopeManager = options.scopeManager;
  options.nullGetter = function (part, sm) {
    return baseNullGetter(part, sm || scopeManager);
  };
  options.resolved = resolved;
  var p = resolveSerial(options, errors, resolved);
  if (p) {
    return p.then(function () {
      return resolveParallel(options, errors, resolved);
    });
  }
  return resolveParallel(options, errors, resolved);
}
function resolveSerial(options, errors, resolved) {
  var p = null;
  var _loop = function _loop() {
    var part = _options$compiled2[_i4];
    if (["content", "tag"].indexOf(part.type) !== -1) {
      return 1; // continue
    }

    if (part.resolveFirst) {
      p !== null && p !== void 0 ? p : p = Promise.resolve(null);
      p = p.then(function () {
        return resolvePart(part, resolved, errors, options);
      });
    }
  };
  for (var _i4 = 0, _options$compiled2 = options.compiled; _i4 < _options$compiled2.length; _i4++) {
    if (_loop()) continue;
  }
  return p;
}
function resolveParallel(options, errors, resolved) {
  var promises = [];
  for (var _i6 = 0, _options$compiled4 = options.compiled; _i6 < _options$compiled4.length; _i6++) {
    var part = _options$compiled4[_i6];
    if (["content", "tag"].indexOf(part.type) !== -1) {
      continue;
    }
    if (!part.resolveFirst) {
      promises.push(resolvePart(part, resolved, errors, options));
    }
  }
  return Promise.all(promises).then(function () {
    return {
      errors: errors,
      resolved: resolved
    };
  });
}
module.exports = resolve;

/***/ }),

/***/ 74926:
/*!********************************************************!*\
  !*** ./node_modules/docxtemplater/js/scope-manager.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _require = __webpack_require__(/*! ./errors.js */ 57629),
  getScopeParserExecutionError = _require.getScopeParserExecutionError;
var _require2 = __webpack_require__(/*! ./utils.js */ 64389),
  last = _require2.last;
var _require3 = __webpack_require__(/*! ./doc-utils.js */ 24418),
  concatArrays = _require3.concatArrays;
function find(list, fn) {
  var length = list.length >>> 0;
  var value;
  for (var i = 0; i < length; i++) {
    value = list[i];
    if (fn.call(this, value, i, list)) {
      return value;
    }
  }
  return undefined;
}
function _getValue(tag, meta, num) {
  var _this = this;
  var scope = this.scopeList[num];
  if (this.root.finishedResolving) {
    var w = this.resolved;
    var _loop = function _loop() {
      var lIndex = _this.scopeLindex[i];
      w = find(w, function (r) {
        return r.lIndex === lIndex;
      });
      w = w.value[_this.scopePathItem[i]];
    };
    for (var i = this.resolveOffset, len = this.scopePath.length; i < len; i++) {
      _loop();
    }
    return find(w, function (r) {
      return meta.part.lIndex === r.lIndex;
    }).value;
  }
  // search in the scopes (in reverse order) and keep the first defined value
  var result;
  var parser;
  if (!this.cachedParsers || !meta.part) {
    parser = this.parser(tag, {
      tag: meta.part,
      scopePath: this.scopePath
    });
  } else if (this.cachedParsers[meta.part.lIndex]) {
    parser = this.cachedParsers[meta.part.lIndex];
  } else {
    parser = this.cachedParsers[meta.part.lIndex] = this.parser(tag, {
      tag: meta.part,
      scopePath: this.scopePath
    });
  }
  try {
    result = parser.get(scope, this.getContext(meta, num));
  } catch (error) {
    throw getScopeParserExecutionError({
      tag: tag,
      scope: scope,
      error: error,
      offset: meta.part.offset
    });
  }
  if (result == null && num > 0) {
    return _getValue.call(this, tag, meta, num - 1);
  }
  return result;
}
function _getValueAsync(tag, meta, num) {
  var _this2 = this;
  var scope = this.scopeList[num];
  // search in the scopes (in reverse order) and keep the first defined value
  var parser;
  if (!this.cachedParsers || !meta.part) {
    parser = this.parser(tag, {
      tag: meta.part,
      scopePath: this.scopePath
    });
  } else if (this.cachedParsers[meta.part.lIndex]) {
    parser = this.cachedParsers[meta.part.lIndex];
  } else {
    parser = this.cachedParsers[meta.part.lIndex] = this.parser(tag, {
      tag: meta.part,
      scopePath: this.scopePath
    });
  }
  return Promise.resolve().then(function () {
    return parser.get(scope, _this2.getContext(meta, num));
  })["catch"](function (error) {
    throw getScopeParserExecutionError({
      tag: tag,
      scope: scope,
      error: error,
      offset: meta.part.offset
    });
  }).then(function (result) {
    if (result == null && num > 0) {
      return _getValueAsync.call(_this2, tag, meta, num - 1);
    }
    return result;
  });
}
var ScopeManager = /*#__PURE__*/function () {
  function ScopeManager(options) {
    _classCallCheck(this, ScopeManager);
    this.root = options.root || this;
    this.resolveOffset = options.resolveOffset || 0;
    this.scopePath = options.scopePath;
    this.scopePathItem = options.scopePathItem;
    this.scopePathLength = options.scopePathLength;
    this.scopeList = options.scopeList;
    this.scopeType = "";
    this.scopeTypes = options.scopeTypes;
    this.scopeLindex = options.scopeLindex;
    this.parser = options.parser;
    this.resolved = options.resolved;
    this.cachedParsers = options.cachedParsers;
  }
  return _createClass(ScopeManager, [{
    key: "loopOver",
    value: function loopOver(tag, functor, inverted, meta) {
      return this.loopOverValue(this.getValue(tag, meta), functor, inverted);
    }
  }, {
    key: "functorIfInverted",
    value: function functorIfInverted(inverted, functor, value, i, length) {
      if (inverted) {
        functor(value, i, length);
      }
      return inverted;
    }
  }, {
    key: "isValueFalsy",
    value: function isValueFalsy(value, type) {
      return value == null || !value || type === "[object Array]" && value.length === 0;
    }
  }, {
    key: "loopOverValue",
    value: function loopOverValue(value, functor, inverted) {
      if (this.root.finishedResolving) {
        inverted = false;
      }
      var type = Object.prototype.toString.call(value);
      if (this.isValueFalsy(value, type)) {
        this.scopeType = false;
        return this.functorIfInverted(inverted, functor, last(this.scopeList), 0, 1);
      }
      if (type === "[object Array]") {
        this.scopeType = "array";
        for (var i = 0; i < value.length; i++) {
          this.functorIfInverted(!inverted, functor, value[i], i, value.length);
        }
        return true;
      }
      if (type === "[object Object]") {
        this.scopeType = "object";
        return this.functorIfInverted(!inverted, functor, value, 0, 1);
      }
      return this.functorIfInverted(!inverted, functor, last(this.scopeList), 0, 1);
    }
  }, {
    key: "getValue",
    value: function getValue(tag, meta) {
      var result = _getValue.call(this, tag, meta, this.scopeList.length - 1);
      if (typeof result === "function") {
        return result(this.scopeList[this.scopeList.length - 1], this);
      }
      return result;
    }
  }, {
    key: "getValueAsync",
    value: function getValueAsync(tag, meta) {
      var _this3 = this;
      return _getValueAsync.call(this, tag, meta, this.scopeList.length - 1).then(function (result) {
        if (typeof result === "function") {
          return result(_this3.scopeList[_this3.scopeList.length - 1], _this3);
        }
        return result;
      });
    }
  }, {
    key: "getContext",
    value: function getContext(meta, num) {
      return {
        num: num,
        meta: meta,
        scopeList: this.scopeList,
        resolved: this.resolved,
        scopePath: this.scopePath,
        scopeTypes: this.scopeTypes,
        scopePathItem: this.scopePathItem,
        scopePathLength: this.scopePathLength
      };
    }
  }, {
    key: "createSubScopeManager",
    value: function createSubScopeManager(scope, tag, i, part, length) {
      return new ScopeManager({
        root: this.root,
        resolveOffset: this.resolveOffset,
        resolved: this.resolved,
        parser: this.parser,
        cachedParsers: this.cachedParsers,
        scopeTypes: concatArrays([this.scopeTypes, [this.scopeType]]),
        scopeList: concatArrays([this.scopeList, [scope]]),
        scopePath: concatArrays([this.scopePath, [tag]]),
        scopePathItem: concatArrays([this.scopePathItem, [i]]),
        scopePathLength: concatArrays([this.scopePathLength, [length]]),
        scopeLindex: concatArrays([this.scopeLindex, [part.lIndex]])
      });
    }
  }]);
}();
module.exports = function (options) {
  options.scopePath = [];
  options.scopePathItem = [];
  options.scopePathLength = [];
  options.scopeTypes = [];
  options.scopeLindex = [];
  options.scopeList = [options.tags];
  return new ScopeManager(options);
};

/***/ }),

/***/ 89507:
/*!*************************************************!*\
  !*** ./node_modules/docxtemplater/js/traits.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _require = __webpack_require__(/*! ./doc-utils.js */ 24418),
  getRightOrNull = _require.getRightOrNull,
  getRight = _require.getRight,
  getLeft = _require.getLeft,
  getLeftOrNull = _require.getLeftOrNull,
  chunkBy = _require.chunkBy,
  isTagStart = _require.isTagStart,
  isTagEnd = _require.isTagEnd,
  isContent = _require.isContent,
  last = _require.last,
  first = _require.first;
var _require2 = __webpack_require__(/*! ./errors.js */ 57629),
  XTTemplateError = _require2.XTTemplateError,
  throwExpandNotFound = _require2.throwExpandNotFound,
  getLoopPositionProducesInvalidXMLError = _require2.getLoopPositionProducesInvalidXMLError;
function lastTagIsOpenTag(tags, tag) {
  if (tags.length === 0) {
    return false;
  }
  var innerLastTag = last(tags).substr(1);
  return innerLastTag.indexOf(tag) === 0;
}
function getListXmlElements(parts) {
  /*
   * Gets the list of closing and opening tags between two texts. It doesn't take
   * into account tags that are opened then closed. Those that are closed then
   * opened are kept
   *
   * Example input :
   *
   * [
   * 	{
   * 		"type": "placeholder",
   * 		"value": "table1",
   * 		...
   * 	},
   * 	{
   * 		"type": "placeholder",
   * 		"value": "t1data1",
   * 	},
   * 	{
   * 		"type": "tag",
   * 		"position": "end",
   * 		"text": true,
   * 		"value": "</w:t>",
   * 		"tag": "w:t",
   * 		"lIndex": 112
   * 	},
   * 	{
   * 		"type": "tag",
   * 		"value": "</w:r>",
   * 	},
   * 	{
   * 		"type": "tag",
   * 		"value": "</w:p>",
   * 	},
   * 	{
   * 		"type": "tag",
   * 		"value": "</w:tc>",
   * 	},
   * 	{
   * 		"type": "tag",
   * 		"value": "<w:tc>",
   * 	},
   * 	{
   * 		"type": "content",
   * 		"value": "<w:tcPr><w:tcW w:w="2444" w:type="dxa"/><w:tcBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/></w:tcBorders><w:shd w:val="clear" w:color="auto" w:fill="FFFFFF"/></w:tcPr>",
   * 	},
   * 	...
   * 	{
   * 		"type": "tag",
   * 		"value": "<w:r>",
   * 	},
   * 	{
   * 		"type": "tag",
   * 		"value": "<w:t xml:space="preserve">",
   * 	},
   * 	{
   * 		"type": "placeholder",
   * 		"value": "t1data4",
   * 	}
   * ]
   *
   * Returns
   *
   * 	[
   * 		{
   * 			"tag": "</w:t>",
   * 		},
   * 		{
   * 			"tag": "</w:r>",
   * 		},
   * 		{
   * 			"tag": "</w:p>",
   * 		},
   * 		{
   * 			"tag": "</w:tc>",
   * 		},
   * 		{
   * 			"tag": "<w:tc>",
   * 		},
   * 		{
   * 			"tag": "<w:p>",
   * 		},
   * 		{
   * 			"tag": "<w:r>",
   * 		},
   * 		{
   * 			"tag": "<w:t>",
   * 		},
   * 	]
   */

  var result = [];
  for (var _i2 = 0; _i2 < parts.length; _i2++) {
    var _parts$_i = parts[_i2],
      position = _parts$_i.position,
      value = _parts$_i.value,
      tag = _parts$_i.tag;
    // Stryker disable all : because removing this condition would also work but we want to make the API future proof
    if (!tag) {
      continue;
    }
    // Stryker restore all
    if (position === "end") {
      if (lastTagIsOpenTag(result, tag)) {
        result.pop();
      } else {
        result.push(value);
      }
    } else if (position === "start") {
      result.push(value);
    }
    // ignore position === "selfclosing"
  }

  return result;
}
function has(name, xmlElements) {
  for (var _i4 = 0; _i4 < xmlElements.length; _i4++) {
    var xmlElement = xmlElements[_i4];
    if (xmlElement.indexOf("<".concat(name)) === 0) {
      return true;
    }
  }
  return false;
}
function getExpandToDefault(postparsed, pair, expandTags) {
  var xmlElements = getListXmlElements(postparsed.slice(pair[0].offset, pair[1].offset));
  var _loop = function _loop() {
      var _expandTags$_i = expandTags[_i6],
        contains = _expandTags$_i.contains,
        expand = _expandTags$_i.expand,
        onlyTextInTag = _expandTags$_i.onlyTextInTag;
      if (has(contains, xmlElements)) {
        if (onlyTextInTag) {
          var left = getLeftOrNull(postparsed, contains, pair[0].offset);
          var right = getRightOrNull(postparsed, contains, pair[1].offset);
          if (left === null || right === null) {
            return 0; // continue
          }

          var subparsed = postparsed.slice(left, right);
          var chunks = chunkBy(subparsed, function (p) {
            return isTagStart(contains, p) ? "start" : isTagEnd(contains, p) ? "end" : null;
          });
          var firstChunk = first(chunks);
          var lastChunk = last(chunks);
          var firstContent = firstChunk.filter(isContent);
          var lastContent = lastChunk.filter(isContent);
          if (firstContent.length !== 1 || lastContent.length !== 1) {
            return 0; // continue
          }
        }

        var structured = getStructuredTagPositions(xmlElements);
        var openCount = 0;
        for (var _i8 = 0; _i8 < structured.length; _i8++) {
          var _structured$_i = structured[_i8],
            tag = _structured$_i.tag,
            position = _structured$_i.position;
          if (tag === expand) {
            if (position === "start") {
              openCount++;
            }
            if (position === "end") {
              openCount--;
            }
          }
        }
        if (openCount !== 0) {
          // Tested by #regression-loop-with-field-and-nofield
          return {
            v: {
              error: getLoopPositionProducesInvalidXMLError({
                tag: first(pair).part.value,
                offset: [first(pair).part.offset, last(pair).part.offset]
              })
            }
          };
        }
        return {
          v: {
            value: expand
          }
        };
      }
    },
    _ret;
  for (var _i6 = 0; _i6 < expandTags.length; _i6++) {
    _ret = _loop();
    if (_ret === 0) continue;
    if (_ret) return _ret.v;
  }
  if (!checkStartEnd(xmlElements)) {
    return {
      error: getLoopPositionProducesInvalidXMLError({
        tag: first(pair).part.value,
        offset: [first(pair).part.offset, last(pair).part.offset]
      })
    };
  }
  return {};
}
function getStructuredTagPositions(xmlElements) {
  var result = [];
  for (var _i0 = 0; _i0 < xmlElements.length; _i0++) {
    var el = xmlElements[_i0];
    var tag = getTagName(el);
    var position = /^\s*<\//.test(el) ? "end" : "start";
    result.push({
      tag: tag,
      position: position
    });
  }
  return result;
}
function getTagName(tag) {
  return tag.replace(/^\s*<\/?([a-zA-Z:]+).*/, "$1");
}
function checkStartEnd(xmlElements) {
  if (xmlElements.length % 2 === 1) {
    return false;
  }
  for (var i = 0, len = xmlElements.length / 2; i < len; i++) {
    var start = xmlElements[i];
    var end = xmlElements[xmlElements.length - i - 1];
    var tagNameStart = getTagName(start);
    var tagNameEnd = getTagName(end);
    if (tagNameStart !== tagNameEnd) {
      return false;
    }
  }
  return true;
}
function getExpandLimit(part, index, postparsed, options) {
  var expandTo = part.expandTo || options.expandTo;
  // Stryker disable all : because this condition can be removed in v4 (the only usage was the image module before version 3.12.3 of the image module
  if (!expandTo) {
    return;
  }
  // Stryker restore all
  var right, left;
  try {
    left = getLeft(postparsed, expandTo, index);
    right = getRight(postparsed, expandTo, index);
  } catch (rootError) {
    var errProps = _objectSpread({
      part: part,
      rootError: rootError,
      postparsed: postparsed,
      expandTo: expandTo,
      index: index
    }, options.error);
    if (options.onError) {
      var errorResult = options.onError(errProps);
      if (errorResult === "ignore") {
        return;
      }
    }
    throwExpandNotFound(errProps);
  }
  return [left, right];
}
function expandOne(_ref, part, postparsed, options) {
  var _ref2 = _slicedToArray(_ref, 2),
    left = _ref2[0],
    right = _ref2[1];
  var index = postparsed.indexOf(part);
  var leftParts = postparsed.slice(left, index);
  var rightParts = postparsed.slice(index + 1, right + 1);
  var inner = options.getInner({
    postparse: options.postparse,
    index: index,
    part: part,
    leftParts: leftParts,
    rightParts: rightParts,
    left: left,
    right: right,
    postparsed: postparsed
  });
  if (!inner.length) {
    inner.expanded = [leftParts, rightParts];
    inner = [inner];
  }
  return {
    left: left,
    right: right,
    inner: inner
  };
}

/* eslint-disable-next-line complexity */
function expandToOne(postparsed, options) {
  var errors = [];
  if (postparsed.errors) {
    errors = postparsed.errors;
    postparsed = postparsed.postparsed;
  }
  var limits = [];
  for (var i = 0, len = postparsed.length; i < len; i++) {
    var part = postparsed[i];
    if (part.type === "placeholder" && part.module === options.moduleName &&
    /*
     * The part.subparsed check is used to fix this github issue :
     * https://github.com/open-xml-templating/docxtemplater/issues/671
     */
    !part.subparsed && !part.expanded) {
      try {
        var limit = getExpandLimit(part, i, postparsed, options);
        if (!limit) {
          continue;
        }
        var _limit = _slicedToArray(limit, 2),
          left = _limit[0],
          right = _limit[1];
        limits.push({
          left: left,
          right: right,
          part: part,
          i: i,
          leftPart: postparsed[left],
          rightPart: postparsed[right]
        });
      } catch (error) {
        // The Error can only be a
        errors.push(error);
      }
    }
  }
  limits.sort(function (l1, l2) {
    if (l1.left === l2.left) {
      return l2.part.lIndex < l1.part.lIndex ? 1 : -1;
    }
    return l2.left < l1.left ? 1 : -1;
  });
  var maxRight = -1;
  var offset = 0;
  for (var _i1 = 0, _len = limits.length; _i1 < _len; _i1++) {
    var _postparsed;
    var _limit2 = limits[_i1];
    maxRight = Math.max(maxRight, _i1 > 0 ? limits[_i1 - 1].right : 0);
    if (_limit2.left < maxRight) {
      continue;
    }
    var result = void 0;
    try {
      result = expandOne([_limit2.left + offset, _limit2.right + offset], _limit2.part, postparsed, options);
    } catch (error) {
      if (options.onError) {
        var errorResult = options.onError(_objectSpread({
          part: _limit2.part,
          rootError: error,
          postparsed: postparsed,
          expandOne: expandOne
        }, options.errors));
        if (errorResult === "ignore") {
          continue;
        }
      }
      if (error instanceof XTTemplateError) {
        errors.push(error);
      } else {
        throw error;
      }
    }
    if (!result) {
      continue;
    }
    offset += result.inner.length - (result.right + 1 - result.left);
    (_postparsed = postparsed).splice.apply(_postparsed, [result.left, result.right + 1 - result.left].concat(_toConsumableArray(result.inner)));
  }
  return {
    postparsed: postparsed,
    errors: errors
  };
}
module.exports = {
  expandToOne: expandToOne,
  getExpandToDefault: getExpandToDefault
};

/***/ }),

/***/ 64389:
/*!************************************************!*\
  !*** ./node_modules/docxtemplater/js/utils.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


function last(a) {
  return a[a.length - 1];
}
function first(a) {
  return a[0];
}
module.exports = {
  last: last,
  first: first
};

/***/ }),

/***/ 99482:
/*!******************************************************!*\
  !*** ./node_modules/docxtemplater/js/xml-matcher.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./doc-utils.js */ 24418),
  pregMatchAll = _require.pregMatchAll;
module.exports = function xmlMatcher(content, tagsXmlArray) {
  var res = {
    content: content
  };
  var taj = tagsXmlArray.join("|");
  var regexp = new RegExp("(?:(<(?:".concat(taj, ")[^>]*>)([^<>]*)</(?:").concat(taj, ")>)|(<(?:").concat(taj, ")[^>]*/>)"), "g");
  res.matches = pregMatchAll(regexp, res.content);
  return res;
};

/***/ }),

/***/ 78008:
/*!********************************************************!*\
  !*** ./node_modules/docxtemplater/js/xml-templater.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _require = __webpack_require__(/*! ./doc-utils.js */ 24418),
  pushArray = _require.pushArray,
  wordToUtf8 = _require.wordToUtf8,
  convertSpaces = _require.convertSpaces;
var xmlMatcher = __webpack_require__(/*! ./xml-matcher.js */ 99482);
var Lexer = __webpack_require__(/*! ./lexer.js */ 62438);
var Parser = __webpack_require__(/*! ./parser.js */ 41929);
var _render = __webpack_require__(/*! ./render.js */ 30490);
var postrender = __webpack_require__(/*! ./postrender.js */ 37132);
var resolve = __webpack_require__(/*! ./resolve.js */ 64868);
var joinUncorrupt = __webpack_require__(/*! ./join-uncorrupt.js */ 49739);
function _getFullText(content, tagsXmlArray) {
  var matcher = xmlMatcher(content, tagsXmlArray);
  var result = matcher.matches.map(function (match) {
    return match.array[2];
  });
  return wordToUtf8(convertSpaces(result.join("")));
}
module.exports = /*#__PURE__*/function () {
  function XmlTemplater(content, options) {
    _classCallCheck(this, XmlTemplater);
    this.cachedParsers = {};
    this.content = content;
    for (var key in options) {
      this[key] = options[key];
    }
    this.setModules({
      inspect: {
        filePath: options.filePath
      }
    });
  }
  return _createClass(XmlTemplater, [{
    key: "resolveTags",
    value: function resolveTags(tags) {
      var _this = this;
      this.tags = tags;
      var options = this.getOptions();
      var filePath = this.filePath;
      options.scopeManager = this.scopeManager;
      options.resolve = resolve;
      var errors = [];
      return Promise.all(this.modules.map(function (module) {
        return Promise.resolve(module.preResolve(options))["catch"](function (e) {
          errors.push(e);
        });
      })).then(function () {
        if (errors.length !== 0) {
          throw errors;
        }
        return resolve(options).then(function (_ref) {
          var resolved = _ref.resolved,
            errors = _ref.errors;
          errors = errors.map(function (error) {
            var _error;
            // If a string is thrown, convert it to a real Error
            if (!(error instanceof Error)) {
              error = new Error(error);
            }
            /*
             * error properties might not be defined if some foreign error
             * (unhandled error not thrown by docxtemplater willingly) is
             * thrown.
             */
            (_error = error).properties || (_error.properties = {});
            error.properties.file = filePath;
            return error;
          });
          if (errors.length !== 0) {
            throw errors;
          }
          return Promise.all(resolved).then(function (resolved) {
            options.scopeManager.root.finishedResolving = true;
            options.scopeManager.resolved = resolved;
            _this.setModules({
              inspect: {
                resolved: resolved,
                filePath: filePath
              }
            });
            return resolved;
          });
        })["catch"](function (error) {
          _this.errorChecker(error);
          throw error;
        });
      });
    }
  }, {
    key: "getFullText",
    value: function getFullText() {
      return _getFullText(this.content, this.fileTypeConfig.tagsXmlTextArray);
    }
  }, {
    key: "setModules",
    value: function setModules(obj) {
      for (var _i2 = 0, _this$modules2 = this.modules; _i2 < _this$modules2.length; _i2++) {
        var _module = _this$modules2[_i2];
        _module.set(obj);
      }
    }
  }, {
    key: "preparse",
    value: function preparse() {
      this.allErrors = [];
      this.xmllexed = Lexer.xmlparse(this.content, {
        text: this.fileTypeConfig.tagsXmlTextArray,
        other: this.fileTypeConfig.tagsXmlLexedArray
      });
      this.setModules({
        inspect: {
          filePath: this.filePath,
          xmllexed: this.xmllexed
        }
      });
      var _Lexer$parse = Lexer.parse(this.xmllexed, this.delimiters, this.syntax, this.fileType),
        lexed = _Lexer$parse.lexed,
        lexerErrors = _Lexer$parse.errors;
      pushArray(this.allErrors, lexerErrors);
      this.lexed = lexed;
      this.setModules({
        inspect: {
          filePath: this.filePath,
          lexed: this.lexed
        }
      });
      var options = this.getOptions();
      this.lexed = Parser.preparse(this.lexed, this.modules, options);
    }
  }, {
    key: "parse",
    value: function parse() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        noPostParse = _ref2.noPostParse;
      this.setModules({
        inspect: {
          filePath: this.filePath
        }
      });
      var options = this.getOptions();
      this.parsed = Parser.parse(this.lexed, this.modules, options);
      this.setModules({
        inspect: {
          filePath: this.filePath,
          parsed: this.parsed
        }
      });
      if (noPostParse) {
        return this;
      }
      // In v4, we could remove this "this.postparse()" so that users have to call this manually.
      return this.postparse();
    }
  }, {
    key: "postparse",
    value: function postparse() {
      var options = this.getOptions();
      var _Parser$postparse = Parser.postparse(this.parsed, this.modules, options),
        postparsed = _Parser$postparse.postparsed,
        postparsedErrors = _Parser$postparse.errors;
      this.postparsed = postparsed;
      this.setModules({
        inspect: {
          filePath: this.filePath,
          postparsed: this.postparsed
        }
      });
      pushArray(this.allErrors, postparsedErrors);
      this.errorChecker(this.allErrors);
      return this;
    }
  }, {
    key: "errorChecker",
    value: function errorChecker(errors) {
      for (var _i4 = 0, _errors2 = errors; _i4 < _errors2.length; _i4++) {
        var error = _errors2[_i4];
        /*
         * error properties might not be defined if some foreign
         * (unhandled error not thrown by docxtemplater willingly) is
         * thrown.
         */
        error.properties || (error.properties = {});
        error.properties.file = this.filePath;
      }
      for (var _i6 = 0, _this$modules4 = this.modules; _i6 < _this$modules4.length; _i6++) {
        var _module2 = _this$modules4[_i6];
        errors = _module2.errorsTransformer(errors);
      }
    }
  }, {
    key: "baseNullGetter",
    value: function baseNullGetter(part, sm) {
      var value = null;
      for (var _i8 = 0, _this$modules6 = this.modules; _i8 < _this$modules6.length; _i8++) {
        var _module3 = _this$modules6[_i8];
        if (value != null) {
          continue;
        }
        value = _module3.nullGetter(part, sm, this);
      }
      if (value != null) {
        return value;
      }
      return this.nullGetter(part, sm);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return {
        compiled: this.postparsed,
        cachedParsers: this.cachedParsers,
        tags: this.tags,
        modules: this.modules,
        parser: this.parser,
        contentType: this.contentType,
        relsType: this.relsType,
        baseNullGetter: this.baseNullGetter.bind(this),
        filePath: this.filePath,
        fileTypeConfig: this.fileTypeConfig,
        fileType: this.fileType,
        linebreaks: this.linebreaks,
        stripInvalidXMLChars: this.stripInvalidXMLChars
      };
    }
  }, {
    key: "render",
    value: function render(to) {
      this.filePath = to;
      var options = this.getOptions();
      options.resolved = this.scopeManager.resolved;
      options.scopeManager = this.scopeManager;
      options.render = _render;
      options.joinUncorrupt = joinUncorrupt;
      var _render2 = _render(options),
        errors = _render2.errors,
        parts = _render2.parts;
      if (errors.length > 0) {
        this.allErrors = errors;
        this.errorChecker(errors);
        return this;
      }
      this.content = postrender(parts, options);
      this.setModules({
        inspect: {
          filePath: this.filePath,
          content: this.content
        }
      });
      return this;
    }
  }]);
}();

/***/ }),

/***/ 77247:
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/***/ ((module) => {

/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function (e) {
  if (true) module.exports = e();else {}
}(function () {
  return function s(a, o, h) {
    function u(r, e) {
      if (!o[r]) {
        if (!a[r]) {
          var t = undefined;
          if (!e && t) return require(r, !0);
          if (l) return l(r, !0);
          var n = new Error("Cannot find module '" + r + "'");
          throw n.code = "MODULE_NOT_FOUND", n;
        }
        var i = o[r] = {
          exports: {}
        };
        a[r][0].call(i.exports, function (e) {
          var t = a[r][1][e];
          return u(t || e);
        }, i, i.exports, s, a, o, h);
      }
      return o[r].exports;
    }
    for (var l = undefined, e = 0; e < h.length; e++) u(h[e]);
    return u;
  }({
    1: [function (e, t, r) {
      "use strict";

      var d = e("./utils"),
        c = e("./support"),
        p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      r.encode = function (e) {
        for (var t, r, n, i, s, a, o, h = [], u = 0, l = e.length, f = l, c = "string" !== d.getTypeOf(e); u < e.length;) f = l - u, n = c ? (t = e[u++], r = u < l ? e[u++] : 0, u < l ? e[u++] : 0) : (t = e.charCodeAt(u++), r = u < l ? e.charCodeAt(u++) : 0, u < l ? e.charCodeAt(u++) : 0), i = t >> 2, s = (3 & t) << 4 | r >> 4, a = 1 < f ? (15 & r) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
        return h.join("");
      }, r.decode = function (e) {
        var t,
          r,
          n,
          i,
          s,
          a,
          o = 0,
          h = 0,
          u = "data:";
        if (e.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
        var l,
          f = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (e.charAt(e.length - 1) === p.charAt(64) && f--, e.charAt(e.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e.length;) t = p.indexOf(e.charAt(o++)) << 2 | (i = p.indexOf(e.charAt(o++))) >> 4, r = (15 & i) << 4 | (s = p.indexOf(e.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e.charAt(o++))), l[h++] = t, 64 !== s && (l[h++] = r), 64 !== a && (l[h++] = n);
        return l;
      };
    }, {
      "./support": 30,
      "./utils": 32
    }],
    2: [function (e, t, r) {
      "use strict";

      var n = e("./external"),
        i = e("./stream/DataWorker"),
        s = e("./stream/Crc32Probe"),
        a = e("./stream/DataLengthProbe");
      function o(e, t, r, n, i) {
        this.compressedSize = e, this.uncompressedSize = t, this.crc32 = r, this.compression = n, this.compressedContent = i;
      }
      o.prototype = {
        getContentWorker: function () {
          var e = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),
            t = this;
          return e.on("end", function () {
            if (this.streamInfo.data_length !== t.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e;
        },
        getCompressedWorker: function () {
          return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        }
      }, o.createWorkerFrom = function (e, t, r) {
        return e.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", t);
      }, t.exports = o;
    }, {
      "./external": 6,
      "./stream/Crc32Probe": 25,
      "./stream/DataLengthProbe": 26,
      "./stream/DataWorker": 27
    }],
    3: [function (e, t, r) {
      "use strict";

      var n = e("./stream/GenericWorker");
      r.STORE = {
        magic: "\0\0",
        compressWorker: function () {
          return new n("STORE compression");
        },
        uncompressWorker: function () {
          return new n("STORE decompression");
        }
      }, r.DEFLATE = e("./flate");
    }, {
      "./flate": 7,
      "./stream/GenericWorker": 28
    }],
    4: [function (e, t, r) {
      "use strict";

      var n = e("./utils");
      var o = function () {
        for (var e, t = [], r = 0; r < 256; r++) {
          e = r;
          for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
          t[r] = e;
        }
        return t;
      }();
      t.exports = function (e, t) {
        return void 0 !== e && e.length ? "string" !== n.getTypeOf(e) ? function (e, t, r, n) {
          var i = o,
            s = n + r;
          e ^= -1;
          for (var a = n; a < s; a++) e = e >>> 8 ^ i[255 & (e ^ t[a])];
          return -1 ^ e;
        }(0 | t, e, e.length, 0) : function (e, t, r, n) {
          var i = o,
            s = n + r;
          e ^= -1;
          for (var a = n; a < s; a++) e = e >>> 8 ^ i[255 & (e ^ t.charCodeAt(a))];
          return -1 ^ e;
        }(0 | t, e, e.length, 0) : 0;
      };
    }, {
      "./utils": 32
    }],
    5: [function (e, t, r) {
      "use strict";

      r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
    }, {}],
    6: [function (e, t, r) {
      "use strict";

      var n = null;
      n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = {
        Promise: n
      };
    }, {
      lie: 37
    }],
    7: [function (e, t, r) {
      "use strict";

      var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
        i = e("pako"),
        s = e("./utils"),
        a = e("./stream/GenericWorker"),
        o = n ? "uint8array" : "array";
      function h(e, t) {
        a.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {};
      }
      r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function (e) {
        this.meta = e.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e.data), !1);
      }, h.prototype.flush = function () {
        a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0);
      }, h.prototype.cleanUp = function () {
        a.prototype.cleanUp.call(this), this._pako = null;
      }, h.prototype._createPako = function () {
        this._pako = new i[this._pakoAction]({
          raw: !0,
          level: this._pakoOptions.level || -1
        });
        var t = this;
        this._pako.onData = function (e) {
          t.push({
            data: e,
            meta: t.meta
          });
        };
      }, r.compressWorker = function (e) {
        return new h("Deflate", e);
      }, r.uncompressWorker = function () {
        return new h("Inflate", {});
      };
    }, {
      "./stream/GenericWorker": 28,
      "./utils": 32,
      pako: 38
    }],
    8: [function (e, t, r) {
      "use strict";

      function A(e, t) {
        var r,
          n = "";
        for (r = 0; r < t; r++) n += String.fromCharCode(255 & e), e >>>= 8;
        return n;
      }
      function n(e, t, r, n, i, s) {
        var a,
          o,
          h = e.file,
          u = e.compression,
          l = s !== O.utf8encode,
          f = I.transformTo("string", s(h.name)),
          c = I.transformTo("string", O.utf8encode(h.name)),
          d = h.comment,
          p = I.transformTo("string", s(d)),
          m = I.transformTo("string", O.utf8encode(d)),
          _ = c.length !== h.name.length,
          g = m.length !== d.length,
          b = "",
          v = "",
          y = "",
          w = h.dir,
          k = h.date,
          x = {
            crc32: 0,
            compressedSize: 0,
            uncompressedSize: 0
          };
        t && !r || (x.crc32 = e.crc32, x.compressedSize = e.compressedSize, x.uncompressedSize = e.uncompressedSize);
        var S = 0;
        t && (S |= 8), l || !_ && !g || (S |= 2048);
        var z = 0,
          C = 0;
        w && (z |= 16), "UNIX" === i ? (C = 798, z |= function (e, t) {
          var r = e;
          return e || (r = t ? 16893 : 33204), (65535 & r) << 16;
        }(h.unixPermissions, w)) : (C = 20, z |= function (e) {
          return 63 & (e || 0);
        }(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
        var E = "";
        return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), {
          fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
          dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n, 4) + f + b + p
        };
      }
      var I = e("../utils"),
        i = e("../stream/GenericWorker"),
        O = e("../utf8"),
        B = e("../crc32"),
        R = e("../signature");
      function s(e, t, r, n) {
        i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = r, this.encodeFileName = n, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      I.inherits(s, i), s.prototype.push = function (e) {
        var t = e.meta.percent || 0,
          r = this.entriesCount,
          n = this._sources.length;
        this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, i.prototype.push.call(this, {
          data: e.data,
          meta: {
            currentFile: this.currentFile,
            percent: r ? (t + 100 * (r - n - 1)) / r : 100
          }
        }));
      }, s.prototype.openedSource = function (e) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
        var t = this.streamFiles && !e.file.dir;
        if (t) {
          var r = n(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({
            data: r.fileRecord,
            meta: {
              percent: 0
            }
          });
        } else this.accumulate = !0;
      }, s.prototype.closedSource = function (e) {
        this.accumulate = !1;
        var t = this.streamFiles && !e.file.dir,
          r = n(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(r.dirRecord), t) this.push({
          data: function (e) {
            return R.DATA_DESCRIPTOR + A(e.crc32, 4) + A(e.compressedSize, 4) + A(e.uncompressedSize, 4);
          }(e),
          meta: {
            percent: 100
          }
        });else for (this.push({
          data: r.fileRecord,
          meta: {
            percent: 0
          }
        }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, s.prototype.flush = function () {
        for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++) this.push({
          data: this.dirRecords[t],
          meta: {
            percent: 100
          }
        });
        var r = this.bytesWritten - e,
          n = function (e, t, r, n, i) {
            var s = I.transformTo("string", i(n));
            return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e, 2) + A(e, 2) + A(t, 4) + A(r, 4) + A(s.length, 2) + s;
          }(this.dirRecords.length, r, e, this.zipComment, this.encodeFileName);
        this.push({
          data: n,
          meta: {
            percent: 100
          }
        });
      }, s.prototype.prepareNextSource = function () {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, s.prototype.registerPrevious = function (e) {
        this._sources.push(e);
        var t = this;
        return e.on("data", function (e) {
          t.processChunk(e);
        }), e.on("end", function () {
          t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end();
        }), e.on("error", function (e) {
          t.error(e);
        }), this;
      }, s.prototype.resume = function () {
        return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, s.prototype.error = function (e) {
        var t = this._sources;
        if (!i.prototype.error.call(this, e)) return !1;
        for (var r = 0; r < t.length; r++) try {
          t[r].error(e);
        } catch (e) {}
        return !0;
      }, s.prototype.lock = function () {
        i.prototype.lock.call(this);
        for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock();
      }, t.exports = s;
    }, {
      "../crc32": 4,
      "../signature": 23,
      "../stream/GenericWorker": 28,
      "../utf8": 31,
      "../utils": 32
    }],
    9: [function (e, t, r) {
      "use strict";

      var u = e("../compressions"),
        n = e("./ZipFileWorker");
      r.generateWorker = function (e, a, t) {
        var o = new n(a.streamFiles, t, a.platform, a.encodeFileName),
          h = 0;
        try {
          e.forEach(function (e, t) {
            h++;
            var r = function (e, t) {
                var r = e || t,
                  n = u[r];
                if (!n) throw new Error(r + " is not a valid compression method !");
                return n;
              }(t.options.compression, a.compression),
              n = t.options.compressionOptions || a.compressionOptions || {},
              i = t.dir,
              s = t.date;
            t._compressWorker(r, n).withStreamInfo("file", {
              name: e,
              dir: i,
              date: s,
              comment: t.comment || "",
              unixPermissions: t.unixPermissions,
              dosPermissions: t.dosPermissions
            }).pipe(o);
          }), o.entriesCount = h;
        } catch (e) {
          o.error(e);
        }
        return o;
      };
    }, {
      "../compressions": 3,
      "./ZipFileWorker": 8
    }],
    10: [function (e, t, r) {
      "use strict";

      function n() {
        if (!(this instanceof n)) return new n();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function () {
          var e = new n();
          for (var t in this) "function" != typeof this[t] && (e[t] = this[t]);
          return e;
        };
      }
      (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function (e, t) {
        return new n().loadAsync(e, t);
      }, n.external = e("./external"), t.exports = n;
    }, {
      "./defaults": 5,
      "./external": 6,
      "./load": 11,
      "./object": 15,
      "./support": 30
    }],
    11: [function (e, t, r) {
      "use strict";

      var u = e("./utils"),
        i = e("./external"),
        n = e("./utf8"),
        s = e("./zipEntries"),
        a = e("./stream/Crc32Probe"),
        l = e("./nodejsUtils");
      function f(n) {
        return new i.Promise(function (e, t) {
          var r = n.decompressed.getContentWorker().pipe(new a());
          r.on("error", function (e) {
            t(e);
          }).on("end", function () {
            r.streamInfo.crc32 !== n.decompressed.crc32 ? t(new Error("Corrupted zip : CRC32 mismatch")) : e();
          }).resume();
        });
      }
      t.exports = function (e, o) {
        var h = this;
        return o = u.extend(o || {}, {
          base64: !1,
          checkCRC32: !1,
          optimizedBinaryString: !1,
          createFolders: !1,
          decodeFileName: n.utf8decode
        }), l.isNode && l.isStream(e) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e, !0, o.optimizedBinaryString, o.base64).then(function (e) {
          var t = new s(o);
          return t.load(e), t;
        }).then(function (e) {
          var t = [i.Promise.resolve(e)],
            r = e.files;
          if (o.checkCRC32) for (var n = 0; n < r.length; n++) t.push(f(r[n]));
          return i.Promise.all(t);
        }).then(function (e) {
          for (var t = e.shift(), r = t.files, n = 0; n < r.length; n++) {
            var i = r[n],
              s = i.fileNameStr,
              a = u.resolve(i.fileNameStr);
            h.file(a, i.decompressed, {
              binary: !0,
              optimizedBinaryString: !0,
              date: i.date,
              dir: i.dir,
              comment: i.fileCommentStr.length ? i.fileCommentStr : null,
              unixPermissions: i.unixPermissions,
              dosPermissions: i.dosPermissions,
              createFolders: o.createFolders
            }), i.dir || (h.file(a).unsafeOriginalName = s);
          }
          return t.zipComment.length && (h.comment = t.zipComment), h;
        });
      };
    }, {
      "./external": 6,
      "./nodejsUtils": 14,
      "./stream/Crc32Probe": 25,
      "./utf8": 31,
      "./utils": 32,
      "./zipEntries": 33
    }],
    12: [function (e, t, r) {
      "use strict";

      var n = e("../utils"),
        i = e("../stream/GenericWorker");
      function s(e, t) {
        i.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t);
      }
      n.inherits(s, i), s.prototype._bindStream = function (e) {
        var t = this;
        (this._stream = e).pause(), e.on("data", function (e) {
          t.push({
            data: e,
            meta: {
              percent: 0
            }
          });
        }).on("error", function (e) {
          t.isPaused ? this.generatedError = e : t.error(e);
        }).on("end", function () {
          t.isPaused ? t._upstreamEnded = !0 : t.end();
        });
      }, s.prototype.pause = function () {
        return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, s.prototype.resume = function () {
        return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, t.exports = s;
    }, {
      "../stream/GenericWorker": 28,
      "../utils": 32
    }],
    13: [function (e, t, r) {
      "use strict";

      var i = e("readable-stream").Readable;
      function n(e, t, r) {
        i.call(this, t), this._helper = e;
        var n = this;
        e.on("data", function (e, t) {
          n.push(e) || n._helper.pause(), r && r(t);
        }).on("error", function (e) {
          n.emit("error", e);
        }).on("end", function () {
          n.push(null);
        });
      }
      e("../utils").inherits(n, i), n.prototype._read = function () {
        this._helper.resume();
      }, t.exports = n;
    }, {
      "../utils": 32,
      "readable-stream": 16
    }],
    14: [function (e, t, r) {
      "use strict";

      t.exports = {
        isNode: "undefined" != typeof Buffer,
        newBufferFrom: function (e, t) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
          if ("number" == typeof e) throw new Error('The "data" argument must not be a number');
          return new Buffer(e, t);
        },
        allocBuffer: function (e) {
          if (Buffer.alloc) return Buffer.alloc(e);
          var t = new Buffer(e);
          return t.fill(0), t;
        },
        isBuffer: function (e) {
          return Buffer.isBuffer(e);
        },
        isStream: function (e) {
          return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume;
        }
      };
    }, {}],
    15: [function (e, t, r) {
      "use strict";

      function s(e, t, r) {
        var n,
          i = u.getTypeOf(t),
          s = u.extend(r || {}, f);
        s.date = s.date || new Date(), null !== s.compression && (s.compression = s.compression.toUpperCase()), "string" == typeof s.unixPermissions && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = g(e)), s.createFolders && (n = _(e)) && b.call(this, n, !0);
        var a = "string" === i && !1 === s.binary && !1 === s.base64;
        r && void 0 !== r.binary || (s.binary = !a), (t instanceof c && 0 === t.uncompressedSize || s.dir || !t || 0 === t.length) && (s.base64 = !1, s.binary = !0, t = "", s.compression = "STORE", i = "string");
        var o = null;
        o = t instanceof c || t instanceof l ? t : p.isNode && p.isStream(t) ? new m(e, t) : u.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
        var h = new d(e, o, s);
        this.files[e] = h;
      }
      var i = e("./utf8"),
        u = e("./utils"),
        l = e("./stream/GenericWorker"),
        a = e("./stream/StreamHelper"),
        f = e("./defaults"),
        c = e("./compressedObject"),
        d = e("./zipObject"),
        o = e("./generate"),
        p = e("./nodejsUtils"),
        m = e("./nodejs/NodejsStreamInputAdapter"),
        _ = function (e) {
          "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
          var t = e.lastIndexOf("/");
          return 0 < t ? e.substring(0, t) : "";
        },
        g = function (e) {
          return "/" !== e.slice(-1) && (e += "/"), e;
        },
        b = function (e, t) {
          return t = void 0 !== t ? t : f.createFolders, e = g(e), this.files[e] || s.call(this, e, null, {
            dir: !0,
            createFolders: t
          }), this.files[e];
        };
      function h(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      }
      var n = {
        load: function () {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },
        forEach: function (e) {
          var t, r, n;
          for (t in this.files) n = this.files[t], (r = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(r, n);
        },
        filter: function (r) {
          var n = [];
          return this.forEach(function (e, t) {
            r(e, t) && n.push(t);
          }), n;
        },
        file: function (e, t, r) {
          if (1 !== arguments.length) return e = this.root + e, s.call(this, e, t, r), this;
          if (h(e)) {
            var n = e;
            return this.filter(function (e, t) {
              return !t.dir && n.test(e);
            });
          }
          var i = this.files[this.root + e];
          return i && !i.dir ? i : null;
        },
        folder: function (r) {
          if (!r) return this;
          if (h(r)) return this.filter(function (e, t) {
            return t.dir && r.test(e);
          });
          var e = this.root + r,
            t = b.call(this, e),
            n = this.clone();
          return n.root = t.name, n;
        },
        remove: function (r) {
          r = this.root + r;
          var e = this.files[r];
          if (e || ("/" !== r.slice(-1) && (r += "/"), e = this.files[r]), e && !e.dir) delete this.files[r];else for (var t = this.filter(function (e, t) {
              return t.name.slice(0, r.length) === r;
            }), n = 0; n < t.length; n++) delete this.files[t[n].name];
          return this;
        },
        generate: function () {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },
        generateInternalStream: function (e) {
          var t,
            r = {};
          try {
            if ((r = u.extend(e || {}, {
              streamFiles: !1,
              compression: "STORE",
              compressionOptions: null,
              type: "",
              platform: "DOS",
              comment: null,
              mimeType: "application/zip",
              encodeFileName: i.utf8encode
            })).type = r.type.toLowerCase(), r.compression = r.compression.toUpperCase(), "binarystring" === r.type && (r.type = "string"), !r.type) throw new Error("No output type specified.");
            u.checkSupport(r.type), "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"), "win32" === r.platform && (r.platform = "DOS");
            var n = r.comment || this.comment || "";
            t = o.generateWorker(this, r, n);
          } catch (e) {
            (t = new l("error")).error(e);
          }
          return new a(t, r.type || "string", r.mimeType);
        },
        generateAsync: function (e, t) {
          return this.generateInternalStream(e).accumulate(t);
        },
        generateNodeStream: function (e, t) {
          return (e = e || {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t);
        }
      };
      t.exports = n;
    }, {
      "./compressedObject": 2,
      "./defaults": 5,
      "./generate": 9,
      "./nodejs/NodejsStreamInputAdapter": 12,
      "./nodejsUtils": 14,
      "./stream/GenericWorker": 28,
      "./stream/StreamHelper": 29,
      "./utf8": 31,
      "./utils": 32,
      "./zipObject": 35
    }],
    16: [function (e, t, r) {
      "use strict";

      t.exports = e("stream");
    }, {
      stream: void 0
    }],
    17: [function (e, t, r) {
      "use strict";

      var n = e("./DataReader");
      function i(e) {
        n.call(this, e);
        for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t];
      }
      e("../utils").inherits(i, n), i.prototype.byteAt = function (e) {
        return this.data[this.zero + e];
      }, i.prototype.lastIndexOfSignature = function (e) {
        for (var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), i = e.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t && this.data[s + 1] === r && this.data[s + 2] === n && this.data[s + 3] === i) return s - this.zero;
        return -1;
      }, i.prototype.readAndCheckSignature = function (e) {
        var t = e.charCodeAt(0),
          r = e.charCodeAt(1),
          n = e.charCodeAt(2),
          i = e.charCodeAt(3),
          s = this.readData(4);
        return t === s[0] && r === s[1] && n === s[2] && i === s[3];
      }, i.prototype.readData = function (e) {
        if (this.checkOffset(e), 0 === e) return [];
        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, t.exports = i;
    }, {
      "../utils": 32,
      "./DataReader": 18
    }],
    18: [function (e, t, r) {
      "use strict";

      var n = e("../utils");
      function i(e) {
        this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
      }
      i.prototype = {
        checkOffset: function (e) {
          this.checkIndex(this.index + e);
        },
        checkIndex: function (e) {
          if (this.length < this.zero + e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
        },
        setIndex: function (e) {
          this.checkIndex(e), this.index = e;
        },
        skip: function (e) {
          this.setIndex(this.index + e);
        },
        byteAt: function () {},
        readInt: function (e) {
          var t,
            r = 0;
          for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) r = (r << 8) + this.byteAt(t);
          return this.index += e, r;
        },
        readString: function (e) {
          return n.transformTo("string", this.readData(e));
        },
        readData: function () {},
        lastIndexOfSignature: function () {},
        readAndCheckSignature: function () {},
        readDate: function () {
          var e = this.readInt(4);
          return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
        }
      }, t.exports = i;
    }, {
      "../utils": 32
    }],
    19: [function (e, t, r) {
      "use strict";

      var n = e("./Uint8ArrayReader");
      function i(e) {
        n.call(this, e);
      }
      e("../utils").inherits(i, n), i.prototype.readData = function (e) {
        this.checkOffset(e);
        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, t.exports = i;
    }, {
      "../utils": 32,
      "./Uint8ArrayReader": 21
    }],
    20: [function (e, t, r) {
      "use strict";

      var n = e("./DataReader");
      function i(e) {
        n.call(this, e);
      }
      e("../utils").inherits(i, n), i.prototype.byteAt = function (e) {
        return this.data.charCodeAt(this.zero + e);
      }, i.prototype.lastIndexOfSignature = function (e) {
        return this.data.lastIndexOf(e) - this.zero;
      }, i.prototype.readAndCheckSignature = function (e) {
        return e === this.readData(4);
      }, i.prototype.readData = function (e) {
        this.checkOffset(e);
        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, t.exports = i;
    }, {
      "../utils": 32,
      "./DataReader": 18
    }],
    21: [function (e, t, r) {
      "use strict";

      var n = e("./ArrayReader");
      function i(e) {
        n.call(this, e);
      }
      e("../utils").inherits(i, n), i.prototype.readData = function (e) {
        if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
        var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, t.exports = i;
    }, {
      "../utils": 32,
      "./ArrayReader": 17
    }],
    22: [function (e, t, r) {
      "use strict";

      var n = e("../utils"),
        i = e("../support"),
        s = e("./ArrayReader"),
        a = e("./StringReader"),
        o = e("./NodeBufferReader"),
        h = e("./Uint8ArrayReader");
      t.exports = function (e) {
        var t = n.getTypeOf(e);
        return n.checkSupport(t), "string" !== t || i.uint8array ? "nodebuffer" === t ? new o(e) : i.uint8array ? new h(n.transformTo("uint8array", e)) : new s(n.transformTo("array", e)) : new a(e);
      };
    }, {
      "../support": 30,
      "../utils": 32,
      "./ArrayReader": 17,
      "./NodeBufferReader": 19,
      "./StringReader": 20,
      "./Uint8ArrayReader": 21
    }],
    23: [function (e, t, r) {
      "use strict";

      r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\b";
    }, {}],
    24: [function (e, t, r) {
      "use strict";

      var n = e("./GenericWorker"),
        i = e("../utils");
      function s(e) {
        n.call(this, "ConvertWorker to " + e), this.destType = e;
      }
      i.inherits(s, n), s.prototype.processChunk = function (e) {
        this.push({
          data: i.transformTo(this.destType, e.data),
          meta: e.meta
        });
      }, t.exports = s;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    25: [function (e, t, r) {
      "use strict";

      var n = e("./GenericWorker"),
        i = e("../crc32");
      function s() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(s, n), s.prototype.processChunk = function (e) {
        this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0), this.push(e);
      }, t.exports = s;
    }, {
      "../crc32": 4,
      "../utils": 32,
      "./GenericWorker": 28
    }],
    26: [function (e, t, r) {
      "use strict";

      var n = e("../utils"),
        i = e("./GenericWorker");
      function s(e) {
        i.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
      }
      n.inherits(s, i), s.prototype.processChunk = function (e) {
        if (e) {
          var t = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = t + e.data.length;
        }
        i.prototype.processChunk.call(this, e);
      }, t.exports = s;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    27: [function (e, t, r) {
      "use strict";

      var n = e("../utils"),
        i = e("./GenericWorker");
      function s(e) {
        i.call(this, "DataWorker");
        var t = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function (e) {
          t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = n.getTypeOf(e), t.isPaused || t._tickAndRepeat();
        }, function (e) {
          t.error(e);
        });
      }
      n.inherits(s, i), s.prototype.cleanUp = function () {
        i.prototype.cleanUp.call(this), this.data = null;
      }, s.prototype.resume = function () {
        return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
      }, s.prototype._tickAndRepeat = function () {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, s.prototype._tick = function () {
        if (this.isPaused || this.isFinished) return !1;
        var e = null,
          t = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            e = this.data.substring(this.index, t);
            break;
          case "uint8array":
            e = this.data.subarray(this.index, t);
            break;
          case "array":
          case "nodebuffer":
            e = this.data.slice(this.index, t);
        }
        return this.index = t, this.push({
          data: e,
          meta: {
            percent: this.max ? this.index / this.max * 100 : 0
          }
        });
      }, t.exports = s;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    28: [function (e, t, r) {
      "use strict";

      function n(e) {
        this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
          data: [],
          end: [],
          error: []
        }, this.previous = null;
      }
      n.prototype = {
        push: function (e) {
          this.emit("data", e);
        },
        end: function () {
          if (this.isFinished) return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (e) {
            this.emit("error", e);
          }
          return !0;
        },
        error: function (e) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
        },
        on: function (e, t) {
          return this._listeners[e].push(t), this;
        },
        cleanUp: function () {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        },
        emit: function (e, t) {
          if (this._listeners[e]) for (var r = 0; r < this._listeners[e].length; r++) this._listeners[e][r].call(this, t);
        },
        pipe: function (e) {
          return e.registerPrevious(this);
        },
        registerPrevious: function (e) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
          var t = this;
          return e.on("data", function (e) {
            t.processChunk(e);
          }), e.on("end", function () {
            t.end();
          }), e.on("error", function (e) {
            t.error(e);
          }), this;
        },
        pause: function () {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        },
        resume: function () {
          if (!this.isPaused || this.isFinished) return !1;
          var e = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
        },
        flush: function () {},
        processChunk: function (e) {
          this.push(e);
        },
        withStreamInfo: function (e, t) {
          return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this;
        },
        mergeStreamInfo: function () {
          for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
        },
        lock: function () {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        },
        toString: function () {
          var e = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e : e;
        }
      }, t.exports = n;
    }, {}],
    29: [function (e, t, r) {
      "use strict";

      var h = e("../utils"),
        i = e("./ConvertWorker"),
        s = e("./GenericWorker"),
        u = e("../base64"),
        n = e("../support"),
        a = e("../external"),
        o = null;
      if (n.nodestream) try {
        o = e("../nodejs/NodejsStreamOutputAdapter");
      } catch (e) {}
      function l(e, o) {
        return new a.Promise(function (t, r) {
          var n = [],
            i = e._internalType,
            s = e._outputType,
            a = e._mimeType;
          e.on("data", function (e, t) {
            n.push(e), o && o(t);
          }).on("error", function (e) {
            n = [], r(e);
          }).on("end", function () {
            try {
              var e = function (e, t, r) {
                switch (e) {
                  case "blob":
                    return h.newBlob(h.transformTo("arraybuffer", t), r);
                  case "base64":
                    return u.encode(t);
                  default:
                    return h.transformTo(e, t);
                }
              }(s, function (e, t) {
                var r,
                  n = 0,
                  i = null,
                  s = 0;
                for (r = 0; r < t.length; r++) s += t[r].length;
                switch (e) {
                  case "string":
                    return t.join("");
                  case "array":
                    return Array.prototype.concat.apply([], t);
                  case "uint8array":
                    for (i = new Uint8Array(s), r = 0; r < t.length; r++) i.set(t[r], n), n += t[r].length;
                    return i;
                  case "nodebuffer":
                    return Buffer.concat(t);
                  default:
                    throw new Error("concat : unsupported type '" + e + "'");
                }
              }(i, n), a);
              t(e);
            } catch (e) {
              r(e);
            }
            n = [];
          }).resume();
        });
      }
      function f(e, t, r) {
        var n = t;
        switch (t) {
          case "blob":
          case "arraybuffer":
            n = "uint8array";
            break;
          case "base64":
            n = "string";
        }
        try {
          this._internalType = n, this._outputType = t, this._mimeType = r, h.checkSupport(n), this._worker = e.pipe(new i(n)), e.lock();
        } catch (e) {
          this._worker = new s("error"), this._worker.error(e);
        }
      }
      f.prototype = {
        accumulate: function (e) {
          return l(this, e);
        },
        on: function (e, t) {
          var r = this;
          return "data" === e ? this._worker.on(e, function (e) {
            t.call(r, e.data, e.meta);
          }) : this._worker.on(e, function () {
            h.delay(t, arguments, r);
          }), this;
        },
        resume: function () {
          return h.delay(this._worker.resume, [], this._worker), this;
        },
        pause: function () {
          return this._worker.pause(), this;
        },
        toNodejsStream: function (e) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, {
            objectMode: "nodebuffer" !== this._outputType
          }, e);
        }
      }, t.exports = f;
    }, {
      "../base64": 1,
      "../external": 6,
      "../nodejs/NodejsStreamOutputAdapter": 13,
      "../support": 30,
      "../utils": 32,
      "./ConvertWorker": 24,
      "./GenericWorker": 28
    }],
    30: [function (e, t, r) {
      "use strict";

      if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = !1;else {
        var n = new ArrayBuffer(0);
        try {
          r.blob = 0 === new Blob([n], {
            type: "application/zip"
          }).size;
        } catch (e) {
          try {
            var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
          } catch (e) {
            r.blob = !1;
          }
        }
      }
      try {
        r.nodestream = !!e("readable-stream").Readable;
      } catch (e) {
        r.nodestream = !1;
      }
    }, {
      "readable-stream": 16
    }],
    31: [function (e, t, s) {
      "use strict";

      for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
      u[254] = u[254] = 1;
      function a() {
        n.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function l() {
        n.call(this, "utf-8 encode");
      }
      s.utf8encode = function (e) {
        return h.nodebuffer ? r.newBufferFrom(e, "utf-8") : function (e) {
          var t,
            r,
            n,
            i,
            s,
            a = e.length,
            o = 0;
          for (i = 0; i < a; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
          for (t = h.uint8array ? new Uint8Array(o) : new Array(o), i = s = 0; s < o; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
          return t;
        }(e);
      }, s.utf8decode = function (e) {
        return h.nodebuffer ? o.transformTo("nodebuffer", e).toString("utf-8") : function (e) {
          var t,
            r,
            n,
            i,
            s = e.length,
            a = new Array(2 * s);
          for (t = r = 0; t < s;) if ((n = e[t++]) < 128) a[r++] = n;else if (4 < (i = u[n])) a[r++] = 65533, t += i - 1;else {
            for (n &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && t < s;) n = n << 6 | 63 & e[t++], i--;
            1 < i ? a[r++] = 65533 : n < 65536 ? a[r++] = n : (n -= 65536, a[r++] = 55296 | n >> 10 & 1023, a[r++] = 56320 | 1023 & n);
          }
          return a.length !== r && (a.subarray ? a = a.subarray(0, r) : a.length = r), o.applyFromCharCode(a);
        }(e = o.transformTo(h.uint8array ? "uint8array" : "array", e));
      }, o.inherits(a, n), a.prototype.processChunk = function (e) {
        var t = o.transformTo(h.uint8array ? "uint8array" : "array", e.data);
        if (this.leftOver && this.leftOver.length) {
          if (h.uint8array) {
            var r = t;
            (t = new Uint8Array(r.length + this.leftOver.length)).set(this.leftOver, 0), t.set(r, this.leftOver.length);
          } else t = this.leftOver.concat(t);
          this.leftOver = null;
        }
        var n = function (e, t) {
            var r;
            for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);) r--;
            return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t;
          }(t),
          i = t;
        n !== t.length && (h.uint8array ? (i = t.subarray(0, n), this.leftOver = t.subarray(n, t.length)) : (i = t.slice(0, n), this.leftOver = t.slice(n, t.length))), this.push({
          data: s.utf8decode(i),
          meta: e.meta
        });
      }, a.prototype.flush = function () {
        this.leftOver && this.leftOver.length && (this.push({
          data: s.utf8decode(this.leftOver),
          meta: {}
        }), this.leftOver = null);
      }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function (e) {
        this.push({
          data: s.utf8encode(e.data),
          meta: e.meta
        });
      }, s.Utf8EncodeWorker = l;
    }, {
      "./nodejsUtils": 14,
      "./stream/GenericWorker": 28,
      "./support": 30,
      "./utils": 32
    }],
    32: [function (e, t, a) {
      "use strict";

      var o = e("./support"),
        h = e("./base64"),
        r = e("./nodejsUtils"),
        u = e("./external");
      function n(e) {
        return e;
      }
      function l(e, t) {
        for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
        return t;
      }
      e("setimmediate"), a.newBlob = function (t, r) {
        a.checkSupport("blob");
        try {
          return new Blob([t], {
            type: r
          });
        } catch (e) {
          try {
            var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return n.append(t), n.getBlob(r);
          } catch (e) {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var i = {
        stringifyByChunk: function (e, t, r) {
          var n = [],
            i = 0,
            s = e.length;
          if (s <= r) return String.fromCharCode.apply(null, e);
          for (; i < s;) "array" === t || "nodebuffer" === t ? n.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + r, s)))) : n.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + r, s)))), i += r;
          return n.join("");
        },
        stringifyByChar: function (e) {
          for (var t = "", r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
          return t;
        },
        applyCanBeUsed: {
          uint8array: function () {
            try {
              return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
            } catch (e) {
              return !1;
            }
          }(),
          nodebuffer: function () {
            try {
              return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
            } catch (e) {
              return !1;
            }
          }()
        }
      };
      function s(e) {
        var t = 65536,
          r = a.getTypeOf(e),
          n = !0;
        if ("uint8array" === r ? n = i.applyCanBeUsed.uint8array : "nodebuffer" === r && (n = i.applyCanBeUsed.nodebuffer), n) for (; 1 < t;) try {
          return i.stringifyByChunk(e, r, t);
        } catch (e) {
          t = Math.floor(t / 2);
        }
        return i.stringifyByChar(e);
      }
      function f(e, t) {
        for (var r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      a.applyFromCharCode = s;
      var c = {};
      c.string = {
        string: n,
        array: function (e) {
          return l(e, new Array(e.length));
        },
        arraybuffer: function (e) {
          return c.string.uint8array(e).buffer;
        },
        uint8array: function (e) {
          return l(e, new Uint8Array(e.length));
        },
        nodebuffer: function (e) {
          return l(e, r.allocBuffer(e.length));
        }
      }, c.array = {
        string: s,
        array: n,
        arraybuffer: function (e) {
          return new Uint8Array(e).buffer;
        },
        uint8array: function (e) {
          return new Uint8Array(e);
        },
        nodebuffer: function (e) {
          return r.newBufferFrom(e);
        }
      }, c.arraybuffer = {
        string: function (e) {
          return s(new Uint8Array(e));
        },
        array: function (e) {
          return f(new Uint8Array(e), new Array(e.byteLength));
        },
        arraybuffer: n,
        uint8array: function (e) {
          return new Uint8Array(e);
        },
        nodebuffer: function (e) {
          return r.newBufferFrom(new Uint8Array(e));
        }
      }, c.uint8array = {
        string: s,
        array: function (e) {
          return f(e, new Array(e.length));
        },
        arraybuffer: function (e) {
          return e.buffer;
        },
        uint8array: n,
        nodebuffer: function (e) {
          return r.newBufferFrom(e);
        }
      }, c.nodebuffer = {
        string: s,
        array: function (e) {
          return f(e, new Array(e.length));
        },
        arraybuffer: function (e) {
          return c.nodebuffer.uint8array(e).buffer;
        },
        uint8array: function (e) {
          return f(e, new Uint8Array(e.length));
        },
        nodebuffer: n
      }, a.transformTo = function (e, t) {
        if (t = t || "", !e) return t;
        a.checkSupport(e);
        var r = a.getTypeOf(t);
        return c[r][e](t);
      }, a.resolve = function (e) {
        for (var t = e.split("/"), r = [], n = 0; n < t.length; n++) {
          var i = t[n];
          "." === i || "" === i && 0 !== n && n !== t.length - 1 || (".." === i ? r.pop() : r.push(i));
        }
        return r.join("/");
      }, a.getTypeOf = function (e) {
        return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : o.nodebuffer && r.isBuffer(e) ? "nodebuffer" : o.uint8array && e instanceof Uint8Array ? "uint8array" : o.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, a.checkSupport = function (e) {
        if (!o[e.toLowerCase()]) throw new Error(e + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function (e) {
        var t,
          r,
          n = "";
        for (r = 0; r < (e || "").length; r++) n += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
        return n;
      }, a.delay = function (e, t, r) {
        setImmediate(function () {
          e.apply(r || null, t || []);
        });
      }, a.inherits = function (e, t) {
        function r() {}
        r.prototype = t.prototype, e.prototype = new r();
      }, a.extend = function () {
        var e,
          t,
          r = {};
        for (e = 0; e < arguments.length; e++) for (t in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], t) && void 0 === r[t] && (r[t] = arguments[e][t]);
        return r;
      }, a.prepareContent = function (r, e, n, i, s) {
        return u.Promise.resolve(e).then(function (n) {
          return o.blob && (n instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n))) && "undefined" != typeof FileReader ? new u.Promise(function (t, r) {
            var e = new FileReader();
            e.onload = function (e) {
              t(e.target.result);
            }, e.onerror = function (e) {
              r(e.target.error);
            }, e.readAsArrayBuffer(n);
          }) : n;
        }).then(function (e) {
          var t = a.getTypeOf(e);
          return t ? ("arraybuffer" === t ? e = a.transformTo("uint8array", e) : "string" === t && (s ? e = h.decode(e) : n && !0 !== i && (e = function (e) {
            return l(e, o.uint8array ? new Uint8Array(e.length) : new Array(e.length));
          }(e))), e) : u.Promise.reject(new Error("Can't read the data of '" + r + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, {
      "./base64": 1,
      "./external": 6,
      "./nodejsUtils": 14,
      "./support": 30,
      setimmediate: 54
    }],
    33: [function (e, t, r) {
      "use strict";

      var n = e("./reader/readerFor"),
        i = e("./utils"),
        s = e("./signature"),
        a = e("./zipEntry"),
        o = e("./support");
      function h(e) {
        this.files = [], this.loadOptions = e;
      }
      h.prototype = {
        checkSignature: function (e) {
          if (!this.reader.readAndCheckSignature(e)) {
            this.reader.index -= 4;
            var t = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
          }
        },
        isSignature: function (e, t) {
          var r = this.reader.index;
          this.reader.setIndex(e);
          var n = this.reader.readString(4) === t;
          return this.reader.setIndex(r), n;
        },
        readBlockEndOfCentral: function () {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e = this.reader.readData(this.zipCommentLength),
            t = o.uint8array ? "uint8array" : "array",
            r = i.transformTo(t, e);
          this.zipComment = this.loadOptions.decodeFileName(r);
        },
        readBlockZip64EndOfCentral: function () {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n;) e = this.reader.readInt(2), t = this.reader.readInt(4), r = this.reader.readData(t), this.zip64ExtensibleData[e] = {
            id: e,
            length: t,
            value: r
          };
        },
        readBlockZip64EndOfCentralLocator: function () {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        },
        readLocalFiles: function () {
          var e, t;
          for (e = 0; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
        },
        readCentralDir: function () {
          var e;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);) (e = new a({
            zip64: this.zip64
          }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        },
        readEndOfCentral: function () {
          var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (e < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e);
          var t = e;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r += 20, r += 12 + this.zip64EndOfCentralSize);
          var n = t - r;
          if (0 < n) this.isSignature(t, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n);else if (n < 0) throw new Error("Corrupted zip: missing " + Math.abs(n) + " bytes.");
        },
        prepareReader: function (e) {
          this.reader = n(e);
        },
        load: function (e) {
          this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        }
      }, t.exports = h;
    }, {
      "./reader/readerFor": 22,
      "./signature": 23,
      "./support": 30,
      "./utils": 32,
      "./zipEntry": 34
    }],
    34: [function (e, t, r) {
      "use strict";

      var n = e("./reader/readerFor"),
        s = e("./utils"),
        i = e("./compressedObject"),
        a = e("./crc32"),
        o = e("./utf8"),
        h = e("./compressions"),
        u = e("./support");
      function l(e, t) {
        this.options = e, this.loadOptions = t;
      }
      l.prototype = {
        isEncrypted: function () {
          return 1 == (1 & this.bitFlag);
        },
        useUTF8: function () {
          return 2048 == (2048 & this.bitFlag);
        },
        readLocalPart: function (e) {
          var t, r;
          if (e.skip(22), this.fileNameLength = e.readInt(2), r = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(r), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t = function (e) {
            for (var t in h) if (Object.prototype.hasOwnProperty.call(h, t) && h[t].magic === e) return h[t];
            return null;
          }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
        },
        readCentralPart: function (e) {
          this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
          var t = e.readInt(2);
          if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
        },
        processAttributes: function () {
          this.unixPermissions = null, this.dosPermissions = null;
          var e = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
        },
        parseZIP64ExtraField: function () {
          if (this.extraFields[1]) {
            var e = n(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
          }
        },
        readExtraFields: function (e) {
          var t,
            r,
            n,
            i = e.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e.index + 4 < i;) t = e.readInt(2), r = e.readInt(2), n = e.readData(r), this.extraFields[t] = {
            id: t,
            length: r,
            value: n
          };
          e.setIndex(i);
        },
        handleUTF8: function () {
          var e = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);else {
            var t = this.findExtraFieldUnicodePath();
            if (null !== t) this.fileNameStr = t;else {
              var r = s.transformTo(e, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r);
            }
            var n = this.findExtraFieldUnicodeComment();
            if (null !== n) this.fileCommentStr = n;else {
              var i = s.transformTo(e, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i);
            }
          }
        },
        findExtraFieldUnicodePath: function () {
          var e = this.extraFields[28789];
          if (e) {
            var t = n(e.value);
            return 1 !== t.readInt(1) ? null : a(this.fileName) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5));
          }
          return null;
        },
        findExtraFieldUnicodeComment: function () {
          var e = this.extraFields[25461];
          if (e) {
            var t = n(e.value);
            return 1 !== t.readInt(1) ? null : a(this.fileComment) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5));
          }
          return null;
        }
      }, t.exports = l;
    }, {
      "./compressedObject": 2,
      "./compressions": 3,
      "./crc32": 4,
      "./reader/readerFor": 22,
      "./support": 30,
      "./utf8": 31,
      "./utils": 32
    }],
    35: [function (e, t, r) {
      "use strict";

      function n(e, t, r) {
        this.name = e, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = t, this._dataBinary = r.binary, this.options = {
          compression: r.compression,
          compressionOptions: r.compressionOptions
        };
      }
      var s = e("./stream/StreamHelper"),
        i = e("./stream/DataWorker"),
        a = e("./utf8"),
        o = e("./compressedObject"),
        h = e("./stream/GenericWorker");
      n.prototype = {
        internalStream: function (e) {
          var t = null,
            r = "string";
          try {
            if (!e) throw new Error("No output type specified.");
            var n = "string" === (r = e.toLowerCase()) || "text" === r;
            "binarystring" !== r && "text" !== r || (r = "string"), t = this._decompressWorker();
            var i = !this._dataBinary;
            i && !n && (t = t.pipe(new a.Utf8EncodeWorker())), !i && n && (t = t.pipe(new a.Utf8DecodeWorker()));
          } catch (e) {
            (t = new h("error")).error(e);
          }
          return new s(t, r, "");
        },
        async: function (e, t) {
          return this.internalStream(e).accumulate(t);
        },
        nodeStream: function (e, t) {
          return this.internalStream(e || "nodebuffer").toNodejsStream(t);
        },
        _compressWorker: function (e, t) {
          if (this._data instanceof o && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
          var r = this._decompressWorker();
          return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r, e, t);
        },
        _decompressWorker: function () {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
        }
      };
      for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function () {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < u.length; f++) n.prototype[u[f]] = l;
      t.exports = n;
    }, {
      "./compressedObject": 2,
      "./stream/DataWorker": 27,
      "./stream/GenericWorker": 28,
      "./stream/StreamHelper": 29,
      "./utf8": 31
    }],
    36: [function (e, l, t) {
      (function (t) {
        "use strict";

        var r,
          n,
          e = t.MutationObserver || t.WebKitMutationObserver;
        if (e) {
          var i = 0,
            s = new e(u),
            a = t.document.createTextNode("");
          s.observe(a, {
            characterData: !0
          }), r = function () {
            a.data = i = ++i % 2;
          };
        } else if (t.setImmediate || void 0 === t.MessageChannel) r = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function () {
          var e = t.document.createElement("script");
          e.onreadystatechange = function () {
            u(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null;
          }, t.document.documentElement.appendChild(e);
        } : function () {
          setTimeout(u, 0);
        };else {
          var o = new t.MessageChannel();
          o.port1.onmessage = u, r = function () {
            o.port2.postMessage(0);
          };
        }
        var h = [];
        function u() {
          var e, t;
          n = !0;
          for (var r = h.length; r;) {
            for (t = h, h = [], e = -1; ++e < r;) t[e]();
            r = h.length;
          }
          n = !1;
        }
        l.exports = function (e) {
          1 !== h.push(e) || n || r();
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    37: [function (e, t, r) {
      "use strict";

      var i = e("immediate");
      function u() {}
      var l = {},
        s = ["REJECTED"],
        a = ["FULFILLED"],
        n = ["PENDING"];
      function o(e) {
        if ("function" != typeof e) throw new TypeError("resolver must be a function");
        this.state = n, this.queue = [], this.outcome = void 0, e !== u && d(this, e);
      }
      function h(e, t, r) {
        this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected);
      }
      function f(t, r, n) {
        i(function () {
          var e;
          try {
            e = r(n);
          } catch (e) {
            return l.reject(t, e);
          }
          e === t ? l.reject(t, new TypeError("Cannot resolve promise with itself")) : l.resolve(t, e);
        });
      }
      function c(e) {
        var t = e && e.then;
        if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function () {
          t.apply(e, arguments);
        };
      }
      function d(t, e) {
        var r = !1;
        function n(e) {
          r || (r = !0, l.reject(t, e));
        }
        function i(e) {
          r || (r = !0, l.resolve(t, e));
        }
        var s = p(function () {
          e(i, n);
        });
        "error" === s.status && n(s.value);
      }
      function p(e, t) {
        var r = {};
        try {
          r.value = e(t), r.status = "success";
        } catch (e) {
          r.status = "error", r.value = e;
        }
        return r;
      }
      (t.exports = o).prototype.finally = function (t) {
        if ("function" != typeof t) return this;
        var r = this.constructor;
        return this.then(function (e) {
          return r.resolve(t()).then(function () {
            return e;
          });
        }, function (e) {
          return r.resolve(t()).then(function () {
            throw e;
          });
        });
      }, o.prototype.catch = function (e) {
        return this.then(null, e);
      }, o.prototype.then = function (e, t) {
        if ("function" != typeof e && this.state === a || "function" != typeof t && this.state === s) return this;
        var r = new this.constructor(u);
        this.state !== n ? f(r, this.state === a ? e : t, this.outcome) : this.queue.push(new h(r, e, t));
        return r;
      }, h.prototype.callFulfilled = function (e) {
        l.resolve(this.promise, e);
      }, h.prototype.otherCallFulfilled = function (e) {
        f(this.promise, this.onFulfilled, e);
      }, h.prototype.callRejected = function (e) {
        l.reject(this.promise, e);
      }, h.prototype.otherCallRejected = function (e) {
        f(this.promise, this.onRejected, e);
      }, l.resolve = function (e, t) {
        var r = p(c, t);
        if ("error" === r.status) return l.reject(e, r.value);
        var n = r.value;
        if (n) d(e, n);else {
          e.state = a, e.outcome = t;
          for (var i = -1, s = e.queue.length; ++i < s;) e.queue[i].callFulfilled(t);
        }
        return e;
      }, l.reject = function (e, t) {
        e.state = s, e.outcome = t;
        for (var r = -1, n = e.queue.length; ++r < n;) e.queue[r].callRejected(t);
        return e;
      }, o.resolve = function (e) {
        if (e instanceof this) return e;
        return l.resolve(new this(u), e);
      }, o.reject = function (e) {
        var t = new this(u);
        return l.reject(t, e);
      }, o.all = function (e) {
        var r = this;
        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
        var n = e.length,
          i = !1;
        if (!n) return this.resolve([]);
        var s = new Array(n),
          a = 0,
          t = -1,
          o = new this(u);
        for (; ++t < n;) h(e[t], t);
        return o;
        function h(e, t) {
          r.resolve(e).then(function (e) {
            s[t] = e, ++a !== n || i || (i = !0, l.resolve(o, s));
          }, function (e) {
            i || (i = !0, l.reject(o, e));
          });
        }
      }, o.race = function (e) {
        var t = this;
        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
        var r = e.length,
          n = !1;
        if (!r) return this.resolve([]);
        var i = -1,
          s = new this(u);
        for (; ++i < r;) a = e[i], t.resolve(a).then(function (e) {
          n || (n = !0, l.resolve(s, e));
        }, function (e) {
          n || (n = !0, l.reject(s, e));
        });
        var a;
        return s;
      };
    }, {
      immediate: 36
    }],
    38: [function (e, t, r) {
      "use strict";

      var n = {};
      (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
    }, {
      "./lib/deflate": 39,
      "./lib/inflate": 40,
      "./lib/utils/common": 41,
      "./lib/zlib/constants": 44
    }],
    39: [function (e, t, r) {
      "use strict";

      var a = e("./zlib/deflate"),
        o = e("./utils/common"),
        h = e("./utils/strings"),
        i = e("./zlib/messages"),
        s = e("./zlib/zstream"),
        u = Object.prototype.toString,
        l = 0,
        f = -1,
        c = 0,
        d = 8;
      function p(e) {
        if (!(this instanceof p)) return new p(e);
        this.options = o.assign({
          level: f,
          method: d,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: c,
          to: ""
        }, e || {});
        var t = this.options;
        t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
        var r = a.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
        if (r !== l) throw new Error(i[r]);
        if (t.header && a.deflateSetHeader(this.strm, t.header), t.dictionary) {
          var n;
          if (n = "string" == typeof t.dictionary ? h.string2buf(t.dictionary) : "[object ArrayBuffer]" === u.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (r = a.deflateSetDictionary(this.strm, n)) !== l) throw new Error(i[r]);
          this._dict_set = !0;
        }
      }
      function n(e, t) {
        var r = new p(t);
        if (r.push(e, !0), r.err) throw r.msg || i[r.err];
        return r.result;
      }
      p.prototype.push = function (e, t) {
        var r,
          n,
          i = this.strm,
          s = this.options.chunkSize;
        if (this.ended) return !1;
        n = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? i.input = h.string2buf(e) : "[object ArrayBuffer]" === u.call(e) ? i.input = new Uint8Array(e) : i.input = e, i.next_in = 0, i.avail_in = i.input.length;
        do {
          if (0 === i.avail_out && (i.output = new o.Buf8(s), i.next_out = 0, i.avail_out = s), 1 !== (r = a.deflate(i, n)) && r !== l) return this.onEnd(r), !(this.ended = !0);
          0 !== i.avail_out && (0 !== i.avail_in || 4 !== n && 2 !== n) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i.output, i.next_out))) : this.onData(o.shrinkBuf(i.output, i.next_out)));
        } while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== r);
        return 4 === n ? (r = a.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === l) : 2 !== n || (this.onEnd(l), !(i.avail_out = 0));
      }, p.prototype.onData = function (e) {
        this.chunks.push(e);
      }, p.prototype.onEnd = function (e) {
        e === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
      }, r.Deflate = p, r.deflate = n, r.deflateRaw = function (e, t) {
        return (t = t || {}).raw = !0, n(e, t);
      }, r.gzip = function (e, t) {
        return (t = t || {}).gzip = !0, n(e, t);
      };
    }, {
      "./utils/common": 41,
      "./utils/strings": 42,
      "./zlib/deflate": 46,
      "./zlib/messages": 51,
      "./zlib/zstream": 53
    }],
    40: [function (e, t, r) {
      "use strict";

      var c = e("./zlib/inflate"),
        d = e("./utils/common"),
        p = e("./utils/strings"),
        m = e("./zlib/constants"),
        n = e("./zlib/messages"),
        i = e("./zlib/zstream"),
        s = e("./zlib/gzheader"),
        _ = Object.prototype.toString;
      function a(e) {
        if (!(this instanceof a)) return new a(e);
        this.options = d.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: ""
        }, e || {});
        var t = this.options;
        t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
        var r = c.inflateInit2(this.strm, t.windowBits);
        if (r !== m.Z_OK) throw new Error(n[r]);
        this.header = new s(), c.inflateGetHeader(this.strm, this.header);
      }
      function o(e, t) {
        var r = new a(t);
        if (r.push(e, !0), r.err) throw r.msg || n[r.err];
        return r.result;
      }
      a.prototype.push = function (e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          h = this.strm,
          u = this.options.chunkSize,
          l = this.options.dictionary,
          f = !1;
        if (this.ended) return !1;
        n = t === ~~t ? t : !0 === t ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e ? h.input = p.binstring2buf(e) : "[object ArrayBuffer]" === _.call(e) ? h.input = new Uint8Array(e) : h.input = e, h.next_in = 0, h.avail_in = h.input.length;
        do {
          if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r = c.inflateSetDictionary(this.strm, o)), r === m.Z_BUF_ERROR && !0 === f && (r = m.Z_OK, f = !1), r !== m.Z_STREAM_END && r !== m.Z_OK) return this.onEnd(r), !(this.ended = !0);
          h.next_out && (0 !== h.avail_out && r !== m.Z_STREAM_END && (0 !== h.avail_in || n !== m.Z_FINISH && n !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i = p.utf8border(h.output, h.next_out), s = h.next_out - i, a = p.buf2string(h.output, i), h.next_out = s, h.avail_out = u - s, s && d.arraySet(h.output, h.output, i, s, 0), this.onData(a)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = !0);
        } while ((0 < h.avail_in || 0 === h.avail_out) && r !== m.Z_STREAM_END);
        return r === m.Z_STREAM_END && (n = m.Z_FINISH), n === m.Z_FINISH ? (r = c.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === m.Z_OK) : n !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
      }, a.prototype.onData = function (e) {
        this.chunks.push(e);
      }, a.prototype.onEnd = function (e) {
        e === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
      }, r.Inflate = a, r.inflate = o, r.inflateRaw = function (e, t) {
        return (t = t || {}).raw = !0, o(e, t);
      }, r.ungzip = o;
    }, {
      "./utils/common": 41,
      "./utils/strings": 42,
      "./zlib/constants": 44,
      "./zlib/gzheader": 47,
      "./zlib/inflate": 49,
      "./zlib/messages": 51,
      "./zlib/zstream": 53
    }],
    41: [function (e, t, r) {
      "use strict";

      var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
      r.assign = function (e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
          var r = t.shift();
          if (r) {
            if ("object" != typeof r) throw new TypeError(r + "must be non-object");
            for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n]);
          }
        }
        return e;
      }, r.shrinkBuf = function (e, t) {
        return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
      };
      var i = {
          arraySet: function (e, t, r, n, i) {
            if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);else for (var s = 0; s < n; s++) e[i + s] = t[r + s];
          },
          flattenChunks: function (e) {
            var t, r, n, i, s, a;
            for (t = n = 0, r = e.length; t < r; t++) n += e[t].length;
            for (a = new Uint8Array(n), t = i = 0, r = e.length; t < r; t++) s = e[t], a.set(s, i), i += s.length;
            return a;
          }
        },
        s = {
          arraySet: function (e, t, r, n, i) {
            for (var s = 0; s < n; s++) e[i + s] = t[r + s];
          },
          flattenChunks: function (e) {
            return [].concat.apply([], e);
          }
        };
      r.setTyped = function (e) {
        e ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
      }, r.setTyped(n);
    }, {}],
    42: [function (e, t, r) {
      "use strict";

      var h = e("./common"),
        i = !0,
        s = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (e) {
        i = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (e) {
        s = !1;
      }
      for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
      function l(e, t) {
        if (t < 65537 && (e.subarray && s || !e.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e, t));
        for (var r = "", n = 0; n < t; n++) r += String.fromCharCode(e[n]);
        return r;
      }
      u[254] = u[254] = 1, r.string2buf = function (e) {
        var t,
          r,
          n,
          i,
          s,
          a = e.length,
          o = 0;
        for (i = 0; i < a; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
        for (t = new h.Buf8(o), i = s = 0; s < o; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
        return t;
      }, r.buf2binstring = function (e) {
        return l(e, e.length);
      }, r.binstring2buf = function (e) {
        for (var t = new h.Buf8(e.length), r = 0, n = t.length; r < n; r++) t[r] = e.charCodeAt(r);
        return t;
      }, r.buf2string = function (e, t) {
        var r,
          n,
          i,
          s,
          a = t || e.length,
          o = new Array(2 * a);
        for (r = n = 0; r < a;) if ((i = e[r++]) < 128) o[n++] = i;else if (4 < (s = u[i])) o[n++] = 65533, r += s - 1;else {
          for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < a;) i = i << 6 | 63 & e[r++], s--;
          1 < s ? o[n++] = 65533 : i < 65536 ? o[n++] = i : (i -= 65536, o[n++] = 55296 | i >> 10 & 1023, o[n++] = 56320 | 1023 & i);
        }
        return l(o, n);
      }, r.utf8border = function (e, t) {
        var r;
        for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);) r--;
        return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t;
      };
    }, {
      "./common": 41
    }],
    43: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        for (var i = 65535 & e | 0, s = e >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
          for (r -= a = 2e3 < r ? 2e3 : r; s = s + (i = i + t[n++] | 0) | 0, --a;);
          i %= 65521, s %= 65521;
        }
        return i | s << 16 | 0;
      };
    }, {}],
    44: [function (e, t, r) {
      "use strict";

      t.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      };
    }, {}],
    45: [function (e, t, r) {
      "use strict";

      var o = function () {
        for (var e, t = [], r = 0; r < 256; r++) {
          e = r;
          for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
          t[r] = e;
        }
        return t;
      }();
      t.exports = function (e, t, r, n) {
        var i = o,
          s = n + r;
        e ^= -1;
        for (var a = n; a < s; a++) e = e >>> 8 ^ i[255 & (e ^ t[a])];
        return -1 ^ e;
      };
    }, {}],
    46: [function (e, t, r) {
      "use strict";

      var h,
        c = e("../utils/common"),
        u = e("./trees"),
        d = e("./adler32"),
        p = e("./crc32"),
        n = e("./messages"),
        l = 0,
        f = 4,
        m = 0,
        _ = -2,
        g = -1,
        b = 4,
        i = 2,
        v = 8,
        y = 9,
        s = 286,
        a = 30,
        o = 19,
        w = 2 * s + 1,
        k = 15,
        x = 3,
        S = 258,
        z = S + x + 1,
        C = 42,
        E = 113,
        A = 1,
        I = 2,
        O = 3,
        B = 4;
      function R(e, t) {
        return e.msg = n[t], t;
      }
      function T(e) {
        return (e << 1) - (4 < e ? 9 : 0);
      }
      function D(e) {
        for (var t = e.length; 0 <= --t;) e[t] = 0;
      }
      function F(e) {
        var t = e.state,
          r = t.pending;
        r > e.avail_out && (r = e.avail_out), 0 !== r && (c.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0));
      }
      function N(e, t) {
        u._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, F(e.strm);
      }
      function U(e, t) {
        e.pending_buf[e.pending++] = t;
      }
      function P(e, t) {
        e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
      }
      function L(e, t) {
        var r,
          n,
          i = e.max_chain_length,
          s = e.strstart,
          a = e.prev_length,
          o = e.nice_match,
          h = e.strstart > e.w_size - z ? e.strstart - (e.w_size - z) : 0,
          u = e.window,
          l = e.w_mask,
          f = e.prev,
          c = e.strstart + S,
          d = u[s + a - 1],
          p = u[s + a];
        e.prev_length >= e.good_match && (i >>= 2), o > e.lookahead && (o = e.lookahead);
        do {
          if (u[(r = t) + a] === p && u[r + a - 1] === d && u[r] === u[s] && u[++r] === u[s + 1]) {
            s += 2, r++;
            do {} while (u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && s < c);
            if (n = S - (c - s), s = c - S, a < n) {
              if (e.match_start = t, o <= (a = n)) break;
              d = u[s + a - 1], p = u[s + a];
            }
          }
        } while ((t = f[t & l]) > h && 0 != --i);
        return a <= e.lookahead ? a : e.lookahead;
      }
      function j(e) {
        var t,
          r,
          n,
          i,
          s,
          a,
          o,
          h,
          u,
          l,
          f = e.w_size;
        do {
          if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= f + (f - z)) {
            for (c.arraySet(e.window, e.window, f, f, 0), e.match_start -= f, e.strstart -= f, e.block_start -= f, t = r = e.hash_size; n = e.head[--t], e.head[t] = f <= n ? n - f : 0, --r;);
            for (t = r = f; n = e.prev[--t], e.prev[t] = f <= n ? n - f : 0, --r;);
            i += f;
          }
          if (0 === e.strm.avail_in) break;
          if (a = e.strm, o = e.window, h = e.strstart + e.lookahead, u = i, l = void 0, l = a.avail_in, u < l && (l = u), r = 0 === l ? 0 : (a.avail_in -= l, c.arraySet(o, a.input, a.next_in, l, h), 1 === a.state.wrap ? a.adler = d(a.adler, o, l, h) : 2 === a.state.wrap && (a.adler = p(a.adler, o, l, h)), a.next_in += l, a.total_in += l, l), e.lookahead += r, e.lookahead + e.insert >= x) for (s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + x - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < x)););
        } while (e.lookahead < z && 0 !== e.strm.avail_in);
      }
      function Z(e, t) {
        for (var r, n;;) {
          if (e.lookahead < z) {
            if (j(e), e.lookahead < z && t === l) return A;
            if (0 === e.lookahead) break;
          }
          if (r = 0, e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - z && (e.match_length = L(e, r)), e.match_length >= x) {
            if (n = u._tr_tally(e, e.strstart - e.match_start, e.match_length - x), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= x) {
              for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, 0 != --e.match_length;);
              e.strstart++;
            } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
          } else n = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
          if (n && (N(e, !1), 0 === e.strm.avail_out)) return A;
        }
        return e.insert = e.strstart < x - 1 ? e.strstart : x - 1, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
      }
      function W(e, t) {
        for (var r, n, i;;) {
          if (e.lookahead < z) {
            if (j(e), e.lookahead < z && t === l) return A;
            if (0 === e.lookahead) break;
          }
          if (r = 0, e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = x - 1, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - z && (e.match_length = L(e, r), e.match_length <= 5 && (1 === e.strategy || e.match_length === x && 4096 < e.strstart - e.match_start) && (e.match_length = x - 1)), e.prev_length >= x && e.match_length <= e.prev_length) {
            for (i = e.strstart + e.lookahead - x, n = u._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - x), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 != --e.prev_length;);
            if (e.match_available = 0, e.match_length = x - 1, e.strstart++, n && (N(e, !1), 0 === e.strm.avail_out)) return A;
          } else if (e.match_available) {
            if ((n = u._tr_tally(e, 0, e.window[e.strstart - 1])) && N(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return A;
          } else e.match_available = 1, e.strstart++, e.lookahead--;
        }
        return e.match_available && (n = u._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < x - 1 ? e.strstart : x - 1, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
      }
      function M(e, t, r, n, i) {
        this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = i;
      }
      function H() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function G(e) {
        var t;
        return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = i, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? C : E, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = l, u._tr_init(t), m) : R(e, _);
      }
      function K(e) {
        var t = G(e);
        return t === m && function (e) {
          e.window_size = 2 * e.w_size, D(e.head), e.max_lazy_match = h[e.level].max_lazy, e.good_match = h[e.level].good_length, e.nice_match = h[e.level].nice_length, e.max_chain_length = h[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = x - 1, e.match_available = 0, e.ins_h = 0;
        }(e.state), t;
      }
      function Y(e, t, r, n, i, s) {
        if (!e) return _;
        var a = 1;
        if (t === g && (t = 6), n < 0 ? (a = 0, n = -n) : 15 < n && (a = 2, n -= 16), i < 1 || y < i || r !== v || n < 8 || 15 < n || t < 0 || 9 < t || s < 0 || b < s) return R(e, _);
        8 === n && (n = 9);
        var o = new H();
        return (e.state = o).strm = e, o.wrap = a, o.gzhead = null, o.w_bits = n, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = i + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + x - 1) / x), o.window = new c.Buf8(2 * o.w_size), o.head = new c.Buf16(o.hash_size), o.prev = new c.Buf16(o.w_size), o.lit_bufsize = 1 << i + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new c.Buf8(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = t, o.strategy = s, o.method = r, K(e);
      }
      h = [new M(0, 0, 0, 0, function (e, t) {
        var r = 65535;
        for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;) {
          if (e.lookahead <= 1) {
            if (j(e), 0 === e.lookahead && t === l) return A;
            if (0 === e.lookahead) break;
          }
          e.strstart += e.lookahead, e.lookahead = 0;
          var n = e.block_start + r;
          if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, N(e, !1), 0 === e.strm.avail_out)) return A;
          if (e.strstart - e.block_start >= e.w_size - z && (N(e, !1), 0 === e.strm.avail_out)) return A;
        }
        return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : (e.strstart > e.block_start && (N(e, !1), e.strm.avail_out), A);
      }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function (e, t) {
        return Y(e, t, v, 15, 8, 0);
      }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function (e, t) {
        return e && e.state ? 2 !== e.state.wrap ? _ : (e.state.gzhead = t, m) : _;
      }, r.deflate = function (e, t) {
        var r, n, i, s;
        if (!e || !e.state || 5 < t || t < 0) return e ? R(e, _) : _;
        if (n = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === n.status && t !== f) return R(e, 0 === e.avail_out ? -5 : _);
        if (n.strm = e, r = n.last_flush, n.last_flush = t, n.status === C) if (2 === n.wrap) e.adler = 0, U(n, 31), U(n, 139), U(n, 8), n.gzhead ? (U(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), U(n, 255 & n.gzhead.time), U(n, n.gzhead.time >> 8 & 255), U(n, n.gzhead.time >> 16 & 255), U(n, n.gzhead.time >> 24 & 255), U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), U(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (U(n, 255 & n.gzhead.extra.length), U(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = p(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69) : (U(n, 0), U(n, 0), U(n, 0), U(n, 0), U(n, 0), U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), U(n, 3), n.status = E);else {
          var a = v + (n.w_bits - 8 << 4) << 8;
          a |= (2 <= n.strategy || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (a |= 32), a += 31 - a % 31, n.status = E, P(n, a), 0 !== n.strstart && (P(n, e.adler >>> 16), P(n, 65535 & e.adler)), e.adler = 1;
        }
        if (69 === n.status) if (n.gzhead.extra) {
          for (i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending !== n.pending_buf_size));) U(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
          n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = 73);
        } else n.status = 73;
        if (73 === n.status) if (n.gzhead.name) {
          i = n.pending;
          do {
            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending === n.pending_buf_size)) {
              s = 1;
              break;
            }
            s = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, U(n, s);
          } while (0 !== s);
          n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.gzindex = 0, n.status = 91);
        } else n.status = 91;
        if (91 === n.status) if (n.gzhead.comment) {
          i = n.pending;
          do {
            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending === n.pending_buf_size)) {
              s = 1;
              break;
            }
            s = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, U(n, s);
          } while (0 !== s);
          n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.status = 103);
        } else n.status = 103;
        if (103 === n.status && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && F(e), n.pending + 2 <= n.pending_buf_size && (U(n, 255 & e.adler), U(n, e.adler >> 8 & 255), e.adler = 0, n.status = E)) : n.status = E), 0 !== n.pending) {
          if (F(e), 0 === e.avail_out) return n.last_flush = -1, m;
        } else if (0 === e.avail_in && T(t) <= T(r) && t !== f) return R(e, -5);
        if (666 === n.status && 0 !== e.avail_in) return R(e, -5);
        if (0 !== e.avail_in || 0 !== n.lookahead || t !== l && 666 !== n.status) {
          var o = 2 === n.strategy ? function (e, t) {
            for (var r;;) {
              if (0 === e.lookahead && (j(e), 0 === e.lookahead)) {
                if (t === l) return A;
                break;
              }
              if (e.match_length = 0, r = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (N(e, !1), 0 === e.strm.avail_out)) return A;
            }
            return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
          }(n, t) : 3 === n.strategy ? function (e, t) {
            for (var r, n, i, s, a = e.window;;) {
              if (e.lookahead <= S) {
                if (j(e), e.lookahead <= S && t === l) return A;
                if (0 === e.lookahead) break;
              }
              if (e.match_length = 0, e.lookahead >= x && 0 < e.strstart && (n = a[i = e.strstart - 1]) === a[++i] && n === a[++i] && n === a[++i]) {
                s = e.strstart + S;
                do {} while (n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && i < s);
                e.match_length = S - (s - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
              }
              if (e.match_length >= x ? (r = u._tr_tally(e, 1, e.match_length - x), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (N(e, !1), 0 === e.strm.avail_out)) return A;
            }
            return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
          }(n, t) : h[n.level].func(n, t);
          if (o !== O && o !== B || (n.status = 666), o === A || o === O) return 0 === e.avail_out && (n.last_flush = -1), m;
          if (o === I && (1 === t ? u._tr_align(n) : 5 !== t && (u._tr_stored_block(n, 0, 0, !1), 3 === t && (D(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), F(e), 0 === e.avail_out)) return n.last_flush = -1, m;
        }
        return t !== f ? m : n.wrap <= 0 ? 1 : (2 === n.wrap ? (U(n, 255 & e.adler), U(n, e.adler >> 8 & 255), U(n, e.adler >> 16 & 255), U(n, e.adler >> 24 & 255), U(n, 255 & e.total_in), U(n, e.total_in >> 8 & 255), U(n, e.total_in >> 16 & 255), U(n, e.total_in >> 24 & 255)) : (P(n, e.adler >>> 16), P(n, 65535 & e.adler)), F(e), 0 < n.wrap && (n.wrap = -n.wrap), 0 !== n.pending ? m : 1);
      }, r.deflateEnd = function (e) {
        var t;
        return e && e.state ? (t = e.state.status) !== C && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== E && 666 !== t ? R(e, _) : (e.state = null, t === E ? R(e, -3) : m) : _;
      }, r.deflateSetDictionary = function (e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          h,
          u,
          l = t.length;
        if (!e || !e.state) return _;
        if (2 === (s = (r = e.state).wrap) || 1 === s && r.status !== C || r.lookahead) return _;
        for (1 === s && (e.adler = d(e.adler, t, l, 0)), r.wrap = 0, l >= r.w_size && (0 === s && (D(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), u = new c.Buf8(r.w_size), c.arraySet(u, t, l - r.w_size, r.w_size, 0), t = u, l = r.w_size), a = e.avail_in, o = e.next_in, h = e.input, e.avail_in = l, e.next_in = 0, e.input = t, j(r); r.lookahead >= x;) {
          for (n = r.strstart, i = r.lookahead - (x - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + x - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++, --i;);
          r.strstart = n, r.lookahead = x - 1, j(r);
        }
        return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = x - 1, r.match_available = 0, e.next_in = o, e.input = h, e.avail_in = a, r.wrap = s, m;
      }, r.deflateInfo = "pako deflate (from Nodeca project)";
    }, {
      "../utils/common": 41,
      "./adler32": 43,
      "./crc32": 45,
      "./messages": 51,
      "./trees": 52
    }],
    47: [function (e, t, r) {
      "use strict";

      t.exports = function () {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}],
    48: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
        r = e.state, n = e.next_in, z = e.input, i = n + (e.avail_in - 5), s = e.next_out, C = e.output, a = s - (t - e.avail_out), o = s + (e.avail_out - 257), h = r.dmax, u = r.wsize, l = r.whave, f = r.wnext, c = r.window, d = r.hold, p = r.bits, m = r.lencode, _ = r.distcode, g = (1 << r.lenbits) - 1, b = (1 << r.distbits) - 1;
        e: do {
          p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
          t: for (;;) {
            if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;else {
              if (!(16 & y)) {
                if (0 == (64 & y)) {
                  v = m[(65535 & v) + (d & (1 << y) - 1)];
                  continue t;
                }
                if (32 & y) {
                  r.mode = 12;
                  break e;
                }
                e.msg = "invalid literal/length code", r.mode = 30;
                break e;
              }
              w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
              r: for (;;) {
                if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                  if (0 == (64 & y)) {
                    v = _[(65535 & v) + (d & (1 << y) - 1)];
                    continue r;
                  }
                  e.msg = "invalid distance code", r.mode = 30;
                  break e;
                }
                if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                  e.msg = "invalid distance too far back", r.mode = 30;
                  break e;
                }
                if (d >>>= y, p -= y, (y = s - a) < k) {
                  if (l < (y = k - y) && r.sane) {
                    e.msg = "invalid distance too far back", r.mode = 30;
                    break e;
                  }
                  if (S = c, (x = 0) === f) {
                    if (x += u - y, y < w) {
                      for (w -= y; C[s++] = c[x++], --y;);
                      x = s - k, S = C;
                    }
                  } else if (f < y) {
                    if (x += u + f - y, (y -= f) < w) {
                      for (w -= y; C[s++] = c[x++], --y;);
                      if (x = 0, f < w) {
                        for (w -= y = f; C[s++] = c[x++], --y;);
                        x = s - k, S = C;
                      }
                    }
                  } else if (x += f - y, y < w) {
                    for (w -= y; C[s++] = c[x++], --y;);
                    x = s - k, S = C;
                  }
                  for (; 2 < w;) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                  w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                } else {
                  for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3););
                  w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                }
                break;
              }
            }
            break;
          }
        } while (n < i && s < o);
        n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e.next_in = n, e.next_out = s, e.avail_in = n < i ? i - n + 5 : 5 - (n - i), e.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = d, r.bits = p;
      };
    }, {}],
    49: [function (e, t, r) {
      "use strict";

      var I = e("../utils/common"),
        O = e("./adler32"),
        B = e("./crc32"),
        R = e("./inffast"),
        T = e("./inftrees"),
        D = 1,
        F = 2,
        N = 0,
        U = -2,
        P = 1,
        n = 852,
        i = 592;
      function L(e) {
        return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
      }
      function s() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function a(e) {
        var t;
        return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = P, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new I.Buf32(n), t.distcode = t.distdyn = new I.Buf32(i), t.sane = 1, t.back = -1, N) : U;
      }
      function o(e) {
        var t;
        return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, a(e)) : U;
      }
      function h(e, t) {
        var r, n;
        return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? U : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, o(e))) : U;
      }
      function u(e, t) {
        var r, n;
        return e ? (n = new s(), (e.state = n).window = null, (r = h(e, t)) !== N && (e.state = null), r) : U;
      }
      var l,
        f,
        c = !0;
      function j(e) {
        if (c) {
          var t;
          for (l = new I.Buf32(512), f = new I.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
          for (; t < 256;) e.lens[t++] = 9;
          for (; t < 280;) e.lens[t++] = 7;
          for (; t < 288;) e.lens[t++] = 8;
          for (T(D, e.lens, 0, 288, l, 0, e.work, {
            bits: 9
          }), t = 0; t < 32;) e.lens[t++] = 5;
          T(F, e.lens, 0, 32, f, 0, e.work, {
            bits: 5
          }), c = !1;
        }
        e.lencode = l, e.lenbits = 9, e.distcode = f, e.distbits = 5;
      }
      function Z(e, t, r, n) {
        var i,
          s = e.state;
        return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new I.Buf8(s.wsize)), n >= s.wsize ? (I.arraySet(s.window, t, r - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : (n < (i = s.wsize - s.wnext) && (i = n), I.arraySet(s.window, t, r - n, i, s.wnext), (n -= i) ? (I.arraySet(s.window, t, r - n, n, 0), s.wnext = n, s.whave = s.wsize) : (s.wnext += i, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += i))), 0;
      }
      r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function (e) {
        return u(e, 15);
      }, r.inflateInit2 = u, r.inflate = function (e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          h,
          u,
          l,
          f,
          c,
          d,
          p,
          m,
          _,
          g,
          b,
          v,
          y,
          w,
          k,
          x,
          S,
          z,
          C = 0,
          E = new I.Buf8(4),
          A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return U;
        12 === (r = e.state).mode && (r.mode = 13), a = e.next_out, i = e.output, h = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, u = r.hold, l = r.bits, f = o, c = h, x = N;
        e: for (;;) switch (r.mode) {
          case P:
            if (0 === r.wrap) {
              r.mode = 13;
              break;
            }
            for (; l < 16;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (2 & r.wrap && 35615 === u) {
              E[r.check = 0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0), l = u = 0, r.mode = 2;
              break;
            }
            if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
              e.msg = "incorrect header check", r.mode = 30;
              break;
            }
            if (8 != (15 & u)) {
              e.msg = "unknown compression method", r.mode = 30;
              break;
            }
            if (l -= 4, k = 8 + (15 & (u >>>= 4)), 0 === r.wbits) r.wbits = k;else if (k > r.wbits) {
              e.msg = "invalid window size", r.mode = 30;
              break;
            }
            r.dmax = 1 << k, e.adler = r.check = 1, r.mode = 512 & u ? 10 : 12, l = u = 0;
            break;
          case 2:
            for (; l < 16;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (r.flags = u, 8 != (255 & r.flags)) {
              e.msg = "unknown compression method", r.mode = 30;
              break;
            }
            if (57344 & r.flags) {
              e.msg = "unknown header flags set", r.mode = 30;
              break;
            }
            r.head && (r.head.text = u >> 8 & 1), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 3;
          case 3:
            for (; l < 32;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            r.head && (r.head.time = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, E[2] = u >>> 16 & 255, E[3] = u >>> 24 & 255, r.check = B(r.check, E, 4, 0)), l = u = 0, r.mode = 4;
          case 4:
            for (; l < 16;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            r.head && (r.head.xflags = 255 & u, r.head.os = u >> 8), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 5;
          case 5:
            if (1024 & r.flags) {
              for (; l < 16;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              r.length = u, r.head && (r.head.extra_len = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0;
            } else r.head && (r.head.extra = null);
            r.mode = 6;
          case 6:
            if (1024 & r.flags && (o < (d = r.length) && (d = o), d && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), I.arraySet(r.head.extra, n, s, d, k)), 512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, r.length -= d), r.length)) break e;
            r.length = 0, r.mode = 7;
          case 7:
            if (2048 & r.flags) {
              if (0 === o) break e;
              for (d = 0; k = n[s + d++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k)), k && d < o;);
              if (512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, k) break e;
            } else r.head && (r.head.name = null);
            r.length = 0, r.mode = 8;
          case 8:
            if (4096 & r.flags) {
              if (0 === o) break e;
              for (d = 0; k = n[s + d++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k)), k && d < o;);
              if (512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, k) break e;
            } else r.head && (r.head.comment = null);
            r.mode = 9;
          case 9:
            if (512 & r.flags) {
              for (; l < 16;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              if (u !== (65535 & r.check)) {
                e.msg = "header crc mismatch", r.mode = 30;
                break;
              }
              l = u = 0;
            }
            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = 12;
            break;
          case 10:
            for (; l < 32;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            e.adler = r.check = L(u), l = u = 0, r.mode = 11;
          case 11:
            if (0 === r.havedict) return e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, 2;
            e.adler = r.check = 1, r.mode = 12;
          case 12:
            if (5 === t || 6 === t) break e;
          case 13:
            if (r.last) {
              u >>>= 7 & l, l -= 7 & l, r.mode = 27;
              break;
            }
            for (; l < 3;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            switch (r.last = 1 & u, l -= 1, 3 & (u >>>= 1)) {
              case 0:
                r.mode = 14;
                break;
              case 1:
                if (j(r), r.mode = 20, 6 !== t) break;
                u >>>= 2, l -= 2;
                break e;
              case 2:
                r.mode = 17;
                break;
              case 3:
                e.msg = "invalid block type", r.mode = 30;
            }
            u >>>= 2, l -= 2;
            break;
          case 14:
            for (u >>>= 7 & l, l -= 7 & l; l < 32;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if ((65535 & u) != (u >>> 16 ^ 65535)) {
              e.msg = "invalid stored block lengths", r.mode = 30;
              break;
            }
            if (r.length = 65535 & u, l = u = 0, r.mode = 15, 6 === t) break e;
          case 15:
            r.mode = 16;
          case 16:
            if (d = r.length) {
              if (o < d && (d = o), h < d && (d = h), 0 === d) break e;
              I.arraySet(i, n, s, d, a), o -= d, s += d, h -= d, a += d, r.length -= d;
              break;
            }
            r.mode = 12;
            break;
          case 17:
            for (; l < 14;) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (r.nlen = 257 + (31 & u), u >>>= 5, l -= 5, r.ndist = 1 + (31 & u), u >>>= 5, l -= 5, r.ncode = 4 + (15 & u), u >>>= 4, l -= 4, 286 < r.nlen || 30 < r.ndist) {
              e.msg = "too many length or distance symbols", r.mode = 30;
              break;
            }
            r.have = 0, r.mode = 18;
          case 18:
            for (; r.have < r.ncode;) {
              for (; l < 3;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              r.lens[A[r.have++]] = 7 & u, u >>>= 3, l -= 3;
            }
            for (; r.have < 19;) r.lens[A[r.have++]] = 0;
            if (r.lencode = r.lendyn, r.lenbits = 7, S = {
              bits: r.lenbits
            }, x = T(0, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
              e.msg = "invalid code lengths set", r.mode = 30;
              break;
            }
            r.have = 0, r.mode = 19;
          case 19:
            for (; r.have < r.nlen + r.ndist;) {
              for (; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              if (b < 16) u >>>= _, l -= _, r.lens[r.have++] = b;else {
                if (16 === b) {
                  for (z = _ + 2; l < z;) {
                    if (0 === o) break e;
                    o--, u += n[s++] << l, l += 8;
                  }
                  if (u >>>= _, l -= _, 0 === r.have) {
                    e.msg = "invalid bit length repeat", r.mode = 30;
                    break;
                  }
                  k = r.lens[r.have - 1], d = 3 + (3 & u), u >>>= 2, l -= 2;
                } else if (17 === b) {
                  for (z = _ + 3; l < z;) {
                    if (0 === o) break e;
                    o--, u += n[s++] << l, l += 8;
                  }
                  l -= _, k = 0, d = 3 + (7 & (u >>>= _)), u >>>= 3, l -= 3;
                } else {
                  for (z = _ + 7; l < z;) {
                    if (0 === o) break e;
                    o--, u += n[s++] << l, l += 8;
                  }
                  l -= _, k = 0, d = 11 + (127 & (u >>>= _)), u >>>= 7, l -= 7;
                }
                if (r.have + d > r.nlen + r.ndist) {
                  e.msg = "invalid bit length repeat", r.mode = 30;
                  break;
                }
                for (; d--;) r.lens[r.have++] = k;
              }
            }
            if (30 === r.mode) break;
            if (0 === r.lens[256]) {
              e.msg = "invalid code -- missing end-of-block", r.mode = 30;
              break;
            }
            if (r.lenbits = 9, S = {
              bits: r.lenbits
            }, x = T(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
              e.msg = "invalid literal/lengths set", r.mode = 30;
              break;
            }
            if (r.distbits = 6, r.distcode = r.distdyn, S = {
              bits: r.distbits
            }, x = T(F, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, x) {
              e.msg = "invalid distances set", r.mode = 30;
              break;
            }
            if (r.mode = 20, 6 === t) break e;
          case 20:
            r.mode = 21;
          case 21:
            if (6 <= o && 258 <= h) {
              e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, R(e, c), a = e.next_out, i = e.output, h = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, u = r.hold, l = r.bits, 12 === r.mode && (r.back = -1);
              break;
            }
            for (r.back = 0; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (g && 0 == (240 & g)) {
              for (v = _, y = g, w = b; g = (C = r.lencode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              u >>>= v, l -= v, r.back += v;
            }
            if (u >>>= _, l -= _, r.back += _, r.length = b, 0 === g) {
              r.mode = 26;
              break;
            }
            if (32 & g) {
              r.back = -1, r.mode = 12;
              break;
            }
            if (64 & g) {
              e.msg = "invalid literal/length code", r.mode = 30;
              break;
            }
            r.extra = 15 & g, r.mode = 22;
          case 22:
            if (r.extra) {
              for (z = r.extra; l < z;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              r.length += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
            }
            r.was = r.length, r.mode = 23;
          case 23:
            for (; g = (C = r.distcode[u & (1 << r.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
              if (0 === o) break e;
              o--, u += n[s++] << l, l += 8;
            }
            if (0 == (240 & g)) {
              for (v = _, y = g, w = b; g = (C = r.distcode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              u >>>= v, l -= v, r.back += v;
            }
            if (u >>>= _, l -= _, r.back += _, 64 & g) {
              e.msg = "invalid distance code", r.mode = 30;
              break;
            }
            r.offset = b, r.extra = 15 & g, r.mode = 24;
          case 24:
            if (r.extra) {
              for (z = r.extra; l < z;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              r.offset += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
            }
            if (r.offset > r.dmax) {
              e.msg = "invalid distance too far back", r.mode = 30;
              break;
            }
            r.mode = 25;
          case 25:
            if (0 === h) break e;
            if (d = c - h, r.offset > d) {
              if ((d = r.offset - d) > r.whave && r.sane) {
                e.msg = "invalid distance too far back", r.mode = 30;
                break;
              }
              p = d > r.wnext ? (d -= r.wnext, r.wsize - d) : r.wnext - d, d > r.length && (d = r.length), m = r.window;
            } else m = i, p = a - r.offset, d = r.length;
            for (h < d && (d = h), h -= d, r.length -= d; i[a++] = m[p++], --d;);
            0 === r.length && (r.mode = 21);
            break;
          case 26:
            if (0 === h) break e;
            i[a++] = r.length, h--, r.mode = 21;
            break;
          case 27:
            if (r.wrap) {
              for (; l < 32;) {
                if (0 === o) break e;
                o--, u |= n[s++] << l, l += 8;
              }
              if (c -= h, e.total_out += c, r.total += c, c && (e.adler = r.check = r.flags ? B(r.check, i, c, a - c) : O(r.check, i, c, a - c)), c = h, (r.flags ? u : L(u)) !== r.check) {
                e.msg = "incorrect data check", r.mode = 30;
                break;
              }
              l = u = 0;
            }
            r.mode = 28;
          case 28:
            if (r.wrap && r.flags) {
              for (; l < 32;) {
                if (0 === o) break e;
                o--, u += n[s++] << l, l += 8;
              }
              if (u !== (4294967295 & r.total)) {
                e.msg = "incorrect length check", r.mode = 30;
                break;
              }
              l = u = 0;
            }
            r.mode = 29;
          case 29:
            x = 1;
            break e;
          case 30:
            x = -3;
            break e;
          case 31:
            return -4;
          case 32:
          default:
            return U;
        }
        return e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, (r.wsize || c !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t)) && Z(e, e.output, e.next_out, c - e.avail_out) ? (r.mode = 31, -4) : (f -= e.avail_in, c -= e.avail_out, e.total_in += f, e.total_out += c, r.total += c, r.wrap && c && (e.adler = r.check = r.flags ? B(r.check, i, c, e.next_out - c) : O(r.check, i, c, e.next_out - c)), e.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 == f && 0 === c || 4 === t) && x === N && (x = -5), x);
      }, r.inflateEnd = function (e) {
        if (!e || !e.state) return U;
        var t = e.state;
        return t.window && (t.window = null), e.state = null, N;
      }, r.inflateGetHeader = function (e, t) {
        var r;
        return e && e.state ? 0 == (2 & (r = e.state).wrap) ? U : ((r.head = t).done = !1, N) : U;
      }, r.inflateSetDictionary = function (e, t) {
        var r,
          n = t.length;
        return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? U : 11 === r.mode && O(1, t, n, 0) !== r.check ? -3 : Z(e, t, n, n) ? (r.mode = 31, -4) : (r.havedict = 1, N) : U;
      }, r.inflateInfo = "pako inflate (from Nodeca project)";
    }, {
      "../utils/common": 41,
      "./adler32": 43,
      "./crc32": 45,
      "./inffast": 48,
      "./inftrees": 50
    }],
    50: [function (e, t, r) {
      "use strict";

      var D = e("../utils/common"),
        F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      t.exports = function (e, t, r, n, i, s, a, o) {
        var h,
          u,
          l,
          f,
          c,
          d,
          p,
          m,
          _,
          g = o.bits,
          b = 0,
          v = 0,
          y = 0,
          w = 0,
          k = 0,
          x = 0,
          S = 0,
          z = 0,
          C = 0,
          E = 0,
          A = null,
          I = 0,
          O = new D.Buf16(16),
          B = new D.Buf16(16),
          R = null,
          T = 0;
        for (b = 0; b <= 15; b++) O[b] = 0;
        for (v = 0; v < n; v++) O[t[r + v]]++;
        for (k = g, w = 15; 1 <= w && 0 === O[w]; w--);
        if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
        for (y = 1; y < w && 0 === O[y]; y++);
        for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
        if (0 < z && (0 === e || 1 !== w)) return -1;
        for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
        for (v = 0; v < n; v++) 0 !== t[r + v] && (a[B[t[r + v]]++] = v);
        if (d = 0 === e ? (A = R = a, 19) : 1 === e ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
        for (;;) {
          for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u;);
          for (h = 1 << b - 1; E & h;) h >>= 1;
          if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
            if (b === w) break;
            b = t[r + a[v]];
          }
          if (k < b && (E & f) !== l) {
            for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0);) x++, z <<= 1;
            if (C += 1 << x, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
            i[l = E & f] = k << 24 | x << 16 | c - s | 0;
          }
        }
        return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
      };
    }, {
      "../utils/common": 41
    }],
    51: [function (e, t, r) {
      "use strict";

      t.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
      };
    }, {}],
    52: [function (e, t, r) {
      "use strict";

      var i = e("../utils/common"),
        o = 0,
        h = 1;
      function n(e) {
        for (var t = e.length; 0 <= --t;) e[t] = 0;
      }
      var s = 0,
        a = 29,
        u = 256,
        l = u + 1 + a,
        f = 30,
        c = 19,
        _ = 2 * l + 1,
        g = 15,
        d = 16,
        p = 7,
        m = 256,
        b = 16,
        v = 17,
        y = 18,
        w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        z = new Array(2 * (l + 2));
      n(z);
      var C = new Array(2 * f);
      n(C);
      var E = new Array(512);
      n(E);
      var A = new Array(256);
      n(A);
      var I = new Array(a);
      n(I);
      var O,
        B,
        R,
        T = new Array(f);
      function D(e, t, r, n, i) {
        this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = i, this.has_stree = e && e.length;
      }
      function F(e, t) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
      }
      function N(e) {
        return e < 256 ? E[e] : E[256 + (e >>> 7)];
      }
      function U(e, t) {
        e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
      }
      function P(e, t, r) {
        e.bi_valid > d - r ? (e.bi_buf |= t << e.bi_valid & 65535, U(e, e.bi_buf), e.bi_buf = t >> d - e.bi_valid, e.bi_valid += r - d) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r);
      }
      function L(e, t, r) {
        P(e, r[2 * t], r[2 * t + 1]);
      }
      function j(e, t) {
        for (var r = 0; r |= 1 & e, e >>>= 1, r <<= 1, 0 < --t;);
        return r >>> 1;
      }
      function Z(e, t, r) {
        var n,
          i,
          s = new Array(g + 1),
          a = 0;
        for (n = 1; n <= g; n++) s[n] = a = a + r[n - 1] << 1;
        for (i = 0; i <= t; i++) {
          var o = e[2 * i + 1];
          0 !== o && (e[2 * i] = j(s[o]++, o));
        }
      }
      function W(e) {
        var t;
        for (t = 0; t < l; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < f; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < c; t++) e.bl_tree[2 * t] = 0;
        e.dyn_ltree[2 * m] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
      }
      function M(e) {
        8 < e.bi_valid ? U(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
      }
      function H(e, t, r, n) {
        var i = 2 * t,
          s = 2 * r;
        return e[i] < e[s] || e[i] === e[s] && n[t] <= n[r];
      }
      function G(e, t, r) {
        for (var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && H(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !H(t, n, e.heap[i], e.depth));) e.heap[r] = e.heap[i], r = i, i <<= 1;
        e.heap[r] = n;
      }
      function K(e, t, r) {
        var n,
          i,
          s,
          a,
          o = 0;
        if (0 !== e.last_lit) for (; n = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1], i = e.pending_buf[e.l_buf + o], o++, 0 === n ? L(e, i, t) : (L(e, (s = A[i]) + u + 1, t), 0 !== (a = w[s]) && P(e, i -= I[s], a), L(e, s = N(--n), r), 0 !== (a = k[s]) && P(e, n -= T[s], a)), o < e.last_lit;);
        L(e, m, t);
      }
      function Y(e, t) {
        var r,
          n,
          i,
          s = t.dyn_tree,
          a = t.stat_desc.static_tree,
          o = t.stat_desc.has_stree,
          h = t.stat_desc.elems,
          u = -1;
        for (e.heap_len = 0, e.heap_max = _, r = 0; r < h; r++) 0 !== s[2 * r] ? (e.heap[++e.heap_len] = u = r, e.depth[r] = 0) : s[2 * r + 1] = 0;
        for (; e.heap_len < 2;) s[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[i] = 0, e.opt_len--, o && (e.static_len -= a[2 * i + 1]);
        for (t.max_code = u, r = e.heap_len >> 1; 1 <= r; r--) G(e, s, r);
        for (i = h; r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], G(e, s, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, s[2 * i] = s[2 * r] + s[2 * n], e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, s[2 * r + 1] = s[2 * n + 1] = i, e.heap[1] = i++, G(e, s, 1), 2 <= e.heap_len;);
        e.heap[--e.heap_max] = e.heap[1], function (e, t) {
          var r,
            n,
            i,
            s,
            a,
            o,
            h = t.dyn_tree,
            u = t.max_code,
            l = t.stat_desc.static_tree,
            f = t.stat_desc.has_stree,
            c = t.stat_desc.extra_bits,
            d = t.stat_desc.extra_base,
            p = t.stat_desc.max_length,
            m = 0;
          for (s = 0; s <= g; s++) e.bl_count[s] = 0;
          for (h[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < _; r++) p < (s = h[2 * h[2 * (n = e.heap[r]) + 1] + 1] + 1) && (s = p, m++), h[2 * n + 1] = s, u < n || (e.bl_count[s]++, a = 0, d <= n && (a = c[n - d]), o = h[2 * n], e.opt_len += o * (s + a), f && (e.static_len += o * (l[2 * n + 1] + a)));
          if (0 !== m) {
            do {
              for (s = p - 1; 0 === e.bl_count[s];) s--;
              e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[p]--, m -= 2;
            } while (0 < m);
            for (s = p; 0 !== s; s--) for (n = e.bl_count[s]; 0 !== n;) u < (i = e.heap[--r]) || (h[2 * i + 1] !== s && (e.opt_len += (s - h[2 * i + 1]) * h[2 * i], h[2 * i + 1] = s), n--);
          }
        }(e, t), Z(s, u, e.bl_count);
      }
      function X(e, t, r) {
        var n,
          i,
          s = -1,
          a = t[1],
          o = 0,
          h = 7,
          u = 4;
        for (0 === a && (h = 138, u = 3), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++) i = a, a = t[2 * (n + 1) + 1], ++o < h && i === a || (o < u ? e.bl_tree[2 * i] += o : 0 !== i ? (i !== s && e.bl_tree[2 * i]++, e.bl_tree[2 * b]++) : o <= 10 ? e.bl_tree[2 * v]++ : e.bl_tree[2 * y]++, s = i, u = (o = 0) === a ? (h = 138, 3) : i === a ? (h = 6, 3) : (h = 7, 4));
      }
      function V(e, t, r) {
        var n,
          i,
          s = -1,
          a = t[1],
          o = 0,
          h = 7,
          u = 4;
        for (0 === a && (h = 138, u = 3), n = 0; n <= r; n++) if (i = a, a = t[2 * (n + 1) + 1], !(++o < h && i === a)) {
          if (o < u) for (; L(e, i, e.bl_tree), 0 != --o;);else 0 !== i ? (i !== s && (L(e, i, e.bl_tree), o--), L(e, b, e.bl_tree), P(e, o - 3, 2)) : o <= 10 ? (L(e, v, e.bl_tree), P(e, o - 3, 3)) : (L(e, y, e.bl_tree), P(e, o - 11, 7));
          s = i, u = (o = 0) === a ? (h = 138, 3) : i === a ? (h = 6, 3) : (h = 7, 4);
        }
      }
      n(T);
      var q = !1;
      function J(e, t, r, n) {
        P(e, (s << 1) + (n ? 1 : 0), 3), function (e, t, r, n) {
          M(e), n && (U(e, r), U(e, ~r)), i.arraySet(e.pending_buf, e.window, t, r, e.pending), e.pending += r;
        }(e, t, r, !0);
      }
      r._tr_init = function (e) {
        q || (function () {
          var e,
            t,
            r,
            n,
            i,
            s = new Array(g + 1);
          for (n = r = 0; n < a - 1; n++) for (I[n] = r, e = 0; e < 1 << w[n]; e++) A[r++] = n;
          for (A[r - 1] = n, n = i = 0; n < 16; n++) for (T[n] = i, e = 0; e < 1 << k[n]; e++) E[i++] = n;
          for (i >>= 7; n < f; n++) for (T[n] = i << 7, e = 0; e < 1 << k[n] - 7; e++) E[256 + i++] = n;
          for (t = 0; t <= g; t++) s[t] = 0;
          for (e = 0; e <= 143;) z[2 * e + 1] = 8, e++, s[8]++;
          for (; e <= 255;) z[2 * e + 1] = 9, e++, s[9]++;
          for (; e <= 279;) z[2 * e + 1] = 7, e++, s[7]++;
          for (; e <= 287;) z[2 * e + 1] = 8, e++, s[8]++;
          for (Z(z, l + 1, s), e = 0; e < f; e++) C[2 * e + 1] = 5, C[2 * e] = j(e, 5);
          O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
        }(), q = !0), e.l_desc = new F(e.dyn_ltree, O), e.d_desc = new F(e.dyn_dtree, B), e.bl_desc = new F(e.bl_tree, R), e.bi_buf = 0, e.bi_valid = 0, W(e);
      }, r._tr_stored_block = J, r._tr_flush_block = function (e, t, r, n) {
        var i,
          s,
          a = 0;
        0 < e.level ? (2 === e.strm.data_type && (e.strm.data_type = function (e) {
          var t,
            r = 4093624447;
          for (t = 0; t <= 31; t++, r >>>= 1) if (1 & r && 0 !== e.dyn_ltree[2 * t]) return o;
          if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return h;
          for (t = 32; t < u; t++) if (0 !== e.dyn_ltree[2 * t]) return h;
          return o;
        }(e)), Y(e, e.l_desc), Y(e, e.d_desc), a = function (e) {
          var t;
          for (X(e, e.dyn_ltree, e.l_desc.max_code), X(e, e.dyn_dtree, e.d_desc.max_code), Y(e, e.bl_desc), t = c - 1; 3 <= t && 0 === e.bl_tree[2 * S[t] + 1]; t--);
          return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
        }(e), i = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= i && (i = s)) : i = s = r + 5, r + 4 <= i && -1 !== t ? J(e, t, r, n) : 4 === e.strategy || s === i ? (P(e, 2 + (n ? 1 : 0), 3), K(e, z, C)) : (P(e, 4 + (n ? 1 : 0), 3), function (e, t, r, n) {
          var i;
          for (P(e, t - 257, 5), P(e, r - 1, 5), P(e, n - 4, 4), i = 0; i < n; i++) P(e, e.bl_tree[2 * S[i] + 1], 3);
          V(e, e.dyn_ltree, t - 1), V(e, e.dyn_dtree, r - 1);
        }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), K(e, e.dyn_ltree, e.dyn_dtree)), W(e), n && M(e);
      }, r._tr_tally = function (e, t, r) {
        return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (A[r] + u + 1)]++, e.dyn_dtree[2 * N(t)]++), e.last_lit === e.lit_bufsize - 1;
      }, r._tr_align = function (e) {
        P(e, 2, 3), L(e, m, z), function (e) {
          16 === e.bi_valid ? (U(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
        }(e);
      };
    }, {
      "../utils/common": 41
    }],
    53: [function (e, t, r) {
      "use strict";

      t.exports = function () {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}],
    54: [function (e, t, r) {
      (function (e) {
        !function (r, n) {
          "use strict";

          if (!r.setImmediate) {
            var i,
              s,
              t,
              a,
              o = 1,
              h = {},
              u = !1,
              l = r.document,
              e = Object.getPrototypeOf && Object.getPrototypeOf(r);
            e = e && e.setTimeout ? e : r, i = "[object process]" === {}.toString.call(r.process) ? function (e) {
              process.nextTick(function () {
                c(e);
              });
            } : function () {
              if (r.postMessage && !r.importScripts) {
                var e = !0,
                  t = r.onmessage;
                return r.onmessage = function () {
                  e = !1;
                }, r.postMessage("", "*"), r.onmessage = t, e;
              }
            }() ? (a = "setImmediate$" + Math.random() + "$", r.addEventListener ? r.addEventListener("message", d, !1) : r.attachEvent("onmessage", d), function (e) {
              r.postMessage(a + e, "*");
            }) : r.MessageChannel ? ((t = new MessageChannel()).port1.onmessage = function (e) {
              c(e.data);
            }, function (e) {
              t.port2.postMessage(e);
            }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function (e) {
              var t = l.createElement("script");
              t.onreadystatechange = function () {
                c(e), t.onreadystatechange = null, s.removeChild(t), t = null;
              }, s.appendChild(t);
            }) : function (e) {
              setTimeout(c, 0, e);
            }, e.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
              var n = {
                callback: e,
                args: t
              };
              return h[o] = n, i(o), o++;
            }, e.clearImmediate = f;
          }
          function f(e) {
            delete h[e];
          }
          function c(e) {
            if (u) setTimeout(c, 0, e);else {
              var t = h[e];
              if (t) {
                u = !0;
                try {
                  !function (e) {
                    var t = e.callback,
                      r = e.args;
                    switch (r.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(r[0]);
                        break;
                      case 2:
                        t(r[0], r[1]);
                        break;
                      case 3:
                        t(r[0], r[1], r[2]);
                        break;
                      default:
                        t.apply(n, r);
                    }
                  }(t);
                } finally {
                  f(e), u = !1;
                }
              }
            }
          }
          function d(e) {
            e.source === r && "string" == typeof e.data && 0 === e.data.indexOf(a) && c(+e.data.slice(a.length));
          }
        }("undefined" == typeof self ? void 0 === e ? this : e : self);
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}]
  }, {}, [10])(10);
});

/***/ }),

/***/ 32818:
/*!************************************************!*\
  !*** ./node_modules/pako/dist/pako.es5.min.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
!function (t, e) {
   true ? e(exports) : 0;
}(this, function (t) {
  "use strict";

  function e(t) {
    for (var e = t.length; --e >= 0;) t[e] = 0;
  }
  var a = 256,
    n = 286,
    i = 30,
    r = 15,
    s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
    o = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
    l = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
    h = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    d = new Array(576);
  e(d);
  var _ = new Array(60);
  e(_);
  var f = new Array(512);
  e(f);
  var u = new Array(256);
  e(u);
  var c = new Array(29);
  e(c);
  var w,
    m,
    b,
    g = new Array(i);
  function p(t, e, a, n, i) {
    this.static_tree = t, this.extra_bits = e, this.extra_base = a, this.elems = n, this.max_length = i, this.has_stree = t && t.length;
  }
  function v(t, e) {
    this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
  }
  e(g);
  var k = function (t) {
      return t < 256 ? f[t] : f[256 + (t >>> 7)];
    },
    y = function (t, e) {
      t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
    },
    x = function (t, e, a) {
      t.bi_valid > 16 - a ? (t.bi_buf |= e << t.bi_valid & 65535, y(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += a - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += a);
    },
    z = function (t, e, a) {
      x(t, a[2 * e], a[2 * e + 1]);
    },
    A = function (t, e) {
      var a = 0;
      do {
        a |= 1 & t, t >>>= 1, a <<= 1;
      } while (--e > 0);
      return a >>> 1;
    },
    E = function (t, e, a) {
      var n,
        i,
        s = new Array(16),
        o = 0;
      for (n = 1; n <= r; n++) o = o + a[n - 1] << 1, s[n] = o;
      for (i = 0; i <= e; i++) {
        var l = t[2 * i + 1];
        0 !== l && (t[2 * i] = A(s[l]++, l));
      }
    },
    R = function (t) {
      var e;
      for (e = 0; e < n; e++) t.dyn_ltree[2 * e] = 0;
      for (e = 0; e < i; e++) t.dyn_dtree[2 * e] = 0;
      for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
      t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.sym_next = t.matches = 0;
    },
    Z = function (t) {
      t.bi_valid > 8 ? y(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
    },
    S = function (t, e, a, n) {
      var i = 2 * e,
        r = 2 * a;
      return t[i] < t[r] || t[i] === t[r] && n[e] <= n[a];
    },
    U = function (t, e, a) {
      for (var n = t.heap[a], i = a << 1; i <= t.heap_len && (i < t.heap_len && S(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !S(e, n, t.heap[i], t.depth));) t.heap[a] = t.heap[i], a = i, i <<= 1;
      t.heap[a] = n;
    },
    D = function (t, e, n) {
      var i,
        r,
        l,
        h,
        d = 0;
      if (0 !== t.sym_next) do {
        i = 255 & t.pending_buf[t.sym_buf + d++], i += (255 & t.pending_buf[t.sym_buf + d++]) << 8, r = t.pending_buf[t.sym_buf + d++], 0 === i ? z(t, r, e) : (l = u[r], z(t, l + a + 1, e), 0 !== (h = s[l]) && (r -= c[l], x(t, r, h)), i--, l = k(i), z(t, l, n), 0 !== (h = o[l]) && (i -= g[l], x(t, i, h)));
      } while (d < t.sym_next);
      z(t, 256, e);
    },
    T = function (t, e) {
      var a,
        n,
        i,
        s = e.dyn_tree,
        o = e.stat_desc.static_tree,
        l = e.stat_desc.has_stree,
        h = e.stat_desc.elems,
        d = -1;
      for (t.heap_len = 0, t.heap_max = 573, a = 0; a < h; a++) 0 !== s[2 * a] ? (t.heap[++t.heap_len] = d = a, t.depth[a] = 0) : s[2 * a + 1] = 0;
      for (; t.heap_len < 2;) s[2 * (i = t.heap[++t.heap_len] = d < 2 ? ++d : 0)] = 1, t.depth[i] = 0, t.opt_len--, l && (t.static_len -= o[2 * i + 1]);
      for (e.max_code = d, a = t.heap_len >> 1; a >= 1; a--) U(t, s, a);
      i = h;
      do {
        a = t.heap[1], t.heap[1] = t.heap[t.heap_len--], U(t, s, 1), n = t.heap[1], t.heap[--t.heap_max] = a, t.heap[--t.heap_max] = n, s[2 * i] = s[2 * a] + s[2 * n], t.depth[i] = (t.depth[a] >= t.depth[n] ? t.depth[a] : t.depth[n]) + 1, s[2 * a + 1] = s[2 * n + 1] = i, t.heap[1] = i++, U(t, s, 1);
      } while (t.heap_len >= 2);
      t.heap[--t.heap_max] = t.heap[1], function (t, e) {
        var a,
          n,
          i,
          s,
          o,
          l,
          h = e.dyn_tree,
          d = e.max_code,
          _ = e.stat_desc.static_tree,
          f = e.stat_desc.has_stree,
          u = e.stat_desc.extra_bits,
          c = e.stat_desc.extra_base,
          w = e.stat_desc.max_length,
          m = 0;
        for (s = 0; s <= r; s++) t.bl_count[s] = 0;
        for (h[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1; a < 573; a++) (s = h[2 * h[2 * (n = t.heap[a]) + 1] + 1] + 1) > w && (s = w, m++), h[2 * n + 1] = s, n > d || (t.bl_count[s]++, o = 0, n >= c && (o = u[n - c]), l = h[2 * n], t.opt_len += l * (s + o), f && (t.static_len += l * (_[2 * n + 1] + o)));
        if (0 !== m) {
          do {
            for (s = w - 1; 0 === t.bl_count[s];) s--;
            t.bl_count[s]--, t.bl_count[s + 1] += 2, t.bl_count[w]--, m -= 2;
          } while (m > 0);
          for (s = w; 0 !== s; s--) for (n = t.bl_count[s]; 0 !== n;) (i = t.heap[--a]) > d || (h[2 * i + 1] !== s && (t.opt_len += (s - h[2 * i + 1]) * h[2 * i], h[2 * i + 1] = s), n--);
        }
      }(t, e), E(s, d, t.bl_count);
    },
    O = function (t, e, a) {
      var n,
        i,
        r = -1,
        s = e[1],
        o = 0,
        l = 7,
        h = 4;
      for (0 === s && (l = 138, h = 3), e[2 * (a + 1) + 1] = 65535, n = 0; n <= a; n++) i = s, s = e[2 * (n + 1) + 1], ++o < l && i === s || (o < h ? t.bl_tree[2 * i] += o : 0 !== i ? (i !== r && t.bl_tree[2 * i]++, t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++, o = 0, r = i, 0 === s ? (l = 138, h = 3) : i === s ? (l = 6, h = 3) : (l = 7, h = 4));
    },
    I = function (t, e, a) {
      var n,
        i,
        r = -1,
        s = e[1],
        o = 0,
        l = 7,
        h = 4;
      for (0 === s && (l = 138, h = 3), n = 0; n <= a; n++) if (i = s, s = e[2 * (n + 1) + 1], !(++o < l && i === s)) {
        if (o < h) do {
          z(t, i, t.bl_tree);
        } while (0 != --o);else 0 !== i ? (i !== r && (z(t, i, t.bl_tree), o--), z(t, 16, t.bl_tree), x(t, o - 3, 2)) : o <= 10 ? (z(t, 17, t.bl_tree), x(t, o - 3, 3)) : (z(t, 18, t.bl_tree), x(t, o - 11, 7));
        o = 0, r = i, 0 === s ? (l = 138, h = 3) : i === s ? (l = 6, h = 3) : (l = 7, h = 4);
      }
    },
    F = !1,
    L = function (t, e, a, n) {
      x(t, 0 + (n ? 1 : 0), 3), Z(t), y(t, a), y(t, ~a), a && t.pending_buf.set(t.window.subarray(e, e + a), t.pending), t.pending += a;
    },
    N = function (t, e, n, i) {
      var r,
        s,
        o = 0;
      t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = function (t) {
        var e,
          n = 4093624447;
        for (e = 0; e <= 31; e++, n >>>= 1) if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
        if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
        for (e = 32; e < a; e++) if (0 !== t.dyn_ltree[2 * e]) return 1;
        return 0;
      }(t)), T(t, t.l_desc), T(t, t.d_desc), o = function (t) {
        var e;
        for (O(t, t.dyn_ltree, t.l_desc.max_code), O(t, t.dyn_dtree, t.d_desc.max_code), T(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * h[e] + 1]; e--);
        return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
      }(t), r = t.opt_len + 3 + 7 >>> 3, (s = t.static_len + 3 + 7 >>> 3) <= r && (r = s)) : r = s = n + 5, n + 4 <= r && -1 !== e ? L(t, e, n, i) : 4 === t.strategy || s === r ? (x(t, 2 + (i ? 1 : 0), 3), D(t, d, _)) : (x(t, 4 + (i ? 1 : 0), 3), function (t, e, a, n) {
        var i;
        for (x(t, e - 257, 5), x(t, a - 1, 5), x(t, n - 4, 4), i = 0; i < n; i++) x(t, t.bl_tree[2 * h[i] + 1], 3);
        I(t, t.dyn_ltree, e - 1), I(t, t.dyn_dtree, a - 1);
      }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1), D(t, t.dyn_ltree, t.dyn_dtree)), R(t), i && Z(t);
    },
    B = {
      _tr_init: function (t) {
        F || (!function () {
          var t,
            e,
            a,
            h,
            v,
            k = new Array(16);
          for (a = 0, h = 0; h < 28; h++) for (c[h] = a, t = 0; t < 1 << s[h]; t++) u[a++] = h;
          for (u[a - 1] = h, v = 0, h = 0; h < 16; h++) for (g[h] = v, t = 0; t < 1 << o[h]; t++) f[v++] = h;
          for (v >>= 7; h < i; h++) for (g[h] = v << 7, t = 0; t < 1 << o[h] - 7; t++) f[256 + v++] = h;
          for (e = 0; e <= r; e++) k[e] = 0;
          for (t = 0; t <= 143;) d[2 * t + 1] = 8, t++, k[8]++;
          for (; t <= 255;) d[2 * t + 1] = 9, t++, k[9]++;
          for (; t <= 279;) d[2 * t + 1] = 7, t++, k[7]++;
          for (; t <= 287;) d[2 * t + 1] = 8, t++, k[8]++;
          for (E(d, 287, k), t = 0; t < i; t++) _[2 * t + 1] = 5, _[2 * t] = A(t, 5);
          w = new p(d, s, 257, n, r), m = new p(_, o, 0, i, r), b = new p(new Array(0), l, 0, 19, 7);
        }(), F = !0), t.l_desc = new v(t.dyn_ltree, w), t.d_desc = new v(t.dyn_dtree, m), t.bl_desc = new v(t.bl_tree, b), t.bi_buf = 0, t.bi_valid = 0, R(t);
      },
      _tr_stored_block: L,
      _tr_flush_block: N,
      _tr_tally: function (t, e, n) {
        return t.pending_buf[t.sym_buf + t.sym_next++] = e, t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8, t.pending_buf[t.sym_buf + t.sym_next++] = n, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (u[n] + a + 1)]++, t.dyn_dtree[2 * k(e)]++), t.sym_next === t.sym_end;
      },
      _tr_align: function (t) {
        x(t, 2, 3), z(t, 256, d), function (t) {
          16 === t.bi_valid ? (y(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
        }(t);
      }
    },
    C = function (t, e, a, n) {
      for (var i = 65535 & t | 0, r = t >>> 16 & 65535 | 0, s = 0; 0 !== a;) {
        a -= s = a > 2e3 ? 2e3 : a;
        do {
          r = r + (i = i + e[n++] | 0) | 0;
        } while (--s);
        i %= 65521, r %= 65521;
      }
      return i | r << 16 | 0;
    },
    M = new Uint32Array(function () {
      for (var t, e = [], a = 0; a < 256; a++) {
        t = a;
        for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
        e[a] = t;
      }
      return e;
    }()),
    H = function (t, e, a, n) {
      var i = M,
        r = n + a;
      t ^= -1;
      for (var s = n; s < r; s++) t = t >>> 8 ^ i[255 & (t ^ e[s])];
      return -1 ^ t;
    },
    j = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    },
    K = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    },
    P = B._tr_init,
    Y = B._tr_stored_block,
    G = B._tr_flush_block,
    X = B._tr_tally,
    W = B._tr_align,
    q = K.Z_NO_FLUSH,
    J = K.Z_PARTIAL_FLUSH,
    Q = K.Z_FULL_FLUSH,
    V = K.Z_FINISH,
    $ = K.Z_BLOCK,
    tt = K.Z_OK,
    et = K.Z_STREAM_END,
    at = K.Z_STREAM_ERROR,
    nt = K.Z_DATA_ERROR,
    it = K.Z_BUF_ERROR,
    rt = K.Z_DEFAULT_COMPRESSION,
    st = K.Z_FILTERED,
    ot = K.Z_HUFFMAN_ONLY,
    lt = K.Z_RLE,
    ht = K.Z_FIXED,
    dt = K.Z_DEFAULT_STRATEGY,
    _t = K.Z_UNKNOWN,
    ft = K.Z_DEFLATED,
    ut = 258,
    ct = 262,
    wt = 42,
    mt = 113,
    bt = 666,
    gt = function (t, e) {
      return t.msg = j[e], e;
    },
    pt = function (t) {
      return 2 * t - (t > 4 ? 9 : 0);
    },
    vt = function (t) {
      for (var e = t.length; --e >= 0;) t[e] = 0;
    },
    kt = function (t) {
      var e,
        a,
        n,
        i = t.w_size;
      n = e = t.hash_size;
      do {
        a = t.head[--n], t.head[n] = a >= i ? a - i : 0;
      } while (--e);
      n = e = i;
      do {
        a = t.prev[--n], t.prev[n] = a >= i ? a - i : 0;
      } while (--e);
    },
    yt = function (t, e, a) {
      return (e << t.hash_shift ^ a) & t.hash_mask;
    },
    xt = function (t) {
      var e = t.state,
        a = e.pending;
      a > t.avail_out && (a = t.avail_out), 0 !== a && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + a), t.next_out), t.next_out += a, e.pending_out += a, t.total_out += a, t.avail_out -= a, e.pending -= a, 0 === e.pending && (e.pending_out = 0));
    },
    zt = function (t, e) {
      G(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, xt(t.strm);
    },
    At = function (t, e) {
      t.pending_buf[t.pending++] = e;
    },
    Et = function (t, e) {
      t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
    },
    Rt = function (t, e, a, n) {
      var i = t.avail_in;
      return i > n && (i = n), 0 === i ? 0 : (t.avail_in -= i, e.set(t.input.subarray(t.next_in, t.next_in + i), a), 1 === t.state.wrap ? t.adler = C(t.adler, e, i, a) : 2 === t.state.wrap && (t.adler = H(t.adler, e, i, a)), t.next_in += i, t.total_in += i, i);
    },
    Zt = function (t, e) {
      var a,
        n,
        i = t.max_chain_length,
        r = t.strstart,
        s = t.prev_length,
        o = t.nice_match,
        l = t.strstart > t.w_size - ct ? t.strstart - (t.w_size - ct) : 0,
        h = t.window,
        d = t.w_mask,
        _ = t.prev,
        f = t.strstart + ut,
        u = h[r + s - 1],
        c = h[r + s];
      t.prev_length >= t.good_match && (i >>= 2), o > t.lookahead && (o = t.lookahead);
      do {
        if (h[(a = e) + s] === c && h[a + s - 1] === u && h[a] === h[r] && h[++a] === h[r + 1]) {
          r += 2, a++;
          do {} while (h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && r < f);
          if (n = ut - (f - r), r = f - ut, n > s) {
            if (t.match_start = e, s = n, n >= o) break;
            u = h[r + s - 1], c = h[r + s];
          }
        }
      } while ((e = _[e & d]) > l && 0 != --i);
      return s <= t.lookahead ? s : t.lookahead;
    },
    St = function (t) {
      var e,
        a,
        n,
        i = t.w_size;
      do {
        if (a = t.window_size - t.lookahead - t.strstart, t.strstart >= i + (i - ct) && (t.window.set(t.window.subarray(i, i + i - a), 0), t.match_start -= i, t.strstart -= i, t.block_start -= i, t.insert > t.strstart && (t.insert = t.strstart), kt(t), a += i), 0 === t.strm.avail_in) break;
        if (e = Rt(t.strm, t.window, t.strstart + t.lookahead, a), t.lookahead += e, t.lookahead + t.insert >= 3) for (n = t.strstart - t.insert, t.ins_h = t.window[n], t.ins_h = yt(t, t.ins_h, t.window[n + 1]); t.insert && (t.ins_h = yt(t, t.ins_h, t.window[n + 3 - 1]), t.prev[n & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = n, n++, t.insert--, !(t.lookahead + t.insert < 3)););
      } while (t.lookahead < ct && 0 !== t.strm.avail_in);
    },
    Ut = function (t, e) {
      var a,
        n,
        i,
        r = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5,
        s = 0,
        o = t.strm.avail_in;
      do {
        if (a = 65535, i = t.bi_valid + 42 >> 3, t.strm.avail_out < i) break;
        if (i = t.strm.avail_out - i, a > (n = t.strstart - t.block_start) + t.strm.avail_in && (a = n + t.strm.avail_in), a > i && (a = i), a < r && (0 === a && e !== V || e === q || a !== n + t.strm.avail_in)) break;
        s = e === V && a === n + t.strm.avail_in ? 1 : 0, Y(t, 0, 0, s), t.pending_buf[t.pending - 4] = a, t.pending_buf[t.pending - 3] = a >> 8, t.pending_buf[t.pending - 2] = ~a, t.pending_buf[t.pending - 1] = ~a >> 8, xt(t.strm), n && (n > a && (n = a), t.strm.output.set(t.window.subarray(t.block_start, t.block_start + n), t.strm.next_out), t.strm.next_out += n, t.strm.avail_out -= n, t.strm.total_out += n, t.block_start += n, a -= n), a && (Rt(t.strm, t.strm.output, t.strm.next_out, a), t.strm.next_out += a, t.strm.avail_out -= a, t.strm.total_out += a);
      } while (0 === s);
      return (o -= t.strm.avail_in) && (o >= t.w_size ? (t.matches = 2, t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0), t.strstart = t.w_size, t.insert = t.strstart) : (t.window_size - t.strstart <= o && (t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, t.insert > t.strstart && (t.insert = t.strstart)), t.window.set(t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in), t.strstart), t.strstart += o, t.insert += o > t.w_size - t.insert ? t.w_size - t.insert : o), t.block_start = t.strstart), t.high_water < t.strstart && (t.high_water = t.strstart), s ? 4 : e !== q && e !== V && 0 === t.strm.avail_in && t.strstart === t.block_start ? 2 : (i = t.window_size - t.strstart, t.strm.avail_in > i && t.block_start >= t.w_size && (t.block_start -= t.w_size, t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, i += t.w_size, t.insert > t.strstart && (t.insert = t.strstart)), i > t.strm.avail_in && (i = t.strm.avail_in), i && (Rt(t.strm, t.window, t.strstart, i), t.strstart += i, t.insert += i > t.w_size - t.insert ? t.w_size - t.insert : i), t.high_water < t.strstart && (t.high_water = t.strstart), i = t.bi_valid + 42 >> 3, r = (i = t.pending_buf_size - i > 65535 ? 65535 : t.pending_buf_size - i) > t.w_size ? t.w_size : i, ((n = t.strstart - t.block_start) >= r || (n || e === V) && e !== q && 0 === t.strm.avail_in && n <= i) && (a = n > i ? i : n, s = e === V && 0 === t.strm.avail_in && a === n ? 1 : 0, Y(t, t.block_start, a, s), t.block_start += a, xt(t.strm)), s ? 3 : 1);
    },
    Dt = function (t, e) {
      for (var a, n;;) {
        if (t.lookahead < ct) {
          if (St(t), t.lookahead < ct && e === q) return 1;
          if (0 === t.lookahead) break;
        }
        if (a = 0, t.lookahead >= 3 && (t.ins_h = yt(t, t.ins_h, t.window[t.strstart + 3 - 1]), a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== a && t.strstart - a <= t.w_size - ct && (t.match_length = Zt(t, a)), t.match_length >= 3) {
          if (n = X(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
            t.match_length--;
            do {
              t.strstart++, t.ins_h = yt(t, t.ins_h, t.window[t.strstart + 3 - 1]), a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
            } while (0 != --t.match_length);
            t.strstart++;
          } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = yt(t, t.ins_h, t.window[t.strstart + 1]);
        } else n = X(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
        if (n && (zt(t, !1), 0 === t.strm.avail_out)) return 1;
      }
      return t.insert = t.strstart < 2 ? t.strstart : 2, e === V ? (zt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (zt(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
    },
    Tt = function (t, e) {
      for (var a, n, i;;) {
        if (t.lookahead < ct) {
          if (St(t), t.lookahead < ct && e === q) return 1;
          if (0 === t.lookahead) break;
        }
        if (a = 0, t.lookahead >= 3 && (t.ins_h = yt(t, t.ins_h, t.window[t.strstart + 3 - 1]), a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== a && t.prev_length < t.max_lazy_match && t.strstart - a <= t.w_size - ct && (t.match_length = Zt(t, a), t.match_length <= 5 && (t.strategy === st || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
          i = t.strstart + t.lookahead - 3, n = X(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
          do {
            ++t.strstart <= i && (t.ins_h = yt(t, t.ins_h, t.window[t.strstart + 3 - 1]), a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
          } while (0 != --t.prev_length);
          if (t.match_available = 0, t.match_length = 2, t.strstart++, n && (zt(t, !1), 0 === t.strm.avail_out)) return 1;
        } else if (t.match_available) {
          if ((n = X(t, 0, t.window[t.strstart - 1])) && zt(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1;
        } else t.match_available = 1, t.strstart++, t.lookahead--;
      }
      return t.match_available && (n = X(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, e === V ? (zt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (zt(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
    };
  function Ot(t, e, a, n, i) {
    this.good_length = t, this.max_lazy = e, this.nice_length = a, this.max_chain = n, this.func = i;
  }
  var It = [new Ot(0, 0, 0, 0, Ut), new Ot(4, 4, 8, 4, Dt), new Ot(4, 5, 16, 8, Dt), new Ot(4, 6, 32, 32, Dt), new Ot(4, 4, 16, 16, Tt), new Ot(8, 16, 32, 32, Tt), new Ot(8, 16, 128, 128, Tt), new Ot(8, 32, 128, 256, Tt), new Ot(32, 128, 258, 1024, Tt), new Ot(32, 258, 258, 4096, Tt)];
  function Ft() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ft, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), vt(this.dyn_ltree), vt(this.dyn_dtree), vt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), vt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), vt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  var Lt = function (t) {
      if (!t) return 1;
      var e = t.state;
      return !e || e.strm !== t || e.status !== wt && 57 !== e.status && 69 !== e.status && 73 !== e.status && 91 !== e.status && 103 !== e.status && e.status !== mt && e.status !== bt ? 1 : 0;
    },
    Nt = function (t) {
      if (Lt(t)) return gt(t, at);
      t.total_in = t.total_out = 0, t.data_type = _t;
      var e = t.state;
      return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = 2 === e.wrap ? 57 : e.wrap ? wt : mt, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = -2, P(e), tt;
    },
    Bt = function (t) {
      var e,
        a = Nt(t);
      return a === tt && ((e = t.state).window_size = 2 * e.w_size, vt(e.head), e.max_lazy_match = It[e.level].max_lazy, e.good_match = It[e.level].good_length, e.nice_match = It[e.level].nice_length, e.max_chain_length = It[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = 2, e.match_available = 0, e.ins_h = 0), a;
    },
    Ct = function (t, e, a, n, i, r) {
      if (!t) return at;
      var s = 1;
      if (e === rt && (e = 6), n < 0 ? (s = 0, n = -n) : n > 15 && (s = 2, n -= 16), i < 1 || i > 9 || a !== ft || n < 8 || n > 15 || e < 0 || e > 9 || r < 0 || r > ht || 8 === n && 1 !== s) return gt(t, at);
      8 === n && (n = 9);
      var o = new Ft();
      return t.state = o, o.strm = t, o.status = wt, o.wrap = s, o.gzhead = null, o.w_bits = n, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = i + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << i + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.sym_buf = o.lit_bufsize, o.sym_end = 3 * (o.lit_bufsize - 1), o.level = e, o.strategy = r, o.method = a, Bt(t);
    },
    Mt = {
      deflateInit: function (t, e) {
        return Ct(t, e, ft, 15, 8, dt);
      },
      deflateInit2: Ct,
      deflateReset: Bt,
      deflateResetKeep: Nt,
      deflateSetHeader: function (t, e) {
        return Lt(t) || 2 !== t.state.wrap ? at : (t.state.gzhead = e, tt);
      },
      deflate: function (t, e) {
        if (Lt(t) || e > $ || e < 0) return t ? gt(t, at) : at;
        var a = t.state;
        if (!t.output || 0 !== t.avail_in && !t.input || a.status === bt && e !== V) return gt(t, 0 === t.avail_out ? it : at);
        var n = a.last_flush;
        if (a.last_flush = e, 0 !== a.pending) {
          if (xt(t), 0 === t.avail_out) return a.last_flush = -1, tt;
        } else if (0 === t.avail_in && pt(e) <= pt(n) && e !== V) return gt(t, it);
        if (a.status === bt && 0 !== t.avail_in) return gt(t, it);
        if (a.status === wt && 0 === a.wrap && (a.status = mt), a.status === wt) {
          var i = ft + (a.w_bits - 8 << 4) << 8;
          if (i |= (a.strategy >= ot || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3) << 6, 0 !== a.strstart && (i |= 32), Et(a, i += 31 - i % 31), 0 !== a.strstart && (Et(a, t.adler >>> 16), Et(a, 65535 & t.adler)), t.adler = 1, a.status = mt, xt(t), 0 !== a.pending) return a.last_flush = -1, tt;
        }
        if (57 === a.status) if (t.adler = 0, At(a, 31), At(a, 139), At(a, 8), a.gzhead) At(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), At(a, 255 & a.gzhead.time), At(a, a.gzhead.time >> 8 & 255), At(a, a.gzhead.time >> 16 & 255), At(a, a.gzhead.time >> 24 & 255), At(a, 9 === a.level ? 2 : a.strategy >= ot || a.level < 2 ? 4 : 0), At(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (At(a, 255 & a.gzhead.extra.length), At(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (t.adler = H(t.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = 69;else if (At(a, 0), At(a, 0), At(a, 0), At(a, 0), At(a, 0), At(a, 9 === a.level ? 2 : a.strategy >= ot || a.level < 2 ? 4 : 0), At(a, 3), a.status = mt, xt(t), 0 !== a.pending) return a.last_flush = -1, tt;
        if (69 === a.status) {
          if (a.gzhead.extra) {
            for (var r = a.pending, s = (65535 & a.gzhead.extra.length) - a.gzindex; a.pending + s > a.pending_buf_size;) {
              var o = a.pending_buf_size - a.pending;
              if (a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex, a.gzindex + o), a.pending), a.pending = a.pending_buf_size, a.gzhead.hcrc && a.pending > r && (t.adler = H(t.adler, a.pending_buf, a.pending - r, r)), a.gzindex += o, xt(t), 0 !== a.pending) return a.last_flush = -1, tt;
              r = 0, s -= o;
            }
            var l = new Uint8Array(a.gzhead.extra);
            a.pending_buf.set(l.subarray(a.gzindex, a.gzindex + s), a.pending), a.pending += s, a.gzhead.hcrc && a.pending > r && (t.adler = H(t.adler, a.pending_buf, a.pending - r, r)), a.gzindex = 0;
          }
          a.status = 73;
        }
        if (73 === a.status) {
          if (a.gzhead.name) {
            var h,
              d = a.pending;
            do {
              if (a.pending === a.pending_buf_size) {
                if (a.gzhead.hcrc && a.pending > d && (t.adler = H(t.adler, a.pending_buf, a.pending - d, d)), xt(t), 0 !== a.pending) return a.last_flush = -1, tt;
                d = 0;
              }
              h = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0, At(a, h);
            } while (0 !== h);
            a.gzhead.hcrc && a.pending > d && (t.adler = H(t.adler, a.pending_buf, a.pending - d, d)), a.gzindex = 0;
          }
          a.status = 91;
        }
        if (91 === a.status) {
          if (a.gzhead.comment) {
            var _,
              f = a.pending;
            do {
              if (a.pending === a.pending_buf_size) {
                if (a.gzhead.hcrc && a.pending > f && (t.adler = H(t.adler, a.pending_buf, a.pending - f, f)), xt(t), 0 !== a.pending) return a.last_flush = -1, tt;
                f = 0;
              }
              _ = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0, At(a, _);
            } while (0 !== _);
            a.gzhead.hcrc && a.pending > f && (t.adler = H(t.adler, a.pending_buf, a.pending - f, f));
          }
          a.status = 103;
        }
        if (103 === a.status) {
          if (a.gzhead.hcrc) {
            if (a.pending + 2 > a.pending_buf_size && (xt(t), 0 !== a.pending)) return a.last_flush = -1, tt;
            At(a, 255 & t.adler), At(a, t.adler >> 8 & 255), t.adler = 0;
          }
          if (a.status = mt, xt(t), 0 !== a.pending) return a.last_flush = -1, tt;
        }
        if (0 !== t.avail_in || 0 !== a.lookahead || e !== q && a.status !== bt) {
          var u = 0 === a.level ? Ut(a, e) : a.strategy === ot ? function (t, e) {
            for (var a;;) {
              if (0 === t.lookahead && (St(t), 0 === t.lookahead)) {
                if (e === q) return 1;
                break;
              }
              if (t.match_length = 0, a = X(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, a && (zt(t, !1), 0 === t.strm.avail_out)) return 1;
            }
            return t.insert = 0, e === V ? (zt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (zt(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
          }(a, e) : a.strategy === lt ? function (t, e) {
            for (var a, n, i, r, s = t.window;;) {
              if (t.lookahead <= ut) {
                if (St(t), t.lookahead <= ut && e === q) return 1;
                if (0 === t.lookahead) break;
              }
              if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (n = s[i = t.strstart - 1]) === s[++i] && n === s[++i] && n === s[++i]) {
                r = t.strstart + ut;
                do {} while (n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && i < r);
                t.match_length = ut - (r - i), t.match_length > t.lookahead && (t.match_length = t.lookahead);
              }
              if (t.match_length >= 3 ? (a = X(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (a = X(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), a && (zt(t, !1), 0 === t.strm.avail_out)) return 1;
            }
            return t.insert = 0, e === V ? (zt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (zt(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
          }(a, e) : It[a.level].func(a, e);
          if (3 !== u && 4 !== u || (a.status = bt), 1 === u || 3 === u) return 0 === t.avail_out && (a.last_flush = -1), tt;
          if (2 === u && (e === J ? W(a) : e !== $ && (Y(a, 0, 0, !1), e === Q && (vt(a.head), 0 === a.lookahead && (a.strstart = 0, a.block_start = 0, a.insert = 0))), xt(t), 0 === t.avail_out)) return a.last_flush = -1, tt;
        }
        return e !== V ? tt : a.wrap <= 0 ? et : (2 === a.wrap ? (At(a, 255 & t.adler), At(a, t.adler >> 8 & 255), At(a, t.adler >> 16 & 255), At(a, t.adler >> 24 & 255), At(a, 255 & t.total_in), At(a, t.total_in >> 8 & 255), At(a, t.total_in >> 16 & 255), At(a, t.total_in >> 24 & 255)) : (Et(a, t.adler >>> 16), Et(a, 65535 & t.adler)), xt(t), a.wrap > 0 && (a.wrap = -a.wrap), 0 !== a.pending ? tt : et);
      },
      deflateEnd: function (t) {
        if (Lt(t)) return at;
        var e = t.state.status;
        return t.state = null, e === mt ? gt(t, nt) : tt;
      },
      deflateSetDictionary: function (t, e) {
        var a = e.length;
        if (Lt(t)) return at;
        var n = t.state,
          i = n.wrap;
        if (2 === i || 1 === i && n.status !== wt || n.lookahead) return at;
        if (1 === i && (t.adler = C(t.adler, e, a, 0)), n.wrap = 0, a >= n.w_size) {
          0 === i && (vt(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
          var r = new Uint8Array(n.w_size);
          r.set(e.subarray(a - n.w_size, a), 0), e = r, a = n.w_size;
        }
        var s = t.avail_in,
          o = t.next_in,
          l = t.input;
        for (t.avail_in = a, t.next_in = 0, t.input = e, St(n); n.lookahead >= 3;) {
          var h = n.strstart,
            d = n.lookahead - 2;
          do {
            n.ins_h = yt(n, n.ins_h, n.window[h + 3 - 1]), n.prev[h & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = h, h++;
          } while (--d);
          n.strstart = h, n.lookahead = 2, St(n);
        }
        return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = 2, n.match_available = 0, t.next_in = o, t.input = l, t.avail_in = s, n.wrap = i, tt;
      },
      deflateInfo: "pako deflate (from Nodeca project)"
    };
  function Ht(t) {
    return Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Ht(t);
  }
  var jt = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    },
    Kt = function (t) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
        var a = e.shift();
        if (a) {
          if ("object" !== Ht(a)) throw new TypeError(a + "must be non-object");
          for (var n in a) jt(a, n) && (t[n] = a[n]);
        }
      }
      return t;
    },
    Pt = function (t) {
      for (var e = 0, a = 0, n = t.length; a < n; a++) e += t[a].length;
      for (var i = new Uint8Array(e), r = 0, s = 0, o = t.length; r < o; r++) {
        var l = t[r];
        i.set(l, s), s += l.length;
      }
      return i;
    },
    Yt = !0;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    Yt = !1;
  }
  for (var Gt = new Uint8Array(256), Xt = 0; Xt < 256; Xt++) Gt[Xt] = Xt >= 252 ? 6 : Xt >= 248 ? 5 : Xt >= 240 ? 4 : Xt >= 224 ? 3 : Xt >= 192 ? 2 : 1;
  Gt[254] = Gt[254] = 1;
  var Wt = function (t) {
      if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(t);
      var e,
        a,
        n,
        i,
        r,
        s = t.length,
        o = 0;
      for (i = 0; i < s; i++) 55296 == (64512 & (a = t.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (n = t.charCodeAt(i + 1))) && (a = 65536 + (a - 55296 << 10) + (n - 56320), i++), o += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
      for (e = new Uint8Array(o), r = 0, i = 0; r < o; i++) 55296 == (64512 & (a = t.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (n = t.charCodeAt(i + 1))) && (a = 65536 + (a - 55296 << 10) + (n - 56320), i++), a < 128 ? e[r++] = a : a < 2048 ? (e[r++] = 192 | a >>> 6, e[r++] = 128 | 63 & a) : a < 65536 ? (e[r++] = 224 | a >>> 12, e[r++] = 128 | a >>> 6 & 63, e[r++] = 128 | 63 & a) : (e[r++] = 240 | a >>> 18, e[r++] = 128 | a >>> 12 & 63, e[r++] = 128 | a >>> 6 & 63, e[r++] = 128 | 63 & a);
      return e;
    },
    qt = function (t, e) {
      var a,
        n,
        i = e || t.length;
      if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(t.subarray(0, e));
      var r = new Array(2 * i);
      for (n = 0, a = 0; a < i;) {
        var s = t[a++];
        if (s < 128) r[n++] = s;else {
          var o = Gt[s];
          if (o > 4) r[n++] = 65533, a += o - 1;else {
            for (s &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && a < i;) s = s << 6 | 63 & t[a++], o--;
            o > 1 ? r[n++] = 65533 : s < 65536 ? r[n++] = s : (s -= 65536, r[n++] = 55296 | s >> 10 & 1023, r[n++] = 56320 | 1023 & s);
          }
        }
      }
      return function (t, e) {
        if (e < 65534 && t.subarray && Yt) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
        for (var a = "", n = 0; n < e; n++) a += String.fromCharCode(t[n]);
        return a;
      }(r, n);
    },
    Jt = function (t, e) {
      (e = e || t.length) > t.length && (e = t.length);
      for (var a = e - 1; a >= 0 && 128 == (192 & t[a]);) a--;
      return a < 0 || 0 === a ? e : a + Gt[t[a]] > e ? a : e;
    };
  var Qt = function () {
      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    },
    Vt = Object.prototype.toString,
    $t = K.Z_NO_FLUSH,
    te = K.Z_SYNC_FLUSH,
    ee = K.Z_FULL_FLUSH,
    ae = K.Z_FINISH,
    ne = K.Z_OK,
    ie = K.Z_STREAM_END,
    re = K.Z_DEFAULT_COMPRESSION,
    se = K.Z_DEFAULT_STRATEGY,
    oe = K.Z_DEFLATED;
  function le(t) {
    this.options = Kt({
      level: re,
      method: oe,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: se
    }, t || {});
    var e = this.options;
    e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Qt(), this.strm.avail_out = 0;
    var a = Mt.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
    if (a !== ne) throw new Error(j[a]);
    if (e.header && Mt.deflateSetHeader(this.strm, e.header), e.dictionary) {
      var n;
      if (n = "string" == typeof e.dictionary ? Wt(e.dictionary) : "[object ArrayBuffer]" === Vt.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (a = Mt.deflateSetDictionary(this.strm, n)) !== ne) throw new Error(j[a]);
      this._dict_set = !0;
    }
  }
  function he(t, e) {
    var a = new le(e);
    if (a.push(t, !0), a.err) throw a.msg || j[a.err];
    return a.result;
  }
  le.prototype.push = function (t, e) {
    var a,
      n,
      i = this.strm,
      r = this.options.chunkSize;
    if (this.ended) return !1;
    for (n = e === ~~e ? e : !0 === e ? ae : $t, "string" == typeof t ? i.input = Wt(t) : "[object ArrayBuffer]" === Vt.call(t) ? i.input = new Uint8Array(t) : i.input = t, i.next_in = 0, i.avail_in = i.input.length;;) if (0 === i.avail_out && (i.output = new Uint8Array(r), i.next_out = 0, i.avail_out = r), (n === te || n === ee) && i.avail_out <= 6) this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;else {
      if ((a = Mt.deflate(i, n)) === ie) return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)), a = Mt.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === ne;
      if (0 !== i.avail_out) {
        if (n > 0 && i.next_out > 0) this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;else if (0 === i.avail_in) break;
      } else this.onData(i.output);
    }
    return !0;
  }, le.prototype.onData = function (t) {
    this.chunks.push(t);
  }, le.prototype.onEnd = function (t) {
    t === ne && (this.result = Pt(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
  };
  var de = {
      Deflate: le,
      deflate: he,
      deflateRaw: function (t, e) {
        return (e = e || {}).raw = !0, he(t, e);
      },
      gzip: function (t, e) {
        return (e = e || {}).gzip = !0, he(t, e);
      },
      constants: K
    },
    _e = 16209,
    fe = function (t, e) {
      var a,
        n,
        i,
        r,
        s,
        o,
        l,
        h,
        d,
        _,
        f,
        u,
        c,
        w,
        m,
        b,
        g,
        p,
        v,
        k,
        y,
        x,
        z,
        A,
        E = t.state;
      a = t.next_in, z = t.input, n = a + (t.avail_in - 5), i = t.next_out, A = t.output, r = i - (e - t.avail_out), s = i + (t.avail_out - 257), o = E.dmax, l = E.wsize, h = E.whave, d = E.wnext, _ = E.window, f = E.hold, u = E.bits, c = E.lencode, w = E.distcode, m = (1 << E.lenbits) - 1, b = (1 << E.distbits) - 1;
      t: do {
        u < 15 && (f += z[a++] << u, u += 8, f += z[a++] << u, u += 8), g = c[f & m];
        e: for (;;) {
          if (f >>>= p = g >>> 24, u -= p, 0 === (p = g >>> 16 & 255)) A[i++] = 65535 & g;else {
            if (!(16 & p)) {
              if (0 == (64 & p)) {
                g = c[(65535 & g) + (f & (1 << p) - 1)];
                continue e;
              }
              if (32 & p) {
                E.mode = 16191;
                break t;
              }
              t.msg = "invalid literal/length code", E.mode = _e;
              break t;
            }
            v = 65535 & g, (p &= 15) && (u < p && (f += z[a++] << u, u += 8), v += f & (1 << p) - 1, f >>>= p, u -= p), u < 15 && (f += z[a++] << u, u += 8, f += z[a++] << u, u += 8), g = w[f & b];
            a: for (;;) {
              if (f >>>= p = g >>> 24, u -= p, !(16 & (p = g >>> 16 & 255))) {
                if (0 == (64 & p)) {
                  g = w[(65535 & g) + (f & (1 << p) - 1)];
                  continue a;
                }
                t.msg = "invalid distance code", E.mode = _e;
                break t;
              }
              if (k = 65535 & g, u < (p &= 15) && (f += z[a++] << u, (u += 8) < p && (f += z[a++] << u, u += 8)), (k += f & (1 << p) - 1) > o) {
                t.msg = "invalid distance too far back", E.mode = _e;
                break t;
              }
              if (f >>>= p, u -= p, k > (p = i - r)) {
                if ((p = k - p) > h && E.sane) {
                  t.msg = "invalid distance too far back", E.mode = _e;
                  break t;
                }
                if (y = 0, x = _, 0 === d) {
                  if (y += l - p, p < v) {
                    v -= p;
                    do {
                      A[i++] = _[y++];
                    } while (--p);
                    y = i - k, x = A;
                  }
                } else if (d < p) {
                  if (y += l + d - p, (p -= d) < v) {
                    v -= p;
                    do {
                      A[i++] = _[y++];
                    } while (--p);
                    if (y = 0, d < v) {
                      v -= p = d;
                      do {
                        A[i++] = _[y++];
                      } while (--p);
                      y = i - k, x = A;
                    }
                  }
                } else if (y += d - p, p < v) {
                  v -= p;
                  do {
                    A[i++] = _[y++];
                  } while (--p);
                  y = i - k, x = A;
                }
                for (; v > 2;) A[i++] = x[y++], A[i++] = x[y++], A[i++] = x[y++], v -= 3;
                v && (A[i++] = x[y++], v > 1 && (A[i++] = x[y++]));
              } else {
                y = i - k;
                do {
                  A[i++] = A[y++], A[i++] = A[y++], A[i++] = A[y++], v -= 3;
                } while (v > 2);
                v && (A[i++] = A[y++], v > 1 && (A[i++] = A[y++]));
              }
              break;
            }
          }
          break;
        }
      } while (a < n && i < s);
      a -= v = u >> 3, f &= (1 << (u -= v << 3)) - 1, t.next_in = a, t.next_out = i, t.avail_in = a < n ? n - a + 5 : 5 - (a - n), t.avail_out = i < s ? s - i + 257 : 257 - (i - s), E.hold = f, E.bits = u;
    },
    ue = 15,
    ce = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
    we = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
    me = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
    be = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]),
    ge = function (t, e, a, n, i, r, s, o) {
      var l,
        h,
        d,
        _,
        f,
        u,
        c,
        w,
        m,
        b = o.bits,
        g = 0,
        p = 0,
        v = 0,
        k = 0,
        y = 0,
        x = 0,
        z = 0,
        A = 0,
        E = 0,
        R = 0,
        Z = null,
        S = new Uint16Array(16),
        U = new Uint16Array(16),
        D = null;
      for (g = 0; g <= ue; g++) S[g] = 0;
      for (p = 0; p < n; p++) S[e[a + p]]++;
      for (y = b, k = ue; k >= 1 && 0 === S[k]; k--);
      if (y > k && (y = k), 0 === k) return i[r++] = 20971520, i[r++] = 20971520, o.bits = 1, 0;
      for (v = 1; v < k && 0 === S[v]; v++);
      for (y < v && (y = v), A = 1, g = 1; g <= ue; g++) if (A <<= 1, (A -= S[g]) < 0) return -1;
      if (A > 0 && (0 === t || 1 !== k)) return -1;
      for (U[1] = 0, g = 1; g < ue; g++) U[g + 1] = U[g] + S[g];
      for (p = 0; p < n; p++) 0 !== e[a + p] && (s[U[e[a + p]]++] = p);
      if (0 === t ? (Z = D = s, u = 20) : 1 === t ? (Z = ce, D = we, u = 257) : (Z = me, D = be, u = 0), R = 0, p = 0, g = v, f = r, x = y, z = 0, d = -1, _ = (E = 1 << y) - 1, 1 === t && E > 852 || 2 === t && E > 592) return 1;
      for (;;) {
        c = g - z, s[p] + 1 < u ? (w = 0, m = s[p]) : s[p] >= u ? (w = D[s[p] - u], m = Z[s[p] - u]) : (w = 96, m = 0), l = 1 << g - z, v = h = 1 << x;
        do {
          i[f + (R >> z) + (h -= l)] = c << 24 | w << 16 | m | 0;
        } while (0 !== h);
        for (l = 1 << g - 1; R & l;) l >>= 1;
        if (0 !== l ? (R &= l - 1, R += l) : R = 0, p++, 0 == --S[g]) {
          if (g === k) break;
          g = e[a + s[p]];
        }
        if (g > y && (R & _) !== d) {
          for (0 === z && (z = y), f += v, A = 1 << (x = g - z); x + z < k && !((A -= S[x + z]) <= 0);) x++, A <<= 1;
          if (E += 1 << x, 1 === t && E > 852 || 2 === t && E > 592) return 1;
          i[d = R & _] = y << 24 | x << 16 | f - r | 0;
        }
      }
      return 0 !== R && (i[f + R] = g - z << 24 | 64 << 16 | 0), o.bits = y, 0;
    },
    pe = K.Z_FINISH,
    ve = K.Z_BLOCK,
    ke = K.Z_TREES,
    ye = K.Z_OK,
    xe = K.Z_STREAM_END,
    ze = K.Z_NEED_DICT,
    Ae = K.Z_STREAM_ERROR,
    Ee = K.Z_DATA_ERROR,
    Re = K.Z_MEM_ERROR,
    Ze = K.Z_BUF_ERROR,
    Se = K.Z_DEFLATED,
    Ue = 16180,
    De = 16190,
    Te = 16191,
    Oe = 16192,
    Ie = 16194,
    Fe = 16199,
    Le = 16200,
    Ne = 16206,
    Be = 16209,
    Ce = function (t) {
      return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
    };
  function Me() {
    this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  var He,
    je,
    Ke = function (t) {
      if (!t) return 1;
      var e = t.state;
      return !e || e.strm !== t || e.mode < Ue || e.mode > 16211 ? 1 : 0;
    },
    Pe = function (t) {
      if (Ke(t)) return Ae;
      var e = t.state;
      return t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = Ue, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(852), e.distcode = e.distdyn = new Int32Array(592), e.sane = 1, e.back = -1, ye;
    },
    Ye = function (t) {
      if (Ke(t)) return Ae;
      var e = t.state;
      return e.wsize = 0, e.whave = 0, e.wnext = 0, Pe(t);
    },
    Ge = function (t, e) {
      var a;
      if (Ke(t)) return Ae;
      var n = t.state;
      return e < 0 ? (a = 0, e = -e) : (a = 5 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Ae : (null !== n.window && n.wbits !== e && (n.window = null), n.wrap = a, n.wbits = e, Ye(t));
    },
    Xe = function (t, e) {
      if (!t) return Ae;
      var a = new Me();
      t.state = a, a.strm = t, a.window = null, a.mode = Ue;
      var n = Ge(t, e);
      return n !== ye && (t.state = null), n;
    },
    We = !0,
    qe = function (t) {
      if (We) {
        He = new Int32Array(512), je = new Int32Array(32);
        for (var e = 0; e < 144;) t.lens[e++] = 8;
        for (; e < 256;) t.lens[e++] = 9;
        for (; e < 280;) t.lens[e++] = 7;
        for (; e < 288;) t.lens[e++] = 8;
        for (ge(1, t.lens, 0, 288, He, 0, t.work, {
          bits: 9
        }), e = 0; e < 32;) t.lens[e++] = 5;
        ge(2, t.lens, 0, 32, je, 0, t.work, {
          bits: 5
        }), We = !1;
      }
      t.lencode = He, t.lenbits = 9, t.distcode = je, t.distbits = 5;
    },
    Je = function (t, e, a, n) {
      var i,
        r = t.state;
      return null === r.window && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new Uint8Array(r.wsize)), n >= r.wsize ? (r.window.set(e.subarray(a - r.wsize, a), 0), r.wnext = 0, r.whave = r.wsize) : ((i = r.wsize - r.wnext) > n && (i = n), r.window.set(e.subarray(a - n, a - n + i), r.wnext), (n -= i) ? (r.window.set(e.subarray(a - n, a), 0), r.wnext = n, r.whave = r.wsize) : (r.wnext += i, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += i))), 0;
    },
    Qe = {
      inflateReset: Ye,
      inflateReset2: Ge,
      inflateResetKeep: Pe,
      inflateInit: function (t) {
        return Xe(t, 15);
      },
      inflateInit2: Xe,
      inflate: function (t, e) {
        var a,
          n,
          i,
          r,
          s,
          o,
          l,
          h,
          d,
          _,
          f,
          u,
          c,
          w,
          m,
          b,
          g,
          p,
          v,
          k,
          y,
          x,
          z,
          A,
          E = 0,
          R = new Uint8Array(4),
          Z = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (Ke(t) || !t.output || !t.input && 0 !== t.avail_in) return Ae;
        (a = t.state).mode === Te && (a.mode = Oe), s = t.next_out, i = t.output, l = t.avail_out, r = t.next_in, n = t.input, o = t.avail_in, h = a.hold, d = a.bits, _ = o, f = l, x = ye;
        t: for (;;) switch (a.mode) {
          case Ue:
            if (0 === a.wrap) {
              a.mode = Oe;
              break;
            }
            for (; d < 16;) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            if (2 & a.wrap && 35615 === h) {
              0 === a.wbits && (a.wbits = 15), a.check = 0, R[0] = 255 & h, R[1] = h >>> 8 & 255, a.check = H(a.check, R, 2, 0), h = 0, d = 0, a.mode = 16181;
              break;
            }
            if (a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
              t.msg = "incorrect header check", a.mode = Be;
              break;
            }
            if ((15 & h) !== Se) {
              t.msg = "unknown compression method", a.mode = Be;
              break;
            }
            if (d -= 4, y = 8 + (15 & (h >>>= 4)), 0 === a.wbits && (a.wbits = y), y > 15 || y > a.wbits) {
              t.msg = "invalid window size", a.mode = Be;
              break;
            }
            a.dmax = 1 << a.wbits, a.flags = 0, t.adler = a.check = 1, a.mode = 512 & h ? 16189 : Te, h = 0, d = 0;
            break;
          case 16181:
            for (; d < 16;) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            if (a.flags = h, (255 & a.flags) !== Se) {
              t.msg = "unknown compression method", a.mode = Be;
              break;
            }
            if (57344 & a.flags) {
              t.msg = "unknown header flags set", a.mode = Be;
              break;
            }
            a.head && (a.head.text = h >> 8 & 1), 512 & a.flags && 4 & a.wrap && (R[0] = 255 & h, R[1] = h >>> 8 & 255, a.check = H(a.check, R, 2, 0)), h = 0, d = 0, a.mode = 16182;
          case 16182:
            for (; d < 32;) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            a.head && (a.head.time = h), 512 & a.flags && 4 & a.wrap && (R[0] = 255 & h, R[1] = h >>> 8 & 255, R[2] = h >>> 16 & 255, R[3] = h >>> 24 & 255, a.check = H(a.check, R, 4, 0)), h = 0, d = 0, a.mode = 16183;
          case 16183:
            for (; d < 16;) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            a.head && (a.head.xflags = 255 & h, a.head.os = h >> 8), 512 & a.flags && 4 & a.wrap && (R[0] = 255 & h, R[1] = h >>> 8 & 255, a.check = H(a.check, R, 2, 0)), h = 0, d = 0, a.mode = 16184;
          case 16184:
            if (1024 & a.flags) {
              for (; d < 16;) {
                if (0 === o) break t;
                o--, h += n[r++] << d, d += 8;
              }
              a.length = h, a.head && (a.head.extra_len = h), 512 & a.flags && 4 & a.wrap && (R[0] = 255 & h, R[1] = h >>> 8 & 255, a.check = H(a.check, R, 2, 0)), h = 0, d = 0;
            } else a.head && (a.head.extra = null);
            a.mode = 16185;
          case 16185:
            if (1024 & a.flags && ((u = a.length) > o && (u = o), u && (a.head && (y = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Uint8Array(a.head.extra_len)), a.head.extra.set(n.subarray(r, r + u), y)), 512 & a.flags && 4 & a.wrap && (a.check = H(a.check, n, u, r)), o -= u, r += u, a.length -= u), a.length)) break t;
            a.length = 0, a.mode = 16186;
          case 16186:
            if (2048 & a.flags) {
              if (0 === o) break t;
              u = 0;
              do {
                y = n[r + u++], a.head && y && a.length < 65536 && (a.head.name += String.fromCharCode(y));
              } while (y && u < o);
              if (512 & a.flags && 4 & a.wrap && (a.check = H(a.check, n, u, r)), o -= u, r += u, y) break t;
            } else a.head && (a.head.name = null);
            a.length = 0, a.mode = 16187;
          case 16187:
            if (4096 & a.flags) {
              if (0 === o) break t;
              u = 0;
              do {
                y = n[r + u++], a.head && y && a.length < 65536 && (a.head.comment += String.fromCharCode(y));
              } while (y && u < o);
              if (512 & a.flags && 4 & a.wrap && (a.check = H(a.check, n, u, r)), o -= u, r += u, y) break t;
            } else a.head && (a.head.comment = null);
            a.mode = 16188;
          case 16188:
            if (512 & a.flags) {
              for (; d < 16;) {
                if (0 === o) break t;
                o--, h += n[r++] << d, d += 8;
              }
              if (4 & a.wrap && h !== (65535 & a.check)) {
                t.msg = "header crc mismatch", a.mode = Be;
                break;
              }
              h = 0, d = 0;
            }
            a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), t.adler = a.check = 0, a.mode = Te;
            break;
          case 16189:
            for (; d < 32;) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            t.adler = a.check = Ce(h), h = 0, d = 0, a.mode = De;
          case De:
            if (0 === a.havedict) return t.next_out = s, t.avail_out = l, t.next_in = r, t.avail_in = o, a.hold = h, a.bits = d, ze;
            t.adler = a.check = 1, a.mode = Te;
          case Te:
            if (e === ve || e === ke) break t;
          case Oe:
            if (a.last) {
              h >>>= 7 & d, d -= 7 & d, a.mode = Ne;
              break;
            }
            for (; d < 3;) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            switch (a.last = 1 & h, d -= 1, 3 & (h >>>= 1)) {
              case 0:
                a.mode = 16193;
                break;
              case 1:
                if (qe(a), a.mode = Fe, e === ke) {
                  h >>>= 2, d -= 2;
                  break t;
                }
                break;
              case 2:
                a.mode = 16196;
                break;
              case 3:
                t.msg = "invalid block type", a.mode = Be;
            }
            h >>>= 2, d -= 2;
            break;
          case 16193:
            for (h >>>= 7 & d, d -= 7 & d; d < 32;) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            if ((65535 & h) != (h >>> 16 ^ 65535)) {
              t.msg = "invalid stored block lengths", a.mode = Be;
              break;
            }
            if (a.length = 65535 & h, h = 0, d = 0, a.mode = Ie, e === ke) break t;
          case Ie:
            a.mode = 16195;
          case 16195:
            if (u = a.length) {
              if (u > o && (u = o), u > l && (u = l), 0 === u) break t;
              i.set(n.subarray(r, r + u), s), o -= u, r += u, l -= u, s += u, a.length -= u;
              break;
            }
            a.mode = Te;
            break;
          case 16196:
            for (; d < 14;) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            if (a.nlen = 257 + (31 & h), h >>>= 5, d -= 5, a.ndist = 1 + (31 & h), h >>>= 5, d -= 5, a.ncode = 4 + (15 & h), h >>>= 4, d -= 4, a.nlen > 286 || a.ndist > 30) {
              t.msg = "too many length or distance symbols", a.mode = Be;
              break;
            }
            a.have = 0, a.mode = 16197;
          case 16197:
            for (; a.have < a.ncode;) {
              for (; d < 3;) {
                if (0 === o) break t;
                o--, h += n[r++] << d, d += 8;
              }
              a.lens[Z[a.have++]] = 7 & h, h >>>= 3, d -= 3;
            }
            for (; a.have < 19;) a.lens[Z[a.have++]] = 0;
            if (a.lencode = a.lendyn, a.lenbits = 7, z = {
              bits: a.lenbits
            }, x = ge(0, a.lens, 0, 19, a.lencode, 0, a.work, z), a.lenbits = z.bits, x) {
              t.msg = "invalid code lengths set", a.mode = Be;
              break;
            }
            a.have = 0, a.mode = 16198;
          case 16198:
            for (; a.have < a.nlen + a.ndist;) {
              for (; b = (E = a.lencode[h & (1 << a.lenbits) - 1]) >>> 16 & 255, g = 65535 & E, !((m = E >>> 24) <= d);) {
                if (0 === o) break t;
                o--, h += n[r++] << d, d += 8;
              }
              if (g < 16) h >>>= m, d -= m, a.lens[a.have++] = g;else {
                if (16 === g) {
                  for (A = m + 2; d < A;) {
                    if (0 === o) break t;
                    o--, h += n[r++] << d, d += 8;
                  }
                  if (h >>>= m, d -= m, 0 === a.have) {
                    t.msg = "invalid bit length repeat", a.mode = Be;
                    break;
                  }
                  y = a.lens[a.have - 1], u = 3 + (3 & h), h >>>= 2, d -= 2;
                } else if (17 === g) {
                  for (A = m + 3; d < A;) {
                    if (0 === o) break t;
                    o--, h += n[r++] << d, d += 8;
                  }
                  d -= m, y = 0, u = 3 + (7 & (h >>>= m)), h >>>= 3, d -= 3;
                } else {
                  for (A = m + 7; d < A;) {
                    if (0 === o) break t;
                    o--, h += n[r++] << d, d += 8;
                  }
                  d -= m, y = 0, u = 11 + (127 & (h >>>= m)), h >>>= 7, d -= 7;
                }
                if (a.have + u > a.nlen + a.ndist) {
                  t.msg = "invalid bit length repeat", a.mode = Be;
                  break;
                }
                for (; u--;) a.lens[a.have++] = y;
              }
            }
            if (a.mode === Be) break;
            if (0 === a.lens[256]) {
              t.msg = "invalid code -- missing end-of-block", a.mode = Be;
              break;
            }
            if (a.lenbits = 9, z = {
              bits: a.lenbits
            }, x = ge(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, z), a.lenbits = z.bits, x) {
              t.msg = "invalid literal/lengths set", a.mode = Be;
              break;
            }
            if (a.distbits = 6, a.distcode = a.distdyn, z = {
              bits: a.distbits
            }, x = ge(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, z), a.distbits = z.bits, x) {
              t.msg = "invalid distances set", a.mode = Be;
              break;
            }
            if (a.mode = Fe, e === ke) break t;
          case Fe:
            a.mode = Le;
          case Le:
            if (o >= 6 && l >= 258) {
              t.next_out = s, t.avail_out = l, t.next_in = r, t.avail_in = o, a.hold = h, a.bits = d, fe(t, f), s = t.next_out, i = t.output, l = t.avail_out, r = t.next_in, n = t.input, o = t.avail_in, h = a.hold, d = a.bits, a.mode === Te && (a.back = -1);
              break;
            }
            for (a.back = 0; b = (E = a.lencode[h & (1 << a.lenbits) - 1]) >>> 16 & 255, g = 65535 & E, !((m = E >>> 24) <= d);) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            if (b && 0 == (240 & b)) {
              for (p = m, v = b, k = g; b = (E = a.lencode[k + ((h & (1 << p + v) - 1) >> p)]) >>> 16 & 255, g = 65535 & E, !(p + (m = E >>> 24) <= d);) {
                if (0 === o) break t;
                o--, h += n[r++] << d, d += 8;
              }
              h >>>= p, d -= p, a.back += p;
            }
            if (h >>>= m, d -= m, a.back += m, a.length = g, 0 === b) {
              a.mode = 16205;
              break;
            }
            if (32 & b) {
              a.back = -1, a.mode = Te;
              break;
            }
            if (64 & b) {
              t.msg = "invalid literal/length code", a.mode = Be;
              break;
            }
            a.extra = 15 & b, a.mode = 16201;
          case 16201:
            if (a.extra) {
              for (A = a.extra; d < A;) {
                if (0 === o) break t;
                o--, h += n[r++] << d, d += 8;
              }
              a.length += h & (1 << a.extra) - 1, h >>>= a.extra, d -= a.extra, a.back += a.extra;
            }
            a.was = a.length, a.mode = 16202;
          case 16202:
            for (; b = (E = a.distcode[h & (1 << a.distbits) - 1]) >>> 16 & 255, g = 65535 & E, !((m = E >>> 24) <= d);) {
              if (0 === o) break t;
              o--, h += n[r++] << d, d += 8;
            }
            if (0 == (240 & b)) {
              for (p = m, v = b, k = g; b = (E = a.distcode[k + ((h & (1 << p + v) - 1) >> p)]) >>> 16 & 255, g = 65535 & E, !(p + (m = E >>> 24) <= d);) {
                if (0 === o) break t;
                o--, h += n[r++] << d, d += 8;
              }
              h >>>= p, d -= p, a.back += p;
            }
            if (h >>>= m, d -= m, a.back += m, 64 & b) {
              t.msg = "invalid distance code", a.mode = Be;
              break;
            }
            a.offset = g, a.extra = 15 & b, a.mode = 16203;
          case 16203:
            if (a.extra) {
              for (A = a.extra; d < A;) {
                if (0 === o) break t;
                o--, h += n[r++] << d, d += 8;
              }
              a.offset += h & (1 << a.extra) - 1, h >>>= a.extra, d -= a.extra, a.back += a.extra;
            }
            if (a.offset > a.dmax) {
              t.msg = "invalid distance too far back", a.mode = Be;
              break;
            }
            a.mode = 16204;
          case 16204:
            if (0 === l) break t;
            if (u = f - l, a.offset > u) {
              if ((u = a.offset - u) > a.whave && a.sane) {
                t.msg = "invalid distance too far back", a.mode = Be;
                break;
              }
              u > a.wnext ? (u -= a.wnext, c = a.wsize - u) : c = a.wnext - u, u > a.length && (u = a.length), w = a.window;
            } else w = i, c = s - a.offset, u = a.length;
            u > l && (u = l), l -= u, a.length -= u;
            do {
              i[s++] = w[c++];
            } while (--u);
            0 === a.length && (a.mode = Le);
            break;
          case 16205:
            if (0 === l) break t;
            i[s++] = a.length, l--, a.mode = Le;
            break;
          case Ne:
            if (a.wrap) {
              for (; d < 32;) {
                if (0 === o) break t;
                o--, h |= n[r++] << d, d += 8;
              }
              if (f -= l, t.total_out += f, a.total += f, 4 & a.wrap && f && (t.adler = a.check = a.flags ? H(a.check, i, f, s - f) : C(a.check, i, f, s - f)), f = l, 4 & a.wrap && (a.flags ? h : Ce(h)) !== a.check) {
                t.msg = "incorrect data check", a.mode = Be;
                break;
              }
              h = 0, d = 0;
            }
            a.mode = 16207;
          case 16207:
            if (a.wrap && a.flags) {
              for (; d < 32;) {
                if (0 === o) break t;
                o--, h += n[r++] << d, d += 8;
              }
              if (4 & a.wrap && h !== (4294967295 & a.total)) {
                t.msg = "incorrect length check", a.mode = Be;
                break;
              }
              h = 0, d = 0;
            }
            a.mode = 16208;
          case 16208:
            x = xe;
            break t;
          case Be:
            x = Ee;
            break t;
          case 16210:
            return Re;
          default:
            return Ae;
        }
        return t.next_out = s, t.avail_out = l, t.next_in = r, t.avail_in = o, a.hold = h, a.bits = d, (a.wsize || f !== t.avail_out && a.mode < Be && (a.mode < Ne || e !== pe)) && Je(t, t.output, t.next_out, f - t.avail_out), _ -= t.avail_in, f -= t.avail_out, t.total_in += _, t.total_out += f, a.total += f, 4 & a.wrap && f && (t.adler = a.check = a.flags ? H(a.check, i, f, t.next_out - f) : C(a.check, i, f, t.next_out - f)), t.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === Te ? 128 : 0) + (a.mode === Fe || a.mode === Ie ? 256 : 0), (0 === _ && 0 === f || e === pe) && x === ye && (x = Ze), x;
      },
      inflateEnd: function (t) {
        if (Ke(t)) return Ae;
        var e = t.state;
        return e.window && (e.window = null), t.state = null, ye;
      },
      inflateGetHeader: function (t, e) {
        if (Ke(t)) return Ae;
        var a = t.state;
        return 0 == (2 & a.wrap) ? Ae : (a.head = e, e.done = !1, ye);
      },
      inflateSetDictionary: function (t, e) {
        var a,
          n = e.length;
        return Ke(t) || 0 !== (a = t.state).wrap && a.mode !== De ? Ae : a.mode === De && C(1, e, n, 0) !== a.check ? Ee : Je(t, e, n, n) ? (a.mode = 16210, Re) : (a.havedict = 1, ye);
      },
      inflateInfo: "pako inflate (from Nodeca project)"
    };
  var Ve = function () {
      this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
    },
    $e = Object.prototype.toString,
    ta = K.Z_NO_FLUSH,
    ea = K.Z_FINISH,
    aa = K.Z_OK,
    na = K.Z_STREAM_END,
    ia = K.Z_NEED_DICT,
    ra = K.Z_STREAM_ERROR,
    sa = K.Z_DATA_ERROR,
    oa = K.Z_MEM_ERROR;
  function la(t) {
    this.options = Kt({
      chunkSize: 65536,
      windowBits: 15,
      to: ""
    }, t || {});
    var e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Qt(), this.strm.avail_out = 0;
    var a = Qe.inflateInit2(this.strm, e.windowBits);
    if (a !== aa) throw new Error(j[a]);
    if (this.header = new Ve(), Qe.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = Wt(e.dictionary) : "[object ArrayBuffer]" === $e.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (a = Qe.inflateSetDictionary(this.strm, e.dictionary)) !== aa)) throw new Error(j[a]);
  }
  function ha(t, e) {
    var a = new la(e);
    if (a.push(t), a.err) throw a.msg || j[a.err];
    return a.result;
  }
  la.prototype.push = function (t, e) {
    var a,
      n,
      i,
      r = this.strm,
      s = this.options.chunkSize,
      o = this.options.dictionary;
    if (this.ended) return !1;
    for (n = e === ~~e ? e : !0 === e ? ea : ta, "[object ArrayBuffer]" === $e.call(t) ? r.input = new Uint8Array(t) : r.input = t, r.next_in = 0, r.avail_in = r.input.length;;) {
      for (0 === r.avail_out && (r.output = new Uint8Array(s), r.next_out = 0, r.avail_out = s), (a = Qe.inflate(r, n)) === ia && o && ((a = Qe.inflateSetDictionary(r, o)) === aa ? a = Qe.inflate(r, n) : a === sa && (a = ia)); r.avail_in > 0 && a === na && r.state.wrap > 0 && 0 !== t[r.next_in];) Qe.inflateReset(r), a = Qe.inflate(r, n);
      switch (a) {
        case ra:
        case sa:
        case ia:
        case oa:
          return this.onEnd(a), this.ended = !0, !1;
      }
      if (i = r.avail_out, r.next_out && (0 === r.avail_out || a === na)) if ("string" === this.options.to) {
        var l = Jt(r.output, r.next_out),
          h = r.next_out - l,
          d = qt(r.output, l);
        r.next_out = h, r.avail_out = s - h, h && r.output.set(r.output.subarray(l, l + h), 0), this.onData(d);
      } else this.onData(r.output.length === r.next_out ? r.output : r.output.subarray(0, r.next_out));
      if (a !== aa || 0 !== i) {
        if (a === na) return a = Qe.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, !0;
        if (0 === r.avail_in) break;
      }
    }
    return !0;
  }, la.prototype.onData = function (t) {
    this.chunks.push(t);
  }, la.prototype.onEnd = function (t) {
    t === aa && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Pt(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
  };
  var da = {
      Inflate: la,
      inflate: ha,
      inflateRaw: function (t, e) {
        return (e = e || {}).raw = !0, ha(t, e);
      },
      ungzip: ha,
      constants: K
    },
    _a = de.Deflate,
    fa = de.deflate,
    ua = de.deflateRaw,
    ca = de.gzip,
    wa = da.Inflate,
    ma = da.inflate,
    ba = da.inflateRaw,
    ga = da.ungzip,
    pa = K,
    va = {
      Deflate: _a,
      deflate: fa,
      deflateRaw: ua,
      gzip: ca,
      Inflate: wa,
      inflate: ma,
      inflateRaw: ba,
      ungzip: ga,
      constants: pa
    };
  t.Deflate = _a, t.Inflate = wa, t.constants = pa, t.default = va, t.deflate = fa, t.deflateRaw = ua, t.gzip = ca, t.inflate = ma, t.inflateRaw = ba, t.ungzip = ga, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ 47878:
/*!***********************************************!*\
  !*** ./node_modules/pizzip/js/arrayReader.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DataReader = __webpack_require__(/*! ./dataReader.js */ 54405);
function ArrayReader(data) {
  if (data) {
    this.data = data;
    this.length = this.data.length;
    this.index = 0;
    this.zero = 0;
    for (var i = 0; i < this.data.length; i++) {
      data[i] &= data[i];
    }
  }
}
ArrayReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */
ArrayReader.prototype.byteAt = function (i) {
  return this.data[this.zero + i];
};
/**
 * @see DataReader.lastIndexOfSignature
 */
ArrayReader.prototype.lastIndexOfSignature = function (sig) {
  var sig0 = sig.charCodeAt(0),
    sig1 = sig.charCodeAt(1),
    sig2 = sig.charCodeAt(2),
    sig3 = sig.charCodeAt(3);
  for (var i = this.length - 4; i >= 0; --i) {
    if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
      return i - this.zero;
    }
  }
  return -1;
};
/**
 * @see DataReader.readData
 */
ArrayReader.prototype.readData = function (size) {
  this.checkOffset(size);
  if (size === 0) {
    return [];
  }
  var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
  this.index += size;
  return result;
};
module.exports = ArrayReader;

/***/ }),

/***/ 27457:
/*!******************************************!*\
  !*** ./node_modules/pizzip/js/base64.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// private property
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

// public method for encoding
exports.encode = function (input) {
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;
  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = (chr1 & 3) << 4 | chr2 >> 4;
    enc3 = (chr2 & 15) << 2 | chr3 >> 6;
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
  }
  return output;
};

// public method for decoding
exports.decode = function (input) {
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i < input.length) {
    enc1 = _keyStr.indexOf(input.charAt(i++));
    enc2 = _keyStr.indexOf(input.charAt(i++));
    enc3 = _keyStr.indexOf(input.charAt(i++));
    enc4 = _keyStr.indexOf(input.charAt(i++));
    chr1 = enc1 << 2 | enc2 >> 4;
    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
    chr3 = (enc3 & 3) << 6 | enc4;
    output += String.fromCharCode(chr1);
    if (enc3 !== 64) {
      output += String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output += String.fromCharCode(chr3);
    }
  }
  return output;
};

/***/ }),

/***/ 14479:
/*!****************************************************!*\
  !*** ./node_modules/pizzip/js/compressedObject.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


function CompressedObject() {
  this.compressedSize = 0;
  this.uncompressedSize = 0;
  this.crc32 = 0;
  this.compressionMethod = null;
  this.compressedContent = null;
}
CompressedObject.prototype = {
  /**
   * Return the decompressed content in an unspecified format.
   * The format will depend on the decompressor.
   * @return {Object} the decompressed content.
   */
  getContent: function getContent() {
    return null; // see implementation
  },

  /**
   * Return the compressed content in an unspecified format.
   * The format will depend on the compressed conten source.
   * @return {Object} the compressed content.
   */
  getCompressedContent: function getCompressedContent() {
    return null; // see implementation
  }
};

module.exports = CompressedObject;

/***/ }),

/***/ 43337:
/*!************************************************!*\
  !*** ./node_modules/pizzip/js/compressions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.STORE = {
  magic: "\x00\x00",
  compress: function compress(content) {
    return content; // no compression
  },

  uncompress: function uncompress(content) {
    return content; // no compression
  },

  compressInputType: null,
  uncompressInputType: null
};
exports.DEFLATE = __webpack_require__(/*! ./flate.js */ 39954);

/***/ }),

/***/ 24927:
/*!*****************************************!*\
  !*** ./node_modules/pizzip/js/crc32.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils.js */ 39629);

// prettier-ignore
var table = [0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D];

/**
 *
 *  Javascript crc32
 *  http://www.webtoolkit.info/
 *
 */
module.exports = function crc32(input, crc) {
  if (typeof input === "undefined" || !input.length) {
    return 0;
  }
  var isArray = utils.getTypeOf(input) !== "string";
  if (typeof crc == "undefined") {
    crc = 0;
  }
  var x = 0;
  var y = 0;
  var b = 0;
  crc ^= -1;
  for (var i = 0, iTop = input.length; i < iTop; i++) {
    b = isArray ? input[i] : input.charCodeAt(i);
    y = (crc ^ b) & 0xff;
    x = table[y];
    crc = crc >>> 8 ^ x;
  }
  return crc ^ -1;
};

/***/ }),

/***/ 54405:
/*!**********************************************!*\
  !*** ./node_modules/pizzip/js/dataReader.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils.js */ 39629);
function DataReader() {
  this.data = null; // type : see implementation
  this.length = 0;
  this.index = 0;
  this.zero = 0;
}
DataReader.prototype = {
  /**
   * Check that the offset will not go too far.
   * @param {string} offset the additional offset to check.
   * @throws {Error} an Error if the offset is out of bounds.
   */
  checkOffset: function checkOffset(offset) {
    this.checkIndex(this.index + offset);
  },
  /**
   * Check that the specifed index will not be too far.
   * @param {string} newIndex the index to check.
   * @throws {Error} an Error if the index is out of bounds.
   */
  checkIndex: function checkIndex(newIndex) {
    if (this.length < this.zero + newIndex || newIndex < 0) {
      throw new Error("End of data reached (data length = " + this.length + ", asked index = " + newIndex + "). Corrupted zip ?");
    }
  },
  /**
   * Change the index.
   * @param {number} newIndex The new index.
   * @throws {Error} if the new index is out of the data.
   */
  setIndex: function setIndex(newIndex) {
    this.checkIndex(newIndex);
    this.index = newIndex;
  },
  /**
   * Skip the next n bytes.
   * @param {number} n the number of bytes to skip.
   * @throws {Error} if the new index is out of the data.
   */
  skip: function skip(n) {
    this.setIndex(this.index + n);
  },
  /**
   * Get the byte at the specified index.
   * @param {number} i the index to use.
   * @return {number} a byte.
   */
  byteAt: function byteAt() {
    // see implementations
  },
  /**
   * Get the next number with a given byte size.
   * @param {number} size the number of bytes to read.
   * @return {number} the corresponding number.
   */
  readInt: function readInt(size) {
    var result = 0,
      i;
    this.checkOffset(size);
    for (i = this.index + size - 1; i >= this.index; i--) {
      result = (result << 8) + this.byteAt(i);
    }
    this.index += size;
    return result;
  },
  /**
   * Get the next string with a given byte size.
   * @param {number} size the number of bytes to read.
   * @return {string} the corresponding string.
   */
  readString: function readString(size) {
    return utils.transformTo("string", this.readData(size));
  },
  /**
   * Get raw data without conversion, <size> bytes.
   * @param {number} size the number of bytes to read.
   * @return {Object} the raw data, implementation specific.
   */
  readData: function readData() {
    // see implementations
  },
  /**
   * Find the last occurence of a zip signature (4 bytes).
   * @param {string} sig the signature to find.
   * @return {number} the index of the last occurence, -1 if not found.
   */
  lastIndexOfSignature: function lastIndexOfSignature() {
    // see implementations
  },
  /**
   * Get the next date.
   * @return {Date} the date.
   */
  readDate: function readDate() {
    var dostime = this.readInt(4);
    return new Date((dostime >> 25 & 0x7f) + 1980,
    // year
    (dostime >> 21 & 0x0f) - 1,
    // month
    dostime >> 16 & 0x1f,
    // day
    dostime >> 11 & 0x1f,
    // hour
    dostime >> 5 & 0x3f,
    // minute
    (dostime & 0x1f) << 1); // second
  }
};

module.exports = DataReader;

/***/ }),

/***/ 26024:
/*!********************************************!*\
  !*** ./node_modules/pizzip/js/defaults.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.base64 = false;
exports.binary = false;
exports.dir = false;
exports.createFolders = false;
exports.date = null;
exports.compression = null;
exports.compressionOptions = null;
exports.comment = null;
exports.unixPermissions = null;
exports.dosPermissions = null;

/***/ }),

/***/ 56621:
/*!*********************************************************!*\
  !*** ./node_modules/pizzip/js/deprecatedPublicUtils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils.js */ 39629);

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2binary = function (str) {
  return utils.string2binary(str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2Uint8Array = function (str) {
  return utils.transformTo("uint8array", str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.uint8Array2String = function (array) {
  return utils.transformTo("string", array);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2Blob = function (str) {
  var buffer = utils.transformTo("arraybuffer", str);
  return utils.arrayBuffer2Blob(buffer);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.arrayBuffer2Blob = function (buffer) {
  return utils.arrayBuffer2Blob(buffer);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.transformTo = function (outputType, input) {
  return utils.transformTo(outputType, input);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.getTypeOf = function (input) {
  return utils.getTypeOf(input);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.checkSupport = function (type) {
  return utils.checkSupport(type);
};

/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */
exports.MAX_VALUE_16BITS = utils.MAX_VALUE_16BITS;

/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */
exports.MAX_VALUE_32BITS = utils.MAX_VALUE_32BITS;

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.pretty = function (str) {
  return utils.pretty(str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.findCompression = function (compressionMethod) {
  return utils.findCompression(compressionMethod);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.isRegExp = function (object) {
  return utils.isRegExp(object);
};

/***/ }),

/***/ 39954:
/*!*****************************************!*\
  !*** ./node_modules/pizzip/js/flate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var USE_TYPEDARRAY = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";
var pako = __webpack_require__(/*! pako/dist/pako.es5.min.js */ 32818);
exports.uncompressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
exports.compressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
exports.magic = "\x08\x00";
exports.compress = function (input, compressionOptions) {
  return pako.deflateRaw(input, {
    level: compressionOptions.level || -1 // default compression
  });
};

exports.uncompress = function (input) {
  return pako.inflateRaw(input);
};

/***/ }),

/***/ 85124:
/*!*****************************************!*\
  !*** ./node_modules/pizzip/js/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var base64 = __webpack_require__(/*! ./base64.js */ 27457);

/**
Usage:
   zip = new PizZip();
   zip.file("hello.txt", "Hello, World!").file("tempfile", "nothing");
   zip.folder("images").file("smile.gif", base64Data, {base64: true});
   zip.file("Xmas.txt", "Ho ho ho !", {date : new Date("December 25, 2007 00:00:01")});
   zip.remove("tempfile");

   base64zip = zip.generate();

**/

/**
 * Representation a of zip file in js
 * @constructor
 * @param {String=|ArrayBuffer=|Uint8Array=} data the data to load, if any (optional).
 * @param {Object=} options the options for creating this objects (optional).
 */
function PizZip(data, options) {
  // if this constructor is used without `new`, it adds `new` before itself:
  if (!(this instanceof PizZip)) {
    return new PizZip(data, options);
  }

  // object containing the files :
  // {
  //   "folder/" : {...},
  //   "folder/data.txt" : {...}
  // }
  this.files = {};
  this.comment = null;

  // Where we are in the hierarchy
  this.root = "";
  if (data) {
    this.load(data, options);
  }
  this.clone = function () {
    var _this = this;
    var newObj = new PizZip();
    Object.keys(this.files).forEach(function (file) {
      newObj.file(file, _this.files[file].asUint8Array());
    });
    return newObj;
  };
  this.shallowClone = function () {
    var newObj = new PizZip();
    for (var i in this) {
      if (typeof this[i] !== "function") {
        newObj[i] = this[i];
      }
    }
    return newObj;
  };
}
PizZip.prototype = __webpack_require__(/*! ./object.js */ 62849);
PizZip.prototype.load = __webpack_require__(/*! ./load.js */ 92262);
PizZip.support = __webpack_require__(/*! ./support.js */ 34107);
PizZip.defaults = __webpack_require__(/*! ./defaults.js */ 26024);

/**
 * @deprecated
 * This namespace will be removed in a future version without replacement.
 */
PizZip.utils = __webpack_require__(/*! ./deprecatedPublicUtils.js */ 56621);
PizZip.base64 = {
  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  encode: function encode(input) {
    return base64.encode(input);
  },
  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  decode: function decode(input) {
    return base64.decode(input);
  }
};
PizZip.compressions = __webpack_require__(/*! ./compressions.js */ 43337);
module.exports = PizZip;
module.exports["default"] = PizZip;

/***/ }),

/***/ 92262:
/*!****************************************!*\
  !*** ./node_modules/pizzip/js/load.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var base64 = __webpack_require__(/*! ./base64.js */ 27457);
var utf8 = __webpack_require__(/*! ./utf8.js */ 28521);
var utils = __webpack_require__(/*! ./utils.js */ 39629);
var ZipEntries = __webpack_require__(/*! ./zipEntries.js */ 76100);
module.exports = function (data, options) {
  var i, input;
  options = utils.extend(options || {}, {
    base64: false,
    checkCRC32: false,
    optimizedBinaryString: false,
    createFolders: false,
    decodeFileName: utf8.utf8decode
  });
  if (options.base64) {
    data = base64.decode(data);
  }
  var zipEntries = new ZipEntries(data, options);
  var files = zipEntries.files;
  for (i = 0; i < files.length; i++) {
    input = files[i];
    this.file(input.fileNameStr, input.decompressed, {
      binary: true,
      optimizedBinaryString: true,
      date: input.date,
      dir: input.dir,
      comment: input.fileCommentStr.length ? input.fileCommentStr : null,
      unixPermissions: input.unixPermissions,
      dosPermissions: input.dosPermissions,
      createFolders: options.createFolders
    });
  }
  if (zipEntries.zipComment.length) {
    this.comment = zipEntries.zipComment;
  }
  return this;
};

/***/ }),

/***/ 62684:
/*!**********************************************!*\
  !*** ./node_modules/pizzip/js/nodeBuffer.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = function (data, encoding) {
  if (typeof data === "number") {
    return Buffer.alloc(data);
  }
  return Buffer.from(data, encoding);
};
module.exports.test = function (b) {
  return Buffer.isBuffer(b);
};

/***/ }),

/***/ 5975:
/*!****************************************************!*\
  !*** ./node_modules/pizzip/js/nodeBufferReader.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Uint8ArrayReader = __webpack_require__(/*! ./uint8ArrayReader.js */ 10028);
function NodeBufferReader(data) {
  this.data = data;
  this.length = this.data.length;
  this.index = 0;
  this.zero = 0;
}
NodeBufferReader.prototype = new Uint8ArrayReader();

/**
 * @see DataReader.readData
 */
NodeBufferReader.prototype.readData = function (size) {
  this.checkOffset(size);
  var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
  this.index += size;
  return result;
};
module.exports = NodeBufferReader;

/***/ }),

/***/ 62849:
/*!******************************************!*\
  !*** ./node_modules/pizzip/js/object.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var support = __webpack_require__(/*! ./support.js */ 34107);
var utils = __webpack_require__(/*! ./utils.js */ 39629);
var _crc = __webpack_require__(/*! ./crc32.js */ 24927);
var signature = __webpack_require__(/*! ./signature.js */ 85090);
var defaults = __webpack_require__(/*! ./defaults.js */ 26024);
var base64 = __webpack_require__(/*! ./base64.js */ 27457);
var compressions = __webpack_require__(/*! ./compressions.js */ 43337);
var CompressedObject = __webpack_require__(/*! ./compressedObject.js */ 14479);
var nodeBuffer = __webpack_require__(/*! ./nodeBuffer.js */ 62684);
var utf8 = __webpack_require__(/*! ./utf8.js */ 28521);
var StringWriter = __webpack_require__(/*! ./stringWriter.js */ 49504);
var Uint8ArrayWriter = __webpack_require__(/*! ./uint8ArrayWriter.js */ 67848);

/**
 * Returns the raw data of a ZipObject, decompress the content if necessary.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */
function getRawData(file) {
  if (file._data instanceof CompressedObject) {
    file._data = file._data.getContent();
    file.options.binary = true;
    file.options.base64 = false;
    if (utils.getTypeOf(file._data) === "uint8array") {
      var copy = file._data;
      // when reading an arraybuffer, the CompressedObject mechanism will keep it and subarray() a Uint8Array.
      // if we request a file in the same format, we might get the same Uint8Array or its ArrayBuffer (the original zip file).
      file._data = new Uint8Array(copy.length);
      // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
      if (copy.length !== 0) {
        file._data.set(copy, 0);
      }
    }
  }
  return file._data;
}

/**
 * Returns the data of a ZipObject in a binary form. If the content is an unicode string, encode it.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */
function getBinaryData(file) {
  var result = getRawData(file),
    type = utils.getTypeOf(result);
  if (type === "string") {
    if (!file.options.binary) {
      // unicode text !
      // unicode string => binary string is a painful process, check if we can avoid it.
      if (support.nodebuffer) {
        return nodeBuffer(result, "utf-8");
      }
    }
    return file.asBinary();
  }
  return result;
}

// return the actual prototype of PizZip
var out = {
  /**
   * Read an existing zip and merge the data in the current PizZip object.
   * The implementation is in pizzip-load.js, don't forget to include it.
   * @param {String|ArrayBuffer|Uint8Array|Buffer} stream  The stream to load
   * @param {Object} options Options for loading the stream.
   *  options.base64 : is the stream in base64 ? default : false
   * @return {PizZip} the current PizZip object
   */
  load: function load() {
    throw new Error("Load method is not defined. Is the file pizzip-load.js included ?");
  },
  /**
   * Filter nested files/folders with the specified function.
   * @param {Function} search the predicate to use :
   * function (relativePath, file) {...}
   * It takes 2 arguments : the relative path and the file.
   * @return {Array} An array of matching elements.
   */
  filter: function filter(search) {
    var result = [];
    var filename, relativePath, file, fileClone;
    for (filename in this.files) {
      if (!this.files.hasOwnProperty(filename)) {
        continue;
      }
      file = this.files[filename];
      // return a new object, don't let the user mess with our internal objects :)
      fileClone = new ZipObject(file.name, file._data, utils.extend(file.options));
      relativePath = filename.slice(this.root.length, filename.length);
      if (filename.slice(0, this.root.length) === this.root &&
      // the file is in the current root
      search(relativePath, fileClone)) {
        // and the file matches the function
        result.push(fileClone);
      }
    }
    return result;
  },
  /**
   * Add a file to the zip file, or search a file.
   * @param   {string|RegExp} name The name of the file to add (if data is defined),
   * the name of the file to find (if no data) or a regex to match files.
   * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
   * @param   {Object} o     File options
   * @return  {PizZip|Object|Array} this PizZip object (when adding a file),
   * a file (when searching by string) or an array of files (when searching by regex).
   */
  file: function file(name, data, o) {
    if (arguments.length === 1) {
      if (utils.isRegExp(name)) {
        var regexp = name;
        return this.filter(function (relativePath, file) {
          return !file.dir && regexp.test(relativePath);
        });
      }
      // text
      return this.filter(function (relativePath, file) {
        return !file.dir && relativePath === name;
      })[0] || null;
    }
    // more than one argument : we have data !
    name = this.root + name;
    fileAdd.call(this, name, data, o);
    return this;
  },
  /**
   * Add a directory to the zip file, or search.
   * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
   * @return  {PizZip} an object with the new directory as the root, or an array containing matching folders.
   */
  folder: function folder(arg) {
    if (!arg) {
      return this;
    }
    if (utils.isRegExp(arg)) {
      return this.filter(function (relativePath, file) {
        return file.dir && arg.test(relativePath);
      });
    }

    // else, name is a new folder
    var name = this.root + arg;
    var newFolder = folderAdd.call(this, name);

    // Allow chaining by returning a new object with this folder as the root
    var ret = this.shallowClone();
    ret.root = newFolder.name;
    return ret;
  },
  /**
   * Delete a file, or a directory and all sub-files, from the zip
   * @param {string} name the name of the file to delete
   * @return {PizZip} this PizZip object
   */
  remove: function remove(name) {
    name = this.root + name;
    var file = this.files[name];
    if (!file) {
      // Look for any folders
      if (name.slice(-1) !== "/") {
        name += "/";
      }
      file = this.files[name];
    }
    if (file && !file.dir) {
      // file
      delete this.files[name];
    } else {
      // maybe a folder, delete recursively
      var kids = this.filter(function (relativePath, file) {
        return file.name.slice(0, name.length) === name;
      });
      for (var i = 0; i < kids.length; i++) {
        delete this.files[kids[i].name];
      }
    }
    return this;
  },
  /**
   * Generate the complete zip file
   * @param {Object} options the options to generate the zip file :
   * - base64, (deprecated, use type instead) true to generate base64.
   * - compression, "STORE" by default.
   * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
   * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
   */
  generate: function generate(options) {
    options = utils.extend(options || {}, {
      base64: true,
      compression: "STORE",
      compressionOptions: null,
      type: "base64",
      platform: "DOS",
      comment: null,
      mimeType: "application/zip",
      encodeFileName: utf8.utf8encode
    });
    utils.checkSupport(options.type);

    // accept nodejs `process.platform`
    if (options.platform === "darwin" || options.platform === "freebsd" || options.platform === "linux" || options.platform === "sunos") {
      options.platform = "UNIX";
    }
    if (options.platform === "win32") {
      options.platform = "DOS";
    }
    var zipData = [],
      encodedComment = utils.transformTo("string", options.encodeFileName(options.comment || this.comment || ""));
    var localDirLength = 0,
      centralDirLength = 0,
      writer,
      i;
    var fileNames = [];
    if (options.fileOrder instanceof Array) {
      fileNames = options.fileOrder;
    }
    for (var name in this.files) {
      if (fileNames.indexOf(name) === -1) {
        fileNames.push(name);
      }
    }
    if (typeof options.fileOrder === "function") {
      fileNames = options.fileOrder(this.files);
    }

    // first, generate all the zip parts.
    var _iterator = _createForOfIteratorHelper(fileNames),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _name = _step.value;
        if (!this.files.hasOwnProperty(_name)) {
          continue;
        }
        var file = this.files[_name];
        var compressionName = file.options.compression || options.compression.toUpperCase();
        var compression = compressions[compressionName];
        if (!compression) {
          throw new Error(compressionName + " is not a valid compression method !");
        }
        var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
        var compressedObject = generateCompressedObjectFrom.call(this, file, compression, compressionOptions);
        var zipPart = generateZipParts.call(this, _name, file, compressedObject, localDirLength, options.platform, options.encodeFileName);
        localDirLength += zipPart.fileRecord.length + compressedObject.compressedSize;
        centralDirLength += zipPart.dirRecord.length;
        zipData.push(zipPart);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var dirEnd = "";

    // end of central dir signature
    dirEnd = signature.CENTRAL_DIRECTORY_END +
    // number of this disk
    "\x00\x00" +
    // number of the disk with the start of the central directory
    "\x00\x00" +
    // total number of entries in the central directory on this disk
    decToHex(zipData.length, 2) +
    // total number of entries in the central directory
    decToHex(zipData.length, 2) +
    // size of the central directory   4 bytes
    decToHex(centralDirLength, 4) +
    // offset of start of central directory with respect to the starting disk number
    decToHex(localDirLength, 4) +
    // .ZIP file comment length
    decToHex(encodedComment.length, 2) +
    // .ZIP file comment
    encodedComment;

    // we have all the parts (and the total length)
    // time to create a writer !
    var typeName = options.type.toLowerCase();
    if (typeName === "uint8array" || typeName === "arraybuffer" || typeName === "blob" || typeName === "nodebuffer") {
      writer = new Uint8ArrayWriter(localDirLength + centralDirLength + dirEnd.length);
    } else {
      writer = new StringWriter(localDirLength + centralDirLength + dirEnd.length);
    }
    for (i = 0; i < zipData.length; i++) {
      writer.append(zipData[i].fileRecord);
      writer.append(zipData[i].compressedObject.compressedContent);
    }
    for (i = 0; i < zipData.length; i++) {
      writer.append(zipData[i].dirRecord);
    }
    writer.append(dirEnd);
    var zip = writer.finalize();
    switch (options.type.toLowerCase()) {
      // case "zip is an Uint8Array"
      case "uint8array":
      case "arraybuffer":
      case "nodebuffer":
        return utils.transformTo(options.type.toLowerCase(), zip);
      case "blob":
        return utils.arrayBuffer2Blob(utils.transformTo("arraybuffer", zip), options.mimeType);
      // case "zip is a string"
      case "base64":
        return options.base64 ? base64.encode(zip) : zip;
      default:
        // case "string" :
        return zip;
    }
  },
  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  crc32: function crc32(input, crc) {
    return _crc(input, crc);
  },
  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  utf8encode: function utf8encode(string) {
    return utils.transformTo("string", utf8.utf8encode(string));
  },
  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  utf8decode: function utf8decode(input) {
    return utf8.utf8decode(input);
  }
};
/**
 * Transform this._data into a string.
 * @param {function} filter a function String -> String, applied if not null on the result.
 * @return {String} the string representing this._data.
 */
function dataToString(asUTF8) {
  var result = getRawData(this);
  if (result === null || typeof result === "undefined") {
    return "";
  }
  // if the data is a base64 string, we decode it before checking the encoding !
  if (this.options.base64) {
    result = base64.decode(result);
  }
  if (asUTF8 && this.options.binary) {
    // PizZip.prototype.utf8decode supports arrays as input
    // skip to array => string step, utf8decode will do it.
    result = out.utf8decode(result);
  } else {
    // no utf8 transformation, do the array => string step.
    result = utils.transformTo("string", result);
  }
  if (!asUTF8 && !this.options.binary) {
    result = utils.transformTo("string", out.utf8encode(result));
  }
  return result;
}
/**
 * A simple object representing a file in the zip file.
 * @constructor
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
 * @param {Object} options the options of the file
 */
function ZipObject(name, data, options) {
  this.name = name;
  this.dir = options.dir;
  this.date = options.date;
  this.comment = options.comment;
  this.unixPermissions = options.unixPermissions;
  this.dosPermissions = options.dosPermissions;
  this._data = data;
  this.options = options;

  /*
   * This object contains initial values for dir and date.
   * With them, we can check if the user changed the deprecated metadata in
   * `ZipObject#options` or not.
   */
  this._initialMetadata = {
    dir: options.dir,
    date: options.date
  };
}
ZipObject.prototype = {
  /**
   * Return the content as UTF8 string.
   * @return {string} the UTF8 string.
   */
  asText: function asText() {
    return dataToString.call(this, true);
  },
  /**
   * Returns the binary content.
   * @return {string} the content as binary.
   */
  asBinary: function asBinary() {
    return dataToString.call(this, false);
  },
  /**
   * Returns the content as a nodejs Buffer.
   * @return {Buffer} the content as a Buffer.
   */
  asNodeBuffer: function asNodeBuffer() {
    var result = getBinaryData(this);
    return utils.transformTo("nodebuffer", result);
  },
  /**
   * Returns the content as an Uint8Array.
   * @return {Uint8Array} the content as an Uint8Array.
   */
  asUint8Array: function asUint8Array() {
    var result = getBinaryData(this);
    return utils.transformTo("uint8array", result);
  },
  /**
   * Returns the content as an ArrayBuffer.
   * @return {ArrayBuffer} the content as an ArrayBufer.
   */
  asArrayBuffer: function asArrayBuffer() {
    return this.asUint8Array().buffer;
  }
};

/**
 * Transform an integer into a string in hexadecimal.
 * @private
 * @param {number} dec the number to convert.
 * @param {number} bytes the number of bytes to generate.
 * @returns {string} the result.
 */
function decToHex(dec, bytes) {
  var hex = "",
    i;
  for (i = 0; i < bytes; i++) {
    hex += String.fromCharCode(dec & 0xff);
    dec >>>= 8;
  }
  return hex;
}

/**
 * Transforms the (incomplete) options from the user into the complete
 * set of options to create a file.
 * @private
 * @param {Object} o the options from the user.
 * @return {Object} the complete set of options.
 */
function prepareFileAttrs(o) {
  o = o || {};
  if (o.base64 === true && (o.binary === null || o.binary === undefined)) {
    o.binary = true;
  }
  o = utils.extend(o, defaults);
  o.date = o.date || new Date();
  if (o.compression !== null) {
    o.compression = o.compression.toUpperCase();
  }
  return o;
}

/**
 * Add a file in the current folder.
 * @private
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
 * @param {Object} o the options of the file
 * @return {Object} the new file.
 */
function fileAdd(name, data, o) {
  // be sure sub folders exist
  var dataType = utils.getTypeOf(data),
    parent;
  o = prepareFileAttrs(o);
  if (typeof o.unixPermissions === "string") {
    o.unixPermissions = parseInt(o.unixPermissions, 8);
  }

  // UNX_IFDIR  0040000 see zipinfo.c
  if (o.unixPermissions && o.unixPermissions & 0x4000) {
    o.dir = true;
  }
  // Bit 4    Directory
  if (o.dosPermissions && o.dosPermissions & 0x0010) {
    o.dir = true;
  }
  if (o.dir) {
    name = forceTrailingSlash(name);
  }
  if (o.createFolders && (parent = parentFolder(name))) {
    folderAdd.call(this, parent, true);
  }
  if (o.dir || data === null || typeof data === "undefined") {
    o.base64 = false;
    o.binary = false;
    data = null;
    dataType = null;
  } else if (dataType === "string") {
    if (o.binary && !o.base64) {
      // optimizedBinaryString == true means that the file has already been filtered with a 0xFF mask
      if (o.optimizedBinaryString !== true) {
        // this is a string, not in a base64 format.
        // Be sure that this is a correct "binary string"
        data = utils.string2binary(data);
      }
    }
  } else {
    // arraybuffer, uint8array, ...
    o.base64 = false;
    o.binary = true;
    if (!dataType && !(data instanceof CompressedObject)) {
      throw new Error("The data of '" + name + "' is in an unsupported format !");
    }

    // special case : it's way easier to work with Uint8Array than with ArrayBuffer
    if (dataType === "arraybuffer") {
      data = utils.transformTo("uint8array", data);
    }
  }
  var object = new ZipObject(name, data, o);
  this.files[name] = object;
  return object;
}

/**
 * Find the parent folder of the path.
 * @private
 * @param {string} path the path to use
 * @return {string} the parent folder, or ""
 */
function parentFolder(path) {
  if (path.slice(-1) === "/") {
    path = path.substring(0, path.length - 1);
  }
  var lastSlash = path.lastIndexOf("/");
  return lastSlash > 0 ? path.substring(0, lastSlash) : "";
}

/**
 * Returns the path with a slash at the end.
 * @private
 * @param {String} path the path to check.
 * @return {String} the path with a trailing slash.
 */
function forceTrailingSlash(path) {
  // Check the name ends with a /
  if (path.slice(-1) !== "/") {
    path += "/"; // IE doesn't like substr(-1)
  }

  return path;
}
/**
 * Add a (sub) folder in the current folder.
 * @private
 * @param {string} name the folder's name
 * @param {boolean=} [createFolders] If true, automatically create sub
 *  folders. Defaults to false.
 * @return {Object} the new folder.
 */
function folderAdd(name, createFolders) {
  createFolders = typeof createFolders !== "undefined" ? createFolders : false;
  name = forceTrailingSlash(name);

  // Does this folder already exist?
  if (!this.files[name]) {
    fileAdd.call(this, name, null, {
      dir: true,
      createFolders: createFolders
    });
  }
  return this.files[name];
}

/**
 * Generate a PizZip.CompressedObject for a given zipOject.
 * @param {ZipObject} file the object to read.
 * @param {PizZip.compression} compression the compression to use.
 * @param {Object} compressionOptions the options to use when compressing.
 * @return {PizZip.CompressedObject} the compressed result.
 */
function generateCompressedObjectFrom(file, compression, compressionOptions) {
  var result = new CompressedObject();
  var content;

  // the data has not been decompressed, we might reuse things !
  if (file._data instanceof CompressedObject) {
    result.uncompressedSize = file._data.uncompressedSize;
    result.crc32 = file._data.crc32;
    if (result.uncompressedSize === 0 || file.dir) {
      compression = compressions.STORE;
      result.compressedContent = "";
      result.crc32 = 0;
    } else if (file._data.compressionMethod === compression.magic) {
      result.compressedContent = file._data.getCompressedContent();
    } else {
      content = file._data.getContent();
      // need to decompress / recompress
      result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
    }
  } else {
    // have uncompressed data
    content = getBinaryData(file);
    if (!content || content.length === 0 || file.dir) {
      compression = compressions.STORE;
      content = "";
    }
    result.uncompressedSize = content.length;
    result.crc32 = _crc(content);
    result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
  }
  result.compressedSize = result.compressedContent.length;
  result.compressionMethod = compression.magic;
  return result;
}

/**
 * Generate the UNIX part of the external file attributes.
 * @param {Object} unixPermissions the unix permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * adapted from http://unix.stackexchange.com/questions/14705/the-zip-formats-external-file-attribute :
 *
 * TTTTsstrwxrwxrwx0000000000ADVSHR
 * ^^^^____________________________ file type, see zipinfo.c (UNX_*)
 *     ^^^_________________________ setuid, setgid, sticky
 *        ^^^^^^^^^________________ permissions
 *                 ^^^^^^^^^^______ not used ?
 *                           ^^^^^^ DOS attribute bits : Archive, Directory, Volume label, System file, Hidden, Read only
 */
function generateUnixExternalFileAttr(unixPermissions, isDir) {
  var result = unixPermissions;
  if (!unixPermissions) {
    // I can't use octal values in strict mode, hence the hexa.
    //  040775 => 0x41fd
    // 0100664 => 0x81b4
    result = isDir ? 0x41fd : 0x81b4;
  }
  return (result & 0xffff) << 16;
}

/**
 * Generate the DOS part of the external file attributes.
 * @param {Object} dosPermissions the dos permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * Bit 0     Read-Only
 * Bit 1     Hidden
 * Bit 2     System
 * Bit 3     Volume Label
 * Bit 4     Directory
 * Bit 5     Archive
 */
function generateDosExternalFileAttr(dosPermissions) {
  // the dir flag is already set for compatibility

  return (dosPermissions || 0) & 0x3f;
}

/**
 * Generate the various parts used in the construction of the final zip file.
 * @param {string} name the file name.
 * @param {ZipObject} file the file content.
 * @param {PizZip.CompressedObject} compressedObject the compressed object.
 * @param {number} offset the current offset from the start of the zip file.
 * @param {String} platform let's pretend we are this platform (change platform dependents fields)
 * @param {Function} encodeFileName the function to encode the file name / comment.
 * @return {object} the zip parts.
 */
function generateZipParts(name, file, compressedObject, offset, platform, encodeFileName) {
  var useCustomEncoding = encodeFileName !== utf8.utf8encode,
    encodedFileName = utils.transformTo("string", encodeFileName(file.name)),
    utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
    comment = file.comment || "",
    encodedComment = utils.transformTo("string", encodeFileName(comment)),
    utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
    useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
    useUTF8ForComment = utfEncodedComment.length !== comment.length,
    o = file.options;
  var dosTime,
    dosDate,
    extraFields = "",
    unicodePathExtraField = "",
    unicodeCommentExtraField = "",
    dir,
    date;

  // handle the deprecated options.dir
  if (file._initialMetadata.dir !== file.dir) {
    dir = file.dir;
  } else {
    dir = o.dir;
  }

  // handle the deprecated options.date
  if (file._initialMetadata.date !== file.date) {
    date = file.date;
  } else {
    date = o.date;
  }
  var extFileAttr = 0;
  var versionMadeBy = 0;
  if (dir) {
    // dos or unix, we set the dos dir flag
    extFileAttr |= 0x00010;
  }
  if (platform === "UNIX") {
    versionMadeBy = 0x031e; // UNIX, version 3.0
    extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
  } else {
    // DOS or other, fallback to DOS
    versionMadeBy = 0x0014; // DOS, version 2.0
    extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
  }

  // date
  // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
  // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
  // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html

  dosTime = date.getHours();
  dosTime <<= 6;
  dosTime |= date.getMinutes();
  dosTime <<= 5;
  dosTime |= date.getSeconds() / 2;
  dosDate = date.getFullYear() - 1980;
  dosDate <<= 4;
  dosDate |= date.getMonth() + 1;
  dosDate <<= 5;
  dosDate |= date.getDate();
  if (useUTF8ForFileName) {
    // set the unicode path extra field. unzip needs at least one extra
    // field to correctly handle unicode path, so using the path is as good
    // as any other information. This could improve the situation with
    // other archive managers too.
    // This field is usually used without the utf8 flag, with a non
    // unicode path in the header (winrar, winzip). This helps (a bit)
    // with the messy Windows' default compressed folders feature but
    // breaks on p7zip which doesn't seek the unicode path extra field.
    // So for now, UTF-8 everywhere !
    unicodePathExtraField =
    // Version
    decToHex(1, 1) +
    // NameCRC32
    decToHex(_crc(encodedFileName), 4) +
    // UnicodeName
    utfEncodedFileName;
    extraFields +=
    // Info-ZIP Unicode Path Extra Field
    "\x75\x70" +
    // size
    decToHex(unicodePathExtraField.length, 2) +
    // content
    unicodePathExtraField;
  }
  if (useUTF8ForComment) {
    unicodeCommentExtraField =
    // Version
    decToHex(1, 1) +
    // CommentCRC32
    decToHex(this.crc32(encodedComment), 4) +
    // UnicodeName
    utfEncodedComment;
    extraFields +=
    // Info-ZIP Unicode Path Extra Field
    "\x75\x63" +
    // size
    decToHex(unicodeCommentExtraField.length, 2) +
    // content
    unicodeCommentExtraField;
  }
  var header = "";

  // version needed to extract
  header += "\x0A\x00";
  // general purpose bit flag
  // set bit 11 if utf8
  header += !useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment) ? "\x00\x08" : "\x00\x00";
  // compression method
  header += compressedObject.compressionMethod;
  // last mod file time
  header += decToHex(dosTime, 2);
  // last mod file date
  header += decToHex(dosDate, 2);
  // crc-32
  header += decToHex(compressedObject.crc32, 4);
  // compressed size
  header += decToHex(compressedObject.compressedSize, 4);
  // uncompressed size
  header += decToHex(compressedObject.uncompressedSize, 4);
  // file name length
  header += decToHex(encodedFileName.length, 2);
  // extra field length
  header += decToHex(extraFields.length, 2);
  var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;
  var dirRecord = signature.CENTRAL_FILE_HEADER +
  // version made by (00: DOS)
  decToHex(versionMadeBy, 2) +
  // file header (common to file and central directory)
  header +
  // file comment length
  decToHex(encodedComment.length, 2) +
  // disk number start
  "\x00\x00" +
  // internal file attributes
  "\x00\x00" +
  // external file attributes
  decToHex(extFileAttr, 4) +
  // relative offset of local header
  decToHex(offset, 4) +
  // file name
  encodedFileName +
  // extra field
  extraFields +
  // file comment
  encodedComment;
  return {
    fileRecord: fileRecord,
    dirRecord: dirRecord,
    compressedObject: compressedObject
  };
}
module.exports = out;

/***/ }),

/***/ 85090:
/*!*********************************************!*\
  !*** ./node_modules/pizzip/js/signature.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.LOCAL_FILE_HEADER = "PK\x03\x04";
exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
exports.DATA_DESCRIPTOR = "PK\x07\x08";

/***/ }),

/***/ 48756:
/*!************************************************!*\
  !*** ./node_modules/pizzip/js/stringReader.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DataReader = __webpack_require__(/*! ./dataReader.js */ 54405);
var utils = __webpack_require__(/*! ./utils.js */ 39629);
function StringReader(data, optimizedBinaryString) {
  this.data = data;
  if (!optimizedBinaryString) {
    this.data = utils.string2binary(this.data);
  }
  this.length = this.data.length;
  this.index = 0;
  this.zero = 0;
}
StringReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */
StringReader.prototype.byteAt = function (i) {
  return this.data.charCodeAt(this.zero + i);
};
/**
 * @see DataReader.lastIndexOfSignature
 */
StringReader.prototype.lastIndexOfSignature = function (sig) {
  return this.data.lastIndexOf(sig) - this.zero;
};
/**
 * @see DataReader.readData
 */
StringReader.prototype.readData = function (size) {
  this.checkOffset(size);
  // this will work because the constructor applied the "& 0xff" mask.
  var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
  this.index += size;
  return result;
};
module.exports = StringReader;

/***/ }),

/***/ 49504:
/*!************************************************!*\
  !*** ./node_modules/pizzip/js/stringWriter.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils.js */ 39629);

/**
 * An object to write any content to a string.
 * @constructor
 */
function StringWriter() {
  this.data = [];
}
StringWriter.prototype = {
  /**
   * Append any content to the current string.
   * @param {Object} input the content to add.
   */
  append: function append(input) {
    input = utils.transformTo("string", input);
    this.data.push(input);
  },
  /**
   * Finalize the construction an return the result.
   * @return {string} the generated string.
   */
  finalize: function finalize() {
    return this.data.join("");
  }
};
module.exports = StringWriter;

/***/ }),

/***/ 34107:
/*!*******************************************!*\
  !*** ./node_modules/pizzip/js/support.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.base64 = true;
exports.array = true;
exports.string = true;
exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
// contains true if PizZip can read/generate nodejs Buffer, false otherwise.
// Browserify will provide a Buffer implementation for browsers, which is
// an augmented Uint8Array (i.e., can be used as either Buffer or U8).
exports.nodebuffer = typeof Buffer !== "undefined";
// contains true if PizZip can read/generate Uint8Array, false otherwise.
exports.uint8array = typeof Uint8Array !== "undefined";
if (typeof ArrayBuffer === "undefined") {
  exports.blob = false;
} else {
  var buffer = new ArrayBuffer(0);
  try {
    exports.blob = new Blob([buffer], {
      type: "application/zip"
    }).size === 0;
  } catch (_unused) {
    try {
      var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
      var builder = new Builder();
      builder.append(buffer);
      exports.blob = builder.getBlob("application/zip").size === 0;
    } catch (_unused2) {
      exports.blob = false;
    }
  }
}

/***/ }),

/***/ 10028:
/*!****************************************************!*\
  !*** ./node_modules/pizzip/js/uint8ArrayReader.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ArrayReader = __webpack_require__(/*! ./arrayReader.js */ 47878);
function Uint8ArrayReader(data) {
  if (data) {
    this.data = data;
    this.length = this.data.length;
    this.index = 0;
    this.zero = 0;
  }
}
Uint8ArrayReader.prototype = new ArrayReader();
/**
 * @see DataReader.readData
 */
Uint8ArrayReader.prototype.readData = function (size) {
  this.checkOffset(size);
  if (size === 0) {
    // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
    return new Uint8Array(0);
  }
  var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
  this.index += size;
  return result;
};
module.exports = Uint8ArrayReader;

/***/ }),

/***/ 67848:
/*!****************************************************!*\
  !*** ./node_modules/pizzip/js/uint8ArrayWriter.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils.js */ 39629);

/**
 * An object to write any content to an Uint8Array.
 * @constructor
 * @param {number} length The length of the array.
 */
function Uint8ArrayWriter(length) {
  this.data = new Uint8Array(length);
  this.index = 0;
}
Uint8ArrayWriter.prototype = {
  /**
   * Append any content to the current array.
   * @param {Object} input the content to add.
   */
  append: function append(input) {
    if (input.length !== 0) {
      // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
      input = utils.transformTo("uint8array", input);
      this.data.set(input, this.index);
      this.index += input.length;
    }
  },
  /**
   * Finalize the construction an return the result.
   * @return {Uint8Array} the generated array.
   */
  finalize: function finalize() {
    return this.data;
  }
};
module.exports = Uint8ArrayWriter;

/***/ }),

/***/ 28521:
/*!****************************************!*\
  !*** ./node_modules/pizzip/js/utf8.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils.js */ 39629);
var support = __webpack_require__(/*! ./support.js */ 34107);
var nodeBuffer = __webpack_require__(/*! ./nodeBuffer.js */ 62684);

/**
 * The following functions come from pako, from pako/lib/utils/strings
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new Array(256);
for (var i = 0; i < 256; i++) {
  _utf8len[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start

// convert string to array (typed, when possible)
function string2buf(str) {
  var buf,
    c,
    c2,
    mPos,
    i,
    bufLen = 0;
  var strLen = str.length;

  // count binary size
  for (mPos = 0; mPos < strLen; mPos++) {
    c = str.charCodeAt(mPos);
    if ((c & 0xfc00) === 0xd800 && mPos + 1 < strLen) {
      c2 = str.charCodeAt(mPos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        mPos++;
      }
    }
    bufLen += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  if (support.uint8array) {
    buf = new Uint8Array(bufLen);
  } else {
    buf = new Array(bufLen);
  }

  // convert
  for (i = 0, mPos = 0; i < bufLen; mPos++) {
    c = str.charCodeAt(mPos);
    if ((c & 0xfc00) === 0xd800 && mPos + 1 < strLen) {
      c2 = str.charCodeAt(mPos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        mPos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xc0 | c >>> 6;
      buf[i++] = 0x80 | c & 0x3f;
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xe0 | c >>> 12;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | c >>> 18;
      buf[i++] = 0x80 | c >>> 12 & 0x3f;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    }
  }
  return buf;
}

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
function utf8border(buf, max) {
  var pos;
  max = max || buf.length;
  if (max > buf.length) {
    max = buf.length;
  }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xc0) === 0x80) {
    pos--;
  }

  // Fuckup - very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) {
    return max;
  }

  // If we came to start of buffer - that means vuffer is too small,
  // return max too.
  if (pos === 0) {
    return max;
  }
  return pos + _utf8len[buf[pos]] > max ? pos : max;
}

// convert array to string
function buf2string(buf) {
  var i, out, c, cLen;
  var len = buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);
  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) {
      utf16buf[out++] = c;
      continue;
    }
    cLen = _utf8len[c];
    // skip 5 & 6 byte codes
    if (cLen > 4) {
      utf16buf[out++] = 0xfffd;
      i += cLen - 1;
      continue;
    }

    // apply mask on first byte
    c &= cLen === 2 ? 0x1f : cLen === 3 ? 0x0f : 0x07;
    // join the rest
    while (cLen > 1 && i < len) {
      c = c << 6 | buf[i++] & 0x3f;
      cLen--;
    }

    // terminated by end of string?
    if (cLen > 1) {
      utf16buf[out++] = 0xfffd;
      continue;
    }
    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
      utf16buf[out++] = 0xdc00 | c & 0x3ff;
    }
  }

  // shrinkBuf(utf16buf, out)
  if (utf16buf.length !== out) {
    if (utf16buf.subarray) {
      utf16buf = utf16buf.subarray(0, out);
    } else {
      utf16buf.length = out;
    }
  }

  // return String.fromCharCode.apply(null, utf16buf);
  return utils.applyFromCharCode(utf16buf);
}

// That's all for the pako functions.

/**
 * Transform a javascript string into an array (typed if possible) of bytes,
 * UTF-8 encoded.
 * @param {String} str the string to encode
 * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
 */
exports.utf8encode = function utf8encode(str) {
  if (support.nodebuffer) {
    return nodeBuffer(str, "utf-8");
  }
  return string2buf(str);
};

/**
 * Transform a bytes array (or a representation) representing an UTF-8 encoded
 * string into a javascript string.
 * @param {Array|Uint8Array|Buffer} buf the data de decode
 * @return {String} the decoded string.
 */
exports.utf8decode = function utf8decode(buf) {
  if (support.nodebuffer) {
    return utils.transformTo("nodebuffer", buf).toString("utf-8");
  }
  buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);

  // return buf2string(buf);
  // Chrome prefers to work with "small" chunks of data
  // for the method buf2string.
  // Firefox and Chrome has their own shortcut, IE doesn't seem to really care.
  var result = [],
    len = buf.length,
    chunk = 65536;
  var k = 0;
  while (k < len) {
    var nextBoundary = utf8border(buf, Math.min(k + chunk, len));
    if (support.uint8array) {
      result.push(buf2string(buf.subarray(k, nextBoundary)));
    } else {
      result.push(buf2string(buf.slice(k, nextBoundary)));
    }
    k = nextBoundary;
  }
  return result.join("");
};

/***/ }),

/***/ 39629:
/*!*****************************************!*\
  !*** ./node_modules/pizzip/js/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var support = __webpack_require__(/*! ./support.js */ 34107);
var compressions = __webpack_require__(/*! ./compressions.js */ 43337);
var nodeBuffer = __webpack_require__(/*! ./nodeBuffer.js */ 62684);
/**
 * Convert a string to a "binary string" : a string containing only char codes between 0 and 255.
 * @param {string} str the string to transform.
 * @return {String} the binary string.
 */
exports.string2binary = function (str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) & 0xff);
  }
  return result;
};
exports.arrayBuffer2Blob = function (buffer, mimeType) {
  exports.checkSupport("blob");
  mimeType = mimeType || "application/zip";
  try {
    // Blob constructor
    return new Blob([buffer], {
      type: mimeType
    });
  } catch (_unused) {
    try {
      // deprecated, browser only, old way
      var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
      var builder = new Builder();
      builder.append(buffer);
      return builder.getBlob(mimeType);
    } catch (_unused2) {
      // well, fuck ?!
      throw new Error("Bug : can't construct the Blob.");
    }
  }
};
/**
 * The identity function.
 * @param {Object} input the input.
 * @return {Object} the same input.
 */
function identity(input) {
  return input;
}

/**
 * Fill in an array with a string.
 * @param {String} str the string to use.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
 */
function stringToArrayLike(str, array) {
  for (var i = 0; i < str.length; ++i) {
    array[i] = str.charCodeAt(i) & 0xff;
  }
  return array;
}

/**
 * Transform an array-like object to a string.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
 * @return {String} the result.
 */
function arrayLikeToString(array) {
  // Performances notes :
  // --------------------
  // String.fromCharCode.apply(null, array) is the fastest, see
  // see http://jsperf.com/converting-a-uint8array-to-a-string/2
  // but the stack is limited (and we can get huge arrays !).
  //
  // result += String.fromCharCode(array[i]); generate too many strings !
  //
  // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
  var chunk = 65536;
  var result = [],
    len = array.length,
    type = exports.getTypeOf(array);
  var k = 0,
    canUseApply = true;
  try {
    switch (type) {
      case "uint8array":
        String.fromCharCode.apply(null, new Uint8Array(0));
        break;
      case "nodebuffer":
        String.fromCharCode.apply(null, nodeBuffer(0));
        break;
    }
  } catch (_unused3) {
    canUseApply = false;
  }

  // no apply : slow and painful algorithm
  // default browser on android 4.*
  if (!canUseApply) {
    var resultStr = "";
    for (var i = 0; i < array.length; i++) {
      resultStr += String.fromCharCode(array[i]);
    }
    return resultStr;
  }
  while (k < len && chunk > 1) {
    try {
      if (type === "array" || type === "nodebuffer") {
        result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
      } else {
        result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
      }
      k += chunk;
    } catch (_unused4) {
      chunk = Math.floor(chunk / 2);
    }
  }
  return result.join("");
}
exports.applyFromCharCode = arrayLikeToString;

/**
 * Copy the data from an array-like to an other array-like.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
 */
function arrayLikeToArrayLike(arrayFrom, arrayTo) {
  for (var i = 0; i < arrayFrom.length; i++) {
    arrayTo[i] = arrayFrom[i];
  }
  return arrayTo;
}

// a matrix containing functions to transform everything into everything.
var transform = {};

// string to ?
transform.string = {
  string: identity,
  array: function array(input) {
    return stringToArrayLike(input, new Array(input.length));
  },
  arraybuffer: function arraybuffer(input) {
    return transform.string.uint8array(input).buffer;
  },
  uint8array: function uint8array(input) {
    return stringToArrayLike(input, new Uint8Array(input.length));
  },
  nodebuffer: function nodebuffer(input) {
    return stringToArrayLike(input, nodeBuffer(input.length));
  }
};

// array to ?
transform.array = {
  string: arrayLikeToString,
  array: identity,
  arraybuffer: function arraybuffer(input) {
    return new Uint8Array(input).buffer;
  },
  uint8array: function uint8array(input) {
    return new Uint8Array(input);
  },
  nodebuffer: function nodebuffer(input) {
    return nodeBuffer(input);
  }
};

// arraybuffer to ?
transform.arraybuffer = {
  string: function string(input) {
    return arrayLikeToString(new Uint8Array(input));
  },
  array: function array(input) {
    return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
  },
  arraybuffer: identity,
  uint8array: function uint8array(input) {
    return new Uint8Array(input);
  },
  nodebuffer: function nodebuffer(input) {
    return nodeBuffer(new Uint8Array(input));
  }
};

// uint8array to ?
transform.uint8array = {
  string: arrayLikeToString,
  array: function array(input) {
    return arrayLikeToArrayLike(input, new Array(input.length));
  },
  arraybuffer: function arraybuffer(input) {
    return input.buffer;
  },
  uint8array: identity,
  nodebuffer: function nodebuffer(input) {
    return nodeBuffer(input);
  }
};

// nodebuffer to ?
transform.nodebuffer = {
  string: arrayLikeToString,
  array: function array(input) {
    return arrayLikeToArrayLike(input, new Array(input.length));
  },
  arraybuffer: function arraybuffer(input) {
    return transform.nodebuffer.uint8array(input).buffer;
  },
  uint8array: function uint8array(input) {
    return arrayLikeToArrayLike(input, new Uint8Array(input.length));
  },
  nodebuffer: identity
};

/**
 * Transform an input into any type.
 * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
 * If no output type is specified, the unmodified input will be returned.
 * @param {String} outputType the output type.
 * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
 * @throws {Error} an Error if the browser doesn't support the requested output type.
 */
exports.transformTo = function (outputType, input) {
  if (!input) {
    // undefined, null, etc
    // an empty string won't harm.
    input = "";
  }
  if (!outputType) {
    return input;
  }
  exports.checkSupport(outputType);
  var inputType = exports.getTypeOf(input);
  var result = transform[inputType][outputType](input);
  return result;
};

/**
 * Return the type of the input.
 * The type will be in a format valid for PizZip.utils.transformTo : string, array, uint8array, arraybuffer.
 * @param {Object} input the input to identify.
 * @return {String} the (lowercase) type of the input.
 */
exports.getTypeOf = function (input) {
  if (input == null) {
    return;
  }
  if (typeof input === "string") {
    return "string";
  }
  var protoResult = Object.prototype.toString.call(input);
  if (protoResult === "[object Array]") {
    return "array";
  }
  if (support.nodebuffer && nodeBuffer.test(input)) {
    return "nodebuffer";
  }
  if (support.uint8array && protoResult === "[object Uint8Array]") {
    return "uint8array";
  }
  if (support.arraybuffer && protoResult === "[object ArrayBuffer]") {
    return "arraybuffer";
  }
  if (protoResult === "[object Promise]") {
    throw new Error("Cannot read data from a promise, you probably are running new PizZip(data) with a promise");
  }
  if (_typeof(input) === "object" && typeof input.file === "function") {
    throw new Error("Cannot read data from a pizzip instance, you probably are running new PizZip(zip) with a zipinstance");
  }
  if (protoResult === "[object Date]") {
    throw new Error("Cannot read data from a Date, you probably are running new PizZip(data) with a date");
  }
  if (_typeof(input) === "object" && input.crc32 == null) {
    throw new Error("Unsupported data given to new PizZip(data) (object given)");
  }
};

/**
 * Throw an exception if the type is not supported.
 * @param {String} type the type to check.
 * @throws {Error} an Error if the browser doesn't support the requested type.
 */
exports.checkSupport = function (type) {
  var supported = support[type.toLowerCase()];
  if (!supported) {
    throw new Error(type + " is not supported by this browser");
  }
};
exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

/**
 * Prettify a string read as binary.
 * @param {string} str the string to prettify.
 * @return {string} a pretty string.
 */
exports.pretty = function (str) {
  var res = "",
    code,
    i;
  for (i = 0; i < (str || "").length; i++) {
    code = str.charCodeAt(i);
    res += "\\x" + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
  }
  return res;
};

/**
 * Find a compression registered in PizZip.
 * @param {string} compressionMethod the method magic to find.
 * @return {Object|null} the PizZip compression object, null if none found.
 */
exports.findCompression = function (compressionMethod) {
  for (var method in compressions) {
    if (!compressions.hasOwnProperty(method)) {
      continue;
    }
    if (compressions[method].magic === compressionMethod) {
      return compressions[method];
    }
  }
  return null;
};
/**
 * Cross-window, cross-Node-context regular expression detection
 * @param  {Object}  object Anything
 * @return {Boolean}        true if the object is a regular expression,
 * false otherwise
 */
exports.isRegExp = function (object) {
  return Object.prototype.toString.call(object) === "[object RegExp]";
};

/**
 * Merge the objects passed as parameters into a new one.
 * @private
 * @param {...Object} var_args All objects to merge.
 * @return {Object} a new object with the data of the others.
 */
exports.extend = function () {
  var result = {};
  var i, attr;
  for (i = 0; i < arguments.length; i++) {
    // arguments is not enumerable in some browsers
    for (attr in arguments[i]) {
      if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
        result[attr] = arguments[i][attr];
      }
    }
  }
  return result;
};

/***/ }),

/***/ 76100:
/*!**********************************************!*\
  !*** ./node_modules/pizzip/js/zipEntries.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var StringReader = __webpack_require__(/*! ./stringReader.js */ 48756);
var NodeBufferReader = __webpack_require__(/*! ./nodeBufferReader.js */ 5975);
var Uint8ArrayReader = __webpack_require__(/*! ./uint8ArrayReader.js */ 10028);
var ArrayReader = __webpack_require__(/*! ./arrayReader.js */ 47878);
var utils = __webpack_require__(/*! ./utils.js */ 39629);
var sig = __webpack_require__(/*! ./signature.js */ 85090);
var ZipEntry = __webpack_require__(/*! ./zipEntry.js */ 3691);
var support = __webpack_require__(/*! ./support.js */ 34107);
//  class ZipEntries {{{
/**
 * All the entries in the zip file.
 * @constructor
 * @param {String|ArrayBuffer|Uint8Array} data the binary stream to load.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntries(data, loadOptions) {
  this.files = [];
  this.loadOptions = loadOptions;
  if (data) {
    this.load(data);
  }
}
ZipEntries.prototype = {
  /**
   * Check that the reader is on the speficied signature.
   * @param {string} expectedSignature the expected signature.
   * @throws {Error} if it is an other signature.
   */
  checkSignature: function checkSignature(expectedSignature) {
    var signature = this.reader.readString(4);
    if (signature !== expectedSignature) {
      throw new Error("Corrupted zip or bug : unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
    }
  },
  /**
   * Check if the given signature is at the given index.
   * @param {number} askedIndex the index to check.
   * @param {string} expectedSignature the signature to expect.
   * @return {boolean} true if the signature is here, false otherwise.
   */
  isSignature: function isSignature(askedIndex, expectedSignature) {
    var currentIndex = this.reader.index;
    this.reader.setIndex(askedIndex);
    var signature = this.reader.readString(4);
    var result = signature === expectedSignature;
    this.reader.setIndex(currentIndex);
    return result;
  },
  /**
   * Read the end of the central directory.
   */
  readBlockEndOfCentral: function readBlockEndOfCentral() {
    this.diskNumber = this.reader.readInt(2);
    this.diskWithCentralDirStart = this.reader.readInt(2);
    this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
    this.centralDirRecords = this.reader.readInt(2);
    this.centralDirSize = this.reader.readInt(4);
    this.centralDirOffset = this.reader.readInt(4);
    this.zipCommentLength = this.reader.readInt(2);
    // warning : the encoding depends of the system locale
    // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
    // On a windows machine, this field is encoded with the localized windows code page.
    var zipComment = this.reader.readData(this.zipCommentLength);
    var decodeParamType = support.uint8array ? "uint8array" : "array";
    // To get consistent behavior with the generation part, we will assume that
    // this is utf8 encoded unless specified otherwise.
    var decodeContent = utils.transformTo(decodeParamType, zipComment);
    this.zipComment = this.loadOptions.decodeFileName(decodeContent);
  },
  /**
   * Read the end of the Zip 64 central directory.
   * Not merged with the method readEndOfCentral :
   * The end of central can coexist with its Zip64 brother,
   * I don't want to read the wrong number of bytes !
   */
  readBlockZip64EndOfCentral: function readBlockZip64EndOfCentral() {
    this.zip64EndOfCentralSize = this.reader.readInt(8);
    this.versionMadeBy = this.reader.readString(2);
    this.versionNeeded = this.reader.readInt(2);
    this.diskNumber = this.reader.readInt(4);
    this.diskWithCentralDirStart = this.reader.readInt(4);
    this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
    this.centralDirRecords = this.reader.readInt(8);
    this.centralDirSize = this.reader.readInt(8);
    this.centralDirOffset = this.reader.readInt(8);
    this.zip64ExtensibleData = {};
    var extraDataSize = this.zip64EndOfCentralSize - 44;
    var index = 0;
    var extraFieldId, extraFieldLength, extraFieldValue;
    while (index < extraDataSize) {
      extraFieldId = this.reader.readInt(2);
      extraFieldLength = this.reader.readInt(4);
      extraFieldValue = this.reader.readString(extraFieldLength);
      this.zip64ExtensibleData[extraFieldId] = {
        id: extraFieldId,
        length: extraFieldLength,
        value: extraFieldValue
      };
    }
  },
  /**
   * Read the end of the Zip 64 central directory locator.
   */
  readBlockZip64EndOfCentralLocator: function readBlockZip64EndOfCentralLocator() {
    this.diskWithZip64CentralDirStart = this.reader.readInt(4);
    this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
    this.disksCount = this.reader.readInt(4);
    if (this.disksCount > 1) {
      throw new Error("Multi-volumes zip are not supported");
    }
  },
  /**
   * Read the local files, based on the offset read in the central part.
   */
  readLocalFiles: function readLocalFiles() {
    var i, file;
    for (i = 0; i < this.files.length; i++) {
      file = this.files[i];
      this.reader.setIndex(file.localHeaderOffset);
      this.checkSignature(sig.LOCAL_FILE_HEADER);
      file.readLocalPart(this.reader);
      file.handleUTF8();
      file.processAttributes();
    }
  },
  /**
   * Read the central directory.
   */
  readCentralDir: function readCentralDir() {
    var file;
    this.reader.setIndex(this.centralDirOffset);
    while (this.reader.readString(4) === sig.CENTRAL_FILE_HEADER) {
      file = new ZipEntry({
        zip64: this.zip64
      }, this.loadOptions);
      file.readCentralPart(this.reader);
      this.files.push(file);
    }
    if (this.centralDirRecords !== this.files.length) {
      if (this.centralDirRecords !== 0 && this.files.length === 0) {
        // We expected some records but couldn't find ANY.
        // This is really suspicious, as if something went wrong.
        throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      } else {
        // We found some records but not all.
        // Something is wrong but we got something for the user: no error here.
        // console.warn("expected", this.centralDirRecords, "records in central dir, got", this.files.length);
      }
    }
  },
  /**
   * Read the end of central directory.
   */
  readEndOfCentral: function readEndOfCentral() {
    var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
    if (offset < 0) {
      // Check if the content is a truncated zip or complete garbage.
      // A "LOCAL_FILE_HEADER" is not required at the beginning (auto
      // extractible zip for example) but it can give a good hint.
      // If an ajax request was used without responseType, we will also
      // get unreadable data.
      var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);
      if (isGarbage) {
        throw new Error("Can't find end of central directory : is this a zip file ?");
      } else {
        throw new Error("Corrupted zip : can't find end of central directory");
      }
    }
    this.reader.setIndex(offset);
    var endOfCentralDirOffset = offset;
    this.checkSignature(sig.CENTRAL_DIRECTORY_END);
    this.readBlockEndOfCentral();

    /* extract from the zip spec :
              4)  If one of the fields in the end of central directory
                  record is too small to hold required data, the field
                  should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                  ZIP64 format record should be created.
              5)  The end of central directory record and the
                  Zip64 end of central directory locator record must
                  reside on the same disk when splitting or spanning
                  an archive.
           */
    if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
      this.zip64 = true;

      /*
               Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
               the zip file can fit into a 32bits integer. This cannot be solved : Javascript represents
               all numbers as 64-bit double precision IEEE 754 floating point numbers.
               So, we have 53bits for integers and bitwise operations treat everything as 32bits.
               see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
               and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
               */

      // should look for a zip64 EOCD locator
      offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
      if (offset < 0) {
        throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
      }
      this.reader.setIndex(offset);
      this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
      this.readBlockZip64EndOfCentralLocator();

      // now the zip64 EOCD record
      if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
        // console.warn("ZIP64 end of central directory not where expected.");
        this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
        if (this.relativeOffsetEndOfZip64CentralDir < 0) {
          throw new Error("Corrupted zip : can't find the ZIP64 end of central directory");
        }
      }
      this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
      this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
      this.readBlockZip64EndOfCentral();
    }
    var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
    if (this.zip64) {
      expectedEndOfCentralDirOffset += 20; // end of central dir 64 locator
      expectedEndOfCentralDirOffset += 12 /* should not include the leading 12 bytes */ + this.zip64EndOfCentralSize;
    }
    var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;
    if (extraBytes > 0) {
      // console.warn(extraBytes, "extra bytes at beginning or within zipfile");
      if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
        // The offsets seem wrong, but we have something at the specified offset.
        // So… we keep it.
      } else {
        // the offset is wrong, update the "zero" of the reader
        // this happens if data has been prepended (crx files for example)
        this.reader.zero = extraBytes;
      }
    } else if (extraBytes < 0) {
      throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
    }
  },
  prepareReader: function prepareReader(data) {
    var type = utils.getTypeOf(data);
    utils.checkSupport(type);
    if (type === "string" && !support.uint8array) {
      this.reader = new StringReader(data, this.loadOptions.optimizedBinaryString);
    } else if (type === "nodebuffer") {
      this.reader = new NodeBufferReader(data);
    } else if (support.uint8array) {
      this.reader = new Uint8ArrayReader(utils.transformTo("uint8array", data));
    } else if (support.array) {
      this.reader = new ArrayReader(utils.transformTo("array", data));
    } else {
      throw new Error("Unexpected error: unsupported type '" + type + "'");
    }
  },
  /**
   * Read a zip file and create ZipEntries.
   * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
   */
  load: function load(data) {
    this.prepareReader(data);
    this.readEndOfCentral();
    this.readCentralDir();
    this.readLocalFiles();
  }
};
// }}} end of ZipEntries
module.exports = ZipEntries;

/***/ }),

/***/ 3691:
/*!********************************************!*\
  !*** ./node_modules/pizzip/js/zipEntry.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var StringReader = __webpack_require__(/*! ./stringReader.js */ 48756);
var utils = __webpack_require__(/*! ./utils.js */ 39629);
var CompressedObject = __webpack_require__(/*! ./compressedObject.js */ 14479);
var pizzipProto = __webpack_require__(/*! ./object.js */ 62849);
var support = __webpack_require__(/*! ./support.js */ 34107);
var MADE_BY_DOS = 0x00;
var MADE_BY_UNIX = 0x03;

// class ZipEntry {{{
/**
 * An entry in the zip file.
 * @constructor
 * @param {Object} options Options of the current file.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntry(options, loadOptions) {
  this.options = options;
  this.loadOptions = loadOptions;
}
ZipEntry.prototype = {
  /**
   * say if the file is encrypted.
   * @return {boolean} true if the file is encrypted, false otherwise.
   */
  isEncrypted: function isEncrypted() {
    // bit 1 is set
    return (this.bitFlag & 0x0001) === 0x0001;
  },
  /**
   * say if the file has utf-8 filename/comment.
   * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
   */
  useUTF8: function useUTF8() {
    // bit 11 is set
    return (this.bitFlag & 0x0800) === 0x0800;
  },
  /**
   * Prepare the function used to generate the compressed content from this ZipFile.
   * @param {DataReader} reader the reader to use.
   * @param {number} from the offset from where we should read the data.
   * @param {number} length the length of the data to read.
   * @return {Function} the callback to get the compressed content (the type depends of the DataReader class).
   */
  prepareCompressedContent: function prepareCompressedContent(reader, from, length) {
    return function () {
      var previousIndex = reader.index;
      reader.setIndex(from);
      var compressedFileData = reader.readData(length);
      reader.setIndex(previousIndex);
      return compressedFileData;
    };
  },
  /**
   * Prepare the function used to generate the uncompressed content from this ZipFile.
   * @param {DataReader} reader the reader to use.
   * @param {number} from the offset from where we should read the data.
   * @param {number} length the length of the data to read.
   * @param {PizZip.compression} compression the compression used on this file.
   * @param {number} uncompressedSize the uncompressed size to expect.
   * @return {Function} the callback to get the uncompressed content (the type depends of the DataReader class).
   */
  prepareContent: function prepareContent(reader, from, length, compression, uncompressedSize) {
    return function () {
      var compressedFileData = utils.transformTo(compression.uncompressInputType, this.getCompressedContent());
      var uncompressedFileData = compression.uncompress(compressedFileData);
      if (uncompressedFileData.length !== uncompressedSize) {
        throw new Error("Bug : uncompressed data size mismatch");
      }
      return uncompressedFileData;
    };
  },
  /**
   * Read the local part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readLocalPart: function readLocalPart(reader) {
    // we already know everything from the central dir !
    // If the central dir data are false, we are doomed.
    // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
    // The less data we get here, the more reliable this should be.
    // Let's skip the whole header and dash to the data !
    reader.skip(22);
    // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
    // Strangely, the filename here is OK.
    // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
    // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
    // Search "unzip mismatching "local" filename continuing with "central" filename version" on
    // the internet.
    //
    // I think I see the logic here : the central directory is used to display
    // content and the local directory is used to extract the files. Mixing / and \
    // may be used to display \ to windows users and use / when extracting the files.
    // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394
    this.fileNameLength = reader.readInt(2);
    var localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
    this.fileName = reader.readData(this.fileNameLength);
    reader.skip(localExtraFieldsLength);
    if (this.compressedSize === -1 || this.uncompressedSize === -1) {
      throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize == -1 || uncompressedSize == -1)");
    }
    var compression = utils.findCompression(this.compressionMethod);
    if (compression === null) {
      // no compression found
      throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
    }
    this.decompressed = new CompressedObject();
    this.decompressed.compressedSize = this.compressedSize;
    this.decompressed.uncompressedSize = this.uncompressedSize;
    this.decompressed.crc32 = this.crc32;
    this.decompressed.compressionMethod = this.compressionMethod;
    this.decompressed.getCompressedContent = this.prepareCompressedContent(reader, reader.index, this.compressedSize, compression);
    this.decompressed.getContent = this.prepareContent(reader, reader.index, this.compressedSize, compression, this.uncompressedSize);

    // we need to compute the crc32...
    if (this.loadOptions.checkCRC32) {
      this.decompressed = utils.transformTo("string", this.decompressed.getContent());
      if (pizzipProto.crc32(this.decompressed) !== this.crc32) {
        throw new Error("Corrupted zip : CRC32 mismatch");
      }
    }
  },
  /**
   * Read the central part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readCentralPart: function readCentralPart(reader) {
    this.versionMadeBy = reader.readInt(2);
    this.versionNeeded = reader.readInt(2);
    this.bitFlag = reader.readInt(2);
    this.compressionMethod = reader.readString(2);
    this.date = reader.readDate();
    this.crc32 = reader.readInt(4);
    this.compressedSize = reader.readInt(4);
    this.uncompressedSize = reader.readInt(4);
    this.fileNameLength = reader.readInt(2);
    this.extraFieldsLength = reader.readInt(2);
    this.fileCommentLength = reader.readInt(2);
    this.diskNumberStart = reader.readInt(2);
    this.internalFileAttributes = reader.readInt(2);
    this.externalFileAttributes = reader.readInt(4);
    this.localHeaderOffset = reader.readInt(4);
    if (this.isEncrypted()) {
      throw new Error("Encrypted zip are not supported");
    }
    this.fileName = reader.readData(this.fileNameLength);
    this.readExtraFields(reader);
    this.parseZIP64ExtraField(reader);
    this.fileComment = reader.readData(this.fileCommentLength);
  },
  /**
   * Parse the external file attributes and get the unix/dos permissions.
   */
  processAttributes: function processAttributes() {
    this.unixPermissions = null;
    this.dosPermissions = null;
    var madeBy = this.versionMadeBy >> 8;

    // Check if we have the DOS directory flag set.
    // We look for it in the DOS and UNIX permissions
    // but some unknown platform could set it as a compatibility flag.
    this.dir = !!(this.externalFileAttributes & 0x0010);
    if (madeBy === MADE_BY_DOS) {
      // first 6 bits (0 to 5)
      this.dosPermissions = this.externalFileAttributes & 0x3f;
    }
    if (madeBy === MADE_BY_UNIX) {
      this.unixPermissions = this.externalFileAttributes >> 16 & 0xffff;
      // the octal permissions are in (this.unixPermissions & 0x01FF).toString(8);
    }

    // fail safe : if the name ends with a / it probably means a folder
    if (!this.dir && this.fileNameStr.slice(-1) === "/") {
      this.dir = true;
    }
  },
  /**
   * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
   */
  parseZIP64ExtraField: function parseZIP64ExtraField() {
    if (!this.extraFields[0x0001]) {
      return;
    }

    // should be something, preparing the extra reader
    var extraReader = new StringReader(this.extraFields[0x0001].value);

    // I really hope that these 64bits integer can fit in 32 bits integer, because js
    // won't let us have more.
    if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
      this.uncompressedSize = extraReader.readInt(8);
    }
    if (this.compressedSize === utils.MAX_VALUE_32BITS) {
      this.compressedSize = extraReader.readInt(8);
    }
    if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
      this.localHeaderOffset = extraReader.readInt(8);
    }
    if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
      this.diskNumberStart = extraReader.readInt(4);
    }
  },
  /**
   * Read the central part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readExtraFields: function readExtraFields(reader) {
    var start = reader.index;
    var extraFieldId, extraFieldLength, extraFieldValue;
    this.extraFields = this.extraFields || {};
    while (reader.index < start + this.extraFieldsLength) {
      extraFieldId = reader.readInt(2);
      extraFieldLength = reader.readInt(2);
      extraFieldValue = reader.readString(extraFieldLength);
      this.extraFields[extraFieldId] = {
        id: extraFieldId,
        length: extraFieldLength,
        value: extraFieldValue
      };
    }
  },
  /**
   * Apply an UTF8 transformation if needed.
   */
  handleUTF8: function handleUTF8() {
    var decodeParamType = support.uint8array ? "uint8array" : "array";
    if (this.useUTF8()) {
      this.fileNameStr = pizzipProto.utf8decode(this.fileName);
      this.fileCommentStr = pizzipProto.utf8decode(this.fileComment);
    } else {
      var upath = this.findExtraFieldUnicodePath();
      if (upath !== null) {
        this.fileNameStr = upath;
      } else {
        var fileNameByteArray = utils.transformTo(decodeParamType, this.fileName);
        this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
      }
      var ucomment = this.findExtraFieldUnicodeComment();
      if (ucomment !== null) {
        this.fileCommentStr = ucomment;
      } else {
        var commentByteArray = utils.transformTo(decodeParamType, this.fileComment);
        this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
      }
    }
  },
  /**
   * Find the unicode path declared in the extra field, if any.
   * @return {String} the unicode path, null otherwise.
   */
  findExtraFieldUnicodePath: function findExtraFieldUnicodePath() {
    var upathField = this.extraFields[0x7075];
    if (upathField) {
      var extraReader = new StringReader(upathField.value);

      // wrong version
      if (extraReader.readInt(1) !== 1) {
        return null;
      }

      // the crc of the filename changed, this field is out of date.
      if (pizzipProto.crc32(this.fileName) !== extraReader.readInt(4)) {
        return null;
      }
      return pizzipProto.utf8decode(extraReader.readString(upathField.length - 5));
    }
    return null;
  },
  /**
   * Find the unicode comment declared in the extra field, if any.
   * @return {String} the unicode comment, null otherwise.
   */
  findExtraFieldUnicodeComment: function findExtraFieldUnicodeComment() {
    var ucommentField = this.extraFields[0x6375];
    if (ucommentField) {
      var extraReader = new StringReader(ucommentField.value);

      // wrong version
      if (extraReader.readInt(1) !== 1) {
        return null;
      }

      // the crc of the comment changed, this field is out of date.
      if (pizzipProto.crc32(this.fileComment) !== extraReader.readInt(4)) {
        return null;
      }
      return pizzipProto.utf8decode(extraReader.readString(ucommentField.length - 5));
    }
    return null;
  }
};
module.exports = ZipEntry;

/***/ }),

/***/ 54843:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 9350);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 62998);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}
//# sourceMappingURL=firstValueFrom.js.map

/***/ })

}]);