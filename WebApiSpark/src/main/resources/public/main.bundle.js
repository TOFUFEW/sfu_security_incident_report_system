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

module.exports = "<navbar-component></navbar-component>\n<!-- <nav id=\"main-navbar\" class=\"navbar\">\n    <div id=\"navbar-container\" class=\"container-fluid\">\n        <div class=\"navbar-header navbar-left-items\" *ngIf=\"!isGuardApp\">\n            <a class=\"navbar-brand navbar-lg\">SFU Incident Reporting System</a>\n        </div>\n        <div class=\"navbar-header\" *ngIf=\"isGuardApp\">\n            <a class=\"navbar-brand navbar-sm\">SFU IRS</a>\n            <a class=\"navbar-brand navbar-lg navbar-guard\">SFU Incident Reporting Systemssss</a>\n        </div>            \n        <ul class=\"nav navbar-nav\">\n            <li *ngIf=\"isAdmin\" (click)=\"redirect('dashboard')\"><a class=\"link\">Dashboard</a></li>\n            <li *ngIf=\"isAdmin\" (click)=\"redirect('search')\"><a class=\"link\">Search</a></li>\n        </ul>\n        <ul id=\"navbar-right-items\" class=\"nav navbar-nav navbar-right navbar-lg\" *ngIf=\"user!=null\">\n            <li class=\"dropdown\">\n                <span class=\"glyphicon glyphicon-menu-hamburger navbar-right-button pull-left  dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></span>    \n                <ul class=\"dropdown-menu\">\n                    <li (click)=\"redirect('new-account')\" *ngIf=\"isAdmin\"><span class=\"link\">Create Account</span></li>\n                    <li id=\"separator\" *ngIf=\"isAdmin\"><span class=\"link\" (click)=\"onLogout()\">Logout</span></li>\n                    <li *ngIf=\"!isAdmin\"><span class=\"link\" (click)=\"onLogout()\">Logout</span></li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n    <span id=\"logout-link\" class=\"link navbar-right navbar-sm\" (click)=\"onLogout()\">Logout</span>\n    \n</nav> -->\n\n\n<router-outlet></router-outlet>\n"

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
        this.isAdmin = false;
        this.isGuardApp = false;
        this.user = this.userService.getCurrentUser();
    }
    AppComponent.prototype.onLogout = function () {
        this.userService.logout();
        this.router.navigate(['login']);
    };
    AppComponent.prototype.redirect = function (component) {
        this.router.navigate([component]);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (u) {
            _this.user = u;
            if (u != null) {
                _this.userAccType = u.attributes.ACCOUNT_TYPE;
            }
            _this.isAdmin = _this.userAccType == _this.userService.ADMIN;
        });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/component/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_location_location_component__ = __webpack_require__("../../../../../src/app/component/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_staff_staff_component__ = __webpack_require__("../../../../../src/app/component/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_report_incident_component__ = __webpack_require__("../../../../../src/app/component/report/incident.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_report_new_report_component__ = __webpack_require__("../../../../../src/app/component/report/new-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_guard_app_guard_incident_component__ = __webpack_require__("../../../../../src/app/component/guard-app/guard-incident.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_guard_app_guard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/guard-app/guard-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_vehicle_vehicle_component__ = __webpack_require__("../../../../../src/app/component/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_search_search_component__ = __webpack_require__("../../../../../src/app/component/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_person_person_component__ = __webpack_require__("../../../../../src/app/component/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_attachment_attachment_component__ = __webpack_require__("../../../../../src/app/component/attachment/attachment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_attachment_attachmentView_component__ = __webpack_require__("../../../../../src/app/component/attachment/attachmentView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_timer_timer_component__ = __webpack_require__("../../../../../src/app/component/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_location_location_modal_component__ = __webpack_require__("../../../../../src/app/component/location/location-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_category_category_component__ = __webpack_require__("../../../../../src/app/component/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_report_report_summary_component__ = __webpack_require__("../../../../../src/app/component/report/report-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__component_report_inline_edit_component__ = __webpack_require__("../../../../../src/app/component/report/inline-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__component_login_new_account_component__ = __webpack_require__("../../../../../src/app/component/login/new-account-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__component_generic_element_generic_element_component__ = __webpack_require__("../../../../../src/app/component/generic-element/generic-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_loading_spinner_spinner_component__ = __webpack_require__("../../../../../src/app/component/loading-spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_status_status_component__ = __webpack_require__("../../../../../src/app/component/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__util_dom_service__ = __webpack_require__("../../../../../src/app/util/dom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__service_location_service__ = __webpack_require__("../../../../../src/app/service/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__service_incident_element_service__ = __webpack_require__("../../../../../src/app/service/incident-element.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__service_staff_service__ = __webpack_require__("../../../../../src/app/service/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__service_person_service__ = __webpack_require__("../../../../../src/app/service/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__service_timer_service__ = __webpack_require__("../../../../../src/app/service/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__util_filter_pipe__ = __webpack_require__("../../../../../src/app/util/filter.pipe.ts");
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
            __WEBPACK_IMPORTED_MODULE_19__component_attachment_attachment_component__["a" /* AttachmentComponent */],
            __WEBPACK_IMPORTED_MODULE_20__component_attachment_attachmentView_component__["a" /* AttachmentViewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_29__component_status_status_component__["a" /* StatusComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_22__component_location_location_modal_component__["a" /* LocationModalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_staff_staff_component__["a" /* StaffComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_report_incident_component__["a" /* IncidentComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__component_guard_app_guard_incident_component__["a" /* GuardIncidentComponent */],
            __WEBPACK_IMPORTED_MODULE_15__component_guard_app_guard_dashboard_component__["a" /* GuardDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_23__component_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_report_new_report_component__["a" /* NewReportComponent */],
            __WEBPACK_IMPORTED_MODULE_16__component_vehicle_vehicle_component__["a" /* VehicleComponent */],
            __WEBPACK_IMPORTED_MODULE_17__component_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_18__component_person_person_component__["a" /* PersonComponent */],
            __WEBPACK_IMPORTED_MODULE_41__util_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_24__component_report_report_summary_component__["a" /* ReportSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_21__component_timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component_login_new_account_component__["a" /* NewAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_25__component_report_inline_edit_component__["a" /* InlineEditComponent */],
            __WEBPACK_IMPORTED_MODULE_27__component_generic_element_generic_element_component__["a" /* GenericElementComponent */],
            __WEBPACK_IMPORTED_MODULE_28__component_loading_spinner_spinner_component__["a" /* SpinnerComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_30__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_31__service_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_33__util_dom_service__["a" /* DomService */],
            __WEBPACK_IMPORTED_MODULE_34__service_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_35__service_incident_service__["a" /* IncidentService */],
            __WEBPACK_IMPORTED_MODULE_36__service_incident_element_service__["a" /* IncidentElementService */],
            __WEBPACK_IMPORTED_MODULE_37__service_staff_service__["a" /* StaffService */],
            __WEBPACK_IMPORTED_MODULE_38__service_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_39__service_new_report_service__["a" /* NewReportService */],
            __WEBPACK_IMPORTED_MODULE_32__service_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_40__service_timer_service__["a" /* TimerService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__component_location_location_component__["a" /* LocationComponent */], __WEBPACK_IMPORTED_MODULE_16__component_vehicle_vehicle_component__["a" /* VehicleComponent */], __WEBPACK_IMPORTED_MODULE_27__component_generic_element_generic_element_component__["a" /* GenericElementComponent */],
            __WEBPACK_IMPORTED_MODULE_18__component_person_person_component__["a" /* PersonComponent */], __WEBPACK_IMPORTED_MODULE_19__component_attachment_attachment_component__["a" /* AttachmentComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_guard_app_guard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/guard-app/guard-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_guard_app_guard_incident_component__ = __webpack_require__("../../../../../src/app/component/guard-app/guard-incident.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_login_new_account_component__ = __webpack_require__("../../../../../src/app/component/login/new-account-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_attachment_attachmentView_component__ = __webpack_require__("../../../../../src/app/component/attachment/attachmentView.component.ts");









var router = [
    // Default
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // /<path>
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__component_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__component_login_login_component__["a" /* LoginComponent */] },
    // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'guard-app/dashboard', component: __WEBPACK_IMPORTED_MODULE_5__component_guard_app_guard_dashboard_component__["a" /* GuardDashboardComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__component_search_search_component__["a" /* SearchComponent */] },
    { path: 'new-report', component: __WEBPACK_IMPORTED_MODULE_2__component_report_new_report_component__["a" /* NewReportComponent */] },
    { path: 'guard-app/report/:id', component: __WEBPACK_IMPORTED_MODULE_6__component_guard_app_guard_incident_component__["a" /* GuardIncidentComponent */] },
    { path: 'new-account', component: __WEBPACK_IMPORTED_MODULE_7__component_login_new_account_component__["a" /* NewAccountComponent */] },
    { path: 'upload/get/:id/:name', component: __WEBPACK_IMPORTED_MODULE_8__component_attachment_attachmentView_component__["a" /* AttachmentViewComponent */] },
    // 404
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/component/attachment/attachment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details-body\">\n  <div class=\"x-container\" id=\"removeAttachment\">\n      <span class=\"glyphicon glyphicon-remove glyphicon-btn\" (click)=\"removeAttachmentFromReport()\"></span>\n  </div>\n    <div class=\"detail col-12 col-sm-3\" >\n        <span class=\"required-asterisk\">*</span>\n        <input type=\"file\" (change)=\"assignFileName(); upload();\" #file>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/attachment/attachment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_class_transformer__ = __webpack_require__("../../../../class-transformer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_class_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__attachment__ = __webpack_require__("../../../../../src/app/component/attachment/attachment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
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
    function AttachmentComponent(http, reportService) {
        this.http = http;
        this.reportService = reportService;
        this.uploadURI = __WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].UploadURI;
        this.bs_attachments = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.attachments = this.bs_attachments.asObservable();
    }
    ;
    AttachmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newAttachment = new __WEBPACK_IMPORTED_MODULE_5__attachment__["a" /* Attachment */]();
        this.getAttachments().then(function (returnedAttachments) {
            _this.bs_attachments.next(returnedAttachments);
            console.log(_this.attachments);
            _this.addAttachmentToReport();
        });
        //create a unique identifier for internal use so filenames do not have to be unique
        this.newAttachment.attributes.FILE_ID = this.generateUUID();
    };
    AttachmentComponent.prototype.upload = function () {
        console.log("upload");
        var inputEl = this.inputEl.nativeElement;
        var fileCount = inputEl.files.length;
        var formData = new FormData();
        if (fileCount > 0) {
            for (var i = 0; i < fileCount; i++) {
                console.log(inputEl.files.item(i));
                formData.append('files[]', inputEl.files.item(i));
            }
            var success = this.http.post(this.uploadURI + "/" + this.newAttachment.attributes.FILE_ID, formData)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
            return Promise.resolve(success);
        }
        else {
            console.log("error, no file retrieved");
        }
    };
    AttachmentComponent.prototype.addAttachmentToReport = function () {
        console.log("addAttachmentToReport");
        this.reportService.addIncidentElement(this.newAttachment);
    };
    AttachmentComponent.prototype.getAttachments = function () {
        var returnedAttachments = this.http.get(__WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].UploadsURI)
            .toPromise()
            .then(function (response) { return Object(__WEBPACK_IMPORTED_MODULE_3_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_5__attachment__["a" /* Attachment */], response.json()); })
            .catch(this.handleError);
        return Promise.resolve(returnedAttachments);
    };
    ;
    AttachmentComponent.prototype.removeAttachmentFromReport = function () {
        this.reportService.removeIncidentElement(this.newAttachment, __WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].AttachmentTable);
        this.reference.destroy();
    };
    AttachmentComponent.prototype.assignFileName = function () {
        var inputEl = this.inputEl.nativeElement;
        this.newAttachment.attributes.FILE_NAME = inputEl.files.item(0).name;
    };
    AttachmentComponent.prototype.generateUUID = function () {
        var d = Date.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    AttachmentComponent.prototype.handleError = function (error) {
        alert("An error occurred.");
        return Promise.reject(error.message || error);
    };
    return AttachmentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('file'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], AttachmentComponent.prototype, "inputEl", void 0);
AttachmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'attachment-component',
        template: __webpack_require__("../../../../../src/app/component/attachment/attachment.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_new_report_service__["a" /* NewReportService */]) === "function" && _c || Object])
], AttachmentComponent);

var _a, _b, _c;
//# sourceMappingURL=attachment.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/attachment/attachment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attachment; });
/* unused harmony export AttachmentAttributes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");

var Attachment = (function () {
    function Attachment() {
        this.attributes = new AttachmentAttributes();
        this.table = __WEBPACK_IMPORTED_MODULE_0__util_config_service__["a" /* Config */].AttachmentTable;
    }
    Attachment.prototype.setSearchString = function () {
        this.searchString =
            this.attributes.FILE_NAME;
    };
    ;
    return Attachment;
}());

var AttachmentAttributes = (function () {
    function AttachmentAttributes() {
    }
    return AttachmentAttributes;
}());

//# sourceMappingURL=attachment.js.map

/***/ }),

/***/ "../../../../../src/app/component/attachment/attachmentView.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <span class=\"link\" (click)=\"getFile()\">{{attachment.attributes.FILE_NAME}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/attachment/attachmentView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attachment__ = __webpack_require__("../../../../../src/app/component/attachment/attachment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
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





var AttachmentViewComponent = (function () {
    function AttachmentViewComponent(http) {
        this.http = http;
    }
    ;
    AttachmentViewComponent.prototype.ngOnInit = function () {
    };
    AttachmentViewComponent.prototype.getFile = function () {
        var _this = this;
        var file = this.http.get(__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].GetFileURI + this.attachment.attributes.FILE_ID + '/' + this.attachment.attributes.FILE_NAME, { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].ArrayBuffer })
            .toPromise()
            .then(function (response) { return _this.getZipFile(response); })
            .catch(this.handleError);
        return Promise.resolve(file);
    };
    ;
    AttachmentViewComponent.prototype.getZipFile = function (data) {
        var blob = new Blob([data['_body']], { type: 'application/zip' });
        console.log(blob);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        var address = window.URL.createObjectURL(blob);
        a.href = address;
        a.download = this.attachment.attributes.FILE_NAME + ".zip";
        a.click();
        window.URL.revokeObjectURL(address);
    };
    AttachmentViewComponent.prototype.checkFile = function (response) {
        console.log(response);
        return response;
    };
    AttachmentViewComponent.prototype.handleError = function (error) {
        alert("An error occurred.");
        return Promise.reject(error.message || error);
    };
    return AttachmentViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('attachment'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__attachment__["a" /* Attachment */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__attachment__["a" /* Attachment */]) === "function" && _a || Object)
], AttachmentViewComponent.prototype, "attachment", void 0);
AttachmentViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'attachmentView-component',
        template: __webpack_require__("../../../../../src/app/component/attachment/attachmentView.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AttachmentViewComponent);

var _a, _b;
//# sourceMappingURL=attachmentView.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" \n     class=\"modal fade\" \n     tabindex=\"-1\" \n     [ngClass]=\"{'in': visibleAnimate}\"\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" (click)=\"hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title mt-2\">Select Category</h4>\n                <div name=\"currentCategory\"></div>\n            </div>\n        \n                <!-- Category Picker -->\n                <div class=\"mt-2\">\n                    <div class=\"alertText modal-field-title\" *ngIf=\"showMainCategoryAlert\">\n                        Please select a category\n                    </div>\n                    <label class=\"field-title modal-field-title\">Category</label>\n                    <select class=\"form-control category-field\" \n                            ng-model=\"selectedMainCategory.MAIN_CATEGORY\" \n                            (change)=\"onSelectCategory($event.target.value)\">  \n                        <option disabled>{{currentMainCategory}}</option>  \n                        <option disabled>──────────</option>\n                        <option *ngFor=\"let category of categories\" value={{category.MAIN_CATEGORY}}>{{category.MAIN_CATEGORY}}</option>  \n                    </select>\n                </div>\n\n                <!-- Subcategory Picker -->\n                <div class=\"mt-2\">  \n                    <div class=\"alertText modal-field-title\" *ngIf=\"showSubcategoryAlert\">\n                            Please select a subcategory\n                        </div>\n                    <label class=\"field-title modal-field-title\">Subcategory</label>  \n                    <select class=\"form-control category-field\" \n                            [(ngModel)] =\"selectedSubCategory.SUB_CATEGORY\" \n                            (change)=\"onSelectSubCategory($event.target.value)\">                  \n                        <option disabled *ngIf='selectedMainCategory.MAIN_CATEGORY == \"\"'>{{currentSubCategory}}</option>\n                        <option disabled>──────────</option>                          \n                        <option *ngFor=\"let subcategory of filteredSubcategories\" value={{subcategory.SUB_CATEGORY}}>{{subcategory.SUB_CATEGORY}}</option>  \n                    </select>  \n                </div>\n\n                <!-- Type Picker -->\n                <div class=\"mt-2\" *ngIf=\"filteredTypes.length > 0\">\n                    <div class=\"alertText modal-field-title\" *ngIf=\"showTypeAlert\">\n                        Please select a type\n                    </div>\n                    <label class=\"field-title modal-field-title\">Type</label>    \n                    <select class=\"form-control category-field\" \n                            [(ngModel)] =\"selectedType.INCIDENT_TYPE\" \n                            (change)=\"onSelectTypeCategory($event.target.value)\">                  \n                        <option disabled *ngIf='selectedSubCategory.SUB_CATEGORY == \"\"'>\n                            {{currentType}}\n                        </option>  \n                        <option disabled>──────────</option>  \n                        <option *ngFor=\"let type of filteredTypes \" value=\"{{type.INCIDENT_TYPE}},, {{type.CATEGORY_ID}}\">{{type.INCIDENT_TYPE}}</option>  \n                    </select>  \n                </div>\n\n            <div class=\"modal-footer mt-2 pt-2 mb-1 mr-1\">\n                <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"submitCategory($event.target)\">\n                    <span class=\"glyphicon glyphicon-floppy-disk\"></span>\n                    Save\n                </button>\n                <button type=\"button\" class=\"btn btn-sm btn-secondary ml-2 mr-1\" (click)=\"hide()\">\n                    <span class=\"glyphicon glyphicon-remove\"></span>\n                    Cancel\n                </button>\n            </div>\n        </div>         \n    </div>\n</div>\n"

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
        this.showMainCategoryAlert = false;
        this.showSubcategoryAlert = false;
        this.showTypeAlert = false;
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
        //   this.selectedCategory = new Category(null, null, null, null);
        this.categoryID = -1;
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
        if (categoryName != this.selectedCategory.attributes.MAIN_CATEGORY) {
            this.selectedCategory.attributes.SUB_CATEGORY = null;
            this.selectedCategory.attributes.INCIDENT_TYPE = null;
        }
        this.showMainCategoryAlert = false;
        console.log("selected category: " + categoryName);
        this.currentSubCategory = "";
        this.selectedCategory.attributes.MAIN_CATEGORY = categoryName;
        var index = this.categories.findIndex(function (item) {
            return item.MAIN_CATEGORY === categoryName;
        });
        this.filteredSubcategories = this.categories[index].SUBCATEGORIES;
    };
    CategoryComponent.prototype.onSelectSubCategory = function (subCategoryName) {
        this.showSubcategoryAlert = false;
        this.selectedCategory.attributes.SUB_CATEGORY = subCategoryName;
        console.log(this.filteredSubcategories);
        var index = this.filteredSubcategories.findIndex(function (item) {
            return item.SUB_CATEGORY == subCategoryName;
        });
        this.filteredTypes = this.filteredSubcategories[index].TYPES;
    };
    CategoryComponent.prototype.onSelectTypeCategory = function (type) {
        this.showTypeAlert = false;
        type = type.split(",,");
        this.selectedCategory.attributes.INCIDENT_TYPE = type[0];
        this.categoryID = type[1];
    };
    CategoryComponent.prototype.submitCategory = function () {
        var _this = this;
        console.log("submitting category");
        console.log(this.selectedCategory);
        if (this.selectedCategory.attributes.MAIN_CATEGORY == null) {
            this.showMainCategoryAlert = true;
            console.log("please select a category");
        }
        else if (this.selectedCategory.attributes.SUB_CATEGORY == null || this.filteredSubcategories == []) {
            this.showSubcategoryAlert = true;
            console.log("please select a subcategory");
        }
        else if (this.categoryID == -1 || this.categoryID == null) {
            console.log(this.filteredTypes);
            if (this.filteredTypes.length == 0) {
                this.selectedCategory.attributes.INCIDENT_TYPE = null;
                if (this.filteredSubcategories.length > 0) {
                    var index = this.filteredSubcategories.findIndex(function (item) {
                        return item.SUB_CATEGORY === _this.selectedCategory.attributes.SUB_CATEGORY;
                    });
                    this.categoryID = this.filteredSubcategories[index].CATEGORY_ID;
                    console.log("retrieved category id: " + this.categoryID);
                    var id = this.categoryID.toString();
                    this.categorySaved.emit(id);
                    this.hide();
                }
                else {
                    this.showSubcategoryAlert = true;
                }
            }
            else {
                this.showTypeAlert = true;
                console.log("Please select an incident type");
            }
        }
        else if (this.categoryID != -1) {
            if (this.filteredTypes.length == 0) {
                this.selectedCategory.attributes.INCIDENT_TYPE = null;
                console.log("category id: " + this.categoryID);
                var id = this.categoryID.toString();
                this.categorySaved.emit(id);
                this.hide();
            }
            else if (this.selectedCategory.attributes.INCIDENT_TYPE == null) {
                this.showTypeAlert = true;
            }
            else {
                console.log("category id: " + this.categoryID);
                var id = this.categoryID.toString();
                this.categorySaved.emit(id);
                this.hide();
            }
        }
    };
    CategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    return CategoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CategoryComponent.prototype, "currentMainCategory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CategoryComponent.prototype, "currentSubCategory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CategoryComponent.prototype, "currentType", void 0);
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

module.exports = "<div class=\"main-container\">\n    <div id=\"main-content\" class=\"max-height-width\">\n        <div id=\"incidents-container\" class=\"col-sm-8\">\n            <div id=\"workspace\" class=\"row\">\n                <div id=\"workspace-data\" class=\"col-sm-3\">\n                    <div id=\"button-container\">\n                        <button class=\"btn btn-primary\" (click)=\"newReport();\">New Report</button>\n                    </div>\n                    <incidents-component></incidents-component>\n                </div>\n                <div id=\"workspace-main\" class=\"col-sm-9\">\n                    <div id=\"incidents-dashboard\" class=\"panel panel-default\">\n                        <div class=\"panel-body\">\n                            <div class=\"quarter-box\" *ngFor=\"let report of reportsInWorkspace\">\n                                <report-summary [inputReport]=\"report\"></report-summary>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      \n        <div id=\"order-2\" class=\"col-sm-4 height-100 flex flex-column\">\n            <div id=\"top\" class=\"col-sm-12 height-50\">\n                <timer-component></timer-component>\n            </div>\n            \n            <div id=\"bottom\" class=\"col-sm-12 height-50 flex\">\n                <div id=\"left\" class=\"height-100\">\n                    <staff-component></staff-component>                \n                </div>\n                <div id=\"right\" class=\"height-100\">\n                    <div class=\"height-50\">\n                        <div class=\"panel panel-default height-100\">\n                            <div class=\"panel-heading\">\n                                <span class=\"glyphicon glyphicon-tasks glyphicon-heading\"></span>\n                                <span class=\"panel-header\">Resources</span>\n                            </div>\n                            <div class=\"panel-body\"></div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"height-50\">\n                        <div class=\"panel panel-default height-100\">\n                            <div class=\"panel-heading\">\n                                <span class=\"glyphicon glyphicon-pencil glyphicon-heading\"></span>\n                                <span class=\"panel-header\">Notepad</span>\n                            </div>\n                            <div class=\"panel-body\">\n                                <!-- <ul class=\"nav nav-tabs\">\n                                    <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Resources</a></li>\n                                    <li><a data-toggle=\"tab\" href=\"#menu1\">Notepad</a></li>\n                                </ul> -->\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n            \n        </div>\n\n        <!-- <div class=\"row\">\n            <div id=\"left-panels\" class=\"col-sm-2 side-container\">\n                <staff-component></staff-component>\n            </div>\n            <div id=\"right-panels\" class=\"col-sm-2 side-container\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <span class=\"glyphicon glyphicon-tasks glyphicon-heading\"></span>\n                        <span class=\"panel-header\">Workflow Prompt</span>\n                    </div>\n                    <div class=\"panel-body\"></div>\n                </div>\n    \n                <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">\n                            <span class=\"glyphicon glyphicon-stats glyphicon-heading\"></span>\n                            <span class=\"panel-header\">Stats</span>\n                        </div>\n                        <div class=\"panel-body\">\n                        </div>\n                    </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <span class=\"glyphicon glyphicon-info-sign glyphicon-heading\"></span>\n                        <span class=\"panel-header\">Info</span>\n                    </div>\n                    <div class=\"panel-body\">\n                        <ul class=\"nav nav-tabs\">\n                            <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Resources</a></li>\n                            <li><a data-toggle=\"tab\" href=\"#menu1\">Notepad</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n      \n\n      \n  </div>\n    \n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
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
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['login']);
        }
        else {
            if (this.userService.isGuard()) {
                this.router.navigate(['guard-app/dashboard']);
            }
        }
        // Web socket
        var wss = new WebSocket(__WEBPACK_IMPORTED_MODULE_5__util_config_service__["a" /* Config */].LogInWebSocketURI);
        wss.onopen = function () {
            console.log("Socket has been opened!");
        };
        wss.onmessage = function (message) {
            var messageObj = JSON.parse(message.data);
            console.log("Received data from websocket: ", messageObj);
        };
    }
    DashboardComponent.prototype.listener = function (data) {
        var messageObj = data;
        console.log("Received data from websocket: ", messageObj);
    };
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

/***/ "../../../../../src/app/component/generic-element/generic-element.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details-body\">\n    <div class=\"x-container\">\n        <span class=\"glyphicon glyphicon-remove glyphicon-btn\"  (click)=\"removeElementFromReport()\"></span>        \n    </div>\n\n    <div class=\"detail col-12 col-sm-3\">\n        <span class=\"field-title\">Item Type <span class=\"required-asterisk\">*</span></span>\n        <input class=\"form-control\" type=\"text\" \n            [(ngModel)]=\"newElement.attributes.TYPE\"/>\n    </div>\n    <div class=\"detail col-12 col-sm-3\">\n        <span class=\"field-title\">Description <span class=\"required-asterisk\"></span></span>\n        <input class=\"form-control\" type=\"text\" \n            [(ngModel)]=\"newElement.attributes.DESCRIPTION\"/>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/generic-element/generic-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_element_generic_element__ = __webpack_require__("../../../../../src/app/component/generic-element/generic-element.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenericElementComponent = (function () {
    function GenericElementComponent(reportService) {
        this.reportService = reportService;
        this.newElement = new __WEBPACK_IMPORTED_MODULE_2__generic_element_generic_element__["a" /* GenericElement */]();
    }
    GenericElementComponent.prototype.addElementToReport = function () {
        this.reportService.addIncidentElement(this.newElement);
    };
    GenericElementComponent.prototype.removeElementFromReport = function () {
        this.reportService.removeIncidentElement(this.newElement, __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].GenericElementTable);
        this.reference.destroy();
    };
    GenericElementComponent.prototype.ngOnInit = function () {
        this.addElementToReport();
    };
    return GenericElementComponent;
}());
GenericElementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'generic-element-component',
        template: __webpack_require__("../../../../../src/app/component/generic-element/generic-element.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_new_report_service__["a" /* NewReportService */]) === "function" && _a || Object])
], GenericElementComponent);

var _a;
//# sourceMappingURL=generic-element.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/generic-element/generic-element.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericElement; });
/* unused harmony export ElementAttributes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");

var GenericElement = (function () {
    function GenericElement() {
        this.attributes = new ElementAttributes();
        this.table = __WEBPACK_IMPORTED_MODULE_0__util_config_service__["a" /* Config */].GenericElementTable;
    }
    return GenericElement;
}());

var ElementAttributes = (function () {
    function ElementAttributes() {
    }
    return ElementAttributes;
}());

//# sourceMappingURL=generic-element.js.map

/***/ }),

/***/ "../../../../../src/app/component/guard-app/guard-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-12\n                      col-lg-6 col-lg-offset-3 col-lg-offset-right-3\n                      no-padding\">\n                <ul id=\"guard-nav-tabs\" class=\"nav nav-tabs guard-container\">\n                  <li class=\"active\"><a data-toggle=\"pill\" href=\"#assignedReports\">ASSIGNED</a></li>\n                  <li><a data-toggle=\"pill\" href=\"#tempReports\">CREATED</a></li>\n                </ul>\n\n                <div class=\"tab-content\">\n                  <div id=\"assignedReports\" class=\"tab-pane fade in active\">\n                    <div class=\"flex-container\">\n                        <div class=\"flex-item panel panel-default\" *ngFor=\"let incident of assignedIncidents\" (click)=\"viewReport(incident)\">\n                            <div class=\"panel-heading\">\n                                <h4 class=\"panel-title pb-sm\">\n                                    {{incident.attributes.REPORT_ID}}\n                                </h4>  \n                                <div class=\"mt-1\">\n                                    <span>{{incident.category.attributes.MAIN_CATEGORY}}</span><span *ngIf='incident.category.attributes.SUB_CATEGORY != \"\"'>, {{incident.category.attributes.SUB_CATEGORY}}</span><span *ngIf='incident.category.attributes.INCIDENT_TYPE != \"\"'>, {{incident.category.attributes.INCIDENT_TYPE}}</span>\n                                </div>\n                                <div class=\"mt-1\" *ngIf=\"incident.incidentElements['Location'][0]\">\n                                    <span>{{incident.incidentElements['Location'][0].attributes.CITY}}</span><span *ngIf=\"incident.incidentElements['Location'][0].attributes.BUILDING_NAME != ''\">, {{incident.incidentElements['Location'][0].attributes.BUILDING_NAME}}</span><span *ngIf=\"incident.incidentElements['Location'][0].attributes.ROOM_NUMBER != ''\">, {{incident.incidentElements['Location'][0].attributes.ROOM_NUMBER}}</span>\n                                </div>                       \n                            </div>                    \n                            <div class=\"panel-body card-text-secondary\">\n                                <div class=\"report-content\">\n                                    {{incident.attributes.EXECUTIVE_SUMMARY}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                  <div id=\"tempReports\" class=\"tab-pane fade\">\n                    <div class=\"flex-container\">\n                        <div class=\"flex-item panel panel-default\" *ngFor=\"let incident of createdIncidents\" (click)=\"viewReport(incident)\">\n                            <div class=\"panel-heading\">\n                                <h4 class=\"panel-title pb-sm\">\n                                    {{incident.attributes.REPORT_ID}}\n                                </h4>  \n                                <div class=\"mt-1\">\n                                    <span>{{incident.category.attributes.MAIN_CATEGORY}}</span><span *ngIf='incident.category.attributes.SUB_CATEGORY != \"\"'>, {{incident.category.attributes.SUB_CATEGORY}}</span><span *ngIf='incident.category.attributes.INCIDENT_TYPE != \"\"'>, {{incident.category.attributes.INCIDENT_TYPE}}</span>\n                                </div>\n                                <div class=\"mt-1\" *ngIf=\"incident.incidentElements['Location'][0]\">\n                                    <span>{{incident.incidentElements['Location'][0].attributes.CITY}}</span><span *ngIf=\"incident.incidentElements['Location'][0].attributes.BUILDING_NAME != ''\">, {{incident.incidentElements['Location'][0].attributes.BUILDING_NAME}}</span><span *ngIf=\"incident.incidentElements['Location'][0].attributes.ROOM_NUMBER != ''\">, {{incident.incidentElements['Location'][0].attributes.ROOM_NUMBER}}</span>\n                                </div>                       \n                            </div>                    \n                            <div class=\"panel-body card-text-secondary\">\n                                <div class=\"report-content\">\n                                    {{incident.attributes.EXECUTIVE_SUMMARY}}\n                                </div>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"row\">\n            <footer class=\"panel panel-default guard-app-menu\">\n                <button class=\"btn btn-circle guard-menu-button card-text-primary btn-primary\" (click)=\"newReport();\">\n                    <span class=\"glyphicon glyphicon-plus\"></span>\n                </button>\n            </footer>\n        </div> -->\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/component/guard-app/guard-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardDashboardComponent; });
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





