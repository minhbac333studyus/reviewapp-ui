import { BaseEntity } from "./baseEntity"

export class Topic extends BaseEntity<Topic> {
  id: Number = 0
  createdDate:Date = new Date()
  lastUpdate:Date = new Date()
  name:string = ''
  constructor(){
    super()
  }
}
