import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private msSource: Subscription;

  public Arr = Array; //Array type captured in a variable


  public currentTime = new Date();

  public index: number = 0;

  public counters: number[] =
    [
      0
    ];

  title = 'Countdown';

  ngOnInit() {
    this.msSource = interval(1)
      .subscribe(x => {
        this.currentTime = new Date();
      });
  }

  ngOnDestroy() {
    this.msSource.unsubscribe();
  }

  addCounter() {
    this.index++;
    this.counters.push(this.index);
  }

  removeCounter(counter: number) {
    let index = this.counters.indexOf(counter);
    this.counters.splice(index, 1);
  }
}
