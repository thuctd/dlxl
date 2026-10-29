"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["default-src_app_share_upload-drive_upload-drive_module_ts"],{

/***/ 68092:
/*!********************************************************!*\
  !*** ./src/app/share/services/drive-upload.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DriveUploadService: () => (/* binding */ DriveUploadService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _plus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plus.service */ 22014);




class DriveUploadService {
  isSignedIn() {
    return gapi.auth2?.getAuthInstance()?.isSignedIn?.get() || false;
  }
  constructor(plus) {
    this.plus = plus;
    this.CLIENT_ID = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.googleLogin;
    this.SCOPES = 'https://www.googleapis.com/auth/drive.file';
  }
  initClient() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: this.CLIENT_ID,
        scope: this.SCOPES
      }).then(() => console.log('Google API ready'));
    });
  }
  signIn() {
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authInstance = gapi.auth2.getAuthInstance();
      yield authInstance.signIn();
    })();
  }
  uploadFile(file, folderId) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accessToken = gapi.auth.getToken().access_token;
      const metadata = {
        name: file.name,
        mimeType: file.type,
        parents: [folderId]
      };
      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], {
        type: 'application/json'
      }));
      form.append('file', file);
      const response = yield fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
        method: 'POST',
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken
        }),
        body: form
      }).catch(error => {
        alert('Upload file bị lỗi: ' + error.message);
        throw new Error('Upload failed: ' + error.message);
      });
      console.log(response);
      _this.plus.alertSuccess('Tải lên thành công: ' + file.name);
      return response.json();
    })();
  }
  listFilesInFolder(folderId) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accessToken = gapi.auth.getToken().access_token;
      console.log(`Listing files in folder: ${folderId} with access token: ${accessToken}`);
      if (!accessToken) {
        _this2.signIn();
      }
      const response = yield fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,mimeType,webViewLink,iconLink)&spaces=drive`, {
        method: 'GET',
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken
        })
      });
      const data = yield response.json();
      console.log(data);
      return data.files;
    })();
  }
  deleteFile(fileId) {
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accessToken = gapi.auth.getToken().access_token;
      const response = yield fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
        method: 'DELETE',
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken
        })
      });
      if (!response.ok) {
        const error = yield response.text();
        throw new Error('Xoá thất bại: ' + error);
      }
    })();
  }
  shareFilePublicly(fileId) {
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accessToken = gapi.auth.getToken().access_token;
      const response = yield fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          role: 'reader',
          type: 'anyone'
        })
      });
      if (!response.ok) {
        const error = yield response.text();
        throw new Error('Chia sẻ công khai thất bại: ' + error);
      }
    })();
  }
  static {
    this.ɵfac = function DriveUploadService_Factory(t) {
      return new (t || DriveUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_plus_service__WEBPACK_IMPORTED_MODULE_2__.PlusService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: DriveUploadService,
      factory: DriveUploadService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 49699:
/*!******************************************************************************!*\
  !*** ./src/app/share/upload-drive/upload-drive-v3/upload-drive.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadDriveComponent: () => (/* binding */ UploadDriveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_fire_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/fire-storage.service */ 37722);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loading.service */ 4974);
/* harmony import */ var _services_http_serviceV2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.serviceV2 */ 24950);
/* harmony import */ var _services_drive_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/drive-upload.service */ 68092);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../drop-file/drop-files/drop-files.component */ 69061);








function UploadDriveComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r0.uploadProgress + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.uploadProgress, "%");
  }
}
function UploadDriveComponent_div_4_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td")(7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u2B07\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadDriveComponent_div_4_tr_9_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.deleteFile(item_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td")(13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadDriveComponent_div_4_tr_9_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.onselected(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r3.iconLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", item_r3.webViewLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "https://drive.google.com/uc?export=download&id=" + item_r3.id, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function UploadDriveComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadDriveComponent_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.showFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Show Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 6)(4, "div")(5, "table", 8)(6, "thead", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, UploadDriveComponent_div_4_tr_9_Template, 15, 4, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.files);
  }
}
class UploadDriveComponent {
  constructor(storageSV, loadSV, httpSV, drive) {
    this.storageSV = storageSV;
    this.loadSV = loadSV;
    this.httpSV = httpSV;
    this.drive = drive;
    this.link = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.api = 'dev';
    this.uploadProgress = 0;
    this.place = 'Chọn file';
    this.linkUpload = '';
    this.file = null;
    this.signedIn = false;
    this.files = [];
  }
  ngOnInit() {}
  signIn() {
    this.drive.signIn();
  }
  isSignedIn() {
    return this.drive.isSignedIn();
  }
  showFile() {
    this.drive.listFilesInFolder(this.driveFolderId).then(files => {
      console.log(files);
      this.files = files;
    });
  }
  onselected(item) {
    console.log(item);
    this.link.emit(item);
  }
  deleteFile(fileId) {
    this.loadSV.load('deleteFile');
    this.drive.deleteFile(fileId).then(() => {
      this.loadSV.loaded('deleteFile');
      this.showFile();
    }).catch(err => {
      console.error('Error deleting file:', err);
      this.loadSV.loaded('deleteFile');
    });
  }
  uploadFB(files) {
    if (!files.length) return;
    this.loadSV.load('uploadDrive');
    this.storageSV.uploadFile(files[0], 'drive').then(res => {
      console.log(res);
      let bodyAPI = {
        link: res,
        driveFolderId: this.driveFolderId,
        firebaseFilePath: `drive/${files[0].name}`
      };
      this.httpSV.post('upload/drive', bodyAPI).subscribe(res => {
        this.loadSV.loaded('uploadDrive');
        console.log(res);
        this.link.emit(res);
      });
    });
  }
  onDropFile(files) {
    this.file = files[0];
    this.drive.uploadFile(files[0], this.driveFolderId).then(res => {
      console.log(res);
      this.linkUpload = res.link;
      this.link.emit(res);
    });
  }
  ondragover() {
    document.getElementById("dropZone").setAttribute("drop-active", "true");
  }
  checkPer(level, api = this.api) {
    return window.max ? window.max.opt[api] > level ? true : false : false;
  }
  static {
    this.ɵfac = function UploadDriveComponent_Factory(t) {
      return new (t || UploadDriveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_fire_storage_service__WEBPACK_IMPORTED_MODULE_0__.FireStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_2__.HttpServiceV2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_drive_upload_service__WEBPACK_IMPORTED_MODULE_3__.DriveUploadService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: UploadDriveComponent,
      selectors: [["app-upload-drive"]],
      inputs: {
        driveFolderId: "driveFolderId"
      },
      outputs: {
        link: "link"
      },
      decls: 5,
      vars: 3,
      consts: [[3, "click"], [3, "label", "files", "ondragover"], ["class", "progress", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary"], [1, "row"], ["mat-raised-button", "", 3, "click"], [1, "table", "table-hover", "table-borderless"], [1, ""], [4, "ngFor", "ngForOf"], ["width", "20", 3, "src"], ["target", "_blank", 3, "href"], ["mat-icon-button", "", 3, "href"], ["mat-icon-button", "", 3, "click"]],
      template: function UploadDriveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadDriveComponent_Template_button_click_0_listener() {
            return ctx.signIn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\uD83D\uDD10 \u0110\u0103ng nh\u1EADp Google");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-drop-files", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("files", function UploadDriveComponent_Template_app_drop_files_files_2_listener($event) {
            return ctx.onDropFile($event);
          })("ondragover", function UploadDriveComponent_Template_app_drop_files_ondragover_2_listener() {
            return ctx.ondragover();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UploadDriveComponent_div_3_Template, 3, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UploadDriveComponent_div_4_Template, 10, 1, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", "file \u0111\u00EDnh k\u00E8m");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.uploadProgress > 0 && ctx.uploadProgress < 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkPer(1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _drop_file_drop_files_drop_files_component__WEBPACK_IMPORTED_MODULE_4__.DropFilesComponent]
    });
  }
}

/***/ }),

/***/ 33917:
/*!***********************************************************!*\
  !*** ./src/app/share/upload-drive/upload-drive.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFileModule: () => (/* binding */ UploadFileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _upload_drive_v3_upload_drive_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-drive-v3/upload-drive.component */ 49699);
/* harmony import */ var _drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drop-file/drop-file.module */ 96115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);




class UploadFileModule {
  static {
    this.ɵfac = function UploadFileModule_Factory(t) {
      return new (t || UploadFileModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UploadFileModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_1__.DropFileModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UploadFileModule, {
    declarations: [_upload_drive_v3_upload_drive_component__WEBPACK_IMPORTED_MODULE_0__.UploadDriveComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _drop_file_drop_file_module__WEBPACK_IMPORTED_MODULE_1__.DropFileModule],
    exports: [_upload_drive_v3_upload_drive_component__WEBPACK_IMPORTED_MODULE_0__.UploadDriveComponent]
  });
})();

/***/ })

}]);