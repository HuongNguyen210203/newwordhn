import { Component, Input } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MaterialModule} from '../../modules/material/material.module';

@Component({
  selector: 'app-card-event',
  standalone: true,
  templateUrl: './card-event.component.html',
  imports: [
    MatCardContent,
    MatCard,
    MaterialModule
  ],
  styleUrls: ['./card-event.component.scss']
})
export class CardEventComponent {
  @Input() label: string = '';
}
