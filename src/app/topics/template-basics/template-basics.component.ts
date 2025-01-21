import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../components/code-snippet/code-snippet.component';
import { Section } from '@interfaces/documentation';
import { TemplateBasicsService } from '../../services/topics/template-basics/template-basics.service';
@Component({
  selector: 'app-template-basics',
  imports: [CodeSnippetComponent],
  templateUrl: './template-basics.component.html',
  styleUrl: './template-basics.component.css',
})
export class TemplateBasicsComponent {
  sections: Section[];

  constructor(private templateBasicsService: TemplateBasicsService) {
    this.sections = this.templateBasicsService.getContent();
  }
}
