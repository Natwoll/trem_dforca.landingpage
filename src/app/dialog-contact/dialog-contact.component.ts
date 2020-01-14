import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.scss']
})
export class DialogContactComponent implements OnInit {

  private contactNumber = '55519xxxxxxxx'
  private message = ``

  constructor() { }

  ngOnInit() {
  }

  public sendMessage(): void {
    const target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(this.contactNumber)}&text=${encodeURIComponent(this.message)}`
  }

}
