import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../components/code-snippet/code-snippet.component';
import { Section } from '@interfaces/documentation';
import { ControlFlowService } from '../../services/topics/control-flow/control-flow.service';

@Component({
  selector: 'app-control-flow',
  imports: [CodeSnippetComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  sections: Section[];

  constructor(private controlFlowService: ControlFlowService) {
    this.sections = this.controlFlowService.getContent();
  }
}
