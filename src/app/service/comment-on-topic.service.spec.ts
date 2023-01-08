import { TestBed } from '@angular/core/testing';

import { CommentOnTopicService } from './comment-on-topic.service';

describe('CommentOnTopicService', () => {
  let service: CommentOnTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentOnTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
