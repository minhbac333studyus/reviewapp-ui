import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pagable } from '../Entity/pagination';
import { Topic } from '../Entity/topic';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent   extends Pagable<Topic> implements OnInit {


  public editForm: FormGroup;
  @Input() topicForm: Topic = new Topic();
  constructor(private topicService:TopicService, private formBuilder:FormBuilder) {
    super(topicService);
    this.editForm = this.formBuilder.group({
      id: 0,
      name: '',
    });
  }

  ngOnInit(): void {
    this.getList();
  }
}
