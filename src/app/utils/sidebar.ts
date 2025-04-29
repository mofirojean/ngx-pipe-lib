// TODO: Implement structure and data for sidebar elemensts

import { Route } from "@angular/router";
import { BarcodeGeneratorComponent } from "../components/ui/barcode-generator/barcode-generator.component";
import { QrCodeExampleComponent } from "../components/ui/qr-code-example/qr-code-example.component";
import { WordEditorCountComponent } from "../components/ui/word-editor-count/word-editor-count.component";
import { ColorPickerComponent } from "../components/ui/color-picker/color-picker.component";
import { CreditCardMaskComponent } from "../components/ui/credit-card-mask/credit-card-mask.component";
import { DeviceDetectorComponent } from "../components/ui/device-detector/device-detector.component";
import { ResetPasswordMaskComponent } from "../components/ui/reset-password-mask/reset-password-mask.component";
import { GravatarGeneratorComponent } from "../components/ui/gravatar-generator/gravatar-generator.component";
import { HightlightTextComponent } from "../components/ui/hightlight-text/hightlight-text.component";
import { IpAddressMaskComponent } from "../components/ui/ip-address-mask/ip-address-mask.component";
import { JsonPrettyComponent } from "../components/ui/json-pretty/json-pretty.component";
import { MorseCodeGeneratorComponent } from "../components/ui/morse-code-generator/morse-code-generator.component";
import { ReplaceTextComponent } from "../components/ui/replace-text/replace-text.component";
import { TextReaderComponent } from "../components/ui/text-reader/text-reader.component";
import { TruncateTextExampleComponent } from "../components/ui/truncate-text-example/truncate-text-example.component";

export const sidebarChildrenRoutes: Route[] = [
    {
        path: 'count',
        title: 'Count Pipe',
        component: WordEditorCountComponent, 
    },
    {
        path: 'color-picker',
        title: 'Color Picker Pipe',
        component: ColorPickerComponent, 
    },
    {
        path: 'credit-card-mask',
        title: 'Credit Card Mask Pipe',
        component: CreditCardMaskComponent, 
    },
    {
        path: 'barcode',
        title: 'Barcode Pipe',
        component: BarcodeGeneratorComponent, 
    },
    {
        path: 'qrcode',
        title: 'QRCode Pipe',
        component: QrCodeExampleComponent, 
    },
    {
        path: 'device-type',
        title: 'Device Type Pipe',
        component: DeviceDetectorComponent, 
    },
    {
        path: 'email-mask',
        title: 'Email Mask Pipe',
        component: ResetPasswordMaskComponent, 
    },
    {
        path: 'gravatar',
        title: 'Gravatar Pipe',
        component: GravatarGeneratorComponent, 
    },
    {
        path: 'highlight',
        title: 'Highlight Pipe',
        component: HightlightTextComponent, 
    },
    {
        path: 'initials',
        title: 'Initials Pipe',
        component: BarcodeGeneratorComponent, 
    },
    {
        path: 'ip-address',
        title: 'IP Address Mask Pipe',
        component: IpAddressMaskComponent, 
    },
    {
        path: 'json-pretty',
        title: 'JSON Pretty Pipe',
        component: JsonPrettyComponent, 
    },
    {
        path: 'morse-code',
        title: 'Morse Code Pipe',
        component: MorseCodeGeneratorComponent, 
    },
    {
        path: 'replace',
        title: 'Replace Pipe',
        component: ReplaceTextComponent, 
    },
    {
        path: 'text-to-speech',
        title: 'Text To Speech Pipe',
        component: TextReaderComponent, 
    },
    {
        path: 'truncate',
        title: 'Truncate Pipe',
        component: TruncateTextExampleComponent, 
    },
    /**
     * Default route
     */
    {
        path: '',
        title: 'Count Pipe',
        pathMatch: 'full',
        redirectTo: 'count'
    },
]

export interface SidebarItem {
    name: string;
    link: string;
    isNew?: boolean;
}

export const sidebarItems: SidebarItem[] = [
    {
        link: '/pipes/count',
        name: 'Count'
    },
    {
        link: '/pipes/color-picker',
        name: 'Color Picker',
    },
    {
        link: '/pipes/credit-card-mask',
        name: 'Credit Card Mask', 
    },
    {
        link: '/pipes/barcode',
        name: 'Barcode',
    },
    {
        link: '/pipes/qrcode',
        name: 'QRCode',
    },
    {
        link: '/pipes/device-type',
        name: 'Device Type',
    },
    {
        link: '/pipes/email-mask',
        name: 'Email Mask', 
    },
    {
        link: '/pipes/gravatar',
        name: 'Gravatar',
    },
    {
        link: '/pipes/highlight',
        name: 'Highlight',
    },
    {
        link: '/pipes/initials',
        name: 'Initials',
    },
    {
        link: '/pipes/ip-address',
        name: 'IP Address Mask',
    },
    {
        link: '/pipes/json-pretty',
        name: 'JSON Pretty',
    },
    {
        link: '/pipes/morse-code',
        name: 'Morse Code',
    },
    {
        link: '/pipes/replace',
        name: 'Replace', 
    },
    {
        link: '/pipes/text-to-speech',
        name: 'Text To Speech',
    },
    {
        link: '/pipes/truncate',
        name: 'Truncate'
    },
]