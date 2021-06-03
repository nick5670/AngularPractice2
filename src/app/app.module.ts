import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailComponent } from './rooms/room-detail/room-detail.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ModalComponent } from './modal/modal.component';
import { BookedInfoComponent } from './rooms/booked-info/booked-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-modialog-7';
import { BootstrapModalModule } from 'ngx-modialog-7/plugins/bootstrap';
import { RoomBookModalComponent } from './rooms/room-book-modal/room-book-modal.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =[
  {path: 'admin', component: AdminComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'home' , component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    RoomsComponent,
    RoomDetailComponent,
    SearchFilterPipe,
    HomeComponent,
    AddUserComponent,
    EditUserComponent,
    ModalComponent,
    BookedInfoComponent,
    RoomBookModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    HttpClientModule
  ],
  exports:[
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
