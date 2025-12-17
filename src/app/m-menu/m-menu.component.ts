import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MENU_MATERIAL } from './nav-link-material';
import { MENU_ANGULAR } from './nav-link-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-m-menu',
  templateUrl: './m-menu.component.html',
  styleUrl: './m-menu.component.scss'
})

export class MMenuComponent implements OnInit, AfterViewInit {

  currentRouter !: string;

  ngAfterViewInit(): void {
   
  }

  menuItemsMateral = MENU_MATERIAL;
  menuItemsAngular= MENU_ANGULAR;

  ngOnInit(): void {

  }


}



