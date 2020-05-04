webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Muli:400,700,800\");\n@import url(\"https://fonts.googleapis.com/css?family=Orbitron:700\");\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__planet_planet_list_planet_list_component__ = __webpack_require__("./src/app/planet/planet-list/planet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__planet_service_planet_service__ = __webpack_require__("./src/app/planet/service/planet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__planet_planet_detail_planet_detail_component__ = __webpack_require__("./src/app/planet/planet-detail/planet-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__planet_planet_list_planet_pipe__ = __webpack_require__("./src/app/planet/planet-list/planet.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loading_loading_component__ = __webpack_require__("./src/app/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'planets', pathMatch: 'full' },
    { path: 'planets', component: __WEBPACK_IMPORTED_MODULE_2__planet_planet_list_planet_list_component__["a" /* PlanetListComponent */] },
    { path: 'planets/:planetNumber', component: __WEBPACK_IMPORTED_MODULE_8__planet_planet_detail_planet_detail_component__["a" /* PlanetDetailComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__planet_planet_list_planet_list_component__["a" /* PlanetListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__planet_planet_detail_planet_detail_component__["a" /* PlanetDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__planet_planet_list_planet_pipe__["a" /* PlanetNamePipe */],
                __WEBPACK_IMPORTED_MODULE_11__loading_loading_component__["a" /* LoadingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__planet_service_planet_service__["a" /* PlanetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <h3 class=\"loadingPlanets\">Loading</h3>\n  <div class=\"bounce1\"></div>\n  <div class=\"bounce2\"></div>\n  <div class=\"bounce3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/loading/loading.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Muli:400,700,800\");\n@import url(\"https://fonts.googleapis.com/css?family=Orbitron:700\");\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif; }\n.spinner {\n  margin: 100px auto 0;\n  padding: 10% 0;\n  text-align: center;\n  -webkit-animation: fadeIn 0.5s ease-in-out;\n          animation: fadeIn 0.5s ease-in-out; }\n.loadingPlanets {\n  font-family: \"Orbitron\", sans-serif;\n  color: #9ee2ff;\n  text-transform: uppercase;\n  font-size: 20px;\n  margin: 13px;\n  letter-spacing: 1px; }\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: #9ee2ff;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__("./src/app/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/planet/models/planet-detail.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetDetails; });
var PlanetDetails = /** @class */ (function () {
    function PlanetDetails(name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents, films, created, edited, url) {
        this.name = name;
        this.rotation_period = rotation_period;
        this.orbital_period = orbital_period;
        this.diameter = diameter;
        this.climate = climate;
        this.gravity = gravity;
        this.terrain = terrain;
        this.surface_water = surface_water;
        this.population = population;
        this.residents = residents;
        this.films = films;
        this.created = created;
        this.edited = edited;
        this.url = url;
    }
    return PlanetDetails;
}());



/***/ }),

/***/ "./src/app/planet/planet-detail/planet-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"allDataLoaded\">\n    <button routerLink=\"../\">Back</button>\n    <div class=\"details\">\n        <h3 class=\"planet-name\">{{planetDetails.name}}</h3>\n        <ul class=\"details-list\">\n            <li>\n                <p class=\"description\">Rotation period</p>\n                <p class=\"value\">{{planetDetails.rotation_period}}</p>\n            </li>\n            <li>\n                <p class=\"description\">Orbital period</p>\n                <p class=\"value\">{{planetDetails.orbital_period}}</p>\n            </li>\n            <li>\n                <p class=\"description\">Diameter</p>\n                <p class=\"value\">{{planetDetails.diameter}}</p>\n            </li>\n            <li>\n                <p class=\"description\">Climate</p>\n                <p class=\"value\">{{planetDetails.climate}}</p>\n            </li>\n            <li>\n                <p class=\"description\">Gravity</p>\n                <p class=\"value\">{{planetDetails.gravity}}</p>\n            </li>\n            <li>\n                <p class=\"description\">Terrain</p>\n                <p class=\"value\">{{planetDetails.terrain}}</p>\n            </li>\n            <li>\n                <p class=\"description\">Surface water</p>\n                <p class=\"value\">{{planetDetails.surface_water}}</p>\n            </li>\n            <li>\n                <p class=\"description\">Population</p>\n                <p class=\"value\">{{planetDetails.population}}</p>\n            </li>\n            <!-- <li>\n                <p class=\"description\">Residents</p>\n                <p class=\"value\"></p>\n            </li> -->\n        </ul>\n        <!-- <ul>\n            <li *ngFor=\"let resident of planetDetails.residents\">{{resident}}</li>\n        </ul>\n        <p>Films:</p>\n        <ul>\n            <li *ngFor=\"let film of planetDetails.films\">{{film}}</li>\n        </ul>\n        <a href=\"{{planetDetails.url}}\">URL: {{planetDetails.url}}</a> -->\n    </div>\n</div>\n<app-loading *ngIf=\"!allDataLoaded\"></app-loading>"

/***/ }),

