import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users.model';
import { Account } from './account.model';

@NgModule({
  declarations: [],
  providers:[Users,Account],
  imports: [
    CommonModule
  ]
})
export class ModelModule { }
