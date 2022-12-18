webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/wooseok/Study/react-nodebird/prepare/front/components/CommentForm.js\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n  var post = _ref.post;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    var _state$user$me;\n    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;\n  });\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n      return state.post;\n    }),\n    addCommentDone = _useSelector.addCommentDone,\n    addCommentLoadding = _useSelector.addCommentLoadding;\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(''),\n    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 3),\n    commentText = _useInput2[0],\n    onChangeCommentText = _useInput2[1],\n    setCommentText = _useInput2[2];\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (addCommentDone) {\n      setCommentText('');\n    }\n  }, [addCommentDone]);\n  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__[\"ADD_COMMENT_REQUEST\"],\n      data: {\n        content: commentText,\n        postId: post.id,\n        userId: userId,\n        id: id\n      }\n    });\n  }, [commentText, id]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onFinish: onSubmitComment,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].TextArea, {\n        value: commentText,\n        onChange: onChangeCommentText,\n        rows: 4\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        style: {\n          position: 'absolute',\n          right: 0,\n          bottom: -40,\n          zIndex: 1\n        },\n        type: \"primary\",\n        htmlType: \"submit\",\n        loadding: addCommentLoadding,\n        children: \"\\uC090\\uC57D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n_s(CommentForm, \"dS7wZjnHUkhCaLy747g8igLi1IM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n_c = CommentForm;\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\nvar _c;\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcz80ZDAyIl0sIm5hbWVzIjpbIkNvbW1lbnRGb3JtIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRMb2FkZGluZyIsInVzZUlucHV0IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdENvbW1lbnQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJ1c2VySWQiLCJwb3NpdGlvbiIsInJpZ2h0IiwiYm90dG9tIiwiekluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNJO0FBQ1o7QUFFTTtBQUNjO0FBQ0E7QUFBQTtBQUV2RCxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUFpQjtFQUFBO0VBQUEsSUFBWEMsSUFBSSxRQUFKQSxJQUFJO0VBQ3ZCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixJQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztJQUFBO0lBQUEseUJBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxFQUFFLG1EQUFiLGVBQWVKLEVBQUU7RUFBQSxFQUFDO0VBQ3BELG1CQUErQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDTCxJQUFJO0lBQUEsRUFBQztJQUF6RVEsY0FBYyxnQkFBZEEsY0FBYztJQUFFQyxrQkFBa0IsZ0JBQWxCQSxrQkFBa0I7RUFDMUMsZ0JBQTJEQywrREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWhFQyxXQUFXO0lBQUVDLG1CQUFtQjtJQUFFQyxjQUFjO0VBRXZEQyx1REFBUyxDQUFDLFlBQU07SUFDWixJQUFHTixjQUFjLEVBQUU7TUFDZkssY0FBYyxDQUFDLEVBQUUsQ0FBQztJQUN0QjtFQUNKLENBQUMsRUFBRSxDQUFDTCxjQUFjLENBQUMsQ0FBQztFQUVwQixJQUFNTyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUN0Q2YsUUFBUSxDQUFDO01BQ0xnQixJQUFJLEVBQUVDLGtFQUFtQjtNQUN6QkMsSUFBSSxFQUFFO1FBQUVDLE9BQU8sRUFBRVQsV0FBVztRQUFFVSxNQUFNLEVBQUVyQixJQUFJLENBQUNHLEVBQUU7UUFBRW1CLE1BQU0sRUFBTkEsTUFBTTtRQUFFbkIsRUFBRSxFQUFGQTtNQUFHO0lBQzlELENBQUMsQ0FBQztFQUNOLENBQUMsRUFBRSxDQUFDUSxXQUFXLEVBQUVSLEVBQUUsQ0FBQyxDQUFDO0VBRXJCLG9CQUNJLHFFQUFDLHlDQUFJO0lBQUMsUUFBUSxFQUFFWSxlQUFnQjtJQUFBLHVCQUM1QixxRUFBQyx5Q0FBSSxDQUFDLElBQUk7TUFBQSx3QkFDTixxRUFBQywwQ0FBSyxDQUFDLFFBQVE7UUFBQyxLQUFLLEVBQUVKLFdBQVk7UUFBQyxRQUFRLEVBQUVDLG1CQUFvQjtRQUFDLElBQUksRUFBRTtNQUFFO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBRyxlQUM5RSxxRUFBQywyQ0FBTTtRQUNILEtBQUssRUFBRTtVQUFFVyxRQUFRLEVBQUUsVUFBVTtVQUFFQyxLQUFLLEVBQUUsQ0FBQztVQUFFQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1VBQUVDLE1BQU0sRUFBRTtRQUFDLENBQUU7UUFDakUsSUFBSSxFQUFDLFNBQVM7UUFDZCxRQUFRLEVBQUMsUUFBUTtRQUNqQixRQUFRLEVBQUVqQixrQkFBbUI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FDckI7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQ0o7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUNUO0FBRWYsQ0FBQztBQUFBLEdBaENLVixXQUFXO0VBQUEsUUFDSUcsdURBQVcsRUFDakJFLHVEQUFXLEVBQ3lCQSx1REFBVyxFQUNDTSx1REFBUTtBQUFBO0FBQUEsS0FKakVYLFdBQVc7QUFrQ2pCQSxXQUFXLENBQUM0QixTQUFTLEdBQUc7RUFDcEIzQixJQUFJLEVBQUU0QixpREFBUyxDQUFDQyxNQUFNLENBQUNDO0FBQzNCLENBQUM7QUFFYy9CLDBFQUFXLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xuXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xuICAgIGNvbnN0IHsgYWRkQ29tbWVudERvbmUsIGFkZENvbW1lbnRMb2FkZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcbiAgICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGFkZENvbW1lbnREb25lKSB7XG4gICAgICAgICAgICBzZXRDb21tZW50VGV4dCgnJyk7XG4gICAgICAgIH1cbiAgICB9LCBbYWRkQ29tbWVudERvbmVdKTtcblxuICAgIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgICAgICAgICAgIGRhdGE6IHsgY29udGVudDogY29tbWVudFRleHQsIHBvc3RJZDogcG9zdC5pZCwgdXNlcklkLCBpZCB9LFxuICAgICAgICB9KTtcbiAgICB9LCBbY29tbWVudFRleHQsIGlkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IHJvd3M9ezR9IC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAwLCBib3R0b206IC00MCwgekluZGV4OiAxfX0gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgIGxvYWRkaW5nPXthZGRDb21tZW50TG9hZGRpbmd9XG4gICAgICAgICAgICAgICAgPuyCkOyVvTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDwvRm9ybT5cbiAgICApO1xufVxuXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XG4gICAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm.js\n");

/***/ })

})