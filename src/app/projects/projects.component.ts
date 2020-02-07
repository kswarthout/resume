import { Component, OnInit } from '@angular/core';

import { content } from '../../assets/docs/data';

export interface Project {
  title: string;
  description: string;
  technologies: string;
  repo?: string;
  demo?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = content.projects;

  constructor() { }

  ngOnInit() {
  }

}
