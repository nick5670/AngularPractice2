import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from './model/room';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users = new Array<User>();
  private rooms = new Array<Room>();


  getRooms(): Observable<Array<Room>>
  {
    return of(this.rooms);
  }

  getUsers(): Observable<Array<User>>
  {
    return of(this.users);
  }


  constructor() { 
    
    //user dummy data
    let user = new User();
    user.id=1;
    user.name = 'Nick';
    user.email = 'nick.gerstbrein@uline.com';
    user.role = 'admin';

    let user1 = new User();
    user1.id=2;
    user1.name = 'Ron';
    user1.email = 'ron@yahoo.com';
    user1.role = 'user';

    let user2 = new User();
    user2.id=3;
    user2.name = 'Praveen';
    user2.email = 'praveen@yahoo.com';
    user2.role = 'user';

    let user3 = new User();
    user3.id=4;
    user3.name = 'Qwei';
    user3.email = 'Qwei@yahoo.com';
    user3.role = 'user';

    let user4 = new User();
    user4.id=5;
    user4.name = 'Pengxiang';
    user4.email = 'pengxiang@yahoo.com';
    user4.role = 'user';
    
    this.users.push(user);
    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);
    this.users.push(user4);


    //room dummy data
    let room = new Room();
    room.id=1;
    room.name= 'Ball room';
    room.capacity=20;
    room.isOpen= true;

    let room1 = new Room();
    room1.id=2;
    room1.name= 'Conference room';
    room1.capacity=30;
    room1.isOpen= true;

    let room2 = new Room();
    room2.id=3;
    room2.name= 'Arena';
    room2.capacity=250;
    room2.isOpen= true;

    let room3 = new Room();
    room3.id=4;
    room3.name= 'Lounge';
    room3.capacity=5;
    room3.isOpen= true;

    this.rooms.push(room);
    this.rooms.push(room1);
    this.rooms.push(room2);
    this.rooms.push(room3);


  }
}
