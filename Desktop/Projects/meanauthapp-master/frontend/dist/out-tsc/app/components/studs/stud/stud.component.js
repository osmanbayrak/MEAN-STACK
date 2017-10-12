var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
var StudComponent = (function () {
    function StudComponent(changeDetectorRef, _route) {
        this.changeDetectorRef = changeDetectorRef;
        this._route = _route;
        this.model = { rno: 0, name: '', mobile_no: '', student_img: '' };
        this.file_srcs = [];
        this.debug_size_before = [];
        this.debug_size_after = [];
    }
    StudComponent.prototype.ngOnInit = function () {
    };
    StudComponent.prototype.fileChange = function (input) {
        this.readFiles(input.files);
    };
    StudComponent.prototype.readFile = function (file, reader, callback) {
        var _this = this;
        reader.onload = function () {
            callback(reader.result);
            _this.model.student_img = reader.result;
            console.log(reader.result);
        };
        reader.readAsDataURL(file);
    };
    StudComponent.prototype.readFiles = function (files, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        // Create the file reader
        var reader = new FileReader();
        // If there is a file
        if (index in files) {
            // Start reading this file
            this.readFile(files[index], reader, function (result) {
                // Create an img element and add the image file data to it
                var img = document.createElement('img');
                img.src = result;
                // Send this img to the resize function (and wait for callback)
                _this.resize(img, 250, 250, function (resized_jpeg, before, after) {
                    // For debugging (size in bytes before and after)
                    _this.debug_size_before.push(before);
                    _this.debug_size_after.push(after);
                    // Add the resized jpeg img source to a list for preview
                    // This is also the file you want to upload. (either as a
                    // base64 string or img.src = resized_jpeg if you prefer a file).
                    _this.file_srcs.push(resized_jpeg);
                    // Read the next file;
                    _this.readFiles(files, index + 1);
                });
            });
        }
        else {
            // When all files are done This forces a change detection
            this.changeDetectorRef.detectChanges();
        }
    };
    StudComponent.prototype.resize = function (img, MAX_WIDTH, MAX_HEIGHT, callback) {
        // This will wait until the img is loaded before calling this function
        return img.onload = function () {
            // Get the images current width and height
            var width = img.width;
            var height = img.height;
            // Set the WxH to fit the Max values (but maintain proportions)
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            // create a canvas object
            var canvas = document.createElement('canvas');
            // Set the canvas to the new calculated dimensions
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            // Get this encoded as a jpeg
            // IMPORTANT: 'jpeg' NOT 'jpg'
            var dataUrl = canvas.toDataURL('image/jpeg');
            // callback with the results
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    };
    StudComponent.prototype.studentSubmit = function () {
        console.log('asd');
    };
    StudComponent = __decorate([
        Component({
            selector: 'app-stud',
            templateUrl: './stud.component.html',
            styleUrls: ['./stud.component.css']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, Router])
    ], StudComponent);
    return StudComponent;
}());
export { StudComponent };
//# sourceMappingURL=C:/Users/osman/Desktop/Projects/meanauthapp-master/angular-src/src/app/components/studs/stud/stud.component.js.map