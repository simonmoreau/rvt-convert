import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionSetupPdfComponent } from './conversion-setup-pdf.component';

describe('ConversionSetupPdfComponent', () => {
  let component: ConversionSetupPdfComponent;
  let fixture: ComponentFixture<ConversionSetupPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionSetupPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionSetupPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
