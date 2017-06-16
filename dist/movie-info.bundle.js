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
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(21);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularRoute = __webpack_require__(3);

	var _angularRoute2 = _interopRequireDefault(_angularRoute);

	var _components = __webpack_require__(4);

	var _components2 = _interopRequireDefault(_components);

	var _movieInfo = __webpack_require__(18);

	var _movieInfo2 = _interopRequireDefault(_movieInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_angular2.default.module('MovieInfo', [_angularRoute2.default, _components2.default]).component('movieInfo', _movieInfo2.default).config(function ($routeProvider) {
		$routeProvider.when('/list', { template: '<movie-info-list> </movie-info-list>' }).when('/about', { template: '<movie-info-about></movie-info-about>' }).otherwise({ redirectTo: '/list' });
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("angular");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("angular-route");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _list = __webpack_require__(5);

	var _list2 = _interopRequireDefault(_list);

	var _rating = __webpack_require__(9);

	var _rating2 = _interopRequireDefault(_rating);

	var _about = __webpack_require__(13);

	var _about2 = _interopRequireDefault(_about);

	var _dataManagerService = __webpack_require__(17);

	var _dataManagerService2 = _interopRequireDefault(_dataManagerService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var components = _angular2.default.module('movie-list.components', [_list2.default, _rating2.default, _about2.default]).service('DataManager', _dataManagerService2.default).name;

	exports.default = components;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _list = __webpack_require__(6);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var list = _angular2.default.module('movie-info.list', []).component('movieInfoList', _list2.default).name;

	exports.default = list;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _list = __webpack_require__(7);

	var _list2 = _interopRequireDefault(_list);

	var _list3 = __webpack_require__(8);

	var _list4 = _interopRequireDefault(_list3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ListComponent = {
	    controller: _list2.default,
	    controllerAs: 'model',
	    templateUrl: _list4.default
	};

	exports.default = ListComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListController = function () {
	    function ListController($scope, $http) {
	        _classCallCheck(this, ListController);

	        var model = this;
	        model.$http = $http;

	        model.movies = 'temp movies blehg';
	        model.message = 'Hello from list controller';

	        // model.fetchMovies();
	    }

	    _createClass(ListController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            var model = this;

	            model.fetchMovies().then(function (movies) {
	                model.movies = movies;
	            });
	        }
	    }, {
	        key: 'fetchMovies',
	        value: function fetchMovies() {
	            var model = this;

	            console.log('Fetching movies');

	            return model.$http.get('./movies.json').then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'changeMessage',
	        value: function changeMessage() {
	            var model = this;

	            model.message = 'Peaches and astronaut stuff';
	        }
	    }, {
	        key: 'upRating',
	        value: function upRating(movie) {
	            if (movie.rating < 5) {
	                movie.rating += 1;
	            }
	        }
	    }, {
	        key: 'downRating',
	        value: function downRating(movie) {
	            if (movie.rating > 1) {
	                movie.rating -= 1;
	            }
	        }
	    }]);

	    return ListController;
	}();

	exports.default = ListController;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var path = 'C:/Users/roshan.r.patel/Documents/Development/construction-zone/pluralsight/movie-info/src/components/list/list.html';
	var html = "<div>\r\n\r\n\t<table class=\"table\">\r\n\t\t<tr>\r\n\t\t\t<th>Title</th>\r\n\t\t\t<th>Length</th>\r\n\t\t\t<th>Rating</th>\r\n\t\t\t<th></th>\r\n\t\t</tr>\r\n\r\n\r\n\t\t<tr ng-repeat=\"movie in model.movies track by $index\"> \r\n\t\t\t<td>{{movie.title}}</td>\r\n\t\t\t<td>{{movie.length}}</td>\r\n\t\t\t<td>\r\n\t\t\t\t<movie-info-rating value=\"movie.rating\">\r\n\t\t\t\t\t<span class=\"glyphicon glyphicon-star\"></span>\r\n\t\t\t\t</movie-info-rating>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t<button class=\"btn btn-default\" ng-click=\"model.upRating(movie)\">\r\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\"></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button class=\"btn btn-default\" ng-click=\"model.downRating(movie)\">\r\n\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\"></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n\r\n\r\n\r\n\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _rating = __webpack_require__(10);

	var _rating2 = _interopRequireDefault(_rating);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rating = _angular2.default.module('movie-info.rating', []).component('movieInfoRating', _rating2.default).name;

	exports.default = rating;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rating = __webpack_require__(11);

	var _rating2 = _interopRequireDefault(_rating);

	var _rating3 = __webpack_require__(12);

	var _rating4 = _interopRequireDefault(_rating3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RatingComponent = {
	    bindings: {
	        value: '<'
	    },
	    transclude: true,
	    controller: _rating2.default,
	    controllerAs: 'model',
	    templateUrl: _rating4.default
	};

	exports.default = RatingComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RatingController = function () {
		function RatingController($scope, DataManager) {
			_classCallCheck(this, RatingController);

			this.$scope = $scope;
			this.dataManager = DataManager;

			// console.log(this);
		}

		_createClass(RatingController, [{
			key: "$onChanges",
			value: function $onChanges(changes) {
				// console.log(changes);

				if (changes.value.isFirstChange()) {
					return;
				}

				this.entries = new Array(changes.value.currentValue);
			}
		}]);

		return RatingController;
	}();

	exports.default = RatingController;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	var path = 'C:/Users/roshan.r.patel/Documents/Development/construction-zone/pluralsight/movie-info/src/components/rating/rating.html';
	var html = "<span ng-repeat=\"entry in model.entries track by $index\">\r\n\t<ng-transclude>\r\n\t\t*\r\n\t</ng-transclude>\r\n</span>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _about = __webpack_require__(14);

	var _about2 = _interopRequireDefault(_about);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var about = _angular2.default.module('movie-info.about', []).component('movieInfoAbout', _about2.default).name;

	exports.default = about;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _about = __webpack_require__(15);

	var _about2 = _interopRequireDefault(_about);

	var _about3 = __webpack_require__(16);

	var _about4 = _interopRequireDefault(_about3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AboutComponent = {
	    controller: _about2.default,
	    controllerAs: 'model',
	    templateUrl: _about4.default
	};

	exports.default = AboutComponent;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AboutController = function AboutController() {
		_classCallCheck(this, AboutController);
	};

	exports.default = AboutController;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	var path = 'C:/Users/roshan.r.patel/Documents/Development/construction-zone/pluralsight/movie-info/src/components/about/about.html';
	var html = "<div>About this app!</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataManager = function DataManager($http) {
	    _classCallCheck(this, DataManager);

	    this.$http = $http;
	};

	exports.default = DataManager;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _movieInfoController = __webpack_require__(19);

	var _movieInfoController2 = _interopRequireDefault(_movieInfoController);

	var _movieInfo = __webpack_require__(20);

	var _movieInfo2 = _interopRequireDefault(_movieInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MovieInfoComponent = {

	    controller: _movieInfoController2.default,
	    templateUrl: _movieInfo2.default

	};

	exports.default = MovieInfoComponent;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MovieInfoController = function MovieInfoController() {
	    _classCallCheck(this, MovieInfoController);
	};

	exports.default = MovieInfoController;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	var path = 'C:/Users/roshan.r.patel/Documents/Development/construction-zone/pluralsight/movie-info/src/movie-info.html';
	var html = "<div>\r\n\t<ng-view></ng-view>\t\r\n\t<!-- <movie-info-list> </movie-info-list> -->\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = require("webpack-material-design-icons");

/***/ })
/******/ ]);