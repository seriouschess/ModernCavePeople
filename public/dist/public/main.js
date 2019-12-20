(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display-all/display-all.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display-all/display-all.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>display-all works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" class=\"bg-dark text-warning\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <canvas #canvas width=\"600\" height=\"300\"></canvas>\n      </div>\n      <div  class=\"col-sm\">\n        <div *ngFor=\"let Image of AllTheThings\">\n            <p>Keyword: {{Image.keyword}} Image Id: {{Image._id}}</p>\n            <button class=\"btn btn-info\" (click)=\"displayOneImage(Image._id)\">Display</button>\n            <button class=\"btn btn-info\" [routerLink]=\"['/edit', Image._id]\">Edit</button>\n            <button class=\"btn btn-info\" (click)=\"deleteImage(Image._id)\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h2>You can enter a keyword to refine your search</h2>\n  <form (submit)=\"displayGroupFromService()\">\n    <label>Enter Keyword: </label><input name=\"keyword\" [(ngModel)]=\"keyword\">\n  </form>  \n\n<h2>You can also make a new Image.</h2> \n<button class=\"btn btn-info\" [routerLink]=\"['/image/new']\" routerLinkActive=\"router-link-active\" >Make a new Image!</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-image/edit-image.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-image/edit-image.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"container bg-dark\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <canvas \n            (mousemove)=\"clientX = $event.clientX;clientY = $event.clientY;displayDrag($event)\" \n            (click)=\"drawItem($event)\" \n            #canvas width=\"600\" height=\"300\">\n        </canvas>\n      </div>\n      <div class=\"col-sm text-warning\">\n        <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-sm center\">\n                <h2>Select Mode:</h2>\n                <button class=\"btn btn-info\" (click)=\"circleMode()\">Circle Mode</button>\n                <button class=\"btn btn-info\" (click)=\"lineMode()\">Line Mode</button>\n                <button class=\"btn btn-info\" (click)=\"pointMode()\">Point Mode</button>\n              </div>\n              <div class=\"col-sm center\">\n                  <h2>Undo :O</h2>\n                <button class=\"btn btn-info\" (click)=\"undoLast()\">Undo Last Action</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-sm center\">\n                <p>Select Element Color:</p>\n                <p><button class=\"btn btn-info\" (click)=\"changeColor('black')\">Black</button>\n                <button class=\"btn btn-info\" (click)=\"changeColor('yellow')\">Yellow</button></p>\n                <p><button class=\"btn btn-info\" (click)=\"changeColor('blue')\">Blue</button>\n                <button class=\"btn btn-info\" (click)=\"changeColor('red')\">Red</button></p>\n                <p><button class=\"btn btn-info\" (click)=\"changeColor('green')\">Green</button></p>\n              </div>\n              <div class=\"col-sm\">\n                <p>Information:</p>\n                <p>Click corresponding modes to access drawing tools. Click \"Undo Last Action\" to remove your last action from the drawing. Click \"Update Image\" when you are done and provide a keyword.</p>\n              </div>\n            </div>\n          </div>\n        <!-- <button class=\"btn btn-info\" (click)=\"drawFromHistory($event)\">Draw From History</button> -->\n      </div>\n    </div>\n  </div>\n\n<form (submit)=\"updateImageFromService()\">\n    <label>Image Keyword(Change keyword if desired):</label><input type=\"text\" name=\"keyword\" [(ngModel)]=\"editedImage.keyword\">\n    <input type=\"submit\" value=\"Update Image\" class=\"btn btn-info\">\n</form>\n<h1 *ngIf=\"selected == true\">click to complete shape</h1>\n<button class=\"btn btn-info\" [routerLink]=\"['/display']\">Go Back (no save)</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container bg-dark\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <canvas \n            (mousemove)=\"clientX = $event.clientX;clientY = $event.clientY;displayDrag($event)\" \n            (click)=\"drawItem($event)\" \n            #canvas width=\"600\" height=\"300\">\n        </canvas>\n      </div>\n      <div class=\"col-sm text-warning\">\n        <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-sm\">\n                <h2>Select Mode:</h2>\n                <button class=\"btn btn-info\" (click)=\"circleMode()\">Circle Mode</button>\n                <button class=\"btn btn-info\" (click)=\"lineMode()\">Line Mode</button>\n                <button class=\"btn btn-info\" (click)=\"pointMode()\">Point Mode</button>\n              </div>\n              <div class=\"col-sm\">\n                  <h2>Undo :O</h2>\n                <button class=\"btn btn-info\" (click)=\"undoLast()\">Undo Last Action</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-sm\">\n                <p>Select Element Color:</p>\n                <p><button class=\"btn btn-info\" (click)=\"changeColor('black')\">Black</button>\n                <button class=\"btn btn-info\" (click)=\"changeColor('yellow')\">Yellow</button></p>\n                <p><button class=\"btn btn-info\" (click)=\"changeColor('blue')\">Blue</button>\n                <button class=\"btn btn-info\" (click)=\"changeColor('red')\">Red</button></p>\n                <p><button class=\"btn btn-info\" (click)=\"changeColor('green')\">Green</button></p>\n              </div>\n              <div class=\"col-sm\">\n                <p>Information:</p>\n                <p>Click corresponding modes to access drawing tools. Click \"Undo Last Action\" to remove your last action from the drawing. Click \"Save Image\" when you are done and provide a keyword.</p>\n              </div>\n            </div>\n          </div>\n        <!-- <button class=\"btn btn-info\" (click)=\"drawFromHistory($event)\">Draw From History</button> -->\n      </div>\n    </div>\n  </div>\n\n<form (submit)=\"saveImage()\">\n    <label>Image Keyword(Manditory!):</label><input type=\"text\" name=\"keyword\" [(ngModel)]=\"image.keyword\">\n    <input type=\"submit\" value=\"Save Image\" class=\"btn btn-info\">\n</form>\n<button class=\"btn btn-info\" [routerLink]=\"['/display']\">Go Back (no save)</button>\n<h1 *ngIf=\"selected == true\">click to complete shape</h1>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inner-display/inner-display.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inner-display/inner-display.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas \n    #canvas width=\"600\" height=\"300\">\n</canvas>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-image/new-image.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-image/new-image.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>new-image works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>You're in 404 land my friend. What are you doing here???</h1>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _inner_display_inner_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inner-display/inner-display.component */ "./src/app/inner-display/inner-display.component.ts");
/* harmony import */ var _edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-image/edit-image.component */ "./src/app/edit-image/edit-image.component.ts");








