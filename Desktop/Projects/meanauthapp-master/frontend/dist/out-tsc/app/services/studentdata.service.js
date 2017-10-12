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
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
var StudentdataService = (function () {
    function StudentdataService(_http) {
        this._http = _http;
        this.isDev = true; // Change to false before deployment
    }
    StudentdataService.prototype.getAllStudent = function () {
        var ep = this.prepEndpoint('http://localhost:8080/students/');
        return this._http.get(ep).map(function (res) { return res.json(); });
    };
    StudentdataService.prototype.addStudent = function (stu) {
        var body = JSON.stringify(stu);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:8080/students/');
        return this._http.post(ep, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    StudentdataService.prototype.deleteStudent = function (stu) {
        var body = JSON.stringify(stu);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:8080/students/');
        return this._http.post(ep + stu.rno, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    StudentdataService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    StudentdataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], StudentdataService);
    return StudentdataService;
}());
export { StudentdataService };
//# sourceMappingURL=C:/Users/osman/Desktop/Projects/meanauthapp-master/angular-src/src/app/services/studentdata.service.js.map