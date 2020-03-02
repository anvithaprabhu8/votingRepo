import { Account } from './account.model';
import { generate } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class Users{
        public id:number;
        public name:string;
        public address:string;
        public aadhar:string;
        public stationid:string;
        public gender:string;
        public dob:Date;
        public image:string;
        private account:Account=null;

        constructor(account:Account){
        this.account=account;
       }

       validateuser(){
           let validaadhar: string[]=["4NM16CS000","4NM16CS001","4NM16CS002","4NM16CS003","4NM16CS004"];
           if(validaadhar.find(aadhar=>aadhar==this.aadhar)){
             
          }
          
   
    
       }
    
}

