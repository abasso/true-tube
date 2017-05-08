import {Injectable} from '@angular/core'

@Injectable()
export class MetaService {
  constructor() {
  }
  setTitle = (renderer, title) => {
    renderer.setValue('title', 'cats')
  }

}
