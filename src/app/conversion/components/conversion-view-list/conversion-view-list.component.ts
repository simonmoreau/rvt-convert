import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface View {
  name: string;
  viewType: ViewType;
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
  { viewType: 0, name: 'Hydrogen' },
  { viewType: 0, name: 'Helium' },
  { viewType: 1, name: 'Lithium' },
  { viewType: 1, name: 'Beryllium'},
  { viewType: 2, name: 'Boron' },
  { viewType: 2, name: 'Carbon'},
  { viewType: 3, name: 'Nitrogen' },
  { viewType: 3, name: 'Oxygen' },
  { viewType: 4, name: 'Fluorine' },
  { viewType: 4, name: 'Neon'},
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
