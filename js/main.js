/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/inputs/inputs.js":
/*!************************************************!*\
  !*** ./src/blocks/components/inputs/inputs.js ***!
  \************************************************/
/***/ (function() {

function checkInputValidity(input, regexp) {
  var value = input.value;
  if (!regexp.test(value)) {
    input.classList.add('error');
    var errorElement = input.parentNode.querySelector('.js-inputError');
    if (errorElement) {
      errorElement.style.display = 'block';
    }
  } else {
    var _errorElement = input.parentNode.querySelector('.js-inputError');
    if (_errorElement) {
      _errorElement.style.display = 'none';
    }
    input.classList.remove('error');
  }
}
var forms = document.querySelectorAll('.js-form');
forms.forEach(function (form) {
  var buttons = form.querySelectorAll('.js-formCheck');
  var inputEyeElements = form.querySelectorAll('.js-inputEye');
  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var inputNickname = form.querySelectorAll('.js-nicknameCheck');
      var inputRequired = form.querySelectorAll('.js-emptyCheck');
      var inputEmail = form.querySelectorAll('.js-emailCheck');
      var repeatPass = form.querySelector('.js-repeatPass');
      inputNickname.forEach(function (input) {
        checkInputValidity(input, /^[a-zA-Z]{6,32}$/);
        if (input.value.includes(' ') || /[@~!#$%^&*()+`'";:<>\/\\|]/.test(input.value)) {
          checkInputValidity(input, /^\S*$/);
        }
      });
      inputRequired.forEach(function (input) {
        checkInputValidity(input, /^.+/);
      });
      inputEmail.forEach(function (input) {
        checkInputValidity(input, /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/);
      });
      if (repeatPass) {
        var pass = form.querySelector('.js-pass').value;
        var errorElement = repeatPass.parentNode.querySelector('.js-inputError');
        if (repeatPass.value != pass) {
          repeatPass.classList.add('error');
          errorElement.style.display = 'block';
        } else {
          errorElement.style.display = 'none';
          repeatPass.classList.remove('error');
        }
      }
      if (button.hasAttribute('data-popup') && form.querySelectorAll('.error').length == 0) {
        button.classList.add('js-popupOpen');
      } else {
        button.classList.remove('js-popupOpen');
      }
    });
  });
  inputEyeElements.forEach(function (inputEyeElement) {
    inputEyeElement.addEventListener('click', function () {
      inputEyeElements.forEach(function (elem) {
        elem.classList.toggle('active');
        var inputPass = elem.parentNode.querySelector('input');
        if (elem.classList.contains('active')) {
          inputPass.type = "text";
        } else {
          inputPass.type = "password";
        }
      });
    });
  });
  form.addEventListener('input', function (event) {
    if (event.target.classList.contains('js-inputNumbers')) {
      var inputValue = event.target.value;
      var regex = /^\d+$/;
      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/\D/g, '');
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/_copyText.js":
/*!*****************************!*\
  !*** ./src/js/_copyText.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyText: function() { return /* binding */ copyText; }
/* harmony export */ });
function copyText() {
  document.querySelectorAll('.js-copyWrap').forEach(function (copyWrap) {
    var textElement = copyWrap.querySelector('.js-copyText');
    var copyButton = copyWrap.querySelector('.js-copyBtn');
    copyButton.addEventListener('click', function () {
      var textToCopy = textElement.textContent;
      navigator.clipboard.writeText(textToCopy);
      copyButton.classList.add('copied');
      setTimeout(function () {
        copyButton.classList.remove('copied');
      }, 5000);
    });
  });
}

/***/ }),

