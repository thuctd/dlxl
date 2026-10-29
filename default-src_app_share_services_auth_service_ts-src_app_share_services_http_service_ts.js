"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["default-src_app_share_services_auth_service_ts-src_app_share_services_http_service_ts"],{

/***/ 14892:
/*!************************************************!*\
  !*** ./src/app/share/services/auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 87935);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 84412);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 70152);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 96697);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/Subscription */ 13961);
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/Observable */ 71985);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uid */ 10723);
/* harmony import */ var src_assets_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/nav */ 11015);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ 81175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 89754);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 30003);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 48256);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _indexeddb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./indexeddb.service */ 90657);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _fire_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fire-storage.service */ 37722);
/* harmony import */ var _angular_fire_compat_remote_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat/remote-config */ 73721);




















class AuthService {
  constructor(auth, afs, toastr, loadSV, idbSV, router, http, fileSV, remoteConfig) {
    this.auth = auth;
    this.afs = afs;
    this.toastr = toastr;
    this.loadSV = loadSV;
    this.idbSV = idbSV;
    this.router = router;
    this.http = http;
    this.fileSV = fileSV;
    this.remoteConfig = remoteConfig;
    this.basedbName = '';
    this.user = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(undefined);
    this.setup = JSON.parse(sessionStorage.getItem('setup'));
    this.nav = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
    this.subs = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.chunkSize = 200;
  }
  unsubcribe() {
    this.subs.unsubscribe();
  }
  getValueByKey(key) {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.remoteConfig.getString(key).then(value => {
        console.log(value);
        return value;
      }).catch(err => {
        return err;
      });
    })();
  }
  updateLocalDB(path, collectionLocal, dbName, subDbName = '') {
    var _this2 = this;
    return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_11__.Observable(obs => {
      this.loadSV.load(`updateLocalDB` + path);
      if (!navigator.onLine) {
        obs.next(true);
        this.loadSV.loaded(`updateLocalDB` + path);
        return;
      }
      this.idbSV.IDB_InitDB(dbName, subDbName).subscribe( /*#__PURE__*/function () {
        var _ref = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (db) {
          let maxLocal = yield _this2.idbSV.IDB_GetMax(db, collectionLocal);
          let space = 10 * 24 * 60 * 60 * 1000;
          let backupInfo = yield _this2.getLastModify(path);
          if (maxLocal == 0) {
            yield _this2.fileSV.getFileBackup(path).then( /*#__PURE__*/function () {
              var _ref2 = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                console.log(data);
                if (data.length > 0) {
                  _this2.idbSV.IDB_DB_Add(db, collectionLocal, data);
                  obs.next(true);
                } else if (data.length == 0) {
                  _this2.subs = _this2.afs.collection(_this2.basedbName + path, ref => ref.where('dateModify', ">", 0)).valueChanges((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(500)).subscribe({
                    next: docs => {
                      console.log(`updateLocalDB`, _this2.basedbName + path, collectionLocal, docs, maxLocal);
                      _this2.loadSV.loaded(`updateLocalDB` + path);
                      _this2.idbSV.IDB_DB_Add(db, collectionLocal, docs).then(v => {
                        obs.next(true);
                        _this2.backupFileDB(path, db, collectionLocal);
                      });
                    },
                    error: e => {
                      console.error(`updateLocalDB`, e, _this2.basedbName + path, collectionLocal, maxLocal);
                      obs.next(true);
                      _this2._toastWarn('Không có dữ liệu! \n Dữ liệu offline sẽ được hiển thị nếu có');
                      _this2.logger(path, e, 'updateLocalDB ');
                    },
                    complete: () => {
                      _this2.loadSV.loaded(`updateLocalDB` + path);
                      console.log('updateLocalDB complete ', path);
                    }
                  });
                }
              });
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()).catch(err => {
              console.log(err);
            });
          } else {
            _this2.subs = _this2.afs.collection(_this2.basedbName + path, ref => ref.where('dateModify', ">", maxLocal)).valueChanges((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(500)).subscribe({
              next: docs => {
                console.log(`updateLocalDB`, _this2.basedbName + path, collectionLocal, docs, maxLocal);
                _this2.loadSV.loaded(`updateLocalDB` + path);
                _this2.idbSV.IDB_DB_Add(db, collectionLocal, docs);
                _this2.backupFileDB(path, db, collectionLocal);
                obs.next(true);
              },
              error: e => {
                _this2.loadSV.loaded(`updateLocalDB` + path);
                console.error(`updateLocalDB`, _this2.basedbName + path, collectionLocal, maxLocal);
                obs.next(true);
                _this2._toastWarn('Không có dữ liệu! \n Dữ liệu offline sẽ được hiển thị nếu có');
                _this2.logger(path, e, 'updateLocalDB ERR');
              }
            });
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }
  backupFileDB(path, db, collection) {
    var _this3 = this;
    this.idbSV.IDB_DB_GetAll(db, collection).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        let count = data.length;
        let max = yield _this3.idbSV.IDB_GetMax(db, collection);
        _this3.getLastModify(path).then(res => {
          let backupInfo = res;
          if (!backupInfo) {
            return _this3.fileSV.uploadBackupDB(data, path).then(v => {
              _this3.setLastModify(path, count, max);
            });
          }
          if (Date.now() > backupInfo?.time && max > backupInfo.time + 30 * 60 * 1000 && count >= backupInfo.count || backupInfo == undefined) {
            _this3.fileSV.uploadBackupDB(data, path).then(v => {
              _this3.logger('backupFileDB ', count, path);
              _this3.setLastModify(path, count, max);
            });
          }
        });
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  }
  getBackupFile(path, db, collection) {
    var _this4 = this;
    this.fileSV.getFileBackup(path).then( /*#__PURE__*/function () {
      var _ref4 = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this4.loadSV.loaded('getBackupFile() loaded');
        yield _this4.idbSV.IDB_DB_ClearCollection(db, collection);
        yield _this4.idbSV.IDB_DB_Add(db, collection, data);
      });
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()).catch(err => {
      this.loadSV.loaded('getBackupFile() err loaded');
    });
  }
  setLastModify(path, length, lastModify) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let id = path.replace(/\//g, '-');
      let body = {
        _id: id,
        path: path,
        time: Date.now() + 1 * 24 * 60 * 60 * 1000,
        user: _this5.userDir.displayName,
        count: length,
        lastModify: lastModify
      };
      _this5.FBS_set('backup-file', id, body);
    })();
  }
  getLastModify(path) {
    return new Promise((resolve, reject) => {
      let id = path.replace(/\//g, '-');
      this.afs.collection(this.basedbName + `backup-file`).doc(id).get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(res => {
        let body = res.data();
        resolve(body);
      });
    });
  }
  getUser() {
    this.loadSV.load('getUser');
    this.auth.user.subscribe(user => {
      if (!user) return this.getNavFree();
      this.afs.collection(`user`).doc(user.uid).valueChanges().subscribe({
        next: res => {
          this._setOpt(res, 'max');
          console.log(`getUser()`, res);
          this.user.next(res);
          this.userDir = res;
          if (res?.lock) {
            this.logout();
          }
          if (res) {
            this.getNav(res);
          }
          this.loadSV.loaded('getUser');
        },
        error: err => {
          console.log(`getUser()`, err);
          this.loadSV.loaded('getUser');
        },
        complete: () => {
          console.info('complete getUser');
        }
      });
    });
  }
  getNav(user) {
    let nav = [];
    src_assets_nav__WEBPACK_IMPORTED_MODULE_4__.NAV.forEach(el => {
      el.sub.forEach(el2 => {
        if (user.opt[el2.api] >= 1 && el2.link.length > 0 || el2.guest) {
          nav.push(el2);
        }
      });
    });
    nav.filter(function (value, index, array) {
      return array.indexOf(value) == index;
    });
    this.nav.next(nav);
  }
  getNavFree() {
    let nav = [];
    src_assets_nav__WEBPACK_IMPORTED_MODULE_4__.NAV.forEach(el => {
      el.sub.forEach(el2 => {
        if (el2.guest) {
          nav.push(el2);
        }
      });
    });
    nav.filter(function (value, index, array) {
      return array.indexOf(value) == index;
    });
    this.nav.next(nav);
  }
  FBS_set(path, id, item) {
    let body = this.addBaseProperty(item);
    this.loadSV.load('FBS_set');
    console.log(`FBS_set()`, this.basedbName + path, id, body);
    if (!id) {
      return alert('_id không hơp lệ');
    }
    return this.afs.collection(this.basedbName + path).doc(id).set(body).then(v => {
      this.loadSV.loaded('FBS_set');
      this.logger(this.basedbName + path, body, `FBS_set `, true);
      this._toastSuccess();
    }).catch(err => {
      console.log(`FBS_set`, path, err);
      this.loadSV.loaded('FBS_set ');
      this.logger(this.basedbName + path, body, `FBS_set: `, err);
      this._toastErr(err);
    });
  }
  FBS_setMany(path, arr) {
    var _this6 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (arr.length > 1000) return alert('Vui lòng thao tác nhỏ hơn 1000 dữ liệu!');
      _this6.loadSV.load('FBS_setMany');
      let chunkSize = _this6.chunkSize;
      let dos = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        console.log(`chunk`, chunk);
        const batch = _this6.afs.firestore.batch();
        for (let i2 = 0; i2 < chunk.length; i2++) {
          const el = chunk[i2];
          const ref = _this6.afs.firestore.collection(_this6.basedbName + path).doc(el[`_id`]);
          batch.set(ref, _this6.addBaseProperty(el));
        }
        dos.push(batch.commit());
        console.log(`FBS_setMany`, _this6.basedbName + path, chunk);
      }
      return Promise.all(dos).then(values => {
        _this6.logger(_this6.basedbName + path, arr, `FBS_setMany `, true);
        _this6.loadSV.loaded('FBS_setMany');
        console.log(`FBS_setMany()`, _this6.basedbName + path, arr);
      }).catch(error => {
        console.log(`FBS_setMany`, path, error);
        _this6.logger(_this6.basedbName + path, arr, `FBS_setMany ERR `, error);
      });
    })();
  }
  FBS_add(path, obj) {
    return new Promise((resolve, reject) => {
      let body = this.addBaseProperty(obj);
      body['_id'] = (0,uid__WEBPACK_IMPORTED_MODULE_3__.uid)(25);
      console.log(` FBS_add`, this.basedbName + path, body);
      this.afs.collection(this.basedbName + path).doc(body['_id']).set(body).then(val => {
        resolve(body);
        this.logger(this.basedbName + path, body, `FBS_add `, true);
        this._toastSuccess();
      }).catch(err => {
        console.log(`FBS_add`, path, err);
        this._toastErr(err);
        this.logger(this.basedbName + path, body, `FBS_add: ERR `, err);
      });
    });
  }
  FBS_addMany(path, arr) {
    if (arr.length > 1000) return alert('Vui lòng thao tác nhỏ hơn 1000 dữ liệu!');
    this.logger(this.basedbName + path, arr, `FBS_addMany `, true);
    this.loadSV.load('FBS_addMany');
    let chunkSize = this.chunkSize;
    let dos = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      console.log(`chunk`, chunk);
      const batch = this.afs.firestore.batch();
      for (let i2 = 0; i2 < chunk.length; i2++) {
        const el = chunk[i2];
        el._id = el._id ? el._id : (0,uid__WEBPACK_IMPORTED_MODULE_3__.uid)(25);
        let body = this.addBaseProperty(el);
        body.dateModify = Date.now() + i;
        if (!body[`_id`]) {
          return alert('_id không hơp lệ');
        }
        let data = this.Obj_clean(body);
        const ref = this.afs.firestore.collection(this.basedbName + path).doc(data[`_id`]);
        batch.set(ref, data);
      }
      dos.push(batch.commit());
      console.log(`FBS_addMany`, this.basedbName + path, chunk);
    }
    return Promise.all(dos).then(values => {
      this._toastSuccess();
      this.loadSV.loaded('FBS_addMany');
      console.log(`FBS_addMany()`, this.basedbName + path, arr);
      window.location.reload();
    }).catch(error => {
      console.log(`FBS_addMany`, path, error);
      this.logger(this.basedbName + path, arr, `FBS_addMany ERR `, error);
    });
  }
  FBS_update(pathNoId, id, obj) {
    var _this7 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = obj;
      body[`dateModify`] = Date.now();
      _this7.loadSV.load(`FBS_update`);
      if (!id) {
        return alert('_id không hơp lệ');
      }
      console.log(`FBS_update`, _this7.basedbName + pathNoId, id, body);
      yield _this7.afs.collection(_this7.basedbName + pathNoId).doc(id).update(body).then(val => {
        _this7._toastSuccess();
        _this7.loadSV.loaded(`FBS_update`);
        _this7.logger(_this7.basedbName + pathNoId, body, `FBS_update: `, true);
      }).catch(err => {
        _this7.loadSV.loaded(`FBS_update`);
        console.error(`FBS_update`, pathNoId, err);
        _this7.logger(_this7.basedbName + pathNoId, body, `FBS_update: ERR `, err);
        _this7._toastErr(err);
      });
    })();
  }
  FBS_updateMany(path, arr) {
    if (arr.length > 1000) return alert('Vui lòng thao tác nhỏ hơn 1000 dữ liệu!');
    this.logger(this.basedbName + path, arr, `FBS_updateMany `, true);
    this.loadSV.load('FBS_updateMany');
    const now = Date.now();
    let chunkSize = this.chunkSize;
    let dos = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      console.log(`chunk`, chunk);
      const batch = this.afs.firestore.batch();
      for (let i2 = 0; i2 < chunk.length; i2++) {
        const el = chunk[i2];
        let body = el;
        if (!body[`_id`]) {
          return alert('_id không hơp lệ');
        }
        body['dateModify'] = now + i2;
        const ref = this.afs.firestore.collection(this.basedbName + path).doc(body[`_id`]);
        batch.update(ref, body);
      }
      dos.push(batch.commit());
      console.log(`FBS_updateMany`, this.basedbName + path, arr);
    }
    return Promise.all(dos).then(values => {
      this._toastSuccess();
      this.loadSV.loaded('FBS_updateMany');
      console.log(`FBS_updateMany()`, this.basedbName + path, arr);
    }).catch(error => {
      console.error(`FBS_updateMany`, path, error);
      this.loadSV.loaded('FBS_updateMany');
      this.logger(this.basedbName + path, arr, `FBS_updateMany ERR` + error, false);
    });
  }
  FBS_getById(path, id) {
    console.log('FBS_getById', this.basedbName + path, id);
    this.logger(path, id, `FBS_getById`, null);
    return this.afs.collection(this.basedbName + path).doc(id).valueChanges();
  }
  FBS_GetByQuery(path, where, query, value) {
    console.log('FBS_GetByQuery', this.basedbName + path, where + query + value);
    this.logger(path, where + value, 'FBS_GetByQuery ', null);
    return this.afs.collection(path, ref => ref.where(where, query, value).orderBy(where, "desc")).valueChanges();
  }
  FBS_GetAll(path) {
    return this.afs.collection(path).valueChanges();
  }
  FBS_Delete_ID(path, id) {
    this.loadSV.load('FBS_Delete_ID', id);
    this.afs.collection(this.basedbName + path).doc(id).delete().then(v => {
      this.logger(this.basedbName + path, id, `FBS_Delete_ID `, true);
      this.loadSV.loaded('FBS_Delete_ID', id);
      this._toastSuccess();
    }).catch(error => {
      console.error(`FBS_Delete_ID`, path, error);
      this.logger(this.basedbName + path, id, `FBS_Delete_ID ERR `, error);
    });
  }
  FBS_deleteMany(path, arr) {
    if (arr.length > 1000) return alert('Vui lòng thao tác nhỏ hơn 1000 dữ liệu!');
    this.logger(this.basedbName + path, arr, `FBS_updateMany `, true);
    this.loadSV.load('FBS_Delete_ID', path);
    let chunkSize = this.chunkSize;
    let dos = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      console.log(`chunk`, chunk);
      const batch = this.afs.firestore.batch();
      for (let i2 = 0; i2 < chunk.length; i2++) {
        const el = chunk[i2];
        const ref = this.afs.firestore.collection(this.basedbName + path).doc(el._id);
        batch.delete(ref);
      }
      dos.push(batch.commit());
      console.log(`FBS_updateMany`, this.basedbName + path, arr);
    }
    Promise.all(dos).then(values => {
      this._toastSuccess();
      this.loadSV.loaded('FBS_Delete_ID', path);
      console.log(`FBS_updateMany()`, this.basedbName + path, arr);
    }).catch(error => {
      console.error(`FBS_deleteMany`, path, error);
      this.loadSV.loaded('FBS_Delete_ID', path);
      this.logger(this.basedbName + path, arr, `FBS_updateMany ERR` + error, false);
    });
  }
  FBS_Disable_ID(path, id) {
    var _this8 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(`FBS_Disable_ID()`, _this8.basedbName + path, id);
      const ok = confirm('Bạn muốn xóa?');
      if (!ok) return;
      _this8.loadSV.loaded('FBS_Disable_ID', path);
      _this8.afs.collection(_this8.basedbName + path).doc(id).update({
        status: 0,
        dateModify: Date.now()
      }).then(v => {
        console.log(v);
        _this8.logger(_this8.basedbName + path, id, `FBS_Delete_ID `, true);
        _this8.loadSV.loaded('FBS_Disable_ID', path);
      }).catch(error => {
        console.error(`FBS_Disable_ID`, path, error);
        _this8.loadSV.loaded('FBS_Disable_ID', path);
        _this8.logger(_this8.basedbName + path, id, `FBS_Delete_ID ERR`, error);
      });
    })();
  }
  FBS_DisableMany(path, arr) {
    this.logger(this.basedbName + path, arr, `FBS_DisableMany `, true);
    this.loadSV.load('FBS_DisableMany', path);
    let chunkSize = this.chunkSize;
    let dos = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      console.log(`chunk`, chunk);
      const batch = this.afs.firestore.batch();
      for (let i2 = 0; i2 < chunk.length; i2++) {
        const el = chunk[i2];
        const ref = this.afs.firestore.collection(this.basedbName + path).doc(el._id);
        batch.update(ref, {
          status: 0
        });
      }
      dos.push(batch.commit());
      console.log(`FBS_DisableMany`, this.basedbName + path, arr);
    }
    Promise.all(dos).then(values => {
      this._toastSuccess();
      this.logger(this.basedbName + path, arr, `FBS_DisableMany `, true);
      this.loadSV.loaded('FBS_DisableMany', path);
      console.log(`FBS_updateMany()`, this.basedbName + path, arr);
    }).catch(error => {
      this.loadSV.loaded('FBS_DisableMany', path);
      console.error(`FBS_DisableMany`, path, error);
      this.logger(this.basedbName + path, arr, `FBS_DisableMany ERR` + error, false);
    });
  }
  logger(api, data, method, error = true) {}
  loginAuthGoogle() {
    let provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
    provider.addScope('email');
    this.auth.idTokenResult.subscribe;
    this.auth.signInWithPopup(provider).then(result => {
      console.log(result);
      this.addNewUser(result);
    }, error => {
      this.toastr.error('Vui lòng thử lại');
    });
  }
  loginPhone(phone) {
    var applicationVerifier = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.RecaptchaVerifier('recaptcha-container');
    console.log(phone, applicationVerifier);
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithPhoneNumber(phone, applicationVerifier).then(confirmationResult => {
      console.log(confirmationResult);
      window.step = 2;
      let verificationCode = window.prompt('Vui lòng nhập mã xác minh');
      applicationVerifier.clear();
      return confirmationResult.confirm(verificationCode).then(result => {
        this.logger('Login', result, 'Login');
        console.log(result);
        this.addNewUser(result);
      }).catch(err => {
        console.log(err);
        this._toastErr('Lỗi xác thực');
        this.reload();
      });
    }).catch(error => {
      alert('Không hợp lệ!');
      switch (error) {
        default:
          ;
          break;
      }
      applicationVerifier.clear();
      console.log(error);
    });
  }
  loginAuthFacebook() {
    var _this9 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.FacebookAuthProvider();
      yield _this9.auth.signInWithPopup(provider).then(result => {
        _this9.addNewUser(result);
      }, error => {
        _this9.toastr.error('Vui lòng thử lại');
      });
    })();
  }
  customToken() {
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithCustomToken)(auth, '').then(userCredential => {
      const user = userCredential.user;
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  logout() {
    alert('Đăng xuất V1');
    localStorage.clear();
    this.idbSV.IDB_DB_DeleteAllDB([`ban-hang${this.userDir.store}`]);
    this.auth.signOut();
  }
  checkPer(api, level = 1) {
    let user = this.userDir;
    if (user == undefined || user == null) return false;
    return user.opt[api] >= level ? true : false;
  }
  addNewUser(auth) {
    let body = {
      _id: auth.user.uid,
      phoneNumber: auth.user.phoneNumber,
      opt: {
        "trac-nghiem": 4
      },
      unit: auth.user.phoneNumber,
      avatar: auth.user.photoURL,
      provider: auth.user.providerId,
      store: auth.user.phoneNumber,
      storeEpx: Date.now() + 7 * 24 * 60 * 60 * 1000,
      lock: false,
      dateModify: Date.now(),
      status: 1
    };
    console.log(`addNewUser `, body);
    localStorage.setItem('avatar', auth.user.photoURL);
    this.afs.collection(`user`).doc(auth.user.uid).get().subscribe(res => {
      if (!res.exists) {
        window.step = 3;
        let fullName = window.prompt('Vui lòng nhập họ và tên');
        while (fullName.length < 3) {
          alert('Không hợp lệ');
          fullName = window.prompt('Vui lòng nhập họ và tên');
        }
        body.fullName = fullName;
        this.afs.collection('user').doc(auth.user.uid).set(body).then(v => {
          this.logger('addNewUser ', body, 'addNewUser', null);
        }).catch(err => {
          this.logger('addNewUser', body, 'add new', err);
        });
      }
      this.logger(`login `, auth, ' login');
    });
  }
  exportJson(data, filename = `${Date.now()}`) {
    let dataStr = JSON.stringify(data);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    let exportFileDefaultName = filename + '.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }
  _toastErr(msg = '') {
    this.toastr.error(msg);
    if (msg == 'Missing or insufficient permissions') {
      this.toastr.error('Bạn chưa được cấp quyền truy cập!');
    }
  }
  _toastSuccess(msg = '') {
    this.toastr.success(msg, 'Thành công');
  }
  _toastWarn(msg = '') {
    this.toastr.warning(msg, 'Cảnh báo');
  }
  _setOpt(obj, module) {
    this.idbSV.IDB_InitDB('firebase-local').subscribe(db => {
      let enc = Buffer.from(JSON.stringify(obj)).toString('base64');
      let body = {
        _id: obj._id + module,
        module: module,
        key: enc,
        status: 1
      };
      this.idbSV.IDB_DB_Add(db, 'any', body);
    });
  }
  _getOpt(module = '') {
    return new Promise(resolve => {
      this.idbSV.IDB_InitDB('firebase-local').subscribe(db => {
        let data = [];
        let one = null;
        this.idbSV.IDB_DB_GetAll(db, 'any').subscribe(res => {
          for (let i = 0; i < res.length; i++) {
            const el = res[i]['key'];
            let body = JSON.parse(Buffer.from(el, 'base64').toString());
            res[i]['module'] == module ? one = body : null;
            data.push(body);
          }
          if (module.length > 0 && one) {
            resolve(one);
          } else if (module.length == 0 && data.length > 0) {
            resolve(data);
          }
        });
      });
    });
  }
  addBaseProperty(body) {
    delete body['keyword'];
    body['sync'] = navigator.onLine ? 1 : 0;
    body['dateModify'] = Date.now();
    body['status'] = 1;
    return body;
  }
  Obj_clean(Obj) {
    for (const [key, value] of Object.entries(Obj)) {
      if (value === null || value === "" || Number.isNaN(value) || value == undefined) {
        delete Obj[key];
      }
    }
    return Obj;
  }
  reload() {
    var _this0 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url = '') {
      _this0.loadSV.clear();
      let curentUrl = _this0.router.url;
      yield _this0.router.navigate(["/"]);
      console.log(`reload `, url, curentUrl);
      return url.length > 0 ? _this0.router.navigate([`${url}`]) : _this0.router.navigate([`${curentUrl}`]);
    }).apply(this, arguments);
  }
  createKeyWord(obj) {
    delete obj["canEdit"];
    delete obj["keyWord"];
    delete obj["sync"];
    delete obj["status"];
    delete obj["dateModify"];
    delete obj["__v"];
    const x = Object.values(obj);
    let x2 = this.removeAccents(x.join(" "));
    return x2.replace(/object/g, '');
  }
  removeAccents(str) {
    if (!str) return "";
    str = str.trim();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/[^0-9a-z:àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, "");
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
  }
  removeDupArr(arr) {
    return arr.filter(function (value, index, array) {
      return array.indexOf(value) == index;
    });
  }
  Arr_MaxValue(array, key = "dateModify") {
    const arr = array.map(o => {
      return o[key];
    });
    const max = Math.max(...arr);
    console.log('max', max);
    return isFinite(max) ? max : 0;
  }
  backupToMongoDB(api, data) {
    this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + api, data).subscribe(res => {});
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_indexeddb_service__WEBPACK_IMPORTED_MODULE_7__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_fire_storage_service__WEBPACK_IMPORTED_MODULE_8__.FireStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_fire_compat_remote_config__WEBPACK_IMPORTED_MODULE_20__.AngularFireRemoteConfig));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 57090:
/*!************************************************!*\
  !*** ./src/app/share/services/http.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpService: () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71985);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 33726);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 70152);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 23294);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 93207);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 96354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 12498);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 99437);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ 45073);
/* harmony import */ var _authV2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authV2.service */ 50532);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/site/loading/loading.service */ 97230);
/* harmony import */ var _crypt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crypt.service */ 50962);
/* harmony import */ var _plus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plus.service */ 22014);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 30003);
/* harmony import */ var _indexeddb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./indexeddb.service */ 90657);