/***/ "./src/app/planet/planet-detail/planet-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Muli:400,700,800\");\n@import url(\"https://fonts.googleapis.com/css?family=Orbitron:700\");\n@import url(\"https://fonts.googleapis.com/css?family=Muli:400,700,800\");\n@import url(\"https://fonts.googleapis.com/css?family=Orbitron:700\");\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif; }\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif; }\n.container {\n  margin: 40px auto 0;\n  padding: 7% 0;\n  width: 33%; }\n.container .title {\n    font-family: \"Orbitron\", sans-serif;\n    font-size: 34px;\n    color: #9ee2ff;\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    margin-bottom: 27px; }\n.container .input {\n    text-align: center; }\n.container .input .searchbar {\n      background-color: #131313;\n      width: 90%;\n      height: 30px;\n      border: none;\n      padding: 3%;\n      font-size: 20px;\n      font-weight: 600;\n      outline: none;\n      caret-color: white;\n      color: white; }\n.container .input .searchbar::-webkit-input-placeholder {\n        color: lightgrey; }\n.container .input .searchbar::-ms-input-placeholder {\n        color: lightgrey; }\n.container .input .searchbar::placeholder {\n        color: lightgrey; }\n.container .list {\n    margin: 20px 8px 28px 8px; }\n.container .list .planet-list {\n      list-style-type: none; }\n.container .list .planet-list .planet-item {\n        padding: 3%;\n        margin: 0 2px 0 2px;\n        height: 35px; }\n.container .list .planet-list .planet-item:hover {\n          border-bottom: 6px solid #9ee2ff; }\n.container .list .planet-list .planet-item:hover .planet-name {\n            color: #9ee2ff; }\n.container .list .planet-list .planet-item .planet-name {\n          color: white;\n          font-weight: bold;\n          font-size: 24px;\n          float: left; }\n.container .list .planet-list .planet-item .fas {\n          cursor: pointer;\n          float: right;\n          color: #9ee2ff; }\n.container .list .planet-list .planet-item .fas:hover {\n            color: #389bc5; }\n.container .page-size {\n    text-align: center;\n    margin-bottom: 15px; }\n.container .page-size h4 {\n      margin-bottom: 9px;\n      color: #9ee2ff; }\n.container .page-size .select-page-size {\n      width: 15%;\n      border: none;\n      padding: 4px;\n      font-size: 18px;\n      font-weight: bold;\n      border-radius: 6px;\n      background-color: #cee9f5;\n      text-transform: uppercase; }\n.container .page-size .select-page-size option {\n        text-align: center;\n        color: white;\n        font-size: 15px; }\n.container .pagination {\n    text-align: center;\n    font-size: 20px;\n    margin: 25px 0 25px 0; }\n.container .pagination .current {\n      background-color: #9ee2ff;\n      border-radius: 50%; }\n.container .pagination .current span {\n        background-color: #9ee2ff;\n        color: #051319; }\n.container .pagination li a {\n      color: white; }\n.container .pagination li a:hover {\n        background-color: #9ee2ff;\n        border-radius: 50%; }\n.container .pagination li a:hover span {\n          background-color: #9ee2ff;\n          color: #051319; }\n.container .pagination .pagination-previous a:hover, .container .pagination .pagination-next a:hover {\n      color: #051319; }\n.container .footer {\n    text-align: center;\n    font-size: 14px;\n    margin-top: 50px; }\n.container .footer p {\n      margin-bottom: 15px;\n      color: lightgrey;\n      text-transform: uppercase; }\n.container .footer p span {\n        font-weight: bold;\n        color: #9ee2ff; }\n.container .footer a {\n      text-decoration: none;\n      color: lightgrey; }\n.container .footer a:hover {\n        color: #9ee2ff; }\n.container {\n  margin: 40px auto 0;\n  padding: 7% 0;\n  width: 40%;\n  text-align: center;\n  color: white; }\n.container button {\n    cursor: pointer;\n    margin-bottom: 6%;\n    background-color: white;\n    padding: 7px 16px 7px 16px;\n    border-radius: 6px;\n    border: none;\n    font-weight: bold;\n    font-size: 17px;\n    text-transform: uppercase; }\n.container button:hover {\n      background-color: #9ee2ff; }\n.container .details .planet-name {\n    margin-bottom: 3%;\n    font-size: 38px;\n    font-family: \"Orbitron\", sans-serif;\n    color: #9ee2ff; }\n.container .details .details-list {\n    list-style-type: none; }\n.container .details .details-list li {\n      background-color: #071b24;\n      padding: 18px 36px 36px 36px;\n      margin-bottom: 3%; }\n.container .details .details-list li .description {\n        font-size: 18px;\n        float: left;\n        background-color: #071b24; }\n.container .details .details-list li .value {\n        color: #9ee2ff;\n        font-weight: bold;\n        font-size: 18px;\n        float: right;\n        background-color: #071b24; }\n@media only screen and (max-width: 600px) {\n  .details-list li {\n    font-size: 5px; } }\n"

