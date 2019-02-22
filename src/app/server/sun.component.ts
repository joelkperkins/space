import { Component } from '@angular/core';

@Component({
    selector: 'app-sun',
    templateUrl: './sun.component.html',
    styleUrls: ['./sun.component.css']
})
export class SunComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}
