export interface IStack<Item> extends Iterable<Item>{
  push(item: Item): void
  pop(): Item | undefined
  isEmpty(): boolean
  size(): number
}