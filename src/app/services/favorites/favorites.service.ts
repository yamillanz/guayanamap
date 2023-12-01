import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
// import {
//   Firestore,
//   collectionData,
//   collection,
//   CollectionReference,
//   DocumentData,
//   addDoc,
// } from '@angular/fire/firestore';

import { AngularFireDatabase } from '@angular/fire/compat/database';

import Place from 'src/app/components/places-select/models/place';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  getFavorites(): Observable<any> {
    return this.db.list('places').valueChanges();
  }

  async saveFavorites(data: Place[]) {
    const itemRef = this.db.object('places');
    await itemRef.set(data);
  }
}
