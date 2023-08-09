import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosComponent } from './alunos.component';
import { HttpClientModule } from '@angular/common/http';

describe('AlunosComponent', () => {
  let component: AlunosComponent;
  let fixture: ComponentFixture<AlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(AlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
