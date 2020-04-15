import { TestBed } from '@angular/core/testing';

import { NytArticleSearchService } from './nyt-article-search.service';

describe('NytArticleSearchService', () => {
  let service: NytArticleSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NytArticleSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
