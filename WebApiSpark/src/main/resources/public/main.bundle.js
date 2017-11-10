webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-navbar\" class=\"nav navbar\">\r\n    <div class=\"navbar-left-items\">\r\n        <a class=\"navbar-brand navbar-sm\" href=\"#\">SFU IRS</a>\r\n        <a class=\"navbar-brand navbar-lg\" href=\"#\">SFU Incident Reporting System</a>\r\n    </div>\r\n    \r\n    <div class=\"navbar-right-items\">\r\n        <span id=\"logout\" class=\"link\" (click)=\"onLogout()\">Logout</span>\r\n        <!-- <div class=\"dropdown\">\r\n            <span class=\"glyphicon glyphicon-menu-hamburger navbar-right-button pull-left  dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></span>    \r\n            <ul class=\"dropdown-menu\">\r\n                <li><span class=\"link\">Action 1</span></li>\r\n                <li><span class=\"link\">Action 2</span></li>\r\n                <li><span class=\"link\">Settings</span></li>\r\n                <li role=\"separator\" class=\"divider\"></li>\r\n                <li><span class=\"link\" (click)=\"onLogout()\">Logout</span></li>\r\n            </ul>\r\n        </div> -->\r\n    </div>\r\n\r\n    \r\n    <!-- <button id=\"logout\" (click)=\"onLogout()\" class=\"btn-default btn\" style=\"position: absolute; right: 0;\">Logout</button> -->\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AppComponent.prototype.showLogoutButton = function () {
        var button = document.getElementById("logout");
        button.style.visibility = "visible";
    };
    AppComponent.prototype.onLogout = function () {
        var button = document.getElementById("logout");
        button.style.visibility = "hidden";
        this.userService.logout();
        this.router.navigate(['login']);
    };
    AppComponent.prototype.ngOnInit = function () {
        var button = document.getElementById("logout");
        if (this.userService.isLoggedIn()) {
            button.style.visibility = "visible";
        }
        else {
            button.style.visibility = "hidden";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_location_location_component__ = __webpack_require__("../../../../../src/app/component/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_staff_staff_component__ = __webpack_require__("../../../../../src/app/component/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_report_incident_component__ = __webpack_require__("../../../../../src/app/component/report/incident.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_report_new_report_component__ = __webpack_require__("../../../../../src/app/component/report/new-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_guard_app_guard_incident_component__ = __webpack_require__("../../../../../src/app/component/guard-app/guard-incident.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_guard_app_guard_all_reports_component__ = __webpack_require__("../../../../../src/app/component/guard-app/guard-all-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_vehicle_vehicle_component__ = __webpack_require__("../../../../../src/app/component/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_search_search_component__ = __webpack_require__("../../../../../src/app/component/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_person_person_component__ = __webpack_require__("../../../../../src/app/component/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_attachment_attachment_component__ = __webpack_require__("../../../../../src/app/component/attachment/attachment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_location_location_modal_component__ = __webpack_require__("../../../../../src/app/component/location/location-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_category_category_component__ = __webpack_require__("../../../../../src/app/component/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_report_report_summary_component__ = __webpack_require__("../../../../../src/app/component/report/report-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__util_dom_service__ = __webpack_require__("../../../../../src/app/util/dom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_location_service__ = __webpack_require__("../../../../../src/app/service/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__service_incident_element_service__ = __webpack_require__("../../../../../src/app/service/incident-element.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_staff_service__ = __webpack_require__("../../../../../src/app/service/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_person_service__ = __webpack_require__("../../../../../src/app/service/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__util_filter_pipe__ = __webpack_require__("../../../../../src/app/util/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* Components */
















/* Services */











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_router__["a" /* routes */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_18__component_attachment_attachment_component__["a" /* AttachmentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__component_location_location_modal_component__["a" /* LocationModalComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_staff_staff_component__["a" /* StaffComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_report_incident_component__["a" /* IncidentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_guard_app_guard_incident_component__["a" /* GuardIncidentComponent */],
            __WEBPACK_IMPORTED_MODULE_14__component_guard_app_guard_all_reports_component__["a" /* GuardAllReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__component_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component_report_new_report_component__["a" /* NewReportComponent */],
            __WEBPACK_IMPORTED_MODULE_15__component_vehicle_vehicle_component__["a" /* VehicleComponent */],
            __WEBPACK_IMPORTED_MODULE_16__component_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_17__component_person_person_component__["a" /* PersonComponent */],
            __WEBPACK_IMPORTED_MODULE_32__util_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_21__component_report_report_summary_component__["a" /* ReportSummaryComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_23__service_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_25__util_dom_service__["a" /* DomService */],
            __WEBPACK_IMPORTED_MODULE_26__service_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_27__service_incident_service__["a" /* IncidentService */],
            __WEBPACK_IMPORTED_MODULE_28__service_incident_element_service__["a" /* IncidentElementService */],
            __WEBPACK_IMPORTED_MODULE_29__service_staff_service__["a" /* StaffService */],
            __WEBPACK_IMPORTED_MODULE_30__service_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_31__service_new_report_service__["a" /* NewReportService */],
            __WEBPACK_IMPORTED_MODULE_24__service_category_service__["a" /* CategoryService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__component_location_location_component__["a" /* LocationComponent */], __WEBPACK_IMPORTED_MODULE_15__component_vehicle_vehicle_component__["a" /* VehicleComponent */],
            __WEBPACK_IMPORTED_MODULE_17__component_person_person_component__["a" /* PersonComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_report_new_report_component__ = __webpack_require__("../../../../../src/app/component/report/new-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_search_search_component__ = __webpack_require__("../../../../../src/app/component/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_guard_app_guard_all_reports_component__ = __webpack_require__("../../../../../src/app/component/guard-app/guard-all-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_guard_app_guard_incident_component__ = __webpack_require__("../../../../../src/app/component/guard-app/guard-incident.component.ts");







var router = [
    // Default
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // /<path>
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__component_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__component_login_login_component__["a" /* LoginComponent */] },
    // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'guard-app/reports-all', component: __WEBPACK_IMPORTED_MODULE_5__component_guard_app_guard_all_reports_component__["a" /* GuardAllReportsComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__component_search_search_component__["a" /* SearchComponent */] },
    { path: 'new-report', component: __WEBPACK_IMPORTED_MODULE_2__component_report_new_report_component__["a" /* NewReportComponent */] },
    { path: 'guard-app/report/:id', component: __WEBPACK_IMPORTED_MODULE_6__component_guard_app_guard_incident_component__["a" /* GuardIncidentComponent */] },
    // 404
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/component/attachment/attachment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details-body\">\r\n    <div class=\"detail col-12 col-sm-3\">\r\n        <input type=\"file\" [multiple]=\"multiple\" #file>\r\n    </div>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/component/attachment/attachment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttachmentComponent = (function () {
    function AttachmentComponent(http) {
        this.http = http;
        this.multiple = false;
        this.uploadURI = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].UploadURI;
    }
    ;
    AttachmentComponent.prototype.ngOnInit = function () {
    };
    AttachmentComponent.prototype.upload = function () {
        var inputEl = this.inputEl.nativeElement;
        var fileCount = inputEl.files.length;
        var formData = new FormData();
        if (fileCount > 0) {
            for (var i = 0; i < fileCount; i++) {
                console.log(inputEl.files.item(i));
                formData.append('files[]', inputEl.files.item(i));
            }
            var promise = this.http
                .post(this.uploadURI, formData)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
            return Promise.resolve(promise);
        }
        else {
            console.log("error, no file retrieved");
        }
    };
    AttachmentComponent.prototype.handleError = function (error) {
        alert("An error occurred.");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AttachmentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], AttachmentComponent.prototype, "multiple", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('file'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], AttachmentComponent.prototype, "inputEl", void 0);
AttachmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'attachment-component',
        template: __webpack_require__("../../../../../src/app/component/attachment/attachment.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AttachmentComponent);

var _a, _b;
//# sourceMappingURL=attachment.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" \r\n     class=\"modal fade\" \r\n     tabindex=\"-1\" \r\n     [ngClass]=\"{'in': visibleAnimate}\"\r\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title mt-2\">Select Incident Category</h4>\r\n            </div>\r\n        \r\n                <!-- Category Picker -->\r\n                <div class=\"mt-2\">\r\n                    <label class=\"field-title modal-field-title\">Category</label>\r\n                    <select class=\"form-control category-field\" \r\n                            ng-model=\"selectedMainCategory.MAIN_CATEGORY\" \r\n                            (change)=\"onSelectCategory($event.target.value)\">  \r\n                        <option>{{selectedMainCategory.MAIN_CATEGORY}}</option>  \r\n                        <option disabled>──────────</option>\r\n                        <option *ngFor=\"let category of categories\" value={{category.MAIN_CATEGORY}}>{{category.MAIN_CATEGORY}}</option>  \r\n                    </select>\r\n                </div>\r\n\r\n                <!-- Subcategory Picker -->\r\n                <div class=\"mt-2\">  \r\n                    <label class=\"field-title modal-field-title\">Subcategory</label>  \r\n                    <select class=\"form-control category-field\" \r\n                            [(ngModel)] =\"selectedSubCategory.SUB_CATEGORY\" \r\n                            (change)=\"onSelectSubCategory($event.target.value)\">                  \r\n                        <option *ngIf='selectedMainCategory.MAIN_CATEGORY == \"\"'>--Select Subcategory--</option>  \r\n                        <option *ngFor=\"let subcategory of filteredSubcategories\" value={{subcategory.SUB_CATEGORY}}>{{subcategory.SUB_CATEGORY}}</option>  \r\n                    </select>  \r\n                </div>\r\n\r\n                <!-- Type Picker -->\r\n                <div class=\"mt-2\">\r\n                    <label class=\"field-title modal-field-title\">Type</label>    \r\n                    <select class=\"form-control category-field\" \r\n                            [(ngModel)] =\"selectedType.INCIDENT_TYPE\" \r\n                            (change)=\"onSelectTypeCategory($event.target.value)\">                  \r\n                        <option *ngIf='selectedSubCategory.SUB_CATEGORY == \"\"'>--Select Type--</option>  \r\n                        <option *ngFor=\"let type of filteredTypes \" value=\"{{type.INCIDENT_TYPE}},, {{type.CATEGORY_ID}}\">{{type.INCIDENT_TYPE}}</option>  \r\n                    </select>  \r\n                </div>\r\n\r\n            <div class=\"modal-footer mt-2 pt-2 mb-1\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitCategory($event.target)\">Save changes</button>\r\n                <button type=\"button\" class=\"btn btn-secondary ml-1\" (click)=\"hide()\">Close</button>\r\n            </div>\r\n        </div>         \r\n    </div>\r\n</div>\r\n    \r\n\r\n    <!-- Category -->\r\n    <!-- <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"category\" data-toggle=\"dropdown\">\r\n        Category\r\n        <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"category\">\r\n        <li role=\"presentation\" class=\"divider\"></li>\r\n        <li role=\"presentation\" [ngClass]=\"{'active': selectedItem == item}\" (click)=\"listClick($event, item)\" *ngFor=\"let item of categories\">\r\n                {{category.MAIN_CATEGORY}}\r\n        </li>\r\n    </ul> -->\r\n\r\n    <!-- Subcategory -->\r\n    <!-- <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"category\" data-toggle=\"dropdown\">\r\n        Subcategory\r\n        <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"category\">\r\n        <li role=\"presentation\" class=\"divider\"></li>                \r\n        <li role=\"presentation\"><a role=\"menuitem\" href=\"#\">category 1 - get json</a></li>\r\n        <li role=\"presentation\"><a role=\"menuitem\" href=\"#\">category 2 - get json</a></li>\r\n        <li role=\"presentation\"><a role=\"menuitem\" href=\"#\">category 3 - get json</a></li>\r\n        <li role=\"presentation\"><a role=\"menuitem\" href=\"#\">category 4 - get json</a></li>\r\n    </ul> -->\r\n\r\n    <!-- Type -->\r\n    <!-- <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"category\" data-toggle=\"dropdown\">\r\n        Type\r\n        <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"category\">\r\n        <li role=\"presentation\" class=\"divider\"></li>                \r\n        <li role=\"presentation\"><a role=\"menuitem\" href=\"#\">category 1 - get json</a></li>\r\n        <li role=\"presentation\"><a role=\"menuitem\" href=\"#\">category 2 - get json</a></li>\r\n        <li role=\"presentation\"><a role=\"menuitem\" href=\"#\">category 3 - get json</a></li>\r\n        <li role=\"presentation\"><a role=\"menuitem\" href=\"#\">category 4 - get json</a></li>\r\n    </ul>         -->\r\n"

/***/ }),

/***/ "../../../../../src/app/component/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category__ = __webpack_require__("../../../../../src/app/component/category/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = (function () {
    function CategoryComponent(categoryService) {
        this.categoryService = categoryService;
        this.categorySaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedCategory = new __WEBPACK_IMPORTED_MODULE_1__category__["a" /* Category */](null, null, null, null);
        this.selectedMainCategory = new __WEBPACK_IMPORTED_MODULE_1__category__["b" /* CategoryDictionary */]();
        this.selectedSubCategory = new __WEBPACK_IMPORTED_MODULE_1__category__["d" /* SubCategory */]();
        this.selectedType = new __WEBPACK_IMPORTED_MODULE_1__category__["c" /* CategoryType */]();
        this.categories = [];
        this.filteredSubcategories = [];
        this.filteredTypes = [];
        this.categoryID = -1;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ;
    CategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().then(function (returnedCategories) {
            _this.categories = _this.categoryService.toCategoryDictionary(returnedCategories);
        });
    };
    CategoryComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    CategoryComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    CategoryComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    // filter subcategory and type lists according to selection of previous dropdown
    CategoryComponent.prototype.onSelectCategory = function (categoryName) {
        console.log("selected category: " + categoryName);
        this.selectedCategory.attributes.MAIN_CATEGORY = categoryName;
        var index = this.categories.findIndex(function (item) {
            return item.MAIN_CATEGORY === categoryName;
        });
        this.filteredSubcategories = this.categories[index].SUBCATEGORIES;
        console.log("list of corresponding subcategories " + this.filteredSubcategories);
    };
    CategoryComponent.prototype.onSelectSubCategory = function (subCategoryName) {
        this.selectedCategory.attributes.SUB_CATEGORY = subCategoryName;
        var index = this.filteredSubcategories.findIndex(function (item) {
            return item.SUB_CATEGORY == subCategoryName;
        });
        this.filteredTypes = this.filteredSubcategories[index].TYPES;
        console.log("subcategory" + subCategoryName);
    };
    CategoryComponent.prototype.onSelectTypeCategory = function (type) {
        console.log("category type " + type);
        type = type.split(",,");
        this.selectedCategory.attributes.INCIDENT_TYPE = type[0];
        this.categoryID = type[1];
    };
    CategoryComponent.prototype.submitCategory = function () {
        console.log("submitting category");
        if (this.categoryID == -1) {
            if (this.filteredTypes.length == 0) {
                this.selectedCategory.attributes.INCIDENT_TYPE = null;
                this.categoryID = this.filteredSubcategories[0].CATEGORY_ID;
                console.log("retrieved category id: " + this.categoryID);
                var id = this.categoryID.toString();
                this.categorySaved.emit(id);
                this.hide();
            }
            else {
                console.log("Please select an incident type");
            }
        }
        if (this.categoryID != -1) {
            console.log("category id: " + this.categoryID);
            var id = this.categoryID.toString();
            this.categorySaved.emit(id);
            this.hide();
        }
    };
    CategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    return CategoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CategoryComponent.prototype, "categorySaved", void 0);
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'category-component',
        template: __webpack_require__("../../../../../src/app/component/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/guard-app.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_category_service__["a" /* CategoryService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_category_service__["a" /* CategoryService */]) === "function" && _b || Object])
], CategoryComponent);

var _a, _b;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/category/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
/* unused harmony export CategoryAttributes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategoryDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CategoryType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");

var Category = (function () {
    function Category(id, mainCategory, subCategory, type) {
        this.attributes = new CategoryAttributes();
        this.table = __WEBPACK_IMPORTED_MODULE_0__util_config_service__["a" /* Config */].CategoryTable;
        this.attributes.CATEGORY_ID = id;
        this.attributes.MAIN_CATEGORY = mainCategory;
        this.attributes.SUB_CATEGORY = subCategory;
        this.attributes.INCIDENT_TYPE = type;
    }
    return Category;
}());

var CategoryAttributes = (function () {
    function CategoryAttributes() {
    }
    return CategoryAttributes;
}());

var CategoryDictionary = (function () {
    function CategoryDictionary() {
        this.ID = 0;
        this.MAIN_CATEGORY = "";
        this.SUBCATEGORIES = [];
    }
    return CategoryDictionary;
}());

var SubCategory = (function () {
    function SubCategory() {
        this.SUB_CATEGORY = "";
        this.TYPES = [];
    }
    return SubCategory;
}());

var CategoryType = (function () {
    function CategoryType() {
        this.INCIDENT_TYPE = "";
    }
    return CategoryType;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div id=\"main-content\" class=\"max-height-width\">\r\n        <div id=\"incidents-container\" class=\"col-sm-8\">\r\n            <div id=\"workspace\" class=\"row\">\r\n                <div id=\"workspace-data\" class=\"col-sm-3\">\r\n                    <div id=\"button-container\">\r\n                        <button class=\"btn btn-primary\" (click)=\"newReport();\">New Report</button>\r\n                    </div>\r\n                    <incidents-component></incidents-component>\r\n                </div>\r\n                <div id=\"workspace-main\" class=\"col-sm-9\">\r\n                    <div id=\"incidents-dashboard\" class=\"panel panel-default\">\r\n                        <!-- <div class=\"panel-heading\">\r\n\r\n                            <div>\r\n                                <span class=\"glyphicon glyphicon-dashboard glyphicon-heading\"></span>\r\n                                <span class=\"panel-header\">Workspace</span>\r\n                            </div>\r\n                            <div id=\"button-container\">\r\n                                <button class=\"btn btn-primary\" (click)=\"newReport();\">New Report</button>\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"quarter-box\" *ngFor=\"let report of reportsInWorkspace\">\r\n                                <report-summary [inputReport]=\"report\"></report-summary>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      \r\n\r\n        <div id=\"left-panels\" class=\"col-sm-2 side-container\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <span class=\"glyphicon glyphicon-alert glyphicon-heading\"></span>\r\n                    <span class=\"panel-header\">Watchlist</span>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <select class=\"form-control\" name=\"\" id=\"\">\r\n                        <option value=\"\">Lone Worker</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                    \r\n                </div>\r\n            </div>\r\n            <staff-component></staff-component>\r\n        </div>\r\n      \r\n        <div id=\"right-panels\" class=\"col-sm-2 side-container\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <span class=\"glyphicon glyphicon-tasks glyphicon-heading\"></span>\r\n                    <span class=\"panel-header\">Workflow Prompt</span>\r\n                </div>\r\n                <div class=\"panel-body\"></div>\r\n            </div>\r\n            <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"glyphicon glyphicon-stats glyphicon-heading\"></span>\r\n                        <span class=\"panel-header\">Stats</span>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                    </div>\r\n                </div>\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <span class=\"glyphicon glyphicon-info-sign glyphicon-heading\"></span>\r\n                    <span class=\"panel-header\">Info</span>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <ul class=\"nav nav-tabs\">\r\n                        <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Resources</a></li>\r\n                        <li><a data-toggle=\"tab\" href=\"#menu1\">Notepad</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      \r\n  </div>\r\n    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(router, http, userService, incidentService) {
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.incidentService = incidentService;
        this.title = 'SFU Incident Reporting System';
        if (this.userService.isLoggedIn() == false) {
            this.router.navigate(['login']);
        }
    }
    DashboardComponent.prototype.newReport = function () {
        window.open("new-report", "_blank");
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.incidentService.reportsToAddToWorkspace
            .subscribe(function (reports) {
            _this.reportsInWorkspace = reports;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/guard-app/guard-all-reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-10 col-md-offset-1 col-md-offset-right-1\">\r\n                <div class=\"flex-container\">\r\n                    <div class=\"flex-item panel panel-default\" *ngFor=\"let incident of incidents\" (click)=\"viewReport(incident)\">\r\n                        <div class=\"panel-body\">\r\n                            <ul class=\"p-0\">\r\n                                <li class=\"card-text-primary\">\r\n                                    #{{incident.attributes.REPORT_ID}}\r\n                                </li>\r\n                                <li class=\"card-text-secondary mt-sm\">\r\n                                    {{incident.attributes.DESCRIPTION}}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <footer class=\"panel panel-default guard-app-menu\">\r\n                <button class=\"button guard-menu-button card-text-primary\">\r\n                    <span class=\"glyphicon glyphicon-plus\"></span> \r\n                    New Report\r\n                </button>            \r\n            </footer>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/component/guard-app/guard-all-reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardAllReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GuardAllReportsComponent = (function () {
    function GuardAllReportsComponent(incidentsService, userService, http, router) {
        this.incidentsService = incidentsService;
        this.userService = userService;
        this.http = http;
        this.router = router;
    }
    ;
    GuardAllReportsComponent.prototype.getIncidents = function () {
        var _this = this;
        this.user = this.userService.getCurrentUser();
        this.incidentsService.getGuardIncidents().then(function (returnedIncidents) {
            console.log("returned incidents: ", returnedIncidents);
            _this.incidents = returnedIncidents;
        });
    };
    GuardAllReportsComponent.prototype.viewReport = function (incident) {
        console.log("view report id = " + incident.attributes.REPORT_ID);
        this.router.navigate(['guard-app/report', incident.attributes.REPORT_ID]);
    };
    GuardAllReportsComponent.prototype.ngOnInit = function () {
        this.getIncidents();
    };
    return GuardAllReportsComponent;
}());
GuardAllReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'guard-all-reports',
        template: __webpack_require__("../../../../../src/app/component/guard-app/guard-all-reports.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/guard-app.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], GuardAllReportsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=guard-all-reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/guard-app/guard-incident.component.html":
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n<div class=\"container-fluid main-content\">\r\n    <div class=\"row\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\r\n                            col-sm-offset-3\r\n                            col-sm-offset-right-3\r\n                            col-md-offset-3 \r\n                            col-md-offset-right-3 \r\n                            col-lg-offset-3 \r\n                            col-lg-offset-right-3\">\r\n                    <div class=\"panel panel-default mt-1\">\r\n                        <div class=\"panel-heading pb-0 pt-1\" *ngIf=\"incident\">\r\n                            <h5>Report # {{incident.attributes.REPORT_ID}}</h5>\r\n                            <!-- <h5>\r\n                                <span class=\"mr-5\" style=\"display:block\" (dblclick)=\"modalCategory.show()\">\r\n                                    Category {{incident.category.MAIN_CATEGORY}}  -->\r\n                                    <!-- <button class=\"btn btn-default btn-xs pull-right\" (dblclick)=\"modalCategory.show()\"><span class=\"p-2 glyphicon glyphicon-edit\"></span></button> -->\r\n                                    <!-- <br> \r\n                                    <span class=\"ml-3\">{{incident.category.SUB_CATEGORY}}</span><br>\r\n                                    <span class=\"ml-3\">{{incident.category.INCIDENT_TYPE}}</span>  \r\n                                </span> -->\r\n                            <!-- </h5> -->\r\n                        </div>\r\n                        <category-component #modalCategory (categorySaved)=\"changeCategory($event)\"></category-component>             \r\n                        <div class=\"panel-group\" id=\"accordion\">\r\n                            <div class=\"panel panel-default ml-1 mr-1\">\r\n                                    <div class=\"panel-heading collapsable-heading\">\r\n                                        <h4 class=\"panel-title\">\r\n                                            <a  class=\"accordion-toggle\" \r\n                                                data-toggle=\"collapse\" \r\n                                                href=\"#collapseCategory\">\r\n                                                Category\r\n                                            </a>\r\n                                        </h4>\r\n                                    </div>\r\n                                    <div id=\"collapseCategory\" class=\"panel-collapse collapse in\">\r\n                                        <div class=\"panel-body lh-1\" *ngIf=\"incident\">                                                    \r\n                                            <span [id]=\"incident.category.CATEGORY_ID\" \r\n                                                (dblclick)=\"modalCategory.show()\">\r\n                                                {{incident.category.attributes.MAIN_CATEGORY}},  \r\n                                                <!-- keep the span below in line to prevent insertion of space before comma -->\r\n                                                {{incident.category.attributes.SUB_CATEGORY}}<span *ngIf=\"incident.category.attributes.INCIDENT_TYPE\">,\r\n                                                    {{incident.category.attributes.INCIDENT_TYPE}}\r\n                                                </span>\r\n                                            </span>                                                \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            <div class=\"panel panel-default ml-1 mr-1\">\r\n                                <div class=\"panel-heading collapsable-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                        <a  class=\"accordion-toggle\" \r\n                                            data-toggle=\"collapse\" \r\n                                            href=\"#collapseLocation\">\r\n                                            Location\r\n                                        </a>\r\n                                    </h4>\r\n                                </div>       \r\n                                <div id=\"collapseLocation\" class=\"panel-collapse collapse in\">\r\n                                    <div class=\"panel-body lh-1\" *ngIf=\"incident\">\r\n                                        <span *ngFor=\"let location of incident.incidentElements['Location']\" \r\n                                            [id]=\"location.attributes.LOCATION_ID\"\r\n                                            (dblclick)=\"this.modalLocation.show($event)\">\r\n                                            {{location.attributes.CAMPUS_ID}},                                            \r\n                                            {{location.attributes.BUILDING_NAME}},    \r\n                                            {{location.attributes.ROOM_NUMBER}}    \r\n                                            <!-- {{location.attributes.DEPARTMENT}}  -->\r\n                                            <br>\r\n                                        </span>\r\n                                        <button class=\"btn btn-default btn-sm pull-right\" (click)=\"modalLocation.show($event)\">\r\n                                            <span class=\"glyphicon glyphicon-plus\"></span> \r\n                                            Add Location\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <location-modal-component #modalLocation (locationSaved)=\"changeLocation()\"></location-modal-component>                                                                        \r\n                            </div>\r\n\r\n                            <div class=\"panel panel-default ml-1 mr-1\">\r\n                                <div class=\"panel-heading collapsable-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                        <a  class=\"accordion-toggle\" \r\n                                            data-toggle=\"collapse\" \r\n                                            href=\"#collapseExecSummary\">\r\n                                            Executive Summary                                                            \r\n                                        </a>\r\n                                    </h4>\r\n                                </div>\r\n                                <div id=\"collapseExecSummary\" class=\"panel-collapse collapse in\">\r\n                                    <div class=\"panel-body\" *ngIf=\"incident\">\r\n                                        {{incident.attributes.EXECUTIVE_SUMMARY}}\r\n                                        <!-- <button class=\"btn btn-default btn-xs pull-right\"><span class=\"p-2 glyphicon glyphicon-edit\"></span></button>                                 -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"panel panel-default ml-1 mr-1\">\r\n                                <div class=\"panel-heading collapsable-heading\">\r\n                                    <!-- <span class=\"glyphicon card-text-secondary mr-1\" [ngClass]=\"{'glyphicon-chevron-up': openedPanel , 'glyphicon-chevron-down': !openedPanel }\" aria-hidden=\"true\" style=\"float: right;\"></span>                             -->\r\n                                    <h4 class=\"panel-title\">\r\n                                        <a  class=\"accordion-toggle\" \r\n                                            data-toggle=\"collapse\" \r\n                                            href=\"#collapseDescription\">\r\n                                            Description\r\n                                        </a>\r\n                                    </h4>\r\n                                </div>\r\n                                <div id=\"collapseDescription\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body\" *ngIf=\"incident\">\r\n                                        {{incident.attributes.DESCRIPTION}}           \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                \r\n                            <div class=\"panel panel-default ml-1 mr-1\">\r\n                                <div class=\"panel-heading collapsable-heading\">\r\n                                    <!-- <span class=\"glyphicon card-text-secondary mr-1\" [ngClass]=\"{'glyphicon-chevron-up': openedPanel , 'glyphicon-chevron-down': !openedPanel }\" aria-hidden=\"true\" style=\"float: right;\"></span>                             -->\r\n                                    <h4 class=\"panel-title\">\r\n                                        <a  class=\"accordion-toggle\" \r\n                                            data-toggle=\"collapse\" \r\n                                            href=\"#collapsePersons\">\r\n                                            Persons\r\n                                        </a>\r\n                                    </h4>\r\n                                </div>\r\n                                <div id=\"collapsePersons\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body\">\r\n                        \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <footer class=\"panel panel-default guard-app-menu\">\r\n            <!-- <button class=\"button guard-menu-button field-title\" (click)=\"saveReport()\">\r\n                <span class=\"glyphicon glyphicon-save\"></span> \r\n                Save\r\n            </button> -->\r\n            <button class=\"button guard-menu-button card-text-primary ml-1\">\r\n                <span class=\"glyphicon glyphicon-plus\"></span> \r\n                New\r\n            </button>\r\n            <a routerLink=\"../../reports-all\">\r\n                <button class=\"button guard-menu-button card-text-primary ml-1\">\r\n                <span class=\"glyphicon glyphicon-th-large\"></span> \r\n                View All\r\n                </button>\r\n            </a>\r\n        </footer>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/guard-app/guard-incident.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardIncidentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_incident_element_service__ = __webpack_require__("../../../../../src/app/service/incident-element.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__location_location__ = __webpack_require__("../../../../../src/app/component/location/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__location_location_modal_component__ = __webpack_require__("../../../../../src/app/component/location/location-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__category_category_component__ = __webpack_require__("../../../../../src/app/component/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var GuardIncidentComponent = (function () {
    function GuardIncidentComponent(incidentsService, incidentElementService, categoryService, userService, router, http, route) {
        this.incidentsService = incidentsService;
        this.incidentElementService = incidentElementService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.title = 'SFU Incident Reporting System';
        this.incident = new __WEBPACK_IMPORTED_MODULE_4__report_incident__["a" /* Incident */]();
        this.locationModalStr = "location-modal";
        if (this.userService.isLoggedIn() == false) {
            this.router.navigate(['login']);
        }
    }
    ;
    //   addIncident(): void {
    //     this.incidentsService.create( this.newIncident )
    //         .then( returnedIncident => {
    //             if ( returnedIncident != null  ) {
    //               this.incidents.push( returnedIncident );
    //               alert( "Incident successfully added!" );
    //             }
    //             else alert( "Add failed." );
    //         } );
    //     delete this.newIncident;
    //     this.newIncident = new Incident();
    //   }
    // saveReport(): void {
    //     this.incidentsService.update( this.incident )
    //         .then( returnedIncident => {
    //             if ( returnedIncident != null  ) {
    //             alert( "Incident successfully edited!" );
    //             }
    //             else alert( "Edit failed." );
    //         } );
    // }
    GuardIncidentComponent.prototype.showModal = function () {
        var locationModal = document.getElementById("modalLocation");
        locationModal.style.visibility = "true";
        // setTimeout(() => locationModal.visibleAnimate = true, 100);
    };
    GuardIncidentComponent.prototype.hideModal = function () {
        var locationModal = document.getElementById("modalLocation");
        setTimeout(function () { return locationModal.style.visibility = "false"; }, 300);
    };
    GuardIncidentComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hideModal();
        }
    };
    GuardIncidentComponent.prototype.changeLocation = function () {
        var locationToAdd = this.locationModal.locationComponent.newLocation;
        var locationToRemove = -1;
        locationToRemove = this.locationModal.button_id;
        if (locationToRemove == -1) {
            // Add new location 
            this.incidentElementService.addElement(this.incident, locationToAdd);
        }
        else {
            // Change existing location
            this.incidentElementService.changeElement(this.incident, locationToRemove, locationToAdd);
        }
        this.locationModal.locationComponent.newLocation = new __WEBPACK_IMPORTED_MODULE_8__location_location__["b" /* Location */](); // reset
        var locationToInsert = new __WEBPACK_IMPORTED_MODULE_8__location_location__["b" /* Location */]();
    };
    GuardIncidentComponent.prototype.changeCategory = function (newCategoryID) {
        this.incident.attributes.CATEGORY_ID = newCategoryID;
        this.categoryService.changeIncidentCategory(this.incident, newCategoryID, this.categoryModal.selectedCategory);
    };
    GuardIncidentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.incidentsService.getIncident(+params.get('id'));
        })
            .subscribe(function (returnedIncident) {
            _this.incident = returnedIncident;
            console.log("returned incident", _this.incident);
        });
    };
    return GuardIncidentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__location_location_modal_component__["a" /* LocationModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__location_location_modal_component__["a" /* LocationModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__location_location_modal_component__["a" /* LocationModalComponent */]) === "function" && _a || Object)
], GuardIncidentComponent.prototype, "locationModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10__category_category_component__["a" /* CategoryComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__category_category_component__["a" /* CategoryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__category_category_component__["a" /* CategoryComponent */]) === "function" && _b || Object)
], GuardIncidentComponent.prototype, "categoryModal", void 0);
GuardIncidentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'guard-incident-component',
        template: __webpack_require__("../../../../../src/app/component/guard-app/guard-incident.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/guard-app.css")],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_incident_service__["a" /* IncidentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__service_incident_element_service__["a" /* IncidentElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_incident_element_service__["a" /* IncidentElementService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_11__service_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__service_category_service__["a" /* CategoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _j || Object])
], GuardIncidentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=guard-incident.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/location/location-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\"     \r\n    class=\"modal fade\"   \r\n    tabindex=\"-1\"     \r\n    [ngClass]=\"{'in': visibleAnimate}\"     \r\n    [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">     \r\n    <div class=\"modal-dialog\" role=\"document\">         \r\n        <div class=\"modal-content\">                                    \r\n            <div class=\"modal-header\">                     \r\n                <button type=\"button\" class=\"close\" (click)=\"hide()\" aria-label=\"Close\">                         \r\n                    <span aria-hidden=\"true\">&times;</span>                     \r\n                </button>                     \r\n                <h4 class=\"modal-title mt-2\">Change current location {{currentLocation}}</h4>             \r\n            </div>             \r\n            <location-component></location-component>                         \r\n            <div class=\"modal-footer mt-2 pt-2 mb-1\">                 \r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitChanges($event.target.value)\" id=\"{{button_id}}\">Save changes</button>                 \r\n                <button type=\"button\" class=\"btn btn-secondary ml-1\" (click)=\"hide()\">Close</button>             \r\n</div>         \r\n</div>     \r\n</div> \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/location/location-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_component__ = __webpack_require__("../../../../../src/app/component/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* *  Location Modal Component:
*  displays the location component within a modal
*  to add/change locations in a report */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationModalComponent = (function () {
    function LocationModalComponent(reportService) {
        this.reportService = reportService;
        this.locationSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.visible = false;
        this.visibleAnimate = false;
    }
    LocationModalComponent.prototype.show = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        if (target.id) {
            console.log("target ", target);
            var idAttr = target.id;
            this.button_id = idAttr;
            console.log("target ", idAttr);
        }
        else {
            this.button_id = -1;
        }
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    LocationModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    LocationModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    LocationModalComponent.prototype.submitChanges = function (id) {
        this.locationComponent.newLocation.table = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].LocationTable;
        console.log(this.locationComponent.newLocation);
        this.locationSaved.emit('complete');
        this.hide();
    };
    LocationModalComponent.prototype.ngOnInit = function () {
        document.getElementById("removeLocation").style.visibility = "hidden";
    };
    return LocationModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__location_component__["a" /* LocationComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__location_component__["a" /* LocationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__location_component__["a" /* LocationComponent */]) === "function" && _a || Object)
], LocationModalComponent.prototype, "locationComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], LocationModalComponent.prototype, "locationSaved", void 0);
LocationModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'location-modal-component',
        template: __webpack_require__("../../../../../src/app/component/location/location-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/guard-app.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_new_report_service__["a" /* NewReportService */]) === "function" && _c || Object])
], LocationModalComponent);

