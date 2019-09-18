import { Component, Input } from '@angular/core';
import { LandscapeMdoel } from 'app/data/model';

@Component({
  selector: 'app-landscape-item',
  templateUrl: './landscape-item.component.html',
  styleUrls: ['./landscape-item.component.scss']
})
export class LandscapeItemComponent {
  @Input() landscape: LandscapeMdoel;
  flipped = false;
}
