import { Component, ElementRef, NgZone, QueryList, signal, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroPause, heroPlay, heroStop } from '@ng-icons/heroicons/outline';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-text-reader',
  imports: [
    NgScrollbarModule,
    FormsModule,
    NgIcon,
    HlmInputDirective,
    HlmButtonDirective,
    CommonModule
  ],
  templateUrl: './text-reader.component.html',
  styles: `
    .reader-text {
      white-space: pre-wrap;
      font-size: 1.2em;
      line-height: 1.7;
      color: #333;
    }
    .highlighted {
      background-color: #fef08a;
      font-weight: 600;
      color: #1e293b;
      padding: 0.2em;
      border-radius: 0.375rem;
    }
  `,
  providers: [
    provideIcons({heroPlay, heroPause, heroStop})
  ]
})
export class TextReaderComponent {
  textContent = signal<string>(
    "The quick brown fox jumps over the lazy dog. This is a sample text for the mini reader application.  It will highlight each word as it is spoken."
  );
  words = signal<string[]>([]);
  currentWordIndex = signal<number>(-1);
  isReading = signal<boolean>(false);
  selectedLanguage = signal<string>('en-US');

  private speechSynthesis = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private utterance: SpeechSynthesisUtterance | null = null;
  private wordTimers: NodeJS.Timeout[] = [];

  @ViewChildren('readerText span') wordElements!: QueryList<ElementRef<HTMLSpanElement>>;

  ngOnDestroy(): void {
    this.stopReading();
  }

  startReading(): void {
    if (!this.speechSynthesis || !this.textContent()) {
      return;
    }

    if (this.isReading()) {
      this.speechSynthesis.pause();
      this.isReading.set(false);
      return;
    }

    this.words.set(this.textContent().split(/\s+/).filter(word => word.length > 0));
    this.currentWordIndex.set(-1);
    this.isReading.set(true);
    this.wordTimers = [];

    this.utterance = new SpeechSynthesisUtterance(this.textContent());
    this.utterance.lang = this.selectedLanguage();

    this.utterance.onboundary = (event: SpeechSynthesisEvent) => {
      if (event.name === 'word') {
        const wordBefore = this.textContent().substring(0, event.charIndex).split(/\s+/).filter(w => w.length > 0).length - 1;
        this.currentWordIndex.set(wordBefore);
      }
    };

    this.utterance.onend = () => {
      this.stopReading();
    };

    this.speechSynthesis.speak(this.utterance);
  }

  stopReading(): void {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
    this.isReading.set(false);
    this.currentWordIndex.set(-1);
    this.wordTimers.forEach(clearTimeout);
    this.wordTimers = [];
  }
}
