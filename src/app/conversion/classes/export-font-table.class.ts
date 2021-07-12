
//
// Summary:
//     A key used to represent an item stored in an Autodesk.Revit.DB.ExportFontTable.
export class ExportFontKey {
    //
    // Summary:
    //     Constructs a new default ExportFontKey.
    constructor() {

    }
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
    //     The original font name.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public OriginalFontName: string;
}

//
// Summary:
//     A value used to represent the info stored in an Autodesk.Revit.DB.ExportFontTable.
export class ExportFontInfo  {
    //
    // Summary:
    //     Constructs a new default ExportFontInfo.
    constructor() {

    }
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
    //     The destination font name (the name of the font in the exported format).
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public DestinationFontName: string;
}


//
// Summary:
//     A table supporting a mapping of Revit font names to font names that will be set
//     in the target export format.
//
// Remarks:
//     This table is structured as a mapping from Autodesk.Revit.DB.ExportFontKey to
//     Autodesk.Revit.DB.ExportFontInfo members. The Autodesk.Revit.DB.ExportFontKey
//     contains the identification information for the font table: the Revit font name.
//     The Autodesk.Revit.DB.ExportFontInfo contains the font name to use in the export
//     format. The table can be accessed via direct iteration as a collection of KeyValuePairs,
//     or by traversal of the stored keys obtained from GetKeys(), or via specific lookup
//     of a key constructed externally. In all cases, the Autodesk.Revit.DB.ExportFontInfo
//     returned will be a copy of the Autodesk.Revit.DB.ExportFontInfo from the table.
//     In order to make changes to the Autodesk.Revit.DB.ExportFontInfo and use those
//     settings during export, set the modified Autodesk.Revit.DB.ExportFontInfo back
//     into the table using the same key.Collection < [ExportFontKey, ExportFontInfo] >
/*[DefaultMember("Item")]*/ export class ExportFontTable extends Map<ExportFontKey, ExportFontInfo>{

    private _exportFontTable: Map<ExportFontKey, ExportFontInfo>;
    //
    // Summary:
    //     Count of the items contained in the collection.
    public Count: number = 0;
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
    //     Inserts a (key,info) pair into Export font table.
    //
    // Parameters:
    //   exportFontKey:
    //     The export font key to be added.
    //
    //   exportFontInfo:
    //     The export font info to be added.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     The key already exists in the table.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public Add(exportFontKey: ExportFontKey | null, exportFontInfo: ExportFontInfo | null) : void {
        this._exportFontTable.set(exportFontKey,exportFontInfo);
    }
    //
    // Summary:
    //     Removes all contents stored in the table.
    public Clear() : void {
        this._exportFontTable.clear();
    }
    //
    // Summary:
    //     Checks whether a font key exists in the table.
    //
    // Parameters:
    //   exportfontKey:
    //     The export font Key.
    //
    // Returns:
    //     True if the font key exists in the table.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public ContainsKey(exportfontKey: ExportFontKey | null) : boolean {
        return this._exportFontTable.has(exportfontKey);
    }
    //
    // Summary:
    //     Gets a copy of the font info associated to the input font key.
    //
    // Parameters:
    //   exportFontKey:
    //     The export font Key.
    //
    // Returns:
    //     Returns the fontInfo for this key.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     An entry with the given key is not present in the table.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public GetExportFontInfo(exportFontKey: ExportFontKey | null) : ExportFontInfo {
        return this._exportFontTable.get(exportFontKey);
    }
    //
    // Summary:
    //     Returns a collection of the keys stored in this table.
    //
    // Returns:
    //     The collection of keys.
    public GetKeys() : Array<ExportFontKey> | null {
        return Array.from(this._exportFontTable.keys());
    }
    //
    // Summary:
    //     Returns a collection of the values stored in this table.
    //
    // Returns:
    //     The collection of values.
    public GetValues() : Array<ExportFontInfo> | null {
        return Array.from(this._exportFontTable.values());
    }
    //
    // Summary:
    //     Removes the pair (key, info) by font key.
    //
    // Parameters:
    //   exportFontKey:
    //     The export font key.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public Remove(exportFontKey: ExportFontKey | null) : void {
        this._exportFontTable.delete(exportFontKey);
    }
}