import { Component, Input } from '@angular/core';

@Component({
  selector: 'status-msg',
  templateUrl: 'status-message.html',
  styleUrls: ['status-message.css']
})
export class StatusMessageComponent {
  @Input() message: string;
  @Input() success: boolean;
}
