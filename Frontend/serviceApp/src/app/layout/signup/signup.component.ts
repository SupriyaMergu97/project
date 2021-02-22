import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = <any> FormGroup;
  services: any[];
  cities: any[];
  errorMessage: String;

  constructor(private http: HttpClient,
    private router: Router,
    private user: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      city: ['', Validators.required],
      category: ['', Validators.required],
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      contact: ['', Validators.compose[Validators.required, Validators.minLength[10]]],
      address: ['', Validators.required],
      experience: ['', Validators.required],
      password: ['', Validators.compose[Validators.required, Validators.minLength[6], Validators.maxLength[30]]],
      confirm: ['', Validators.required]
    }, { validator: this.checkPassword });
    this.getService();
    this.getCity();
  }

  checkPassword(group: FormGroup) {
    const { password, confirm } = group.value;
    return password === confirm ? null : { misMatch: true }
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
  signup() {
    this.errorMessage = '';
    const { valid, value } = this.signupForm;
    if (valid) {
      this.user.signUp(value).subscribe((data) => {
        if (data) {
          this.signupForm.reset();
          // this.router.navigate(['/login']);
        }
      }, (err) => {
        console.log('error : ', err.error.message);
        this.errorMessage = err ? err.error.message : 'something went wrong';
      });
    }
  }
}
