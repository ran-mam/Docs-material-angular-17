import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Icon } from './icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  standalone: true,
  imports: [
    MatIcon
  ]
})
export class IconComponent implements OnInit {

  icons : string[] = Icon; 

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    // var td = this.element.nativeElement.querySelectorAll(".material-icons");
    // var array = new Array();
    // for (let i = 0; i < td.length; i++) {
    //   array.push(td[i].textContent);
    // }

    // this.icons = array;
  }
}
