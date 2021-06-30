
export enum IFCVersion {
    //
    // Summary:
    //     The Autodesk Revit application's default export format. Note that this may change
    //     as the defaults change in the Revit user interface.
    Default = 0,
    //
    // Summary:
    //     IFC BCA file format. This is a certified variant of IFC 2x2 used for submitting
    //     files to the Singapore BCA ePlan Check Server.
    IFCBCA = 8,
    //
    // Summary:
    //     IFC 2x2 file format.
    IFC2x2 = 9,
    //
    // Summary:
    //     IFC 2x3 file format.
    IFC2x3 = 10,
    //
    // Summary:
    //     IFC GSA COBIE 2010 file format. This is a variant of IFC 2x3 used for submitting
    //     files that are COBIE 2010-complaint.
    IFCCOBIE = 17,
    //
    // Summary:
    //     IFC 2x3 Coordination View 2.0 file format. This is a variant of IFC 2x3 used
    //     for exporting files using the Coordination View 2.0 model view.
    IFC2x3CV2 = 21,
    //
    // Summary:
    //     IFC 4 file format.
    IFC4 = 23,
    //
    // Summary:
    //     IFC2x3 Extended FM Handover View
    IFC2x3FM = 24,
    //
    // Summary:
    //     IFC4 Reference View
    IFC4RV = 25,
    //
    // Summary:
    //     IFC4 Design Transfer View
    IFC4DTV = 26,
    //
    // Summary:
    //     IFC2x3 Basic FM Handover View
    IFC2x3BFM = 27
}

export enum IFCFileFormat {
    //
    // Summary:
    //     IFC format.
    Ifc = 0,
    //
    // Summary:
    //     IFC-XML format.
    IfcXML = 1,
    //
    // Summary:
    //     IFC file, zipped to IFC-ZIP format.
    IfcZIP = 2,
    //
    // Summary:
    //     IFC-XML file, zipped to IFC-ZIP format.
    IfcXMLZIP = 3
}

export enum SiteTransformBasis {
    Shared = 0,
    Site = 1,
    Project = 2,
    Internal = 3
}

