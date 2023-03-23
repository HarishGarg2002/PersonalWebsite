"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./apps.config.js":
/*!************************!*\
  !*** ./apps.config.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_apps_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/apps/spotify */ \"./components/apps/spotify.js\");\n/* harmony import */ var _components_apps_vscode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/apps/vscode */ \"./components/apps/vscode.js\");\n/* harmony import */ var _components_apps_terminal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/apps/terminal */ \"./components/apps/terminal.js\");\n/* harmony import */ var _components_apps_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/apps/settings */ \"./components/apps/settings.js\");\n/* harmony import */ var _components_apps_chrome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/apps/chrome */ \"./components/apps/chrome.js\");\n/* harmony import */ var _components_apps_trash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/apps/trash */ \"./components/apps/trash.js\");\n/* harmony import */ var _components_apps_gedit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/apps/gedit */ \"./components/apps/gedit.js\");\n/* harmony import */ var _components_apps_garg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/apps/garg */ \"./components/apps/garg.js\");\n/* harmony import */ var _components_apps_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/apps/calc */ \"./components/apps/calc.js\");\n\n\n\n\n\n\n\n\n\nconst apps = [\n    {\n        id: \"chrome\",\n        title: \"Google Chrome\",\n        icon: \"./themes/Yaru/apps/chrome.png\",\n        disabled: false,\n        favourite: true,\n        desktop_shortcut: true,\n        screen: _components_apps_chrome__WEBPACK_IMPORTED_MODULE_4__.displayChrome\n    },\n    {\n        id: \"calc\",\n        title: \"Calculator\",\n        icon: \"./themes/Yaru/apps/calc.png\",\n        disabled: false,\n        favourite: true,\n        desktop_shortcut: false,\n        screen: _components_apps_calc__WEBPACK_IMPORTED_MODULE_8__.displayTerminalCalc\n    },\n    {\n        id: \"about-vivek\",\n        title: \"About Harish\",\n        icon: \"./themes/Yaru/system/user-home.png\",\n        disabled: false,\n        favourite: true,\n        desktop_shortcut: true,\n        screen: _components_apps_garg__WEBPACK_IMPORTED_MODULE_7__.displayAboutHarish\n    },\n    // {\n    //   id: \"vscode\",\n    //   title: \"Visual Studio Code\",\n    //   icon: \"./themes/Yaru/apps/vscode.png\",\n    //   disabled: false,\n    //   favourite: true,\n    //   desktop_shortcut: false,\n    //   screen: displayVsCode,\n    // },\n    {\n        id: \"terminal\",\n        title: \"Terminal\",\n        icon: \"./themes/Yaru/apps/bash.png\",\n        disabled: false,\n        favourite: true,\n        desktop_shortcut: false,\n        screen: _components_apps_terminal__WEBPACK_IMPORTED_MODULE_2__.displayTerminal\n    },\n    {\n        id: \"spotify\",\n        title: \"Spotify\",\n        icon: \"./themes/Yaru/apps/spotify.png\",\n        disabled: false,\n        favourite: true,\n        desktop_shortcut: false,\n        screen: _components_apps_spotify__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    },\n    {\n        id: \"settings\",\n        title: \"Settings\",\n        icon: \"./themes/Yaru/apps/gnome-control-center.png\",\n        disabled: false,\n        favourite: true,\n        desktop_shortcut: false,\n        screen: _components_apps_settings__WEBPACK_IMPORTED_MODULE_3__.displaySettings\n    },\n    {\n        id: \"trash\",\n        title: \"Trash\",\n        icon: \"./themes/Yaru/system/user-trash-full.png\",\n        disabled: false,\n        favourite: false,\n        desktop_shortcut: true,\n        screen: _components_apps_trash__WEBPACK_IMPORTED_MODULE_5__.displayTrash\n    },\n    {\n        id: \"gedit\",\n        title: \"Contact Me\",\n        icon: \"./themes/Yaru/apps/gedit.png\",\n        disabled: false,\n        favourite: false,\n        desktop_shortcut: true,\n        screen: _components_apps_gedit__WEBPACK_IMPORTED_MODULE_6__.displayGedit\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (apps);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHBzLmNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ0Y7QUFDUTtBQUNBO0FBQ0o7QUFDRjtBQUNBO0FBQ0s7QUFDQztBQUU3RCxNQUFNUyxPQUFPO0lBQ1g7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVSxLQUFLO1FBQ2ZDLFdBQVcsSUFBSTtRQUNmQyxrQkFBa0IsSUFBSTtRQUN0QkMsUUFBUVosa0VBQWFBO0lBQ3ZCO0lBQ0E7UUFDRU0sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVSxLQUFLO1FBQ2ZDLFdBQVcsSUFBSTtRQUNmQyxrQkFBa0IsS0FBSztRQUN2QkMsUUFBUVIsc0VBQW1CQTtJQUM3QjtJQUNBO1FBQ0VFLElBQUk7UUFDSkMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVUsS0FBSztRQUNmQyxXQUFXLElBQUk7UUFDZkMsa0JBQWtCLElBQUk7UUFDdEJDLFFBQVFULHFFQUFrQkE7SUFDNUI7SUFDQSxJQUFJO0lBQ0osa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQywyQ0FBMkM7SUFDM0MscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLEtBQUs7SUFDTDtRQUNFRyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVLEtBQUs7UUFDZkMsV0FBVyxJQUFJO1FBQ2ZDLGtCQUFrQixLQUFLO1FBQ3ZCQyxRQUFRZCxzRUFBZUE7SUFDekI7SUFDQTtRQUNFUSxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVLEtBQUs7UUFDZkMsV0FBVyxJQUFJO1FBQ2ZDLGtCQUFrQixLQUFLO1FBQ3ZCQyxRQUFRaEIsZ0VBQWNBO0lBQ3hCO0lBQ0E7UUFDRVUsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVSxLQUFLO1FBQ2ZDLFdBQVcsSUFBSTtRQUNmQyxrQkFBa0IsS0FBSztRQUN2QkMsUUFBUWIsc0VBQWVBO0lBQ3pCO0lBQ0E7UUFDRU8sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVSxLQUFLO1FBQ2ZDLFdBQVcsS0FBSztRQUNoQkMsa0JBQWtCLElBQUk7UUFDdEJDLFFBQVFYLGdFQUFZQTtJQUN0QjtJQUNBO1FBQ0VLLElBQUk7UUFDSkMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVUsS0FBSztRQUNmQyxXQUFXLEtBQUs7UUFDaEJDLGtCQUFrQixJQUFJO1FBQ3RCQyxRQUFRVixnRUFBWUE7SUFDdEI7Q0FDRDtBQUVELCtEQUFlRyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcHMuY29uZmlnLmpzPzc5ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3BsYXlTcG90aWZ5IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwcy9zcG90aWZ5XCI7XG5pbXBvcnQgZGlzcGxheVZzQ29kZSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcHMvdnNjb2RlXCI7XG5pbXBvcnQgeyBkaXNwbGF5VGVybWluYWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcHMvdGVybWluYWxcIjtcbmltcG9ydCB7IGRpc3BsYXlTZXR0aW5ncyB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgZGlzcGxheUNocm9tZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwcy9jaHJvbWVcIjtcbmltcG9ydCB7IGRpc3BsYXlUcmFzaCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwcy90cmFzaFwiO1xuaW1wb3J0IHsgZGlzcGxheUdlZGl0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBzL2dlZGl0XCI7XG5pbXBvcnQgeyBkaXNwbGF5QWJvdXRIYXJpc2ggfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcHMvZ2FyZ1wiO1xuaW1wb3J0IHsgZGlzcGxheVRlcm1pbmFsQ2FsYyB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwcy9jYWxjXCI7XG5cbmNvbnN0IGFwcHMgPSBbXG4gIHtcbiAgICBpZDogXCJjaHJvbWVcIixcbiAgICB0aXRsZTogXCJHb29nbGUgQ2hyb21lXCIsXG4gICAgaWNvbjogXCIuL3RoZW1lcy9ZYXJ1L2FwcHMvY2hyb21lLnBuZ1wiLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBmYXZvdXJpdGU6IHRydWUsXG4gICAgZGVza3RvcF9zaG9ydGN1dDogdHJ1ZSxcbiAgICBzY3JlZW46IGRpc3BsYXlDaHJvbWUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjYWxjXCIsXG4gICAgdGl0bGU6IFwiQ2FsY3VsYXRvclwiLFxuICAgIGljb246IFwiLi90aGVtZXMvWWFydS9hcHBzL2NhbGMucG5nXCIsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGZhdm91cml0ZTogdHJ1ZSxcbiAgICBkZXNrdG9wX3Nob3J0Y3V0OiBmYWxzZSxcbiAgICBzY3JlZW46IGRpc3BsYXlUZXJtaW5hbENhbGMsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJhYm91dC12aXZla1wiLFxuICAgIHRpdGxlOiBcIkFib3V0IEhhcmlzaFwiLFxuICAgIGljb246IFwiLi90aGVtZXMvWWFydS9zeXN0ZW0vdXNlci1ob21lLnBuZ1wiLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBmYXZvdXJpdGU6IHRydWUsXG4gICAgZGVza3RvcF9zaG9ydGN1dDogdHJ1ZSxcbiAgICBzY3JlZW46IGRpc3BsYXlBYm91dEhhcmlzaCxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIGlkOiBcInZzY29kZVwiLFxuICAvLyAgIHRpdGxlOiBcIlZpc3VhbCBTdHVkaW8gQ29kZVwiLFxuICAvLyAgIGljb246IFwiLi90aGVtZXMvWWFydS9hcHBzL3ZzY29kZS5wbmdcIixcbiAgLy8gICBkaXNhYmxlZDogZmFsc2UsXG4gIC8vICAgZmF2b3VyaXRlOiB0cnVlLFxuICAvLyAgIGRlc2t0b3Bfc2hvcnRjdXQ6IGZhbHNlLFxuICAvLyAgIHNjcmVlbjogZGlzcGxheVZzQ29kZSxcbiAgLy8gfSxcbiAge1xuICAgIGlkOiBcInRlcm1pbmFsXCIsXG4gICAgdGl0bGU6IFwiVGVybWluYWxcIixcbiAgICBpY29uOiBcIi4vdGhlbWVzL1lhcnUvYXBwcy9iYXNoLnBuZ1wiLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBmYXZvdXJpdGU6IHRydWUsXG4gICAgZGVza3RvcF9zaG9ydGN1dDogZmFsc2UsXG4gICAgc2NyZWVuOiBkaXNwbGF5VGVybWluYWwsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzcG90aWZ5XCIsXG4gICAgdGl0bGU6IFwiU3BvdGlmeVwiLFxuICAgIGljb246IFwiLi90aGVtZXMvWWFydS9hcHBzL3Nwb3RpZnkucG5nXCIsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGZhdm91cml0ZTogdHJ1ZSxcbiAgICBkZXNrdG9wX3Nob3J0Y3V0OiBmYWxzZSxcbiAgICBzY3JlZW46IGRpc3BsYXlTcG90aWZ5LCAvLyBJbmRpYSBUb3AgNTAgUGxheWxpc3Qg8J+YhVxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0dGluZ3NcIixcbiAgICB0aXRsZTogXCJTZXR0aW5nc1wiLFxuICAgIGljb246IFwiLi90aGVtZXMvWWFydS9hcHBzL2dub21lLWNvbnRyb2wtY2VudGVyLnBuZ1wiLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBmYXZvdXJpdGU6IHRydWUsXG4gICAgZGVza3RvcF9zaG9ydGN1dDogZmFsc2UsXG4gICAgc2NyZWVuOiBkaXNwbGF5U2V0dGluZ3MsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0cmFzaFwiLFxuICAgIHRpdGxlOiBcIlRyYXNoXCIsXG4gICAgaWNvbjogXCIuL3RoZW1lcy9ZYXJ1L3N5c3RlbS91c2VyLXRyYXNoLWZ1bGwucG5nXCIsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGZhdm91cml0ZTogZmFsc2UsXG4gICAgZGVza3RvcF9zaG9ydGN1dDogdHJ1ZSxcbiAgICBzY3JlZW46IGRpc3BsYXlUcmFzaCxcbiAgfSxcbiAge1xuICAgIGlkOiBcImdlZGl0XCIsXG4gICAgdGl0bGU6IFwiQ29udGFjdCBNZVwiLFxuICAgIGljb246IFwiLi90aGVtZXMvWWFydS9hcHBzL2dlZGl0LnBuZ1wiLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBmYXZvdXJpdGU6IGZhbHNlLFxuICAgIGRlc2t0b3Bfc2hvcnRjdXQ6IHRydWUsXG4gICAgc2NyZWVuOiBkaXNwbGF5R2VkaXQsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBhcHBzO1xuIl0sIm5hbWVzIjpbImRpc3BsYXlTcG90aWZ5IiwiZGlzcGxheVZzQ29kZSIsImRpc3BsYXlUZXJtaW5hbCIsImRpc3BsYXlTZXR0aW5ncyIsImRpc3BsYXlDaHJvbWUiLCJkaXNwbGF5VHJhc2giLCJkaXNwbGF5R2VkaXQiLCJkaXNwbGF5QWJvdXRIYXJpc2giLCJkaXNwbGF5VGVybWluYWxDYWxjIiwiYXBwcyIsImlkIiwidGl0bGUiLCJpY29uIiwiZGlzYWJsZWQiLCJmYXZvdXJpdGUiLCJkZXNrdG9wX3Nob3J0Y3V0Iiwic2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apps.config.js\n"));

/***/ })

});