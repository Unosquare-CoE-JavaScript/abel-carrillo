import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false, // can lead to perfomance issues, the pipe now gets recalculated
  //whenever data changes
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string) {
    if (value.length === 0 || filterString === "") {
      return value;
    }
    const resArray = [];

    for (const item of value) {
      if (item[propName] === filterString) {
        resArray.push(item);
      }
    }
    return resArray;
  }
}
