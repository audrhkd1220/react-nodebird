webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/wooseok/Study/react-nodebird/prepare/front/components/UserProfile.js\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n    me = _useSelector.me,\n    isLoggingOut = _useSelector.isLoggingOut;\n  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"logoutRequestAction\"])());\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: [\"\\uC9F9\\uC9F9\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 35\n      }, _this), \"0\"]\n    }, \"twit\", true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: [\"\\uD314\\uB85C\\uC789\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 42\n      }, _this), \"0\"]\n    }, \"followings\", true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: [\"\\uD314\\uB85C\\uC6CC\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 42\n      }, _this), \"0\"]\n    }, \"followings\", true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }, _this)],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n        children: me.nickname[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 25\n      }, _this),\n      title: me.nickname\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      onClick: onLogOut,\n      loading: isLoggingOut,\n      children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, _this);\n};\n_s(UserProfile, \"0j+tLtnaJEeGQucLU7D+h+vXgfI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz8yN2I5Il0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJpc0xvZ2dpbmdPdXQiLCJvbkxvZ091dCIsInVzZUNhbGxiYWNrIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNDO0FBQ1c7QUFDQTtBQUFBO0FBRXZELElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLEdBQVM7RUFBQTtFQUN0QixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsbUJBQTZCQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQXZEQyxFQUFFLGdCQUFGQSxFQUFFO0lBQUVDLFlBQVksZ0JBQVpBLFlBQVk7RUFFeEIsSUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDL0JSLFFBQVEsQ0FBQ1MsMEVBQW1CLEVBQUUsQ0FBQztFQUNuQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0kscUVBQUMseUNBQUk7SUFDRCxPQUFPLEVBQUUsY0FDTDtNQUFBLHdDQUFrQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQU07SUFBQSxHQUFmLE1BQU07TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFnQixlQUMvQjtNQUFBLDhDQUF5QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQU07SUFBQSxHQUF0QixZQUFZO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBaUIsZUFDdEM7TUFBQSw4Q0FBeUI7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUFNO0lBQUEsR0FBdEIsWUFBWTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQWlCLENBQ3hDO0lBQUEsd0JBRUYscUVBQUMseUNBQUksQ0FBQyxJQUFJO01BQ04sTUFBTSxlQUFFLHFFQUFDLDJDQUFNO1FBQUEsVUFBRUosRUFBRSxDQUFDSyxRQUFRLENBQUMsQ0FBQztNQUFDO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBVztNQUMxQyxLQUFLLEVBQUVMLEVBQUUsQ0FBQ0s7SUFBUztNQUFBO01BQUE7TUFBQTtJQUFBLFNBQ3JCLGVBQ0YscUVBQUMsMkNBQU07TUFBQyxPQUFPLEVBQUVILFFBQVM7TUFBQyxPQUFPLEVBQUVELFlBQWE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBYztFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FDNUQ7QUFFZixDQUFDO0FBQUEsR0F2QktQLFdBQVc7RUFBQSxRQUNJRSx1REFBVyxFQUNDQyx1REFBVztBQUFBO0FBQUEsS0FGdENILFdBQVc7QUF5QkZBLDBFQUFXLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEF2YXRhciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBsb2dvdXRSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XG5cbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7IG1lLCBpc0xvZ2dpbmdPdXQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG5cbiAgICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPuynueynuTxiciAvPjA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdzXCI+7YyU66Gc7J6JPGJyIC8+MDwvZGl2PixcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj7tjJTroZzsm4w8YnIgLz4wPC9kaXY+XG4gICAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZC5NZXRhIFxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fVxuICAgICAgICAgICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fSBsb2FkaW5nPXtpc0xvZ2dpbmdPdXR9PuuhnOq3uOyVhOybgzwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n");

/***/ })

})