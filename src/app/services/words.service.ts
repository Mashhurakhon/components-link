import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InputState } from '../models/input-state';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private base: string = 'http://localhost:3000/words';

  constructor(private http: HttpClient) {}

  public postWords(word: InputState): Observable<InputState> {
    return this.http.post<InputState>(this.base, word);
  }

  public getWords(): Observable<InputState[]> {
    return this.http.get<InputState[]>(this.base);
  }

  public deleteWord(wordId: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${wordId}`);
  }
}
