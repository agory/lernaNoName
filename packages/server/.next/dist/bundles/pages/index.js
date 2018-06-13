module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("rn-noname-connector/dist/WebConnector");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"COLOR":["inherit","primary","textSecondary","secondary","error","default"],"COLOR_DEFAULT":"default"}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "rn-noname-connector/dist/WebConnector"
var WebConnector_ = __webpack_require__(3);
var WebConnector__default = /*#__PURE__*/__webpack_require__.n(WebConnector_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(10);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(11);
var AppBar__default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(12);
var Toolbar__default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(2);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./src/web/constant.json
var constant = __webpack_require__(4);
var constant_default = /*#__PURE__*/__webpack_require__.n(constant);

// CONCATENATED MODULE: ./src/web/components/Title/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var Title_Title = function Title(props) {
  var children = props.children,
      color = props.color,
      className = props.className,
      style = props.style;
  return external__react__default.a.createElement(Typography__default.a, _extends({}, props, {
    variant: "headline",
    component: "h1",
    className: className,
    style: style,
    color: color
  }), children);
};

Title_Title.defaultProps = {
  color: constant["COLOR_DEFAULT"],
  className: 'title',
  style: {}
};
/* harmony default export */ var components_Title = (Title_Title);
// CONCATENATED MODULE: ./src/web/components/AppBar/index.js





var titleStyle = {
  flex: 1
};

var AppBar_AppBar = function AppBar(_ref) {
  var title = _ref.title;
  return external__react__default.a.createElement(AppBar__default.a, {
    position: "static"
  }, external__react__default.a.createElement(Toolbar__default.a, null, external__react__default.a.createElement(components_Title, {
    style: titleStyle,
    color: "textSecondary"
  }, title)));
};

/* harmony default export */ var components_AppBar = (AppBar_AppBar);
// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(5);
var Paper__default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__(13);
var Tabs__default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__(14);
var Tab__default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(15);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// CONCATENATED MODULE: ./src/web/components/Tabs/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var styles = {
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8'
  },
  labelContainer: {
    paddingTop: 0,
    paddingBottom: 0
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 1
  }
};

var Tabs_Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));
    _this.renderTab = _this.renderTab.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.state = {
      value: props.initial || props.items[0].value || 0
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "onChange",
    value: function onChange(event, value) {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      }

      this.setState({
        value: value
      });
    }
  }, {
    key: "renderTab",
    value: function renderTab(item, index) {
      var classes = this.props.classes;
      return external__react__default.a.createElement(Tab__default.a, {
        key: item.value || index,
        value: item.value || index,
        label: item.label,
        icon: item.icon,
        classes: {
          root: classes.tabRoot,
          labelContainer: classes.labelContainer
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          items = _props.items,
          className = _props.className,
          style = _props.style,
          classes = _props.classes;
      var value = this.state.value;
      var tabs = items.map(this.renderTab);
      var selectedTab = items.find(function (item, index) {
        return item.value ? item.value === value : index === value;
      });
      return external__react__default.a.createElement("div", {
        style: style,
        className: classes.container
      }, external__react__default.a.createElement(Tabs__default.a, {
        classes: {
          root: classes.tabsRoot
        },
        className: className,
        value: value,
        onChange: this.onChange
      }, tabs), external__react__default.a.createElement("div", {
        className: classes.content
      }, selectedTab.component()));
    }
  }]);

  return Tabs;
}(external__react_["Component"]);

var itemType = external__prop_types__default.a.shape({
  value: external__prop_types__default.a.string,
  label: external__prop_types__default.a.string.isRequired,
  icon: external__prop_types__default.a.node,
  component: external__prop_types__default.a.func
});
Tabs_Tabs.defaultProps = {
  initial: '',
  className: '',
  onChange: null,
  style: {}
};
/* harmony default export */ var components_Tabs = (Object(styles_["withStyles"])(styles)(Tabs_Tabs));
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(16);
var List__default = /*#__PURE__*/__webpack_require__.n(List_);

// CONCATENATED MODULE: ./src/web/components/List/index.js
function List__extends() { List__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return List__extends.apply(this, arguments); }





