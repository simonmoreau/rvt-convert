export enum ExportPaperFormat {
    //
    // Summary:
    //     Default paper format.
    //
    // Remarks:
    //     Default size depends on the sheet set going to be exported. If all sheets are
    //     of type DrawingSheet, then paper sizes are properly adjusted to their respective
    //     content with zoom level set to 100%. If views of type other than DrawingSheet
    //     are in the export set, the default paper size is UI-Letter and zoom is set to
    //     fit-the-page.
    Default = 0,
    //
    // Summary:
    //     ANSI A, 8.5 x 11 in
    ANSI_A = 1,
    //
    // Summary:
    //     ANSI B, 11 x 17 in
    ANSI_B = 2,
    //
    // Summary:
    //     ANSI C, 17 x 22 in
    ANSI_C = 3,
    //
    // Summary:
    //     ANSI D, 22 x 34 in
    ANSI_D = 4,
    //
    // Summary:
    //     ANSI E, 34 x 44 in
    ANSI_E = 5,
    //
    // Summary:
    //     ISO A4, 210 x 297 mm
    ISO_A4 = 6,
    //
    // Summary:
    //     ISO A3, 297 x 420 mm
    ISO_A3 = 7,
    //
    // Summary:
    //     ISO A2, 420 x 594 mm
    ISO_A2 = 8,
    //
    // Summary:
    //     ISO A1, 594 x 841 mm
    ISO_A1 = 9,
    //
    // Summary:
    //     ISO A0, 841 x 1189 mm
    ISO_A0 = 10,
    //
    // Summary:
    //     ISO B4, 250 x 353 mm
    ISO_B4 = 11,
    //
    // Summary:
    //     ISO B3, 353 x 500 mm
    ISO_B3 = 12,
    //
    // Summary:
    //     ISO B2, 500 x 707 mm
    ISO_B2 = 13,
    //
    // Summary:
    //     ISO B1, 707 x 1000 mm
    ISO_B1 = 14,
    //
    // Summary:
    //     ARCH A, 9 x 12 in
    ARCH_A = 15,
    //
    // Summary:
    //     ARCH B, 12 x 18 in
    ARCH_B = 16,
    //
    // Summary:
    //     ARCH C, 18 x 24 in
    ARCH_C = 17,
    //
    // Summary:
    //     ARCH D, 24 x 36 in
    ARCH_D = 18,
    //
    // Summary:
    //     ARCH E, 36 x 48 in
    ARCH_E = 19,
    //
    // Summary:
    //     ARCH E1, 30 x 42 in
    ARCH_E1 = 20,
    //
    // Summary:
    //     ARCH E2, 26 x 38 in
    ARCH_E2 = 21,
    //
    // Summary:
    //     ARCH E3, 27 x 39 in
    ARCH_E3 = 22
}

export enum ZoomType {
    //
    // Summary:
    //     The type of Zoom is Fit To Page.
    FitToPage = 0,
    //
    // Summary:
    //     The type of Zoom is user defined.
    Zoom = 1
}

export enum RasterQualityType {
    //
    // Summary:
    //     The type of Raster Quality is Low.
    Low = 72,
    //
    // Summary:
    //     The type of Raster Quality is Medium.
    Medium = 150,
    //
    // Summary:
    //     The type of Raster Quality is High.
    High = 300,
    //
    // Summary:
    //     The type of Raster Quality is Presentation.
    Presentation = 600
}

export enum PDFExportQualityType {
    DPI72 = 72,
    DPI144 = 144,
    DPI300 = 300,
    DPI600 = 600,
    DPI1200 = 1200,
    DPI2400 = 2400,
    DPI3600 = 3600,
    DPI4000 = 4000
}

export enum ColorDepthType {
    //
    // Summary:
    //     The type of Color Depth is Black Line.
    BlackLine = 0,
    //
    // Summary:
    //     The type of Color Depth is Gray Scale.
    GrayScale = 1,
    //
    // Summary:
    //     The type of Color Depth is Color.
    Color = 2
}

export enum PaperPlacementType {
    //
    // Summary:
    //     The type of Paper Placement is Center.
    Center = 0,
    //
    // Summary:
    //     The type of Paper Placement is LowerLeft.
    LowerLeft = 1,
    //
    // Summary:
    //     The type of Paper Placement is Margins. It's obsolete, use LowerLeft instead.
    Margins = 1
}

export enum PageOrientationType {
    //
    // Summary:
    //     The type of Page Orientation is Portrait
    Portrait = 0,
    //
    // Summary:
    //     The type of Page Orientation is Landscape
    Landscape = 1,
    //
    // Summary:
    //     Auto Page Orientation
    Auto = 2
}

