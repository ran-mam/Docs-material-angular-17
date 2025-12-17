import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  standalone:true,
  imports: [
    MaterialModule
  ]
})
export class PaginatorComponent {
  code1 =`
import {Component} from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

/**
 * @title Paginator
 */
@Component({
  selector: 'paginator-overview-example',
  templateUrl: 'paginator-overview-example.html',
  standalone: true,
  imports: [MatPaginatorModule],
})
export class PaginatorOverviewExample {}
  `;

  code2 = `
<mat-paginator [length]="100"
  [pageSize]="10"
  [pageSizeOptions]="[5, 10, 25, 100]"
  aria-label="Select page">
</mat-paginator>
  `;
}
