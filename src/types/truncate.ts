export default function truncate(str: string, num: number, middle: boolean = false, maskChar: string = ".") {
    if (str.length <= num) return str;
  
    if (middle) {
      const leftLen = Math.floor((num - 3) / 2);
      const rightLen = Math.ceil((num - 3) / 2);
      return str.slice(0, leftLen) + maskChar.repeat(3) + str.slice(-rightLen);
    }
  
    return str.slice(0, num - 3) + maskChar.repeat(3);
  }