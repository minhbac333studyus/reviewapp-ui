import { Component, OnInit } from '@angular/core';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'reviewapp-ui';
  constructor(private categoryService:CategoryService){

  }
  ngOnInit(): void {
    this.categoryService.getAll(null).subscribe({
      next: (data) => {
        this.categories = data.result
      }
    });
  }
categories: any ;

}
