export class Room{

    id!: number;
    numPeople!: number;
    name!: string;
    capacity!: number
    picture!: string;
    isOpen!: Boolean;
    bookedRoomDetails!: Array<string>;


    static fromHttp(room: Room)
    {
        const newRoom= new Room();
        newRoom.id = room.id;
        newRoom.name = room.name;
        newRoom.isOpen = room.isOpen;
        newRoom.numPeople = 0;
        newRoom.capacity= room.capacity;
        newRoom.bookedRoomDetails = new Array<string>();
        return newRoom;
    } 
}
