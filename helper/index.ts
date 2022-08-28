export function getPosition(string: string, subString: string, index: number) {
  return string.split(subString, index).join(subString).length;
}

export function getStringFromErr(err: unknown) {
  const str = `${err}`;
  const newStr = str.substring(
    getPosition(str, ":", 4) + 1,
    getPosition(str, ":", 5)
  );
  return newStr;
}
