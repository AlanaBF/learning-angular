import { Injectable } from '@angular/core';
import { Section } from '@interfaces/documentation';

@Injectable({
  providedIn: 'root',
})
export class ControlFlowService {
  getContent(): Section[] {
    return [
      {
        title: 'Control Flow in Components',
        description: [
          'Control flow in Angular allows you to conditionally render or repeat parts of the DOM using structural directives like @if and @for.',
        ].join('\n'),
      },
      {
        title: '@if conditional control flow',
        description: [
          'Use @if to conditionally display an element based on a boolean value.',
        ].join('\n'),

        codeSnippets: [
          {
            language: 'typescript',
            code: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    @if (isServerRunning) {
<span>Yes, the server is running!</span>
    }
@else { server is down }
  \`,
})
export class AppComponent {
  isServerRunning = false; // Change this to true or false to test
}
`,
          },
        ],
      },
      {
        title: '@for loop control flow',
        description: [
          'Use @for to loop over arrays and display their contents in the DOM.',
        ].join('\n'),
        codeSnippets: [
          {
            language: 'typescript',
            code: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
   @for(user of users; track user.id) {
   <p>{{user.name}}</p>
          }
  \`,
})
export class AppComponent {
  user = [
    { id: 0, name: 'Alice' },
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Charlie' },
  ];
  }
}

            `,
          },
        ],
      },
    ];
  }
}
