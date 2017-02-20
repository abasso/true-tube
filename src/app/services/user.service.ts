import { Injectable } from '@angular/core'
import {AuthHttp} from 'angular2-jwt'

@Injectable()
export class UserService {

  constructor(
    private http: AuthHttp
  ) {}
  addToList(list, id) {
    this.http.post('http://api.truetube.co.uk/me/' + list + '/' + id, {})
      .subscribe(
        (data) => {
          if (data['message'] = 'item added') {
            return true
          }
        }
      )
  }
  removeFromList(list, id) {
    this.http.delete('http://api.truetube.co.uk/me/' + list + '/' + id)
      .subscribe(
        data => {
          if (data['message'] = 'item removed') {
            return true
          }
        }
      )
    }
    removeList(list) {
      this.http.delete('http://api.truetube.co.uk/me/' + list)
        .subscribe(
          data => {
            if (data['message'] = 'item removed') {
              return true
            }
          }
        )
      }
}
