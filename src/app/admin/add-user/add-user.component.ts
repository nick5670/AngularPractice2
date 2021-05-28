import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private service: DataService) { }


  ngOnInit(): void {

    this.addForm= this.formBuilder.group({
      username: '',
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
      this.users.push(newUser);
      console.log(this.users);
    
  }

}
