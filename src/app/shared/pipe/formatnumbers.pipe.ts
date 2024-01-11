import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumber implements PipeTransform {

  transform(count: number){

    if (count >= 10000000000) {
      return (count / 1000000000) + 'B';

    }else if (count >= 1000000) {
      return (count / 1000000) + 'M';

    }else if (count >= 1000) {
      return (count / 1000) + 'K';
      
    }else {
      return
    }
  }
}