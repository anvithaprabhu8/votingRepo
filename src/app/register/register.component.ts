import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Users } from '../model/users.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  submitted:boolean=false;
  constructor(public users: Users) { }

  ngOnInit() {}
  submitRegister(form: NgForm){   //add import
    this.submitted=true;
    
  }
}
