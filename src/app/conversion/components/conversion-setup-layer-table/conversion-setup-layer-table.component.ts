import {FlatTreeControl} from '@angular/cdk/tree';
import { OnInit } from '@angular/core';
import {Component, Input} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { ExportLayerInfo, ExportLayerKey, ExportLayerTable, LayerCategoryType } from '../../classes/export-layer-table.class';

/**
 * LayerMapping data with nested structure.
 * Each node has a name and an optional list of children.
 */
 interface LayerMappingNode {
  name: string;
  LayerName: string;
  ColorNumber: number;
  Modifier: string;
  CutLayerName: string;
  CutColorNumber: number;
  CutModifier: string;
  children?: LayerMappingNode[];
}

/** Flat node with expandable and level information */
interface LayerMappingFlatNode {
  expandable: boolean;
  name: string;
  level: number;
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

@Component({
  selector: 'app-conversion-setup-layer-table',
  templateUrl: './conversion-setup-layer-table.component.html',
  styleUrls: ['./conversion-setup-layer-table.component.scss']
})
export class ConversionSetupLayerTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'LayerName', 'ColorNumber', 'Modifier', 'CutLayerName', 'CutColorNumber', 'CutModifier'];

  @Input() public layerTable: ExportLayerTable;
  
  private _transformer = (node: LayerMappingNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      LayerName: node.LayerName,
      ColorNumber: node.ColorNumber,
      Modifier: node.Modifier,
      CutLayerName: node.CutLayerName,
      CutColorNumber: node.CutColorNumber,
      CutModifier: node.CutModifier,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<LayerMappingFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    // this.dataSource.data = TREE_DATA;

  }
  ngOnInit(): void {
    let treeData: LayerMappingNode[] = this.BuildCategoryTypeNodes();
    treeData = this.AddCategoryNodes(treeData);
    this.dataSource.data = treeData;
  }

  // onSearchChange(searchValue: string): void {  
  //   this.dataSource.data = this.dataSource.data;
  // }

  hasChild = (_: number, node: LayerMappingFlatNode) => node.expandable;

  private BuildCategoryTypeNodes(): LayerMappingNode[] {

    let layerMappingNodes: LayerMappingNode[] = [];

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

        let currentLayerMappingNode: LayerMappingNode = {
          name: categoryLayerMapping.category,
          LayerName: categoryLayerMapping.LayerName,
          ColorNumber: categoryLayerMapping.ColorNumber,
          Modifier: categoryLayerMapping.Modifier,
          CutLayerName: categoryLayerMapping.CutLayerName,
          CutColorNumber: categoryLayerMapping.CutColorNumber,
          CutModifier: categoryLayerMapping.CutModifier,
          children: [],
        }

        layerMappingNodes.push(currentLayerMappingNode);
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

    const undefinedLayerMappingNode: LayerMappingNode = {
      name: undefinedLayerMapping.category,
      LayerName: undefinedLayerMapping.LayerName,
      ColorNumber: undefinedLayerMapping.ColorNumber,
      Modifier: undefinedLayerMapping.Modifier,
      CutLayerName: undefinedLayerMapping.CutLayerName,
      CutColorNumber: undefinedLayerMapping.CutColorNumber,
      CutModifier: undefinedLayerMapping.CutModifier,
      children: [],
    }

    layerMappingNodes.push(undefinedLayerMappingNode);

    return layerMappingNodes;
  }

  private AddCategoryNodes(categoryTypeNodes : LayerMappingNode[] ): LayerMappingNode[] {

    this.layerTable.forEach((value: ExportLayerInfo, key: ExportLayerKey) => {

      let currentLayerMapping: LayerMapping = null;

      let subcategoriesLayerMappings: ExportLayerKey[] = [];

      if (key.SubCategoryName != "")
      {
        subcategoriesLayerMappings.push(key);
      }
      else {
        let cutColorNumber = null;
        if (value.CutLayerName) { cutColorNumber = value.CutColorNumber;}

        currentLayerMapping = {
          category: key.CategoryName,
          LayerName: value.LayerName,
          ColorNumber: value.ColorNumber,
          Modifier: "",
          CutLayerName: value.CutLayerName,
          CutColorNumber: cutColorNumber,
          CutModifier: ""
        };

        let currentLayerMappingNode: LayerMappingNode = {
          name: currentLayerMapping.category,
          LayerName: currentLayerMapping.LayerName,
          ColorNumber: currentLayerMapping.ColorNumber,
          Modifier: currentLayerMapping.Modifier,
          CutLayerName: currentLayerMapping.CutLayerName,
          CutColorNumber: currentLayerMapping.CutColorNumber,
          CutModifier: currentLayerMapping.CutModifier,
          children: [],
        }

        switch (value.CategoryType as LayerCategoryType) {
          case LayerCategoryType.Model:
            categoryTypeNodes[0].children.push(currentLayerMappingNode)
            break;
          case LayerCategoryType.Annotation:
            categoryTypeNodes[1].children.push(currentLayerMappingNode)
            break;
          case LayerCategoryType.AnalyticalModel:
            categoryTypeNodes[2].children.push(currentLayerMappingNode)
            break;
          case LayerCategoryType.Imported:
            categoryTypeNodes[3].children.push(currentLayerMappingNode)
            break;
          case LayerCategoryType.Modifier:
            categoryTypeNodes[4].children.push(currentLayerMappingNode)
            break;
            case LayerCategoryType.Unsorted:
          categoryTypeNodes[5].children.push(currentLayerMappingNode)
              break;
          default:
            categoryTypeNodes[5].children.push(currentLayerMappingNode)
            break;
        }
      }

      subcategoriesLayerMappings.forEach(subcategoriesLayerMappingKey => {
        categoryTypeNodes.forEach(groupLayerMappingNodes => {
          const filteredChildren: LayerMappingNode[] = groupLayerMappingNodes.children.filter(x => x.name == subcategoriesLayerMappingKey.CategoryName);
          if (filteredChildren.length != 0)
          {
            let cutColorNumber = null;
            if (this.layerTable.get(subcategoriesLayerMappingKey).CutLayerName) { cutColorNumber = this.layerTable.get(subcategoriesLayerMappingKey).CutColorNumber;}

            currentLayerMapping = {
              category: subcategoriesLayerMappingKey.SubCategoryName,
              LayerName: this.layerTable.get(subcategoriesLayerMappingKey).LayerName,
              ColorNumber: this.layerTable.get(subcategoriesLayerMappingKey).ColorNumber,
              Modifier: "",
              CutLayerName: this.layerTable.get(subcategoriesLayerMappingKey).CutLayerName,
              CutColorNumber: cutColorNumber,
              CutModifier: ""
            };

            let currentLayerMappingNode: LayerMappingNode = {
              name: currentLayerMapping.category,
              LayerName: currentLayerMapping.LayerName,
              ColorNumber: currentLayerMapping.ColorNumber,
              Modifier: currentLayerMapping.Modifier,
              CutLayerName: currentLayerMapping.CutLayerName,
              CutColorNumber: currentLayerMapping.CutColorNumber,
              CutModifier: currentLayerMapping.CutModifier,
              children: [],
            }
            filteredChildren[0].children.push(currentLayerMappingNode);
          }
        });
      });
    });

    return categoryTypeNodes;
  }

}
