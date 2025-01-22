import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../components/code-snippet/code-snippet.component';
import { Section } from '@interfaces/documentation';
import { ComponentCommunicationService } from '../../services/topics/component-communication/component-communication.service';
@Component({
  selector: 'app-component-communication',
  imports: [CodeSnippetComponent],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.css'
})
export class ComponentCommunicationComponent {
  sections: Section[];

  constructor(private componentCommunicationService: ComponentCommunicationService) {
    this.sections = this.componentCommunicationService.getContent();
  }
}
