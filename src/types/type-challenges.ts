/**
 * @see https://tsch.js.org/
 * @see https://github.com/type-challenges/type-challenges
 * what is mapped type?
 * keywords
 *  extends
 *  keyof
 *  in
 *  infer
 *  typeof
 *  string [] as const
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface IType {
  [index: string]: any;
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type TupleToObject<T extends any[]> = {
  [P in T[number]]: P;
};

type FirstOfArray<T extends any[]> = T['length'] extends 0 ? never : T[0];
type FirstOfArray2<T extends any[]> = T extends [infer K, ...(infer R)]
  ? K
  : never;

type Length<T> = T extends {
  length: infer L;
}
  ? L
  : never;

type typeEx = Exclude<'1' | '2', '1'>;

// error A mapped type may not declare properties or methods.
// interface IMyPick<T, K extends keyof T> {
//   [P in K]: T[P];
// }