//
// Summary:
//     Options for PDF export
export class PDFExportOptions {
    //
    // Summary:
    //     Creates a default options object.
    constructor() {

    }
    //
    // Summary:
    //     Paper format.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: The input paper format is invalid
    //
    // Remarks:
    //     When the PaperFormat is ExportPaperFormat.Default, which means "Use Sheet Size".
    public PaperFormat: ExportPaperFormat = ExportPaperFormat.Default;
    //
    // Summary:
    //     If true completely use raster processing for graphics, otherwise use vector processing
    //     as much as possible.
    public AlwaysUseRaster: boolean = false;
    //
    // Summary:
    //     Zoom type of either fit to page or on a specific percentage.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    //
    // Remarks:
    //     This property would be ignored if the PaperFormat is Default.
    public ZoomType: ZoomType = ZoomType.FitToPage;
    //
    // Summary:
    //     Percentage of the zoom for the view.
    //
    // Remarks:
    //     This property would be ignored if the ZoomType is FitToPage.
    public ZoomPercentage: number = 0;
    //
    // Summary:
    //     The preferred raster quality (DPI).
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public RasterQuality: RasterQualityType = RasterQualityType.High;
    //
    // Summary:
    //     The preferred export quality (DPI).
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    //
    // Remarks:
    //     This quality setting is the equivalent of printer resolution found in advanced
    //     printer settings. An effect of the setting is to control tessellation quality.
    public ExportQuality: PDFExportQualityType = PDFExportQualityType.DPI600;
    //
    // Summary:
    //     Color depth of either black/white, gray scale or color.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public ColorDepth: ColorDepthType = ColorDepthType.Color;
    //
    // Summary:
    //     Paper placement of either center or offset from corner.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public PaperPlacement: PaperPlacementType = PaperPlacementType.Center;
    //
    // Summary:
    //     Offset between left sides of pdf content and paper. Always stored in unit of
    //     Feet.
    public OriginOffsetX: number = 0;
    //
    // Summary:
    //     Offset between bottom sides of pdf content and paper. Always stored in unit of
    //     Feet.
    public OriginOffsetY: number = 0;
    //
    // Summary:
    //     Whether set view links blue.
    //
    // Remarks:
    //     If true, links will be visible as blue. If false, they retain their default text
    //     color.
    public ViewLinksInBlue: boolean = false;
    //
    // Summary:
    //     Whether to hide crop boundaries.
    public HideCropBoundaries: boolean = false;
    //
    // Summary:
    //     Whether to hide reference/work planes.
    public HideReferencePlane: boolean = true;
    //
    // Summary:
    //     Whether to hide unreferenced view tags.
    public HideUnreferencedViewTags: boolean = false;
    //
    // Summary:
    //     Whether to hide scope boxes.
    public HideScopeBoxes: boolean = false;
    //
    // Summary:
    //     Whether to mask coincident lines.
    public MaskCoincidentLines: boolean = false;
    //
    // Summary:
    //     Whether to replace halftone with thin lines.
    public ReplaceHalftoneWithThinLines: boolean = false;
    //
    // Summary:
    //     Whether export process should stop when a view fails to export
    public StopOnError: boolean = false;
    //
    // Summary:
    //     Whether export all views and sheets into one PDF file or multiple files.
    //
    // Remarks:
    //     If true, all exported views and sheets will be exported into one PDF file, whose
    //     file name would be specified by Autodesk.Revit.DB.PDFExportOptions.FileName.
    //     If false, each exported view and sheet will have its own PDF file created, whose
    //     file name would be generated with NamingRule.
    public Combine: boolean = false;
    //
    // Summary:
    //     Specifies whether the .NET object represents a valid Revit entity.
    //
    // Returns:
    //     True if the API object holds a valid Revit native object, false otherwise.
    //
    // Remarks:
    //     If the corresponding Revit native object is destroyed, or creation of the corresponding
    //     object is undone, a managed API object containing it is no longer valid. API
    //     methods cannot be called on invalidated wrapper objects.
    public IsValidObject: boolean = false;
    //
    // Summary:
    //     Paper orientation - Portrait/Landscape/Auto
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    //
    // Remarks:
    //     Ignored when the PaperFormat is ExportPaperFormat.Default, which means "Use Sheet
    //     Size".
    public PaperOrientation: PageOrientationType = PageOrientationType.Auto;
    //
    // Summary:
    //     File name of the PDF when Autodesk.Revit.DB.PDFExportOptions.Combine is true.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    //
    // Remarks:
    //     PDF file extension (".pdf") would be automatically appended to the result file.
    //     When Autodesk.Revit.DB.PDFExportOptions.Combine is false, this would be ignored.
    public FileName: string;
    //
    // Summary:
    //     Whether naming rule is valid or not.
    //
    // Parameters:
    //   namingRule:
    //     The naming rule to be validated.
    //
    // Returns:
    //     Whether or not the name is valid.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    //
    // Remarks:
    //     If true, this naming rule is a valid. If false, this naming rule is not valid
    //     for empty naming rule or illegal characters, such as
    //     \ / : * ? " < > |
    //     .
    // public static IsValidNamingRule(namingRule: Array<TableCellCombinedParameterData> | null) : boolean;
    //
    // Summary:
    //     Gets a copy of the naming rule.
    //
    // Returns:
    //     The naming rule.
    // public GetNamingRule() : Array<TableCellCombinedParameterData> | null;
    //
    // Summary:
    //     Sets the naming rule.
    //
    // Parameters:
    //   namingRule:
    //     The naming rule.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     The namingRule is empty or contains illegal characters.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    // public SetNamingRule(namingRule: Array<TableCellCombinedParameterData> | null) : void;
}