var GuardDashboardComponent = (function () {
    function GuardDashboardComponent(incidentService, userService, http, router) {
        this.incidentService = incidentService;
        this.userService = userService;
        this.http = http;
        this.router = router;
    }
    ;
    GuardDashboardComponent.prototype.getAssignedIncidents = function () {
        this.user = this.userService.getCurrentUser();
        this.incidentService.getIncidents().then(function (returnedIncidents) {
            console.log("returned incidents: ", returnedIncidents);
        });
    };
    GuardDashboardComponent.prototype.getCreatedIncidents = function () {
        var _this = this;
        this.incidentService.getCreatedByIncidents().then(function (returnedIncidents) {
            var userAccountID = _this.userService.getAccountID();
            _this.createdIncidents = returnedIncidents.filter(function (i) { return i.attributes.REPORT_ID == userAccountID; });
        });
    };
    GuardDashboardComponent.prototype.viewReport = function (incident) {
        console.log("view report id = " + incident.attributes.REPORT_ID);
        this.router.navigate(['guard-app/report', incident.attributes.REPORT_ID]);
    };
    GuardDashboardComponent.prototype.newReport = function () {
        console.log("new report");
        this.router.navigate(['new-report']);
    };
    GuardDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAssignedIncidents();
        this.getCreatedIncidents();
        this.incidentService.reportsInList
            .subscribe(function (reports) {
            _this.createdIncidents = reports
                .filter(function (i) { return _this.incidentService.userCreatedReport(i); });
            _this.assignedIncidents = reports
                .filter(function (i) { return _this.incidentService.reportAssignedToThisUserTest(i); });
        });
    };
    return GuardDashboardComponent;
}());
GuardDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'guard-dashboard',
        template: __webpack_require__("../../../../../src/app/component/guard-app/guard-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/guard-app.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], GuardDashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=guard-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/guard-app/guard-incident.component.html":
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<!-- <button class=\"btn btn-circle guard-button-navbar card-text-primary\" (click)=\"viewAllReports()\">\n    <span class=\"glyphicon glyphicon-chevron-left ml-1 mr-sm\"></span> \n    All Reports\n</button> -->\n\n<div name=\"alertMessage\" *ngIf=\"showAlert\" [class]=\"alertClass\">{{alertMessage}}\n</div>\n\n<div class=\"container-fluid main-content guard-body\">\n    <div class=\"row\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\n                            col-sm-offset-3\n                            col-sm-offset-right-3\n                            col-md-offset-3\n                            col-md-offset-right-3\n                            col-lg-offset-3\n                            col-lg-offset-right-3\">\n                    <div class=\"panel panel-default guard-container\">\n                        <div class=\"panel-heading pb-0 pt-1\" *ngIf=\"incident\">\n                          <div *ngIf=\"incident.attributes.TEMPORARY_REPORT == 1\">\n                            <h5> TEMP Report # {{incident.attributes.REPORT_ID}}\n                            </h5>\n                          </div>\n                          <div *ngIf=\"incident.attributes.TEMPORARY_REPORT == 0\">\n                            <h5>Report # {{incident.attributes.REPORT_ID}}\n                            </h5>\n\n                            <!-- <h5>\n                                <span class=\"mr-5\" style=\"display:block\" (dblclick)=\"modalCategory.show()\">\n                                    Category {{incident.category.MAIN_CATEGORY}}  -->\n                            <!-- </h5> -->\n                          </div>\n                        </div>\n                        <category-component #modalCategory\n                            currentMainCategory=\"{{incident.category.attributes.MAIN_CATEGORY}}\"\n                            currentSubCategory=\"{{incident.category.attributes.SUB_CATEGORY}}\"\n                            currentType=\"{{incident.category.attributes.INCIDENT_TYPE}}\"\n                            (categorySaved)=\"changeCategory($event)\">\n                        </category-component>\n                        <div class=\"panel-group\" id=\"accordion\">\n                            <div class=\"panel panel-default ml-1 mr-1\">\n                                <div class=\"panel-heading collapsable-heading\">\n                                    <h4 class=\"panel-title\">\n                                        <a  class=\"accordion-toggle\"\n                                            data-toggle=\"collapse\"\n                                            href=\"#collapseStatus\">\n                                          Status\n                                        </a>\n                                    </h4>\n                                </div>\n                                <div id=\"collapseStatus\" class=\"panel-collapse collapse in\">\n                                    <div class=\"panel-body lh-1\" *ngIf=\"incident\">\n                                        <status-component #modalStatus (statusSaved)=\"changeStatus($event)\"></status-component>\n                                        <span [id]=\"statuses[incident.attributes.STATUS]\"\n                                           (click)=\"modalStatus.show()\">\n                                            {{statuses[incident.attributes.STATUS]}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default ml-1 mr-1\">\n                                    <div class=\"panel-heading collapsable-heading\">\n                                        <h4 class=\"panel-title\">\n                                            <a  class=\"accordion-toggle\"\n                                                data-toggle=\"collapse\"\n                                                href=\"#collapseCategory\">\n                                                Category\n                                            </a>\n                                        </h4>\n                                    </div>\n                                    <div id=\"collapseCategory\" class=\"panel-collapse collapse in\">\n                                        <div class=\"panel-body lh-1\" *ngIf=\"incident\">\n                                            <span [id]=\"incident.category.CATEGORY_ID\"\n                                                (click)=\"modalCategory.show()\">\n                                                {{incident.category.attributes.MAIN_CATEGORY}},\n                                                <!-- keep the span below in line to prevent insertion of space before comma -->\n                                                {{incident.category.attributes.SUB_CATEGORY}}<span *ngIf=\"incident.category.attributes.INCIDENT_TYPE\">,\n                                                    {{incident.category.attributes.INCIDENT_TYPE}}\n                                                </span>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            <div class=\"panel panel-default ml-1 mr-1\">\n                                <div class=\"panel-heading collapsable-heading\">\n                                    <h4 class=\"panel-title\">\n                                        <a  class=\"accordion-toggle\"\n                                            data-toggle=\"collapse\"\n                                            href=\"#collapseLocation\">\n                                            Location\n                                        </a>\n                                    </h4>\n                                </div>\n                                <div id=\"collapseLocation\" class=\"panel-collapse collapse in\">\n                                    <div class=\"panel-body details-body lh-1\" *ngIf=\"incident\">\n                                        <span *ngFor=\"let location of incident.incidentElements['Location']\" \n                                            [id]=\"location.attributes.LOCATION_ID\"\n                                            (click)=\"this.modalLocation.show($event)\">\n                                            {{location.attributes.CITY}}<span *ngIf='location.attributes.BUILDING_NAME != \"\"'>,</span>                                            \n                                            {{location.attributes.BUILDING_NAME}}<span *ngIf='location.attributes.ROOM_NUMBER != \"\"'>,</span>\n                                            {{location.attributes.ROOM_NUMBER}}    \n                                            <!-- {{location.attributes.DEPARTMENT}}  -->\n                                            <br>\n                                        </span>\n                                        <button class=\"btn btn-default btn-sm pull-right\" (click)=\"modalLocation.show($event)\">\n                                            <span [id]=\"-1\" class=\"glyphicon glyphicon-plus\"></span>\n                                            Add Location\n                                        </button>\n                                    </div>\n                                </div>\n                                <location-modal-component #modalLocation\n                                    (locationSaved)=\"changeLocation($event)\"\n                                    (triggerLocationRemove) = \"removeLocation()\">\n                                </location-modal-component>\n                            </div>\n\n                            <div class=\"panel panel-default ml-1 mr-1\">\n                                <div class=\"panel-heading collapsable-heading\">\n                                    <h4 class=\"panel-title\">\n                                        <a  class=\"accordion-toggle\"\n                                            data-toggle=\"collapse\"\n                                            href=\"#collapseExecSummary\">\n                                            Executive Summary\n                                        </a>\n                                    </h4>\n                                </div>\n                                <div id=\"collapseExecSummary\" class=\"panel-collapse collapse in\">\n                                    <div class=\"panel-body\">\n                                        <span *ngIf=\"!isEditingSummary\" (click)=\"toggleEditMode('summary')\">{{incident.attributes.EXECUTIVE_SUMMARY}}</span>\n                                        <span *ngIf=\"incident.attributes.EXECUTIVE_SUMMARY == ''\">\n                                            <button (click)=\"toggleEditMode('summary')\"\n                                                    class=\"btn btn-sm btn-default pull-right mt-2 mr-1 mb-1 ml-2\">\n                                                <span class=\"glyphicon glyphicon-plus\"></span> Add Summary\n                                            </button>\n                                        </span>\n                                        <div *ngIf=\"isEditingSummary\">\n                                            <textarea [(ngModel)]=\"newSummary\" class=\"form-control\" rows=\"5\"></textarea>\n                                            <button (click)=\"revertChanges('summary')\"\n                                                    class=\"btn btn-sm btn-secondary pull-right mt-2 mr-1 mb-1 ml-2\">\n                                                <span class=\"glyphicon glyphicon-remove\"></span> Cancel\n                                            </button>\n                                            <button (click)=\"saveReport('summary')\"\n                                                    class=\"btn btn-sm btn-primary pull-right mt-2 mb-1\">\n                                                <span class=\"glyphicon glyphicon-floppy-disk\"></span> Save\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default ml-1 mr-1\">\n                                <div class=\"panel-heading collapsable-heading\">\n                                    <!-- <span class=\"glyphicon card-text-secondary mr-1\" [ngClass]=\"{'glyphicon-chevron-up': openedPanel , 'glyphicon-chevron-down': !openedPanel }\" aria-hidden=\"true\" style=\"float: right;\"></span>                             -->\n                                    <h4 class=\"panel-title\">\n                                        <a  class=\"accordion-toggle collapsed\"\n                                            data-toggle=\"collapse\"\n                                            href=\"#collapseDescription\">\n                                            Description\n                                        </a>\n                                    </h4>\n                                </div>\n                                <div id=\"collapseDescription\" ng-controller=\"editable\" class=\"panel-collapse collapse\">\n                                    <div class=\"panel-body\">\n                                        <span *ngIf=\"!isEditingDesc\" (click)=\"toggleEditMode('description')\">{{incident.attributes.DESCRIPTION}}</span>\n                                        <span *ngIf=\"incident.attributes.DESCRIPTION == ''\">\n                                            <button (click)=\"toggleEditMode('description')\"\n                                                    class=\"btn btn-sm btn-default pull-right mt-2 mr-1 mb-1 ml-2\">\n                                                <span class=\"glyphicon glyphicon-plus\"></span> Add Description\n                                            </button>\n                                        </span>\n                                        <div *ngIf=\"isEditingDesc\">\n                                            <textarea [(ngModel)]=\"newDescription\" class=\"form-control\" rows=\"5\"></textarea>\n                                            <button (click)=\"revertChanges('description')\"\n                                                class=\"btn btn-sm btn-secondary pull-right mt-2 mr-1 mb-1 ml-2\">\n                                                <span class=\"glyphicon glyphicon-remove\"></span> Cancel\n                                            </button>\n                                            <button (click)=\"saveReport('description')\"\n                                            class=\"btn btn-sm btn-primary pull-right mt-2 mb-1\">\n                                            <span class=\"glyphicon glyphicon-floppy-disk\"></span> Save\n                                        </button>\n                                        </div>\n                                    </div>\n                            </div>\n                        </div>\n\n                        \n                        <div class=\"panel panel-default ml-1 mr-1\">\n                            <div class=\"panel-heading collapsable-heading\">\n                                <!-- <span class=\"glyphicon card-text-secondary mr-1\" [ngClass]=\"{'glyphicon-chevron-up': openedPanel , 'glyphicon-chevron-down': !openedPanel }\" aria-hidden=\"true\" style=\"float: right;\"></span>                             -->\n                                <h4 class=\"panel-title\">\n                                    <a  class=\"accordion-toggle collapsed\"\n                                        data-toggle=\"collapse\"\n                                        href=\"#collapsePersons\">\n                                        Persons\n                                    </a>\n                                </h4>\n                            </div>\n                            <div id=\"collapsePersons\" class=\"panel-collapse collapse\">\n                                <div class=\"panel-body details-body lh-1 mt-1\" *ngIf=\"incident\">\n                                    <span *ngFor=\"let person of incident.incidentElements['Person']\">\n                                        <span   [id]=\"person.attributes.PERSON_ID\"\n                                                (click)=\"editPerson(person)\">\n                                            Name: {{person.attributes.FIRST_NAME}}\n                                            {{person.attributes.LAST_NAME}} &nbsp;\n                                            Phone Number: {{person.attributes.PHONE_NUMBER}}\n                                        </span>\n                                        <br>\n                                    </span>\n                                    <div *ngIf=\"isEditingPerson\">\n                                        <div class=\"clear-float\"></div>\n                                        <span class=\"field-title mt-2\" *ngIf=\"this.currentPersonIndex == -1\">\n                                            Add a New Person\n                                        </span>\n                                        <span class=\"field-title mt-2\" *ngIf=\"this.currentPersonIndex != -1\">\n                                            <b>Edit Person:</b> \n                                            {{this.currentPerson.attributes.FIRST_NAME}} \n                                            {{this.currentPerson.attributes.LAST_NAME}} \n                                        </span>\n                                        <span class=\"ml-2\" *ngIf=\"this.currentPersonIndex != -1\">                \n                                            <button (click)=\"removePersonAlert()\" \n                                                class=\"btn btn-sm btn-primary\"\n                                                *ngIf=\"button_id != -1\"\n                                                id=\"{{button_id}}\">\n                                                <span class=\"glyphicon glyphicon-trash\"></span> \n                                                Delete\n                                            </button>\n                                        </span>\n                                        <person-component \n                                            #personEditor \n                                            (addPersonToGuardReport)=\"addPerson($event)\"\n                                            (cancelEditor)=\"toggleEditMode('person')\">\n                                        </person-component>\n                                        <div class=\"clear-float\"></div>                                              \n                                    </div> \n                                    <div class=\"clear-float\"></div>                                    \n                                    <button *ngIf=\"!isEditingPerson\"\n                                            id=\"-1\"\n                                            (click)=\"editPerson($event)\" \n                                            class=\"btn btn-sm btn-default pull-right mt-2 mr-1 mb-1 ml-2\">\n                                        <span class=\"glyphicon glyphicon-plus\"></span> Add Person\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div id=\"removePersonAlert\" class=\"alert modal-fade\" *ngIf=\"isDeletingPerson\">\n                            <div class=\"modal-dialog\">\n                                <div class=\"modal-content\">\n                                    <button type=\"button\" class=\"close\" (click)=\"removePersonAlert()\" aria-hidden=\"true\">×</button>\n                            <!-- <div class=\"bottom-links flex-column\" *ngIf=\"!personExists\"> -->\n                                    <div class=\"alert-body mt-1\">\n                                        Are you sure you want to remove this person from the report?\n                                    </div>\n                                    <div class=\"modal-footer\">\n                                        <button class=\"btn btn-sm btn-secondary pull-right mr-1 ml-2\" (click)=\"removePersonAlert()\">\n                                            <span class=\"glyphicon glyphicon-remove\"></span> Cancel\n                                        </button>                \n                                        <button class=\"btn  btn-sm btn-primary pull-right mr-1 ml-2\" (click)=\"removePerson()\">\n                                            <span class=\"glyphicon glyphicon-trash\"></span> Delete\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div class=\"row\">\n        <footer class=\"panel\">\n            <!-- <button class=\"btn btn-circle guard-menu-button-right card-text-primary btn-primary\" (click)=\"viewAllReports()\">\n                <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </button> -->\n            <!-- <button class=\"btn btn-circle guard-menu-button-right card-text-primary btn-primary\" (click)=\"saveReport()\">\n                <span class=\"glyphicon glyphicon-floppy-save\"></span>\n            </button> -->\n            <!-- <button class=\"button guard-menu-button card-text-primary ml-1\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n                New\n            </button>\n            <a routerLink=\"../../reports-all\">\n                <button class=\"button guard-menu-button card-text-primary ml-1\">\n                <span class=\"glyphicon glyphicon-th-large\"></span>\n                View All\n                </button>\n            </a> -->\n        </footer>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/component/guard-app/guard-incident.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardIncidentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_incident_element_service__ = __webpack_require__("../../../../../src/app/service/incident-element.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__location_location__ = __webpack_require__("../../../../../src/app/component/location/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__location_location_modal_component__ = __webpack_require__("../../../../../src/app/component/location/location-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__category_category_component__ = __webpack_require__("../../../../../src/app/component/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_person_person__ = __webpack_require__("../../../../../src/app/component/person/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__person_person_component__ = __webpack_require__("../../../../../src/app/component/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util_dom_service__ = __webpack_require__("../../../../../src/app/util/dom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_report_inline_edit_component__ = __webpack_require__("../../../../../src/app/component/report/inline-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__status_status_component__ = __webpack_require__("../../../../../src/app/component/status/status.component.ts");
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
    function GuardIncidentComponent(incidentsService, incidentElementService, categoryService, userService, router, http, route, domService) {
        this.incidentsService = incidentsService;
        this.incidentElementService = incidentElementService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.domService = domService;
        this.title = 'SFU Incident Reporting System';
        this.incident = new __WEBPACK_IMPORTED_MODULE_4__report_incident__["a" /* Incident */]();
        this.locationModalStr = "location-modal";
        this.statuses = ['Created', 'En Route', 'Working', 'Resolved', 'Closed'];
        this.isEditingDesc = false;
        this.newDescription = "";
        this.isEditingSummary = false;
        this.newSummary = "";
        this.isEditingPerson = false;
        this.currentPerson = new __WEBPACK_IMPORTED_MODULE_12__component_person_person__["a" /* Person */]();
        this.newPersonFirstName = "";
        this.newPersonLastName = "";
        this.newPersonTelephone = "";
        this.isDeletingPerson = false;
        this.alertMessage = "";
        this.showAlertDescription = false;
        this.showAlert = false;
        this.alertClass = "";
        this.incidents = [{ editing: false }];
        this.editContent = function (incident) {
            incident.editing = true;
        };
        this.doneEditing = function (incident) {
            incident.editing = false;
        };
        if (this.userService.isLoggedIn() == false) {
            this.router.navigate(['login']);
        }
    }
    ;
    GuardIncidentComponent.prototype.viewAllReports = function () {
        this.router.navigate(['guard-app/dashboard']);
    };
    GuardIncidentComponent.prototype.toggleEditMode = function (attribute) {
        if (attribute == null)
            return;
        if (attribute.toLowerCase() === "description")
            this.isEditingDesc = !this.isEditingDesc;
        else if (attribute.toLowerCase() === "summary")
            this.isEditingSummary = !this.isEditingSummary;
        else if (attribute.toLocaleLowerCase() === "person") {
            this.isEditingPerson = !this.isEditingPerson;
        }
    };
    GuardIncidentComponent.prototype.revertChanges = function (attribute) {
        if (attribute == null)
            return;
        if (attribute.toLowerCase() === "description") {
            this.newDescription = this.incident.attributes.DESCRIPTION;
        }
        else if (attribute.toLowerCase() === "summary") {
            this.newSummary = this.incident.attributes.EXECUTIVE_SUMMARY;
        }
        else if (attribute.toLowerCase() === "person") {
            this.newPersonFirstName = this.incident.incidentElements['Person'][this.currentPersonIndex].attributes.FIRST_NAME;
            this.newPersonLastName = this.incident.incidentElements['Person'][this.currentPersonIndex].attributes.LAST_NAME;
            this.newPersonTelephone = this.incident.incidentElements['Person'][this.currentPersonIndex].attributes.PHONE_NUMBER;
        }
        this.toggleEditMode(attribute);
    };
    GuardIncidentComponent.prototype.toggleSuccessMessage = function () {
        this.showAlert = !this.showAlert;
    };
    GuardIncidentComponent.prototype.incidentSavedAlert = function () {
        var _this = this;
        this.toggleSuccessMessage();
        this.alertMessage = "Successfully saved";
        this.alertClass = "alert alert-success top-alert";
        setTimeout(function () {
            _this.toggleSuccessMessage();
        }, 1800);
    };
    GuardIncidentComponent.prototype.incidentSavedErrorAlert = function () {
        var _this = this;
        this.toggleSuccessMessage();
        this.alertMessage = "Edit failed";
        this.alertClass = "alert alert-danger top-alert";
        setTimeout(function () {
            _this.toggleSuccessMessage();
        }, 1800);
    };
    GuardIncidentComponent.prototype.saveReport = function (attribute) {
        var _this = this;
        this.incident.attributes.DESCRIPTION = this.newDescription;
        this.incident.attributes.EXECUTIVE_SUMMARY = this.newSummary;
        this.incidentsService.update(this.incident)
            .then(function (returnedIncident) {
            if (returnedIncident != null) {
                _this.incidentSavedAlert();
            }
            else {
                _this.incidentSavedErrorAlert();
            }
        });
        this.toggleEditMode(attribute);
    };
    GuardIncidentComponent.prototype.showModal = function () {
        var locationModal = document.getElementById("modalLocation");
        locationModal.style.visibility = "true";
        // setTimeout(() => locationModal.visibleAnimate = true, 100);
    };
    GuardIncidentComponent.prototype.hideModal = function () {
        var locationModal = document.getElementById("modalLocation");
        setTimeout(function () { return locationModal.style.visibility = "false"; }, 300);
    };
    GuardIncidentComponent.prototype.editPerson = function (person) {
        this.toggleEditMode('person');
        if (person.attributes) {
            this.currentPerson = person;
            this.currentPersonIndex = person.attributes.PERSON_ID;
        }
        else if (person.target.id) {
            this.currentPersonIndex = person.target.id;
        }
    };
    GuardIncidentComponent.prototype.addPerson = function (personToAdd) {
        console.log("Person added ", personToAdd);
        console.log("ID to remove ", this.currentPersonIndex);
        if (this.currentPersonIndex == -1) {
            var incident = this.incidentElementService.addElement(this.incident, personToAdd)
                .then(function (incident) {
                return incident;
            });
        }
        else {
            var incident = this.incidentElementService.changeElement(this.incident, this.currentPersonIndex, personToAdd)
                .then(function (incident) {
                return incident;
            });
            console.log("returned incident ", incident);
        }
        if (Promise.resolve(incident) == null) {
            this.incidentSavedErrorAlert();
        }
        else {
            this.incidentSavedAlert();
        }
        this.toggleEditMode('person');
    };
    GuardIncidentComponent.prototype.removePersonAlert = function () {
        this.isDeletingPerson = !this.isDeletingPerson;
    };
    GuardIncidentComponent.prototype.removePerson = function () {
        this.isDeletingPerson = false;
        console.log("current person ", this.currentPersonIndex);
        var incident = this.incidentElementService.removeElement(this.incident, this.currentPersonIndex, __WEBPACK_IMPORTED_MODULE_15__util_config_service__["a" /* Config */].PersonTable)
            .then(function (incident) {
            return incident;
        });
        this.toggleEditMode('person');
    };
    GuardIncidentComponent.prototype.hideEditContent = function () {
        var contentToEdit = document.getElementById("contentToEdit");
        contentToEdit.style.visibility = "true";
        var editor = document.getElementById("editor");
        editor.style.visibility = "false";
    };
    GuardIncidentComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hideModal();
        }
    };
    GuardIncidentComponent.prototype.changeLocation = function (event) {
        var locationToAdd = this.locationModal.locationComponent.newLocation;
        var locationToRemove = -1;
        locationToRemove = this.locationModal.button_id;
        if (locationToRemove == -1) {
            // Add new location
            var incident = this.incidentElementService.addElement(this.incident, locationToAdd)
                .then(function (incident) {
                return incident;
            });
        }
        else {
            // Change existing location
            var incident = this.incidentElementService.changeElement(this.incident, locationToRemove, locationToAdd)
                .then(function (incident) {
                return incident;
            });
        }
        if (Promise.resolve(incident) == null) {
            this.incidentSavedErrorAlert();
        }
        else {
            this.incidentSavedAlert();
        }
        this.locationModal.locationComponent.newLocation = new __WEBPACK_IMPORTED_MODULE_8__location_location__["b" /* Location */](); // reset
        var locationToInsert = new __WEBPACK_IMPORTED_MODULE_8__location_location__["b" /* Location */]();
    };
    GuardIncidentComponent.prototype.removeLocation = function () {
        var locationToRemove = -1;
        locationToRemove = this.locationModal.button_id;
        var incident = this.incidentElementService.removeElement(this.incident, locationToRemove, __WEBPACK_IMPORTED_MODULE_15__util_config_service__["a" /* Config */].LocationTable)
            .then(function (incident) {
            return incident;
        });
        if (Promise.resolve(incident) == null) {
            this.incidentSavedErrorAlert();
        }
        else {
            this.incidentSavedAlert();
        }
        this.locationModal.locationComponent.newLocation = new __WEBPACK_IMPORTED_MODULE_8__location_location__["b" /* Location */](); // reset
        var locationToInsert = new __WEBPACK_IMPORTED_MODULE_8__location_location__["b" /* Location */]();
    };
    GuardIncidentComponent.prototype.changeCategory = function (newCategoryID) {
        this.incident.attributes.CATEGORY_ID = newCategoryID;
        var incident = this.incidentsService.changeIncidentCategory(this.incident, newCategoryID, this.categoryModal.selectedCategory)
            .then(function (incident) {
            return incident;
        });
        if (Promise.resolve(incident) == null) {
            this.incidentSavedErrorAlert();
        }
        else {
            this.incidentSavedAlert();
        }
    };
    GuardIncidentComponent.prototype.changeStatus = function (newStatus) {
        this.incident.attributes.STATUS = newStatus;
        var incident = this.incidentsService.update(this.incident)
            .then(function (incident) {
            return incident;
        });
        if (Promise.resolve(incident) == null) {
            this.incidentSavedErrorAlert();
        }
        else {
            this.incidentSavedAlert();
        }
    };
    GuardIncidentComponent.prototype.changeDescription = function () {
        var description = this.inlineEdit.value;
        this.incident.attributes.DESCRIPTION = description;
    };
    GuardIncidentComponent.prototype.changeSummary = function () {
        var summary = this.inlineEdit.value;
        this.incident.attributes.EXECUTIVE_SUMMARY = summary;
    };
    GuardIncidentComponent.prototype.changeIncidentCategory = function (incident, newCategoryID, selectedCategory) {
        incident.category.CATEGORY_ID = newCategoryID;
        incident.attributes.CATEGORY_ID = newCategoryID;
        incident.category.attributes.MAIN_CATEGORY = selectedCategory.attributes.MAIN_CATEGORY;
        incident.category.attributes.SUB_CATEGORY = selectedCategory.attributes.SUB_CATEGORY;
        incident.category.attributes.INCIDENT_TYPE = selectedCategory.attributes.INCIDENT_TYPE;
        incident.incidentElements[__WEBPACK_IMPORTED_MODULE_15__util_config_service__["a" /* Config */].IncidentCategoryKey]
            .splice(0, incident.incidentElements[__WEBPACK_IMPORTED_MODULE_15__util_config_service__["a" /* Config */].IncidentCategoryKey].length, incident.category);
        this.incidentsService.update(incident);
    };
    GuardIncidentComponent.prototype.newReport = function () {
        this.router.navigate(['new-report']);
    };
    GuardIncidentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.incidentsService.getIncident(+params.get('id'));
        })
            .subscribe(function (returnedIncident) {
            _this.incident = returnedIncident;
            _this.newDescription = _this.incident.attributes.DESCRIPTION;
            _this.newSummary = _this.incident.attributes.EXECUTIVE_SUMMARY;
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_16__component_report_inline_edit_component__["a" /* InlineEditComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_16__component_report_inline_edit_component__["a" /* InlineEditComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__component_report_inline_edit_component__["a" /* InlineEditComponent */]) === "function" && _c || Object)
], GuardIncidentComponent.prototype, "inlineEdit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_17__status_status_component__["a" /* StatusComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_17__status_status_component__["a" /* StatusComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__status_status_component__["a" /* StatusComponent */]) === "function" && _d || Object)
], GuardIncidentComponent.prototype, "statusModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_13__person_person_component__["a" /* PersonComponent */]),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_13__person_person_component__["a" /* PersonComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__person_person_component__["a" /* PersonComponent */]) === "function" && _e || Object)
], GuardIncidentComponent.prototype, "personEditor", void 0);
GuardIncidentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'guard-incident-component',
        template: __webpack_require__("../../../../../src/app/component/guard-app/guard-incident.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/guard-app.css")],
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_incident_service__["a" /* IncidentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__service_incident_element_service__["a" /* IncidentElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_incident_element_service__["a" /* IncidentElementService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__service_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__service_category_service__["a" /* CategoryService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_14__util_dom_service__["a" /* DomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__util_dom_service__["a" /* DomService */]) === "function" && _o || Object])
], GuardIncidentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=guard-incident.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/loading-spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-folding-cube {\n  margin: 20px auto;\n  width: 40px;\n  height: 40px;\n\n  /* Position on Page */\n  position: fixed;\n\n  left: 50%;\n  top: 35%;\n  /* End of Position on Page */\n\n  -webkit-transform: rotateZ(45deg);\n          transform: rotateZ(45deg);\n}\n\n.sk-folding-cube .sk-cube {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); \n}\n.sk-folding-cube .sk-cube:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(189, 35, 35);\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n          animation: sk-foldCubeAngle 2.4s infinite linear both;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n.sk-folding-cube .sk-cube2 {\n  -webkit-transform: scale(1.1) rotateZ(90deg);\n          transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube .sk-cube3 {\n  -webkit-transform: scale(1.1) rotateZ(180deg);\n          transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube .sk-cube4 {\n  -webkit-transform: scale(1.1) rotateZ(270deg);\n          transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube .sk-cube2:before {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.sk-folding-cube .sk-cube3:before {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s; \n}\n.sk-folding-cube .sk-cube4:before {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n@-webkit-keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  } \n}\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  }\n}\n\n.overlay {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background-color: rgba(0,0,0,0.3);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/loading-spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class =\"overlay\">\n    <div class=\"sk-folding-cube\">\n        <div class=\"sk-cube1 sk-cube\"></div>\n        <div class=\"sk-cube2 sk-cube\"></div>\n        <div class=\"sk-cube4 sk-cube\"></div>\n        <div class=\"sk-cube3 sk-cube\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/loading-spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnerComponent = (function () {
    /* http://tobiasahlin.com/spinkit/ for spinner source */
    function SpinnerComponent() {
    }
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'spinner-component',
        template: __webpack_require__("../../../../../src/app/component/loading-spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/loading-spinner/spinner.component.css")]
    })
    /* http://tobiasahlin.com/spinkit/ for spinner source */
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/location/location-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\"     \n    class=\"modal fade\"   \n    tabindex=\"-1\"     \n    [ngClass]=\"{'in': visibleAnimate}\"     \n    [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">     \n    <div class=\"modal-dialog\" role=\"document\">         \n        <div class=\"modal-content\">                                    \n            <div class=\"modal-header\">                     \n                <button type=\"button\" class=\"close\" (click)=\"hide()\" aria-label=\"Close\">                         \n                    <span aria-hidden=\"true\">&times;</span>                     \n                </button>                     \n                <h4 class=\"modal-title mt-2 mr-1\" *ngIf=\"button_id != -1\">Change current location <span>                \n                    <button (click)=\"removeLocation($event.target.id)\" \n                        class=\"btn btn-sm btn-secondary\"\n                        *ngIf=\"button_id != -1\"\n                        id=\"{{button_id}}\">\n                        <span class=\"glyphicon glyphicon-trash\"></span> \n                        Delete\n                        </button>\n                    </span>\n                </h4>             \n                <h4 class=\"modal-title mt-2\" *ngIf=\"button_id == -1\">Add location</h4>                             \n            </div>             \n            <location-component></location-component>                         \n            <div class=\"modal-footer mt-2 pt-2 mb-1\">                 \n                <button class=\"btn btn-sm btn-primary\" \n                        (click)=\"submitChanges($event.target.value)\" \n                        id=\"{{button_id}}\">\n                    <span class=\"glyphicon glyphicon-floppy-disk\"></span>                \n                    Save\n                </button>        \n                <button type=\"button\" class=\"btn btn-sm btn-secondary ml-2 mr-1\" (click)=\"hide()\">\n                    <span class=\"glyphicon glyphicon-remove\"></span>                        \n                    Cancel\n                </button>             \n</div>         \n</div>     \n</div> \n</div>"

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
        this.triggerLocationRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.visible = false;
        this.visibleAnimate = false;
    }
    LocationModalComponent.prototype.show = function (event) {
        var _this = this;
        this.locationComponent.resetLists();
        var target = event.target || event.srcElement || event.currentTarget;
        if (target.id) {
            var idAttr = target.id;
            this.button_id = idAttr;
        }
        else {
            this.button_id = -1;
        }
        this.locationComponent.updateCurrentLocation(this.button_id);
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
        var locationValid = this.locationComponent.validateNewLocation();
        if (locationValid) {
            this.locationComponent.newLocation.table = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].LocationTable;
            console.log(this.locationComponent.newLocation);
            this.locationSaved.emit(this.locationComponent.newLocation);
            this.hide();
        }
    };
    LocationModalComponent.prototype.removeLocation = function (id) {
        console.log("id ", id);
        this.triggerLocationRemove.emit(id);
        this.hide();
    };
    LocationModalComponent.prototype.ngOnInit = function () {
        document.getElementById('removeLocation').style.visibility = 'hidden';
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], LocationModalComponent.prototype, "triggerLocationRemove", void 0);
LocationModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'location-modal-component',
        template: __webpack_require__("../../../../../src/app/component/location/location-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/guard-app.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_new_report_service__["a" /* NewReportService */]) === "function" && _d || Object])
], LocationModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=location-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details-body\">\n    <div class=\"x-container\" id=\"removeLocation\">\n        <span class=\"glyphicon glyphicon-remove glyphicon-btn\" (click)=\"removeLocationFromReport()\"></span>        \n    </div>\n    <div class=\"detail col-12 col-sm-3\">\n        <div class=\"alertText modal-field-title mt-1\" *ngIf=\"showCampusAlert\">\n            Please select a campus\n        </div>\n        <span class=\"field-title\">Campus <span class=\"required-asterisk\">*</span></span>\n        <select class=\"form-control\" name=\"\" id=\"\" \n                [(ngModel)]=\"newLocation.attributes.CAMPUS_ID\" \n                (change)=\"onSelectCampus()\">\n            <option disabled \n                    [selected]=\"currentLocation.attributes.CAMPUS_ID\"\n                    *ngIf=\"currentLocation.attributes.CAMPUS_ID\">\n                {{currentLocation.attributes.CITY}}\n            </option>\n            <option disabled *ngIf=\"currentLocation.attributes.CAMPUS_ID\">──────────</option>            \n            <option *ngFor=\"let campus of locationMap\" \n                    [value]=\"campus.CAMPUS_ID\">\n                {{campus.CITY}}\n            </option>\n        </select>\n    </div>\n    <div class=\"detail col-12 col-sm-3\">\n        <span class=\"field-title\">Building</span>\n        <select class=\"form-control\" name=\"\" id=\"\" \n                [(ngModel)]=\"newLocation.attributes.BUILDING_NAME\" \n                (change)=\"onSelectBuilding()\">\n            <option disabled \n                    [selected] = \"currentLocation.attributes.BUILDING_NAME\"\n                    *ngIf=\"currentLocation.attributes.BUILDING_NAME\">\n                {{currentLocation.attributes.BUILDING_NAME}}\n            </option>\n            <option disabled *ngIf=\"currentLocation.attributes.BUILDING_NAME\">──────────</option>            \n            <option *ngFor=\"let building of buildings\" \n                    [value]=\"building.BUILDING_NAME\">\n                {{building.BUILDING_NAME}}\n            </option>\n        </select>\n    </div>\n    <div class=\"detail col-12 col-sm-3\">\n        <span class=\"field-title\">Room Number</span>\n        <select class=\"form-control\" name=\"\" id=\"\" \n                [(ngModel)]=\"newLocation.attributes.LOCATION_ID\" \n                (change)=\"onSelectRoom()\">\n            <option disabled \n                    [selected]=\"currentLocation.attributes.ROOM_NUMBER\"\n                    *ngIf=\"currentLocation.attributes.ROOM_NUMBER\">\n                {{currentLocation.attributes.ROOM_NUMBER}}\n            </option>\n            <option disabled *ngIf=\"currentLocation.attributes.ROOM_NUMBER\">──────────</option>            \n            <!-- <option> </option> -->\n            <option *ngFor=\"let room of rooms\" \n                    [value]=\"room.LOCATION_ID\">\n                    {{room.ROOM_NUMBER}}</option>                    \n        </select>\n    </div>\n</div> "

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
        this.currentLocation = new __WEBPACK_IMPORTED_MODULE_3__location__["b" /* Location */]();
        this.showCampusAlert = false;
        this.showBuildingAlert = false;
    }
    LocationComponent.prototype.validateNewLocation = function () {
        if (this.newLocation.attributes.CAMPUS_ID == null) {
            if (this.currentLocation.attributes.CAMPUS_ID != null) {
                this.newLocation.attributes.CAMPUS_ID = this.currentLocation.attributes.CAMPUS_ID;
            }
            else {
                this.showCampusAlert = true;
                return false;
            }
        }
        if (this.newLocation.attributes.CITY == null || this.newLocation.attributes.CITY == "") {
            if (this.currentLocation.attributes.CITY != "") {
                this.newLocation.attributes.CITY = this.currentLocation.attributes.CITY;
            }
        }
        if (this.newLocation.attributes.BUILDING_NAME == null || this.newLocation.attributes.BUILDING_NAME == "") {
            if (this.currentLocation.attributes.BUILDING_NAME != "") {
                this.newLocation.attributes.BUILDING_NAME = this.currentLocation.attributes.BUILDING_NAME;
            }
            else {
                this.showBuildingAlert = true;
                return false;
            }
        }
        if (this.newLocation.attributes.ROOM_NUMBER == null && this.currentLocation.attributes.ROOM_NUMBER != "") {
            this.newLocation.attributes.ROOM_NUMBER = this.currentLocation.attributes.ROOM_NUMBER;
        }
        return true;
    };
    LocationComponent.prototype.updateCurrentLocation = function (locationID) {
        var _this = this;
        if (locationID != -1) {
            this.locations.forEach(function (location) {
                if (location.attributes.LOCATION_ID == locationID) {
                    _this.currentLocation.attributes.CAMPUS_ID = locationID;
                    _this.currentLocation.attributes.CITY = location.attributes.CITY;
                    _this.currentLocation.attributes.BUILDING_NAME = location.attributes.BUILDING_NAME;
                    _this.currentLocation.attributes.ROOM_NUMBER = location.attributes.ROOM_NUMBER;
                }
            });
        }
        else {
            this.currentLocation.attributes.CAMPUS_ID = null;
            this.currentLocation.attributes.CITY = "";
            this.currentLocation.attributes.BUILDING_NAME = "";
            this.currentLocation.attributes.ROOM_NUMBER = "";
        }
    };
    LocationComponent.prototype.resetLists = function () {
        this.buildings = [];
        this.rooms = [];
        this.showCampusAlert = false;
        this.showBuildingAlert = false;
    };
    LocationComponent.prototype.addLocationToReport = function () {
        this.reportService.addIncidentElement(this.newLocation);
    };
    LocationComponent.prototype.removeLocationFromReport = function () {
        if (this.reference == null) {
            return;
        }
        //if ( this.newLocation != null && this.newLocation.attributes.LOCATION_ID > 0 )
        this.reportService.removeIncidentElement(this.newLocation, __WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].LocationTable);
        this.reference.destroy();
    };
    LocationComponent.prototype.getLocations = function () {
        var _this = this;
        this.locationService.locations.subscribe(function (locations) {
            _this.locations = locations;
        });
        this.locationService.locationMap.subscribe(function (map) {
            _this.locationMap = map;
        });
    };
    LocationComponent.prototype.onSelectCampus = function () {
        var _this = this;
        this.showCampusAlert = false;
        this.currentLocation.attributes.BUILDING_NAME = "";
        this.locationMap.forEach(function (campus) {
            if (campus.CAMPUS_ID == _this.newLocation.attributes.CAMPUS_ID) {
                _this.buildings = campus.BUILDINGS;
                _this.newLocation.attributes.CITY = campus.CITY;
                _this.newLocation.attributes.LOCATION_ID = null;
                _this.newLocation.attributes.BUILDING_NAME = "";
                _this.newLocation.attributes.ROOM_NUMBER = "";
            }
        });
    };
    LocationComponent.prototype.onSelectBuilding = function () {
        var _this = this;
        this.showBuildingAlert = false;
        this.currentLocation.attributes.ROOM_NUMBER = "";
        this.buildings.forEach(function (bldg) {
            if (bldg.BUILDING_NAME === _this.newLocation.attributes.BUILDING_NAME) {
                _this.rooms = bldg.ROOMS;
                _this.newLocation.attributes.LOCATION_ID = null;
                _this.newLocation.attributes.ROOM_NUMBER = "";
            }
        });
    };
    LocationComponent.prototype.onSelectRoom = function () {
        var _this = this;
        var index = this.locations.findIndex(function (loc) {
            return loc.attributes.LOCATION_ID == _this.newLocation.attributes.LOCATION_ID;
        });
        // if ( index > 0 ) {
        this.newLocation.attributes.ROOM_NUMBER = this.locations[index].attributes.ROOM_NUMBER;
        // }
        // else {
        // this.newLocation.attributes.ROOM_NUMBER = "";
        // }
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

module.exports = "<div class=\"row-container flex-center\">\n    <div class=\"panel panel-default panel-login\">\n        <div class=\"panel-body\">\n            <h2>Login</h2> <br>\n            <form (ngSubmit)=\"onLogin()\">\n                <div class=\"form-group\">\n                    <label for=\"uname\">Username:</label>\n                    <input type=\"text\" id=\"uname\" class=\"form-control\" [(ngModel)]=\"user.attributes.USERNAME\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"pwd\">Password:</label>\n                    <input type=\"password\" id =\"pwd\" class=\"form-control\" [(ngModel)]=\"user.attributes.PASSWORD\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <button type=\"submit\" class=\"btn-default btn\">Login</button> <br> <br>\n                <a href=\"#\">Forgot Password</a>\n            </form>\n        </div>      \n    </div> \n</div>\n\n<!-- <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-10 col-sm-offset-1 col-sm-offset-right-1\n                    col-lg-6 col-lg-offset-3 col-lg-offset-right-3\">\n        </div>\n    </div>\n</div> -->\n"

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
            _this.userService.authUser(responseData);
            if (_this.userService.isLoggedIn()) {
                //this.appComponent.showLogoutButton();
                if (_this.userService.isAdmin()) {
                    _this.router.navigate(['dashboard']);
                }
                else if (_this.userService.isGuard()) {
                    _this.router.navigate(['guard-app/dashboard']);
                    //alert( "welcome guard" );
                }
                else {
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
            console.log("You are already logged in!");
            if (this.userService.isAdmin()) {
                this.router.navigate(['dashboard']);
            }
            else if (this.userService.isGuard()) {
                this.router.navigate(['guard']);
            }
        }
    };
    LoginComponent.prototype.listener = function (data) {
        var messageObj = data;
        console.log("Received data from websocket: ", messageObj);
        // If an object exists with callback_id in our callbacks object, resolve it
        //if(callbacks.hasOwnProperty(messageObj.callback_id)) {
        //  console.log(callbacks[messageObj.callback_id]);
        //  $rootScope.$apply(callbacks[messageObj.callback_id].cb.resolve(messageObj.data));
        // delete callbacks[messageObj.callbackID];
        //}
        //ngOnInit ();
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

/***/ "../../../../../src/app/component/login/new-account-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_location_service__ = __webpack_require__("../../../../../src/app/service/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_staff_service__ = __webpack_require__("../../../../../src/app/service/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_account__ = __webpack_require__("../../../../../src/app/component/login/new-account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_validation_service__ = __webpack_require__("../../../../../src/app/util/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewAccountComponent = (function () {
    function NewAccountComponent(userService, loginService, staffService, locationService, router) {
        var _this = this;
        this.userService = userService;
        this.loginService = loginService;
        this.staffService = staffService;
        this.locationService = locationService;
        this.router = router;
        this.password = "";
        this.confirmPassword = "";
        this.firstnameStatus = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty;
        this.lastnameStatus = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty;
        this.usernameStatus = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty;
        this.passwordStatus = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty;
        if (!this.userService.isLoggedIn() || !this.userService.isAdmin)
            this.router.navigate(['login']);
        this.newAccount = new __WEBPACK_IMPORTED_MODULE_5__new_account__["a" /* NewAccount */]();
        this.loginService.getAccountTypes()
            .then(function (arr) {
            _this.accTypes = arr;
        });
        this.locationService.getCampus().then(function (response) {
            _this.campusArr = response;
        });
    }
    NewAccountComponent.prototype.createAccount = function () {
        var _this = this;
        if (this.isFilledOut() && this.isValid()) {
            this.newAccount.user.attributes.PASSWORD = this.confirmPassword;
            this.loginService.createAccount(this.newAccount)
                .then(function (response) {
                if (response)
                    _this.router.navigate(['dashboard']);
                else
                    alert("Create account failed");
            });
        }
    };
    NewAccountComponent.prototype.isValid = function () {
        var valid = this.firstnameStatus === __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Valid
            && this.lastnameStatus === __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Valid
            && this.usernameStatus === __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Valid
            && this.passwordStatus === __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Valid
            && this.newAccount.staff.attributes.CAMPUS_ID != null
            && this.newAccount.user.attributes.ACCOUNT_TYPE != null;
        if (!valid)
            alert("Some fields have invalid values.");
        return valid;
    };
    NewAccountComponent.prototype.isFilledOut = function () {
        var valid = this.firstnameStatus != __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty
            && this.lastnameStatus != __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty
            && this.usernameStatus != __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty
            && this.passwordStatus != __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty
            && this.newAccount.staff.attributes.CAMPUS_ID != null
            && this.newAccount.user.attributes.ACCOUNT_TYPE != null;
        if (!valid)
            alert("Please fill out all required fields.");
        return valid;
    };
    NewAccountComponent.prototype.validateForm = function (attr) {
        var _this = this;
        if (attr === 'firstname') {
            this.validateName(this.newAccount.staff.attributes.FIRST_NAME, attr);
        }
        else if (attr === 'lastname') {
            this.validateName(this.newAccount.staff.attributes.LAST_NAME, attr);
        }
        else if (attr === 'username') {
            var username = this.newAccount.user.attributes.USERNAME;
            this.loginService.validateUsername(username)
                .then(function (usernameTaken) {
                if (usernameTaken) {
                    _this.usernameStatus = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Taken;
                }
                else {
                    _this.validateName(username, attr);
                }
            });
        }
        else if (attr === 'password') {
            this.validatePassword(this.confirmPassword);
        }
    };
    NewAccountComponent.prototype.validateName = function (name, attr) {
        var re = "^[A-Za-z]+[ -']*[A-Za-z'-]*$";
        if (attr === 'username')
            re = "^[A-Za-z]+[a-zA-Z0-9._]*$"; // no spaces
        var status;
        if (name.length == 0)
            status = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty;
        else if (!name.match(re) || name.length > 20 || (attr === 'username' && name.length < 6))
            status = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Invalid;
        else
            status = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Valid;
        if (attr === 'firstname')
            this.firstnameStatus = status;
        else if (attr === 'lastname')
            this.lastnameStatus = status;
        else if (attr === 'username')
            this.usernameStatus = status;
    };
    NewAccountComponent.prototype.validatePassword = function (password) {
        var pass = this.confirmPassword;
        var status;
        if (this.password != pass)
            this.passwordStatus = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].PasswordNotMatching;
        else if (pass.length == 0)
            this.passwordStatus = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Empty;
        else if (pass.length < 6 || pass.length > 20)
            this.passwordStatus = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Invalid;
        else {
            this.passwordStatus = __WEBPACK_IMPORTED_MODULE_6__util_validation_service__["a" /* Validation */].Valid;
            return true;
        }
        return false;
    };
    return NewAccountComponent;
}());
NewAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/component/login/new-account.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/new-account.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_staff_service__["a" /* StaffService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_location_service__["a" /* LocationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _e || Object])
], NewAccountComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-account-component.js.map

/***/ }),

