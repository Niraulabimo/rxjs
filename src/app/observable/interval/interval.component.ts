import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscription: Subscription | undefined;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    // const broadcastVideos = interval(2000);
    // timer(delay, interval)
    const broadcastVideos = timer(5000, 2000);
    this.videoSubscription = broadcastVideos.subscribe((res) => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this._designUtility.print(this.obsMsg, 'elContainer');
      this._designUtility.print(this.obsMsg, 'elContainer2');
      this._designUtility.print(this.obsMsg, 'elContainer3');

      if (res > 5) {
        this.videoSubscription?.unsubscribe();
      }
    });
  }
}