var _a, _b, _c;
//# sourceMappingURL=location-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details-body\">\r\n    <div class=\"x-container\" id=\"removeLocation\">\r\n        <span class=\"glyphicon glyphicon-remove glyphicon-btn\" (click)=\"removeLocationFromReport()\"></span>        \r\n    </div>\r\n    <div class=\"detail col-12 col-sm-3\">\r\n        <span class=\"field-title\">Campus <span class=\"required-asterisk\">*</span></span>\r\n        <select class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"newLocation.attributes.CAMPUS_ID\" (change)=\"onSelectCampus()\">\r\n            <option *ngFor=\"let campus of locationMap\" [value]=\"campus.CAMPUS_ID\">{{campus.CAMPUS_ID}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"detail col-12 col-sm-3\">\r\n        <span class=\"field-title\">Building <span class=\"required-asterisk\">*</span></span>\r\n        <select class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"newLocation.attributes.BUILDING_NAME\" (change)=\"onSelectBuilding()\">\r\n            <option *ngFor=\"let building of buildings\" [value]=\"building.BUILDING_NAME\">{{building.BUILDING_NAME}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"detail col-12 col-sm-3\">\r\n        <span class=\"field-title\">Room Number <span class=\"required-asterisk\">*</span></span>\r\n        <select class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"newLocation.attributes.LOCATION_ID\" (change)=\"onSelectRoom()\">\r\n            <option *ngFor=\"let room of rooms\" [value]=\"room.LOCATION_ID\">{{room.ROOM_NUMBER}}</option>                    \r\n        </select>\r\n    </div> \r\n</div> "