/***/ "./src/js/_select.js":
/*!***************************!*\
  !*** ./src/js/_select.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   select: function() { return /* binding */ select; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function select() {
  var ItcCustomSelect = /*#__PURE__*/function () {
    function ItcCustomSelect(target, params) {
      _classCallCheck(this, ItcCustomSelect);
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      this._params = params || {};
      this._onClickFn = this._onClick.bind(this);
      if (this._params.options) {
        this._el.innerHTML = this.constructor.template(this._params);
        this._el.classList.add(this.constructor.EL);
      }
      this._elToggle = this._el.querySelector(this.constructor.DATA_TOGGLE);
      this._el.addEventListener('click', this._onClickFn);
    }
    _createClass(ItcCustomSelect, [{
      key: "_onClick",
      value: function _onClick(e) {
        var target = e.target;
        var type = target.closest(this.constructor.DATA).dataset.select;
        if (type === 'toggle') {
          this.toggle();
        } else if (type === 'option') {
          this._changeValue(target);
        }
      }
    }, {
      key: "_updateOption",
      value: function _updateOption(el) {
        var elOption = el.closest(".".concat(this.constructor.EL_OPTION));
        var elOptionSel = this._el.querySelector(".".concat(this.constructor.EL_OPTION_SELECTED));
        if (elOptionSel) {
          elOptionSel.classList.remove(this.constructor.EL_OPTION_SELECTED);
        }
        elOption.classList.add(this.constructor.EL_OPTION_SELECTED);
        this._elToggle.innerHTML = elOption.innerHTML;
        this._elToggle.value = elOption.dataset.value;
        this._elToggle.dataset.index = elOption.dataset.index;
        this._el.dispatchEvent(new CustomEvent('itc.select.change'));
        this._params.onSelected ? this._params.onSelected(this, elOption) : null;
        return elOption.dataset.value;
      }
    }, {
      key: "_reset",
      value: function _reset() {
        var selected = this._el.querySelector(".".concat(this.constructor.EL_OPTION_SELECTED));
        if (selected) {
          selected.classList.remove(this.constructor.EL_OPTION_SELECTED);
        }
        this._elToggle.textContent = 'Выберите из списка';
        this._elToggle.value = '';
        this._elToggle.dataset.index = '-1';
        this._el.dispatchEvent(new CustomEvent('itc.select.change'));
        this._params.onSelected ? this._params.onSelected(this, null) : null;
        return '';
      }
    }, {
      key: "_changeValue",
      value: function _changeValue(el) {
        if (el.classList.contains(this.constructor.EL_OPTION_SELECTED)) {
          return;
        }
        this._updateOption(el);
        this.hide();
      }
    }, {
      key: "show",
      value: function show() {
        var _this = this;
        document.querySelectorAll(this.constructor.EL_SHOW).forEach(function (el) {
          el.classList.remove(_this.constructor.EL_SHOW);
        });
        this._el.classList.add("".concat(this.constructor.EL_SHOW));
      }
    }, {
      key: "hide",
      value: function hide() {
        this._el.classList.remove(this.constructor.EL_SHOW);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this._el.classList.contains(this.constructor.EL_SHOW) ? this.hide() : this.show();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._el.removeEventListener('click', this._onClickFn);
      }
    }, {
      key: "value",
      get: function get() {
        return this._elToggle.value;
      },
      set: function set(value) {
        var _this2 = this;
        var isExists = false;
        this._el.querySelectorAll('.select__option').forEach(function (option) {
          if (option.dataset.value === value) {
            isExists = true;
            _this2._updateOption(option);
          }
        });
        if (!isExists) {
          this._reset();
        }
      }
    }, {
      key: "selectedIndex",
      get: function get() {
        return this._elToggle.dataset.index;
      },
      set: function set(index) {
        var option = this._el.querySelector(".select__option[data-index=\"".concat(index, "\"]"));
        if (option) {
          this._updateOption(option);
        }
        this._reset();
      }
    }], [{
      key: "template",
      value: function template(params) {
        var _this3 = this;
        var name = params.name,
          options = params.options,
          targetValue = params.targetValue;
        var items = [];
        var selectedIndex = -1;
        var selectedValue = '';
        var selectedContent = 'Выберите из списка';
        options.forEach(function (option, index) {
          var selectedClass = '';
          if (option[0] === targetValue) {
            selectedClass = " ".concat(_this3.EL_OPTION_SELECTED);
            selectedIndex = index;
            selectedValue = option[0];
            selectedContent = option[1];
          }
          items.push("<li class=\"itc-select__option".concat(selectedClass, "\" data-select=\"option\"\n              data-value=\"").concat(option[0], "\" data-index=\"").concat(index, "\">").concat(option[1], "</li>"));
        });
        return "<button type=\"button\" class=\"itc-select__toggle\" name=\"".concat(name, "\"\n            value=\"").concat(selectedValue, "\" data-select=\"toggle\" data-index=\"").concat(selectedIndex, "\">\n            ").concat(selectedContent, "</button><div class=\"itc-select__dropdown\">\n            <ul class=\"itc-select__options\">").concat(items.join(''), "</ul></div>");
      }
    }, {
      key: "hideOpenSelect",
      value: function hideOpenSelect() {
        var _this4 = this;
        document.addEventListener('click', function (e) {
          if (!e.target.closest(".".concat(_this4.EL))) {
            var elsActive = document.querySelectorAll(".".concat(_this4.EL_SHOW));
            elsActive.forEach(function (el) {
              el.classList.remove(_this4.EL_SHOW);
            });
          }
        });
      }
    }, {
      key: "create",
      value: function create(target, params) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        if (this._el) {
          return new this(target, params);
        }
        return null;
      }
    }]);
    return ItcCustomSelect;
  }();
  _defineProperty(ItcCustomSelect, "EL", 'itc-select');
  _defineProperty(ItcCustomSelect, "EL_SHOW", 'itc-select_show');
  _defineProperty(ItcCustomSelect, "EL_OPTION", 'itc-select__option');
  _defineProperty(ItcCustomSelect, "EL_OPTION_SELECTED", 'itc-select__option_selected');
  _defineProperty(ItcCustomSelect, "DATA", '[data-select]');
  _defineProperty(ItcCustomSelect, "DATA_TOGGLE", '[data-select="toggle"]');
  ItcCustomSelect.hideOpenSelect();
  var count = 0;
  var select = document.querySelectorAll('.js-select');
  if (select) {
    select.forEach(function (elem) {
      count++;
      elem.classList.add("js-select".concat(count));
      var select = new ItcCustomSelect(".js-select".concat(count));
    });
  }
}

