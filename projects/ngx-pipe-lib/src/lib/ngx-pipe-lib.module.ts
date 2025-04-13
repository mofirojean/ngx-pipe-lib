import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountPipe } from './pipes/count/count.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';


@NgModule({
  imports: [
    CommonModule,
    CountPipe,
    TruncatePipe
  ],
  exports: [
    CountPipe,
    TruncatePipe
  ]
})
export class NgxPipesModule { }
