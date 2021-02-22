import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from 'src/app/user.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services: any[];
  cities: any[];
  homeForm: FormGroup;
  constructor(private http: HttpClient,
    private router: Router,
    private user: UserService,
    private dialog: MatDialog,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getService();
    this.getCity();
    this.homeForm = this.fb.group({
      city: [''],
      category: ['']
    })
  }
  getCity() {
    this.user.selectCity().subscribe((data: []) => {
      this.cities = data;
    });
  }
  getService() {
    this.user.selectCategory().subscribe((data: []) => {
      this.services = data;
    });
  }


  bookNow() {
    const { valid, value } = this.homeForm;
    console.log(value, valid);
    if(valid){
      this.router.navigate(['/booking'],{queryParams:value});
    }
  }

}
