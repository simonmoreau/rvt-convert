import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

export class View {
  name: string;
  viewType: ViewType;
  viewIcon: string;

  constructor(name:string, viewType: ViewType)
  {
    this.name = name;
    this.viewType = viewType;
    this.viewIcon = this.GetViewIcon();
  }

  private GetViewIcon(): string {
    switch (this.viewType) {
      case ViewType.TableView:
        return 'ceilling';
      case ViewType.View3D:
        return 'house_3d';
      case ViewType.ViewDrafting:
        return 'ceilling';
      case ViewType.ViewPlan:
        return 'plan';
      case ViewType.ViewSection:
        return 'elevation';
      case ViewType.ViewSheet:
        return 'sheet';
      default:
        return 'house_3d';
    }
  }
}

export enum ViewType {
  TableView = 0,
  View3D = 1,
  ViewDrafting = 2,
  ViewPlan = 3,
  ViewSection = 4,
  ViewSheet = 5
}

const viewData: View[] = [
  new View('3D View',0),
  new View('Elevation East',0),
  new View('Elevation North',0),
  new View('Elevation South',1),
  new View('Elevation West',1),
  new View('FloorplanLevel 0',1),
  new View('FloorplanLevel 1',2),
  new View('FloorplanSIte',2),
  new View('LeendDoorLeend',3),
  new View('LeendKePlan',3),
  new View('ReflectedcellmPlanLevelO',4),
  new View('ReflectedcellmPlanLeveH',4),
  new View('SheetAmO—Unnamed',5)  
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-conversion-view-list',
  templateUrl: './conversion-view-list.component.html',
  styleUrls: ['./conversion-view-list.component.scss'],
})
export class ConversionViewListComponent {
  
  displayedColumns: string[] = [
    'select',
    'viewType',
    'name'
  ];
  dataSource = new MatTableDataSource<View>(viewData);
  selection = new SelectionModel<View>(true, []);

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/thumpup.svg'));
    iconRegistry.addSvgIcon('house_3d', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/house_3d.svg'));
    iconRegistry.addSvgIcon('ceilling', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ceilling.svg'));
    iconRegistry.addSvgIcon('elevation', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/elevation.svg'));
    iconRegistry.addSvgIcon('legend', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/legend.svg'));
    iconRegistry.addSvgIcon('plan', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plan.svg'));
    iconRegistry.addSvgIcon('sheet', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sheet.svg'));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: View): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.viewType + 1
    }`;
  }
}
