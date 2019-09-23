import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveTesterComponent } from './resolve-tester.component';

describe('ResolveTesterComponent', () => {
  let component: ResolveTesterComponent;
  let fixture: ComponentFixture<ResolveTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolveTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
