import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPagesComponent } from './topic-pages.component';

describe('TopicPagesComponent', () => {
  let component: TopicPagesComponent;
  let fixture: ComponentFixture<TopicPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