var List_List = function List(_ref) {
  var data = _ref.data,
      Component = _ref.Component,
      style = _ref.style,
      className = _ref.className;
  return external__react__default.a.createElement(List__default.a, {
    style: style,
    className: className
  }, data.map(function (item, index) {
    return external__react__default.a.createElement(Component, List__extends({
      key: item.key || index
    }, item));
  }));
};

List_List.defaultProps = {
  style: {},
  className: ''
};
/* harmony default export */ var components_List = (List_List);
// CONCATENATED MODULE: ./src/web/components/Console/index.js




var listStyle = function listStyle(height) {
  return {
    padding: '0',
    overflowY: 'auto',
    height: height
  };
};

var Console_Console = function Console(_ref) {
  var data = _ref.data,
      ComponentLine = _ref.ComponentLine,
      height = _ref.height;
  return external__react__default.a.createElement(components_List, {
    data: data,
    Component: ComponentLine,
    style: listStyle(height)
  });
};

Console_Console.defaultProps = {
  height: '100%'
};
/* harmony default export */ var components_Console = (Console_Console);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(6);
var ListItem__default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__(17);
var ListItemText__default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__(18);
var ListItemIcon__default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemSecondaryAction"
var ListItemSecondaryAction_ = __webpack_require__(19);
var ListItemSecondaryAction__default = /*#__PURE__*/__webpack_require__.n(ListItemSecondaryAction_);

// EXTERNAL MODULE: external "mdi-material-ui"
var external__mdi_material_ui_ = __webpack_require__(7);
var external__mdi_material_ui__default = /*#__PURE__*/__webpack_require__.n(external__mdi_material_ui_);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external__react_syntax_highlighter_ = __webpack_require__(20);
var external__react_syntax_highlighter__default = /*#__PURE__*/__webpack_require__.n(external__react_syntax_highlighter_);

// CONCATENATED MODULE: ./src/web/components/Text/index.js
function Text__extends() { Text__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Text__extends.apply(this, arguments); }

/* eslint-disable react/forbid-prop-types */



var COLOR = ['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default'];

var Text_Text = function Text(props) {
  var children = props.children,
      align = props.align,
      color = props.color;
  return external__react__default.a.createElement(Typography__default.a, Text__extends({}, props, {
    align: align,
    color: color,
    variant: "body1"
  }), children);
};

Text_Text.defaultProps = {
  align: 'inherit',
  color: 'default'
};
/* harmony default export */ var components_Text = (Text_Text);
// CONCATENATED MODULE: ./src/web/components/Ignore/index.js
/* eslint-disable react/forbid-prop-types */



var Ignore_Ignore = function Ignore(_ref) {
  var children = _ref.children;
  return external__react__default.a.createElement(external__react_["Fragment"], null, children);
};

/* harmony default export */ var components_Ignore = (Ignore_Ignore);
// CONCATENATED MODULE: ./src/web/components/Highlight/index.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* eslint-disable react/forbid-prop-types */






var Highlight_Highlight = function Highlight(_ref) {
  var lang = _ref.lang,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["lang", "children"]);

  return external__react__default.a.createElement(external__react_syntax_highlighter__default.a, {
    PreTag: components_Ignore,
    codeTagProps: rest,
    CodeTag: components_Text,
    language: lang,
    useInlineStyles: false
  }, children);
};

Highlight_Highlight.defaultProps = {
  className: ''
};
/* harmony default export */ var components_Highlight = (Highlight_Highlight);
// CONCATENATED MODULE: ./src/web/components/HighlightVariableText/index.js
function HighlightVariableText__extends() { HighlightVariableText__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HighlightVariableText__extends.apply(this, arguments); }

function HighlightVariableText__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* eslint-disable react/forbid-prop-types */




var HighlightVariableText_HighlightVariableText = function HighlightVariableText(_ref) {
  var value = _ref.value,
      rest = HighlightVariableText__objectWithoutProperties(_ref, ["value"]);

  return external__react__default.a.createElement(components_Highlight, HighlightVariableText__extends({}, rest, {
    lang: "json"
  }), JSON.stringify(value));
};

/* harmony default export */ var components_HighlightVariableText = (HighlightVariableText_HighlightVariableText);
// CONCATENATED MODULE: ./src/web/console/BridgeConsole/BridgeLine/index.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var listItemStyle = {
  padding: '0 200px 0 5px',
  border: '1px solid rgb(240,240,240)'
};
var size = {
  fontSize: '0.8rem'
};