export class IFCExportConfiguration {
    /// <summary>
    /// The name of the configuration.
    /// </summary>
    public Name: string = ``;
    /// <summary>
    /// The IFCVersion of the configuration.
    /// </summary>
    public IFCVersion: IFCVersion = IFCVersion.IFC2x3CV2;
    /// <summary>
    /// The IFCFileFormat of the configuration.
    /// </summary>
    public IFCFileType: IFCFileFormat = IFCFileFormat.Ifc;
    /// <summary>
    /// The level of space boundaries of the configuration.
    /// </summary>
    public SpaceBoundaries: number = 0;
    /// <summary>
    /// The origin of the exported file: either shared coordinates (Site Survey Point), Project Base Point, or internal coordinates.
    /// </summary>
    public SitePlacement: SiteTransformBasis = SiteTransformBasis.Shared;
    /// <summary>
    /// The phase of the document to export.
    /// </summary>
    public ActivePhaseId: number = -1;
    /// <summary>
    /// Whether or not to include base quantities for model elements in the export data.
    /// Base quantities are generated from model geometry to reflect actual physical quantity values, independent of measurement rules or methods.
    /// </summary>
    public ExportBaseQuantities: boolean = false;
    /// <summary>
    /// Whether or not to split walls and columns by building stories.
    /// </summary>
    public SplitWallsAndColumns: boolean = false;
    /// <summary>
    /// True to include the Revit-specific property sets based on parameter groups.
    /// False to exclude them.
    /// </summary>
    public ExportInternalRevitPropertySets: boolean = false;
    /// <summary>
    /// True to include the IFC common property sets.
    /// False to exclude them.
    /// </summary>
    public ExportIFCCommonPropertySets: boolean = true;
    /// <summary>
    /// True to include 2D elements supported by IFC export (notes and filled regions).
    /// False to exclude them.
    /// </summary>
    public Export2DElements: boolean = false;
    /// <summary>
    /// True to export only the visible elements of the current view (based on filtering and/or element and category hiding).
    /// False to export the entire model.
    /// </summary>
    public VisibleElementsOfCurrentView: boolean = false;
    /// <summary>
    /// True to use a simplified approach to calculation of room volumes (based on extrusion of 2D room boundaries) which is also the default when exporting to IFC 2x2.
    /// False to use the Revit calculated room geometry to represent the room volumes (which is the default when exporting to IFC 2x3).
    /// </summary>
    public Use2DRoomBoundaryForVolume: boolean = false;
    /// <summary>
    /// True to use the family and type name for references.
    /// False to use the type name only.
    /// </summary>
    public UseFamilyAndTypeNameForReference: boolean = false;
    /// <summary>
    /// True to export the parts as independent building elements
    /// False to export the parts with host element.
    /// </summary>
    public ExportPartsAsBuildingElements: boolean = false;
    /// <summary>
    /// True to allow exports of solid models when possible.
    /// False to exclude them.
    /// </summary>
    public ExportSolidModelRep: boolean = false;
    /// <summary>
    /// True to allow exports of schedules as custom property sets.
    /// False to exclude them.
    /// </summary>
    public ExportSchedulesAsPsets: boolean = false;
    /// <summary>
    /// True to allow user defined property sets to be exported
    /// False to ignore them
    /// </summary>
    public ExportUserDefinedPsets: boolean = false;
    /// <summary>
    /// The name of the file containing the user defined property sets to be exported.
    /// </summary>
    public ExportUserDefinedPsetsFileName: string = ``;
    /// <summary>
    /// True if the User decides to use the Parameter Mapping Table
    /// False if the user decides to ignore it
    /// </summary>
    public ExportUserDefinedParameterMapping: boolean = false;
    /// <summary>
    /// The name of the file containing the user defined Parameter Mapping Table to be exported.
    /// </summary>
    public ExportUserDefinedParameterMappingFileName: string = ``;
    /// <summary>
    /// True to export bounding box.
    /// False to exclude them.
    /// </summary>
    public ExportBoundingBox: boolean = false;
    /// <summary>
    /// True to include IFCSITE elevation in the site local placement origin.
    /// </summary>
    public IncludeSiteElevation: boolean = false;
    /// <summary>
    /// True to use the active view when generating geometry.
    /// False to use default export options.
    /// </summary>
    public UseActiveViewGeometry: boolean = false;
    /// <summary>
    /// True to export specific schedules.
    /// </summary>
    public ExportSpecificSchedules: boolean = false;
    /// <summary>
    /// Value indicating the level of detail to be used by tessellation. Valid valus is between 0 to 1
    /// </summary>
    public TessellationLevelOfDetail: number = 0.5;
    /// <summary>
    /// Value indicating whether tessellated geometry should be kept only as triagulation
    /// (Note: in IFC4_ADD2 IfcPolygonalFaceSet is introduced that can simplify the coplanar triangle faces into a polygonal face. This option skip this)
    /// </summary>
    public UseOnlyTriangulation: boolean = false;
    /// <summary>
    /// True to store the IFC GUID in the file after the export.  This will require manually saving the file to keep the parameter.
    /// </summary>
    public StoreIFCGUID: boolean = false;
    /// <summary>
    /// True to export rooms if their bounding box intersect with the section box.
    /// </summary>
    /// <remarks>
    /// If the section box isn't visible, then all the rooms are exported if this option is set.
    /// </remarks>
    public ExportRoomsInView: boolean = false;
    /// <summary>
    ///
    /// </summary>
    public ExportLinkedFiles: boolean = false;
    /// <summary>
    /// Id of the active view.
    /// </summary>
    public ActiveViewId: number = -1;
    /// <summary>
    /// Exclude filter string (element list in an arrary, seperated with semicolon ';')
    /// </summary>
    public ExcludeFilter: string = ``;
    /// <summary>
    /// COBie specific company information (from a dedicated tab)
    /// </summary>
    public COBieCompanyInfo: string = ``;
    /// <summary>
    /// COBie specific project information (from a dedicated tab)
    /// </summary>
    public COBieProjectInfo: string = ``;
    /// <summary>
    /// Value indicating whether steel elements should be exported.
    /// </summary>
    public IncludeSteelElements: boolean = true;
    /// <summary>
    /// Value indicating whether only the Type name will be used to name the IfcTypeObject
    /// </summary>
    public UseTypeNameOnlyForIfcType: boolean = false;
    /// <summary>
    /// Value indicating whether the IFC Entity Name will use visible Revit Name
    /// </summary>
    public UseVisibleRevitNameAsEntityName: boolean = false;
    /// <summary>
    /// Projected Coordinate System Name
    /// </summary>
    public GeoRefCRSName: string = ``;
    /// <summary>
    /// Projected Coordinate System Desccription
    /// </summary>
    public GeoRefCRSDesc: string = ``;
    /// <summary>
    /// EPSG Code for the Projected CRS
    /// </summary>
    public GeoRefEPSGCode: string = ``;
    /// <summary>
    /// The geodetic datum of the ProjectedCRS
    /// </summary>
    public GeoRefGeodeticDatum: string = ``;
    /// <summary>
    /// The Map Unit of the ProjectedCRS
    /// </summary>
    public GeoRefMapUnit: string = ``;
    private m_isBuiltIn: boolean = false;
    private m_isInSession: boolean = false;
    private static s_inSessionConfiguration: IFCExportConfiguration = null;
    /// <summary>
    /// Whether the configuration is builtIn or not.
    /// </summary>
    public get IsBuiltIn() : boolean {
        return this.m_isBuiltIn;
    }
    /// <summary>
    /// Whether the configuration is in-session or not.
    /// </summary>
    public get IsInSession() : boolean {
        return this.m_isInSession;
    }
    /// <summary>
    /// Creates a new default configuration.
    /// </summary>
    /// <returns>The new default configuration.</returns>
    public static CreateDefaultConfiguration() : IFCExportConfiguration | null {
        let defConfig: IFCExportConfiguration = (() => {
            let obj = new IFCExportConfiguration();
            obj.Name = `<< Default >>`;;
            return obj;
        })();
        return defConfig;
    }
    /// <summary>
    /// Constructs a default configuration.
    /// </summary>
    constructor() {}
    /// <summary>
    /// Creates a builtIn configuration by particular options.
    /// </summary>
    /// <param name="name">The configuration name.</param>
    /// <param name="ifcVersion">The IFCVersion.</param>
    /// <param name="spaceBoundaries">The space boundary level.</param>
    /// <param name="exportBaseQuantities">The ExportBaseQuantities.</param>
    /// <param name="splitWalls">The SplitWallsAndColumns option.</param>
    /// <param name="internalSets">The ExportInternalRevitPropertySets option.</param>
    /// <param name="schedulesAsPSets">The ExportSchedulesAsPsets option.</param>
    /// <param name="userDefinedPSets">The ExportUserDefinedPsets option.</param>
    /// <param name="PlanElems2D">The Export2DElements option.</param>
    /// <param name="exportBoundingBox">The exportBoundingBox option.</param>
    /// <param name="exportLinkedFiles">The exportLinkedFiles option.</param>
    /// <returns>The builtIn configuration.</returns>
    public static CreateBuiltInConfiguration(name: string | null, ifcVersion: IFCVersion | null, spaceBoundaries: number, exportBaseQuantities: boolean, splitWalls: boolean, internalSets: boolean, schedulesAsPSets: boolean, userDefinedPSets: boolean, userDefinedParameterMapping: boolean, PlanElems2D: boolean, exportBoundingBox: boolean, exportLinkedFiles: boolean, excludeFilter: string | null = ``, includeSteelElements: boolean = false) : IFCExportConfiguration | null {
        let configuration: IFCExportConfiguration = new IFCExportConfiguration();
        configuration.Name = name;
        configuration.IFCVersion = ifcVersion;
        configuration.IFCFileType = IFCFileFormat.Ifc;
        configuration.SpaceBoundaries = spaceBoundaries;
        configuration.ExportBaseQuantities = exportBaseQuantities;
        configuration.SplitWallsAndColumns = splitWalls;
        configuration.ExportInternalRevitPropertySets = internalSets;
        configuration.ExportIFCCommonPropertySets = true;
        configuration.Export2DElements = PlanElems2D;
        configuration.VisibleElementsOfCurrentView = false;
        configuration.Use2DRoomBoundaryForVolume = false;
        configuration.UseFamilyAndTypeNameForReference = false;
        configuration.ExportPartsAsBuildingElements = false;
        configuration.UseActiveViewGeometry = false;
        configuration.ExportSpecificSchedules = false;
        configuration.ExportBoundingBox = exportBoundingBox;
        configuration.ExportSolidModelRep = false;
        configuration.ExportSchedulesAsPsets = schedulesAsPSets;
        configuration.ExportUserDefinedPsets = userDefinedPSets;
        configuration.ExportUserDefinedPsetsFileName = ``;
        configuration.ExportUserDefinedParameterMapping = userDefinedParameterMapping;
        configuration.ExportUserDefinedParameterMappingFileName = ``;
        configuration.ExportLinkedFiles = exportLinkedFiles;
        configuration.IncludeSiteElevation = false;
        // The default tesselationLevelOfDetail will be low
        configuration.TessellationLevelOfDetail = 0.5;
        configuration.UseOnlyTriangulation = false;
        configuration.StoreIFCGUID = false;
        configuration.m_isBuiltIn = true;
        configuration.m_isInSession = false;
        configuration.ActivePhaseId = -1;
        configuration.ExportRoomsInView = false;
        configuration.ExcludeFilter = excludeFilter;
        configuration.COBieCompanyInfo = ``;
        configuration.COBieProjectInfo = ``;
        configuration.IncludeSteelElements = includeSteelElements;
        configuration.UseTypeNameOnlyForIfcType = false;
        configuration.UseVisibleRevitNameAsEntityName = false;
        configuration.GeoRefCRSName = ``;
        configuration.GeoRefCRSDesc = ``;
        configuration.GeoRefEPSGCode = ``;
        configuration.GeoRefGeodeticDatum = ``;
        configuration.GeoRefMapUnit = ``;
        return configuration;
    }
    // public Clone() : IFCExportConfiguration | null {
    //     // just need a shallow copy
    //     return (<IFCExportConfiguration><any>this.MemberwiseClone());
    // }
    // /// <summary>
    // /// Duplicates this configuration by giving a new name.
    // /// </summary>
    // /// <param name="newName">The new name of the copy configuration.</param>
    // /// <returns>The duplicated configuration.</returns>
    // public Duplicate(newName: string | null, makeEditable: boolean = false) : IFCExportConfiguration | null {
    //     let dup: IFCExportConfiguration = this.Clone();
    //     dup.Name = newName;
    //     if (makeEditable) {
    //         dup.m_isBuiltIn = false;
    //         dup.m_isInSession = false;
    //     }
    //     return dup;
    // }
    // /// <summary>
    // /// Gets the in-session configuration.
    // /// </summary>
    // /// <returns>The in-session configuration.</returns>
    // public static GetInSession() : IFCExportConfiguration | null {
    //     if (IFCExportConfiguration.s_inSessionConfiguration == <any>null) {
    //         IFCExportConfiguration.s_inSessionConfiguration = new IFCExportConfiguration();
    //         IFCExportConfiguration.s_inSessionConfiguration.Name = Resources.InSessionConfiguration;
    //         IFCExportConfiguration.s_inSessionConfiguration.ExportUserDefinedPsetsFileName = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) + `\\DefaultUserDefinedParameterSets.txt`;
    //         IFCExportConfiguration.s_inSessionConfiguration.ExportUserDefinedParameterMappingFileName = ``;
    //         IFCExportConfiguration.s_inSessionConfiguration.m_isInSession = true;
    //     }
    //     return IFCExportConfiguration.s_inSessionConfiguration;
    // }
    // /// <summary>
    // /// Set the in-session configuration to cache.
    // /// </summary>
    // /// <param name="configuration">The the in-session configuration.</param>
    // public static SetInSession(configuration: IFCExportConfiguration | null) : void {
    //     if (!configuration.IsInSession) {
    //         throw new ArgumentException(`SetInSession requires an In-Session configuration`, `configuration`);
    //     }
    //     IFCExportConfiguration.s_inSessionConfiguration = configuration;
    // }
    // // /// <summary>
    // // /// Updates the IFCExportOptions with the settings in this configuration.
    // // /// </summary>
    // // /// <param name="options">The IFCExportOptions to update.</param>
    // // /// <param name="filterViewId">The id of the view that will be used to select which elements to export.</param>
    // // public UpdateOptions(options: IFCExportOptions | null, filterViewId: ElementId | null) : void {
    // //     options.FileVersion = this.IFCVersion;
    // //     options.AddOption(`ExchangeRequirement`, this.ExchangeRequirement.toString());
    // //     options.SpaceBoundaryLevel = this.SpaceBoundaries;
    // //     options.ExportBaseQuantities = this.ExportBaseQuantities;
    // //     options.WallAndColumnSplitting = this.SplitWallsAndColumns;
    // //     options.FilterViewId = this.VisibleElementsOfCurrentView ? filterViewId : ElementId.InvalidElementId;
    // //     options.AddOption(`ExportInternalRevitPropertySets`, this.ExportInternalRevitPropertySets.toString());
    // //     options.AddOption(`ExportIFCCommonPropertySets`, this.ExportIFCCommonPropertySets.toString());
    // //     options.AddOption(`ExportAnnotations`, this.Export2DElements.toString());
    // //     options.AddOption(`Use2DRoomBoundaryForVolume`, this.Use2DRoomBoundaryForVolume.toString());
    // //     options.AddOption(`UseFamilyAndTypeNameForReference`, this.UseFamilyAndTypeNameForReference.toString());
    // //     options.AddOption(`ExportVisibleElementsInView`, this.VisibleElementsOfCurrentView.toString());
    // //     options.AddOption(`ExportPartsAsBuildingElements`, this.ExportPartsAsBuildingElements.toString());
    // //     options.AddOption(`UseActiveViewGeometry`, this.UseActiveViewGeometry.toString());
    // //     options.AddOption(`ExportSpecificSchedules`, this.ExportSpecificSchedules.toString());
    // //     options.AddOption(`ExportBoundingBox`, this.ExportBoundingBox.toString());
    // //     options.AddOption(`ExportSolidModelRep`, this.ExportSolidModelRep.toString());
    // //     options.AddOption(`ExportSchedulesAsPsets`, this.ExportSchedulesAsPsets.toString());
    // //     options.AddOption(`ExportUserDefinedPsets`, this.ExportUserDefinedPsets.toString());
    // //     options.AddOption(`ExportUserDefinedParameterMapping`, this.ExportUserDefinedParameterMapping.toString());
    // //     options.AddOption(`ExportLinkedFiles`, this.ExportLinkedFiles.toString());
    // //     options.AddOption(`IncludeSiteElevation`, this.IncludeSiteElevation.toString());
    // //     options.AddOption(`SitePlacement`, this.SitePlacement.toString());
    // //     options.AddOption(`TessellationLevelOfDetail`, this.TessellationLevelOfDetail.toString());
    // //     options.AddOption(`UseOnlyTriangulation`, this.UseOnlyTriangulation.toString());
    // //     options.AddOption(`ActiveViewId`, this.ActiveViewId.toString());
    // //     options.AddOption(`StoreIFCGUID`, this.StoreIFCGUID.toString());
    // //     // The active phase may not be valid if we are exporting multiple projects. However, if projects share a template that defines the phases,
    // //     // then the ActivePhaseId would likely be valid for all.  There is some small chance that the ActivePhaseId would be a valid, but different, phase
    // //     // in different projects, but that is unlikely enough that it seems worth warning against it but allowing the better functionality in general.
    // //     if (IFCPhaseAttributes.Validate(this.ActivePhaseId)) options.AddOption(`ActivePhase`, this.ActivePhaseId.toString());
    // //     options.AddOption(`FileType`, this.IFCFileType.toString());
    // //     let uiVersion: string = IFCUISettings.GetAssemblyVersion();
    // //     options.AddOption(`AlternateUIVersion`, uiVersion);
    // //     options.AddOption(`ConfigName`, this.Name); // Add config name into the option for use in the exporter
    // //     options.AddOption(`ExportUserDefinedPsetsFileName`, this.ExportUserDefinedPsetsFileName);
    // //     options.AddOption(`ExportUserDefinedParameterMappingFileName`, this.ExportUserDefinedParameterMappingFileName);
    // //     options.AddOption(`ExportRoomsInView`, this.ExportRoomsInView.toString());
    // //     options.AddOption(`ExcludeFilter`, this.ExcludeFilter.toString());
    // //     options.AddOption(`COBieCompanyInfo`, this.COBieCompanyInfo);
    // //     options.AddOption(`COBieProjectInfo`, this.COBieProjectInfo);
    // //     options.AddOption(`IncludeSteelElements`, this.IncludeSteelElements.toString());
    // //     options.AddOption(`UseTypeNameOnlyForIfcType`, this.UseTypeNameOnlyForIfcType.toString());
    // //     options.AddOption(`UseVisibleRevitNameAsEntityName`, this.UseVisibleRevitNameAsEntityName.toString());
    // //     // Add CRS information
    // //     options.AddOption(`GeoRefCRSName`, this.GeoRefCRSName != null ? this.GeoRefCRSName : ``);
    // //     options.AddOption(`GeoRefCRSDesc`, this.GeoRefCRSDesc != null ? this.GeoRefCRSDesc : ``);
    // //     options.AddOption(`GeoRefEPSGCode`, this.GeoRefEPSGCode != null ? this.GeoRefEPSGCode : ``);
    // //     options.AddOption(`GeoRefGeodeticDatum`, this.GeoRefGeodeticDatum != null ? this.GeoRefGeodeticDatum : ``);
    // //     options.AddOption(`GeoRefMapUnit`, this.GeoRefMapUnit != null ? this.GeoRefMapUnit : ``);
    // // }
    // /// <summary>
    // /// Identifies the version selected by the user.
    // /// </summary>
    // public get FileVersionDescription() : String {
    //     let versionAttributes: IFCVersionAttributes = new IFCVersionAttributes(this.IFCVersion);
    //     return versionAttributes.toString();
    // }
    // /// <summary>
    // /// Converts to the string to identify the configuration.
    // /// </summary>
    // /// <returns>The string to identify the configuration.</returns>
    // public ToString() : String {
    //     if (this.IsBuiltIn) {
    //         return `<` + this.Name + ` ` + Properties.Resources.Setup + `>`;
    //     }
    //     return this.Name;
    // }
    // /// <summary>
    // /// Loads the propertie for this configuration from the input Json props.
    // /// </summary>
    // /// <param name="dictionary">Key, value pairs for each read in property.</param>
    // /// <param name="serializer">Json serializer used to load data. </param>
    // public DeserializeFromJson(dictionary: IDictionary<string, Object> | null, serializer: JavaScriptSerializer | null) : void {
    //     let type: Type = TypeInfo.GetType(this);
    //     // load in each property from the dictionary.
    //     for (const[prop_source_Key, prop_source_Value] of dictionary.entries()) {
    //         let propName: string = [prop_source_Key, prop_source_Value].Key;
    //         let propValue: Object = [prop_source_Key, prop_source_Value].Value;
    //         // have to special case ElementId to be able to load
    //         if (propName == `ActivePhaseId`) {
    //             let elemIdProps: IDictionary = serializer.ConvertToType(propValue);
    //             this.ActivePhaseId = new ElementId(serializer.ConvertToType(elemIdProps.get(`IntegerValue`)));
    //             continue;
    //         }
    //         // get the property info
    //         let propInfo: PropertyInfo = TypeInfo.GetProperty(type, propName);
    //         // property removed/renamed..
    //         if (propInfo == null)
    //         continue;
    //         // set direct for all the writeable props
    //         if (propInfo.CanWrite) {
    //             propInfo.SetValue(this, serializer.ConvertToType(propValue, propInfo.PropertyType));
    //             continue;
    //         }
    //         // need to set explicit member variables for ready only props.
    //         if (propName == `IsBuiltIn`) {
    //             this.m_isBuiltIn = serializer.ConvertToType(propValue);
    //         } else
    //         if (propName == `IsInSession`) {
    //             this.m_isInSession = serializer.ConvertToType(propValue);
    //         }
    //     }
    // }
}
