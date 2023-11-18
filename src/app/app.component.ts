import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { FirestoreModule } from '@angular/fire/firestore';
import { BackgroundComponent } from './modules/waitlist/background/background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirestoreModule, BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version = environment.version;
  title = 'vaughan-waitlist';
  constructor(){

  }
}
