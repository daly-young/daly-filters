(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _number_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number/index */ \"./src/number/index.js\");\n/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string/index */ \"./src/string/index.js\");\n\n\nvar tnpFilters = {\n  install: function (Vue, options) {\n    Object.keys(_string_index__WEBPACK_IMPORTED_MODULE_1__).forEach(key => {\n      Vue.filter(key, _string_index__WEBPACK_IMPORTED_MODULE_1__[key]);\n    });\n    Object.keys(_number_index__WEBPACK_IMPORTED_MODULE_0__).forEach(key => {\n      Vue.filter(key, _number_index__WEBPACK_IMPORTED_MODULE_0__[key]);\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (tnpFilters);\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.Vue.use(tnpFilters);\n  window.tnpFilters = tnpFilters;\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/number/add-separator.js":
/*!*************************************!*\
  !*** ./src/number/add-separator.js ***!
  \*************************************/
/*! exports provided: addSeparator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addSeparator\", function() { return addSeparator; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./src/utils.js\");\n\nfunction addSeparator(value, separator = ',') {\n  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isNumber(value)) return 'NaN';\n  const regex = /(\\d+)(\\d{3})/;\n  const string = value.toString();\n  const x = string.split('.');\n  let x1 = x[0];\n  let x2 = x.length > 1 ? '.' + x[1] : '';\n\n  while (regex.test(x1)) {\n    x1 = x1.replace(regex, '$1' + separator + '$2');\n  }\n\n  return x1 + x2;\n}\n\n//# sourceURL=webpack:///./src/number/add-separator.js?");

/***/ }),

/***/ "./src/number/format-unit.js":
/*!***********************************!*\
  !*** ./src/number/format-unit.js ***!
  \***********************************/
/*! exports provided: formatUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatUnit\", function() { return formatUnit; });\nfunction formatUnit(value, unit, positon = 0) {\n  if (!unit) return value;\n  return positon ? `${value}${unit}` : `${unit}${value}`;\n}\n\n//# sourceURL=webpack:///./src/number/format-unit.js?");

/***/ }),

/***/ "./src/number/index.js":
/*!*****************************!*\
  !*** ./src/number/index.js ***!
  \*****************************/
/*! exports provided: addSeparator, percent, toFixed, tranverseToChinese, formatUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_separator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-separator */ \"./src/number/add-separator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addSeparator\", function() { return _add_separator__WEBPACK_IMPORTED_MODULE_0__[\"addSeparator\"]; });\n\n/* harmony import */ var _format_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-unit */ \"./src/number/format-unit.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatUnit\", function() { return _format_unit__WEBPACK_IMPORTED_MODULE_1__[\"formatUnit\"]; });\n\n/* harmony import */ var _percent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./percent */ \"./src/number/percent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"percent\", function() { return _percent__WEBPACK_IMPORTED_MODULE_2__[\"percent\"]; });\n\n/* harmony import */ var _to_chinese__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-chinese */ \"./src/number/to-chinese.js\");\n/* harmony import */ var _to_chinese__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_to_chinese__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tranverseToChinese\", function() { return _to_chinese__WEBPACK_IMPORTED_MODULE_3__[\"tranverseToChinese\"]; });\n\n/* harmony import */ var _to_fixed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-fixed */ \"./src/number/to-fixed.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toFixed\", function() { return _to_fixed__WEBPACK_IMPORTED_MODULE_4__[\"toFixed\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/number/index.js?");

/***/ }),

/***/ "./src/number/percent.js":
/*!*******************************!*\
  !*** ./src/number/percent.js ***!
  \*******************************/
/*! exports provided: percent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"percent\", function() { return percent; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/**\r\n * Convert the Numbers into Percentages\r\n * \r\n * useOrigin true: 1 => 1%  \r\n *           false: 1=> 100%\r\n * useOrigin true: 0.1 => 0.1%  \r\n *           false:0.1 => 10%\r\n * precision=2  0.123456 => 0.12%  \r\n *              0.123456 => 12.35%\r\n * \r\n */\n//  直接加百分号\n//  转换成百分比再加百分号\n//  保留几位小数\n//  如果是小数，默认保留2位，整数不补零\n\nfunction percent(value, precision, useOrigin = true) {\n  if (!_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isNumber(value)) return 'NaN';\n  if (precision && typeof precision !== 'number') return 'NaN';\n\n  if (typeof useOrigin !== 'boolean') {\n    useOrigin = true;\n  }\n\n  value = Number(value);\n\n  if (!useOrigin) {\n    value = value * 100;\n  }\n\n  if (Number.isInteger(value)) {\n    return precision ? `${value.toFixed(precision)}%` : `${value}%`;\n  } else {\n    return `${value.toFixed(precision || 2)}%`;\n  }\n}\n\n//# sourceURL=webpack:///./src/number/percent.js?");

/***/ }),

