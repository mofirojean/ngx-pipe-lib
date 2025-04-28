import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChevronDoubleDown } from '@ng-icons/heroicons/outline';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { MorseCodePipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';

@Component({
  selector: 'app-morse-code-generator',
  imports: [
    NgIcon,
    HlmInputDirective,
    HlmIconDirective,
    FormsModule,
    MorseCodePipe
  ],
  template: `
    <div class="bg-white rounded-xl border-[1px] flex flex-col gap-4 shadow-[5px_20px_100px_10px_#00000024] w-[40rem] mx-auto p-8">
        <div class="flex flex-col justify-center items-center gap-2">
          <h1 class="text-2xl font-bold">Morse Code Converter</h1>
          <p class="text-center capitalize text-slate-400 text-sm">Transform any text to morse code</p>
        </div>
        <div class="w-full">
          <textarea [(ngModel)]="sampleText" hlmInput class="w-full h-[6rem] h-max-[7rem] resize-none rounded-xl" name="json" id="json-pretty"></textarea>
        </div>
        <div class="flex justify-center items-center">
          <ng-icon hlm name="heroChevronDoubleDown"/>
        </div>
        <div class="rounded-md p-4 text-2xl text-white overflow-auto h-[100px] bg-slate-600 overflow-y-auto">
          {{sampleText() | morseCode }}
        </div>
    </div>
  `,
  styles: ``,
  providers: [
    provideIcons({heroChevronDoubleDown})
  ]
})
export class MorseCodeGeneratorComponent {
  sampleText = signal<string>('Hello, ')
}
