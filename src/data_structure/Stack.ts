import {IStack} from './IStack.ts'

export class Stack<Item> implements IStack<Item> {
  private items: Item[] = []

  push(item: Item): void {
    this.items.push(item)
  }
  
  pop(): Item | undefined {
    return this.items.pop()
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