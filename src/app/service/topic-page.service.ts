import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { TopicPage } from '../Entity/topicPage';

@Injectable({
  providedIn: 'root'
})
export class TopicPageService extends BaseService<TopicPage> {
  getRoute(): string {
    return"/topicPages";
  }

}
