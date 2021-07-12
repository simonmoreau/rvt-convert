
export enum FillPatternTarget {
    //
    // Summary:
    //     Represents a material in symbolic form.
    Drafting = 0,
    //
    // Summary:
    //     Represents an actual element appearance on a building.
    Model = 1,
    None = 2
}

//
// Summary:
//     A key used to represent an item stored in an Autodesk.Revit.DB.ExportPatternTable.
export class ExportPatternKey {
    //
    // Summary:
    //     Constructs a new default ExportPatternKey.
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
    //     The original FillPattern name.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was NULL
    public OriginalFillPatternName: string;
    //
    // Summary:
    //     The original FillPattern type.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public OriginalFillPatternType: FillPatternTarget;

}

//
// Summary:
//     A value used to represent the info stored in the Autodesk.Revit.DB.ExportPatternTable.
export class ExportPatternInfo {
    //
    // Summary:
    //     Constructs a new default ExportPatternInfo.
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
    //     The destination pattern name (the name of the pattern in the exported format).
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was NULL
    public DestinationPatternName: string;
}

//
// Summary:
//     A table supporting a mapping of FillPatterns in Revit to pattern names that will
//     be set in the target export format.
//
// Remarks:
//     This table is structured as a mapping from Autodesk.Revit.DB.ExportPatternKey
//     to Autodesk.Revit.DB.ExportPatternInfo members. The Autodesk.Revit.DB.ExportPatternKey
//     contains the indentification information for the pattern table: the Revit fill
//     pattern type and name. The Autodesk.Revit.DB.ExportPatternInfo contains the pattern
//     name to use in the export format. The table can be accessed via direct iteration
//     as a collection of KeyValuePairs, or by traversal of the stored keys obtained
//     from GetKeys(), or via specific lookup of a key constructed externally. In all
//     cases, the Autodesk.Revit.DB.ExportPatternInfo returned will be a copy of the
//     Autodesk.Revit.DB.ExportPatternInfo from the table. In order to make changes
//     to the Autodesk.Revit.DB.ExportPatternInfo and use those settings during export,
//     set the modified Autodesk.Revit.DB.ExportPatternInfo back into the table using
//     the same key.
/*[DefaultMember("Item")]*/ export class ExportPatternTable extends Map < ExportPatternKey, ExportPatternInfo > {


    private _exportPatternTable: Map<ExportPatternKey, ExportPatternInfo>;
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
    //     Inserts a (key,info) pair into Export pattern table.
    //
    // Parameters:
    //   exportPatternKey:
    //     The export pattern key to be added.
    //
    //   exportPatternInfo:
    //     The export pattern info to be added.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     The key already exists in the table.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was NULL
    public Add(exportPatternKey: ExportPatternKey | null, exportPatternInfo: ExportPatternInfo | null) : void {
        this._exportPatternTable.set(exportPatternKey,exportPatternInfo);
    }
    //
    // Summary:
    //     Removes all contents stored in the table.
    public Clear() : void {
        this._exportPatternTable.clear();
    }
    //
    // Summary:
    //     Checks whether a pattern key exists in the table.
    //
    // Parameters:
    //   exportpatternKey:
    //     The export pattern Key.
    //
    // Returns:
    //     True if the pattern key exists in the table.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was NULL
    public ContainsKey(exportpatternKey: ExportPatternKey | null) : boolean {
        return this._exportPatternTable.has(exportpatternKey);
    }
    //
    // Summary:
    //     Gets a copy of the pattern info associated to the input pattern key.
    //
    // Parameters:
    //   exportPatternKey:
    //     The export pattern Key.
    //
    // Returns:
    //     Return the patternInfo for this key.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     An entry with the given key is not present in the table.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was NULL
    public GetExportPatternInfo(exportPatternKey: ExportPatternKey | null) : ExportPatternInfo {
        return this._exportPatternTable.get(exportPatternKey);
    }
    //
    // Summary:
    //     Gets all the keys stored in the map.
    //
    // Returns:
    //     Return the key array.
    public GetKeys() : ExportPatternKey[] | null {
        return Array.from(this._exportPatternTable.keys());
    }
    //
    // Summary:
    //     Returns all the values stored in the map.
    //
    // Returns:
    //     Return the info array.
    public GetValues() : ExportPatternInfo[] | null {
        return Array.from(this._exportPatternTable.values());
    }
    //
    // Summary:
    //     Removes the pair (key, info) by pattern key.
    //
    // Parameters:
    //   exportPatternKey:
    //     The export pattern key.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was NULL
    public Remove(exportPatternKey: ExportPatternKey | null) : void {
        this._exportPatternTable.delete(exportPatternKey);
    }
}