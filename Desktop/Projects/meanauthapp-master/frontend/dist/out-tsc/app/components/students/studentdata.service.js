var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
var StudentdataService = (function () {
    function StudentdataService(_http) {
        this._http = _http;
    }
    StudentdataService.prototype.getAllStudent = function () {
        return this._http.get(this.url).map(function (res) { return res.json(); });
    };
    StudentdataService.prototype.addStudent = function (stu) {
        var body = JSON.stringify(stu);
        var header = new Headers({ 'Content-Type': 'application/json' });
        var res = new RequestOptions({ headers: header });
        return this._http.post(this.url, body, res).map(function (res) { return res.json(); });
    };
    StudentdataService.prototype.deleteStudent = function (stu) {
        var body = JSON.stringify(stu);
        var header = new Headers({ 'Content-Type': 'application/json' });
        var res = new RequestOptions({ headers: header });
        return this._http.post(this.url + stu.rno, body, res).map(function (res) { return res.json(); });
    };
    StudentdataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], StudentdataService);
    return StudentdataService;
}());
export { StudentdataService };
//# sourceMappingURL=C:/Users/osman/Desktop/Projects/meanauthapp-master/angular-src/src/app/components/students/studentdata.service.js.map