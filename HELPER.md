# Helper

````typescript

{
        title: '@defer control flow',
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

```typescript
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


```
