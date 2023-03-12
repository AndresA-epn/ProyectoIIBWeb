import { Component, OnInit } from '@angular/core';
import { HeladoService } from '../../services/helado.service';
import { Global } from '../../services/global';
import { Helado } from '../../models/helado';


@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css'],
  providers: [HeladoService]
})
export class HeladosComponent implements OnInit {
  public helados: Helado[];
  public url: string;

  constructor(
    private _heladoService: HeladoService
  ) {
    this.url = Global.url;
    this.helados = [];
  }

  ngOnInit(): void {
    this.getHelados();
  }

  getHelados() {
    this._heladoService.getHelados().subscribe(
      response => {
        if (response.helados) {
          this.helados = response.helados;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
