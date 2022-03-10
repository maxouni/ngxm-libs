import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxmInputComponent } from './ngxm-input.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxmInputService } from './ngxm-input.service';
import { NGXM_INPUT_LIB_CONFIG, NgxmInputConfig } from './ngmx-input.model';
import { NgxmInputValidationPipe } from './ngxm-input-validation.pipe';

@NgModule({
  declarations: [NgxmInputComponent, NgxmInputValidationPipe],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [NgxmInputComponent],
  providers: [NgxmInputService],
})
export class NgxmInputModule {
  public static forRoot(
    options?: NgxmInputConfig,
  ): ModuleWithProviders<NgxmInputModule> {
    return {
      ngModule: NgxmInputModule,
      providers: [
        ...[{ provide: NGXM_INPUT_LIB_CONFIG, useValue: options }],
        ...(options?.ngxTranslateLoader ? [options?.ngxTranslateLoader] : []),
      ],
    };
  }
}
