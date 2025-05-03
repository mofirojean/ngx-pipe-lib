import { Pipe, PipeTransform } from '@angular/core';

/**
 * KebabCasePipe: Converts text to kebab-case (e.g., "hello world" → "hello-world").
 *
 * @param {string} value - The input string to transform.
 * @returns {string} The string in kebab-case, or an empty string if input is invalid.
 *
 * @example
 * ```html
 * {{ 'hello world' | kebabCase }} <!-- Outputs: hello-world -->
 * ```
 * 
 * @author Mofiro Jean
 */
@Pipe({
  name: 'kebabCase',
  standalone: true
})
export class KebabCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value || typeof value !== 'string') return '';
    return value
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]+/g, '');
  }
}
