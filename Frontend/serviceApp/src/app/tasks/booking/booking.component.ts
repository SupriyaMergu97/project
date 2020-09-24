import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;


  constructor(private userService: UserService, private router: Router, private fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      contact: [''[Validators.required, Validators.maxLength[10]]],
      email: [''],
      address: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
  }
  booking() {
    console.log(this.bookingForm.value);
    this.userService.completeBooking(this.bookingForm.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['/home']);
      }
    })
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const { valid, value } = this.bookingForm;
        const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    // if (valid) {
    //   this.userService.completeBooking(value).subscribe((data) => {
    //   })
    // }
    // if (data) {
    // }
  }


}
