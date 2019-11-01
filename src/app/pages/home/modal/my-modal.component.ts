import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit, OnDestroy {
  @Input() id;

  constructor(
    private translateService: TranslateService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    console.log(this.id);
  }

  ngOnDestroy(): void {
    alert(this.translateService.instant('title'));
  }
}
