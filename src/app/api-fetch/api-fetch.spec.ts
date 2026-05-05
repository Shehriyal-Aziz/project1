import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFetch } from './api-fetch';

describe('ApiFetch', () => {
  let component: ApiFetch;
  let fixture: ComponentFixture<ApiFetch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiFetch],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiFetch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
