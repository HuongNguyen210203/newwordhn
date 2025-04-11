import { Component } from '@angular/core';
import {MaterialModule} from '../../modules/material/material.module';
import {CardEventComponent} from '../../components/card-event/card-event.component';
import {CardRoomComponent} from '../../components/card-room/card-room.component';
import {TopbarComponent} from '../../components/topbar/topbar.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [
    MaterialModule,
    CardRoomComponent,
    TopbarComponent,
    SidebarComponent,
    CardEventComponent,
    NgForOf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  rooms = new Array(6).fill({});
  events = [
    { label: '1st' },
    { label: '2nd' },
    { label: '3rd' },
    { label: '4th' }
  ];
}
