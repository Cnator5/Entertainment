"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _Components_TestimonialCarousel_TestimonialCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/TestimonialCarousel/TestimonialCarousel */ \"(app-pages-browser)/./src/Components/TestimonialCarousel/TestimonialCarousel.jsx\");\n/* harmony import */ var _Components_WhyChooseUsSection_WhyChooseUsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/WhyChooseUsSection/WhyChooseUsSection */ \"(app-pages-browser)/./src/Components/WhyChooseUsSection/WhyChooseUsSection.jsx\");\n/* harmony import */ var _Components_ServiceSection_ServiceSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/ServiceSection/ServiceSection */ \"(app-pages-browser)/./src/Components/ServiceSection/ServiceSection.jsx\");\n/* harmony import */ var _Components_ImageShowcaseSection_ImageShowcaseSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/ImageShowcaseSection/ImageShowcaseSection */ \"(app-pages-browser)/./src/Components/ImageShowcaseSection/ImageShowcaseSection.jsx\");\n/* harmony import */ var _Components_Carousel_ProductCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Carousel/ProductCarousel */ \"(app-pages-browser)/./src/Components/Carousel/ProductCarousel.jsx\");\n/* harmony import */ var _Components_CarouselTest_Showcase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../Components/CarouselTest/Showcase */ \"(app-pages-browser)/./src/Components/CarouselTest/Showcase.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import ProductsSection from '@/Components/ImageShowcaseSection/ImageShowcaseSection';\n\n\n\n\nfunction Home() {\n    _s();\n    const [typedText, setTypedText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const fullText = \"Fast Internet. Endless Entertainment.\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let i = 0;\n        const typingInterval = setInterval(()=>{\n            if (i < fullText.length) {\n                setTypedText(fullText.slice(0, i + 1));\n                i++;\n            } else {\n                clearInterval(typingInterval);\n            }\n        }, 100);\n        return ()=>clearInterval(typingInterval);\n    }, []);\n    const services = [\n        {\n            name: \"Starlink\",\n            description: \"High-speed satellite internet\",\n            icon: \"/starlink-icon.svg\"\n        },\n        {\n            name: \"Canal+\",\n            description: \"Premium TV entertainment\",\n            icon: \"/canal-plus-icon.svg\"\n        },\n        {\n            name: \"DStv\",\n            description: \"Diverse satellite TV options\",\n            icon: \"/dstv-icon.svg\"\n        },\n        {\n            name: \"Solar Panels\",\n            description: \"Sustainable energy solutions\",\n            icon: \"/solar-panel-icon.svg\"\n        }\n    ];\n    const images = [\n        \"/images/space-cosmic-illustration-with-planets-scene-created-with-generative-ai_115122-119500.avif\",\n        \"/images/star_link_accessories_actuated_short_wall_mount top.webp\",\n        \"/images/myCANAL_16x9_Logotype_MEA_1920x1080.jpg80 (1).webp\",\n        \"/images/solar.avif\",\n        \"/images/sport-football-arena-photography_1409-4807.avif\",\n        \"/images/family-bonding-couch-watching-comedy-eating-popcorn_1111209-125749.jpg\"\n    ];\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [isTransitioning, setIsTransitioning] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setIsTransitioning(true);\n            setTimeout(()=>{\n                setCurrentImageIndex((prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1);\n                setIsTransitioning(false);\n            }, 1000); // Transition duration\n        }, 5000); // Change image every 5 seconds\n        return ()=>clearInterval(interval);\n    }, [\n        images.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-6e437a8cade39ca1\" + \" \" + \"relative h-[80vh] w-full overflow-hidden\",\n                children: [\n                    images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-6e437a8cade39ca1\" + \" \" + \"absolute inset-0 transition-opacity duration-1000 \".concat(index === currentImageIndex ? \"opacity-100\" : \"opacity-0\", \" \").concat(isTransitioning ? \"scale-1\" : \"scale-1\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: image,\n                                alt: \"Background \".concat(index + 1),\n                                layout: \"fill\",\n                                quality: 100,\n                                priority: index === 0\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        }, index, false, {\n                            fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-6e437a8cade39ca1\" + \" \" + \"absolute inset-5000 bg-black opacity-50\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-6e437a8cade39ca1\" + \" \" + \"relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"jsx-6e437a8cade39ca1\" + \" \" + \"text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-up shadow-text\",\n                                children: \"Welcome to AbaSatellite\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-6e437a8cade39ca1\" + \" \" + \"text-lg md:text-2xl mb-6 max-w-2xl animate-fade-in-up animation-delay-300 shadow-text\",\n                                children: \"Your one-stop solution for Satellite, Canal+, DStv, Solar, and Network Services.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/contact\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"jsx-6e437a8cade39ca1\" + \" \" + \"bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up animation-delay-600 cursor-pointer\",\n                                    children: \"Get in Touch\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-6e437a8cade39ca1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        id: \"6e437a8cade39ca1\",\n                        children: \"@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fadeInUp{from{opacity:0;-moz-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fadeInUp{from{opacity:0;-o-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translatey(20px);-moz-transform:translatey(20px);-o-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}.animate-fade-in-up.jsx-6e437a8cade39ca1{-webkit-animation:fadeInUp.6s ease-out forwards;-moz-animation:fadeInUp.6s ease-out forwards;-o-animation:fadeInUp.6s ease-out forwards;animation:fadeInUp.6s ease-out forwards}.animation-delay-300.jsx-6e437a8cade39ca1{-webkit-animation-delay:.3s;-moz-animation-delay:.3s;-o-animation-delay:.3s;animation-delay:.3s}.animation-delay-600.jsx-6e437a8cade39ca1{-webkit-animation-delay:.6s;-moz-animation-delay:.6s;-o-animation-delay:.6s;animation-delay:.6s}.shadow-text.jsx-6e437a8cade39ca1{text-shadow:2px 2px 4px rgba(0,0,0,.5)}\"\n                    }, void 0, false, void 0, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 68,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Carousel_ProductCarousel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 131,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_ImageShowcaseSection_ImageShowcaseSection__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 132,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_CarouselTest_Showcase__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 133,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_WhyChooseUsSection_WhyChooseUsSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 134,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_ServiceSection_ServiceSection__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 135,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_TestimonialCarousel_TestimonialCarousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 136,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Next jss\\\\network-app\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 67,\n        columnNumber: 1\n    }, this);\n}\n_s(Home, \"uYPd2Ch0nr1O8+ZzEOw+ruJPZ6k=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDYjtBQUNGO0FBQ1U7QUFDZ0Q7QUFDSDtBQUNwRix3RkFBd0Y7QUFDdEI7QUFDd0I7QUFDdEI7QUFDUDtBQUc5QyxTQUFTVzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1jLFdBQVc7SUFFakJiLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWMsSUFBSTtRQUNSLE1BQU1DLGlCQUFpQkMsWUFBWTtZQUNqQyxJQUFJRixJQUFJRCxTQUFTSSxNQUFNLEVBQUU7Z0JBQ3ZCTCxhQUFhQyxTQUFTSyxLQUFLLENBQUMsR0FBR0osSUFBSTtnQkFDbkNBO1lBQ0YsT0FBTztnQkFDTEssY0FBY0o7WUFDaEI7UUFDRixHQUFHO1FBRUgsT0FBTyxJQUFNSSxjQUFjSjtJQUM3QixHQUFHLEVBQUU7SUFFTCxNQUFNSyxXQUFXO1FBQ2Y7WUFBRUMsTUFBTTtZQUFZQyxhQUFhO1lBQWlDQyxNQUFNO1FBQXFCO1FBQzdGO1lBQUVGLE1BQU07WUFBVUMsYUFBYTtZQUE0QkMsTUFBTTtRQUF1QjtRQUN4RjtZQUFFRixNQUFNO1lBQVFDLGFBQWE7WUFBZ0NDLE1BQU07UUFBaUI7UUFDcEY7WUFBRUYsTUFBTTtZQUFnQkMsYUFBYTtZQUFnQ0MsTUFBTTtRQUF3QjtLQUNwRztJQUVELE1BQU1DLFNBQVM7UUFDYjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQzRCLGlCQUFpQkMsbUJBQW1CLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUV2REMsZ0RBQVNBLENBQUM7UUFDUixNQUFNNkIsV0FBV2IsWUFBWTtZQUMzQlksbUJBQW1CO1lBQ25CRSxXQUFXO2dCQUNUSixxQkFBcUIsQ0FBQ0ssWUFDcEJBLGNBQWNQLE9BQU9QLE1BQU0sR0FBRyxJQUFJLElBQUljLFlBQVk7Z0JBRXBESCxtQkFBbUI7WUFDckIsR0FBRyxPQUFPLHNCQUFzQjtRQUNsQyxHQUFHLE9BQU8sK0JBQStCO1FBRXpDLE9BQU8sSUFBTVQsY0FBY1U7SUFDN0IsR0FBRztRQUFDTCxPQUFPUCxNQUFNO0tBQUM7SUFDbEIscUJBQ0YsOERBQUNlOzswQkFDRCw4REFBQ0M7MERBQWM7O29CQUNSVCxPQUFPVSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDSDtzRUFFWSxxREFFUE4sT0FERlMsVUFBVVgsb0JBQW9CLGdCQUFnQixhQUMvQyxLQUEyQyxPQUF4Q0Usa0JBQWtCLFlBQVk7c0NBRWxDLDRFQUFDMUIsa0RBQUtBO2dDQUNKb0MsS0FBS0Y7Z0NBQ0xHLEtBQUssY0FBd0IsT0FBVkYsUUFBUTtnQ0FDM0JHLFFBQU87Z0NBQ1BDLFNBQVM7Z0NBQ1RDLFVBQVVMLFVBQVU7Ozs7OzsyQkFWakJBOzs7OztrQ0FjVCw4REFBQ0g7a0VBQWM7Ozs7OztrQ0FDZiw4REFBQ0E7a0VBQWM7OzBDQUNiLDhEQUFDUzswRUFBYTswQ0FBbUY7Ozs7OzswQ0FHakcsOERBQUNDOzBFQUFZOzBDQUF3Rjs7Ozs7OzBDQUdyRyw4REFBQ3pDLGlEQUFJQTtnQ0FBQzBDLE1BQUs7MENBQ1QsNEVBQUNDOzhFQUFlOzhDQUF5TTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzdOLDhEQUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZ0NILDhEQUFDekIsNEVBQWVBOzs7OzswQkFDaEIsOERBQUNELDZGQUFvQkE7Ozs7OzBCQUNyQiw4REFBQ0UsMEVBQVFBOzs7OzswQkFDYiw4REFBQ0oseUZBQWtCQTs7Ozs7MEJBQ25CLDhEQUFDQyxpRkFBUUE7Ozs7OzBCQUNULDhEQUFDRiwyRkFBbUJBOzs7Ozs7Ozs7OztBQUdwQjtHQTNId0JNO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBUZXN0aW1vbmlhbENhcm91c2VsIGZyb20gJ0AvQ29tcG9uZW50cy9UZXN0aW1vbmlhbENhcm91c2VsL1Rlc3RpbW9uaWFsQ2Fyb3VzZWwnO1xuaW1wb3J0IFdoeUNob29zZVVzU2VjdGlvbiBmcm9tICdAL0NvbXBvbmVudHMvV2h5Q2hvb3NlVXNTZWN0aW9uL1doeUNob29zZVVzU2VjdGlvbic7XG4vLyBpbXBvcnQgUHJvZHVjdHNTZWN0aW9uIGZyb20gJ0AvQ29tcG9uZW50cy9JbWFnZVNob3djYXNlU2VjdGlvbi9JbWFnZVNob3djYXNlU2VjdGlvbic7XG5pbXBvcnQgU2VydmljZXMgZnJvbSAnQC9Db21wb25lbnRzL1NlcnZpY2VTZWN0aW9uL1NlcnZpY2VTZWN0aW9uJztcbmltcG9ydCBJbWFnZVNob3djYXNlU2VjdGlvbiBmcm9tICdAL0NvbXBvbmVudHMvSW1hZ2VTaG93Y2FzZVNlY3Rpb24vSW1hZ2VTaG93Y2FzZVNlY3Rpb24nO1xuaW1wb3J0IFByb2R1Y3RDYXJvdXNlbCBmcm9tICdAL0NvbXBvbmVudHMvQ2Fyb3VzZWwvUHJvZHVjdENhcm91c2VsJztcbmltcG9ydCBTaG93Y2FzZSBmcm9tICcuLy4uL0NvbXBvbmVudHMvQ2Fyb3VzZWxUZXN0L1Nob3djYXNlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdHlwZWRUZXh0LCBzZXRUeXBlZFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBmdWxsVGV4dCA9IFwiRmFzdCBJbnRlcm5ldC4gRW5kbGVzcyBFbnRlcnRhaW5tZW50LlwiO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IHR5cGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGkgPCBmdWxsVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgc2V0VHlwZWRUZXh0KGZ1bGxUZXh0LnNsaWNlKDAsIGkgKyAxKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodHlwaW5nSW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0eXBpbmdJbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXJ2aWNlcyA9IFtcbiAgICB7IG5hbWU6ICdTdGFybGluaycsIGRlc2NyaXB0aW9uOiAnSGlnaC1zcGVlZCBzYXRlbGxpdGUgaW50ZXJuZXQnLCBpY29uOiAnL3N0YXJsaW5rLWljb24uc3ZnJyB9LFxuICAgIHsgbmFtZTogJ0NhbmFsKycsIGRlc2NyaXB0aW9uOiAnUHJlbWl1bSBUViBlbnRlcnRhaW5tZW50JywgaWNvbjogJy9jYW5hbC1wbHVzLWljb24uc3ZnJyB9LFxuICAgIHsgbmFtZTogJ0RTdHYnLCBkZXNjcmlwdGlvbjogJ0RpdmVyc2Ugc2F0ZWxsaXRlIFRWIG9wdGlvbnMnLCBpY29uOiAnL2RzdHYtaWNvbi5zdmcnIH0sXG4gICAgeyBuYW1lOiAnU29sYXIgUGFuZWxzJywgZGVzY3JpcHRpb246ICdTdXN0YWluYWJsZSBlbmVyZ3kgc29sdXRpb25zJywgaWNvbjogJy9zb2xhci1wYW5lbC1pY29uLnN2ZycgfSxcbiAgXTtcblxuICBjb25zdCBpbWFnZXMgPSBbXG4gICAgJy9pbWFnZXMvc3BhY2UtY29zbWljLWlsbHVzdHJhdGlvbi13aXRoLXBsYW5ldHMtc2NlbmUtY3JlYXRlZC13aXRoLWdlbmVyYXRpdmUtYWlfMTE1MTIyLTExOTUwMC5hdmlmJyxcbiAgICAnL2ltYWdlcy9zdGFyX2xpbmtfYWNjZXNzb3JpZXNfYWN0dWF0ZWRfc2hvcnRfd2FsbF9tb3VudCB0b3Aud2VicCcsXG4gICAgJy9pbWFnZXMvbXlDQU5BTF8xNng5X0xvZ290eXBlX01FQV8xOTIweDEwODAuanBnODAgKDEpLndlYnAnLFxuICAgICcvaW1hZ2VzL3NvbGFyLmF2aWYnLFxuICAgICcvaW1hZ2VzL3Nwb3J0LWZvb3RiYWxsLWFyZW5hLXBob3RvZ3JhcGh5XzE0MDktNDgwNy5hdmlmJyxcbiAgICAnL2ltYWdlcy9mYW1pbHktYm9uZGluZy1jb3VjaC13YXRjaGluZy1jb21lZHktZWF0aW5nLXBvcGNvcm5fMTExMTIwOS0xMjU3NDkuanBnJyxcbiAgXTtcblxuICBjb25zdCBbY3VycmVudEltYWdlSW5kZXgsIHNldEN1cnJlbnRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNUcmFuc2l0aW9uaW5nLCBzZXRJc1RyYW5zaXRpb25pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRJc1RyYW5zaXRpb25pbmcodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudEltYWdlSW5kZXgoKHByZXZJbmRleCkgPT5cbiAgICAgICAgICBwcmV2SW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDFcbiAgICAgICAgKTtcbiAgICAgICAgc2V0SXNUcmFuc2l0aW9uaW5nKGZhbHNlKTtcbiAgICAgIH0sIDEwMDApOyAvLyBUcmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgfSwgNTAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSA1IHNlY29uZHNcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2ltYWdlcy5sZW5ndGhdKTsgIFxuICByZXR1cm4gKFxuPG1haW4+XG48ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzgwdmhdIHctZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgaW5zZXQtMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCAke1xuICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRJbWFnZUluZGV4ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnXG4gICAgICAgICAgfSAke2lzVHJhbnNpdGlvbmluZyA/ICdzY2FsZS0xJyA6ICdzY2FsZS0xJ31gfVxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgYWx0PXtgQmFja2dyb3VuZCAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBxdWFsaXR5PXsxMDB9XG4gICAgICAgICAgICBwcmlvcml0eT17aW5kZXggPT09IDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtNTAwMCBiZy1ibGFjayBvcGFjaXR5LTUwXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyIHRleHQtd2hpdGUgcHgtNlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgbWItNCBhbmltYXRlLWZhZGUtaW4tdXAgc2hhZG93LXRleHRcIj5cbiAgICAgICAgICBXZWxjb21lIHRvIEFiYVNhdGVsbGl0ZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQtMnhsIG1iLTYgbWF4LXctMnhsIGFuaW1hdGUtZmFkZS1pbi11cCBhbmltYXRpb24tZGVsYXktMzAwIHNoYWRvdy10ZXh0XCI+XG4gICAgICAgICAgWW91ciBvbmUtc3RvcCBzb2x1dGlvbiBmb3IgU2F0ZWxsaXRlLCBDYW5hbCssIERTdHYsIFNvbGFyLCBhbmQgTmV0d29yayBTZXJ2aWNlcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHB4LTYgcHktMyByb3VuZGVkLWZ1bGwgdGV4dC1sZyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGFuaW1hdGUtZmFkZS1pbi11cCBhbmltYXRpb24tZGVsYXktNjAwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICBHZXQgaW4gVG91Y2hcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuYW5pbWF0ZS1mYWRlLWluLXVwIHtcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFuaW1hdGlvbi1kZWxheS0zMDAge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYW5pbWF0aW9uLWRlbGF5LTYwMCB7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnNoYWRvdy10ZXh0IHtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgXG4gICAgPC9kaXY+XG4gICAgPFByb2R1Y3RDYXJvdXNlbC8+XG4gICAgPEltYWdlU2hvd2Nhc2VTZWN0aW9uIC8+XG4gICAgPFNob3djYXNlIC8+XG48V2h5Q2hvb3NlVXNTZWN0aW9uLz5cbjxTZXJ2aWNlcy8+XG48VGVzdGltb25pYWxDYXJvdXNlbC8+XG48L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkxpbmsiLCJtb3Rpb24iLCJUZXN0aW1vbmlhbENhcm91c2VsIiwiV2h5Q2hvb3NlVXNTZWN0aW9uIiwiU2VydmljZXMiLCJJbWFnZVNob3djYXNlU2VjdGlvbiIsIlByb2R1Y3RDYXJvdXNlbCIsIlNob3djYXNlIiwiSG9tZSIsInR5cGVkVGV4dCIsInNldFR5cGVkVGV4dCIsImZ1bGxUZXh0IiwiaSIsInR5cGluZ0ludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzbGljZSIsImNsZWFySW50ZXJ2YWwiLCJzZXJ2aWNlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJpbWFnZXMiLCJjdXJyZW50SW1hZ2VJbmRleCIsInNldEN1cnJlbnRJbWFnZUluZGV4IiwiaXNUcmFuc2l0aW9uaW5nIiwic2V0SXNUcmFuc2l0aW9uaW5nIiwiaW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibWFpbiIsImRpdiIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJxdWFsaXR5IiwicHJpb3JpdHkiLCJoMSIsInAiLCJocmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});