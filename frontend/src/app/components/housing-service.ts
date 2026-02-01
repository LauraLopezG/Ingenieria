import { Injectable } from '@angular/core';
import { HousingLocationInterface } from './housing-location-interface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocationInterface[] = [
  ];
  getAllHousingLocations(): HousingLocationInterface[] {
    return this.housingLocationList;
  }
  getHousingLocantionById(id:number): HousingLocationInterface | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}