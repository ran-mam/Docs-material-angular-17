import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedStandaloneComponent } from './getting-started-standalone/getting-started-standalone.component';
import { MigrateExistingStandaloneComponent } from './migrate-existing-standalone/migrate-existing-standalone.component';
import { AngularChangeDetectionComponent } from './angular-change-detection/angular-change-detection.component';
import { ResolvingZonePollutionComponent } from './resolving-zone-pollution/resolving-zone-pollution.component';
import { SlowComputationComponent } from './slow-computation/slow-computation.component';
import { SkippingComponent } from './skipping/skipping.component';
import { AngularRoutingComponent } from './angular-routing/angular-routing.component';
import { CommonRoutingComponent } from './common-routing/common-routing.component';
import { AngularRouteSinglePageComponent } from './angular-route-single-page/angular-route-single-page.component';
import { CustomeRouteComponent } from './custome-route/custome-route.component';
import { TourOfHereosComponent } from './tour-of-hereos/tour-of-hereos.component';
import { RouterReferenceComponent } from './router-reference/router-reference.component';
import { FormsAngularComponent } from './forms-angular/forms-angular.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';
import { ValiditingFormInputComponent } from './validiting-form-input/validiting-form-input.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { AngularCodingStyleGuideComponent } from './angular-coding-style-guide/angular-coding-style-guide.component';

const routes: Routes = [
  { path: 'accessibility', component: AccessibilityComponent },
  { path :'angular_coding_style_guide', component : AngularCodingStyleGuideComponent },
  { path: 'getting_started_standalone', component: GettingStartedStandaloneComponent },
  { path: 'migrate_existing_standalone', component: MigrateExistingStandaloneComponent },
  { path: 'angular_change_detection', component: AngularChangeDetectionComponent },
  { path: 'resolving_zone_pollution', component: ResolvingZonePollutionComponent },
  { path: 'slow_computation', component: SlowComputationComponent },
  { path: 'skipping_component', component: SkippingComponent },
  { path: 'angular_routing', component: AngularRoutingComponent },
  { path: 'common_routing', component: CommonRoutingComponent },
  { path: 'angular_route_in_single_page', component: AngularRouteSinglePageComponent },
  { path: 'custome_route', component: CustomeRouteComponent },
  { path: 'tour_of_heroes', component: TourOfHereosComponent },
  { path: 'router_reference', component: RouterReferenceComponent },
  { path: 'forms_angular', component: FormsAngularComponent },
  { path: 'reactive_forms', component: ReactiveFormComponent },
  { path: 'typed_forms', component: TypedFormsComponent },
  { path: 'validiting_form_input', component: ValiditingFormInputComponent },
  { path: 'dynamic_forms', component: DynamicFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AAngularRoutingModule { }
