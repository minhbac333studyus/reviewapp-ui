
import { BaseEntity } from "./baseEntity";
import { BaseService } from "../service/base.service"
import { ResponseModel } from "../service/ResponseModel"

export class Pagable<T>{

  constructor(public baseService: BaseService<T> ){
  }
  response: ResponseModel<T> = new ResponseModel<T> ;
  page :number = 1
  pageSize = 10
  pageSizes = [ 10,20,50]
  currentFormId:Number =  0
  responseCRUD :any;
  getRequestParams( page: number, pageSize: number): any {
    let params: any = {}
    if (page) {
      params[`page`] = page - 1
    }
    if (pageSize) {
      params[`size`] = pageSize
    }
    return params
  }
  getList(){
    const params = this.getRequestParams(  this.page, this.pageSize)
    this.baseService.getAll(params).subscribe({
      next:(responseResult) => {
        this.response = responseResult
      },
      error: (error) => {
        // treat error
        console.log("Error in get items: "+ error)
      },
      complete: () => {
        // define on request complete logic
        // 'complete' is not the same as 'finalize'!!
        // this logic will not be executed if error is fired
      }
    })
  }
  create(form:any){
    const params = this.getRequestParams(  this.page, this.pageSize)
    this.baseService.create(form).subscribe({
      next: () =>{
        this.baseService.getAll(params).subscribe({
          next:(responseResult) => {
            this.response = responseResult
          },
          error: (error) => {
            // treat error
            console.log("Error in get items: "+ error)
          },
          complete: () => {
            // define on request complete logic
            // 'complete' is not the same as 'finalize'!!
            // this logic will not be executed if error is fired
          }
        })
      }
    })
  }
  submitEditForm(form: any){
    this.baseService.updateById(form,this.currentFormId).subscribe(
      {
        next: (responseResult)=>{
          this.responseCRUD =  responseResult;
        },
      }
    );
  }
  deleteById(id:Number){
    console.log("delete")
    this.baseService .deleteById(id).subscribe(
      {
        next:(response) =>{
          this.getList();
        }
      }
    )
  }
  handlePageChange(event: number): void {
    const params = this.getRequestParams(this.page, this.pageSize)
    this.page = event
    this.getList()
  }
  handlePageSizeChange(event: any ): void {
    const params = this.getRequestParams(this.page, this.pageSize)
    this.pageSize = event.target.value
    this.page = 1
    this.getList()
  }
}
