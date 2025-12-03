export function isValidHex(hexColor: string): boolean {
  const reg = /#[A-Za-z0-9]{6}/g;

  return reg.test(hexColor);
}
