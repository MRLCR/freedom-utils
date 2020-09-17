type ArrayItem = number | string;

export interface Search {
  (arr: ArrayItem[], target: ArrayItem): number;
}
