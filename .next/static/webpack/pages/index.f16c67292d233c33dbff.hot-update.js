webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ \"./node_modules/next/dist/next-server/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcz84MzhhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2QiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/remez19/vsProjects/React/React-Nextjs-Project/pages/index.js\",\n    _this = undefined;\n\n\n\n\nvar HomePage = function HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    meetups: props.meetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, _this);\n};\n/*\n\nonly in component files that are in the pages floder.\nNextjs will look first for this kind of function \nand will call it before the component function.\nThe code inside the function wil not be excuted on the client side and,\nwill never endup in the client side.\nThe function needs to allways return an object.\nThe object must have a \"props\" \"field\" and this field must contain an object.\nthis object with the field \"props\" than will be sent as our props\nin our component.\nkida like in java or c (console arguments) main(argv, args).\nThe revalidate field handy in cases where we want to revalidate (get the data again).\nsometimes the data we are working with can be out-dated quickly therefore\nif we use revalidate (and as a value we need to give it a number)\nwe tell nextjs that we want to call getStaticProps every number of seconds \n(the number we set as an argument. here we set it to 10 - every 10 seconds)\n(only if requests come's to this path) \n*/\n\n\n_c = HomePage;\n\n/*\nthis function will always run on the server after deployment.\nuse it in cases were we want to revalidate for every request.\n\nexport async function getServerSideProps(context) {\n  // with the context we get access to the request:\n  const req = context.req;\n  // with the context we get access to the response:\n  const res = context.res;\n  // fetch data or anything we want to do.\n  return {\n    props: {\n      meetups: DUMMY_MEETUPS,\n    },\n  };\n}\n*/\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FyQk1GLFE7O0FBZ0ROO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xufTtcbi8qXG5cbm9ubHkgaW4gY29tcG9uZW50IGZpbGVzIHRoYXQgYXJlIGluIHRoZSBwYWdlcyBmbG9kZXIuXG5OZXh0anMgd2lsbCBsb29rIGZpcnN0IGZvciB0aGlzIGtpbmQgb2YgZnVuY3Rpb24gXG5hbmQgd2lsbCBjYWxsIGl0IGJlZm9yZSB0aGUgY29tcG9uZW50IGZ1bmN0aW9uLlxuVGhlIGNvZGUgaW5zaWRlIHRoZSBmdW5jdGlvbiB3aWwgbm90IGJlIGV4Y3V0ZWQgb24gdGhlIGNsaWVudCBzaWRlIGFuZCxcbndpbGwgbmV2ZXIgZW5kdXAgaW4gdGhlIGNsaWVudCBzaWRlLlxuVGhlIGZ1bmN0aW9uIG5lZWRzIHRvIGFsbHdheXMgcmV0dXJuIGFuIG9iamVjdC5cblRoZSBvYmplY3QgbXVzdCBoYXZlIGEgXCJwcm9wc1wiIFwiZmllbGRcIiBhbmQgdGhpcyBmaWVsZCBtdXN0IGNvbnRhaW4gYW4gb2JqZWN0LlxudGhpcyBvYmplY3Qgd2l0aCB0aGUgZmllbGQgXCJwcm9wc1wiIHRoYW4gd2lsbCBiZSBzZW50IGFzIG91ciBwcm9wc1xuaW4gb3VyIGNvbXBvbmVudC5cbmtpZGEgbGlrZSBpbiBqYXZhIG9yIGMgKGNvbnNvbGUgYXJndW1lbnRzKSBtYWluKGFyZ3YsIGFyZ3MpLlxuVGhlIHJldmFsaWRhdGUgZmllbGQgaGFuZHkgaW4gY2FzZXMgd2hlcmUgd2Ugd2FudCB0byByZXZhbGlkYXRlIChnZXQgdGhlIGRhdGEgYWdhaW4pLlxuc29tZXRpbWVzIHRoZSBkYXRhIHdlIGFyZSB3b3JraW5nIHdpdGggY2FuIGJlIG91dC1kYXRlZCBxdWlja2x5IHRoZXJlZm9yZVxuaWYgd2UgdXNlIHJldmFsaWRhdGUgKGFuZCBhcyBhIHZhbHVlIHdlIG5lZWQgdG8gZ2l2ZSBpdCBhIG51bWJlcilcbndlIHRlbGwgbmV4dGpzIHRoYXQgd2Ugd2FudCB0byBjYWxsIGdldFN0YXRpY1Byb3BzIGV2ZXJ5IG51bWJlciBvZiBzZWNvbmRzIFxuKHRoZSBudW1iZXIgd2Ugc2V0IGFzIGFuIGFyZ3VtZW50LiBoZXJlIHdlIHNldCBpdCB0byAxMCAtIGV2ZXJ5IDEwIHNlY29uZHMpXG4ob25seSBpZiByZXF1ZXN0cyBjb21lJ3MgdG8gdGhpcyBwYXRoKSBcbiovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIGZldGNoIGRhdGEgZnJvbSBkYXRhYmFzZS9BcGkvIG9yIHdoYXQgZXZlclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9SZW1lejp2Yk1rM2xlNzBva3ZQeTByQHJlYWN0LXVkZW15LmJidmVtN3IubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuICBjb25zdCBEYXRhQmFzZSA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IERhdGFCYXNlLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgICAgICAgZGVzY3JpcHRpb246IG1lZXR1cC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuICAgICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9O1xufVxuXG4vKlxudGhpcyBmdW5jdGlvbiB3aWxsIGFsd2F5cyBydW4gb24gdGhlIHNlcnZlciBhZnRlciBkZXBsb3ltZW50LlxudXNlIGl0IGluIGNhc2VzIHdlcmUgd2Ugd2FudCB0byByZXZhbGlkYXRlIGZvciBldmVyeSByZXF1ZXN0LlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgLy8gd2l0aCB0aGUgY29udGV4dCB3ZSBnZXQgYWNjZXNzIHRvIHRoZSByZXF1ZXN0OlxuICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbiAgLy8gd2l0aCB0aGUgY29udGV4dCB3ZSBnZXQgYWNjZXNzIHRvIHRoZSByZXNwb25zZTpcbiAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XG4gIC8vIGZldGNoIGRhdGEgb3IgYW55dGhpbmcgd2Ugd2FudCB0byBkby5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcbiAgICB9LFxuICB9O1xufVxuKi9cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})