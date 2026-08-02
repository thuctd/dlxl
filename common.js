"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["common"],{

/***/ 12676:
/*!********************************************!*\
  !*** ./src/app/cmis4/cmis4-dmt.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cmis4DmtService: () => (/* binding */ Cmis4DmtService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/plus.service */ 22014);
/* harmony import */ var _site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site/loading/loading.service */ 97230);
/* harmony import */ var _share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/services/authV2.service */ 50532);







class Cmis4DmtService {
  constructor(plus, loadSV, authSV) {
    this.plus = plus;
    this.loadSV = loadSV;
    this.authSV = authSV;
    this.user = null;
    this.user = JSON.parse(localStorage.getItem('USERCMIS'));
  }
  getBaoCaoDMT(body) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loadSV.load('getBaoCaoDMT');
      let url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/getBaocaoTongHopDienMTMN';
      let path = '/serviceBCaoThang/getBaocaoTongHopDienMTMN';
      const httpOptions = {
        "path": path,
        "authority": "cmis-api.evnspc.vn",
        "authorization": "Bearer " + _this.user.ACCESS_TOKEN
      };
      return axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(url, body, {
        headers: httpOptions
      }).then(res => {
        localStorage.setItem(body.BIEU, JSON.stringify(res.data));
        _this.loadSV.loaded('getBaoCaoDMT');
        return res.data;
      }).catch(err => {
        localStorage.removeItem('USERCMIS');
        _this.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
        _this.authSV.reload('/cmis4');
        _this.loadSV.clear();
        console.log(err);
        return [];
      });
    })();
  }
  getB11(ngay) {
    let thang = moment__WEBPACK_IMPORTED_MODULE_1___default()(ngay, 'DD/MM/YYYY').format('MM');
    let nam = moment__WEBPACK_IMPORTED_MODULE_1___default()(ngay, 'DD/MM/YYYY').format('YYYY');
    let body = {
      "MA_DVIQLY": this.user.SUBDIVISIONID,
      "THANG": thang,
      "NAM": nam,
      "LUY_KE": 0,
      "TCHAT_MTAM": 0,
      "NGAY_COD": -1,
      "TU_NGAY_GCS": ngay,
      "DEN_NGAY_GCS": ngay,
      "BIEU": "BIEU11",
      "QUYET_TOAN": 1
    };
    let url = 'https://cmis-api.evnspc.vn/serviceBCaoThang/getBaocaoTongHopDienMTMN';
    let path = '/serviceBCaoThang/getBaocaoTongHopDienMTMN';
    const httpOptions = {
      "path": path,
      "authority": "cmis-api.evnspc.vn",
      "authorization": "Bearer " + this.user.ACCESS_TOKEN
    };
    return axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(url, body, {
      headers: httpOptions
    }).then(res => res.data).catch(err => {
      localStorage.removeItem('USERCMIS');
      this.plus.alertMatSnackBar(`Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại`);
      this.authSV.reload('/cmis4');
      this.loadSV.clear();
      console.log(err);
      return [];
    });
  }
  static {
    this.ɵfac = function Cmis4DmtService_Factory(t) {
      return new (t || Cmis4DmtService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_share_services_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_share_services_authV2_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceV2));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: Cmis4DmtService,
      factory: Cmis4DmtService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 11145:
/*!*************************************************!*\
  !*** ./src/app/share/services/email.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailService: () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 96354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _http_serviceV2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.serviceV2 */ 24950);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _authV2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authV2.service */ 50532);






class EmailService {
  constructor(loadSV, httpSV, http, authSV) {
    this.loadSV = loadSV;
    this.httpSV = httpSV;
    this.http = http;
    this.authSV = authSV;
  }
  send(api, body) {
    this.loadSV.load('email');
    return this.httpSV.post('mail/' + api, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      this.loadSV.loaded('email');
      return response;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.retry)(1));
  }
  static {
    this.ɵfac = function EmailService_Factory(t) {
      return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_http_serviceV2__WEBPACK_IMPORTED_MODULE_1__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_authV2_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceV2));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: EmailService,
      factory: EmailService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);