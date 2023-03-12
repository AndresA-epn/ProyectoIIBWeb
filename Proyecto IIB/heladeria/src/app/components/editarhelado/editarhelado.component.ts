import { Component, OnInit } from '@angular/core';
import { HeladoService } from '../../services/helado.service';
import { CargarService } from '../../services/cargar.service';
import { Helado } from '../../models/helado';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarhelado',
  templateUrl: './editarhelado.component.html',
  styleUrls: ['./editarhelado.component.css'],
  providers: [HeladoService, CargarService]
})
export class EditarheladoComponent implements OnInit {
  public titulo: string;
  public helado: Helado;
  public heladoGuardar: Helado;
  public url: string;
  public archivosParaCargar: Array<File>;
  public status: string;
  public idGuardado: string;

  constructor(
    private _heladoService: HeladoService,
    private _cargarService: CargarService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.titulo = "EDITAR HELADO";
    this.url = Global.url;
    this.helado = new Helado('','','','',1,'');
    this.heladoGuardar = new Helado('','','','',1,'');
    this.archivosParaCargar = [];
    this.status = "";
    this.idGuardado = "";
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
      this.getHelado(id);
    })
  }

  getHelado(id: String) {
    this._heladoService.getHelado(id).subscribe(
      response => {
        this.helado = response.helado;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  guardarHelado(form: NgForm) {
    this._heladoService.updateHelado(this.helado).subscribe(
      response => {
        if (response.helado) {
          if (this.archivosParaCargar) {
            this._cargarService.peticionRequest(Global.url + "subir-imagen/" + response.helado._id, [], this.archivosParaCargar, 'imagen')
              .then((result: any) => {
                this.heladoGuardar = result.response;
                this.status = 'success';
                form.reset();
                //this.fileInput.nativeElement.value='';
              });
          } else {
            this.heladoGuardar = response.helado;
            this.status = 'success';
            form.reset();
          }
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  imagenChangeEvent(archivoSeleccionado: any) {
    this.archivosParaCargar = <Array<File>>archivoSeleccionado.target.files;
  }


}
