import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentogoogleComponent } from './pagamentogoogle.component';

describe('PagamentogoogleComponent', () => {
  let component: PagamentogoogleComponent;
  let fixture: ComponentFixture<PagamentogoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentogoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentogoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
