(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ 95722);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TicketSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TicketSidebar */ 20803);
/* harmony import */ var _components_ModalOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ModalOne */ 30806);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "App is loading")),
      _useState4 = _slicedToArray(_useState3, 2),
      child = _useState4[0],
      setChild = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var script = document.createElement("script");
    script.src = "https://static.freshdev.io/fdk/2.0/assets/fresh_client.js";
    script.addEventListener("load", function () {
      return setLoaded(true);
    });
    script.defer = true;
    document.head.appendChild(script);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!loaded) return;
    app.initialized().then(function (client) {
      client.instance.context().then(function (data) {
        var location = data.location;

        if (location === "ticket_sidebar") {
          client.instance.resize({
            height: "700px"
          });
          setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_TicketSidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
            client: client
          }));
        }

        if (location === "full_page_app") {
          setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ModalOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
            client: client
          }));
        }
      });
    });
  }, [loaded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, child);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 30806:
/*!************************************!*\
  !*** ./src/components/ModalOne.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalOne)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ 43832);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ 28889);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ 22318);


function ModalOne() {
  // useEffect(() => {
  //     props.client.data.get("loggedInUser").then(function (data) {
  //         const agentName = data.loggedInUser.contact.name;
  //         props.client.interface.trigger("showNotify", {
  //             type: "success",
  //             message: `Hi ${agentName}, Welcome Back!`,
  //         });
  //     });
  // }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      margin: "auto",
      textAlign: "center",
      padding: "50px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3",
    gutterBottom: true
  }, "Coming Soon!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "textSecondary"
  }, "We are currently working hard on this page!")));
}

/***/ }),

/***/ 20803:
/*!*****************************************!*\
  !*** ./src/components/TicketSidebar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ 9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ 99226);
/* harmony import */ var _assets_Dash_Circle_Preloader_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/Dash-Circle-Preloader.svg */ 9993);
/* harmony import */ var _assets_Dash_Circle_Preloader_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_Dash_Circle_Preloader_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_illustration_404_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/illustration_404.svg */ 47366);
/* harmony import */ var _assets_illustration_404_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_illustration_404_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ 96486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ 69397);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ 23972);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/AccordionDetails */ 63083);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/AccordionSummary */ 61250);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ 23508);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ 22715);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Accordion */ 82090);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// window global








 //
// import Accordion from "@mui/material/Accordion";







