webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar initialState = {\n  isLoggingIn: false,\n  //로그인 시도중\n  isLoggedIn: false,\n  isLoggingOut: false,\n  //로그아웃 시도중\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nvar loginRequestAction = function loginRequestAction(data) {\n  return {\n    type: 'LOG_IN_REQUEST',\n    data: data\n  };\n};\nvar logoutRequestAction = function logoutRequestAction() {\n  return {\n    type: 'LOG_OUT_REQUEST'\n  };\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case 'LOG_IN_REQUEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: true\n      });\n    case 'LOG_IN_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: true,\n        me: _objectSpread(_objectSpread({}, action.data), {}, {\n          nickname: 'wsJeong'\n        })\n      });\n    case 'LOG_IN_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: false\n      });\n    case 'LOG_OUT_REQUEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: true\n      });\n    case 'LOG_OUT_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false,\n        isLoggedIn: false,\n        me: null\n      });\n    case 'LOG_OUT_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2luZ0luIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ091dCIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsV0FBVyxFQUFFLEtBQUs7RUFBRTtFQUNwQkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFlBQVksRUFBRSxLQUFLO0VBQUU7RUFDckJDLEVBQUUsRUFBRSxJQUFJO0VBQ1JDLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFDZEMsU0FBUyxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQUVNLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0IsQ0FBSUMsSUFBSSxFQUFLO0VBQ3hDLE9BQU87SUFDSEMsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkQsSUFBSSxFQUFKQTtFQUNKLENBQUM7QUFDTCxDQUFDO0FBRU0sSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixHQUFTO0VBQ3JDLE9BQU87SUFDSEQsSUFBSSxFQUFFO0VBQ1YsQ0FBQztBQUNMLENBQUM7QUFHRCxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFxQztFQUFBLElBQWpDQyxLQUFLLHVFQUFHWixZQUFZO0VBQUEsSUFBRWEsTUFBTTtFQUN6QyxRQUFPQSxNQUFNLENBQUNKLElBQUk7SUFDZCxLQUFLLGdCQUFnQjtNQUNqQix1Q0FDT0csS0FBSztRQUNSWCxXQUFXLEVBQUU7TUFBSTtJQUV6QixLQUFLLGdCQUFnQjtNQUNqQix1Q0FDT1csS0FBSztRQUNSWCxXQUFXLEVBQUUsS0FBSztRQUNsQkMsVUFBVSxFQUFFLElBQUk7UUFDaEJFLEVBQUUsa0NBQU9TLE1BQU0sQ0FBQ0wsSUFBSTtVQUFFTSxRQUFRLEVBQUU7UUFBUztNQUFFO0lBRW5ELEtBQUssZ0JBQWdCO01BQ2pCLHVDQUNPRixLQUFLO1FBQ1JYLFdBQVcsRUFBRSxLQUFLO1FBQ2xCQyxVQUFVLEVBQUU7TUFBSztJQUV6QixLQUFLLGlCQUFpQjtNQUNsQix1Q0FDT1UsS0FBSztRQUNSVCxZQUFZLEVBQUU7TUFBSTtJQUUxQixLQUFLLGlCQUFpQjtNQUNsQix1Q0FDT1MsS0FBSztRQUNSVCxZQUFZLEVBQUUsS0FBSztRQUNuQkQsVUFBVSxFQUFFLEtBQUs7UUFDakJFLEVBQUUsRUFBRTtNQUFJO0lBRWhCLEtBQUssaUJBQWlCO01BQ2xCLHVDQUNPUSxLQUFLO1FBQ1JULFlBQVksRUFBRTtNQUFLO0lBRTNCO01BQ0ksT0FBT1MsS0FBSztFQUFDO0FBRXpCLENBQUM7QUFFY0Qsc0VBQU8sRUFBQyIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXG4gICAgbWU6IG51bGwsXG4gICAgc2lnblVwRGF0YToge30sXG4gICAgbG9naW5EYXRhOiB7fSxcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0xPR19JTl9SRVFVRVNUJyxcbiAgICAgICAgZGF0YSxcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnTE9HX09VVF9SRVFVRVNUJyxcbiAgICB9O1xufVxuXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdMT0dfSU5fUkVRVUVTVCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnTE9HX0lOX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZTogeyAuLi5hY3Rpb24uZGF0YSwgbmlja25hbWU6ICd3c0plb25nJyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnTE9HX0lOX0ZBSUxVUkUnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdMT0dfT1VUX1JFUVVFU1QnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdMT0dfT1VUX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnTE9HX09VVF9GQUlMVVJFJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})