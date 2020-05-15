import { Injectable } from "@angular/core";

import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";

import { EmailService } from "./email.service";

import { Email } from "./interface/email";
import { catchError } from "rxjs/Operators";
import { EMPTY } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private emailServie: EmailService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;

    return this.emailServie.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl("/inbox/not-found");
        return EMPTY;
      })
    );
  }
}
