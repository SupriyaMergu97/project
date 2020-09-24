import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services: any[];
  cities: any[];
  constructor(private http: HttpClient,
    private router: Router,
    private user: UserService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getService();
    this.getCity();
  }
  getCity() {
    this.user.selectCity().subscribe((data: []) => {
      this.cities = data;
    })
  }
  getService() {
    this.user.selectCategory().subscribe((data: []) => {
      this.services = data;
    })
  }
  
  bookNow() {
    this.router.navigate(['/booking']);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogboxComponent, dialogConfig);
  }
}
