import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component(
  {
    selector: 'status-component',
    templateUrl: './status.component.html',
    styleUrls: ['../../../assets/css/guard-app.css']
  }
)

export class StatusComponent implements OnInit {
    @Output()
    statusSaved: EventEmitter<string> = new EventEmitter();
    newStatus: number;
    statuses: string[] = ['Created', 'En Route', 'Working', 'Resolved', 'Closed'];

    public visible = false;
    private visibleAnimate = false;

    constructor () {}

    public show(): void {
      this.visible = true;
      setTimeout(() => this.visibleAnimate = true, 100);
    }

    public hide(): void {
      this.visibleAnimate = false;
      setTimeout(() => this.visible = false, 300);
    }

    public onContainerClicked(event: MouseEvent): void {
      if ((<HTMLElement>event.target).classList.contains('modal')) {
        this.hide();
      }
    }

    onSelectStatus ( statusName ) {
        this.newStatus = this.statuses.indexOf( statusName );
    }


    submitStatus () {
        console.log ( 'submitting status' );
        if ( this.newStatus == -1 ) {
           console.log('Please select a status');
        }
        if ( this.newStatus != -1 ) {
            console.log ( 'status id: ' + this.newStatus );
            const id = this.newStatus.toString();
            this.statusSaved.emit(id);
            this.hide();
        }
    }

    ngOnInit() {

    }
}
