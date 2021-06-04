import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Room } from '../model/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms!: Array<Room>;
  selectedRoom!: Room;
  action!: string;

  constructor(private service: DataService, private router: Router,
              private route: ActivatedRoute) { }


  loadData()
  {
    this.service.getRooms().subscribe(
      next =>{
        this.rooms= next;
        this.route.queryParams.subscribe(

          (params) =>{
            const id = params['id'];
            this.action = params['action'];
            if(id)
            {
              this.selectedRoom = this.rooms.find(room =>room.id === +id)!
              //console.log(this.selectedRoom);
            }
          }
        )
      }
    );
  }

  ngOnInit(): void {
    this.loadData();
  }

  getSelectedRoom(id: number)
  {
    this.router.navigate(['rooms'], {queryParams: {action: 'view',id: id}});
  }

}
