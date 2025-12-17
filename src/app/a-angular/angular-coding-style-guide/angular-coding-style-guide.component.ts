import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-angular-coding-style-guide',
  standalone: true,
  imports: [MatCard],
  templateUrl: './angular-coding-style-guide.component.html',
  styleUrl: './angular-coding-style-guide.component.scss'
})
export class AngularCodingStyleGuideComponent {
  code1 = `/* avoid */
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: \`
      <h1>{{title}}</h1>
      <pre>{{heroes | json}}</pre>
    \`,
  styleUrls: ['app/app.component.css']
})
class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  heroes: Hero[] = [];

  ngOnInit() {
    getHeroes().then(heroes => (this.heroes = heroes));
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

const HEROES: Hero[] = [
  { id: 1, name: 'Bombasto' },
  { id: 2, name: 'Tornado' },
  { id: 3, name: 'Magneta' }
];

function getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES); // TODO: get hero data from the server;`;

  code2 = `import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);`;

  code3 = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }`;

  code4 = `import { Component } from '@angular/core';

import { HeroService } from './heroes';

@Component({
  selector: 'toh-app',
  template: \`
      <toh-heroes></toh-heroes>
    \`,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {}`;

  code5 = `import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from './shared';

@Component({
  selector: 'toh-heroes',
  template: \`
      <pre>{{heroes | json}}</pre>
    \`
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
}`;

  code6 = `import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
}`;

  code7 = `export interface Hero {
  id: number;
  name: string;
}`;

  code8 = `import { Hero } from './hero.model';

export const HEROES: Hero[] = [
  { id: 1, name: 'Bombasto' },
  { id: 2, name: 'Tornado' },
  { id: 3, name: 'Magneta' }
];`;

  code9 = `@Component({ … }) 
export class AppComponent { }`;

  code10 = `@Component({ … }) 
export class HeroesComponent { }`;

  code11 = `@Component({ … }) 
export class HeroListComponent { }`;

  code12 = `@Component({ … }) 
export class HeroDetailComponent { }`;

  code13 = `@Directive({ … }) 
export class ValidationDirective { }`;

  code14 = `@NgModule({ … }) 
export class AppModule`;

  code15 = `@Pipe({ name: 'initCaps' }) 
export class InitCapsPipe implements PipeTransform { }`;

  code16 = `@Injectable() 
export class UserProfileService { }`;

  code17 = `@Injectable() 
export class HeroDataService { }`;

  code18 = `@Injectable() 
export class CreditService { }`;

  code19 = `@Injectable() 
export class Logger { }`;

  code20 = `import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log('Bootstrap success'))
  .catch(err => console.error(err));`;

  code21 = `/* avoid */

@Component({
  selector: 'tohHeroButton',
  templateUrl: './hero-button.component.html'
})`;

  code22 = `@Component({
  selector: 'toh-hero-button',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}`;

  code23 = `<toh-hero-button></toh-hero-button>`

  code24 = `/* avoid */

// HeroComponent is in the Tour of Heroes feature
@Component({
  selector: 'hero'
})
export class HeroComponent {}`;
  code25 = `/* avoid */

// UsersComponent is in an Admin feature
@Component({
  selector: 'users'
})
export class UsersComponent {}`;
  code26 = `@Component({
  selector: 'toh-hero'
})
export class HeroComponent {}`;
  code27 = `@Component({
  selector: 'admin-users'
})
export class UsersComponent {}`;

  code28 = `/* avoid */

@Directive({
  selector: '[validate]'
})
export class ValidateDirective {}`;
  code29 = `@Directive({
  selector: '[tohValidate]'
})
export class ValidateDirective {}`;

  code30 = `@Pipe({ name: 'ellipsis' }) 
export class EllipsisPipe implements PipeTransform { }`;

  code31 = `@Pipe({ name: 'initCaps' }) 
export class InitCapsPipe implements PipeTransform { }`;

  code32 = `&lt;project root&gt;
  src
    app
      core
        exception.service.ts|spec.ts
        user-profile.service.ts|spec.ts
      heroes
        hero
          hero.component.ts|html|css|spec.ts
        hero-list
          hero-list.component.ts|html|css|spec.ts
        shared
          hero-button.component.ts|html|css|spec.ts
          hero.model.ts
          hero.service.ts|spec.ts
        heroes.component.ts|html|css|spec.ts
        heroes.module.ts
        heroes-routing.module.ts
      shared
        shared.module.ts
        init-caps.pipe.ts|spec.ts
        filter-text.component.ts|spec.ts
        filter-text.service.ts|spec.ts
      villains
        villain
          …
        villain-list
          …
        shared
          …
        villains.component.ts|html|css|spec.ts
        villains.module.ts
        villains-routing.module.ts
      app.component.ts|html|css|spec.ts
      app.module.ts
      app-routing.module.ts
    main.ts
    index.html
    …
  node_modules/…
  …`;

  code33 = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}`;

  code34 = `src
  app
    shared
      shared.module.ts
      init-caps.pipe.ts|spec.ts
      filter-text.component.ts|spec.ts
      filter-text.service.ts|spec.ts
    app.component.ts|html|css|spec.ts
    app.module.ts
    app-routing.module.ts
  main.ts
  index.html
…`;

  code35 = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService } from './filter-text/filter-text.service';
import { InitCapsPipe } from './init-caps.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    FilterTextComponent,
    InitCapsPipe
  ],
  providers: [FilterTextService],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    InitCapsPipe
  ]
})
export class SharedModule { }`;

  code36 = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform {
  transform = (value: string) => value;`;

  code37 = `import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'toh-filter-text',
  template: '<input type="text" id="filterText" [(ngModel)]="filter" (keyup)="filterChanged($event)" />'
})
export class FilterTextComponent {
  @Output() changed: EventEmitter<string>;

