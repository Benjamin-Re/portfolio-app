import { Component, input } from '@angular/core';
import { IconContainer } from '../icon-container/icon-container';

@Component({
  imports: [IconContainer],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
  
})
export class Card {
  title = input<string>();
}
