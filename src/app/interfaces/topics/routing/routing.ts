import { CodeSnippet } from '@interfaces/shared';

export interface Routing {
  heading: string;
  description: string;
  sections: RoutingSection[];
}

export interface RoutingSection {
  title: string;
  content: string;
  codeSnippets?: CodeSnippet[];
  subsections?: RoutingSection[];
}
