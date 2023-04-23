
import { Author } from './author';
import { Topic } from './topic';
import { BaseEntity } from './baseEntity';
import { ProductOnTopic } from './productOnTopic';

export class TopicPage extends BaseEntity<TopicPage> {
  id: number | undefined = 0;
  topicTitle: string = '';
  topicHeaderContent: string = '';
  topicMiddleContent: string = '';
  topicFooterContent: string = '';
  topicContent: string = '';
  productOnTopics: ProductOnTopic[] = [];
  author: Author = new Author();
  topic: Topic = new Topic();
  lastUpdate: Date = new Date();
  createdDate: Date = new Date();
  constructor(){
    super()
  }
}