/***/ }),

/***/ "./src/app/planet/planet-detail/planet-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_planet_service__ = __webpack_require__("./src/app/planet/service/planet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_planet_detail_model__ = __webpack_require__("./src/app/planet/models/planet-detail.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanetDetailComponent = /** @class */ (function () {
    function PlanetDetailComponent(route, planetService) {
        this.route = route;
        this.planetService = planetService;
        this.allDataLoaded = false;
        this.planetDetails = new __WEBPACK_IMPORTED_MODULE_3__models_planet_detail_model__["a" /* PlanetDetails */]('', '', '', '', '', '', '', '', '', [], [], '', '', '');
    }
    PlanetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.planetNumber = params['planetNumber'];
            console.log(_this.planetNumber);
            _this.planetService.getPlanetDetail(_this.planetNumber).subscribe(function (res) {
                _this.planetDetails = res;
                _this.allDataLoaded = true;
            }, function (err) {
                console.log(err);
            });
        });
    };
    PlanetDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-planet-detail',
            template: __webpack_require__("./src/app/planet/planet-detail/planet-detail.component.html"),
            styles: [__webpack_require__("./src/app/planet/planet-detail/planet-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__service_planet_service__["a" /* PlanetService */]])
    ], PlanetDetailComponent);
    return PlanetDetailComponent;
}());



/***/ }),

