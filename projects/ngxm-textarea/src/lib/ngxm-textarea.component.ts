import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { NgxmRequiredType, NgxmTextareaValue } from './ngmx-textarea.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Html NGXM textarea component
 */
@Component({
  selector: 'ngxm-textarea',
  templateUrl: './ngxm-textarea.component.html',
  styleUrls: ['./ngxm-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxmTextareaComponent),
      multi: true,
    },
  ],
  animations: [
    trigger('visibilityChanged', [
      state('null', style({ opacity: 0 })),
      state('undefined', style({ opacity: 0 })),
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('*=>*', animate('300ms')),
    ]),
  ],
})
export class NgxmTextareaComponent implements OnDestroy, AfterViewInit {
  /**
   * Аттрибут ID
   */
  @Input() identifier: string =
    't__' + Math.random().toString().replace('.', '');
  /**
   * Обязательный
   */
  @Input() required: NgxmRequiredType | undefined;
  /**
   * Лейбл
   */
  @Input() label: string | undefined;
  /**
   * Текст ошибки
   */
  @Input() error: string | undefined;
  /**
   * Значение плейсхолдера
   */
  @Input() placeholder: string | undefined;
  /**
   * Описание
   */
  @Input() description: string | undefined;
  /**
   * Название контрола формы
   */
  @Input() formControlName: string | undefined;
  /**
   * Дополниетльный класс поля
   */
  @Input() className: string | undefined;
  /**
   * Максимальная длина значения поля
   */
  @Input() maxLength: number | undefined;
  /**
   * Флаг "Не показывать ошибки валидации"
   */
  @Input() disableErrorMessage: boolean | undefined;
  /**
   * Контрол формы
   */
  control: FormControl | null = null;
  /**
   * Флаг изменения контрола
   */
  blured: boolean | undefined;
  /**
   * Style textarea object
   */
  ngStyle: {
    [klass: string]: any;
  } | null = {};

  private readonly destroy$: Subject<unknown> = new Subject<unknown>();

  @ViewChild('textarea', { static: true }) ref: ElementRef | undefined;

  constructor(private injector: Injector, private cd: ChangeDetectorRef) {}

  /**
   * Минимальная высота поля
   */
  @Input() set minHeight(minHeight: number | undefined) {
    if (minHeight) {
      this.ngStyle = { ...this.ngStyle, ...{ 'min-height': minHeight + 'px' } };
    }
  }

  ngAfterViewInit(): void {
    const ngControl: NgControl = this.injector.get<any>(NgControl as any, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
      this.control.statusChanges
        .pipe(
          distinctUntilChanged((a, b) => a === b),
          takeUntil(this.destroy$),
        )
        .subscribe((status) => {
          if (status === 'DISABLED') {
            this.control?.disable();
          } else {
            this.control?.enable();
          }
          this.cd.markForCheck();
        });
    } else {
      console.warn('Textarea is not defined');
    }
  }

  private prepareValue(value: NgxmTextareaValue): string {
    if (this.maxLength) {
      return value.substring(0, this.maxLength);
    } else {
      return value;
    }
  }

  private changeHandler(ev: Event | KeyboardEvent): void {
    const target = ev.target as HTMLInputElement;
    this.change(this.prepareValue(target.value));
  }

  patchValue(value: NgxmTextareaValue): void {
    if (this.ref) {
      this.ref.nativeElement.value = this.prepareValue(value);
    }
    setTimeout(() => {
      this.cd.markForCheck();
    }, 100);
  }

  onChange(ev: Event) {
    this.changeHandler(ev);
  }

  onBlur() {
    this.blured = true;
  }

  onKeyUp(ev: KeyboardEvent) {
    this.changeHandler(ev);
  }

  change(value: NgxmTextareaValue) {
    this.cd.markForCheck();
    this.propagateChange(value);
  }

  propagateChange = (_: string) => {};

  touchedChange = (_: string) => {};

  writeValue(value: NgxmTextareaValue): void {
    this.patchValue(value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchedChange = fn;
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
