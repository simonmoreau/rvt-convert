import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import AcadIsoPatFile from '../../../../assets/files/acadiso-pat.json';

@Component({
  selector: 'app-conversion-setup-pattern-table',
  templateUrl: './conversion-setup-pattern-table.component.html',
  styleUrls: ['./conversion-setup-pattern-table.component.scss']
})
export class ConversionSetupPatternTableComponent implements OnInit, AfterViewInit{

  @Input() public patternTable: FillPattern[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  displayedColumns: string[] = ['name', 'target', 'acad'];
  acadPatterns: AcadIsoPat[];

  dataSource: MatTableDataSource<FillPattern> = new MatTableDataSource();

  constructor() {

   }

  ngOnInit(): void {
    this.acadPatterns = AcadIsoPatFile.slice(0,10);
    this.dataSource.data = this.patternTable;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {

    
  
    /* now it's okay to set large data source... */
    
    
  }

}

export class FillPattern{

  public constructor(init?:Partial<FillPattern>) {
    Object.assign(this, init);
}

  Name:string;
  Target:string;
  DWG:string;
}

export interface AcadIsoPat {
  name:string;
}
