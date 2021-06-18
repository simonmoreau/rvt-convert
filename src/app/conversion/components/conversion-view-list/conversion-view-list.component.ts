import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { View, ViewType } from '../../classes/view.class';


const viewData: View[] = [
  new View('3D View', ViewType.View3D),
  new View('Elevation East',ViewType.ViewSection),
  new View('Elevation North',ViewType.ViewSection),
  new View('Elevation South',ViewType.ViewSection),
  new View('Elevation West',ViewType.ViewSection),
  new View('FloorplanLevel 0',ViewType.ViewPlan),
  new View('FloorplanLevel 1',ViewType.ViewPlan),
  new View('FloorplanSIte',ViewType.ViewPlan),
  new View('LeendDoorLeend',ViewType.ViewDrafting),
  new View('LeendKePlan',ViewType.ViewDrafting),
  new View('ReflectedcellmPlanLevelO',ViewType.ViewDrafting),
  new View('ReflectedcellmPlanLeveH',ViewType.ViewDrafting),
  new View('SheetAmO—Unnamed',ViewType.ViewSheet)  
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-conversion-view-list',
  templateUrl: './conversion-view-list.component.html',
  styleUrls: ['./conversion-view-list.component.scss'],
})
export class ConversionViewListComponent implements  AfterViewInit, OnInit  {
  
  displayedColumns: string[] = [
    'select',
    'viewType',
    'name'
  ];
  dataSource = new MatTableDataSource<View>(viewData);
  selection = new SelectionModel<View>(true, []);
  viewTypes = ViewType;
  filteredValues: FilteredValues = new FilteredValues();
  globalFilter = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/thumpup.svg'));
    iconRegistry.addSvgIcon('house_3d', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/house_3d.svg'));
    iconRegistry.addSvgIcon('ceilling', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ceilling.svg'));
    iconRegistry.addSvgIcon('elevation', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/elevation.svg'));
    iconRegistry.addSvgIcon('legend', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/legend.svg'));
    iconRegistry.addSvgIcon('plan', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plan.svg'));
    iconRegistry.addSvgIcon('sheet', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sheet.svg'));
    
  }
  ngOnInit(): void {
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: View, filter: string): boolean => {
      var globalMatch = !this.globalFilter;

      if (this.globalFilter) {
        // search all text fields
        globalMatch = data.name.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
      }

      if (!globalMatch) {
        return;
      }

      let searchString: FilteredValues = JSON.parse(filter);

      return data.viewType == searchString.selectedViewType &&
        data.name.toString().trim().toLowerCase().indexOf(searchString.searchTerm.toLowerCase()) !== -1;
    }
    return myFilterPredicate;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: any) {

    this.dataSource.filter = JSON.stringify(this.filteredValues);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

export class FilteredValues {
  
  selectedViewType: ViewType;
  searchTerm: string;

  constructor() {
    this.selectedViewType = null;
    this.searchTerm = '';
  }
}
