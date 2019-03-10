import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyC25rv749hqh62o-QQnf4Wrg73HNDW9RIo',
      authDomain: 'books-df626.firebaseapp.com',
      databaseURL: 'https://books-df626.firebaseio.com',
      projectId: 'books-df626',
      storageBucket: '',
      messagingSenderId: '757232289252'
    };
    firebase.initializeApp(config);
  }
}
