import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-sport',
    templateUrl: './sport.component.html',
    styleUrls: ['./sport.component.sass']
})
export class SportComponent implements OnInit {
    @Input("state") state: string;

    constructor() { }

    ngOnInit(): void {
    }

}
