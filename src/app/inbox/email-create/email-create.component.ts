import { Component, OnInit } from "@angular/core";

import { AuthService } from "../../auth/auth.service";
import { EmailService } from "../email.service";

import { Email } from "../interface/email";

@Component({
  selector: "app-email-create",
  templateUrl: "./email-create.component.html",
  styleUrls: ["./email-create.component.scss"],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;

  email: Email;

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: "",
      to: "",
      subject: "",
      html: "",
      text: "",
      from: `${authService.username}@angular-email.com`,
    };
  }

  ngOnInit(): void {}

  onSubmit(email: Email) {
    console.log(email);
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
