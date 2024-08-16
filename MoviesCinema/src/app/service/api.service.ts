import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api/character/1,183';
  constructor(private http: HttpClient) { }

  public getdata(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public updateData(id: number, data: any): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put<any>(url, data);
  }

  // Eliminar un recurso específico
  public deleteData(id: number): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<any>(url);
  }

  // Crear un nuevo recurso (si aplica)
  public createData(data: any): Observable<any> {
    return this.http.post<any>(this.urlApi, data);
  }
}
