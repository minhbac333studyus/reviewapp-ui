import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicPagesRoutingModule } from './topic-pages-routing.module';
import { TopicPagesComponent } from './topic-pages.component';
import { GenerateComponent } from './generate/generate.component';


@NgModule({
  declarations: [
    TopicPagesComponent,
    GenerateComponent
  ],
  imports: [
    CommonModule,
    TopicPagesRoutingModule
  ]
})
export class TopicPagesModule { }
