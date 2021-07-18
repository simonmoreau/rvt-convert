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
  children?: LayerMappingNode[];
}

const TREE_DATA: LayerMappingNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

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

  @Input() public layerTable: ExportLayerTable;
  // ngOnInit(): void {
  // }

  private _transformer = (node: LayerMappingNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
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
        currentLayerMapping = {
          category: key.CategoryName,
          LayerName: value.LayerName,
          ColorNumber: value.ColorNumber,
          Modifier: "",
          CutLayerName: value.CutLayerName,
          CutColorNumber: value.CutColorNumber,
          CutModifier: ""
        };

        let currentLayerMappingNode: LayerMappingNode = {
          name: currentLayerMapping.category,
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
            
            currentLayerMapping = {
              category: subcategoriesLayerMappingKey.SubCategoryName,
              LayerName: this.layerTable.get(subcategoriesLayerMappingKey).LayerName,
              ColorNumber: this.layerTable.get(subcategoriesLayerMappingKey).ColorNumber,
              Modifier: "",
              CutLayerName: this.layerTable.get(subcategoriesLayerMappingKey).CutLayerName,
              CutColorNumber: this.layerTable.get(subcategoriesLayerMappingKey).CutColorNumber,
              CutModifier: ""
            };

            let currentLayerMappingNode: LayerMappingNode = {
              name: currentLayerMapping.category,
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
