import { CodeSnippet } from '@interfaces/shared';

export interface TemplateBasicsSection {
  title: string;
  content: string;
  codeSnippets?: CodeSnippet[];
  subsections?: TemplateBasicsSection[];
}

export interface TemplateBasics {
  heading: string;
  description: string;
  sections: TemplateBasicsSection[];
}