var secondary = _objectSpread({
  paddingRight: '5px'
}, size);

var BridgeLine_icon = {
  fontSize: '0.9rem'
};

var iconJs = _objectSpread({
  color: '#FFC107'
}, BridgeLine_icon);

var BridgeLine_BridgeLine = function BridgeLine(_ref) {
  var type = _ref.type,
      args = _ref.args,
      module = _ref.module,
      method = _ref.method;
  return external__react__default.a.createElement(ListItem__default.a, {
    style: listItemStyle
  }, external__react__default.a.createElement(ListItemIcon__default.a, null, type === 0 ? external__react__default.a.createElement(external__mdi_material_ui_["LanguageJavascript"], {
    style: iconJs
  }) : external__react__default.a.createElement(external__mdi_material_ui_["Cellphone"], {
    style: BridgeLine_icon
  })), external__react__default.a.createElement(ListItemText__default.a, {
    disableTypography: true,
    style: size
  }, external__react__default.a.createElement(components_HighlightVariableText, {
    value: args
  })), external__react__default.a.createElement(ListItemSecondaryAction__default.a, {
    style: secondary
  }, external__react__default.a.createElement("span", {
    className: "hljs-title"
  }, module), "@", method));
};

/* harmony default export */ var BridgeConsole_BridgeLine = (BridgeLine_BridgeLine);
// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(21);
var TextField__default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(22);
var FormControl__default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// CONCATENATED MODULE: ./src/web/console/BridgeConsole/BridgeFilterForm/index.js
function BridgeFilterForm__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var format = function format(onChange, name) {
  return function (value) {
    return onChange(BridgeFilterForm__defineProperty({}, name, value.target.value));
  };
};
var BridgeFilterForm_form = {
  display: 'flex'
};

var BridgeFilterForm_BridgeFilterForm = function BridgeFilterForm(_ref) {
  var module = _ref.module,
      method = _ref.method,
      onChange = _ref.onChange;
  return external__react__default.a.createElement("div", {
    style: BridgeFilterForm_form
  }, external__react__default.a.createElement(FormControl__default.a, {
    fullWidth: true
  }, external__react__default.a.createElement(TextField__default.a, {
    placeholder: "Module filter",
    value: module,
    onChange: format(onChange, 'module')
  })), external__react__default.a.createElement(FormControl__default.a, {
    fullWidth: true
  }, external__react__default.a.createElement(TextField__default.a, {
    placeholder: "Method filter",
    value: method,
    onChange: format(onChange, 'method')
  })));
};

/* harmony default export */ var BridgeConsole_BridgeFilterForm = (BridgeFilterForm_BridgeFilterForm);
// CONCATENATED MODULE: ./src/web/console/BridgeConsole/index.js
function BridgeConsole__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BridgeConsole__typeof = function _typeof(obj) { return typeof obj; }; } else { BridgeConsole__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BridgeConsole__typeof(obj); }

function BridgeConsole__extends() { BridgeConsole__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BridgeConsole__extends.apply(this, arguments); }

function BridgeConsole__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function BridgeConsole__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { BridgeConsole__defineProperty(target, key, source[key]); }); } return target; }

function BridgeConsole__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BridgeConsole__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BridgeConsole__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BridgeConsole__createClass(Constructor, protoProps, staticProps) { if (protoProps) BridgeConsole__defineProperties(Constructor.prototype, protoProps); if (staticProps) BridgeConsole__defineProperties(Constructor, staticProps); return Constructor; }

function BridgeConsole__possibleConstructorReturn(self, call) { if (call && (BridgeConsole__typeof(call) === "object" || typeof call === "function")) { return call; } return BridgeConsole__assertThisInitialized(self); }

function BridgeConsole__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function BridgeConsole__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var BridgeConsole_styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  console: {
    flex: '1 0 0'
  }
};

