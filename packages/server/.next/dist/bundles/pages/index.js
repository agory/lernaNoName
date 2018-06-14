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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rn_noname_connector_dist_WebConnector__ = __webpack_require__("rn-noname-connector/dist/WebConnector");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rn_noname_connector_dist_WebConnector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rn_noname_connector_dist_WebConnector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_web_layout_Main__ = __webpack_require__("./src/web/layout/Main/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_web_widget_TreeNavigator__ = __webpack_require__("./src/web/widget/TreeNavigator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_web_material_utils_withRoot__ = __webpack_require__("./src/web/material-utils/withRoot.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index(props) {
    var _this;

    _classCallCheck(this, index);

    _this = _possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).call(this, props));
    _this.state = {
      tree: null
    };
    _this.updateTreeView = _this.updateTreeView.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var connector = new __WEBPACK_IMPORTED_MODULE_1_rn_noname_connector_dist_WebConnector___default.a({});
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_web_layout_Main__["a" /* default */], {
        title: "TreeView",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, tree ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_web_widget_TreeNavigator__["a" /* default */], {
        tree: tree.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "No devices connected"));
    }
  }]);

  return index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/web/components/AppBar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_AppBar__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Toolbar__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Title_index__ = __webpack_require__("./src/web/components/Title/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/AppBar/index.js";





var titleStyle = {
  flex: 1
};

var AppBar = function AppBar(_ref) {
  var title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_AppBar___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Toolbar___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Title_index__["a" /* default */], {
    style: titleStyle,
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, title)));
};

AppBar.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (AppBar);

/***/ }),

/***/ "./src/web/components/AttributItemList/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HighlightVariableText_index__ = __webpack_require__("./src/web/components/HighlightVariableText/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Text_index__ = __webpack_require__("./src/web/components/Text/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/AttributItemList/index.js";

/* eslint-disable react/forbid-prop-types */





var styles = {
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

var AttributItemList = function AttributItemList(_ref) {
  var attribut = _ref.attribut,
      value = _ref.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem___default.a, {
    style: styles.items,
    dense: true,
    disableGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Text_index__["a" /* default */], {
    style: styles.attribut,
    className: "hljs-attr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, attribut, " :"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__HighlightVariableText_index__["a" /* default */], {
    noWrap: true,
    style: styles.value,
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }));
};

AttributItemList.propTypes = {
  attribut: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (AttributItemList);

/***/ }),

/***/ "./src/web/components/ComponentView/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mdi_material_ui__ = __webpack_require__("mdi-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mdi_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mdi_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__XmlHighlight_index__ = __webpack_require__("./src/web/components/XmlHighlight/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Touchable_index__ = __webpack_require__("./src/web/components/Touchable/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/ComponentView/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var styles = {
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

var ComponentView =
/*#__PURE__*/
function (_Component) {
  _inherits(ComponentView, _Component);

  function ComponentView(props) {
    var _this;

    _classCallCheck(this, ComponentView);

    _this = _possibleConstructorReturn(this, (ComponentView.__proto__ || Object.getPrototypeOf(ComponentView)).call(this, props));
    _this.open = _this.open.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.ifFunction = _this.ifFunction.bind(_assertThisInitialized(_this));
    _this.inlineView = _this.inlineView.bind(_assertThisInitialized(_this));
    _this.childrenView = _this.childrenView.bind(_assertThisInitialized(_this));
    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(ComponentView, [{
    key: "getIcon",
    value: function getIcon() {
      return this.state.open ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_mdi_material_ui__["Minus"], {
        style: styles.icon,
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_mdi_material_ui__["Plus"], {
        style: styles.icon,
        onClick: this.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
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
      return func ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Touchable_index__["a" /* default */], {
        onClick: func,
        value: this.props.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, value) : value;
    }
  }, {
    key: "inlineView",
    value: function inlineView(selectedClass, onClick, _ref) {
      var className = _ref.className,
          id = _ref.id;
      var openTag = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__XmlHighlight_index__["a" /* default */], {
        className: selectedClass,
        onClick: onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "<".concat(className, " id=\"").concat(id, "\"/>"));
      return this.ifFunction(onClick, openTag);
    }
  }, {
    key: "childrenView",
    value: function childrenView(selectedClass, onClick, _ref2, children) {
      var className = _ref2.className,
          id = _ref2.id;
      var openTag = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__XmlHighlight_index__["a" /* default */], {
        className: selectedClass,
        onClick: onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "<".concat(className, " id=\"").concat(id, "\">"));
      var closeTag = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__XmlHighlight_index__["a" /* default */], {
        className: selectedClass,
        onClick: onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "</".concat(className, ">"));
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, this.ifFunction(onClick, openTag), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, children), this.ifFunction(onClick, closeTag));
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
      var hasChildren = __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(children) || Array.isArray(children) && !!children.length;
      var icon = hasChildren ? this.getIcon() : null;
      var selectedClass = selected ? 'selected' : '';
      var renderFunc = hasChildren && open ? this.childrenView : this.inlineView;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, icon, renderFunc(selectedClass, onClick, value, children));
    }
  }]);

  return ComponentView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ComponentView.propTypes = {
  selected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({}).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
ComponentView.defaultProps = {
  children: [],
  onClick: null,
  selected: false
};
/* harmony default export */ __webpack_exports__["a"] = (ComponentView);

/***/ }),

/***/ "./src/web/components/Console/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__List__ = __webpack_require__("./src/web/components/List/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/Console/index.js";




var listStyle = function listStyle(height) {
  return {
    padding: '0',
    overflowY: 'auto',
    height: height,
    wordBreak: 'break-all'
  };
};

var Console = function Console(_ref) {
  var data = _ref.data,
      ComponentLine = _ref.ComponentLine,
      height = _ref.height;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */], {
    data: data,
    Component: ComponentLine,
    style: listStyle(height),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  });
};

