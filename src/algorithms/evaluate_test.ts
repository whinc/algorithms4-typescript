import {evaluate, evaluate_v2} from './evaluate.ts'
import {assertEquals} from '../utils.ts'

Deno.test(function test_evaluate_v1 () {
  assertEquals(evaluate('( ( 10 + 2 ) * 3 )'), 36)
})

Deno.test(function test_evaluate_v2 () {
  assertEquals(evaluate_v2('((sqrt((10 + 6)) * sqrt((100/4))) * 2)'), 40)
})