import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: unknown): { label: string, key: string }[] {
    if (typeof value !== 'object' || value === null) {
      return [];
    }

    return Object.entries(value).map(([key, values]) => ({
      label: `${key}: ${this.getConcatenatedValues(values)}`,
      key: key
    }));
  }

  private getConcatenatedValues(values: unknown[]): string {
    if (!Array.isArray(values) || values.length === 0) {
      return '';
    }

    return values.map((item: any) => item.name).join(', ');
  }
}
