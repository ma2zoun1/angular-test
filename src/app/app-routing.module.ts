import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiformsComponent } from './multiforms/multiforms.component';
import { VerifiedformsComponent } from './verifiedforms/verifiedforms.component';
import { verifyGuard } from './verify.guard';

const routes: Routes = [
  { path: '', redirectTo: 'multiforms', pathMatch: 'full' },
  {path:"multiforms",component:MultiformsComponent},
  {path:"verifiedforms",
  component:VerifiedformsComponent,
  // canActivate:[verifyGuard]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
