import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.component.html',
  styleUrls: ['./progres-bar.component.scss']
})
export class ProgresBarComponent implements OnInit {
  constructor() {}
  options = {
    min: 8,
    max: 100,
    ease: 'linear',
    speed: 300,
    trickleSpeed: 100,
    meteor: true,
    spinner: false,
    spinnerPosition: 'right',
    direction: 'ltr+',
    color: 'red',
    thick: true
  };
  startedClass = false;
  completedClass = false;
  preventAbuse = false;

  onStarted() {
    this.startedClass = true;
    setTimeout(() => {
      this.startedClass = false;
    }, 800);
  }

  onCompleted() {
    this.completedClass = true;
    setTimeout(() => {
      this.completedClass = false;
    }, 800);
  }
  ngOnInit() {
    this.onStarted();
  }
}
