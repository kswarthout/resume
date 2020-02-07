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
  //   [
  //   {
  //     title: 'Time & Expense Entry Web Suite',
  //     subtitle: 'Coming Soon!',
  //     description: '',
  //     repo: ''
  //   },
  //   {
  //     title: 'Reporting Utility',
  //     subtitle: 'Coming Soon!',
  //     description: '',
  //     repo: ''
  //   },
  //   {
  //     title: 'On Boarding API',
  //     subtitle: 'Coming Soon!',
  //     description: '',
  //     repo: ''
  //   },
  //   {
  //     title: 'DESC Dispatch Android App',
  //     subtitle: 'Coming Soon!',
  //     description: '',
  //     repo: 'https://github.com/kswarthout/Dispatch'
  //   },
  //   {
  //     title: 'TIP Web App',
  //     subtitle: 'Coming Soon!',
  //     description: '',
  //     repo: ''
  //   }
  // ];

  constructor() { }

  ngOnInit() {
  }

}
