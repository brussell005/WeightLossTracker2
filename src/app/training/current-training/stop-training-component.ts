import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-stop-training',
	template: `<h1 mat-dialog-title>Are you sure?</h1>
            <mat-dialog-content>
                <p>You have completed {{ passedData.progress }}%</p>
              <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true">Yes(Quit)</button>
                <button mat-button [mat-dialog-close]="false">Nevermind, I think I can keep going!(Resume)</button>
              </mat-dialog-actions>`
})
export class StopTrainingComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}
