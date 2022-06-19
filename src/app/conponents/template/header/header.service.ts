import {  headerData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class headerService {
private  _headerData = new BehaviorSubject<headerData>({
    title: 'E-comerce | Nexus |',
    icon:'home',
    routeUrl: ''

    
  })

  constructor() { }

  get headerData(): headerData {
    return this._headerData.value
  }
    set headerData(headerData: headerData){
    this._headerData.next(headerData)
    
  }
}
