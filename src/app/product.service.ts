import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  constructor(private _http: HttpClient) { }

  /**
   * Get album by id
   * @param id
   */
  getAlbum(id: number) {
    return this._http.get('../assets/album.json');
  }
}
