!function(e){function n(n){for(var a,o,s=n[0],p=n[1],u=n[2],d=0,_=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&_.push(i[o][0]),i[o]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(e[a]=p[a]);for(l&&l(n);_.length;)_.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,s=1;s<t.length;s++){var p=t[s];0!==i[p]&&(a=!1)}a&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},i={0:0},r=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/assets/js/";var s=window.webpackJsonp=window.webpackJsonp||[],p=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var l=p;r.push([5,1]),t()}({5:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(8);\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js?")},8:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js\nvar jquery = __webpack_require__(0);\nvar jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);\n\n// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js\nvar lazysizes = __webpack_require__(6);\n\n// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.esm.js + 90 modules\nvar swiper_bundle_esm = __webpack_require__(1);\n\n// EXTERNAL MODULE: ./node_modules/svg4everybody/dist/svg4everybody.js\nvar svg4everybody = __webpack_require__(2);\nvar svg4everybody_default = /*#__PURE__*/__webpack_require__.n(svg4everybody);\n\n// EXTERNAL MODULE: ./node_modules/browser-detect/dist/browser-detect.es5.js\nvar browser_detect_es5 = __webpack_require__(3);\n\n// CONCATENATED MODULE: ./src/js/page.js\n//import FastClick from 'fastclick'; // incopatibility with select2\nvar page={init:function init(){var app=this;// Base components\napp.window=jquery_default()(window);app.document=jquery_default()(document);app.html=jquery_default()('html');app.body=jquery_default()('body');// App params\napp.browser=Object(browser_detect_es5[\"a\" /* default */])();app.mobile=app.browser.mobile;app.html.removeClass('no-js').addClass(app.mobile?'mobile':'desktop').addClass(app.browser.name);if(app.browser.os.indexOf('OS')===0||app.browser.os.indexOf('iOS')===0){app.html.addClass('huapple');}// svg4everybody | Init\nif(!app.mobile){svg4everybody_default()();}// FastClick | Init\n//        if (app.mobile) {\n//            FastClick.attach(document.body);\n//        }\n}};/* harmony default export */ var js_page = (page);\n// EXTERNAL MODULE: ./node_modules/inputmask/dist/inputmask.js\nvar inputmask = __webpack_require__(4);\nvar inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);\n\n// CONCATENATED MODULE: ./src/js/forms.js\nvar forms_forms={init:function init(){forms_forms.app=this;this.document.ready(function(){forms_forms.initInputLabel();forms_forms.initMask();});},initInputLabel:function initInputLabel(){var sel='.js-label input:not([required]), .js-label textarea:not([required])';var className='_label-empty';this.app.document.on('focus',sel,function(){jquery_default()(this).siblings('label').removeClass(className);}).on('blur',sel,function(){if(!jquery_default()(this).val()){jquery_default()(this).siblings('label').addClass(className);}});jquery_default()(sel).each(function(){if(!jquery_default()(this).val()){jquery_default()(this).siblings('label').addClass(className);}});},initMask:function initMask(){var selector=document.querySelectorAll('.js-mask__tel');inputmask_default()({mask:'+7 (999) 999 99 99',showMaskOnHover:false}).mask(selector);}};/* harmony default export */ var js_forms = (forms_forms);\n// CONCATENATED MODULE: ./src/js/app.js\nfunction _typeof(obj){\"@babel/helpers - typeof\";if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}var app_app={// параметры, изменяемые в appConfig\nbreakpoints:{sm:320,md:768,lg:1280},media:320,resizeEventName:'app_resize',submitEventName:'app_submit',popupLoadedEventName:'app_popup_loaded',popupClosedEventName:'app_popup_closed',tabChangedEventName:'app_tab_changed',scrollToOffset:200,// оффсет при скролле до элемента\nscrollToSpeed:500,// скорость скролла\ninit:function init(){var _this=this;// read config\nif((typeof appConfig===\"undefined\"?\"undefined\":_typeof(appConfig))==='object'){Object.keys(appConfig).forEach(function(key){if(Object.prototype.hasOwnProperty.call(app_app,key)){app_app[key]=appConfig[key];}});}app_app.currentID=0;// Init page\nthis.page=js_page;this.page.init.call(this);// Init page\nthis.forms=js_forms;this.forms.init.call(this);app_app.checkMedia();app_app.window.on('resize',app_app.checkMedia);window.jQuery=jquery_default.a;window.app=app_app;app_app.document.ready(function(){_this.initScrollTo();// for example\n_this.initHeader();_this.initSlider();_this.initMenu();_this.initInputs();});// app.window.on('load', () => {\n// });\n// this.document.on(app.resizeEventName, () => {\n// });\n},initScrollTo:function initScrollTo(){document.querySelectorAll('[data-scroll]').forEach(function(el){var target=document.querySelector(el.dataset.scroll);if(target){el.addEventListener('click',function(e){e.preventDefault();// target.scrollIntoView({\n//     behavior: 'smooth',\n// });\nvar y=target.getBoundingClientRect().top+window.pageYOffset-app_app.scrollToOffset;window.scrollTo({top:y,behavior:'smooth'});app_app.body.removeClass('menu-open');});}});},formatPrice:function formatPrice(price){return this.formatNumber(price,0,',',' ');},formatNumber:function formatNumber(number,decimals,dec_point,thousands_sep){// original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)\n// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)\n// bugfix by: Michael White (http://crestidg.com)\nvar i,j,kw,kd,km;// input sanitation & defaults\nif(isNaN(decimals=Math.abs(decimals))){decimals=2;}if(dec_point==undefined){dec_point=',';}if(thousands_sep==undefined){thousands_sep='.';}i=parseInt(number=(+number||0).toFixed(decimals))+'';if((j=i.length)>3){j=j%3;}else{j=0;}km=j?i.substr(0,j)+thousands_sep:'';kw=i.substr(j).replace(/(\\d{3})(?=\\d)/g,'$1'+thousands_sep);kd=decimals?dec_point+Math.abs(number-i).toFixed(decimals).replace(/-/,'0').slice(2):'';return km+kw+kd;},/**\n     * Проверяет размер окна и пишет его в app.media\n     * @returns void\n     */checkMedia:function checkMedia(){var current=app_app.media;for(var key in app_app.breakpoints){if(app_app.window.outerWidth()>=app_app.breakpoints[key]){app_app.media=app_app.breakpoints[key];}//            console.log(app.media);\n}if(app_app.media!=current){app_app.document.trigger(app_app.resizeEventName,{media:app_app.media});}},uniqID:function uniqID(){return\"app_id_\".concat(app_app.currentID++);},/**\n     * Функция возвращает окончание для множественного числа слова на основании числа и массива окончаний\n     * param  iNumber Integer Число на основе которого нужно сформировать окончание\n     * param  aEndings Array Массив слов или окончаний для чисел (1, 4, 5),\n     *         например ['яблоко', 'яблока', 'яблок']\n     * return String\n     *\n     * https://habrahabr.ru/post/105428/\n     */getNumEnding:function getNumEnding(iNumber,aEndings){var sEnding,i;iNumber=iNumber%100;if(iNumber>=11&&iNumber<=19){sEnding=aEndings[2];}else{i=iNumber%10;switch(i){case 1:sEnding=aEndings[0];break;case 2:case 3:case 4:sEnding=aEndings[1];break;default:sEnding=aEndings[2];}}return sEnding;},getKeyByValue:function getKeyByValue(object,value){return Object.keys(object).find(function(key){return object[key]===value;});},initHeader:function initHeader(){var header=jquery_default()('.header');if(header.offset().top>50){jquery_default()('body').addClass('header-scrolling');}else{jquery_default()('body').removeClass('header-scrolling');}jquery_default()(window).on('scroll',function(){if(header.offset().top>50){jquery_default()('body').addClass('header-scrolling');}else{jquery_default()('body').removeClass('header-scrolling');}});},initSlider:function initSlider(){new swiper_bundle_esm[\"a\" /* default */]('.statistics__slider',{slidesPerView:'auto',loop:true,pagination:{el:'.swiper-pagination',type:'bullets'},autoplay:{delay:2500},breakpoints:{0:{spaceBetween:60},1280:{spaceBetween:100}}});new swiper_bundle_esm[\"a\" /* default */]('.reviews__slider',{slidesPerView:'auto',watchOverflow:true,spaceBetween:250,centeredSlides:true,navigation:{nextEl:'.reviews__slider .next',prevEl:'.reviews__slider .prev'},pagination:{el:'.swiper-pagination',type:'bullets'}});},initMenu:function initMenu(){jquery_default()(document).on('click','.header__burger',function(){jquery_default()('body').toggleClass('menu-open');});},initInputs:function initInputs(){var input=jquery_default()('.input');input.focus(function(){jquery_default()(this).removeClass('_is-empty');jquery_default()(this).removeClass('_filled');});input.blur(function(){if(jquery_default()(this).val()){jquery_default()(this).addClass('_filled');jquery_default()(this).removeClass('_is-empty');}});}};app_app.init();\n\n//# sourceURL=webpack:///./src/js/app.js_+_2_modules?")}});