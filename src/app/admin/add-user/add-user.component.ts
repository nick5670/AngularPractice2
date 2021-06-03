import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  addForm!: FormGroup

  users!: Array<User>

  username = new FormControl('',[Validators.required, Validators.minLength(3)])

  @Output()
  addedUserEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private service: DataService,
              private router: Router) { }


  ngOnInit(): void {

    this.addForm= this.formBuilder.group({
      username: this.username,
      email: '',
      role: ''
    })

    this.service.getUsers().subscribe(
       next =>{
        this.users=next;
      }
    )

  }

  onSubmit()
  {
      let newUser= new User();
      newUser.email =this.addForm.value.email;
      newUser.name = this.addForm.value.username;
      newUser.role=this.addForm.value.role;
      newUser.id= this.users.length+1;
      this.service.addUser(newUser).subscribe(
        (user) =>
        {
          this.addedUserEvent.emit();
          this.router.navigate(['admin']);
        }
      );
    
  }

  onCancel()
  {
    this.router.navigate(['admin']);
  }

}
