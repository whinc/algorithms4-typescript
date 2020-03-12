import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import {add} from './add.ts'

Deno.test(function add1() {
  assertEquals(add(1, 2), 3)
})