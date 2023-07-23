import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor(private _designUtility: DesignUtilityService) {}

  @ViewChild('addBtn') addBtn: ElementRef | undefined;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe((res) => {
      let countVal = 'Video ' + count++;
      console.log(countVal);
      this._designUtility.print(countVal, 'elContainer');
      this._designUtility.print(countVal, 'elContainer2');
    });
  }
}
