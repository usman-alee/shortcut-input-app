import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'shortcut-input',
  standalone: true,
  templateUrl: './shortcut-input.component.html',
  styleUrls: ['./shortcut-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ShortcutInputComponent),
      multi: true,
    },
  ],
})
export class ShortcutInputComponent implements ControlValueAccessor {
  @Input() modifiers: string[] = [];
  @Input() set ngModel(value: string) {
    this.writeValue(value);
  }
  @Output() ngModelChange = new EventEmitter<string>();

  value: string = '';
  lastValidValue: string = '';
  isFocused: boolean = false;
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private elementRef: ElementRef) {}

  @HostListener('focus')
  onFocus() {
    this.isFocused = true;
    this.onTouched();
  }

  @HostListener('blur')
  onBlur() {
    this.isFocused = false;
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    event.preventDefault();
    const key = event.key;

    if (this.isModifier(key) && !this.value.includes(key)) {
      this.value += `${key}+`;
    } else if (!this.isModifier(key)) {
      this.value += key;
      this.validateAndEmit();
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    const key = event.key;
    if (!this.isModifier(key)) {
      this.validateShortcut();
    }
  }

  writeValue(value: string): void {
    this.value = value;
    this.lastValidValue = this.getValidShortcut(value) || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.elementRef.nativeElement.disabled = isDisabled;
  }

  private isModifier(key: string): boolean {
    return this.modifiers.includes(key);
  }

  private getValidShortcut(shortcut: string): string | null {
    const validShortcuts = ['ControlShiftA', 'ShiftA'];
    return validShortcuts.find((s) => shortcut.endsWith(s)) || null;
  }

  private validateAndEmit() {
    const validShortcut = this.getValidShortcut(this.value);
    if (validShortcut) {
      this.ngModelChange.emit(validShortcut);
      this.onChange(validShortcut);
      this.lastValidValue = validShortcut;
      this.value = validShortcut;
    }
  }

  private validateShortcut() {
    const validShortcut = this.getValidShortcut(this.value);
    if (validShortcut) {
      this.lastValidValue = validShortcut;
      this.value = validShortcut;
    } else {
      this.value = this.lastValidValue;
    }
  }
}
