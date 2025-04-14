import { Pipe, PipeTransform } from '@angular/core';

/**
 * TruncatePipe: Truncates a string to a specified maximum length, optionally preserving words.
 *
 * This Angular pipe transforms a string input by truncating it to the given `maxLength`.
 * It provides options to customize the ellipsis and preserve word boundaries.
 *
 * @param {string} value - The input string to be truncated.
 * @param {number} [maxLength=10] - The maximum length of the truncated string. Defaults to 10.
 * @param {string} [ellipsis='...'] - The string to append to the truncated portion. Defaults to '...'.
 * @param {boolean} [preserveWords=false] - If true, truncates at the last space before `maxLength` to avoid cutting words. Defaults to false.
 * @returns {string} - The truncated string. Returns an empty string if the input is null, undefined, or not a string.
 *
 * @example
 * {{ 'This is a long sentence' | truncate }} // Returns 'This is a...'
 * {{ 'This is a long sentence' | truncate: 20 }} // Returns 'This is a long sente...'
 * {{ 'This is a long sentence' | truncate: 15: ' [more]' }} // Returns 'This is a long [more]'
 * {{ 'This is a long sentence' | truncate: 15: '...' : true }} // Returns 'This is a...'
 * {{ 'This is a long sentence' | truncate: 20: '...' : true }} // Returns 'This is a long...'
 * {{ null | truncate }} // Returns ''
 * {{ undefined | truncate }} // Returns ''
 */
@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxLength: number = 10, ellipsis: string = '...', preserveWords: boolean = false): string {
    if (!value || typeof value !== 'string') {
      return '';
    }

    if (value.length <= maxLength) {
      return value;
    }

    const truncated = value.substring(0, maxLength);
    if (preserveWords) {
      const lastSpaceIndex = truncated.lastIndexOf(' ');
      if (lastSpaceIndex > 0) {
        return truncated.substring(0, lastSpaceIndex) + ellipsis;
      }
    }

    return truncated + ellipsis;
  }

}