/***/ }),

/***/ "../../../../../src/app/component/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_location_service__ = __webpack_require__("../../../../../src/app/service/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location__ = __webpack_require__("../../../../../src/app/component/location/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationComponent = (function () {
    function LocationComponent(locationService, reportService) {
        this.locationService = locationService;
        this.reportService = reportService;
        this.locations = [];
        this.locationMap = [];
        this.buildings = [];
        this.rooms = [];
        this.selectedCampus = new __WEBPACK_IMPORTED_MODULE_3__location__["c" /* LocationMapping */]();
        this.newLocation = new __WEBPACK_IMPORTED_MODULE_3__location__["b" /* Location */]();
    }
    LocationComponent.prototype.addLocationToReport = function () {
        this.reportService.addIncidentElement(this.newLocation);
    };
    LocationComponent.prototype.removeLocationFromReport = function () {
        if (this.reference == null) {
            console.log("must have a location!");
            return;
        }
        //if ( this.newLocation != null && this.newLocation.attributes.LOCATION_ID > 0 ) 
        this.reportService.removeIncidentElement(this.newLocation, __WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].LocationTable);
        this.reference.destroy();
    };
    LocationComponent.prototype.getLocations = function () {
        var _this = this;
        this.locationService.getLocations().then(function (returnedLocations) {
            _this.locations = returnedLocations;
            _this.locationMap = _this.locationService.toLocationMapping(_this.locations);
        });
    };
    LocationComponent.prototype.onSelectCampus = function () {
        var _this = this;
        this.locationMap.forEach(function (campus) {
            if (campus.CAMPUS_ID == _this.newLocation.attributes.CAMPUS_ID)
                _this.buildings = campus.BUILDINGS;
        });
    };
    LocationComponent.prototype.onSelectBuilding = function () {
        var _this = this;
        this.buildings.forEach(function (bldg) {
            if (bldg.BUILDING_NAME === _this.newLocation.attributes.BUILDING_NAME)
                _this.rooms = bldg.ROOMS;
        });
    };
    LocationComponent.prototype.onSelectRoom = function () {
        var _this = this;
        var index = this.locations.findIndex(function (loc) { return loc.attributes.LOCATION_ID == _this.newLocation.attributes.LOCATION_ID; });
        this.newLocation.attributes.ROOM_NUMBER = this.locations[index].attributes.ROOM_NUMBER;
    };
    LocationComponent.prototype.addLocation = function () {
        var _this = this;
        // if (this.newLocation.CITY != null && this.newLocation.CITY.length == 0)
        //   return;
        this.locationService.create(this.newLocation)
            .then(function (returnedLocation) {
            if (returnedLocation != null) {
                _this.locations.push(returnedLocation);
                alert("Location successfully added!");
            }
            else
                alert("Add failed.");
        });
        delete this.newLocation;
        this.newLocation = new __WEBPACK_IMPORTED_MODULE_3__location__["b" /* Location */]();
    };
    LocationComponent.prototype.updateLocation = function (location) {
        var _this = this;
        // if (this.newLocation.CITY != null && this.newLocation.CITY.length == 0)
        //   return;
        this.locationService.update(location)
            .then(function (returnedLocation) {
            if (returnedLocation != null) {
                var i = _this.locations.findIndex(function (loc) { return loc.attributes.LOCATION_ID === returnedLocation.attributes.LOCATION_ID; });
                // remove 1 object at index i, replace it with returnedLocation
                _this.locations.splice(i, 1, returnedLocation);
                alert("Location successfully edited!");
            }
            else
                alert("Edit failed.");
        });
    };
    LocationComponent.prototype.deleteLocation = function (id) {
        var _this = this;
        this.locationService.delete(id).then(function (isDeleted) {
            var msg = isDeleted ? "Location successfully deleted!" : "Delete failed";
            alert(msg);
            var i = _this.locations.findIndex(function (loc) { return loc.attributes.LOCATION_ID === id; });
            console.log("delete successful");
            // remove 1 object at index i
            _this.locations.splice(i, 1);
        });
    };
    LocationComponent.prototype.ngOnInit = function () {
        this.getLocations();
        this.addLocationToReport();
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'location-component',
        template: __webpack_require__("../../../../../src/app/component/location/location.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_location_service__["a" /* LocationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_new_report_service__["a" /* NewReportService */]) === "function" && _b || Object])
], LocationComponent);

var _a, _b;
//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/location/location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Location; });
/* unused harmony export LocationAttributes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LocationMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Room; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");

var Location = (function () {
    function Location() {
        this.attributes = new LocationAttributes();
        this.table = __WEBPACK_IMPORTED_MODULE_0__util_config_service__["a" /* Config */].LocationTable;
    }
    Location.prototype.setSearchString = function () {
        this.searchString =
            this.attributes.LOCATION_ID
                + " " + this.attributes.CAMPUS_ID
                + " " + this.attributes.BUILDING_NAME
                + " " + this.attributes.ROOM_NUMBER
                + " " + this.attributes.DEPARTMENT;
    };
    ;
    return Location;
}());

var LocationAttributes = (function () {
    function LocationAttributes() {
    }
    return LocationAttributes;
}());

var LocationMapping = (function () {
    function LocationMapping() {
        this.BUILDINGS = [];
    }
    return LocationMapping;
}());

var Building = (function () {
    function Building() {
        this.ROOMS = [];
    }
    return Building;
}());

var Room = (function () {
    function Room(locationId, roomNumber) {
        this.ROOM_NUMBER = roomNumber;
        this.LOCATION_ID = locationId;
    }
    return Room;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row-container flex-center\">\r\n    <div class=\"panel panel-default panel-login\">\r\n        <div class=\"panel-body\">\r\n            <h2>Login</h2> <br>\r\n            <form (ngSubmit)=\"onLogin()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"uname\">Username:</label>\r\n                    <input type=\"text\" id=\"uname\" class=\"form-control\" [(ngModel)]=\"user.attributes.USERNAME\" [ngModelOptions]=\"{standalone: true}\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"pwd\">Password:</label>\r\n                    <input type=\"password\" id =\"pwd\" class=\"form-control\" [(ngModel)]=\"user.attributes.PASSWORD\" [ngModelOptions]=\"{standalone: true}\">\r\n                </div>\r\n                <button type=\"submit\" class=\"btn-default btn\">Login</button> <br> <br>\r\n                <a href=\"#\">Forgot Password</a>\r\n            </form>\r\n        </div>      \r\n    </div> \r\n</div>\r\n\r\n<!-- <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-sm-10 col-sm-offset-1 col-sm-offset-right-1\r\n                    col-lg-6 col-lg-offset-3 col-lg-offset-right-3\">\r\n        </div>\r\n    </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/component/login/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, userService, loginService, appComponent) {
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
        this.appComponent = appComponent;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
        this.checkLogin();
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.user.attributes.ACCOUNT_TYPE = 0;
        this.user.attributes.ACCOUNT_ID = 0;
        this.loginService.doLogin(this.user)
            .subscribe(function (responseData) {
            _this.user = responseData;
            _this.userService.authUser(_this.user);
            if (_this.userService.isLoggedIn()) {
                _this.appComponent.showLogoutButton();
                if (_this.userService.isAdmin()) {
                    _this.router.navigate(['dashboard']);
                    //alert( "welcome dispatcher" );
                }
                else if (_this.userService.isGuard()) {
                    _this.router.navigate(['guard-app/reports-all']);
                    //alert( "welcome guard" );
                }
                else {
                    //alert( "unknown person" );
                    _this.userService.logout();
                }
            }
            else {
                alert("Invalid login credentials!");
                console.log("Invalid login credentials!");
            }
        });
    };
    LoginComponent.prototype.checkLogin = function () {
        if (this.userService.isLoggedIn()) {
            alert("You are already logged in!");
            if (this.userService.isAdmin()) {
                this.router.navigate(['dashboard']);
            }
            else if (this.userService.isGuard()) {
                this.router.navigate(['guard']);
            }
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/component/login/login.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/login/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export UserAttributes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");

var User = (function () {
    function User() {
        this.attributes = new UserAttributes();
        this.table = __WEBPACK_IMPORTED_MODULE_0__util_config_service__["a" /* Config */].AccountTable;
    }
    return User;
}());

var UserAttributes = (function () {
    function UserAttributes() {
    }
    return UserAttributes;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/component/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"panel-body\">\r\n\r\n  <h4>Search</h4>\r\n\r\n  <input type=\"text\" id=\"personInputFirst\" (keyup)=\"findPerson('first')\" placeholder=\"First Name\">\r\n  <input type=\"text\" id=\"personInputLast\" (keyup)=\"findPerson('last')\" placeholder=\"Last Name\">\r\n  <input type=\"text\" id=\"personInputPhone\" (keyup)=\"findPerson('number')\" placeholder=\"Phone Number\">\r\n\r\n  <br><br>\r\n  <div class=\"panel panel-default test-panel\" style=\"overflow-y:scroll; height:200px; width: 500px;\">\r\n    <ul id=\"peopleDisplay\">\r\n      <li *ngFor=\"let person of personList\">\r\n          {{person.FIRST_NAME}},\r\n          {{person.LAST_NAME}},\r\n          {{person.PHONE_NUMBER}}   \r\n          <button class=\" glyphicon glyphicon-plus\" (click)=\"selectPerson();\"></button> \r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <h4>Add a Person</h4>\r\n  \r\n  <span class=\"field-title\">First Name</span>\r\n  <input type=\"text\" [(ngModel)]=\"newPerson.FIRST_NAME\" /> <br>\r\n  <span class=\"field-title\">Last Name</span>\r\n  <input type=\"text\" [(ngModel)]=\"newPerson.LAST_NAME\" /> <br>\r\n  <span class=\"field-title\">Phone Number</span>\r\n  <input type=\"text\" [(ngModel)]=\"newPerson.PHONE_NUMBER\" /> <br>\r\n  <button class=\"btn btn-primary\" (click)=\"addPerson();\">\r\n      Submit\r\n  </button>\r\n\r\n\r\n</div> -->\r\n\r\n<div class=\"details-body\">\r\n    <div class=\"x-container\">\r\n        <span class=\"glyphicon glyphicon-remove glyphicon-btn\"  (click)=\"removePersonFromReport()\"></span>        \r\n    </div>\r\n    <div class=\"detail col-12 col-sm-3\">\r\n        <span class=\"field-title\">First Name <span class=\"required-asterisk\">*</span></span>\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPerson.attributes.FIRST_NAME\" />\r\n    </div>\r\n    <div class=\"detail col-12 col-sm-3\">\r\n        <span class=\"field-title\">Last Name <span class=\"required-asterisk\">*</span></span>\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPerson.attributes.LAST_NAME\" />\r\n    </div>\r\n    <div class=\"detail col-12 col-sm-3\">\r\n        <span class=\"field-title\">Phone Number <span class=\"required-asterisk\">*</span></span>\r\n        <div class=\"phone-input\">\r\n            <input type=\"text\" maxlength=\"3\" class=\"form-control phone-3\" [(ngModel)]=\"phoneNumber1\" (change)=\"onChangePhoneNumber()\"\r\n                onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \r\n                || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/> \r\n             <span>-</span>  \r\n             <input type=\"text\" maxlength=\"3\" class=\"form-control phone-3\" [(ngModel)]=\"phoneNumber2\" (change)=\"onChangePhoneNumber()\"\r\n                onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \r\n                || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/>  \r\n             <span>-</span>  \r\n             <input type=\"text\" maxlength=\"4\" class=\"form-control phone-4\" [(ngModel)]=\"phoneNumber3\" (change)=\"onChangePhoneNumber()\"\r\n                onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \r\n                || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/>            \r\n        </div>\r\n    </div> \r\n</div> \r\n"

/***/ }),

/***/ "../../../../../src/app/component/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_person__ = __webpack_require__("../../../../../src/app/component/person/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_person_service__ = __webpack_require__("../../../../../src/app/service/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonComponent = (function () {
    function PersonComponent(personService, reportService) {
        this.personService = personService;
        this.reportService = reportService;
        this.newPerson = new __WEBPACK_IMPORTED_MODULE_1__person_person__["a" /* Person */]();
        this.phoneNumber1 = "";
        this.phoneNumber2 = "";
        this.phoneNumber3 = "";
    }
    ;
    PersonComponent.prototype.addPersonToReport = function () {
        this.reportService.addIncidentElement(this.newPerson);
    };
    PersonComponent.prototype.removePersonFromReport = function () {
        if (this.reference == null) {
            console.log("must have a person involved!");
            return;
        }
        if (this.newPerson != null)
            this.reportService.removeIncidentElement(this.newPerson, __WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].PersonTable);
        this.reference.destroy();
    };
    PersonComponent.prototype.onChangePhoneNumber = function () {
        this.newPerson.attributes.PHONE_NUMBER = this.phoneNumber1 + this.phoneNumber2 + this.phoneNumber3;
    };
    PersonComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService.getPersons().then(function (returnedPersons) {
            _this.personList = returnedPersons;
        });
    };
    PersonComponent.prototype.addPerson = function () {
        var _this = this;
        this.personService.create(this.newPerson)
            .then(function (returnedPerson) {
            if (returnedPerson != null) {
                _this.personList.push(returnedPerson);
                alert("Person successfully added!");
            }
            else
                alert("Add failed.");
        });
        delete this.newPerson;
        this.newPerson = new __WEBPACK_IMPORTED_MODULE_1__person_person__["a" /* Person */]();
    };
    PersonComponent.prototype.findPerson = function (type) {
        this.personService.searchList(type, this.personList);
    };
    PersonComponent.prototype.updatePerson = function (person) {
        var _this = this;
        this.personService.update(person)
            .then(function (returnedPerson) {
            if (returnedPerson != null) {
                var i = _this.personList.findIndex(function (person) { return person.attributes.PERSON_ID === returnedPerson.attributes.PERSON_ID; });
                // remove 1 object at index i, replace it with returnedPerson
                _this.personList.splice(i, 1, returnedPerson);
                alert(" successfully edited!");
            }
            else
                alert("Edit failed.");
        });
    };
    PersonComponent.prototype.deletePerson = function (id) {
        var _this = this;
        this.personService.delete(id).then(function (isDeleted) {
            var msg = isDeleted ? "Person successfully deleted!" : "Delete failed";
            alert(msg);
            var i = _this.personList.findIndex(function (person) { return person.attributes.PERSON_ID === id; });
            // remove 1 object at index i
            _this.personList.splice(i, 1);
        });
    };
    PersonComponent.prototype.ngOnInit = function () {
        this.getPersons();
        this.addPersonToReport();
    };
    return PersonComponent;
}());
PersonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'person-component',
        template: __webpack_require__("../../../../../src/app/component/person/person.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_person_service__["a" /* PersonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_person_service__["a" /* PersonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_new_report_service__["a" /* NewReportService */]) === "function" && _b || Object])
], PersonComponent);

