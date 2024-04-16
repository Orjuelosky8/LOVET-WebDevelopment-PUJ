import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8090/clientes/all');
  }

  findById(id:number): Observable<Cliente>{
    const cliente = this.http.get<Cliente>("http://localhost:8090/clientes/find/" + id);
    return cliente;
  }

  deleteById(id:number){
    console.log("ID:" + id)
    this.http.delete("http://localhost:8090/clientes/delete/" + id).subscribe();
  }

  addStudent(cliente:Cliente){
    this.http.post("http://localhost:8090/clientes/add", cliente).subscribe();
  }
}

