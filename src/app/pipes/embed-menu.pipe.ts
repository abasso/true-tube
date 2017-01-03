import { Pipe, PipeTransform } from '@angular/core'
import { ContentTypes } from './../definitions/content-types'
import _ from 'lodash'

@Pipe({
  name: 'EmbedMenuPipe'
})
export class EmbedMenuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let embedMenu: any[] = []
    _.each(value, (embed, index) => {
      let type = _.find(ContentTypes, {term: embed.type})
      type.tabLabel = (embed.count === 1) ? _.trimEnd(type.label, 's') : type.label
      type.active = (index === 0) ? true : false
      embedMenu.push(type)
    })
    return (embedMenu.length > 1) ? embedMenu : null
  }

}
