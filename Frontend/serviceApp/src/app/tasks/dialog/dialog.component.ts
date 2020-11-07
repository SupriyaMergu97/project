import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  message: string = "success"
  cancelButtonText = "Ok"
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogComponent>,
    private router:Router) {
    if (data) {
      // this.message = data.message || this.message;
      this.home();
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300vw', '300vw')
  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogComponent);
  // }
  ngOnInit() {
  }
home(){
  this.router.navigate(['/home'])

}
}
