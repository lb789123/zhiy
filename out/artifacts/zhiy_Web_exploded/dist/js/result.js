webpackJsonp([10],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(89);


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Rosen
	* @Date:   2017-05-19 21:52:46
	* @Last Modified by:   Rosen
	* @Last Modified time: 2017-06-10 21:24:36
	*/

	'use strict';
	__webpack_require__(90);
	__webpack_require__(92);
	var _mm = __webpack_require__(8);

	$(function(){
	    var type        = _mm.getUrlParam('type') || 'default',
	        $element    = $('.' + type + '-success');
	    if(type === 'payment'){
	        var orderNumber  = _mm.getUrlParam('orderNumber'),
	            $orderNumber = $element.find('.order-number');
	        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
	    }
	    // 显示对应的提示元素
	    $element.show();
	})

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Rosen
	* @Date:   2017-05-17 11:26:25
	* @Last Modified by:   Rosen
	* @Last Modified time: 2017-05-17 11:26:46
	*/

	'use strict';
	__webpack_require__(93);

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});