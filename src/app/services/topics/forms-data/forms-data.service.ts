import { Injectable } from '@angular/core';
import { Section } from '@interfaces/documentation';

@Injectable({
  providedIn: 'root',
})
export class FormsDataService {
  getContent(): Section[] {
    return [
      {
        title: 'Template Forms',
        description: ['Use Angulars FormsModule to create and bind input fields.'].join('\n'),
        codeSnippets: [
          {
            title: '1. Creating an Input Field',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  template: \`
    <p>{{ username }}'s favorite framework is {{ favoriteFramework }}</p>
    <label for = "framework">Favorite framework</label>
    <input id="framework" type="text" [(ngModel)]="favoriteFramework" placeholder="Enter your favorite framework" />
  \`,
  imports: [FormsModule],
})
export class UserComponent {
  username = 'YoungTech';
  favoriteFramework = '';
}
  `,
          },
        ],
      },
      {
        title: '',
        description: ['Bind properties and use two way data binding with [(ngModel)]'].join('\n'),
        codeSnippets: [
          {
            title: '2. Getting Form Control Values',
            language: 'typescript',
            code: `
@Component({
  selector: 'app-user',
  template: \`
    <label for="framework">Favorite Framework:</label>
    <input id="framework" [(ngModel)]="favoriteFramework" />
    <button (click)="showFramework()">Show Framework</button>
  \`,
})
export class UserComponent {
  favoriteFramework = '';
  username = 'YoungTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}

  `,
          },
        ],
      },
      {
        title: 'Reactive Forms',
        description: ['Reactive Forms allow programmatic control over form state and validation.'].join('\n'),
        codeSnippets: [
          {
            title: '1. Managing Forms Programmatically',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  template: \`
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name:
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email:
        <input type="email" formControlName="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  \`,
  imports: [ReactiveFormsModule],
})
export class ProfileComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    console.log(this.profileForm.value);
  }
}

  `,
          },
        ],
      },
      {
        title: 'Form Validation',
        description: ['Ensure data correctness using Angulars Validators.'].join('\n'),
        codeSnippets: [
          {
            title: '1. Validating Forms',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name:
        <input type="text" formControlName="name" />
        @if (profileForm.get('name')?.invalid && profileForm.get('name')?.touched) {
          <span class="error">Name is required.</span>
        }
      </label>
      <label>
        Email:
        <input type="email" formControlName="email" />
        @if (profileForm.get('email')?.invalid && profileForm.get('email')?.touched) {
          <span class="error">Enter a valid email.</span>
        }
      </label>
      <button type="submit" [disabled]="profileForm.invalid">Submit</button>
    </form>
  \`
})
export class ProfileComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  handleSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
`,
          },
        ],
      },
      {
        title: 'Dependency Injection',
        description: ['Learn how to use Angular\'s dependency injection system.'].join('\n'),
        codeSnippets: [
          {
            title: '1. Creating and Using a Service',
            language: 'typescript',
            code: `
// car.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars = ['Toyota', 'Honda', 'Ford'];

  getCars(): string[] {
    return this.cars;
  }
}

// car-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <h2>Available Cars:</h2>
    @if (cars.length > 0) {
      <ul>
        @for (car of cars; track car) {
          <li>{{ car }}</li>
        }
      </ul>
    } @else {
      <p>No cars available</p>
    }
  \`
})
export class CarListComponent {
  cars: string[];

  constructor(private carService: CarService) {
    this.cars = this.carService.getCars();
  }
}`,
          },
        ],
      },
    ]
  }
}