/***/ "./src/app/planet/planet-list/planet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"allDataLoaded\">\n  <h1 class=\"title\">Planet List</h1>\n  <div class=\"input\">\n    <input type=\"text\" placeholder=\"Search for planet\" name=\"searchbar\" class=\"searchbar\" id=\"searchbar\"\n      [(ngModel)]=\"planetName\" />\n  </div>\n  <div class=\"list\">\n    <ul class=\"planet-list\">\n      <li class=\"planet-item\"\n        *ngFor=\"let planet of planets | planetName: planetName | paginate: {itemsPerPage: currentPageSize, currentPage: pageNumber} \">\n        <a class=\"planet-link\">\n          <p class=\"planet-name\">{{planet.name}}</p>\n          <i title=\"See more about {{planet.name}}\" routerLink=\"/planets/{{planet.url.split('/')[5]}}\"\n            class=\"fas fa-ellipsis-h fa-2x\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"pagination\">\n    <pagination-controls previousLabel=\"\" nextLabel=\"\" (pageChange)=\"pageNumber = $event\"></pagination-controls>\n  </div>\n  <div class=\"page-size\">\n    <h4>Select page size</h4>\n    <select class=\"select-page-size\" name=\"pageSize\" id=\"pageSize\" (change)=\"changePageSize($event.target.value)\">\n      <option *ngFor=\"let size of pageSizes\">{{size}}</option>\n    </select>\n  </div>\n  <div class=\"footer\">\n    <p> Created by <span>Dominik Boniecki</span>, 2019</p>\n    <a href=\"https://boniecki.netlify.com/\">boniecki.netlify.com</a>\n  </div>\n</div>\n<app-loading *ngIf=\"!allDataLoaded\"></app-loading>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/planet/planet-list/planet-list.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Muli:400,700,800\");\n@import url(\"https://fonts.googleapis.com/css?family=Orbitron:700\");\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif; }\n.container {\n  margin: 40px auto 0;\n  padding: 7% 0;\n  width: 33%; }\n.container .title {\n    font-family: \"Orbitron\", sans-serif;\n    font-size: 34px;\n    color: #9ee2ff;\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    margin-bottom: 27px; }\n.container .input {\n    text-align: center; }\n.container .input .searchbar {\n      background-color: #131313;\n      width: 90%;\n      height: 30px;\n      border: none;\n      padding: 3%;\n      font-size: 20px;\n      font-weight: 600;\n      outline: none;\n      caret-color: white;\n      color: white; }\n.container .input .searchbar::-webkit-input-placeholder {\n        color: lightgrey; }\n.container .input .searchbar::-ms-input-placeholder {\n        color: lightgrey; }\n.container .input .searchbar::placeholder {\n        color: lightgrey; }\n.container .list {\n    margin: 20px 8px 28px 8px; }\n.container .list .planet-list {\n      list-style-type: none; }\n.container .list .planet-list .planet-item {\n        padding: 3%;\n        margin: 0 2px 0 2px;\n        height: 35px; }\n.container .list .planet-list .planet-item:hover {\n          border-bottom: 6px solid #9ee2ff; }\n.container .list .planet-list .planet-item:hover .planet-name {\n            color: #9ee2ff; }\n.container .list .planet-list .planet-item .planet-name {\n          color: white;\n          font-weight: bold;\n          font-size: 24px;\n          float: left; }\n.container .list .planet-list .planet-item .fas {\n          cursor: pointer;\n          float: right;\n          color: #9ee2ff; }\n.container .list .planet-list .planet-item .fas:hover {\n            color: #389bc5; }\n.container .page-size {\n    text-align: center;\n    margin-bottom: 15px; }\n.container .page-size h4 {\n      margin-bottom: 9px;\n      color: #9ee2ff; }\n.container .page-size .select-page-size {\n      width: 15%;\n      border: none;\n      padding: 4px;\n      font-size: 18px;\n      font-weight: bold;\n      border-radius: 6px;\n      background-color: #cee9f5;\n      text-transform: uppercase; }\n.container .page-size .select-page-size option {\n        text-align: center;\n        color: white;\n        font-size: 15px; }\n.container .pagination {\n    text-align: center;\n    font-size: 20px;\n    margin: 25px 0 25px 0; }\n.container .pagination .current {\n      background-color: #9ee2ff;\n      border-radius: 50%; }\n.container .pagination .current span {\n        background-color: #9ee2ff;\n        color: #051319; }\n.container .pagination li a {\n      color: white; }\n.container .pagination li a:hover {\n        background-color: #9ee2ff;\n        border-radius: 50%; }\n.container .pagination li a:hover span {\n          background-color: #9ee2ff;\n          color: #051319; }\n.container .pagination .pagination-previous a:hover, .container .pagination .pagination-next a:hover {\n      color: #051319; }\n.container .footer {\n    text-align: center;\n    font-size: 14px;\n    margin-top: 50px; }\n.container .footer p {\n      margin-bottom: 15px;\n      color: lightgrey;\n      text-transform: uppercase; }\n.container .footer p span {\n        font-weight: bold;\n        color: #9ee2ff; }\n.container .footer a {\n      text-decoration: none;\n      color: lightgrey; }\n.container .footer a:hover {\n        color: #9ee2ff; }\n"

