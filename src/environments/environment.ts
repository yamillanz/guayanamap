// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  URL_NOMINATIM: 'https://nominatim.openstreetmap.org/search?q=',
  ADDITIONAL_PARAMS: '&format=json&polygon_geojson=1&addressdetails=1',

  FILTER_NODE: 'node[!"bus"][!"shop"][!"place"][!"parking"]["name"~"',
  URL_OVERPASS: `https://z.overpass-api.de/api/interpreter?data=[out:json][timeout:60][out:json][bbox:8.091660, -62.945233, 8.464149, -62.632713];`,
  ADDITIONAL_OVER: `\", i];out body;`,

  URL_fAVORITES: 'https://mapguayana-default-rtdb.firebaseio.com/datos.json',

  firebaseConfig: {
    apiKey: 'AIzaSyCJ6pkM9cODikmsXJeChi7hhwW7JlM382Y',
    authDomain: 'mapguayana.firebaseapp.com',
    projectId: 'mapguayana',
    storageBucket: 'mapguayana.appspot.com',
    messagingSenderId: '781773889460',
    appId: '1:781773889460:web:04b8d02e235dd78ed75ce1',
  },
};
