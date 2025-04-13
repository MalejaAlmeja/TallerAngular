import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  standalone: false,
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }
  getSeries() {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
    });
  }
  ngOnInit() {
    this.getSeries();
  }

}
