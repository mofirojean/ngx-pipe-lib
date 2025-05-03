import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { 
  CamelCasePipe,
  KebabCasePipe,
  SnakeCasePipe,
  TitleCasePipe 
} from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { heroChevronDoubleDown } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-text-transform',
  imports: [
    HlmInputDirective,
    NgIcon,
    HlmIconDirective,
    FormsModule,
    TitleCasePipe,
    SnakeCasePipe,
    KebabCasePipe,
    CamelCasePipe
  ],
  template: `
    <div class="bg-white rounded-xl border-[1px] shadow-[5px_20px_100px_10px_#00000024] flex flex-col gap-2 w-[40rem] mx-auto p-4">
      <div class="flex flex-col justify-center items-center gap-2">
        <h1 class="text-2xl font-bold">Text Transform</h1>
        <p class="text-center capitalize text-slate-400 text-sm">Transform your text to any case style format</p>
      </div>
      <div class="w-full">
        <input [(ngModel)]="text" hlmInput class="w-full rounded-xl" name="json" id="json-pretty" />
      </div>
      <div class="flex justify-center items-center">
        <ng-icon hlm name="heroChevronDoubleDown"/>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <span class="font-bold">Camel Case</span>
          <div class="rounded-md p-4 flex justify-center items-center text-xl text-white bg-gradient-to-tr from-purple-500 to-orange-400">{{ text() | camelCase }}</div>
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-bold">Snake Case</span>
          <div class="rounded-md p-4 flex justify-center items-center text-xl text-white bg-gradient-to-tr from-red-500 to-orange-400">{{ text() | snakeCase }}</div>
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-bold">Kebab Case</span>
          <div class="rounded-md p-4 flex justify-center items-center text-xl text-white bg-gradient-to-tr from-blue-500 to-red-300">{{ text() | kebabCase }}</div>
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-bold">Title Case</span>
          <div class="rounded-md p-4 flex justify-center items-center text-xl text-white bg-gradient-to-tr from-green-500 to-slate-400">{{ text() | titleCase }}</div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  providers: [
    provideIcons({heroChevronDoubleDown})
  ]
})
export class TextTransformComponent {
  text = signal<string>('Hello world');
}