/***/ "../../../../../src/app/component/login/new-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-10 col-sm-offset-1 col-sm-offset-right-1\n                    col-lg-6 col-lg-offset-3 col-lg-offset-right-3\">\n            <div id=\"new-account-panel\" class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <div>\n                        <span class=\"glyphicon glyphicon-user glyphicon-heading\"></span>\n                        <span class=\"panel-header\">Create New Account</span>\n                    </div>\n                </div>\n                <div class=\"panel-body\">\n\n                    <div class=\"details-container\">\n                        <div>\n                            <div class=\"details-body\">\n                                <div class=\"detail col-sm-12\">\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"filter-title\">First Name <span class=\"required-asterisk\">*</span></span>\n                                        <input class=\"form-control\" type=\"text\" maxlength=\"20\"\n                                            [(ngModel)]=\"newAccount.staff.attributes.FIRST_NAME\"\n                                            (blur)=\"validateForm('firstname')\"/>\n                                    </div>\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"glyphicon glyphicon-ok-sign\" *ngIf=\"firstnameStatus === 'valid'\"></span>\n                                        <span class=\"validation-text\" *ngIf=\"firstnameStatus === 'invalid'\">You can only use letters, apostrophes, spaces, and dashes (‘-’) in your name.</span>                                                                                \n                                    </div>\n                                </div>\n\n                                <div class=\"detail col-sm-12\">\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"filter-title\">Last Name <span class=\"required-asterisk\">*</span></span>\n                                        <input class=\"form-control\" type=\"text\" maxlength=\"20\"\n                                            [(ngModel)]=\"newAccount.staff.attributes.LAST_NAME\"\n                                            (blur)=\"validateForm('lastname');\" />\n                                    </div>\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"glyphicon glyphicon-ok-sign\" *ngIf=\"lastnameStatus === 'valid'\"></span>\n                                        <span class=\"validation-text\" *ngIf=\"lastnameStatus === 'invalid'\">You can only use letters, apostrophes, spaces, and dashes (‘-’) in your name.</span>                                                                                                                        \n                                    </div>\n                                </div>\n\n                                <div class=\"detail col-sm-12\">\n                                    <div class=\"detail-col col-sm-6 col-sm-offset-right-6\">\n                                        <span class=\"filter-title\">Campus <span class=\"required-asterisk\">*</span></span>\n                                        <select class=\"form-control\" [(ngModel)]=\"newAccount.staff.attributes.CAMPUS_ID\">\n                                            <option *ngFor=\"let campus of campusArr\" [value]=\"campus.attributes.CAMPUS_ID\">{{campus.attributes.CITY}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n\n                                <div class=\"detail col-sm-12\">\n                                    <div class=\"detail-col col-sm-6 col-sm-offset-right-6\">\n                                        <span class=\"filter-title\">Role <span class=\"required-asterisk\">*</span></span>\n                                        <select class=\"form-control\" [(ngModel)]=\"newAccount.user.attributes.ACCOUNT_TYPE\">\n                                            <option *ngFor=\"let type of accTypes\" [value]=\"type.id\">{{type.name}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n\n                                <div class=\"detail col-sm-12\">\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"filter-title\">Username <span class=\"required-asterisk\">*</span></span>\n                                        <input class=\"form-control\" type=\"text\" maxlength=\"20\"\n                                            [(ngModel)]=\"newAccount.user.attributes.USERNAME\" \n                                            (blur)=\"validateForm('username');\"/>\n                                    </div>\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"glyphicon glyphicon-ok-sign\" *ngIf=\"usernameStatus === 'valid'\"></span>\n                                        <span class=\"validation-text\" *ngIf=\"usernameStatus === 'taken'\">Username is taken.</span>\n                                        <span class=\"validation-text\" *ngIf=\"usernameStatus === 'invalid'\">Username must have at least 6 characters (max. = 20). You can only use letters, numbers, periods (‘.’), and underscores (‘_’) in your username. </span>                                        \n                                    </div>\n                                </div>\n\n                                <div class=\"detail col-sm-12\">\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"filter-title\">Password <span class=\"required-asterisk\">*</span></span>\n                                        <input class=\"form-control\" type=\"password\" \n                                            [(ngModel)]=\"password\"\n                                            (blur)=\"validateForm('password');\"/>\n                                    </div>\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"glyphicon glyphicon-ok-sign\" *ngIf=\"passwordStatus === 'valid'\"></span>                                        \n                                    </div>\n                                </div>\n\n                                <div class=\"detail col-sm-12\">\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"filter-title\">Confirm Password <span class=\"required-asterisk\">*</span></span>\n                                        <input class=\"form-control\" type=\"password\" \n                                            [(ngModel)]=\"confirmPassword\"\n                                            (blur)=\"validateForm('password');\"/>\n                                    </div>\n                                    <div class=\"detail-col col-sm-6\">\n                                        <span class=\"glyphicon glyphicon-ok-sign\" *ngIf=\"passwordStatus === 'valid'\"></span>\n                                        <span class=\"validation-text\" *ngIf=\"passwordStatus === 'invalid' || passwordStatus ==='empty'\">Password must have at least 6 characters (max. = 20).</span>                                                                                \n                                        <span class=\"validation-text\" *ngIf=\"passwordStatus === 'notmatching'\">Passwords do not match.</span>                                                                                                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                \n                <div class=\"panel-footer\">\n                    <button class=\"btn btn-default\" (click)=\"createAccount()\">Create Account</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/login/new-account.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAccount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__("../../../../../src/app/component/login/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staff_staff__ = __webpack_require__("../../../../../src/app/component/staff/staff.ts");


var NewAccount = (function () {
    function NewAccount() {
        this.user = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]();
        this.staff = new __WEBPACK_IMPORTED_MODULE_1__staff_staff__["a" /* Staff */]();
    }
    return NewAccount;
}());

//# sourceMappingURL=new-account.js.map

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

/***/ "../../../../../src/app/component/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"main-navbar\" class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-sm navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#collapse-right\" aria-expanded=\"false\"\n                *ngIf=\"user!=null\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"glyphicon glyphicon-option-vertical\"></span>            \n            </button>\n            <button type=\"button\" class=\" navbar-sm navbar-toggle collapsed\" aria-expanded=\"false\"\n                (click)=\"redirect('new-report')\"  *ngIf=\"user!=null\">\n                <span class=\"glyphicon glyphicon-plus\"></span>            \n            </button>           \n            <a class=\"navbar-sm navbar-brand\">SFU IRS</a>\n            <a class=\"navbar-lg navbar-brand\">SFU Incident Reporting System</a>            \n        </div>\n  \n        <div class=\"navbar-lg collapse navbar-collapse pull-sm-left\" id=\"collapse-left\" *ngIf=\"isAdmin\">\n            <ul class=\"nav navbar-nav\">\n                <li (click)=\"redirect('dashboard')\"><a class=\"link\">Dashboard</a></li>\n                <li (click)=\"redirect('search')\"><a class=\"link\">Search</a></li>\n            </ul>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"collapse-right\" *ngIf=\"user!=null\">\n            <ul class=\"navbar-sm nav navbar-nav navbar-right\">\n                <li (click)=\"redirect('dashboard')\" *ngIf=\"isAdmin\" data-target=\"#collapse-right\" data-toggle=\"collapse\">\n                    <a class=\"link\">Dashboard</a>\n                </li>\n                <li (click)=\"redirect('search')\" *ngIf=\"isAdmin\" data-target=\"#collapse-right\" data-toggle=\"collapse\">\n                    <a class=\"link\">Search</a>\n                </li>\n                <li (click)=\"redirect('new-account')\" *ngIf=\"isAdmin\"  data-target=\"#collapse-right\" data-toggle=\"collapse\">\n                    <a class=\"link\">Create Account</a>\n                </li>\n                <li (click)=\"redirect('guard-dashboard')\" *ngIf=\"!isAdmin \" data-target=\"#collapse-right\" data-toggle=\"collapse\">\n                    <a class=\"link\">Current Reports</a>\n                </li>\n                <li><a class=\"link\" (click)=\"onLogout()\">Logout</a></li>\n            </ul>\n\n            <ul class=\"navbar-lg nav navbar-nav navbar-right\" *ngIf=\"user!=null\">\n                <li class=\"dropdown\">\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li (click)=\"redirect('new-report')\" *ngIf=\"!isAdmin\"><a class=\"link\">New Report</a></li>\n                        <li (click)=\"redirect('guard-dashboard')\" *ngIf=\"!isAdmin\"><a class=\"link\">Current Reports</a></li>\n                        <li (click)=\"redirect('new-account')\" *ngIf=\"isAdmin\"><a class=\"link\">Create Account</a></li>                        \n                        <li><a class=\"link\" (click)=\"onLogout()\">Logout</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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



