import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentosComponent } from './acompanhamentos.component';

describe('AcompanhamentosComponent', () => {
  let component: AcompanhamentosComponent;
  let fixture: ComponentFixture<AcompanhamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanhamentosComponent]
    });
    fixture = TestBed.createComponent(AcompanhamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
