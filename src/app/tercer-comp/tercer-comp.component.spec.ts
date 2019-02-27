import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerCompComponent } from './tercer-comp.component';

describe('TercerCompComponent', () => {
  let component: TercerCompComponent;
  let fixture: ComponentFixture<TercerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercerCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
