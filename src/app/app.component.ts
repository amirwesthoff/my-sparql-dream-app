import { Component } from '@angular/core';
// import these
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { query } from '../assets/queries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  // initialize variable for URL repo
  readonly URL = '/repositories/world';

  // declare variable to hold query results
  resources: any;

  // initialize instance of httpClient
  constructor(
    private http: HttpClient
  ) {}

  // function to get RDF based on imported query
  getResources() {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    this.http
      .get(
        `${this.URL}?query=${encodeURIComponent(query)}`,
        options
      )
      .subscribe(data => {
        this.resources = data;
      });
  }

}
