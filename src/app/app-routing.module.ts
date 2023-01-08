import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path:'', component:HomeComponent
},
{
  path:'topics',loadChildren:() => import('./topic/topic.module').then(m=> m.TopicModule)
},
{ path: 'categories', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
{ path: 'authors', loadChildren: () => import('./author/author.module').then(m => m.AuthorModule) },
{ path: 'topicPages', loadChildren: () => import('./topic-pages/topic-pages.module').then(m => m.TopicPagesModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]

})
export class AppRoutingModule { }
