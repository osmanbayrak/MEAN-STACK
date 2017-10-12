import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StudentdataService } from '../../services/studentdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
model = {rno: 0, name: '', mobile_no: '', student_img: ''};
  public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];
  constructor(private changeDetectorRef: ChangeDetectorRef,
              private studata: StudentdataService,
              public _route: Router) { }

  ngOnInit() {
  }
fileChange(input) {
  this.readFiles(input.files);
}
readFile(file, reader, callback) {
  reader.onload = () => {
    callback(reader.result);
    this.model.student_img = reader.result;
  };

  reader.readAsDataURL(file);
}
readFiles(files, index= 0) {
  // Create the file reader
  const reader = new FileReader();
  // If there is a file
  if (index in files) {
    // Start reading this file
    this.readFile(files[index], reader, (result) => {
      // Create an img element and add the image file data to it
      const img = document.createElement('img');
      img.src = result;
      // Send this img to the resize function (and wait for callback)
      this.resize(img, 250, 250, (resized_jpeg, before, after) => {
        // For debugging (size in bytes before and after)
        this.debug_size_before.push(before);
        this.debug_size_after.push(after);
        // Add the resized jpeg img source to a list for preview
        // This is also the file you want to upload. (either as a
        // base64 string or img.src = resized_jpeg if you prefer a file).
        this.file_srcs.push(resized_jpeg);
        // Read the next file;
        this.readFiles(files, index + 1);
      });
    });
  }else {
    // When all files are done This forces a change detection
    this.changeDetectorRef.detectChanges();
  }
}
resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
  // This will wait until the img is loaded before calling this function
  return img.onload = () => {

    // Get the images current width and height
    let width = img.width;
    let height = img.height;

    // Set the WxH to fit the Max values (but maintain proportions)
    if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }

    // create a canvas object
    const canvas = document.createElement('canvas');

    // Set the canvas to the new calculated dimensions
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0,  width, height);

    // Get this encoded as a jpeg
    // IMPORTANT: 'jpeg' NOT 'jpg'
    const dataUrl = canvas.toDataURL('image/jpeg');

    // callback with the results
    callback(dataUrl, img.src.length, dataUrl.length);
  };
}
studentSubmit() {

this.studata.addStudent(this.model).subscribe(
  (data: any) => {
    this._route.navigate(['/allStudent']);
  },
  function(error){
    console.log(error);
  },
  function(){
    console.log('On Complete');
  }

);
}
}