var TicketSidebar = function TicketSidebar(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      emailUser = _useState4[0],
      setEmailUser = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      informationOrder = _useState6[0],
      setInformationOrder = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      errorMessage = _useState8[0],
      setErrorMessage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      isLoading = _useState10[0],
      setIsLoading = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      key = _useState12[0],
      setKey = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      expanded = _useState14[0],
      setExpanded = _useState14[1];

  var handleExpand = function handleExpand(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            props.client.data.get("contact").then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var _data$contact, name, email;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _data$contact = data.contact, name = _data$contact.name, email = _data$contact.email;
                        setEmailUser(email);
                        setName(name);
                        _context.next = 5;
                        return axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://kiruki.online/api/v1/freshdesk/search", {
                          key: email
                        }).then(function (res) {
                          if (!res.data.message) {
                            var _data = _toConsumableArray(res.data);

                            setInformationOrder(_data);
                            setExpanded(_data[0].TrackingNumber);
                            setErrorMessage(false);
                          } else {
                            setInformationOrder([]);
                            setErrorMessage(true);
                          }
                        });

                      case 5:
                        setIsLoading(false);

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);

  function handleOpenLink() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://www.google.com/";
    window.open(link, "_blank", "");
  }

  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
      component: "img",
      alt: "img",
      "data-sizes": "auto",
      src: (_assets_Dash_Circle_Preloader_svg__WEBPACK_IMPORTED_MODULE_3___default()),
      className: "lazyload blur-up",
      sx: {
        width: "100%",
        height: "auto",
        objectFit: "fill",
        overflow: "hidden"
      }
    });
  }

  console.log("informationOrder:", informationOrder);

  var handleSearch = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();

              if (!(key != "")) {
                _context3.next = 4;
                break;
              }

              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://kiruki.online/api/v1/freshdesk/search", {
                key: key
              }).then(function (res) {
                if (!res.data.message || res.data.length > 0) {
                  var data = _toConsumableArray(res.data);

                  setErrorMessage(false);
                  setInformationOrder(data);
                  setKey("");
                } else {
                  setInformationOrder([]);
                  setErrorMessage(true);
                }
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSearch(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    setKey(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "form",
    sx: {
      "& > :not(style)": {
        width: "25ch"
      }
    },
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Search...",
    variant: "standard",
    value: key,
    onChange: handleChange
  })), informationOrder.map(function (info, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: index,
      style: {
        padding: 0
      },
      expanded: expanded === info.TrackingNumber,
      onChange: handleExpand(info.TrackingNumber)
    }, "/*", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_9__["default"], {
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10__["default"], null),
      "aria-controls": info.TrackingNumber,
      id: "category" + info.TrackingNumber,
      style: {
        padding: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        paddingRight: "10px"
      }
    }, info.OrderName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, info.PaymentGateway))), " ", "*/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_12__["default"], {
      style: {
        padding: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "Order Link:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      onClick: function onClick() {
        return handleOpenLink(info.orderLink);
      }
    }, "Click"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "Customer:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        overflowWrap: "anywhere",
        fontSize: "14px"
      }
    }, info.Name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        overflowWrap: "anywhere",
        fontSize: "14px"
      }
    }, info.Email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "Date of Order:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        overflowWrap: "anywhere",
        fontSize: "14px"
      }
    }, new Date(info.dateOfOrder.slice(0, info.dateOfOrder.lastIndexOf("-"))).toLocaleString()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "VietNam time:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        overflowWrap: "anywhere",
        fontSize: "14px"
      }
    }, new Date(new Date(info.dateOfOrder).valueOf() + 7 * 60 * 60 * 1000).toLocaleString()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "Nepal time:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        overflowWrap: "anywhere",
        fontSize: "14px"
      }
    }, new Date(new Date(info.dateOfOrder).valueOf() + 5.45 * 60 * 60 * 1000).toLocaleString("ne-NP")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "Tracking/TrackingLink:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        overflowWrap: "anywhere",
        fontSize: "14px"
      }
    }, info.TrackingLink))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        overflowWrap: "anywhere",
        fontSize: "14px"
      }
    }, info.TrackingStatus))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "Address:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        overflowWrap: "anywhere",
        fontSize: "14px"
      }
    }, info.Address))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#6f7c87"
      }
    }, "TransactionId:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 500,
        paddingBottom: "10px"
      }
    }, info.transaction_id.map(function (transId, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        key: i,
        style: _defineProperty({
          overflowWrap: "anywhere",
          fontSize: "14px"
        }, "overflowWrap", "anywhere")
      }, transId);
    })))));
  }));
};

TicketSidebar.propTypes = {
  client: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketSidebar);

/***/ }),

/***/ 55579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render(
/*#__PURE__*/
// <React.StrictMode>
react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null), // </React.StrictMode>,
document.getElementById("root"));

/***/ }),

/***/ 39087:
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB","sourcesContent":[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n#root {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\np {\n    margin-top: 7px;\n    margin-bottom: 7px;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,8JAA8J;IAC9J,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,+EAA+E;AACnF;AACA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,kBAAkB;AACtB","sourcesContent":["body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n#root {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\np {\n    margin-top: 7px;\n    margin-bottom: 7px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9993:
/*!**********************************************!*\
  !*** ./src/assets/Dash-Circle-Preloader.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "/assets/img/Dash-Circle-Preloaderf60893a3.svg";

/***/ }),

/***/ 47366:
/*!*****************************************!*\
  !*** ./src/assets/illustration_404.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "/assets/img/illustration_404fedd8953.svg";

/***/ }),

/***/ 95722:
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ 39087);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 98548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 51424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.e87426de.js.map