import { Injectable } from '@angular/core';
import {Student} from '../components/students/student';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class StudentdataService {
    isDev: boolean;
  constructor(private _http: Http) {
      this.isDev = true; // Change to false before deployment
  }
  getAllStudent() {
    const ep = this.prepEndpoint('http://localhost:8080/students/');
    return this._http.get(ep).map((res: Response) => res.json());
  }
  addStudent(stu: Student) {
    const body = JSON.stringify(stu);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('http://localhost:8080/students/');
    return this._http.post(ep, body, {headers: headers}).map(res => res.json());
  }
  deleteStudent(stu: Student) {
    const body = JSON.stringify(stu);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('http://localhost:8080/students/');
    return this._http.post(ep + stu.rno, body, {headers: headers}).map(res => res.json());
  }
  prepEndpoint(ep) {
      if (this.isDev) {
          return ep;
      } else {
          return 'http://localhost:8080/' + ep;
      }
  }

}
