import { CodeSnippet } from '@interfaces/shared';

export interface FormsData {
  heading: string;
  description: string;
  sections: FormsDataSection[];
}

export interface FormsDataSection {
  title: string;
  content: string;
  codeSnippets?: CodeSnippet[];
  subsections?: FormsDataSection[];
}
