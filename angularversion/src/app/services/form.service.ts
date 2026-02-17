import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  // Reemplaza con tu Form ID de Formspree
  private readonly FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

  constructor(private http: HttpClient) {}

  submitContact(data: ContactForm): Observable<any> {
    return this.http.post(this.FORMSPREE_URL, {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      _replyto: data.email,
    });
  }
}
