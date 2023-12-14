import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { firstValueFrom, Observable, tap } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { DataMapService } from 'src/app/services/data-map/data-map.service';
import Place from './models/place';

@Component({
  selector: 'app-places-select',
  templateUrl: './places-select.component.html',
  styleUrls: ['./places-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesSelectComponent implements OnInit {
  places: Place[] = [];
  places$: Observable<Place[]> = new Observable<Place[]>();

  @Output() coorsSelected: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private favoritesServices: FavoritesService,
    private mapaService: DataMapService,
    private cd: ChangeDetectorRef
  ) {}

  getDataFavorites() {
    this.places$ = this.favoritesServices.getFavorites().pipe(
      tap((data) => {
        this.places = data;
      })
    );
    // this.places$ = this.favoritesServices.getDataFavorites();
  }

  async ngOnInit() {
    this.getDataFavorites();
    // this.favoritesServices.saveFavorites([{ name: 'Llovizna', criteria: 'Llovizna' }]);
    // await this.favoritesServices.create({ name: 'Llovizna', criteria: 'Llovizna' });
  }

  async addFavorite($e: any, favorite: any) {
    $e.preventDefault();
    if (favorite.value) {
      const place: string = favorite.value;
      favorite.value = '';
      const favoriteValid = await firstValueFrom(this.mapaService.getInfoFromOverpass(place));
      if (favoriteValid) {
        this.coorsSelected.emit(place);
        const newFavorite: Place = { name: place, criteria: place };
        this.places.push(newFavorite);
        this.favoritesServices.saveFavorites(this.places);
        // console.log(this.places);
        // await firstValueFrom(this.favoritesServices.saveFavorites(this.places));
        // await this.favoritesServices.create(newFavorite);
        this.cd.detectChanges();
      }
    }
  }

  select_ciudad(event: any) {
    this.coorsSelected.emit(event.value);
  }
}
