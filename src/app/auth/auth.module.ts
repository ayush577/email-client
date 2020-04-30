import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Extra Module from angular
import { ReactiveFormsModule } from "@angular/forms";

//Custom Routing for Auth
import { AuthRoutingModule } from "./auth-routing.module";

//Components
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

//ShareAble Component
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
