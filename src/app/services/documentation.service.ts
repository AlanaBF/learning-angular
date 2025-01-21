import { Injectable } from '@angular/core';
import { Section } from '../interfaces/documentation/section';

@Injectable({
  providedIn: 'root',
})

export class DocumentationService {
  getContent(): Section[] {
    return [
      {
        title: 'Learning Angular',
        description: 'Simple get started guide to create and run an Angular project with a basic routing setup and sample code structure.',
      },
      {
        title: 'Create a new project',
        codeSnippets: [
          {
            language: 'bash',
            code: 'ng new <name-of-app>\ncd <name-of-app>\nng serve',
          },
        ],
      },
      {
        title: 'Create Routing for project',
        subsections: [
          {
            title: 'Generate components for your pages',
            codeSnippets: [
              {
                language: 'bash',
                code: 'ng generate component home\nng generate component <component name>',
              },
            ],
          },
          {
            title: 'Define routes in a routes file (e.g., app.routes.ts)',
            codeSnippets: [
              {
                language: 'typescript',
                code: `import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNameComponent } from './name/name.component';

export const routes: Routes = [
{
  path: '',
  title: 'Home',
  component: HomeComponent
},
{
  path: '<name>',
  title: '<Page Title>',
  component: <PageNameComponent>
}
];`,
              },
            ],
          },
          {
            title: 'Set up routing in main.ts',
            codeSnippets: [
              {
                language: 'typescript',
                code: `import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));`,
              },
            ],
          },
        ],
      },
      {
        title: 'Add Navigation Links to app.component.ts',
        description: 'Use the routerLink directive for navigation:',
        codeSnippets: [
          {
            language: 'typescript',
            code: `import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Declare it as a standalone component
  imports: [RouterOutlet, RouterLink], // Include RouterOutlet and RouterLink
  template: \`
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/name">Page Title</a>
    </nav>
    <router-outlet></router-outlet>
  \`,
})
export class AppComponent {
  title = 'learn-angular';
}`,
          },
        ],
      },
      {
        title: 'Start the Development Server',
        codeSnippets: [
          {
            language: 'bash',
            code: 'ng serve',
          },
        ],
        description: 'Navigate to http://localhost:4200/ to test your app.',
      },
      {
        title: 'Example: HomeComponent Folder Structure',
        codeSnippets: [
          {
            language: 'plaintext',
            code: `src/app/home/
│
├── home.component.ts      // Component logic
├── home.component.html    // Template (HTML)
├── home.component.css     // Styles (CSS)
└── home.component.spec.ts // Unit tests`,
          },
        ],
        subsections: [
          {
            title: '1. Logic: home.component.ts',
            description:
              'The TypeScript file manages the data and behavior for the component.',
            codeSnippets: [
              {
                language: 'typescript',
                code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Home';
}`,
              },
            ],
          },
          {
            title: '2. Template: home.component.html',
            description: 'The HTML file contains the structure and layout.',
            codeSnippets: [
              {
                language: 'html',
                code: `<div class="home">
  <h1>{{ title }}</h1>
  <p>Welcome to the Home page!</p>
</div>`,
              },
            ],
          },
          {
            title: '3. Styles: home.component.css',
            description:
              'The CSS file contains styles specific to the component.',
            codeSnippets: [
              {
                language: 'css',
                code: `.home {
  text-align: center;
  margin-top: 20px;
}

h1 {
  font-size: 2rem;
  color: #333;
}`,
              },
            ],
          },
          {
            title: '4. Unit Tests: home.component.spec.ts',
            description:
              "The test file validates that your component works as expected. Here's a simple example:",
            codeSnippets: [
              {
                language: 'typescript',
                code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`,
              },
            ],
          },
        ],
      },
    ];
  }
}
