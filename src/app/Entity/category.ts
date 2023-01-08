import { BaseEntity } from "./baseEntity"

export class Category extends BaseEntity<Category> {
  id: Number = 0
  createdDate:Date = new Date()
  lastUpdate:Date = new Date()
  name:string = ''
  constructor(){
    super()
  }
}