var BridgeConsole_BridgeConsole =
/*#__PURE__*/
function (_Component) {
  BridgeConsole__inherits(BridgeConsole, _Component);

  function BridgeConsole(props) {
    var _this;

    BridgeConsole__classCallCheck(this, BridgeConsole);

    _this = BridgeConsole__possibleConstructorReturn(this, (BridgeConsole.__proto__ || Object.getPrototypeOf(BridgeConsole)).call(this, props));
    _this.filterChange = _this.filterChange.bind(BridgeConsole__assertThisInitialized(_this));
    _this.filter = _this.filter.bind(BridgeConsole__assertThisInitialized(_this));
    _this.state = {
      filters: {
        module: '',
        method: ''
      }
    };
    return _this;
  }

  BridgeConsole__createClass(BridgeConsole, [{
    key: "filterChange",
    value: function filterChange(value) {
      this.setState({
        filters: BridgeConsole__objectSpread({}, this.state.filters, value)
      });
    }
  }, {
    key: "filter",
    value: function filter(line) {
      var _state$filters = this.state.filters,
          module = _state$filters.module,
          method = _state$filters.method;
      return line.module.includes(module) && line.method.includes(method);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          data = _props.data,
          rest = BridgeConsole__objectWithoutProperties(_props, ["data"]);

      var _state$filters2 = this.state.filters,
          module = _state$filters2.module,
          method = _state$filters2.method;
      return external__react__default.a.createElement("div", {
        style: BridgeConsole_styles.container
      }, external__react__default.a.createElement(BridgeConsole_BridgeFilterForm, {
        module: module,
        method: method,
        onChange: this.filterChange
      }), external__react__default.a.createElement("div", {
        style: BridgeConsole_styles.console
      }, external__react__default.a.createElement(components_Console, BridgeConsole__extends({
        data: data.filter(this.filter),
        ComponentLine: BridgeConsole_BridgeLine
      }, rest))));
    }
  }]);

  return BridgeConsole;
}(external__react_["Component"]);

/* harmony default export */ var console_BridgeConsole = (BridgeConsole_BridgeConsole);
// CONCATENATED MODULE: ./src/web/widget/DevTools/index.js
function DevTools__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DevTools__typeof = function _typeof(obj) { return typeof obj; }; } else { DevTools__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DevTools__typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function DevTools__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DevTools__possibleConstructorReturn(self, call) { if (call && (DevTools__typeof(call) === "object" || typeof call === "function")) { return call; } return DevTools__assertThisInitialized(self); }

function DevTools__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DevTools__createClass(Constructor, protoProps, staticProps) { if (protoProps) DevTools__defineProperties(Constructor.prototype, protoProps); if (staticProps) DevTools__defineProperties(Constructor, staticProps); return Constructor; }

function DevTools__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DevTools__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var DevTools_styles = {
  container: {
    maxHeight: '250px',
    height: '100%',
    overflowY: 'auto'
  },
  tabs: {
    height: '250px'
  }
};
var defaultMaxSize = 50;

var DevTools_DevTools =
/*#__PURE__*/
function (_Component) {
  DevTools__inherits(DevTools, _Component);

  DevTools__createClass(DevTools, null, [{
    key: "dataMerger",
    value: function dataMerger(data) {
      var maxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaxSize;
      return function (newData) {
        return _toConsumableArray(newData.reverse()).concat(_toConsumableArray(data.slice(0, maxSize - newData.length)));
      };
    }
  }, {
    key: "noEmpty",
    value: function noEmpty(data) {
      return data.length > 0;
    }
  }]);

  function DevTools(props) {
    var _this;

    DevTools__classCallCheck(this, DevTools);

    _this = DevTools__possibleConstructorReturn(this, (DevTools.__proto__ || Object.getPrototypeOf(DevTools)).call(this, props));
    _this.state = {
      bridgeData: []
    };
    _this.updateData = _this.updateData.bind(DevTools__assertThisInitialized(_this));
    _this.handleData = _this.handleData.bind(DevTools__assertThisInitialized(_this));
    return _this;
  }

  DevTools__createClass(DevTools, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.connector = new WebConnector__default.a({});
      this.subscription = this.connector.getConsole().filter(DevTools.noEmpty).map(this.handleData).subscribe(this.updateData);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.subscription.unsubscribe();
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var bridgeData = this.state.bridgeData;
      return [{
        value: 'bridge',
        label: 'Bridge',
        component: function component() {
          return external__react__default.a.createElement(console_BridgeConsole, {
            height: "150px",
            data: bridgeData
          });
        }
      }];
    }
  }, {
    key: "handleData",
    value: function handleData(data) {
      return DevTools.dataMerger(this.state.bridgeData, defaultMaxSize)(data);
    }
  }, {
    key: "updateData",
    value: function updateData(data) {
      this.setState({
        bridgeData: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Paper__default.a, {
        style: DevTools_styles.container
      }, external__react__default.a.createElement(components_Tabs, {
        initial: "bridge",
        style: DevTools_styles.tabs,
        items: this.getItems()
      }));
    }
  }]);

  return DevTools;
}(external__react_["Component"]);

