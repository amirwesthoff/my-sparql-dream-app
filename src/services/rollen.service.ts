import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Triple } from '../assets/triple'

@Injectable({
  providedIn: 'root'
})

export class RollenService {

  constructor(private http: HttpClient) { }

  readonly URL = '/repositories/Sogeti';

  rollenQuery = `
                prefix sogcm: <http://www.sogeti.com/competentiemodel/>
                prefix person: <http://schema.org/person#>
                prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                SELECT ?o
                WHERE
                  { ?s rdf:label ?o .}
                `;
  
  getAlleRollen(): Observable<Triple[]> {

    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<Triple[]>(`${this.URL}?query=${encodeURIComponent(this.rollenQuery)}`, options)
    
  };

}