var _a, _b;
//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/person/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
/* unused harmony export PersonAttributes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");

var Person = (function () {
    function Person() {
        this.attributes = new PersonAttributes();
        this.table = __WEBPACK_IMPORTED_MODULE_0__util_config_service__["a" /* Config */].PersonTable;
    }
    return Person;
}());

var PersonAttributes = (function () {
    function PersonAttributes() {
    }
    return PersonAttributes;
}());

//# sourceMappingURL=person.js.map

/***/ }),

/***/ "../../../../../src/app/component/report/incident.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_staff_service__ = __webpack_require__("../../../../../src/app/service/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncidentComponent = (function () {
    function IncidentComponent(incidentService, staffService) {
        var _this = this;
        this.incidentService = incidentService;
        this.staffService = staffService;
        this.staffArr = [];
        this.selectedStaffId = -1;
        this.incidentToAssign = new __WEBPACK_IMPORTED_MODULE_3__incident__["a" /* Incident */]();
        this.lastRemovedId = 0;
        this.staffService.getStaffs().then(function (returnedArr) {
            _this.staffArr = returnedArr;
        });
        this.incidentService.lastRemovedId
            .subscribe(function (value) { return _this.removeFromWorkspace(value); });
    }
    ;
    IncidentComponent.prototype.getIncidents = function () {
        var _this = this;
        this.incidentService.getIncidents().then(function (returnedIncidents) {
            _this.incidents = returnedIncidents;
        });
    };
    IncidentComponent.prototype.getStaffList = function () {
        var _this = this;
        this.staffService.getStaffs().then(function (ret) { _this.staffArr = ret; });
    };
    IncidentComponent.prototype.addToWorkspace = function (incident) {
        incident.inWorkspace = true;
        console.log("adding to workspace...");
        console.log(incident);
        this.incidentService.addToWorkspace(incident);
    };
    IncidentComponent.prototype.removeFromWorkspace = function (id) {
        if (this.incidents == null || this.incidents.length == 0)
            return;
        console.log(" removing " + id);
        var index = this.incidents.findIndex(function (i) { return i.attributes.REPORT_ID == id; });
        console.log("index: " + index);
        this.incidents[index].inWorkspace = false;
    };
    IncidentComponent.prototype.setIncidentToAssign = function (id) {
        console.log(id);
        if (id == null)
            return;
        var index = this.incidents.findIndex(function (x) { return x.attributes.REPORT_ID == id; });
        if (index >= 0) {
            this.incidentToAssign = this.incidents[index];
        }
    };
    IncidentComponent.prototype.onSelectStaff = function () {
        var _this = this;
        var index = this.staffArr.findIndex(function (x) { return x.attributes.ACCOUNT_ID == _this.incidentToAssign.attributes.ACCOUNT_ID; });
        if (index >= 0)
            this.selectedStaffId = this.staffArr[index].attributes.ACCOUNT_ID;
    };
    IncidentComponent.prototype.deleteIncident = function (id) {
        var _this = this;
        this.incidentService.delete(id).then(function (isDeleted) {
            var msg = isDeleted ? "Incident successfully deleted!" : "Delete failed";
            alert(msg);
            var i = _this.incidents.findIndex(function (loc) { return loc.attributes.REPORT_ID === id; });
            // remove 1 object at index i
            _this.incidents.splice(i, 1);
        });
    };
    IncidentComponent.prototype.assignToGuard = function () {
        var _this = this;
        var index = this.staffArr.findIndex(function (x) { return x.attributes.ACCOUNT_ID == _this.selectedStaffId; });
        var existingStaffIndex = this.incidentToAssign.incidentElements[__WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].StaffKey]
            .findIndex(function (e) { return e.table === __WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].StaffTable; });
        var staff = null;
        if (index >= 0) {
            staff = this.staffArr[index];
        }
        if (existingStaffIndex >= 0) {
            if (staff == null) {
                this.incidentToAssign.incidentElements[__WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].StaffKey].splice(existingStaffIndex, 1);
            }
            else {
                this.incidentToAssign.incidentElements[__WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].StaffKey].splice(existingStaffIndex, 1, staff);
            }
        }
        else {
            if (staff != null) {
                this.incidentToAssign.incidentElements[__WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].StaffKey].push(staff);
            }
        }
        this.incidentToAssign.guard = staff;
        this.incidentService.update(this.incidentToAssign).then(function (returnValue) {
            if (returnValue != null) {
                var incidentIndex = _this.incidents.findIndex(function (i) { return i.attributes.REPORT_ID === returnValue.attributes.REPORT_ID; });
                _this.incidents.splice(incidentIndex, 1, returnValue);
                console.log(returnValue);
                alert("Successful update");
            }
            else {
                alert("Unsuccessful update");
            }
        });
        this.incidentToAssign = new __WEBPACK_IMPORTED_MODULE_3__incident__["a" /* Incident */]();
        this.selectedStaffId = -1;
    };
    IncidentComponent.prototype.ngOnInit = function () {
        this.getIncidents();
        this.getStaffList();
    };
    return IncidentComponent;
}());
IncidentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'incidents-component',
        template: __webpack_require__("../../../../../src/app/component/report/incidents.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/incidents.component.css"), __webpack_require__("../../../../../src/assets/css/panels.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_staff_service__["a" /* StaffService */]) === "function" && _b || Object])
], IncidentComponent);

var _a, _b;
//# sourceMappingURL=incident.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/report/incident.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Incident; });
/* unused harmony export IncidentAttributes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__staff_staff__ = __webpack_require__("../../../../../src/app/component/staff/staff.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_category__ = __webpack_require__("../../../../../src/app/component/category/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");



var Incident = (function () {
    function Incident() {
        this.incidentElements = new Map;
        this.attributes = new IncidentAttributes();
        this.category = new __WEBPACK_IMPORTED_MODULE_1__category_category__["a" /* Category */](null, null, null, null);
        this.inWorkspace = false;
        this.guard = new __WEBPACK_IMPORTED_MODULE_0__staff_staff__["a" /* Staff */]();
    }
    Incident.prototype.insertIncidentElement = function (element) {
        var key = "";
        var table = element.table;
        if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].CategoryTable)
            key = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].IncidentCategoryKey;
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationTable)
            key = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationKey;
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].StaffTable)
            key = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].StaffKey;
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonTable)
            key = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonKey;
        else {
            console.log("Table not found.");
            key = table;
        }
        if (this.incidentElements[key] == null) {
            this.incidentElements[key] = new Array;
        }
        this.incidentElements[key].push(element);
    };
    return Incident;
}());

var IncidentAttributes = (function () {
    function IncidentAttributes() {
    }
    return IncidentAttributes;
}());

//# sourceMappingURL=incident.js.map

/***/ }),

