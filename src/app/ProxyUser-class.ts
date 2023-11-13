import { Injectable } from '@angular/core';
import { User } from './user-interface';
import { RealUser } from './RealUser-class';

@Injectable({
  providedIn: 'root',
})
export class ProxyUser implements User {

  private realUser: RealUser | null = null;
  private UserInfo: string | null = null;

  constructor(private realUserService: RealUser) { }

  async getInfo(value: number): Promise<string> {
    if (this.UserInfo) {
      console.log('view')
      return this.UserInfo;
    } else {
      if (!this.realUser) {
        this.realUser = this.realUserService;
      }
      const userInfo = await this.realUser.getInfo(value);
      this.UserInfo = userInfo;
      console.log('Create')
      return userInfo;
    }
  }

  removeUser(){
    this.UserInfo = null;
    console.log("Remove user")
  }
  
}
