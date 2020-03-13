import {Bag} from './Bag.ts'
import {assertEquals} from '../utils.ts'

Deno.test(function Bag_size() {
  const bag = new Bag<string>()
  bag.add('a')
  bag.add('b')
  bag.add('c')
  assertEquals(bag.size(), 3)
  assertEquals(bag.isEmpty(), false)
})

Deno.test(function Bag_is_empty() {
  const bag = new Bag<string>()
  bag.add('a')
  assertEquals(bag.isEmpty(), false)
})

Deno.test(function Bag_iterator() {
  const bag = new Bag<string>()
  bag.add('a')
  bag.add('b')
  bag.add('c')
  let str = ''
  for(const item of bag) {
    str += item
  }
  assertEquals(str, 'abc')
})