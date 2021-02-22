import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../../user.service';
import {
  MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  errorMessage: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  paramValues: any;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder,
              public dialog: MatDialog, private snackBar: MatSnackBar,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params) => {
      this.paramValues = params;
       // console.log('_________ ', params);
    });
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      // tslint:disable-next-line:no-unused-expression
      contact: [''[Validators.required, Validators.maxLength[10]]],
      email: [''],
      address: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }
  booking() {
    this.errorMessage = '';
    const { valid, value } = this.bookingForm;
    if (valid) {
      this.userService.completeBooking({ ...value, ...this.paramValues }).subscribe((data) => {
        if (data) {
          this.openDialog();
          this.router.navigate(['/home']);
        }
      }, (err) => {
        console.log('errr :: ', err.error.message);
        this.errorMessage = err ? err.error.message : 'something went wrong';
      });
    } else {
      this.openSnackBar();
    }
  }

  // booking() {
  //   this.errorMessage = '';
  //   const { valid, value } = this.bookingForm;
  //   if (valid) {
  //     this.userService.completeBooking(value).subscribe((data) => {
  //       if (data) {
  //         this.openDialog();
  //         this.router.navigate(['/home']);
  //       }
  //     }, (err) => {
  //       // this.openSnackBar();
  //       console.log('error :: ', err.error.message)
  //       this.errorMessage = err ? err.error.message : 'something went wrong';
  //     });
  //   }
  // }

  openSnackBar() {
    this.snackBar.open('Cannonball!!', 'End now', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // const { valid, value } = this.bookingForm;
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    // if (valid) {
    //   this.userService.completeBooking(value).subscribe((data) => {
    //   })
    // }
    // if (data) {
    // }
  }


}