/* harmony default export */ var widget_DevTools = (DevTools_DevTools);
// CONCATENATED MODULE: ./src/web/layout/Flex/index.js


var Flex_styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
  },
  header: {
    order: 1
  },
  content: {
    order: 2,
    flexGrow: 1,
    flexBasis: '100%',
    overflowY: 'auto'
  },
  footer: {
    order: 3
  }
};

var Flex_Flex = function Flex(_ref) {
  var header = _ref.header,
      children = _ref.children,
      footer = _ref.footer;
  return external__react__default.a.createElement("div", {
    style: Flex_styles.container
  }, header && external__react__default.a.createElement("header", {
    style: Flex_styles.header
  }, header), external__react__default.a.createElement("main", {
    style: Flex_styles.content
  }, children), footer && external__react__default.a.createElement("footer", {
    style: Flex_styles.footer
  }, footer));
};

Flex_Flex.defaultProps = {
  header: null,
  footer: null
};
/* harmony default export */ var layout_Flex = (Flex_Flex);
// CONCATENATED MODULE: ./src/web/layout/Main/index.js







var Main_Main = function Main(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, title), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/reset.css"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/googlecode.css"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/utils.css"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    key: "roboto"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    key: "material-icons"
  })), external__react__default.a.createElement(layout_Flex, {
    header: external__react__default.a.createElement(components_AppBar, {
      title: title
    }),
    footer: external__react__default.a.createElement(widget_DevTools, null)
  }, children));
};

/* harmony default export */ var layout_Main = (Main_Main);
// CONCATENATED MODULE: ./src/web/components/XmlHighlight/index.js
function XmlHighlight__extends() { XmlHighlight__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return XmlHighlight__extends.apply(this, arguments); }

function XmlHighlight__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* eslint-disable react/forbid-prop-types */




var XmlHighlight_XmlHighlight = function XmlHighlight(_ref) {
  var children = _ref.children,
      rest = XmlHighlight__objectWithoutProperties(_ref, ["children"]);

  return external__react__default.a.createElement(components_Highlight, XmlHighlight__extends({}, rest, {
    lang: "HTML"
  }), children);
};

/* harmony default export */ var components_XmlHighlight = (XmlHighlight_XmlHighlight);
// CONCATENATED MODULE: ./src/web/components/Touchable/index.js
function Touchable__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Touchable__typeof = function _typeof(obj) { return typeof obj; }; } else { Touchable__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Touchable__typeof(obj); }

function Touchable__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Touchable__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Touchable__createClass(Constructor, protoProps, staticProps) { if (protoProps) Touchable__defineProperties(Constructor.prototype, protoProps); if (staticProps) Touchable__defineProperties(Constructor, staticProps); return Constructor; }

function Touchable__possibleConstructorReturn(self, call) { if (call && (Touchable__typeof(call) === "object" || typeof call === "function")) { return call; } return Touchable__assertThisInitialized(self); }

function Touchable__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Touchable__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable
  jsx-a11y/anchor-is-valid,
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions */



var Touchable_Touchable =
/*#__PURE__*/
function (_Component) {
  Touchable__inherits(Touchable, _Component);

  function Touchable(props) {
    var _this;

    Touchable__classCallCheck(this, Touchable);

    _this = Touchable__possibleConstructorReturn(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).call(this, props));
    _this.onClickHandler = _this.onClickHandler.bind(Touchable__assertThisInitialized(_this));
    return _this;
  }

  Touchable__createClass(Touchable, [{
    key: "onClickHandler",
    value: function onClickHandler(event) {
      var _props = this.props,
          value = _props.value,
          onClick = _props.onClick;
      if (value) return onClick(value);
      return onClick(event);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return external__react__default.a.createElement("span", {
        onClick: this.onClickHandler
      }, children);
    }
  }]);

  return Touchable;
}(external__react_["Component"]);