var NavbarComponent = (function () {
    function NavbarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isAdmin = false;
        this.isGuardApp = false;
        this.isLoggedIn = false;
        this.user = this.userService.getCurrentUser();
    }
    NavbarComponent.prototype.onLogout = function () {
        this.userService.logout();
        this.router.navigate(['login']);
    };
    NavbarComponent.prototype.redirect = function (component) {
        this.router.navigate([component]);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (u) {
            _this.user = u;
            if (u != null) {
                _this.userAccType = u.attributes.ACCOUNT_TYPE;
            }
            _this.isAdmin = _this.userAccType == _this.userService.ADMIN;
        });
        this.userService.loggedIn.subscribe(function (loggedIn) {
            _this.isLoggedIn = loggedIn;
        });
        if (this.router.url.includes('guard-app')) {
            this.isGuardApp = true;
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar-component',
        template: __webpack_require__("../../../../../src/app/component/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details-body\">\n    <div class=\"x-container\">\n        <span *ngIf=\"!router.url.includes('guard-app')\" class=\"glyphicon glyphicon-remove glyphicon-btn\"  (click)=\"removePersonFromReport()\"></span>        \n    </div>\n\n    <div class=\"detail col-12 col-md-3 col-sm-6\">\n        <span class=\"field-title\">First Name <span class=\"required-asterisk\">*</span></span>\n        <input class=\"form-control\" id=\"personInputFirst\" type=\"text\" \n            (change)=\"findPerson()\" [(ngModel)]=\"newPerson.attributes.FIRST_NAME\"/>\n    </div>\n    <div class=\"detail col-12 col-md-3 col-sm-6\">\n        <span class=\"field-title\">Last Name <span class=\"required-asterisk\">*</span></span>\n        <input class=\"form-control\" id=\"personInputLast\" type=\"text\" \n            (change)=\"findPerson()\" [(ngModel)]=\"newPerson.attributes.LAST_NAME\"/>\n    </div>\n    <div class=\"detail col-12 col-md-3 col-sm-6\">\n        <span class=\"field-title\">Phone Number <span class=\"required-asterisk\">*</span></span>\n        <div class=\"phone-input\">\n            <input type=\"text\" maxlength=\"3\" class=\"form-control phone-3\" [(ngModel)]=\"phoneNumber1\" \n                (change)=\"findPerson()\"\n                onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \n                || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/> \n            <span>-</span>  \n            <input type=\"text\" maxlength=\"3\" class=\"form-control phone-3\" [(ngModel)]=\"phoneNumber2\" \n                (change)=\"findPerson();\"\n                onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \n                || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/>  \n            <span>-</span>  \n            <input type=\"text\" maxlength=\"4\" class=\"form-control phone-4\" [(ngModel)]=\"phoneNumber3\" \n                (change)=\"findPerson();\"\n                onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \n                || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/>            \n        </div>  \n\n        <div *ngIf=\"!router.url.includes('guard-app')\">\n            <div class=\"bottom-links flex-column\" *ngIf=\"!personExists\">         \n                <span class=\"field-title italic\">\n                    This person is not found in the database. Only existing persons can be added to a report.\n                </span>         \n                <span class=\"link\" (click)=\"addPersonToDatabase()\">Add Person</span>     \n            </div>\n        </div>\n\n<!-- For Persons in Guard App -->\n        <div *ngIf=\"router.url.includes('guard-app')\">\n            <div id=\"personModal\" class=\"alert modal-fade\" *ngIf=\"!personExists && modalVisible\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <button type=\"button\" class=\"close\" (click)=\"hide()\" aria-hidden=\"true\">×</button>\n                <!-- <div class=\"bottom-links flex-column\" *ngIf=\"!personExists\"> -->\n                        <div class=\"alert-body mt-1\">\n                            This person is not found in the database. Only existing persons can be added to a report.\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button class=\"btn btn-sm btn-secondary pull-right mt-2 mr-1 mb-1 ml-2\" (click)=\"hide()\">\n                                <span class=\"glyphicon glyphicon-remove\"></span> Cancel\n                            </button>                \n                            <button class=\"btn  btn-sm btn-primary pull-right mt-2 mr-1 mb-1 ml-2\" (click)=\"addPersonToDatabase()\">\n                                <span class=\"glyphicon glyphicon-floppy-disk\"></span> Add Person\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <button (click)=\"cancelPersonEdit()\"\n                        class=\"btn btn-sm btn-secondary pull-right mt-1 mr-1 mb-1 ml-2\">\n                    <span class=\"glyphicon glyphicon-remove\"></span> Cancel\n                </button>\n                <button (click)=\"savePerson()\"\n                    data-toggle=\"modal\"\n                    class=\"btn btn-sm btn-primary pull-right mt-1 mb-1\">\n                    <span class=\"glyphicon glyphicon-floppy-disk\"></span> Save\n                </button>\n            </div>\n        </div>     \n    </div>\n\n    <!-- <div class=\"panel panel-default test-panel\" style=\"overflow-y:scroll; height:90px\" *ngIf=\"!personSelected\">\n        <ul id=\"peopleDisplay\">\n        <li *ngFor=\"let person of filterList\">\n            {{person.attributes.FIRST_NAME}}, \n            {{person.attributes.LAST_NAME}}, \n            {{person.attributes.PHONE_NUMBER}}   \n            <button class=\" glyphicon glyphicon-plus\" (click)=\"selectPerson(person);\"></button> \n        </li>\n        </ul>-->\n</div>\n\n    <!-- <button *ngIf=\"!personSelected\" class=\"btn btn-primary\" (click)=\"toggleNewPerson();\">\n            New Person\n    </button>\n\n    <div *ngIf=\"toggleNewPersonFlag\">\n        <div class=\"detail col-12 col-sm-3\">\n            <span class=\"field-title\">First Name <span class=\"required-asterisk\">*</span></span>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPerson.attributes.FIRST_NAME\" />\n        </div>\n        <div class=\"detail col-12 col-sm-3\">\n            <span class=\"field-title\">Last Name <span class=\"required-asterisk\">*</span></span>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPerson.attributes.LAST_NAME\" />\n        </div>\n        <div class=\"detail col-12 col-sm-3\">\n            <span class=\"field-title\">Phone Number <span class=\"required-asterisk\">*</span></span>\n            <div class=\"phone-input\">\n                <input type=\"text\" maxlength=\"3\" class=\"form-control phone-3\" [(ngModel)]=\"phoneNumber1\" (change)=\"onChangePhoneNumber()\"\n                    onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \n                    || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/> \n                <span>-</span>  \n                <input type=\"text\" maxlength=\"3\" class=\"form-control phone-3\" [(ngModel)]=\"phoneNumber2\" (change)=\"onChangePhoneNumber()\"\n                    onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \n                    || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/>  \n                <span>-</span>  \n                <input type=\"text\" maxlength=\"4\" class=\"form-control phone-4\" [(ngModel)]=\"phoneNumber3\" (change)=\"onChangePhoneNumber()\"\n                    onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \n                    || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/>            \n            </div>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"addPerson()\">Add person</button>\n    </div>\n\n</div> -->\n\n<!-- <div class=\"details-body\">\n    <div class=\"x-container\">\n        <span class=\"glyphicon glyphicon-remove glyphicon-btn\"  (click)=\"removePersonFromReport()\"></span>        \n    </div>\n    <div class=\"detail col-12 col-sm-3\" id=\"personSearch\">\n        <span class=\"field-title\">Name </span>\n        <input class=\"form-control\" list=\"personSearchList\">\n        <span class=\"field-title\">Phone Number </span>\n        <input class=\"form-control\" list=\"personSearchList\">\n        <datalist id=\"personSearchList\">\n            <option *ngFor=\"let person of personList\" value =\"{{person.attributes.FIRST_NAME}}, {{person.attributes.LAST_NAME}}, {{person.attributes.PHONE_NUMBER}}\">\n        </datalist>\n    </div>\n\n    <div>\n        <button class=\"btn btn-primary\" (click)=\"toggleNewPerson();\">\n                New Person\n        </button>\n    </div>\n\n    <div *ngIf=\"toggleNewPersonFlag\">\n        <div class=\"detail col-12 col-sm-3\">\n            <span class=\"field-title\">First Name <span class=\"required-asterisk\">*</span></span>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPerson.attributes.FIRST_NAME\" />\n        </div>\n        <div class=\"detail col-12 col-sm-3\">\n            <span class=\"field-title\">Last Name <span class=\"required-asterisk\">*</span></span>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPerson.attributes.LAST_NAME\" />\n        </div>\n        <div class=\"detail col-12 col-sm-3\">\n            <span class=\"field-title\">Phone Number <span class=\"required-asterisk\">*</span></span>\n            <div class=\"phone-input\">\n                <input type=\"text\" maxlength=\"3\" class=\"form-control phone-3\" [(ngModel)]=\"phoneNumber1\" (change)=\"onChangePhoneNumber()\"\n                    onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \n                    || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/> \n                <span>-</span>  \n                <input type=\"text\" maxlength=\"3\" class=\"form-control phone-3\" [(ngModel)]=\"phoneNumber2\" (change)=\"onChangePhoneNumber()\"\n                    onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \n                    || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/>  \n                <span>-</span>  \n                <input type=\"text\" maxlength=\"4\" class=\"form-control phone-4\" [(ngModel)]=\"phoneNumber3\" (change)=\"onChangePhoneNumber()\"\n                    onkeypress='return (event.charCode >= 48 && event.charCode <= 57) \n                    || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46'/>            \n            </div>\n        </div>\n        <button (click)=\"addPerson()\">add person</button>\n    </div>\n</div>  -->\n"

/***/ }),

/***/ "../../../../../src/app/component/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_person__ = __webpack_require__("../../../../../src/app/component/person/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_person_service__ = __webpack_require__("../../../../../src/app/service/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
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
    function PersonComponent(personService, reportService, router) {
        this.personService = personService;
        this.reportService = reportService;
        this.router = router;
        this.personAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addPersonToGuardReport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.cancelEditor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.personList = [];
        this.filterList = [];
        this.currentPerson = new __WEBPACK_IMPORTED_MODULE_1__person_person__["a" /* Person */]();
        this.newPerson = new __WEBPACK_IMPORTED_MODULE_1__person_person__["a" /* Person */]();
        this.filterPerson = new __WEBPACK_IMPORTED_MODULE_1__person_person__["a" /* Person */]();
        this.phoneNumber1 = "";
        this.phoneNumber2 = "";
        this.phoneNumber3 = "";
        this.toggleNewPersonFlag = false;
        this.personSelected = false;
        this.personExists = true;
        this.personExistsInList = true;
        this.modalVisible = false;
        // this.filterPerson.attributes.FIRST_NAME = "";
        // this.filterPerson.attributes.LAST_NAME = "";
        this.filterList = this.personList;
    }
    ;
    PersonComponent.prototype.addPersonToReport = function () {
        this.reportService.addIncidentElement(this.newPerson);
    };
    PersonComponent.prototype.removePersonFromReport = function () {
        if (this.reference == null) {
            return;
        }
        if (this.newPerson != null)
            this.reportService.removeIncidentElement(this.newPerson, __WEBPACK_IMPORTED_MODULE_5__util_config_service__["a" /* Config */].PersonTable);
        this.reference.destroy();
    };
    PersonComponent.prototype.onChangePhoneNumber = function () {
        this.newPerson.attributes.PHONE_NUMBER = this.phoneNumber1 + this.phoneNumber2 + this.phoneNumber3;
    };
    PersonComponent.prototype.onChangeSearchPhoneNumber = function () {
        this.filterPerson.attributes.PHONE_NUMBER = this.phoneNumber1 + this.phoneNumber2 + this.phoneNumber3;
    };
    PersonComponent.prototype.toggleNewPerson = function () {
        this.toggleNewPersonFlag = !this.toggleNewPersonFlag;
        console.log(this.personList);
    };
    PersonComponent.prototype.selectPerson = function (person) {
        Object.assign(this.newPerson, person);
        this.filterPerson.attributes.FIRST_NAME = person.attributes.FIRST_NAME;
        this.filterPerson.attributes.LAST_NAME = person.attributes.LAST_NAME;
        this.filterPerson.attributes.PHONE_NUMBER = person.attributes.PHONE_NUMBER;
        var phoneNumber = person.attributes.PHONE_NUMBER.toString();
        this.phoneNumber1 = phoneNumber.slice(0, 3);
        this.phoneNumber2 = phoneNumber.slice(3, 6);
        this.phoneNumber3 = phoneNumber.slice(6);
        this.personSelected = true;
    };
    PersonComponent.prototype.hide = function () {
        this.modalVisible = false;
    };
    // getPersons(): void {
    //     this.personService.getPersons().then( returnedPersons => {
    //         this.personList = returnedPersons;
    //     } )
    //     .then( () => {
    //         this.copyPersonLst();
    //     });
    // }
    PersonComponent.prototype.copyPersonLst = function () {
        Object.assign(this.filterList, this.personList);
    };
    PersonComponent.prototype.findPerson = function () {
        var _this = this;
        this.onChangePhoneNumber();
        if (this.allFieldsValid(this.newPerson)) {
            this.personService.personExists(this.newPerson)
                .then(function (exists) {
                console.log("exists", exists);
                if (exists == null) {
                    _this.personExists = false;
                }
                else {
                    _this.personExists = true;
                    _this.newPerson = exists;
                    console.log(_this.newPerson);
                    if (!_this.router.url.includes('guard-app')) {
                        _this.reportService.removeIncidentElement(_this.newPerson, __WEBPACK_IMPORTED_MODULE_5__util_config_service__["a" /* Config */].PersonTable);
                        _this.addPersonToReport();
                        console.log(_this.reportService.incidentElements);
                    }
                }
                _this.personAdded.emit(_this.personExists);
            });
        }
        else {
            this.personExists = true;
            this.personAdded.emit(false);
        }
        this.modalVisible = true;
        // this.personSelected = false;
        // this.personService.filter(this.filterList, this.personList, this.filterPerson);
        // if (this.filterList.length < 1){
        //     if ( this.filterPerson.attributes.FIRST_NAME != null
        //         && this.filterPerson.attributes.LAST_NAME != null
        //         && this.filterPerson.attributes.PHONE_NUMBER != null
        //         && this.filterPerson.attributes.PHONE_NUMBER.toString().length == 10
        //     ) {
        //         this.personExistsInList = false;
        //         Object.assign(this.newPerson, this.filterPerson);
        //     }
        // }
        // else {
        //     this.personExistsInList = true;
        // };
    };
    PersonComponent.prototype.addPersonToDatabase = function () {
        var _this = this;
        if (this.allFieldsValid(this.newPerson)) {
            this.personService.create(this.newPerson)
                .then(function (returnedPerson) {
                if (returnedPerson != null) {
                    alert("Person successfully added!");
                    _this.personExists = true;
                    _this.personAdded.emit(_this.personExists);
                    _this.personService.personExists(_this.newPerson)
                        .then(function (person) {
                        if (person != null) {
                            _this.newPerson = person;
                            // this.newPerson.attributes.PERSON_ID = person.attributes.PERSON_ID;
                            // this.newPerson.attributes.FIRST_NAME = person.attributes.FIRST_NAME;
                            // this.newPerson.attributes.LAST_NAME = person.attributes.LAST_NAME;
                            // this.newPerson.attributes.PHONE_NUMBER = person.attributes.PHONE_NUMBER;      
                            _this.addPersonToGuardReport.emit(_this.newPerson);
                        }
                    });
                }
                else
                    alert("Add failed. Try again.");
            });
        }
    };
    PersonComponent.prototype.addPerson = function () {
        var _this = this;
        this.personList.forEach(function (person) {
            if (person.attributes.FIRST_NAME == _this.newPerson.attributes.FIRST_NAME
                && person.attributes.LAST_NAME == _this.newPerson.attributes.LAST_NAME
                && person.attributes.PHONE_NUMBER == _this.newPerson.attributes.PHONE_NUMBER) {
                alert("Person already exists");
                _this.personExists = true;
                return;
            }
        });
        if (!this.personExists) {
            this.personService.create(this.newPerson)
                .then(function (returnedPerson) {
                if (returnedPerson != null) {
                    //this.personList.push(returnedPerson as Person);
                    _this.personExistsInList = true;
                    alert("Person successfully added!");
                    _this.personList.push(_this.newPerson);
                }
                else
                    alert("Add failed.");
            });
        }
        this.filterPerson = this.newPerson;
        console.log("Filter person", this.filterPerson);
        this.personSelected = true;
        this.toggleNewPersonFlag = false;
        delete this.newPerson;
        this.newPerson = new __WEBPACK_IMPORTED_MODULE_1__person_person__["a" /* Person */]();
        this.personExists = false;
    };
    PersonComponent.prototype.updatePerson = function (person) {
        var _this = this;
        this.personService.update(person)
            .then(function (returnedPerson) {
            if (returnedPerson != null) {
                var i = _this.personList.findIndex(function (person) { return person.attributes.PERSON_ID === returnedPerson.attributes.PERSON_ID; });
                // remove 1 object at index i, replace it with returnedPerson
                _this.personList.splice(i, 1, returnedPerson);
                alert("successfully edited!");
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
    PersonComponent.prototype.allFieldsValid = function (person) {
        if (person == null)
            return false;
        return person.attributes != null &&
            person.attributes.LAST_NAME != null && person.attributes.LAST_NAME.length > 0 &&
            person.attributes.FIRST_NAME != null && person.attributes.FIRST_NAME.length > 0 &&
            person.attributes.PHONE_NUMBER != null && person.attributes.PHONE_NUMBER.length == 10;
    };
    PersonComponent.prototype.savePerson = function () {
        this.findPerson();
    };
    PersonComponent.prototype.cancelPersonEdit = function () {
        this.cancelEditor.emit();
    };
    PersonComponent.prototype.ngOnInit = function () {
        //this.getPersons();
        this.addPersonToReport();
    };
    return PersonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], PersonComponent.prototype, "personAdded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], PersonComponent.prototype, "addPersonToGuardReport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], PersonComponent.prototype, "cancelEditor", void 0);
PersonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'person-component',
        template: __webpack_require__("../../../../../src/app/component/person/person.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/guard-app.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_person_service__["a" /* PersonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_person_service__["a" /* PersonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_new_report_service__["a" /* NewReportService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PersonComponent);

var _a, _b, _c, _d, _e;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_timer_service__ = __webpack_require__("../../../../../src/app/service/timer.service.ts");
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
    function IncidentComponent(incidentService, staffService, timerService) {
        var _this = this;
        this.incidentService = incidentService;
        this.staffService = staffService;
        this.timerService = timerService;
        this.staffArr = [];
        this.selectedStaffId = -1;
        this.incidentToAssign = new __WEBPACK_IMPORTED_MODULE_3__incident__["a" /* Incident */]();
        this.incidentSetTimer = new __WEBPACK_IMPORTED_MODULE_3__incident__["a" /* Incident */]();
        this.lastRemovedId = 0;
        this.statuses = ['Created', 'En Route', 'Working', 'Closed', 'Sealed'];
        this.timerValid = false;
        this.staffService.getStaffs().then(function (returnedArr) {
            _this.staffArr = returnedArr;
        });
        this.incidentService.lastRemovedId
            .subscribe(function (value) { return _this.removeFromWorkspace(value); });
        this.incidentService.editedReport
            .subscribe(function (value) {
            if (value != null && _this.incidents != null && _this.incidents.length > 0) {
                var index = _this.incidents.findIndex(function (i) { return i.attributes.REPORT_ID == value.attributes.REPORT_ID; });
                if (index >= 0)
                    _this.incidents.splice(index, 1, value);
            }
        });
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
    IncidentComponent.prototype.addToTimer = function () {
        this.incidents.forEach(function (incident) {
            if (incident.attributes.TIMER_START != null) {
                //add to timers list
            }
        });
    };
    IncidentComponent.prototype.addToWorkspace = function (incident) {
        incident.inWorkspace = true;
        this.incidentService.addToWorkspace(incident);
    };
    IncidentComponent.prototype.removeFromWorkspace = function (id) {
        this.incidentService.removeFromWorkspace(id);
    };
    IncidentComponent.prototype.setTimer = function () {
        var _this = this;
        this.incidentSetTimer.attributes.TIMER_START = this.timerService.stringToTime(this.timerStart);
        this.incidentSetTimer.attributes.TIMER_END = this.timerService.stringToTime(this.timerEnd);
        if (this.timerValid) {
            this.incidentService.update(this.incidentSetTimer)
                .then(function (response) {
                if (response != null) {
                    alert("Timer is set for Report #" + response.attributes.REPORT_ID + ".");
                }
                else {
                    console.log("Error setting timer.");
                }
                _this.resetTimer();
            });
        }
    };
    IncidentComponent.prototype.resetTimer = function () {
        this.timerStart = "";
        this.timerEnd = "";
        this.timerValid = false;
    };
    IncidentComponent.prototype.setIncidentToTime = function (id) {
        if (id == null)
            return;
        var index = this.incidents.findIndex(function (x) { return x.attributes.REPORT_ID == id; });
        if (index >= 0) {
            this.incidentSetTimer = this.incidents[index];
        }
    };
    IncidentComponent.prototype.onChangeTimer = function () {
        this.incidentSetTimer.attributes.TIMER_START = this.timerService.stringToTime(this.timerStart);
        this.incidentSetTimer.attributes.TIMER_END = this.timerService.stringToTime(this.timerEnd);
        if ((this.incidentSetTimer.attributes.TIMER_START && !this.incidentSetTimer.attributes.TIMER_END) ||
            (!this.incidentSetTimer.attributes.TIMER_START && this.incidentSetTimer.attributes.TIMER_END) ||
            (this.incidentSetTimer.attributes.TIMER_START > this.incidentSetTimer.attributes.TIMER_END)) {
            this.timerValid = false;
        }
        else {
            this.timerValid = true;
        }
        console.log("timer valid?" + this.timerValid);
    };
    IncidentComponent.prototype.assignToGuard = function () {
        var _this = this;
        this.incidentToAssign = this.incidentService.updateAssignedStaff(this.incidentToAssign, this.selectedStaffId);
        console.log(this.incidentToAssign);
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
    IncidentComponent.prototype.setIncidentToAssign = function (id) {
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
    IncidentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getIncidents();
        this.incidentService.staffArr.subscribe(function (arr) { _this.staffArr = arr; });
        this.incidentService.reportsInList
            .subscribe(function (reports) {
            _this.incidents = reports;
            console.log("reports.length = " + reports.length);
        });
    };
    return IncidentComponent;
}());
IncidentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'incidents-component',
        template: __webpack_require__("../../../../../src/app/component/report/incidents.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/incidents.component.css"), __webpack_require__("../../../../../src/assets/css/panels.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_staff_service__["a" /* StaffService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_timer_service__["a" /* TimerService */]) === "function" && _c || Object])
], IncidentComponent);

var _a, _b, _c;
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
        this.searchString = "";
        this.incidentElements = new Map();
        this.attributes = new IncidentAttributes();
        this.category = new __WEBPACK_IMPORTED_MODULE_1__category_category__["a" /* Category */](null, null, null, null);
        this.inWorkspace = false;
        this.guard = new __WEBPACK_IMPORTED_MODULE_0__staff_staff__["a" /* Staff */]();
        this.createdBy = new __WEBPACK_IMPORTED_MODULE_0__staff_staff__["a" /* Staff */]();
    }
    Incident.prototype.insertIncidentElement = function (element) {
        console.log(element);
        var key = "";
        var table = element.table;
        if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].CategoryTable) {
            key = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].IncidentCategoryKey;
            if (this.incidentElements[key] != null) {
                console.log(this.incidentElements[key]);
                // Remove existing category
                var i = this.incidentElements[key]
                    .indexOf(function (x) { return x.attributes.CATEGORY_ID == element.attributes.CATEGORY_ID; });
                if (i >= 0) {
                    this.incidentElements[key].splice(i, 1);
                }
            }
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationTable)
            key = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationKey;
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].StaffTable)
            key = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].StaffKey;
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonTable)
            key = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonKey;
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].AttachmentTable)
            key = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].AttachmentKey;
        else {
            console.log("Table not found.");
            key = table;
        }
        if (this.incidentElements[key] == null) {
            this.incidentElements[key] = new Array;
        }
        this.incidentElements[key].push(element);
        /*
        if ( this.incidentElements[key] == null || undefined) {
            this.incidentElements.set(key, new Array);
        }

        var elementArray = this.incidentElements.get(key);
        elementArray.push(element);
        */
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

module.exports = "<div id=\"incidents-list-panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <div class=\"toolbar\">\n            <div class=\"flex\">\n                <span class=\"glyphicon glyphicon-list-alt glyphicon-heading\"></span>\n                <span class=\"panel-header\">Reports</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div id=\"incidents-list\" class=\"col-md-12 col-lg-12\">\n            <div class=\"incident-card\" *ngFor=\"let incident of incidents\">\n                <div class=\"main-content\"  (dblclick)=\"incident.inWorkspace || addToWorkspace(incident)\">\n                    <div class=\"detail-row\">\n                        <span class=\"card-text-secondary\">Report #{{incident.attributes.REPORT_ID}}</span>\n                        <span class=\"card-text-secondary alertText\" *ngIf=\"incident.attributes.TEMPORARY_REPORT == 1\"> &mdash; Pending Approval</span>\n                    </div>\n                    <div class=\"detail-row description\">\n                        <span class=\"card-text-primary\">\n                            {{incident.attributes.EXECUTIVE_SUMMARY}}\n                        </span>\n                    </div>\n                    <div class=\"detail-row\">\n                        <span class=\"card-text-secondary\">\n                            Category: {{incident.category.attributes.MAIN_CATEGORY}} - {{incident.category.attributes.SUB_CATEGORY}} {{incident.category.attributes.INCIDENT_TYPE}}\n                        </span>\n                    </div>\n                    <div class=\"detail-row\">\n                        <span class=\"card-text-secondary\">Status: {{statuses[incident.attributes.STATUS]}}</span>\n                    </div>\n                    <div class=\"detail-row\" *ngIf=\"incident.guard != null && incident.guard.attributes.FIRST_NAME != null\">\n                        <span class=\"card-text-secondary\">\n                            Assigned To: {{incident.guard.attributes.FIRST_NAME}} {{incident.guard.attributes.LAST_NAME}}\n                        </span>\n                    </div>\n                    <div class=\"detail-row tertiary\" *ngIf=\"incident.incidentElements['Location'] != null && incident.incidentElements['Location'].length > 0\">\n                        <span class=\"card-text-tertiary\">\n                            {{incident.incidentElements['Location'][0].attributes.CITY}} {{incident.incidentElements['Location'][0].attributes.BUILDING_NAME}} {{incident.incidentElements['Location'][0].attributes.ROOM_NUMBER}}\n                        </span>\n                        <span class=\"card-text-tertiary\" *ngIf=\"incident.attributes.START_TIME != null\">{{incident.attributes.START_TIME}}</span>\n                    </div>\n                </div>\n                <div class=\"bottom\">\n                    <div class=\"action\">\n                        <span class=\"glyphicon glyphicon-new-window glyphicon-btn\" data-toggle=\"tooltip\" title=\"Add to Workspace\"\n                                 [ngClass]=\"{'transparent': incident.inWorkspace}\" (click)=\"incident.inWorkspace || addToWorkspace(incident)\"></span>\n                        <span class=\"glyphicon glyphicon-tag glyphicon-btn\" data-toggle=\"modal\" data-target=\"#dispatchModal\" (click)=\"setIncidentToAssign(incident.attributes.REPORT_ID)\" title=\"Assign to Guard\"></span>\n                        <span class=\"glyphicon glyphicon-time glyphicon-btn\" data-toggle=\"modal\" data-target=\"#timerModal\" (click)=\"setIncidentToTime(incident.attributes.REPORT_ID)\" title=\"Set Timer\"></span>                        \n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"dispatchModal\" class=\"modal fade\" role=\"dialog\" *ngIf=\"incidentToAssign.attributes.REPORT_ID != null\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <span class=\"glyphicon glyphicon-tag glyphicon-heading\"></span>\n                <span class=\"panel-header\">Assign To Guard - Report #{{incidentToAssign.attributes.REPORT_ID}}</span>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"details-container\">\n                    <div class=\"details-body\">\n                        <div class=\"detail col-12 col-sm-3\">\n                            <select class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"selectedStaffId\">\n                                <option value=\"-1\"> </option>\n                                <option *ngFor=\"let staff of staffArr\" [value]=\"staff.attributes.ACCOUNT_ID\">{{staff.attributes.FIRST_NAME}} {{staff.attributes.LAST_NAME}}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary\" (click)=\"assignToGuard()\" data-dismiss=\"modal\">Assign</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"timerModal\" class=\"modal fade\" role=\"dialog\" *ngIf=\"incidentSetTimer.attributes.REPORT_ID != null\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <span class=\"glyphicon glyphicon-timer glyphicon-heading\"></span>\n                <span class=\"panel-header\">Set Timer - Report #{{incidentSetTimer.attributes.REPORT_ID}}</span>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"details-container\">\n                    <div class=\"details-body\">\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Timer Start: <span class=\"required-asterisk\">*</span> </span>                                \n                            <input class=\"form-control\" type=\"time\" [(ngModel)] = \"timerStart\" (change)=\"onChangeTimer()\">\n                            <span class=\"field-title\">Timer End: <span class=\"required-asterisk\">*</span> </span>                                                            \n                            <input class=\"form-control\" type=\"time\" [(ngModel)] = \"timerEnd\" (change)=\"onChangeTimer()\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"resetTimer()\">Cancel</button>\n                <button class=\"btn btn-primary\" (click)=\"setTimer()\" data-dismiss=\"modal\"\n                    *ngIf=\"timerValid\">Set Timer</button>\n            </div>\n        </div>\n    </div>\n</div>\n    \n"

/***/ }),

