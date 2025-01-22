import { Injectable } from '@angular/core';
import { Section } from '@interfaces/documentation';

@Injectable({
  providedIn: 'root',
})
export class TemplateBasicsService {
  getContent(): Section[] {
    return [
      {
        title: 'Interpolation',
        description: [
          'Components are the building blocks of Angular applications.',
          'They consist of:',
          '',
          '• TypeScript class - defines the logic',
          '• HTML template - defines the structure',
          '• CSS styles - defines the appearance',
          '',
          'Interpolation allows you to embed dynamic values in templates:',
          '',
          '• {{ expression }} - Evaluates and displays the result',
          '• Can contain simple expressions',
          '• Updates automatically when data changes',
          '',
          'Example: This will display "Hello, San Francisco"',
        ].join('\n'),
        codeSnippets: [
          {
            title: 'Basic Component Example',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <h1>Hello, {{ city }}</h1>
  \`
})
export class AppComponent {
  city = 'San Francisco';
}`,
          },
        ],
      },
      {
        title: 'Component References',
        description: [
          'Components can reference other components within a template.',
          'Steps to reference components:',
          '',
          '• Define the component with a selector',
          '• Import in the parent module',
          '• Use the selector tag in templates',
        ].join('\n'),
        codeSnippets: [
          {
            title: 'Define Component',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: \`
    <div>Username: {{ username }}</div>
  \`
})
export class UserComponent {
  username = 'YourName';
}`,
          },
          {
            title: 'Use Component',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-root',
  template: \`
    <app-user></app-user>
  \`,
  imports: [UserComponent]
})
export class AppComponent {}`,
          },
        ],
      },
      {
        title: 'Property Binding',
        description: [
          'Property binding lets you control element properties dynamically.',
          '',
          'Key concepts:',
          '',
          '• Syntax: [property]="value"',
          '• Binds component class properties to template',
          '• Updates automatically when data changes',
          '',
          "Example: The div's isEditable attribute is bound to the component's isEditable property",
        ].join('\n'),
        codeSnippets: [
          {
            title: 'Property Binding Example',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: \`
    <div [contentEditable]="isEditable">
      Property binding example
    </div>
  \`
})
export class AppComponent {
  isEditable = true;
}`,
          },
        ],
      },
      {
        title: 'Event Handling',
        description: [
          'Event handling in Angular allows you to bind events (e.g., clicks, mouse movements) to methods in the components class.',
          '',
          'Key concepts:',
          '',
          '• Syntax:',
          '',
          '(eventName)="methodName()" is used to bind an event (like click or mouseover) to a method in the component class.',
          '• Binds component methods to template events',
          '• Updates automatically when data changes',
          '',
          "Example: The button's click event is bound to the component's handleClick method",
          '',
          'Available Events:',
          '',
          '• Mouse Events: click, dblclick, mouseover, mouseout, mousedown, mouseup.',
          '• Keyboard Events: keydown, keyup, keypress.',
          '• Form Events: submit, focus, blur.',
          '• Many other DOM events are supported.',
          '',
        ].join('\n'),
        codeSnippets: [
          {
            title: 'Event Handling Example',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <button (click)="sayHello()">Greet</button>
    <div (mouseover)="onMouseOver()">Hover over me</div>
  \`
})
export class AppComponent {
  // Method to handle button clicks
  sayHello() {
    console.log('Hello there!');
  }

  // Method to handle mouseover events
  onMouseOver() {
    console.log('Mouse is hovering over!');
  }
}

          `,
          },
        ],
      },
    ];
  }
}
