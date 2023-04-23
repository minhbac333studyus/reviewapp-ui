import { BaseEntity } from './baseEntity';
import { TopicPage } from './topicPage';

export class ProductOnTopic extends BaseEntity<ProductOnTopic> {
  id: number | undefined = 0;
  topicPage: TopicPage = new TopicPage();
  ratePoint: number | undefined = 0;
  reasonToBuy: string = '';
  reasonToAvoid: string = '';
  name: string = '';
  linkReferences: string[] = [];
  description: string = '';
  recommendForUser: string = '';
  lastUpdate: Date = new Date();
  createdDate: Date = new Date();

  addLinkReferences(link: string) {
    this.linkReferences.push(link);
  }

  removeLinkReferences(link: string) {
    const index = this.linkReferences.indexOf(link);
    if (index !== -1) {
      this.linkReferences.splice(index, 1);
    }
  }
}
