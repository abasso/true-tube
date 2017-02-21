import { Injectable } from '@angular/core'
import {AuthHttp} from 'angular2-jwt'

@Injectable()
export class UserService {

  constructor(
    private http: AuthHttp
  ) {}
  addToList(list, id) {
    this.http.post('https://www.truetube.co.uk/v5/api/me/' + list + '/' + id, {})
      .subscribe(
        (data) => {
          if (data['message'] = 'item added') {
            return true
          }
        }
      )
  }
  removeFromList(list, id) {
    this.http.delete('https://www.truetube.co.uk/v5/api/me/' + list + '/' + id)
      .subscribe(
        data => {
          if (data['message'] = 'item removed') {
            return true
          }
        }
      )
    }
    removeList(list) {
      this.http.delete('https://www.truetube.co.uk/v5/api/me/' + list)
        .subscribe(
          data => {
            if (data['message'] = 'item removed') {
              return true
            }
          }
        )
      }
}