var routes = [
    { path: 'image/new', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'test', component: _inner_display_inner_display_component__WEBPACK_IMPORTED_MODULE_6__["InnerDisplayComponent"] },
    { path: 'display', component: _display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"] },
    { path: 'edit/:id', component: _edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_7__["EditImageComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/display' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    background-color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_image_new_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-image/new-image.component */ "./src/app/new-image/new-image.component.ts");
/* harmony import */ var _edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-image/edit-image.component */ "./src/app/edit-image/edit-image.component.ts");
/* harmony import */ var _display_all_display_all_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./display-all/display-all.component */ "./src/app/display-all/display-all.component.ts");
/* harmony import */ var _inner_display_inner_display_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inner-display/inner-display.component */ "./src/app/inner-display/inner-display.component.ts");




 //manually added
 //manuall added









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _display_display_component__WEBPACK_IMPORTED_MODULE_6__["DisplayComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _new_image_new_image_component__WEBPACK_IMPORTED_MODULE_11__["NewImageComponent"],
                _edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_12__["EditImageComponent"],
                _display_all_display_all_component__WEBPACK_IMPORTED_MODULE_13__["DisplayAllComponent"],
                _inner_display_inner_display_component__WEBPACK_IMPORTED_MODULE_14__["InnerDisplayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-all/display-all.component.css":
/*!*******************************************************!*\
  !*** ./src/app/display-all/display-all.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktYWxsL2Rpc3BsYXktYWxsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/display-all/display-all.component.ts":
/*!******************************************************!*\
  !*** ./src/app/display-all/display-all.component.ts ***!
  \******************************************************/
/*! exports provided: DisplayAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayAllComponent", function() { return DisplayAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplayAllComponent = /** @class */ (function () {
    function DisplayAllComponent() {
    }
    DisplayAllComponent.prototype.ngOnInit = function () {
    };
    DisplayAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-all',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display-all/display-all.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-all.component.css */ "./src/app/display-all/display-all.component.css")).default]
        })
    ], DisplayAllComponent);
    return DisplayAllComponent;
}());



