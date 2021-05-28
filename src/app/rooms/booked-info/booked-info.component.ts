import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-booked-info',
  templateUrl: './booked-info.component.html',
  styleUrls: ['./booked-info.component.css']
})
export class BookedInfoComponent implements OnInit {

  @Input()
  bookedInfo!: Room;

  constructor() { }

  ngOnInit(): void {
  }

}
