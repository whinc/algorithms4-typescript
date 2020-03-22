import {Stack} from '../data_structure/Stack.ts'

/**
 * 简单的算术表达式计算，每个算术操作必须用括号包裹
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
  if (!ops.isEmpty() || vals.size() > 1) throw new Error(`invalid expression: "${input}"`)
  return vals.pop()!
}

/**
 * 简单的算术表达式计算，每个算术操作必须用括号包裹
 * @param input 算术表达式，对分隔符没有要求，如`((10 + 2) * 3)`
 */
export function evaluate_v2 (input: string): number {
  const vals = new Stack<number>()
  const ops = new Stack<string>()
  let i = 0
  let offset = 1
  while (i < input.length) {
    let token = input[i]
    offset = 1

    // 处理数字
    if (/\d/.test(token)) {
      let cache = token
      let j = i + 1
      while (/\d/.test(input[j])) {
        cache += input[j++]
      }
      offset = j - i
      token = cache
    }
    // 处理 sqrt
    if (token === 's' && /sqrt/.test(input.substr(i, 4))) {
      token = 'sqrt'
      offset = 4
    }
    switch (token) {
      case ' ': break
      case '(': break
      case '+':
      case '-':
      case '*':
      case '/':
      case 'sqrt': ops.push(token); break
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
      default: token ? vals.push(parseFloat(token)) : void 0
    }
    console.log(`${i}: ${token}, ${vals}, ${ops}`)
    i += offset
  }
  if (!ops.isEmpty() || vals.size() > 1) throw new Error(`invalid expression: "${input}"`)
  return vals.pop()!
}