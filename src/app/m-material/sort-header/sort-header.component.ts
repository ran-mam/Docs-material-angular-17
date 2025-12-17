import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-sort-header',
  templateUrl: './sort-header.component.html',
  styleUrl: './sort-header.component.scss',
  standalone: true,
  imports: [
    MatSortModule,
    MatTableModule
  ] 
})
export class SortHeaderComponent implements AfterViewInit,OnInit{
  code1 = `
  import {Component} from '@angular/core';
  import {Sort, MatSortModule} from '@angular/material/sort';
  
  export interface Dessert {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
  }
  
  /**
   * @title Sorting overview
   */
  @Component({
    selector: 'sort-overview-example',
    templateUrl: 'sort-overview-example.html',
    styleUrl: 'sort-overview-example.css',
    standalone: true,
    imports: [MatSortModule],
  })
  export class SortOverviewExample {
    desserts: Dessert[] = [
      {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
      {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
      {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
      {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
      {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
    ];
  
    sortedData: Dessert[];
  
    constructor() {
      this.sortedData = this.desserts.slice();
    }
  
    sortData(sort: Sort) {
      const data = this.desserts.slice();
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }
  
      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'name':
            return compare(a.name, b.name, isAsc);
          case 'calories':
            return compare(a.calories, b.calories, isAsc);
          case 'fat':
            return compare(a.fat, b.fat, isAsc);
          case 'carbs':
            return compare(a.carbs, b.carbs, isAsc);
          case 'protein':
            return compare(a.protein, b.protein, isAsc);
          default:
            return 0;
        }
      });
    }
  }
  
  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  `

  code2 = `
<table matSort (matSortChange)="sortData($event)">
  <tr>
    <th mat-sort-header="name">Dessert (100g)</th>
    <th mat-sort-header="calories">Calories</th>
    <th mat-sort-header="fat">Fat (g)</th>
    <th mat-sort-header="carbs">Carbs (g)</th>
    <th mat-sort-header="protein">Protein (g)</th>
  </tr>

  @for (dessert of sortedData; track dessert) {
    <tr>
      <td>{{dessert.name}}</td>
      <td>{{dessert.calories}}</td>
      <td>{{dessert.fat}}</td>
      <td>{{dessert.carbs}}</td>
      <td>{{dessert.protein}}</td>
    </tr>
  }
</table>
  `

  code3 = `
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
/**
 * @title Table with sorting
 */
@Component({
  selector: 'table-sorting-example',
  styleUrl: 'table-sorting-example.css',
  templateUrl: 'table-sorting-example.html',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
})
export class TableSortingExample implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce('Sorted \${sortState.direction}ending');
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
  `

  code4 = `
<table mat-table [dataSource]="dataSource" matSort (matSortChange)="announceSortChange($event)"
       class="mat-elevation-z8">

  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by number">
      No.
    </th>
    <td mat-cell *matCellDef="let element"> {{element.position}} </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by name">
      Name
    </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by weight">
      Weight
    </th>
    <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by symbol">
      Symbol
    </th>
    <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
  `

  // Sorting overview
  desserts: Dessert[] = [
    { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
  ];

  sortedData: Dessert[];

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.calories, b.calories, isAsc);
        case 'fat':
          return compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }

  ngOnInit() {
    console.log(this.dataSource);
  }
  // Adding sort to table headers
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

 // Sorting overview function
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

