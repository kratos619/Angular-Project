import { Component, EventEmitter, Output } from '@angular/core';
import { LoggStatusChange } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers : [LoggStatusChange]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggStatusChange) {
    
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.loggingService.logStat(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
