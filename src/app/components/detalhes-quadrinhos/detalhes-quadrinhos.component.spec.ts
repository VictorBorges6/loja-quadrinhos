import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesQuadrinhosComponent } from './detalhes-quadrinhos.component';

describe('DetalhesQuadrinhosComponent', () => {
  let component: DetalhesQuadrinhosComponent;
  let fixture: ComponentFixture<DetalhesQuadrinhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesQuadrinhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesQuadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
