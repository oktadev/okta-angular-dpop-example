import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { defer } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    {{userinfo | async | json}}
  `
})
export class ProfileComponent {
  private oktaAuth = inject(OKTA_AUTH);

  public userinfo = defer(() => this.oktaAuth.token.getUserInfo());

}