/***/ "../../../../../src/app/component/report/inline-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"editing\">\n    <textarea #inlineEditControl [required]=\"required\" (blur)=\"onBlur($event)\" [name]=\"value\" [(ngModel)]=\"value\" [placeholder]=\"label\"></textarea>\n</div>\n<div *ngIf=\"!editing\">\n    <div title=\"Click to edit\" (click)=\"edit(value)\" (focus)=\"edit($event, value);\" tabindex=\"0\" class=\"inline-edit\">{{value}}&nbsp;</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/report/inline-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return InlineEditComponent; }),
    multi: true
};
var InlineEditComponent = (function () {
    function InlineEditComponent(element, _renderer) {
        this._renderer = _renderer;
        this.label = '';
        this.type = 'text';
        this.required = false;
        this.disabled = false;
        this.textChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._value = '';
        this.preValue = '';
        this.editing = false;
        this.onChange = Function.prototype; // Trascend the onChange event
        this.onTouched = Function.prototype; // Trascend the onTouch event
        this.textarea_id = '';
    }
    Object.defineProperty(InlineEditComponent.prototype, "value", {
        // Control Value Accessors for ngModel
        get: function () {
            console.log("get value", this._value);
            return this._value;
        },
        set: function (v) {
            console.log("v is ", v);
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Required for ControlValueAccessor interface
    InlineEditComponent.prototype.writeValue = function (value) {
        console.log("write value", value);
        this._value = value;
    };
    // Required forControlValueAccessor interface
    InlineEditComponent.prototype.registerOnChange = function (fn) {
        console.log("register on change");
        this.onChange = fn;
    };
    // Required forControlValueAccessor interface
    InlineEditComponent.prototype.registerOnTouched = function (fn) {
        console.log("register on touched");
        this.onTouched = fn;
    };
    // Do stuff when the input element loses focus
    InlineEditComponent.prototype.onBlur = function ($event) {
        this.textChanged.emit("complete");
        this.editing = false;
    };
    // Start the editing process for the input element
    InlineEditComponent.prototype.edit = function (event, value) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.preValue = value;
        this.editing = true;
        console.log("editing ", value);
        // Focus on the input element just as the editing begins
        setTimeout(function (_) { return _this._renderer.invokeElementMethod(_this.inlineEditControl.nativeElement, 'focus', []); });
    };
    InlineEditComponent.prototype.ngOnInit = function () {
    };
    return InlineEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('inlineEditControl'),
    __metadata("design:type", Object)
], InlineEditComponent.prototype, "inlineEditControl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('summaryEdit'),
    __metadata("design:type", Object)
], InlineEditComponent.prototype, "summaryEdit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('descriptionEdit'),
    __metadata("design:type", Object)
], InlineEditComponent.prototype, "descriptionEdit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], InlineEditComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], InlineEditComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], InlineEditComponent.prototype, "required", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], InlineEditComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], InlineEditComponent.prototype, "textChanged", void 0);
InlineEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'inline-edit',
        template: __webpack_require__("../../../../../src/app/component/report/inline-edit.component.html"),
        providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
        styles: [__webpack_require__("../../../../../src/assets/css/inline-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _c || Object])
], InlineEditComponent);

var _a, _b, _c;
//# sourceMappingURL=inline-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/report/new-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row guard-container\">\n        <div class=\"col-12 col-sm-10 col-sm-offset-1 col-sm-offset-right-1\n                    col-lg-6 col-lg-offset-3 col-lg-offset-right-3\">\n            <div id=\"new-report-panel\" class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <span class=\"panel-header\">New Report</span>\n                    <span class=\"date\">{{date}}</span>\n                </div>\n                <div class=\"panel-body\">\n\n                    <div class=\"details-container\">\n                        <div class=\"details-heading\">\n                            <span class=\"glyphicon glyphicon-map-marker glyphicon-heading\"></span>\n                            <span class=\"field-title\">Location</span>\n                        </div>\n                        <div id=\"locations\">\n                            <location-component id=\"first-element\"></location-component>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-2 col-sm-offset-9\">\n                            <span class=\"link\" (click)=\"addComponent(locationStr)\"> Add Location</span>\n                        </div>\n                    </div>\n\n                    <div class=\"details-container\">\n                        <div class=\"details-heading\">\n                            <span class=\"glyphicon glyphicon-filter glyphicon-heading\"></span>\n                            <span class=\"field-title\">Category</span>\n                        </div>\n                        <div class=\"details-body\">\n                            <div class=\"detail col-12 col-sm-3\">\n                                <span class=\"field-title\">Category <span class=\"required-asterisk\">*</span></span>\n                                <select name=\"\" id=\"\" class=\"form-control\" [(ngModel)]=\"newIncident.category.attributes.MAIN_CATEGORY\" (change)=\"onSelectCategory()\">\n                                    <option *ngFor=\"let category of categories\" [value]=\"category.MAIN_CATEGORY\">{{category.MAIN_CATEGORY}}</option>\n                                </select>\n                            </div>\n                            <div class=\"detail col-12 col-sm-3\">\n                                <span class=\"field-title\">Sub Category <span class=\"required-asterisk\">*</span></span>\n                                <select class=\"form-control\" [(ngModel)]=\"newIncident.category.attributes.SUB_CATEGORY\" (change)=\"onSelectSubCategory()\">\n                                    <option *ngFor=\"let subCategory of subCategories\" [value]=\"subCategory.SUB_CATEGORY\">{{subCategory.SUB_CATEGORY}}</option>\n                                </select>\n                            </div>\n                            <div class=\"detail col-12 col-sm-3\"  *ngIf=\"categoryTypes.length > 0\">\n                                <span class=\"field-title\">Type <span class=\"required-asterisk\">*</span></span>\n                                <select class=\"form-control\" [(ngModel)]=\"newIncident.category.attributes.INCIDENT_TYPE\" (change)=\"onSelectType()\">\n                                    <option *ngFor=\"let type of categoryTypes\" [value]=\"type.INCIDENT_TYPE\">{{type.INCIDENT_TYPE}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"details-container\">\n                        <div class=\"details-heading\">\n                            <span class=\"glyphicon glyphicon-alert glyphicon-heading\"></span>\n                            <span class=\"field-title\">Timer</span>\n                        </div>\n                        <div class=\"row\" *ngIf=\"!timerInReport\">\n                            <div class=\"col-sm-2 col-sm-offset-9\">\n                                <span class=\"link\" (click)=\"timerInReport = true;\"> Add Timer</span>\n                            </div>\n                        </div>\n                        <div id=\"timers\" *ngIf=\"timerInReport\">\n                            <div class=\"details-body\">\n                                <div class=\"x-container\">\n                                        <span class=\"glyphicon glyphicon-remove glyphicon-btn\"  (click)=\"removeTimerFromReport()\"></span>\n                                </div>\n                                <div class=\"detail col-12 col-sm-3\">\n                                    <span class=\"field-title\">Start Time</span>\n                                    <input class=\"form-control\" type=\"time\" [(ngModel)]=\"tempTimerStart\" (change)=\"onChangeTimer()\" />\n                                </div>\n                                <div class=\"detail col-12 col-sm-3\">\n                                    <span class=\"field-title\">End Time</span>\n                                    <input class=\"form-control\" type=\"time\" [(ngModel)]=\"tempTimerEnd\" (change)=\"onChangeTimer()\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"details-container\">\n                        <div class=\"details-heading\">\n                            <span class=\"glyphicon glyphicon-info-sign glyphicon-heading\"></span>\n                            <span class=\"field-title\">Incident Details</span>\n                        </div>\n                        <div class=\"details-body\">\n                            <div class=\"detail col-12 col-sm-10\">\n                                <span class=\"field-title\">Executive Summary <span class=\"required-asterisk\"></span></span>\n                                <input class=\"form-control\" [(ngModel)]=\"newIncident.attributes.EXECUTIVE_SUMMARY\"/>\n                            </div>\n                            <div class=\"detail col-12 col-sm-10\">\n                                <span class=\"field-title\">Description <span class=\"required-asterisk\"></span></span>\n                                <textarea class=\"form-control\" cols=\"50\" rows=\"8\" [(ngModel)]=\"newIncident.attributes.DESCRIPTION\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"details-container\">\n                        <div class=\"details-heading\">\n                            <span class=\"glyphicon glyphicon-user glyphicon-heading\"></span>\n                            <span class=\"field-title\">Involved Persons</span>\n                        </div>\n                        <div id=\"persons\">\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-2 col-sm-offset-9\">\n                            <span class=\"link\" (click)=\"addComponent(personStr)\"> Add Person</span>\n                        </div>\n                    </div>\n\n                    <div class=\"details-container\">\n                        <div class=\"details-heading\">\n                            <span class=\"glyphicon glyphicon-cloud-upload glyphicon-heading\"></span>\n                            <span class=\"field-title\">Attachments</span>\n                        </div>\n                        <div class=\"row\" >\n                            <div class=\"col-sm-2 col-sm-offset-9\">\n                                <span class=\"link\" (click)=\"addComponent(attachmentStr)\"> Add Attachment</span>\n                            </div>\n                        </div>\n                        <div id=\"attachments\" #files>\n\n                        </div>\n                    </div>\n\n                    <div id=\"assignGuardDiv\" class=\"details-container\">\n                        <div class=\"details-heading\">\n                            <span class=\"glyphicon glyphicon-tag glyphicon-heading\"></span>\n                            <span class=\"field-title\">Assign Guard</span>\n                        </div>\n                        <div>\n                            <div class=\"details-body\">\n                                <div class=\"detail col-12 col-sm-3\">\n                                    <select class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"selectedStaffId\" (change)=\"onSelectStaff()\">\n                                        <option value=\"-1\"> </option>\n                                        <option *ngFor=\"let staff of staffList\" [value]=\"staff.attributes.ACCOUNT_ID\">{{staff.attributes.FIRST_NAME}} {{staff.attributes.LAST_NAME}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"details-container\">\n                        <div class=\"details-heading\">\n                            <span class=\"glyphicon glyphicon-question-sign glyphicon-heading\"></span>\n                            <span class=\"field-title\">Other Items</span>\n                        </div>\n                        <div id=\"generic-elements\">\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-2 col-sm-offset-9\">\n                            <span class=\"link\" (click)=\"addComponent(genericStr)\"> Add Item</span>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"panel-footer\">\n                    <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#confirmationModal\" (click)=\"prepareReport()\">Proceed to Review</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"confirmationModal\" class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <span class=\"glyphicon glyphicon-dashboard glyphicon-heading\"></span>\n                <span class=\"panel-header\">Review New Report</span>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"details-container\">\n                    <div class=\"details-heading\">\n                        <span class=\"glyphicon glyphicon-map-marker glyphicon-heading\"></span>\n                        <span class=\"field-title\">Location</span>\n                    </div>\n                    <div class=\"details-body\" *ngFor=\"let location of newIncident.incidentElements['Location']\">\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Campus: </span>\n                            <span class=\"field-value\">{{location.attributes.CITY}}</span>\n                            <div class=\"alertText\" *ngIf=\"location.attributes.CAMPUS_ID == null\">\n                                    Please select a campus\n                            </div>\n                        </div>\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Building: </span>\n                            <span class=\"field-value\">{{location.attributes.BUILDING_NAME}}</span>\n                            <!-- <div class=\"alertText\" *ngIf=\"location.attributes.BUILDING_NAME == null\">\n                                    Please select a building\n                            </div> -->\n                        </div>\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Room Number: </span>\n                            <span class=\"field-value\">{{location.attributes.ROOM_NUMBER}}</span>\n                            <!-- <div class=\"alertText\" *ngIf=\"location.attributes.ROOM_NUMBER == null\">\n                                    Please select a room number\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"details-container\">\n                    <div class=\"details-heading\">\n                        <span class=\"glyphicon glyphicon-filter glyphicon-heading\"></span>\n                        <span class=\"field-title\">Category</span>\n                    </div>\n                    <div class=\"details-body\">\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Category: </span>\n                            <span class=\"field-value\">{{newIncident.category.attributes.MAIN_CATEGORY}}</span>\n                            <div class=\"alertText\" *ngIf=\"newIncident.category.attributes.MAIN_CATEGORY == null\">\n                                Please select a category\n                            </div>\n                        </div>\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Sub Category: </span>\n                            <span class=\"field-value\">{{newIncident.category.attributes.SUB_CATEGORY}}</span>\n                            <div class=\"alertText\" *ngIf=\"newIncident.category.attributes.SUB_CATEGORY == null\">\n                                    Please select a sub category\n                            </div>\n                        </div>\n                        <div class=\"detail col-12 col-sm-3\" *ngIf=\"newIncident.category.attributes.INCIDENT_TYPE != null \">\n                            <span class=\"field-title\">Type: </span>\n                            <span class=\"field-value\">{{newIncident.category.attributes.INCIDENT_TYPE}}</span>\n                            <div class=\"alertText\" *ngIf=\"newIncident.category.attributes.INCIDENT_TYPE == null\">\n                                    Please select an incident type\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"details-container\" *ngIf=\"timerInReport\">\n                        <div class=\"details-heading\">\n                            <span class=\"glyphicon glyphicon-alert glyphicon-heading\"></span>\n                            <span class=\"field-title\">Timer</span>\n                        </div>\n                        <div class=\"details-body\">\n                            <div class=\"detail col-12 col-sm-6\">\n                                <span class=\"field-title\">Start Time:</span>\n                                <span class=\"field-value\">{{tempTimerStart}}</span>\n                            </div>\n                            <div class=\"detail col-12 col-sm-6\">\n                                <span class=\"field-title\">End Time:</span>\n                                <span class=\"field-value\">{{tempTimerEnd}}</span>\n                                <div class=\"alertText\" *ngIf=\"!timerValid\">\n                                        Please enter a valid time period\n                                </div>\n                            </div>\n                        </div>\n                </div>\n                <div class=\"details-container\">\n                    <div class=\"details-heading\">\n                        <span class=\"glyphicon glyphicon-info-sign glyphicon-heading\"></span>\n                        <span class=\"field-title\">Incident Details</span>\n                    </div>\n                    <div class=\"details-body\">\n                        <div class=\"detail col-12 col-sm-10\">\n                            <span class=\"field-title\">Executive Summary</span>\n                            <span class=\"field-value\">{{newIncident.attributes.EXECUTIVE_SUMMARY}}</span>\n                            <!-- <div class=\"alertText\" *ngIf=\"newIncident.attributes.EXECUTIVE_SUMMARY == null\">\n                                    Please enter a summary\n                            </div> -->\n                        </div>\n                        <div class=\"detail col-12 col-sm-10\">\n                            <span class=\"field-title\">Description</span>\n                            <span class=\"field-value\">{{newIncident.attributes.DESCRIPTION}}</span>\n                            <!-- <div class=\"alertText\" *ngIf=\"newIncident.attributes.DESCRIPTION == null\">\n                                    Please enter a description\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"details-container\">\n                    <div class=\"details-heading\">\n                        <span class=\"glyphicon glyphicon-user glyphicon-heading\"></span>\n                        <span class=\"field-title\">Involved Persons</span>\n                    </div>\n                    <div class=\"details-body\" *ngFor=\"let person of newIncident.incidentElements['Person']\">\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">First Name: </span>\n                            <span class=\"field-value\">{{person.attributes.FIRST_NAME}}</span>\n                            <div class=\"alertText\" *ngIf=\"person.attributes.FIRST_NAME == null\">\n                                    Please enter a first name\n                            </div>\n                        </div>\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Last Name: </span>\n                            <span class=\"field-value\">{{person.attributes.LAST_NAME}}</span>\n                            <div class=\"alertText\" *ngIf=\"person.attributes.LAST_NAME == null\">\n                                    Please enter a last name\n                            </div>\n                        </div>\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Phone Number: </span>\n                            <span class=\"field-value\">{{person.attributes.PHONE_NUMBER}}</span>\n                            <div class=\"alertText\" *ngIf=\"person.attributes.PHONE_NUMBER == null || person.attributes.PHONE_NUMBER.length != 10\">\n                                    Please enter a valid phone number\n                            </div>\n                        </div>\n                        <!-- <div class=\"alertText\" *ngIf=\"!personExists\"> Please add the person before continuing</div> -->\n                    </div>\n                </div>\n\n                <div class=\"details-container\">\n                    <div class=\"details-heading\">\n                        <span class=\"glyphicon glyphicon-question-mark glyphicon-heading\"></span>\n                        <span class=\"field-title\">Attachments</span>\n                    </div>\n                    <div class=\"details-body\" *ngFor=\"let attachment of newIncident.incidentElements['Attachment']\">\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">File</span>\n                            <span class=\"field-value\" *ngIf=\"attachment.attributes.FILE_NAME != null\">{{attachment.attributes.FILE_NAME}}</span>\n                            <div class=\"alertText\" *ngIf=\"attachment.attributes.FILE_NAME == null\">\n                                    Please select a file.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div id=\"assignGuardPreviewDiv\" class=\"details-container\">\n                    <div class=\"details-heading\">\n                        <span class=\"glyphicon glyphicon-tag glyphicon-heading\"></span>\n                        <span class=\"field-title\">Assigned Guard</span>\n                    </div>\n                    <div class=\"details-body\">\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Name: </span>\n                            <span class=\"field-value\" *ngIf=\"selectedStaff != null\">{{selectedStaff.attributes.FIRST_NAME}} {{selectedStaff.attributes.LAST_NAME}}</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"details-container\">\n                    <div class=\"details-heading\">\n                        <span class=\"glyphicon glyphicon-question-mark glyphicon-heading\"></span>\n                        <span class=\"field-title\">Other Items</span>\n                    </div>\n                    <div class=\"details-body\" *ngFor=\"let item of newIncident.incidentElements['GenericElement']\">\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Item Type</span>\n                            <span class=\"field-value\">{{item.attributes.TYPE}}</span>\n                            <div class=\"alertText\" *ngIf=\"item.attributes.TYPE == null || item.attributes.TYPE.length == 0\">\n                                    Please enter the item type.\n                            </div>\n                        </div>\n                        <div class=\"detail col-12 col-sm-3\">\n                            <span class=\"field-title\">Description</span>\n                            <span class=\"field-value\">{{item.attributes.DESCRIPTION}}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary\" (click)=\"createReport();\" *ngIf=\"reportReady\">Create Report</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_timer_service__ = __webpack_require__("../../../../../src/app/service/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__report_incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__staff_staff__ = __webpack_require__("../../../../../src/app/component/staff/staff.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__location_location_component__ = __webpack_require__("../../../../../src/app/component/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__person_person_component__ = __webpack_require__("../../../../../src/app/component/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__attachment_attachment_component__ = __webpack_require__("../../../../../src/app/component/attachment/attachment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__generic_element_generic_element_component__ = __webpack_require__("../../../../../src/app/component/generic-element/generic-element.component.ts");
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
    function NewReportComponent(incidentService, domService, newReportService, categoryService, staffService, timerService, userService, router) {
        var _this = this;
        this.incidentService = incidentService;
        this.domService = domService;
        this.newReportService = newReportService;
        this.categoryService = categoryService;
        this.staffService = staffService;
        this.timerService = timerService;
        this.userService = userService;
        this.router = router;
        this.locationStr = __WEBPACK_IMPORTED_MODULE_9__location_location_component__["a" /* LocationComponent */].name;
        this.personStr = __WEBPACK_IMPORTED_MODULE_10__person_person_component__["a" /* PersonComponent */].name;
        this.attachmentStr = __WEBPACK_IMPORTED_MODULE_11__attachment_attachment_component__["a" /* AttachmentComponent */].name;
        this.genericStr = __WEBPACK_IMPORTED_MODULE_15__generic_element_generic_element_component__["a" /* GenericElementComponent */].name;
        this.newIncident = new __WEBPACK_IMPORTED_MODULE_7__report_incident__["a" /* Incident */]();
        this.categories = [];
        this.subCategories = [];
        this.categoryTypes = [];
        this.selectedStaffId = -1;
        this.reportReady = false;
        this.timerValid = true;
        this.timerInReport = false;
        this.date = new Date();
        this.staffService.getStaffs().then(function (returnedStaffs) {
            _this.staffList = returnedStaffs.sort(function (a, b) {
                return a.attributes.FIRST_NAME < b.attributes.FIRST_NAME ? -1 : 1;
            });
        });
    }
    /*
    getAllStaff() {
        this.staffService.getStaffsObs()
            .subscribe(
                (responseData) => {
                    this.staffList = responseData;
                },
                (error) => {
                    alert("failed to retrieve staff list");
                },
                () => {
                   // sort it
                }
            )
    }
    */
    NewReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newReportService.resetLocations();
        this.newReportService.currentLocations
            .subscribe(function (locations) {
            _this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_12__util_config_service__["a" /* Config */].LocationKey] = locations;
        });
        this.newReportService.currentPersons
            .subscribe(function (persons) {
            _this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_12__util_config_service__["a" /* Config */].PersonKey] = persons;
        });
        this.newReportService.currentGenericElements
            .subscribe(function (elements) {
            _this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_12__util_config_service__["a" /* Config */].GenericElementKey] = elements;
        });
        this.newReportService.currentAttachments
            .subscribe(function (attachments) {
            _this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_12__util_config_service__["a" /* Config */].AttachmentKey] = attachments;
        });
        this.categoryService.categoryDictionary
            .subscribe(function (categories) {
            _this.categories = categories;
        });
        if (this.userService.isGuard()) {
            var assignDiv = document.getElementById("assignGuardDiv");
            var assignPreviewDiv = document.getElementById("assignGuardPreviewDiv");
            assignDiv.style.visibility = "hidden";
            assignPreviewDiv.style.visibility = "hidden";
        }
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
        //IF CATEGORY == SOME TIMER THEN SHOW TIMER
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
            if (this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_12__util_config_service__["a" /* Config */].StaffKey] != null) {
                this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_12__util_config_service__["a" /* Config */].StaffKey].splice(0, this.newIncident.incidentElements[__WEBPACK_IMPORTED_MODULE_12__util_config_service__["a" /* Config */].StaffKey].length);
            }
        }
    };
    NewReportComponent.prototype.onChangeTimer = function () {
        this.newIncident.attributes.TIMER_START = this.timerService.stringToTime(this.tempTimerStart);
        this.newIncident.attributes.TIMER_END = this.timerService.stringToTime(this.tempTimerEnd);
        if ((this.newIncident.attributes.TIMER_START && !this.newIncident.attributes.TIMER_END) ||
            (!this.newIncident.attributes.TIMER_START && this.newIncident.attributes.TIMER_END) ||
            (this.newIncident.attributes.TIMER_START > this.newIncident.attributes.TIMER_END)) {
            this.timerValid = false;
        }
        else {
            this.timerValid = true;
        }
    };
    NewReportComponent.prototype.removeTimerFromReport = function () {
        this.timerInReport = false;
        this.tempTimerStart = null;
        this.tempTimerEnd = null;
        this.onChangeTimer();
    };
    NewReportComponent.prototype.cancelReview = function () {
    };
    NewReportComponent.prototype.prepareReport = function () {
        console.log(this.newIncident);
        this.reportReady = this.isReportValid();
    };
    NewReportComponent.prototype.createReport = function () {
        var _this = this;
        if (this.reportReady) {
            var currentID = this.userService.getAccountID();
            this.newIncident.attributes.ACCOUNT_ID = currentID;
            if (this.tempTimerStart != null && this.tempTimerEnd != null) {
                this.newIncident.attributes.TIMER_START = this.timerService.stringToTime(this.tempTimerStart);
                this.newIncident.attributes.TIMER_END = this.timerService.stringToTime(this.tempTimerEnd);
            }
            console.log(this.newIncident);
            if (this.userService.isGuard())
                this.convertToTempReport();
            this.incidentService.create(this.newIncident)
                .then(function (returnedIncident) {
                if (returnedIncident != null) {
                    alert("Report successfully created!");
                    setTimeout(function () { location.reload(); }, 300);
                    if (_this.userService.isGuard()) {
                        _this.router.navigate(['guard-app/dashboard']);
                    }
                }
                else
                    alert("Add failed.");
            });
            this.tempTimerStart = null;
            this.tempTimerEnd = null;
            // delete this.newIncident;
            // this.newIncident = new Incident();
        }
        else {
            alert("Please fill in the required fields");
        }
    };
    NewReportComponent.prototype.convertToTempReport = function () {
        this.newIncident.attributes.TEMPORARY_REPORT = 0;
        if (this.selectedStaffId < 0) {
            var self = new __WEBPACK_IMPORTED_MODULE_8__staff_staff__["a" /* Staff */]();
            self.attributes.ACCOUNT_ID = this.userService.getAccountID();
            this.newIncident.insertIncidentElement(self);
        }
    };
    NewReportComponent.prototype.formatTime = function (num) {
        return this.timerService.timeToString(num);
    };
    NewReportComponent.prototype.addComponent = function (componentName) {
        if (componentName === this.locationStr) {
            this.domService.addComponent(__WEBPACK_IMPORTED_MODULE_9__location_location_component__["a" /* LocationComponent */].name, "locations");
        }
        else if (componentName === this.personStr) {
            this.domService.addComponent(__WEBPACK_IMPORTED_MODULE_10__person_person_component__["a" /* PersonComponent */].name, "persons");
        }
        else if (componentName === this.attachmentStr) {
            this.domService.addComponent(__WEBPACK_IMPORTED_MODULE_11__attachment_attachment_component__["a" /* AttachmentComponent */].name, "attachments");
        }
        else if (componentName === this.genericStr) {
            this.domService.addComponent(__WEBPACK_IMPORTED_MODULE_15__generic_element_generic_element_component__["a" /* GenericElementComponent */].name, "generic-elements");
        }
    };
    NewReportComponent.prototype.isReportValid = function () {
        return this.newReportService.validateReport(this.newIncident) && this.timerValid;
    };
    return NewReportComponent;
}());
NewReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'new-report-component',
        template: __webpack_require__("../../../../../src/app/component/report/new-report.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/new-report.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_incident_service__["a" /* IncidentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__util_dom_service__["a" /* DomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_dom_service__["a" /* DomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_new_report_service__["a" /* NewReportService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_category_service__["a" /* CategoryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__service_staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_staff_service__["a" /* StaffService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_timer_service__["a" /* TimerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_13__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__service_user_service__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_14__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__angular_router__["b" /* Router */]) === "function" && _h || Object])
], NewReportComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=new-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/report/report-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"report\">\n\n    <div class=\"x-container\">\n        <span class=\"glyphicon glyphicon-remove glyphicon-btn\" (click)=\"removeFromWorkspace( report.attributes.REPORT_ID )\"></span>\n    </div>\n    <div class=\"header-container\">\n        <div class=\"report-header\">\n            <span class=\"report-id\">Report ID: {{report.attributes.REPORT_ID}} </span>\n            <span class=\"alertText\" *ngIf=\"report.attributes.TEMPORARY_REPORT == 1\"> &mdash; Pending Approval</span>\n        </div>\n        <span class=\"card-text-secondary\" *ngIf=\"report.createdBy != null\">Created By: {{report.createdBy.attributes.FIRST_NAME}} {{report.createdBy.attributes.LAST_NAME}}</span>\n        <span class=\"card-text-secondary\" *ngIf=\"report.attributes.START_TIME != null\">{{report.attributes.START_TIME}}</span>\n        <div id=\"accept-temp\" class=\"row\"  *ngIf=\"report.attributes.TEMPORARY_REPORT == 1\">\n            <button class=\"btn-default btn\" (click)=\"acceptTemp()\">Approve Report</button>\n        </div>\n    </div>\n    <ul class=\"nav nav-tabs\">\n        <li class=\"active\">\n            <a data-toggle=\"tab\" [href]=\"'#basic-info-' + report.attributes.REPORT_ID\">\n                <!-- <span class=\"glyphicon glyphicon-info-sign\"></span> -->\n                Summary\n            </a>\n        </li>\n        <li>\n            <a data-toggle=\"tab\" [href]=\"'#assignments-' + report.attributes.REPORT_ID\">\n                <!-- <span class=\"glyphicon glyphicon-tag\"></span> -->\n                Assignments\n            </a>\n        </li>\n        <li>\n            <a data-toggle=\"tab\" [href]=\"'#locations-' + report.attributes.REPORT_ID\">\n                <!-- <span class=\"glyphicon glyphicon-map-marker\"></span> -->\n                Locations\n            </a>\n        </li>\n        <li><a data-toggle=\"tab\" [href]=\"'#involvements-' + report.attributes.REPORT_ID\">\n                <!-- <span class=\"glyphicon glyphicon-user\"></span> -->\n                Involvements\n            </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n        <div [id]=\"'basic-info-' + report.attributes.REPORT_ID\" class=\"details-container tab-pane fade in active\">\n            <div class=\"details-body\">\n                <div class=\"detail detail-lg col-sm-12\">\n                    <span class=\"field-title\">Category: <span class=\"required-asterisk\" *ngIf=\"editMode['Incident']\">*</span> </span>\n                    <span class=\"field-value\" *ngIf=\"!editMode['Incident'] && report.category != null\">{{report.category.attributes.MAIN_CATEGORY}}</span>\n                    <select class=\"form-control\" *ngIf=\"editMode['Incident']\" [(ngModel)]=\"report_edit.category.attributes.MAIN_CATEGORY\" (change)=\"onSelectCategory()\">\n                        <option *ngFor=\"let category of categories\" [value]=\"category.MAIN_CATEGORY\">{{category.MAIN_CATEGORY}}</option>\n                    </select>\n                </div>\n                <div class=\"detail detail-lg col-sm-12\">\n                    <span class=\"field-title\">Sub Category: <span class=\"required-asterisk\" *ngIf=\"editMode['Incident']\">*</span> </span>\n                    <span class=\"field-value\" *ngIf=\"!editMode['Incident'] && report.category != null\">{{report.category.attributes.SUB_CATEGORY}}</span>\n                    <select class=\"form-control\" *ngIf=\"editMode['Incident']\" [(ngModel)]=\"report_edit.category.attributes.SUB_CATEGORY\" (change)=\"onSelectSubCategory()\">\n                        <option *ngFor=\"let sub of subCategories\" [value]=\"sub.SUB_CATEGORY\">{{sub.SUB_CATEGORY}}</option>\n                    </select>\n                </div>\n                <div class=\"detail detail-lg col-sm-12\">\n                    <span class=\"field-title\">Type: <span class=\"required-asterisk\" *ngIf=\"editMode['Incident']\">*</span> </span>\n                    <span class=\"field-value\" *ngIf=\"!editMode['Incident'] && report.category != null\">{{report.category.attributes.INCIDENT_TYPE}}</span>\n                    <select class=\"form-control\" *ngIf=\"editMode['Incident'] && categoryTypes != null && categoryTypes.length > 0\"\n                        [(ngModel)]=\"report_edit.category.attributes.INCIDENT_TYPE\" (change)=\"onSelectType()\">\n                        <option *ngFor=\"let type of categoryTypes\" [value]=\"type.INCIDENT_TYPE\">{{type.INCIDENT_TYPE}}</option>\n                    </select>\n                </div>\n\n            </div>\n            <div class=\"details-body\">\n                <div class=\"detail detail-lg col-sm-12\">\n                    <span class=\"field-title\">Executive Summary:</span>\n                    <span *ngIf=\"!editMode['Incident']\" class=\"field-value\">{{report.attributes.EXECUTIVE_SUMMARY}}</span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Executive Summary\"\n                          *ngIf=\"editMode['Incident']\" [(ngModel)]=\"report_edit.attributes.EXECUTIVE_SUMMARY\" />\n                </div>\n                <div class=\"detail detail-lg col-sm-12\">\n                    <span class=\"field-title\">Description:</span>\n                    <span *ngIf=\"!editMode['Incident']\" class=\"field-value\">{{report.attributes.DESCRIPTION}}</span>\n                    <textarea rows=\"5\" class=\"form-control\" placeholder=\"Description\"\n                        *ngIf=\"editMode['Incident']\" [(ngModel)]=\"report_edit.attributes.DESCRIPTION\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"details-body\">\n                <div class=\"detail detail-lg col-sm-12\">\n                    <span class=\"field-title\">Timer Start: </span>\n                    <span *ngIf=\"!editMode['Incident'] && report.attributes.TIMER_START != null\n                        && report.attributes.TIMER_START != 0\" class=\"field-value\">{{timerIntToString(report.attributes.TIMER_START)}}</span>\n                    <input type=\"time\" class=\"form-control\" *ngIf=\"editMode['Incident']\" [(ngModel)]=\"tempStartTime\">\n                </div>\n                <div class=\"detail detail-lg col-sm-12\">\n                    <span class=\"field-title\">Timer End: </span>\n                    <span *ngIf=\"!editMode['Incident'] && report.attributes.TIMER_END != null\n                        && report.attributes.TIMER_END != 0\" class=\"field-value\">{{timerIntToString(report.attributes.TIMER_END)}}</span>\n                    <input type=\"time\" class=\"form-control\" *ngIf=\"editMode['Incident']\" [(ngModel)]=\"tempEndTime\">\n                </div>\n            </div>\n            <div class=\"details-body\">\n              <div class=\"detail detail-lg col-sm-12\">\n                  <span class=\"field-title\">Attachments: </span>\n                  <div class=\"details-body\" *ngFor=\"let attachment of report.incidentElements['Attachment']\">\n                    <attachmentView-component [attachment]=attachment> </attachmentView-component>\n                    <div class=\"detail col-sm-2 col-sm-offset-10\">\n                        <span class=\"link alertText\" *ngIf=\"editMode['Incident']\" data-toggle=\"modal\" data-target=\"#removeItemModal\"\n                            (click)=\"setItemIdToRemove('attachment', attachment.attributes.FILE_ID)\">Remove</span>\n                    </div>\n                  </div>\n                  <attachment-component *ngIf=\"editMode['Incident']\" #files></attachment-component>\n                  <span class=\"link\" *ngIf=\"editMode['Incident']\" (click)=\"addIncidentElement('attachment');\">Add Attachment</span>\n\n              </div>\n            </div>\n            <div class=\"bottom-links\">\n                <span class=\"link\" *ngIf=\"!editMode['Incident']\" (click)=\"toggleEditMode('Incident')\">Edit</span>\n                <span class=\"link\" *ngIf=\"editMode['Incident']\" (click)=\"cancelUpdate('Incident')\">Cancel</span>\n                <span class=\"link\" *ngIf=\"editMode['Incident']\" (click)=\"updateReport()\">Save</span>\n            </div>\n        </div>\n        <div [id]=\"'assignments-' + report.attributes.REPORT_ID\" class=\"details-container tab-pane fade\">\n            <div class=\"details-body\">\n                <div class=\"detail detail-lg col-sm-12\">\n                    <span class=\"field-title\">Assigned To: </span>\n                    <span class=\"field-value\" *ngIf=\"!editMode['Staff'] && report.guard != null\">{{report.guard.attributes.FIRST_NAME}} {{report.guard.attributes.LAST_NAME}}</span>\n                    <select *ngIf=\"editMode['Staff']\" class=\"form-control\" [(ngModel)]=\"selectedStaffId\">\n                        <option value=\"-1\"> </option>\n                        <option *ngFor=\"let staff of staffArr\" [value]=\"staff.attributes.ACCOUNT_ID\">{{staff.attributes.FIRST_NAME}} {{staff.attributes.LAST_NAME}}</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"bottom-links\">\n                <span class=\"link\" *ngIf=\"!editMode['Staff']\" (click)=\"toggleEditMode('Staff')\">Edit</span>\n                <span class=\"link\" *ngIf=\"editMode['Staff']\" (click)=\"cancelUpdate('Staff')\">Cancel</span>\n                <span class=\"link\" *ngIf=\"editMode['Staff']\" (click)=\"updateReport()\">Save</span>\n            </div>\n        </div>\n        <div [id]=\"'locations-' + report.attributes.REPORT_ID\" class=\"details-container tab-pane fade\">\n            <div class=\"details-body\" *ngFor=\"let location of report.incidentElements['Location']\">\n                <div class=\"detail col-sm-12\">\n                    <span class=\"field-title\">Campus: </span>\n                    <span class=\"field-value\">{{location.attributes.CITY}}</span>\n                </div>\n                <div class=\"detail col-sm-12\">\n                    <span class=\"field-title\">Building: </span>\n                    <span class=\"field-value\">{{location.attributes.BUILDING_NAME}}</span>\n                </div>\n                <div class=\"detail col-sm-12\">\n                    <span class=\"field-title\">Room Number: </span>\n                    <span class=\"field-value\">{{location.attributes.ROOM_NUMBER}}</span>\n                </div>\n                <div class=\"detail col-sm-2 col-sm-offset-10\">\n                    <span class=\"link alertText\" data-toggle=\"modal\" data-target=\"#removeItemModal\"\n                        (click)=\"setItemIdToRemove('location', location.attributes.LOCATION_ID)\">Remove</span>\n                </div>\n            </div>\n            <location-component id=\"location-component\" *ngIf=\"editMode['Location']\"></location-component>\n            <div class=\"bottom-links\">\n                <span class=\"link\" *ngIf=\"!editMode['Location']\" (click)=\"toggleEditMode('Location')\">Add Location</span>\n                <span class=\"link\" *ngIf=\"editMode['Location']\" (click)=\"cancelUpdate('Location')\">Cancel </span>\n                <span class=\"link\" *ngIf=\"editMode['Location']\" (click)=\"addIncidentElement('location')\">Add </span>\n            </div>\n            <span class=\"not-found\" *ngIf=\"!editMode && report.incidentElements['Location'].length == 0\"> No Locations available</span>\n        </div>\n\n        <div [id]=\"'involvements-' + report.attributes.REPORT_ID\" class=\"details-container tab-pane fade\">\n            <span class=\"card-text-primary\">Persons</span>\n            <div class=\"details-body\" *ngFor=\"let person of report.incidentElements['Person']\">\n                <div class=\"detail col-sm-12\">\n                    <span class=\"field-title\">First Name: </span>\n                    <span class=\"field-value\">{{person.attributes.FIRST_NAME}}</span>\n                </div>\n                <div class=\"detail col-sm-12\">\n                    <span class=\"field-title\">Last Name: </span>\n                    <span class=\"field-value\">{{person.attributes.LAST_NAME}}</span>\n                </div>\n                <div class=\"detail col-sm-12\">\n                    <span class=\"field-title\">Phone Number: </span>\n                    <span class=\"field-value\">{{person.attributes.PHONE_NUMBER}}</span>\n                </div>\n                <div class=\"detail col-sm-2 col-sm-offset-10\">\n                    <span class=\"link alertText\" data-toggle=\"modal\" data-target=\"#removeItemModal\"\n                        (click)=\"setItemIdToRemove('person', person.attributes.PERSON_ID)\">Remove</span>\n                </div>\n            </div>\n            <person-component id=\"person-component\" *ngIf=\"editMode['Person']\"\n                (personAdded)=\"onAddPerson($event)\"></person-component>\n            <div class=\"bottom-links\">\n                <span class=\"link\" *ngIf=\"!editMode['Person']\" (click)=\"toggleEditMode('Person')\">Add Person</span>\n                <span class=\"link\" *ngIf=\"editMode['Person']\" (click)=\"cancelUpdate('Person')\">Cancel </span>\n                <span class=\"link\" *ngIf=\"editMode['Person'] && isPersonAdded\" (click)=\"addIncidentElement('person')\">Add </span>\n            </div>\n\n            <span class=\"card-text-primary\">Other Items</span>  <br>\n            <div class=\"details-body\" *ngFor=\"let item of report.incidentElements['GenericElement']\">\n                <div class=\"detail col-sm-12\">\n                    <span class=\"field-title\">Item Type: </span>\n                    <span class=\"field-value\">{{item.attributes.TYPE}}</span>\n                </div>\n                <div class=\"detail col-sm-12\">\n                    <span class=\"field-title\">Description: </span>\n                    <span class=\"field-value\">{{item.attributes.DESCRIPTION}}</span>\n                </div>\n                <div class=\"detail col-sm-2 col-sm-offset-10\">\n                    <span class=\"link alertText\" data-toggle=\"modal\" data-target=\"#removeItemModal\"\n                        (click)=\"setItemIdToRemove('generic-element', item.attributes.GENERIC_ELEMENT_ID)\">Remove</span>\n                </div>\n            </div>\n            <generic-element-component id=\"generic-element-component\" *ngIf=\"editMode['GenericElement']\"></generic-element-component>\n            <div class=\"bottom-links\">\n                <span class=\"link\" *ngIf=\"!editMode['GenericElement']\" (click)=\"toggleEditMode('GenericElement')\">Add Item</span>\n                <span class=\"link\" *ngIf=\"editMode['GenericElement']\" (click)=\"cancelUpdate('GenericElement')\">Cancel </span>\n                <span class=\"link\" *ngIf=\"editMode['GenericElement']\" (click)=\"addIncidentElement('generic-element')\">Add </span>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"removeItemModal\" class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <span class=\"glyphicon glyphicon-remove glyphicon-heading\"></span>\n                <span class=\"panel-header\">Confirm Remove Item</span>\n            </div>\n            <div class=\"modal-body\">\n                <span class=\"field-value\">Are you sure you want to remove this item?</span>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"cancelReview()\">Cancel</button>\n                <button class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"removeIncidentElement()\">Remove</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/report/report-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__("../../../../../src/app/component/location/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__person_person__ = __webpack_require__("../../../../../src/app/component/person/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__attachment_attachment__ = __webpack_require__("../../../../../src/app/component/attachment/attachment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_location_component__ = __webpack_require__("../../../../../src/app/component/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__person_person_component__ = __webpack_require__("../../../../../src/app/component/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__attachment_attachment_component__ = __webpack_require__("../../../../../src/app/component/attachment/attachment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__generic_element_generic_element_component__ = __webpack_require__("../../../../../src/app/component/generic-element/generic-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_location_service__ = __webpack_require__("../../../../../src/app/service/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_new_report_service__ = __webpack_require__("../../../../../src/app/service/new-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_incident_element_service__ = __webpack_require__("../../../../../src/app/service/incident-element.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_timer_service__ = __webpack_require__("../../../../../src/app/service/timer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import { map } from 'rxjs/operators/map';




var ReportSummaryComponent = (function () {
    function ReportSummaryComponent(incidentService, incidentElementService, categoryService, newReportService, locationService, userService, timerService) {
        this.incidentService = incidentService;
        this.incidentElementService = incidentElementService;
        this.categoryService = categoryService;
        this.newReportService = newReportService;
        this.locationService = locationService;
        this.userService = userService;
        this.timerService = timerService;
        this.isAccepted = false;
        this.report_edit = new __WEBPACK_IMPORTED_MODULE_2__report_incident__["a" /* Incident */]();
        this.categories = [];
        this.subCategories = [];
        this.categoryTypes = [];
        this.selectedStaffId = -1;
        this.staffArr = [];
        this.itemToRemove = "";
        this.itemIdToRemove = -1;
        this.validTimer = true;
        this.isPersonAdded = true;
        this.allFieldsValid = true;
        this.initializeEditableComponents();
    }
    ReportSummaryComponent.prototype.initializeEditableComponents = function () {
        this.editMode = new Map();
        this.editMode["Incident"] = false;
        this.editMode[__WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].StaffKey] = false;
        this.editMode[__WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationKey] = false;
        this.editMode[__WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].PersonKey] = false;
        this.editMode[__WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].GenericElementKey] = false;
        this.editMode[__WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].AttachmentKey] = false;
        console.log(this.editMode);
    };
    ReportSummaryComponent.prototype.removeFromWorkspace = function (id) {
        this.incidentService.removeFromWorkspace(id);
    };
    ReportSummaryComponent.prototype.toggleEditMode = function (type) {
        console.log(type);
        this.editMode[type] = !this.editMode[type];
        console.log(this.editMode[type]);
        if (this.editMode[type]) {
            if (type === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].PersonKey) {
                this.isPersonAdded = false;
            }
            else if (type === "Incident") {
                this.onSelectCategory();
                this.onSelectSubCategory();
                this.onSelectType();
            }
        }
    };
    ReportSummaryComponent.prototype.cancelUpdate = function (type) {
        //this.report_edit = this.copyReportUnbounded( this.report );
        this.report_edit = JSON.parse(JSON.stringify(this.report));
        this.editMode[type] = false;
    };
    ReportSummaryComponent.prototype.updateReport = function () {
        var _this = this;
        this.allFieldsValid = this.newReportService.validateReport(this.report_edit) && this.validateTimer();
        if (this.allFieldsValid) {
            this.report_edit.attributes.TIMER_START = this.timerService.stringToTime(this.tempStartTime);
            this.report_edit.attributes.TIMER_END = this.timerService.stringToTime(this.tempEndTime);
            this.report = this.report_edit;
            this.assignToGuard();
            this.initializeEditableComponents();
            this.incidentService.update(this.report)
                .then(function (response) {
                _this.report = response;
                _this.incidentService.updateIncidentList(_this.report);
                alert("Success! Report was updated.");
            });
        }
        else
            this.alertReportInvalid();
    };
    ReportSummaryComponent.prototype.validateTimer = function () {
        if (this.tempStartTime != null && this.tempEndTime != null) {
            if (this.timerService.stringToTime(this.tempEndTime) < this.timerService.stringToTime(this.tempStartTime)) {
                this.validTimer = false;
                return false;
            }
            return true;
        }
        else if ((this.tempStartTime != null && this.tempEndTime == null) || (this.tempStartTime == null && this.tempEndTime != null)) {
            this.validTimer = false;
            return false;
        }
        else {
            this.validTimer = true;
            return true;
        }
    };
    ReportSummaryComponent.prototype.addIncidentElement = function (type) {
        var element;
        if (type === 'location') {
            element = this.locationComponent.newLocation;
        }
        else if (type === 'person') {
            element = this.personComponent.newPerson;
        }
        else if (type === 'generic-element') {
            element = this.genericElementComponent.newElement;
        }
        else if (type === 'attachment') {
            element = this.attachmentComponent.newAttachment;
        }
        if (this.newReportService.validateIncidentElement(element)) {
            if (this.incidentElementService.addElementNoUpdate(this.report_edit, element)) {
                this.updateReport();
                this.flushComponents();
            }
        }
        else {
            this.alertReportInvalid();
            this.allFieldsValid = false;
        }
    };
    ReportSummaryComponent.prototype.removeIncidentElement = function () {
        var type = this.itemToRemove;
        if (type === 'location') {
            this.incidentElementService
                .removeElementNoUpdate(this.report_edit, __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationTable, this.itemIdToRemove);
        }
        else if (type === 'person') {
            this.incidentElementService
                .removeElementNoUpdate(this.report_edit, __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].PersonTable, this.itemIdToRemove);
        }
        else if (type === 'generic-element') {
            this.incidentElementService
                .removeElementNoUpdate(this.report_edit, __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].GenericElementTable, this.itemIdToRemove);
        }
        else if (type === 'attachment') {
            this.incidentElementService
                .removeElementNoUpdate(this.report_edit, __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].AttachmentTable, this.itemIdToRemove);
        }
        else {
            console.log("Incident element is unrecognized.");
            return;
        }
        this.itemIdToRemove = -1;
        this.itemToRemove = "";
        this.updateReport();
    };
    ReportSummaryComponent.prototype.setItemIdToRemove = function (type, id) {
        this.itemIdToRemove = id;
        this.itemToRemove = type;
    };
    ReportSummaryComponent.prototype.flushComponents = function () {
        if (this.locationComponent != null)
            this.locationComponent.newLocation = new __WEBPACK_IMPORTED_MODULE_3__location_location__["b" /* Location */]();
        if (this.personComponent != null)
            this.personComponent.newPerson = new __WEBPACK_IMPORTED_MODULE_4__person_person__["a" /* Person */]();
        if (this.attachmentComponent != null)
            this.attachmentComponent.newAttachment = new __WEBPACK_IMPORTED_MODULE_5__attachment_attachment__["a" /* Attachment */]();
    };
    ReportSummaryComponent.prototype.timerStringToInt = function (str) {
        return this.timerService.stringToTime(str);
    };
    ReportSummaryComponent.prototype.timerIntToString = function (time) {
        return this.timerService.timeToString(time);
    };
    ReportSummaryComponent.prototype.clearTimer = function () {
        this.tempStartTime = null;
        this.tempEndTime = null;
    };
    ReportSummaryComponent.prototype.onAddPerson = function (event) {
        this.isPersonAdded = event;
    };
    ReportSummaryComponent.prototype.assignToGuard = function () {
        this.report = this.incidentService.updateAssignedStaff(this.report, this.selectedStaffId);
        if (this.report.guard != null)
            this.selectedStaffId = this.report.guard.attributes.ACCOUNT_ID;
    };
    //filter subcategory and type lists according to selection of previous dropdown
    ReportSummaryComponent.prototype.onSelectCategory = function () {
        this.subCategories = this.categoryService
            .getSubCategories(this.report_edit.category.attributes.MAIN_CATEGORY);
        this.categoryTypes = [];
        this.report_edit.attributes.CATEGORY_ID = null;
    };
    ReportSummaryComponent.prototype.onSelectSubCategory = function () {
        var _this = this;
        var index = this.subCategories.findIndex(function (item) { return item.SUB_CATEGORY == _this.report_edit.category.attributes.SUB_CATEGORY; });
        if (index < 0)
            return;
        var subcategory = this.subCategories[index];
        if (subcategory.TYPES.length == 0) {
            this.report_edit.category.attributes.CATEGORY_ID = subcategory.CATEGORY_ID;
            this.report_edit.attributes.CATEGORY_ID = this.report_edit.category.attributes.CATEGORY_ID;
            this.report_edit.category.attributes.INCIDENT_TYPE = null;
        }
        else if (subcategory.TYPES.length == 1) {
            var type = subcategory.TYPES[0];
            this.report_edit.category.attributes.INCIDENT_TYPE = type.INCIDENT_TYPE;
            this.report_edit.attributes.CATEGORY_ID = type.CATEGORY_ID;
        }
        else {
            this.report_edit.attributes.CATEGORY_ID = null;
        }
        this.categoryTypes = subcategory.TYPES;
    };
    ReportSummaryComponent.prototype.onSelectType = function () {
        var _this = this;
        if (this.report_edit.category.attributes.INCIDENT_TYPE != null) {
            var index = this.categoryTypes.findIndex(function (item) { return item.INCIDENT_TYPE === _this.report_edit.category.attributes.INCIDENT_TYPE; });
            if (index >= 0) {
                var type = this.categoryTypes[index];
                this.report_edit.attributes.CATEGORY_ID = type.CATEGORY_ID;
                this.report_edit.category.attributes.CATEGORY_ID = type.CATEGORY_ID;
                this.report_edit.category.attributes.INCIDENT_TYPE = type.INCIDENT_TYPE; // for report summary
                console.log(this.report_edit);
                console.log(type.CATEGORY_ID);
                console.log(this.report_edit.attributes.CATEGORY_ID);
            }
        }
    };
    ReportSummaryComponent.prototype.acceptTemp = function () {
        var _this = this;
        var newIncident = new __WEBPACK_IMPORTED_MODULE_2__report_incident__["a" /* Incident */]();
        newIncident = this.report;
        var reportID = this.report.attributes.REPORT_ID;
        this.report.attributes.STATUS = 4;
        this.incidentService.update(this.report)
            .then(function (returnedIncident) {
            if (returnedIncident != null) {
                alert("Report successfully updated");
                newIncident.attributes.ACCOUNT_ID = _this.userService.getAccountID();
                newIncident.attributes.REPORT_ID = null;
                _this.incidentService.create(newIncident)
                    .then(function (returnedNewIncident) {
                    if (returnedNewIncident != null) {
                        alert("Report successfully created!");
                        setTimeout(function () { location.reload(); }, 300);
                    }
                    else
                        alert("Add failed.");
                });
            }
            else {
                alert("update failed");
            }
        });
        this.report.attributes.REPORT_ID = reportID;
        this.removeFromWorkspace(reportID);
    };
    ReportSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.inputReport != null) {
            this.report = this.inputReport;
            this.report_edit = this.deepCopyReport(this.report);
            if (this.report.guard != null)
                this.selectedStaffId = this.report.guard.attributes.ACCOUNT_ID;
        }
        this.categoryService.categoryDictionary.subscribe(function (categories) {
            _this.categories = categories;
            console.log(_this.categories);
        });
        this.incidentService.staffArr.subscribe(function (staffArr) {
            _this.staffArr = staffArr;
        });
        console.log(this.report_edit);
    };
    ReportSummaryComponent.prototype.alertReportInvalid = function () {
        alert("Please fill in all required fields.");
    };
    ReportSummaryComponent.prototype.deepCopyReport = function (source) {
        return JSON.parse(JSON.stringify(source));
    };
    return ReportSummaryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__report_incident__["a" /* Incident */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__report_incident__["a" /* Incident */]) === "function" && _a || Object)
], ReportSummaryComponent.prototype, "inputReport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__location_location_component__["a" /* LocationComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__location_location_component__["a" /* LocationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__location_location_component__["a" /* LocationComponent */]) === "function" && _b || Object)
], ReportSummaryComponent.prototype, "locationComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7__person_person_component__["a" /* PersonComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__person_person_component__["a" /* PersonComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__person_person_component__["a" /* PersonComponent */]) === "function" && _c || Object)
], ReportSummaryComponent.prototype, "personComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__generic_element_generic_element_component__["a" /* GenericElementComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__generic_element_generic_element_component__["a" /* GenericElementComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__generic_element_generic_element_component__["a" /* GenericElementComponent */]) === "function" && _d || Object)
], ReportSummaryComponent.prototype, "genericElementComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_8__attachment_attachment_component__["a" /* AttachmentComponent */]),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__attachment_attachment_component__["a" /* AttachmentComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__attachment_attachment_component__["a" /* AttachmentComponent */]) === "function" && _e || Object)
], ReportSummaryComponent.prototype, "attachmentComponent", void 0);
ReportSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'report-summary',
        template: __webpack_require__("../../../../../src/app/component/report/report-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/report-summary.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__service_incident_service__["a" /* IncidentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_15__service_incident_element_service__["a" /* IncidentElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__service_incident_element_service__["a" /* IncidentElementService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12__service_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__service_category_service__["a" /* CategoryService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_14__service_new_report_service__["a" /* NewReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__service_new_report_service__["a" /* NewReportService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_11__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__service_location_service__["a" /* LocationService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_13__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__service_user_service__["a" /* UserService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_16__service_timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__service_timer_service__["a" /* TimerService */]) === "function" && _m || Object])
], ReportSummaryComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=report-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<spinner-component *ngIf=\"showSpinner\"></spinner-component>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"content-container col-12 col-sm-10 col-sm-offset-1 col-sm-offset-right-1\n                    col-lg-6 col-lg-offset-3 col-lg-offset-right-3\">\n\n            <form (ngSubmit)=\"onSearch()\" id=\"search-form\">\n                <input type=\"text\" class=\"form-control search-element\" id=\"search-input\"\n                    [(ngModel)]=\"queryString\" [ngModelOptions]=\"{standalone: true}\"/>\n                <button id=\"search-btn\" class=\"btn btn-primary search-element\">\n                    <span class=\"glyphicon glyphicon-search\" type=\"submit\"></span>\n                </button>\n                <br>\n                <input type=\"checkbox\" [(ngModel)]=\"isCTSearch\" [ngModelOptions]=\"{standalone: true}\">Search specific terms\n            </form>\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"incident-card\" *ngFor=\"let incident of incidents\">\n                            <div class=\"main-content\">\n                                <div class=\"detail-row\">\n                                    <span class=\"card-text-secondary\">Report #{{incident.attributes.REPORT_ID}}</span>\n                                    <span class=\"card-text-tertiary\" *ngIf=\"incident.attributes.START_TIME != null\">{{incident.attributes.START_TIME}}</span>                                                                        \n                                    <span class=\"card-text-secondary alertText\" *ngIf=\"incident.attributes.TEMPORARY_REPORT == 1\"> &mdash; Pending Approval</span>\n                                </div>\n                                <!-- <div class=\"detail-row\">\n                                    <span class=\"card-text-secondary\">Status: {{statuses[incident.attributes.STATUS]}}</span>\n                                </div> -->\n                                <div class=\"detail-row description\">\n                                    <span class=\"card-text-primary\">\n                                        {{incident.attributes.EXECUTIVE_SUMMARY}}\n                                    </span>\n                                </div>\n                                <div class=\"detail-row description\">\n                                    <span class=\"card-text-primary\">\n                                        Description: {{incident.attributes.DESCRIPTION}}\n                                    </span>\n                                </div>\n                                <div class=\"detail-row\">\n                                    <span class=\"card-text-secondary\">\n                                        Category: {{incident.category.attributes.MAIN_CATEGORY}} - {{incident.category.attributes.SUB_CATEGORY}} {{incident.category.attributes.INCIDENT_TYPE}}\n                                    </span>\n                                </div>\n                                <div class=\"detail-row\" *ngIf=\"incident.guard != null && incident.guard.attributes.FIRST_NAME != null\">\n                                    <span class=\"card-text-secondary\">\n                                        Assigned To: {{incident.guard.attributes.FIRST_NAME}} {{incident.guard.attributes.LAST_NAME}}\n                                    </span>\n                                </div>\n                                <div class=\"detail-row\" *ngIf=\"incident.incidentElements['Location'] != null && incident.incidentElements['Location'].length > 0\">\n                                    <span class=\"card-text-secondary\">Locations: </span>\n                                    <span class=\"card-text-secondary\" *ngFor=\"let location of incident.incidentElements['Location']\">\n                                        [{{location.attributes.CITY}} {{location.attributes.BUILDING_NAME}} {{location.attributes.ROOM_NUMBER}}]\n                                    </span>\n                                </div>\n                                <div class=\"detail-row\" *ngIf=\"incident.incidentElements['Person'] != null && incident.incidentElements['Person'].length > 0\">\n                                    <span class=\"card-text-secondary\">Involved Persons: </span>\n                                    <span class=\"card-text-secondary\" *ngFor=\"let person of incident.incidentElements['Person']\">\n                                        [{{person.attributes.FIRST_NAME}} {{person.attributes.LAST_NAME}} {{person.attributes.PHONE_NUMBER}}]\n                                    </span>\n                                </div>\n                                <div class=\"detail-row\">\n                                    <span class=\"card-text-secondary\">Created By: \n                                        [{{incident.createdBy.attributes.FIRST_NAME}} {{incident.createdBy.attributes.LAST_NAME}}]                                            \n                                    </span>\n                                </div>\n                                <div class=\"detail-row\">\n                                    <span class=\"card-text-secondary\">Status: \n                                        [{{statuses[incident.attributes.STATUS]}}]                                            \n                                    </span>\n                                </div>\n                            </div>\n\n                            <div class=\"actions\">\n                                <button class=\"btn btn-default\" *ngIf=\"incident.inWorkspace\"\n                                    (click)=\"removeFromWorkspace(incident.attributes.REPORT_ID)\">\n                                    Remove From Workspace\n                                </button>\n    \n                                <button class=\"btn btn-primary\" *ngIf=\"!incident.inWorkspace\"\n                                    (click)=\"addToWorkspace(incident)\">\n                                    Add To Workspace\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
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





