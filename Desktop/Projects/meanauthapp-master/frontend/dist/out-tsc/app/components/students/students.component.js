var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { StudentdataService } from '../../services/studentdata.service';
import { Router } from '@angular/router';
var StudentsComponent = (function () {
    function StudentsComponent(_studata, _route) {
        this._studata = _studata;
        this._route = _route;
        this.allStudent = [];
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._studata.getAllStudent().subscribe(function (data) {
            _this.allStudent = data;
        }, function (error) {
            console.log(error);
        }, function () {
            console.log('complete');
        });
    };
    StudentsComponent.prototype.addStudent = function () {
        this._route.navigate(['/addStudent']);
    };
    StudentsComponent.prototype.delStudent = function (item) {
        var _this = this;
        this._studata.deleteStudent(item).subscribe(function (data) {
            _this.allStudent.splice(_this.allStudent.indexOf(item), 1);
        }, function (error) {
            console.log(error);
        }, function () {
        });
    };
    StudentsComponent = __decorate([
        Component({
            selector: 'app-students',
            templateUrl: './students.component.html',
            styleUrls: ['./students.component.css']
        }),
        __metadata("design:paramtypes", [StudentdataService, Router])
    ], StudentsComponent);
    return StudentsComponent;
}());
export { StudentsComponent };
//# sourceMappingURL=C:/Users/osman/Desktop/Projects/meanauthapp-master/angular-src/src/app/components/students/students.component.js.map