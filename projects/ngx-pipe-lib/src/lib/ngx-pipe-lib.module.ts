import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountPipe } from './pipes/count/count.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { HighlightPipe } from './pipes/highlight/highlight.pipe';
import { EmailMaskPipe } from './pipes/email-mask/email-mask.pipe';
import { JsonPrettyPipe } from './pipes/json-pretty/json-pretty.pipe';
import { QRCodePipe } from './pipes/qr-code/qr-code.pipe';
import { IpAddressMaskPipe } from './pipes/ip-address-mask/ip-address-mask.pipe';
import { CreditCardMaskPipe } from './pipes/credit-card-mask/credit-card-mask.pipe';


@NgModule({
  imports: [
    CommonModule,
    CountPipe,
    TruncatePipe,
    HighlightPipe,
    EmailMaskPipe,
    JsonPrettyPipe,
    QRCodePipe,
    IpAddressMaskPipe,
    CreditCardMaskPipe
  ],
  exports: [
    CountPipe,
    TruncatePipe,
    HighlightPipe,
    EmailMaskPipe,
    JsonPrettyPipe,
    QRCodePipe,
    IpAddressMaskPipe,
    CreditCardMaskPipe
  ]
})
export class NgxPipeLibModule { }
