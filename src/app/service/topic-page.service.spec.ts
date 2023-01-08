import { TestBed } from '@angular/core/testing';

import { TopicPageService } from './topic-page.service';

describe('TopicPageService', () => {
  let service: TopicPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
