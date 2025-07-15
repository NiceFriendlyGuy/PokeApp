import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPoke } from './random-poke';

describe('RandomPoke', () => {
  let component: RandomPoke;
  let fixture: ComponentFixture<RandomPoke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomPoke]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPoke);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
