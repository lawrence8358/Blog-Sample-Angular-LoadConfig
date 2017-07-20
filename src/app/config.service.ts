import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ConfigService {

  private _config: any;

  //提供姓名
  get name() {
    return !this._config ? "沒載入成功" : this._config.name;
  }

  constructor(private http: Http) {
    console.log("ConfigService constructor");
  }

  //供第一次讀取config時呼叫，之後就不會使用到了
  load() {
    console.log("ConfigService load");
    return this.http.get('assets/config.json')
      .map(res => res.json())
      .toPromise()
      .then(data => {
        this._config = data;
        return data;
      })
  }
}
