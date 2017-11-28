import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WSService } from '../../service/ws.service';

@Component({
    templateUrl: './ws.component.html',
    providers: [WSService],
    
})

export class WSComponent {

    constructor(
        private wsService: WSService,
    ) {}

    onClick() {
        this.wsService.GetInstanceStatus().subscribe(
            (responseData: any) => {
                console.log(responseData);
            },
            (error) => {

            },
            () => {

            }
        );
    }
}