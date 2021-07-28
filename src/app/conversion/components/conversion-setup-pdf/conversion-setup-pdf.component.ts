import { Component, OnInit } from '@angular/core';
import { ColorDepthType, ExportPaperFormat, PDFExportOptions, PDFExportQualityType, RasterQualityType } from '../../classes/pdf-export-options.class';

@Component({
  selector: 'app-conversion-setup-pdf',
  templateUrl: './conversion-setup-pdf.component.html',
  styleUrls: ['./conversion-setup-pdf.component.scss']
})
export class ConversionSetupPdfComponent implements OnInit {

  export: boolean = true;
  pdfExportConfiguration: PDFExportOptions;

  exportPaperFormatAttributes: ExportPaperFormatAttribute[] = ExportPaperFormatAttribute.ExportPaperFormats;
  rasterQualityTypeAttributes: RasterQualityTypeAttribute[] = RasterQualityTypeAttribute.RasterQualityTypes;
  colorDepthTypeAttributes: ColorDepthTypeAttribute[] = ColorDepthTypeAttribute.ColorDepthTypeAttributes;
  PDFExportQualityTypeAttributes: PDFExportQualityTypeAttribute[] = PDFExportQualityTypeAttribute.PDFExportQualityTypeAttributes;

  paperPlacementOffset: boolean = true;

  constructor() {
    this.pdfExportConfiguration = new PDFExportOptions();
  }

  ngOnInit(): void {
  }

}

export class ExportPaperFormatAttribute {
  static ExportPaperFormats: ExportPaperFormatAttribute[] = [
    { name: '<Use Sheet Size>', index: 0, value: ExportPaperFormat.Default },
    { name: 'ANSI A, 8.5 x 11 in', index: 1, value: ExportPaperFormat.ANSI_A },
    { name: 'ANSI B, 11 x 17 in', index: 2, value: ExportPaperFormat.ANSI_B },
    { name: 'ANSI C, 17 x 22 in', index: 3, value: ExportPaperFormat.ANSI_C },
    { name: 'ANSI D, 22 x 34 in', index: 4, value: ExportPaperFormat.ANSI_D },
    { name: 'ANSI E, 34 x 44 in', index: 5, value: ExportPaperFormat.ANSI_E },
    { name: 'ISO A4, 210 x 297 mm', index: 6, value: ExportPaperFormat.ISO_A4 },
    { name: 'ISO A3, 297 x 420 mm', index: 7, value: ExportPaperFormat.ISO_A3 },
    { name: 'ISO A2, 420 x 594 mm', index: 8, value: ExportPaperFormat.ISO_A2 },
    { name: 'ISO A1, 594 x 841 mm', index: 9, value: ExportPaperFormat.ISO_A1 },
    { name: 'ISO A0, 841 x 1189 mm', index: 10, value: ExportPaperFormat.ISO_A0 },
    { name: 'ISO B4, 250 x 353 mm', index: 11, value: ExportPaperFormat.ISO_B4 },
    { name: 'ISO B3, 353 x 500 mm', index: 12, value: ExportPaperFormat.ISO_B3 },
    { name: 'ISO B2, 500 x 707 mm', index: 13, value: ExportPaperFormat.ISO_B2 },
    { name: 'ISO B1, 707 x 1000 mm', index: 14, value: ExportPaperFormat.ISO_B1 },
    { name: 'ARCH A, 9 x 12 in', index: 15, value: ExportPaperFormat.ARCH_A },
    { name: 'ARCH B, 12 x 18 in', index: 16, value: ExportPaperFormat.ARCH_B },
    { name: 'ARCH C, 18 x 24 in', index: 17, value: ExportPaperFormat.ARCH_C },
    { name: 'ARCH D, 24 x 36 in', index: 18, value: ExportPaperFormat.ARCH_D },
    { name: 'ARCH E, 36 x 48 in', index: 19, value: ExportPaperFormat.ARCH_E },
    { name: 'ARCH E1, 30 x 42 in', index: 20, value: ExportPaperFormat.ARCH_E1 },
    { name: 'ARCH E2, 26 x 38 in', index: 21, value: ExportPaperFormat.ARCH_E2 },
    { name: 'ARCH E3, 27 x 39 in', index: 22, value: ExportPaperFormat.ARCH_E3 },
  ];
  name: string;
  index: number;
  value: ExportPaperFormat;
}

export class RasterQualityTypeAttribute {
  static RasterQualityTypes: RasterQualityTypeAttribute[] = [
    { name: 'The type of Raster Quality is Low.', index: 72, value: RasterQualityType.Low },
    { name: 'The type of Raster Quality is Medium.', index: 150, value: RasterQualityType.Medium },
    { name: 'The type of Raster Quality is High.', index: 300, value: RasterQualityType.High },
    { name: 'The type of Raster Quality is Presentation.', index: 600, value: RasterQualityType.Presentation },
  ];
  name: string;
  index: number;
  value: RasterQualityType;
}


export class ColorDepthTypeAttribute {
  static ColorDepthTypeAttributes: ColorDepthTypeAttribute[] = [
    { name: 'The type of Color Depth is Black Line.', index: 0, value: ColorDepthType.BlackLine },
    { name: 'The type of Color Depth is Gray Scale.', index: 1, value: ColorDepthType.GrayScale },
    { name: 'The type of Color Depth is Color.', index: 2, value: ColorDepthType.Color },
  ];
  name: string;
  index: number;
  value: ColorDepthType;
}

export class PDFExportQualityTypeAttribute {
  static PDFExportQualityTypeAttributes: PDFExportQualityTypeAttribute[] = [
    {name:'DPI72',index:72,value:PDFExportQualityType.DPI72},
    {name:'DPI144',index:144,value:PDFExportQualityType.DPI144},
    {name:'DPI300',index:300,value:PDFExportQualityType.DPI300},
    {name:'DPI600',index:600,value:PDFExportQualityType.DPI600},
    {name:'DPI1200',index:1200,value:PDFExportQualityType.DPI1200},
    {name:'DPI2400',index:2400,value:PDFExportQualityType.DPI2400},
    {name:'DPI3600',index:3600,value:PDFExportQualityType.DPI3600},
    {name:'DPI4000',index:4000,value:PDFExportQualityType.DPI4000},    
  ];
  name: string;
  index: number;
  value: PDFExportQualityType;
}