import {Component, OnInit} from '@angular/core';
import {WordsService} from "./services/words.service";
import {InputState} from "./models/input-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  /** Массив данных для отображения в списке */
  datas: InputState[] = [];

  constructor(
    private wordsService: WordsService) {
  }

  /**
   * Отправляет данные поля ввода на сервер.
   * Получает текущее значение поля ввода из компонента InputStateComponent,
   * формирует объект InputState и отправляет его на сервер.
   */
  postData(): void {
    const inputValue = '';
    const inputData: InputState = {id: '', str: inputValue};

    this.wordsService.postWords(inputData).subscribe((response: InputState) => {
      this.getWords();
      // Вызываем этот метод чтоб обновить список данных...
    });
  }

  /**
   * Получает список данных с сервера и обновляет массив datas.
   * Вызывается после успешного получения данных от сервера.
   */
  getWords(): void {
    this.wordsService.getWords().subscribe((words: InputState[]) => {
      this.datas = words;
    });
  }
}
