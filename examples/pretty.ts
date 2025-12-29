/* eslint-disable no-control-regex */
import { parse } from '~/parse';

const regex = [
  /(\\d{4}-\\d{2}-\\d{2})/,
  /^(\\d{4}-\\d{2}-\\d{2})$/gimyu,
  // /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/gu,
  /(?:\[.*?(?<!\\)\]|\\(?<=.))/g,
  // /(?<foo>abc)/,
  // /([-*+?.^${}(|)[\]])/g,
  // /(\w+)-\1/,
  // /\p{Emoji_Presentation}/gu,
  // /abc|def|ghi/g,
  // /(?<!abc|def|ghi)/g,
  /(\+?\d{1,2}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/,
  /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/,
  /^https?:\/\/[^\s$.?#].[^\s]*$/,
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
];

console.log();
console.group();
for (const pattern of regex) {
  console.log(parse(pattern).print());
}
console.groupEnd();
console.log();
