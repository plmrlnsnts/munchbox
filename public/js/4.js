(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"KHd+":function(e,t,s){"use strict";function n(e,t,s,n,i,a,o,r){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}s.d(t,"a",(function(){return n}))},epRU:function(e,t,s){"use strict";s.r(t);var n={props:{value:String},data:function(e){return{state:"idle",preview:e.value}},computed:{isLoading:function(){return"loading"===this.state}},methods:{upload:function(e){var t=this;this.state="loading";var s=e.target.files[0];this.preview=URL.createObjectURL(s),setTimeout((function(){return t.state="idle"}),3e3)}}},i=s("KHd+"),a=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("button",{staticClass:"relative border-2 border-dashed bg-white rounded-xl overflow-hidden h-56 w-full block focus:outline-none",attrs:{type:"button"},on:{click:function(t){return e.$refs.file.click()}}},[e.preview?s("div",{staticClass:"absolute inset-0 flex items-center justify-center"},[s("img",{staticClass:"w-full h-full object-cover",class:{"opacity-25":e.isLoading},attrs:{src:e.preview,alt:"File preview"}}),e._v(" "),e.isLoading?s("svg",{staticClass:"w-10 h-10 text-black absolute animate-spin",attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"}})]):e._e()]):s("div",{staticClass:"absolute inset-0 flex flex-col items-center justify-center space-y-2 "},[s("svg",{staticClass:"text-gray-500 w-8 h-8",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"}})]),e._v(" "),s("p",{staticClass:"text-gray-700 text-sm leading-5"},[e._v("Upload a thumbnail")])])]),e._v(" "),s("input",{ref:"file",staticClass:"hidden",attrs:{type:"file"},on:{change:e.upload}})])}),[],!1,null,null,null).exports,o={props:{ingredient:{type:Object,default:function(){return{}}}},data:function(e){return{form:{name:e.ingredient.name||"",quantity:e.ingredient.quantity||1,unit:e.ingredient.unit||"pc"}}},computed:{isValid:function(){return!!this.form.quantity&&(!!this.form.unit&&!!this.form.name)}},methods:{submit:function(){this.$emit("submit",this.form),this.close()},close:function(){this.$emit("close")}}},r=Object(i.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"z-10 fixed inset-0 flex flex-col items-center justify-end space-y-4 bg-black bg-opacity-50"},[s("button",{staticClass:"bg-black text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none",attrs:{type:"button"},on:{click:e.close}},[s("svg",{staticClass:"w-6 h-6",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),e._v(" "),s("form",{staticClass:"self-stretch bg-white rounded-t-xl px-6 py-4 space-y-4",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("h6",{staticClass:"text-lg font-semibold text-center"},[e._v("Add a new ingredient")]),e._v(" "),s("hr",{staticClass:"-mx-6"}),e._v(" "),s("div",{staticClass:"space-y-1"},[s("label",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[e._v("Measurements")]),e._v(" "),s("div",{staticClass:"flex space-x-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.quantity,expression:"form.quantity"}],staticClass:"px-3 py-2 text-sm leading-5 block w-20 rounded-lg border border-gray-200 bg-gray-200 focus:bg-white\n                focus:outline-none focus:shadow-outline focus:border-blue-400 transition-shadow duration-100 ease-linear",attrs:{type:"text",placeholder:"Qty"},domProps:{value:e.form.quantity},on:{input:function(t){t.target.composing||e.$set(e.form,"quantity",t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.unit,expression:"form.unit"}],staticClass:"px-3 py-2 text-sm leading-5 block w-full rounded-lg border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:shadow-outline focus:border-blue-400 transition-shadow duration-100 ease-linear",attrs:{type:"text",placeholder:"Unit"},domProps:{value:e.form.unit},on:{input:function(t){t.target.composing||e.$set(e.form,"unit",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"space-y-1"},[s("label",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[e._v("Ingredient")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"px-3 py-2 text-sm leading-5 block w-full rounded-lg border border-gray-200 bg-gray-200 focus:bg-white\n                focus:outline-none focus:shadow-outline focus:border-blue-400 transition-shadow duration-100 ease-linear",attrs:{type:"text"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})]),e._v(" "),s("button",{staticClass:"rounded-full px-4 py-3 text-sm leading-5 font-medium block w-full bg-pink-500 text-white focus:outline-none",class:{"opacity-50 cursor-not-allowed":!e.isValid},attrs:{type:"submit",disabled:!e.isValid}},[e._v("Add ingredient")])])])}),[],!1,null,null,null).exports,l={props:{value:Array},components:{IngredientForm:r},data:function(e){return{ingredients:e.value,selectedIngredients:[],showForm:!1}},methods:{save:function(e){this.ingredients.push(e)},remove:function(){for(this.selectedIngredients.sort();this.selectedIngredients.length;)this.ingredients.splice(this.selectedIngredients.pop(),1)},isSelected:function(e){return this.selectedIngredients.includes(e)}},watch:{ingredients:{deep:!0,handler:function(e){this.$emit("input",e)}}}},c={components:{FileUpload:a,IngredientList:Object(i.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"space-y-4"},[s("div",{staticClass:"flex justify-between"},[s("div",{staticClass:"flex space-x-2"},[s("label",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[e._v("Ingredients")]),e._v(" "),e.selectedIngredients.length?s("button",{staticClass:"text-red-500 text-sm leading-5 focus:outline-none",attrs:{type:"button"},on:{click:e.remove}},[e._v("\n                Remove\n            ")]):e._e()]),e._v(" "),s("button",{staticClass:"text-gray-700 focus:outline-none",attrs:{type:"button"},on:{click:function(t){e.showForm=!0}}},[s("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}})])])]),e._v(" "),s("ul",{staticClass:"space-y-2"},[e.ingredients.length?e._e():s("li",{staticClass:"text-sm leading-5 text-gray-700"},[e._v("\n            There are no ingredients yet.\n        ")]),e._v(" "),e._l(e.ingredients,(function(t,n){return s("li",{key:"ingredients-"+n},[s("label",{staticClass:"inline-flex items-center space-x-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedIngredients,expression:"selectedIngredients"}],staticClass:"form-checkbox text-indigo-500",attrs:{type:"checkbox"},domProps:{value:n,checked:Array.isArray(e.selectedIngredients)?e._i(e.selectedIngredients,n)>-1:e.selectedIngredients},on:{change:function(t){var s=e.selectedIngredients,i=t.target,a=!!i.checked;if(Array.isArray(s)){var o=n,r=e._i(s,o);i.checked?r<0&&(e.selectedIngredients=s.concat([o])):r>-1&&(e.selectedIngredients=s.slice(0,r).concat(s.slice(r+1)))}else e.selectedIngredients=a}}}),e._v(" "),s("div",{staticClass:"text-sm leading-5",class:e.isSelected(n)?"text-indigo-700":"text-gray-700"},[e._v("\n                    "+e._s(t.quantity+" "+t.unit+" of "+t.name)+"\n                ")])])])}))],2),e._v(" "),e.showForm?s("IngredientForm",{on:{submit:function(t){return e.save(t)},close:function(t){e.showForm=!1}}}):e._e()],1)}),[],!1,null,null,null).exports},data:function(e){return{form:{name:"",tags:[],description:"",ingredients:[],instructions:"",video_url:"",thubmnail:null}}}},u=Object(i.a)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-col h-screen"},[s("div",{staticClass:"h-12 bg-indigo-500 flex justify-between"},[s("InertiaLink",{staticClass:"inline-flex items-center px-4 text-white font-semibold text-sm leading-5",attrs:{href:e.$route("home")}},[e._v("\n            Cancel\n        ")]),e._v(" "),s("button",{staticClass:"inline-flex items-center px-4 text-white font-semibold text-sm leading-5 opacity-50 focus:outline-none"},[e._v("\n            Save\n        ")])],1),e._v(" "),s("div",{staticClass:"flex-1 overflow-y-auto"},[s("div",{staticClass:"p-4 space-y-4"},[s("h2",{staticClass:"font-medium text-center"},[e._v("Let your recipe be known")]),e._v(" "),s("form",[s("div",{staticClass:"space-y-4"},[s("FileUpload",{model:{value:e.form.thumb,callback:function(t){e.$set(e.form,"thumb",t)},expression:"form.thumb"}}),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"space-y-1"},[s("label",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[e._v("Tags")]),e._v(" "),s("input",{staticClass:"px-3 py-2 text-sm leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-blue-400 focus:outline-none focus:shadow-outline transition-shadow duration-100 ease-linear",attrs:{type:"text",placeholder:"Maximum of 5 tags"}}),e._v(" "),s("div",{staticClass:"flex flex-wrap text-xs leading-5"},[s("div",{staticClass:"font-medium text-pink-500 mr-2"},[e._v("Suggestions:")]),e._v(" "),e._l(["Easy Recipe","Sweets","Beverage"],(function(t,n){return s("span",{key:"tags-"+t,staticClass:"text-gray-700 mr-1"},[e._v("\n                                "+e._s(t+(n>=2?"":","))+"\n                            ")])}))],2)]),e._v(" "),e._m(1),e._v(" "),s("hr",{staticClass:"-mx-4"}),e._v(" "),s("IngredientList",{model:{value:e.form.ingredients,callback:function(t){e.$set(e.form,"ingredients",t)},expression:"form.ingredients"}}),e._v(" "),s("hr",{staticClass:"-mx-4"}),e._v(" "),e._m(2),e._v(" "),s("div",{staticClass:"space-y-1"},[s("label",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[e._v("Video Demo (optional)")]),e._v(" "),s("div",{staticClass:"relative"},[s("input",{staticClass:"pl-10 pr-3 py-2 text-sm leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-blue-400 focus:outline-none focus:shadow-outline transition-shadow duration-100 ease-linear",attrs:{type:"text",placeholder:"Youtube embed url"}}),e._v(" "),s("div",{staticClass:"pointer-events-none flex items-center absolute inset-0 px-3"},[s("svg",{staticClass:"text-gray-400 w-5 h-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}})])])])])],1)])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"space-y-1"},[t("label",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[this._v("Name")]),this._v(" "),t("input",{staticClass:"px-3 py-2 text-sm leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-blue-400 focus:outline-none focus:shadow-outline transition-shadow duration-100 ease-linear",attrs:{type:"text"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"space-y-1"},[t("label",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[this._v("Description")]),this._v(" "),t("textarea",{staticClass:"px-3 py-2 text-sm leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-blue-400 focus:outline-none focus:shadow-outline transition-shadow duration-100 ease-linear",attrs:{placeholder:"A quick summary for this recipe",rows:"4"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"space-y-1"},[t("label",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[this._v("Cooking Instructions")]),this._v(" "),t("textarea",{staticClass:"px-3 py-2 text-sm leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-blue-400 focus:outline-none focus:shadow-outline transition-shadow duration-100 ease-linear",attrs:{placeholder:"Steps for making this awesome recipe",rows:"8"}})])}],!1,null,null,null);t.default=u.exports}}]);