/***/ }),

/***/ "./src/js/_tabs.js":
/*!*************************!*\
  !*** ./src/js/_tabs.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabs: function() { return /* binding */ tabs; }
/* harmony export */ });
function tabs() {
  var tabWrapper = document.querySelectorAll('.js-tabWrapper');
  if (tabWrapper.length > 0) {
    tabWrapper.forEach(function (collection) {
      var tabs = collection.querySelectorAll('.js-tabItem');
      tabs.forEach(function (elem) {
        elem.addEventListener("click", function () {
          var tabId = elem.getAttribute('data-tab');
          var parentTab = elem.closest('.js-tabWrapper');
          var tabContents = parentTab.querySelectorAll('.js-tabContent');
          var parentTabs = parentTab.querySelectorAll('.js-tabItem');
          parentTabs.forEach(function (tab) {
            if (tab != elem) {
              tab.classList.remove('show');
            }
          });
          elem.classList.add('show');
          tabContents.forEach(function (content) {
            if (content.getAttribute('data-tab') === tabId) {
              content.classList.add('show');
            } else {
              content.classList.remove('show');
            }
          });
        });
      });
    });
  }
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_inputs_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/inputs/inputs */ "./src/blocks/components/inputs/inputs.js");
/* harmony import */ var _components_inputs_inputs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_inputs_inputs__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _src_js_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/js/_tabs */ "./src/js/_tabs.js");
/* harmony import */ var _src_js_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/js/_select */ "./src/js/_select.js");
/* harmony import */ var _src_js_copyText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/js/_copyText */ "./src/js/_copyText.js");





document.addEventListener('DOMContentLoaded', function () {
  (0,_src_js_tabs__WEBPACK_IMPORTED_MODULE_2__.tabs)();
  (0,_src_js_select__WEBPACK_IMPORTED_MODULE_3__.select)();
  (0,_src_js_copyText__WEBPACK_IMPORTED_MODULE_4__.copyText)();
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map