import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { HeladoService } from '../../services/helado.service';
import { Helado } from '../../models/helado';
import { Global } from '../../services/global';
import { CargarService } from '../../services/cargar.service';

@Component({
  selector: 'app-createhelado',
  templateUrl: './createhelado.component.html',
  styleUrls: ['./createhelado.component.css'],
  providers:[HeladoService,CargarService]
})
export class CreateheladoComponent implements OnInit {
  public titulo:string;
  public helado:Helado;
  public heladoGuardar:Helado;
  public url:string;
  public status:string;
  public idGuardado:string;
  public archivosParaCargar:Array<File>
  @ViewChild('archivoImagen') fileInput:any;

  constructor(
    private _heladoService:HeladoService,
    private _cargarService:CargarService
  ) {
    this.titulo="Ingresar Helado";
    this.url=Global.url;
    this.helado= new Helado('','','','',1,'');
    this.heladoGuardar= new Helado('','','','',1,'');
    this.status="";
    this.idGuardado="";
    this.archivosParaCargar=[];
   }

  ngOnInit(): void {
  }
  guardarHelado(form:NgForm){
    this._heladoService.guardarHelado(this.helado).subscribe(
      response=>{
        if(response.helado){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.helado._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.heladoGuardar=result.response;
              this.status='success';
              console.log(result.helado._id)
              this.idGuardado=result.helado._id;
              form.reset();
              this.fileInput.nativeElement.value='';
              });
            }else{
              this.status='failed';
            }
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }

}
