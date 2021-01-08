import { Component, OnInit, OnDestroy, PipeTransform, Pipe } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit, OnDestroy {

  private msSource: Subscription;
  public countDown;
  public targetTime = new Date();
  public alarm: number = 0;
  public colors = ["red", "orange", "green"];

  timeChanged(newObj) {
    this.targetTime = new Date(newObj);
  }

  ngOnInit() {
    this.msSource = interval(1)
      .subscribe(x => {
        this.countDown = this.targetTime.valueOf() - new Date().valueOf();
        if (this.countDown < 0) {
          this.alarm = 2;
          this.countDown = 0;
        }
        else if (this.countDown < 1000) {
          this.alarm = 1;
        }
        else
        {
          this.alarm = 0;
        }
      });
  }

  ngOnDestroy() {
    this.msSource.unsubscribe();
  }

}
