/* eslint-disable @typescript-eslint/array-type */
interface Array<T> {
  flat(): Array<T>
  flatMap(func: (x: T) => T): Array<T>
}
