import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AuthorComponent,
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    NgxPaginationModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthorModule { }
