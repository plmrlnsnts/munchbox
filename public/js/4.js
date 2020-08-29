(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"KHd+":function(t,e,s){"use strict";function n(t,e,s,n,i,a,o,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return n}))},epRU:function(t,e,s){"use strict";s.r(e);var n={props:{value:Array},data:function(t){return{tags:t.value||[]}},methods:{add:function(t){this.tags.includes(t)||(this.$refs.input.value="",this.tags.push(t))}},watch:{tags:{deep:!0,handler:function(t){this.$emit("input",t)}}}},i=s("KHd+"),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-wrap pl-3 pr-2 pt-2 sm:text-sm sm:leading-5 rounded-lg bg-gray-200 border border-gray-200 focus-within:bg-white focus-within:border-indigo-300 focus-within:shadow-outline-indigo"},[t._l(t.tags,(function(e){return s("span",{key:"tags-"+e,staticClass:"mr-1 mb-2 px-2 py-px bg-gray-700 text-white rounded"},[t._v(t._s(e))])})),t._v(" "),s("input",{ref:"input",staticClass:"mr-3 mb-2 bg-transparent flex-1 min-w-1/4 focus:outline-none",attrs:{type:"text",placeholder:"Max of 5"},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e.target.value)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:t.add(e.target.value)}]}})],2)}),[],!1,null,null,null).exports,o={props:{value:String},data:function(t){return{state:"idle",preview:t.value}},computed:{isLoading:function(){return"loading"===this.state}},methods:{upload:function(t){var e=this;this.state="loading";var s=t.target.files[0];this.preview=URL.createObjectURL(s),setTimeout((function(){return e.state="idle"}),3e3)}}},r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"relative border-2 border-dashed border-gray-400 bg-white rounded-xl overflow-hidden h-56 w-full block focus:outline-none",attrs:{type:"button"},on:{click:function(e){return t.$refs.file.click()}}},[t.preview?s("div",{staticClass:"absolute inset-0 flex items-center justify-center"},[s("img",{staticClass:"w-full h-full object-cover",class:{"opacity-25":t.isLoading},attrs:{src:t.preview,alt:"File preview"}}),t._v(" "),t.isLoading?s("svg",{staticClass:"w-10 h-10 text-black absolute animate-spin",attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"}})]):t._e()]):s("div",{staticClass:"absolute inset-0 flex flex-col items-center justify-center space-y-2 "},[s("svg",{staticClass:"text-gray-500 w-8 h-8",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"}})]),t._v(" "),t._m(0)])]),t._v(" "),s("input",{ref:"file",staticClass:"hidden",attrs:{type:"file"},on:{change:t.upload}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"space-y-1 text-center"},[e("p",{staticClass:"text-gray-900 text-lg font-semibold"},[this._v("Upload an image")]),this._v(" "),e("p",{staticClass:"text-gray-700 text-sm leading-5"},[this._v("1600x1200 or larger recommended, up to 10mb")])])}],!1,null,null,null).exports,l={data:function(t){return{tags:["Quick & Easy","Sweets","Beverage","Filipino","Spicy","Chicken","Yogurt","Healthy","Budget Friendly","Original"]}},methods:{select:function(t){this.$emit("selected",this.tags[t]),this.tags.splice(t,1)}}},c=Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-wrap"},t._l(t.tags,(function(e,n){return s("button",{key:"tags-"+e,staticClass:"inline-flex mr-1 focus:outline-none",on:{click:function(e){return t.select(n)}}},[s("span",{staticClass:"text-sm leading-5 text-indigo-600"},[t._v(t._s(e))]),t._v(" "),n<t.tags.length?s("span",{staticClass:"text-sm leading-5 text-gray-500"},[t._v(",")]):t._e()])})),0)}),[],!1,null,null,null).exports,d={props:{ingredient:{type:Object,default:function(){return{}}}},data:function(t){return{form:{name:t.ingredient.name||"",quantity:t.ingredient.quantity||1,unit:t.ingredient.unit||"pc"}}},computed:{isValid:function(){return!!this.form.quantity&&(!!this.form.unit&&!!this.form.name)}},methods:{submit:function(){this.$emit("submit",this.form),this.close()},close:function(){this.$emit("close")}}},u=Object(i.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"z-10 fixed inset-0 flex flex-col items-center justify-end space-y-4 bg-black bg-opacity-50"},[s("button",{staticClass:"bg-black text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none",attrs:{type:"button"},on:{click:t.close}},[s("svg",{staticClass:"w-6 h-6",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),s("form",{staticClass:"self-stretch bg-white rounded-t-xl px-6 py-4 space-y-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("h6",{staticClass:"text-lg font-semibold text-center"},[t._v("Add a new ingredient")]),t._v(" "),s("hr",{staticClass:"-mx-6"}),t._v(" "),s("div",{staticClass:"space-y-1"},[s("label",{staticClass:"sm:text-sm sm:leading-5 font-medium text-gray-700"},[t._v("Measurements")]),t._v(" "),s("div",{staticClass:"flex space-x-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.quantity,expression:"form.quantity"}],staticClass:"px-3 py-2 sm:text-sm sm:leading-5 block w-20 rounded-lg border border-gray-200 bg-gray-200 focus:bg-white\n                focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition-shadow duration-100 ease-linear",attrs:{type:"text",placeholder:"Qty"},domProps:{value:t.form.quantity},on:{input:function(e){e.target.composing||t.$set(t.form,"quantity",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.unit,expression:"form.unit"}],staticClass:"px-3 py-2 sm:text-sm sm:leading-5 block w-full rounded-lg border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition-shadow duration-100 ease-linear",attrs:{type:"text",placeholder:"Unit"},domProps:{value:t.form.unit},on:{input:function(e){e.target.composing||t.$set(t.form,"unit",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"space-y-1"},[s("label",{staticClass:"sm:text-sm sm:leading-5 font-medium text-gray-700"},[t._v("Ingredient")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"px-3 py-2 sm:text-sm sm:leading-5 block w-full rounded-lg border border-gray-200 bg-gray-200 focus:bg-white\n                focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition-shadow duration-100 ease-linear",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"rounded-full px-4 py-3 sm:text-sm sm:leading-5 font-medium block w-full bg-pink-500 text-white focus:outline-none",class:{"opacity-50 cursor-not-allowed":!t.isValid},attrs:{type:"submit",disabled:!t.isValid}},[t._v("Add ingredient")])])])}),[],!1,null,null,null).exports,m={props:{value:Array},components:{IngredientForm:u},data:function(t){return{ingredients:t.value,selectedIngredients:[],showForm:!1}},methods:{save:function(t){this.ingredients.push(t)},remove:function(){for(this.selectedIngredients.sort();this.selectedIngredients.length;)this.ingredients.splice(this.selectedIngredients.pop(),1)},isSelected:function(t){return this.selectedIngredients.includes(t)}},watch:{ingredients:{deep:!0,handler:function(t){this.$emit("input",t)}}}},f={components:{TagsInput:a,FileUpload:r,SuggestedTags:c,IngredientList:Object(i.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"space-y-4"},[s("div",{staticClass:"flex justify-between"},[s("div",{staticClass:"flex space-x-2"},[s("label",{staticClass:"sm:text-sm sm:leading-5 font-medium text-gray-700"},[t._v("Ingredients")]),t._v(" "),t.selectedIngredients.length?s("button",{staticClass:"text-red-500 sm:text-sm sm:leading-5 focus:outline-none",attrs:{type:"button"},on:{click:t.remove}},[t._v("\n                    Remove\n                ")]):t._e()]),t._v(" "),s("button",{staticClass:"text-gray-700 focus:outline-none",attrs:{type:"button"},on:{click:function(e){t.showForm=!0}}},[s("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}})])])]),t._v(" "),s("ul",{staticClass:"space-y-2"},[t.ingredients.length?t._e():s("li",{staticClass:"sm:text-sm sm:leading-5 text-gray-700"},[t._v("\n                There are no ingredients yet.\n            ")]),t._v(" "),t._l(t.ingredients,(function(e,n){return s("li",{key:"ingredients-"+n},[s("label",{staticClass:"inline-flex items-center space-x-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedIngredients,expression:"selectedIngredients"}],staticClass:"form-checkbox text-indigo-500",attrs:{type:"checkbox"},domProps:{value:n,checked:Array.isArray(t.selectedIngredients)?t._i(t.selectedIngredients,n)>-1:t.selectedIngredients},on:{change:function(e){var s=t.selectedIngredients,i=e.target,a=!!i.checked;if(Array.isArray(s)){var o=n,r=t._i(s,o);i.checked?r<0&&(t.selectedIngredients=s.concat([o])):r>-1&&(t.selectedIngredients=s.slice(0,r).concat(s.slice(r+1)))}else t.selectedIngredients=a}}}),t._v(" "),s("div",{staticClass:"sm:text-sm sm:leading-5",class:t.isSelected(n)?"text-indigo-700":"text-gray-700"},[t._v("\n                        "+t._s(e.quantity+" "+e.unit+" of "+e.name)+"\n                    ")])])])}))],2)]),t._v(" "),t.showForm?s("IngredientForm",{on:{submit:function(e){return t.save(e)},close:function(e){t.showForm=!1}}}):t._e()],1)}),[],!1,null,null,null).exports},mounted:function(){this.$el.style.height="".concat(window.innerHeight,"px")},data:function(t){return{form:{name:"",tags:[],description:"",ingredients:[],instructions:"",video_url:"",thubmnail:null}}}},g=Object(i.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"h-16 bg-gray-900 flex justify-between"},[s("InertiaLink",{staticClass:"inline-flex items-center px-4 text-white font-semibold sm:text-sm sm:leading-5",attrs:{href:t.$route("home")}},[t._v("\n            Cancel\n        ")]),t._v(" "),s("button",{staticClass:"inline-flex items-center px-4 text-white font-semibold sm:text-sm sm:leading-5 opacity-50 focus:outline-none"},[t._v("\n            Save\n        ")])],1),t._v(" "),s("div",{staticClass:"flex-1 overflow-y-auto"},[s("div",{staticClass:"p-4 space-y-4 mb-10"},[s("h2",{staticClass:"font-medium text-center"},[t._v("Publish your recipe")]),t._v(" "),s("form",[s("div",{staticClass:"space-y-6"},[s("FileUpload",{model:{value:t.form.thumb,callback:function(e){t.$set(t.form,"thumb",e)},expression:"form.thumb"}}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"space-y-1"},[s("label",{staticClass:"sm:text-sm sm:leading-5 font-medium text-gray-700"},[t._v("Tags")]),t._v(" "),s("TagsInput",{model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}})],1),t._v(" "),s("div",{staticClass:"space-y-2"},[s("div",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[t._v("Suggested Tags")]),t._v(" "),s("SuggestedTags",{on:{selected:function(e){return t.form.tags.push(e)}}})],1),t._v(" "),t._m(1),t._v(" "),s("hr",{staticClass:"-mx-4"}),t._v(" "),s("IngredientList",{model:{value:t.form.ingredients,callback:function(e){t.$set(t.form,"ingredients",e)},expression:"form.ingredients"}}),t._v(" "),s("hr",{staticClass:"-mx-4"}),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"space-y-1"},[s("label",{staticClass:"sm:text-sm sm:leading-5 font-medium text-gray-700"},[t._v("Video (optional)")]),t._v(" "),s("div",{staticClass:"relative"},[s("input",{staticClass:"pl-10 pr-3 py-2 sm:text-sm sm:leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear",attrs:{type:"text",placeholder:"Youtube embed url"}}),t._v(" "),s("div",{staticClass:"pointer-events-none flex items-center absolute inset-0 px-3"},[s("svg",{staticClass:"text-gray-400 w-5 h-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}})])])])])],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"space-y-1"},[e("label",{staticClass:"sm:text-sm sm:leading-5 font-medium text-gray-700"},[this._v("Name")]),this._v(" "),e("input",{staticClass:"px-3 py-2 sm:text-sm sm:leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear",attrs:{type:"text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"space-y-1"},[e("label",{staticClass:"sm:text-sm sm:leading-5 font-medium text-gray-700"},[this._v("Description")]),this._v(" "),e("textarea",{staticClass:"px-3 py-2 sm:text-sm sm:leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear",attrs:{placeholder:"How would you describe your recipe",rows:"4"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"space-y-1"},[e("label",{staticClass:"sm:text-sm sm:leading-5 font-medium text-gray-700"},[this._v("Cooking Instructions")]),this._v(" "),e("textarea",{staticClass:"px-3 py-2 sm:text-sm sm:leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear",attrs:{placeholder:"Steps for making this awesome recipe",rows:"8"}})])}],!1,null,null,null);e.default=g.exports}}]);