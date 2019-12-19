import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerDisplayComponent } from './inner-display.component';

describe('InnerDisplayComponent', () => {
  let component: InnerDisplayComponent;
  let fixture: ComponentFixture<InnerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
