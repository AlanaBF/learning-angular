import { Component, Input } from '@angular/core';
import { CodeSnippet } from '../../interfaces/documentation';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  template: `
    <div class="mb-4 w-full">
      @if (snippet.title) {
      <h4 class="text-lg font-medium mb-2">{{ snippet.title }}</h4>
      }
      <div class="overflow-x-auto bg-gray-800 rounded-lg">
        <pre
          class="p-4"
        ><code class="text-white">{{ snippet.code }}</code></pre>
      </div>
    </div>
  `,
})
export class CodeSnippetComponent {
  @Input() snippet!: CodeSnippet;
}