/***/ "../../../../../src/app/component/report/incidents.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"incidents-list-panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <div class=\"toolbar\">\n            <div class=\"flex\">\n                <span class=\"glyphicon glyphicon-list-alt glyphicon-heading\"></span>\n                <span class=\"panel-header\">Reports</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div id=\"incidents-list\" class=\"col-md-12 col-lg-12\">\n            <div class=\"incident-card\" *ngFor=\"let incident of incidents\">\n                <div class=\"main-content\">\n                    <div class=\"detail-row\">\n                        <span class=\"card-text-secondary\">Report #{{incident.attributes.REPORT_ID}}</span>\n                    </div>\n                    <div class=\"detail-row description\">\n                        <span class=\"card-text-primary\">\n                            {{incident.attributes.DESCRIPTION}}\n                        </span>\n                    </div>\n                    <div class=\"detail-row\">\n                        <span class=\"card-text-secondary\">\n                            Category: {{incident.category.MAIN_CATEGORY}} - {{incident.category.SUB_CATEGORY}} {{incident.category.INCIDENT_TYPE}}\n                        </span>\n                    </div>\n                    <div class=\"detail-row\" *ngIf=\"incident.guard != null\">\n                        <span class=\"card-text-secondary\">\n                            Assigned To: {{incident.guard.attributes.FIRST_NAME}} {{incident.guard.attributes.LAST_NAME}}\n                        </span>\n                    </div>\n                    <div class=\"detail-row tertiary\">\n                        <span class=\"card-text-tertiary\">\n                            Burnaby AQ 3150\n                        </span>\n                        <span class=\"card-text-tertiary\">08/15/2017 4:44</span>\n                    </div>\n                </div>\n                <div class=\"bottom\">\n                    <div class=\"action\">\n                        <span class=\"glyphicon glyphicon-new-window glyphicon-btn\" data-toggle=\"tooltip\" title=\"Add to Workspace\"\n                                 [ngClass]=\"{'transparent': incident.inWorkspace}\" (click)=\"incident.inWorkspace || addToWorkspace(incident)\"></span>\n                        <span class=\"glyphicon glyphicon-tag glyphicon-btn\" (click)=\"setIncidentToAssign(incident.attributes.REPORT_ID)\" data-toggle=\"modal\" data-target=\"#assignModal\"></span>                        \n                                 \n                    </div>\n                                                                \n                </div>\n                \n            </div>\n        </div>\n    </div>\n    <div class=\"panel-footer\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"Search for reports...\">            \n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"assignModal\" class=\"modal fade\" role=\"dialog\" *ngIf=\"incidentToAssign.attributes.REPORT_ID != null\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <span class=\"glyphicon glyphicon-tag glyphicon-heading\"></span>\n                <span class=\"panel-header\">Assign To Guard - Report #{{incidentToAssign.attributes.REPORT_ID}}</span>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"details-container\">\n                    <div class=\"details-body\">\n                        <div class=\"detail col-12 col-sm-3\">\n                            <select class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"incidentToAssign.attributes.ACCOUNT_ID\" (change)=\"onSelectStaff()\">\n                                <option *ngFor=\"let staff of staffArr\" [value]=\"staff.attributes.ACCOUNT_ID\">{{staff.attributes.FIRST_NAME}} {{staff.attributes.LAST_NAME}}</option>\n                            </select>\n                        </div>\n                    </div> \n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary\" (click)=\"assignToStaff()\" data-dismiss=\"modal\">Assign</button>   \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/report/new-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-sm-10 col-sm-offset-1 col-sm-offset-right-1\r\n                    col-lg-6 col-lg-offset-3 col-lg-offset-right-3\">\r\n            <div id=\"new-report-panel\" class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <div>\r\n                        <span class=\"glyphicon glyphicon-dashboard glyphicon-heading\"></span>\r\n                        <span class=\"panel-header\">New Report</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n\r\n                    <div class=\"details-container\">\r\n                        <div class=\"details-heading\">\r\n                            <span class=\"glyphicon glyphicon-info-sign glyphicon-heading\"></span>\r\n                            <span class=\"field-title\">Basic Information</span>\r\n                        </div>\r\n                        <div class=\"details-body\">\r\n                            <div class=\"detail col-12 col-sm-3\">\r\n                                <span class=\"field-title\">Category <span class=\"required-asterisk\">*</span></span>\r\n                                <select name=\"\" id=\"\" class=\"form-control\" [(ngModel)]=\"newIncident.category.attributes.MAIN_CATEGORY\" (change)=\"onSelectCategory()\">\r\n                                    <option *ngFor=\"let category of categories\" [value]=\"category.MAIN_CATEGORY\">{{category.MAIN_CATEGORY}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"detail col-12 col-sm-3\">\r\n                                <span class=\"field-title\">Sub Category <span class=\"required-asterisk\">*</span></span>\r\n                                <select class=\"form-control\" [(ngModel)]=\"newIncident.category.attributes.SUB_CATEGORY\" (change)=\"onSelectSubCategory()\">\r\n                                    <option *ngFor=\"let subCategory of subCategories\" [value]=\"subCategory.SUB_CATEGORY\">{{subCategory.SUB_CATEGORY}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"detail col-12 col-sm-3\"  *ngIf=\"categoryTypes.length > 0\">\r\n                                <span class=\"field-title\">Type <span class=\"required-asterisk\">*</span></span>\r\n                                <select class=\"form-control\" [(ngModel)]=\"newIncident.category.attributes.INCIDENT_TYPE\" (change)=\"onSelectType()\">\r\n                                    <option *ngFor=\"let type of categoryTypes\" [value]=\"type.INCIDENT_TYPE\">{{type.INCIDENT_TYPE}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"detail col-12 col-sm-10\">\r\n                                <span class=\"field-title\">Description <span class=\"required-asterisk\">*</span></span>\r\n                                <textarea class=\"form-control\" cols=\"50\" rows=\"1\" [(ngModel)]=\"newIncident.attributes.DESCRIPTION\"></textarea>\r\n                            </div>\r\n                            <div class=\"detail col-12 col-sm-10\">\r\n                                <span class=\"field-title\">Executive Summary <span class=\"required-asterisk\">*</span></span>\r\n                                <textarea class=\"form-control\" cols=\"50\" rows=\"8\" [(ngModel)]=\"newIncident.attributes.EXECUTIVE_SUMMARY\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"details-container\">\r\n                        <div class=\"details-heading\">\r\n                            <span class=\"glyphicon glyphicon-map-marker glyphicon-heading\"></span>\r\n                            <span class=\"field-title\">Location</span>\r\n                        </div>\r\n                        <div id=\"locations\">\r\n                            <location-component></location-component>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3 col-sm-offset-8 col-sm-offset-right-1\r\n                                    col-lg-3 col-lg-offset-9\">\r\n                            <button class=\"btn btn-default\" (click)=\"addComponent(locationStr)\">\r\n                                <span class=\"glyphicon glyphicon-plus\"></span> Add Location</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"details-container\">\r\n                        <div class=\"details-heading\">\r\n                            <span class=\"glyphicon glyphicon-user glyphicon-heading\"></span>\r\n                            <span class=\"field-title\">Involved Persons</span>\r\n                        </div>\r\n                        <div id=\"persons\">\r\n                            <person-component></person-component>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3 col-sm-offset-8 col-sm-offset-right-1\r\n                                    col-lg-3 col-lg-offset-9\">\r\n                            <button class=\"btn btn-default\" (click)=\"addComponent(personStr)\">\r\n                                <span class=\"glyphicon glyphicon-plus\"></span> Add Person</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"details-container\">\r\n                        <div class=\"details-heading\">\r\n                            <span class=\"glyphicon glyphicon-cloud-upload glyphicon-heading\"></span>\r\n                            <span class=\"field-title\">Attachments</span>\r\n                        </div>\r\n                        <div>\r\n                            <attachment-component #files [multiple]=\"true\"></attachment-component>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"details-container\">\r\n                        <div class=\"details-heading\">\r\n                            <span class=\"glyphicon glyphicon-tag glyphicon-heading\"></span>\r\n                            <span class=\"field-title\">Assign Guard</span>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"details-body\">\r\n                                <div class=\"detail col-12 col-sm-3\">\r\n                                    <select class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"selectedStaffId\" (change)=\"onSelectStaff()\">\r\n                                        <option value=\"-1\"> </option>\r\n                                        <option *ngFor=\"let staff of staffList\" [value]=\"staff.attributes.ACCOUNT_ID\">{{staff.attributes.FIRST_NAME}} {{staff.attributes.LAST_NAME}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                \r\n                <div class=\"panel-footer\">\r\n                    <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#confirmationModal\" (click)=\"prepareReport()\">Proceed to Review</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div id=\"confirmationModal\" class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <span class=\"glyphicon glyphicon-dashboard glyphicon-heading\"></span>\r\n                <span class=\"panel-header\">Review New Report</span>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <!-- <report-summary [inputReport]=\"newIncident\"></report-summary> -->\r\n                <div class=\"details-container\">\r\n                    <div class=\"details-heading\">\r\n                        <span class=\"glyphicon glyphicon-info-sign glyphicon-heading\"></span>\r\n                        <span class=\"field-title\">Basic Information</span>\r\n                    </div>\r\n                    <div class=\"details-body\">\r\n                        <div class=\"detail col-12 col-sm-3\">\r\n                            <span class=\"field-title\">Category: </span>\r\n                            <span class=\"field-value\">{{newIncident.category.attributes.MAIN_CATEGORY}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"newIncident.category.attributes.MAIN_CATEGORY == null\">\r\n                                Please select a category\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"detail col-12 col-sm-3\">\r\n                            <span class=\"field-title\">Sub Category: </span>\r\n                            <span class=\"field-value\">{{newIncident.category.attributes.SUB_CATEGORY}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"newIncident.category.attributes.SUB_CATEGORY == null\">\r\n                                    Please select a sub category\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"detail col-12 col-sm-3\" *ngIf=\"this.newIncident.category.attributes.INCIDENT_TYPE != null \">\r\n                            <span class=\"field-title\">Type: </span>\r\n                            <span class=\"field-value\">{{newIncident.category.attributes.INCIDENT_TYPE}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"newIncident.category.attributes.INCIDENT_TYPE == null\">\r\n                                    Please select an incident type\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"detail col-12 col-sm-10\">\r\n                            <span class=\"field-title\">Description</span>\r\n                            <span class=\"field-value\">{{newIncident.attributes.DESCRIPTION}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"newIncident.attributes.DESCRIPTION == null\">\r\n                                    Please enter a description\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"detail col-12 col-sm-10\">\r\n                            <span class=\"field-title\">Executive Summary</span>\r\n                            <span class=\"field-value\">{{newIncident.attributes.EXECUTIVE_SUMMARY}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"newIncident.attributes.EXECUTIVE_SUMMARY == null\">\r\n                                    Please enter a summary\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"details-container\">\r\n                    <div class=\"details-heading\">\r\n                        <span class=\"glyphicon glyphicon-map-marker glyphicon-heading\"></span>\r\n                        <span class=\"field-title\">Location</span>\r\n                    </div>\r\n                    <div class=\"details-body\" *ngFor=\"let location of newIncident.incidentElements['Location']\">\r\n                        <div class=\"detail col-12 col-sm-3\">\r\n                            <span class=\"field-title\">Campus: </span>\r\n                            <span class=\"field-value\">{{location.attributes.CAMPUS_ID}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"location.attributes.CAMPUS_ID == null\">\r\n                                    Please select a campus\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"detail col-12 col-sm-3\">\r\n                            <span class=\"field-title\">Building: </span>\r\n                            <span class=\"field-value\">{{location.attributes.BUILDING_NAME}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"location.attributes.BUILDING_NAME == null\">\r\n                                    Please select a building\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"detail col-12 col-sm-3\">\r\n                            <span class=\"field-title\">Room Number: </span>\r\n                            <span class=\"field-value\">{{location.attributes.ROOM_NUMBER}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"location.attributes.ROOM_NUMBER == null\">\r\n                                    Please select a room number\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"details-container\">\r\n                    <div class=\"details-heading\">\r\n                        <span class=\"glyphicon glyphicon-user glyphicon-heading\"></span>\r\n                        <span class=\"field-title\">Involved Persons</span>\r\n                    </div>\r\n                    <div class=\"details-body\" *ngFor=\"let person of newIncident.incidentElements['Person']\">\r\n                        <div class=\"detail col-12 col-sm-3\">\r\n                            <span class=\"field-title\">First Name: </span>\r\n                            <span class=\"field-value\">{{person.attributes.FIRST_NAME}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"person.attributes.FIRST_NAME == null\">\r\n                                    Please enter a first name\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"detail col-12 col-sm-3\">\r\n                            <span class=\"field-title\">Last Name: </span>\r\n                            <span class=\"field-value\">{{person.attributes.LAST_NAME}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"person.attributes.LAST_NAME == null\">\r\n                                    Please enter a last name\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"detail col-12 col-sm-3\">\r\n                            <span class=\"field-title\">Phone Number: </span>\r\n                            <span class=\"field-value\">{{person.attributes.PHONE_NUMBER}}</span>\r\n                            <div class=\"alertText\" *ngIf=\"person.attributes.PHONE_NUMBER == null || person.attributes.PHONE_NUMBER.length != 10\">\r\n                                    Please enter a valid phone number\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"details-container\">\r\n                    <div class=\"details-heading\">\r\n                        <span class=\"glyphicon glyphicon-tag glyphicon-heading\"></span>\r\n                        <span class=\"field-title\">Assigned Guard</span>\r\n                    </div>\r\n                    <div class=\"details-body\">\r\n                        <div class=\"detail col-12 col-sm-3\">\r\n                            <span class=\"field-title\">Name: </span>\r\n                            <span class=\"field-value\" *ngIf=\"selectedStaff != null\">{{selectedStaff.attributes.FIRST_NAME}} {{selectedStaff.attributes.LAST_NAME}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"cancelReview()\">Cancel</button>\r\n                <button class=\"btn btn-primary\" (click)=\"createReport(); files.upload();\" *ngIf=\"reportReady\">Create Report</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/report/new-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_dom_service__ = __webpack_require__("../../../../../src/app/util/dom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_staff_service__ = __webpack_require__("../../../../../src/app/service/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_location_component__ = __webpack_require__("../../../../../src/app/component/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__person_person_component__ = __webpack_require__("../../../../../src/app/component/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NewReportComponent = (function () {
    function NewReportComponent(incidentService, domService, newReportService, categoryService, staffService) {
        var _this = this;
        this.incidentService = incidentService;
        this.domService = domService;
        this.newReportService = newReportService;
        this.categoryService = categoryService;
        this.staffService = staffService;
        this.locationStr = __WEBPACK_IMPORTED_MODULE_7__location_location_component__["a" /* LocationComponent */].name;
        this.personStr = __WEBPACK_IMPORTED_MODULE_8__person_person_component__["a" /* PersonComponent */].name;
        this.newIncident = new __WEBPACK_IMPORTED_MODULE_6__report_incident__["a" /* Incident */]();
        this.categories = [];
        this.subCategories = [];
        this.categoryTypes = [];
        this.staffList = [];
        this.selectedStaff = null;
        this.selectedStaffId = -1;
        this.reportReady = false;
        this.staffService.getStaffs().then(function (returnedStaffs) {
            _this.staffList = returnedStaffs.sort(function (a, b) {
                return a.attributes.FIRST_NAME < b.attributes.FIRST_NAME ? -1 : 1;
            });
        });
    }
    NewReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newReportService.currentLocations
            .subscribe(function (locations) {
            _this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_9__util_config_service__["a" /* Config */].LocationKey] = locations;
        });
        this.newReportService.currentPersons
            .subscribe(function (persons) {
            _this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_9__util_config_service__["a" /* Config */].PersonKey] = persons;
        });
        this.categoryService.getCategories().then(function (returnedCategories) {
            _this.categories = _this.categoryService.toCategoryDictionary(returnedCategories);
        });
    };
    //filter subcategory and type lists according to selection of previous dropdown
    NewReportComponent.prototype.onSelectCategory = function () {
        var _this = this;
        var index = this.categories.findIndex(function (item) { return item.MAIN_CATEGORY === _this.newIncident.category.attributes.MAIN_CATEGORY; });
        if (index < 0)
            return;
        this.subCategories = this.categories[index].SUBCATEGORIES;
        this.categoryTypes = [];
        this.newIncident.category.attributes.MAIN_CATEGORY = this.categories[index].MAIN_CATEGORY; // for report summary
    };
    NewReportComponent.prototype.onSelectSubCategory = function () {
        var _this = this;
        var index = this.subCategories.findIndex(function (item) { return item.SUB_CATEGORY == _this.newIncident.category.attributes.SUB_CATEGORY; });
        if (index < 0)
            return;
        var subcategories = this.subCategories[index];
        if (subcategories.TYPES.length == 0) {
            this.newIncident.category.attributes.CATEGORY_ID = subcategories.CATEGORY_ID;
            this.newIncident.attributes.CATEGORY_ID = this.newIncident.category.attributes.CATEGORY_ID;
            this.newIncident.category.attributes.INCIDENT_TYPE = null;
            this.newIncident.insertIncidentElement(this.newIncident.category);
        }
        this.categoryTypes = subcategories.TYPES;
    };
    NewReportComponent.prototype.onSelectType = function () {
        var _this = this;
        if (this.newIncident.category.attributes.INCIDENT_TYPE != null) {
            var index = this.categoryTypes.findIndex(function (item) { return item.INCIDENT_TYPE === _this.newIncident.category.attributes.INCIDENT_TYPE; });
            if (index >= 0) {
                var type = this.categoryTypes[index];
                this.newIncident.category.attributes.CATEGORY_ID = type.CATEGORY_ID;
                this.newIncident.category.attributes.INCIDENT_TYPE = type.INCIDENT_TYPE; // for report summary                
                this.newIncident.attributes.CATEGORY_ID = this.newIncident.category.attributes.CATEGORY_ID;
                this.newIncident.insertIncidentElement(this.newIncident.category);
            }
        }
    };
    NewReportComponent.prototype.onSelectStaff = function () {
        var _this = this;
        var index = this.staffList.findIndex(function (x) { return x.attributes.ACCOUNT_ID == _this.selectedStaffId; });
        if (index >= 0) {
            this.selectedStaff = this.staffList[index];
            this.newIncident.insertIncidentElement(this.selectedStaff);
        }
        else {
            this.selectedStaff = null;
            if (this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_9__util_config_service__["a" /* Config */].StaffKey] != null) {
                this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_9__util_config_service__["a" /* Config */].StaffKey].splice(0, this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_9__util_config_service__["a" /* Config */].StaffKey].length);
            }
        }
    };
    NewReportComponent.prototype.prepareReport = function () {
        console.log(this.newIncident);
        this.reportReady = this.isReportValid();
    };
    NewReportComponent.prototype.createReport = function () {
        if (this.reportReady) {
            this.newIncident.attributes.ACCOUNT_ID = this.staffList[0].attributes.ACCOUNT_ID; // TEMP
            this.incidentService.create(this.newIncident)
                .then(function (returnedIncident) {
                if (returnedIncident != null) {
                    alert("Report successfully created!");
                    setTimeout(function () { location.reload(); }, 300);
                }
                else
                    alert("Add failed.");
            });
            delete this.newIncident;
            this.newIncident = new __WEBPACK_IMPORTED_MODULE_6__report_incident__["a" /* Incident */]();
        }
        else {
            alert("Please fill in the required fields");
        }
    };
    // formatPhoneNumber( number: string ) {
    //     var str = "(";
    //     for (var i = 0 ; i < number.length ; i += 1) {
    //         str += number.charAt( i ) + "" ;
    //         if ( i == 2 )
    //             str += ")" + "" ;
    //         if ( i < 6 && (i+1) % 3 == 0 )
    //             str += " - " + "";
    //     }
    //     return str;
    // }
    NewReportComponent.prototype.addComponent = function (componentName) {
        //if ( this.dynamicTest == 'Vehicle' )
        //  this.domService.addComponent( VehicleComponent, "vehicles" );
        /*else*/ if (componentName === this.locationStr) {
            this.domService.addComponent(__WEBPACK_IMPORTED_MODULE_7__location_location_component__["a" /* LocationComponent */].name, "locations");
        }
        else if (componentName === this.personStr) {
            this.domService.addComponent(__WEBPACK_IMPORTED_MODULE_8__person_person_component__["a" /* PersonComponent */].name, "persons");
        }
    };
    NewReportComponent.prototype.isReportValid = function () {
        return this.newReportService.validateReport(this.newIncident);
    };
    return NewReportComponent;
}());
NewReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/component/report/new-report.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/new-report.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__util_dom_service__["a" /* DomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_dom_service__["a" /* DomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_new_report_service__["a" /* NewReportService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_category_service__["a" /* CategoryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__service_staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_staff_service__["a" /* StaffService */]) === "function" && _e || Object])
], NewReportComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/report/report-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"report\">\r\n\r\n    <div class=\"x-container\">\r\n        <span class=\"glyphicon glyphicon-remove glyphicon-btn\" (click)=\"removeFromWorkspace( report.attributes.REPORT_ID )\"></span>        \r\n    </div>\r\n    <div class=\"report-header\">\r\n        <span class=\"report-id\">Report ID: {{report.attributes.REPORT_ID}}</span>\r\n    </div>\r\n    <ul class=\"nav nav-tabs\">\r\n        <li class=\"active\">\r\n            <a data-toggle=\"tab\" [href]=\"'#basic-info-' + report.attributes.REPORT_ID\">\r\n                <span class=\"glyphicon glyphicon-info-sign\"></span>\r\n                Summary\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a data-toggle=\"tab\" [href]=\"'#locations-' + report.attributes.REPORT_ID\">\r\n                <span class=\"glyphicon glyphicon-map-marker\"></span>\r\n                Locations\r\n            </a>\r\n        </li>\r\n        <li><a data-toggle=\"tab\" [href]=\"'#persons-' + report.attributes.REPORT_ID\">\r\n                <span class=\"glyphicon glyphicon-user\"></span>\r\n                Involvements\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"tab-content\">\r\n        <div [id]=\"'basic-info-' + report.attributes.REPORT_ID\" class=\"details-container tab-pane fade in active\">\r\n            <div class=\"details-body\">\r\n                <div class=\"detail detail-lg col-12\">\r\n                    <span class=\"field-title\">Category: </span>\r\n                    <span class=\"field-value\" *ngIf=\"report.category != null\">{{report.category.attributes.MAIN_CATEGORY}}</span>\r\n                </div>\r\n                <div class=\"detail detail-lg col-12\">\r\n                    <span class=\"field-title\">Sub Category: </span>\r\n                    <span class=\"field-value\" *ngIf=\"report.category != null\">{{report.category.attributes.SUB_CATEGORY}}</span>\r\n                </div>\r\n                <div class=\"detail detail-lg col-12\">\r\n                    <span class=\"field-title\">Type: </span>\r\n                    <span class=\"field-value\" *ngIf=\"report.category != null\">{{report.category.attributes.INCIDENT_TYPE}}</span>\r\n                </div>\r\n                <div class=\"detail detail-lg col-12\">\r\n                    <span class=\"field-title\">Assigned To: </span>\r\n                    <span class=\"field-value\" *ngIf=\"report.guard != null\">{{report.guard.attributes.FIRST_NAME}} {{report.guard.attributes.LAST_NAME}}</span>\r\n                </div>\r\n                <div class=\"detail detail-lg col-12\">\r\n                    <span class=\"field-title\">Description: </span>\r\n                    <span class=\"field-value\">{{report.attributes.DESCRIPTION}}</span>\r\n                </div>\r\n                <div class=\"detail detail-lg col-12\">\r\n                    <span class=\"field-title\">Executive Summary: </span>\r\n                    <span class=\"field-value\">{{report.attributes.EXECUTIVE_SUMMARY}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div [id]=\"'locations-' + report.attributes.REPORT_ID\" class=\"details-container tab-pane fade\">\r\n            <div class=\"details-body\" *ngFor=\"let location of report.incidentElements['Location']\">\r\n                <div class=\"detail col-12 col-sm-3\">\r\n                    <span class=\"field-title\">Campus: </span>\r\n                    <span class=\"field-value\">{{location.attributes.CAMPUS_ID}}</span>\r\n                </div>\r\n                <div class=\"detail col-12 col-sm-3\">\r\n                    <span class=\"field-title\">Building: </span>\r\n                    <span class=\"field-value\">{{location.attributes.BUILDING_NAME}}</span>\r\n                </div>\r\n                <div class=\"detail col-12 col-sm-3\">\r\n                    <span class=\"field-title\">Room Number: </span>\r\n                    <span class=\"field-value\">{{location.attributes.ROOM_NUMBER}}</span>\r\n                </div>\r\n            </div>\r\n            <span class=\"not-found\" *ngIf=\"report.incidentElements['Location'].length == 0\"> No Locations available</span>\r\n        </div>\r\n            \r\n        <div [id]=\"'persons-' + report.attributes.REPORT_ID\" class=\"details-container tab-pane fade\">\r\n            <div class=\"details-body\" *ngFor=\"let person of report.incidentElements['Person']\">\r\n                <div class=\"detail col-12 col-sm-3\">\r\n                    <span class=\"field-title\">First Name: </span>\r\n                    <span class=\"field-value\">{{person.attributes.FIRST_NAME}}</span>\r\n                </div>\r\n                <div class=\"detail col-12 col-sm-3\">\r\n                    <span class=\"field-title\">Last Name: </span>\r\n                    <span class=\"field-value\">{{person.attributes.LAST_NAME}}</span>\r\n                </div>\r\n                <div class=\"detail col-12 col-sm-3\">\r\n                    <span class=\"field-title\">Phone Number: </span>\r\n                    <span class=\"field-value\">{{person.attributes.PHONE_NUMBER}}</span>\r\n                </div>\r\n            </div>\r\n            <span class=\"not-found\" *ngIf=\"report.incidentElements['Person'].length == 0\"> No Involvements available</span>\r\n        </div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/report/report-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportSummaryComponent = (function () {
    function ReportSummaryComponent(incidentService) {
        this.incidentService = incidentService;
        //this.report = new Incident();
        console.log(this.report);
    }
    ReportSummaryComponent.prototype.removeFromWorkspace = function (id) {
        this.incidentService.removeFromWorkspace(id);
    };
    ReportSummaryComponent.prototype.ngOnInit = function () {
        if (this.inputReport != null) {
            this.report = this.inputReport;
        }
        console.log(this.report);
        console.log("report category ", this.report.category);
    };
    return ReportSummaryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__report_incident__["a" /* Incident */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__report_incident__["a" /* Incident */]) === "function" && _a || Object)
], ReportSummaryComponent.prototype, "inputReport", void 0);
ReportSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'report-summary',
        template: __webpack_require__("../../../../../src/app/component/report/report-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/report-summary.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_incident_service__["a" /* IncidentService */]) === "function" && _b || Object])
], ReportSummaryComponent);

