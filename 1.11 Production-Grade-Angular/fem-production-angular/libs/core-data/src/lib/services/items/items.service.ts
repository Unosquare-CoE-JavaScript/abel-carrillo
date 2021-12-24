import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '@fem/api-interfaces';

const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
    model = 'items';

    constructor(private http: HttpClient) {}
  
    all() {
      return this.http.get<[]>(this.getUrl());
    }
  
    find(id: string) {
      return this.http.get<Item>(this.getUrlWithId(id));
    }
  
    create(item: Item) {
      return this.http.post(this.getUrl(), item);
    }
  
    update(item: Item) {
      return this.http.put(this.getUrlWithId(item.id), item);
    }
  
    delete(item: Item) {
      return this.http.delete(this.getUrlWithId(item.id));
    }
  
    private getUrl() {
      // return `${environment.apiEndpoint}${this.model}`;
      return `${API}${this.model}`;
    }
  
    private getUrlWithId(id) {
      return `${this.getUrl()}/${id}`;
    }
}
