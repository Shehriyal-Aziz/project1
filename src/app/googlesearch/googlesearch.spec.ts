import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Googlesearch } from './googlesearch';

describe('Googlesearch', () => {
  let component: Googlesearch;
  let fixture: ComponentFixture<Googlesearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Googlesearch],
    }).compileComponents();

    fixture = TestBed.createComponent(Googlesearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
