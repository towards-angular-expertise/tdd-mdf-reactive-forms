import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormGroup,FormControl,Validators  } from "@angular/forms";
@Component({
  selector: 'app-BuilderValidation',
  templateUrl: './BuilderValidation.component.html',
  styleUrls: ['./BuilderValidation.component.css']
})
export class BuilderValidationComponent implements OnInit {

  constructor(private builder:FormBuilder) { }
  
  userForm:FormGroup;

  ngOnInit() {
    this.initialForm();
  }
  initialForm(){
    this.userForm = this.builder.group({
      name:["",Validators.required],
      surname:["",Validators.required]
    });
  }

}
