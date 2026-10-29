"use strict";
(self["webpackChunkdlxl"] = self["webpackChunkdlxl"] || []).push([["src_app_player_player_module_ts"],{

/***/ 30488:
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerComponent: () => (/* binding */ PlayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.service */ 88355);
/* harmony import */ var _share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/services/pouchdb.service */ 32939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);








function PlayerComponent_ng_container_10_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 35);
  }
  if (rf & 2) {
    const currentSong_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", currentSong_r5.coverUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "\u1EA2nh b\u00ECa " + currentSong_r5.title);
  }
}
function PlayerComponent_ng_container_10_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "music_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PlayerComponent_ng_container_10_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currentSong_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00B7 ", currentSong_r5.album, "");
  }
}
function PlayerComponent_ng_container_10_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_ng_container_10_button_49_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const currentSong_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.downloadOfflineAudio(currentSong_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PlayerComponent_ng_container_10_section_54_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00B7 C\u00F2n ", ctx_r17.formatTime(ctx_r17.sleepTimerRemainingSeconds), "");
  }
}
function PlayerComponent_ng_container_10_section_54_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_ng_container_10_section_54_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.cancelSleepTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "H\u1EE7y h\u1EB9n gi\u1EDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PlayerComponent_ng_container_10_section_54_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_ng_container_10_section_54_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.startSleepTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " B\u1EAFt \u0111\u1EA7u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r19.sleepTimerActive);
  }
}
function PlayerComponent_ng_container_10_section_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 38)(1, "div", 39)(2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "H\u1EB9n gi\u1EDD t\u1EAFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PlayerComponent_ng_container_10_section_54_span_5_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PlayerComponent_ng_container_10_section_54_button_6_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 41)(8, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PlayerComponent_ng_container_10_section_54_Template_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.sleepTimerMinutes = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "5 ph\u00FAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "10 ph\u00FAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "15 ph\u00FAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "30 ph\u00FAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "45 ph\u00FAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "60 ph\u00FAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PlayerComponent_ng_container_10_section_54_button_21_Template, 2, 1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.sleepTimerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.sleepTimerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r11.sleepTimerMinutes)("disabled", ctx_r11.sleepTimerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.sleepTimerRemainingSeconds == 0);
  }
}
const _c0 = function (a0) {
  return {
    "rounded-circle rotate": a0
  };
};
function PlayerComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15)(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0110ANG PH\u00C1T");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span")(7, "span")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PlayerComponent_ng_container_10_img_12_Template, 1, 2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PlayerComponent_ng_container_10_ng_template_13_Template, 3, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 20)(16, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PlayerComponent_ng_container_10_span_20_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 22)(22, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PlayerComponent_ng_container_10_Template_input_input_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.seek($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 24)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 25)(34, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_ng_container_10_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.toggleShuffle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "shuffle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_ng_container_10_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "skip_previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_ng_container_10_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.togglePlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_ng_container_10_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "skip_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, PlayerComponent_ng_container_10_button_49_Template, 3, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_ng_container_10_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.timerPanelOpen = !ctx_r32.timerPanelOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "bedtime");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, PlayerComponent_ng_container_10_section_54_Template, 22, 11, "section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 33)(56, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "volume_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PlayerComponent_ng_container_10_Template_input_input_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.setVolume($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "volume_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const currentSong_r5 = ctx.ngIf;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 22, ctx_r0.isPlaying$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("playing", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 24, ctx_r0.isPlaying$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](46, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 26, ctx_r0.isPlaying$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", currentSong_r5.coverUrl)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](currentSong_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](currentSong_r5.artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", currentSong_r5.album);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 28, ctx_r0.duration$) || 0)("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 30, ctx_r0.currentTime$) || 0)("disabled", !(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 32, ctx_r0.duration$) || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatTime(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 34, ctx_r0.currentTime$) || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatTime(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 36, ctx_r0.duration$) || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 38, ctx_r0.isShuffle$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 40, ctx_r0.isPlaying$) ? "T\u1EA1m d\u1EEBng" : "Ph\u00E1t nh\u1EA1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 42, ctx_r0.isPlaying$) ? "pause" : "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 44, ctx_r0.playerService.isCurrentSongOffline$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.timerPanelOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.volume);
  }
}
function PlayerComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "library_music");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Ch\u01B0a c\u00F3 b\u00E0i h\u00E1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Danh s\u00E1ch ph\u00E1t hi\u1EC7n ch\u01B0a c\u00F3 n\u1ED9i dung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PlayerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "queue_music");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Ch\u01B0a c\u00F3 b\u00E0i h\u00E1t trong danh s\u00E1ch.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PlayerComponent_button_25_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "graphic_eq");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PlayerComponent_button_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((i_r35 + 1).toString().padStart(2, "0"));
  }
}
function PlayerComponent_button_25_img_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 59);
  }
  if (rf & 2) {
    const song_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", song_r34.coverUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "");
  }
}
function PlayerComponent_button_25_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "music_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PlayerComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_button_25_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44);
      const song_r34 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r43.play(song_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PlayerComponent_button_25_mat_icon_3_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PlayerComponent_button_25_span_6_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PlayerComponent_button_25_img_10_Template, 1, 2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PlayerComponent_button_25_ng_template_11_Template, 2, 0, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 55)(14, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const song_r34 = ctx.$implicit;
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("current", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 8, ctx_r4.currentSong$)) == null ? null : tmp_0_0._id) === song_r34._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, ctx_r4.currentSong$)) == null ? null : tmp_1_0._id) === song_r34._id && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, ctx_r4.isPlaying$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 14, ctx_r4.currentSong$)) == null ? null : tmp_2_0._id) !== song_r34._id || !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 16, ctx_r4.isPlaying$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", song_r34.coverUrl)("ngIfElse", _r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](song_r34.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](song_r34.artist);
  }
}
class PlayerComponent {
  constructor(playerService, pouchDBSV) {
    this.playerService = playerService;
    this.pouchDBSV = pouchDBSV;
    this.currentSong$ = this.playerService.currentSong$;
    this.playlist = [];
    this.volume = 1;
    this.timerPanelOpen = false;
    this.sleepTimerMinutes = 15;
    this.sleepTimerRemainingSeconds = 0;
    this.sleepTimerActive = false;
    this.sleepTimerInterval = null;
    this.currentSong$ = this.playerService.currentSong$;
    this.isPlaying$ = this.playerService.isPlaying$;
    this.isShuffle$ = this.playerService.isShuffle$;
    this.currentTime$ = this.playerService.currentTime$;
    this.duration$ = this.playerService.duration$;
  }
  ngOnInit() {
    this.playerService.updateList();
    this.playerService.getPlaylist().then(res => {
      this.playlist = res;
      if (this.playlist.length > 0 && !this.playerService.isPlayingSubject.value) {
        this.toggleShuffle();
        this.playerService.playSong(this.playlist[0]);
      }
    }).catch(error => {
      console.error('Không thể tải danh sách phát:', error);
    });
  }
  ngOnDestroy() {
    this.clearSleepTimer();
  }
  play(song) {
    this.playerService.playSong(song);
  }
  downloadOfflineAudio(song) {
    this.playerService.downloadOfflineAudio(song).catch(error => {
      console.error('Không thể tải audio đã lưu offline:', error);
    });
  }
  togglePlay() {
    this.playerService.togglePlay();
  }
  next() {
    this.playerService.next();
  }
  previous() {
    this.playerService.previous();
  }
  toggleShuffle() {
    this.playerService.toggleShuffle();
    this.playlist = [...this.playerService.playlist];
  }
  seek(event) {
    const value = Number(event.target.value);
    this.playerService.seek(value);
  }
  setVolume(event) {
    this.volume = Number(event.target.value);
    this.playerService.setVolume(this.volume);
  }
  startSleepTimer() {
    this.clearSleepTimer();
    this.sleepTimerRemainingSeconds = this.sleepTimerMinutes * 60;
    this.sleepTimerActive = true;
    this.sleepTimerInterval = setInterval(() => {
      this.sleepTimerRemainingSeconds -= 1;
      if (this.sleepTimerRemainingSeconds <= 0) {
        this.clearSleepTimer();
        this.playerService.pause();
      }
    }, 1000);
  }
  cancelSleepTimer() {
    this.clearSleepTimer();
    this.sleepTimerRemainingSeconds = 0;
  }
  formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return '0:00';
    }
    const totalSeconds = Math.floor(seconds);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  trackBySongId(_index, song) {
    return song._id;
  }
  clearSleepTimer() {
    if (this.sleepTimerInterval !== null) {
      clearInterval(this.sleepTimerInterval);
      this.sleepTimerInterval = null;
    }
    this.sleepTimerActive = false;
  }
  static {
    this.ɵfac = function PlayerComponent_Factory(t) {
      return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_player_service__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_1__.PouchdbService));
    };
  }
  static {
    this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PlayerComponent,
      selectors: [["app-player"]],
      decls: 26,
      vars: 8,
      consts: [[1, "player-page"], [1, "page-header"], ["aria-label", "Tr\u00ECnh ph\u00E1t nh\u1EA1c", 1, "brand"], [1, "brand-icon"], [1, "player-layout"], [1, "now-playing", "panel"], [4, "ngIf", "ngIfElse"], ["emptyPlayer", ""], [1, "playlist-panel", "panel"], [1, "playlist-heading"], [1, "eyebrow"], [1, "song-count"], [1, "playlist-list"], ["class", "playlist-empty", 4, "ngIf"], ["class", "song-item", 3, "current", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "section-heading"], [1, "playing-indicator"], [1, "cover-wrap", "rounded-circle", "rotate", 3, "ngClass"], ["class", "cover-image", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["coverPlaceholder", ""], [1, "song-info"], [4, "ngIf"], [1, "progress-section"], ["type", "range", "min", "0", "aria-label", "V\u1ECB tr\u00ED ph\u00E1t", 1, "progress-slider", 3, "max", "value", "disabled", "input"], [1, "time-labels"], [1, "player-controls"], ["mat-icon-button", "", "aria-label", "Tr\u1ED9n b\u00E0i", "matTooltip", "Tr\u1ED9n b\u00E0i", 1, "secondary-control", 3, "click"], ["mat-icon-button", "", "aria-label", "B\u00E0i tr\u01B0\u1EDBc", 1, "secondary-control", 3, "click"], ["mat-fab", "", "color", "primary", 1, "play-control", 3, "click"], ["mat-icon-button", "", "aria-label", "B\u00E0i ti\u1EBFp theo", 1, "secondary-control", 3, "click"], ["mat-icon-button", "", "class", "secondary-control", "aria-label", "T\u1EA3i b\u00E0i h\u00E1t \u0111\u00E3 l\u01B0u offline", "matTooltip", "T\u1EA3i b\u00E0i h\u00E1t \u0111\u00E3 l\u01B0u offline", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "H\u1EB9n gi\u1EDD t\u1EAFt", "matTooltip", "H\u1EB9n gi\u1EDD t\u1EAFt", 1, "secondary-control", 3, "click"], ["class", "timer-panel", 4, "ngIf"], [1, "volume-control"], ["type", "range", "min", "0", "max", "1", "step", "0.01", "aria-label", "\u00C2m l\u01B0\u1EE3ng", 3, "value", "input"], [1, "cover-image", 3, "src", "alt"], [1, "cover-placeholder"], ["mat-icon-button", "", "aria-label", "T\u1EA3i b\u00E0i h\u00E1t \u0111\u00E3 l\u01B0u offline", "matTooltip", "T\u1EA3i b\u00E0i h\u00E1t \u0111\u00E3 l\u01B0u offline", 1, "secondary-control", 3, "click"], [1, "timer-panel"], [1, "timer-heading"], ["mat-button", "", "class", "cancel-timer", 3, "click", 4, "ngIf"], [1, "timer-actions"], ["aria-label", "Th\u1EDDi gian h\u1EB9n t\u1EAFt", 3, "ngModel", "disabled", "ngModelChange"], [3, "ngValue"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 1, "cancel-timer", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "empty-player"], [1, "empty-icon"], [1, "playlist-empty"], [1, "song-item", 3, "click"], [1, "song-number"], [1, "song-thumb"], [3, "src", "alt", 4, "ngIf", "ngIfElse"], ["songPlaceholder", ""], [1, "song-copy"], [1, "song-title"], [1, "song-artist"], [1, "song-play-icon"], [3, "src", "alt"]],
      template: function PlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "header", 1)(2, "a", 2)(3, "span", 3)(4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "graphic_eq");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00C2m nh\u1EA1c c\u1EE7a b\u1EA1n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "section", 4)(9, "section", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PlayerComponent_ng_container_10_Template, 61, 48, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PlayerComponent_ng_template_12_Template, 8, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "aside", 8)(15, "div", 9)(16, "div")(17, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "TH\u01AF VI\u1EC6N");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Danh s\u00E1ch ph\u00E1t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, PlayerComponent_div_24_Template, 5, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, PlayerComponent_button_25_Template, 20, 18, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 6, ctx.currentSong$))("ngIfElse", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.playlist.length, " b\u00E0i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.playlist.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.playlist)("ngForTrackBy", ctx.trackBySongId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  max-height: 100%;\n  color: #f2f4f1;\n  background: #101411;\n  font-family: inherit;\n}\n\n\n\n.rounded-circle[_ngcontent-%COMP%] {\n  \n\n\n\n  animation: spin 15s linear infinite !important;\n}\n\n.player-page[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  height: 100dvh;\n  min-height: 0;\n  padding: 20px clamp(20px, 5vw, 76px) 28px;\n  background:\n    radial-gradient(ellipse at 27% 0%, rgba(91, 133, 91, 0.16), transparent 42%),\n    #101411;\n}\n\n.page-header[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%], .playlist-heading[_ngcontent-%COMP%], .player-controls[_ngcontent-%COMP%], .volume-control[_ngcontent-%COMP%], .time-labels[_ngcontent-%COMP%], .timer-heading[_ngcontent-%COMP%], .timer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  justify-content: space-between;\n  max-width: 1240px;\n  margin: 0 auto 20px;\n}\n\n.brand[_ngcontent-%COMP%] {\n  gap: 11px;\n  color: #f4f6f2;\n  font-size: 15px;\n  font-weight: 650;\n  letter-spacing: 0.01em;\n}\n\n.brand-icon[_ngcontent-%COMP%], .empty-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  color: #b9e4a8;\n  background: rgba(151, 207, 127, 0.13);\n}\n\n.header-label[_ngcontent-%COMP%], .eyebrow[_ngcontent-%COMP%] {\n  color: #89928a;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n}\n\n.player-layout[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 1 1 auto;\n  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);\n  grid-template-rows: minmax(0, 1fr);\n  gap: 22px;\n  min-height: 0;\n  max-width: 1240px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  border: 1px solid rgba(255, 255, 255, 0.065);\n  border-radius: 22px;\n  background: rgba(26, 31, 27, 0.92);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n\n.now-playing[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 0;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  padding: 22px clamp(22px, 4vw, 54px) 20px;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 14px;\n}\n\n.playing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  height: 16px;\n}\n\n.playing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 5px;\n  border-radius: 4px;\n  background: #91a092;\n}\n\n.playing-indicator.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #a5d88d;\n  animation: _ngcontent-%COMP%_equalize 0.8s ease-in-out infinite alternate;\n}\n\n.playing-indicator.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  height: 12px;\n  animation-delay: 0.2s;\n}\n\n.playing-indicator.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  height: 8px;\n  animation-delay: 0.4s;\n}\n\n.cover-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  width: min(100%, 350px, 37vh);\n  aspect-ratio: 1;\n  overflow: hidden;\n  border: 8px solid #202821;\n  border-radius: 50%;\n  background: radial-gradient(circle, #53664e 0 4px, #263329 5px 100%);\n  box-shadow: 0 24px 55px rgba(0, 0, 0, 0.34);\n}\n\n.cover-wrap[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 10px;\n  border: 2px solid rgba(242, 244, 241, 0.8);\n  border-radius: 50%;\n  background: #263329;\n  content: '';\n  transform: translate(-50%, -50%);\n}\n\n.cover-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.cover-wrap.playing[_ngcontent-%COMP%]   .cover-image[_ngcontent-%COMP%], .cover-wrap.playing[_ngcontent-%COMP%]   .cover-placeholder[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin-cover 8s linear infinite;\n}\n\n.cover-placeholder[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 100%;\n  height: 100%;\n  color: rgba(218, 238, 208, 0.65);\n}\n\n.cover-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  font-size: 84px;\n}\n\n.song-info[_ngcontent-%COMP%] {\n  width: min(100%, 430px);\n  margin-top: 16px;\n  text-align: center;\n}\n\n.song-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: #f5f6f3;\n  font-size: clamp(21px, 2.3vw, 28px);\n  font-weight: 650;\n  line-height: 1.25;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.song-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 8px 0 0;\n  color: #9ba39b;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.progress-section[_ngcontent-%COMP%] {\n  width: min(100%, 430px);\n  margin-top: 16px;\n}\n\n.progress-slider[_ngcontent-%COMP%], .volume-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 5px;\n  margin: 0;\n  padding: 2px;\n  \n\n  border-radius: 999px;\n  accent-color: #a5d88d;\n  cursor: pointer;\n}\n\n.progress-slider[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\n.time-labels[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-top: 8px;\n  color: #89928a;\n  font-size: 11px;\n  font-variant-numeric: tabular-nums;\n}\n\n.player-controls[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: clamp(12px, 2.5vw, 28px);\n  margin-top: 14px;\n}\n\n.secondary-control[_ngcontent-%COMP%] {\n  color: #d1d8d0;\n}\n\n.secondary-control.selected[_ngcontent-%COMP%] {\n  color: #a5d88d;\n}\n\n.play-control[_ngcontent-%COMP%] {\n  color: #172015 !important;\n  background: #a5d88d !important;\n  box-shadow: 0 5px 22px rgba(144, 203, 120, 0.2);\n}\n\n.play-control[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.timer-panel[_ngcontent-%COMP%] {\n  width: min(100%, 430px);\n  margin-top: 14px;\n  padding: 14px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  background: rgba(11, 15, 12, 0.42);\n}\n\n.timer-heading[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 12px;\n  color: #dce4da;\n  font-size: 13px;\n}\n\n.timer-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a5d88d;\n  font-variant-numeric: tabular-nums;\n}\n\n.cancel-timer[_ngcontent-%COMP%] {\n  min-width: auto;\n  min-height: 34px;\n  padding: 0 12px;\n  border: 1px solid rgba(165, 216, 141, 0.42);\n  border-radius: 9px;\n  color: #d9f2cc;\n  background: rgba(165, 216, 141, 0.12);\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.cancel-timer[_ngcontent-%COMP%]:hover {\n  border-color: rgba(165, 216, 141, 0.7);\n  background: rgba(165, 216, 141, 0.2);\n}\n\n.timer-actions[_ngcontent-%COMP%] {\n  gap: 10px;\n  margin-top: 12px;\n}\n\n.timer-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  height: 40px;\n  padding: 0 11px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 9px;\n  outline: none;\n  color: #e8ece7;\n  background: #202720;\n}\n\n.timer-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #a5d88d;\n}\n\n.timer-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 9px;\n}\n\n.volume-control[_ngcontent-%COMP%] {\n  width: min(100%, 230px);\n  gap: 11px;\n  margin-top: 12px;\n  color: #8b948b;\n}\n\n.volume-control[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 19px;\n  font-size: 19px;\n}\n\n.volume-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 4px;\n}\n\n.playlist-panel[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 0;\n  flex-direction: column;\n  padding: 28px 22px 18px;\n}\n\n.playlist-heading[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.playlist-list[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n\n.playlist-heading[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin: 0 4px 20px;\n}\n\n.playlist-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: #f1f3ef;\n  font-size: 20px;\n  font-weight: 650;\n}\n\n.song-count[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-radius: 999px;\n  color: #a7b0a6;\n  background: rgba(255, 255, 255, 0.06);\n  font-size: 11px;\n}\n\n.song-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 12px;\n  padding: 10px 9px;\n  border: 0;\n  border-radius: 12px;\n  color: inherit;\n  background: transparent;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n\n.song-item[_ngcontent-%COMP%]:hover, .song-item.current[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.055);\n}\n\n.song-number[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 23px;\n  place-items: center;\n  color: #778078;\n  font-size: 11px;\n  font-variant-numeric: tabular-nums;\n}\n\n.song-item.current[_ngcontent-%COMP%]   .song-number[_ngcontent-%COMP%], .song-item.current[_ngcontent-%COMP%]   .song-number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #a5d88d;\n}\n\n.song-number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n\n.song-thumb[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 43px;\n  place-items: center;\n  width: 43px;\n  height: 43px;\n  overflow: hidden;\n  border-radius: 8px;\n  color: #b8c6b3;\n  background: #303b31;\n}\n\n.song-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.song-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.song-title[_ngcontent-%COMP%], .song-artist[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.song-title[_ngcontent-%COMP%] {\n  color: #e6eae4;\n  font-size: 13px;\n  font-weight: 550;\n}\n\n.song-item.current[_ngcontent-%COMP%]   .song-title[_ngcontent-%COMP%] {\n  color: #a5d88d;\n}\n\n.song-artist[_ngcontent-%COMP%] {\n  color: #8c968d;\n  font-size: 11px;\n}\n\n.song-play-icon[_ngcontent-%COMP%] {\n  color: #a6b0a5;\n  opacity: 0;\n  transition: opacity 150ms ease;\n}\n\n.song-item[_ngcontent-%COMP%]:hover   .song-play-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.playlist-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  min-height: 130px;\n  color: #89928a;\n  font-size: 13px;\n}\n\n.empty-player[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 0;\n  text-align: center;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 18px;\n}\n\n.empty-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n}\n\n.empty-player[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 20px 0 7px;\n  color: #edf1eb;\n  font-size: 21px;\n}\n\n.empty-player[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #89928a;\n  font-size: 13px;\n}\n\n@keyframes _ngcontent-%COMP%_equalize {\n  from { transform: scaleY(0.55); }\n  to { transform: scaleY(1.3); }\n}\n\n@keyframes _ngcontent-%COMP%_spin-cover {\n  to { transform: rotate(360deg); }\n}\n\n@media (max-height: 700px) and (min-width: 801px) {\n  .player-page[_ngcontent-%COMP%] {\n    padding-top: 12px;\n    padding-bottom: 16px;\n  }\n\n  .page-header[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n  }\n\n  .now-playing[_ngcontent-%COMP%] {\n    padding-top: 14px;\n    padding-bottom: 14px;\n  }\n\n  .cover-wrap[_ngcontent-%COMP%] {\n    width: min(100%, 280px, 32vh);\n  }\n\n  .song-info[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .progress-section[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .player-controls[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n\n  .volume-control[_ngcontent-%COMP%] {\n    margin-top: 6px;\n  }\n}\n\n@media (max-width: 800px) {\n  .player-page[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 100vh;\n    min-height: 100dvh;\n    padding: 18px 18px 28px;\n  }\n\n  .player-layout[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n  }\n\n  .now-playing[_ngcontent-%COMP%] {\n    padding: 22px clamp(18px, 7vw, 48px);\n  }\n\n  .cover-wrap[_ngcontent-%COMP%] {\n    width: min(78vw, 330px);\n  }\n\n  .playlist-panel[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n}\n\n@media (max-width: 420px) {\n  .page-header[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n\n  .header-label[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n\n  .playlist-panel[_ngcontent-%COMP%] {\n    padding: 22px 14px 14px;\n  }\n\n  .player-controls[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n\n  .cover-wrap[_ngcontent-%COMP%] {\n    width: min(76vw, 290px);\n  }\n}\n\n@media (max-height: 560px) and (max-width: 800px) {\n  .cover-wrap[_ngcontent-%COMP%] {\n    width: min(60vw, 32vh, 250px);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cover-wrap.playing[_ngcontent-%COMP%]   .cover-image[_ngcontent-%COMP%], .cover-wrap.playing[_ngcontent-%COMP%]   .cover-placeholder[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}"]
    });
  }
}

