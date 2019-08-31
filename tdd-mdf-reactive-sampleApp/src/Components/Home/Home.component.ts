import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  userForm:FormGroup;
  constructor() {
    this.userForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      surname:new FormControl(null,Validators.required)
    });
  }

  ngOnInit() {
    console.log(this.userForm);
  }

}
