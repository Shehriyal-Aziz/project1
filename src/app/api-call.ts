import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCall {

  data() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
}
