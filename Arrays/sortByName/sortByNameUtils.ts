export function sortByKey<T>(items: T[], key: keyof T): T[] {
  return items.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}
