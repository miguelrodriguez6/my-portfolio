import {Component, OnDestroy, OnInit} from '@angular/core';


interface Project {
  title: string;
  description: string;
  images: string[];
  currentImageIndex: number;
  githubRepoUrl: string | null;
  previewUrl: string | null;
  demoVideoUrl: string | null;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy  {
  projects: Project[] = [];

  intervalId: any;

  constructor() {
    this.projects = [
      { title: 'FootballData - Tactical Camera Data Analysis and visualization in Football.', description: 'A modular, extensible, and maintainable platform for football match analysis. The platform enables team analysts to upload data and videos of their matches, allowing them to subsequently visualize the positioning of their own players as well as players from other teams (potential signings), extract key plays, and even review a report containing statistics and graphical insights about the match.', images: ['assets/tactical-camera-project-images/TC1.png', 'assets/tactical-camera-project-images/TC2.png', 'assets/tactical-camera-project-images/TC3.png', 'assets/tactical-camera-project-images/TC4.png', 'assets/tactical-camera-project-images/TC5.png', 'assets/tactical-camera-project-images/TC6.png', 'assets/tactical-camera-project-images/TC7.png'], currentImageIndex: 0, githubRepoUrl: "https://github.com/miguelrodriguez6/Football-Tactical-Camera-Data-Analysis/tree/master", previewUrl: null, demoVideoUrl: null},
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

  redirectTo(url: string) {
    window.open(url, '_blank');
  }
}
