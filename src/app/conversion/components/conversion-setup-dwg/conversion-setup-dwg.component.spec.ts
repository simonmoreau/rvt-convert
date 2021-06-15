import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionSetupDwgComponent } from './conversion-setup-dwg.component';

describe('ConversionSetupDwgComponent', () => {
  let component: ConversionSetupDwgComponent;
  let fixture: ComponentFixture<ConversionSetupDwgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionSetupDwgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionSetupDwgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
