import { Pipe, PipeTransform } from '@angular/core';


function pad(num, size) {
  let s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const days = Math.floor(value / (1000 * 60 * 60 * 24));
    const hours = Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((value % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((value % (1000)) / 100);
    return pad(hours,2)+":"+pad(minutes,2)+":"+pad(seconds,2)+":"+pad(milliseconds,1);

  }
}