var _a, _b;
//# sourceMappingURL=report-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Search will be live soon...!</h1>\r\n\r\n<div>\r\n    <form>\r\n        <label>Search: </label>\r\n        <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\"/> \r\n        <span>[Advanced Filters]</span>\r\n        <br>\r\n        <br>\r\n    </form>\r\n\r\n    <div>\r\n        <div *ngFor=\"let incident of incidents | filter: searchText\">\r\n\r\n            <h4>[Report Summary]</h4>\r\n            <span> \r\n                <b>Report ID:</b> {{incident.attributes.REPORT_ID}},\r\n                <b>Author ID:</b> {{incident.attributes.ACCOUNT_ID}},\r\n                <b>Description:</b> {{incident.attributes.DESCRIPTION}}, \r\n                <b>Summary:</b> {{incident.attributes.EXECUTIVE_SUMMARY}},\r\n                <b>Closed:</b> {{incident.attributes.CLOSED}}\r\n                <br>\r\n            </span>\r\n\r\n            <h4>[Report Type]</h4>\r\n            \r\n            <h4>[Location Details]</h4>\r\n            <span *ngFor=\"let loc of incident.incidentElements['Location']\">\r\n                <b>Location ID:</b> {{loc.attributes.LOCATION_ID}},\r\n                <b>Campus ID:</b> {{loc.attributes.CAMPUS_ID}},\r\n                <b>Building Name:</b> {{loc.attributes.BUILDING_NAME}},\r\n                <b>Room Number:</b> {{loc.attributes.ROOM_NUMBER}},\r\n                <b>Department:</b> {{loc.attributes.DEPARTMENT}}\r\n                <br>\r\n            </span>\r\n\r\n            <h4>[Assigned Staff]</h4>\r\n            <span *ngFor=\"let staff of incident.incidentElements['Staff']\">\r\n                <b>Account ID:</b> {{staff.attributes.ACCOUNT_ID}},\r\n                <b>Campus ID:</b> {{staff.attributes.CAMPUS_ID}},\r\n                <b>First Name:</b> {{staff.attributes.FIRST_NAME}},\r\n                <b>Last Name:</b> {{staff.attributes.LAST_NAME}}\r\n                <br>\r\n            </span>\r\n\r\n            <br>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(incidentService) {
        this.incidentService = incidentService;
    }
    ;
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.incidentService.getIncidents().then(function (returnedIncidents) {
            _this.incidents = returnedIncidents;
            _this.reconstructElements();
            console.log(_this.incidents);
        });
    };
    /* TEMP CODE */
    SearchComponent.prototype.reconstructElements = function () {
        var _this = this;
        this.incidents.forEach(function (incident) {
            _this.toSearchStrings(incident);
        });
    };
    SearchComponent.prototype.toSearchStrings = function (incident) {
        var _this = this;
        incident.incidentElements[__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationKey].forEach(function (loc) {
            _this.setLocationSearchString(loc);
        });
        incident.incidentElements[__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].StaffKey].forEach(function (staff) {
            _this.setStaffSearchString(staff);
        });
        this.setSearchString(incident);
    };
    SearchComponent.prototype.setSearchString = function (incident) {
        incident.searchString =
            incident.attributes.REPORT_ID
                + " " + incident.attributes.DESCRIPTION
                + " " + incident.attributes.EXECUTIVE_SUMMARY
                + " " + incident.attributes.CLOSED;
    };
    ;
    SearchComponent.prototype.setStaffSearchString = function (staff) {
        staff.searchString =
            +" " + staff.attributes.FIRST_NAME
                + " " + staff.attributes.LAST_NAME;
    };
    ;
    SearchComponent.prototype.setLocationSearchString = function (loc) {
        loc.searchString =
            +" " + loc.attributes.BUILDING_NAME
                + " " + loc.attributes.ROOM_NUMBER
                + " " + loc.attributes.DEPARTMENT;
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/component/search/search.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/staff/staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"staff-list-panel\" class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"flex\">\r\n                <span class=\"glyphicon glyphicon-user glyphicon-heading\"></span>\r\n                <span class=\"panel-header\">Staff</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div id=\"staff-list\" class=\"col-md-12 col-lg-12\">\r\n            <div class=\"row\">\r\n                <div *ngFor=\"let staff of staffList\">\r\n                    <div class=\"staff-card\" *ngIf=\"staff.attributes.LAST_NAME.length > 0\">\r\n                        <div class=\"status-indicator-container\">\r\n                            <div class=\"status-indicator\"></div>\r\n                        </div>\r\n                        <div class=\"name-plate\">\r\n                            <span class=\"card-text-primary\">{{staff.attributes.LAST_NAME}}, {{staff.attributes.FIRST_NAME}}</span>\r\n                            <span class=\"card-text-secondary\">Surrey</span>\r\n                        </div>\r\n                        <div class=\"actions\">\r\n                            <span class=\"glyphicon glyphicon-tag\"></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Search for staff...\">\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/staff/staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staff__ = __webpack_require__("../../../../../src/app/component/staff/staff.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_staff_service__ = __webpack_require__("../../../../../src/app/service/staff.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffComponent = (function () {
    function StaffComponent(staffService) {
        this.staffService = staffService;
        this.newStaff = new __WEBPACK_IMPORTED_MODULE_1__staff__["a" /* Staff */]();
    }
    ;
    StaffComponent.prototype.getStaffs = function () {
        var _this = this;
        this.staffService.getStaffs().then(function (returnedStaffs) {
            _this.staffList = returnedStaffs;
        });
    };
    StaffComponent.prototype.updateStaff = function (staff) {
        var _this = this;
        this.staffService.update(staff)
            .then(function (returnedStaff) {
            if (returnedStaff != null) {
                var i = _this.staffList.findIndex(function (staff) { return staff.attributes.ACCOUNT_ID === returnedStaff.attributes.ACCOUNT_ID; });
                // remove 1 object at index i, replace it with returnedStaff
                _this.staffList.splice(i, 1, returnedStaff);
                alert(" successfully edited!");
            }
            else
                alert("Edit failed.");
        });
    };
    StaffComponent.prototype.deleteStaff = function (id) {
        var _this = this;
        this.staffService.delete(id).then(function (isDeleted) {
            var msg = isDeleted ? "Staff successfully deleted!" : "Delete failed";
            alert(msg);
            var i = _this.staffList.findIndex(function (staff) { return staff.attributes.ACCOUNT_ID === id; });
            // remove 1 object at index i
            _this.staffList.splice(i, 1);
        });
    };
    StaffComponent.prototype.ngOnInit = function () {
        this.getStaffs();
    };
    return StaffComponent;
}());
StaffComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'staff-component',
        template: __webpack_require__("../../../../../src/app/component/staff/staff.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/staff.component.css"), __webpack_require__("../../../../../src/assets/css/panels.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_staff_service__["a" /* StaffService */]) === "function" && _a || Object])
], StaffComponent);

var _a;
//# sourceMappingURL=staff.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/staff/staff.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Staff; });
/* unused harmony export StaffAttributes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");

var Staff = (function () {
    function Staff() {
        this.attributes = new StaffAttributes();
        this.table = __WEBPACK_IMPORTED_MODULE_0__util_config_service__["a" /* Config */].StaffTable;
    }
    return Staff;
}());

var StaffAttributes = (function () {
    function StaffAttributes() {
    }
    return StaffAttributes;
}());

//# sourceMappingURL=staff.js.map

/***/ }),

/***/ "../../../../../src/app/component/vehicle/vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> This is a Vehicle Component </h1>\r\n\r\n<button (click)=\"removeComp()\"> Destroy Me </button>"

/***/ }),

/***/ "../../../../../src/app/component/vehicle/vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehicleComponent = (function () {
    function VehicleComponent() {
    }
    VehicleComponent.prototype.removeComp = function () {
        this.reference.destroy();
    };
    return VehicleComponent;
}());
VehicleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'vehicle-component',
        template: __webpack_require__("../../../../../src/app/component/vehicle/vehicle.component.html")
    }),
    __metadata("design:paramtypes", [])
], VehicleComponent);

//# sourceMappingURL=vehicle.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_category_category__ = __webpack_require__("../../../../../src/app/component/category/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryService = (function () {
    function CategoryService(http, incidentService) {
        this.http = http;
        this.incidentService = incidentService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.categoriesUrl = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].CategoriesURI;
    }
    CategoryService.prototype.getCategories = function () {
        var categories = this.http.get(this.categoriesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(categories);
    };
    ;
    CategoryService.prototype.toCategoryDictionary = function (categories) {
        var _this = this;
        // Assuming categories is unsorted by Main Category
        // Some SubCategories do not have Types
        var categoryMap;
        categoryMap = [];
        if (categories == null)
            return categoryMap;
        var currentMap = new __WEBPACK_IMPORTED_MODULE_1__component_category_category__["b" /* CategoryDictionary */]();
        currentMap.MAIN_CATEGORY = "";
        var mainCategories = [];
        categories.forEach(function (category) {
            if (mainCategories.indexOf(category.attributes.MAIN_CATEGORY) < 0) {
                mainCategories.push(category.attributes.MAIN_CATEGORY);
                categoryMap.push(_this.getMainCategory(category.attributes.MAIN_CATEGORY, categories));
            }
        });
        return categoryMap;
    };
    CategoryService.prototype.getMainCategory = function (mainCategory, categories) {
        var _this = this;
        var grouping = new __WEBPACK_IMPORTED_MODULE_1__component_category_category__["b" /* CategoryDictionary */]();
        if (categories == null || categories.length == 0)
            return grouping;
        grouping.MAIN_CATEGORY = mainCategory;
        var subCategories = [];
        categories.forEach(function (category) {
            if (category.attributes.MAIN_CATEGORY == grouping.MAIN_CATEGORY) {
                var subCategory = category.attributes.SUB_CATEGORY;
                if (subCategories.indexOf(subCategory) < 0) {
                    subCategories.push(subCategory);
                    grouping.SUBCATEGORIES.push(_this.getSubCategory(grouping.MAIN_CATEGORY, subCategory, categories));
                }
            }
        });
        return grouping;
    };
    CategoryService.prototype.getSubCategory = function (mainCategory, subCategory, categories) {
        var grouping = new __WEBPACK_IMPORTED_MODULE_1__component_category_category__["d" /* SubCategory */]();
        grouping.SUB_CATEGORY = subCategory;
        var types = [];
        categories.forEach(function (cat) {
            if (cat.attributes.MAIN_CATEGORY === mainCategory && cat.attributes.SUB_CATEGORY === grouping.SUB_CATEGORY) {
                if (cat.attributes.INCIDENT_TYPE == null || cat.attributes.INCIDENT_TYPE.length == 0) {
                    grouping.CATEGORY_ID = cat.attributes.CATEGORY_ID;
                    grouping.TYPES = [];
                    return grouping;
                }
                if (types.indexOf(cat.attributes.INCIDENT_TYPE) < 0) {
                    types.push(cat.attributes.INCIDENT_TYPE);
                    var type = new __WEBPACK_IMPORTED_MODULE_1__component_category_category__["c" /* CategoryType */]();
                    type.CATEGORY_ID = cat.attributes.CATEGORY_ID;
                    type.INCIDENT_TYPE = cat.attributes.INCIDENT_TYPE;
                    grouping.TYPES.push(type);
                }
            }
        });
        return grouping;
    };
    CategoryService.prototype.changeIncidentCategory = function (incident, newCategoryID, selectedCategory) {
        incident.category.CATEGORY_ID = newCategoryID;
        incident.attributes.CATEGORY_ID = newCategoryID;
        incident.category.attributes.MAIN_CATEGORY = selectedCategory.attributes.MAIN_CATEGORY;
        incident.category.attributes.SUB_CATEGORY = selectedCategory.attributes.SUB_CATEGORY;
        incident.category.attributes.INCIDENT_TYPE = selectedCategory.attributes.INCIDENT_TYPE;
        incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentCategoryKey]
            .splice(0, incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentCategoryKey].length, incident.category);
        this.incidentService.update(incident);
    };
    CategoryService.prototype.handleError = function (error) {
        alert("An error occurred.");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_incident_service__["a" /* IncidentService */]) === "function" && _b || Object])
], CategoryService);

