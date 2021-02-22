import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent implements OnInit {
  aboutInfo: any[] = [
    {
      title: 'Plumber',
      description: `We Deal in all kinds of plumbing work including PPR Fittings,
      CPVC Fittings and GI Fittings. Be it a contract with material or contract without material 
      or just minor repair work, get your plumbing worries fixed once and for all.`,
      image: 'assets/Plumbing.jpg'
    },
    {
      title: 'Electrician',
      description: `At EasyFix we are your one call partner for all your repair needs,
      from a ceiling fan installation to doing commercial wiring or working on CAT 6 networking cable,
      our electricians can do it all.`,
      image: 'assets/electrician.jpg'
    },
    {
      title: 'Carpenter',
      description: `Do you have to get a modular kitchen customized? Or do you plan to change the cloth for your sofa?
      Or do you want to get some those paintings up on the wall?
      EasyFix is a one call solution partner for all your needs.`,
      image: 'assets/carpenter.jpg'
    },{
      title: 'AC & Refrigerator',
      description: `Hundreds of people trust us for their AC and Refrigeration related issues. Our professionally trained
      servicemen can provide you with the most comprehensive solutions at charges that are unbeatable in the
      market today`,
      image: 'assets/AC-REPAIR.jpg'
    },

  ];
  constructor(private router: Router) {

  }

  ngOnInit() {

  }
  bookNow(val) {
    alert(val);
    this.router.navigate(['/home']);
  }
}
