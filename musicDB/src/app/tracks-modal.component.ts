import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppserviceService } from './appservice.service';
import { Track } from './models/Track';

@Component({
  selector: 'app-tracks-modal',
  templateUrl: './tracks-modal.component.html',
  styleUrls: ['./tracks-modal.component.css']
})
export class TracksModalComponent implements OnInit {
  tracks: Track[];
  constructor(
    public dialogRef: MatDialogRef<MatDialog>,
    private appService: AppserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
   this.getTracks(this.data.album);
  }

  getTracks(id: string): void {
    this.appService.getTracks(id).subscribe(t => this.tracks = t);
  }

  close(): void {
    this.dialogRef.close();
  }

}