var _a, _b;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/incident-element.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentElementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IncidentElementService = (function () {
    function IncidentElementService(incidentService) {
        this.incidentService = incidentService;
    }
    IncidentElementService.extractAttributes = function (incidentElement) {
        if (incidentElement == null) {
            return null;
        }
        return incidentElement.attributes;
    };
    IncidentElementService.extractAttributesArray = function (incidentElements) {
        var arr = [];
        //debugger;
        incidentElements.forEach(function (so) {
            //console.log(so);
            arr.push(so.attributes);
        });
        return arr;
    };
    // static toIncidentElement ( table: string, object: IncidentElement ): IncidentElement {
    //     var incidentElement: IncidentElement = new IncidentElement();
    //     incidentElement.attributes = object.attributes;
    //     return incidentElement;
    // }
    IncidentElementService.prototype.getElementKey = function (table) {
        var key = "";
        if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].CategoryTable)
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].IncidentCategoryKey;
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationTable)
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationKey;
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].StaffTable)
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].StaffKey;
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].PersonTable)
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].PersonKey;
        else {
            console.log("Table not found.");
            key = table;
        }
        return key;
    };
    IncidentElementService.prototype.getElementIndexByID = function (incident, idToSearch, table) {
        var key = this.getElementKey(table);
        var elementIndex = -1;
        if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationTable) {
            elementIndex = incident.incidentElements[key].findIndex(function (i) {
                return i.attributes.LOCATION_ID == idToSearch;
            });
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].StaffTable) {
            elementIndex = incident.incidentElements[key].findIndex(function (i) {
                return i.attributes.ACCOUNT_ID == idToSearch;
            });
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].PersonTable) {
            elementIndex = incident.incidentElements[key].findIndex(function (i) {
                return i.attributes.PERSON_ID == idToSearch;
            });
        }
        return elementIndex;
    };
    IncidentElementService.prototype.changeElement = function (incident, idToRemove, element) {
        var table = element.table;
        var key = this.getElementKey(table);
        var index = -1;
        index = this.getElementIndexByID(incident, idToRemove, table);
        if (incident.incidentElements[key] != null && index != -1) {
            incident.incidentElements[key].splice(index, 1, element);
            this.incidentService.update(incident);
        }
    };
    IncidentElementService.prototype.addElement = function (incident, element) {
        var key = this.getElementKey(element.table);
        incident.incidentElements[key].push(element);
        this.incidentService.update(incident);
    };
    return IncidentElementService;
}());
IncidentElementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_incident_service__["a" /* IncidentService */]) === "function" && _a || Object])
], IncidentElementService);

var _a;
//# sourceMappingURL=incident-element.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/incident.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_report_incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_staff_service__ = __webpack_require__("../../../../../src/app/service/staff.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { IncidentElementService } from '../service/incident-element.service';







var IncidentService = (function () {
    function IncidentService(http, staffService) {
        var _this = this;
        this.http = http;
        this.staffService = staffService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.incidentsUrl = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].IncidentsURI;
        this.updateIncidentsUrl = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].UpdateIncidentsURI;
        this.guardIncidentsUrl = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].GuardIncidentsURI;
        this.userService = new __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */];
        this.tableName = "";
        this.bs_reportsToAddToWorkspace = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.reportsToAddToWorkspace = this.bs_reportsToAddToWorkspace.asObservable();
        this.bs_lastRemovedId = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.lastRemovedId = this.bs_lastRemovedId.asObservable();
        this.staffArr = [];
        this.staffService.getStaffs().then(function (returnedArr) {
            _this.staffArr = returnedArr;
        });
    }
    IncidentService.prototype.addToWorkspace = function (incident) {
        var arr = this.bs_reportsToAddToWorkspace.getValue();
        arr.splice(0, 0, incident);
        this.bs_reportsToAddToWorkspace.next(arr);
    };
    IncidentService.prototype.removeFromWorkspace = function (id) {
        this.bs_lastRemovedId.next(id);
        var arr = this.bs_reportsToAddToWorkspace.getValue();
        var index = arr.findIndex(function (i) { return i.attributes.REPORT_ID == id; });
        arr.splice(index, 1);
        this.bs_reportsToAddToWorkspace.next(arr);
    };
    IncidentService.prototype.getIncidents = function () {
        var _this = this;
        var incidents = this.http.get(this.incidentsUrl)
            .toPromise()
            .then(function (response) { return _this.initIncidents(response.json()); })
            .catch(this.handleError);
        return Promise.resolve(incidents);
    };
    ;
    IncidentService.prototype.getGuardIncidents = function () {
        var _this = this;
        var user = this.userService.getCurrentUser();
        // var _user = IncidentElementService.toIncidentElement ( Config.AccountTable, user );
        var incidents = this.http
            .post(this.guardIncidentsUrl, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (response) { return _this.initIncidents(response.json()); })
            .catch(this.handleError);
        return Promise.resolve(incidents);
    };
    IncidentService.prototype.getIncident = function (id) {
        var _this = this;
        var incidentToGet = new __WEBPACK_IMPORTED_MODULE_4__component_report_incident__["a" /* Incident */]();
        incidentToGet.attributes.REPORT_ID = id;
        var returnedIncident = this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].GetIncidentURI, JSON.stringify(incidentToGet), { headers: this.headers })
            .toPromise()
            .then(function (response) { return _this.initializeIncident(response.json()); })
            .catch(this.handleError);
        return Promise.resolve(returnedIncident);
    };
    IncidentService.prototype.initIncidents = function (incidents) {
        var _this = this;
        incidents.forEach(function (i) {
            _this.initializeIncident(i);
        });
        return incidents;
    };
    IncidentService.prototype.initializeIncident = function (incident) {
        incident.category = incident.incidentElements[__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].IncidentCategoryKey][0];
        incident.guard = incident.incidentElements[__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].StaffKey][0];
        return incident;
    };
    IncidentService.prototype.create = function (incident) {
        // TEMPORARY
        if (incident.attributes.ACCOUNT_ID == null) {
            if (this.staffArr.length > 0)
                incident.attributes.ACCOUNT_ID = this.staffArr[0].attributes.ACCOUNT_ID;
        }
        incident.table = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].IncidentTable;
        var promise = this.http
            .post(this.incidentsUrl, JSON.stringify(incident), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json() ? incident : null;
        })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    IncidentService.prototype.update = function (incident) {
        if (incident.attributes.ACCOUNT_ID == null) {
            incident.attributes.ACCOUNT_ID = this.userService.getCurrentUser().attributes.ACCOUNT_ID;
        }
        incident.table = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].IncidentTable;
        var promise = this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].UpdateIncidentURI, JSON.stringify(incident), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json() ? incident : null;
        })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    IncidentService.prototype.delete = function (id) {
        var url = this.incidentsUrl + "/" + id;
        var promise = this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    ;
    IncidentService.prototype.handleError = function (error) {
        alert("An error occurred.");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return IncidentService;
}());
IncidentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__service_staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_staff_service__["a" /* StaffService */]) === "function" && _b || Object])
], IncidentService);

var _a, _b;
//# sourceMappingURL=incident.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_location_location__ = __webpack_require__("../../../../../src/app/component/location/location.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.locationsUrl = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationsURI;
        this.tableName = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationTable;
    }
    LocationService.prototype.getLocations = function () {
        var locations = this.http.get(this.locationsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(locations);
    };
    ;
    LocationService.prototype.create = function (location) {
        var promise = this.http
            .post(this.locationsUrl, JSON.stringify(location), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    ;
    LocationService.prototype.update = function (location) {
        var promise = this.http
            .post(this.locationsUrl, JSON.stringify(location), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    ;
    LocationService.prototype.delete = function (id) {
        var url = this.locationsUrl + "/" + id;
        var promise = this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    ;
    LocationService.prototype.toLocationMapping = function (locations) {
        var _this = this;
        // Assuming 'locations' is not sorted
        var locationMap = [];
        if (locations == null)
            return locationMap;
        var campusArr = [];
        locations.forEach(function (loc) {
            if (campusArr.indexOf(loc.attributes.CAMPUS_ID) < 0) {
                campusArr.push(loc.attributes.CAMPUS_ID);
                locationMap.push(_this.createCampusMap(loc.attributes.CAMPUS_ID, locations));
            }
        });
        return locationMap;
    };
    LocationService.prototype.createCampusMap = function (campusId, locations) {
        var _this = this;
        var map = new __WEBPACK_IMPORTED_MODULE_4__component_location_location__["c" /* LocationMapping */]();
        map.CAMPUS_ID = campusId;
        var buildings = [];
        locations.forEach(function (loc) {
            if (loc.attributes.CAMPUS_ID == campusId && buildings.indexOf(loc.attributes.BUILDING_NAME) < 0) {
                buildings.push(loc.attributes.BUILDING_NAME);
                map.BUILDINGS.push(_this.createBuildingMap(loc.attributes.BUILDING_NAME, locations));
            }
        });
        return map;
    };
    LocationService.prototype.createBuildingMap = function (buildingName, locations) {
        var building = new __WEBPACK_IMPORTED_MODULE_4__component_location_location__["a" /* Building */]();
        building.BUILDING_NAME = buildingName;
        var rooms = [];
        locations.forEach(function (loc) {
            if (rooms.indexOf(loc.attributes.ROOM_NUMBER) < 0 && loc.attributes.BUILDING_NAME === buildingName) {
                rooms.push(loc.attributes.ROOM_NUMBER);
                building.ROOMS.push(new __WEBPACK_IMPORTED_MODULE_4__component_location_location__["d" /* Room */](loc.attributes.LOCATION_ID, loc.attributes.ROOM_NUMBER));
            }
        });
        return building;
    };
    LocationService.prototype.handleError = function (error) {
        alert("An error occurred.");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return LocationService;
}());
LocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.loginUrl = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LoginURI;
    }
    LoginService.prototype.doLogin = function (user) {
        console.log("user logging in", user);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        console.log(" options ", options);
        console.log("user posting ", user);
        // var _user = IncidentElementService.toIncidentElement ( Config.AccountTable, user );
        // HTTP RESPONSE
        return this.http
            .post(this.loginUrl, JSON.stringify(user), options)
            .map(function (response) { return response.json(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/new-report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewReportService = (function () {
    function NewReportService() {
        this.locations = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.currentLocations = this.locations.asObservable();
        this.persons = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.currentPersons = this.persons.asObservable();
        this.incidentElements = new Map();
    }
    NewReportService.prototype.addIncidentElement = function (obj) {
        if (obj == null) {
            console.log("ERROR: " + obj.table + " is undefined and cannot be added.");
            return;
        }
        var behaviorSubject = null;
        var arr = [];
        if (obj.table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationTable) {
            behaviorSubject = this.locations;
            arr = behaviorSubject.getValue();
        }
        else if (obj.table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonTable) {
            behaviorSubject = this.persons;
            arr = behaviorSubject.getValue();
            // obj = IncidentElementService.toIncidentElement( table, obj );
        }
        arr.push(obj);
        behaviorSubject.next(arr);
    };
    NewReportService.prototype.removeIncidentElement = function (obj, table) {
        console.log("object table", obj.table);
        var behaviorSubject = null;
        var arr = [];
        var index = -1;
        if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationTable) {
            behaviorSubject = this.locations;
            arr = behaviorSubject.getValue();
            var loc = obj;
            index = arr.findIndex(function (x) { return x.attributes.CAMPUS_ID == obj.attributes.CAMPUS_ID
                && x.attributes.LOCATION_ID == obj.attributes.LOCATION_ID
                && x.attributes.BUILDING_NAME == obj.attributes.BUILDING_NAME
                && x.attributes.ROOM_NUMBER == obj.attributes.ROOM_NUMBER; });
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonTable) {
            behaviorSubject = this.persons;
            arr = behaviorSubject.getValue();
            var person = obj;
            index = arr.findIndex(function (x) { return x.attributes.FIRST_NAME === person.attributes.FIRST_NAME
                && x.attributes.LAST_NAME === person.attributes.LAST_NAME
                && x.attributes.PHONE_NUMBER === person.attributes.PHONE_NUMBER; });
        }
        if (index >= 0) {
            arr.splice(index, 1);
            behaviorSubject.next(arr);
        }
        else {
            console.log("ERROR: index < 0. Element not found in array");
        }
    };
    NewReportService.prototype.validateReport = function (report) {
        var isValid = true;
        isValid = this.validateReportAttributes(report) && isValid;
        isValid = this.validateIncidentElements(report.incidentElements) && isValid;
        return isValid;
    };
    NewReportService.prototype.validateReportAttributes = function (report) {
        var isValid = true;
        if (report.attributes.CATEGORY_ID == null) {
            this.debug_printErrorMsg("CATEGORY_ID");
            isValid = false;
        }
        if (report.attributes.DESCRIPTION == null || report.attributes.DESCRIPTION.length == 0) {
            this.debug_printErrorMsg("DESCRIPTION");
            isValid = false;
        }
        if (report.attributes.EXECUTIVE_SUMMARY == null || report.attributes.EXECUTIVE_SUMMARY.length == 0) {
            this.debug_printErrorMsg("EXECUTIVE_SUMMARY");
            isValid = false;
        }
        return isValid;
    };
    NewReportService.prototype.validateIncidentElements = function (incidentElements) {
        var _this = this;
        var isValid = true;
        incidentElements.forEach(function (map) {
            map.forEach(function (elem) {
                var table = elem.table;
                if (table.toLowerCase() === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationTable.toLowerCase())
                    isValid = _this.validateLocation(elem) && isValid;
                else if (table.toLowerCase() === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonTable.toLowerCase())
                    isValid = _this.validatePerson(elem.attributes) && isValid;
            });
        });
        return isValid;
    };
    NewReportService.prototype.validateLocation = function (location) {
        var attr = location.attributes;
        if (attr.LOCATION_ID == null) {
            this.debug_printErrorMsg("LOCATION_ID");
            return false;
        }
        return true;
    };
    NewReportService.prototype.validatePerson = function (person) {
        var isValid = true;
        if (person.attributes.FIRST_NAME == null || person.attributes.FIRST_NAME.length == 0) {
            this.debug_printErrorMsg("FIRST_NAME");
            isValid = false;
        }
        if (person.attributes.LAST_NAME == null || person.attributes.LAST_NAME.length == 0) {
            this.debug_printErrorMsg("LAST_NAME");
            isValid = false;
        }
        if (person.attributes.PHONE_NUMBER == null || person.attributes.PHONE_NUMBER.length == 0) {
            this.debug_printErrorMsg("PHONE_NUMBER");
            isValid = false;
        }
        return isValid;
    };
    NewReportService.prototype.debug_printErrorMsg = function (field) {
        console.log("***** REPORT INVALID ERROR: " + field + " cannot be null or empty ");
    };
    return NewReportService;
}());
NewReportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NewReportService);

//# sourceMappingURL=new-report.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.personUrl = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonURI;
        this.tableName = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonTable;
    }
    PersonService.prototype.getPersons = function () {
        var personList = this.http.get(this.personUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(personList);
    };
    PersonService.prototype.search = function (person) {
        var personList = this.http.get(this.personUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(personList);
    };
    PersonService.prototype.create = function (person) {
        var promise = this.http
            .put(this.personUrl, JSON.stringify(person), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    ;
    PersonService.prototype.update = function (person) {
        var promise = this.http
            .put(this.personUrl, JSON.stringify(person), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    ;
    PersonService.prototype.delete = function (id) {
        var url = this.personUrl + "/" + id;
        var promise = this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    ;
    PersonService.prototype.searchList = function (type, personList) {
        var input, filter, ul, li;
        ul = document.getElementById("peopleDisplay");
        li = ul.getElementsByTagName('li');
        // Loop through all list items, and hide those who don't match the search query
        if (type == "first") {
            input = document.getElementById('personInputFirst');
            filter = input.value.toUpperCase();
            for (var i = 0; i < personList.length; i++) {
                if (personList[i].attributes.FIRST_NAME.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                }
                else {
                    li[i].style.display = "none";
                }
            }
        }
        else if (type == "last") {
            input = document.getElementById('personInputLast');
            filter = input.value.toUpperCase();
            for (var i = 0; i < personList.length; i++) {
                if (personList[i].attributes.LAST_NAME.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                }
                else {
                    li[i].style.display = "none";
                }
            }
        }
        else if (type == "number") {
            input = document.getElementById('personInputPhone');
            filter = input.value.toString();
            for (var i = 0; i < personList.length; i++) {
                if (personList[i].attributes.PHONE_NUMBER.toString().indexOf(filter) > -1) {
                    li[i].style.display = "";
                }
                else {
                    li[i].style.display = "none";
                }
            }
        }
    };
    PersonService.prototype.handleError = function (error) {
        alert("An error occurred.");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PersonService;
}());
PersonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PersonService);

var _a;
//# sourceMappingURL=person.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/staff.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { IncidentElementService } from '../service/incident-element.service';

var StaffService = (function () {
    function StaffService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.staffUrl = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].StaffURI;
        this.tableName = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].StaffTable;
    }
    StaffService.prototype.getStaffs = function () {
        var staffList = this.http.get(this.staffUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(staffList);
    };
    ;
    StaffService.prototype.update = function (staff) {
        var promise = this.http
            .put(this.staffUrl, JSON.stringify(staff), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    ;
    StaffService.prototype.delete = function (id) {
        var url = this.staffUrl + "/" + id;
        var promise = this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    ;
    StaffService.prototype.handleError = function (error) {
        console.error('An error occurred in staff service', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return StaffService;
}());
StaffService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StaffService);

var _a;
//# sourceMappingURL=staff.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserService = (function () {
    function UserService() {
        this.currentUser = 'currentUser';
    }
    UserService.prototype.authUser = function (user) {
        if (user == null) {
            return;
        }
        sessionStorage.setItem(this.currentUser, JSON.stringify(user));
    };
    UserService.prototype.isLoggedIn = function () {
        var currentUser = this.getCurrentUser();
        if (currentUser != null) {
            return true;
        }
        return false;
    };
    UserService.prototype.getAccountType = function () {
        return this.getCurrentUser().attributes.ACCOUNT_TYPE;
    };
    UserService.prototype.logout = function () {
        sessionStorage.setItem(this.currentUser, null);
    };
    UserService.prototype.getCurrentUser = function () {
        var jsonString = sessionStorage.getItem(this.currentUser);
        var currentUser = JSON.parse(jsonString);
        if (currentUser != null) {
            return currentUser;
        }
        return null;
    };
    UserService.prototype.isGuard = function () {
        return this.getAccountType() == 2;
    };
    UserService.prototype.isAdmin = function () {
        return this.getAccountType() == 1;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/util/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
    }
    return Config;
}());

Config.LocationsURI = "https://localhost:4567/locations";
Config.IncidentsURI = "https://localhost:4567/incidents";
Config.StaffURI = "https://localhost:4567/staff";
Config.LoginURI = "https://localhost:4567/login";
Config.PersonURI = "https://localhost:4567/person";
Config.GuardIncidentsURI = "https://localhost:4567/guardIncidents";
Config.GetIncidentURI = "https://localhost:4567/getIncident";
Config.CategoriesURI = "https://localhost:4567/categories";
Config.UpdateIncidentsURI = "https://localhost:4567/updateIncident";
Config.UpdateIncidentURI = "https://localhost:4567/updateIncident";
Config.AssignIncidentURI = "https://localhost:4567/assignIncident";
Config.UploadURI = "https://localhost:4567/upload";
Config.StaffTable = "STAFF";
Config.LocationTable = "LOCATION";
Config.AccountTable = "ACCOUNT";
Config.IncidentTable = "INCIDENT";
Config.PersonTable = "PERSON";
Config.CategoryTable = "INCIDENT_CATEGORY";
Config.IncidentCategoryKey = "IncidentCategory";
Config.LocationKey = "Location";
Config.PersonKey = "Person";
Config.StaffKey = "Staff";
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ "../../../../../src/app/util/dom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_location_location_component__ = __webpack_require__("../../../../../src/app/component/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_vehicle_vehicle_component__ = __webpack_require__("../../../../../src/app/component/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_person_person_component__ = __webpack_require__("../../../../../src/app/component/person/person.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DomService = (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DomService.prototype.addComponent = function (component, targetDomId) {
        // 1. Create a component
        var componentRef = this.createComponent(component);
        this.addToDom(componentRef, targetDomId);
        // 5. Save reference for later use
        componentRef.instance.reference = componentRef;
    };
    DomService.prototype.addToDom = function (componentRef, targetDomId) {
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // 3. Get DOM element from component
        var domElement = componentRef.hostView
            .rootNodes[0];
        // 4. Append DOM element to the div
        var div = document.getElementById(targetDomId);
        div.appendChild(domElement);
    };
    DomService.prototype.createComponent = function (componentName) {
        if (componentName === __WEBPACK_IMPORTED_MODULE_2__component_vehicle_vehicle_component__["a" /* VehicleComponent */].name) {
            return this.componentFactoryResolver
                .resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__component_vehicle_vehicle_component__["a" /* VehicleComponent */])
                .create(this.injector);
        }
        else if (componentName === __WEBPACK_IMPORTED_MODULE_1__component_location_location_component__["a" /* LocationComponent */].name) {
            return this.componentFactoryResolver
                .resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__component_location_location_component__["a" /* LocationComponent */])
                .create(this.injector);
        }
        else if (componentName === __WEBPACK_IMPORTED_MODULE_3__component_person_person_component__["a" /* PersonComponent */].name) {
            return this.componentFactoryResolver
                .resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__component_person_person_component__["a" /* PersonComponent */])
                .create(this.injector);
        }
    };
    return DomService;
}());
DomService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */]) === "function" && _c || Object])
], DomService);

var _a, _b, _c;
//# sourceMappingURL=dom.service.js.map

/***/ }),

