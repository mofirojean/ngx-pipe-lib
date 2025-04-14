import { Provider } from "@angular/core";
import { CountPipe } from "./pipes/count/count.pipe";
import { TruncatePipe } from "./pipes/truncate/truncate.pipe";
import { HighlightPipe } from "./pipes/highlight/highlight.pipe";
import { EmailMaskPipe } from "./pipes/email-mask/email-mask.pipe";
import { JsonPrettyPipe } from "./pipes/json-pretty/json-pretty.pipe";
import { QrCodePipe } from "./pipes/qr-code/qr-code.pipe";

export function provideNgxPipeLib(): Provider[] {
    return [
        CountPipe,
        TruncatePipe,
        HighlightPipe,
        EmailMaskPipe,
        JsonPrettyPipe,
        QrCodePipe,
    ]
}