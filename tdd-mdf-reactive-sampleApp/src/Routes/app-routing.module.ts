import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/Components/Home/Home.component';
import { BuilderValidationComponent } from 'src/Components/BuilderValidation/BuilderValidation.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'builder', component: BuilderValidationComponent },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
