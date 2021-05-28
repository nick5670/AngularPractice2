import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  @Input()
  room!: Room;
  action!: string;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(

      (params) =>{
        this.action = params['action'];
        
      }
    )
  }

  roomBooked()
  {
    this.router.navigate(['rooms'], {queryParams: {action: 'book',id: this.room.id}})
  }

  roomInfo()
  {
    this.router.navigate(['rooms'], {queryParams : {action: 'info', id: this.room.id}})
  }

}
