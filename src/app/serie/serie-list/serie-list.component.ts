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
  promedioTemporadas: number = 0;
  nombreSerie: string = '';
  descripcionSerie: string = '';
  urlSerie: string = '';
  imagenSerie: string = '';
  visibilidad: boolean = false;

  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
    });
  }
  mostrarSerie(serie:Serie){
    this.nombreSerie = serie.name;
    this.descripcionSerie = serie.description;
    this.urlSerie = serie.webpage;
    this.imagenSerie = serie.poster;
    this.visibilidad = true;
  }

  calcularPromedioTemporadas(){
    let total = 0;
    this.series.forEach(serie => {
      total += serie.seasons;
    });
    return total / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
    this.promedioTemporadas = this.calcularPromedioTemporadas();
  }

}
