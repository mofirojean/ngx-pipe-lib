import { Pipe, PipeTransform } from '@angular/core';

type CountType = 'words' | 'chars';

/**
 * CountPipe: Counts the number of words or characters in a given string.
 *
 * This Angular pipe transforms a string input into a number representing either
 * the word count or character count, based on the specified type.
 *
 * @param {string} value - The input string to be processed.
 * @param {CountType} [type='words'] - Specifies whether to count 'words' or 'chars'. Defaults to 'words'.
 * @returns {number} - The number of words or characters in the input string. Returns 0 if the input is null, undefined, or not a string.
 *
 * @example
 * {{ 'Hello world' | count }} // Returns 2 (word count)
 * {{ 'Hello world' | count: 'chars' }} // Returns 11 (character count)
 * {{ '' | count }} // Returns 0
 * {{ null | count }} // Returns 0
 * {{ undefined | count }} // Returns 0
 */
@Pipe({
  name: 'count',
  standalone: true
})
export class CountPipe implements PipeTransform {

  transform(value: string, type: CountType = "words"): number {
    if (!value || typeof value !== 'string') {
      return 0;
    }

    if (type == 'chars') {
      return value.length;
    }

    const words = value.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
  }
}
