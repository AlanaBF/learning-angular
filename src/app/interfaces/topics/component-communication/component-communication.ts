import { CodeSnippet } from '@interfaces/shared';

export interface ComponentCommunication {
  heading: string;
  description: string;
  sections: ComponentCommunicationSection[];
}

export interface ComponentCommunicationSection {
  title: string;
  content: string;
  codeSnippets?: CodeSnippet[];
  subsections?: ComponentCommunicationSection[];
}
