export interface CodeSnippet {
  title?: string;     // Optional title for the code
  language: string;   // Programming language for syntax highlighting
  code: string;       // Actual code content
}

export interface Section {
  title: string;      // Section heading
  description?: string;   // Optional description
  codeSnippets?: CodeSnippet[];  // Array of code examples
  subsections?: Section[];    // Nested sections
}

export interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}
