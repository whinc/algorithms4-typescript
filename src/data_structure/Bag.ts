import {IBag} from './IBag.ts'

export class Bag<Item> implements IBag<Item> {
  private items: Item[] = []

  add(item: Item): void {
    this.items.push(item)
  }
  
  isEmpty(): boolean {
    return this.size() === 0
  }

  size(): number {
    return this.items.length
  }

  [Symbol.iterator](): Iterator<Item, any, undefined> {
    let i = 0
    return {
      next: () => {
        if (i < this.size()) return {value: this.items[i++]}
        else return {done: true, value: null}
      }
    }
  }
}