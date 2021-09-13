/*2.	Создать компонент списка пользователей */

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interface/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  /*4.	Создать в компоненте переменную под массив 
  пользователей и вручную добавить туда 2-3 пользователя */
  users$: User[] = [];
  pressed = false;
  /*7.	Подключить сервис в компоненте (добавив его параметром конструктора) */
  constructor(private dataService: DataService) {}

  ngOnInit() {
  /*8.	При загрузке компонента получать данные из сервиса и сохранять в переменную для отображения */
  /*12.	В компоненте вызвать этот метод и подписаться на результат выполнения запроса 
    13.	При получении ответа задать результат запроса в переменную для отображения*/
    return this.dataService.getUsers()
    .subscribe(data => this.users$ = data);
  }

  buttonHandle() {
    this.pressed = !this.pressed;
  }

  addUsers(array: any) {
    let indexes = this.users$.length + 1;
    array["id"] = indexes;
    this.users$.push(array);
    this.pressed = false;/*14.	Проверить что приложение работает корректно... Если убрать эту строку, айдишники добавленных пользователей 
    отображаются некорректно... Так я пофиксил проблему =) */
  }

}

