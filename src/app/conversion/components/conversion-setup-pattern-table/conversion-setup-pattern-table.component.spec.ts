import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionSetupPatternTableComponent } from './conversion-setup-pattern-table.component';

describe('ConversionSetupPatternTableComponent', () => {
  let component: ConversionSetupPatternTableComponent;
  let fixture: ComponentFixture<ConversionSetupPatternTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionSetupPatternTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionSetupPatternTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
