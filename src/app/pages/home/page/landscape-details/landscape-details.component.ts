import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandscapeMdoel } from 'app/data/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-landscape-details',
  templateUrl: './landscape-details.component.html',
  styleUrls: ['./landscape-details.component.scss']
})
export class LandscapeDetailsComponent implements OnInit {
  landscape$: Observable<LandscapeMdoel>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.landscape$ = this.route.data.pipe(map(data => data.landscape));
  }
}
