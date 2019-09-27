import { Component, Input } from '@angular/core';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  user: User;
}
