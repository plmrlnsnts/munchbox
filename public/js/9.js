(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
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
  layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: function data(vm) {
    return {
      state: 'idle',
      recipes: [],
      nextPageUrl: vm.$route('recipes.index').url()
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (!_this.recipes.length) {
        _this.fetch();
      } else {
        _this.$el.scrollTop = localStorage.getItem('Home.ScrollPosition');
      }
    });
  },
  computed: {
    isLoading: function isLoading() {
      return this.state === 'loading';
    }
  },
  remember: ['recipes', 'nextPageUrl'],
  methods: {
    fetch: function fetch() {
      var _this2 = this;

      if (this.state === 'loading') return;
      if (!this.nextPageUrl) return;
      this.state = 'loading';
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.nextPageUrl).then(function (response) {
        _this2.state = 'idle';
        _this2.nextPageUrl = response.data.next_page_url;
        _this2.recipes = _this2.recipes.concat(response.data.data);
      });
    },
    scrolled: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (event) {
      var element = event.target;
      var scrollPosition = element.offsetHeight + element.scrollTop;
      var scrollHorizon = element.scrollHeight - element.scrollHeight / 4;
      localStorage.setItem('Home.ScrollPosition', element.scrollTop);

      if (scrollPosition >= scrollHorizon) {
        this.fetch();
      }
    }, 100)
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488& ***!
  \**************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "h-full overflow-y-auto",
      on: {
        "&scroll": function($event) {
          return _vm.scrolled($event)
        }
      }
    },
    [
      _c("Portal", { attrs: { to: "header-right" } }, [
        _c(
          "a",
          {
            staticClass: "block relative text-indigo-500",
            attrs: { href: "" }
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
                      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", {
              staticClass:
                "w-3 h-3 border-2 border-white absolute bottom-0 right-0 bg-pink-500 rounded-full"
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "Portal",
        { attrs: { to: "floating-button" } },
        [
          _c(
            "InertiaLink",
            {
              staticClass:
                "w-16 h-16 rounded-full shadow inline-flex items-center justify-center bg-indigo-500 text-white",
              attrs: { href: _vm.$route("recipes.create") }
            },
            [
              _c(
                "svg",
                { staticClass: "w-6 h-6", attrs: { viewBox: "0 0 24 24" } },
                [
                  _c("path", {
                    attrs: {
                      fill: "currentColor",
                      d:
                        "M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z"
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
      _c(
        "ul",
        { staticClass: "divide-y divide-gray-300 mb-10" },
        [
          _vm._l(_vm.recipes, function(recipe) {
            return _c(
              "li",
              {
                key: "recipes-" + recipe.id,
                staticClass: "px-4 py-6 space-y-4"
              },
              [
                _c("div", { staticClass: "flex items-center space-x-4" }, [
                  _c("img", {
                    staticClass:
                      "w-8 h-8 rounded-full shadow-xs object-cover bg-gray-200",
                    attrs: { src: recipe.author.avatar, loading: "lazy" }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-sm leading-5 overflow-hidden" },
                    [
                      _c(
                        "InertiaLink",
                        {
                          staticClass: "block font-semibold truncate",
                          attrs: { href: _vm.$route("recipes.show", recipe.id) }
                        },
                        [_vm._v(_vm._s(recipe.name))]
                      ),
                      _vm._v(" "),
                      _c("div", [
                        _c("span", { staticClass: "text-gray-700" }, [
                          _vm._v("by")
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "font-medium text-indigo-600",
                            attrs: { href: "" }
                          },
                          [_vm._v(_vm._s(recipe.author.name))]
                        )
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "space-y-2" }, [
                  _c(
                    "div",
                    {
                      staticClass: "relative pb-2/3 rounded-xl overflow-hidden"
                    },
                    [
                      _c(
                        "InertiaLink",
                        {
                          attrs: { href: _vm.$route("recipes.show", recipe.id) }
                        },
                        [
                          _c("img", {
                            staticClass:
                              "absolute w-full h-full bg-gray-200 rounded-xl object-cover",
                            attrs: { src: recipe.thumbnail, loading: "lazy" }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex items-center justify-between" },
                    [
                      _c(
                        "div",
                        { staticClass: "flex items-center space-x-2" },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "text-gray-700",
                              attrs: { href: "" }
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
                                        "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    }
                                  })
                                ]
                              )
                            ]
                          ),
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
                        ]
                      ),
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
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-sm leading-tight" }, [
                  _c("span", { staticClass: "font-medium" }, [
                    _vm._v(_vm._s(recipe.author.name))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-gray-700" }, [
                    _vm._v(_vm._s(_vm._f("truncate")(recipe.description, 100)))
                  ])
                ])
              ]
            )
          }),
          _vm._v(" "),
          _vm.isLoading
            ? _vm._l([1, 2], function(index) {
                return _c(
                  "li",
                  {
                    key: "loader-" + index,
                    staticClass: "px-4 py-6 space-y-4"
                  },
                  [
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "pb-2/3 rounded-xl bg-gray-200" }),
                    _vm._v(" "),
                    _vm._m(1, true)
                  ]
                )
              })
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center space-x-4" }, [
      _c("div", { staticClass: "w-8 h-8 rounded-full bg-gray-200" }),
      _vm._v(" "),
      _c("div", { staticClass: "w-32 h-8 rounded-full bg-gray-200" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center justify-between" }, [
      _c("div", { staticClass: "flex space-x-2" }, [
        _c("div", { staticClass: "w-6 h-6 rounded-full bg-gray-200" }),
        _vm._v(" "),
        _c("div", { staticClass: "w-6 h-6 rounded-full bg-gray-200" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex space-x-2" }, [
        _c("div", { staticClass: "w-6 h-6 rounded-full bg-gray-200" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488& */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=6a63e488& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);