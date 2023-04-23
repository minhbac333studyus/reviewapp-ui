import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicPagesRoutingModule } from './topic-pages-routing.module';
import { TopicPagesComponent } from './topic-pages.component';
import { GenerateComponent } from './generate/generate.component';
import { TopicRoutingModule } from '../topic/topic-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopicPagesComponent,
    GenerateComponent
  ],
  imports: [
    CommonModule,
    TopicPagesRoutingModule,
    TopicRoutingModule,
    NgxPaginationModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TopicPagesModule { }
