import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  dark: any;
  constructor(
    private _element: ElementRef,
    private _overlayContainer: OverlayContainer
  ) {}

  ngOnInit() {}

  /* This Function defined for chnage the Current theme to Dark theme. the defalut theme is $dochub-app-theme Dark theme is created in syle.scss */
  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._element.nativeElement.classList.add(darkThemeClass);
      this._overlayContainer
        .getContainerElement()
        .classList.add(darkThemeClass);
    } else {
      this._element.nativeElement.classList.remove(darkThemeClass);
      this._overlayContainer
        .getContainerElement()
        .classList.remove(darkThemeClass);
    }
  }
}
