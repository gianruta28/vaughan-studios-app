import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { NewsletterSuscriptions } from '../../../app/modules/waitlist/newsletter-subscription/newsletter-subscription.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {

  
  private itemDoc: AngularFirestoreDocument<NewsletterSuscriptions>;
  
  public test: Observable<any>;
  
  constructor(private afs: AngularFirestore) {
   }

   

  public async create(email: string){
    this.itemDoc = this.afs.doc<NewsletterSuscriptions>(`subscribers/${this.afs.createId()}`);
    return this.itemDoc.set({
      email
    })
  }
}
