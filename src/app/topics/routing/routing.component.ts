import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../components/code-snippet/code-snippet.component';
import { Section } from '@interfaces/documentation';
import { CodeSnippet } from '@interfaces/shared';
import { RoutingService } from '../../services/topics/routing/routing.service';

@Component({
  selector: 'app-routing',
  imports: [CodeSnippetComponent],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {
  sections: Section[];
  constructor(private routingService: RoutingService) {
    this.sections = this.routingService.getContent();
  }
}
