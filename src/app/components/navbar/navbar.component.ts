import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '../../interfaces/navigation/nav-item';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <nav class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Brand -->
          <a routerLink="/" class="text-xl font-bold">Learning Angular</a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-4">
            <!-- Topics Dropdown -->
            <div class="relative group">
              <button class="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
                Topics
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div class="absolute right-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div class="bg-gray-800 rounded-md shadow-xl ring-1 ring-black ring-opacity-5">
                  <div class="py-1">
                    @for (topic of topics; track topic.path) {
                      <a [routerLink]="['/topics', topic.path]" class="block px-4 py-2 text-sm text-white hover:bg-teal">
                        {{ topic.title }}
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
            <a routerLink="/weather" class="px-4 py-2 hover:bg-gray-700 rounded">Weather</a>
            <a routerLink="/contact-me" class="px-4 py-2 hover:bg-gray-700 rounded">Contact Me</a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden" (click)="isMobileMenuOpen = !isMobileMenuOpen">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        @if (isMobileMenuOpen) {
          <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <button (click)="isMobileTopicsOpen = !isMobileTopicsOpen"
                      class="w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md">
                Topics
              </button>
              @if (isMobileTopicsOpen) {
                <div class="pl-4">
                  @for (topic of topics; track topic.path) {
                    <a [routerLink]="['/topics', topic.path]"
                       class="block px-3 py-2 text-sm hover:bg-gray-700"
                       (click)="isMobileMenuOpen = false">
                      {{ topic.title }}
                    </a>
                  }
                </div>
              }
              <a routerLink="/weather" class="block px-3 py-2 hover:bg-gray-700 rounded-md">Weather</a>
              <a routerLink="/contact-me" class="block px-3 py-2 hover:bg-gray-700 rounded-md">Contact Me</a>
            </div>
          </div>
        }
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  isMobileTopicsOpen = false;
  topics: NavItem[] = [
    { title: 'Create a New Project', path: 'create-new-project' },
    { title: 'Template Basics', path: 'template-basics' },
    { title: 'Control Flow', path: 'control-flow' },
    { title: 'Component Communication', path: 'component-communication' },
    { title: 'Routing & Navigation', path: 'routing' },
    { title: 'Forms & Data', path: 'forms-data' },
    { title: 'Data Formatting', path: 'data-formatting' },
  ];
}
