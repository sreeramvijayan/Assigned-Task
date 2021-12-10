import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchwizardTestComponent } from './archwizard-test.component';

describe('ArchwizardTestComponent', () => {
  let component: ArchwizardTestComponent;
  let fixture: ComponentFixture<ArchwizardTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchwizardTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchwizardTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
