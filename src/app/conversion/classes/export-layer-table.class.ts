export enum SpecialType {
    //
    // Summary:
    //     The default value for most Revit categories and subcategories.
    Default = -1,
    //
    // Summary:
    //     The special type representing interior walls.
    InteriorWall = 1,
    //
    // Summary:
    //     The special type representing exterior walls.
    ExteriorWall = 2,
    //
    // Summary:
    //     The special type representing foundation walls.
    FoundationWall = 3,
    //
    // Summary:
    //     The special type representing retaining walls.
    RetainingWall = 4
}

export enum LayerCategoryType {
    //
    // Summary:
    //     A default unsorted type.
    Unsorted = -1,
    //
    // Summary:
    //     Model categories.
    Model = 0,
    //
    // Summary:
    //     Annotation categories.
    Annotation = 1,
    //
    // Summary:
    //     AnalyticalModel categories.
    AnalyticalModel = 2,
    //
    // Summary:
    //     Imported categories.
    Imported = 3,
    //
    // Summary:
    //     A special value related to modifiers.
    Modifier = 4
}

export enum ModifierType {
    //
    // Summary:
    //     An unknown (default) type of modifier, not acceptable for assignment.
    UnknownType = -1,
    //
    // Summary:
    //     Signals that the name of the category will appear in the layer name.
    Category = 0,
    //
    // Summary:
    //     Signals that the first custom string will appear in the layer name.
    Custom1 = 1,
    //
    // Summary:
    //     Signals that the second custom string will appear in the layer name.
    Custom2 = 2,
    //
    // Summary:
    //     Signals that the third custom string will appear in the layer name.
    Custom3 = 3,
    //
    // Summary:
    //     Signals that the value of fire rating will appear in the layer name.
    FireRating = 4,
    //
    // Summary:
    //     Signals that the value of function will appear in the layer name.
    Function = 5,
    //
    // Summary:
    //     Signals that the name of the level will appear in the layer name.
    Level = 6,
    //
    // Summary:
    //     Signals that the name of the created phase will appear in the layer name.
    PhaseCreated = 7,
    //
    // Summary:
    //     Signals that the name of the demolition phase will appear in the layer name.
    PhaseDemolished = 8,
    //
    // Summary:
    //     Signals that the value of of phase status will appear in the layer name.
    PhaseStatus = 9,
    //
    // Summary:
    //     Signals that the value of structural material type will appear in the layer name.
    StructuralMaterialType = 10,
    //
    // Summary:
    //     Signals that the value of structural usage will appear in the layer name.
    StructuralUsage = 11,
    //
    // Summary:
    //     Signals that the system name will appear in the layer name.
    SystemName = 12,
    //
    // Summary:
    //     Signals that the system type will appear in the layer name.
    SystemType = 13,
    //
    // Summary:
    //     Signals that the name of the underlay will appear in the layer name.
    Underlay = 14,
    //
    // Summary:
    //     Signals that the view type will appear in the layer name.
    ViewType = 15,
    //
    // Summary:
    //     Signals that the name of the workset will appear in the layer name.
    Workset = 16,
    //
    // Summary:
    //     Signals that the value of the AnalyzesAs parameter will appear in the layer name.
    AnalyzesAs = 17,
    //
    // Summary:
    //     Signals that the system classification will appear in the layer name.
    SystemClassification = 18,
    //
    // Summary:
    //     Signals that the domain type will appear in the layer name.
    DomainType = 19,
    //
    // Summary:
    //     Signals that the fabrication service will appear in the layer name.
    FabricationService = 20
}

//
// Summary:
//     A key used to represent an item stored in an Autodesk.Revit.DB.ExportLayerTable.
export class ExportLayerKey {
    //
    // Summary:
    //     Constructs a new ExportLayerKey with default values.
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
    //     The special type for layer key.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public SpecialType: SpecialType;
    //
    // Summary:
    //     The subcategrory Name.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public SubCategoryName: string;
    //
    // Summary:
    //     The category name.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public CategoryName: string;

}

//
// Summary:
//     A modifier used to designate extra strings to appear in the exported layer name.
//
// Remarks:
//     A modifier consists of a type (from Autodesk.Revit.DB.ModifierType and an optional
//     separator. Apply a modifier to one or more Autodesk.Revit.DB.ExportLayerInfo
//     objects to modify the layer name that will be assigned when a Revit object is
//     exported.
export class LayerModifier {
    //
    // Summary:
    //     Constructs a new LayerModifier with default values.
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
    //     The modifier type of LayerModifier.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public ModifierType: ModifierType;
    //
    // Summary:
    //     The separator string that will follow this modifier in the export layer name.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public Separator: string;
}