Console.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({})).isRequired,
  ComponentLine: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
Console.defaultProps = {
  height: '100%'
};
/* harmony default export */ __webpack_exports__["a"] = (Console);

/***/ }),

/***/ "./src/web/components/Highlight/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter__ = __webpack_require__("react-syntax-highlighter");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Text_index__ = __webpack_require__("./src/web/components/Text/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Ignore_index__ = __webpack_require__("./src/web/components/Ignore/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/Highlight/index.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* eslint-disable react/forbid-prop-types */






var Highlight = function Highlight(_ref) {
  var lang = _ref.lang,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["lang", "children"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter___default.a, {
    PreTag: __WEBPACK_IMPORTED_MODULE_4__Ignore_index__["a" /* default */],
    codeTagProps: rest,
    CodeTag: __WEBPACK_IMPORTED_MODULE_3__Text_index__["a" /* default */],
    language: lang,
    useInlineStyles: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, children);
};

Highlight.propTypes = {
  lang: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired
};
Highlight.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Highlight);

/***/ }),

/***/ "./src/web/components/HighlightVariableText/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Highlight_index__ = __webpack_require__("./src/web/components/Highlight/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/HighlightVariableText/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* eslint-disable react/forbid-prop-types */




var HighlightVariableText = function HighlightVariableText(_ref) {
  var value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["value"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Highlight_index__["a" /* default */], _extends({}, rest, {
    lang: "json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), JSON.stringify(value));
};

HighlightVariableText.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (HighlightVariableText);

/***/ }),

/***/ "./src/web/components/Ignore/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/Ignore/index.js";

/* eslint-disable react/forbid-prop-types */



var Ignore = function Ignore(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, children);
};

Ignore.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Ignore);

/***/ }),

/***/ "./src/web/components/List/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_List__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_List__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/List/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var List = function List(_ref) {
  var data = _ref.data,
      Component = _ref.Component,
      style = _ref.style,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_List___default.a, {
    style: style,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, data.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({
      key: item.key || index
    }, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }));
  }));
};

List.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object).isRequired,
  Component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
List.defaultProps = {
  style: {},
  className: ''
};
/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),

/***/ "./src/web/components/ObjectListView/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__List_index__ = __webpack_require__("./src/web/components/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AttributItemList_index__ = __webpack_require__("./src/web/components/AttributItemList/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/ObjectListView/index.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ObjectListView = function ObjectListView(_ref) {
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__List_index__["a" /* default */], {
    data: items,
    Component: __WEBPACK_IMPORTED_MODULE_3__AttributItemList_index__["a" /* default */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  });
};

