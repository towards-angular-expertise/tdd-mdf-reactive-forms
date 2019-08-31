import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home/Home.component';
import { BuilderValidationComponent } from './BuilderValidation/BuilderValidation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [HomeComponent,BuilderValidationComponent],
    imports: [ CommonModule,FormsModule,ReactiveFormsModule],
    exports: [HomeComponent,BuilderValidationComponent],
    providers: []
})
export class ComponentsModule {}