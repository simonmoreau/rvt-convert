import { Component, Input, OnInit } from '@angular/core';
import { ExportLayerInfo, ExportLayerKey, ExportLayerTable, LayerCategoryType } from '../../classes/export-layer-table.class';
import { Node } from '@vaseap/ng-material-treetable';

@Component({
  selector: 'app-conversion-setup-layer-table',
  templateUrl: './conversion-setup-layer-table.component.html',
  styleUrls: ['./conversion-setup-layer-table.component.scss']
})
export class ConversionSetupLayerTableComponent implements OnInit {

  @Input() public layerTable: ExportLayerTable;
  layerMappingNodes: Node<LayerMapping>[];

  constructor() { }

  ngOnInit(): void {

    this.layerMappingNodes = this.BuildCategoryTypeNodes();

    this.layerTable.forEach((value: ExportLayerInfo, key: ExportLayerKey) => {

      let currentLayerMapping: LayerMapping = null;

      let subcategoriesLayerMappings: ExportLayerKey[] = [];

      if (key.SubCategoryName != "")
      {
        subcategoriesLayerMappings.push(key);
      }
      else {
        currentLayerMapping = {
          category: key.CategoryName,
          LayerName: value.LayerName,
          ColorNumber: value.ColorNumber,
          Modifier: "",
          CutLayerName: value.CutLayerName,
          CutColorNumber: value.CutColorNumber,
          CutModifier: ""
        };

        let currentLayerMappingNode: Node<LayerMapping> = {
          value: currentLayerMapping,
          children: [],
        }

        switch (value.CategoryType as LayerCategoryType) {
          case LayerCategoryType.Model:
            this.layerMappingNodes[0].children.push(currentLayerMappingNode)
            break;
          case LayerCategoryType.Annotation:
            this.layerMappingNodes[1].children.push(currentLayerMappingNode)
            break;
          case LayerCategoryType.AnalyticalModel:
            this.layerMappingNodes[2].children.push(currentLayerMappingNode)
            break;
          case LayerCategoryType.Imported:
            this.layerMappingNodes[3].children.push(currentLayerMappingNode)
            break;
          case LayerCategoryType.Modifier:
            this.layerMappingNodes[4].children.push(currentLayerMappingNode)
            break;
            case LayerCategoryType.Unsorted:
              this.layerMappingNodes[5].children.push(currentLayerMappingNode)
              break;
          default:
            this.layerMappingNodes[5].children.push(currentLayerMappingNode)
            break;
        }
      }

      subcategoriesLayerMappings.forEach(subcategoriesLayerMappingKey => {
        this.layerMappingNodes.forEach(groupLayerMappingNodes => {
          const filteredChildren: Node<LayerMapping>[] = groupLayerMappingNodes.children.filter(x => x.value.category == subcategoriesLayerMappingKey.CategoryName);
          if (filteredChildren.length != 0)
          {
            
            currentLayerMapping = {
              category: subcategoriesLayerMappingKey.SubCategoryName,
              LayerName: this.layerTable.get(subcategoriesLayerMappingKey).LayerName,
              ColorNumber: this.layerTable.get(subcategoriesLayerMappingKey).ColorNumber,
              Modifier: "",
              CutLayerName: this.layerTable.get(subcategoriesLayerMappingKey).CutLayerName,
              CutColorNumber: this.layerTable.get(subcategoriesLayerMappingKey).CutColorNumber,
              CutModifier: ""
            };

            let currentLayerMappingNode: Node<LayerMapping> = {
              value: currentLayerMapping,
              children: [],
            }
            filteredChildren[0].children.push(currentLayerMappingNode);
          }
        });
      });
    });
  }

  private BuildCategoryTypeNodes(): Node<LayerMapping>[] {

    let layerMappingNode: Node<LayerMapping>[] = [];

    for (var layerCategoryType in LayerCategoryType) {
      var isValueProperty = parseInt(layerCategoryType, 10) >= 0
      if (isValueProperty) {
        console.log("enum member: ", LayerCategoryType[layerCategoryType]);

        const categoryLayerMapping: LayerMapping = {
          category: LayerCategoryType[layerCategoryType],
          LayerName: "",
          ColorNumber: null,
          Modifier: "",
          CutLayerName: "",
          CutColorNumber: null,
          CutModifier: ""
        };

        let currentLayerMappingNode: Node<LayerMapping> = {
          value: categoryLayerMapping,
          children: [],
        }

        layerMappingNode.push(currentLayerMappingNode);
      }
    }

    const undefinedLayerMapping: LayerMapping = {
      category: "Others",
      LayerName: "",
      ColorNumber: null,
      Modifier: "",
      CutLayerName: "",
      CutColorNumber: null,
      CutModifier: ""
    };

    const undefinedLayerMappingNode: Node<LayerMapping> = {
      value: undefinedLayerMapping,
      children: [],
    }

    layerMappingNode.push(undefinedLayerMappingNode);

    return layerMappingNode;
  }

}

interface LayerMapping {
  category: string;
  LayerName: string;
  ColorNumber: number;
  Modifier: string;
  CutLayerName: string;
  CutColorNumber: number;
  CutModifier: string;
}
