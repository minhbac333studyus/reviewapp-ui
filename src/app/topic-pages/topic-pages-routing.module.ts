import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicPagesComponent } from './topic-pages.component';

const routes: Routes = [{ path: '', component: TopicPagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicPagesRoutingModule { }
