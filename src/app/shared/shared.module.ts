import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Module
import { ReactiveFormsModule } from "@angular/forms";

//Component
import { InputComponent } from "./input/input.component";
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [InputComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, ModalComponent],
})
export class SharedModule {}
