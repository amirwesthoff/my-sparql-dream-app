import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Triple } from '../assets/triple'

@Injectable({
  providedIn: 'root'
})

export class MedewerkersService {

  constructor(private http: HttpClient) { }

  readonly URL = '/repositories/Sogeti';

  medewerkersQuery = `
                      PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                      prefix sogpeople: <http://www.sogeti.com/people/>
                      prefix org: <http://schema.org/organization#>
                      prefix person: <http://schema.org/person#>
                      SELECT ?wie ?organisatie
                      WHERE
                        { ?wie org:employee ?organisatie .}
                      `;

  getMedewerkers(): Observable<Triple[]> {

    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<Triple[]>(`${this.URL}?query=${encodeURIComponent(this.medewerkersQuery)}`, options)
  };
  
}
