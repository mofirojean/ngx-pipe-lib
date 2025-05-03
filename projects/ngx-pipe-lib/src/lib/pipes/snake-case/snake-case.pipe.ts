import { Pipe, PipeTransform } from '@angular/core';

/**
 * SnakeCasePipe: Converts text to snake_case (e.g., "hello world" → "hello_world").
 *
 * @param {string} value - The input string to transform.
 * @returns {string} The string in snake_case, or an empty string if input is invalid.
 *
 * @example
 * ```html
 * {{ 'hello world' | snakeCase }} <!-- Outputs: hello_world -->
 * ```
 * 
 * @author Mofiro Jean
 */
@Pipe({
  name: 'snakeCase',
  standalone: true
})
export class SnakeCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value || typeof value !== 'string') return '';
    return value
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-zA-Z0-9_]+/g, '');
  }
}
