import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { firstValueFrom, Observable, tap } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

interface Place {
  name: string;
  coordinates?: string;
  criteria?: string;
}

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
  constructor(private favoritesServices: FavoritesService) {}

  getDataFavorites() {
    this.places$ = this.favoritesServices.getFavorites().pipe(
      tap((data) => {
        console.log('places', data);
        this.places = data;
      })
    );
  }

  ngOnInit(): void {
    this.getDataFavorites();
  }

  async addFavorite($e: any, favorite: any) {
    $e.preventDefault();
    const newFavorite: Place = { name: favorite.value, criteria: favorite.value };
    favorite.value = '';
    this.places.push(newFavorite);
    // console.log(this.places);
    await firstValueFrom(this.favoritesServices.saveFavorites(this.places));
  }

  select_ciudad(event: any) {
    this.coorsSelected.emit(event.value);
    // console.log('tranas', this.coorsSelected);
  }
}
