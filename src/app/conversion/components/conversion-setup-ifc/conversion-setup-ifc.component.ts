import { Component, OnInit } from '@angular/core';
import { IFCExportConfiguration, IFCFileFormat, IFCVersion, SiteTransformBasis } from '../../classes/ifc-export-configuration.class';

@Component({
  selector: 'app-conversion-setup-ifc',
  templateUrl: './conversion-setup-ifc.component.html',
  styleUrls: ['./conversion-setup-ifc.component.scss']
})
export class ConversionSetupIfcComponent implements OnInit {

  export: boolean = true;
  ifcVersionAttributes: IFCVersionAttribute[] = IFCVersionAttribute.IfcVersions;
  ifcFileFormatAttributes: IFCFileFormatAttribute[]= IFCFileFormatAttribute.IfcFileFormats;
  activePhaseIdAttributes: ActivePhaseIdAttribute[] = ActivePhaseIdAttribute.ActivePhaseIdAttributes;
  spaceBoundariesAttributes: SpaceBoundariesAttribute[] = SpaceBoundariesAttribute.SpaceBoundariesAttributes;
  siteTransformBasisAttributes: SiteTransformBasisAttribute[] = SiteTransformBasisAttribute.SiteTransformBasisAttributes;

  ifcExportConfiguration: IFCExportConfiguration;
  m_configurations: IFCExportConfiguration[] =[];

  constructor() { }

  ngOnInit(): void {
             // These are the built-in configurations.  Provide a more extensible means of storage.
         // Order of construction: name, version, space boundaries, QTO, split walls, internal sets, 2d elems, boundingBox
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC2x3 Coordination View 2.0", IFCVersion.IFC2x3CV2, 0, false, false, false, false, false, false, false, false, false, null, true));
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC2x3 Coordination View", IFCVersion.IFC2x3, 1, false, false, true, false, false, false, true, false, false, null, true));
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC2x3 GSA Concept Design BIM 2010", IFCVersion.IFCCOBIE, 2, true, true, true, false, false, false, true, true, false, null, true));
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC2x3 Basic FM Handover View", IFCVersion.IFC2x3BFM, 1, true, true, false, false, false, false, true, false, false, null, true));
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC2x2 Coordination View", IFCVersion.IFC2x2, 1, false, false, true, false, false, false, false, false, false));
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC2x3 COBie 2.4 Design Deliverable", IFCVersion.IFC2x3FM, 1, true, false, false, true, true, false, true, true, false, null, true));
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC4 Reference View [Architecture]", IFCVersion.IFC4RV, 0, true, false, false, false, false, false, false, false, false, null, true));
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC4 Reference View [Structural]", IFCVersion.IFC4RV, 0, true, false, false, false, false, false, false, false, false, null, true));
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC4 Reference View [BuildingService]", IFCVersion.IFC4RV, 0, true, false, false, false, false, false, false, false, false, null, true));
         this.Add(IFCExportConfiguration.CreateBuiltInConfiguration("IFC4 Design Transfer View", IFCVersion.IFC4DTV, 0, true, false, false, false, false, false, false, false, false, null, true));

         this.ifcExportConfiguration = this.m_configurations[0];
  }

  Add(ifcExportConfiguration: IFCExportConfiguration) {
    this.m_configurations.push(ifcExportConfiguration);
  }
}

export class IFCVersionAttribute {
  static IfcVersions: IFCVersionAttribute[] = [
    { name: 'Default', index:  0, value: IFCVersion.Default  },
    { name: 'IFC 2x3 Coordination View 2. 8', index:  8, value: IFCVersion.IFCBCA  },
    { name: 'IFC 2x2 Coordination View', index:  9, value: IFCVersion.IFC2x2  },
    { name: 'IFC 2x3 Coordination View', index:  10, value: IFCVersion.IFC2x3  },
    { name: 'IFC 2x3 GSA Concept Design BIM 2515', index:  17, value: IFCVersion.IFCCOBIE  },
    { name: 'IFC 2x3 Coordination View 2. 21', index:  21, value: IFCVersion.IFC2x3CV2  },
    { name: 'IFC4 for General Use', index:  23, value: IFCVersion.IFC4  },
    { name: 'IFC2x3 COBie 2.4 Design Deliverable View', index:  24, value: IFCVersion.IFC2x3FM  },
    { name: 'IFC4 Reference View', index:  25, value: IFCVersion.IFC4RV  },
    { name: 'IFC4 Design Transfer View', index:  26, value: IFCVersion.IFC4DTV  },
    { name: 'IFC 2x3 Basic FM Handover View', index:  27, value: IFCVersion.IFC2x3BFM  },
  ];
  name: string;
  index: number;
  value: IFCVersion;
}

export class IFCFileFormatAttribute {
  static IfcFileFormats: IFCFileFormatAttribute[] = [
    { name: 'IFC', index: 0, value: IFCFileFormat.Ifc },
    { name: 'IFC-XML', index: 1, value: IFCFileFormat.IfcXML },
    { name: 'Zipped IFC', index: 2, value: IFCFileFormat.IfcZIP },
    { name: 'Zipped IFC-XML', index: 3, value: IFCFileFormat.IfcXMLZIP },
  ];
  name: string;
  index: number;
  value: IFCFileFormat;
}

export class ActivePhaseIdAttribute {
  static ActivePhaseIdAttributes: ActivePhaseIdAttribute[] = [
    { name: 'Default phase to export', index: 0, value: -1 }
  ];
  name: string;
  index: number;
  value: number;
}

export class SpaceBoundariesAttribute {
  static SpaceBoundariesAttributes: SpaceBoundariesAttribute[] = [
    { name: 'None', index: 0, value: 0 },
    { name: '1st Level', index: 1, value: 1 },
    { name: '2nd Level', index: 2, value: 2 }
  ];
  name: string;
  index: number;
  value: number;
}

export class SiteTransformBasisAttribute {
  static SiteTransformBasisAttributes: SiteTransformBasisAttribute[] = [
    { name: 'Current shared coordinates', index: 0, value: 0 },
    { name: 'Site survey point', index: 1, value: 1 },
    { name: 'Project base point', index: 2, value: 2 },
    { name: 'Internal coordinates', index: 3, value: 3 }
  ];
  name: string;
  index: number;
  value: SiteTransformBasis;
}
