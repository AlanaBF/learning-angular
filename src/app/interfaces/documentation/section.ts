import { CodeSnippet } from '../shared/code-snippet';

export interface Section {
  title: string;      // Section heading
  description?: string;   // Optional description
  codeSnippets?: CodeSnippet[];  // Array of code examples
  subsections?: Section[];    // Nested sections
}
