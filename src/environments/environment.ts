// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL_NOMINATIM: 'https://nominatim.openstreetmap.org/search?q=',
  ADDITIONAL_PARAMS: '&format=json&polygon_geojson=1&addressdetails=1',
  URL_OVERPASS: `https://www.overpass-api.de/api/interpreter?data=[out:json][timeout:60][out:json][bbox:8.091660, -62.945233, 8.464149, -62.632713];node[!\"bus\"][!\"shop\"][!\"place\"][!\"parking\"][\"name\"~\"`,
  ADDITIONAL_OVER: `\", i];out body;`,
  URL_fAVORITES: 'https://appmaps-fe691-default-rtdb.firebaseio.com/datos.json',
};
