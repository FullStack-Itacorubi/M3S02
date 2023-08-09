import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosCadastroComponent } from './alunos-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AlunosCadastroComponent', () => {
  let component: AlunosCadastroComponent;
  let fixture: ComponentFixture<AlunosCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosCadastroComponent],
      imports: [ReactiveFormsModule, HttpClientModule]
    });
    fixture = TestBed.createComponent(AlunosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
