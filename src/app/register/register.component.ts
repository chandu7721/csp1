import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  StudentDetails,
  UniqueConstraintError,
  appoint
} from '../student-details';
import { Subscription } from 'rxjs';
import { CRUDService } from '../curd.service';

@Component({
  selector: 'app-operations',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private Service: CRUDService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: StudentDetails = {
    email: '',
    password: '',
    name: '',
  };
  
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
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

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.email} Inserted Succesfully`;
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
