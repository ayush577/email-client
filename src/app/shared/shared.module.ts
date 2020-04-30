import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Module
import { ReactiveFormsModule } from "@angular/forms";

//Component
import { InputComponent } from "./input/input.component";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent],
})
export class SharedModule {}
