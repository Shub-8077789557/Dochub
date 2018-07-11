import { Component, OnInit, ElementRef, ContentChildren, ViewChild, ViewContainerRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  dark = false;

  @ViewChild('container', { read: ViewContainerRef }) _appdropzone;
    @ViewChild('gridView12') gridView12;

  constructor( private viewContainerRef: ViewContainerRef ) {}

  ngOnInit() {}
  
  ngAfterViewInit() {
    // this._appdropzone.createEmbeddedView(this.gridView12);
  }
}
