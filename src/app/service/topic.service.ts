import { Injectable } from '@angular/core';
import { Topic } from '../Entity/topic';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService extends BaseService<Topic> {
  getRoute(): string {
    return"/topics";
  }
}
