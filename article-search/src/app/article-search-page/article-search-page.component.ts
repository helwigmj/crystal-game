import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { NytArticleSearchService } from '../nyt-article-search.service';

import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { SearchData } from '../search-data';

@Component({
  selector: 'app-article-search-page',
  templateUrl: './article-search-page.component.html',
  styleUrls: ['./article-search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ArticleSearchPageComponent implements OnInit, OnChanges {
  // initialize empty object to hold query data
  searchData: SearchData = {};
  today: Date = new Date();
  section: string;
  firstResults: [];
  results: []
  total: 0;
  // dummy array for initial search
  data: [];
  constructor(private service: NytArticleSearchService) {}

  @Input() selectedSection: string;

  ngOnInit() {
    this.getArticles();
  }

  ngOnChanges() {
    this.section = this.selectedSection;
    this.getArticles();
  }

  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.service
      .search(searchForm.value)
      .subscribe(searchResults => {
        debugger
        this.results = (searchResults as any).response.docs
        this.total = (searchResults as any).response.meta.hits;
        // empty firstResults array to change display
        this.firstResults = []
      });
  }

  getArticles() {
    this.service.getArticles(this.selectedSection).subscribe(res => {
      this.firstResults = (res as any).results;
    });
  }
}
