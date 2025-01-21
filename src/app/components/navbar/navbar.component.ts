import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NavItem } from '../../interfaces/documentation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
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
                  <a *ngFor="let topic of topics"
                     [routerLink]="['/topics', topic.path]"
                     class="block px-4 py-2 text-sm text-white hover:bg-teal">
                    {{ topic.title }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
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