  filter = '';

  constructor() {
    this.changed = new EventEmitter<string>();
  }

  clear() {
    this.filter = '';
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(\`Filter Changed: \${this.filter}\`);
    this.changed.emit(this.filter);
  }
}`;
  code38 = `import { Injectable } from '@angular/core';

@Injectable()
export class FilterTextService {
  constructor() {
    console.log('Created an instance of FilterTextService');
  }

  filter(data: string, props: Array<string>, originalList: Array<any>) {
    let filteredList: any[];
    if (data && props && originalList) {
      data = data.toLowerCase();
      const filtered = originalList.filter(item => {
        let match = false;
        for (const prop of props) {
          if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
            match = true;
            break;
          }
        }
        return match;
      });
      filteredList = filtered;
    } else {
      filteredList = originalList;
    }
    return filteredList;
  }
}`;
  code39 = `import { Component } from '@angular/core';

import { FilterTextService } from '../shared/filter-text/filter-text.service';

@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {

  heroes = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' }
  ];

  filteredHeroes = this.heroes;

  constructor(private filterService: FilterTextService) { }

  filterChanged(searchText: string) {
    this.filteredHeroes = this.filterService.filter(searchText, ['id', 'name'], this.heroes);
  }
}`;
  code40 = `<div>This is heroes component</div>
<ul>
  <li *ngFor="let hero of filteredHeroes">
    {{hero.name}}
  </li>
</ul>
<toh-filter-text (changed)="filterChanged($event)"></toh-filter-text>`;

  code41 = `/* avoid */

@Component({
  selector: '[tohHeroButton]',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}`;

  code42 = `<!-- avoid -->

<div tohHeroButton></div>`;

  code43 = `@Component({
  selector: 'toh-hero-button',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}`;

  code44 = `<toh-hero-button></toh-hero-button>`;

  code45 = `/* avoid */

@Component({
  selector: 'toh-heroes',
  template: \`
    <div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes | async" (click)="selectedHero=hero">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name | uppercase}} is my hero</h2>
      </div>
    </div>
  \`,
  styles: [\`
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  \`]
})
export class HeroesComponent {
  heroes: Observable<Hero[]>;
  selectedHero!: Hero;

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }
}`;

  code46 = `@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:  ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Observable<Hero[]>;
  selectedHero!: Hero;

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }
}`;

  code47 = `<div>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes | async">
      <button type="button" (click)="selectedHero=hero">
        <span class="badge">{{hero.id}}</span>
        <span class="name">{{hero.name}}</span>
      </button>
    </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name | uppercase}} is my hero</h2>
  </div>
</div>`;

  code48 = `.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}

.heroes li {
  display: flex;
}

.heroes button {
  flex: 1;
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: 0;
  border-radius: 4px;
  display: flex;
  align-items: stretch;
  height: 1.8em;
}

.heroes button:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
  left: .1em;
}

.heroes button:active {
  background-color: #525252;
  color: #fafafa;
}

.heroes button.selected {
  background-color: black;
  color: white;
}

.heroes button.selected:hover {
  background-color: #505050;
  color: white;
}

.heroes button.selected:active {
  background-color: black;
  color: white;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

.heroes .name {
  align-self: center;
}`;

  code49 = `/* avoid pointless aliasing */

@Component({
  selector: 'toh-hero-button',
  template: \`<button type="button">{{label}}</button>\`
})
export class HeroButtonComponent {
  // Pointless aliases
  @Output('heroChangeEvent') heroChange = new EventEmitter<any>();
  @Input('labelAttribute') label: string;
}`;

  code50 = `<!-- avoid -->

<toh-hero-button labelAttribute="OK" (changeEvent)="doSomething()">
</toh-hero-button>`;

  code51 = `@Component({
  selector: 'toh-hero-button',
  template: \`<button type="button" >{{label}}</button>\`
})
export class HeroButtonComponent {
  // No aliases
  @Output() heroChange = new EventEmitter<any>();
  @Input() label = '';
}`;

  code52 = `import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[heroHighlight]' })
export class HeroHighlightDirective implements OnChanges {

  // Aliased because \`color\` is a better property name than \`heroHighlight\`
  @Input('heroHighlight') color = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.color || 'yellow';
  }
}`;

  code53 = `<toh-hero-button label="OK" (change)="doSomething()">
</toh-hero-button>

<!-- \`heroHighlight\` is both the directive name and the data-bound aliased property name -->
<h3 heroHighlight="skyblue">The Great Bombasto</h3>`;

  code54 = `/* avoid */

export class ToastComponent implements OnInit {

  private defaults = {
    title: '',
    message: 'May the Force be with you'
  };
  message: string;
  title: string;
  private toastElement: any;

  ngOnInit() {
    this.toastElement = document.getElementById('toh-toast');
  }

  // private methods
  private hide() {
    this.toastElement.style.opacity = 0;
    setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }

  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  private show() {
    console.log(this.message);
    this.toastElement.style.opacity = 1;
    this.toastElement.style.zIndex = 9999;

    setTimeout(() => this.hide(), 2500);
  }
}`;

  code55 = `export class ToastComponent implements OnInit {
  // public properties
  message = '';
  title = '';

  // private fields
  private defaults = {
    title: '',
    message: 'May the Force be with you'
  };
  private toastElement: any;

  // public methods
  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  ngOnInit() {
    this.toastElement = document.getElementById('toh-toast');
  }

  // private methods
  private hide() {
    this.toastElement.style.opacity = 0;
    setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }

  private show() {
    console.log(this.message);
    this.toastElement.style.opacity = 1;
    this.toastElement.style.zIndex = 9999;
    setTimeout(() => this.hide(), 2500);
  }
}`;

  code56 = `/* avoid */

import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { Hero } from '../shared/hero.model';

const heroesUrl = 'http://angular.io';

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private http: HttpClient) {}
  getHeroes() {
    this.heroes = [];
    this.http.get(heroesUrl).pipe(
      catchError(this.catchBadResponse),
      finalize(() => this.hideSpinner())
    ).subscribe((heroes: Hero[]) => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

  private catchBadResponse(err: any, source: Observable<any>) {
    // log and handle the exception
    return new Observable();
  }

  private hideSpinner() {
    // hide the spinner
  }
}`;

  code57 = `
import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from '../shared';

@Component({
  selector: 'toh-hero-list',
  template: \`...\`
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  getHeroes() {
    this.heroes = [];
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
}`;

  code58 = `/* avoid */

@Component({
  selector: 'toh-hero',
  template: \`...\`
})
export class HeroComponent {
  @Output() onSavedTheDay = new EventEmitter<boolean>();
}`;
  code59 = `<!-- avoid -->

<toh-hero (onSavedTheDay)="onSavedTheDay($event)"></toh-hero>`;
  code60 = `export class HeroComponent {
  @Output() savedTheDay = new EventEmitter<boolean>();
}`;
  code61 = `<toh-hero (savedTheDay)="onSavedTheDay($event)"></toh-hero>`;

  code62 = `/* avoid */

@Component({
  selector: 'toh-hero-list',
  template: \`
    <section>
      Our list of heroes:
      <toh-hero *ngFor="let hero of heroes" [hero]="hero">
      </toh-hero>
      Total powers: {{totalPowers}}<br>
      Average power: {{totalPowers / heroes.length}}
    </section>
  \`
})
export class HeroListComponent {
  heroes: Hero[];
  totalPowers: number;
}
`;

  code63 = `@Component({
  selector: 'toh-hero-list',
  template: \`
    <section>
      Our list of heroes:
      <toh-hero *ngFor="let hero of heroes" [hero]="hero">
      </toh-hero>
      Total powers: {{totalPowers}}<br>
      Average power: {{avgPower}}
    </section>
  \`
})
export class HeroListComponent {
  heroes: Hero[];
  totalPowers = 0;

  get avgPower() {
    return this.totalPowers / this.heroes.length;
  }
}`;
}
