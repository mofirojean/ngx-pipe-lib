import { Component, signal } from '@angular/core';
import { AsciiArtPipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { heroChevronDoubleDown } from '@ng-icons/heroicons/outline';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-ascii-art-generator',
  imports: [
    AsciiArtPipe,
    FormsModule,
    NgIcon,
    HlmIconDirective,
    HlmInputDirective
  ],
  template: `
    <div class="bg-white rounded-xl border-[1px] shadow-[5px_20px_100px_10px_#00000024] flex flex-col gap-2 w-[40rem] mx-auto p-4">
      <div class="flex flex-col justify-center items-center gap-2">
        <h1 class="text-2xl font-bold">ASCII ART Generator</h1>
        <p class="text-center capitalize text-slate-400 text-sm">Generate simple ascii art from simple texts</p>
      </div>
      <div class="w-full">
        <input [(ngModel)]="sampleText" hlmInput class="w-full rounded-xl" name="json" id="json-pretty" />
      </div>
      <div class="flex justify-center items-center">
        <ng-icon hlm name="heroChevronDoubleDown"/>
      </div>
      <div 
        [innerHTML]="sampleText() | asciiArt:{font: 'Ghost'}"
        class="rounded-md p-4 flex justify-center items-center uppercase text-white overflow-auto h-[300px] bg-black overflow-y-auto">
      </div>
    </div>
  `,
  styles: ``,
  providers: [
    provideIcons({heroChevronDoubleDown})
  ]
})
export class AsciiArtGeneratorComponent {
  sampleText = signal<string>('Hello');
}