/***/ }),

/***/ "./src/app/planet/planet-list/planet-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_planet_service__ = __webpack_require__("./src/app/planet/service/planet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanetListComponent = /** @class */ (function () {
    function PlanetListComponent(planetService) {
        this.planetService = planetService;
        this.pageNumber = 1;
        this.planets = [];
        this.pageSizes = [5, 10, 25, 100];
        this.currentPageSize = 5;
        this.allDataLoaded = false;
    }
    PlanetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = this.planetService.getInfo().subscribe(function (res) {
            //Get planet count
            _this.planetCount = res.count;
            console.log('Planet count: ' + _this.planetCount);
            for (var i = 1; i < _this.planetCount + 1; i++) {
                _this.planetService.getPlanetDetail(i).subscribe(function (res) {
                    _this.planets.push(res);
                    console.log(_this.planets.length);
                    if (_this.planets.length === _this.planetCount) {
                        _this.allDataLoaded = true;
                        console.log('All data loaded: ' + _this.allDataLoaded);
                    }
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    PlanetListComponent.prototype.changePageSize = function (event) {
        this.currentPageSize = event;
        console.log(this.currentPageSize);
    };
    PlanetListComponent.prototype.searchPlanet = function () {
        var _this = this;
        this.planets = this.planets.filter(function (x) {
            return x.name.toLocaleLowerCase().includes(_this.planetName.toLocaleLowerCase());
        });
    };
    PlanetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-planet-list',
            template: __webpack_require__("./src/app/planet/planet-list/planet-list.component.html"),
            styles: [__webpack_require__("./src/app/planet/planet-list/planet-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_planet_service__["a" /* PlanetService */]])
    ], PlanetListComponent);
    return PlanetListComponent;
}());



/***/ }),

/***/ "./src/app/planet/planet-list/planet.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlanetNamePipe = /** @class */ (function () {
    function PlanetNamePipe() {
    }
    PlanetNamePipe.prototype.transform = function (planets, planetName) {
        if (!planetName || planetName === '') {
            return planets;
        }
        return planets.filter(function (x) { return x.name.toLowerCase().indexOf(planetName.toLowerCase()) > -1; });
    };
    PlanetNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'planetName'
        })
    ], PlanetNamePipe);
    return PlanetNamePipe;
}());



/***/ }),

/***/ "./src/app/planet/service/planet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanetService = /** @class */ (function () {
    function PlanetService(http) {
        this.http = http;
        this.url = 'https://swapi.dev/api/planets/';
    }
    //get info about planet list (count, results, etc.)
    PlanetService.prototype.getInfo = function () {
        return this.http.get(this.url);
    };
    //get planet detail by url
    PlanetService.prototype.getPlanetDetail = function (planetNumber) {
        return this.http.get(this.url + planetNumber.toString() + '/');
    };
    PlanetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PlanetService);
    return PlanetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
