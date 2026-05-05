import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
export interface User {
  name: string;
}

@Component({
  selector: 'app-googlesearch',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
    AsyncPipe,
  ],
  templateUrl: './googlesearch.html',
  styleUrl: './googlesearch.css',
})
export class Googlesearch {
  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: 'Google' }, { name: 'claude' }, { name: 'grok' }];
  filteredOptions: Observable<User[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) => option.name.toLowerCase().includes(filterValue));
  }
  search() {
  const value = this.myControl.value;
  const name = typeof value === 'string' ? value : value?.name;

  if (name === 'Google') {
    window.open('https://google.com', '_blank');
  } else if (name === 'claude') {
    window.open('https://claude.ai', '_blank');
  } else if (name === 'grok') {
    window.open('https://grok.com', '_blank');
  } else {
    alert('No such search engine found');
  }
}
}
