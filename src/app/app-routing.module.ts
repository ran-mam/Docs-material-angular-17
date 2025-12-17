import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "material", loadChildren: () => import("./m-material/m-material.module").then(m => m.MMaterialModule)},
  { path: "angular-doc-original", loadChildren: () => import("./a-angular/a-angular.module").then(m => m.AAngularModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
