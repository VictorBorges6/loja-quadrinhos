(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_aba_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/aba.service */ "./src/app/services/aba.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_comics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/comics.service */ "./src/app/services/comics.service.ts");
/* harmony import */ var _components_lista_quadrinhos_lista_quadrinhos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lista-quadrinhos/lista-quadrinhos.component */ "./src/app/components/lista-quadrinhos/lista-quadrinhos.component.ts");
/* harmony import */ var _components_detalhes_quadrinhos_detalhes_quadrinhos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/detalhes-quadrinhos/detalhes-quadrinhos.component */ "./src/app/components/detalhes-quadrinhos/detalhes-quadrinhos.component.ts");
/* harmony import */ var _components_finalizacao_compra_finalizacao_compra_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/finalizacao-compra/finalizacao-compra.component */ "./src/app/components/finalizacao-compra/finalizacao-compra.component.ts");








/**
 * Classe principal, responsável por conter os outros components.
 */
class AppComponent {
    constructor(abaService, comicService) {
        this.abaService = abaService;
        this.comicService = comicService;
        this.title = "HQ'S DA MARVEL";
        this.abaAnterior = '';
    }
    ngOnInit() {
        this.abaService.setAba(_services_aba_service__WEBPACK_IMPORTED_MODULE_0__["ABA_LISTA"]);
        this.comicService.setRaridade(Math.floor(Math.random() * 10));
    }
    changeIsFinalizacao() {
        if (this.abaService.getAba() == _services_aba_service__WEBPACK_IMPORTED_MODULE_0__["ABA_FINALIZACAO"]) {
            this.abaService.setAba(this.abaAnterior);
        }
        else {
            this.abaAnterior = this.abaService.getAba();
            this.abaService.setAba(_services_aba_service__WEBPACK_IMPORTED_MODULE_0__["ABA_FINALIZACAO"]);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_aba_service__WEBPACK_IMPORTED_MODULE_0__["AbaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 4, consts: [[1, "bg"], [1, "transbox", "container-fluid"], [1, "title"], ["title", "Finalizar Compra", 1, "carrinho", "btn", 3, "click"], [1, "fas", "fa-shopping-cart", 2, "text-align", "center"], [1, "content-box", "container-fluid", 3, "hidden"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_4_listener() { return ctx.changeIsFinalizacao(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-lista-quadrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-detalhes-quadrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-finalizacao-compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Dados cedidos pela Marvel. \u00A9 2014 Marvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.abaService.getAba() != "lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.abaService.getAba() != "detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.abaService.getAba() != "finalizacao");
    } }, directives: [_components_lista_quadrinhos_lista_quadrinhos_component__WEBPACK_IMPORTED_MODULE_3__["ListaQuadrinhosComponent"], _components_detalhes_quadrinhos_detalhes_quadrinhos_component__WEBPACK_IMPORTED_MODULE_4__["DetalhesQuadrinhosComponent"], _components_finalizacao_compra_finalizacao_compra_component__WEBPACK_IMPORTED_MODULE_5__["FinalizacaoCompraComponent"]], styles: [".bg[_ngcontent-%COMP%]{\r\n    background-image: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url(\"bg.jpg\");\r\n    background-size: cover;\r\n    background-position: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n    top:0;\r\n    left:0;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'bebas', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 3em;\r\n    color: rgb(255, 255, 255);\r\n    margin: 0.4em;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.transbox[_ngcontent-%COMP%] {\r\n    background-color: rgba(83, 0, 0, 0.8);\r\n    border: 1px solid black;\r\n    border-radius: 2em;\r\n    flex-direction: column;\r\n    width: 90vw;\r\n    height: 95vh;\r\n    margin-top: 2.5vh;\r\n    position: relative;\r\n}\r\n\r\n.content-box[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 255, 255);\r\n    min-height: 82.5vh;\r\n    border-bottom-left-radius: 1.5em;\r\n    border-bottom-right-radius: 1.5em;\r\n    flex-direction: column;\r\n}\r\n\r\n.carrinho[_ngcontent-%COMP%] {\r\n    background-color: rgb(226, 222, 0);\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0;\r\n    color: #ED1D24;\r\n    position: fixed;\r\n    margin-left: 80vw;\r\n    margin-top: 0;\r\n}\r\n\r\n.carrinho[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(165, 148, 0);\r\n    color: #a01318;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    color: lightgray;\r\n    bottom: -1em;\r\n    right: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvR0FBb0c7SUFDcEcsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxTQUFTO0lBQ1QsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1REFBdUQ7SUFDdkQsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDAuNykgMCUscmdiYSgwLDAsMCwwLjcpIDEwMCUpLCB1cmwoXCJiZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnYmViYXMnLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBtYXJnaW46IDAuNGVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udHJhbnNib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgMCwgMCwgMC44KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgaGVpZ2h0OiA5NXZoO1xyXG4gICAgbWFyZ2luLXRvcDogMi41dmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250ZW50LWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBtaW4taGVpZ2h0OiA4Mi41dmg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVlbTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjVlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYXJyaW5obyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjIsIDApO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgY29sb3I6ICNFRDFEMjQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogODB2dztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5jYXJyaW5obzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNDgsIDApO1xyXG4gICAgY29sb3I6ICNhMDEzMTg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGJvdHRvbTogLTFlbTtcclxuICAgIHJpZ2h0OiAxZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_aba_service__WEBPACK_IMPORTED_MODULE_0__["AbaService"] }, { type: _services_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_lista_quadrinhos_lista_quadrinhos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/lista-quadrinhos/lista-quadrinhos.component */ "./src/app/components/lista-quadrinhos/lista-quadrinhos.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
/* harmony import */ var _components_finalizacao_compra_finalizacao_compra_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/finalizacao-compra/finalizacao-compra.component */ "./src/app/components/finalizacao-compra/finalizacao-compra.component.ts");
/* harmony import */ var _components_detalhes_quadrinhos_detalhes_quadrinhos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/detalhes-quadrinhos/detalhes-quadrinhos.component */ "./src/app/components/detalhes-quadrinhos/detalhes-quadrinhos.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_lista_quadrinhos_lista_quadrinhos_component__WEBPACK_IMPORTED_MODULE_2__["ListaQuadrinhosComponent"],
        _components_finalizacao_compra_finalizacao_compra_component__WEBPACK_IMPORTED_MODULE_9__["FinalizacaoCompraComponent"],
        _components_detalhes_quadrinhos_detalhes_quadrinhos_component__WEBPACK_IMPORTED_MODULE_10__["DetalhesQuadrinhosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_lista_quadrinhos_lista_quadrinhos_component__WEBPACK_IMPORTED_MODULE_2__["ListaQuadrinhosComponent"],
                    _components_finalizacao_compra_finalizacao_compra_component__WEBPACK_IMPORTED_MODULE_9__["FinalizacaoCompraComponent"],
                    _components_detalhes_quadrinhos_detalhes_quadrinhos_component__WEBPACK_IMPORTED_MODULE_10__["DetalhesQuadrinhosComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/detalhes-quadrinhos/detalhes-quadrinhos.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/detalhes-quadrinhos/detalhes-quadrinhos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DetalhesQuadrinhosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesQuadrinhosComponent", function() { return DetalhesQuadrinhosComponent; });
/* harmony import */ var _services_aba_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/aba.service */ "./src/app/services/aba.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_comics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/comics.service */ "./src/app/services/comics.service.ts");
/* harmony import */ var _services_finalizacao_compra_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/finalizacao-compra.service */ "./src/app/services/finalizacao-compra.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");











const _c0 = ["selfClosingAlert"];
function DetalhesQuadrinhosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.comicService.getComic().thumbnail.path + "." + ctx_r0.comicService.getComic().thumbnail.extension, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.getTitulo(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.getPersonagens(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.getCriadores(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.getResumo(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function DetalhesQuadrinhosComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Este item \u00E9 raro! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetalhesQuadrinhosComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetalhesQuadrinhosComponent_div_3_div_1_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.comicService.getComic().raro);
} }
function DetalhesQuadrinhosComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetalhesQuadrinhosComponent_div_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.adicionarCarrinho(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Adicionar ao carrinho ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r2.getPreco(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function DetalhesQuadrinhosComponent_ngb_alert_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function DetalhesQuadrinhosComponent_ngb_alert_5_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.successMessage, "\n");
} }
const NAO_INFORMADO = 'Não informado';
/**
 * Classe responsável por mostrar os detalhes de um quadrinho específico,
 * assim como o botão de adicioná-lo ao carrinho de compras.
 */
class DetalhesQuadrinhosComponent {
    constructor(abaService, comicService, finalizacaoService) {
        this.abaService = abaService;
        this.comicService = comicService;
        this.finalizacaoService = finalizacaoService;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.successMessage = '';
    }
    ngOnInit() {
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(2000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
    }
    voltaTelaLista() {
        this.abaService.setAba(_services_aba_service__WEBPACK_IMPORTED_MODULE_0__["ABA_LISTA"]);
    }
    getTitulo() {
        return `<Strong>Título: &nbsp;</strong> ${this.comicService.getComic().title || NAO_INFORMADO}`;
    }
    getPersonagens() {
        let personagens = [];
        this.comicService.getComic().characters.items.forEach(personagem => {
            personagens.push(personagem.name);
        });
        const textoPersonagens = personagens.length > 0 ? personagens.join(", ") : NAO_INFORMADO;
        return `<Strong>Personagens: &nbsp;</strong> ${textoPersonagens}`;
    }
    getCriadores() {
        let criadores = [];
        this.comicService.getComic().creators.items.forEach(criador => {
            criadores.push(`${criador.name} (${criador.role})`);
        });
        const textoCriadores = criadores.length > 0 ? criadores.join(", ") : NAO_INFORMADO;
        return `<Strong>Criadores: &nbsp;</strong> ${textoCriadores}`;
    }
    getResumo() {
        return `<Strong>Resumo: &nbsp;</strong> ${this.comicService.getComic().textObjects.length > 0 ? this.comicService.getComic().textObjects[0].text : NAO_INFORMADO}`;
    }
    getPreco() {
        const preco = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatCurrency"])(Number(this.comicService.getComic().prices[0].price), 'en-us', '$');
        return `<Strong>Preço: &nbsp;</strong> ${preco}`;
    }
    adicionarCarrinho() {
        this.finalizacaoService.addListaItens(this.comicService.getComic());
        this._success.next(`Produto adicionado ao carrinho!`);
    }
}
DetalhesQuadrinhosComponent.ɵfac = function DetalhesQuadrinhosComponent_Factory(t) { return new (t || DetalhesQuadrinhosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_aba_service__WEBPACK_IMPORTED_MODULE_0__["AbaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comics_service__WEBPACK_IMPORTED_MODULE_5__["ComicsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_finalizacao_compra_service__WEBPACK_IMPORTED_MODULE_6__["FinalizacaoCompraService"])); };
DetalhesQuadrinhosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetalhesQuadrinhosComponent, selectors: [["app-detalhes-quadrinhos"]], viewQuery: function DetalhesQuadrinhosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 6, vars: 4, consts: [[1, "btn-voltar", "btn"], [1, "fas", "fa-times-circle", 3, "click"], ["class", "row", 4, "ngIf"], ["class", "row texto", 4, "ngIf"], ["class", "div-adicionar-carrinho btn-group-vertical", 4, "ngIf"], ["type", "success", "class", "alerta", 3, "closed", 4, "ngIf"], [1, "row"], [1, "comicThumbArea", "col-sm-3"], [1, "comicThumb", 3, "src"], [1, "col-sm-9"], [1, "texto", "col-sm-12", 3, "innerHTML"], [1, "row", "texto"], ["class", "item-raro", 4, "ngIf"], [1, "item-raro"], [1, "fas", "fa-exclamation-circle", "seloRaro"], [1, "div-adicionar-carrinho", "btn-group-vertical"], [1, "preco", 3, "innerHTML"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-shopping-cart"], ["type", "success", 1, "alerta", 3, "closed"], ["selfClosingAlert", ""]], template: function DetalhesQuadrinhosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetalhesQuadrinhosComponent_Template_span_click_1_listener() { return ctx.voltaTelaLista(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DetalhesQuadrinhosComponent_div_2_Template, 9, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DetalhesQuadrinhosComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DetalhesQuadrinhosComponent_div_4_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DetalhesQuadrinhosComponent_ngb_alert_5_Template, 3, 1, "ngb-alert", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.comicService.getComic());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.comicService.getComic());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.comicService.getComic());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlert"]], styles: [".btn-voltar[_ngcontent-%COMP%] {\r\n    color: #ED1D24;\r\n    font-size: 2em;\r\n    float: right;\r\n}\r\n\r\n.btn-voltar[_ngcontent-%COMP%]:hover {\r\n    color: #991317;\r\n}\r\n\r\n.comicThumbArea[_ngcontent-%COMP%] {\r\n    margin-top: 2vh;\r\n}\r\n\r\n.comicThumb[_ngcontent-%COMP%] {\r\n    object-fit: contain;\r\n    max-width: 20vw;\r\n}\r\n\r\n.seloRaro[_ngcontent-%COMP%] {\r\n    margin-left: 7vw;\r\n    margin-right: 0.7em;\r\n    font-size: 1.5em;\r\n    color: #ED1D24;\r\n    border-color: black;\r\n}\r\n\r\n.div-adicionar-carrinho[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.preco[_ngcontent-%COMP%] {\r\nmargin-bottom: 1vh;\r\n}\r\n\r\n.alerta[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhbGhlcy1xdWFkcmluaG9zL2RldGFsaGVzLXF1YWRyaW5ob3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFsaGVzLXF1YWRyaW5ob3MvZGV0YWxoZXMtcXVhZHJpbmhvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi12b2x0YXIge1xyXG4gICAgY29sb3I6ICNFRDFEMjQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmJ0bi12b2x0YXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICM5OTEzMTc7XHJcbn1cclxuXHJcbi5jb21pY1RodW1iQXJlYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAydmg7XHJcbn1cclxuXHJcbi5jb21pY1RodW1iIHtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBtYXgtd2lkdGg6IDIwdnc7XHJcbn1cclxuXHJcbi5zZWxvUmFybyB7XHJcbiAgICBtYXJnaW4tbGVmdDogN3Z3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjdlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogI0VEMUQyNDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5kaXYtYWRpY2lvbmFyLWNhcnJpbmhvIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnByZWNvIHtcclxubWFyZ2luLWJvdHRvbTogMXZoO1xyXG59XHJcblxyXG4uYWxlcnRhIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetalhesQuadrinhosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-detalhes-quadrinhos',
                templateUrl: './detalhes-quadrinhos.component.html',
                styleUrls: ['./detalhes-quadrinhos.component.css']
            }]
    }], function () { return [{ type: _services_aba_service__WEBPACK_IMPORTED_MODULE_0__["AbaService"] }, { type: _services_comics_service__WEBPACK_IMPORTED_MODULE_5__["ComicsService"] }, { type: _services_finalizacao_compra_service__WEBPACK_IMPORTED_MODULE_6__["FinalizacaoCompraService"] }]; }, { selfClosingAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['selfClosingAlert', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/finalizacao-compra/finalizacao-compra.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/finalizacao-compra/finalizacao-compra.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FinalizacaoCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizacaoCompraComponent", function() { return FinalizacaoCompraComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_finalizacao_compra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/finalizacao-compra.service */ "./src/app/services/finalizacao-compra.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










const _c0 = ["selfClosingAlert"];
function FinalizacaoCompraComponent_div_3_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalizacaoCompraComponent_div_3_a_2_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const comic_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.removeItem(comic_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comic_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", comic_r6.title, " ");
} }
function FinalizacaoCompraComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FinalizacaoCompraComponent_div_3_a_2_Template, 5, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.finalizacaoService.getListaItens());
} }
function FinalizacaoCompraComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FinalizacaoCompraComponent_div_8_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.codigoCupom = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalizacaoCompraComponent_div_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.aplicaDesconto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Aplicar desconto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.codigoCupom);
} }
function FinalizacaoCompraComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalizacaoCompraComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.finalizaCompra(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Finalizar compra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FinalizacaoCompraComponent_ngb_alert_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function FinalizacaoCompraComponent_ngb_alert_10_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.successMessage, "\n");
} }
function FinalizacaoCompraComponent_ngb_alert_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 23, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function FinalizacaoCompraComponent_ngb_alert_11_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.dangerMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.dangerMessage, "\n");
} }
/**
 * Classe responsável por mostrar o carrinho de compras do usuário com seus totais,
 * aplicar cupom de desconto e finalizar a compra.
 */
