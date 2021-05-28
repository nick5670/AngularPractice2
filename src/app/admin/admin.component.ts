import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormResetService } from '../form-reset-service';
import { Room } from '../model/room';
import { User } from '../model/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  contactForm!: FormGroup;
  users!: Array<User>;
  selectedUser!: User;
  selectedRole!: string;
  searchText: string ='';
  action!: string;

  constructor(private service: DataService,private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private formReset: FormResetService) { }



  ngOnInit(): void {

    this.service.getUsers().subscribe(
      next =>{
        this.users= next;
      }
    );

    this.route.queryParams.subscribe(

      (params) =>{
        const id = params['id'];
        this.action = params['action'];
        if(id)
        {
          this.selectedUser = this.users.find(user =>user.id === +id)!
          this.formReset.resetEditFormEvent.emit(this.selectedUser);
        }
        if(params['action'] === 'add')
        {
          this.selectedUser= new User();
        }
      }
    )

  }

  addUser()
  {
    this.router.navigate(['admin'], {queryParams: {action: 'add'}});
  }

  editUser(id: number)
  {
    this.router.navigate(['admin'], {queryParams: {id: id ,action: 'edit'}});
  }


}
