# Ngxm-input - simplify, lightweight all in one input for Angular.

See [demo page](https://maxouni.github.io/ngxm-input/).

##Features

- [x] Correct behavior show errors message by default
- [x] Password eye option
- [x] Loop type search icon
- [x] Style in css variables
- [x] Reactive form support
- [x] JS logic MaxLength

##Getting started

###Step 1: Install ng-select:

**NPM**
```npm
npm i --save ngxm-input
```

###Step 2: Import the NgxmInputModule and angular FormsModule module:
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxmInputModule } from '../../../ngxm-input/src/lib/ngxm-input.module';

@NgModule({
declarations: [AppComponent],
imports: [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  NgxmInputModule,
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
  <ngmx-input
    [label]="'Demo input'"
    [formControlName]="'testControl'"
  >
  </ngmx-input>
</form>
```

## API
### Inputs
| Input   | Type                           | Default | Required | Description                                 |
|---------|--------------------------------|---------| ----------- |---------------------------------------------|
| [type]  | text, number, password, search | text    | no | Type input                                  |
| [label] | string                         | null    | no | Label for input                             |
| [pattern] | string, RegExp                 | null    | no | Pattern validation                          |
| [enableLoop] | boolean                        | false   | no | Loop icon for search type input             |
| [enableEye] | boolean                        | false   | no | Eye icon logic for password type input      |
| [error] | string                         | null    | no | Error text                                  |
| [required] | boolean                        | false   | no | Required attribute and show * in label flag |
| [description] | string                         | null    | no | Description text                            |
| [formControlName] | string                         | null    | no | Control form angular                        |
| [placeholder] | string                         | null    | no | Placeholder text                            |
| [maxLength] | number                         | null    | no | Max-length parameter                        |
| [disableErrorMessage] | boolean                         | false   | no | Show/hide error message flag                |
