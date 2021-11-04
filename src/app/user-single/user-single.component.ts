import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})

export class UserSingleComponent implements OnInit {
  @Input() utenti: User[] = [];
  @Output() remove = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  changeBorder(param:any) {
    console.log(param);
    switch(param) {
      /* case 0: return 'pink';
      case 1: return 'orange';
      default: return 'red'; */
      case 0: return 'border border-danger';
      case 1: return 'border border-success';
      default: return 'border border-dark';
    }
  }

}
