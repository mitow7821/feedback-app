import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [AddComponent, EditComponent],
  imports: [CommonModule, FormRoutingModule, ReactiveFormsModule],
})
export class FormModule {}
