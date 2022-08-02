import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  Firestore,
  collectionData,
  collection,
  CollectionReference,
  DocumentData,
  addDoc,
} from '@angular/fire/firestore';
import Place from 'src/app/components/places-select/models/place';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private placeCollection: CollectionReference<DocumentData>;

  constructor(private http: HttpClient, private firestore: Firestore) {
    this.placeCollection = collection(this.firestore, 'places');
  }

  getFavorites(): Observable<any> {
    return this.http.get(environment.URL_fAVORITES);
  }
  saveFavorites(data: any) {
    return this.http.put(environment.URL_fAVORITES, data);
  }

  getDataFavorites(): Observable<Place[]> {
    const mycollection: any = collection(this.firestore, 'places');
    return collectionData(mycollection);
    // let item$: Observable<Place[]>;
    // item$ = collectionData(mycollection);
    // item$.subscribe((data) => console.log('data', data));
  }

  create(place: Place) {
    return addDoc(this.placeCollection, place);
  }
}
