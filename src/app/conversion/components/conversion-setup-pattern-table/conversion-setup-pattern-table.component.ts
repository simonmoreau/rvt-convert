import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import AcadIsoPatFile from '../../../../assets/files/acadiso-pat.json';

@Component({
  selector: 'app-conversion-setup-pattern-table',
  templateUrl: './conversion-setup-pattern-table.component.html',
  styleUrls: ['./conversion-setup-pattern-table.component.scss']
})
export class ConversionSetupPatternTableComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() public patternTable: FillPattern[];
  @Input() public showModel: boolean;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  displayedColumns: string[] = ['name', 'target', 'acad'];
  acadPatterns: AcadIsoPat[];

  dataSource: MatTableDataSource<FillPattern> = new MatTableDataSource();

  constructor() {

  }

  ngOnInit(): void {
    this.acadPatterns = AcadIsoPatFile.slice(0, 10);
    this.filterPattern(this.showModel);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filterPattern(changes.showModel.currentValue);
  }

  filterPattern(showModel: boolean) {
    if (showModel) {
      this.dataSource.data = this.patternTable.filter(f => f.Target == 'Model');
    }
    else {
      this.dataSource.data = this.patternTable.filter(f => f.Target == 'Drafting');
    }
  }


  ngAfterViewInit() {

  }

}

export class FillPattern {

  public constructor(init?: Partial<FillPattern>) {
    Object.assign(this, init);
  }

  Name: string;
  Target: string;
  DWG: string;
}

export interface AcadIsoPat {
  name: string;
}
