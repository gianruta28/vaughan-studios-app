import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, map, startWith } from 'rxjs';
import { environment } from '../../../../environments/environment';

interface CountdownInterface{
  days?: number,
  hours?: number,
  minutes?: number,
  seconds?: number,
}

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent {

  public countdownInterval$ = interval(1000);
  public countdown: CountdownInterface | undefined;


  constructor(){
   
    this.countdownInterval$.pipe(
      map(() => this.getCountdown()),
      startWith(this.getCountdown())
    ).subscribe(value => {
      this.countdown = value;
    });
  }

  private getCountdown(): CountdownInterface {
    console.log(environment.countdownDate);
    
    const dateString = environment.countdownDate;
    const [day, month, year] = dateString.split('/');
    const finalDate = new Date(`${year}-${month}-${day} 23:59:59`).getTime();
    // const finalDate = new Date('December 31, ' + new Date().getFullYear() + ' 23:59:59').getTime();
    const now = new Date().getTime();
    const diff = finalDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return {
      days,
      minutes,
      hours,
      seconds
    };
  }

}
