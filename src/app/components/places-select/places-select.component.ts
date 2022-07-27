import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  addFavorite($e: any, favorite: any) {
    // console.log($e.target);
    $e.preventDefault();
    console.log('text', favorite.value, favorite);
    favorite.value = '';
  }

  select_ciudad(event: any) {
    this.coorsSelected.emit(event.value);
    // console.log('tranas', this.coorsSelected);
  }
}
