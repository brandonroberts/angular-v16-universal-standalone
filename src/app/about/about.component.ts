import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownModule,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export default class AboutComponent {
  readonly readmePath = 'https://raw.githubusercontent.com/jfcere/angular-v16-universal-standalone/ngx-markdown-issue-493/README.md';
}
