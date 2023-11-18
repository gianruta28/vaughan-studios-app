import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

interface NewsletterSuscriptions{
  email: string;
}

const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
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

  constructor(private formBuilder: FormBuilder){
    
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

  }


onSubmit() {
  this.buttonClicked = true;

  setTimeout(() => {
    this.buttonClicked = !this.buttonClicked;
  }, 500)
}




}
