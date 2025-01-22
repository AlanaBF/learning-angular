import { Injectable } from '@angular/core';
import { Section } from '@interfaces/documentation';

@Injectable({
  providedIn: 'root',
})
export class ComponentCommunicationService {
  getContent(): Section[] {
    return [
      {
        title: 'Component Communication',
        description: [
          'Component communication in Angular allows you to pass data between components using @Input and @Output decorators.',
        ].join('\n'),
      },
      {
        title: '@Input',
        description: [
          'The @Input decorator allows a child component to receive data from its parent component.',
        ].join('\n'),
        codeSnippets: [
          {
            language: 'typescript',
            code: `
// user.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: \`
    <p>The user's name is {{ name }}</p>
  \`,
})
export class UserComponent {
  @Input() name: string = ''; // Data received from the parent
}

//app/app.component.ts
import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-root',
  template: \`
<app-user name="Simran" />
  \`,
  imports: [UserComponent],
})
export class AppComponent {}


  `,
          },
        ],
      },
      {
        title: '@Output',
        description: ['The @Output decorator allows a child component to send data to its parent component using events.'].join('\n'),
        codeSnippets: [
          {
            language: 'typescript',
            code: `
// app/child.component.ts
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: \`.btn { padding: 5px; }\`,
  template: \`
<button class="btn" (click)="addItem()">Add Item</button>
  \`,
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

// app/app.component.ts
import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-root',
  template: \`
<app-child (addItemEvent)="addItem($event)" />
<p>🐢 all the way down {{ items.length }}</p>
  \`,
  imports: [ChildComponent],
})
export class AppComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
  `,
          },
        ],
      },
      {
        title: '@defer control flow',
        description: [
          '@defer is a directive in Angular that allows you to delay loading a section of a components template until a specific condition is met. This helps with lazy-loading content and optimizing performance.',
        ].join('\n'),
        codeSnippets: [
          {
            language: 'typescript',
            code: `
import {Component} from '@angular/core';
import {CommentsComponent} from './comments.component';

@Component({
  selector: 'app-root',
  template: \`
<div>
<h1>How I feel about Angular</h1>
<article>
<p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
</p>
</article>

      @defer (on viewport) {
<comments />
      } @placeholder {
<p>Future comments</p>
      } @loading (minimum 2s) {
<p>Loading comments...</p>
      }
</div>
  \`,
  imports: [CommentsComponent],
})
export class AppComponent {}
  `,
          },
        ],
      },
    ];
  }
}
