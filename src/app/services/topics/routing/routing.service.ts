import { Injectable } from '@angular/core';
import { Section } from '@interfaces/documentation';
@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  getContent(): Section[] {
    return [
      {
        title: 'Routing in Angular: Navigate Between Views',
        description: [
          'Routing in Angular allows you to navigate between different views or pages in a single-page application (SPA).',
        ].join('\n'),
        codeSnippets: [
          {
            title:
              'Defining Routes in app.routes.ts: Learn how to define routes in Angular using the Routes array to structure navigation in your app.',
            language: 'typescript',
            code: `
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateNewProjectComponent } from './topics/create-new-project/create-new-project.component';
import { TemplateBasicsComponent } from './topics/template-basics/template-basics.component';
import { ControlFlowComponent } from './topics/control-flow/control-flow.component';
import { ComponentCommunicationComponent } from './topics/component-communication/component-communication.component';
import { RoutingComponent } from './topics/routing/routing.component';
import { FormsDataComponent } from './topics/forms-data/forms-data.component';
import { DataFormattingComponent } from './topics/data-formatting/data-formatting.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Learning Angular',
    component: HomeComponent
  },
  {
    path: 'topics',
    children: [
      {
        path: 'create-new-project',
        title: 'Create a New Project',
        component: CreateNewProjectComponent
      },
      {
        path: 'template-basics',
        title: 'Template Basics',
        component: TemplateBasicsComponent
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        component: ControlFlowComponent
      },
      {
        path: 'component-communication',
        title: 'Component Communication',
        component: ComponentCommunicationComponent
      },
      {
        path: 'routing',
        title: 'Routing & Navigation',
        component: RoutingComponent
      },
      {
        path: 'forms-data',
        title: 'Forms & Data',
        component: FormsDataComponent
      },
      {
        path: 'data-formatting',
        title: 'Data Formatting',
        component: DataFormattingComponent
      }
    ]
  }
];

`,
          },
          {
            title:
              'Configuring Routing in main.ts with provideRouter: Set up and bootstrap routing configuration for the Angular application.',
            language: 'typescript',
            code: `
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
            `,
          },
          {
            title:
              'Building the AppComponent with a Router Outlet: Integrate routing into your root component by including a RouterOutlet and navigation components.',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: \`
    <app-navbar />
    <router-outlet />
  \`
})
export class AppComponent {
  title = 'learning-angular';
}
            `,
          },
          {
            title:
              'Building a Dynamic Navigation Bar Component: Create a navigation bar with dropdown menus and links dynamically generated from a list of topics.',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '../../interfaces/navigation/nav-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: \`
    <nav class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="text-xl font-bold">Learning Angular</a>

          <!-- Dropdown Container -->
          <div class="relative group">
            <!-- Trigger Button -->
            <button class="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
              Topics
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu with Extended Hover Area -->
            <div class="absolute right-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <!-- Menu Background -->
              <div class="bg-gray-800 rounded-md shadow-xl ring-1 ring-black ring-opacity-5">
                <!-- Menu Items -->
                <div class="py-1">
                  @for (topic of topics; track topic.path) {
                    <a [routerLink]="['/topics', topic.path]"
                      class="block px-4 py-2 text-sm text-white hover:bg-teal">
                      {{ topic.title }}
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  \`
})
export class NavbarComponent {
  topics: NavItem[] = [
    { title: 'Create a New Project', path: 'create-new-project' },
    { title: 'Template Basics', path: 'template-basics' },
    { title: 'Control Flow', path: 'control-flow' },
    { title: 'Component Communication', path: 'component-communication' },
    { title: 'Routing & Navigation', path: 'routing' },
    { title: 'Forms & Data', path: 'forms-data' },
    { title: 'Data Formatting', path: 'data-formatting' }
  ];
}

`,
          },
        ],
      },
    ];
  }
}
