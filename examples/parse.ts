import util from 'node:util';
import { parse } from '~/parse';

const regex = /^a(?<foo>z)[a-b]$/;
const tree = parse(regex);

console.log(regex);
console.log(util.inspect(tree, { depth: null, colors: true }));
// {
//   type: 'root',
//   value: '/^a(?<foo>z)[a-b]$/',
//   nodes: [
//     { type: 'slash', value: '/' },
//     { type: 'caret', value: '^' },
//     { type: 'text', value: 'a' },
//     {
//       type: 'paren',
//       value: '(?<foo>z)',
//       nodes: [
//         { type: 'left_paren', value: '(' },
//         { type: 'qmark', value: '?' },
//         {
//           type: 'angle',
//           value: '<foo>',
//           nodes: [
//             { type: 'left_angle', value: '<' },
//             { type: 'text', value: 'foo' },
//             { type: 'right_angle', value: '>' }
//           ]
//         },
//         { type: 'text', value: 'z' },
//         { type: 'right_paren', value: ')' }
//       ]
//     },
//     {
//       type: 'bracket',
//       value: '[a-b]',
//       nodes: [
//         { type: 'left_bracket', value: '[' },
//         { type: 'text', value: 'a-b' },
//         { type: 'right_bracket', value: ']' }
//       ]
//     },
//     { type: 'dollar', value: '$' },
//     { type: 'slash', value: '/' }
//   ]
// }
console.log(tree.print());
