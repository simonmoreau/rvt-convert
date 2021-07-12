import { BaseExportOptions } from "./base-export-options.class";

//
// Summary:
//     Represents a color in Autodesk Revit.
//
// Remarks:
//     Colors obtained from some API methods may represent an uninitialized/invalid
//     color. You can identify these using the IsValid property.
export class Color {
    //
    // Summary:
    //     Constructor that takes the red, green and blue channels of the color.
    //
    // Parameters:
    //   red:
    //     The red channel of the color that ranges from 0 to 255.
    //
    //   green:
    //     The green channel of the color that ranges from 0 to 255.
    //
    //   blue:
    //     The blue channel of the color that ranges from 0 to 255.
    constructor(red: number, green: number, blue: number) {
        this.Red = red;
        this.Green = green;
        this.Blue = blue;
    }


    //
    // Summary:
    //     Get the invalid Color whose IntegerValue is -1.
    public static InvalidColorValue: Color;


    //
    // Summary:
    //     Identifies if the color represents a valid color, or an uninitialized/invalid
    //     value.
    public IsValid: boolean = false;


    //
    // Summary:
    //     Get the blue channel of the color. Setting a channel is obsolete in Autodesk
    //     Revit 2013. Please create a new color instead.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.InvalidOperationException:
    //     When getting the value: the color is invalid or uninitialized.
    public Blue: number = 0;


    //
    // Summary:
    //     Get the green channel of the color. Setting a channel is obsolete in Autodesk
    //     Revit 2013. Please create a new color instead.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.InvalidOperationException:
    //     When getting the value: the color is invalid or uninitialized.
    public Green: number = 0;


    //
    // Summary:
    //     Get the red channel of the color. Setting a channel is obsolete in Autodesk Revit
    //     2013. Please create a new color instead.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.InvalidOperationException:
    //     When getting the value: the color is invalid or uninitialized.
    public Red: number = 0;
}

export enum ACADVersion {
    //
    // Summary:
    //     AutoCAD 2007 file format.
    R2007 = 3,
    //
    // Summary:
    //     AutoCAD 2010 file format.
    R2010 = 16,
    //
    // Summary:
    //     AutoCAD 2013 file format.
    R2013 = 22,
    //
    // Summary:
    //     The Autodesk Revit application's default export format.
    Default = 28,
    //
    // Summary:
    //     AutoCAD 2018 file format.
    R2018 = 28
}

export enum ExportUnit {
    //
    // Summary:
    //     Default export unit. Depends on Revit's current units.
    Default = 0,
    //
    // Summary:
    //     Inches in fractional notation.
    Inch = 1,
    //
    // Summary:
    //     Feet and Inches in fractional notation.
    Foot = 2,
    //
    // Summary:
    //     Millimeters as decimal values.
    Millimeter = 3,
    //
    // Summary:
    //     Centimeters as decimal values.
    Centimeter = 4,
    //
    // Summary:
    //     Meters as decimal values.
    Meter = 5
}

export enum ACAObjectPreference {
    Object = 0,
    Geometry = 1
}

export enum SolidGeometry {
    //
    // Summary:
    //     All visible solids are exported as polymesh.
    Polymesh = 0,
    //
    // Summary:
    //     All visible Revit Building geometry is exported as ACIS 3D solids (except for
    //     any elements that are already a polymesh.)
    ACIS = 1
}

export enum TextTreatment {
    //
    // Summary:
    //     Export texts as exact visual fidelity. Formatting intelligence will be lost.
    Exact = 0,
    //
    // Summary:
    //     Export texts as approximate visual fidelity. Formatting intelligence will be
    //     maintained.
    Approximate = 1
}

export enum LineScaling {
    //
    // Summary:
    //     Exporting lines as they were scaled by view scale. This option preserves visual
    //     fidelity.
    ViewScale = 0,
    //
    // Summary:
    //     Modelspace scaling. LTSCALE is set to view scale and PSLTSCALE to 0.
    ModelSpace = 1,
    //
    // Summary:
    //     Paperspace scaling. Specifies the value 1 for both LTSCALE and PSLTSCALE.
    PaperSpace = 2
}

//
// Summary:
//     The base class for options used to export DWG and DXF format files.
export class ACADExportOptions extends BaseExportOptions {

    constructor() {
        super();
    }
    //
    // Summary:
    //     The color that will be set as hatch backgound color on the exported hatch. This
    //     color will be used only if useHatchBackgroundColor is true. default value is
    //     white
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public HatchBackgroundColor: Color = new Color(0,0,0);


    //
    // Summary:
    //     Indicates if hatch background color will be used or not. default value is false.
    public UseHatchBackgroundColor: boolean = false;


    //
    // Summary:
    //     ACADVersion::Default Default value is ACADVersion.Default.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public FileVersion: ACADVersion = ACADVersion.Default;


    //
    // Summary:
    //     If the MarkNonplotLayers attribute is set to true, all layers with names containing
    //     this suffix will be marked as non-plot. No action will be performed if the suffix
    //     is empty.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public NonplotSuffix: string = '';


    //
    // Summary:
    //     If true and the nonplot layer suffix is not empty, all layers whose names contain
    //     that suffix will be marked as non-plot.
    //
    // Remarks:
    //     A typical use would be to mark as non-plot all layers containing -NPLT. Default
    //     value is false
    public MarkNonplotLayers: boolean = false;


    //
    // Summary:
    //     True to export area and room geometry, false otherwise. Default value is false.
    public ExportingAreas: boolean = false;


    //
    // Summary:
    //     True to use the shared coordinate system's origin, false to use the project origin.
    //     Default value is false.
    public SharedCoords: boolean = false;


    //
    // Summary:
    //     The target unit type. Default value is ExportUnit.Default.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public TargetUnit: ExportUnit = ExportUnit.Default;


    //
    // Summary:
    //     The preferred way to generate geometry of ACA objects. Default value is ACAObjectPreference.Object.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public ACAPreference: ACAObjectPreference = ACAObjectPreference.Object;


    //
    // Summary:
    //     The mode used to export solids in 3D views. Default value is SolidGeometry.Polymesh.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public ExportOfSolids: SolidGeometry = SolidGeometry.Polymesh;


    //
    // Summary:
    //     The text treatment. Deault value is TextTreatment.Exact.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public TextTreatment: TextTreatment = TextTreatment.Exact;


    //
    // Summary:
    //     The custom linetype file name (*.lin). Default value is empty.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public LinetypesFileName: string = '';


    //
    // Summary:
    //     The scaling mode for the line type. Default value is LineScaling.ViewScale.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public LineScaling: LineScaling = LineScaling.ViewScale;
}