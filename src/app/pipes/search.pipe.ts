import { Pipe, PipeTransform } from '@angular/core';
import { Tweets } from '../models/tweets';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,type:string,tweets:Tweets[], args?: any): any {
    if(!args){
      return value;
    }
   if(type.toLowerCase() == 'user') return value.filter((x)=>x['account']['fullname'].toLocaleLowerCase()==args.toLocaleLowerCase())
   if(type.toLowerCase() == 'hashtag') return value.filter(x=>x.hashtags.filter(y=>y.toLocaleLowerCase() == `#${args}`.toLocaleLowerCase()).length > 0);
   
  }

}