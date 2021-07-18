import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionSetupLayerTableComponent } from './conversion-setup-layer-table.component';

describe('ConversionSetupLayerTableComponent', () => {
  let component: ConversionSetupLayerTableComponent;
  let fixture: ComponentFixture<ConversionSetupLayerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionSetupLayerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionSetupLayerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
