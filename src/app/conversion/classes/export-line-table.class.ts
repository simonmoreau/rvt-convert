
//
// Summary:
//     A value used to represent the info stored in the Autodesk.Revit.DB.ExportLinetypeTable.
export class ExportLinetypeInfo {
    //
    // Summary:
    //     Constructs a new default ExportLinetypeInfo.
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
    //     The destination linetype name (the name of the linetype in the exported format).
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was NULL
    public DestinationLinetypeName: string;
}

//
// Summary:
//     A key used to represent an item stored in an Autodesk.Revit.DB.ExportLinetypeTable.
export class ExportLinetypeKey {
    //
    // Summary:
    //     Constructs a new default ExportLinetypeKey.
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
    //     The original linetype name.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was NULL
    public OriginalLinetypeName: string;
}

//
// Summary:
//     A table supporting a mapping of linetypes in Revit to linetype names that will
//     be set in the target export format.
//
// Remarks:
//     This table is structured as a mapping from Autodesk.Revit.DB.ExportLinetypeKey
//     to Autodesk.Revit.DB.ExportLinetypeInfo members. The Autodesk.Revit.DB.ExportLinetypeKey
//     contains the indentification information for the pattern table: the Revit linetype
//     name. The Autodesk.Revit.DB.ExportLinetypeInfo contains the linetype name to
//     use in the export format. The table can be accessed via direct iteration as a
//     collection of KeyValuePairs, or by traversal of the stored keys obtained from
//     GetKeys(), or via specific lookup of a key constructed externally. In all cases,
//     the Autodesk.Revit.DB.ExportLinetypeInfo returned will be a copy of the Autodesk.Revit.DB.ExportLinetypeInfo
//     from the table. In order to make changes to the Autodesk.Revit.DB.ExportLinetypeInfo
//     and use those settings during export, set the modified Autodesk.Revit.DB.ExportLinetypeInfo
//     back into the table using the same key.
/*[DefaultMember("Item")]*/
export class ExportLinetypeTable extends Map<ExportLinetypeKey, ExportLinetypeInfo> {

    private _exportLayerTable: Map<ExportLinetypeKey, ExportLinetypeInfo>;
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
    //     Inserts a (key, info) pair into Export line type table.
    //
    // Parameters:
    //   exportLinetypeKey:
    //     The export line type Key to be added.
    //
    //   exportLinetypeInfo:
    //     The export line type info to be added.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     The key already exists in the table.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was NULL
    public Add(exportLinetypeKey: ExportLinetypeKey | null, exportLinetypeInfo: ExportLinetypeInfo | null) : void {
        this._exportLayerTable.set(exportLinetypeKey, exportLinetypeInfo)
    }
    //
    // Summary:
    //     Removes all contents stored in Export line type table.
    public Clear() : void {
        this._exportLayerTable.clear();
    }
    //
    // Summary:
    //     Checks whether a pattern key exists in the table.
    //
    // Parameters:
    //   exportLinetypeKey:
    //     The export line type key.
    //
    // Returns:
    //     True if the line type exists in the table.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was NULL
    public ContainsKey(exportLinetypeKey: ExportLinetypeKey | null) : boolean {
        return this._exportLayerTable.has(exportLinetypeKey);
    }
    //
    // Summary:
    //     Gets a copy of the ExportLinetypeInfo corresponding to the given ExportLinetypeKey.
    //
    // Parameters:
    //   exportLinetypeKey:
    //     The export line type Key.
    //
    // Returns:
    //     Returns the line type info for this key.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     An entry with the given key is not present in the table.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was NULL
    public GetExportLinetypeInfo(exportLinetypeKey: ExportLinetypeKey | null) : ExportLinetypeInfo {
        return this._exportLayerTable.get(exportLinetypeKey);
    }
    //
    // Summary:
    //     Gets all the keys stored in the map.
    //
    // Returns:
    //     The keys.
    public GetKeys() : ExportLinetypeKey[] | null {
        return Array.from(this._exportLayerTable.keys());
    }
    //
    // Summary:
    //     Returns all the values stored in the map.
    //
    // Returns:
    //     The info.
    public GetValues() : ExportLinetypeInfo[] | null {
        return Array.from(this._exportLayerTable.values());
    }
    //
    // Summary:
    //     Removes the pair (key, info) corresponding to the given ExportLinetypeKey.
    //
    // Parameters:
    //   exportLinetypeKey:
    //     The export line type key
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was NULL
    public Remove(exportLinetypeKey: ExportLinetypeKey | null) : void {
        this._exportLayerTable.delete(exportLinetypeKey);
    }
}