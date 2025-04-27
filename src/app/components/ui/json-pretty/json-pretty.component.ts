import { Component, signal } from '@angular/core';
import { JsonPrettyPipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-pretty',
  imports: [
    JsonPrettyPipe,
    HlmInputDirective,
    FormsModule
  ],
  template: `
    <div class="bg-white rounded-xl border-[1px] flex flex-col gap-4 shadow-[5px_20px_100px_10px_#00000024] w-[40rem] mx-auto p-4">
        <div class="flex flex-col justify-center items-center gap-2">
          <h1 class="text-2xl font-bold">Format JSON</h1>
          <p class="text-center capitalize text-slate-400">A pretty Json Formatter inspired by Angular Json Pipe</p>
        </div>
        <div class="w-full px-4">
          <textarea [(ngModel)]="sampleText" hlmInput class="w-full h-[6rem] h-max-[7rem] resize-none rounded-xl" name="json" id="json-pretty"></textarea>
        </div>
        <div class="rounded-md overflow-auto max-h-[300px] overflow-y-auto">
          <pre [innerHTML]="sampleText() | jsonPretty" class="text-gray-100 p-4"></pre>
        </div>
    </div>
  `,
  styles: ``
})
export class JsonPrettyComponent {
  sampleText = signal<string>(
    `{
      "name": "John",
      "age": 30,
      "active": true,
      "data": null,
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zip": "12345"
      },
      "hobbies": ["reading", "hiking", "coding"],
      "profile": {
          "bio": "A software engineer",
          "age": 32
      }
    }`
  )
}

