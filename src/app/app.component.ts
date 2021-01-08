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
export class AppComponent implements OnInit, OnDestroy{

  private msSource: Subscription;

  public counters = 1;
  public Arr = Array; //Array type captured in a variable


  public currentTime = new Date();

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
    this.counters++;

  }

  removeCounter() {
    this.counters--;
    if (this.counters < 1) {
      this.counters = 1;
    }
  }
}
