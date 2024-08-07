import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    {{users | async | json}}
  `
})
export class UsersComponent {
  private http = inject(HttpClient);

  public users = this.http.get('https://{yourOktaDomain}/api/v1/users');

}