//
// Summary:
//     A value used to represent the info stored in the Autodesk.Revit.DB.ExportLayerTable.
export class ExportLayerInfo {
    //
    // Summary:
    //     Constructs a new ExportLayerInfo with default values.
    constructor() {

    }
    //
    // Summary:
    //     The layer name stored in value.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public LayerName: string;
    //
    // Summary:
    //     The cut layer name stored in value.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public CutLayerName: string;
    //
    // Summary:
    //     The color number stored in value.
    public ColorNumber: number = 0;
    //
    // Summary:
    //     The cut color number stored in value.
    public CutColorNumber: number = 0;
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
    //     The color name stored in value. For IFC export, the naming is to match the "colornumber"
    //     setting -- really, this stores a string that generates the colorNumber (for formats
    //     that don't use the color but need a second entry.)
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     When setting this property: A non-optional argument was null
    public ColorName: string;
    //
    // Summary:
    //     The category type which this layer belongs to.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentOutOfRangeException:
    //     When setting this property: A value passed for an enumeration argument is not
    //     a member of that enumeration
    public CategoryType: LayerCategoryType;

    private _cutLayerModifiers: LayerModifier[];
    private _layerModifiers: LayerModifier[];
    //
    // Summary:
    //     Adds a cut layer modifier to the layer info.
    //
    // Parameters:
    //   layerModifier:
    //     The cut layer modifier.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     The separator string contains one or more prohibited characters. -or- The modifier
    //     type already exists in the cut layer info.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public AddCutLayerModifier(layerModifier: LayerModifier | null): void {
        this._cutLayerModifiers.push(layerModifier);
    }
    //
    // Summary:
    //     Adds a project layer modifier to the layer info.
    //
    // Parameters:
    //   layerModifier:
    //     The project layer modifier.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     The separator string contains one or more prohibited characters. -or- The modifier
    //     type already exists in the layer info.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public AddLayerModifier(layerModifier: LayerModifier | null): void {
        this._layerModifiers.push(layerModifier);
    }
    //
    // Summary:
    //     Clears all the cut layer modifiers stored in the layer info.
    public ClearCutLayerModifiers(): void {
        this._cutLayerModifiers = [];
    }
    //
    // Summary:
    //     Clears all the project layer modifiers stored in the layer info.
    public ClearLayerModifiers(): void {
        this._layerModifiers = [];
    }
    //
    // Summary:
    //     Gets all the cut layer modifiers from the layer info.
    //
    // Returns:
    //     The cut layer modifier array.
    public GetCutLayerModifiers(): Array<LayerModifier> | null {
        return this._cutLayerModifiers;
    }
    //
    // Summary:
    //     Gets all the project layer modifiers from the layer info.
    //
    // Returns:
    //     The project layer modifier array.
    public GetLayerModifiers(): Array<LayerModifier> | null {
        return this._layerModifiers;
    }
    //
    // Summary:
    //     Removes a cut layer modifier from the layer info.
    //
    // Parameters:
    //   layerModifier:
    //     The cut layer modifier.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public RemoveCutLayerModifier(layerModifier: LayerModifier | null): void {

        const index = this._cutLayerModifiers.indexOf(layerModifier, 0);
        if (index > -1) {
            this._cutLayerModifiers.splice(index, 1);
        }
    }
    //
    // Summary:
    //     Removes a project layer modifier from the layer info.
    //
    // Parameters:
    //   layerModifier:
    //     The project layer modifier.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public RemoveLayerModifier(layerModifier: LayerModifier | null): void {
        const index = this._layerModifiers.indexOf(layerModifier, 0);
        if (index > -1) {
            this._layerModifiers.splice(index, 1);
        }
    }
    //
    // Summary:
    //     Sets a cut layer modifier array to the layer info.
    //
    // Parameters:
    //   cutLayermodifiers:
    //     The cut layer modifier array.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public SetCutLayerModifiers(cutLayermodifiers: LayerModifier[] | null): void {
        this._cutLayerModifiers = cutLayermodifiers;
    }
    //
    // Summary:
    //     Sets a project layer modifier array to the layer info.
    //
    // Parameters:
    //   layermodifiers:
    //     The project layer modifier array.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public SetLayerModifiers(layermodifiers: LayerModifier[] | null): void {
        this._layerModifiers = layermodifiers;
    }
}

