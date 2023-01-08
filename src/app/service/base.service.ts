import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ResponseModel } from './ResponseModel';
@Injectable({
  providedIn: 'root'
})
export abstract class  BaseService<T>  {
  abstract getRoute():string ;
  constructor(private http:HttpClient){}
  private readonly APIurl  = environment.apiBaseUrl + this.getRoute();
  getAll( params:any) :Observable<ResponseModel<T>>{
    return this.http.get<ResponseModel<T>>(this.APIurl ,{params});
  }
  updateById(form: any,id: Number):Observable<ResponseModel<T>>{
    return this.http.put<ResponseModel<T>>(this.APIurl+'/'+id ,form.value);
  }
  deleteById(id:Number):Observable<ResponseModel<T>>{
    return this.http.delete<ResponseModel<T>>(this.APIurl+'/'+id );
  }
  create(form:any):Observable<T>{
    return this.http.post<T>(this.APIurl, form.value );
  }
}