class FinalizacaoCompraComponent {
    constructor(finalizacaoService, httpClient) {
        this.finalizacaoService = finalizacaoService;
        this.httpClient = httpClient;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.successMessage = '';
        this._danger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dangerMessage = '';
        this.codigoCupom = '';
        this.cupons = [];
    }
    ngOnInit() {
        this.httpClient.get("assets/cupons.json").subscribe(data => {
            Object.keys(data).map((key) => {
                this.cupons.push(data[key]);
            });
        });
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        this._danger.subscribe(message => this.dangerMessage = message);
        this._danger.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
    }
    getTextQuantidadeItens() {
        return `<strong>Quantidade total de itens: &nbsp;</strong> ${this.finalizacaoService.getQuantidadeItens()}`;
    }
    getTextTotal() {
        const total = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatCurrency"])(this.finalizacaoService.getTotal(), 'en-us', '$');
        return `<strong>Valor total: &nbsp;</strong> ${total}`;
    }
    removeItem(comic) {
        this.finalizacaoService.removerItem(comic);
        this.getTextQuantidadeItens();
        this.getTextTotal();
        if (this.finalizacaoService.getQuantidadeItens() == 0) {
            this.resetaListaCupons();
        }
    }
    resetaListaCupons() {
        this.httpClient.get("assets/cupons.json").subscribe(data => {
            Object.keys(data).map((key) => {
                this.cupons.push(data[key]);
            });
        });
    }
    aplicaDesconto() {
        const cupomValido = this.cupons.find(cupom => cupom.cupom_codigo == this.codigoCupom);
        if (!!cupomValido) {
            this.removerCupom(cupomValido);
            this.setaDesconto(cupomValido);
            this._success.next(`Cupom aplicado com sucesso!`);
        }
        else {
            this._danger.next(`Cupom inválido!`);
        }
    }
    removerCupom(cupomValido) {
        const index = this.cupons.indexOf(cupomValido);
        if (index !== -1) {
            this.cupons.splice(index, 1);
        }
    }
    finalizaCompra() {
        this.finalizacaoService.zeraLista();
        this.resetaListaCupons();
        this.codigoCupom = '';
        this._success.next(`Compra finalizada com sucesso!`);
    }
    setaDesconto(cupomValido) {
        let novoTotal = this.finalizacaoService.getTotal() * (100 - cupomValido.cupom_desconto) / 100;
        if (novoTotal < 0) {
            novoTotal = 0;
        }
        this.finalizacaoService.setTotal(novoTotal);
    }
}
FinalizacaoCompraComponent.ɵfac = function FinalizacaoCompraComponent_Factory(t) { return new (t || FinalizacaoCompraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_finalizacao_compra_service__WEBPACK_IMPORTED_MODULE_4__["FinalizacaoCompraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
FinalizacaoCompraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FinalizacaoCompraComponent, selectors: [["app-finalizacao-compra"]], viewQuery: function FinalizacaoCompraComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 12, vars: 10, consts: [[1, "row", "texto", "justify-content-center"], ["class", "row", 4, "ngIf"], [1, "row", "texto", "justify-content-center", 3, "hidden"], [1, "row", "texto", "justify-content-center", 3, "innerHTML", "hidden"], ["class", "row justify-content-center texto", 4, "ngIf"], ["class", "row justify-content-center", 4, "ngIf"], ["type", "success", "class", "alerta", 3, "closed", 4, "ngIf"], ["type", "danger", "class", "alerta", 3, "closed", 4, "ngIf"], [1, "row"], [1, "col-12", "ul-class", "listaComics"], [4, "ngFor", "ngForOf"], [1, "row", "itemLista", "justify-content-between"], [1, "personanegemNameArea"], ["title", "Remover item", 1, "fas", "fa-trash", 3, "click"], [1, "row", "justify-content-center", "texto"], [1, "input-group", "justify-content-center"], ["type", "text", "placeholder", "Insira seu cupom de desconto", 1, "input-cupom", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", "title", "Aplicar desconto", 1, "btn", "btn-primary", 3, "click"], [1, "row", "justify-content-center"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "success", 1, "alerta", 3, "closed"], ["selfClosingAlert", ""], ["type", "danger", 1, "alerta", 3, "closed"]], template: function FinalizacaoCompraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Carrinho de compras");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FinalizacaoCompraComponent_div_3_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Seu carrinho de compras est\u00E1 vazio.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FinalizacaoCompraComponent_div_8_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FinalizacaoCompraComponent_div_9_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FinalizacaoCompraComponent_ngb_alert_10_Template, 3, 1, "ngb-alert", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FinalizacaoCompraComponent_ngb_alert_11_Template, 3, 1, "ngb-alert", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.finalizacaoService.getListaItens());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.finalizacaoService.getQuantidadeItens() != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.getTextQuantidadeItens(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"])("hidden", ctx.finalizacaoService.getQuantidadeItens() == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.getTextTotal(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"])("hidden", ctx.finalizacaoService.getQuantidadeItens() == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finalizacaoService.getQuantidadeItens() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finalizacaoService.getQuantidadeItens() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dangerMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlert"]], styles: [".listaComics[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n    max-height: 25vh;\r\n    background-color: rgb(241, 241, 241);\r\n}\r\n.itemLista[_ngcontent-%COMP%] {\r\n    padding: 0.5em;\r\n    margin: 0.5em;\r\n    border-radius: 5px;\r\n}\r\n.itemLista[_ngcontent-%COMP%]:hover {\r\n    background-color: #ED1D24;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.comicNameArea[_ngcontent-%COMP%] {\r\n    margin-top: .5em;\r\n}\r\n.erroBusca[_ngcontent-%COMP%] {\r\n    margin: 1em;\r\n    color: #ED1D24;\r\n    font-weight: 'bold';\r\n    min-width: 100%;\r\n}\r\n.ul-class[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.alerta[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.input-cupom[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maW5hbGl6YWNhby1jb21wcmEvZmluYWxpemFjYW8tY29tcHJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmluYWxpemFjYW8tY29tcHJhL2ZpbmFsaXphY2FvLWNvbXByYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RhQ29taWNzIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG1heC1oZWlnaHQ6IDI1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbn1cclxuLml0ZW1MaXN0YSB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pdGVtTGlzdGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VEMUQyNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbWljTmFtZUFyZWEge1xyXG4gICAgbWFyZ2luLXRvcDogLjVlbTtcclxufVxyXG5cclxuLmVycm9CdXNjYSB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGNvbG9yOiAjRUQxRDI0O1xyXG4gICAgZm9udC13ZWlnaHQ6ICdib2xkJztcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVsLWNsYXNzIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5hbGVydGEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtY3Vwb20ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FinalizacaoCompraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-finalizacao-compra',
                templateUrl: './finalizacao-compra.component.html',
                styleUrls: ['./finalizacao-compra.component.css']
            }]
    }], function () { return [{ type: _services_finalizacao_compra_service__WEBPACK_IMPORTED_MODULE_4__["FinalizacaoCompraService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, { selfClosingAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['selfClosingAlert', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/lista-quadrinhos/lista-quadrinhos.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/lista-quadrinhos/lista-quadrinhos.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListaQuadrinhosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaQuadrinhosComponent", function() { return ListaQuadrinhosComponent; });
/* harmony import */ var _services_aba_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/aba.service */ "./src/app/services/aba.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_comics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/comics.service */ "./src/app/services/comics.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ListaQuadrinhosComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 9);
} }
function ListaQuadrinhosComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 10);
} }
function ListaQuadrinhosComponent_div_7_a_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListaQuadrinhosComponent_div_7_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaQuadrinhosComponent_div_7_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const comic_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.selecionarComic(comic_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListaQuadrinhosComponent_div_7_a_2_div_4_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comic_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", comic_r5.thumbnail.path + "." + comic_r5.thumbnail.extension, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comic_r5.raro);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", comic_r5.title, " ");
} }
function ListaQuadrinhosComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ListaQuadrinhosComponent_div_7_Template_ul_scroll_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onContainerScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListaQuadrinhosComponent_div_7_a_2_Template, 7, 3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.listaComics);
} }
function ListaQuadrinhosComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Desculpe, n\u00E3o foi encontrado nenhum HQ com este t\u00EDtulo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
/**
 * Classe responsável por listar os quadrinhos, com opção de pesquisar pelo título.
 */
