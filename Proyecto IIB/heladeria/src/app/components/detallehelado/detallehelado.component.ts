import { Component, OnInit } from '@angular/core';
import { HeladoService } from '../../services/helado.service';
import { Helado } from '../../models/helado';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-detallehelado',
  templateUrl: './detallehelado.component.html',
  styleUrls: ['./detallehelado.component.css'],
  providers:[HeladoService]
})
export class DetalleheladoComponent implements OnInit {
  public url:string;
  public helado:Helado;
  public confirm:boolean;

  constructor(
    private _heladoService:HeladoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url=Global.url;
    this.helado=new Helado('','','','',1,'');
    this.confirm=false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
      console.log(id);
      this.getHelado(id);
    });
  }

  getHelado(id:String){
    this._heladoService.getHelado(id).subscribe(
      response=>{
        this.helado=response.helado;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  setConfirm(confirm:boolean){
    this.confirm=confirm;
  }

  borrarHelado(id:String){
    this._heladoService.deleteHelado(id).subscribe(
      response=>{
        if(response.helado){
          this._router.navigate(['/helados']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
