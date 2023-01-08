import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Author } from '../Entity/author';
import { AuthorService } from '../service/author.service';
import { BaseService } from '../service/base.service';
import { Pagable } from '../Entity/pagination';
import { ResponseModel } from '../service/ResponseModel';
import {  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent extends Pagable<Author> implements OnInit {
  modalRef?:             BsModalRef;
  // Declare a form group
  public editForm: FormGroup;
  @Input() authorDataForm: Author = new Author();
  // Declare a modal reference variable


  // Use the @ViewChild decorator to inject the
  // modalEditTemplate element into the component
  // and specify the type of the element using the read option

  constructor(private router: Router, private authorService:AuthorService, private modalService: BsModalService,private formBuilder: FormBuilder) {
    super(authorService);
    this.editForm = this.formBuilder.group({
      id: 0,
      fullName: '',
      email: '',
      introduction: ''
    });
  }

  ngOnInit(): void {
    this.getList();
  }
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}


