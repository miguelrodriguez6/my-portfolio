import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  currentSlideNumber: number = 1;

  ngOnInit(): void {
    this.showSlides(this.currentSlideNumber);
  }

  plusSlides(n: number) {
    this.showSlides(this.currentSlideNumber += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.currentSlideNumber = n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) { this.currentSlideNumber = 1; }
    if (n < 1) { this.currentSlideNumber = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.currentSlideNumber - 1].style.display = "block";
    dots[this.currentSlideNumber - 1].className += " active";
  }
}
