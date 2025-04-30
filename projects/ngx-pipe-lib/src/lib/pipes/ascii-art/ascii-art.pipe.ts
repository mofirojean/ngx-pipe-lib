import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asciiArt'
})
export class AsciiArtPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
