import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionViewListComponent } from './conversion-view-list.component';

describe('ConversionViewListComponent', () => {
  let component: ConversionViewListComponent;
  let fixture: ComponentFixture<ConversionViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionViewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
