import {Component, EventEmitter, Output} from '@angular/core';
import {InputState} from "../../models/input-state";

@Component({
  selector: 'app-input-state',
  templateUrl: './input-state.component.html',
  styleUrls: ['./input-state.component.css']
})
export class InputStateComponent {
  /** Текстовое содержимое поля ввода */
  inputContent: string = '';

  /** Состояние поля ввода:
   * 'default','focus', 'warning', 'error', 'success'
   * */
  inputState: string = 'default';

  onFocus(): void {
    this.inputState = 'focus';
  }

  /**
   * Обработчик события потери фокуса полем ввода.
   * Определяет состояние поля ввода в зависимости от его содержимого.
   */
  onBlur(): void {
    if (this.inputContent === '') {
      this.inputState = 'default';
    } else if (this.inputContent.length < 3) {
      this.inputState = 'warning';
    } else {
      this.inputState = 'success';
    }
  }

  @Output() inputData = new EventEmitter<string>()

  exportData() {
    this.inputData.emit(this.inputContent);
  }
  /**
   * Возвращает текущее состояние поля ввода для установки класса стилей.
   * @returns {string} Текущее состояние поля ввода ('default', 'focus', 'warning', 'error', 'success').
   */
  getInputClass(): string {
    return this.inputState;
  }
}