/***/ "./src/number/to-chinese.js":
/*!**********************************!*\
  !*** ./src/number/to-chinese.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n *  Translate Numbers into Chinese\r\n * \r\n * '12345678901' => '壹佰贰拾叁亿肆仟伍佰陆拾柒万捌仟玖佰零壹'\r\n * \r\n */\n\n//# sourceURL=webpack:///./src/number/to-chinese.js?");

/***/ }),

/***/ "./src/number/to-fixed.js":
/*!********************************!*\
  !*** ./src/number/to-fixed.js ***!
  \********************************/
/*! exports provided: toFixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toFixed\", function() { return toFixed; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction toFixed(value, precision = 0) {\n  if (!_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isNumber(value)) return 'NaN';\n  if (!_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isNumber(precision)) return 'NaN';\n  return (+(Math.round(+(value + 'e' + precision)) + 'e' + -precision)).toFixed(precision);\n}\n\n//# sourceURL=webpack:///./src/number/to-fixed.js?");

/***/ }),

/***/ "./src/string/capitalize.js":
/*!**********************************!*\
  !*** ./src/string/capitalize.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *  Converts a string into Capitalize\n * \n * 'abc' => 'Abc'\n * \n * @param {Object} options\n */\nfunction capitalize(value, options) {\n  const globalOptions = this && this.capitalize ? this.capitalize : {};\n  options = options || globalOptions;\n  var onlyFirstLetter = options.onlyFirstLetter != null ? options.onlyFirstLetter : false;\n  if (!value && value !== 0) return '';\n\n  if (onlyFirstLetter === true) {\n    return value.toString().charAt(0).toUpperCase() + value.toString().slice(1);\n  } else {\n    value = value.toString().toLowerCase().split(' ');\n    return value.map(function (item) {\n      return item.charAt(0).toUpperCase() + item.slice(1);\n    }).join(' ');\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (capitalize);\n\n//# sourceURL=webpack:///./src/string/capitalize.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! exports provided: capitalize, uppercase, lowercase, placeholder, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ \"./src/string/capitalize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"capitalize\", function() { return _capitalize__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _uppercase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uppercase */ \"./src/string/uppercase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uppercase\", function() { return _uppercase__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _lowercase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lowercase */ \"./src/string/lowercase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lowercase\", function() { return _lowercase__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder */ \"./src/string/placeholder.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"placeholder\", function() { return _placeholder__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncate */ \"./src/string/truncate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _truncate__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/string/index.js?");

/***/ }),

/***/ "./src/string/lowercase.js":
/*!*********************************!*\
  !*** ./src/string/lowercase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Converts a string to lowercase\n * \n * 'AbC' => 'abc'\n */\nfunction lowercase(value) {\n  return value || value === 0 ? value.toString().toLowerCase() : '';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lowercase);\n\n//# sourceURL=webpack:///./src/string/lowercase.js?");

/***/ }),

/***/ "./src/string/placeholder.js":
/*!***********************************!*\
  !*** ./src/string/placeholder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *  If the value is missing outputs the placeholder text\n * \n * '' => {placeholder}\n * 'foo' => 'foo'\n */\nfunction placeholder(input, property) {\n  return input === undefined || input === '' || input === null ? property : input;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (placeholder);\n\n//# sourceURL=webpack:///./src/string/placeholder.js?");

/***/ }),

/***/ "./src/string/truncate.js":
/*!********************************!*\
  !*** ./src/string/truncate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *  Truncate at the given || default length\n *\n * 'lorem ipsum dolor' => 'lorem ipsum dol...'\n */\nfunction truncate(value, length) {\n  length = length || 15;\n  if (!value || typeof value !== 'string') return '';\n  if (value.length <= length) return value;\n  return value.substring(0, length) + '...';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (truncate);\n\n//# sourceURL=webpack:///./src/string/truncate.js?");

/***/ }),

/***/ "./src/string/uppercase.js":
/*!*********************************!*\
  !*** ./src/string/uppercase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Converts a string to UPPERCASE\n * \n * 'abc' => 'ABC'\n */\nfunction uppercase(value) {\n  return value || value === 0 ? value.toString().toUpperCase() : '';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uppercase);\n\n//# sourceURL=webpack:///./src/string/uppercase.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar util = {};\n\nutil.exist = val => {\n  return val !== null && typeof val !== 'undefined';\n};\n\nutil.isNumber = val => {\n  if (!util.exist(val)) return false;\n  var flag = typeof val === 'number';\n  val = flag ? val : Number(val);\n  return !isNaN(val);\n};\n\nutil.isDecimal = val => {\n  if (!util.isNumber(val)) return false;\n  return String(val).indexOf('.') > -1;\n};\n\nutil.splitDecimal = val => {\n  if (!util.isNumber(val)) return [];\n  if (!util.isDecimal(val)) return [val];\n  return String(val).split('.');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (util);\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
});