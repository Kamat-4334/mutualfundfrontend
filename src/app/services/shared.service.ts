import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private usernameSubject$ = new BehaviorSubject<any>('')
  username$ = this.usernameSubject$.asObservable()

  constructor() { }
  setUsername(username:string){
    this.usernameSubject$.next(username);

  }
}
