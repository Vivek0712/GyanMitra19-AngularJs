// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backend: {
    server: 'http://localhost:3000'
  },
  frontend: {
    server: 'http://localhost:4200/'
  },
  payment: {
    url: 'https://secure.payu.in/_payment',
    accomodation: 100,
    transcationFee: 0.04,
    productInfo:'GyanMitra19',
    key: 'AFqk4w'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
