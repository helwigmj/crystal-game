import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class HomePageComponent {
  // nyt section names
  sections: string[] = `arts, automobiles, books, business, fashion, food, health,
home, insider, magazine, movies, national, nyregion, obituaries,
opinion, politics, realestate, science, sports, sundayreview,
technology, theater, tmagazine, travel, upshot, world`
    .replace(/ /g, '')
    .split(',');
  results: any[] = [];
  selectedSection: string = "home";

  constructor() {}

  public selectSection(s: string) {
    this.selectedSection = s;
  }


}
