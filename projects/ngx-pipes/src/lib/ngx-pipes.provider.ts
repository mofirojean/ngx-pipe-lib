import { Provider } from "@angular/core";
import { CountPipe } from "./pipes/count/count.pipe";
import { TruncatePipe } from "./pipes/truncate/truncate.pipe";

export function provideNgxProvider(): Provider[] {
    return [
        CountPipe,
        TruncatePipe
    ]
}