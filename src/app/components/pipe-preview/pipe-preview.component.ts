import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-pipe-preview',
  imports: [MarkdownModule],
  templateUrl: './pipe-preview.component.html',
  styles: ``
})
export class PipePreviewComponent {
  pipeUseCase = `
    <input class="w-60" [(ngModel)]="searchTerm" hlmInput placeholder='Search' type='search' />
    <p class="text-sm" [innerHTML]="longTextContent | highlight:searchTerm"></p>
  `
}
