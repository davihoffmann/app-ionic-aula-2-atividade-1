import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaDetalhePage } from './pessoa-detalhe.page';

describe('PessoaDetalhePage', () => {
  let component: PessoaDetalhePage;
  let fixture: ComponentFixture<PessoaDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
