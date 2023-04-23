import { Component, OnInit } from '@angular/core';
import { TopicPageService } from '../service/topic-page.service';
import { TopicPage } from '../Entity/topicPage';
import { Pagable } from '../Entity/pagination';

@Component({
  selector: 'app-topic-pages',
  templateUrl: './topic-pages.component.html',
  styleUrls: ['./topic-pages.component.css']
})
export class TopicPagesComponent    extends Pagable<TopicPage>  implements OnInit {
  topicPages: TopicPage[] = [];

  constructor(private topicPageService: TopicPageService) {
    super(topicPageService);
  }

  ngOnInit(): void {
    this.getTopicPages();
  }

  getTopicPages(): void {
    this.topicPageService.getAll().subscribe(topicPages => {
      this.topicPages = topicPages.result;
    });
  }
}
