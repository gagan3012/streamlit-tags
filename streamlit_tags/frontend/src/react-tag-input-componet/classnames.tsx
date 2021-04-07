/**
 * A minimal utility to combine classes
 *
 * @export
 * @param {(string[] | string)} obj
 * @returns {string}
 */
export default function cc(...obj: (string | number)[]): string {
  return obj.join(" ");
}