//
// Summary:
//     A table supporting a mapping of category and subcategory to layer name and other
//     layer properties that will be set in the target export format.
//
// Remarks:
//     This table is structured as a mapping from Autodesk.Revit.DB.ExportLayerKey to
//     Autodesk.Revit.DB.ExportLayerInfo members. The Autodesk.Revit.DB.ExportLayerKey
//     contains the identification information for the layer table: the Revit category
//     and subcategory names. In addition, the key contains a Autodesk.Revit.DB.SpecialType
//     member used only to represent non-Revit categories that can be assigned specific
//     layer information on export. The Autodesk.Revit.DB.ExportLayerInfo contains the
//     exported layer name, color name, and layer modifiers for standard and cut representations.
//     The table can be accessed via direct iteration as a collection of KeyValuePairs,
//     or by traversal of the stored keys obtained from GetKeys(), or via specific lookup
//     of a key constructed externally. In all cases, the Autodesk.Revit.DB.ExportLayerInfo
//     returned will be a copy of the Autodesk.Revit.DB.ExportLayerInfo from the table.
//     In order to make changes to the Autodesk.Revit.DB.ExportLayerInfo and use those
//     settings during export, set the modified Autodesk.Revit.DB.ExportLayerInfo back
//     into the table using the same key.
/*[DefaultMember("Item")]*/ 
export class ExportLayerTable extends Map<ExportLayerKey, ExportLayerInfo> {
    private _exportLayerTable: Map<ExportLayerKey, ExportLayerInfo>;

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
    //     Gets all the avaliable layer modifier types for the layer key.
    //
    // Parameters:
    //   document:
    //     A Revit document to retrieve avaliable layer modifier types from.
    //
    //   exportLayerKey:
    //     The export layer key to specify wich category and subCategory will be used to
    //     get the layer modifier types.
    //
    // Returns:
    //     The layer modifier types.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was NULL
    // public static GetAvaliableLayerModifierTypes(document: Document | null, exportLayerKey: ExportLayerKey | null) : Array<ModifierType> | null {

    // }
    //
    // Summary:
    //     Inserts a (key,info) pair into Export layer table.
    //
    // Parameters:
    //   exportLayerKey:
    //     The export layer key to be added.
    //
    //   exportLayerInfo:
    //     The export layer info to be added.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     The key already exists in the table. -or- The layer info does not contain the
    //     Category as a modifier type.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public Add(exportLayerKey: ExportLayerKey | null, exportLayerInfo: ExportLayerInfo | null) : void {
        this._exportLayerTable.set(exportLayerKey,exportLayerInfo);
    }
    //
    // Summary:
    //     Removes all contents stored in the table.
    public Clear() : void {
        this._exportLayerTable.clear();
    }
    //
    // Summary:
    //     Checks whether a layer key exists in the table.
    //
    // Parameters:
    //   exportlayerKey:
    //     The export layer Key.
    //
    // Returns:
    //     True if the layer key exists in the table.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public ContainsKey(exportlayerKey: ExportLayerKey | null) : boolean {
        return this._exportLayerTable.has(exportlayerKey);
    }
    //
    // Summary:
    //     Gets a copy of the layer info associated to the input pattern key.
    //
    // Parameters:
    //   exportLayerKey:
    //     The export layer Key.
    //
    // Returns:
    //     Return the layerInfo for this key.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentException:
    //     An entry with the given key is not present in the table.
    //
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public GetExportLayerInfo(exportLayerKey: ExportLayerKey | null) : ExportLayerInfo {
        return this._exportLayerTable.get(exportLayerKey);
    }
    //
    // Summary:
    //     Gets all the keys stored in the map.
    //
    // Returns:
    //     Return the key array.
    public GetKeys() : ExportLayerKey[] | null {
        return Array.from(this._exportLayerTable.keys());
    }
    //
    // Summary:
    //     Returns all the values stored in the map.
    //
    // Returns:
    //     Return the info array.
    public GetValues() : ExportLayerInfo[] | null {
        return Array.from(this._exportLayerTable.values());
    }
    //
    // Summary:
    //     Removes the pair (key, info) by pattern key.
    //
    // Parameters:
    //   exportLayerKey:
    //     The export pattern key.
    //
    // Exceptions:
    //   T:Autodesk.Revit.Exceptions.ArgumentNullException:
    //     A non-optional argument was null
    public Remove(exportLayerKey: ExportLayerKey | null) : void {
        this._exportLayerTable.delete(exportLayerKey);
    }
}