Touchable_Touchable.defaultProps = {
  value: undefined
};
/* harmony default export */ var components_Touchable = (Touchable_Touchable);
// CONCATENATED MODULE: ./src/web/components/ComponentView/index.js
function ComponentView__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ComponentView__typeof = function _typeof(obj) { return typeof obj; }; } else { ComponentView__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ComponentView__typeof(obj); }

function ComponentView__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ComponentView__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ComponentView__createClass(Constructor, protoProps, staticProps) { if (protoProps) ComponentView__defineProperties(Constructor.prototype, protoProps); if (staticProps) ComponentView__defineProperties(Constructor, staticProps); return Constructor; }

function ComponentView__possibleConstructorReturn(self, call) { if (call && (ComponentView__typeof(call) === "object" || typeof call === "function")) { return call; } return ComponentView__assertThisInitialized(self); }

function ComponentView__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ComponentView__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ComponentView_styles = {
  container: {
    position: 'relative',
    paddingLeft: '14px'
  },
  icon: {
    color: '#008',
    position: 'absolute',
    fontSize: '16px',
    top: '2px',
    left: '0px'
  }
};
/* eslint-disable react/forbid-prop-types */

var ComponentView_ComponentView =
/*#__PURE__*/
function (_Component) {
  ComponentView__inherits(ComponentView, _Component);

  function ComponentView(props) {
    var _this;

    ComponentView__classCallCheck(this, ComponentView);

    _this = ComponentView__possibleConstructorReturn(this, (ComponentView.__proto__ || Object.getPrototypeOf(ComponentView)).call(this, props));
    _this.open = _this.open.bind(ComponentView__assertThisInitialized(_this));
    _this.close = _this.close.bind(ComponentView__assertThisInitialized(_this));
    _this.ifFunction = _this.ifFunction.bind(ComponentView__assertThisInitialized(_this));
    _this.inlineView = _this.inlineView.bind(ComponentView__assertThisInitialized(_this));
    _this.childrenView = _this.childrenView.bind(ComponentView__assertThisInitialized(_this));
    _this.state = {
      open: false
    };
    return _this;
  }

  ComponentView__createClass(ComponentView, [{
    key: "getIcon",
    value: function getIcon() {
      return this.state.open ? external__react__default.a.createElement(external__mdi_material_ui_["Minus"], {
        style: ComponentView_styles.icon,
        onClick: this.close
      }) : external__react__default.a.createElement(external__mdi_material_ui_["Plus"], {
        style: ComponentView_styles.icon,
        onClick: this.open
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "ifFunction",
    value: function ifFunction(func, value) {
      return func ? external__react__default.a.createElement(components_Touchable, {
        onClick: func,
        value: this.props.value
      }, value) : value;
    }
  }, {
    key: "inlineView",
    value: function inlineView(selectedClass, onClick, _ref) {
      var className = _ref.className,
          id = _ref.id;
      var openTag = external__react__default.a.createElement(components_XmlHighlight, {
        className: selectedClass,
        onClick: onClick
      }, "<".concat(className, " id=\"").concat(id, "\"/>"));
      return this.ifFunction(onClick, openTag);
    }
  }, {
    key: "childrenView",
    value: function childrenView(selectedClass, onClick, _ref2, children) {
      var className = _ref2.className,
          id = _ref2.id;
      var openTag = external__react__default.a.createElement(components_XmlHighlight, {
        className: selectedClass,
        onClick: onClick
      }, "<".concat(className, " id=\"").concat(id, "\">"));
      var closeTag = external__react__default.a.createElement(components_XmlHighlight, {
        className: selectedClass,
        onClick: onClick
      }, "</".concat(className, ">"));
      return external__react__default.a.createElement(external__react_["Fragment"], null, this.ifFunction(onClick, openTag), external__react__default.a.createElement("div", null, children), this.ifFunction(onClick, closeTag));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          children = _props.children,
          onClick = _props.onClick,
          selected = _props.selected;
      var open = this.state.open;
      var hasChildren = external__react__default.a.isValidElement(children) || Array.isArray(children) && !!children.length;
      var icon = hasChildren ? this.getIcon() : null;
      var selectedClass = selected ? 'selected' : '';
      var renderFunc = hasChildren && open ? this.childrenView : this.inlineView;
      return external__react__default.a.createElement("div", {
        style: ComponentView_styles.container
      }, icon, renderFunc(selectedClass, onClick, value, children));
    }
  }]);

  return ComponentView;
}(external__react_["Component"]);

ComponentView_ComponentView.defaultProps = {
  children: [],
  onClick: null,
  selected: false
};
/* harmony default export */ var components_ComponentView = (ComponentView_ComponentView);
// CONCATENATED MODULE: ./src/web/components/TreeView/index.js




var TreeView_TreeView = function TreeView(_ref) {
  var root = _ref.root,
      onClick = _ref.onClick,
      selected = _ref.selected;
  return external__react__default.a.createElement(components_ComponentView, {
    value: root,
    selected: root === selected,
    onClick: onClick
  }, root.children && root.children.map(function (child, index) {
    return external__react__default.a.createElement(TreeView, {
      key: child.className + index.toString(),
      root: child,
      onClick: onClick,
      selected: selected
    });
  }));
};

TreeView_TreeView.defaultProps = {
  selected: null,
  onClick: null
};
/* harmony default export */ var components_TreeView = (TreeView_TreeView);
// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(23);
var Card__default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardHeader"
var CardHeader_ = __webpack_require__(24);
var CardHeader__default = /*#__PURE__*/__webpack_require__.n(CardHeader_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(25);
var CardContent__default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(26);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// CONCATENATED MODULE: ./src/web/components/Subtitle/index.js
function Subtitle__extends() { Subtitle__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Subtitle__extends.apply(this, arguments); }






var Subtitle_Subtitle = function Subtitle(props) {
  var children = props.children,
      color = props.color,
      className = props.className,
      style = props.style,
      level = props.level;
  return external__react__default.a.createElement(Typography__default.a, Subtitle__extends({}, props, {
    variant: "title",
    component: "h".concat(level + 1),
    className: className,
    style: style,
    color: color
  }), children);
};

Subtitle_Subtitle.defaultProps = {
  color: constant["COLOR_DEFAULT"],
  className: 'title',
  style: {},
  level: 1
};
/* harmony default export */ var components_Subtitle = (Subtitle_Subtitle);
// CONCATENATED MODULE: ./src/web/components/AttributItemList/index.js
/* eslint-disable react/forbid-prop-types */





var AttributItemList_styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  attribut: {
    flexShrink: '0'
  },
  value: {
    flexGrow: '1'
  }
};

var AttributItemList_AttributItemList = function AttributItemList(_ref) {
  var attribut = _ref.attribut,
      value = _ref.value;
  return external__react__default.a.createElement(ListItem__default.a, {
    style: AttributItemList_styles.items,
    dense: true,
    disableGutters: true
  }, external__react__default.a.createElement(components_Text, {
    style: AttributItemList_styles.attribut,
    className: "hljs-attr"
  }, attribut, " :"), external__react__default.a.createElement(components_HighlightVariableText, {
    noWrap: true,
    style: AttributItemList_styles.value,
    value: value
  }));
};

/* harmony default export */ var components_AttributItemList = (AttributItemList_AttributItemList);
// CONCATENATED MODULE: ./src/web/components/ObjectListView/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ObjectListView_ObjectListView = function ObjectListView(_ref) {
  var data = _ref.data;
  var items = Object.entries(data).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return {
      key: key,
      attribut: key,
      value: value
    };
  });
  return external__react__default.a.createElement(components_List, {
    data: items,
    Component: components_AttributItemList
  });
};

