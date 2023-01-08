import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicPagesRoutingModule } from './topic-pages-routing.module';
import { TopicPagesComponent } from './topic-pages.component';


@NgModule({
  declarations: [
    TopicPagesComponent
  ],
  imports: [
    CommonModule,
    TopicPagesRoutingModule
  ]
})
export class TopicPagesModule { }
