import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class BadgeComponent implements OnInit {
  code1 = '\n' +
    '<div matBadge="4" matBadgeOverlap="false" class="demo-section">Text with a badge</div>\n' +
    '\n' +
    '<div matBadge="1" matBadgeSize="large" class="demo-section">Text with large badge</div>\n' +
    '\n' +
    '<div class="demo-section">\n' +
    '  Button with a badge on the left\n' +
    '  <button mat-raised-button color="primary"\n' +
    '      matBadge="8" matBadgePosition="before" matBadgeColor="accent">\n' +
    '    Action\n' +
    '  </button>\n' +
    '</div>\n' +
    '\n' +
    '<div class="demo-section">\n' +
    '    Button toggles badge visibility\n' +
    '    <button mat-raised-button matBadge="7" [matBadgeHidden]="hidden" (click)="toggleBadgeVisibility()">\n' +
    '        Hide\n' +
    '    </button>\n' +
    '  </div>\n' +
    '\n' +
    '<div class="demo-section">\n' +
    '  Icon with a badge\n' +
    '  <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>\n' +
    '    <span class="cdk-visually-hidden">\n' +
    '      Example with a home icon with overlaid badge showing the number 15\n' +
    '    </span>\n' +
    '</div>';

  code2 = '\n' +
    '<button mat-raised-button color="primary"\n' +
    '    matBadge="8" matBadgePosition="before" matBadgeColor="accent">\n' +
    '  Action\n' +
    '</button>';

  code3 = '\n' +
    '<div matBadge="4" matBadgeOverlap="false" class="demo-section">Text with a badge</div>';

  code4 = '\n' +
    '<div matBadge="1" matBadgeSize="large" class="demo-section">Text with large badge</div>';

  code5 = '\n' +
    '<button mat-raised-button matBadge="7" [matBadgeHidden]="hidden" (click)="toggleBadgeVisibility()">' +
    '    Hide\n' +
    '</button>';

  code6 = '\n' +
    '<mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>';

  hidden = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
   
  }
}
