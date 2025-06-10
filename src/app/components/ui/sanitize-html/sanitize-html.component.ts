import { Component, signal } from '@angular/core';
import { HtmlSanitizePipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { FormsModule } from '@angular/forms';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-sanitize-html',
  imports: [HtmlSanitizePipe, FormsModule, HlmInputDirective],
  template: `
    <div
      class="bg-white rounded-xl border-[1px] flex flex-col gap-4 shadow-[5px_20px_100px_10px_#00000024] w-[40rem] mx-auto p-4"
    >
      <div class="flex flex-col justify-center items-center gap-2">
        <h1 class="text-2xl font-bold">HTML Sanitizer</h1>
        <p class="text-center capitalize text-slate-400">
          A pipe to sanitize HTML content
        </p>
      </div>
      <div class="w-full">
        <textarea
          [(ngModel)]="sampleText"
          hlmInput
          class="w-full h-[6rem] h-max-[7rem] resize-none rounded-xl"
          name="json"
          placeholder="Enter your HTML content"
          id="json-pretty"
        ></textarea>
      </div>
      <div class="rounded-md overflow-auto max-h-[300px] overflow-y-auto">
        <div
          [innerHTML]="sampleText() | htmlSanitize"
          class="text-gray-100 p-4"
        ></div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SanitizeHtmlComponent {
  sampleText =
    signal<string>(`
    <div class="max-w-sm mx-auto bg-white border-[1px] border-gray-200 rounded-xl overflow-hidden flex items-center space-x-4 p-4">
      <img class="h-16 w-16 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User avatar">
      <div>
        <div class="text-xl font-medium text-black">John Doe</div>
        <p class="text-gray-500">Frontend Developer</p>
        <a class="mt-2 px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">Follow</a>
      </div>
    </div>
  `);
}
