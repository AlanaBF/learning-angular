import { CodeSnippet } from '@interfaces/shared';

export interface DataFormatting {
  heading: string;
  description: string;
  sections: DataFormattingSection[];
}

export interface DataFormattingSection {
  title: string;
  content: string;
  codeSnippets?: CodeSnippet[];
  subsections?: DataFormattingSection[];
}
