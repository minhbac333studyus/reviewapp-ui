import { TestBed } from '@angular/core/testing';

import { ProductOnTopicService } from './product-on-topic.service';

describe('ProductOnTopicService', () => {
  let service: ProductOnTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductOnTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
