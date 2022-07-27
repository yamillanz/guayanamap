import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  getFavorites(): Observable<any> {
    return this.http.get(environment.URL_fAVORITES);
  }
  saveFavorites(data: any) {
    return this.http.put(environment.URL_fAVORITES, data);
  }
}
