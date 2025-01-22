
import { CodeSnippet } from '@interfaces/shared';

export interface ControlFlow {
  heading: string;
  description: string;
  sections: ControlFlowSection[];
}

export interface ControlFlowSection {
  title: string;
  content: string;
  codeSnippets?: CodeSnippet[];
  subsections?: ControlFlowSection[];
}
