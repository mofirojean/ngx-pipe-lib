import { afterNextRender, Component, computed, inject, OnDestroy, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideShieldUser } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgOtpInputComponent } from 'ng-otp-input';
import { EmailMaskPipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';

@Component({
  selector: 'app-reset-password-mask',
  imports: [
    NgIcon,
    HlmIconDirective,
    NgOtpInputComponent,
    ReactiveFormsModule,
    HlmButtonDirective,
    EmailMaskPipe
  ],
  templateUrl: './reset-password-mask.component.html',
  styles: ``,
  providers: [
    provideIcons({lucideShieldUser})
  ]
})
export class ResetPasswordMaskComponent implements OnDestroy {
  protected sampleEmail = signal('ngxpipelib@gmail.com');
  secureCode = new FormControl('');
  optConfig = {
    inputStyles: {
      width: '50px',
      height: '50px',
      fontSize: '20px',
      textAlign: 'center',
    },
    containerStyles: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    length: 6
  };
  private _intervalId?: number;

  public countdown = signal(60);
  public isResendDisabled = computed(() => this.countdown() > 0);

  constructor() {
      afterNextRender(() => this.startCountdown());
  }

  submit() {
    console.log(this.secureCode.value);
  }

  resendOtp() {
    this.secureCode.reset();
      this.resetCountdown();
  }

  ngOnDestroy() {
      this.stopCountdown();
  }

  private resetCountdown() {
      this.countdown.set(60);
      this.startCountdown();
  }

  private startCountdown() {
    this.stopCountdown();
    this._intervalId = setInterval(() => {
        this.countdown.update((countdown) => Math.max(0, countdown - 1));
        if (this.countdown() === 0) {
            this.stopCountdown();
        }
    }, 1000);
  }

  private stopCountdown() {
      if (this._intervalId) {
          clearInterval(this._intervalId);
          this._intervalId = undefined;
      }
  }
}
