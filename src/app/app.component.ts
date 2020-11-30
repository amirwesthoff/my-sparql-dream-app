import { Component } from '@angular/core';
// import these
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { personenQuery } from '../assets/queries';
import { jobTitleQuery } from '../assets/queries';
import { sogetistenQuery } from '../assets/queries';
import { rollenQuery } from '../assets/queries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  // initialize variable for URL repo
  readonly URL = '/repositories/Sogeti';

  // declare variable to hold query results
  resources: any;
  jobTitles: any;
  sogetisten: any;
  rollen: any;

  // initialize instance of httpClient
  constructor(
    private http: HttpClient
  ) {}
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getResources();
    }
  // function to get RDF based on imported query
  getResources() {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    this.http
      .get(
        `${this.URL}?query=${encodeURIComponent(personenQuery)}`,
        options
      )
      .subscribe(data => {
        this.resources = data;
      });
  }

  getjobTitles() {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    this.http
      .get(
        `${this.URL}?query=${encodeURIComponent(jobTitleQuery)}`,
        options
      )
      .subscribe(data => {
        this.jobTitles = data;
      });
  }

  getRollen() {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    this.http
      .get(
        `${this.URL}?query=${encodeURIComponent(rollenQuery)}`,
        options
      )
      .subscribe(data => {
        this.rollen = data;
      });
  }

  getSogetisten() {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    this.http
      .get(
        `${this.URL}?query=${encodeURIComponent(sogetistenQuery)}`,
        options
      )
      .subscribe(data => {
        this.sogetisten = data;
      });
  }

}
