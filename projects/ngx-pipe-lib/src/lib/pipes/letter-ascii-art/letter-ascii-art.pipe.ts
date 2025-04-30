import { Pipe, PipeTransform } from '@angular/core';

/**
 * LetterAsciiArtPipe: Converts text into ASCII art.
 *
 * @param {string} value - The text to convert to ASCII art.
 *
 * @returns {string} - The ASCII art representation wrapped in a <pre> tag.
 *
 * @example
 * {{ 'HI' | asciiArt }} // Outputs:
 * <pre>
 * ┳┓┏┓
 * ┣┫┣┫
 * ┻┻┻┻
 * </pre>
 * <div [innerHTML]="userInput | letterAsciiArt"></div>
 *
 * @author Mofiro Jean
 */
@Pipe({
  name: 'letterAsciiArt',
  standalone: true
})
export class LetterAsciiArtPipe implements PipeTransform {
  private readonly asciiFont: { [key: string]: string[] } = {
    'A': [' ┳ ', '┣┳', '┻┻'],
    'B': ['┳┓', '┣┻', '┻┓'],
    'C': [' ┳ ', '┣ ', '┻ '],
    'D': ['┳┓', '┣┻', '┻┓'],
    'E': ['┳┓', '┣┻', '┻┓'],
    'F': ['┳┓', '┣ ', '┻ '],
    'G': [' ┳ ', '┣╋', '┻┗'],
    'H': ['┳┳', '┣┣', '┻┻'],
    'I': ['┳', '┃', '┻'],
    'J': [' ┳', ' ┃', '┻┗'],
    'K': ['┳┳', '┣┻', '┻┳'],
    'L': ['┳ ', '┣ ', '┻┗'],
    'M': ['┳┳', '┻┻', '┻┻'],
    'N': ['┳┳', '┻┣', '┻┻'],
    'O': [' ┳ ', '┣┻', '┻┓'],
    'P': ['┳┓', '┣┻', '┻ '],
    'Q': [' ┳ ', '┣┻', '┻┻'],
    'R': ['┳┓', '┣┻', '┻┳'],
    'S': [' ┳ ', '┻┓', '┻┗'],
    'T': ['┳┳┳', ' ┻ ', ' ┻ '],
    'U': ['┳┳', '┣┻', '┻┓'],
    'V': ['┳┳', '┣┻', ' ┻ '],
    'W': ['┳┳', '┣┻', '┻┻'],
    'X': ['┳┳', ' ┻ ', '┻┻'],
    'Y': ['┳┳', ' ┻ ', ' ┻ '],
    'Z': ['┳┳┳', '┻┻', '┻┻┻']
  };

  transform(value: string): string {
    if (!value || typeof value !== 'string') {
      return '';
    }
    
    const input = value.toUpperCase().slice(0, 10); // Limit to 10 chars for readability
    const lines: string[] = ['', '', '']; // Three lines for ASCII art

    for (const char of input) {
      const art = this.asciiFont[char] || ['   ', '   ', '   ']; // Default to spaces for unknown chars
      lines[0] += art[0] + ' ';
      lines[1] += art[1] + ' ';
      lines[2] += art[2] + ' ';
    }

    return `<pre>${lines.join('\n')}</pre>`;
  }
}
