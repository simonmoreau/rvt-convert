import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionSetupComponent } from './conversion-setup.component';

describe('ConversionSetupComponent', () => {
  let component: ConversionSetupComponent;
  let fixture: ComponentFixture<ConversionSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
