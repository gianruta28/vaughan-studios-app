import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FirestoreServiceService } from '../../../../shared/services/firestore/firestore-service.service';

export interface NewsletterSuscriptions{
  email: string;
}

const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
]

@Component({
  selector: 'app-newsletter-subscription',
  standalone: true,
  imports: [imports],
  templateUrl: './newsletter-subscription.component.html',
  styleUrl: './newsletter-subscription.component.scss'
})
export class NewsletterSubscriptionComponent implements OnInit {

  public form: FormGroup;
  public buttonClicked: boolean;
  public test: Observable<any>;
  

  constructor(
    private formBuilder: FormBuilder, 
    private fs: FirestoreServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(form: any) {
    this.fs.create(form.email.toLowerCase());
  }
}
