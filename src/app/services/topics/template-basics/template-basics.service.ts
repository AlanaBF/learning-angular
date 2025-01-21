import { Injectable } from '@angular/core';
import { Section } from '@interfaces/documentation';

@Injectable({
  providedIn: 'root',
})
export class TemplateBasicsService {
  getContent(): Section[] {
    return [
      {
        title: 'Components',
        description: [
          'Components are the building blocks of Angular applications.',
          'They consist of:',
          '',
          '• TypeScript class - defines the logic',
          '• HTML template - defines the structure',
          '• CSS styles - defines the appearance'
        ].join('\n'),
        codeSnippets: [
          {
            title: 'Basic Component Structure',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <h1>Hello, {{ city }}</h1>
  \`,
  styles: [\`
    :host {
      color: blue;
    }
  \`]
})
export class AppComponent {
  city = 'San Francisco';
}`
          }
        ],
        subsections: [
          {
            title: 'Interpolation',
            description: [
              'Interpolation allows you to embed dynamic values in the template using {{ }}.',
              'For example: This example displays "Hello, San Francisco".',
            ].join('\n'),
            codeSnippets: [
              {
                language: 'html',
                code: '<h1>Hello, {{ city }}</h1>'
              }
            ]
          }
        ]
      }
    ];
  }
}
