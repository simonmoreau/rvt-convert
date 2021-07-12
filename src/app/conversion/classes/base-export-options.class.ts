import { ExportFontTable } from "./export-font-table.class";
import { ExportLayerTable } from "./export-layer-table.class";


export enum ExportColorMode {
    //
    // Summary:
    //     All colors from the Revit project will be set to the closest of the 255 AutoCAD
    //     Color Index colors.
    IndexColors = 0,
    //
    // Summary:
    //     All colors from the Revit project will be exported as 24-bit RGB values as specified
    //     in object styles.
    TrueColor = 1,
    //
    // Summary:
    //     All colors from the Revit project will be exported as 24-bit RGB values as specified
    //     in view.
    TrueColorPerView = 2
}

export enum PropOverrideMode {
    //
    // Summary:
    //     Category properties BYLAYER, overrides BYENTITY. Entities generated by a specific
    //     category are assigned to a layer accordingly to the layer settings. To preserve
    //     visual fidelity, overridden attributes result in entity-specific attributes
    ByEntity = 0,
    //
    // Summary:
    //     All properties BYLAYER, no overrides Forces all entities to follow visual properties
    //     as set by their layer. Visual fidelity is lost, but this produces the least number
    //     of layers while still providing by-layer control over exported entities.
    ByLayer = 1,
    //
    // Summary:
    //     All properties BYLAYER, New Layers for overrides. Visual fidelity is preserved
    //     and there is by-layer control over all entities, although number of layers in
    //     the exported file might be increased.
    NewLayer = 2
}

//
// Summary:
//     The base class for options used to export DWG, DXF and DGN format files.
export class BaseExportOptions {
    //
    // Summary:
    //     How to export overridden object styles. Default value is PropOverrideMode.ByEntity.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public PropOverrides: PropOverrideMode;
    //
    // Summary:
    //     Whether or not to hide the scope box. Default value is false.
    public HideScopeBox: boolean = false;
    //
    // Summary:
    //     Whether or not to hide reference planes. Default value is false.
    public HideReferencePlane: boolean = false;
    //
    // Summary:
    //     Whether or not to hide unreference view tags. Default value is false.
    public HideUnreferenceViewTags: boolean = false;
    //
    // Summary:
    //     Whether or not to preserve coincident lines. Default value is false.
    public PreserveCoincidentLines: boolean = false;
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
    //     Name of a layer settings standard or filename (with custom layer settings). Valid
    //     standards are: DGNV7 (only for DGN), AIA, CP83, BS1192, and ISO13567. default
    //     value is "" (empty) which means if no value is set, if no value is set, Revit
    //     will use a default value according to the localization.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public LayerMapping: string;
    //
    // Summary:
    //     Export color mode. Default value is ExportColorMode.IndexColors.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public Colors: ExportColorMode;
    //
    // Summary:
    //     Custom hatch patterns (pat) file name.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public HatchPatternsFileName: string;
    //
    // Summary:
    //     Returns a list of names of predefined setups of export options.
    //
    // Parameters:
    //   document:
    //     A Revit document to retrieve names from.
    //
    // Returns:
    //     An array of strings representing names of predefined setups.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     document is not a project document.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    //
    // Remarks:
    //     The predefined setups may be used for export to both DWG and DXF formats. To
    //     get predefined options in the desired format use the static method getPredefinedOptions
    //     defined in DWGExportOptions or DXFExportOptions respectively.
    public static GetPredefinedSetupNames(document: Document | null) : Array<string> | null;

    private _exportFontTable: ExportFontTable;
    //
    // Summary:
    //     Gets font table.
    public GetExportFontTable() : ExportFontTable {
        return this._exportFontTable;
    }

    private _exportLayerTable: ExportLayerTable;
    //
    // Summary:
    //     Gets the layer table.
    //
    // Returns:
    //     The layer table.
    public GetExportLayerTable() : ExportLayerTable {
        return this._exportLayerTable;
    }
    //
    // Summary:
    //     Gets a copy of the line type table.
    //
    // Returns:
    //     The line type table.
    public GetExportLinetypeTable() : ExportLinetypeTable;
    //
    // Summary:
    //     Gets a copy of the pattern table.
    //
    // Returns:
    //     The pattern table.
    public GetExportPatternTable() : ExportPatternTable;
    //
    // Summary:
    //     Sets font table to option.
    //
    // Parameters:
    //   fontTable:
    //     The font table to be set.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public SetExportFontTable(fontTable: ExportFontTable | null) : void;
    //
    // Summary:
    //     Sets layer table back to option
    //
    // Parameters:
    //   layerTable:
    //     The layer table to be set
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public SetExportLayerTable(layerTable: ExportLayerTable | null) : void;
    //
    // Summary:
    //     Sets the line type table to use during export.
    //
    // Parameters:
    //   linetypeTable:
    //     The line type table to be set.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public SetExportLinetypeTable(linetypeTable: ExportLinetypeTable | null) : void;
    //
    // Summary:
    //     Sets the pattern table to use during export.
    //
    // Parameters:
    //   patternTable:
    //     The pattern table to be set.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public SetExportPatternTable(patternTable: ExportPatternTable | null) : void;
}