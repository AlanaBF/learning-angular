import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../components/code-snippet/code-snippet.component';
import { Section } from '@interfaces/documentation';
import { FormsDataService } from '../../services/topics/forms-data/forms-data.service';
@Component({
  selector: 'app-forms-data',
  imports: [CodeSnippetComponent],
  templateUrl: './forms-data.component.html',
  styleUrl: './forms-data.component.css'
})
export class FormsDataComponent {
  sections: Section[];

  constructor(private formsDataService: FormsDataService) {
    this.sections = this.formsDataService.getContent();
  }
}
