import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgeditComponent } from './imgedit.component';

describe('ImgeditComponent', () => {
  let component: ImgeditComponent;
  let fixture: ComponentFixture<ImgeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
