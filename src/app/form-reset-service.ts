import { EventEmitter, Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class FormResetService {

  resetEditFormEvent = new EventEmitter<User>();
  
  constructor() { }
}
