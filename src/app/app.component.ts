import { Component } from '@angular/core';
import { MatDialog } from '@angular/material'
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog) {}

  public openDialog() {
    this.dialog.open(DialogContactComponent);
  }

  public gotoContact() {
    window.location.href = "#contato-container";
  }
}
