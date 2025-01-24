import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Angular Learning';
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
}
