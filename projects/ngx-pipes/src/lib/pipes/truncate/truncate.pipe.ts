import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
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