/***/ }),

/***/ 33367:
/*!*****************************************!*\
  !*** ./src/app/player/player.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerModule: () => (/* binding */ PlayerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.component */ 30488);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/share.module */ 64039);
/* harmony import */ var _player_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.routing */ 97621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);





class PlayerModule {
  static {
    this.ɵfac = function PlayerModule_Factory(t) {
      return new (t || PlayerModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: PlayerModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _player_routing__WEBPACK_IMPORTED_MODULE_2__.PlayerRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PlayerModule, {
    declarations: [_player_component__WEBPACK_IMPORTED_MODULE_0__.PlayerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _player_routing__WEBPACK_IMPORTED_MODULE_2__.PlayerRoutingModule],
    exports: [_player_component__WEBPACK_IMPORTED_MODULE_0__.PlayerComponent]
  });
})();

/***/ }),

/***/ 97621:
/*!******************************************!*\
  !*** ./src/app/player/player.routing.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerRoutingModule: () => (/* binding */ PlayerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.component */ 30488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);




const routes = [{
  path: 'song',
  component: _player_component__WEBPACK_IMPORTED_MODULE_0__.PlayerComponent
}];
class PlayerRoutingModule {
  static {
    this.ɵfac = function PlayerRoutingModule_Factory(t) {
      return new (t || PlayerRoutingModule)();
    };
  }
  static {
    this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PlayerRoutingModule
    });
  }
  static {
    this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PlayerRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 88355:
/*!******************************************!*\
  !*** ./src/app/player/player.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerService: () => (/* binding */ PlayerService)
