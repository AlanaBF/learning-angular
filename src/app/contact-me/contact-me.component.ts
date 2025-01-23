import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
})
export class ContactMeComponent {
  loading = false;
  success = false;
  error = '';

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  async handleSubmit() {
    if (this.profileForm.valid) {
      this.loading = true;
      try {
        await emailjs.send(
          import.meta.env.NG_APP_EMAILJS_SERVICE_ID,
          import.meta.env.NG_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: `${this.profileForm.value.firstName} ${this.profileForm.value.lastName}`,
            reply_to: this.profileForm.value.email,
            message: this.profileForm.value.message,
          },
          import.meta.env.NG_APP_EMAILJS_PUBLIC_KEY
        );
        this.success = true;
        this.profileForm.reset();
      } catch (error) {
        this.error = 'Failed to send email. Please try again.';
        console.error('Email error:', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
