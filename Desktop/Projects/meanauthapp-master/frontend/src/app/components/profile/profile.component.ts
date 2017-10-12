import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
@Injectable()
export class ProfileComponent implements OnInit {
  myprofile: string;
  user: any;

  constructor() { }

  ngOnInit() {
      const profile = localStorage.getItem('user');
      this.myprofile = profile;
      const asJson = JSON.parse(this.myprofile);
      this.user = asJson;
  }
}
