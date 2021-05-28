import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {

  @Input()
  bookedRoom!: Room;

  details = new Array<string>();

  roomForm!: FormGroup;

  constructor(private router: Router, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.roomForm = this.builder.group({
      bookerName : "Please enter your name",
      numOccupants : 0,
      startTime : '',
      endTime : ''
    })
  }

  onSubmit()
  {
    this.details.push(this.roomForm.value['bookerName']);
    this.details.push(this.roomForm.value['numOccupants']);
    this.details.push(this.roomForm.value['startTime']);
    this.details.push(this.roomForm.value['endTime']);

    this.bookedRoom.bookedRoomDetails= this.details;
    this.bookedRoom.isOpen= false;

    this.router.navigate(['rooms']);
  }

}
