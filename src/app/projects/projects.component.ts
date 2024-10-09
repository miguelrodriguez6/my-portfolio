import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    { title: 'Project 1', subtitle: 'Description for project 1' },
    { title: 'Project 2', subtitle: 'Description for project 2' },
    { title: 'Project 3', subtitle: 'Description for project 3' }
  ];

  currentIndex: number = 0;
  currentProject: Project | null = null;

  ngOnInit(): void {
    this.currentProject = this.projects[this.currentIndex];
  }

  nextProject(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length; // Vuelve al primer proyecto al llegar al final
    this.currentProject = this.projects[this.currentIndex];
  }

  prevProject(): void {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length; // Vuelve al último proyecto al llegar al principio
    this.currentProject = this.projects[this.currentIndex];
  }
}
