import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  
  UniqueConstraintError,
  appoint
} from '../student-details';
import { Subscription } from 'rxjs';
import { CRUDService } from '../curd.service';

@Component({
  selector: 'app-operations',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.css'],
})
export class AppointComponent implements OnInit, OnDestroy {
  constructor(private Service: CRUDService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  
  User1: appoint = {
    full_name:'',
    email: '',
    phone:'',
    dob:'',
    gender:'',
    a_date:'',
    a_time:'',
    
    problem:'',
    
};
  SuccessMsg = '';
  ErrorMsg = '';
  a_Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.a_Insert(this.User1).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User1.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User1.email} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
