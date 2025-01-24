import { Injectable } from '@angular/core';
import { Section } from '@interfaces/documentation';

@Injectable({
  providedIn: 'root',
})
export class DataFormattingService {
  getContent(): Section[] {
    return [
      {
        title: 'Pipes',
        description: ['Use Angular pipes to transform data in your templates.'].join('\n'),
        codeSnippets: [
          {
            title: '1. Using Built-in Pipes',
            language: 'typescript',
            code: `
import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  template: \`
    <p>Date: {{ today | date:'shortDate' }}</p>
    <p>Uppercase: {{ name | uppercase }}</p>
    <p>Currency: {{ price | currency:'USD' }}</p>
  \`
})
export class PipesDemoComponent {
  today = new Date();
  name = 'john doe';
  price = 42.99;
}
`
          },
          {
            title: '2. Custom Pipes',
            language: 'typescript',
            code: `
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [ReversePipe],
  template: \`
    <p>{{ 'Hello World' | reverse }}</p>
  \`
})
export class CustomPipeComponent {}`
          }
        ]
      },
    ]
  }
}
