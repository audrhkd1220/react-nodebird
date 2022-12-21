webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/wooseok/Study/react-nodebird/prepare/front/components/FollowButton.js\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\nvar FollowButton = function FollowButton(_ref) {\n  _s();\n  var post = _ref.post;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n    me = _useSelector.me,\n    followLoading = _useSelector.followLoading,\n    unfollowLoading = _useSelector.unfollowLoading;\n  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {\n    return v.id === post.User.id;\n  });\n  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    if (isFollowing) {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"UNFOLLOW_REQUEST\"]\n      });\n    }\n  }, [isFollowing]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    loading: followLoading || unfollowLoading,\n    onClickButton: onClickButton,\n    children: isFollowing ? '언팔로우' : '팔로우'\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, _this);\n};\n_s(FollowButton, \"oQRGZ4+MgpAjZ6p1zzrPk3lOofY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n_c = FollowButton;\nFollowButton.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowButton);\nvar _c;\n$RefreshReg$(_c, \"FollowButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanM/YmQ0ZiJdLCJuYW1lcyI6WyJGb2xsb3dCdXR0b24iLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDYjtBQUNLO0FBQ29CO0FBQ0g7QUFBQTtBQUVwRCxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxPQUFpQjtFQUFBO0VBQUEsSUFBWEMsSUFBSSxRQUFKQSxJQUFJO0VBQ3hCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixtQkFBK0NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBekVDLEVBQUUsZ0JBQUZBLEVBQUU7SUFBRUMsYUFBYSxnQkFBYkEsYUFBYTtJQUFFQyxlQUFlLGdCQUFmQSxlQUFlO0VBQzFDLElBQU1DLFdBQVcsR0FBR0gsRUFBRSxhQUFGQSxFQUFFLHVCQUFGQSxFQUFFLENBQUVJLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLENBQUM7SUFBQSxPQUFLQSxDQUFDLENBQUNDLEVBQUUsS0FBS2IsSUFBSSxDQUFDYyxJQUFJLENBQUNELEVBQUU7RUFBQSxFQUFDO0VBQ3JFLElBQU1FLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ3BDLElBQUdQLFdBQVcsRUFBRTtNQUNaUixRQUFRLENBQUM7UUFDTGdCLElBQUksRUFBRUMsK0RBQWdCQTtNQUMxQixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsRUFBRSxDQUFDVCxXQUFXLENBQUMsQ0FBQztFQUVqQixvQkFDSSxxRUFBQywyQ0FBTTtJQUFDLE9BQU8sRUFBR0YsYUFBYSxJQUFJQyxlQUFpQjtJQUFDLGFBQWEsRUFBRU8sYUFBYztJQUFBLFVBQzdFTixXQUFXLEdBQUcsTUFBTSxHQUFHO0VBQUs7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUN4QjtBQUVqQixDQUFDO0FBQUEsR0FqQktWLFlBQVk7RUFBQSxRQUNHRyx1REFBVyxFQUNtQkMsdURBQVc7QUFBQTtBQUFBLEtBRnhESixZQUFZO0FBbUJsQkEsWUFBWSxDQUFDb0IsU0FBUyxHQUFHO0VBQ3JCbkIsSUFBSSxFQUFFb0IsaURBQVMsQ0FBQ0MsTUFBTSxDQUFDQztBQUMzQixDQUFDO0FBRWN2QiwyRUFBWSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9sbG93QnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoeyBwb3N0IH0pID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgeyBtZSwgZm9sbG93TG9hZGluZywgdW5mb2xsb3dMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZihpc0ZvbGxvd2luZykge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtpc0ZvbGxvd2luZ10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXsgZm9sbG93TG9hZGluZyB8fCB1bmZvbGxvd0xvYWRpbmcgfSBvbkNsaWNrQnV0dG9uPXtvbkNsaWNrQnV0dG9ufT5cbiAgICAgICAgICAgIHtpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICk7XG59XG5cbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gICAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowButton.js\n");

/***/ })

})