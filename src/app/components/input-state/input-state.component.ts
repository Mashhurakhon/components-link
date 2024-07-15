import { InputState } from '../../models/input-state';
import { WordsService } from './../../services/words.service';
import { Component, EventEmitter, OnInit, output, Output } from '@angular/core';
@Component({
  selector: 'app-input-state',
  templateUrl: './input-state.component.html',
  styleUrl: './input-state.component.css'
})
export class InputStateComponent implements OnInit{
  public inputContent!: string;
  public isDisabledBtn: boolean = true;
  public val: string = 'focus';
  public datas!: InputState[];
  public words: InputState = {
    id: '',
    str: ''
  }

  @Output() exIsDisabled = new EventEmitter<boolean>();
  sendResult() {
    this.exIsDisabled.emit(this.isDisabledBtn);
  }
  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.getWordsQuery();
  }

  getWordsQuery() {
    this.wordsService.getWords()
    .subscribe(words => {
      this.datas = words;
    });
  }

  postWordsQuery() {
    this.words = {
      id: '',
      str: this.inputContent
    }
    this.wordsService.postWords(this.words)
    .subscribe(word => this.words)
  }
  addData() {
    // this.datas.push(this.inputContent);
  }
  errorData(){
    this.val = 'warn';
    return (this.inputContent.length <= 3); 
  }
  nums: string = '1234567890'
  warnData() {
    this.val = 'error';
    return (this.nums.includes(this.inputContent[0]));
  }
  inputData() {
    if(!this.warnData()) {
      this.val = 'warn';
      this.isDisabledBtn = true;
    }
    if(this.errorData()){
      this.val = 'error';
      this.isDisabledBtn = true;
    }
    if (!this.warnData() && !this.errorData()) {
      this.val = 'success';
      this.isDisabledBtn = false;
    }
  }
}

