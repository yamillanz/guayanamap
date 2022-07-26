import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataMapService {
  constructor(private http: HttpClient) {}

  getInfoFromNominaTim(criteria: string): Observable<any> {
    return this.http.get<Observable<any>>(
      environment.URL_NOMINATIM + criteria + environment.ADITTIONAL_PARAMS
    );
  }
}
