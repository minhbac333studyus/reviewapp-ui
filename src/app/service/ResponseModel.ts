import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs/internal/observable/throwError";

export class ResponseModel<T>{
  currentPage  = 0;
  result: T[] = [];
  totalItems  = 0;
  totalPages  =0;
}
