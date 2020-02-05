import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public landingMessage: string = `Hi! I'm Kari Swarthout, a full-stack developer living in Hsinchu, Taiwan. I design and build web, mobile, and desktop applications. I have a passion for cloud development, and am currently seeking a position that would allow me to work with these technologies.`;

  constructor() { }

  ngOnInit() {
  }

}
