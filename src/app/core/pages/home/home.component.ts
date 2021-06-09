import { Component, OnDestroy, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import {
  AccountInfo,
  AuthenticationResult,
  EventMessage,
  EventType,
} from '@azure/msal-browser';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


const baseAPIURL = environment.apiUri + '/api/';
const FUNCTION_ENDPOINT = baseAPIURL + 'TestTrigger?name=test';

export interface MyInterface {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  accountDisplayName = '';
  accountId = '';

  value: string;

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
        takeUntil(this._destroying$)
      )
      .subscribe({
        next: (result: EventMessage) => {
          console.log(result);
          const payload = result.payload as AuthenticationResult;
          this.authService.instance.setActiveAccount(payload.account);
          this.setLoginDisplay();
        },
        error: (error) => console.log(error),
      });

    this.setLoginDisplay();
  }

  getValue() {
    this.http.get<MyInterface>(FUNCTION_ENDPOINT).toPromise()
      .then(value => {
        if (value)
        {
          this.value = value.name;
        }
          
      });
  }

  callProfile () {
    this.http.get('https://graph.microsoft.com/v1.0/me').subscribe( resp  => {
      console.log(JSON.stringify(resp));
    })
  };


  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;

    if (this.loginDisplay)
    {
      const activeAccount: AccountInfo = this.authService.instance.getActiveAccount();

      if (activeAccount != null)
      {
        this.accountDisplayName = activeAccount.name;
        this.accountId = activeAccount.localAccountId;
      }

    }


  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
