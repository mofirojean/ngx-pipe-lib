import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountPipe } from './pipes/count/count.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { HighlightPipe } from './pipes/highlight/highlight.pipe';
import { EmailMaskPipe } from './pipes/email-mask/email-mask.pipe';
import { JsonPrettyPipe } from './pipes/json-pretty/json-pretty.pipe';
import { QrCodePipe } from './pipes/qr-code/qr-code.pipe';


@NgModule({
  imports: [
    CommonModule,
    CountPipe,
    TruncatePipe,
    HighlightPipe,
    EmailMaskPipe,
    JsonPrettyPipe,
    QrCodePipe
  ],
  exports: [
    CountPipe,
    TruncatePipe,
    HighlightPipe,
    EmailMaskPipe,
    JsonPrettyPipe,
    QrCodePipe
  ]
})
export class NgxPipeLibModule { }
