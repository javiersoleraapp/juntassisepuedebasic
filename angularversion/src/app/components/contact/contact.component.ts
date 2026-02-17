import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormService, ContactForm } from '../../services/form.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [FormService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isLoading = signal(false);
  submitMessage = signal('');
  messageType = signal<'success' | 'error' | ''>('');

  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(private formService: FormService) {}

  onSubmit(): void {
    if (this.validateForm()) {
      this.isLoading.set(true);
      this.submitMessage.set('');
      this.messageType.set('');

      const formData: ContactForm = {
        name: this.form.name,
        email: this.form.email,
        subject: this.form.subject,
        message: this.form.message,
      };

      this.formService.submitContact(formData).subscribe({
        next: () => {
          this.submitMessage.set(
            '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto 🎸'
          );
          this.messageType.set('success');
          this.resetForm();
          this.isLoading.set(false);
          setTimeout(() => this.submitMessage.set(''), 5000);
        },
        error: (err) => {
          console.error('Error enviando formulario:', err);
          this.submitMessage.set(
            'Error al enviar el mensaje. Por favor, intenta nuevamente.'
          );
          this.messageType.set('error');
          this.isLoading.set(false);
          setTimeout(() => this.submitMessage.set(''), 5000);
        },
      });
    }
  }

  validateForm(): boolean {
    if (!this.form.name.trim()) {
      this.submitMessage.set('Por favor ingresa tu nombre');
      this.messageType.set('error');
      return false;
    }

    if (!this.form.email.trim() || !this.isValidEmail(this.form.email)) {
      this.submitMessage.set('Por favor ingresa un email válido');
      this.messageType.set('error');
      return false;
    }

    if (!this.form.subject.trim()) {
      this.submitMessage.set('Por favor ingresa un asunto');
      this.messageType.set('error');
      return false;
    }

    if (!this.form.message.trim()) {
      this.submitMessage.set('Por favor ingresa un mensaje');
      this.messageType.set('error');
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm(): void {
    this.form = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