/***/ }),

/***/ "./src/app/display/display.component.css":
/*!***********************************************!*\
  !*** ./src/app/display/display.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas { border-style: solid }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxvQkFBb0IiLCJmaWxlIjoic3JjL2FwcC9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7IGJvcmRlci1zdHlsZTogc29saWQgfSJdfQ== */");

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././http.service */ "./src/app/http.service.ts");



var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(_httpService) {
        this._httpService = _httpService;
    }
    DisplayComponent.prototype.ngOnInit = function () {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.image = { type: "image", keyword: "placeholder", image_elements: [] };
        this.drawHistory = []; //of the form [[x1,y1], [x2,y2], ...etc]
        this.keyword = '';
        this.displayAllImages();
    };
    // ngAfterViewInit(){
    //     //console.log(this.canvas_childrens._results)
    //     this.canvas_childrens.forEach(child => console.log(child));
    //     console.log(this.canvas_childrens.toArray());
    //     this.canvas_childrens.forEach((canvas_iteration:any) => {
    //       this.drawFromHistory(this.AllTheThings.image_elements);
    //       console.log("hi");
    //       })
    // }
    DisplayComponent.prototype.setColorHex = function (element) {
        //if(element.color=="black"){
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        //}
        if (element.color == "yellow") {
            this.ctx.strokeStyle = "#ffff00";
            this.ctx.fillStyle = "#ffff00";
        }
        if (element.color == "blue") {
            this.ctx.strokeStyle = "#0099ff";
            this.ctx.fillStyle = "#0099ff";
        }
        if (element.color == "red") {
            this.ctx.strokeStyle = "#ff0000";
            this.ctx.fillStyle = "#ff0000";
        }
        if (element.color == "green") {
            this.ctx.strokeStyle = "#00ff00";
            this.ctx.fillStyle = "#00ff00";
        }
    };
    DisplayComponent.prototype.drawFromHistory = function (image_history) {
        this.ctx.clearRect(0, 0, 600, 300);
        var current_element;
        for (var i = 0; i < image_history.length; i++) {
            current_element = image_history[i];
            this.setColorHex(current_element);
            if (current_element.type == "point") {
                this.ctx.beginPath();
                this.ctx.arc(current_element.point_coordinate[0], current_element.point_coordinate[1], 3, 0, 2 * Math.PI);
                this.ctx.fill();
                this.ctx.stroke();
            }
            else if (current_element.type == "line") {
                this.ctx.beginPath();
                this.ctx.moveTo(current_element.line_begin[0], current_element.line_begin[1]);
                this.ctx.lineTo(current_element.line_end[0], current_element.line_end[1]);
                this.ctx.stroke();
            }
            else if (current_element.type == "circle") {
                this.ctx.beginPath();
                this.ctx.arc(current_element.circle_origin[0], current_element.circle_origin[1], current_element.circle_radius, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
        }
    };
    DisplayComponent.prototype.displayAllImages = function () {
        var _this = this;
        this.errors = false;
        this._httpService.getImages().subscribe(function (data) {
            if (data["results"]) {
                console.log(data["results"]);
                _this.AllTheThings = data["results"];
            }
            else if (data['errors']) {
                for (var key in data['errors']) {
                    _this.errors.push(data['errors'][key]['message']);
                }
            }
        });
    };
    DisplayComponent.prototype.displayGroupFromService = function () {
        var _this = this;
        if (this.keyword == "") {
            this.displayAllImages();
        }
        else {
            this._httpService.getImagesByKeyword(this.keyword).subscribe(function (data) {
                if (data["results"]) {
                    _this.AllTheThings = data["results"];
                }
                else if (data['errors']) {
                    for (var key in data['errors']) {
                        _this.errors.push(data['errors'][key]['message']);
                    }
                }
            });
        }
    };
    DisplayComponent.prototype.displayOneImage = function (some_id) {
        var _this = this;
        this._httpService.getImage(some_id).subscribe(function (data) {
            if (data["results"]) {
                _this.displayedImage = data["results"];
                _this.drawFromHistory(_this.displayedImage.image_elements);
            }
            else if (data['errors']) {
                for (var key in data['errors']) {
                    _this.errors.push(data['errors'][key]['message']);
                }
            }
        });
    };
    DisplayComponent.prototype.deleteImage = function (id) {
        var _this = this;
        this._httpService.deleteImage(id).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
            else if (data['errors']) {
                for (var key in data['errors']) {
                    _this.errors.push(data['errors'][key]['message']);
                }
            }
            _this.displayAllImages();
        });
    };
    DisplayComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
    ], DisplayComponent.prototype, "canvas", void 0);
    DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.css */ "./src/app/display/display.component.css")).default]
        })
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/edit-image/edit-image.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-image/edit-image.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas { \r\n    border-style: solid;\r\n }\r\n\r\n*{\r\n    margin-left: 0px;\r\n}\r\n\r\n.center{\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1pbWFnZS9lZGl0LWltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWltYWdlL2VkaXQtaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7IFxyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuIH1cclxuXHJcbip7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/edit-image/edit-image.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-image/edit-image.component.ts ***!
  \****************************************************/
/*! exports provided: EditImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImageComponent", function() { return EditImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditImageComponent = /** @class */ (function () {
    //keyword: any;
    function EditImageComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    //ctx.fillRect(x, y, width, height);
    EditImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.keyword = "placeholder";
        this.ctx = this.canvas.nativeElement.getContext('2d');
        //this.editedImage = {type: "image", keyword: "placeholder", image_elements: []}
        this.clientX = 0;
        this.clientY = 0;
        this.mode = "point";
        this.color = "black";
        this.selected = false;
        this.selectedCoor = [];
        this.drawHistory = []; //of the form [[x1,y1], [x2,y2], ...etc]
        this.editedImage = {}; //placeholder
        this._route.params.subscribe(function (params) {
            _this.getOneImage(params['id']);
        });
    };
    EditImageComponent.prototype.getOneImage = function (some_id) {
        var _this = this;
        this._httpService.getImage(some_id).subscribe(function (data) {
            if (data["results"]) {
                console.log(data["results"]);
                _this.editedImage = data["results"];
                //this.keyword = data["results"].keyword;
                _this.drawHistory = _this.editedImage.image_elements;
                _this.drawFromHistory();
            }
            else if (data['errors']) {
                for (var key in data['errors']) {
                    _this.errors.push(data['errors'][key]['message']);
                }
            }
        });
    };
    EditImageComponent.prototype.distanceFormula = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    };
    EditImageComponent.prototype.displayDrag = function (ev) {
        if (this.selected == true) {
            if (this.mode == "circle") {
                this.ctx.clearRect(0, 0, 600, 300);
                this.drawFromHistory();
                this.setColorHex({ color: this.color });
                var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX - 35, ev.clientY);
                this.ctx.beginPath();
                this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
            else if (this.mode == "line") {
                this.ctx.clearRect(0, 0, 600, 300);
                this.drawFromHistory();
                this.setColorHex({ color: this.color });
                this.ctx.beginPath();
                this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
                this.ctx.lineTo(ev.clientX - 35, ev.clientY);
                this.ctx.stroke();
            }
            else { //default point
                //do nothing to draw point.
            }
        }
    };
    EditImageComponent.prototype.pointMode = function () {
        this.selected = false;
        this.mode = "point";
    };
    EditImageComponent.prototype.circleMode = function () {
        this.selected = false;
        this.mode = "circle";
    };
    EditImageComponent.prototype.lineMode = function () {
        this.selected = false;
        this.mode = "line";
    };
    EditImageComponent.prototype.drawItem = function (ev) {
        console.log(this.mode);
        if (this.mode == "circle") {
            this.drawCircle(ev);
        }
        else if (this.mode == "line") {
            this.drawLine(ev);
        }
        else { //default point
            this.drawPoint(ev);
        }
    };
    EditImageComponent.prototype.drawPoint = function (ev) {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.arc(ev.clientX - 35, ev.clientY, 3, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.drawHistory.push({
            type: "point",
            color: this.color,
            point_coordinate: [ev.clientX - 35, ev.clientY]
        });
        this.drawFromHistory();
    };
    EditImageComponent.prototype.drawCircle = function (ev) {
        if (this.selected == true) {
            this.selected = false;
            var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX - 35, ev.clientY);
            this.ctx.beginPath();
            this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
            this.ctx.stroke();
            this.drawHistory.push(//circle object
            {
                type: "circle",
                color: this.color,
                circle_origin: [this.selectedCoor[0], this.selectedCoor[1]],
                circle_radius: radius
            });
            this.drawFromHistory();
            this.selectedCoor = [];
        }
        else {
            this.selected = true;
            this.selectedCoor = [ev.clientX - 35, ev.clientY];
        }
    };
    EditImageComponent.prototype.drawLine = function (ev) {
        if (this.selected == true) {
            this.selected = false;
            this.ctx.beginPath();
            this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
            this.ctx.lineTo(ev.clientX - 35, ev.clientY);
            this.ctx.stroke();
            this.drawHistory.push({
                type: "line",
                color: this.color,
                line_begin: [this.selectedCoor[0], this.selectedCoor[1]],
                line_end: [ev.clientX - 35, ev.clientY]
            });
            this.drawFromHistory();
        }
        else {
            this.selected = true;
            this.selectedCoor = [ev.clientX - 35, ev.clientY];
        }
        this.ctx.beginPath();
    };
    EditImageComponent.prototype.changeColor = function (color) {
        this.color = color;
    };
    EditImageComponent.prototype.setColorHex = function (element) {
        //if(element.color=="black"){
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        //}
        if (element.color == "yellow") {
            this.ctx.strokeStyle = "#ffff00";
            this.ctx.fillStyle = "#ffff00";
        }
        if (element.color == "blue") {
            this.ctx.strokeStyle = "#0099ff";
            this.ctx.fillStyle = "#0099ff";
        }
        if (element.color == "red") {
            this.ctx.strokeStyle = "#ff0000";
            this.ctx.fillStyle = "#ff0000";
        }
        if (element.color == "green") {
            this.ctx.strokeStyle = "#00ff00";
            this.ctx.fillStyle = "#00ff00";
        }
    };
    EditImageComponent.prototype.drawFromHistory = function () {
        var current_element;
        for (var i = 0; i < this.drawHistory.length; i++) {
            current_element = this.drawHistory[i];
            this.setColorHex(current_element);
            if (current_element.type == "point") {
                this.ctx.beginPath();
                this.ctx.arc(current_element.point_coordinate[0], current_element.point_coordinate[1], 3, 0, 2 * Math.PI);
                this.ctx.fill();
                this.ctx.stroke();
            }
            else if (current_element.type == "line") {
                this.ctx.beginPath();
                this.ctx.moveTo(current_element.line_begin[0], current_element.line_begin[1]);
                this.ctx.lineTo(current_element.line_end[0], current_element.line_end[1]);
                this.ctx.stroke();
            }
            else if (current_element.type == "circle") {
                this.ctx.beginPath();
                this.ctx.arc(current_element.circle_origin[0], current_element.circle_origin[1], current_element.circle_radius, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
        }
    };
    EditImageComponent.prototype.undoLast = function () {
        this.drawHistory.pop();
        this.ctx.clearRect(0, 0, 600, 300);
        this.drawFromHistory();
    };
    EditImageComponent.prototype.updateImageFromService = function () {
        var _this = this;
        this.editedImage.image_elements = this.drawHistory;
        //this.editedImage.keyword = this.keyword;
        console.log(this.editedImage.keyword);
        this._httpService.updateImage(this.editedImage).subscribe(function (data) {
            console.log(data);
            _this.goToDisplay();
        });
    };
    EditImageComponent.prototype.goToDisplay = function () {
        this._router.navigate(['/display']);
    };
    EditImageComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
    ], EditImageComponent.prototype, "canvas", void 0);
    EditImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-image/edit-image.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-image.component.css */ "./src/app/edit-image/edit-image.component.css")).default]
        })
    ], EditImageComponent);
    return EditImageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas { border-style: solid }\r\n\r\n*{\r\n    margin-left: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxvQkFBb0I7O0FBRTdCO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMgeyBib3JkZXItc3R5bGU6IHNvbGlkIH1cclxuXHJcbip7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    //ctx.fillRect(x, y, width, height);
    HomeComponent.prototype.ngOnInit = function () {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.image = { type: "image", keyword: "placeholder", image_elements: [] };
        this.clientX = 0;
        this.clientY = 0;
        this.mode = "point";
        this.selected = false;
        this.selectedCoor = [];
        this.drawHistory = []; //of the form [[x1,y1], [x2,y2], ...etc]
        //element
        //{}
    };
    HomeComponent.prototype.distanceFormula = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    };
    HomeComponent.prototype.displayDrag = function (ev) {
        if (this.selected == true) {
            if (this.mode == "circle") {
                this.ctx.clearRect(0, 0, 600, 300);
                this.drawFromHistory();
                this.setColorHex({ color: this.color });
                var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX - 35, ev.clientY);
                this.ctx.beginPath();
                this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
            else if (this.mode == "line") {
                this.ctx.clearRect(0, 0, 600, 300);
                this.drawFromHistory();
                this.setColorHex({ color: this.color });
                this.ctx.beginPath();
                this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
                this.ctx.lineTo(ev.clientX - 35, ev.clientY);
                this.ctx.stroke();
            }
            else { //default point
                //do nothing to draw point.
            }
        }
    };
    HomeComponent.prototype.pointMode = function () {
        this.selected = false;
        this.mode = "point";
    };
    HomeComponent.prototype.circleMode = function () {
        this.selected = false;
        this.mode = "circle";
    };
    HomeComponent.prototype.lineMode = function () {
        this.selected = false;
        this.mode = "line";
    };
    HomeComponent.prototype.drawItem = function (ev) {
        console.log(this.mode);
        if (this.mode == "circle") {
            this.drawCircle(ev);
        }
        else if (this.mode == "line") {
            this.drawLine(ev);
        }
        else { //default point
            this.drawPoint(ev);
        }
    };
    HomeComponent.prototype.drawPoint = function (ev) {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.arc(ev.clientX - 35, ev.clientY, 3, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.drawHistory.push({
            type: "point",
            color: this.color,
            point_coordinate: [ev.clientX - 35, ev.clientY]
        });
        this.drawFromHistory();
    };
    HomeComponent.prototype.drawCircle = function (ev) {
        if (this.selected == true) {
            this.selected = false;
            var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX - 35, ev.clientY);
            this.ctx.beginPath();
            this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
            this.ctx.stroke();
            this.drawHistory.push(//circle object
            {
                type: "circle",
                color: this.color,
                circle_origin: [this.selectedCoor[0], this.selectedCoor[1]],
                circle_radius: radius
            });
            this.drawFromHistory();
            this.selectedCoor = [];
        }
        else {
            this.selected = true;
            this.selectedCoor = [ev.clientX - 35, ev.clientY];
        }
    };
    HomeComponent.prototype.drawLine = function (ev) {
        if (this.selected == true) {
            this.selected = false;
            this.ctx.beginPath();
            this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
            this.ctx.lineTo(ev.clientX - 35, ev.clientY);
            this.ctx.stroke();
            this.drawHistory.push({
                type: "line",
                color: this.color,
                line_begin: [this.selectedCoor[0], this.selectedCoor[1]],
                line_end: [ev.clientX - 35, ev.clientY]
            });
            this.drawFromHistory();
        }
        else {
            this.selected = true;
            this.selectedCoor = [ev.clientX - 35, ev.clientY];
        }
        this.ctx.beginPath();
    };
    HomeComponent.prototype.changeColor = function (color) {
        this.color = color;
    };
    HomeComponent.prototype.setColorHex = function (element) {
        //if(element.color=="black"){
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        //}
        if (element.color == "yellow") {
            this.ctx.strokeStyle = "#ffff00";
            this.ctx.fillStyle = "#ffff00";
        }
        if (element.color == "blue") {
            this.ctx.strokeStyle = "#0099ff";
            this.ctx.fillStyle = "#0099ff";
        }
        if (element.color == "red") {
            this.ctx.strokeStyle = "#ff0000";
            this.ctx.fillStyle = "#ff0000";
        }
        if (element.color == "green") {
            this.ctx.strokeStyle = "#00ff00";
            this.ctx.fillStyle = "#00ff00";
        }
    };
    HomeComponent.prototype.drawFromHistory = function () {
        var current_element;
        for (var i = 0; i < this.drawHistory.length; i++) {
            current_element = this.drawHistory[i];
            this.setColorHex(current_element);
            if (current_element.type == "point") {
                this.ctx.beginPath();
                this.ctx.arc(current_element.point_coordinate[0], current_element.point_coordinate[1], 3, 0, 2 * Math.PI);
                this.ctx.fill();
                this.ctx.stroke();
            }
            else if (current_element.type == "line") {
                this.ctx.beginPath();
                this.ctx.moveTo(current_element.line_begin[0], current_element.line_begin[1]);
                this.ctx.lineTo(current_element.line_end[0], current_element.line_end[1]);
                this.ctx.stroke();
            }
            else if (current_element.type == "circle") {
                this.ctx.beginPath();
                this.ctx.arc(current_element.circle_origin[0], current_element.circle_origin[1], current_element.circle_radius, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
        }
    };
    HomeComponent.prototype.undoLast = function () {
        this.drawHistory.pop();
        this.ctx.clearRect(0, 0, 600, 300);
        this.drawFromHistory();
    };
    HomeComponent.prototype.saveImage = function () {
        var _this = this;
        this.image.image_elements = this.drawHistory;
        console.log(this.image);
        this._httpService.postNewImage(this.image).subscribe(function (data) {
            console.log(data);
            _this._router.navigate(['/']);
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
    ], HomeComponent.prototype, "canvas", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.getImages();
    }
    HttpService.prototype.getImages = function () {
        return this._http.get('/api');
    };
    HttpService.prototype.getImagesByKeyword = function (keyword) {
        return this._http.get("/api/get_keyword/" + keyword);
    };
    HttpService.prototype.getImage = function (id) {
        return this._http.get("api/" + id);
    };
    HttpService.prototype.deleteImage = function (id) {
        return this._http.get("api/remove/" + id);
    };
    HttpService.prototype.postNewImage = function (new_Image) {
        return this._http.post('/api/new', new_Image);
    };
    HttpService.prototype.updateImage = function (updated_image) {
        return this._http.put("/api/edit/" + updated_image._id, updated_image);
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/inner-display/inner-display.component.css":
/*!***********************************************************!*\
  !*** ./src/app/inner-display/inner-display.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas { border-style: solid }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5uZXItZGlzcGxheS9pbm5lci1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxvQkFBb0IiLCJmaWxlIjoic3JjL2FwcC9pbm5lci1kaXNwbGF5L2lubmVyLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7IGJvcmRlci1zdHlsZTogc29saWQgfSJdfQ== */");

/***/ }),

/***/ "./src/app/inner-display/inner-display.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inner-display/inner-display.component.ts ***!
  \**********************************************************/
/*! exports provided: InnerDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerDisplayComponent", function() { return InnerDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var InnerDisplayComponent = /** @class */ (function () {
    function InnerDisplayComponent(_httpService) {
        this._httpService = _httpService;
    }
    //ctx.fillRect(x, y, width, height);
    InnerDisplayComponent.prototype.ngOnInit = function () {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.image = { type: "image", keyword: "placeholder", image_elements: [] };
        this.clientX = 0;
        this.clientY = 0;
        this.mode = "point";
        this.selected = false;
        this.selectedCoor = [];
        this.drawHistory = []; //of the form [[x1,y1], [x2,y2], ...etc]
        //element
        //{}
    };
    InnerDisplayComponent.prototype.distanceFormula = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    };
    InnerDisplayComponent.prototype.displayDrag = function (ev) {
        if (this.selected == true) {
            if (this.mode == "circle") {
                this.ctx.clearRect(0, 0, 600, 300);
                this.drawFromHistory();
                var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX - 10, ev.clientY - 81);
                this.ctx.beginPath();
                this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
            else if (this.mode == "line") {
                this.ctx.clearRect(0, 0, 600, 300);
                this.drawFromHistory();
                this.ctx.beginPath();
                this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
                this.ctx.lineTo(ev.clientX - 10, ev.clientY - 81);
                this.ctx.stroke();
            }
            else { //default point
                //do nothing to draw point.
            }
        }
    };
    InnerDisplayComponent.prototype.pointMode = function () {
        this.selected = false;
        this.mode = "point";
    };
    InnerDisplayComponent.prototype.circleMode = function () {
        this.selected = false;
        this.mode = "circle";
    };
    InnerDisplayComponent.prototype.lineMode = function () {
        this.selected = false;
        this.mode = "line";
    };
    InnerDisplayComponent.prototype.drawItem = function (ev) {
        console.log(this.mode);
        if (this.mode == "circle") {
            this.drawCircle(ev);
        }
        else if (this.mode == "line") {
            this.drawLine(ev);
        }
        else { //default point
            this.drawPoint(ev);
        }
    };
    InnerDisplayComponent.prototype.drawPoint = function (ev) {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.arc(ev.clientX - 10, ev.clientY - 81, 3, 0, 2 * Math.PI); //not sure why we need an offset(-10,-81) but oh well
        this.ctx.stroke();
        this.drawHistory.push({
            type: "point",
            color: "black",
            point_coordinate: [ev.clientX - 10, ev.clientY - 81]
        });
    };
    InnerDisplayComponent.prototype.drawCircle = function (ev) {
        if (this.selected == true) {
            this.selected = false;
            var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX - 10, ev.clientY - 81);
            this.ctx.beginPath();
            this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
            this.ctx.stroke();
            this.drawHistory.push(//circle object
            {
                type: "circle",
                color: "black",
                circle_origin: [this.selectedCoor[0], this.selectedCoor[1]],
                circle_radius: radius
            });
            this.selectedCoor = [];
        }
        else {
            this.selected = true;
            this.selectedCoor = [ev.clientX - 10, ev.clientY - 81];
        }
    };
    InnerDisplayComponent.prototype.drawLine = function (ev) {
        if (this.selected == true) {
            this.selected = false;
            this.ctx.beginPath();
            this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
            this.ctx.lineTo(ev.clientX - 10, ev.clientY - 81);
            this.ctx.stroke();
            this.drawHistory.push({
                type: "line",
                color: "black",
                line_begin: [this.selectedCoor[0], this.selectedCoor[1]],
                line_end: [ev.clientX - 10, ev.clientY - 81]
            });
        }
        else {
            this.selected = true;
            this.selectedCoor = [ev.clientX - 10, ev.clientY - 81];
        }
        this.ctx.beginPath();
    };
    InnerDisplayComponent.prototype.drawFromHistory = function () {
        var current_element;
        for (var i = 0; i < this.drawHistory.length; i++) {
            current_element = this.drawHistory[i];
            if (current_element.type == "point") {
                this.ctx.fillStyle = current_element.color;
                this.ctx.beginPath();
                this.ctx.arc(current_element.point_coordinate[0], current_element.point_coordinate[1], 3, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
            else if (current_element.type == "line") {
                this.ctx.beginPath();
                this.ctx.moveTo(current_element.line_begin[0], current_element.line_begin[1]);
                this.ctx.lineTo(current_element.line_end[0], current_element.line_end[1]);
                this.ctx.stroke();
            }
            else if (current_element.type == "circle") {
                this.ctx.beginPath();
                this.ctx.arc(current_element.circle_origin[0], current_element.circle_origin[1], current_element.circle_radius, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
        }
    };
    InnerDisplayComponent.prototype.undoLast = function () {
        this.drawHistory.pop();
        this.ctx.clearRect(0, 0, 600, 300);
        this.drawFromHistory();
    };
    InnerDisplayComponent.prototype.saveImage = function () {
        this.image = { type: "image", keyword: "placeholder", image_elements: this.drawHistory };
        console.log(this.image);
        this._httpService.postNewImage(this.image).subscribe(function (data) {
            console.log(data);
        });
    };
    InnerDisplayComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
    ], InnerDisplayComponent.prototype, "canvas", void 0);
    InnerDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inner-display',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inner-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inner-display/inner-display.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inner-display.component.css */ "./src/app/inner-display/inner-display.component.css")).default]
        })
    ], InnerDisplayComponent);
    return InnerDisplayComponent;
}());



/***/ }),

/***/ "./src/app/new-image/new-image.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-image/new-image.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1pbWFnZS9uZXctaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/new-image/new-image.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-image/new-image.component.ts ***!
  \**************************************************/
/*! exports provided: NewImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewImageComponent", function() { return NewImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewImageComponent = /** @class */ (function () {
    function NewImageComponent() {
    }
    NewImageComponent.prototype.ngOnInit = function () {
    };
    NewImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-image',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-image/new-image.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-image.component.css */ "./src/app/new-image/new-image.component.css")).default]
        })
    ], NewImageComponent);
    return NewImageComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    Imageion: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in Imageion mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].Imageion) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bigch\Desktop\ImageCRUD\ModernCavePeople\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map