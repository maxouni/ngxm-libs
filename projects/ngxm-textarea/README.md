# Ngxm-textarea - simplify, lightweight textarea for Angular.

See [demo page](https://maxouni.github.io/ngxm-libs/ngxm-input/).

##Features

- [x] Correct behavior show errors message by default
- [x] Style in css variables
- [x] Reactive form support
- [x] JS logic MaxLength

##Getting started

###Step 1: Install:

**NPM**
```npm
npm i --save ngxm-textarea
```

###Step 2: Import the NgxmTextareaModule and angular FormsModule module:
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxmTextareaModule } from '../../../ngxm-textarea/src/lib/ngxm-textarea.module';

@NgModule({
declarations: [AppComponent],
imports: [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  NgxmTextareaModule,
  FormsModule,
],
bootstrap: [AppComponent],
})
export class AppModule {}
```

**Usage**
```angular2html
<form [formGroup]="form" class="demo-box">
  <h1>Example</h1>
  <ngmx-textarea
    [label]="'Demo textarea'"
    [formControlName]="'testControl'"
  >
  </ngmx-textarea>
</form>
```

## API
### Inputs
| Input   | Type                           | Default | Required | Description                                 |
|---------|--------------------------------|---------| ----------- |---------------------------------------------|
| [label] | string                         | null    | no | Label for input                             |
| [error] | string                         | null    | no | Error text                                  |
| [required] | boolean                        | false   | no | Required attribute and show * in label flag |
| [description] | string                         | null    | no | Description text                            |
| [formControlName] | string                         | null    | no | Control form angular                        |
| [placeholder] | string                         | null    | no | Placeholder text                            |
| [maxLength] | number                         | null    | no | Max-length parameter                        |
| [disableErrorMessage] | boolean                         | false   | no | Show/hide error message flag                |
