import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {add} from './index.ts'

Deno.test(function add1() {
  assertEquals(add(1, 2), 3)
})

Deno.test(function add2 () {
  assertEquals(add(1, 2), 4)
})