(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Recipes/Show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Recipes/Show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    recipe: Object
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Recipes/Show.vue?vue&type=template&id=1c4f3cf0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Recipes/Show.vue?vue&type=template&id=1c4f3cf0& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "h-full overflow-y-auto" },
    [
      _c(
        "Portal",
        { attrs: { to: "header-left" } },
        [
          _c(
            "InertiaLink",
            {
              staticClass: "text-indigo-500",
              attrs: { href: _vm.$route("home") }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "w-6 h-6",
                  attrs: {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                    }
                  })
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Portal", { attrs: { to: "header-center" } }, [
        _c("div", { staticClass: "font-bold text-lg ml-2" }, [_vm._v("Recipe")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-4 space-y-6 mb-10" }, [
        _c("div", { staticClass: "flex items-center space-x-4" }, [
          _c("img", {
            staticClass:
              "w-8 h-8 rounded-full shadow-xs object-cover bg-gray-200",
            attrs: { src: _vm.recipe.author.avatar, loading: "lazy" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "text-sm leading-5 overflow-hidden" }, [
            _c("h2", { staticClass: "block font-semibold" }, [
              _vm._v(_vm._s(_vm.recipe.name))
            ]),
            _vm._v(" "),
            _c("div", [
              _c("span", { staticClass: "text-gray-700" }, [_vm._v("by")]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "font-medium text-indigo-600",
                  attrs: { href: "" }
                },
                [_vm._v(_vm._s(_vm.recipe.author.name))]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "space-y-2" }, [
          _c("div", { staticClass: "-mx-4" }, [
            _c("img", {
              staticClass: "w-full bg-gray-200",
              attrs: { src: _vm.recipe.thumbnail, loading: "lazy" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex items-center justify-between" }, [
            _c("div", { staticClass: "flex items-center space-x-2" }, [
              _c("a", { staticClass: "text-gray-700", attrs: { href: "" } }, [
                _c(
                  "svg",
                  {
                    staticClass: "w-6 h-6",
                    attrs: {
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "text-gray-700 focus:outline-none" },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "w-6 h-6",
                      attrs: {
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d:
                            "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        }
                      })
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "text-gray-700 focus:outline-none",
                  attrs: { type: "button" }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "w-6 h-6",
                      attrs: {
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d:
                            "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-sm leading-tight" }, [
          _c("span", { staticClass: "font-medium" }, [
            _vm._v(_vm._s(_vm.recipe.author.name))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "text-gray-700" }, [
            _vm._v(_vm._s(_vm.recipe.description))
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("h6", { staticClass: "font-semibold" }, [_vm._v("Ingredients")]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "space-y-4" },
          _vm._l(_vm.recipe.ingredients, function(ingredient) {
            return _c(
              "li",
              {
                key: "ingredients-" + ingredient.id,
                staticClass: "flex space-x-2"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "text-indigo-500 w-5 h-5",
                    attrs: { viewBox: "0 0 20 20", fill: "currentColor" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d:
                          "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
                        "clip-rule": "evenodd"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "flex-1 text-sm leading-5" }, [
                  ingredient.quantity
                    ? _c("span", [_vm._v(_vm._s(ingredient.quantity))])
                    : _vm._e(),
                  _vm._v(" "),
                  ingredient.unit
                    ? _c("span", [_vm._v(_vm._s(ingredient.unit))])
                    : _vm._e(),
                  _vm._v(" "),
                  ingredient.name
                    ? _c("span", [_vm._v(_vm._s(ingredient.name))])
                    : _vm._e()
                ])
              ]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("h6", { staticClass: "font-semibold" }, [_vm._v("Instructions")]),
        _vm._v(" "),
        _c("div", {
          staticClass: "text-sm text-gray-700 leading-tight space-y-4",
          domProps: { innerHTML: _vm._s(_vm.recipe.instructions) }
        })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Recipes/Show.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Recipes/Show.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_1c4f3cf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=1c4f3cf0& */ "./resources/js/Pages/Recipes/Show.vue?vue&type=template&id=1c4f3cf0&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Recipes/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_1c4f3cf0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_1c4f3cf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Recipes/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Recipes/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Recipes/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Recipes/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Recipes/Show.vue?vue&type=template&id=1c4f3cf0&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Recipes/Show.vue?vue&type=template&id=1c4f3cf0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1c4f3cf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=1c4f3cf0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Recipes/Show.vue?vue&type=template&id=1c4f3cf0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1c4f3cf0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1c4f3cf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);