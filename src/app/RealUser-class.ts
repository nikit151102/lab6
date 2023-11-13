import { Injectable } from '@angular/core';
import { User } from './user-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RealUser implements User {

  constructor(private http: HttpClient) { }

  getInfo(id_user: number): Promise<string> {
    const params = { id_user: id_user };
    return this.http.post<any>(`http://localhost:8000/GetUser`, params)
      .toPromise()
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }
}
