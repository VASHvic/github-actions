export default function sum(...numbers: number[]) {
  return numbers.reduce((t, n) => t + n, 0);
}
