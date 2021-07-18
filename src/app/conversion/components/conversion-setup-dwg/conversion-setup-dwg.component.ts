import { Component, OnInit } from '@angular/core';
import { ExportColorMode, PropOverrideMode } from '../../classes/base-export-options.class';
import { ACADExportOptions, Color, ExportUnit, LineScaling, SolidGeometry, TextTreatment } from '../../classes/dwg-export-options.class';
import { ExportLayerInfo, ExportLayerKey, ExportLayerTable } from '../../classes/export-layer-table.class';
import LayerTable from '../../../../assets/files/layerTable.json'

@Component({
  selector: 'app-conversion-setup-dwg',
  templateUrl: './conversion-setup-dwg.component.html',
  styleUrls: ['./conversion-setup-dwg.component.scss']
})
export class ConversionSetupDwgComponent implements OnInit {

  panelOpenState = false;
  export: boolean = true;
  dwgExportConfiguration: ACADExportOptions;

  textTreatmentAttributes: TextTreatmentAttribute[] = TextTreatmentAttribute.TextTreatmentAttributes;
  propOverridesAttributes: PropOverridesAttribute[] = PropOverridesAttribute.PropOverridesAttributes;
  lineScalingAttributes: LineScalingAttribute[] = LineScalingAttribute.LineScalingAttributes;

  exportLayerTable: ExportLayerTable = new ExportLayerTable();
  
  constructor() { 
    this.dwgExportConfiguration = new ACADExportOptions();
    // this.dwgExportConfiguration.LineScaling = LineScaling.ModelSpace

    LayerTable.forEach(layerTableElement => {
      this.exportLayerTable.Add(layerTableElement.Key,layerTableElement.Value as ExportLayerInfo);
      
    });
  }

  ngOnInit(): void {

  }

}

export class TextTreatmentAttribute {
  static TextTreatmentAttributes: TextTreatmentAttribute[] = [
    { name: 'Preserve visual fidelity', index: 0, value: 0 },
    { name: 'Preserve editability', index: 1, value: 1 }
  ];
  name: string;
  index: number;
  value: TextTreatment;
}

export class PropOverridesAttribute {
  static PropOverridesAttributes: PropOverridesAttribute[] = [
    { name: 'Export category properties BYLAYER and overrides BYENTITY', index: 0, value: 0 },
    { name: 'Export all properties BYLAYER, but do not export overrides', index: 1, value: 1 },
    { name: 'Export all properties BYLAYER, and create new layers for overrides', index: 2, value: 2 }
  ];
  name: string;
  index: number;
  value: PropOverrideMode;
}

export class LineScalingAttribute {
  static LineScalingAttributes: LineScalingAttribute[] = [
    { name: 'Scaled Linetype definitions', index: 0, value: 0 },
    { name: 'Modelspace (PSLTSCALE = 0)', index: 1, value: 1 },
    { name: 'Paperspace (PSLTSCALE = 1)', index: 2, value: 2 }
  ];
  name: string;
  index: number;
  value: LineScaling;
}


