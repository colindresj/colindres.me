export const isDarkMode = (): Boolean => {
  if (!global.matchMedia) return false;

  return global.matchMedia('(prefers-color-scheme: dark)').matches
}
