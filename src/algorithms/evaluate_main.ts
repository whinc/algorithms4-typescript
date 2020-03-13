import {evaluate} from './evaluate.ts'

const data = Deno.readAllSync(Deno.stdin);
const decoder = new TextDecoder("utf-8");
const input = decoder.decode(data)

console.log(input, '=', evaluate(input))