class HttpService {
  constructor(http, loadSV, cryptSV, plus, afs, idbSV) {
    this.http = http;
    this.loadSV = loadSV;
    this.cryptSV = cryptSV;
    this.plus = plus;
    this.afs = afs;
    this.idbSV = idbSV;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
  }
  unsubcribe() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.subs.unsubscribe();
      _this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    })();
  }
  logSheet(api, data) {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.http.post(_this2.getApiUrl('logger'), {
        api: api,
        data: data
      }, _this2.getHeader()).subscribe();
    })();
  }
  getUser() {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this3._getOpt(_authV2_service__WEBPACK_IMPORTED_MODULE_2__.ROLE.USER);
    })();
  }
  getHeader() {
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return httpOptions;
  }
  getApiUrl(app) {
    if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production) return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}${app}/`;
    const apilink = JSON.parse(localStorage.getItem('remote'))['apiUrl'] || src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
    return `${apilink}${app}/`;
  }
  getOutServer(link) {
    return axios__WEBPACK_IMPORTED_MODULE_10__["default"].get(link);
  }
  postOutServer(link, body) {
    return axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(link, body);
  }
  updateLocalDB(db, api, fileName) {
    var _this4 = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_11__.Observable(obs => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(window, 'offline').subscribe(online => {
        this.plus.alertWarning('Mất kết nối\nBạn đang xem dữ liệu offline!');
        obs.next(true);
        return;
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(window, 'online').subscribe(online => {
        this.plus.alertSuccess('Đã kết nối!');
        window.location.reload();
      });
      if (!window[fileName]) {
        window[fileName] = Date.now();
        console.log("%cGET updateLocalDB -> " + fileName, "font-style: italic; color:Blue");
      } else {
        return;
      }
      window[api + 'max'] = 0;
      this.loadSV.load(`updateLocalDB` + fileName);
      this.subs.add(this.afs.collection(`updateDB`).doc(fileName).valueChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)()).subscribe( /*#__PURE__*/function () {
        var _ref = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (lastFBS) {
          console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx', db, api, fileName);
          const max = yield _this4.idbSV.IDB_GetMax(db, api);
          if (!lastFBS && max == 0) {
            _this4.afs.collection(`updateDB`).doc(fileName).set({
              lastUpdate: 0
            }, {
              merge: true
            });
            return obs.next(true);
          }
          window[api + 'max'] = max;
          if (lastFBS.lastUpdate == window[api + 'max'] || lastFBS.lastUpdate == window[api + 'lastget']) return obs.next(true);
          console.log(`updateLocalDB`, api, fileName, lastFBS);
          if (lastFBS.lastUpdate > window[api + 'max']) {
            while (lastFBS.lastUpdate > window[api + 'max']) {
              const max = yield _this4.idbSV.IDB_GetMax(db, api);
              const url = api + '/token/' + max;
              window[api + 'max'] = max;
              const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.lastValueFrom)(_this4.get(url));
              window[api + 'lastget'] = max;
              if (data.data.length == 0) {
                console.log(`next in data.length == 0 && break`);
                break;
              }
              console.log("%cGET updateLocalDB -> " + new Date(max), "font-style: italic; color:green");
              console.log(new Date(_this4.plus.Arr_MaxValue(data.data)));
              yield _this4.idbSV.IDB_DB_Add(db, api, data.data);
              console.log(`next in While`);
            }
          }
          obs.next(true);
          _this4.loadSV.loaded('updateLocalDB' + fileName);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
      this.loadSV.loaded('updateLocalDB' + fileName);
    });
  }
  get(api, fb = false) {
    console.log("%cGET -> " + api, "font-style: italic; color:green");
    return this.http.get(this.getApiUrl(api), this.getHeader()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(response => {
      this.loadSV.loaded('get' + api);
      return response;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(error => {
      this.logger(api, 'Get', 'Get', error);
      this.loadSV.loaded('get' + api);
      throw error;
    }));
  }
  post(api, body, fileName, alert = true, loadding = true) {
    console.log("%cPOST -> " + api, "font-style: italic; color:green", body);
    this.loadSV.load(`httpPost` + fileName);
    return this.http.post(this.getApiUrl(api), body, this.getHeader()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(response => {
      window[api + 'max'] = 0;
      loadding ? this.loadSV.loaded(`httpPost` + fileName) : null;
      this._handleSuccess(alert);
      return response;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(error => {
      console.log(error);
      this.logger(api, body, 'post ' + fileName, error);
      this.plus.alertError(error['err']);
      this.loadSV.loaded(`httpPost` + fileName);
      throw error;
    }));
  }
  put(api, body, fileName, toast = true) {
    this.loadSV.load(`httpPut`, fileName);
    console.log("%cPUT -> " + api, "font-style: italic; color:green", body);
    return this.http.put(this.getApiUrl(api), body, this.getHeader()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(response => {
      window[api + 'max'] = 0;
      this._handleSuccess(toast);
      this.logger(api, body, 'put ' + fileName, false);
      this.loadSV.loaded(`httpPut`, fileName);
      return response;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(error => {
      this.logger(api, body, 'put ' + fileName, error);
      this.loadSV.loaded(`httpPut`, fileName);
      if (error.status == 429) {
        alert("Thiết bị của bạn có truy cập bất thường!");
        window.location.reload();
      }
      if (error.status == 400) {
        this.plus.alertError(error.error.err);
      }
      if (error.status == 403) {
        alert(error["err"]);
        window.location.reload();
      }
      throw error;
    }));
  }
  delete(api, id, fileName, toast = true) {
    console.log("%cDELETE -> " + api + "/" + id, "font-style: italic; color:red");
    this.loadSV.load('delete', fileName);
    return this.http.delete(this.getApiUrl(api + "/" + id), this.getHeader()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(response => {
      window[api + 'max'] = 0;
      this.loadSV.loaded('delete', fileName);
      this._handleSuccess(toast);
      this.logger(api, id, 'delete ' + fileName, false);
      return response;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(error => {
      this._handleError(error);
      this.loadSV.loaded('delete', fileName);
      this.logger(api, id, 'delete ' + fileName, error);
      throw 'error in source. Details: ' + error;
    }));
  }
  disable(api, item, fileName, toast = true) {
    console.log("%Disable -> " + api + "/" + item, "font-style: italic; color:red");
    const date = Date.now();
    this.loadSV.load('disable', fileName);
    return new Promise((reslove, reject) => {
      this.http.delete(this.getApiUrl(api) + item._id + "/token/" + date, this.getHeader()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(response => {
        window[api + 'max'] = 0;
        this._handleSuccess(toast);
        this.loadSV.loaded('disable', fileName);
        this.logger(api, item, 'disable ' + fileName, false);
        return response;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(error => {
        this.logger(api, item, 'disable ' + fileName, error);
        this.loadSV.loaded('disable', fileName);
        this._handleError(error);
        throw 'Error httpDisable. Details: ' + error;
      })).subscribe(res => {
        if (res !== undefined) {
          console.log("Delete", res);
          reslove(date);
        }
      });
    });
  }
  _handleError(error) {
    if (error.status == 429) {
      alert("Thiết bị của bạn có truy cập bất thường!");
      window.location.reload();
    }
    if (error.status == 400) {
      this.plus.alertError(error.error.err);
    }
    if (error.status == 401 || error.status == 500) {
      alert("Lỗi xác thực tài khoản!");
      this.plus.alertError(error.error.err);
    }
    if (error.status == 403) {
      alert(error["err"]);
      window.location.reload();
    }
  }
  _handleSuccess(alert = true) {
    if (alert) {
      this.plus.alertSuccess('Thành công');
    }
  }
  convertUpdatebyKey(arr) {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
    }
  }
  logger(api, data, method, error) {
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return;
      const body = {
        _id: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY HH:mm:ss.SSS'),
        idObj: Array.isArray(data) ? JSON.stringify(data.map(x => x._id)) : data._id,
        data: JSON.stringify(data).slice(0, 49000),
        method: method + ' - ' + api,
        dateModify: Date.now(),
        user: window.max.fullName,
        version: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.appVersion + '-' + window.WebGLTrans,
        device: window.WebGLTrans
      };
    })();
  }
  guid() {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
  }
  geneKeyWord(...val) {
    return val.join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
  }
  _getOpt(module = '') {
    return new Promise(resolve => {
      this.idbSV.IDB_InitDB('firebase-local').subscribe(db => {
        const data = [];
        let one = null;
        this.idbSV.IDB_DB_GetAll(db, 'any').subscribe(res => {
          for (let i = 0; i < res.length; i++) {
            const el = res[i]['key'];
            const body = JSON.parse(Buffer.from(el, 'base64').toString());
            res[i]['module'] == module ? one = body : null;
            data.push(body);
          }
          if (module.length > 0 && one) {
            resolve(one);
          } else if (module.length == 0 && data.length > 0) {
            resolve(data);
          }
        });
      });
    });
  }
  static {
    this.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](src_app_site_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_crypt_service__WEBPACK_IMPORTED_MODULE_5__.CryptService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_plus_service__WEBPACK_IMPORTED_MODULE_6__.PlusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_20__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_indexeddb_service__WEBPACK_IMPORTED_MODULE_7__.IndexeddbService));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);