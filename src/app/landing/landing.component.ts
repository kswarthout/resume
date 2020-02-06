import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public landingMessage: string = `I'm Kari, a full-stack developer living in Hsinchu, Taiwan. I create web, mobile and desktop applications. I have some experience working with cloud technologies, including designing solutions for, and deploying to a cloud environment. I am currently seeking a position that will allow me to gain more experience working with these technologies, and am passionate in this pursuit.`;

  constructor() { }

  ngOnInit() {
  }

}
