import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpercasePipe implements PipeTransform {
  transform(value:string, metadata: ArgumentMetadata) {
    return value.toUpperCase()
  }
}
