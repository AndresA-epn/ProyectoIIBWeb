import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateheladoComponent } from './createhelado.component';

describe('CreateheladoComponent', () => {
  let component: CreateheladoComponent;
  let fixture: ComponentFixture<CreateheladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateheladoComponent]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(CreateheladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
