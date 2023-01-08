import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../Entity/category';
import { Pagable } from '../Entity/pagination';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends Pagable<Category> implements OnInit {

  public editForm: FormGroup;
  @Input() categoryDataForm: Category = new Category();
  constructor(private categoryService:CategoryService, private formBuilder:FormBuilder) {
    super(categoryService);
    this.editForm = this.formBuilder.group({
      id: 0,
      name: '',
    });
  }

  ngOnInit(): void {
    this.getList();
  }

}
