export const isObjectEmpty = (obj: object) => !Object.keys(obj).length;
export const isArrayEmpty = (array: Array<any>) => !array.length;
export const isAlreadyAddedToFavorites = (array: Array<any>, movieId: number) =>
  array.find((element: any) => element.id === movieId);