/***/ "../../../../../src/app/util/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (incidents, searchText) {
        // check if search term is undefined
        if (searchText === undefined || searchText == "")
            return incidents;
        // return updated items array
        return incidents.filter(function (incident) {
            // Incident
            if (incident.searchString
                .toLowerCase()
                .includes(searchText.toLowerCase())) {
                return incident;
            }
            // Staff
            for (var i = 0; i < incident.incidentElements[__WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].StaffKey].length; i++) {
                if (incident.incidentElements[__WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].StaffKey][i].searchString
                    .toLowerCase()
                    .includes(searchText.toLowerCase())) {
                    return incident;
                }
            }
            // Location
            for (var i = 0; i < incident.incidentElements[__WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationKey].length; i++) {
                if (incident.incidentElements[__WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationKey][i].searchString
                    .toLowerCase()
                    .includes(searchText.toLowerCase())) {
                    return incident;
                }
            }
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/assets/css/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.incident-element-container,\r\ndiv.incident-element-container .incident-element-header,\r\ndiv.incident-element-container .incident-element-details,\r\ndiv.incidents-row,\r\ndiv.side-container,\r\ndiv.side-container .panel-heading {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start; }\r\n\r\n@media (max-width: 1800px) {\r\n  div#incidents-container {\r\n    width: 100vw;\r\n    height: 100%; }\r\n\r\n  div.side-container {\r\n    width: 50%;\r\n    height: 150vh; } }\r\ndiv#incidents-container {\r\n  -webkit-box-ordinal-group: 2;\r\n      -ms-flex-order: 1;\r\n          order: 1;\r\n  padding: 20px; }\r\n  div#incidents-container div#incidents-dashboard {\r\n    height: 100%;\r\n    margin: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    background-color: #eee; }\r\n    div#incidents-container div#incidents-dashboard .panel-heading {\r\n      height: auto; }\r\n    div#incidents-container div#incidents-dashboard .panel-body {\r\n      padding: 12px !important;\r\n      height: 100%;\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-wrap: wrap;\r\n          flex-wrap: wrap;\r\n      border-bottom: none; }\r\n  div#incidents-container div#workspace.row {\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    overflow: hidden; }\r\n  div#incidents-container div.panel {\r\n    overflow: hidden; }\r\n    div#incidents-container div.panel div.panel-heading {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -webkit-box-pack: justify;\r\n          -ms-flex-pack: justify;\r\n              justify-content: space-between;\r\n      -webkit-box-align: start;\r\n          -ms-flex-align: start;\r\n              align-items: flex-start; }\r\n      div#incidents-container div.panel div.panel-heading input {\r\n        min-width: 250px;\r\n        width: 350px; }\r\n    div#incidents-container div.panel div.panel-body {\r\n      height: 100%;\r\n      width: 100%;\r\n      overflow: auto; }\r\n\r\ndiv.quarter-box {\r\n  height: 49%;\r\n  width: 49%;\r\n  min-width: 300px;\r\n  margin: 4px;\r\n  border-radius: 4px;\r\n  border: 1px solid #b3b3b3;\r\n  overflow-y: auto;\r\n  padding: 8px;\r\n  background-color: white; }\r\n  @media (max-height: 900px) {\r\n    div.quarter-box {\r\n      height: 100%; } }\r\n\r\ndiv#left-panels {\r\n  -webkit-box-ordinal-group: 3;\r\n      -ms-flex-order: 2;\r\n          order: 2; }\r\n  div#left-panels #button-container {\r\n    -webkit-box-flex: 0.1;\r\n        -ms-flex-positive: 0.1;\r\n            flex-grow: 0.1; }\r\n    div#left-panels #button-container button {\r\n      padding: 6px 48px !important; }\r\n\r\ndiv#right-panels {\r\n  -webkit-box-ordinal-group: 4;\r\n      -ms-flex-order: 3;\r\n          order: 3; }\r\n\r\ndiv.side-container {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding: 16px;\r\n  min-width: 300px; }\r\n  div.side-container .panel {\r\n    width: 100%;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1; }\r\n  div.side-container .panel-body {\r\n    padding-top: 0px; }\r\n  div.side-container .form-control {\r\n    background-color: #eee;\r\n    box-shadow: none;\r\n    max-width: 50%; }\r\n\r\n.card {\r\n  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.07), 1px 2px 5px 0 rgba(0, 0, 0, 0.06); }\r\n\r\n#workspace-main {\r\n  height: 100%; }\r\n\r\n#workspace-data {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 100%;\r\n  min-width: 300px;\r\n  max-width: 400px; }\r\n  #workspace-data incidents-component {\r\n    height: 91%; }\r\n\r\n#button-container {\r\n  padding-bottom: 12px; }\r\n  #button-container button {\r\n    width: 50%; }\r\n\r\nstaff-component {\r\n  height: 50%;\r\n  width: 100%; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/guard-app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container > .row {\r\n  clear: both; }\r\n\r\n.centre-container {\r\n  margin: 0 auto; }\r\n\r\n.outer-container {\r\n  position: relative; }\r\n\r\n.m-1 {\r\n  margin: 1em !important; }\r\n\r\n.mb-1 {\r\n  margin-bottom: 1em !important; }\r\n\r\n.mb-2 {\r\n  margin-bottom: 2em !important; }\r\n\r\n.ml-1 {\r\n  margin-left: 1em; }\r\n\r\n.ml-3 {\r\n  margin-left: 3em; }\r\n\r\n.mr-1 {\r\n  margin-right: 1em; }\r\n\r\n.mt-sm {\r\n  margin-top: 0.5em !important; }\r\n\r\n.mt-1 {\r\n  margin-top: 1em !important; }\r\n\r\n.mt-2 {\r\n  margin-top: 2em !important; }\r\n\r\n.p-0, ul.p-0 {\r\n  padding: 0 !important; }\r\n\r\n.pb-sm {\r\n  padding-bottom: 0.5em !important; }\r\n\r\n.pb-1 {\r\n  padding-bottom: 1em !important; }\r\n\r\n.pt-1 {\r\n  padding-top: 1em !important; }\r\n\r\n.pt-2 {\r\n  padding-top: 2em !important; }\r\n\r\n.lh-1 {\r\n  line-height: 2em !important; }\r\n\r\n.modal-body {\r\n  text-align: left; }\r\n\r\n.modal-header {\r\n  padding: 1em !important; }\r\n\r\n.modal-title {\r\n  margin-top: 1em !important; }\r\n\r\nselect.category-field {\r\n  padding: 0.5em;\r\n  margin: 0 auto;\r\n  width: 80%; }\r\n\r\n.modal-field-title {\r\n  padding-left: 10%; }\r\n\r\n.flex-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  margin-bottom: 4.5em;\r\n  position: relative;\r\n  min-height: 100%;\r\n  width: 100%; }\r\n\r\n.flex-item {\r\n  float: none;\r\n  width: 40%;\r\n  height: 12em;\r\n  max-width: 200px;\r\n  margin: 0.8em; }\r\n\r\n.panel-body {\r\n  height: 100%;\r\n  padding-bottom: 1em;\r\n  word-break: break-word; }\r\n\r\nul {\r\n  height: 100%;\r\n  padding-bottom: 1em;\r\n  overflow: scroll;\r\n  text-overflow: ellipsis; }\r\n\r\nfooter {\r\n  bottom: 0;\r\n  margin-bottom: 0;\r\n  height: 4em;\r\n  width: 100%;\r\n  position: fixed;\r\n  text-align: center; }\r\n\r\n.guard-menu-button {\r\n  top: 1em;\r\n  position: relative; }\r\n\r\n.collapsable-heading {\r\n  padding-top: 1em !important;\r\n  padding-bottom: 1em !important;\r\n  background-color: #f5f5f5; }\r\n\r\nh4.panel-title {\r\n  font-weight: 400;\r\n  font-size: 115%; }\r\n\r\n.panel-heading .accordion-toggle.collapsed:after {\r\n  /* symbol for \"collapsed\" panels */\r\n  content: \"\\E080\"; }\r\n\r\n.panel-heading .accordion-toggle:after {\r\n  /* symbol for \"opening\" panels */\r\n  font-family: 'Glyphicons Halflings';\r\n  content: \"\\E114\";\r\n  float: right;\r\n  color: grey; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/incidents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.incident-card {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: white;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.16);\r\n  border-bottom: none;\r\n  width: 100%;\r\n  padding: 16px; }\r\n  div.incident-card .main-content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    overflow-x: hidden;\r\n    white-space: nowrap;\r\n    height: 100%;\r\n    width: 100%; }\r\n  div.incident-card .detail-row {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    width: 100%;\r\n    display: block;\r\n    overflow: hidden; }\r\n    div.incident-card .detail-row.tertiary {\r\n      margin-top: 8px; }\r\n  div.incident-card .description {\r\n    margin-top: 8px;\r\n    margin-bottom: 8px; }\r\n  div.incident-card .bottom {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    padding-top: 12px; }\r\n    div.incident-card .bottom .detail-row {\r\n      width: 75%; }\r\n  div.incident-card .action {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/new-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#new-report-panel {\r\n  margin-top: 16px; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/panels.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#incidents-list-panel, div#staff-list-panel {\r\n  height: 100%;\r\n  border-top-left-radius: 0px;\r\n  border-top-right-radius: 0px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column; }\r\n  div#incidents-list-panel div.panel-heading, div#staff-list-panel div.panel-heading {\r\n    height: auto !important; }\r\n  div#incidents-list-panel div.panel-body, div#staff-list-panel div.panel-body {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    overflow: auto; }\r\n  div#incidents-list-panel div#incidents-list, div#staff-list-panel div#incidents-list {\r\n    height: 100%;\r\n    padding: 0px !important;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px; }\r\n  div#incidents-list-panel div#incidents-list, div#incidents-list-panel div#staff-list, div#staff-list-panel div#incidents-list, div#staff-list-panel div#staff-list {\r\n    overflow: auto; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/report-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.report-header {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  width: 100%;\r\n  padding: 16px; }\r\n\r\n.report-id {\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  opacity: 0.8;\r\n  color: #333; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/staff.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".staff-card {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: auto;\r\n  width: 100%;\r\n  background-color: #ffffff;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.16);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.16); }\r\n\r\n.status-indicator-container, .actions {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 48px;\r\n  min-width: 48px;\r\n  width: 48px;\r\n  padding: 18px; }\r\n  .status-indicator-container .status-indicator, .actions .status-indicator {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: green;\r\n    border-radius: 99px; }\r\n\r\n.name-plate {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 4px; }\r\n  .name-plate span.name {\r\n    font-size: 14px; }\r\n  .name-plate span.campus {\r\n    opacity: 0.8; }\r\n\r\n.actions span {\r\n  opacity: 0.8; }\r\n  .actions span:hover {\r\n    cursor: pointer;\r\n    opacity: 1; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map