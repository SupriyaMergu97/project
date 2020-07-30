import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services: any[];
  constructor(private http: HttpClient, private router:Router) {
  }

  ngOnInit() {
    this.http.get(`http://localhost:3100/service`).subscribe((data: []) => {
      this.services = data;
    })
  }
  bookNow(){
    this.router.navigate(['/booking']);
  }


}