/* harmony export */ });
/* harmony import */ var B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/services/pouchdb.service */ 32939);
/* harmony import */ var _share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/services/http.serviceV2 */ 24950);





class PlayerService {
  constructor(pouchDBSV, httpSV) {
    this.pouchDBSV = pouchDBSV;
    this.httpSV = httpSV;
    this.audioCacheDb = 'player-audio';
    this.audioCacheName = 'player-audio-cache-v1';
    this.audioCacheRequests = new Map();
    this.playbackRequestId = 0;
    this.prefetchedAudio = null;
    this.currentAudioObjectUrl = null;
    this.persistentStorageRequest = null;
    this.playlist = [];
    this.originalPlaylist = [];
    this.currentIndex = 0;
    this.currentSongSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.isPlayingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.isShuffleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.currentTimeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
    this.durationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
    this.currentSongOfflineSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.currentSong$ = this.currentSongSubject.asObservable();
    this.isPlaying$ = this.isPlayingSubject.asObservable();
    this.isShuffle$ = this.isShuffleSubject.asObservable();
    this.currentTime$ = this.currentTimeSubject.asObservable();
    this.duration$ = this.durationSubject.asObservable();
    this.isCurrentSongOffline$ = this.currentSongOfflineSubject.asObservable();
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.addEventListener('ended', () => this.next());
    this.audio.addEventListener('timeupdate', () => {
      this.currentTimeSubject.next(this.audio.currentTime);
    });
    this.audio.addEventListener('loadedmetadata', () => {
      this.durationSubject.next(Number.isFinite(this.audio.duration) ? this.audio.duration : 0);
    });
    this.audio.addEventListener('play', () => {
      this.isPlayingSubject.next(true);
      this.updateMediaSessionPlaybackState('playing');
    });
    this.audio.addEventListener('pause', () => {
      this.isPlayingSubject.next(false);
      this.updateMediaSessionPlaybackState('paused');
    });
    this.setupMediaSession();
  }
  updateList() {
    var _this = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.httpSV.getCors('https://share.4la.vn/sheets/1zVjYGsdkppLcRbLgynInyAmLrNVd--iOaevIzQhyXEU/Data').subscribe(res => {
        _this.pouchDBSV.save('song', res).then(() => {}).catch(err => {
          throw err;
        });
      });
    })();
  }
  getPlaylist() {
    var _this2 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const songs = yield _this2.pouchDBSV.getAll('song');
      _this2.originalPlaylist = [...songs];
      _this2.playlist = [...songs];
      return songs;
    })();
  }
  getCurrentSong() {
    return this.currentSongSubject.value;
  }
  playSong(song) {
    var _this3 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const index = _this3.playlist.findIndex(s => s._id === song._id);
      if (index !== -1) {
        _this3.currentIndex = index;
        _this3.currentSongSubject.next(song);
        _this3.currentSongOfflineSubject.next(false);
        _this3.updateMediaSessionMetadata(song);
        const playbackRequestId = ++_this3.playbackRequestId;
        _this3.currentTimeSubject.next(0);
        _this3.durationSubject.next(0);
        const prefetchedAudio = _this3.prefetchedAudio;
        const hasPrefetchedAudio = prefetchedAudio !== null && String(prefetchedAudio.songId) === String(song._id);
        const cachedAudio = hasPrefetchedAudio ? yield prefetchedAudio.audioData : yield _this3.getCachedAudio(song);
        if (hasPrefetchedAudio) {
          _this3.prefetchedAudio = null;
        }
        if (playbackRequestId !== _this3.playbackRequestId) {
          return;
        }
        _this3.currentSongOfflineSubject.next(cachedAudio !== null);
        const previousObjectUrl = _this3.currentAudioObjectUrl;
        _this3.currentAudioObjectUrl = cachedAudio ? URL.createObjectURL(cachedAudio) : null;
        _this3.audio.src = _this3.currentAudioObjectUrl || song.audioUrl;
        _this3.audio.load();
        if (previousObjectUrl) {
          URL.revokeObjectURL(previousObjectUrl);
        }
        if (!cachedAudio) {
          void _this3.cacheAudio(song);
        }
        _this3.prefetchNextAudio();
        try {
          yield _this3.audio.play();
        } catch (error) {
          if (playbackRequestId === _this3.playbackRequestId) {
            _this3.isPlayingSubject.next(false);
          }
          console.error('Không thể phát bài hát:', error);
        }
      }
    })();
  }
  togglePlay() {
    if (!this.currentSongSubject.value) {
      if (this.playlist.length > 0) {
        this.playSong(this.playlist[0]);
      }
      return;
    }
    if (this.isPlayingSubject.value) {
      this.pause();
    } else {
      this.audio.play().catch(error => {
        this.isPlayingSubject.next(false);
        console.error('Không thể tiếp tục phát bài hát:', error);
      });
    }
  }
  pause() {
    this.audio.pause();
    this.isPlayingSubject.next(false);
  }
  seek(seconds) {
    if (!Number.isFinite(seconds) || !Number.isFinite(this.audio.duration)) {
      return;
    }
    this.audio.currentTime = Math.max(0, Math.min(seconds, this.audio.duration));
    this.currentTimeSubject.next(this.audio.currentTime);
  }
  setVolume(volume) {
    if (!Number.isFinite(volume)) {
      return;
    }
    this.audio.volume = Math.max(0, Math.min(volume, 1));
  }
  next() {
    if (this.playlist.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.playSong(this.playlist[this.currentIndex]);
  }
  previous() {
    if (this.playlist.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.playSong(this.playlist[this.currentIndex]);
  }
  toggleShuffle() {
    const currentShuffleState = this.isShuffleSubject.value;
    const newShuffleState = !currentShuffleState;
    this.isShuffleSubject.next(newShuffleState);
    const currentSong = this.getCurrentSong();
    if (newShuffleState) {
      let shuffled = [...this.originalPlaylist];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      if (currentSong) {
        shuffled = shuffled.filter(s => s._id !== currentSong._id);
        shuffled.unshift(currentSong);
      }
      this.playlist = shuffled;
      this.currentIndex = 0;
    } else {
      this.playlist = [...this.originalPlaylist];
      if (currentSong) {
        this.currentIndex = this.playlist.findIndex(s => s._id === currentSong._id);
      }
    }
  }
  setupMediaSession() {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) {
      return;
    }
    navigator.mediaSession.setActionHandler('play', () => this.togglePlay());
    navigator.mediaSession.setActionHandler('pause', () => this.pause());
    navigator.mediaSession.setActionHandler('previoustrack', () => this.previous());
    navigator.mediaSession.setActionHandler('nexttrack', () => this.next());
  }
  updateMediaSessionMetadata(song) {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) {
      return;
    }
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title,
      artist: song.artist,
      album: song.album,
      artwork: song.coverUrl ? [{
        src: song.coverUrl
      }] : []
    });
  }
  updateMediaSessionPlaybackState(state) {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) {
      return;
    }
    navigator.mediaSession.playbackState = state;
  }
  getAudioCacheId(song) {
    return `audio-${encodeURIComponent(String(song._id))}`;
  }
  getCachedAudio(song) {
    var _this4 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cacheId = _this4.getAudioCacheId(song);
      const pendingRequest = _this4.audioCacheRequests.get(cacheId);
      if (pendingRequest) {
        yield pendingRequest;
      }
      if (typeof caches !== 'undefined') {
        try {
          const cache = yield caches.open(_this4.audioCacheName);
          const cachedResponse = yield cache.match(song.audioUrl);
          if (cachedResponse) {
            return yield cachedResponse.blob();
          }
        } catch (error) {
          console.warn('Không thể đọc audio từ Cache API:', error);
        }
      }
      try {
        const cachedSong = yield _this4.pouchDBSV.get(_this4.audioCacheDb, cacheId);
        if (cachedSong && typeof cachedSong === 'object' && 'audioData' in cachedSong && typeof cachedSong.audioData === 'string') {
          const response = yield fetch(cachedSong.audioData);
          if (!response.ok) {
            throw new Error(`Không thể đọc audio đã lưu: ${response.status} ${response.statusText}`);
          }
          const audioBlob = yield response.blob();
          if (typeof caches !== 'undefined') {
            try {
              const cache = yield caches.open(_this4.audioCacheName);
              yield cache.put(song.audioUrl, new Response(audioBlob, {
                headers: {
                  'Content-Type': audioBlob.type || 'application/octet-stream'
                }
              }));
            } catch (error) {
              console.warn('Không thể chuyển audio cũ sang Cache API:', error);
            }
          }
          return audioBlob;
        }
      } catch (error) {
        console.warn('Không thể đọc audio đã lưu offline:', error);
      }
      return null;
    })();
  }
  prefetchNextAudio() {
    if (this.playlist.length < 2) {
      this.prefetchedAudio = null;
      return;
    }
    const nextSong = this.playlist[(this.currentIndex + 1) % this.playlist.length];
    this.prefetchedAudio = {
      songId: nextSong._id,
      audioData: this.getCachedAudio(nextSong)
    };
  }
  downloadOfflineAudio(song) {
    var _this5 = this;
    return (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const audioBlob = yield _this5.getCachedAudio(song);
      if (!audioBlob) {
        throw new Error('Bài hát chưa được lưu offline.');
      }
      const extension = _this5.getAudioFileExtension(audioBlob.type, song.audioUrl);
      const fileName = song.title.replace(/[<>:"/\\|?*]/g, '_').split('').map(char => char.charCodeAt(0) < 32 ? '_' : char).join('').trim() || 'audio';
      const objectUrl = URL.createObjectURL(audioBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = objectUrl;
      downloadLink.download = `${fileName}.${extension}`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    })();
  }
  cacheAudio(song) {
    var _this6 = this;
    if (!song.audioUrl) {
      return Promise.resolve();
    }
    const cacheId = this.getAudioCacheId(song);
    const existingRequest = this.audioCacheRequests.get(cacheId);
    if (existingRequest) {
      return existingRequest;
    }
    const request = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield fetch(song.audioUrl);
      if (!response.ok) {
        throw new Error(`Tải audio thất bại: ${response.status} ${response.statusText}`);
      }
      if (typeof caches !== 'undefined') {
        yield _this6.requestPersistentStorage();
        const cache = yield caches.open(_this6.audioCacheName);
        yield cache.put(song.audioUrl, response.clone());
      } else {
        const audioBlob = yield response.blob();
        const audioData = yield _this6.blobToDataUrl(audioBlob);
        yield _this6.pouchDBSV.save(_this6.audioCacheDb, {
          _id: cacheId,
          audioData,
          title: song.title,
          artist: song.artist
        });
        if (String(_this6.prefetchedAudio?.songId) === String(song._id)) {
          _this6.prefetchedAudio = {
            songId: song._id,
            audioData: Promise.resolve(audioBlob)
          };
        }
      }
      if (String(_this6.currentSongSubject.value?._id) === String(song._id)) {
        _this6.currentSongOfflineSubject.next(true);
      }
    })().catch(error => {
      console.warn('Không thể lưu audio để phát offline:', error);
    }).finally(() => {
      this.audioCacheRequests.delete(cacheId);
    });
    this.audioCacheRequests.set(cacheId, request);
    return request;
  }
  requestPersistentStorage() {
    if (!this.persistentStorageRequest) {
      this.persistentStorageRequest = (0,B_4la_f_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (typeof navigator !== 'undefined' && navigator.storage?.persist) {
          yield navigator.storage.persist();
        }
      })();
    }
    return this.persistentStorageRequest;
  }
  getAudioFileExtension(mimeType, audioUrl) {
    const extensions = {
      'audio/aac': 'aac',
      'audio/flac': 'flac',
      'audio/mp4': 'm4a',
      'audio/mpeg': 'mp3',
      'audio/ogg': 'ogg',
      'audio/wav': 'wav',
      'audio/webm': 'webm',
      'audio/x-flac': 'flac',
      'audio/x-wav': 'wav'
    };
    const normalizedMimeType = mimeType.toLowerCase().split(';')[0];
    if (extensions[normalizedMimeType]) {
      return extensions[normalizedMimeType];
    }
    const extension = audioUrl.split('?')[0].split('#')[0].split('.').pop()?.toLowerCase();
    return extension && /^[a-z0-9]{1,5}$/.test(extension) ? extension : 'mp3';
  }
  blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Không thể chuyển audio sang định dạng lưu offline.'));
        }
      };
      reader.onerror = () => reject(reader.error ?? new Error('Không thể đọc audio.'));
      reader.readAsDataURL(blob);
    });
  }
  static {
    this.ɵfac = function PlayerService_Factory(t) {
      return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_share_services_pouchdb_service__WEBPACK_IMPORTED_MODULE_1__.PouchdbService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_share_services_http_serviceV2__WEBPACK_IMPORTED_MODULE_2__.HttpServiceV2));
    };
  }
  static {
    this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: PlayerService,
      factory: PlayerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);