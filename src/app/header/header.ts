import { Component } from '@angular/core';
import { IconContainer } from '../icon-container/icon-container';

@Component({
  imports: [IconContainer],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
