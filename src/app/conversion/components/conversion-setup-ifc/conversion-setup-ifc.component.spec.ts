import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionSetupIfcComponent } from './conversion-setup-ifc.component';

describe('ConversionSetupIfcComponent', () => {
  let component: ConversionSetupIfcComponent;
  let fixture: ComponentFixture<ConversionSetupIfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionSetupIfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionSetupIfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
