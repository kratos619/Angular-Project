import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertospace'
})
export class ConvertospacePipe implements PipeTransform {

  transform(value: string, character:string){
    return value.replace(character,' ');
  }

}
