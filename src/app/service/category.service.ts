import { Injectable } from '@angular/core';
import { Category } from '../Entity/category';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category>{
  getRoute(): string {
    return"/categories";
  }
}