ObjectListView.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (ObjectListView);

/***/ }),

/***/ "./src/web/components/Subtitle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_json__ = __webpack_require__("./src/web/constant.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constant_json__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/Subtitle/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var Subtitle = function Subtitle(props) {
  var children = props.children,
      color = props.color,
      className = props.className,
      style = props.style,
      level = props.level;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography___default.a, _extends({}, props, {
    variant: "title",
    component: "h".concat(level + 1),
    className: className,
    style: style,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), children);
};

Subtitle.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_3__constant_json__["COLOR"]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}),
  level: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([1, 2, 3, 4, 5])
};
Subtitle.defaultProps = {
  color: __WEBPACK_IMPORTED_MODULE_3__constant_json__["COLOR_DEFAULT"],
  className: 'title',
  style: {},
  level: 1
};
/* harmony default export */ __webpack_exports__["a"] = (Subtitle);

/***/ }),

/***/ "./src/web/components/Tabs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Tabs__ = __webpack_require__("@material-ui/core/Tabs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Tab__ = __webpack_require__("@material-ui/core/Tab");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/Tabs/index.js";

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

var Tabs =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Tab___default.a, {
        key: item.value || index,
        value: item.value || index,
        label: item.label,
        icon: item.icon,
        classes: {
          root: classes.tabRoot,
          labelContainer: classes.labelContainer
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: style,
        className: classes.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Tabs___default.a, {
        classes: {
          root: classes.tabsRoot
        },
        className: className,
        value: value,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, tabs), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, selectedTab.component()));
    }
  }]);

  return Tabs;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var itemType = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  icon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
});
Tabs.propTypes = {
  items: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(itemType).isRequired,
  initial: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}),
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}).isRequired
};
Tabs.defaultProps = {
  initial: '',
  className: '',
  onChange: null,
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["withStyles"])(styles)(Tabs));

/***/ }),

/***/ "./src/web/components/Text/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/Text/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/forbid-prop-types */



var COLOR = ['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default'];

var Text = function Text(props) {
  var children = props.children,
      align = props.align,
      color = props.color;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography___default.a, _extends({}, props, {
    align: align,
    color: color,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), children);
};

Text.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  align: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(COLOR)
};
Text.defaultProps = {
  align: 'inherit',
  color: 'default'
};
/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),

/***/ "./src/web/components/Title/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_json__ = __webpack_require__("./src/web/constant.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constant_json__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/Title/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var Title = function Title(props) {
  var children = props.children,
      color = props.color,
      className = props.className,
      style = props.style;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Typography___default.a, _extends({}, props, {
    variant: "headline",
    component: "h1",
    className: className,
    style: style,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), children);
};

Title.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_3__constant_json__["COLOR"]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({})
};
Title.defaultProps = {
  color: __WEBPACK_IMPORTED_MODULE_3__constant_json__["COLOR_DEFAULT"],
  className: 'title',
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "./src/web/components/Touchable/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/Touchable/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable
  jsx-a11y/anchor-is-valid,
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions */



var Touchable =
/*#__PURE__*/
function (_Component) {
  _inherits(Touchable, _Component);

  function Touchable(props) {
    var _this;

    _classCallCheck(this, Touchable);

    _this = _possibleConstructorReturn(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).call(this, props));
    _this.onClickHandler = _this.onClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Touchable, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        onClick: this.onClickHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, children);
    }
  }]);

  return Touchable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Touchable.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number])
};
Touchable.defaultProps = {
  value: undefined
};
/* harmony default export */ __webpack_exports__["a"] = (Touchable);

/***/ }),

/***/ "./src/web/components/TreeView/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentView_index__ = __webpack_require__("./src/web/components/ComponentView/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/TreeView/index.js";




var TreeView = function TreeView(_ref) {
  var root = _ref.root,
      onClick = _ref.onClick,
      selected = _ref.selected;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ComponentView_index__["a" /* default */], {
    value: root,
    selected: root === selected,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, root.children && root.children.map(function (child, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TreeView, {
      key: child.className + index.toString(),
      root: child,
      onClick: onClick,
      selected: selected,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    });
  }));
};

