import {Stack} from '../data_structure/Stack.ts'

/**
 * 简单的算术表达式计算
 * @param input 算术表达式，操作数和操作符之间使用空白符分割，如`( ( 10 + 2 ) * 3 )`
 */
export function evaluate (input: string): number {
  const vals = new Stack<number>()
  const ops = new Stack<string>()
  for (const c of input.split(/\s+/).filter(v => v)) {
    switch (c) {
      case '(': break
      case '+':
      case '-':
      case '*':
      case '/':
      case 'sqrt': ops.push(c); break
      case ')': 
        const op = ops.pop()
        const v1 = vals.pop()!
        switch(op) {
          case '+': vals.push(vals.pop()! + v1); break
          case '-': vals.push(vals.pop()! - v1); break
          case '*': vals.push(vals.pop()! * v1); break
          case '/': vals.push(vals.pop()! / v1); break
          case 'sqrt': vals.push(Math.sqrt(v1)); break
          break
        }
      break
      default: c ? vals.push(parseFloat(c)) : void 0
    }
  }
  return vals.pop()!
}

/**
 * 简单的算术表达式计算
 * @param input 算术表达式，对分隔符没有要求，如`((10 + 2) * 3)`
 */
export function evaluate_v2 () {

}