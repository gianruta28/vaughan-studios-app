import { Component, OnInit, Signal, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background/background.component';
import { interval, map, startWith } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CountdownComponent } from './countdown/countdown.component';
import { NewsletterSubscriptionComponent } from './newsletter-subscription/newsletter-subscription.component';
import { HeaderComponent } from '../shared/header/header.component';



const imports = [
  CommonModule,
  BackgroundComponent,
  CountdownComponent,
  NewsletterSubscriptionComponent,
  HeaderComponent
]

@Component({
  selector: 'app-waitlist',
  standalone: true,
  imports: imports,
  templateUrl: './waitlist.component.html',
  styleUrl: './waitlist.component.scss'
})
export class WaitlistComponent{


}
