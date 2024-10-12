import {Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";


interface Project {
  title: string;
  description: string;
  images: string[];
  currentImageIndex: number;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy  {
  projects: { images: string[]; currentImageIndex: number; description: string; title: string }[] = [];

  intervalId: any;

  constructor(private sanitizer: DomSanitizer) {
    this.projects = [
      { title: 'Data analysis and visualization', description: 'Tactical Camera Data Analysis and visualization in FootballTactical Camera Data Analysis and visualization in FootballTactical Camera Data Analysis and visualization in FootballTactical Camera Data Analysis and visualization in Football', images: ['assets/tactical-camera-project-images/TC1.png', 'assets/tactical-camera-project-images/TC2.png', 'assets/tactical-camera-project-images/TC3.png', 'assets/tactical-camera-project-images/TC4.png', 'assets/tactical-camera-project-images/TC5.png', 'assets/tactical-camera-project-images/TC6.png'], currentImageIndex: 0,},
    ];
  }

  ngOnInit(): void {
    this.startImageRotation();
  }

  startImageRotation(): void {
    this.intervalId = setInterval(() => {
      this.projects.forEach((project) => {
        if (project.images.length > 0) {
          project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
        }
      });
    }, 3000);
  }


  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
