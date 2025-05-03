export const formatStr = (str: string, template: string) => {
  const newStr = Array.from(template);
  const splice = newStr.indexOf("_");

  if (splice >= 0) {
    newStr[splice] = str;
    return newStr.join("");
  }

  for (const char of str) {
    const replace = newStr.indexOf("x");
    if (replace < 0) return str;
    newStr[replace] = char;
  }

  return newStr.join("");
};
