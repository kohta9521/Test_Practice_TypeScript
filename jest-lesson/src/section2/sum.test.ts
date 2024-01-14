import { sum } from "./sum";

it.each`
  a     | b     | expected
  ${1}  | ${2}  | ${3}
  ${1}  | ${-2} | ${-1}
  ${-1} | ${-2} | ${-3}
`("$aと$bを足すと$expectedになる", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
