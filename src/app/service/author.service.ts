import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ResponseModel } from './ResponseModel';
import { BaseService } from './base.service';
import { Author } from '../Entity/author';
@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseService<Author> {
  getRoute(): string {
    return "/authors";
  }
}
