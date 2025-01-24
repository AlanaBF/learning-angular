import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../components/code-snippet/code-snippet.component';
import { Section } from '@interfaces/documentation';
import { DataFormattingService } from '../../services/topics/data-formatting/data-formatting.service';
@Component({
  selector: 'app-forms-data',
  imports: [CodeSnippetComponent],
  templateUrl: './data-formatting.component.html',
  styleUrl: './data-formatting.component.css'
})
export class DataFormattingComponent {
  sections: Section[];

  constructor(private dataFormattingService: DataFormattingService) {
    this.sections = this.dataFormattingService.getContent();
  }
}
