import { Component, OnInit } from '@angular/core';
import { AppointService } from '../appoint.service';

interface Disease {
  email: string;
  full_name: string;
  phone: string;
  dob:string;
  gender:string;
  a_date:string;
  a_time:string;
  problem:string;

}

@Component({
  selector: 'app-diseases',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  tableData: Disease[] = [];
  displayedColumns: string[] = ['email', 'full_name', 'phone', 'dob','gender','a_date','a_time','problem','edit'];
  showForm: boolean = false;
  editMode: boolean = false;
  formData: Disease = {
    email: '',
    full_name: '',
    phone:'',
    dob:'',
    gender:'',
    a_date:'',
    a_time:'',
    problem:'',
  };

  constructor(private diseasesService: AppointService) {}

  ngOnInit(): void {
    this.getDiseasesData();
  }

  getDiseasesData(): void {
    this.diseasesService.getDiseasesData().subscribe(
      (data) => {
        this.tableData = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  insertData(): void {
    this.diseasesService.insertDisease(this.formData).subscribe(
      (response) => {
        console.log(response);
        this.getDiseasesData();
        this.resetForm();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateData(): void {
    this.diseasesService.updateDisease(this.formData).subscribe(
      (response) => {
        console.log(response);
        this.getDiseasesData();
        this.resetForm();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteData(sno: number): void {
    this.diseasesService.deleteDisease(sno).subscribe(
      (response) => {
        console.log(response);
        this.getDiseasesData();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cancelForm(): void {
    this.showForm = false;
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      email: '',
      full_name: '',
      phone:'',
      dob:'',
      gender:'',
      a_date:'',
      a_time:'',
      problem:'',
    
};
  }

  editData(data: Disease): void {
    this.showForm = true;
    this.editMode = true;
    this.formData = { ...data };
  }
}
