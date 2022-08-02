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

import { AngularFireDatabase } from '@angular/fire/compat/database';

import Place from 'src/app/components/places-select/models/place';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  // private placeCollection: CollectionReference<DocumentData>;

  constructor(
    private http: HttpClient,
    // private firestore: Firestore,
    private db: AngularFireDatabase
  ) {
    // this.placeCollection = collection(this.firestore, 'places');
  }

  getFavorites(): Observable<any> {
    // return this.http.get(environment.URL_fAVORITES);
    return this.db.list('places').valueChanges();
  }

  async saveFavorites(data: Place[]) {
    const itemRef = this.db.object('places');
    await itemRef.set(data);
    // return this.http.put(environment.URL_fAVORITES, data);
  }

  // getDataFavorites(): Observable<Place[]> {
  //   const mycollection: any = collection(this.firestore, 'places');
  //   return collectionData(mycollection);
  // }

  // create(place: Place) {
  //   return addDoc(this.placeCollection, place);
  // }
}