var SearchComponent = (function () {
    function SearchComponent(incidentService, userService, router) {
        this.incidentService = incidentService;
        this.userService = userService;
        this.router = router;
        this.showSpinner = true;
        this.isCTSearch = false;
        this.statuses = ['Created', 'En Route', 'Working', 'Closed', 'Sealed'];
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['login']);
        }
    }
    ;
    SearchComponent.prototype.onSearch = function () {
        var _this = this;
        this.showSpinner = true;
        if (this.queryString == "" || this.queryString == undefined) {
            this.getAllReports();
            return;
        }
        else {
            this.incidentService.doSearch(this.constructBodyRequest(), this.isCTSearch)
                .subscribe(function (responseData) {
                _this.incidents = responseData;
            }, function (errors) {
                if (errors.status == 400) {
                    alert("Search failed, Reason: bad format");
                }
                _this.showSpinner = false;
            }, function () {
                alert("Found " + _this.incidents.length + " records.");
                _this.showSpinner = false;
            });
        }
    };
    SearchComponent.prototype.addToWorkspace = function (incident) {
        this.incidentService.addToWorkspace(incident);
    };
    SearchComponent.prototype.removeFromWorkspace = function (id) {
        if (id > 0) {
            this.incidentService.removeFromWorkspace(id);
            var index = this.incidents.findIndex(function (i) { return i.attributes.REPORT_ID == id; });
            if (index >= 0) {
                this.incidents[index].inWorkspace = false;
            }
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.getAllReports();
    };
    SearchComponent.prototype.constructBodyRequest = function () {
        var body = new URLSearchParams();
        var user = this.userService.getCurrentUser();
        body.append('query', this.queryString);
        body.append('userId', user.attributes.ACCOUNT_ID.toString());
        console.log(body.toString());
        return body.toString();
    };
    SearchComponent.prototype.getAllReports = function () {
        var _this = this;
        this.incidentService.getIncidentsObs()
            .subscribe(function (responseData) {
            _this.incidents = responseData;
        }, function (errors) {
            alert(__WEBPACK_IMPORTED_MODULE_4__util_config_service__["a" /* Config */].FailedToRetrieveMsg);
        }, function () {
            _this.showSpinner = false;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/component/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_incident_service__["a" /* IncidentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/staff/staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"staff-list-panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <div class=\"toolbar\">\n            <div class=\"flex\">\n                <span class=\"glyphicon glyphicon-user glyphicon-heading\"></span>\n                <span class=\"panel-header\">Staff</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div id=\"staff-list\" class=\"col-md-12 col-lg-12\">\n            <div class=\"row\">\n                <div *ngFor=\"let staff of staffList\">\n                    <div class=\"staff-card\" *ngIf=\"staff.attributes.LAST_NAME.length > 0\">\n                        <div class=\"status-indicator-container\">\n                            <div class=\"status-indicator\"></div>\n                        </div>\n                        <div class=\"name-plate\">\n                            <span class=\"card-text-primary\">{{staff.attributes.FIRST_NAME}} {{staff.attributes.LAST_NAME}}</span>\n                            <span class=\"card-text-secondary\">Surrey</span>\n                        </div>\n                        <div class=\"actions\">\n                            <span class=\"glyphicon glyphicon-tag\"></span>\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</div>\n\n"

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

/***/ "../../../../../src/app/component/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\"\n     class=\"modal fade\"\n     tabindex=\"-1\"\n     [ngClass]=\"{'in': visibleAnimate}\"\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title mt-2\">Select Status</h4>\n      </div>\n\n      <!-- Category Picker -->\n      <div class=\"mt-2\">\n        <label class=\"field-title modal-field-title\">Status</label>\n        <select class=\"form-control category-field\"\n                ng-model=\"newStatus\"\n                (change)=\"onSelectStatus($event.target.value)\">\n          <option disabled>──────────</option>\n          <option *ngFor=\"let status of statuses\" value={{status}}>{{status}}</option>\n        </select>\n      </div>\n\n      <div class=\"modal-footer mt-2 pt-2 mb-1\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitStatus($event.target)\">Save changes</button>\n        <button type=\"button\" class=\"btn btn-secondary ml-1\" (click)=\"hide()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
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

var StatusComponent = (function () {
    function StatusComponent() {
        this.statusSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.statuses = ['Created', 'En Route', 'Working', 'Resolved', 'Closed'];
        this.visible = false;
        this.visibleAnimate = false;
    }
    StatusComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    StatusComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    StatusComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    StatusComponent.prototype.onSelectStatus = function (statusName) {
        this.newStatus = this.statuses.indexOf(statusName);
    };
    StatusComponent.prototype.submitStatus = function () {
        console.log('submitting status');
        if (this.newStatus == -1) {
            console.log('Please select a status');
        }
        if (this.newStatus != -1) {
            console.log('status id: ' + this.newStatus);
            var id = this.newStatus.toString();
            this.statusSaved.emit(id);
            this.hide();
        }
    };
    StatusComponent.prototype.ngOnInit = function () {
    };
    return StatusComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], StatusComponent.prototype, "statusSaved", void 0);
StatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'status-component',
        template: __webpack_require__("../../../../../src/app/component/status/status.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/guard-app.css")]
    }),
    __metadata("design:paramtypes", [])
], StatusComponent);

