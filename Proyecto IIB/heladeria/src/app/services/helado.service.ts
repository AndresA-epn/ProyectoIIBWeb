import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Helado } from '../models/helado';
import { Global } from '../services/global';
import { Observable } from 'rxjs';

@Injectable()
export class HeladoService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //ver informacion de todos los helado
    getHelados():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'helados',{headers:headers});
    }
    //guardar helado
    //http://localhost:3600/guardar-helado
    guardarHelado(helado:Helado):Observable<any>{
        let params=JSON.stringify(helado);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-helado',params,{headers:headers});
    }
    //obtener datos de un helado
    //http://localhost:3600/helado/:id
    getHelado(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'helado/'+id,{headers:headers});
    }
    //actualizar datos de un helado
    //http://localhost:3600/helado/:id
    updateHelado(helado:Helado):Observable<any>{
        let params=JSON.stringify(helado);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'helado/'+helado._id,params,{headers:headers});
    }
    //eliminar un helado
    //http://localhost:3600/helado/:id
    deleteHelado(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'helado/'+id,{headers:headers});
    }
}