TreeView.propTypes = {
  root: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
  }).isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  selected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({})
};
TreeView.defaultProps = {
  selected: null,
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (TreeView);

/***/ }),

/***/ "./src/web/components/ViewInfo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CardHeader__ = __webpack_require__("@material-ui/core/CardHeader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CardHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CardHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardContent__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Divider__ = __webpack_require__("@material-ui/core/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Subtitle_index__ = __webpack_require__("./src/web/components/Subtitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ObjectListView_index__ = __webpack_require__("./src/web/components/ObjectListView/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/ViewInfo/index.js";








var styles = {
  card: {
    height: '100%',
    borderRadius: '0'
  }
};

var ViewInfo = function ViewInfo(_ref) {
  var _ref$value = _ref.value,
      id = _ref$value.id,
      className = _ref$value.className,
      props = _ref$value.props;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Card___default.a, {
    style: styles.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CardHeader___default.a, {
    title: className,
    subheader: "id : ".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Divider___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardContent___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Subtitle_index__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Props : "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ObjectListView_index__["a" /* default */], {
    data: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })));
};

ViewInfo.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (ViewInfo);

/***/ }),

/***/ "./src/web/components/XmlHighlight/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Highlight_index__ = __webpack_require__("./src/web/components/Highlight/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/components/XmlHighlight/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* eslint-disable react/forbid-prop-types */




var XmlHighlight = function XmlHighlight(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Highlight_index__["a" /* default */], _extends({}, rest, {
    lang: "HTML",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), children);
};

XmlHighlight.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (XmlHighlight);

/***/ }),

/***/ "./src/web/console/BridgeConsole/BridgeFilterForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export format */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_FormControl__ = __webpack_require__("@material-ui/core/FormControl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_FormControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_FormControl__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/console/BridgeConsole/BridgeFilterForm/index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var format = function format(onChange, name) {
  return function (value) {
    return onChange(_defineProperty({}, name, value.target.value));
  };
};
var form = {
  display: 'flex'
};

