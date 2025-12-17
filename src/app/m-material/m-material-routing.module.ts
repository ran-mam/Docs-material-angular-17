import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MHomeComponent } from '../m-home/m-home.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { CoreComponent } from './core/core.component';
import { DateComponent } from './date/date.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from '@angular/material/tooltip';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: 'home', component: MHomeComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'bottomSheet', component: BottomSheetComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'buttonToggle', component: ButtonToggleComponent },
  { path: 'card', component: CardComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'core', component: CoreComponent },
  { path: 'datePicker', component: DateComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'expansionPanel', component: ExpansionPanelComponent },
  { path: 'formField', component: FormFieldComponent },
  { path: 'gridList', component: GridListComponent },
  { path: 'icon', component: IconComponent },
  { path: 'input', component: InputComponent },
  { path: 'list', component: ListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'progressBar', component: ProgressBarComponent },
  { path: 'progressSpinner', component: ProgressSpinnerComponent },
  { path: 'radioButton', component: RadioButtonComponent },
  { path: 'ripples', component: RipplesComponent },
  { path: 'select', component: SelectComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'slideToggle', component: SlideToggleComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'snackBar', component: SnackbarComponent },
  { path: 'sortHeader', component: SortHeaderComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'table', component: TableComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'toolTip', component: TooltipComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'tree', component: TreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MMaterialRoutingModule { }