/* harmony default export */ var components_ObjectListView = (ObjectListView_ObjectListView);
// CONCATENATED MODULE: ./src/web/components/ViewInfo/index.js








var ViewInfo_styles = {
  card: {
    height: '100%',
    borderRadius: '0'
  }
};

var ViewInfo_ViewInfo = function ViewInfo(_ref) {
  var _ref$value = _ref.value,
      id = _ref$value.id,
      className = _ref$value.className,
      props = _ref$value.props;
  return external__react__default.a.createElement(Card__default.a, {
    style: ViewInfo_styles.card
  }, external__react__default.a.createElement(CardHeader__default.a, {
    title: className,
    subheader: "id : ".concat(id)
  }), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(CardContent__default.a, null, external__react__default.a.createElement(components_Subtitle, null, "Props : "), external__react__default.a.createElement(components_ObjectListView, {
    data: props
  })));
};

/* harmony default export */ var components_ViewInfo = (ViewInfo_ViewInfo);
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(27);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./src/web/widget/TreeNavigator/index.js
function TreeNavigator__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TreeNavigator__typeof = function _typeof(obj) { return typeof obj; }; } else { TreeNavigator__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TreeNavigator__typeof(obj); }

function TreeNavigator__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TreeNavigator__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TreeNavigator__createClass(Constructor, protoProps, staticProps) { if (protoProps) TreeNavigator__defineProperties(Constructor.prototype, protoProps); if (staticProps) TreeNavigator__defineProperties(Constructor, staticProps); return Constructor; }

