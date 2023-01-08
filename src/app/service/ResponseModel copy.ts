import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs/internal/observable/throwError";

export class ResponseModel extends Map<String,Object>{
  currentPage  = 0;
  result : any;
  totalItems  = 0;
  totalPages  =0;
}
