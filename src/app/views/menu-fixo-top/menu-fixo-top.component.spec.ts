import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFixoTopComponent } from './menu-fixo-top.component';

describe('MenuFixoTopComponent', () => {
  let component: MenuFixoTopComponent;
  let fixture: ComponentFixture<MenuFixoTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFixoTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFixoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
