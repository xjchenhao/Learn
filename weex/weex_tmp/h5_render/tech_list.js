/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/3dd59c0c0349afe15d630f3f7d217480", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	      intervalValue:"1000",
	      isShowIndicators:"true",
	      isAutoPlay:"true",
	      itemList: [
	        {title: 'Java', pictureUrl: 'http://t.cn/RGE3uo9'},
	        {title: 'Objective C', pictureUrl: 'http://t.cn/RGE31hq'},
	        {title: 'JavaScript', pictureUrl: 'http://t.cn/RGE3AJt'}
	      ]
	    }},
	    methods: {
	      goWeexSite: function () {
	        this.$openURL('http://alibaba.github.io/weex/')
	      }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "attr": {
	        "interval": function () {return this.intervalValue},
	        "autoPlay": function () {return this.isAutoPlay}
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "slider-pages"
	          ],
	          "repeat": function () {return this.itemList},
	          "events": {
	            "click": "goWeexSite"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "thumb"
	              ],
	              "attr": {
	                "src": function () {return this.pictureUrl}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "container"
	      ],
	      "events": {
	        "click": "goWeexSite"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "cell"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "thumb"
	              ],
	              "attr": {
	                "src": "http://t.cn/RGE3AJt"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": "JavaScript"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "cell"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "thumb"
	              ],
	              "attr": {
	                "src": "http://t.cn/RGE3uo9"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": "Java"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "cell"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "thumb"
	              ],
	              "attr": {
	                "src": "http://t.cn/RGE31hq"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": "Objective C"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "cell": {
	    "marginTop": 10,
	    "marginLeft": 10,
	    "flexDirection": "row"
	  },
	  "thumb": {
	    "width": 200,
	    "height": 200
	  },
	  "title": {
	    "textAlign": "center",
	    "flex": 1,
	    "color": "#808080",
	    "fontSize": 50
	  },
	  "slider": {
	    "margin": 18,
	    "width": 714,
	    "height": 230
	  },
	  "slider-pages": {
	    "flexDirection": "row",
	    "width": 714,
	    "height": 200
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/3dd59c0c0349afe15d630f3f7d217480", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);