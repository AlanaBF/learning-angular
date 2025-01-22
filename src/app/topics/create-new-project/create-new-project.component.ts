import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../components/code-snippet/code-snippet.component';
import { Section } from '@interfaces/documentation';
import { CodeSnippet } from '@interfaces/shared';
import { DocumentationService } from '../../services/home/documentation.service';

@Component({
  selector: 'app-create-new-project',
  imports: [CodeSnippetComponent],
  templateUrl: './create-new-project.component.html',
  styleUrl: './create-new-project.component.css',
})
export class CreateNewProjectComponent {
  sections: Section[];

  constructor(private docService: DocumentationService) {
    this.sections = this.docService.getContent();
  }
}
