export interface IBag<Item> extends Iterable<Item>{
  add(item: Item): void
  isEmpty(): boolean
  size(): number
}