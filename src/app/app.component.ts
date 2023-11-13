import { Component } from '@angular/core';
import { ProxyUser } from './ProxyUser-class';
import { RealUser } from './RealUser-class';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  realUserInstance1 = new RealUser(this.http);
  proxyUserInstance1 = new ProxyUser(this.realUserInstance1);

  realUserInstance2 = new RealUser(this.http);
  proxyUserInstance2 = new ProxyUser(this.realUserInstance2);

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  async UserInfo(id_user: number, proxyUser: ProxyUser) {
    if (id_user == 1) {
      const data = await this.proxyUserInstance1.getInfo(id_user);
      console.log("userInfo1", data)
    }
    if (id_user == 2) {
      const data = await this.proxyUserInstance2.getInfo(id_user);
      console.log("userInfo2", data)
    }
  }

  UsersInfo(value: number) {
    if (value == 1) {
      this.UserInfo(value, this.proxyUserInstance1)
    } else {
      this.UserInfo(value, this.proxyUserInstance2)
    }
  }

  removeUser(value: number){
    if (value == 1) {
      this.proxyUserInstance1.removeUser();
    } else {
      this.proxyUserInstance2.removeUser();
    }
  }

}
