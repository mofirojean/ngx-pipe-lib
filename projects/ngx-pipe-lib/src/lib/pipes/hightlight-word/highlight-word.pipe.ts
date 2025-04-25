import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * HighlightWordPipe: Highlights a specific word in a text by wrapping it in a span with a CSS class.
 *
 * @param {string} value - The input text.
 * @param {number} wordIndex - The index of the word to highlight (0-based).
 * @param {string} [highlightClass='highlight'] - The CSS class for highlighting.
 *
 * @returns {SafeHtml} - The text with the specified word wrapped in a span.
 *
 * @example
 * {{ 'Hello world' | highlightWord:1:'highlight' }} // Outputs: Hello <span class="highlight">world</span>
 * <div [innerHTML]="'Hello world' | highlightWord:0:'highlight'"></div> // Renders: <span class="highlight">Hello</span> world
 */
@Pipe({
  name: 'highlightWord',
  standalone: true,
  pure: false // Ensure pipe updates with currentWordIndex changes
})
export class HighlightWordPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, wordIndex: number, highlightClass: string = 'highlight'): SafeHtml {
    console.log(`HighlightWordPipe: value="${value.slice(0, 20)}...", wordIndex=${wordIndex}`);
    if (!value || wordIndex < 0) {
      console.log('HighlightWordPipe: No highlight (empty value or invalid index)');
      return this.sanitizer.bypassSecurityTrustHtml(value || '');
    }

    // Split text into words, preserving spaces and punctuation
    const words = value.split(/(\s+)/);
    if (wordIndex >= words.length || !words[wordIndex].trim()) {
      console.log('HighlightWordPipe: Invalid wordIndex or empty word');
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }

    // Wrap the word at wordIndex in a span
    const highlightedWords = words.map((word, index) =>
      index === wordIndex && word.trim()
        ? `<span class="${highlightClass}">${word}</span>`
        : word
    );

    const result = highlightedWords.join('');
    console.log(`HighlightWordPipe: Output="${result.slice(0, 50)}..."`);
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}