class ListaQuadrinhosComponent {
    constructor(comicService, abaService) {
        this.comicService = comicService;
        this.abaService = abaService;
        this.inputPesquisa = '';
        this.mostraErro = false;
        this.carregando = true;
        this.listaComics = null;
    }
    ngOnInit() {
        this.pesquisarQuadrinhos();
    }
    onContainerScroll($event) {
        let pos = ($event.target.scrollTop) + $event.target.offsetHeight;
        let max = $event.target.scrollHeight;
        if (pos == max) {
            this.pesquisarMaisQuadrinhos();
        }
    }
    pesquisarQuadrinhos() {
        this.comicService.setQuantidadeItensMostrados(0);
        this.carregando = true;
        this.listaComics = this.comicService.getListaComics(this.inputPesquisa).subscribe(comics => {
            if (comics.data.results.length == 0) {
                this.mostraErro = true;
            }
            else {
                this.mostraErro = false;
            }
            this.listaComics = comics.data.results;
            this.comicService.setQuantidadeItensMostrados(this.listaComics.length);
            this.listaComics.forEach(comic => {
                let lastIdDigit = Number(comic.id.toString().split('').pop());
                if (lastIdDigit == this.comicService.getRaridade()) {
                    comic.raro = true;
                }
                else {
                    comic.raro = false;
                }
            });
            this.carregando = false;
        });
    }
    pesquisarMaisQuadrinhos() {
        this.carregando = true;
        let listaComicsOffset = this.comicService.getListaComics(this.inputPesquisa).subscribe(comics => {
            if (comics.data.results.length == 0) {
                this.mostraErro = true;
            }
            else {
                this.mostraErro = false;
            }
            comics.data.results.forEach(comic => {
                this.listaComics.push(comic);
                let lastIdDigit = Number(comic.id.toString().split('').pop());
                if (lastIdDigit == this.comicService.getRaridade()) {
                    comic.raro = true;
                }
                else {
                    comic.raro = false;
                }
            });
            this.comicService.setQuantidadeItensMostrados(this.listaComics.length);
            this.carregando = false;
        });
    }
    selecionarComic(comic) {
        this.comicService.setComic(comic);
        this.abaService.setAba(_services_aba_service__WEBPACK_IMPORTED_MODULE_0__["ABA_DETALHES"]);
    }
}
ListaQuadrinhosComponent.ɵfac = function ListaQuadrinhosComponent_Factory(t) { return new (t || ListaQuadrinhosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_aba_service__WEBPACK_IMPORTED_MODULE_0__["AbaService"])); };
ListaQuadrinhosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListaQuadrinhosComponent, selectors: [["app-lista-quadrinhos"]], decls: 9, vars: 5, consts: [[1, "row", "mx-1", 2, "margin-top", "1vh"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Pesquisar por t\u00EDtulo", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "input-group-append"], ["type", "button", "id", "button-addon2", "title", "Pesquisar", 1, "btn", "btn-outline-danger", 3, "click"], ["class", "fas fa-search", 4, "ngIf"], ["class", "fas fa-spinner fa-pulse", 4, "ngIf"], [4, "ngIf"], ["class", "erroBusca", 4, "ngIf"], [1, "fas", "fa-search"], [1, "fas", "fa-spinner", "fa-pulse"], [1, "row", "ul-class", "listaComics", "justify-content-between", 3, "scroll"], ["title", "Ver detalhes", 3, "click", 4, "ngFor", "ngForOf"], ["title", "Ver detalhes", 3, "click"], [1, "col", "itemLista"], [1, "comicThumbArea"], [1, "comicThumb", 3, "src"], [1, "personanegemNameArea"], [1, "fas", "fa-exclamation-circle", "seloRaro"], [1, "erroBusca"]], template: function ListaQuadrinhosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ListaQuadrinhosComponent_Template_input_ngModelChange_2_listener($event) { return ctx.inputPesquisa = $event; })("keyup.enter", function ListaQuadrinhosComponent_Template_input_keyup_enter_2_listener() { return ctx.pesquisarQuadrinhos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaQuadrinhosComponent_Template_button_click_4_listener() { return ctx.pesquisarQuadrinhos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListaQuadrinhosComponent_span_5_Template, 1, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListaQuadrinhosComponent_span_6_Template, 1, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListaQuadrinhosComponent_div_7_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListaQuadrinhosComponent_p_8_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputPesquisa);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.carregando);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carregando);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mostraErro && ctx.listaComics.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mostraErro);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".listaComics[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n    max-height: 75vh;\r\n}\r\n\r\n.itemLista[_ngcontent-%COMP%] {\r\n    padding: 0.5em;\r\n    margin: 0.5em;\r\n    border-radius: 5px;\r\n    width: 17vw;\r\n}\r\n\r\n.itemLista[_ngcontent-%COMP%]:hover {\r\n    background-color: #ED1D24;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.comicThumb[_ngcontent-%COMP%] {\r\n    width: 10vw;\r\n    object-fit: cover;\r\n}\r\n\r\n.comicThumbArea[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    position: relative;\r\n}\r\n\r\n.comicNameArea[_ngcontent-%COMP%] {\r\n    margin-top: .5em;\r\n}\r\n\r\n.erroBusca[_ngcontent-%COMP%] {\r\n    margin: 1em;\r\n    color: #ED1D24;\r\n    font-weight: 'bold';\r\n    min-width: 100%;\r\n}\r\n\r\n.ul-class[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n\r\n.seloRaro[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-left: -10%;\r\n    font-size: 1.5em;\r\n    color: #ED1D24;\r\n    border-color: black;\r\n}\r\n\r\n.itemLista[_ngcontent-%COMP%]:hover   .seloRaro[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0YS1xdWFkcmluaG9zL2xpc3RhLXF1YWRyaW5ob3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGEtcXVhZHJpbmhvcy9saXN0YS1xdWFkcmluaG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdGFDb21pY3Mge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWF4LWhlaWdodDogNzV2aDtcclxufVxyXG5cclxuLml0ZW1MaXN0YSB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMTd2dztcclxufVxyXG5cclxuLml0ZW1MaXN0YTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQxRDI0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29taWNUaHVtYiB7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uY29taWNUaHVtYkFyZWEge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb21pY05hbWVBcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbn1cclxuXHJcbi5lcnJvQnVzY2Ege1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBjb2xvcjogI0VEMUQyNDtcclxuICAgIGZvbnQtd2VpZ2h0OiAnYm9sZCc7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51bC1jbGFzcyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uc2Vsb1Jhcm8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICNFRDFEMjQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaXRlbUxpc3RhOmhvdmVyIC5zZWxvUmFybyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListaQuadrinhosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-lista-quadrinhos',
                templateUrl: './lista-quadrinhos.component.html',
                styleUrls: ['./lista-quadrinhos.component.css']
            }]
    }], function () { return [{ type: _services_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"] }, { type: _services_aba_service__WEBPACK_IMPORTED_MODULE_0__["AbaService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/aba.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/aba.service.ts ***!
  \*****************************************/
/*! exports provided: ABA_LISTA, ABA_DETALHES, ABA_FINALIZACAO, AbaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABA_LISTA", function() { return ABA_LISTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABA_DETALHES", function() { return ABA_DETALHES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABA_FINALIZACAO", function() { return ABA_FINALIZACAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbaService", function() { return AbaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const ABA_LISTA = 'lista';
const ABA_DETALHES = 'detalhes';
const ABA_FINALIZACAO = 'finalizacao';
/**
 * Classe responsável por armazenar a aba atual em que o usuário se encontra
 * e as constantes com os nomes de cada aba.
 */
class AbaService {
    constructor() {
        this.aba = '';
    }
    setAba(_aba) {
        this.aba = _aba;
    }
    getAba() {
        return this.aba;
    }
}
AbaService.ɵfac = function AbaService_Factory(t) { return new (t || AbaService)(); };
AbaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AbaService, factory: AbaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/comics.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/comics.service.ts ***!
  \********************************************/
/*! exports provided: ComicsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsService", function() { return ComicsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__);






/**
 * Classe responsável por controlar os serviços relacionados a API
 * e armazenar o quadrinho clicado pelo usuário para ver mais detalhes.
 */
class ComicsService {
    constructor(http) {
        this.http = http;
        this.comicsUrl = 'https://gateway.marvel.com:443/v1/public/comics?';
        this.publicKey = 'e5b5a887856bc2518f857eec3abb9331';
        this.privateKey = '67d194c4aae6e9619c93d6146a2fafd211051bea';
        this.comic = null;
        this.raridade = null;
        this.quantidadeItensMostrados = 0;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    getListaComics(titulo = '') {
        let url = this.comicsUrl + 'offset=' + this.quantidadeItensMostrados + '&';
        if (titulo.length > 0) {
            url += 'titleStartsWith=' + encodeURI(titulo) + '&';
        }
        return this.http.get(url + this.getParams())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            console.log(error);
            return [];
        }));
    }
    getParams() {
        let ts = new Date().getTime();
        let hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__["Md5"].hashStr(ts + this.privateKey + this.publicKey);
        let params = 'ts=' + ts + '&apikey=' + this.publicKey + '&hash=' + hash;
        return params;
    }
    setComic(_comic) {
        this.comic = _comic;
    }
    getComic() {
        return this.comic;
    }
    setRaridade(_raridade) {
        this.raridade = _raridade;
    }
    getRaridade() {
        return this.raridade;
    }
    setQuantidadeItensMostrados(_quantidadeItensMostrados) {
        this.quantidadeItensMostrados = _quantidadeItensMostrados;
    }
    getQuantidadeItensMostrados() {
        return this.quantidadeItensMostrados;
    }
}
ComicsService.ɵfac = function ComicsService_Factory(t) { return new (t || ComicsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ComicsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComicsService, factory: ComicsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComicsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/finalizacao-compra.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/finalizacao-compra.service.ts ***!
  \********************************************************/
/*! exports provided: FinalizacaoCompraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizacaoCompraService", function() { return FinalizacaoCompraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Classe responsável por controlar a quantidade de quadrinhos e o total do carrinho de compras.
 */
class FinalizacaoCompraService {
    constructor() {
        this.listaItens = [];
        this.quantidadeItens = 0;
        this.total = 0;
    }
    getQuantidadeItens() {
        return this.quantidadeItens;
    }
    setQuantidadeItens(quantidade) {
        this.quantidadeItens = quantidade;
    }
    addListaItens(comic) {
        this.listaItens.push(comic);
        this.setQuantidadeItens(this.listaItens.length);
        this.setTotal(this.getTotal() + comic.prices[0].price);
    }
    removerItem(comic) {
        const index = this.listaItens.indexOf(comic);
        if (index !== -1) {
            this.listaItens.splice(index, 1);
        }
        this.setQuantidadeItens(this.listaItens.length);
        this.setTotal(this.getTotal() - comic.prices[0].price);
    }
    getListaItens() {
        return this.listaItens;
    }
    setTotal(_total) {
        this.total = _total;
    }
    getTotal() {
        return this.total;
    }
    zeraLista() {
        this.listaItens = [];
        this.quantidadeItens = 0;
        this.total = 0;
    }
}
FinalizacaoCompraService.ɵfac = function FinalizacaoCompraService_Factory(t) { return new (t || FinalizacaoCompraService)(); };
FinalizacaoCompraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FinalizacaoCompraService, factory: FinalizacaoCompraService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalizacaoCompraService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Particular\Desktop\Angular 10\loja-quadrinhos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map