function TreeNavigator__possibleConstructorReturn(self, call) { if (call && (TreeNavigator__typeof(call) === "object" || typeof call === "function")) { return call; } return TreeNavigator__assertThisInitialized(self); }

function TreeNavigator__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function TreeNavigator__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var TreeNavigator_styles = {
  container: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100%',
    overflowY: 'auto'
  },
  treeView: {
    padding: '10px'
  }
};

var TreeNavigator_TreeNavigator =
/*#__PURE__*/
function (_Component) {
  TreeNavigator__inherits(TreeNavigator, _Component);

  function TreeNavigator(props) {
    var _this;

    TreeNavigator__classCallCheck(this, TreeNavigator);

    _this = TreeNavigator__possibleConstructorReturn(this, (TreeNavigator.__proto__ || Object.getPrototypeOf(TreeNavigator)).call(this, props));
    _this.onSelected = _this.onSelected.bind(TreeNavigator__assertThisInitialized(_this));
    _this.state = {
      current: null
    };
    return _this;
  }

  TreeNavigator__createClass(TreeNavigator, [{
    key: "onSelected",
    value: function onSelected(item) {
      if (item !== this.state.current) {
        this.setState({
          current: item
        });
      } else {
        this.setState({
          current: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var tree = this.props.tree;
      var current = this.state.current;
      return external__react__default.a.createElement(Paper__default.a, {
        style: TreeNavigator_styles.container
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        direction: "row",
        alignItems: "stretch"
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        sm: 8,
        lg: 6,
        xs: 12,
        style: TreeNavigator_styles.treeView
      }, external__react__default.a.createElement(components_TreeView, {
        root: tree,
        selected: current,
        onClick: this.onSelected
      })), !!current && external__react__default.a.createElement(Grid__default.a, {
        item: true,
        sm: 4,
        lg: 6,
        xs: 12
      }, external__react__default.a.createElement(components_ViewInfo, {
        value: current
      }))));
    }
  }]);

  return TreeNavigator;
}(external__react_["Component"]);

/* harmony default export */ var widget_TreeNavigator = (TreeNavigator_TreeNavigator);
// CONCATENATED MODULE: ./pages/index.js
function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var pages_index =
/*#__PURE__*/
function (_Component) {
  pages__inherits(index, _Component);

  function index(props) {
    var _this;

    pages__classCallCheck(this, index);

    _this = pages__possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).call(this, props));
    _this.state = {
      tree: null
    };
    _this.updateTreeView = _this.updateTreeView.bind(pages__assertThisInitialized(_this));
    return _this;
  }

  pages__createClass(index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var connector = new WebConnector__default.a({});
      this.subscription = connector.getTreeView().subscribe(this.updateTreeView);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.subscription.unsubscribe();
    }
  }, {
    key: "updateTreeView",
    value: function updateTreeView(tree) {
      this.setState({
        tree: tree
      });
    }
  }, {
    key: "render",
    value: function render() {
      var tree = this.state.tree;
      return external__react__default.a.createElement(layout_Main, {
        title: "TreeView"
      }, tree ? external__react__default.a.createElement(widget_TreeNavigator, {
        tree: tree.root
      }) : external__react__default.a.createElement("p", null, "No devices connected"));
    }
  }]);

  return index;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ })
/******/ ]);