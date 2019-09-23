import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveTesterComponent } from './resolve-tester/resolve-tester.component';
import { Resolver } from './resolve-tester/resolver.service';


const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: ResolveTesterComponent
  }],
  resolve: {
    resolvedData: Resolver
  }

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
