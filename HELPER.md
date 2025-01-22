# Helper

## Reusable code snippet

````typescript

{
        title: '',
        description: [''].join('\n'),
        codeSnippets: [
          {
            language: 'typescript',
            code: `
  `,
          },
        ],
      },
      ```
````

1. Forms Page (Contact Me)
   Purpose: Demonstrate forms (template-driven or reactive), form validation, and property binding.

Steps:
Create a Contact Component:

bash
Copy
Edit
ng generate component contact
Contact Form:

Use Angular forms to build the form.
Add fields for:
Name
Email
Message
Include validation:
Required fields.
Email validation (e.g., must match an email pattern).
Minimum and maximum character lengths for the message.
Send Form Data:

Use a service to process and send the form data.
If email functionality is required, you can simulate it with a console log or integrate a service like EmailJS.
Code Example:

Template (contact.component.html):

```html
<form (ngSubmit)="onSubmit()" [formGroup]="contactForm">
  <label for="name">Name</label>
  <input id="name" formControlName="name" required />

  <label for="email">Email</label>
  <input id="email" formControlName="email" required type="email" />

  <label for="message">Message</label>
  <textarea id="message" formControlName="message" required></textarea>

  <button type="submit" [disabled]="contactForm.invalid">Send</button>
</form>
```

````kotlin

- **Logic (contact.component.ts)**:
  ```typescript
  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
  })
  export class ContactComponent {
    contactForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(10)]],
      });
    }

    onSubmit() {
      if (this.contactForm.valid) {
        console.log('Form Submitted:', this.contactForm.value);
        // Add email sending logic here if needed
      }
    }
  }
````

Link to the Contact Page: Add a link in your navigation bar:

```html
<a routerLink="/contact">Contact Me</a>
```

## Weather API

```json
{
    "coord": {
        "lon": -4.9292,
        "lat": 50.3167
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 7.16,
        "feels_like": 5.83,
        "temp_min": 7.16,
        "temp_max": 7.23,
        "pressure": 1004,
        "humidity": 87,
        "sea_level": 1004,
        "grnd_level": 996
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.06,
        "deg": 350
    },
    "clouds": {
        "all": 40
    },
    "dt": 1737558988,
    "sys": {
        "type": 1,
        "id": 1403,
        "country": "GB",
        "sunrise": 1737533214,
        "sunset": 1737564923
    },
    "timezone": 0,
    "id": 2638853,
    "name": "Grampound Road",
    "cod": 200
}
```
