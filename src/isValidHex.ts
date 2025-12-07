export function isValidHex(hexColor: string): boolean {
  const reg = /^#[0-9A-Fa-f]{6}$/g;

  return reg.test(hexColor);
}