var _a;
//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"timer-list-panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <div class=\"toolbar\">\n            <div class=\"flex\">\n                <span class=\"glyphicon glyphicon-alert glyphicon-heading\"></span>\n                <span class=\"panel-header\">WatchList</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"col-sm-12\">\n            <div class=\"timer-card\" *ngFor=\"let timer of timerList\">\n                <div class=\"main-content\">\n                    <div class=\"detail-row\">\n                        <span class=\"card-text-primary\">{{timer.incident.category.attributes.MAIN_CATEGORY}} &mdash; {{timer.incident.category.attributes.SUB_CATEGORY}}  {{timer.incident.category.attributes.INCIDENT_TYPE}}</span>\n                    </div>\n                    <div class=\"detail-row\">\n                        <span class=\"card-text-secondary\">Report #{{timer.incident.attributes.REPORT_ID}}</span>\n                    </div>\n                    <!-- <div class=\"detail-row\">\n                        <span class=\"card-text-primary\">{{timer.incident.attributes.EXECUTIVE_SUMMARY}}</span>\n                    </div> -->\n                    <!-- <div class=\"detail-row\">\n                        <button id=\"modifyBtn\" class=\"btn\" (click)=\"timer.modify = !timer.modify\">Modify</button>\n                    </div> -->\n                    <!-- <div class=\"detail-row\">\n                        <span class=\"card-text-secondary\">Start: {{timeToString(timer.TIMER_START)}}</span>\n                    </div>\n                    <div class=\"detail-row\">\n                        <span class=\"card-text-secondary\">End: {{timeToString(timer.TIMER_END)}}</span>\n                    </div> -->\n                </div>\n                <div class=\"timer-container\">\n                    <span class=\"card-text-primary time-remaining\" data-toggle=\"modal\" data-target=\"#modifyTimerModal\" (click)=\"setTimerToModify(timer)\">{{durationToString(timer.TIME_REMAINING)}}</span>     \n                    <!-- <span class=\"card-text-secondary glyphicon glyphicon-cog\"></span> -->\n                    <!-- <div *ngIf=\"timer.modify\">\n                        <input type=\"time\" [(ngModel)] = \"tempStart\" (change)=\"onChangeModifyTimer()\">\n                        <input type=\"time\" [(ngModel)] = \"tempEnd\" (change)=\"onChangeModifyTimer()\">\n                        <div class=\"alertText\" *ngIf=\"!modifyValid\">\n                            Please enter a valid time period\n                        </div>\n                        <button class=\"btn\" (click)=\"modifyTimer(timer)\" *ngIf=\"modifyValid\">Confirm</button>\n                    </div>                    -->\n                </div>\n                <!-- <div class=\"x-container\">\n                    <span class=\"glyphicon glyphicon-remove glyphicon-btn\"  (click)=\"removeTimer(timer)\"></span>        \n                </div> -->\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"modifyTimerModal\" class=\"modal fade\" role=\"dialog\" *ngIf=\"timerToModify.incident.attributes.REPORT_ID != null\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <span class=\"glyphicon glyphicon-timer glyphicon-heading\"></span>\n                    <span class=\"panel-header\">Modify Timer - Report #{{timerToModify.incident.attributes.REPORT_ID}}</span>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"details-container\">\n                        <div class=\"details-body\">\n                            <div class=\"detail col-12 col-sm-3\">\n                                <span class=\"field-title\">Timer Start: <span class=\"required-asterisk\">*</span> </span>                                \n                                <input class=\"form-control\" type=\"time\" [(ngModel)] = \"tempStart\" (change)=\"onChangeModifyTimer()\">\n                                <span class=\"field-title\">Timer End: <span class=\"required-asterisk\">*</span> </span>                                                            \n                                <input class=\"form-control\" type=\"time\" [(ngModel)] = \"tempEnd\" (change)=\"onChangeModifyTimer()\">\n                            </div>\n                            <!-- <div class=\"alertText\" *ngIf=\"!modifyValid\">\n                                Please enter a valid time period\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"removeTimer()\">Delete Timer</button>                        \n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"resetTimerToModify()\">Cancel</button>\n                    <button class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"modifyTimer()\" *ngIf=\"modifyValid\">Confirm</button>                    \n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/component/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer__ = __webpack_require__("../../../../../src/app/component/timer/timer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_timer_service__ = __webpack_require__("../../../../../src/app/service/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimerComponent = (function () {
    function TimerComponent(timerService, incidentService) {
        var _this = this;
        this.timerService = timerService;
        this.incidentService = incidentService;
        this.timerList = new Array();
        this.newTimer = new __WEBPACK_IMPORTED_MODULE_1__timer__["a" /* Timer */]();
        this.modifyValid = true;
        this.timerToModify = new __WEBPACK_IMPORTED_MODULE_1__timer__["a" /* Timer */]();
        var nowDate = new Date(Date.now());
        this.timeNow = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;
        this.incidentService.editedReport
            .subscribe(function (value) {
            if (value != null && _this.timerList != null && _this.timerList.length > 0 && value.attributes.TIMER_START != null &&
                value.attributes.TIMER_END != null && value.attributes.TIMER_END > _this.timeNow) {
                var index = _this.timerList.findIndex(function (i) { return i.incident.attributes.REPORT_ID == value.attributes.REPORT_ID; });
                if (index >= 0 && value.attributes) {
                    _this.timerList.splice(index, 1, _this.timerService.createTimerInt(value, value.attributes.TIMER_START, value.attributes.TIMER_END));
                }
                else {
                    _this.timerList.push(_this.timerService.createTimerInt(value, value.attributes.TIMER_START, value.attributes.TIMER_END));
                }
            }
            _this.sortTimers();
        });
        this.incidentService.reportsInList.subscribe(function (incidents) {
            var timerList = new Array();
            incidents.forEach(function (incident) {
                if (incident.attributes.TIMER_START != null && incident.attributes.TIMER_END != null
                    && incident.attributes.TIMER_END > incident.attributes.TIMER_START && incident.attributes.TIMER_END > _this.timeNow) {
                    timerList.push(_this.timerService.createTimerInt(incident, incident.attributes.TIMER_START, incident.attributes.TIMER_END));
                }
            });
            _this.timerList = timerList;
            _this.sortTimers();
        });
    }
    // getTimers (): void {
    //     var timerList : Array<Timer> = new Array<Timer>();
    //     var nowDate = new Date ( Date.now() );
    //     var nowTime = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;
    //     this.incidentService.reportsInList.subscribe( incidents => {
    //         incidents.forEach( incident => {
    //             if ( incident.attributes.TIMER_START != null && incident.attributes.TIMER_END != null 
    //                 && incident.attributes.TIMER_END > incident.attributes.TIMER_START && incident.attributes.TIMER_END > nowTime ) {
    //                 timerList.push( this.timerService.createTimerInt( incident, incident.attributes.TIMER_START, incident.attributes.TIMER_END ));
    //             }
    //         });
    //         this.timerList = timerList;
    //         this.sortTimers();
    //     });
    // }
    TimerComponent.prototype.sortTimers = function () {
        this.timerList.sort(function (a, b) {
            if (a.TIME_REMAINING < b.TIME_REMAINING) {
                return -1;
            }
            else if (a.TIME_REMAINING > b.TIME_REMAINING) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    TimerComponent.prototype.start = function () {
        var _this = this;
        var x = setInterval(function () { return _this.countDown(); }, 1000);
    };
    TimerComponent.prototype.countDown = function () {
        var _this = this;
        this.timerList.forEach(function (timer) {
            _this.timeNow = _this.timeNow - 1000;
            timer.TIME_REMAINING = timer.TIME_REMAINING - 1000;
            if (timer.TIME_REMAINING <= 0) {
                _this.timeUp(timer);
            }
        });
    };
    TimerComponent.prototype.onChangeModifyTimer = function () {
        if (this.tempStart == null || this.tempEnd == null) {
            this.modifyValid = false;
        }
        else {
            this.modifyValid = true;
            if (this.timerService.stringToTime(this.tempStart) > this.timerService.stringToTime(this.tempEnd)) {
                this.modifyValid = false;
            }
            else {
                this.modifyValid = true;
            }
        }
    };
    TimerComponent.prototype.setTimerToModify = function (timer) {
        timer.modify = !timer.modify;
        console.log(timer);
        this.timerToModify = timer;
    };
    TimerComponent.prototype.resetTimerToModify = function () {
        this.timerToModify = new __WEBPACK_IMPORTED_MODULE_1__timer__["a" /* Timer */]();
    };
    TimerComponent.prototype.modifyTimer = function () {
        var timer = this.timerToModify;
        timer.TIMER_START = this.timerService.stringToTime(this.tempStart);
        timer.TIMER_END = this.timerService.stringToTime(this.tempEnd);
        timer.TIME_REMAINING = timer.TIMER_END - this.timeNow;
        timer.incident.attributes.TIMER_START = timer.TIMER_START;
        timer.incident.attributes.TIMER_END = timer.TIMER_END;
        this.incidentService.update(timer.incident);
        this.tempStart = "";
        this.tempEnd = "";
    };
    TimerComponent.prototype.timeUp = function (timer) {
        if (confirm("Time up for" + timer.incident.attributes.EXECUTIVE_SUMMARY + ", repeat timer?")) {
            var temp = timer.TIMER_END;
            timer.TIMER_END = timer.TIMER_END + (timer.TIMER_END - timer.TIMER_START);
            timer.TIMER_START = temp;
            timer.TIME_REMAINING = timer.TIMER_END - timer.TIMER_START;
            timer.TIMER_END - timer.TIMER_START;
        }
        else {
            this.deleteTimer(timer);
        }
    };
    TimerComponent.prototype.removeTimer = function () {
        if (confirm("delete timer?")) {
            this.deleteTimer(this.timerToModify);
            this.resetTimerToModify();
        }
    };
    TimerComponent.prototype.deleteTimer = function (dtimer) {
        this.timerService.deleteTimer(dtimer);
        var i = this.timerList.findIndex(function (timer) { return timer === dtimer; });
        this.timerList.splice(i, 1);
    };
    TimerComponent.prototype.timeToString = function (time) {
        return this.timerService.timeToString(time);
    };
    TimerComponent.prototype.durationToString = function (time) {
        return this.timerService.durationToString(time);
    };
    TimerComponent.prototype.ngOnInit = function () {
        // this.getTimers();
    };
    TimerComponent.prototype.ngAfterViewInit = function () {
        this.start();
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'timer-component',
        template: __webpack_require__("../../../../../src/app/component/timer/timer.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/css/panels.css"), __webpack_require__("../../../../../src/assets/css/timer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_timer_service__["a" /* TimerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_incident_service__["a" /* IncidentService */]) === "function" && _b || Object])
], TimerComponent);

var _a, _b;
//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/timer/timer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");

var Timer = (function () {
    function Timer() {
        this.modify = false;
        this.incident = new __WEBPACK_IMPORTED_MODULE_0__report_incident__["a" /* Incident */]();
    }
    return Timer;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "../../../../../src/app/component/vehicle/vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> This is a Vehicle Component </h1>\n\n<button (click)=\"removeComp()\"> Destroy Me </button>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
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
    function CategoryService(http) {
        var _this = this;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.categoriesUrl = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].CategoriesURI;
        this.bs_categories = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.categoryDictionary = this.bs_categories.asObservable();
        this.getCategories().then(function (response) {
            var cat = _this.toCategoryDictionary(response);
            _this.bs_categories.next(cat);
        });
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
    //filter subcategory and type lists according to selection of previous dropdown
    CategoryService.prototype.getSubCategories = function (mainCategory) {
        var categories = this.bs_categories.getValue();
        var index = categories.findIndex(function (item) { return item.MAIN_CATEGORY === mainCategory; });
        if (index < 0)
            return;
        var subCategories = categories[index].SUBCATEGORIES;
        return subCategories;
    };
    CategoryService.prototype.getIncidentTypes = function (mainCategory, subCategory) {
        var subCategories = this.getSubCategories(mainCategory);
        var index = subCategories.findIndex(function (item) { return item.SUB_CATEGORY == subCategory; });
        if (index < 0)
            return;
        var subcategory = subCategories[index];
        return subcategory.TYPES;
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
    CategoryService.prototype.handleError = function (error) {
        alert("An error occurred.");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/incident-element.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentElementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
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
        if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].CategoryTable) {
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].IncidentCategoryKey;
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationTable) {
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationKey;
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].StaffTable) {
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].StaffKey;
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].PersonTable) {
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].PersonKey;
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].AttachmentTable) {
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].AttachmentKey;
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].GenericElementTable) {
            key = __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].GenericElementKey;
        }
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
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].AttachmentTable) {
            elementIndex = incident.incidentElements[key].findIndex(function (i) {
                return i.attributes.FILE_ID == idToSearch;
            });
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].GenericElementTable) {
            elementIndex = incident.incidentElements[key].findIndex(function (i) {
                return i.attributes.GENERIC_ELEMENT_ID == idToSearch;
            });
        }
        return elementIndex;
    };
    IncidentElementService.prototype.getElementIndex = function (incident, element) {
        var table = element.table;
        var key = this.getElementKey(table);
        var elementIndex = -1;
        if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].LocationTable) {
            elementIndex = incident.incidentElements[key].findIndex(function (i) {
                return i.attributes.LOCATION_ID == element.attributes.LOCATION_ID;
            });
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].StaffTable) {
            elementIndex = incident.incidentElements[key].findIndex(function (i) {
                return i.attributes.ACCOUNT_ID == element.attributes.ACCOUNT_ID;
            });
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].AttachmentTable) {
            elementIndex = incident.incidentElements[key].findIndex(function (i) {
                return i.attributes.FILE_ID == element.attributes.FILE_ID;
            });
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_1__util_config_service__["a" /* Config */].PersonTable) {
            var elem = element;
            var arr = incident.incidentElements[key];
            elementIndex = arr.findIndex(function (i) {
                return i.attributes.FIRST_NAME === elem.attributes.FIRST_NAME &&
                    i.attributes.LAST_NAME === elem.attributes.LAST_NAME &&
                    i.attributes.PHONE_NUMBER === elem.attributes.PHONE_NUMBER;
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
            var promise = this.incidentService.update(incident)
                .then(function (incident) {
                return incident;
            });
        }
        return Promise.resolve(promise);
    };
    IncidentElementService.prototype.addElement = function (incident, element) {
        var key = this.getElementKey(element.table);
        incident.incidentElements[key].push(element);
        var promise = this.incidentService.update(incident)
            .then(function (incident) {
            return incident;
        });
        return Promise.resolve(promise);
    };
    // Dont call incidentService.update()
    IncidentElementService.prototype.addElementNoUpdate = function (incident, element) {
        var key = this.getElementKey(element.table);
        var index = this.getElementIndex(incident, element);
        if (index < 0) {
            incident.incidentElements[key].push(element);
            return true;
        }
        alert("This item has already been added to the report.");
        return false;
    };
    // Dont call incidentService.update()
    IncidentElementService.prototype.removeElementNoUpdate = function (incident, table, id) {
        var key = this.getElementKey(table);
        var index = this.getElementIndexByID(incident, id, table);
        if (index >= 0)
            incident.incidentElements[key].splice(index, 1);
    };
    IncidentElementService.prototype.removeElement = function (incident, idToRemove, table) {
        var key = this.getElementKey(table);
        var index = -1;
        index = this.getElementIndexByID(incident, idToRemove, table);
        if (incident.incidentElements[key] != null && index != -1) {
            incident.incidentElements[key].splice(index, 1);
            var promise = this.incidentService.update(incident)
                .then(function (incident) {
                return incident;
            });
        }
        return Promise.resolve(promise);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__("../../../../class-transformer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_report_incident__ = __webpack_require__("../../../../../src/app/component/report/incident.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_staff_service__ = __webpack_require__("../../../../../src/app/service/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_location_service__ = __webpack_require__("../../../../../src/app/service/location.service.ts");
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












var IncidentService = (function () {
    function IncidentService(http, staffService, locationService, categoryService) {
        var _this = this;
        this.http = http;
        this.staffService = staffService;
        this.locationService = locationService;
        this.categoryService = categoryService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.getIncidentsUrl = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].GetIncidentsURI;
        this.insertIncidentUrl = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentsURI;
        this.updateIncidentsUrl = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].UpdateIncidentURI;
        this.incidentsUrl = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentsURI;
        this.createdByIncidentsUrl = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].CreatedIncidentsURI;
        this.userService = new __WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */];
        this.bs_reportsInList = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.reportsInList = this.bs_reportsInList.asObservable();
        this.bs_reportsToAddToWorkspace = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.reportsToAddToWorkspace = this.bs_reportsToAddToWorkspace.asObservable();
        this.bs_lastRemovedId = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.lastRemovedId = this.bs_lastRemovedId.asObservable();
        this.bs_categories = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.categoryDictionary = this.bs_categories.asObservable();
        this.bs_editedReport = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.editedReport = this.bs_editedReport.asObservable();
        this.bs_staffArr = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.staffArr = this.bs_staffArr.asObservable();
        this.campusArr = [];
        this.staffService.getStaffs().then(function (returnedArr) {
            _this.bs_staffArr.next(returnedArr);
        });
        this.locationService.getCampus().then(function (response) {
            _this.campusArr = response;
        });
        this.categoryService.getCategories().then(function (response) {
            var cat = _this.categoryService.toCategoryDictionary(response);
            _this.bs_categories.next(cat);
        });
        // Web socket
        var wss = new WebSocket(__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentsWebSocketURI);
        wss.onopen = function () {
            console.log("IncidentUpdate Socket has been opened!");
        };
        wss.onmessage = function (message) {
            var incident = this.initializeIncident(JSON.parse(JSON.parse(message.data)));
            var user = this.userService.getCurrentUser();
            var reportList = this.bs_reportsInList.getValue();
            // if user is a guard, then check if
            if (this.userService.isGuard()) {
                this.processWebsocketIncidentForGuard(incident);
            }
            else if (this.userService.isAdmin() || this.userService.isSupervisor()) {
                this.addReportToList(incident);
            }
            else {
                console.log("Unexpected account type: " + this.userService.getAccountType());
            }
        }.bind(this);
    }
    IncidentService.prototype.processWebsocketIncidentForGuard = function (incident) {
        var reportList = this.bs_reportsInList.getValue();
        var reportListIndex = reportList.findIndex(function (i) { return i.attributes.REPORT_ID == incident.attributes.REPORT_ID; });
        if (this.reportAssignedToThisUser(incident) || this.userCreatedReport(incident)) {
            this.addReportToList(incident);
        }
        else {
            this.removeReportFromList(incident);
        }
    };
    IncidentService.prototype.reportAssignedToThisUser = function (incident) {
        var user = this.userService.getCurrentUser();
        var assignedStaff = incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].StaffKey];
        for (var i = 0; i < assignedStaff.length; i++) {
            if (Number(user.attributes.ACCOUNT_ID) == Number(assignedStaff[i].attributes.ACCOUNT_ID)) {
                return true;
            }
        }
        return false;
    };
    IncidentService.prototype.reportAssignedToThisUserTest = function (incident) {
        var user = this.userService.getCurrentUser();
        var assignedStaff = incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].StaffKey];
        for (var i = 0; i < assignedStaff.length; i++) {
            if (Number(user.attributes.ACCOUNT_ID) == Number(assignedStaff[i].attributes.ACCOUNT_ID)) {
                return true;
            }
        }
        return false;
    };
    IncidentService.prototype.userCreatedReport = function (incident) {
        var user = this.userService.getCurrentUser();
        return user.attributes.ACCOUNT_ID == incident.attributes.ACCOUNT_ID;
    };
    IncidentService.prototype.addReportToList = function (incident) {
        var reportList = this.bs_reportsInList.getValue();
        var reportListIndex = reportList.findIndex(function (i) { return i.attributes.REPORT_ID == incident.attributes.REPORT_ID; });
        if (reportListIndex != -1) {
            reportList[reportListIndex] = incident;
            if (!this.userService.isGuard()) {
                this.updateInWorkspace(incident);
            }
        }
        else {
            reportList.splice(this.getInsertionIndex(incident, reportList), 0, incident);
        }
        this.bs_reportsInList.next(reportList);
    };
    IncidentService.prototype.removeReportFromList = function (incident) {
        var reportList = this.bs_reportsInList.getValue();
        var reportListIndex = reportList.findIndex(function (i) { return i.attributes.REPORT_ID == incident.attributes.REPORT_ID; });
        if (reportListIndex != -1) {
            reportList.splice(reportListIndex, 1);
            this.bs_reportsInList.next(reportList);
        }
    };
    IncidentService.prototype.getInsertionIndex = function (incident, reportList) {
        var newReportID = incident.attributes.REPORT_ID;
        for (var i = 0; i < reportList.length; i++) {
            var existingReportID = reportList[i].attributes.REPORT_ID;
            if (Number(newReportID) > Number(existingReportID)) {
                return i;
            }
        }
        return reportList.length;
    };
    IncidentService.prototype.updateInWorkspace = function (incident) {
        var workspaceReportList = this.bs_reportsToAddToWorkspace.getValue();
        var workspaceReportListIndex = workspaceReportList.findIndex(function (i) { return i.attributes.REPORT_ID == incident.attributes.REPORT_ID; });
        if (workspaceReportListIndex != -1) {
            workspaceReportList.splice(workspaceReportListIndex, 1, incident);
            this.bs_reportsToAddToWorkspace.next(workspaceReportList);
        }
    };
    IncidentService.prototype.addToWorkspace = function (incident) {
        var arr = this.bs_reportsToAddToWorkspace.getValue();
        var index = arr.findIndex(function (i) { return i.attributes.REPORT_ID == incident.attributes.REPORT_ID; });
        if (index < 0) {
            incident.inWorkspace = true;
            arr.splice(0, 0, incident);
            this.bs_reportsToAddToWorkspace.next(arr);
        }
    };
    IncidentService.prototype.removeFromWorkspace = function (id) {
        if (id <= 0)
            return;
        var arr = this.bs_reportsToAddToWorkspace.getValue();
        var index = arr.findIndex(function (i) { return i.attributes.REPORT_ID == id; });
        if (index >= 0) {
            arr[index].inWorkspace = false;
            arr.splice(index, 1);
            this.bs_reportsToAddToWorkspace.next(arr);
        }
    };
    IncidentService.prototype.updateIncidentList = function (report) {
        this.bs_editedReport.next(report);
    };
    IncidentService.prototype.getIncidents = function () {
        var _this = this;
        var user = this.userService.getCurrentUser();
        var incidents = this.http.post(this.getIncidentsUrl, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var reports = _this.initIncidents(Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_5__component_report_incident__["a" /* Incident */], response.json()));
            reports.map(function (i) { return _this.addReportToList(i); });
        })
            .catch(this.handleError);
        return Promise.resolve(this.bs_reportsInList.getValue());
    };
    ;
    IncidentService.prototype.getIncidentsObs = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var user = this.userService.getCurrentUser();
        return this.http
            .post(this.getIncidentsUrl, JSON.stringify(user), options)
            .map(function (response) {
            return _this.initIncidents(Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_5__component_report_incident__["a" /* Incident */], response.json()));
        });
    };
    IncidentService.prototype.doSearch = function (query, isCTSearch) {
        var _this = this;
        var formHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: formHeaders });
        var searchURI = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].FTSearchURI;
        if (isCTSearch) {
            searchURI = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].CTSearchURI;
        }
        return this.http
            .post(searchURI, query, options)
            .map(function (response) {
            return _this.initIncidents(Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_5__component_report_incident__["a" /* Incident */], response.json()));
        });
    };
    IncidentService.prototype.getCreatedByIncidents = function () {
        var _this = this;
        var user = this.userService.getCurrentUser();
        var incidents = this.http
            .post(this.createdByIncidentsUrl, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var createdReports = _this.initIncidents(Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_5__component_report_incident__["a" /* Incident */], response.json()));
            createdReports.map(function (i) { return _this.addReportToList(i); });
        })
            .catch(this.handleError);
        return Promise.resolve(this.bs_reportsInList.getValue());
    };
    IncidentService.prototype.getIncident = function (id) {
        var _this = this;
        var incidentToGet = new __WEBPACK_IMPORTED_MODULE_5__component_report_incident__["a" /* Incident */]();
        incidentToGet.attributes.REPORT_ID = id;
        var returnedIncident = this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].GetIncidentURI, JSON.stringify(incidentToGet), { headers: this.headers })
            .toPromise()
            .then(function (response) { return _this.initializeIncident(response.json()); })
            .catch(this.handleError);
        return Promise.resolve(returnedIncident);
    };
    IncidentService.prototype.initIncidents = function (incidents) {
        for (var i = 0; i < incidents.length; i++) {
            incidents[i] = this.initializeIncident(incidents[i]);
        }
        return incidents;
    };
    IncidentService.prototype.initializeIncident = function (incident) {
        var _this = this;
        incident.inWorkspace = this.isInWorkspace(incident.attributes.REPORT_ID);
        incident.category = incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentCategoryKey][0];
        incident.guard = incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].StaffKey][0];
        incident.createdBy = this.getReportCreator(incident.attributes.ACCOUNT_ID);
        incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].LocationKey]
            .forEach(function (element) {
            var location = element;
            var index = _this.campusArr.findIndex(function (c) { return c.attributes.CAMPUS_ID == location.attributes.CAMPUS_ID; });
            if (index >= 0)
                location.attributes.CITY = _this.campusArr[index].attributes.CITY;
            if (location.attributes.ROOM_NUMBER === '0')
                location.attributes.ROOM_NUMBER = "";
        });
        return incident;
    };
    IncidentService.prototype.isInWorkspace = function (id) {
        var arr = this.bs_reportsToAddToWorkspace.getValue();
        var index = arr.findIndex(function (i) { return i.attributes.REPORT_ID == id; });
        return index >= 0;
    };
    IncidentService.prototype.getReportCreator = function (id) {
        var staff = this.bs_staffArr.getValue();
        var index = staff.findIndex(function (x) { return x.attributes.ACCOUNT_ID == id; });
        if (index >= 0) {
            return staff[index];
        }
        return null;
    };
    IncidentService.prototype.create = function (incident) {
        if (incident.attributes.ACCOUNT_ID == null) {
            incident.attributes.ACCOUNT_ID = this.userService.getCurrentUser().attributes.ACCOUNT_ID;
        }
        this.toSearchString(incident);
        incident.table = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentTable;
        var promise = this.http
            .post(this.insertIncidentUrl, JSON.stringify(incident), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json() ? incident : null;
        })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    IncidentService.prototype.update = function (incident) {
        var _this = this;
        if (incident.attributes.ACCOUNT_ID == null) {
            incident.attributes.ACCOUNT_ID = this.userService.getCurrentUser().attributes.ACCOUNT_ID;
        }
        incident.table = __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentTable;
        var promise = this.http
            .post(this.updateIncidentsUrl, JSON.stringify(incident), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var _incident = response.json() ? incident : null;
            _incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].LocationKey] = _this.locationService.initLocations(_incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].LocationKey]);
            return _incident;
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
    IncidentService.prototype.updateAssignedStaff = function (incidentToAssign, selectedStaffId) {
        console.log(incidentToAssign);
        var staffArr = this.bs_staffArr.getValue();
        var index = staffArr.findIndex(function (x) { return x.attributes.ACCOUNT_ID == selectedStaffId; });
        var existingStaffIndex = incidentToAssign.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].StaffKey]
            .findIndex(function (e) { return e.table === __WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].StaffTable; });
        var staff = null;
        if (index >= 0) {
            staff = staffArr[index];
        }
        if (existingStaffIndex >= 0) {
            if (staff == null) {
                incidentToAssign.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].StaffKey].splice(existingStaffIndex, 1);
            }
            else {
                incidentToAssign.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].StaffKey].splice(existingStaffIndex, 1, staff);
            }
        }
        else {
            if (staff != null) {
                incidentToAssign.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].StaffKey].push(staff);
            }
        }
        incidentToAssign.guard = staff;
        return incidentToAssign;
    };
    IncidentService.prototype.changeIncidentCategory = function (incident, newCategoryID, selectedCategory) {
        incident.category.CATEGORY_ID = newCategoryID;
        incident.attributes.CATEGORY_ID = newCategoryID;
        incident.category.attributes.MAIN_CATEGORY = selectedCategory.attributes.MAIN_CATEGORY;
        incident.category.attributes.SUB_CATEGORY = selectedCategory.attributes.SUB_CATEGORY;
        incident.category.attributes.INCIDENT_TYPE = selectedCategory.attributes.INCIDENT_TYPE;
        incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentCategoryKey]
            .splice(0, incident.incidentElements[__WEBPACK_IMPORTED_MODULE_3__util_config_service__["a" /* Config */].IncidentCategoryKey].length, incident.category);
        var promise = this.update(incident)
            .then(function (incident) {
            return incident;
        });
        return Promise.resolve(promise);
    };
    IncidentService.prototype.handleError = function (error) {
        alert("An error occurred.");
        return Promise.reject(error.message || error);
    };
    // SEARCH TEXT FOR SEARCHING IN THE DATABASE
    IncidentService.prototype.toSearchString = function (incident) {
        incident.attributes.SEARCH_TEXT = "";
    };
    return IncidentService;
}());
IncidentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__service_staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_staff_service__["a" /* StaffService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__service_location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__service_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__service_category_service__["a" /* CategoryService */]) === "function" && _d || Object])
], IncidentService);

