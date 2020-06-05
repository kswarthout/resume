import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public landingMessage: string = `<p>I'm Kari, a full-stack developer currently located in Hsinchu City, Taiwan. 
                                  I create web, mobile and desktop applications. 
                                  I have a <a href="https://northseattle.edu/programs/bas-application-development" target="_blank">
                                  Bachelor of Applied Science in Application Development from North Seattle College</a> 
                                  and a <a href="https://murrow.wsu.edu/" target="_blank">
                                  Bachelor of Arts in Communication from Washington State University</a> 
                                  I have some experience
                                  working with cloud technologies, including designing solutions for,
                                  and deploying to a cloud environment. I am currently seeking a position
                                  that will allow me to gain more experience working with these technologies,
                                  and am passionate in this pursuit.</p>`;

  constructor() { }

  ngOnInit() {
  }

}
