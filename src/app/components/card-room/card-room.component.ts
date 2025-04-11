import { Component } from '@angular/core';
import {MaterialModule} from '../../modules/material/material.module';

@Component({
  selector: 'app-card-room',
  imports: [MaterialModule],
  standalone: true,
  templateUrl: './card-room.component.html',
  styleUrl: './card-room.component.css'
})
export class CardRoomComponent {

}