var BridgeFilterForm = function BridgeFilterForm(_ref) {
  var module = _ref.module,
      method = _ref.method,
      onChange = _ref.onChange;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_FormControl___default.a, {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField___default.a, {
    placeholder: "Module filter",
    value: module,
    onChange: format(onChange, 'module'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_FormControl___default.a, {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField___default.a, {
    placeholder: "Method filter",
    value: method,
    onChange: format(onChange, 'method'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })));
};

BridgeFilterForm.propTypes = {
  module: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  method: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (BridgeFilterForm);

/***/ }),

/***/ "./src/web/console/BridgeConsole/BridgeLine/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemText__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemIcon__ = __webpack_require__("@material-ui/core/ListItemIcon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItemSecondaryAction__ = __webpack_require__("@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItemSecondaryAction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItemSecondaryAction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mdi_material_ui__ = __webpack_require__("mdi-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mdi_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mdi_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_HighlightVariableText_index__ = __webpack_require__("./src/web/components/HighlightVariableText/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/console/BridgeConsole/BridgeLine/index.js";

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

var icon = {
  fontSize: '0.9rem'
};

var iconJs = _objectSpread({
  color: '#FFC107'
}, icon);

var BridgeLine = function BridgeLine(_ref) {
  var type = _ref.type,
      args = _ref.args,
      module = _ref.module,
      method = _ref.method;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem___default.a, {
    style: listItemStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemIcon___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, type === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_mdi_material_ui__["LanguageJavascript"], {
    style: iconJs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_mdi_material_ui__["Cellphone"], {
    style: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemText___default.a, {
    disableTypography: true,
    style: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_HighlightVariableText_index__["a" /* default */], {
    value: args,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItemSecondaryAction___default.a, {
    style: secondary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "hljs-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, module), "@", method));
};

BridgeLine.propTypes = {
  args: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any).isRequired,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  module: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  method: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (BridgeLine);

/***/ }),

/***/ "./src/web/console/BridgeConsole/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Console_index__ = __webpack_require__("./src/web/components/Console/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BridgeLine_index__ = __webpack_require__("./src/web/console/BridgeConsole/BridgeLine/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BridgeFilterForm_index__ = __webpack_require__("./src/web/console/BridgeConsole/BridgeFilterForm/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/console/BridgeConsole/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var styles = {
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

var BridgeConsole =
/*#__PURE__*/
function (_Component) {
  _inherits(BridgeConsole, _Component);

  function BridgeConsole(props) {
    var _this;

    _classCallCheck(this, BridgeConsole);

    _this = _possibleConstructorReturn(this, (BridgeConsole.__proto__ || Object.getPrototypeOf(BridgeConsole)).call(this, props));
    _this.filterChange = _this.filterChange.bind(_assertThisInitialized(_this));
    _this.filter = _this.filter.bind(_assertThisInitialized(_this));
    _this.state = {
      filters: {
        module: '',
        method: ''
      }
    };
    return _this;
  }

  _createClass(BridgeConsole, [{
    key: "filterChange",
    value: function filterChange(value) {
      this.setState({
        filters: _objectSpread({}, this.state.filters, value)
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
          rest = _objectWithoutProperties(_props, ["data"]);

      var _state$filters2 = this.state.filters,
          module = _state$filters2.module,
          method = _state$filters2.method;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__BridgeFilterForm_index__["a" /* default */], {
        module: module,
        method: method,
        onChange: this.filterChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: styles.console,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Console_index__["a" /* default */], _extends({
        data: data.filter(this.filter),
        ComponentLine: __WEBPACK_IMPORTED_MODULE_3__BridgeLine_index__["a" /* default */]
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }))));
    }
  }]);

  return BridgeConsole;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

BridgeConsole.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({})).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (BridgeConsole);

/***/ }),

/***/ "./src/web/constant.json":
/***/ (function(module, exports) {

module.exports = {"COLOR":["inherit","primary","textSecondary","secondary","error","default"],"COLOR_DEFAULT":"default"}

/***/ }),

/***/ "./src/web/layout/Flex/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/layout/Flex/index.js";


var styles = {
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

var Flex = function Flex(_ref) {
  var header = _ref.header,
      children = _ref.children,
      footer = _ref.footer;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, header && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    style: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, header), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    style: styles.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, children), footer && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    style: styles.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, footer));
};

Flex.propTypes = {
  header: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  footer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
Flex.defaultProps = {
  header: null,
  footer: null
};
/* harmony default export */ __webpack_exports__["a"] = (Flex);

/***/ }),

/***/ "./src/web/layout/Main/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_jss_lib_JssProvider__ = __webpack_require__("react-jss/lib/JssProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_jss_lib_JssProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_jss_lib_JssProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AppBar_index__ = __webpack_require__("./src/web/components/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__widget_DevTools_index__ = __webpack_require__("./src/web/widget/DevTools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Flex_index__ = __webpack_require__("./src/web/layout/Flex/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/layout/Main/index.js";








var generateClassName = Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["createGenerateClassName"])({
  dangerouslyUseGlobalCSS: true
});

var Main = function Main(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_jss_lib_JssProvider___default.a, {
    generateClassName: generateClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/reset.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/googlecode.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/utils.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    key: "roboto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    key: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Flex_index__["a" /* default */], {
    header: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_AppBar_index__["a" /* default */], {
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }),
    footer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__widget_DevTools_index__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, children)));
};

Main.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node)]).isRequired,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ "./src/web/material-utils/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__("jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__ = __webpack_require__("@material-ui/core/colors/purple");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green__ = __webpack_require__("@material-ui/core/colors/green");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green__);



 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      light: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default.a[700]
    },
    secondary: {
      light: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default.a[700]
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),

/***/ "./src/web/material-utils/withRoot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_jss_lib_JssProvider__ = __webpack_require__("react-jss/lib/JssProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_jss_lib_JssProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_jss_lib_JssProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CssBaseline__ = __webpack_require__("@material-ui/core/CssBaseline");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getPageContext__ = __webpack_require__("./src/web/material-utils/getPageContext.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/material-utils/withRoot.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var generateClassName = Object(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["createGenerateClassName"])({
  dangerouslyUseGlobalCSS: true,
  productionPrefix: 'c'
});

