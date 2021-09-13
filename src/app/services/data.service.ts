/*6.	Создать сервис для получения списка пользователей и перенести туда ранее созданный массив */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/User'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {  

  myUrl = 'https://jsonplaceholder.typicode.com/users';

  /*10.	Подключить HttpClient в сервисе (добавив его параметром конструктора) */
  constructor(private _http: HttpClient) { }
  /*11.	Добавить метод с get-запросом, который будет идти по ссылке и получать пользователей */
  getUsers() {   
    return this._http.get<User[]>(this.myUrl);
  }

  
}