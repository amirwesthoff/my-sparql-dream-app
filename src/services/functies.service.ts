import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Triple } from '../assets/triple'

@Injectable({
  providedIn: 'root'
})

export class FunctiesService {

  constructor(private http: HttpClient) { }

  readonly URL = '/repositories/Sogeti';

  functiesQuery = `
                  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                  prefix sogpeople: <http://www.sogeti.com/people/>
                  prefix organization: <http://schema.org/organization#>
                  prefix person: <http://schema.org/person#>
                  SELECT ?jobTitle
                  WHERE
                    { ?s person:jobTitle ?jobTitle .}
                  `;

  getFuncties(): Observable<Triple[]> {

    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<Triple[]>(`${this.URL}?query=${encodeURIComponent(this.functiesQuery)}`, options)
  };
  
}