function withRoot(Component) {
  var WithRoot =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot(props) {
      var _this;

      _classCallCheck(this, WithRoot);

      _this = _possibleConstructorReturn(this, (WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call(this, props));
      _this.pageContext = _this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_5__getPageContext__["a" /* default */])();
      console.log(_this.pageContext);
      return _this;
    }

    _createClass(WithRoot, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: "render",
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_jss_lib_JssProvider___default.a, {
          generateClassName: generateClassName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["MuiThemeProvider"], {
          theme: this.pageContext.theme,
          sheetsManager: this.pageContext.sheetsManager,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CssBaseline___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }))));
      }
    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  WithRoot.propTypes = {
    pageContext: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
  };

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

/* unused harmony default export */ var _unused_webpack_default_export = (withRoot);

/***/ }),

/***/ "./src/web/widget/DevTools/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rn_noname_connector_dist_WebConnector__ = __webpack_require__("rn-noname-connector/dist/WebConnector");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rn_noname_connector_dist_WebConnector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rn_noname_connector_dist_WebConnector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Tabs_index__ = __webpack_require__("./src/web/components/Tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__console_BridgeConsole_index__ = __webpack_require__("./src/web/console/BridgeConsole/index.js");
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/widget/DevTools/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var styles = {
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

var DevTools =
/*#__PURE__*/
function (_Component) {
  _inherits(DevTools, _Component);

  _createClass(DevTools, null, [{
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

    _classCallCheck(this, DevTools);

    _this = _possibleConstructorReturn(this, (DevTools.__proto__ || Object.getPrototypeOf(DevTools)).call(this, props));
    _this.state = {
      bridgeData: []
    };
    _this.updateData = _this.updateData.bind(_assertThisInitialized(_this));
    _this.handleData = _this.handleData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DevTools, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.connector = new __WEBPACK_IMPORTED_MODULE_2_rn_noname_connector_dist_WebConnector___default.a({});
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
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__console_BridgeConsole_index__["a" /* default */], {
            height: "150px",
            data: bridgeData,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Paper___default.a, {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Tabs_index__["a" /* default */], {
        initial: "bridge",
        style: styles.tabs,
        items: this.getItems(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }));
    }
  }]);

  return DevTools;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DevTools);

/***/ }),

/***/ "./src/web/widget/TreeNavigator/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_TreeView_index__ = __webpack_require__("./src/web/components/TreeView/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ViewInfo_index__ = __webpack_require__("./src/web/components/ViewInfo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__);
var _jsxFileName = "/home/agory/Project/stage/lernaNoName/packages/server/src/web/widget/TreeNavigator/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var styles = {
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

var TreeNavigator =
/*#__PURE__*/
function (_Component) {
  _inherits(TreeNavigator, _Component);

  function TreeNavigator(props) {
    var _this;

    _classCallCheck(this, TreeNavigator);

    _this = _possibleConstructorReturn(this, (TreeNavigator.__proto__ || Object.getPrototypeOf(TreeNavigator)).call(this, props));
    _this.onSelected = _this.onSelected.bind(_assertThisInitialized(_this));
    _this.state = {
      current: null
    };
    return _this;
  }

  _createClass(TreeNavigator, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Paper___default.a, {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        container: true,
        direction: "row",
        alignItems: "stretch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        item: true,
        sm: 8,
        lg: 6,
        xs: 12,
        style: styles.treeView,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_TreeView_index__["a" /* default */], {
        root: tree,
        selected: current,
        onClick: this.onSelected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), !!current && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        item: true,
        sm: 4,
        lg: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ViewInfo_index__["a" /* default */], {
        value: current,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }))));
    }
  }]);

  return TreeNavigator;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

TreeNavigator.propTypes = {
  tree: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    root: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (TreeNavigator);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Card":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/FormControl":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Tab":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/TextField":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/green":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/colors/purple":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/purple");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "jss":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "mdi-material-ui":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "react-syntax-highlighter":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "rn-noname-connector/dist/WebConnector":
/***/ (function(module, exports) {

module.exports = require("rn-noname-connector/dist/WebConnector");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map