var _a, _b, _c, _d;
//# sourceMappingURL=incident.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_location_location__ = __webpack_require__("../../../../../src/app/component/location/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_class_transformer__ = __webpack_require__("../../../../class-transformer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_class_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
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
        var _this = this;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.locationsUrl = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationsURI;
        this.tableName = __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationTable;
        this.campusArr = new Array;
        this.bs_locations = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.locations = this.bs_locations.asObservable();
        this.bs_locationMap = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.locationMap = this.bs_locationMap.asObservable();
        this.getCampus().then(function (response) {
            _this.campusArr = response;
            _this.getLocations().then(function (response) {
                _this.bs_locations.next(response);
                _this.bs_locationMap.next(_this.toLocationMapping(response));
            });
        });
    }
    LocationService.prototype.getLocations = function () {
        var _this = this;
        var locations = this.http.get(this.locationsUrl)
            .toPromise()
            .then(function (response) { return _this.initLocations(Object(__WEBPACK_IMPORTED_MODULE_5_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_3__component_location_location__["b" /* Location */], response.json())); })
            .catch(this.handleError);
        return Promise.resolve(locations);
    };
    ;
    LocationService.prototype.initLocations = function (locations) {
        var _this = this;
        locations.forEach(function (element) {
            var index = _this.campusArr.findIndex(function (c) { return c.attributes.CAMPUS_ID == element.attributes.CAMPUS_ID; });
            if (index >= 0) {
                element.attributes.CITY = _this.campusArr[index].attributes.CITY;
            }
        });
        return locations;
    };
    LocationService.prototype.findLocationId = function (location) {
        var id = 0;
        var arr = this.bs_locations.getValue();
        var index = arr.findIndex(function (loc) {
            return loc.attributes.CAMPUS_ID == location.attributes.CAMPUS_ID &&
                loc.attributes.BUILDING_NAME === location.attributes.BUILDING_NAME &&
                ((loc.attributes.ROOM_NUMBER === location.attributes.ROOM_NUMBER) ||
                    (location.attributes.ROOM_NUMBER.length == 0 && loc.attributes.ROOM_NUMBER == '0'));
        });
        if (index >= 0) {
            id = arr[index].attributes.LOCATION_ID;
        }
        return id;
    };
    LocationService.prototype.getCampus = function () {
        var promise = this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].GetCampusURI)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
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
                locationMap.push(_this.createCampusMap(loc.attributes.CAMPUS_ID, loc.attributes.CITY, locations));
            }
        });
        console.log(locationMap);
        locationMap.sort(function (a, b) { return a.CITY > b.CITY ? 1 : -1; });
        return locationMap;
    };
    LocationService.prototype.createCampusMap = function (campusId, city, locations) {
        var _this = this;
        var map = new __WEBPACK_IMPORTED_MODULE_3__component_location_location__["c" /* LocationMapping */]();
        map.CAMPUS_ID = campusId;
        map.CITY = city;
        var buildings = [];
        locations.forEach(function (loc) {
            var buildingName = loc.attributes.BUILDING_NAME;
            if (loc.attributes.CAMPUS_ID == campusId && buildings.indexOf(buildingName) < 0) {
                buildings.push(buildingName);
                map.BUILDINGS.push(_this.createBuildingMap(buildingName, locations));
            }
        });
        map.BUILDINGS.sort(function (a, b) { return a.BUILDING_NAME > b.BUILDING_NAME ? 1 : -1; });
        return map;
    };
    LocationService.prototype.createBuildingMap = function (buildingName, locations) {
        var building = new __WEBPACK_IMPORTED_MODULE_3__component_location_location__["a" /* Building */]();
        building.BUILDING_NAME = buildingName;
        var rooms = [];
        locations.forEach(function (loc) {
            if (rooms.indexOf(loc.attributes.ROOM_NUMBER) < 0 && loc.attributes.BUILDING_NAME === buildingName) {
                rooms.push(loc.attributes.ROOM_NUMBER);
                var roomNum = "";
                if (loc.attributes.ROOM_NUMBER != '0')
                    roomNum = loc.attributes.ROOM_NUMBER;
                building.ROOMS.push(new __WEBPACK_IMPORTED_MODULE_3__component_location_location__["d" /* Room */](loc.attributes.LOCATION_ID, roomNum));
            }
        });
        building.ROOMS.sort(function (a, b) { return a.ROOM_NUMBER > b.ROOM_NUMBER ? 1 : -1; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_login_user__ = __webpack_require__("../../../../../src/app/component/login/user.ts");
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
    }
    LoginService.prototype.doLogin = function (user) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        // var _user = IncidentElementService.toIncidentElement ( Config.AccountTable, user );
        // HTTP RESPONSE
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LoginURI, JSON.stringify(user), options)
            .map(function (response) { return response.json(); });
    };
    LoginService.prototype.createAccount = function (newAccount) {
        var promise = this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].NewAccountURI, JSON.stringify(newAccount), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    LoginService.prototype.validateNewAccount = function (newAccount) {
    };
    LoginService.prototype.validateUsername = function (username) {
        var user = new __WEBPACK_IMPORTED_MODULE_5__component_login_user__["a" /* User */]();
        user.attributes.USERNAME = username;
        var promise = this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].ValidateUsernameURI, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    LoginService.prototype.getAccountTypes = function () {
        var promise = this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].GetAccountTypesURI)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
    LoginService.prototype.handleError = function (error) {
        alert("An error occurred in login service.");
        console.error('An error occurred in login service', error); // for demo purposes only
        return Promise.reject(error.message || error);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_location_service__ = __webpack_require__("../../../../../src/app/service/location.service.ts");
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
    function NewReportService(locationService) {
        this.locationService = locationService;
        this.locations = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentLocations = this.locations.asObservable();
        this.persons = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentPersons = this.persons.asObservable();
        this.bs_genericElements = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentGenericElements = this.bs_genericElements.asObservable();
        this.bs_attachments = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentAttachments = this.bs_attachments.asObservable();
        this.incidentElements = new Map();
    }
    NewReportService.prototype.resetLocations = function () {
        this.locations = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentLocations = this.locations.asObservable();
    };
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
        else if (obj.table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].AttachmentTable) {
            behaviorSubject = this.bs_attachments;
            arr = behaviorSubject.getValue();
        }
        else if (obj.table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].GenericElementTable) {
            behaviorSubject = this.bs_genericElements;
            arr = behaviorSubject.getValue();
        }
        else
            return;
        arr.push(obj);
        behaviorSubject.next(arr);
    };
    NewReportService.prototype.removeIncidentElement = function (obj, table) {
        console.log(table);
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
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].GenericElementTable) {
            behaviorSubject = this.bs_genericElements;
            arr = behaviorSubject.getValue();
            var element = obj;
            index = arr.findIndex(function (x) { return x.attributes.TYPE === element.attributes.TYPE
                && x.attributes.DESCRIPTION === element.attributes.DESCRIPTION; });
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].AttachmentTable) {
            behaviorSubject = this.bs_attachments;
            arr = behaviorSubject.getValue();
            var attachment = obj;
            index = arr.findIndex(function (x) { return x.attributes.FILE_ID === attachment.attributes.FILE_ID; });
        }
        else {
            return;
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
        return isValid;
    };
    NewReportService.prototype.validateIncidentElements = function (incidentElements) {
        var _this = this;
        var isValid = true;
        var keys = Object.keys(incidentElements);
        keys.forEach(function (key) {
            incidentElements[key].forEach(function (element) {
                isValid = _this.validateIncidentElement(element) && isValid;
            });
        });
        return isValid;
    };
    NewReportService.prototype.validateIncidentElement = function (element) {
        var isValid = true;
        var table = element.table;
        if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].LocationTable)
            isValid = this.validateLocation(element) && isValid;
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonTable)
            isValid = this.validatePerson(element) && isValid;
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].CategoryTable) {
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].GenericElementTable) {
            var elem = element;
            isValid = elem.attributes.TYPE != null && elem.attributes.TYPE.length > 0 && isValid;
        }
        else if (table === __WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].AttachmentTable) {
            isValid = this.validateAttachment(element) && isValid;
        }
        else {
            console.log("*** WARNING: Incident Element unrecognized.");
        }
        return isValid;
    };
    NewReportService.prototype.validateLocation = function (location) {
        var attr = location.attributes;
        if (attr.LOCATION_ID == null || attr.LOCATION_ID <= 0) {
            location.attributes.LOCATION_ID = this.locationService.findLocationId(location);
            if (location.attributes.LOCATION_ID == null || location.attributes.LOCATION_ID <= 0) {
                this.debug_printErrorMsg("LOCATION_ID");
                return false;
            }
        }
        return true;
    };
    NewReportService.prototype.validatePerson = function (person) {
        var isValid = true;
        if (person == null || person.attributes == null)
            return false;
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
    NewReportService.prototype.validateAttachment = function (attachment) {
        if (attachment != null && attachment.attributes.FILE_ID != null && attachment.attributes.FILE_NAME != null) {
            return true;
        }
        this.debug_printErrorMsg("file");
        return false;
    };
    NewReportService.prototype.debug_printErrorMsg = function (field) {
        console.log("***** REPORT INVALID ERROR: " + field + " cannot be null or empty ");
    };
    return NewReportService;
}());
NewReportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_location_service__["a" /* LocationService */]) === "function" && _a || Object])
], NewReportService);

var _a;
//# sourceMappingURL=new-report.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config_service__ = __webpack_require__("../../../../../src/app/util/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
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
    PersonService.prototype.personExists = function (person) {
        var promise = this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__util_config_service__["a" /* Config */].PersonExistsURI, JSON.stringify(person), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return Promise.resolve(promise);
    };
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
    PersonService.prototype.filter = function (filterList, personList, filter) {
        Object.assign(filterList, personList);
        // for(var i = 0; i < personList.length; i++){
        //     filterList.push(personList[i]);
        // }
        if (filter.attributes.FIRST_NAME != null) {
            for (var i = 0; i < personList.length; i++) {
                if (i >= filterList.length) {
                    break;
                }
                if (!filterList[i].attributes.FIRST_NAME.toUpperCase().includes(filter.attributes.FIRST_NAME.toUpperCase())) {
                    filterList.splice(i, 1);
                    i--;
                }
            }
        }
        if (filter.attributes.LAST_NAME != null) {
            for (var i = 0; i < personList.length; i++) {
                if (i >= filterList.length) {
                    break;
                }
                if (!filterList[i].attributes.LAST_NAME.toUpperCase().includes(filter.attributes.LAST_NAME.toUpperCase())) {
                    filterList.splice(i, 1);
                    i--;
                }
            }
        }
        if (filter.attributes.PHONE_NUMBER != null) {
            for (var i = 0; i < personList.length; i++) {
                if (i >= filterList.length) {
                    break;
                }
                if (!filterList[i].attributes.PHONE_NUMBER.toString().includes(filter.attributes.PHONE_NUMBER.toString())) {
                    filterList.splice(i, 1);
                    i--;
                }
            }
        }
        //return filterList;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_staff_staff__ = __webpack_require__("../../../../../src/app/component/staff/staff.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_class_transformer__ = __webpack_require__("../../../../class-transformer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_class_transformer__);
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
            .then(function (response) { return Object(__WEBPACK_IMPORTED_MODULE_6_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_5__component_staff_staff__["a" /* Staff */], response.json()); })
            .catch(this.handleError);
        return Promise.resolve(staffList);
    };
    ;
    /*
    getStaffsObs(): Observable<Staff[]> {
        let options = new RequestOptions( {headers: this.headers} );
        
        return this.http
            .get(this.staffUrl, options)
            .map((response: Response) =>
            staffList = plainToClass(Staff, response.json() ));
    }
    */
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

/***/ "../../../../../src/app/service/timer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_timer_timer__ = __webpack_require__("../../../../../src/app/component/timer/timer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__incident_service__ = __webpack_require__("../../../../../src/app/service/incident.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimerService = (function () {
    function TimerService(http, incidentService) {
        this.http = http;
        this.incidentService = incidentService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    TimerService.prototype.createTimer = function (start, end) {
        var nowDate = new Date(Date.now());
        var nowTime = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;
        var timer = new __WEBPACK_IMPORTED_MODULE_3__component_timer_timer__["a" /* Timer */]();
        timer.TIMER_START = this.stringToTime(start);
        timer.TIMER_END = this.stringToTime(end);
        timer.TIME_REMAINING = timer.TIMER_END - nowTime;
        return timer;
    };
    TimerService.prototype.createTimerInt = function (incident, start, end) {
        var timer = new __WEBPACK_IMPORTED_MODULE_3__component_timer_timer__["a" /* Timer */]();
        var nowDate = new Date(Date.now());
        var nowTime = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;
        timer.incident = incident;
        timer.TIMER_START = start;
        timer.TIMER_END = end;
        timer.TIME_REMAINING = timer.TIMER_END - nowTime;
        return timer;
    };
    TimerService.prototype.deleteTimer = function (timer) {
        timer.incident.attributes.TIMER_START = null;
        timer.incident.attributes.TIMER_END = null;
        this.incidentService.update(timer.incident);
    };
    //html time input is string "hh:mm" convert to time format
    TimerService.prototype.stringToTime = function (input) {
        if (input == null)
            return null;
        var str = input.split(":");
        return parseInt(str[0]) * 60 * 60 * 1000 + parseInt(str[1]) * 60 * 1000;
    };
    TimerService.prototype.timeToString = function (time) {
        var numHour = Math.floor(time / 1000 / 60 / 60 % 24);
        var minute = this.fillZeros(Math.floor(time / 1000 / 60 % 60).toString());
        if (numHour > 12) {
            numHour = numHour % 12;
            var hour = this.fillZeros(numHour.toString());
            return hour + ":" + minute + " PM";
        }
        else if (numHour == 12) {
            var hour = this.fillZeros(numHour.toString());
            return hour + ":" + minute + " PM";
        }
        else {
            var hour = this.fillZeros(numHour.toString());
            return hour + ":" + minute + " AM";
        }
    };
    TimerService.prototype.durationToString = function (time) {
        var hour = this.fillZeros(Math.floor(time / 1000 / 60 / 60 % 24).toString());
        var minute = this.fillZeros(Math.floor(time / 1000 / 60 % 60).toString());
        var second = this.fillZeros(Math.floor(time / 1000 % 60).toString());
        return hour + ":" + minute + ":" + second;
    };
    TimerService.prototype.fillZeros = function (str) {
        if (str.length < 2) {
            str = "0" + str;
        }
        return str;
    };
    TimerService.prototype.handleError = function () {
        alert("An error has occured");
    };
    return TimerService;
}());
TimerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__incident_service__["a" /* IncidentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__incident_service__["a" /* IncidentService */]) === "function" && _b || Object])
], TimerService);

var _a, _b;
//# sourceMappingURL=timer.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserService = (function () {
    function UserService() {
        this.currentUser = 'currentUser';
        this.bs_currentUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.user = this.bs_currentUser.asObservable();
        this.bs_isLoggedIn = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.loggedIn = this.bs_isLoggedIn.asObservable();
        this.GUARD = 1;
        this.ADMIN = 2;
        this.SUPERVISOR = 3;
    }
    UserService.prototype.authUser = function (user) {
        if (user == null) {
            this.bs_isLoggedIn.next(false);
            return;
        }
        sessionStorage.setItem(this.currentUser, JSON.stringify(user));
        this.bs_isLoggedIn.next(true);
    };
    UserService.prototype.isLoggedIn = function () {
        var currentUser = this.getCurrentUser();
        return currentUser != null;
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
        this.bs_currentUser.next(currentUser);
        if (currentUser != null) {
            return currentUser;
        }
        return null;
    };
    UserService.prototype.getAccountID = function () {
        return this.getCurrentUser().attributes.ACCOUNT_ID;
    };
    UserService.prototype.isGuard = function () {
        return this.getAccountType() == this.GUARD;
    };
    UserService.prototype.isAdmin = function () {
        return this.getAccountType() == this.ADMIN;
    };
    UserService.prototype.isSupervisor = function () {
        return this.getAccountType() == this.SUPERVISOR;
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

Config.protocol = "https://";
// private static serverURL: string = "localhost:4567/";
Config.serverURL = "cmpt373-1177a.cmpt.sfu.ca:4567/";
Config.LocationsURI = Config.protocol + Config.serverURL + "locations";
Config.IncidentsURI = Config.protocol + Config.serverURL + "incidents";
Config.FTSearchURI = Config.protocol + Config.serverURL + "ftsearch-incident";
Config.CTSearchURI = Config.protocol + Config.serverURL + "ctsearch-incident";
Config.StaffURI = Config.protocol + Config.serverURL + "staff";
Config.LoginURI = Config.protocol + Config.serverURL + "login";
Config.PersonURI = Config.protocol + Config.serverURL + "person";
Config.GetIncidentsURI = Config.protocol + Config.serverURL + "get-incidents";
Config.GetIncidentURI = Config.protocol + Config.serverURL + "get-incident";
Config.CreatedIncidentsURI = Config.protocol + Config.serverURL + "created-incidents";
Config.CategoriesURI = Config.protocol + Config.serverURL + "categories";
Config.UpdateIncidentURI = Config.protocol + Config.serverURL + "update-incident";
Config.UploadURI = Config.protocol + Config.serverURL + "upload";
Config.TimerURI = Config.protocol + Config.serverURL + "timer";
Config.UploadsURI = Config.protocol + Config.serverURL + "uploads";
Config.GetFileURI = Config.protocol + Config.serverURL + "upload/get/";
Config.NewAccountURI = Config.protocol + Config.serverURL + "create-account";
Config.GetAccountTypesURI = Config.protocol + Config.serverURL + "get-account-types";
Config.GetCampusURI = Config.protocol + Config.serverURL + "campus";
Config.ValidateUsernameURI = Config.protocol + Config.serverURL + "validate-username";
Config.PersonExistsURI = Config.protocol + Config.serverURL + "person-exists";
Config.WSURI = "ws://" + Config.serverURL + "ws";
Config.IncidentsWebSocketURI = "wss://" + Config.serverURL + "incidentsWebSocket";
Config.LogInWebSocketURI = "wss://" + Config.serverURL + "loginWebSocket";
Config.StaffTable = "STAFF";
Config.LocationTable = "LOCATION";
Config.AccountTable = "ACCOUNT";
Config.IncidentTable = "INCIDENT";
Config.PersonTable = "PERSON";
Config.CategoryTable = "INCIDENT_CATEGORY";
Config.TimerTable = "TIMER";
Config.CampusTable = "CAMPUS";
Config.AttachmentTable = "ATTACHMENT";
Config.GenericElementTable = "GENERIC_ELEMENT";
Config.IncidentCategoryKey = "IncidentCategory";
Config.LocationKey = "Location";
Config.PersonKey = "Person";
Config.StaffKey = "Staff";
Config.CampusKey = "Campus";
Config.AttachmentKey = "Attachment";
Config.GenericElementKey = "GenericElement";
Config.FailedToRetrieveMsg = "Failed to retrieve data from server";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_attachment_attachment_component__ = __webpack_require__("../../../../../src/app/component/attachment/attachment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_generic_element_generic_element_component__ = __webpack_require__("../../../../../src/app/component/generic-element/generic-element.component.ts");
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
        else if (componentName === __WEBPACK_IMPORTED_MODULE_4__component_attachment_attachment_component__["a" /* AttachmentComponent */].name) {
            return this.componentFactoryResolver
                .resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__component_attachment_attachment_component__["a" /* AttachmentComponent */])
                .create(this.injector);
        }
        else if (componentName === __WEBPACK_IMPORTED_MODULE_5__component_generic_element_generic_element_component__["a" /* GenericElementComponent */].name) {
            return this.componentFactoryResolver
                .resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__component_generic_element_generic_element_component__["a" /* GenericElementComponent */])
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

/***/ "../../../../../src/app/util/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validation; });
var Validation = (function () {
    function Validation() {
    }
    return Validation;
}());

Validation.Valid = "valid";
Validation.Invalid = "invalid";
Validation.Taken = "taken";
Validation.Empty = "";
Validation.PasswordNotMatching = "notmatching";
//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ "../../../../../src/assets/css/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.incident-element-container,\ndiv.incident-element-container .incident-element-header,\ndiv.incident-element-container .incident-element-details,\ndiv.incidents-row,\ndiv.side-container,\ndiv.side-container .panel-heading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n@media (max-width: 1800px) {\n  div#incidents-container {\n    width: 100vw;\n    height: 100%; }\n\n  div.side-container {\n    width: 50%;\n    height: 150vh; } }\ndiv#incidents-container {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  padding: 20px; }\n  div#incidents-container div#incidents-dashboard {\n    height: 100%;\n    margin: 0px;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    background-color: #eee; }\n    div#incidents-container div#incidents-dashboard .panel-heading {\n      height: auto; }\n    div#incidents-container div#incidents-dashboard .panel-body {\n      padding: 12px !important;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      border-bottom: none; }\n  div#incidents-container div#workspace.row {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden; }\n  div#incidents-container div.panel {\n    overflow: hidden; }\n    div#incidents-container div.panel div.panel-heading {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n      div#incidents-container div.panel div.panel-heading input {\n        min-width: 250px;\n        width: 350px; }\n    div#incidents-container div.panel div.panel-body {\n      height: 100%;\n      width: 100%;\n      overflow: auto; }\n\ndiv.quarter-box {\n  height: 49%;\n  width: 49%;\n  min-width: 300px;\n  margin: 4px;\n  border-radius: 4px;\n  border: 1px solid #b3b3b3;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 8px;\n  background-color: white; }\n  @media (max-height: 900px) {\n    div.quarter-box {\n      height: 100%; } }\n\n#order-1, #order-2, #order-3 {\n  padding: 20px; }\n\ndiv#order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\ndiv#order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2; }\n\ndiv#order-3 {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3; }\n\ndiv#order-2 #top, div#order-2 #bottom {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important; }\ndiv#order-2 #bottom {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  div#order-2 #bottom #left, div#order-2 #bottom #right {\n    padding-left: 8px !important;\n    padding-right: 8px !important;\n    width: 50%; }\n  div#order-2 #bottom #right .height-50 {\n    margin-bottom: 0px;\n    padding-bottom: 20px; }\n\ndiv#left-panels {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2; }\n  div#left-panels #button-container {\n    -webkit-box-flex: 0.1;\n        -ms-flex-positive: 0.1;\n            flex-grow: 0.1; }\n    div#left-panels #button-container button {\n      padding: 6px 48px !important; }\n\ndiv#right-panels {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3; }\n\ndiv.side-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 16px;\n  min-width: 300px; }\n  div.side-container .panel {\n    width: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  div.side-container .panel-body {\n    padding-top: 0px; }\n  div.side-container .form-control {\n    background-color: #eee;\n    box-shadow: none;\n    max-width: 50%; }\n\n.card {\n  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.07), 1px 2px 5px 0 rgba(0, 0, 0, 0.06); }\n\n#workspace-main {\n  height: 100%; }\n\n#workspace-data {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  min-width: 300px;\n  max-width: 400px; }\n  #workspace-data incidents-component {\n    height: 91%; }\n\n#button-container {\n  padding-bottom: 12px; }\n  #button-container button {\n    width: 50%; }\n\ntimer-component {\n  padding-bottom: 20px; }\n\nstaff-component, timer-component {\n  height: 50%;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/guard-app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container > .row {\n  clear: both; }\n\n.centre-container {\n  margin: 0 auto; }\n\n.outer-container {\n  position: relative; }\n\n.guard-container {\n  padding-bottom: 4em;\n  margin-bottom: 0px; }\n\n.m-1 {\n  margin: 1em !important; }\n\n.mb-1 {\n  margin-bottom: 1em !important; }\n\n.mb-2 {\n  margin-bottom: 2em !important; }\n\n.ml-1 {\n  margin-left: 1em !important; }\n\n.ml-2 {\n  margin-left: 2em !important; }\n\n.ml-3 {\n  margin-left: 3em; }\n\n.mr-1 {\n  margin-right: 1em; }\n\n.mt-sm {\n  margin-top: 0.5em !important; }\n\n.mt-1 {\n  margin-top: 1em !important; }\n\n.mt-2 {\n  margin-top: 2em !important; }\n\n.p-0, ul.p-0 {\n  padding: 0 !important; }\n\n.p-sm {\n  padding: 0.5em; }\n\n.p-1 {\n  padding: 1em; }\n\n.pb-sm {\n  padding-bottom: 0.5em !important; }\n\n.pb-1 {\n  padding-bottom: 1em !important; }\n\n.pt-1 {\n  padding-top: 1em !important; }\n\n.pt-2 {\n  padding-top: 2em !important; }\n\n.lh-1 {\n  line-height: 2em !important; }\n\n.modal-body {\n  text-align: left; }\n\n#removePersonAlert .modal-footer {\n  padding: 1.2em; }\n\n.modal-header {\n  padding: 1em !important; }\n\n.modal-title {\n  margin-top: 1em !important; }\n\nselect.category-field {\n  padding: 0.5em;\n  margin: 0 auto;\n  width: 80%; }\n\n.modal-field-title {\n  padding-left: 10%; }\n\n.flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-bottom: 4.5em;\n  position: relative;\n  min-height: 100%;\n  width: 100%; }\n\n.flex-item {\n  float: none;\n  width: 45%;\n  max-width: 45%;\n  height: 20em;\n  margin: 0.5em;\n  padding-bottom: 1em;\n  overflow: hidden; }\n  @media (max-width: 300px) {\n    .flex-item {\n      width: 100%;\n      max-width: 100%; } }\n\n.panel-body {\n  height: 55%;\n  padding-top: 8px;\n  word-break: break-word; }\n\n.report-content {\n  height: 100%;\n  padding-bottom: 1em;\n  overflow: scroll;\n  text-overflow: ellipsis; }\n\nfooter {\n  background-color: transparent;\n  bottom: 0;\n  margin-bottom: 0;\n  height: 3em;\n  width: 100%;\n  position: fixed; }\n\n.guard-menu-button-right {\n  position: relative;\n  color: #f5f5f5;\n  float: right; }\n\n.guard-menu-button-left {\n  position: relative;\n  color: #f5f5f5;\n  float: left; }\n\n.guard-button-navbar {\n  background-color: transparent !important;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif !important;\n  color: #ffffff;\n  margin-left: 5px;\n  opacity: 100;\n  margin-top: 2px !important;\n  position: fixed;\n  top: 0.1em;\n  z-index: 101; }\n\n@media (min-width: 769px) {\n  .guard-button-navbar {\n    margin-left: 20%; } }\n.btn-close-report {\n  size: 2em;\n  text-align: right;\n  width: 100%; }\n\n.collapsable-heading {\n  padding-top: 1em !important;\n  padding-bottom: 1em !important;\n  background-color: #f5f5f5; }\n\n.reports-body {\n  background-color: #f9f9f9; }\n\n.guard-person-component {\n  width: 100%; }\n\nh4.panel-title {\n  font-weight: 400;\n  font-size: 115%; }\n\n#accordion.panel-group .panel-default {\n  border: none; }\n\n.collapsable-heading {\n  background-color: #ffffff;\n  border: 1px solid #dddddd; }\n\n.panel-collapse .panel-body, .reports-body .panel-body {\n  background-color: #f9f9f9;\n  border: none;\n  margin-top: 0.5em;\n  margin-bottom: 1em; }\n\n#assignedReports .panel-title {\n  border-bottom: 1px solid #dddddd; }\n\n.panel-heading .accordion-toggle:after {\n  /* symbol for \"opening\" panels */\n  font-family: 'Glyphicons Halflings';\n  content: \"\\E114\";\n  float: right;\n  color: grey; }\n\n.panel-heading .accordion-toggle.collapsed:after {\n  /* symbol for \"collapsed\" panels */\n  content: \"\\E080\"; }\n\n.top-alert {\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  width: 100%;\n  height: 50px; }\n\n.btn {\n  margin: 0.5em; }\n.no-padding {\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.tab-content {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n#guard-nav-tabs {\n  background-color: white;\n  padding-bottom: 0px; }\n  #guard-nav-tabs a {\n    color: #657786;\n    font-size: 14px;\n    text-align: center;\n    width: 50%; }\n  #guard-nav-tabs li {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  background-color: white;\n  border: none;\n  color: #54585A;\n  border-bottom: 1px solid #54585A; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/incidents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.incident-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: white;\n  border-top: 1px solid rgba(0, 0, 0, 0.16);\n  border-bottom: none;\n  width: 100%;\n  padding: 16px; }\n  div.incident-card .main-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow-x: hidden;\n    white-space: nowrap;\n    height: 100%;\n    width: 100%; }\n  div.incident-card .detail-row {\n    width: 100%;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n    display: block;\n    overflow: hidden; }\n    div.incident-card .detail-row.tertiary {\n      margin-top: 8px; }\n  div.incident-card .description {\n    margin-top: 8px;\n    margin-bottom: 8px; }\n  div.incident-card .bottom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n    padding-top: 12px; }\n    div.incident-card .bottom .detail-row {\n      width: 75%; }\n  div.incident-card .action {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/inline-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.report-fields-edit {\n  height: 100%;\n  width: auto; }\n\ntextarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 1px;\n  padding: 1em; }\n\ntextarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 1px;\n  padding: 1em; }\n\n#summaryEdit textarea {\n  height: 7em; }\n\n#descriptionEdit textarea {\n  height: 10em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/new-account.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#new-account-panel .details-container .detail {\n  height: 80px; }\n  div#new-account-panel .details-container .detail .detail-col {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    div#new-account-panel .details-container .detail .detail-col .glyphicon-ok-sign {\n      color: green; }\n    div#new-account-panel .details-container .detail .detail-col .validation-text {\n      opacity: 0.5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/new-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#new-report-panel {\n  margin-top: 16px; }\n  div#new-report-panel .panel-heading {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n#first-element .x-container {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/panels.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#incidents-list-panel,\ndiv#staff-list-panel,\ndiv#timer-list-panel {\n  height: 100%;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  div#incidents-list-panel div.panel-heading,\n  div#staff-list-panel div.panel-heading,\n  div#timer-list-panel div.panel-heading {\n    height: auto !important; }\n  div#incidents-list-panel div.panel-body,\n  div#staff-list-panel div.panel-body,\n  div#timer-list-panel div.panel-body {\n    padding-left: 0px;\n    padding-right: 0px;\n    overflow: auto; }\n  div#incidents-list-panel div#incidents-list,\n  div#staff-list-panel div#incidents-list,\n  div#timer-list-panel div#incidents-list {\n    height: 100%;\n    padding: 0px !important;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px; }\n  div#incidents-list-panel div#incidents-list, div#incidents-list-panel div#staff-list,\n  div#staff-list-panel div#incidents-list,\n  div#staff-list-panel div#staff-list,\n  div#timer-list-panel div#incidents-list,\n  div#timer-list-panel div#staff-list {\n    overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/report-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 16px; }\n\ndiv.report-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n\n.report-id {\n  font-size: 18px;\n  font-weight: 300;\n  opacity: 0.8;\n  color: #333; }\n\n#accept-temp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#search-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  height: 50px;\n  margin-bottom: 20px; }\n  #search-form .search-element {\n    height: 100% !important; }\n  #search-form #search-input {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px; }\n  #search-form #search-btn {\n    width: 50px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px; }\n\n.panel {\n  border-bottom: none; }\n\n.panel-body {\n  padding: 0px; }\n\n.incident-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.16);\n  padding: 16px; }\n  .incident-card .main-content, .incident-card .actions {\n    height: 100%; }\n  .incident-card .main-content {\n    width: 100%; }\n  .incident-card .actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/staff.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".staff-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: auto;\n  width: 100%;\n  background-color: #ffffff;\n  border-top: 1px solid rgba(0, 0, 0, 0.16);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.16); }\n\n.status-indicator-container, .actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 48px;\n  min-width: 48px;\n  width: 48px;\n  padding: 18px; }\n  .status-indicator-container .status-indicator, .actions .status-indicator {\n    height: 100%;\n    width: 100%;\n    background-color: green;\n    border-radius: 99px; }\n\n.name-plate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  padding: 4px; }\n  .name-plate span.name {\n    font-size: 14px; }\n  .name-plate span.campus {\n    opacity: 0.8; }\n\n.actions span {\n  opacity: 0.8; }\n  .actions span:hover {\n    cursor: pointer;\n    opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/css/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.timer-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  height: 72px;\n  padding: 12px;\n  border-top: 1px solid rgba(0, 0, 0, 0.16); }\n  div.timer-card .main-content, div.timer-card .timer-container {\n    height: 100%; }\n  div.timer-card .main-content {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  div.timer-card .timer-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    div.timer-card .timer-container .time-remaining {\n      font-size: 24px !important;\n      margin-right: 8px; }\n", ""]);

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